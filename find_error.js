import * as acorn from "acorn";
import fs from "fs";
const code = fs.readFileSync("assets/core/index.js", "utf8");
try {
  acorn.parse(code, {ecmaVersion: 2022, sourceType: "module"});
  console.log("No syntax error found by acorn!");
} catch (e) {
  console.log("Syntax error at pos", e.pos, "line", e.loc.line, "col", e.loc.column);
  console.log("Context:");
  const start = Math.max(0, e.pos - 50);
  const end = Math.min(code.length, e.pos + 50);
  console.log(code.substring(start, e.pos) + " ---> " + code.substring(e.pos, end));
}
