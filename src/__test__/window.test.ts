import * as assert from "assert";
import { getWindow, loadWindow } from "./window";

describe("node window", () => {
    it("works", async () => {
        (global as any).window = await getWindow('<a id="the-link" href="alink">jsdom!</a>');
        (global as any).document = window.document;
        (global as any).screen = window.screen;

        assert.equal((document.getElementById("the-link") as HTMLAnchorElement).href, "alink");
        assert.ok(window);
        assert.ok(screen);
    });

    it("loads", () => {
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
