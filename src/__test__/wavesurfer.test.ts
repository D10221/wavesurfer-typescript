import * as assert from "assert";

// Its a Type, can't be an iterface as it has static members
import { WaveSurfer } from "wavesurfer.js";
// tslint:disable-next-line:no-var-requires
const Wavesurfer: WaveSurfer = require("wavesurfer.js");

import * as util from "util";

describe("wavesurfer", async () => {

  it("works", () => {

    assert.ok(util.isFunction((global as any).AudioContext));
    assert.equal((global as any).AudioContext, AudioContext);
    (window as any).AudioContext = AudioContext;

    const container = document.createElement("div");
    const _wave = Wavesurfer.create({ container, audioContext: new AudioContext() });
    assert.ok(_wave);

  });
});
