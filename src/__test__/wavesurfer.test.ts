import * as assert from "assert";
import * as wavesurfer from "wavesurfer.js";
import * as util from "util";

describe("wavesurfer", async () => {

  it("works", () => {

    assert.ok(util.isFunction((global as any).AudioContext));
    assert.equal((global as any).AudioContext, AudioContext);
    (window as any).AudioContext = AudioContext;

    const container = document.createElement("div");
    const _wave = wavesurfer.create({ container });
    assert.ok(_wave);

  });
});
