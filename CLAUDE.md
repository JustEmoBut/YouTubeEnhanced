# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Manifest V3 browser extension (fork of ImprovedTube / code4charity) that customizes youtube.com. No bundler, no
transpiler, no framework: plain JS files listed literally in `manifest.json` and `menu/index.html`. Editing a file is
enough — there is no build step for development.

## Commands

```bash
npm test                                  # Jest, all suites under tests/
npx jest tests/unit/sticky-navigation     # one suite (substring match on path)
npx jest -t "collapses the guide"         # one test by name
npm run lint                              # ESLint (config re-exported from tests/eslint_rules.config.mjs)
python build/build.py                     # produce store zips (Chromium + Firefox); dev does not need this
```

CI (`.github/workflows/eslint_csslint_jest.yml`) runs lint + Jest on push to `master` and `feature/*`.

**Loading it in Chrome:** `chrome://extensions` → Developer mode → Load unpacked → repo root. After changing any file,
press reload (⟳) on the extension card, then reload the YouTube tab.

## Architecture

Three JS contexts, and knowing which one you are in is the single most important thing:

| Context | Global | Files | Can do |
|---|---|---|---|
| Service worker | — | `background.js` | `chrome.*` APIs, tabs, context menus, settings migration |
| Content script (isolated world) | `extension` | `js&css/extension/**` | `chrome.storage`, `chrome.runtime`; **cannot** touch YouTube's player object |
| Page world (MAIN) | `ImprovedTube` | `js&css/web-accessible/**` | YouTube internals (`ytd-app`, player API, `localStorage`); **no** `chrome.*` |

`js&css/extension/init.js` is the entry point. It injects the page-world files via `extension.inject()`
(Safari takes a different path through the service worker), then fires the `init` event, at which point every
`extension.features.*` function runs.

### Settings pipeline

One user setting flows through all three contexts:

```
menu (satus.storage) → chrome.storage.local
   → background.js + content script listeners
   → extension.storage.data[key]
   → <html it-key-with-dashes="value">      ← CSS-only features read this
   → DOM-bridge message to page world
   → ImprovedTube.storage[key] + ImprovedTube[camelizedKey]()   ← JS features re-run
```

Consequences when adding a feature:

- **Purely visual?** Write only a CSS rule keyed on `html[it-my-feature='true']` in the relevant
  `js&css/extension/www.youtube.com/**/*.css` and register the file in `manifest.json`. No JS at all. The switch still
  needs a node in the matching `menu/skeleton-parts/*.js` plus `<key>` and `<key>_description` in `_locales/en` (and
  `tr`); the `_description` suffix is what satus turns into the tooltip.
- **Needs JS?** Name the function exactly the camelCase form of the storage key (`hide_ai_summary` →
  `ImprovedTube.hideAiSummary`) so the storage listener can re-invoke it on change without extra wiring
  (`js&css/web-accessible/core.js`, `storage-changed` branch).
- New page-world files must be added to **both** `manifest.json` `web_accessible_resources` **and** the `pageWorldFiles`
  array in `js&css/extension/init.js`. Missing either one fails silently.
- `extension.inject()` appends every file at once and relies on `script.async = false` for ordering: the files download
  in parallel but execute in list order, which is what keeps `core.js` ahead of `init.js`. Dynamically inserted scripts
  are async by default, so dropping that line silently breaks the dependency chain.

### Cross-context messaging

The two content worlds cannot call each other, so they talk through two hidden `<div>`s and custom events:
`#it-messages-from-extension` / `#it-messages-from-youtube`, with `it-message-from-*` and `...--readed` events as the
handshake (`extension.messages.*` / `ImprovedTube.messages.*`). Messages are JSON strings and queued — one in flight at
a time. Everything that needs a `chrome.*` API from the page world (blocklist writes, watched-video tracking, popup
resizing) round-trips through this bridge into `js&css/extension/init.js`'s `it-message-from-youtube` handler.

### Menu / options UI

`menu/` is the popup, the options page and the side panel (all three point at `menu/index.html`). It is built on
**satus** (`menu/satus.js`), a homegrown declarative UI framework: you describe a nested plain object of
`{component: 'button', on: {...}}` nodes and `satus.render()` walks it. `menu/skeleton.js` defines the shell;
`menu/skeleton-parts/*.js` each attach one section (player, appearance, shortcuts, …) onto `extension.skeleton`. Adding
a settings row means adding an object to the right skeleton part and a script tag in `menu/index.html` if it is a new
file — the `storage` key on the node is what binds it to `chrome.storage.local`.

### i18n

`_locales/<lang>/messages.json`, ~50 languages, loaded by `satus.locale.import` (menu) and `background.js` (rest).
Only `en` is authoritative; the others come from Crowdin (`build/crowdin.yml`). UI strings are referenced by message
key, never hardcoded.

## Testing

`tests/unit/*.test.js` — one file per feature, Node-only. There is no jsdom: each test hand-mocks `global.document`,
`global.extension` / `global.ImprovedTube` and asserts on the mock calls. Follow the existing pattern rather than
introducing a DOM environment. Feature files are plain scripts (no exports), so tests typically `eval`/`require` them
against the mocked globals.

Anything touching the real YouTube player cannot be unit-tested and has to be checked by hand in a loaded extension.

## Conventions

- Tabs for indentation, LF, final newline (`.editorconfig`); the codebase is ES5-flavored (`var`, `function`) with
  modern syntax used sparingly — match the file you are editing.
- Storage keys are `snake_case`; DOM attributes derived from them are `it-kebab-case`; the JS function is `camelCase`.
- Section banner comments (`/*----- # NAME -----*/`) with a table of contents at the top of each file are the house
  style; keep them in sync when adding a section.
- YouTube ships two spellings of its button-shape classes (BEM `yt-spec-button-shape-next__icon` and camelCase
  `ytSpecButtonShapeNextIcon`) and two thumbnail markups (`ytd-thumbnail` and `yt-thumbnail-view-model`). Selectors keep
  both variants side by side rather than replacing one with the other — surfaces and A/B buckets differ.
- `content-visibility: auto` always ships with a `contain-intrinsic-size: auto <length>` measured from the real
  element, not guessed — an undersized placeholder collapses the page height and makes the scrollbar jump (a 120px
  guess under a 244px sidebar card shrank a watch page by 43%).
- A feature that installs listeners, observers or timers needs a re-entry guard: the storage listener re-invokes feature
  functions by name on every settings change, and features that listen for `yt-page-data-updated` re-enter themselves.
- This is a fork with an active upstream — prefer minimal, local diffs so merges stay cheap.
