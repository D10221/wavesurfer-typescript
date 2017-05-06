import * as assert from "assert";

import * as Wavesurfer from "wavesurfer.js";

import * as util from "util";

describe("wavesurfer", async () => {

  it("works", () => {

    assert.ok(util.isFunction((global as any).AudioContext));
    assert.equal((global as any).AudioContext, AudioContext);
    (window as any).AudioContext = AudioContext;

    const container = document.createElement("div");

    const ws = new Wavesurfer({ container });
    assert.ok(util.isFunction(ws.init));

    // Not a real browser
    // const _wave = Wavesurfer.create({ container, audioContext: new AudioContext() });
    // assert.ok(_wave);

  });
});
