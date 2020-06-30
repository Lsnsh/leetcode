const fs = require("fs");
const render = require("json-templater/string");
const path = require("path");
const endOfLine = require("os").EOL;

const Dirs = require("../../dir.json");

const MAIN_DIR = 'src';
const OUTPUT_PATH = path.join(__dirname, "../../README.md");
const DIR_TEMPLATE = `
### {{dirName}}

{{itemList}}`;
const MAIN_TEMPLATE = `# 我的 leetcode 题解

![language-javascript](https://img.shields.io/badge/language-JavaScript-yellow)
![leetcode-progress](https://img.shields.io/badge/leetcode-{{resolvedItem}}%2F{{totalItem}}-brightgreen)

## 目录
{{dir}}
`;
// leetcode 题目总数
const TOTAL_ITEM = 1699;
// leetcode 题目数量（已解决）
let resolvedItem = 0;

let DirNames = Object.keys(Dirs);

let dirTemplate = [];

DirNames.forEach((dirName) => {
  let itemNames = Object.keys(Dirs[dirName]);
  let itemList = [];

  resolvedItem += itemNames.length;

  itemList = itemNames.map((itemName) => {
    let itemNameCN = Dirs[dirName][itemName];
    return `- [${itemNameCN}](${MAIN_DIR}/${dirName}/${itemName})`;
  });

  dirTemplate.push(
    render(DIR_TEMPLATE, {
      dirName: dirName,
      itemList: itemList.join(endOfLine),
    })
  );
});

let template = render(MAIN_TEMPLATE, {
  resolvedItem,
  totalItem: TOTAL_ITEM,
  dir: dirTemplate.join(endOfLine),
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log("[build README] DONE:", OUTPUT_PATH);
