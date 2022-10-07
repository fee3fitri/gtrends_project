/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/map */ \"./src/scripts/map.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const mapContainer = document.getElementById(\"regions_div\");\n  const map = new _scripts_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2xELE1BQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQXJCO0VBQ0EsTUFBTUMsR0FBRyxHQUFHLElBQUlMLG9EQUFKLEVBQVo7QUFDRCxDQUhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3RyZW5kcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXAgZnJvbSBcIi4vc2NyaXB0cy9tYXBcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IG1hcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnaW9uc19kaXZcIik7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbn0pOyJdLCJuYW1lcyI6WyJNYXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYXBDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\nclass Map {\n  constructor() {\n    this.drawRegionsMap = this.drawRegionsMap.bind(this);\n    this.load();\n  }\n\n  load() {\n    google.charts.load('current', {\n      'packages': ['geochart']\n    });\n    google.charts.setOnLoadCallback(this.drawRegionsMap);\n  }\n\n  drawRegionsMap() {\n    let query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1LOD5EAr5K5u45ORZiafyk5k96aI_ByzYk-NkJM0k6do/gviz/tq?gid=0&headers=1&range=A1:B15');\n    query.send(this.handleQueryResponse);\n  }\n\n  handleQueryResponse(response) {\n    if (response.isError()) {\n      alert(`Error in query: ${response.getMessage()} + ${response.getDetailedMessage()}`);\n      return;\n    }\n\n    let data = response.getDataTable();\n    let chart = new google.visualization.GeoChart(document.getElementById('regions_div'));\n    let options = {\n      colorAxis: {\n        colors: ['#b2ccf7', '#2272f5']\n      },\n      datalessRegionColor: '#ebf0f7',\n      backgroundColor: ''\n    };\n    chart.draw(data, options);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLEdBQU4sQ0FBVTtFQUN2QkMsV0FBVyxHQUFHO0lBQ1osS0FBS0MsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUF0QjtJQUNBLEtBQUtDLElBQUw7RUFDRDs7RUFFREEsSUFBSSxHQUFHO0lBQ0xDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRixJQUFkLENBQW1CLFNBQW5CLEVBQThCO01BQzVCLFlBQVcsQ0FBQyxVQUFEO0lBRGlCLENBQTlCO0lBSUFDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxpQkFBZCxDQUFnQyxLQUFLTCxjQUFyQztFQUNEOztFQUVEQSxjQUFjLEdBQUc7SUFDZixJQUFJTSxLQUFLLEdBQUcsSUFBSUgsTUFBTSxDQUFDSSxhQUFQLENBQXFCQyxLQUF6QixDQUNWLDBIQURVLENBQVo7SUFHQUYsS0FBSyxDQUFDRyxJQUFOLENBQVcsS0FBS0MsbUJBQWhCO0VBQ0Q7O0VBRURBLG1CQUFtQixDQUFDQyxRQUFELEVBQVc7SUFDNUIsSUFBSUEsUUFBUSxDQUFDQyxPQUFULEVBQUosRUFBd0I7TUFDdEJDLEtBQUssQ0FBRSxtQkFBa0JGLFFBQVEsQ0FBQ0csVUFBVCxFQUFzQixNQUFLSCxRQUFRLENBQUNJLGtCQUFULEVBQThCLEVBQTdFLENBQUw7TUFDQTtJQUNEOztJQUVELElBQUlDLElBQUksR0FBR0wsUUFBUSxDQUFDTSxZQUFULEVBQVg7SUFDQSxJQUFJQyxLQUFLLEdBQUcsSUFBSWYsTUFBTSxDQUFDSSxhQUFQLENBQXFCWSxRQUF6QixDQUFrQ0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWxDLENBQVo7SUFFQSxJQUFJQyxPQUFPLEdBQUc7TUFDWkMsU0FBUyxFQUFFO1FBQUNDLE1BQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaO01BQVQsQ0FEQztNQUVaQyxtQkFBbUIsRUFBRSxTQUZUO01BR1pDLGVBQWUsRUFBRTtJQUhMLENBQWQ7SUFNQVIsS0FBSyxDQUFDUyxJQUFOLENBQVdYLElBQVgsRUFBaUJNLE9BQWpCO0VBQ0Q7O0FBckNzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2d0cmVuZHMvLi9zcmMvc2NyaXB0cy9tYXAuanM/ZjU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRyYXdSZWdpb25zTWFwID0gdGhpcy5kcmF3UmVnaW9uc01hcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9hZCgpO1xuICB9XG5cbiAgbG9hZCgpIHtcbiAgICBnb29nbGUuY2hhcnRzLmxvYWQoJ2N1cnJlbnQnLCB7XG4gICAgICAncGFja2FnZXMnOlsnZ2VvY2hhcnQnXSxcbiAgICB9KTtcblxuICAgIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2sodGhpcy5kcmF3UmVnaW9uc01hcCk7XG4gIH1cblxuICBkcmF3UmVnaW9uc01hcCgpIHtcbiAgICBsZXQgcXVlcnkgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uUXVlcnkoXG4gICAgICAnaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMUxPRDVFQXI1SzV1NDVPUlppYWZ5azVrOTZhSV9CeXpZay1Oa0pNMGs2ZG8vZ3Zpei90cT9naWQ9MCZoZWFkZXJzPTEmcmFuZ2U9QTE6QjE1J1xuICAgICk7XG4gICAgcXVlcnkuc2VuZCh0aGlzLmhhbmRsZVF1ZXJ5UmVzcG9uc2UpO1xuICB9XG5cbiAgaGFuZGxlUXVlcnlSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5pc0Vycm9yKCkpIHtcbiAgICAgIGFsZXJ0KGBFcnJvciBpbiBxdWVyeTogJHtyZXNwb25zZS5nZXRNZXNzYWdlKCl9ICsgJHtyZXNwb25zZS5nZXREZXRhaWxlZE1lc3NhZ2UoKX1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YVRhYmxlKCk7XG4gICAgbGV0IGNoYXJ0ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkdlb0NoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpb25zX2RpdicpKTtcbiAgXG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBjb2xvckF4aXM6IHtjb2xvcnM6IFsnI2IyY2NmNycsICcjMjI3MmY1J119LFxuICAgICAgZGF0YWxlc3NSZWdpb25Db2xvcjogJyNlYmYwZjcnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnJ1xuICAgIH07XG4gIFxuICAgIGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTWFwIiwiY29uc3RydWN0b3IiLCJkcmF3UmVnaW9uc01hcCIsImJpbmQiLCJsb2FkIiwiZ29vZ2xlIiwiY2hhcnRzIiwic2V0T25Mb2FkQ2FsbGJhY2siLCJxdWVyeSIsInZpc3VhbGl6YXRpb24iLCJRdWVyeSIsInNlbmQiLCJoYW5kbGVRdWVyeVJlc3BvbnNlIiwicmVzcG9uc2UiLCJpc0Vycm9yIiwiYWxlcnQiLCJnZXRNZXNzYWdlIiwiZ2V0RGV0YWlsZWRNZXNzYWdlIiwiZGF0YSIsImdldERhdGFUYWJsZSIsImNoYXJ0IiwiR2VvQ2hhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9ucyIsImNvbG9yQXhpcyIsImNvbG9ycyIsImRhdGFsZXNzUmVnaW9uQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndHJlbmRzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;