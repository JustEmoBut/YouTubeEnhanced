// The lazy render setting is CSS-only, so what can silently break is the wiring:
// the storage key, the it-* attribute derived from it, and the locale entries.

const fs = require('fs');
const path = require('path');

const read = p => fs.readFileSync(path.join(__dirname, '../../', p), 'utf8');

describe('Lazy render', () => {
	const css = read('js&css/extension/www.youtube.com/general/general.css');
	const menu = read('menu/skeleton-parts/general.js');

	test('storage key matches the attribute the CSS keys on', () => {
		// extension.storage.load turns lazy_render into it-lazy-render
		expect(menu).toContain('lazy_render: {');
		expect(css).toContain("html[it-lazy-render='true']");
	});

	test('covers every surface that renders a long list', () => {
		const selectors = [
			'ytd-rich-item-renderer', // home, subscriptions, channel grids
			'ytd-video-renderer', // search results
			'ytd-compact-video-renderer', // watch sidebar (legacy markup)
			'#related yt-lockup-view-model', // watch sidebar (current markup)
			'ytd-playlist-video-renderer', // playlist pages
			'ytd-comment-thread-renderer' // comments
		];
		for (const selector of selectors) {
			expect(css).toContain(`html[it-lazy-render='true'] ${selector}`);
		}
	});

	test('every rule sizes its placeholder', () => {
		// Without contain-intrinsic-size an off-screen element collapses to zero
		// height and the scrollbar jumps while scrolling.
		const blocks = css.split("html[it-lazy-render='true']").slice(1).join('');
		const contentVisibility = (blocks.match(/content-visibility:\s*auto/g) || []).length;
		const intrinsicSize = (blocks.match(/contain-intrinsic-size:\s*auto/g) || []).length;
		expect(contentVisibility).toBeGreaterThan(0);
		expect(intrinsicSize).toBe(contentVisibility);
	});

	test('is labelled and explained in English and Turkish', () => {
		expect(menu).toContain("text: 'lazyRender'");
		for (const locale of ['en', 'tr']) {
			const messages = JSON.parse(read(`_locales/${locale}/messages.json`));
			expect(messages.lazyRender.message).toBeTruthy();
			expect(messages.lazyRender_description.message).toBeTruthy();
		}
	});
});
