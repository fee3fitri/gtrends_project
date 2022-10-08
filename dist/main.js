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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/map */ \"./src/scripts/map.js\");\n/* harmony import */ var _scripts_trends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/trends */ \"./src/scripts/trends.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const mapContainer = document.getElementById(\"regions_div\");\n  const map = new _scripts_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const trends = new _scripts_trends__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2xELE1BQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQXJCO0VBQ0EsTUFBTUMsR0FBRyxHQUFHLElBQUlOLG9EQUFKLEVBQVo7RUFDQSxNQUFNTyxNQUFNLEdBQUcsSUFBSU4sdURBQUosRUFBZjtBQUNELENBSkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndHJlbmRzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hcCBmcm9tIFwiLi9zY3JpcHRzL21hcFwiXG5pbXBvcnQgVHJlbmRzIGZyb20gXCIuL3NjcmlwdHMvdHJlbmRzXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBtYXBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lvbnNfZGl2XCIpO1xuICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHRyZW5kcyA9IG5ldyBUcmVuZHMoKTtcbn0pOyJdLCJuYW1lcyI6WyJNYXAiLCJUcmVuZHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYXBDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsIm1hcCIsInRyZW5kcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\nclass Map {\n  constructor() {\n    this.drawRegionsMap = this.drawRegionsMap.bind(this);\n    this.load();\n  } // Querying the map data from Google Spreadsheet\n\n\n  drawRegionsMap() {\n    let query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1LOD5EAr5K5u45ORZiafyk5k96aI_ByzYk-NkJM0k6do/gviz/tq?gid=0&headers=1&range=A1:B15');\n    query.send(this.handleQueryResponse);\n  } // Creating and customizing the map based on spreadsheet data and map options\n\n\n  handleQueryResponse(response) {\n    if (response.isError()) {\n      alert(`Error in query: ${response.getMessage()} + ${response.getDetailedMessage()}`);\n      return;\n    }\n\n    let data = response.getDataTable();\n    let chart = new google.visualization.GeoChart(document.getElementById('regions_div'));\n    let options = {\n      colorAxis: {\n        colors: ['#b2ccf7', '#2272f5']\n      },\n      datalessRegionColor: '#ebf0f7',\n      backgroundColor: ''\n    };\n\n    function clickHandler() {\n      let selection = chart.getSelection();\n      let trendBox = document.querySelector(\".trend-box\");\n      let message = '';\n\n      for (let item of selection) {\n        message += `{row: ${item.row}}`;\n      }\n\n      if (message === '') message = 'nothing';\n      trendBox.innerHTML = `You select ${message}`;\n    }\n\n    chart.draw(data, options);\n    google.visualization.events.addListener(chart, 'select', clickHandler);\n  } // Show the map when the page is loaded\n\n\n  load() {\n    google.charts.load('current', {\n      'packages': ['geochart']\n    });\n    google.charts.setOnLoadCallback(this.drawRegionsMap);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLEdBQU4sQ0FBVTtFQUN2QkMsV0FBVyxHQUFHO0lBQ1osS0FBS0MsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUF0QjtJQUNBLEtBQUtDLElBQUw7RUFDRCxDQUpzQixDQU12Qjs7O0VBQ0FGLGNBQWMsR0FBRztJQUNmLElBQUlHLEtBQUssR0FBRyxJQUFJQyxNQUFNLENBQUNDLGFBQVAsQ0FBcUJDLEtBQXpCLENBQ1YsMEhBRFUsQ0FBWjtJQUlBSCxLQUFLLENBQUNJLElBQU4sQ0FBVyxLQUFLQyxtQkFBaEI7RUFDRCxDQWJzQixDQWV2Qjs7O0VBQ0FBLG1CQUFtQixDQUFDQyxRQUFELEVBQVc7SUFDNUIsSUFBSUEsUUFBUSxDQUFDQyxPQUFULEVBQUosRUFBd0I7TUFDdEJDLEtBQUssQ0FBRSxtQkFBa0JGLFFBQVEsQ0FBQ0csVUFBVCxFQUFzQixNQUFLSCxRQUFRLENBQUNJLGtCQUFULEVBQThCLEVBQTdFLENBQUw7TUFDQTtJQUNEOztJQUVELElBQUlDLElBQUksR0FBR0wsUUFBUSxDQUFDTSxZQUFULEVBQVg7SUFDQSxJQUFJQyxLQUFLLEdBQUcsSUFBSVosTUFBTSxDQUFDQyxhQUFQLENBQXFCWSxRQUF6QixDQUFrQ0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWxDLENBQVo7SUFFQSxJQUFJQyxPQUFPLEdBQUc7TUFDWkMsU0FBUyxFQUFFO1FBQUNDLE1BQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaO01BQVQsQ0FEQztNQUVaQyxtQkFBbUIsRUFBRSxTQUZUO01BR1pDLGVBQWUsRUFBRTtJQUhMLENBQWQ7O0lBTUEsU0FBU0MsWUFBVCxHQUF3QjtNQUN0QixJQUFJQyxTQUFTLEdBQUdWLEtBQUssQ0FBQ1csWUFBTixFQUFoQjtNQUNBLElBQUlDLFFBQVEsR0FBR1YsUUFBUSxDQUFDVyxhQUFULENBQXVCLFlBQXZCLENBQWY7TUFDQSxJQUFJQyxPQUFPLEdBQUcsRUFBZDs7TUFFQSxLQUFLLElBQUlDLElBQVQsSUFBaUJMLFNBQWpCLEVBQTRCO1FBQzFCSSxPQUFPLElBQUssU0FBUUMsSUFBSSxDQUFDQyxHQUFJLEdBQTdCO01BQ0Q7O01BRUQsSUFBSUYsT0FBTyxLQUFLLEVBQWhCLEVBQW9CQSxPQUFPLEdBQUcsU0FBVjtNQUNwQkYsUUFBUSxDQUFDSyxTQUFULEdBQXNCLGNBQWFILE9BQVEsRUFBM0M7SUFDRDs7SUFFRGQsS0FBSyxDQUFDa0IsSUFBTixDQUFXcEIsSUFBWCxFQUFpQk0sT0FBakI7SUFDQWhCLE1BQU0sQ0FBQ0MsYUFBUCxDQUFxQjhCLE1BQXJCLENBQTRCQyxXQUE1QixDQUF3Q3BCLEtBQXhDLEVBQStDLFFBQS9DLEVBQXlEUyxZQUF6RDtFQUNELENBOUNzQixDQWlEdkI7OztFQUNBdkIsSUFBSSxHQUFHO0lBQ0xFLE1BQU0sQ0FBQ2lDLE1BQVAsQ0FBY25DLElBQWQsQ0FBbUIsU0FBbkIsRUFBOEI7TUFDNUIsWUFBVyxDQUFDLFVBQUQ7SUFEaUIsQ0FBOUI7SUFJQUUsTUFBTSxDQUFDaUMsTUFBUCxDQUFjQyxpQkFBZCxDQUFnQyxLQUFLdEMsY0FBckM7RUFDRDs7QUF4RHNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3RyZW5kcy8uL3NyYy9zY3JpcHRzL21hcC5qcz9mNTZkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZHJhd1JlZ2lvbnNNYXAgPSB0aGlzLmRyYXdSZWdpb25zTWFwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2FkKCk7XG4gIH1cblxuICAvLyBRdWVyeWluZyB0aGUgbWFwIGRhdGEgZnJvbSBHb29nbGUgU3ByZWFkc2hlZXRcbiAgZHJhd1JlZ2lvbnNNYXAoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLlF1ZXJ5KFxuICAgICAgJ2h0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzFMT0Q1RUFyNUs1dTQ1T1JaaWFmeWs1azk2YUlfQnl6WWstTmtKTTBrNmRvL2d2aXovdHE/Z2lkPTAmaGVhZGVycz0xJnJhbmdlPUExOkIxNSdcbiAgICAgICk7XG5cbiAgICBxdWVyeS5zZW5kKHRoaXMuaGFuZGxlUXVlcnlSZXNwb25zZSk7XG4gIH1cblxuICAvLyBDcmVhdGluZyBhbmQgY3VzdG9taXppbmcgdGhlIG1hcCBiYXNlZCBvbiBzcHJlYWRzaGVldCBkYXRhIGFuZCBtYXAgb3B0aW9uc1xuICBoYW5kbGVRdWVyeVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLmlzRXJyb3IoKSkge1xuICAgICAgYWxlcnQoYEVycm9yIGluIHF1ZXJ5OiAke3Jlc3BvbnNlLmdldE1lc3NhZ2UoKX0gKyAke3Jlc3BvbnNlLmdldERldGFpbGVkTWVzc2FnZSgpfWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgbGV0IGRhdGEgPSByZXNwb25zZS5nZXREYXRhVGFibGUoKTtcbiAgICBsZXQgY2hhcnQgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uR2VvQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lvbnNfZGl2JykpO1xuICAgIFxuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgY29sb3JBeGlzOiB7Y29sb3JzOiBbJyNiMmNjZjcnLCAnIzIyNzJmNSddfSxcbiAgICAgIGRhdGFsZXNzUmVnaW9uQ29sb3I6ICcjZWJmMGY3JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJydcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBjaGFydC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIGxldCB0cmVuZEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlbmQtYm94XCIpO1xuICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcbiAgXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIHNlbGVjdGlvbikge1xuICAgICAgICBtZXNzYWdlICs9IGB7cm93OiAke2l0ZW0ucm93fX1gXG4gICAgICB9XG4gIFxuICAgICAgaWYgKG1lc3NhZ2UgPT09ICcnKSBtZXNzYWdlID0gJ25vdGhpbmcnO1xuICAgICAgdHJlbmRCb3guaW5uZXJIVE1MID0gYFlvdSBzZWxlY3QgJHttZXNzYWdlfWA7XG4gICAgfVxuXG4gICAgY2hhcnQuZHJhdyhkYXRhLCBvcHRpb25zKTtcbiAgICBnb29nbGUudmlzdWFsaXphdGlvbi5ldmVudHMuYWRkTGlzdGVuZXIoY2hhcnQsICdzZWxlY3QnLCBjbGlja0hhbmRsZXIpO1xuICB9XG4gIFxuXG4gIC8vIFNob3cgdGhlIG1hcCB3aGVuIHRoZSBwYWdlIGlzIGxvYWRlZFxuICBsb2FkKCkge1xuICAgIGdvb2dsZS5jaGFydHMubG9hZCgnY3VycmVudCcsIHtcbiAgICAgICdwYWNrYWdlcyc6WydnZW9jaGFydCddLFxuICAgIH0pO1xuXG4gICAgZ29vZ2xlLmNoYXJ0cy5zZXRPbkxvYWRDYWxsYmFjayh0aGlzLmRyYXdSZWdpb25zTWFwKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJNYXAiLCJjb25zdHJ1Y3RvciIsImRyYXdSZWdpb25zTWFwIiwiYmluZCIsImxvYWQiLCJxdWVyeSIsImdvb2dsZSIsInZpc3VhbGl6YXRpb24iLCJRdWVyeSIsInNlbmQiLCJoYW5kbGVRdWVyeVJlc3BvbnNlIiwicmVzcG9uc2UiLCJpc0Vycm9yIiwiYWxlcnQiLCJnZXRNZXNzYWdlIiwiZ2V0RGV0YWlsZWRNZXNzYWdlIiwiZGF0YSIsImdldERhdGFUYWJsZSIsImNoYXJ0IiwiR2VvQ2hhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9ucyIsImNvbG9yQXhpcyIsImNvbG9ycyIsImRhdGFsZXNzUmVnaW9uQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGlja0hhbmRsZXIiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJ0cmVuZEJveCIsInF1ZXJ5U2VsZWN0b3IiLCJtZXNzYWdlIiwiaXRlbSIsInJvdyIsImlubmVySFRNTCIsImRyYXciLCJldmVudHMiLCJhZGRMaXN0ZW5lciIsImNoYXJ0cyIsInNldE9uTG9hZENhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

/***/ }),

/***/ "./src/scripts/trends.js":
/*!*******************************!*\
  !*** ./src/scripts/trends.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Trends; }\n/* harmony export */ });\nclass Trends {\n  constructor() {\n    this.currentDate = document.getElementById(\"current-date\");\n    this.today = new Date();\n    this.printDate();\n  }\n\n  printDate() {\n    const days = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n    const months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n    let day = days[this.today.getDay()];\n    let month = months[this.today.getMonth()];\n    let date = this.today.getDate();\n    let year = this.today.getFullYear();\n    this.currentDate.innerHTML = `${day}, ${month} ${date}, ${year}`;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90cmVuZHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLE1BQU4sQ0FBYTtFQUMxQkMsV0FBVyxHQUFHO0lBQ1osS0FBS0MsV0FBTCxHQUFtQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQW5CO0lBQ0EsS0FBS0MsS0FBTCxHQUFhLElBQUlDLElBQUosRUFBYjtJQUNBLEtBQUtDLFNBQUw7RUFDRDs7RUFFREEsU0FBUyxHQUFHO0lBQ1YsTUFBTUMsSUFBSSxHQUFHLENBQ1gsUUFEVyxFQUVYLFFBRlcsRUFHWCxTQUhXLEVBSVgsV0FKVyxFQUtYLFVBTFcsRUFNWCxRQU5XLEVBT1gsVUFQVyxDQUFiO0lBVUEsTUFBTUMsTUFBTSxHQUFHLENBQ2IsU0FEYSxFQUViLFVBRmEsRUFHYixPQUhhLEVBSWIsT0FKYSxFQUtiLEtBTGEsRUFNYixNQU5hLEVBT2IsTUFQYSxFQVFiLFFBUmEsRUFTYixXQVRhLEVBVWIsU0FWYSxFQVdiLFVBWGEsRUFZYixVQVphLENBQWY7SUFlQSxJQUFJQyxHQUFHLEdBQUdGLElBQUksQ0FBQyxLQUFLSCxLQUFMLENBQVdNLE1BQVgsRUFBRCxDQUFkO0lBQ0EsSUFBSUMsS0FBSyxHQUFHSCxNQUFNLENBQUMsS0FBS0osS0FBTCxDQUFXUSxRQUFYLEVBQUQsQ0FBbEI7SUFDQSxJQUFJQyxJQUFJLEdBQUcsS0FBS1QsS0FBTCxDQUFXVSxPQUFYLEVBQVg7SUFDQSxJQUFJQyxJQUFJLEdBQUcsS0FBS1gsS0FBTCxDQUFXWSxXQUFYLEVBQVg7SUFFQSxLQUFLZixXQUFMLENBQWlCZ0IsU0FBakIsR0FBOEIsR0FBRVIsR0FBSSxLQUFJRSxLQUFNLElBQUdFLElBQUssS0FBSUUsSUFBSyxFQUEvRDtFQUNEOztBQXZDeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndHJlbmRzLy4vc3JjL3NjcmlwdHMvdHJlbmRzLmpzP2Q3MWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlbmRzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1kYXRlXCIpXG4gICAgdGhpcy50b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5wcmludERhdGUoKTtcbiAgfVxuXG4gIHByaW50RGF0ZSgpIHtcbiAgICBjb25zdCBkYXlzID0gW1xuICAgICAgXCJTdW5kYXlcIixcbiAgICAgIFwiTW9uZGF5XCIsXG4gICAgICBcIlR1ZXNkYXlcIixcbiAgICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgICBcIlRodXJzZGF5XCIsXG4gICAgICBcIkZyaWRheVwiLFxuICAgICAgXCJTYXR1cmRheVwiXG4gICAgXTtcblxuICAgIGNvbnN0IG1vbnRocyA9IFtcbiAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgXCJNYXJjaFwiLFxuICAgICAgXCJBcHJpbFwiLFxuICAgICAgXCJNYXlcIixcbiAgICAgIFwiSnVuZVwiLFxuICAgICAgXCJKdWx5XCIsXG4gICAgICBcIkF1Z3VzdFwiLFxuICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgIFwiT2N0b2JlclwiLFxuICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgXCJEZWNlbWJlclwiXG4gICAgXVxuXG4gICAgbGV0IGRheSA9IGRheXNbdGhpcy50b2RheS5nZXREYXkoKV07XG4gICAgbGV0IG1vbnRoID0gbW9udGhzW3RoaXMudG9kYXkuZ2V0TW9udGgoKV07XG4gICAgbGV0IGRhdGUgPSB0aGlzLnRvZGF5LmdldERhdGUoKTtcbiAgICBsZXQgeWVhciA9IHRoaXMudG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgIHRoaXMuY3VycmVudERhdGUuaW5uZXJIVE1MID0gYCR7ZGF5fSwgJHttb250aH0gJHtkYXRlfSwgJHt5ZWFyfWA7XG4gIH1cbn0iXSwibmFtZXMiOlsiVHJlbmRzIiwiY29uc3RydWN0b3IiLCJjdXJyZW50RGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2RheSIsIkRhdGUiLCJwcmludERhdGUiLCJkYXlzIiwibW9udGhzIiwiZGF5IiwiZ2V0RGF5IiwibW9udGgiLCJnZXRNb250aCIsImRhdGUiLCJnZXREYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/trends.js\n");

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