
const fs = require("fs");
const acorn = require("acorn-loose");
const code = fs.readFileSync("assets/core/index.js", "utf8");
try {
  const ast = acorn.parse(code, {ecmaVersion: 2022});
  console.log("Success");
} catch(e) {
  console.log(e);
}
