const fs = require('fs')
const path = require('path')

let content = fs.readFileSync(path.join(__dirname, 'node_modules/next-sitemap/dist/cjs/file/index.js')).toString()

content = content.replace('fs_1.default.writeFileSync(filePath, content);', `fs_1.default.writeFileSync(filePath, content);
    console.log(filePath);`)

fs.writeFileSync(path.join(__dirname, 'node_modules/next-sitemap/dist/cjs/file/index.js'), content)
