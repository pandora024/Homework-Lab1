"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst URL = `http://localhost/api/student`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: student , 1: setstudent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: students1 , 1: setstudents  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: name1 , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: surname1 , 1: setSurName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: major1 , 1: setMajor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: GPA1 , 1: setGPA  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const getstudent = async ()=>{\n        const result = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(URL);\n        setstudent(result.data.list);\n    };\n    const getstudents = async (id)=>{\n        const result = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${URL}/${id}`);\n        console.log(\"students id: \", result.data);\n        setstudents(result.data);\n    };\n    const addstudents = async (name, surname, major, GPA)=>{\n        const result = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(URL, {\n            name,\n            surname,\n            major,\n            GPA\n        });\n        console.log(result.data);\n        getstudent();\n    };\n    const deletestudents = async (id)=>{\n        const result = await axios__WEBPACK_IMPORTED_MODULE_2___default()[\"delete\"](`${URL}/${id}`);\n        console.log(result.data);\n        getstudent();\n    };\n    const updatestudents = async (id)=>{\n        const result = await axios__WEBPACK_IMPORTED_MODULE_2___default().put(`${URL}/${id}`, {\n            name: name1,\n            surname: surname1,\n            major: major1,\n            GPA: GPA1\n        });\n        console.log(\"student id update: \", result.data);\n        getstudent();\n    };\n    const printstudent = ()=>{\n        console.log(\"student:\", student);\n        if (student && student.length) return student.map((students, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    students ? students.name : \"-\",\n                    \" : \",\n                    students ? students.surname : \"-\",\n                    \" : \",\n                    students ? students.major : \"-\",\n                    \" : \",\n                    students ? students.GPA : 0,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        class: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800\",\n                        onClick: ()=>deletestudents(students.id)\n                        ,\n                        children: \" Delete \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        class: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800\",\n                        onClick: ()=>getstudents(students.id)\n                        ,\n                        children: \"Get\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        class: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800\",\n                        onClick: ()=>updatestudents(students.id)\n                        ,\n                        children: \"Update\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                        lineNumber: 55,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 16\n            }, undefined)\n        );\n        else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"No student\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                lineNumber: 59,\n                columnNumber: 19\n            }, undefined);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getstudent();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"student\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                lineNumber: 67,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: printstudent()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                lineNumber: 68,\n                columnNumber: 11\n            }, undefined),\n            \"selected students: \",\n            students1.name,\n            \" \",\n            students1.surname,\n            \" \",\n            students1.major,\n            \" \",\n            students1.GPA,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Add students\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined),\n                    \"Name:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        onChange: (e)=>setName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 16\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 78\n                    }, undefined),\n                    \"SurName:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        onChange: (e)=>setSurName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                        lineNumber: 76,\n                        columnNumber: 19\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                        lineNumber: 76,\n                        columnNumber: 84\n                    }, undefined),\n                    \"Major:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        onChange: (e)=>setMajor(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                        lineNumber: 77,\n                        columnNumber: 80\n                    }, undefined),\n                    \"GPA:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        onChange: (e)=>setGPA(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 15\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 78\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        class: \"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800\",\n                        onClick: ()=>addstudents(name1, surname1, major1, GPA1)\n                        ,\n                        children: \"Add new students\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Asus\\\\OneDrive\\\\\\u0E40\\u0E14\\u0E2A\\u0E01\\u0E4C\\u0E17\\u0E47\\u0E2D\\u0E1B\\\\clien\\\\lab6 DCW\\\\Frontend\\\\bear\\\\pages\\\\index.js\",\n        lineNumber: 66,\n        columnNumber: 7\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUMsUUFBUTt3QkFBQ1EsUUFBUSxFQUFFLENBQUNDLENBQUMsR0FBRy9CLE1BQU0sQ0FBQytCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7Ozs7O2lDQUFJO29CQUFBLEdBQUM7a0NBQUEsOERBQUNDLElBQUU7Ozs7aUNBQUU7a0NBQ3hFLDhEQUFDYixRQUFNO3dCQUFDQyxJQUFJLEVBQUMsUUFBUTt3QkFBQ0MsS0FBSyxFQUFDLG9OQUFvTjt3QkFBQ0MsT0FBTyxFQUFHLElBQU1kLFdBQVcsQ0FBQ2pCLEtBQUksRUFBRUUsUUFBTyxFQUFFRSxNQUFLLEVBQUVFLElBQUcsQ0FBQzt3QkFBQTtrQ0FBRSxrQkFBZ0I7Ozs7O2lDQUFTOzs7Ozs7eUJBQzlUOzs7Ozs7aUJBQ0osQ0FDUDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmVhci8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gXHJcbmNvbnN0IFVSTCA9IGBodHRwOi8vbG9jYWxob3N0L2FwaS9zdHVkZW50YFxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBbc3R1ZGVudCwgc2V0c3R1ZGVudF0gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBbc3R1ZGVudHMsIHNldHN0dWRlbnRzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtuYW1lLHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3N1cm5hbWUsc2V0U3VyTmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbWFqb3Isc2V0TWFqb3JdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW0dQQSxzZXRHUEFdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBnZXRzdHVkZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoVVJMKVxyXG4gICAgICBzZXRzdHVkZW50KHJlc3VsdC5kYXRhLmxpc3QpXHJcbiAgfVxyXG4gIGNvbnN0IGdldHN0dWRlbnRzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgJHtVUkx9LyR7aWR9YClcclxuICAgICAgY29uc29sZS5sb2coJ3N0dWRlbnRzIGlkOiAnLCByZXN1bHQuZGF0YSlcclxuICAgICAgc2V0c3R1ZGVudHMocmVzdWx0LmRhdGEpXHJcbiAgfVxyXG4gIGNvbnN0IGFkZHN0dWRlbnRzID0gYXN5bmMgKG5hbWUsc3VybmFtZSxtYWpvcixHUEEpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChVUkwse1xyXG4gICAgICAgICAgbmFtZSxcclxuICAgICAgICAgIHN1cm5hbWUsXHJcbiAgICAgICAgICBtYWpvcixcclxuICAgICAgICAgIEdQQVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgICAgZ2V0c3R1ZGVudCgpXHJcbiAgfVxyXG4gIGNvbnN0IGRlbGV0ZXN0dWRlbnRzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtVUkx9LyR7aWR9YClcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgICAgIGdldHN0dWRlbnQoKVxyXG4gIH1cclxuICBjb25zdCB1cGRhdGVzdHVkZW50cyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wdXQoYCR7VVJMfS8ke2lkfWAse1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgc3VybmFtZSxcclxuICAgICAgICBtYWpvcixcclxuICAgICAgICBHUEFcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2coJ3N0dWRlbnQgaWQgdXBkYXRlOiAnLCByZXN1bHQuZGF0YSlcclxuICAgICAgZ2V0c3R1ZGVudCgpXHJcbiAgfVxyXG4gIGNvbnN0IHByaW50c3R1ZGVudCA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ3N0dWRlbnQ6Jywgc3R1ZGVudClcclxuICAgICAgaWYgKHN0dWRlbnQgJiYgc3R1ZGVudC5sZW5ndGgpXHJcbiAgICAgICAgICByZXR1cm4gKHN0dWRlbnQubWFwKChzdHVkZW50cywgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgKDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgeyhzdHVkZW50cyk/c3R1ZGVudHMubmFtZTonLSd9IDogeyhzdHVkZW50cyk/c3R1ZGVudHMuc3VybmFtZTonLSd9IDogeyhzdHVkZW50cyk/c3R1ZGVudHMubWFqb3I6Jy0nfSA6IHsoc3R1ZGVudHMpP3N0dWRlbnRzLkdQQTowfVxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IG1yLTIgbWItMiBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMFwiIG9uQ2xpY2s9eygpID0+IGRlbGV0ZXN0dWRlbnRzKHN0dWRlbnRzLmlkKX0+IERlbGV0ZSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSBtci0yIG1iLTIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIiBvbkNsaWNrPXsoKSA9PiBnZXRzdHVkZW50cyhzdHVkZW50cy5pZCl9PkdldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAgY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSBtci0yIG1iLTIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIiBvbkNsaWNrPXsoKSA9PiB1cGRhdGVzdHVkZW50cyhzdHVkZW50cy5pZCl9PlVwZGF0ZTwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICA8L2xpPilcclxuICAgICAgICAgICkpXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICg8aDI+Tm8gc3R1ZGVudDwvaDI+KVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGdldHN0dWRlbnQoKVxyXG4gIH0sW10pXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj5zdHVkZW50PC9oMj5cclxuICAgICAgICAgIDx1bD57cHJpbnRzdHVkZW50KCl9PC91bD5cclxuICAgICAgICBcclxuICAgICAgICAgIHNlbGVjdGVkIHN0dWRlbnRzOiB7c3R1ZGVudHMubmFtZX0ge3N0dWRlbnRzLnN1cm5hbWV9IHtzdHVkZW50cy5tYWpvcn0ge3N0dWRlbnRzLkdQQX1cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPiBcclxuXHJcbiAgICAgICAgICA8aDI+QWRkIHN0dWRlbnRzPC9oMj5cclxuICAgICAgICAgIE5hbWU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKT0+c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IC8+IDxici8+XHJcbiAgICAgICAgICBTdXJOYW1lOjxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSk9PnNldFN1ck5hbWUoZS50YXJnZXQudmFsdWUpfSAvPiA8YnIvPlxyXG4gICAgICAgICAgTWFqb3I6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKT0+c2V0TWFqb3IoZS50YXJnZXQudmFsdWUpfSAvPiA8YnIvPlxyXG4gICAgICAgICAgR1BBOjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9eyhlKT0+c2V0R1BBKGUudGFyZ2V0LnZhbHVlKX0gLz4gPGJyLz5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgbXItMiBtYi0yIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCIgb25DbGljaz17ICgpID0+IGFkZHN0dWRlbnRzKG5hbWUsIHN1cm5hbWUsIG1ham9yLCBHUEEpfT5BZGQgbmV3IHN0dWRlbnRzPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG4vLyBpbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSB9IGZyb20gJ3N3cidcclxuXHJcbi8vIGNvbnN0IFVSTCA9IGh0dHA6Ly9sb2NhbGhvc3QvYXBpL3N0dWRlbnRzXHJcbi8vIGNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsKS50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4vLyAgICAgY29uc3QgW3N0dWRlbnQsIHNldFN0dWRlbnRdID0gdXNlU3RhdGUoW10pXHJcbi8vICAgICBjb25zdCBbbmFtZSwgc2V0bmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuLy8gICAgIGNvbnN0IFtzdXJuYW1lLCBzZXRzdXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4vLyAgICAgY29uc3QgW21ham9yLCBzZXRtYWpvcl0gPSB1c2VTdGF0ZSgnJylcclxuLy8gICAgIGNvbnN0IFtHUEEsIHNldEdQQV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuLy8gICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihVUkwsIGZldGNoZXIpXHJcbi8vICAgICBpZiAoIWRhdGEpIHtcclxuLy8gICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIC4uLjwvZGl2PlxyXG4vLyAgICAgfVxyXG4vLyAgICAgY29uc3QgZ2V0U3R1ZGVudHMgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICAgICAgbGV0IHN0dWRlbnQgPSBhd2FpdCBheGlvcy5nZXQoVVJMKVxyXG4vLyAgICAgICAgIHNldFN0dWRlbnRzKHN0dWRlbnQuZGF0YSlcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBjb25zdCBnZXRTdHVkZW50ID0gYXN5bmMgKGlkKSA9PiB7XHJcbi8vICAgICAgICAgbGV0IHN0dWRlbnQgPSBhd2FpdCBheGlvcy5nZXQoJHtVUkx9LyR7aWR9KVxyXG4vLyAgICAgICAgIHNldFN0dWRlbnQoe1xyXG4vLyAgICAgICAgICAgICBuYW1lOiBzdHVkZW50LmRhdGEubmFtZSxcclxuLy8gICAgICAgICAgICAgc3VybmFtZTogc3R1ZGVudC5kYXRhLnN1cm5hbWUsXHJcbi8vICAgICAgICAgICAgIG1ham9yOiBzdHVkZW50LmRhdGEubWFqb3IsXHJcbi8vICAgICAgICAgICAgIEdQQTogc3R1ZGVudC5kYXRhLkdQQVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgY29uc3QgdXBkYXRlU3R1ZGVudCA9IGFzeW5jIChpZCkgPT4ge1xyXG4vLyAgICAgICAgIGxldCBzdHVkZW50ID0gYXdhaXQgYXhpb3MucHV0KCR7VVJMfS8ke2lkfSwgeyBuYW1lLCBzdXJuYW1lLCBtYWpvciwgR1BBIH0pXHJcbi8vICAgICAgICAgbXV0YXRlKFVSTClcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBjb25zdCBhZGRTdHVkZW50ID0gYXN5bmMgKG5hbWUsIHN1cm5hbWUsIG1ham9yLCBHUEEpID0+IHtcclxuLy8gICAgICAgICBsZXQgc3R1ZGVudCA9IGF3YWl0IGF4aW9zLnBvc3QoVVJMLCB7IG5hbWUsIHN1cm5hbWUsIG1ham9yLCBHUEEgfSlcclxuLy8gICAgICAgICBtdXRhdGUoVVJMKVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGNvbnN0IGRlbGV0ZVN0dWRlbnQgPSBhc3luYyAoaWQpID0+IHtcclxuLy8gICAgICAgICBsZXQgc3R1ZGVudCA9IGF3YWl0IGF4aW9zLmRlbGV0ZSgke1VSTH0vJHtpZH0pXHJcbi8vICAgICAgICAgbXV0YXRlKFVSTClcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBjb25zdCBwcmludFN0dWRlbnRzID0gKHN0dWRlbnRzKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKHN0dWRlbnRzICYmIHN0dWRlbnRzLmxlbmd0aClcclxuLy8gICAgICAgICAgICAgcmV0dXJuIChzdHVkZW50cy5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4vLyAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItMiBib3JkZXItYmxhY2sgbXQtNSB3LWZ1bGwgbWF4LXctbWQgbXgtYXV0byBwLTggbWQ6cC02IGJnLWdyZWVuLTUwMCByb3VuZGVkLXhsIGZvbnQtbW9ub1wiIGtleT17aW5kZXh9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIElkOiB7aXRlbS5pZH0gPGJyIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6IHtpdGVtLm5hbWV9IDxiciAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBTdXJuYW1lOiB7aXRlbS5zdXJuYW1lfSA8YnIgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgTWFqb3I6IHtpdGVtLm1ham9yfSA8YnIgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgR1BBOiB7aXRlbS5HUEF9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nbXQtMSBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ncmF5LTMwMCB0ZXh0LWJsYWNrLTcwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtYmxhY2sgcHktMiBweC00IGJvcmRlciBib3JkZXItYmx1ZS01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQnIG9uQ2xpY2s9eygpID0+IGdldFN0dWRlbnQoaXRlbS5pZCl9PkdFVDwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nbXQtMSBtbC00IGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWdyYXktMzAwIHRleHQtYmxhY2stNzAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC1ibGFjayBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci1ibHVlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZCcgb25DbGljaz17KCkgPT4gdXBkYXRlU3R1ZGVudChpdGVtLmlkKX0+VVBEQVRFPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdtdC0xIG1sLTQgYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctZ3JheS0zMDAgdGV4dC1ibGFjay03MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LWJsYWNrIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkJyBvbkNsaWNrPXsoKSA9PiBkZWxldGVTdHVkZW50KGl0ZW0uaWQpfT5ERUxFVEU8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIClcclxuLy8gICAgICAgICAgICAgKSlcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cclxuLy8gICAgICAgICAgICAgPGgxPkFkZCBTdHVkZW50PC9oMT5cclxuLy8gICAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgTmFtZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRuYW1lKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cclxuLy8gICAgICAgICAgICAgICAgICAgICBTdXJuYW1lOiA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHNldHN1cm5hbWUoZS50YXJnZXQudmFsdWUpfT48L2lucHV0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIE1ham9yOiA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHNldG1ham9yKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cclxuLy8gICAgICAgICAgICAgICAgICAgICBHUEE6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRHUEEoZS50YXJnZXQudmFsdWUpfT48L2lucHV0PjxiciAvPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+IDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkU3R1ZGVudChuYW1lLCBzdXJuYW1lLCBtYWpvciwgR1BBKX0+QUREPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuLy8gICAgICAgICAgICAgPGgxID5TdHVkZW50PC9oMT5cclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtwcmludFN0dWRlbnRzKGRhdGEubGlzdCl9XHJcbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgICAgICAgICA8aDE+U2hvdyBTdHVkZW50PC9oMT5cclxuLy8gICAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgTmFtZToge3N0dWRlbnQubmFtZX0gPGJyIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgU3VybmFtZToge3N0dWRlbnQuc3VybmFtZX0gPGJyIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgTWFqb3I6IHtzdHVkZW50Lm1ham9yfSA8YnIgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICBHUEE6IHtzdHVkZW50LkdQQX0gPGJyIC8+XHJcbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgKVxyXG4vLyB9XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJVUkwiLCJzdHVkZW50Iiwic2V0c3R1ZGVudCIsInN0dWRlbnRzIiwic2V0c3R1ZGVudHMiLCJuYW1lIiwic2V0TmFtZSIsInN1cm5hbWUiLCJzZXRTdXJOYW1lIiwibWFqb3IiLCJzZXRNYWpvciIsIkdQQSIsInNldEdQQSIsImdldHN0dWRlbnQiLCJyZXN1bHQiLCJnZXQiLCJkYXRhIiwibGlzdCIsImdldHN0dWRlbnRzIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiYWRkc3R1ZGVudHMiLCJwb3N0IiwiZGVsZXRlc3R1ZGVudHMiLCJkZWxldGUiLCJ1cGRhdGVzdHVkZW50cyIsInB1dCIsInByaW50c3R1ZGVudCIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwibGkiLCJidXR0b24iLCJ0eXBlIiwiY2xhc3MiLCJvbkNsaWNrIiwiaDIiLCJkaXYiLCJ1bCIsImNsYXNzTmFtZSIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();