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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/map */ \"./src/scripts/map.js\");\n/* harmony import */ var _scripts_trends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/trends */ \"./src/scripts/trends.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const mapContainer = document.getElementById(\"regions_div\");\n  const map = new _scripts_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const trends = new _scripts_trends__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2xELE1BQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQXJCO0VBQ0EsTUFBTUMsR0FBRyxHQUFHLElBQUlOLG9EQUFKLEVBQVo7RUFDQSxNQUFNTyxNQUFNLEdBQUcsSUFBSU4sdURBQUosRUFBZjtBQUVELENBTEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndHJlbmRzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hcCBmcm9tIFwiLi9zY3JpcHRzL21hcFwiXG5pbXBvcnQgVHJlbmRzIGZyb20gXCIuL3NjcmlwdHMvdHJlbmRzXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBtYXBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZ2lvbnNfZGl2XCIpO1xuICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHRyZW5kcyA9IG5ldyBUcmVuZHMoKTtcbiAgXG59KTsiXSwibmFtZXMiOlsiTWFwIiwiVHJlbmRzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFwQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJtYXAiLCJ0cmVuZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\nconst COUNTRIES = [{\n  \"United States\": [{\n    'trends': 'Broncos',\n    'volume': 1000000\n  }, {\n    'trends': 'Omonia vs Man United',\n    'volume': 500000\n  }, {\n    'trends': 'Pixel 7',\n    'volume': 200000\n  }, {\n    'trends': 'Mario movie trailer',\n    'volume': 200000\n  }, {\n    'trends': 'Arsenal vs bodø/glimt',\n    'volume': 200000\n  }]\n}, {\n  \"Canada\": [{\n    'trends': 'Omonia vs Man United',\n    'volume': 100000\n  }, {\n    'trends': 'UCP leadership race',\n    'volume': 50000\n  }, {\n    'trends': 'Pixel 7',\n    'volume': 50000\n  }, {\n    'trends': 'Thailand',\n    'volume': 20000\n  }, {\n    'trends': 'Arsenal vs bodø/glimt',\n    'volume': 20000\n  }]\n}, {\n  \"United Kingdom\": [{\n    'trends': 'Arsenal vs bodø/glimt',\n    'volume': 500000\n  }, {\n    'trends': 'Velma',\n    'volume': 200000\n  }, {\n    'trends': 'Anderlecht vs West Ham',\n    'volume': 100000\n  }, {\n    'trends': 'Pixel 7',\n    'volume': 50000\n  }, {\n    'trends': 'Thailand',\n    'volume': 50000\n  }]\n}, {\n  \"Ireland\": [{\n    'trends': 'Arsenal vs bodø/glimt',\n    'volume': 20000\n  }, {\n    'trends': 'Velma',\n    'volume': 10000\n  }, {\n    'trends': 'Shamrock Rovers',\n    'volume': 10000\n  }, {\n    'trends': 'Irish dancing scandal',\n    'volume': 5000\n  }, {\n    'trends': 'Anderlecht vs West Ham',\n    'volume': 5000\n  }]\n}, {\n  \"South Africa\": [{\n    'trends': 'Arsenal vs bodø/glimt',\n    'volume': 100000\n  }, {\n    'trends': 'Velma',\n    'volume': 20000\n  }, {\n    'trends': 'Roma vs Real Betis',\n    'volume': 20000\n  }, {\n    'trends': 'Man Utd',\n    'volume': 20000\n  }, {\n    'trends': 'Anderlecht vs West Ham',\n    'volume': 20000\n  }]\n}, {\n  \"Nigeria\": [{\n    'trends': 'Chelsea vs Milan',\n    'volume': 200000\n  }, {\n    'trends': 'Roma vs Real Betis',\n    'volume': 20000\n  }, {\n    'trends': 'Man United',\n    'volume': 20000\n  }, {\n    'trends': 'Anderlecht vs West Ham',\n    'volume': 10000\n  }, {\n    'trends': 'Sheriff vs Real Sociedad',\n    'volume': 10000\n  }]\n}, {\n  \"India\": [{\n    'trends': 'Cricket Live',\n    'volume': 1000000\n  }, {\n    'trends': 'Man City',\n    'volume': 100000\n  }, {\n    'trends': 'Arsenal vs bodø/glimt',\n    'volume': 100000\n  }, {\n    'trends': 'Pixel 7',\n    'volume': 100000\n  }, {\n    'trends': 'Real Madrid',\n    'volume': 50000\n  }]\n}, {\n  \"Singapore\": [{\n    'trends': 'Real Madrid',\n    'volume': 20000\n  }, {\n    'trends': 'Man City',\n    'volume': 10000\n  }, {\n    'trends': 'Real Madrid vs Shakhtar Donetsk',\n    'volume': 10000\n  }, {\n    'trends': 'Pixel 7',\n    'volume': 10000\n  }, {\n    'trends': 'Thailand',\n    'volume': 10000\n  }]\n}, {\n  \"Australia\": [{\n    'trends': 'Omonia vs Man United',\n    'volume': 100000\n  }, {\n    'trends': 'Chelsea vs Milan',\n    'volume': 50000\n  }, {\n    'trends': 'Powerball Results',\n    'volume': 50000\n  }, {\n    'trends': 'Thailand',\n    'volume': 50000\n  }, {\n    'trends': 'Benfica vs PSG',\n    'volume': 50000\n  }]\n}, {\n  \"New Zealand\": [{\n    'trends': 'Omonia vs Man United',\n    'volume': 20000\n  }, {\n    'trends': 'Arsenal vs bodø/glimt',\n    'volume': 10000\n  }, {\n    'trends': 'Thailand',\n    'volume': 5000\n  }, {\n    'trends': 'Peter Ellis',\n    'volume': 2000\n  }, {\n    'trends': 'Megaland',\n    'volume': 2000\n  }]\n}, {\n  \"Brazil\": [{\n    'trends': 'Alexandre de Moraes',\n    'volume': 200000\n  }, {\n    'trends': 'Jogo de Palmeiras',\n    'volume': 100000\n  }, {\n    'trends': 'Noruega x Brasil',\n    'volume': 100000\n  }, {\n    'trends': 'Fernanda Montenegro',\n    'volume': 100000\n  }, {\n    'trends': 'Valencia',\n    'volume': 100000\n  }]\n}, {\n  \"Russia\": [{\n    'trends': 'Паша Техник',\n    'volume': 100000\n  }, {\n    'trends': 'Кот',\n    'volume': 20000\n  }, {\n    'trends': 'Байден',\n    'volume': 20000\n  }, {\n    'trends': 'Мемориал',\n    'volume': 20000\n  }, {\n    'trends': 'Никита Пресняков',\n    'volume': 20000\n  }]\n}, {\n  \"Indonesia\": [{\n    'trends': 'Maulid Nabi 2022',\n    'volume': 200000\n  }, {\n    'trends': 'Arsenal',\n    'volume': 50000\n  }, {\n    'trends': 'Agama Farel Prayoga',\n    'volume': 50000\n  }, {\n    'trends': 'Dadang Aremania',\n    'volume': 50000\n  }, {\n    'trends': 'BMKG',\n    'volume': 20000\n  }]\n}];\nclass Map {\n  constructor() {\n    this.drawRegionsMap = this.drawRegionsMap.bind(this);\n    this.load();\n  } // Querying the map data from Google Spreadsheet\n\n\n  drawRegionsMap() {\n    const query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1LOD5EAr5K5u45ORZiafyk5k96aI_ByzYk-NkJM0k6do/gviz/tq?gid=0&headers=1&range=A1:B15');\n    query.send(this.handleQueryResponse);\n  } // Creating and customizing the map based on spreadsheet data and map options\n\n\n  handleQueryResponse(response) {\n    if (response.isError()) {\n      alert(`Error in query: ${response.getMessage()} + ${response.getDetailedMessage()}`);\n      return;\n    }\n\n    const data = response.getDataTable();\n    const chart = new google.visualization.GeoChart(document.getElementById('regions_div'));\n    const options = {\n      colorAxis: {\n        colors: ['#b2ccf7', '#2272f5']\n      },\n      datalessRegionColor: '#ebf0f7',\n      backgroundColor: ''\n    };\n\n    const clickHandler = () => {\n      const selection = chart.getSelection();\n      const trendBox = document.querySelector(\".trend-box\");\n      let country, trendsObj, countryTrends, countryNode;\n\n      for (let item of selection) {\n        const row = item.row;\n        country = data.getValue(row, 0);\n        trendsObj = Object.values(COUNTRIES[row])[0];\n      }\n\n      ;\n      trendBox.innerHTML = `\n      <div class=\"trend-content\"><p>${Object.values(trendsObj[0])}</p></div>\n      <div class=\"trend-content\"><p>${Object.values(trendsObj[1])}</p></div>\n      <div class=\"trend-content\"><p>${Object.values(trendsObj[2])}</p></div>\n      <div class=\"trend-content\"><p>${Object.values(trendsObj[3])}</p></div>\n      <div class=\"trend-content\"><p>${Object.values(trendsObj[4])}</p></div>`;\n    };\n\n    chart.draw(data, options);\n    google.visualization.events.addListener(chart, 'select', clickHandler);\n  } // Show the map when the page is loaded\n\n\n  load() {\n    google.charts.load('current', {\n      'packages': ['geochart']\n    });\n    google.charts.setOnLoadCallback(this.drawRegionsMap);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNDTSxNQUFNLENBQUNDLE1BQVAsQ0FBY1AsU0FBUyxDQUFDLENBQUQsQ0FBdkIsQ0FBNEI7QUFDbEUsc0NBQXNDTSxNQUFNLENBQUNDLE1BQVAsQ0FBY1AsU0FBUyxDQUFDLENBQUQsQ0FBdkIsQ0FBNEI7QUFDbEUsc0NBQXNDTSxNQUFNLENBQUNDLE1BQVAsQ0FBY1AsU0FBUyxDQUFDLENBQUQsQ0FBdkIsQ0FBNEI7QUFDbEUsc0NBQXNDTSxNQUFNLENBQUNDLE1BQVAsQ0FBY1AsU0FBUyxDQUFDLENBQUQsQ0FBdkIsQ0FBNEIsWUFMNUQ7SUFNRCxDQWpCRDs7SUFtQkFmLEtBQUssQ0FBQ3dCLElBQU4sQ0FBVzFCLElBQVgsRUFBaUJNLE9BQWpCO0lBQ0FoQixNQUFNLENBQUNDLGFBQVAsQ0FBcUJvQyxNQUFyQixDQUE0QkMsV0FBNUIsQ0FBd0MxQixLQUF4QyxFQUErQyxRQUEvQyxFQUF5RFMsWUFBekQ7RUFDRCxDQW5Ec0IsQ0FxRHZCOzs7RUFDQXZCLElBQUksR0FBRztJQUNMRSxNQUFNLENBQUN1QyxNQUFQLENBQWN6QyxJQUFkLENBQW1CLFNBQW5CLEVBQThCO01BQzVCLFlBQVcsQ0FBQyxVQUFEO0lBRGlCLENBQTlCO0lBSUFFLE1BQU0sQ0FBQ3VDLE1BQVAsQ0FBY0MsaUJBQWQsQ0FBZ0MsS0FBSzVDLGNBQXJDO0VBQ0Q7O0FBNURzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2d0cmVuZHMvLi9zcmMvc2NyaXB0cy9tYXAuanM/ZjU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT1VOVFJJRVMgPSBbXG4gIHtcIlVuaXRlZCBTdGF0ZXNcIjogW1xuICAgIHsndHJlbmRzJzogJ0Jyb25jb3MnLCAndm9sdW1lJzogMTAwMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnT21vbmlhIHZzIE1hbiBVbml0ZWQnLCAndm9sdW1lJzogNTAwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdQaXhlbCA3JywgJ3ZvbHVtZSc6IDIwMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnTWFyaW8gbW92aWUgdHJhaWxlcicsICd2b2x1bWUnOiAyMDAwMDB9LFxuICAgIHsndHJlbmRzJzogJ0Fyc2VuYWwgdnMgYm9kw7gvZ2xpbXQnLCAndm9sdW1lJzogMjAwMDAwfVxuXX0sXG4gIHtcIkNhbmFkYVwiOiBbXG4gICAgeyd0cmVuZHMnOiAnT21vbmlhIHZzIE1hbiBVbml0ZWQnLCAndm9sdW1lJzogMTAwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdVQ1AgbGVhZGVyc2hpcCByYWNlJywgJ3ZvbHVtZSc6IDUwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdQaXhlbCA3JywgJ3ZvbHVtZSc6IDUwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdUaGFpbGFuZCcsICd2b2x1bWUnOiAyMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnQXJzZW5hbCB2cyBib2TDuC9nbGltdCcsICd2b2x1bWUnOiAyMDAwMH0sXG4gIF19LFxuICB7XCJVbml0ZWQgS2luZ2RvbVwiOiBbXG4gICAgeyd0cmVuZHMnOiAnQXJzZW5hbCB2cyBib2TDuC9nbGltdCcsICd2b2x1bWUnOiA1MDAwMDB9LFxuICAgIHsndHJlbmRzJzogJ1ZlbG1hJywgJ3ZvbHVtZSc6IDIwMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnQW5kZXJsZWNodCB2cyBXZXN0IEhhbScsICd2b2x1bWUnOiAxMDAwMDB9LFxuICAgIHsndHJlbmRzJzogJ1BpeGVsIDcnLCAndm9sdW1lJzogNTAwMDB9LFxuICAgIHsndHJlbmRzJzogJ1RoYWlsYW5kJywgJ3ZvbHVtZSc6IDUwMDAwfSxcbiAgXX0sXG4gIHtcIklyZWxhbmRcIjogW1xuICAgIHsndHJlbmRzJzogJ0Fyc2VuYWwgdnMgYm9kw7gvZ2xpbXQnLCAndm9sdW1lJzogMjAwMDB9LFxuICAgIHsndHJlbmRzJzogJ1ZlbG1hJywgJ3ZvbHVtZSc6IDEwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdTaGFtcm9jayBSb3ZlcnMnLCAndm9sdW1lJzogMTAwMDB9LFxuICAgIHsndHJlbmRzJzogJ0lyaXNoIGRhbmNpbmcgc2NhbmRhbCcsICd2b2x1bWUnOiA1MDAwfSxcbiAgICB7J3RyZW5kcyc6ICdBbmRlcmxlY2h0IHZzIFdlc3QgSGFtJywgJ3ZvbHVtZSc6IDUwMDB9LFxuICBdfSxcbiAge1wiU291dGggQWZyaWNhXCI6IFtcbiAgICB7J3RyZW5kcyc6ICdBcnNlbmFsIHZzIGJvZMO4L2dsaW10JywgJ3ZvbHVtZSc6IDEwMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnVmVsbWEnLCAndm9sdW1lJzogMjAwMDB9LFxuICAgIHsndHJlbmRzJzogJ1JvbWEgdnMgUmVhbCBCZXRpcycsICd2b2x1bWUnOiAyMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnTWFuIFV0ZCcsICd2b2x1bWUnOiAyMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnQW5kZXJsZWNodCB2cyBXZXN0IEhhbScsICd2b2x1bWUnOiAyMDAwMH0sXG4gIF19LFxuICB7XCJOaWdlcmlhXCI6IFtcbiAgICB7J3RyZW5kcyc6ICdDaGVsc2VhIHZzIE1pbGFuJywgJ3ZvbHVtZSc6IDIwMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnUm9tYSB2cyBSZWFsIEJldGlzJywgJ3ZvbHVtZSc6IDIwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdNYW4gVW5pdGVkJywgJ3ZvbHVtZSc6IDIwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdBbmRlcmxlY2h0IHZzIFdlc3QgSGFtJywgJ3ZvbHVtZSc6IDEwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdTaGVyaWZmIHZzIFJlYWwgU29jaWVkYWQnLCAndm9sdW1lJzogMTAwMDB9LFxuICBdfSxcbiAge1wiSW5kaWFcIjogW1xuICAgIHsndHJlbmRzJzogJ0NyaWNrZXQgTGl2ZScsICd2b2x1bWUnOiAxMDAwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdNYW4gQ2l0eScsICd2b2x1bWUnOiAxMDAwMDB9LFxuICAgIHsndHJlbmRzJzogJ0Fyc2VuYWwgdnMgYm9kw7gvZ2xpbXQnLCAndm9sdW1lJzogMTAwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdQaXhlbCA3JywgJ3ZvbHVtZSc6IDEwMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnUmVhbCBNYWRyaWQnLCAndm9sdW1lJzogNTAwMDB9LFxuICBdfSxcbiAge1wiU2luZ2Fwb3JlXCI6IFtcbiAgICB7J3RyZW5kcyc6ICdSZWFsIE1hZHJpZCcsICd2b2x1bWUnOiAyMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnTWFuIENpdHknLCAndm9sdW1lJzogMTAwMDB9LFxuICAgIHsndHJlbmRzJzogJ1JlYWwgTWFkcmlkIHZzIFNoYWtodGFyIERvbmV0c2snLCAndm9sdW1lJzogMTAwMDB9LFxuICAgIHsndHJlbmRzJzogJ1BpeGVsIDcnLCAndm9sdW1lJzogMTAwMDB9LFxuICAgIHsndHJlbmRzJzogJ1RoYWlsYW5kJywgJ3ZvbHVtZSc6IDEwMDAwfSxcbiAgXX0sXG4gIHtcIkF1c3RyYWxpYVwiOiBbXG4gICAgeyd0cmVuZHMnOiAnT21vbmlhIHZzIE1hbiBVbml0ZWQnLCAndm9sdW1lJzogMTAwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdDaGVsc2VhIHZzIE1pbGFuJywgJ3ZvbHVtZSc6IDUwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdQb3dlcmJhbGwgUmVzdWx0cycsICd2b2x1bWUnOiA1MDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnVGhhaWxhbmQnLCAndm9sdW1lJzogNTAwMDB9LFxuICAgIHsndHJlbmRzJzogJ0JlbmZpY2EgdnMgUFNHJywgJ3ZvbHVtZSc6IDUwMDAwfSxcbiAgXX0sXG4gIHtcIk5ldyBaZWFsYW5kXCI6IFtcbiAgICB7J3RyZW5kcyc6ICdPbW9uaWEgdnMgTWFuIFVuaXRlZCcsICd2b2x1bWUnOiAyMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnQXJzZW5hbCB2cyBib2TDuC9nbGltdCcsICd2b2x1bWUnOiAxMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnVGhhaWxhbmQnLCAndm9sdW1lJzogNTAwMH0sXG4gICAgeyd0cmVuZHMnOiAnUGV0ZXIgRWxsaXMnLCAndm9sdW1lJzogMjAwMH0sXG4gICAgeyd0cmVuZHMnOiAnTWVnYWxhbmQnLCAndm9sdW1lJzogMjAwMH0sXG4gIF19LFxuICB7XCJCcmF6aWxcIjogW1xuICAgIHsndHJlbmRzJzogJ0FsZXhhbmRyZSBkZSBNb3JhZXMnLCAndm9sdW1lJzogMjAwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdKb2dvIGRlIFBhbG1laXJhcycsICd2b2x1bWUnOiAxMDAwMDB9LFxuICAgIHsndHJlbmRzJzogJ05vcnVlZ2EgeCBCcmFzaWwnLCAndm9sdW1lJzogMTAwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdGZXJuYW5kYSBNb250ZW5lZ3JvJywgJ3ZvbHVtZSc6IDEwMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnVmFsZW5jaWEnLCAndm9sdW1lJzogMTAwMDAwfSxcbiAgXX0sXG4gIHtcIlJ1c3NpYVwiOiBbXG4gICAgeyd0cmVuZHMnOiAn0J/QsNGI0LAg0KLQtdGF0L3QuNC6JywgJ3ZvbHVtZSc6IDEwMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAn0JrQvtGCJywgJ3ZvbHVtZSc6IDIwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICfQkdCw0LnQtNC10L0nLCAndm9sdW1lJzogMjAwMDB9LFxuICAgIHsndHJlbmRzJzogJ9Cc0LXQvNC+0YDQuNCw0LsnLCAndm9sdW1lJzogMjAwMDB9LFxuICAgIHsndHJlbmRzJzogJ9Cd0LjQutC40YLQsCDQn9GA0LXRgdC90Y/QutC+0LInLCAndm9sdW1lJzogMjAwMDB9LFxuICBdfSxcbiAge1wiSW5kb25lc2lhXCI6IFtcbiAgICB7J3RyZW5kcyc6ICdNYXVsaWQgTmFiaSAyMDIyJywgJ3ZvbHVtZSc6IDIwMDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnQXJzZW5hbCcsICd2b2x1bWUnOiA1MDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnQWdhbWEgRmFyZWwgUHJheW9nYScsICd2b2x1bWUnOiA1MDAwMH0sXG4gICAgeyd0cmVuZHMnOiAnRGFkYW5nIEFyZW1hbmlhJywgJ3ZvbHVtZSc6IDUwMDAwfSxcbiAgICB7J3RyZW5kcyc6ICdCTUtHJywgJ3ZvbHVtZSc6IDIwMDAwfSxcbiAgXX1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZHJhd1JlZ2lvbnNNYXAgPSB0aGlzLmRyYXdSZWdpb25zTWFwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2FkKCk7XG4gIH1cblxuICAvLyBRdWVyeWluZyB0aGUgbWFwIGRhdGEgZnJvbSBHb29nbGUgU3ByZWFkc2hlZXRcbiAgZHJhd1JlZ2lvbnNNYXAoKSB7XG4gICAgY29uc3QgcXVlcnkgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uUXVlcnkoXG4gICAgICAnaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMUxPRDVFQXI1SzV1NDVPUlppYWZ5azVrOTZhSV9CeXpZay1Oa0pNMGs2ZG8vZ3Zpei90cT9naWQ9MCZoZWFkZXJzPTEmcmFuZ2U9QTE6QjE1J1xuICAgICAgKTtcblxuICAgIHF1ZXJ5LnNlbmQodGhpcy5oYW5kbGVRdWVyeVJlc3BvbnNlKTtcbiAgfVxuXG4gIC8vIENyZWF0aW5nIGFuZCBjdXN0b21pemluZyB0aGUgbWFwIGJhc2VkIG9uIHNwcmVhZHNoZWV0IGRhdGEgYW5kIG1hcCBvcHRpb25zXG4gIGhhbmRsZVF1ZXJ5UmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2UuaXNFcnJvcigpKSB7XG4gICAgICBhbGVydChgRXJyb3IgaW4gcXVlcnk6ICR7cmVzcG9uc2UuZ2V0TWVzc2FnZSgpfSArICR7cmVzcG9uc2UuZ2V0RGV0YWlsZWRNZXNzYWdlKCl9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YVRhYmxlKCk7XG4gICAgY29uc3QgY2hhcnQgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uR2VvQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lvbnNfZGl2JykpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBjb2xvckF4aXM6IHtjb2xvcnM6IFsnI2IyY2NmNycsICcjMjI3MmY1J119LFxuICAgICAgZGF0YWxlc3NSZWdpb25Db2xvcjogJyNlYmYwZjcnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnJ1xuICAgIH07XG5cbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSBjaGFydC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIGNvbnN0IHRyZW5kQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVuZC1ib3hcIik7XG4gICAgICBsZXQgY291bnRyeSwgdHJlbmRzT2JqLCBjb3VudHJ5VHJlbmRzLGNvdW50cnlOb2RlO1xuICBcbiAgICAgIGZvciAobGV0IGl0ZW0gb2Ygc2VsZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGl0ZW0ucm93O1xuICAgICAgICBjb3VudHJ5ID0gZGF0YS5nZXRWYWx1ZShyb3csIDApO1xuICAgICAgICB0cmVuZHNPYmogPSBPYmplY3QudmFsdWVzKChDT1VOVFJJRVNbcm93XSkpWzBdO1xuICAgICAgfTtcbiAgICAgIFxuICAgICAgdHJlbmRCb3guaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInRyZW5kLWNvbnRlbnRcIj48cD4ke09iamVjdC52YWx1ZXModHJlbmRzT2JqWzBdKX08L3A+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidHJlbmQtY29udGVudFwiPjxwPiR7T2JqZWN0LnZhbHVlcyh0cmVuZHNPYmpbMV0pfTwvcD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0cmVuZC1jb250ZW50XCI+PHA+JHtPYmplY3QudmFsdWVzKHRyZW5kc09ialsyXSl9PC9wPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRyZW5kLWNvbnRlbnRcIj48cD4ke09iamVjdC52YWx1ZXModHJlbmRzT2JqWzNdKX08L3A+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidHJlbmQtY29udGVudFwiPjxwPiR7T2JqZWN0LnZhbHVlcyh0cmVuZHNPYmpbNF0pfTwvcD48L2Rpdj5gXG4gICAgfTtcbiAgICBcbiAgICBjaGFydC5kcmF3KGRhdGEsIG9wdGlvbnMpO1xuICAgIGdvb2dsZS52aXN1YWxpemF0aW9uLmV2ZW50cy5hZGRMaXN0ZW5lcihjaGFydCwgJ3NlbGVjdCcsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICAvLyBTaG93IHRoZSBtYXAgd2hlbiB0aGUgcGFnZSBpcyBsb2FkZWRcbiAgbG9hZCgpIHtcbiAgICBnb29nbGUuY2hhcnRzLmxvYWQoJ2N1cnJlbnQnLCB7XG4gICAgICAncGFja2FnZXMnOlsnZ2VvY2hhcnQnXSxcbiAgICB9KTtcblxuICAgIGdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2sodGhpcy5kcmF3UmVnaW9uc01hcCk7XG4gIH1cbn0iXSwibmFtZXMiOlsiQ09VTlRSSUVTIiwiTWFwIiwiY29uc3RydWN0b3IiLCJkcmF3UmVnaW9uc01hcCIsImJpbmQiLCJsb2FkIiwicXVlcnkiLCJnb29nbGUiLCJ2aXN1YWxpemF0aW9uIiwiUXVlcnkiLCJzZW5kIiwiaGFuZGxlUXVlcnlSZXNwb25zZSIsInJlc3BvbnNlIiwiaXNFcnJvciIsImFsZXJ0IiwiZ2V0TWVzc2FnZSIsImdldERldGFpbGVkTWVzc2FnZSIsImRhdGEiLCJnZXREYXRhVGFibGUiLCJjaGFydCIsIkdlb0NoYXJ0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnMiLCJjb2xvckF4aXMiLCJjb2xvcnMiLCJkYXRhbGVzc1JlZ2lvbkNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2xpY2tIYW5kbGVyIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwidHJlbmRCb3giLCJxdWVyeVNlbGVjdG9yIiwiY291bnRyeSIsInRyZW5kc09iaiIsImNvdW50cnlUcmVuZHMiLCJjb3VudHJ5Tm9kZSIsIml0ZW0iLCJyb3ciLCJnZXRWYWx1ZSIsIk9iamVjdCIsInZhbHVlcyIsImlubmVySFRNTCIsImRyYXciLCJldmVudHMiLCJhZGRMaXN0ZW5lciIsImNoYXJ0cyIsInNldE9uTG9hZENhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

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