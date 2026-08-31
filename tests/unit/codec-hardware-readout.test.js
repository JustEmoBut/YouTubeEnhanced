global.extension = {
	skeleton: {
		main: {
			layers: {
				section: {}
			}
		}
	}
};

global.satus = {
	storage: {
		get: jest.fn()
	},
	locale: {
		get: jest.fn(key => key)
	}
};

require('../../menu/skeleton-parts/player.js');

const readout = extension.skeleton.main.layers.section.player.on.click
	.section_1.optimize_codec_for_hardware_acceleration.list;

function flushPromises () {
	return new Promise(resolve => setImmediate(resolve));
}

// The render callback only touches `this`, satus and navigator, so a bare
// object stands in for the rendered element — no DOM needed.
function createElement () {
	return {style: 'untouched', textContent: null};
}

function mockDecodingInfo (byCodec) {
	return jest.fn(configuration => {
		const contentType = configuration.video.contentType;
		const codec = Object.keys(byCodec).find(key => contentType.includes(key));

		return Promise.resolve({
			supported: true,
			smooth: true,
			powerEfficient: byCodec[codec]
		});
	});
}

function blockNone () {
	satus.storage.get.mockImplementation(() => false);
}

describe('Optimize codec for hardware acceleration readout', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		satus.locale.get.mockImplementation(key => key);
		global.navigator = {
			mediaCapabilities: {
				decodingInfo: mockDecodingInfo({avc1: true, vp09: true, av01: true})
			}
		};
	});

	test('reports Optimal when every allowed codec decodes in hardware', async () => {
		blockNone();

		const element = createElement();

		await readout.on.render.call(element);
		await flushPromises();

		expect(element.textContent).toBe('Optimal');
		expect(navigator.mediaCapabilities.decodingInfo).toHaveBeenCalledTimes(3);
	});

	test('names the codec that is not power efficient', async () => {
		blockNone();
		navigator.mediaCapabilities.decodingInfo = mockDecodingInfo({avc1: true, vp09: true, av01: false});

		const element = createElement();

		await readout.on.render.call(element);
		await flushPromises();

		expect(element.textContent).toBe('Not_optimal: av1');
	});

	test('only probes codecs the user has not blocked', async () => {
		satus.storage.get.mockImplementation(key => key === 'block_av1');

		const element = createElement();

		await readout.on.render.call(element);
		await flushPromises();

		const probed = navigator.mediaCapabilities.decodingInfo.mock.calls
			.map(([configuration]) => configuration.video.contentType);

		expect(probed).toHaveLength(2);
		expect(probed.some(contentType => contentType.includes('av01'))).toBe(false);
		expect(element.textContent).toBe('Optimal');
	});

	test('reports Not_optimal when every codec is blocked', async () => {
		satus.storage.get.mockImplementation(() => true);

		const element = createElement();

		await readout.on.render.call(element);

		expect(element.textContent).toBe('Not_optimal');
		expect(navigator.mediaCapabilities.decodingInfo).not.toHaveBeenCalled();
	});

	test('falls back when the browser has no Media Capabilities API', async () => {
		blockNone();
		global.navigator = {};

		const element = createElement();

		await readout.on.render.call(element);

		expect(element.textContent).toBe('GPUnotindatabase');
	});

	test('treats a rejected probe as not power efficient instead of throwing', async () => {
		blockNone();
		navigator.mediaCapabilities.decodingInfo = jest.fn(() => Promise.reject(new Error('unsupported')));

		const element = createElement();

		await readout.on.render.call(element);
		await flushPromises();

		expect(element.textContent).toBe('Not_optimal');
	});
});
