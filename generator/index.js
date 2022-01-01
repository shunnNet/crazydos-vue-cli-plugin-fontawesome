module.exports = api => {
  api.render("./template")
  api.injectImports(api.entryFile, `import fontAwesome from './plugins/fontAwesome.js'`)
  api.extendPackage({
    dependencies: {
      "@fortawesome/fontawesome-svg-core": "^1.2.36",
      "@fortawesome/free-solid-svg-icons": "^5.15.4",
      "@fortawesome/vue-fontawesome": "^3.0.0-5",
    }
  })
  api.afterInvoke(() => {

    const fs = require('fs')
    const contentMain = fs.readFileSync(api.resolve(api.entryFile), { encoding: 'utf-8' })
    const lines = contentMain.split(/\r?\n/g)
    const createAppLine = lines.find(line => line.match(/createApp\(App\)/))
    const createAppLineArr = createAppLine.split(".")
    createAppLineArr.splice(1,0,"use(fontAwesome)")
    const finalContent = contentMain.replace(createAppLine, createAppLineArr.join("."))

    fs.writeFileSync(api.resolve(api.entryFile), finalContent, { encoding: 'utf-8' })
                
                

  })
}