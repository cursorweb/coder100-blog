const fs = require('fs')
const args = process.argv.slice(2)

if (args.length < 1) {
  console.log('Usage: npm run new <title>')
  process.exit(1)
}

// oldest to newest index of posts
const data = require('./index.json')

const time = new Date().getTime()
const title = args.join(' ')
const slug = `${title.slice(0, 10).replace(/\s/g, '-')}${time.toString().slice(0, 10)}`
const template = `---
title: ${title}
date: ${time}
bio: 
---

# ${title}`

data.push(slug)
fs.writeFileSync(`posts/${slug}.md`, template)
fs.writeFileSync('util/index.json', JSON.stringify(data))
