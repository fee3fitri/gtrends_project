/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const Map = __webpack_require__(/*! ./scripts/map */ \"./src/scripts/map.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const map = document.getElementById(\"regions_div\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLDJDQUFELENBQW5COztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2xELE1BQU1DLEdBQUcsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQVo7QUFDRCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3RyZW5kcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1hcCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9tYXAnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBtYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lvbnNfZGl2XCIpO1xufSk7Il0sIm5hbWVzIjpbIk1hcCIsInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYXAiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(module) {

eval("class Map {}\n\ngoogle.charts.load('current', {\n  'packages': ['geochart']\n});\ngoogle.charts.setOnLoadCallback(drawRegionsMap);\n\nfunction drawRegionsMap() {\n  let data = google.visualization.arrayToDataTable([['Country', 'Search volume/day'], ['United States', 500000000], ['Canada', 200000000], ['United Kingdom', 250000000], ['Ireland', 5000000], ['South Africa', 300000000], ['Nigeria', 3000000], ['India', 500000000], ['Songapore', 10000000], ['Australia', 150000000], ['New Zealand', 5000000], ['Brazil', 450000000], ['Russia', 100000000], ['China', 250000000], ['Indonesia', 425000000]]);\n  let options = {\n    colorAxis: {\n      colors: ['#b2ccf7', '#2272f5']\n    },\n    datalessRegionColor: '#ebf0f7',\n    backgroundColor: ''\n  };\n  let chart = new google.visualization.GeoChart(document.getElementById('regions_div'));\n  chart.draw(data, options);\n}\n\nmodule.exports = Map;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXAuanMuanMiLCJuYW1lcyI6WyJNYXAiLCJnb29nbGUiLCJjaGFydHMiLCJsb2FkIiwic2V0T25Mb2FkQ2FsbGJhY2siLCJkcmF3UmVnaW9uc01hcCIsImRhdGEiLCJ2aXN1YWxpemF0aW9uIiwiYXJyYXlUb0RhdGFUYWJsZSIsIm9wdGlvbnMiLCJjb2xvckF4aXMiLCJjb2xvcnMiLCJkYXRhbGVzc1JlZ2lvbkNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2hhcnQiLCJHZW9DaGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcmF3IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3RyZW5kcy8uL3NyYy9zY3JpcHRzL21hcC5qcz9mNTZkIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1hcCB7XG4gIFxufVxuXG5cbmdvb2dsZS5jaGFydHMubG9hZCgnY3VycmVudCcsIHtcbiAgJ3BhY2thZ2VzJzpbJ2dlb2NoYXJ0J10sXG59KTtcbmdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd1JlZ2lvbnNNYXApO1xuXG5mdW5jdGlvbiBkcmF3UmVnaW9uc01hcCAoKSB7XG4gIGxldCBkYXRhID0gZ29vZ2xlLnZpc3VhbGl6YXRpb24uYXJyYXlUb0RhdGFUYWJsZShbXG4gICAgWydDb3VudHJ5JywgJ1NlYXJjaCB2b2x1bWUvZGF5J10sXG4gICAgWydVbml0ZWQgU3RhdGVzJywgNTAwMDAwMDAwXSxcbiAgICBbJ0NhbmFkYScsIDIwMDAwMDAwMF0sXG4gICAgWydVbml0ZWQgS2luZ2RvbScsIDI1MDAwMDAwMF0sXG4gICAgWydJcmVsYW5kJywgNTAwMDAwMF0sXG4gICAgWydTb3V0aCBBZnJpY2EnLCAzMDAwMDAwMDBdLFxuICAgIFsnTmlnZXJpYScsIDMwMDAwMDBdLFxuICAgIFsnSW5kaWEnLCA1MDAwMDAwMDBdLFxuICAgIFsnU29uZ2Fwb3JlJywgMTAwMDAwMDBdLFxuICAgIFsnQXVzdHJhbGlhJywgMTUwMDAwMDAwXSxcbiAgICBbJ05ldyBaZWFsYW5kJywgNTAwMDAwMF0sXG4gICAgWydCcmF6aWwnLCA0NTAwMDAwMDBdLFxuICAgIFsnUnVzc2lhJywgMTAwMDAwMDAwXSxcbiAgICBbJ0NoaW5hJywgMjUwMDAwMDAwXSxcbiAgICBbJ0luZG9uZXNpYScsIDQyNTAwMDAwMF1cbiAgXSk7XG5cbiAgbGV0IG9wdGlvbnMgPSB7XG4gICAgY29sb3JBeGlzOiB7Y29sb3JzOiBbJyNiMmNjZjcnLCAnIzIyNzJmNSddfSxcbiAgICBkYXRhbGVzc1JlZ2lvbkNvbG9yOiAnI2ViZjBmNycsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnJ1xuICB9O1xuXG4gIGxldCBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5HZW9DaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaW9uc19kaXYnKSk7XG5cbiAgY2hhcnQuZHJhdyhkYXRhLCBvcHRpb25zKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFOLENBQVU7O0FBS1ZDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CLFNBQW5CLEVBQThCO0VBQzVCLFlBQVcsQ0FBQyxVQUFEO0FBRGlCLENBQTlCO0FBR0FGLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRSxpQkFBZCxDQUFnQ0MsY0FBaEM7O0FBRUEsU0FBU0EsY0FBVCxHQUEyQjtFQUN6QixJQUFJQyxJQUFJLEdBQUdMLE1BQU0sQ0FBQ00sYUFBUCxDQUFxQkMsZ0JBQXJCLENBQXNDLENBQy9DLENBQUMsU0FBRCxFQUFZLG1CQUFaLENBRCtDLEVBRS9DLENBQUMsZUFBRCxFQUFrQixTQUFsQixDQUYrQyxFQUcvQyxDQUFDLFFBQUQsRUFBVyxTQUFYLENBSCtDLEVBSS9DLENBQUMsZ0JBQUQsRUFBbUIsU0FBbkIsQ0FKK0MsRUFLL0MsQ0FBQyxTQUFELEVBQVksT0FBWixDQUwrQyxFQU0vQyxDQUFDLGNBQUQsRUFBaUIsU0FBakIsQ0FOK0MsRUFPL0MsQ0FBQyxTQUFELEVBQVksT0FBWixDQVArQyxFQVEvQyxDQUFDLE9BQUQsRUFBVSxTQUFWLENBUitDLEVBUy9DLENBQUMsV0FBRCxFQUFjLFFBQWQsQ0FUK0MsRUFVL0MsQ0FBQyxXQUFELEVBQWMsU0FBZCxDQVYrQyxFQVcvQyxDQUFDLGFBQUQsRUFBZ0IsT0FBaEIsQ0FYK0MsRUFZL0MsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQVorQyxFQWEvQyxDQUFDLFFBQUQsRUFBVyxTQUFYLENBYitDLEVBYy9DLENBQUMsT0FBRCxFQUFVLFNBQVYsQ0FkK0MsRUFlL0MsQ0FBQyxXQUFELEVBQWMsU0FBZCxDQWYrQyxDQUF0QyxDQUFYO0VBa0JBLElBQUlDLE9BQU8sR0FBRztJQUNaQyxTQUFTLEVBQUU7TUFBQ0MsTUFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVo7SUFBVCxDQURDO0lBRVpDLG1CQUFtQixFQUFFLFNBRlQ7SUFHWkMsZUFBZSxFQUFFO0VBSEwsQ0FBZDtFQU1BLElBQUlDLEtBQUssR0FBRyxJQUFJYixNQUFNLENBQUNNLGFBQVAsQ0FBcUJRLFFBQXpCLENBQWtDQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbEMsQ0FBWjtFQUVBSCxLQUFLLENBQUNJLElBQU4sQ0FBV1osSUFBWCxFQUFpQkcsT0FBakI7QUFDRDs7QUFFRFUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEIsR0FBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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