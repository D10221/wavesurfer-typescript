import * as assert from "assert";
import version from "../version";

describe("version", () => {
    it("works", () => {
        assert.ok(/\d+\.\d+\.\d+\-?(\w+)?/.test(version));
    });
});
