---
title: Docusaurus sidebar 配置
---

Docusaurus 配置 sidebar 时不能按目录、通配符等添加单个文章。

最开始是用的 [这份 generator](https://gist.github.com/AmyrAhmady/7d6f3c8c617faa062a5b6e66ddc7c59a)，不过自定义度太低了，所以写了一小段 JS 代码来添加整个目录下的文章。

```js title="sidebars.js"
// @ts-check
const fs = require("fs");
const path = require("path");

/**
 * @param {string} dir
 * @param {string[]} blacklist
 * @returns {string[]}
 */
function getFiles(dir, blacklist) {
  let files = [];

  fs.readdirSync(dir).forEach((file) => {
    let f;
    if (path.basename(file).endsWith("mdx")) {
      f = path.basename(file).replace(".mdx", "");
    } else {
      f = path.basename(file).replace(".md", "");
    }

    if (!blacklist.includes(f)) {
      files.push(f);
    }
  });

  return files;
}

// 单个目录下的所有文章
let leetcodeSolutions = getFiles("docs/Leetcode/solutions", []).map(
  (s) => (s = "LeetCode/solutions/" + s)
);

module.exports = {
  sidebar: [
    {
      type: "doc",
      id: "introduction",
    },
    {
      type: "category",
      label: "Leetcode",
      items: [
        {
          type: "doc",
          id: "LeetCode/preface",
        },
        {
          type: "category",
          label: "solutions",
          items: leetcodeSolutions,
        },
      ],
    },
  ],
};
```
