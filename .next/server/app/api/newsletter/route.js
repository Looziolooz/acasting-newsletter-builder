/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/newsletter/route";
exports.ids = ["app/api/newsletter/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnewsletter%2Froute&page=%2Fapi%2Fnewsletter%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnewsletter%2Froute.ts&appDir=C%3A%5CUsers%5Cloren%5CDesktop%5Cdev-projects%5Cacasting-newsletter-builder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cloren%5CDesktop%5Cdev-projects%5Cacasting-newsletter-builder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnewsletter%2Froute&page=%2Fapi%2Fnewsletter%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnewsletter%2Froute.ts&appDir=C%3A%5CUsers%5Cloren%5CDesktop%5Cdev-projects%5Cacasting-newsletter-builder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cloren%5CDesktop%5Cdev-projects%5Cacasting-newsletter-builder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_loren_Desktop_dev_projects_acasting_newsletter_builder_app_api_newsletter_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/newsletter/route.ts */ \"(rsc)/./app/api/newsletter/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/newsletter/route\",\n        pathname: \"/api/newsletter\",\n        filename: \"route\",\n        bundlePath: \"app/api/newsletter/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\loren\\\\Desktop\\\\dev-projects\\\\acasting-newsletter-builder\\\\app\\\\api\\\\newsletter\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_loren_Desktop_dev_projects_acasting_newsletter_builder_app_api_newsletter_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZuZXdzbGV0dGVyJTJGcm91dGUmcGFnZT0lMkZhcGklMkZuZXdzbGV0dGVyJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbmV3c2xldHRlciUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNsb3JlbiU1Q0Rlc2t0b3AlNUNkZXYtcHJvamVjdHMlNUNhY2FzdGluZy1uZXdzbGV0dGVyLWJ1aWxkZXIlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2xvcmVuJTVDRGVza3RvcCU1Q2Rldi1wcm9qZWN0cyU1Q2FjYXN0aW5nLW5ld3NsZXR0ZXItYnVpbGRlciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDb0Q7QUFDakk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGxvcmVuXFxcXERlc2t0b3BcXFxcZGV2LXByb2plY3RzXFxcXGFjYXN0aW5nLW5ld3NsZXR0ZXItYnVpbGRlclxcXFxhcHBcXFxcYXBpXFxcXG5ld3NsZXR0ZXJcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL25ld3NsZXR0ZXIvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9uZXdzbGV0dGVyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9uZXdzbGV0dGVyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcbG9yZW5cXFxcRGVza3RvcFxcXFxkZXYtcHJvamVjdHNcXFxcYWNhc3RpbmctbmV3c2xldHRlci1idWlsZGVyXFxcXGFwcFxcXFxhcGlcXFxcbmV3c2xldHRlclxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnewsletter%2Froute&page=%2Fapi%2Fnewsletter%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnewsletter%2Froute.ts&appDir=C%3A%5CUsers%5Cloren%5CDesktop%5Cdev-projects%5Cacasting-newsletter-builder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cloren%5CDesktop%5Cdev-projects%5Cacasting-newsletter-builder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/newsletter/route.ts":
/*!*************************************!*\
  !*** ./app/api/newsletter/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"(rsc)/./lib/db.ts\");\n\n\n// GET: Recupera una newsletter o la lista\nasync function GET(request) {\n    const { searchParams } = new URL(request.url);\n    const id = searchParams.get('id');\n    if (id) {\n        const data = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.getNewsletter(id);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data);\n    }\n    const all = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.getAll();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(all);\n}\n// POST: Salva o aggiorna una newsletter\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        const saved = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.saveNewsletter(body);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(saved);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to save newsletter'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL25ld3NsZXR0ZXIvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUMyQztBQUNOO0FBR3JDLDBDQUEwQztBQUNuQyxlQUFlRSxJQUFJQyxPQUFnQjtJQUN4QyxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLFFBQVFHLEdBQUc7SUFDNUMsTUFBTUMsS0FBS0gsYUFBYUksR0FBRyxDQUFDO0lBRTVCLElBQUlELElBQUk7UUFDTixNQUFNRSxPQUFPLE1BQU1SLHVDQUFFQSxDQUFDUyxhQUFhLENBQUNIO1FBQ3BDLE9BQU9QLHFEQUFZQSxDQUFDVyxJQUFJLENBQUNGO0lBQzNCO0lBRUEsTUFBTUcsTUFBTSxNQUFNWCx1Q0FBRUEsQ0FBQ1ksTUFBTTtJQUMzQixPQUFPYixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDQztBQUMzQjtBQUVBLHdDQUF3QztBQUNqQyxlQUFlRSxLQUFLWCxPQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTVksT0FBbUIsTUFBTVosUUFBUVEsSUFBSTtRQUMzQyxNQUFNSyxRQUFRLE1BQU1mLHVDQUFFQSxDQUFDZ0IsY0FBYyxDQUFDRjtRQUN0QyxPQUFPZixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDSztJQUMzQixFQUFFLE9BQU9FLE9BQU87UUFDZCxPQUFPbEIscURBQVlBLENBQUNXLElBQUksQ0FBQztZQUFFTyxPQUFPO1FBQTRCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ2pGO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9yZW5cXERlc2t0b3BcXGRldi1wcm9qZWN0c1xcYWNhc3RpbmctbmV3c2xldHRlci1idWlsZGVyXFxhcHBcXGFwaVxcbmV3c2xldHRlclxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYic7XG5pbXBvcnQgeyBOZXdzbGV0dGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuXG4vLyBHRVQ6IFJlY3VwZXJhIHVuYSBuZXdzbGV0dGVyIG8gbGEgbGlzdGFcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IGlkID0gc2VhcmNoUGFyYW1zLmdldCgnaWQnKTtcblxuICBpZiAoaWQpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIuZ2V0TmV3c2xldHRlcihpZCk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGRhdGEpO1xuICB9XG5cbiAgY29uc3QgYWxsID0gYXdhaXQgZGIuZ2V0QWxsKCk7XG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihhbGwpO1xufVxuXG4vLyBQT1NUOiBTYWx2YSBvIGFnZ2lvcm5hIHVuYSBuZXdzbGV0dGVyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keTogTmV3c2xldHRlciA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGNvbnN0IHNhdmVkID0gYXdhaXQgZGIuc2F2ZU5ld3NsZXR0ZXIoYm9keSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHNhdmVkKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBzYXZlIG5ld3NsZXR0ZXInIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJkYiIsIkdFVCIsInJlcXVlc3QiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJpZCIsImdldCIsImRhdGEiLCJnZXROZXdzbGV0dGVyIiwianNvbiIsImFsbCIsImdldEFsbCIsIlBPU1QiLCJib2R5Iiwic2F2ZWQiLCJzYXZlTmV3c2xldHRlciIsImVycm9yIiwic3RhdHVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/newsletter/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n// In un'app reale, questo sarebbe un database (Prisma, Mongoose, ecc.)\n// Qui usiamo una mappa in memoria per simulare il backend\nconst newsletters = new Map();\nconst db = {\n    saveNewsletter: async (newsletter)=>{\n        const updated = {\n            ...newsletter,\n            updatedAt: new Date().toISOString()\n        };\n        newsletters.set(newsletter.id, updated);\n        return updated;\n    },\n    getNewsletter: async (id)=>{\n        return newsletters.get(id) || null;\n    },\n    getAll: async ()=>{\n        return Array.from(newsletters.values());\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUdBLHVFQUF1RTtBQUN2RSwwREFBMEQ7QUFDMUQsTUFBTUEsY0FBYyxJQUFJQztBQUVqQixNQUFNQyxLQUFLO0lBQ2hCQyxnQkFBZ0IsT0FBT0M7UUFDckIsTUFBTUMsVUFBVTtZQUNkLEdBQUdELFVBQVU7WUFDYkUsV0FBVyxJQUFJQyxPQUFPQyxXQUFXO1FBQ25DO1FBQ0FSLFlBQVlTLEdBQUcsQ0FBQ0wsV0FBV00sRUFBRSxFQUFFTDtRQUMvQixPQUFPQTtJQUNUO0lBRUFNLGVBQWUsT0FBT0Q7UUFDcEIsT0FBT1YsWUFBWVksR0FBRyxDQUFDRixPQUFPO0lBQ2hDO0lBRUFHLFFBQVE7UUFDTixPQUFPQyxNQUFNQyxJQUFJLENBQUNmLFlBQVlnQixNQUFNO0lBQ3RDO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxsb3JlblxcRGVza3RvcFxcZGV2LXByb2plY3RzXFxhY2FzdGluZy1uZXdzbGV0dGVyLWJ1aWxkZXJcXGxpYlxcZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZXdzbGV0dGVyIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyBJbiB1bidhcHAgcmVhbGUsIHF1ZXN0byBzYXJlYmJlIHVuIGRhdGFiYXNlIChQcmlzbWEsIE1vbmdvb3NlLCBlY2MuKVxuLy8gUXVpIHVzaWFtbyB1bmEgbWFwcGEgaW4gbWVtb3JpYSBwZXIgc2ltdWxhcmUgaWwgYmFja2VuZFxuY29uc3QgbmV3c2xldHRlcnMgPSBuZXcgTWFwPHN0cmluZywgTmV3c2xldHRlcj4oKTtcblxuZXhwb3J0IGNvbnN0IGRiID0ge1xuICBzYXZlTmV3c2xldHRlcjogYXN5bmMgKG5ld3NsZXR0ZXI6IE5ld3NsZXR0ZXIpOiBQcm9taXNlPE5ld3NsZXR0ZXI+ID0+IHtcbiAgICBjb25zdCB1cGRhdGVkID0ge1xuICAgICAgLi4ubmV3c2xldHRlcixcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgfTtcbiAgICBuZXdzbGV0dGVycy5zZXQobmV3c2xldHRlci5pZCwgdXBkYXRlZCk7XG4gICAgcmV0dXJuIHVwZGF0ZWQ7XG4gIH0sXG4gIFxuICBnZXROZXdzbGV0dGVyOiBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8TmV3c2xldHRlciB8IG51bGw+ID0+IHtcbiAgICByZXR1cm4gbmV3c2xldHRlcnMuZ2V0KGlkKSB8fCBudWxsO1xuICB9LFxuICBcbiAgZ2V0QWxsOiBhc3luYyAoKTogUHJvbWlzZTxOZXdzbGV0dGVyW10+ID0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXdzbGV0dGVycy52YWx1ZXMoKSk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsibmV3c2xldHRlcnMiLCJNYXAiLCJkYiIsInNhdmVOZXdzbGV0dGVyIiwibmV3c2xldHRlciIsInVwZGF0ZWQiLCJ1cGRhdGVkQXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzZXQiLCJpZCIsImdldE5ld3NsZXR0ZXIiLCJnZXQiLCJnZXRBbGwiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnewsletter%2Froute&page=%2Fapi%2Fnewsletter%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnewsletter%2Froute.ts&appDir=C%3A%5CUsers%5Cloren%5CDesktop%5Cdev-projects%5Cacasting-newsletter-builder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cloren%5CDesktop%5Cdev-projects%5Cacasting-newsletter-builder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();