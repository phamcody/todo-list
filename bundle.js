/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    font-family: 'JelleeBold';
    font-weight: normal;
}

html {
    height: 100%;
}

body {
    background-color: #f4fdf4;
    height: 100%;
}

#container {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 6fr 0.5fr;
}

#header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #092a06;
}

.logo {
    font-size: 4rem;
    grid-column: 2;
    justify-self: center;
    align-self: center;
    font-family: 'JelleeBold';
    font-weight: normal;
    font-style: normal;
    color: #eaffd6;
}

.logo::before {
    content: 'do';
    color: #def1a0;
}

.modes {
    background-color: #353535;
    color: white;
    width: 50px;  
    height: 50px;
    justify-self: end;
    align-self: center;
    margin-right: 10%;
    border-radius: 10px;
}

#main-container {
    display: grid;
    grid-template-columns: 1.5fr 6fr;
}

.navigation-container {
    display: grid;
    grid-template-rows: 2.5fr 6fr;
    background-color: #c0f1bb;
}

.top-nav-container,
.bottom-nav-container {
    display: grid;
    margin-bottom: 5%;
    margin-left: 10%;
    margin-top: 5%;
}

.top-nav-container {
    gap: 5%;
}

.top-nav-buttons,
.project-name {
    border: none;
    font-size: 1.5rem;
    color: #353535;
    font-family: 'JelleeBold';
    font-weight: normal;
    font-style: normal;
    background-color: #c0f1bb;
    justify-self: start;
    text-align: left;
    width: 90%;
}

.top-nav-buttons:hover,
.project-name:hover {
    color: #1c8a06;
    background-color: #b0e6aa;
    border-radius: 10px;
}

#selected {
    color: #1c8a06;
    background-color: #b0e6aa;
    border-radius: 10px;
}

.bottom-nav-container {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    color: #353535;
    font-family: 'JelleeBold';
    font-weight: normal;
    font-style: normal;
    gap: 5%;
}

.bottom-nav-header {
    font-size: 2rem;
    color: #1c8a06;
}

.projects-container {
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 45px;
}

.container-for-projects {
    display: grid;
    height: auto;
    gap: 10px;
}


.project-delete {
    height: 100%;
    width: 20%;
    border-radius: 15px;
    font-size: 1rem;
    border-color: rgb(245, 112, 112);
    box-shadow: 2px 2px 5px rgb(223, 67, 67);
    background-color: rgb(255, 88, 88);
    color: white;
    font-family: 'JelleeBold';
    font-weight: normal;
    font-style: normal;
}

.add-project-button {
    font-size: 1.5rem;
    color: #353535;
    font-family: 'JelleeBold';
    font-weight: normal;
    border-radius: 20px;
    font-style: normal;
    width: 90%;
    height: 10%;
    background-color: #def1a0;
    box-shadow: 2px 2px 5px #b2c76e;
    border-color: #e1fd84;
}

/* CONTENT SECTION */

.content-container {
    display: grid;
    grid-template-rows: 1.5fr 8fr;
}

.top-content-container {
    display: grid;
    place-items: center;
    grid-template-columns: 8fr 1fr;
    margin-top: 1%;
    margin-right: 2%;
}

.content-header {
    display: flex;
    font-size: 3rem;
    justify-content: center;
    align-items: center;
    color: #353535;
    font-family: 'JelleeBold';
    font-weight: normal;
    background-color: #def1a0;
    height: 80%;
    width: 80%;
    box-shadow: 5px 5px 10px #b2c76e;
    border-radius: 20px;
}

.content-button {
    border-color: #56d24b;
    font-size: 5rem;
    color: white;
    height: 100%;
    width: 75%;
    border-radius: 500px;
    box-shadow: 5px 5px 10px #56d24b;
    background-color: #2dd01e;
}

.bottom-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    margin-top: 3%;
}

.project-form-container {
    display: flex;
    justify-content: space-between;
    width: 90%;
}

.project-add-button {
    width: 15%;
    font-size: 1rem;
    color: white;
    background-color: #2dd01e;
    border-color: #56d24b;
    box-shadow: 2px 2px 5px #56d24b;
    border-radius: 15px;
}

#project-name {
    height: 100%;
    width: 100%;
    color: #353535;
    font-family: 'JelleeBold';
    font-weight: normal;
    border-radius: 5px;
}


/* FOOTER */

#footer {
    display: grid;
    font-family: 'JelleeBold';
    font-weight: normal;
    place-items: center;
    background-color: #092a06;
    color: white;
}

/* TASK FORM */

#task-form-container,
.tasks-container {
    height: 80%;
    width: 80%;
    background-color: #dae4da;
    border-radius: 40px;
    box-shadow: 7px 7px 15px #c2cec2;
    
}

.task-form {
    height: 100%;
    display: grid;
    justify-items: center;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

.form-container-input {
    display: grid;
}

label {
    text-align: center;
    font-family: 'JelleeBold';
    font-weight: normal;
    font-size: .75rem;
    color: #b0c7ae;
    align-self: end;
    padding-bottom: 5%;
}

.task-title,
.notes,
.priority,
.date {
    border-radius: 10px;
    text-align: center;
}

.form-add {
    height: 60%;
    align-self: center;
    width: 60%;
    border-radius: 10px;
    background-color: #def1a0;
    box-shadow: 2px 2px 5px #b2c76e;
    border-color: #e1fd84;
    color: #353535;
}

.tasks-container {
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    place-items: center;
}

.top-task-container {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
}



.tasks-title {
    grid-column: 3;
    font-size: 1rem;
}

.delete-button {
    grid-column: 5;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    place-self: center;
    color: white;
    background-color: rgb(255, 88, 88);
}

.high {
    border-radius: 10px;
    border-left: 10px solid rgb(223, 67, 67);
}

.medium {
    border-radius: 10px;
    border-left: 10px solid rgb(240, 185, 83);
}

.low {
    border-radius: 10px;
    border-left: 10px solid #1c8a06;
}

/* DARK MODE */`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,cAAc;IACd,oBAAoB;IACpB,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,yBAAyB;AAC7B;;AAEA;;IAEI,aAAa;IACb,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,OAAO;AACX;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;IACjB,cAAc;IACd,yBAAyB;IACzB,mBAAmB;IACnB,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,gBAAgB;IAChB,UAAU;AACd;;AAEA;;IAEI,cAAc;IACd,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,cAAc;IACd,yBAAyB;IACzB,mBAAmB;IACnB,kBAAkB;IAClB,OAAO;AACX;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;AACb;;;AAGA;IACI,YAAY;IACZ,UAAU;IACV,mBAAmB;IACnB,eAAe;IACf,gCAAgC;IAChC,wCAAwC;IACxC,kCAAkC;IAClC,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,yBAAyB;IACzB,+BAA+B;IAC/B,qBAAqB;AACzB;;AAEA,oBAAoB;;AAEpB;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,yBAAyB;IACzB,mBAAmB;IACnB,yBAAyB;IACzB,WAAW;IACX,UAAU;IACV,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,oBAAoB;IACpB,gCAAgC;IAChC,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,UAAU;AACd;;AAEA;IACI,UAAU;IACV,eAAe;IACf,YAAY;IACZ,yBAAyB;IACzB,qBAAqB;IACrB,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,cAAc;IACd,yBAAyB;IACzB,mBAAmB;IACnB,kBAAkB;AACtB;;;AAGA,WAAW;;AAEX;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;AAChB;;AAEA,cAAc;;AAEd;;IAEI,WAAW;IACX,UAAU;IACV,yBAAyB;IACzB,mBAAmB;IACnB,gCAAgC;;AAEpC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,uCAAuC;AAC3C;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;IACd,eAAe;IACf,kBAAkB;AACtB;;AAEA;;;;IAII,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,mBAAmB;IACnB,yBAAyB;IACzB,+BAA+B;IAC/B,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,0CAA0C;AAC9C;;;;AAIA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,kCAAkC;AACtC;;AAEA;IACI,mBAAmB;IACnB,wCAAwC;AAC5C;;AAEA;IACI,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,mBAAmB;IACnB,+BAA+B;AACnC;;AAEA,cAAc","sourcesContent":["* {\n    margin: 0;\n    font-family: 'JelleeBold';\n    font-weight: normal;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    background-color: #f4fdf4;\n    height: 100%;\n}\n\n#container {\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr 6fr 0.5fr;\n}\n\n#header {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    background-color: #092a06;\n}\n\n.logo {\n    font-size: 4rem;\n    grid-column: 2;\n    justify-self: center;\n    align-self: center;\n    font-family: 'JelleeBold';\n    font-weight: normal;\n    font-style: normal;\n    color: #eaffd6;\n}\n\n.logo::before {\n    content: 'do';\n    color: #def1a0;\n}\n\n.modes {\n    background-color: #353535;\n    color: white;\n    width: 50px;  \n    height: 50px;\n    justify-self: end;\n    align-self: center;\n    margin-right: 10%;\n    border-radius: 10px;\n}\n\n#main-container {\n    display: grid;\n    grid-template-columns: 1.5fr 6fr;\n}\n\n.navigation-container {\n    display: grid;\n    grid-template-rows: 2.5fr 6fr;\n    background-color: #c0f1bb;\n}\n\n.top-nav-container,\n.bottom-nav-container {\n    display: grid;\n    margin-bottom: 5%;\n    margin-left: 10%;\n    margin-top: 5%;\n}\n\n.top-nav-container {\n    gap: 5%;\n}\n\n.top-nav-buttons,\n.project-name {\n    border: none;\n    font-size: 1.5rem;\n    color: #353535;\n    font-family: 'JelleeBold';\n    font-weight: normal;\n    font-style: normal;\n    background-color: #c0f1bb;\n    justify-self: start;\n    text-align: left;\n    width: 90%;\n}\n\n.top-nav-buttons:hover,\n.project-name:hover {\n    color: #1c8a06;\n    background-color: #b0e6aa;\n    border-radius: 10px;\n}\n\n#selected {\n    color: #1c8a06;\n    background-color: #b0e6aa;\n    border-radius: 10px;\n}\n\n.bottom-nav-container {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.5rem;\n    color: #353535;\n    font-family: 'JelleeBold';\n    font-weight: normal;\n    font-style: normal;\n    gap: 5%;\n}\n\n.bottom-nav-header {\n    font-size: 2rem;\n    color: #1c8a06;\n}\n\n.projects-container {\n    display: flex;\n    justify-content: space-between;\n    width: 90%;\n    height: 45px;\n}\n\n.container-for-projects {\n    display: grid;\n    height: auto;\n    gap: 10px;\n}\n\n\n.project-delete {\n    height: 100%;\n    width: 20%;\n    border-radius: 15px;\n    font-size: 1rem;\n    border-color: rgb(245, 112, 112);\n    box-shadow: 2px 2px 5px rgb(223, 67, 67);\n    background-color: rgb(255, 88, 88);\n    color: white;\n    font-family: 'JelleeBold';\n    font-weight: normal;\n    font-style: normal;\n}\n\n.add-project-button {\n    font-size: 1.5rem;\n    color: #353535;\n    font-family: 'JelleeBold';\n    font-weight: normal;\n    border-radius: 20px;\n    font-style: normal;\n    width: 90%;\n    height: 10%;\n    background-color: #def1a0;\n    box-shadow: 2px 2px 5px #b2c76e;\n    border-color: #e1fd84;\n}\n\n/* CONTENT SECTION */\n\n.content-container {\n    display: grid;\n    grid-template-rows: 1.5fr 8fr;\n}\n\n.top-content-container {\n    display: grid;\n    place-items: center;\n    grid-template-columns: 8fr 1fr;\n    margin-top: 1%;\n    margin-right: 2%;\n}\n\n.content-header {\n    display: flex;\n    font-size: 3rem;\n    justify-content: center;\n    align-items: center;\n    color: #353535;\n    font-family: 'JelleeBold';\n    font-weight: normal;\n    background-color: #def1a0;\n    height: 80%;\n    width: 80%;\n    box-shadow: 5px 5px 10px #b2c76e;\n    border-radius: 20px;\n}\n\n.content-button {\n    border-color: #56d24b;\n    font-size: 5rem;\n    color: white;\n    height: 100%;\n    width: 75%;\n    border-radius: 500px;\n    box-shadow: 5px 5px 10px #56d24b;\n    background-color: #2dd01e;\n}\n\n.bottom-content-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;\n    margin-top: 3%;\n}\n\n.project-form-container {\n    display: flex;\n    justify-content: space-between;\n    width: 90%;\n}\n\n.project-add-button {\n    width: 15%;\n    font-size: 1rem;\n    color: white;\n    background-color: #2dd01e;\n    border-color: #56d24b;\n    box-shadow: 2px 2px 5px #56d24b;\n    border-radius: 15px;\n}\n\n#project-name {\n    height: 100%;\n    width: 100%;\n    color: #353535;\n    font-family: 'JelleeBold';\n    font-weight: normal;\n    border-radius: 5px;\n}\n\n\n/* FOOTER */\n\n#footer {\n    display: grid;\n    font-family: 'JelleeBold';\n    font-weight: normal;\n    place-items: center;\n    background-color: #092a06;\n    color: white;\n}\n\n/* TASK FORM */\n\n#task-form-container,\n.tasks-container {\n    height: 80%;\n    width: 80%;\n    background-color: #dae4da;\n    border-radius: 40px;\n    box-shadow: 7px 7px 15px #c2cec2;\n    \n}\n\n.task-form {\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n}\n\n.form-container-input {\n    display: grid;\n}\n\nlabel {\n    text-align: center;\n    font-family: 'JelleeBold';\n    font-weight: normal;\n    font-size: .75rem;\n    color: #b0c7ae;\n    align-self: end;\n    padding-bottom: 5%;\n}\n\n.task-title,\n.notes,\n.priority,\n.date {\n    border-radius: 10px;\n    text-align: center;\n}\n\n.form-add {\n    height: 60%;\n    align-self: center;\n    width: 60%;\n    border-radius: 10px;\n    background-color: #def1a0;\n    box-shadow: 2px 2px 5px #b2c76e;\n    border-color: #e1fd84;\n    color: #353535;\n}\n\n.tasks-container {\n    display: grid;\n    grid-template-rows: 1fr 3fr 1fr;\n    place-items: center;\n}\n\n.top-task-container {\n    display: grid;\n    grid-template-columns: 2fr 2fr 2fr 2fr 2fr;\n}\n\n\n\n.tasks-title {\n    grid-column: 3;\n    font-size: 1rem;\n}\n\n.delete-button {\n    grid-column: 5;\n    height: 50px;\n    width: 50px;\n    border-radius: 50px;\n    place-self: center;\n    color: white;\n    background-color: rgb(255, 88, 88);\n}\n\n.high {\n    border-radius: 10px;\n    border-left: 10px solid rgb(223, 67, 67);\n}\n\n.medium {\n    border-radius: 10px;\n    border-left: 10px solid rgb(240, 185, 83);\n}\n\n.low {\n    border-radius: 10px;\n    border-left: 10px solid #1c8a06;\n}\n\n/* DARK MODE */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/todo-list/addProjectToLibrary.js":
/*!******************************************************!*\
  !*** ./src/modules/todo-list/addProjectToLibrary.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProjectToLibrary)
/* harmony export */ });
/* harmony import */ var _ui_interface_addProjectDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui-interface/addProjectDOM */ "./src/modules/ui-interface/addProjectDOM.js");


function addProjectToLibrary(projects, project, containerForProjects) {
    if (project === "" || project in projects) return
    else {
        let fixedProjectName = project.replace(/\s+/g, "");
        projects[fixedProjectName] = [];
        (0,_ui_interface_addProjectDOM__WEBPACK_IMPORTED_MODULE_0__["default"])(containerForProjects, project, projects)
    }
};


/***/ }),

/***/ "./src/modules/ui-interface/addProjectDOM.js":
/*!***************************************************!*\
  !*** ./src/modules/ui-interface/addProjectDOM.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProjectDOM)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/ui-interface/task.js");
/* harmony import */ var _localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageUpdate */ "./src/modules/ui-interface/localStorageUpdate.js");


function addProjectDOM(containerForProjects, project, projects) {
    let projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projects-container');
    let projectName = document.createElement('button');
    projectName.classList.add('project-name');
    projectName.classList.add('choice');
    projectName.textContent = project;
    let projectDelete = document.createElement('button');
    projectDelete.classList.add('project-delete');
    projectDelete.textContent = 'X';
    projectsContainer.appendChild(projectName);
    projectsContainer.appendChild(projectDelete);
    containerForProjects.appendChild(projectsContainer);


    // delete project from DOM and library
    projectDelete.addEventListener('click', (e) => {

        let shortcut = e.target.parentNode.childNodes[0].textContent;
        let i = 0;

        while (i < projects[shortcut].length) {
            let taskName = projects[shortcut][0]['task'];
            for (let project in projects) {
                let index = projects[project].findIndex(item => item['task'] === taskName);
                if (index === -1) {
                    console.log('N/A');
                }
                else {
                    projects[project].splice(index, 1);
                }
            }
        };
        (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])().placeTasks(projects);
        (0,_localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])().updateLocalStorage(projects);


        containerForProjects.removeChild(projectsContainer);
        if (e.target.parentNode.childNodes[0].textContent in projects) {
            delete projects[e.target.parentNode.childNodes[0].textContent];
            if (document.querySelector('#selected') === null) {
                let reset = document.querySelector('.choice');
                reset.setAttribute('id', 'selected');
                let contentHeader = document.querySelector('.content-header');
                let current = document.querySelector('#selected');
                contentHeader.textContent = current.textContent;
                (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])().placeTasks(projects);
            }
            (0,_localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])().updateLocalStorage(projects);
        }
    })
}

/***/ }),

/***/ "./src/modules/ui-interface/addProjectForm.js":
/*!****************************************************!*\
  !*** ./src/modules/ui-interface/addProjectForm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProjectFormDOM)
/* harmony export */ });
/* harmony import */ var _todo_list_addProjectToLibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo-list/addProjectToLibrary */ "./src/modules/todo-list/addProjectToLibrary.js");
/* harmony import */ var _selectProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectProject */ "./src/modules/ui-interface/selectProject.js");
/* harmony import */ var _localStorageUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorageUpdate */ "./src/modules/ui-interface/localStorageUpdate.js");



function addProjectFormDOM(bottomNavContainer, addProjectButton, projects, containerForProjects) {

    let projectFormContainer = document.createElement('div');
    projectFormContainer.classList.add('project-form-container');
    let form = document.createElement('form');
    form.setAttribute('id', 'project-name-form');
    let addButton = document.createElement('button');
    addButton.classList.add('project-add-button');
    addButton.textContent = '✔';

    projectFormContainer.appendChild(form);
    projectFormContainer.appendChild(addButton);

    let titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'project-name');
    titleInput.setAttribute('name', 'projectName');
    form.appendChild(titleInput);

    bottomNavContainer.appendChild(projectFormContainer);

    addButton.addEventListener('click', () => {
        (0,_todo_list_addProjectToLibrary__WEBPACK_IMPORTED_MODULE_0__["default"])(projects, titleInput.value, containerForProjects);
        addProjectButton.removeAttribute('disabled');
        bottomNavContainer.removeChild(projectFormContainer);
        (0,_selectProject__WEBPACK_IMPORTED_MODULE_1__["default"])(projects);
        (0,_localStorageUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])().updateLocalStorage(projects);
    });

    
}

/***/ }),

/***/ "./src/modules/ui-interface/createWebsite.js":
/*!***************************************************!*\
  !*** ./src/modules/ui-interface/createWebsite.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createWebsite)
/* harmony export */ });
/* harmony import */ var _selectProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectProject */ "./src/modules/ui-interface/selectProject.js");
/* harmony import */ var _addProjectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProjectForm */ "./src/modules/ui-interface/addProjectForm.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/ui-interface/task.js");





function createWebsite(projects) {


    const container = document.querySelector('#container');


    // header
    
    let header = document.createElement('div');
    header.setAttribute('id', 'header');
    
    let logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = 'oey';
    
    let mode = document.createElement('button');
    mode.classList.add('modes');
    mode.textContent = '🌖';
    
    container.appendChild(header);
    header.appendChild(logo);
    header.appendChild(mode);
    
    // main
    
    let mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'main-container');

    let navigationContainer = document.createElement('div');
    navigationContainer.classList.add('navigation-container');

    let topNavContainer = document.createElement('div');
    topNavContainer.classList.add('top-nav-container');
    let bottomNavContainer = document.createElement('div');
    bottomNavContainer.classList.add('bottom-nav-container');

    let allButton = document.createElement('button');
    allButton.textContent = 'All';
    allButton.setAttribute('id', 'selected');
    allButton.classList.add('choice');
    let todayButton = document.createElement('button');
    todayButton.textContent = 'Today';
    todayButton.classList.add('choice');
    let highPriorityButton = document.createElement('button');
    highPriorityButton.textContent = 'High Priority';
    highPriorityButton.classList.add('choice');
    allButton.classList.add('top-nav-buttons');
    todayButton.classList.add('top-nav-buttons');
    highPriorityButton.classList.add('top-nav-buttons');

    topNavContainer.appendChild(allButton);
    topNavContainer.appendChild(todayButton);
    topNavContainer.appendChild(highPriorityButton);

    let bottomNavHeader = document.createElement('div');
    bottomNavHeader.textContent = 'Projects';
    bottomNavHeader.classList.add('bottom-nav-header');
    bottomNavContainer.appendChild(bottomNavHeader);

    let containerForProjects = document.createElement('div');
    containerForProjects.classList.add('container-for-projects');
    bottomNavContainer.appendChild(containerForProjects);

    let addProjectButton = document.createElement('button');
    addProjectButton.classList.add('add-project-button');
    addProjectButton.textContent = 'Add Project';


    // MAKE A CONTAINER FOR THE PROJECTS CONTAINER

    bottomNavContainer.appendChild(addProjectButton);

    addProjectButton.addEventListener('click', () => {
        (0,_addProjectForm__WEBPACK_IMPORTED_MODULE_1__["default"])(bottomNavContainer, addProjectButton, projects, containerForProjects);
        addProjectButton.disabled = 'true';
    })

    // content container section

    let contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    let topContentContainer = document.createElement('div');
    topContentContainer.classList.add('top-content-container');

    let contentHeader = document.createElement('div');
    contentHeader.classList.add('content-header');
    contentHeader.textContent = 'All';
    topContentContainer.appendChild(contentHeader);

    let contentButton = document.createElement('button');
    contentButton.classList.add('content-button');
    contentButton.textContent = '+';
    topContentContainer.appendChild(contentButton);

    let bottomContentContainer = document.createElement('div');
    bottomContentContainer.classList.add('bottom-content-container');


    contentContainer.appendChild(topContentContainer);
    contentContainer.appendChild(bottomContentContainer);

    container.appendChild(mainContainer);
    mainContainer.appendChild(navigationContainer);
    mainContainer.appendChild(contentContainer);
    navigationContainer.appendChild(topNavContainer);
    navigationContainer.appendChild(bottomNavContainer);

    (0,_selectProject__WEBPACK_IMPORTED_MODULE_0__["default"])(projects);

    contentButton.addEventListener('click', () => {
        (0,_task__WEBPACK_IMPORTED_MODULE_2__["default"])().createTaskForm();
        contentButton.disabled = true;

        (0,_task__WEBPACK_IMPORTED_MODULE_2__["default"])().add(projects);


    });



    /*


    */


    // footer
    
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.textContent = 'created by phamcody @ github.com';
    container.appendChild(footer);


}

/***/ }),

/***/ "./src/modules/ui-interface/localStorageUpdate.js":
/*!********************************************************!*\
  !*** ./src/modules/ui-interface/localStorageUpdate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ localStorageUpdate)
/* harmony export */ });

function localStorageUpdate(projects) {
    projects;
    return {
        updateLocalStorage(projects) {
            let projectsJSON = JSON.stringify(projects);
            localStorage.setItem("user", projectsJSON);
            let storedProjectJSON = localStorage.getItem('user');
            let storedProject = JSON.parse(storedProjectJSON);
            console.log(storedProject)
            projects = storedProject;
        },
    }
}

/***/ }),

/***/ "./src/modules/ui-interface/selectProject.js":
/*!***************************************************!*\
  !*** ./src/modules/ui-interface/selectProject.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ selectProject)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/ui-interface/task.js");
/* harmony import */ var _localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageUpdate */ "./src/modules/ui-interface/localStorageUpdate.js");




function selectProject(projects) {
    let contentHeader = document.querySelector('.content-header');
    let choices = document.querySelectorAll('.choice');
    let contentButton = document.querySelector('.content-button');
    Array.from(choices).forEach(item => {
        item.addEventListener('click', () => {
            let previous = document.getElementById('selected');
            previous.removeAttribute('id', 'selected');
            item.setAttribute('id', 'selected');
            let current = document.getElementById('selected');
            contentHeader.textContent = current.textContent;
            (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])().placeTasks(projects);
            contentButton.disabled = false;

            let currentDate = new Date().toISOString().slice(0,10);
            for (let tasks in projects['Today']) {
                let index = projects['Today'].findIndex(item => item['date'] !== currentDate);
                if (index === -1) {
                    console.log('none');
                }
                else {
                    projects['Today'].splice(index, 1);
                }
            };
            (0,_localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])().updateLocalStorage(projects);
        })
    })
}

/***/ }),

/***/ "./src/modules/ui-interface/task.js":
/*!******************************************!*\
  !*** ./src/modules/ui-interface/task.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task)
/* harmony export */ });
/* harmony import */ var _addProjectDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProjectDOM */ "./src/modules/ui-interface/addProjectDOM.js");
/* harmony import */ var _localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageUpdate */ "./src/modules/ui-interface/localStorageUpdate.js");
/* harmony import */ var _selectProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectProject */ "./src/modules/ui-interface/selectProject.js");




function task(projects) {
    projects;
    return {
        createTaskForm() {
            let bottomContentContainer = document.querySelector('.bottom-content-container');
            let taskFormContainer = document.createElement('div');
            taskFormContainer.setAttribute('id', 'task-form-container');
            bottomContentContainer.appendChild(taskFormContainer);

            let form = document.createElement('form');
            form.classList.add('task-form');
            taskFormContainer.appendChild(form);


            let taskTitleContainer = document.createElement('div');
            taskTitleContainer.classList.add('form-container-input');
            let taskLabel = document.createElement('label');
            taskLabel.setAttribute('for', 'task-title');
            taskLabel.textContent = 'TASK';
            taskTitleContainer.appendChild(taskLabel);
            let taskTitle = document.createElement('input');
            taskTitle.classList.add('task-title');
            taskTitle.setAttribute('name', 'task-title');
            taskTitle.setAttribute('id', 'task-title');
            taskTitleContainer.appendChild(taskTitle);
            form.appendChild(taskTitleContainer);
            
            let notesTitleContainer = document.createElement('div');
            notesTitleContainer.classList.add('form-container-input');
            let notesLabel = document.createElement('label');
            notesLabel.textContent = 'NOTES';
            notesLabel.setAttribute('for', 'notes');
            notesTitleContainer.appendChild(notesLabel);
            let notes = document.createElement('input');
            notes.classList.add('notes');
            notes.setAttribute('name', 'notes');
            notes.setAttribute('id', 'notes');
            notesTitleContainer.appendChild(notes);
            form.appendChild(notesTitleContainer);

            let priorityTitleContainer = document.createElement('div');
            priorityTitleContainer.classList.add('form-container-input');
            let priorityLabel = document.createElement('label');
            priorityLabel.textContent = 'PRIORITY';
            priorityLabel.setAttribute('for', 'priority');
            priorityTitleContainer.appendChild(priorityLabel);
            let priority = document.createElement('select');
            priority.classList.add('priority');
            priorityTitleContainer.appendChild(priority);
            form.appendChild(priorityTitleContainer);


            let highPriority = document.createElement('option');
            highPriority.setAttribute('value', 'high');
            highPriority.textContent = 'High';
            let mediumPriority = document.createElement('option');
            mediumPriority.setAttribute('value', 'medium');
            mediumPriority.textContent = 'Medium';
            let lowPriority = document.createElement('option');
            lowPriority.setAttribute('value', 'low');
            lowPriority.textContent = 'Low';
            priority.appendChild(highPriority);
            priority.appendChild(mediumPriority);
            priority.appendChild(lowPriority);

            let dateTitleContainer = document.createElement('div');
            dateTitleContainer.classList.add('form-container-input');
            let dateLabel = document.createElement('label');
            dateLabel.setAttribute('for', 'date');
            dateLabel.textContent = 'DUE DATE';
            dateTitleContainer.appendChild(dateLabel);
            let datesInput = document.createElement('input');
            datesInput.classList.add('date');
            datesInput.setAttribute('type', 'date');
            dateTitleContainer.appendChild(datesInput);
            form.appendChild(dateTitleContainer);

            let addButton = document.createElement('button');
            addButton.classList.add('form-add');
            addButton.setAttribute('type', 'button');
            addButton.textContent = 'ADD';

            form.appendChild(addButton);
        },

        add(projects) {
            let contentButton = document.querySelector('.content-button');
            let formAddButton = document.querySelector('.form-add');
            let taskName = document.querySelector('.task-title');
            let notesName = document.querySelector('.notes');
            let priorityName = document.querySelector('.priority');
            let dateName = document.querySelector('.date');
            formAddButton.addEventListener('click', () => {
                let selectedProject = document.getElementById('selected').textContent;
                let selectedProjectFix = selectedProject.replace(/\s+/g, "");
                let todo = {
                    task: "",
                    notes: "",
                    priority: "",
                    date: "",
                    project: "",
                }
                todo['task'] = taskName.value;
                todo['notes'] = notesName.value;
                todo['priority'] = priorityName.value;
                todo['date'] = dateName.value;
                todo['project'] = selectedProjectFix;
                let currentDate = new Date().toISOString().slice(0,10);

                if (selectedProjectFix === "All") {
                    projects['All'].push(todo);
                    if (priorityName.value === "high") {
                        projects['HighPriority'].push(todo);
                    }
                    if (dateName.value === currentDate) {
                        projects['Today'].push(todo);
                    }
                }
                else if (selectedProjectFix === "HighPriority") {
                    projects['HighPriority'].push(todo);
                    projects['All'].push(todo);
                    if (dateName.value === currentDate) {
                        projects['Today'].push(todo);
                    }
                }
                else if (selectedProjectFix === "Today") {
                    projects['Today'].push(todo);
                    projects['All'].push(todo);
                    if (priorityName.value === "high") {
                        projects['HighPriority'].push(todo);
                    };
                }
                else {
                    projects[selectedProjectFix].push(todo);
                    projects['All'].push(todo);
                    if (priorityName.value === "high") {
                        projects['HighPriority'].push(todo);
                    };
                    if (dateName.value === currentDate) {
                        projects['Today'].push(todo);
                    };
                }
                contentButton.disabled = false;
                console.log(projects);
                task().removeForm();
                task().placeTasks(projects);
                (0,_localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])().updateLocalStorage(projects);
            });
        },

        removeForm() {
            let contentButton = document.querySelector('.content-button');
            contentButton.disabled = false;
            let taskFormContainer = document.querySelector('#task-form-container');
            let bottomContentContainer = document.querySelector('.bottom-content-container');
            bottomContentContainer.removeChild(taskFormContainer);
        },


        // LOOP THRU THE SELECTED AND CREATE TASK ON EVERY 
        placeTasks(projects) {
            let bottomContentContainer = document.querySelector('.bottom-content-container');
            if (bottomContentContainer.hasChildNodes() === true) {
                while (bottomContentContainer.firstChild) {
                    bottomContentContainer.removeChild(bottomContentContainer.firstChild);
                }
            }
            let selected = document.querySelector('#selected').textContent;
            let selectedFix = selected.replace(/\s+/g, "");
            
            for (let tasks in projects[selectedFix]) {
                let taskContainer = document.createElement('div');
                taskContainer.classList.add('tasks-container');
                taskContainer.classList.add(selectedFix);
                bottomContentContainer.appendChild(taskContainer);

                let topTaskContainer = document.createElement('div');
                topTaskContainer.classList.add('top-task-container');
                taskContainer.appendChild(topTaskContainer);

                let title = document.createElement('div');
                title.textContent = projects[selectedFix][tasks]['task'];
                title.classList.add('tasks-title');

                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'x';
                deleteButton.classList.add('delete-button');

                topTaskContainer.appendChild(title);
                topTaskContainer.appendChild(deleteButton);

                let noteCard = document.createElement('div');
                noteCard.classList.add('note-card');
                noteCard.textContent = projects[selectedFix][tasks]['notes'];
                taskContainer.appendChild(noteCard);

                let dateCard = document.createElement('div');
                dateCard.classList.add('date-card');
                dateCard.textContent = projects[selectedFix][tasks]['date'];
                taskContainer.appendChild(dateCard);

                if (projects[selectedFix][tasks]['priority'] === "high") {
                    taskContainer.classList.add('high');
                }
                else if (projects[selectedFix][tasks]['priority'] === "medium") {
                    taskContainer.classList.add('medium');
                }
                else {
                    taskContainer.classList.add('low');
                }

                deleteButton.addEventListener('click', (e) => {
                    task().deleteTasks(e.target, projects)
                    ;(0,_localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])().updateLocalStorage(projects);
                })
            };
            
        },

        deleteTasks(e, projects) {
            let bottomContentContainer = document.querySelector('.bottom-content-container');
            let taskName = e.parentNode.firstChild.textContent;

            for (let project in projects) {
                let index = projects[project].findIndex(item => item['task'] === taskName);
                if (index === -1) {
                    console.log("N/A");
                }
                else {
                    projects[project].splice(index, 1);
                }
            }
            bottomContentContainer.removeChild(e.parentNode.parentNode);
            (0,_localStorageUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])().updateLocalStorage(projects);
        },


        loadProjects(projects) {
            for (let project in projects) {
                if (project === 'All' || project === 'Today' || project == 'HighPriority') {
                    console.log('skip');
                }
                else {
                    let containerForProjects = document.querySelector('.container-for-projects');
                    (0,_addProjectDOM__WEBPACK_IMPORTED_MODULE_0__["default"])(containerForProjects, project, projects);
                    (0,_selectProject__WEBPACK_IMPORTED_MODULE_2__["default"])(projects);
                }
            }
        }
    };
}

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ui_interface_createWebsite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui-interface/createWebsite */ "./src/modules/ui-interface/createWebsite.js");
/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/styles.css */ "./src/styles.css");
/* harmony import */ var _modules_ui_interface_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ui-interface/task */ "./src/modules/ui-interface/task.js");




let storedData = JSON.parse(localStorage.getItem('user'));
if (storedData) {
    console.log("Launching stored data");
    (0,_modules_ui_interface_createWebsite__WEBPACK_IMPORTED_MODULE_0__["default"])(storedData);
    (0,_modules_ui_interface_task__WEBPACK_IMPORTED_MODULE_2__["default"])().placeTasks(storedData);
    (0,_modules_ui_interface_task__WEBPACK_IMPORTED_MODULE_2__["default"])().loadProjects(storedData);
}
else {
    console.log("No stored data");
    const projects = {
        All: [],
        Today: [],
        HighPriority: []
    }
    ;(0,_modules_ui_interface_createWebsite__WEBPACK_IMPORTED_MODULE_0__["default"])(projects);
}


/*

Stored input can NOT be reset every refresh
Projects needs to be submitting to another empty thing.
That empty thing will be set as the stored item
The stored item will be converted

*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGlGQUFpRixVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sV0FBVyxNQUFN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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtEQUFrQjtBQUNsQyxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGdFQUFrQjtBQUN0QyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrREFBa0I7QUFDOUIsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMERBQWE7QUFDakMsb0JBQW9CLDBEQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzlQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBaUU7QUFDdEM7QUFDb0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBLElBQUksK0VBQWE7QUFDakIsSUFBSSxzRUFBSTtBQUNSLElBQUksc0VBQUk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRkFBYTtBQUNqQjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy90b2RvLWxpc3QvYWRkUHJvamVjdFRvTGlicmFyeS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL3VpLWludGVyZmFjZS9hZGRQcm9qZWN0RE9NLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL21vZHVsZXMvdWktaW50ZXJmYWNlL2FkZFByb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL21vZHVsZXMvdWktaW50ZXJmYWNlL2NyZWF0ZVdlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy91aS1pbnRlcmZhY2UvbG9jYWxTdG9yYWdlVXBkYXRlLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL21vZHVsZXMvdWktaW50ZXJmYWNlL3NlbGVjdFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy91aS1pbnRlcmZhY2UvdGFzay5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnSmVsbGVlQm9sZCc7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaHRtbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmZGY0O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyIDAuNWZyO1xufVxuXG4jaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MmEwNjtcbn1cblxuLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdKZWxsZWVCb2xkJztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBjb2xvcjogI2VhZmZkNjtcbn1cblxuLmxvZ286OmJlZm9yZSB7XG4gICAgY29udGVudDogJ2RvJztcbiAgICBjb2xvcjogI2RlZjFhMDtcbn1cblxuLm1vZGVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNTBweDsgIFxuICAgIGhlaWdodDogNTBweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI21haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgNmZyO1xufVxuXG4ubmF2aWdhdGlvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyLjVmciA2ZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwZjFiYjtcbn1cblxuLnRvcC1uYXYtY29udGFpbmVyLFxuLmJvdHRvbS1uYXYtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi50b3AtbmF2LWNvbnRhaW5lciB7XG4gICAgZ2FwOiA1JTtcbn1cblxuLnRvcC1uYXYtYnV0dG9ucyxcbi5wcm9qZWN0LW5hbWUge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogIzM1MzUzNTtcbiAgICBmb250LWZhbWlseTogJ0plbGxlZUJvbGQnO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGYxYmI7XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi50b3AtbmF2LWJ1dHRvbnM6aG92ZXIsXG4ucHJvamVjdC1uYW1lOmhvdmVyIHtcbiAgICBjb2xvcjogIzFjOGEwNjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBlNmFhO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNzZWxlY3RlZCB7XG4gICAgY29sb3I6ICMxYzhhMDY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IwZTZhYTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYm90dG9tLW5hdi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogIzM1MzUzNTtcbiAgICBmb250LWZhbWlseTogJ0plbGxlZUJvbGQnO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGdhcDogNSU7XG59XG5cbi5ib3R0b20tbmF2LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiAjMWM4YTA2O1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLmNvbnRhaW5lci1mb3ItcHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGdhcDogMTBweDtcbn1cblxuXG4ucHJvamVjdC1kZWxldGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDI0NSwgMTEyLCAxMTIpO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYigyMjMsIDY3LCA2Nyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgODgsIDg4KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdKZWxsZWVCb2xkJztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6ICMzNTM1MzU7XG4gICAgZm9udC1mYW1pbHk6ICdKZWxsZWVCb2xkJztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZjFhMDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAjYjJjNzZlO1xuICAgIGJvcmRlci1jb2xvcjogI2UxZmQ4NDtcbn1cblxuLyogQ09OVEVOVCBTRUNUSU9OICovXG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNWZyIDhmcjtcbn1cblxuLnRvcC1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDFmcjtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuXG4uY29udGVudC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICMzNTM1MzU7XG4gICAgZm9udC1mYW1pbHk6ICdKZWxsZWVCb2xkJztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWYxYTA7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggI2IyYzc2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY29udGVudC1idXR0b24ge1xuICAgIGJvcmRlci1jb2xvcjogIzU2ZDI0YjtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNzUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjNTZkMjRiO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGQwMWU7XG59XG5cbi5ib3R0b20tY29udGVudC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4ucHJvamVjdC1hZGQtYnV0dG9uIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDAxZTtcbiAgICBib3JkZXItY29sb3I6ICM1NmQyNGI7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggIzU2ZDI0YjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4jcHJvamVjdC1uYW1lIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICMzNTM1MzU7XG4gICAgZm9udC1mYW1pbHk6ICdKZWxsZWVCb2xkJztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuXG4vKiBGT09URVIgKi9cblxuI2Zvb3RlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBmb250LWZhbWlseTogJ0plbGxlZUJvbGQnO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkyYTA2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogVEFTSyBGT1JNICovXG5cbiN0YXNrLWZvcm0tY29udGFpbmVyLFxuLnRhc2tzLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYm94LXNoYWRvdzogN3B4IDdweCAxNXB4ICNjMmNlYzI7XG4gICAgXG59XG5cbi50YXNrLWZvcm0ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnI7XG59XG5cbi5mb3JtLWNvbnRhaW5lci1pbnB1dCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxubGFiZWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0plbGxlZUJvbGQnO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG4gICAgY29sb3I6ICNiMGM3YWU7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbn1cblxuLnRhc2stdGl0bGUsXG4ubm90ZXMsXG4ucHJpb3JpdHksXG4uZGF0ZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtLWFkZCB7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmMWEwO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICNiMmM3NmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjZTFmZDg0O1xuICAgIGNvbG9yOiAjMzUzNTM1O1xufVxuXG4udGFza3MtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnI7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvcC10YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgMmZyIDJmciAyZnI7XG59XG5cblxuXG4udGFza3MtdGl0bGUge1xuICAgIGdyaWQtY29sdW1uOiAzO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmRlbGV0ZS1idXR0b24ge1xuICAgIGdyaWQtY29sdW1uOiA1O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgODgsIDg4KTtcbn1cblxuLmhpZ2gge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmdiKDIyMywgNjcsIDY3KTtcbn1cblxuLm1lZGl1bSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2IoMjQwLCAxODUsIDgzKTtcbn1cblxuLmxvdyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMWM4YTA2O1xufVxuXG4vKiBEQVJLIE1PREUgKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7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XCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0plbGxlZUJvbGQnO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZmRmNDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMC41ZnI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkyYTA2O1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnSmVsbGVlQm9sZCc7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgY29sb3I6ICNlYWZmZDY7XFxufVxcblxcbi5sb2dvOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnZG8nO1xcbiAgICBjb2xvcjogI2RlZjFhMDtcXG59XFxuXFxuLm1vZGVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTBweDsgIFxcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIDZmcjtcXG59XFxuXFxuLm5hdmlnYXRpb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyLjVmciA2ZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGYxYmI7XFxufVxcblxcbi50b3AtbmF2LWNvbnRhaW5lcixcXG4uYm90dG9tLW5hdi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxufVxcblxcbi50b3AtbmF2LWNvbnRhaW5lciB7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi50b3AtbmF2LWJ1dHRvbnMsXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiAjMzUzNTM1O1xcbiAgICBmb250LWZhbWlseTogJ0plbGxlZUJvbGQnO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGYxYmI7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi50b3AtbmF2LWJ1dHRvbnM6aG92ZXIsXFxuLnByb2plY3QtbmFtZTpob3ZlciB7XFxuICAgIGNvbG9yOiAjMWM4YTA2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBlNmFhO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jc2VsZWN0ZWQge1xcbiAgICBjb2xvcjogIzFjOGEwNjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IwZTZhYTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJvdHRvbS1uYXYtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiAjMzUzNTM1O1xcbiAgICBmb250LWZhbWlseTogJ0plbGxlZUJvbGQnO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5ib3R0b20tbmF2LWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICMxYzhhMDY7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogNDVweDtcXG59XFxuXFxuLmNvbnRhaW5lci1mb3ItcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI0NSwgMTEyLCAxMTIpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2IoMjIzLCA2NywgNjcpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA4OCwgODgpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnSmVsbGVlQm9sZCc7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogIzM1MzUzNTtcXG4gICAgZm9udC1mYW1pbHk6ICdKZWxsZWVCb2xkJztcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZjFhMDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggI2IyYzc2ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTFmZDg0O1xcbn1cXG5cXG4vKiBDT05URU5UIFNFQ1RJT04gKi9cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNWZyIDhmcjtcXG59XFxuXFxuLnRvcC1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDFmcjtcXG4gICAgbWFyZ2luLXRvcDogMSU7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7XFxufVxcblxcbi5jb250ZW50LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMzUzNTM1O1xcbiAgICBmb250LWZhbWlseTogJ0plbGxlZUJvbGQnO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmMWEwO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICNiMmM3NmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5jb250ZW50LWJ1dHRvbiB7XFxuICAgIGJvcmRlci1jb2xvcjogIzU2ZDI0YjtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjNTZkMjRiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkMDFlO1xcbn1cXG5cXG4uYm90dG9tLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzJTtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5wcm9qZWN0LWFkZC1idXR0b24ge1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDAxZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNTZkMjRiO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAjNTZkMjRiO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICMzNTM1MzU7XFxuICAgIGZvbnQtZmFtaWx5OiAnSmVsbGVlQm9sZCc7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuLyogRk9PVEVSICovXFxuXFxuI2Zvb3RlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnSmVsbGVlQm9sZCc7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTJhMDY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogVEFTSyBGT1JNICovXFxuXFxuI3Rhc2stZm9ybS1jb250YWluZXIsXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlNGRhO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBib3gtc2hhZG93OiA3cHggN3B4IDE1cHggI2MyY2VjMjtcXG4gICAgXFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXItaW5wdXQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdKZWxsZWVCb2xkJztcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxuICAgIGNvbG9yOiAjYjBjN2FlO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcXG59XFxuXFxuLnRhc2stdGl0bGUsXFxuLm5vdGVzLFxcbi5wcmlvcml0eSxcXG4uZGF0ZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tYWRkIHtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZjFhMDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggI2IyYzc2ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTFmZDg0O1xcbiAgICBjb2xvcjogIzM1MzUzNTtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b3AtdGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgMmZyIDJmciAyZnI7XFxufVxcblxcblxcblxcbi50YXNrcy10aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kZWxldGUtYnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA4OCwgODgpO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJnYigyMjMsIDY3LCA2Nyk7XFxufVxcblxcbi5tZWRpdW0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2IoMjQwLCAxODUsIDgzKTtcXG59XFxuXFxuLmxvdyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICMxYzhhMDY7XFxufVxcblxcbi8qIERBUksgTU9ERSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBhZGRQcm9qZWN0RE9NIGZyb20gXCIuLi91aS1pbnRlcmZhY2UvYWRkUHJvamVjdERPTVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0VG9MaWJyYXJ5KHByb2plY3RzLCBwcm9qZWN0LCBjb250YWluZXJGb3JQcm9qZWN0cykge1xuICAgIGlmIChwcm9qZWN0ID09PSBcIlwiIHx8IHByb2plY3QgaW4gcHJvamVjdHMpIHJldHVyblxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgZml4ZWRQcm9qZWN0TmFtZSA9IHByb2plY3QucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcbiAgICAgICAgcHJvamVjdHNbZml4ZWRQcm9qZWN0TmFtZV0gPSBbXTtcbiAgICAgICAgYWRkUHJvamVjdERPTShjb250YWluZXJGb3JQcm9qZWN0cywgcHJvamVjdCwgcHJvamVjdHMpXG4gICAgfVxufTtcbiIsImltcG9ydCB0YXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBsb2NhbFN0b3JhZ2VVcGRhdGUgZnJvbSBcIi4vbG9jYWxTdG9yYWdlVXBkYXRlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0RE9NKGNvbnRhaW5lckZvclByb2plY3RzLCBwcm9qZWN0LCBwcm9qZWN0cykge1xuICAgIGxldCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWNvbnRhaW5lcicpO1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ2Nob2ljZScpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICBsZXQgcHJvamVjdERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3REZWxldGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUnKTtcbiAgICBwcm9qZWN0RGVsZXRlLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlKTtcbiAgICBjb250YWluZXJGb3JQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cblxuICAgIC8vIGRlbGV0ZSBwcm9qZWN0IGZyb20gRE9NIGFuZCBsaWJyYXJ5XG4gICAgcHJvamVjdERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAgICAgbGV0IHNob3J0Y3V0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgaSA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBwcm9qZWN0c1tzaG9ydGN1dF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgdGFza05hbWUgPSBwcm9qZWN0c1tzaG9ydGN1dF1bMF1bJ3Rhc2snXTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb2plY3QgaW4gcHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0c1twcm9qZWN0XS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtWyd0YXNrJ10gPT09IHRhc2tOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOL0EnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzW3Byb2plY3RdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0YXNrKCkucGxhY2VUYXNrcyhwcm9qZWN0cyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpLnVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0cyk7XG5cblxuICAgICAgICBjb250YWluZXJGb3JQcm9qZWN0cy5yZW1vdmVDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgaW4gcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9qZWN0c1tlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnRdO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RlZCcpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNob2ljZScpO1xuICAgICAgICAgICAgICAgIHJlc2V0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWhlYWRlcicpO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IGN1cnJlbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgdGFzaygpLnBsYWNlVGFza3MocHJvamVjdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlVXBkYXRlKCkudXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgICAgICAgfVxuICAgIH0pXG59IiwiaW1wb3J0IGFkZFByb2plY3RUb0xpYnJhcnkgZnJvbSBcIi4uL3RvZG8tbGlzdC9hZGRQcm9qZWN0VG9MaWJyYXJ5XCI7XG5pbXBvcnQgc2VsZWN0UHJvamVjdCBmcm9tIFwiLi9zZWxlY3RQcm9qZWN0XCI7XG5pbXBvcnQgbG9jYWxTdG9yYWdlVXBkYXRlIGZyb20gXCIuL2xvY2FsU3RvcmFnZVVwZGF0ZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdEZvcm1ET00oYm90dG9tTmF2Q29udGFpbmVyLCBhZGRQcm9qZWN0QnV0dG9uLCBwcm9qZWN0cywgY29udGFpbmVyRm9yUHJvamVjdHMpIHtcblxuICAgIGxldCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybS1jb250YWluZXInKTtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1uYW1lLWZvcm0nKTtcbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLWJ1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICfinJQnO1xuXG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbmFtZScpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3ROYW1lJyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIGJvdHRvbU5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybUNvbnRhaW5lcik7XG5cbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZFByb2plY3RUb0xpYnJhcnkocHJvamVjdHMsIHRpdGxlSW5wdXQudmFsdWUsIGNvbnRhaW5lckZvclByb2plY3RzKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGJvdHRvbU5hdkNvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0Rm9ybUNvbnRhaW5lcik7XG4gICAgICAgIHNlbGVjdFByb2plY3QocHJvamVjdHMpO1xuICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKS51cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdHMpO1xuICAgIH0pO1xuXG4gICAgXG59IiwiaW1wb3J0IHNlbGVjdFByb2plY3QgZnJvbSBcIi4vc2VsZWN0UHJvamVjdFwiO1xuaW1wb3J0IGFkZFByb2plY3RGb3JtRE9NIGZyb20gXCIuL2FkZFByb2plY3RGb3JtXCI7XG5pbXBvcnQgdGFzayBmcm9tIFwiLi90YXNrXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlV2Vic2l0ZShwcm9qZWN0cykge1xuXG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG5cblxuICAgIC8vIGhlYWRlclxuICAgIFxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgICBcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSAnb2V5JztcbiAgICBcbiAgICBsZXQgbW9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1vZGUuY2xhc3NMaXN0LmFkZCgnbW9kZXMnKTtcbiAgICBtb2RlLnRleHRDb250ZW50ID0gJ/CfjJYnO1xuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobW9kZSk7XG4gICAgXG4gICAgLy8gbWFpblxuICAgIFxuICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4tY29udGFpbmVyJyk7XG5cbiAgICBsZXQgbmF2aWdhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmlnYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi1jb250YWluZXInKTtcblxuICAgIGxldCB0b3BOYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BOYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9wLW5hdi1jb250YWluZXInKTtcbiAgICBsZXQgYm90dG9tTmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm90dG9tTmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbS1uYXYtY29udGFpbmVyJyk7XG5cbiAgICBsZXQgYWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWxsQnV0dG9uLnRleHRDb250ZW50ID0gJ0FsbCc7XG4gICAgYWxsQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWQnKTtcbiAgICBhbGxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hvaWNlJyk7XG4gICAgbGV0IHRvZGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kYXlCdXR0b24udGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgIHRvZGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob2ljZScpO1xuICAgIGxldCBoaWdoUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBoaWdoUHJpb3JpdHlCdXR0b24udGV4dENvbnRlbnQgPSAnSGlnaCBQcmlvcml0eSc7XG4gICAgaGlnaFByaW9yaXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nob2ljZScpO1xuICAgIGFsbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2LWJ1dHRvbnMnKTtcbiAgICB0b2RheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2LWJ1dHRvbnMnKTtcbiAgICBoaWdoUHJpb3JpdHlCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9wLW5hdi1idXR0b25zJyk7XG5cbiAgICB0b3BOYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxsQnV0dG9uKTtcbiAgICB0b3BOYXZDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlCdXR0b24pO1xuICAgIHRvcE5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlCdXR0b24pO1xuXG4gICAgbGV0IGJvdHRvbU5hdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvdHRvbU5hdkhlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgYm90dG9tTmF2SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbS1uYXYtaGVhZGVyJyk7XG4gICAgYm90dG9tTmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbU5hdkhlYWRlcik7XG5cbiAgICBsZXQgY29udGFpbmVyRm9yUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXJGb3JQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItZm9yLXByb2plY3RzJyk7XG4gICAgYm90dG9tTmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckZvclByb2plY3RzKTtcblxuICAgIGxldCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcblxuXG4gICAgLy8gTUFLRSBBIENPTlRBSU5FUiBGT1IgVEhFIFBST0pFQ1RTIENPTlRBSU5FUlxuXG4gICAgYm90dG9tTmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkUHJvamVjdEZvcm1ET00oYm90dG9tTmF2Q29udGFpbmVyLCBhZGRQcm9qZWN0QnV0dG9uLCBwcm9qZWN0cywgY29udGFpbmVyRm9yUHJvamVjdHMpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmRpc2FibGVkID0gJ3RydWUnO1xuICAgIH0pXG5cbiAgICAvLyBjb250ZW50IGNvbnRhaW5lciBzZWN0aW9uXG5cbiAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jb250YWluZXInKTtcblxuICAgIGxldCB0b3BDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9wQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b3AtY29udGVudC1jb250YWluZXInKTtcblxuICAgIGxldCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWhlYWRlcicpO1xuICAgIGNvbnRlbnRIZWFkZXIudGV4dENvbnRlbnQgPSAnQWxsJztcbiAgICB0b3BDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkZXIpO1xuXG4gICAgbGV0IGNvbnRlbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250ZW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtYnV0dG9uJyk7XG4gICAgY29udGVudEJ1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcbiAgICB0b3BDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRCdXR0b24pO1xuXG4gICAgbGV0IGJvdHRvbUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3R0b21Db250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbS1jb250ZW50LWNvbnRhaW5lcicpO1xuXG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvcENvbnRlbnRDb250YWluZXIpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYm90dG9tQ29udGVudENvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uQ29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuICAgIG5hdmlnYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodG9wTmF2Q29udGFpbmVyKTtcbiAgICBuYXZpZ2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvdHRvbU5hdkNvbnRhaW5lcik7XG5cbiAgICBzZWxlY3RQcm9qZWN0KHByb2plY3RzKTtcblxuICAgIGNvbnRlbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2soKS5jcmVhdGVUYXNrRm9ybSgpO1xuICAgICAgICBjb250ZW50QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICB0YXNrKCkuYWRkKHByb2plY3RzKTtcblxuXG4gICAgfSk7XG5cblxuXG4gICAgLypcblxuXG4gICAgKi9cblxuXG4gICAgLy8gZm9vdGVyXG4gICAgXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ2NyZWF0ZWQgYnkgcGhhbWNvZHkgQCBnaXRodWIuY29tJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuXG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2NhbFN0b3JhZ2VVcGRhdGUocHJvamVjdHMpIHtcbiAgICBwcm9qZWN0cztcbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdHMpIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0c0pTT04gPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0cyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgcHJvamVjdHNKU09OKTtcbiAgICAgICAgICAgIGxldCBzdG9yZWRQcm9qZWN0SlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG4gICAgICAgICAgICBsZXQgc3RvcmVkUHJvamVjdCA9IEpTT04ucGFyc2Uoc3RvcmVkUHJvamVjdEpTT04pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RvcmVkUHJvamVjdClcbiAgICAgICAgICAgIHByb2plY3RzID0gc3RvcmVkUHJvamVjdDtcbiAgICAgICAgfSxcbiAgICB9XG59IiwiaW1wb3J0IHRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IGxvY2FsU3RvcmFnZVVwZGF0ZSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VVcGRhdGVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWxlY3RQcm9qZWN0KHByb2plY3RzKSB7XG4gICAgbGV0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1oZWFkZXInKTtcbiAgICBsZXQgY2hvaWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaG9pY2UnKTtcbiAgICBsZXQgY29udGVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJ1dHRvbicpO1xuICAgIEFycmF5LmZyb20oY2hvaWNlcykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBwcmV2aW91cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgcHJldmlvdXMucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IGN1cnJlbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB0YXNrKCkucGxhY2VUYXNrcyhwcm9qZWN0cyk7XG4gICAgICAgICAgICBjb250ZW50QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTtcbiAgICAgICAgICAgIGZvciAobGV0IHRhc2tzIGluIHByb2plY3RzWydUb2RheSddKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcHJvamVjdHNbJ1RvZGF5J10uZmluZEluZGV4KGl0ZW0gPT4gaXRlbVsnZGF0ZSddICE9PSBjdXJyZW50RGF0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm9uZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbJ1RvZGF5J10uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlVXBkYXRlKCkudXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgICAgICAgfSlcbiAgICB9KVxufSIsImltcG9ydCBhZGRQcm9qZWN0RE9NIGZyb20gXCIuL2FkZFByb2plY3RET01cIjtcbmltcG9ydCBsb2NhbFN0b3JhZ2VVcGRhdGUgZnJvbSBcIi4vbG9jYWxTdG9yYWdlVXBkYXRlXCI7XG5pbXBvcnQgc2VsZWN0UHJvamVjdCBmcm9tIFwiLi9zZWxlY3RQcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2socHJvamVjdHMpIHtcbiAgICBwcm9qZWN0cztcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVUYXNrRm9ybSgpIHtcbiAgICAgICAgICAgIGxldCBib3R0b21Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvdHRvbS1jb250ZW50LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgbGV0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgICAgIGJvdHRvbUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm1Db250YWluZXIpO1xuXG4gICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtJyk7XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuXG4gICAgICAgICAgICBsZXQgdGFza1RpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrVGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXItaW5wdXQnKTtcbiAgICAgICAgICAgIGxldCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgdGFza0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgICAgIHRhc2tMYWJlbC50ZXh0Q29udGVudCA9ICdUQVNLJztcbiAgICAgICAgICAgIHRhc2tUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICAgICAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICAgICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLXRpdGxlJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXRpdGxlJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlQ29udGFpbmVyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG5vdGVzVGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5vdGVzVGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXItaW5wdXQnKTtcbiAgICAgICAgICAgIGxldCBub3Rlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIG5vdGVzTGFiZWwudGV4dENvbnRlbnQgPSAnTk9URVMnO1xuICAgICAgICAgICAgbm90ZXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdub3RlcycpO1xuICAgICAgICAgICAgbm90ZXNUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlc0xhYmVsKTtcbiAgICAgICAgICAgIGxldCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBub3Rlcy5jbGFzc0xpc3QuYWRkKCdub3RlcycpO1xuICAgICAgICAgICAgbm90ZXMuc2V0QXR0cmlidXRlKCduYW1lJywgJ25vdGVzJyk7XG4gICAgICAgICAgICBub3Rlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGVzJyk7XG4gICAgICAgICAgICBub3Rlc1RpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobm90ZXNUaXRsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGxldCBwcmlvcml0eVRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcmlvcml0eVRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyLWlucHV0Jyk7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1BSSU9SSVRZJztcbiAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgIHByaW9yaXR5VGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICBwcmlvcml0eVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlUaXRsZUNvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgbGV0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgICAgICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgbGV0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgICAgICAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgICAgIGxldCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgICAgICAgICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuICAgICAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xuICAgICAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuXG4gICAgICAgICAgICBsZXQgZGF0ZVRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkYXRlVGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXItaW5wdXQnKTtcbiAgICAgICAgICAgIGxldCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUnKTtcbiAgICAgICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEVUUgREFURSc7XG4gICAgICAgICAgICBkYXRlVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICAgICAgICAgIGxldCBkYXRlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGRhdGVzSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgICAgICAgICAgZGF0ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICAgICAgZGF0ZVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVzSW5wdXQpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlVGl0bGVDb250YWluZXIpO1xuXG4gICAgICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1hZGQnKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQUREJztcblxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZChwcm9qZWN0cykge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1idXR0b24nKTtcbiAgICAgICAgICAgIGxldCBmb3JtQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tYWRkJyk7XG4gICAgICAgICAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpO1xuICAgICAgICAgICAgbGV0IG5vdGVzTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlcycpO1xuICAgICAgICAgICAgbGV0IHByaW9yaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuICAgICAgICAgICAgbGV0IGRhdGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbiAgICAgICAgICAgIGZvcm1BZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RlZCcpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFByb2plY3RGaXggPSBzZWxlY3RlZFByb2plY3QucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgdG9kbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGFzazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiBcIlwiLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b2RvWyd0YXNrJ10gPSB0YXNrTmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0b2RvWydub3RlcyddID0gbm90ZXNOYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRvZG9bJ3ByaW9yaXR5J10gPSBwcmlvcml0eU5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgdG9kb1snZGF0ZSddID0gZGF0ZU5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgdG9kb1sncHJvamVjdCddID0gc2VsZWN0ZWRQcm9qZWN0Rml4O1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFByb2plY3RGaXggPT09IFwiQWxsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbJ0FsbCddLnB1c2godG9kbyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmlvcml0eU5hbWUudmFsdWUgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1snSGlnaFByaW9yaXR5J10ucHVzaCh0b2RvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZU5hbWUudmFsdWUgPT09IGN1cnJlbnREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1snVG9kYXknXS5wdXNoKHRvZG8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdGVkUHJvamVjdEZpeCA9PT0gXCJIaWdoUHJpb3JpdHlcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1snSGlnaFByaW9yaXR5J10ucHVzaCh0b2RvKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbJ0FsbCddLnB1c2godG9kbyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRlTmFtZS52YWx1ZSA9PT0gY3VycmVudERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzWydUb2RheSddLnB1c2godG9kbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0ZWRQcm9qZWN0Rml4ID09PSBcIlRvZGF5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbJ1RvZGF5J10ucHVzaCh0b2RvKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbJ0FsbCddLnB1c2godG9kbyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmlvcml0eU5hbWUudmFsdWUgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1snSGlnaFByaW9yaXR5J10ucHVzaCh0b2RvKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzW3NlbGVjdGVkUHJvamVjdEZpeF0ucHVzaCh0b2RvKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbJ0FsbCddLnB1c2godG9kbyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmlvcml0eU5hbWUudmFsdWUgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1snSGlnaFByaW9yaXR5J10ucHVzaCh0b2RvKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGVOYW1lLnZhbHVlID09PSBjdXJyZW50RGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbJ1RvZGF5J10ucHVzaCh0b2RvKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGVudEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICAgICAgICAgICAgICB0YXNrKCkucmVtb3ZlRm9ybSgpO1xuICAgICAgICAgICAgICAgIHRhc2soKS5wbGFjZVRhc2tzKHByb2plY3RzKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VVcGRhdGUoKS51cGRhdGVMb2NhbFN0b3JhZ2UocHJvamVjdHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlRm9ybSgpIHtcbiAgICAgICAgICAgIGxldCBjb250ZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYnV0dG9uJyk7XG4gICAgICAgICAgICBjb250ZW50QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgbGV0IGJvdHRvbUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tLWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBib3R0b21Db250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tGb3JtQ29udGFpbmVyKTtcbiAgICAgICAgfSxcblxuXG4gICAgICAgIC8vIExPT1AgVEhSVSBUSEUgU0VMRUNURUQgQU5EIENSRUFURSBUQVNLIE9OIEVWRVJZIFxuICAgICAgICBwbGFjZVRhc2tzKHByb2plY3RzKSB7XG4gICAgICAgICAgICBsZXQgYm90dG9tQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20tY29udGVudC1jb250YWluZXInKTtcbiAgICAgICAgICAgIGlmIChib3R0b21Db250ZW50Q29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHdoaWxlIChib3R0b21Db250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tQ29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChib3R0b21Db250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RlZCcpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkRml4ID0gc2VsZWN0ZWQucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgdGFza3MgaW4gcHJvamVjdHNbc2VsZWN0ZWRGaXhdKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChzZWxlY3RlZEZpeCk7XG4gICAgICAgICAgICAgICAgYm90dG9tQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgICAgIGxldCB0b3BUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdG9wVGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b3AtdGFzay1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcFRhc2tDb250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tzZWxlY3RlZEZpeF1bdGFza3NdWyd0YXNrJ107XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza3MtdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAneCc7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcblxuICAgICAgICAgICAgICAgIHRvcFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgICAgIHRvcFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICAgICAgICAgIGxldCBub3RlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG5vdGVDYXJkLmNsYXNzTGlzdC5hZGQoJ25vdGUtY2FyZCcpO1xuICAgICAgICAgICAgICAgIG5vdGVDYXJkLnRleHRDb250ZW50ID0gcHJvamVjdHNbc2VsZWN0ZWRGaXhdW3Rhc2tzXVsnbm90ZXMnXTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVDYXJkKTtcblxuICAgICAgICAgICAgICAgIGxldCBkYXRlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRhdGVDYXJkLmNsYXNzTGlzdC5hZGQoJ2RhdGUtY2FyZCcpO1xuICAgICAgICAgICAgICAgIGRhdGVDYXJkLnRleHRDb250ZW50ID0gcHJvamVjdHNbc2VsZWN0ZWRGaXhdW3Rhc2tzXVsnZGF0ZSddO1xuICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUNhcmQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RzW3NlbGVjdGVkRml4XVt0YXNrc11bJ3ByaW9yaXR5J10gPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlnaCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9qZWN0c1tzZWxlY3RlZEZpeF1bdGFza3NdWydwcmlvcml0eSddID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVkaXVtJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvdycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2soKS5kZWxldGVUYXNrcyhlLnRhcmdldCwgcHJvamVjdHMpXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVVwZGF0ZSgpLnVwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgfSxcblxuICAgICAgICBkZWxldGVUYXNrcyhlLCBwcm9qZWN0cykge1xuICAgICAgICAgICAgbGV0IGJvdHRvbUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tLWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBsZXQgdGFza05hbWUgPSBlLnBhcmVudE5vZGUuZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcblxuICAgICAgICAgICAgZm9yIChsZXQgcHJvamVjdCBpbiBwcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHByb2plY3RzW3Byb2plY3RdLmZpbmRJbmRleChpdGVtID0+IGl0ZW1bJ3Rhc2snXSA9PT0gdGFza05hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOL0FcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvdHRvbUNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoZS5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlVXBkYXRlKCkudXBkYXRlTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgICAgICAgfSxcblxuXG4gICAgICAgIGxvYWRQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvamVjdCBpbiBwcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0ID09PSAnQWxsJyB8fCBwcm9qZWN0ID09PSAnVG9kYXknIHx8IHByb2plY3QgPT0gJ0hpZ2hQcmlvcml0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NraXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250YWluZXJGb3JQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItZm9yLXByb2plY3RzJyk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFByb2plY3RET00oY29udGFpbmVyRm9yUHJvamVjdHMsIHByb2plY3QsIHByb2plY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJvamVjdChwcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlV2Vic2l0ZSBmcm9tIFwiLi9tb2R1bGVzL3VpLWludGVyZmFjZS9jcmVhdGVXZWJzaXRlXCI7XG5pbXBvcnQgJy4uL3NyYy9zdHlsZXMuY3NzJztcbmltcG9ydCB0YXNrIGZyb20gXCIuL21vZHVsZXMvdWktaW50ZXJmYWNlL3Rhc2tcIjtcblxubGV0IHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuaWYgKHN0b3JlZERhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcIkxhdW5jaGluZyBzdG9yZWQgZGF0YVwiKTtcbiAgICBjcmVhdGVXZWJzaXRlKHN0b3JlZERhdGEpO1xuICAgIHRhc2soKS5wbGFjZVRhc2tzKHN0b3JlZERhdGEpO1xuICAgIHRhc2soKS5sb2FkUHJvamVjdHMoc3RvcmVkRGF0YSk7XG59XG5lbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIk5vIHN0b3JlZCBkYXRhXCIpO1xuICAgIGNvbnN0IHByb2plY3RzID0ge1xuICAgICAgICBBbGw6IFtdLFxuICAgICAgICBUb2RheTogW10sXG4gICAgICAgIEhpZ2hQcmlvcml0eTogW11cbiAgICB9XG4gICAgY3JlYXRlV2Vic2l0ZShwcm9qZWN0cyk7XG59XG5cblxuLypcblxuU3RvcmVkIGlucHV0IGNhbiBOT1QgYmUgcmVzZXQgZXZlcnkgcmVmcmVzaFxuUHJvamVjdHMgbmVlZHMgdG8gYmUgc3VibWl0dGluZyB0byBhbm90aGVyIGVtcHR5IHRoaW5nLlxuVGhhdCBlbXB0eSB0aGluZyB3aWxsIGJlIHNldCBhcyB0aGUgc3RvcmVkIGl0ZW1cblRoZSBzdG9yZWQgaXRlbSB3aWxsIGJlIGNvbnZlcnRlZFxuXG4qLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==