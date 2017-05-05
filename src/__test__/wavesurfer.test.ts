import * as assert from "assert";
import { loadWindow } from "./window";

loadWindow();

import WaveSurfer from "wavesurfer";

describe("wavesurfer", async () => {

  it("works", () => {
    document.body.innerHTML = '<div id="container"></div>';
    const container = document.getElementById("container");
    const _wave = WaveSurfer.create({ container });
    assert.ok(_wave);
  });
});
