const fs = require("fs");
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: npm run new <title>");
    process.exit(1);
}

const time = new Date().getTime();
const title = args.join(" ");
const slug = `${title.slice(0, 10).replace(/\s/g, "-")}${time.toString().slice(0, 10)}`;
const template = `---
title: ${title}
date: ${time}
bio: 
---

# ${title}`;

fs.writeFileSync(`posts/${slug}.md`, template);
console.log(`Created file at posts/${slug}.md`);
