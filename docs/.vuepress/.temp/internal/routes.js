export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"快速开始"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"国学起名"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
