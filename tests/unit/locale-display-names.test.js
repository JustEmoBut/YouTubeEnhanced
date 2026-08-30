/**
 * Country and language labels are resolved from the browser's ICU data via
 * `region:` / `language:` prefixes instead of translated strings, so these
 * cover the prefix contract and the fallbacks around it.
 */

const fs = require('fs');
const path = require('path');

global.chrome = {
	runtime: { getURL: (url) => url }
};

// satus.js is a plain browser script declaring `var satus`, which stays
// module-local under require(); indirect eval puts it on the global instead.
(0, eval)(fs.readFileSync(path.join(__dirname, '../../menu/satus.js'), 'utf8'));

describe('satus.locale.get', () => {
	beforeEach(() => {
		satus.locale.code = '';
		satus.locale.data = {};
		satus.locale.displayNames = {};
	});

	test('resolves region codes through ICU in the active menu language', () => {
		satus.locale.code = 'en';
		expect(satus.locale.get('region:BA')).toBe('Bosnia & Herzegovina');

		satus.locale.code = 'tr';
		satus.locale.displayNames = {};
		expect(satus.locale.get('region:BA')).toBe('Bosna-Hersek');
	});

	test('resolves language codes the same way', () => {
		satus.locale.code = 'tr';
		expect(satus.locale.get('language:af')).toBe('Afrikaanca');
	});

	test('prefers a translated string over the ICU lookup', () => {
		satus.locale.data['region:BA'] = 'Custom label';
		expect(satus.locale.get('region:BA')).toBe('Custom label');
	});

	test('falls back to the bare code when ICU does not know it', () => {
		satus.locale.code = 'en';
		expect(satus.locale.get('region:ZZZZ')).toBe('ZZZZ');
	});

	test('leaves unprefixed keys behaving exactly as before', () => {
		satus.locale.data.hideTopLoadingBar = 'Hide top loading bar';
		expect(satus.locale.get('hideTopLoadingBar')).toBe('Hide top loading bar');
		expect(satus.locale.get('someMissingKey')).toBe('someMissingKey');
	});
});

describe('skeleton option lists', () => {
	test('every country option carries a region: label matching its ISO code', () => {
		const source = fs.readFileSync(
			path.join(__dirname, '../../menu/skeleton-parts/general.js'), 'utf8');
		const entries = [...source.matchAll(/\{ text: "([^"]+)", value: "([A-Z]{2})" \}/g)];

		expect(entries.length).toBeGreaterThan(200);
		for (const [, text, code] of entries) {
			expect(text).toBe('region:' + code);
		}
	});
});

describe('satus.locale.description', () => {
	beforeEach(() => {
		satus.locale.data = {};
	});

	test('resolves the "<textKey>_description" convention', () => {
		satus.locale.data.hideTopLoadingBar_description = 'The red bar at the very top.';

		expect(satus.locale.description({ text: 'hideTopLoadingBar' }))
			.toBe('The red bar at the very top.');
	});

	test('returns empty when the setting has no explanation', () => {
		satus.locale.data.hideTopLoadingBar = 'Hide top loading bar';

		expect(satus.locale.description({ text: 'hideTopLoadingBar' })).toBe('');
	});

	test('an explicit description key wins over the convention', () => {
		satus.locale.data.shared_description = 'Shared explanation.';
		satus.locale.data.foo_description = 'Conventional explanation.';

		expect(satus.locale.description({ text: 'foo', description: 'shared_description' }))
			.toBe('Shared explanation.');
	});

	test('ignores a non-string text, such as a render function', () => {
		expect(satus.locale.description({ text: () => 'foo' })).toBe('');
	});
});
