// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/Nathan/Sites/Cointower/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/Nathan/Sites/Cointower/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Nathan/Sites/Cointower/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/Nathan/Sites/Cointower/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/Nathan/Sites/Cointower/.cache/json/layout-index.json"),
  "404.json": require("/Users/Nathan/Sites/Cointower/.cache/json/404.json"),
  "layout-index.json": require("/Users/Nathan/Sites/Cointower/.cache/json/layout-index.json"),
  "index.json": require("/Users/Nathan/Sites/Cointower/.cache/json/index.json"),
  "layout-index.json": require("/Users/Nathan/Sites/Cointower/.cache/json/layout-index.json"),
  "page-2.json": require("/Users/Nathan/Sites/Cointower/.cache/json/page-2.json"),
  "layout-index.json": require("/Users/Nathan/Sites/Cointower/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/Nathan/Sites/Cointower/.cache/json/404-html.json")
}