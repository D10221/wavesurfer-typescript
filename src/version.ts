import * as path from "path";
import * as fs from "fs";

const version: string = JSON.parse(
    fs.readFileSync(
        path.join(
            __dirname,
            "../",
            "package.json"
        ),
        "utf-8"
    )
).version;

export default version;
