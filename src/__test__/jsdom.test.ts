/**
 * jsdom setup
 */
import * as assert from "assert";

import { jsdom } from "jsdom";

/**
 * Becuase I did  not find definition (d.ts) for 10.x
 */
describe("jsdom 9.0.0", () => {

    it("works", () => {

        const document = jsdom(
            '<a id="the-link" href="alink">jsdom!</a>'
        );
        (global as any).document = document;
        (global as any).window = document.defaultView;

        assert.equal(
            (window.document.getElementById("the-link") as HTMLAnchorElement).href,
            "alink"
        );
    });
});
