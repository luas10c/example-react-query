"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search-post/page",{

/***/ "(app-client)/./src/app/search-post/page.tsx":
/*!**************************************!*\
  !*** ./src/app/search-post/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-client)/./node_modules/@tanstack/react-query/build/lib/useQuery.mjs\");\n/* harmony import */ var _queries_searchPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../queries/searchPost */ \"(app-client)/./src/queries/searchPost.ts\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\nconst SearchPost = ()=>{\n    _s();\n    const { data , refetch  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)({\n        queryKey: [\n            \"SEARCH_POST\"\n        ],\n        queryFn () {\n            return (0,_queries_searchPost__WEBPACK_IMPORTED_MODULE_1__.searchPost)();\n        },\n        enabled: false\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \".search-post\"\n            }, void 0, false, {\n                fileName: \"/home/luciano/Downloads/example-react-query/src/app/search-post/page.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>refetch(),\n                children: \"Fetch\"\n            }, void 0, false, {\n                fileName: \"/home/luciano/Downloads/example-react-query/src/app/search-post/page.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    children: JSON.stringify(data, null, 2)\n                }, void 0, false, {\n                    fileName: \"/home/luciano/Downloads/example-react-query/src/app/search-post/page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/luciano/Downloads/example-react-query/src/app/search-post/page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luciano/Downloads/example-react-query/src/app/search-post/page.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchPost, \"iCHd3sTq7va4oFuMT0A8VLN0ksc=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = SearchPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchPost);\nvar _c;\n$RefreshReg$(_c, \"SearchPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9zZWFyY2gtcG9zdC9wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFaUQ7QUFFSztBQUV0RCxNQUFNRSxhQUFhLElBQU07O0lBQ3ZCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxRQUFPLEVBQUUsR0FBR0osK0RBQVFBLENBQUM7UUFDakNLLFVBQVU7WUFBQztTQUFjO1FBQ3pCQyxXQUFVO1lBQ1IsT0FBT0wsK0RBQVVBO1FBQ25CO1FBQ0FNLFNBQVMsS0FBSztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFLOzs7Ozs7MEJBQ04sOERBQUNDO2dCQUFPQyxNQUFLO2dCQUFTQyxTQUFTLElBQU1SOzBCQUFXOzs7Ozs7MEJBR2hELDhEQUFDSTswQkFDQyw0RUFBQ0s7OEJBQUtDLEtBQUtDLFNBQVMsQ0FBQ1osTUFBTSxJQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpDO0dBcEJNRDs7UUFDc0JGLDJEQUFRQTs7O0tBRDlCRTtBQXNCTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NlYXJjaC1wb3N0L3BhZ2UudHN4PzhhYzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuXG5pbXBvcnQgeyBzZWFyY2hQb3N0IH0gZnJvbSBcIi4uLy4uL3F1ZXJpZXMvc2VhcmNoUG9zdFwiO1xuXG5jb25zdCBTZWFyY2hQb3N0ID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KHtcbiAgICBxdWVyeUtleTogW1wiU0VBUkNIX1BPU1RcIl0sXG4gICAgcXVlcnlGbigpIHtcbiAgICAgIHJldHVybiBzZWFyY2hQb3N0KCk7XG4gICAgfSxcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNwYW4+LnNlYXJjaC1wb3N0PC9zcGFuPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcmVmZXRjaCgpfT5cbiAgICAgICAgRmV0Y2hcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMil9PC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBvc3Q7XG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJzZWFyY2hQb3N0IiwiU2VhcmNoUG9zdCIsImRhdGEiLCJyZWZldGNoIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZW5hYmxlZCIsImRpdiIsInNwYW4iLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/search-post/page.tsx\n"));

/***/ })

});