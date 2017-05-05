import * as util from "util";
import * as assert from "assert";

// import * as createDebug from "debug";
// const debug = createDebug("wavesurfer-typescript:testing");

import "./window";
import "web-audio-test-api";

describe("AudioContext", async () => {

    it("Exists", () => {
        assert.ok(util.isFunction((global as any).AudioContext));
        assert.equal((global as any).AudioContext, AudioContext);
        (window as any).AudioContext = AudioContext;
        assert.ok(!util.isNullOrUndefined(window));
        assert.ok(!util.isNullOrUndefined(AudioContext));
        assert.ok(util.isFunction(AudioContext));
        assert.ok(util.isFunction((window as any).AudioContext));
    });
});
