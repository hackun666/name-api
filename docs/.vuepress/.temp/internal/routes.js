export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"国学起名"} }],
  ["/name-meaning.html", { loader: () => import(/* webpackChunkName: "name-meaning.html" */"C:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/name-meaning.html.js"), meta: {"title":"名字解析"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"文档首页"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
