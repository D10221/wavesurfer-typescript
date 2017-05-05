import * as createDebug from "debug";
import * as util from  "util";
const debug = createDebug("wavesurfer-typescript:testing");

import * as assert from "assert";

import { loadWindow } from "./window";


import * as wavesurfer from "wavesurfer.js";


describe("wavesurfer", async () => {

  it("works", () => {
    if (util.isNullOrUndefined(window) || util.isNullOrUndefined((window as any).AudioContext)) {
      debug("load window");
      loadWindow();
    } else {
      debug("AudioContext:", (window as any).AudioContext.name);
    }
    document.body.innerHTML = '<div id="container"></div>';
    const container = document.getElementById("container");
    const _wave = wavesurfer.create({ container });
    assert.ok(_wave);
  });
});
