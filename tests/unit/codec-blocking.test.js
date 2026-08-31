const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Loads the codec patch and the two storage mirrors from core.js. Everything
// below the mirrors needs chrome.* and a real DOM, so the slice stops there.
function loadCodecHook (context) {
	const source = fs.readFileSync(
		path.join(__dirname, '../../js&css/web-accessible/core.js'),
		'utf8'
	);
	const start = source.indexOf('ImprovedTube.codecAtlas = {');
	const end = source.indexOf('/*--------------------------------------------------------------\n# MESSAGES', start);

	if (start < 0 || end < 0) {
		throw new Error('Codec hook source was not found');
	}

	vm.createContext(context);
	vm.runInContext(source.slice(start, end), context);
}

function createContext (storage = {}) {
	const store = {};
	const localStorage = new Proxy(store, {
		deleteProperty: (target, key) => delete target[key]
	});

	localStorage.removeItem = key => { delete store[key]; };

	const calls = {isTypeSupported: [], canPlayType: [], decodingInfo: []};

	const context = {
		ImprovedTube: {storage},
		localStorage,
		Promise,
		calls,
		MediaSource: {
			isTypeSupported (mime) {
				calls.isTypeSupported.push(mime);
				return true;
			}
		},
		ManagedMediaSource: undefined,
		HTMLMediaElement: {
			prototype: {
				canPlayType (mime) {
					calls.canPlayType.push(mime);
					return 'probably';
				}
			}
		},
		navigator: {
			mediaCapabilities: {
				decodingInfo (configuration) {
					calls.decodingInfo.push(configuration);
					return Promise.resolve({supported: true, smooth: true, powerEfficient: true});
				}
			}
		}
	};

	context.window = context;

	return context;
}

const AV1 = 'video/mp4; codecs="av01.0.08M.08"';
const VP9 = 'video/webm; codecs="vp09.00.41.08"';
const H264 = 'video/mp4; codecs="avc1.640028"';

describe('codec blocking', () => {
	test('mirrors the codec switches into localStorage as one regex source', () => {
		const context = createContext({block_av1: true, block_h264: true});

		loadCodecHook(context);
		context.ImprovedTube.updateCodecStorage();

		expect(context.localStorage['it-codec']).toBe('avc1|av01');
	});

	test('clears the localStorage key when no codec is blocked', () => {
		const context = createContext({block_av1: true});

		loadCodecHook(context);
		context.ImprovedTube.updateCodecStorage();
		context.ImprovedTube.storage.block_av1 = false;
		context.ImprovedTube.updateCodecStorage();

		expect(context.localStorage['it-codec']).toBeUndefined();
	});

	test('isTypeSupported reports false for a blocked codec and passes the rest through', () => {
		const context = createContext({block_av1: true});

		loadCodecHook(context);
		context.ImprovedTube.updateCodecStorage();

		// A boolean, not '' — isTypeSupported's contract is a boolean.
		expect(context.MediaSource.isTypeSupported(AV1)).toBe(false);
		expect(context.MediaSource.isTypeSupported(VP9)).toBe(true);
		expect(context.calls.isTypeSupported).toEqual([VP9]);
	});

	test('canPlayType reports the empty string for a blocked codec', () => {
		const context = createContext({block_h264: true});

		loadCodecHook(context);
		context.ImprovedTube.updateCodecStorage();

		expect(context.HTMLMediaElement.prototype.canPlayType(H264)).toBe('');
		expect(context.HTMLMediaElement.prototype.canPlayType(VP9)).toBe('probably');
	});

	test('decodingInfo does not contradict isTypeSupported', async () => {
		const context = createContext({block_av1: true});

		loadCodecHook(context);
		context.ImprovedTube.updateCodecStorage();

		const blocked = await context.navigator.mediaCapabilities.decodingInfo({
			type: 'media-source',
			video: {contentType: AV1, width: 1920, height: 1080, bitrate: 4000000, framerate: 60}
		});

		expect(blocked).toMatchObject({supported: false, smooth: false, powerEfficient: false});
		expect(context.calls.decodingInfo).toHaveLength(0);

		const allowed = await context.navigator.mediaCapabilities.decodingInfo({
			type: 'media-source',
			video: {contentType: VP9, width: 1920, height: 1080, bitrate: 4000000, framerate: 60}
		});

		expect(allowed.supported).toBe(true);
		expect(context.calls.decodingInfo).toHaveLength(1);
	});

	test('a codec change applies without reinstalling the patch', () => {
		const context = createContext({});

		// Nothing blocked when the patch installs — it must still react later.
		loadCodecHook(context);
		context.ImprovedTube.updateCodecStorage();

		expect(context.MediaSource.isTypeSupported(AV1)).toBe(true);

		context.ImprovedTube.storage.block_av1 = true;
		context.ImprovedTube.updateCodecStorage();

		expect(context.MediaSource.isTypeSupported(AV1)).toBe(false);
		expect(context.MediaSource.isTypeSupported(VP9)).toBe(true);
	});

	test('ignores a non-string mime instead of throwing', () => {
		const context = createContext({block_av1: true});

		loadCodecHook(context);
		context.ImprovedTube.updateCodecStorage();

		expect(() => context.MediaSource.isTypeSupported(undefined)).not.toThrow();
	});
});
