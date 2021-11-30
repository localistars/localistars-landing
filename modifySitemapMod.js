const fs = require('fs')
const path = require('path')

let cliContent = fs.readFileSync(path.join(__dirname, 'node_modules/next-sitemap/dist/cjs/cli.js')).toString()

cliContent = cliContent.replace('const allSitemaps = [];', `const allSitemaps = [];
    console.log({
        configFilePath,
        config,
        manifest,
        chunks,
        SITEMAP_FILE: runtimePaths.SITEMAP_FILE,
        sitemapChunks
    });`)


cliContent = cliContent.replace('generateSitemap_1.generateSitemap(chunk);', `generateSitemap_1.generateSitemap(chunk);
    console.log(chunk);`)

fs.writeFileSync(path.join(__dirname, 'node_modules/next-sitemap/dist/cjs/cli.js'), cliContent)
