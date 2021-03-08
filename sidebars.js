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

let leetcodeSolutions = getFiles("docs/LeetCode/solutions", []).map(
  (s) => (s = "LeetCode/solutions/" + s)
);

let snippetsItems = getFiles("docs/snippets", []).map(
  (s) => (s = "snippets/" + s)
)

module.exports = {
  sidebar: [
    {
      type: "doc",
      id: "introduction",
    },
    {
      type: "category",
      label: "LeetCode",
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
    {
      type: "category",
      label: "代码片段",
      items: snippetsItems
    },
  ],
};
