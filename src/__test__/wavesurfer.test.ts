import * as assert from "assert";
import { loadWindow } from "./window";

loadWindow();

import wavesurfer from "wavesurfer";

describe("wavesurfer", async () => {

  it("works", () => {
    document.body.innerHTML = '<div id="container"></div>';
    const container = document.getElementById("container");
    const _wave = wavesurfer.create({ container });
    assert.ok(_wave);
  });
});
