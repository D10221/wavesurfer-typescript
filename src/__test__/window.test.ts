import * as assert from "assert";
import { loadWindow } from "./window";

describe("node window", () => {

  it("works", () => {
    (global as any).window = null;
    (global as any).document = null;
    (global as any).screen = null;
    assert.ok(!window);
    assert.ok(!document);
    assert.ok(!screen);

    loadWindow();
    window.document.body.innerHTML = '<a id="the-link" href="alink">jsdom!</a>';
    assert.equal((document.getElementById("the-link") as HTMLAnchorElement).href, "alink");
    assert.ok(window);
    assert.ok(screen);
  });

});
