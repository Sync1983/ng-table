(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["ng-table"] = factory(require("angular"));
	else
		root["ng-table"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */,
/* 2 */
/* exports provided: default */
/* exports used: default */
/*!******************************!*\
  !*** ./src/browser/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngTable_directive__ = __webpack_require__(/*! ./ngTable.directive */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngTableColumn__ = __webpack_require__(/*! ./ngTableColumn */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngTableColumnsBinding_directive__ = __webpack_require__(/*! ./ngTableColumnsBinding.directive */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngTableController__ = __webpack_require__(/*! ./ngTableController */ 16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngTableDynamic_directive__ = __webpack_require__(/*! ./ngTableDynamic.directive */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngTableFilterConfig__ = __webpack_require__(/*! ./ngTableFilterConfig */ 18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngTableFilterRow_directive__ = __webpack_require__(/*! ./ngTableFilterRow.directive */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngTableFilterRowController__ = __webpack_require__(/*! ./ngTableFilterRowController */ 20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngTableGroupRow_directive__ = __webpack_require__(/*! ./ngTableGroupRow.directive */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngTableGroupRowController__ = __webpack_require__(/*! ./ngTableGroupRowController */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngTablePagination_directive__ = __webpack_require__(/*! ./ngTablePagination.directive */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngTableSelectFilterDs_directive__ = __webpack_require__(/*! ./ngTableSelectFilterDs.directive */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngTableSorterRow_directive__ = __webpack_require__(/*! ./ngTableSorterRow.directive */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngTableSorterRowController__ = __webpack_require__(/*! ./ngTableSorterRowController */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__filters_number_html__ = __webpack_require__(/*! ./filters/number.html */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__filters_number_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__filters_number_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__filters_select_html__ = __webpack_require__(/*! ./filters/select.html */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__filters_select_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__filters_select_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__filters_select_multiple_html__ = __webpack_require__(/*! ./filters/select-multiple.html */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__filters_select_multiple_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__filters_select_multiple_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__filters_text_html__ = __webpack_require__(/*! ./filters/text.html */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__filters_text_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__filters_text_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pager_html__ = __webpack_require__(/*! ./pager.html */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pager_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__pager_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__header_html__ = __webpack_require__(/*! ./header.html */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__header_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__header_html__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return module; });






















var module = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('ngTable-browser', [])
    .directive('ngTable', __WEBPACK_IMPORTED_MODULE_1__ngTable_directive__["a" /* ngTable */])
    .factory('ngTableColumn', __WEBPACK_IMPORTED_MODULE_2__ngTableColumn__["a" /* ngTableColumn */])
    .directive('ngTableColumnsBinding', __WEBPACK_IMPORTED_MODULE_3__ngTableColumnsBinding_directive__["a" /* ngTableColumnsBinding */])
    .controller('ngTableController', __WEBPACK_IMPORTED_MODULE_4__ngTableController__["a" /* ngTableController */])
    .directive('ngTableDynamic', __WEBPACK_IMPORTED_MODULE_5__ngTableDynamic_directive__["a" /* ngTableDynamic */])
    .provider('ngTableFilterConfig', __WEBPACK_IMPORTED_MODULE_6__ngTableFilterConfig__["a" /* ngTableFilterConfigProvider */])
    .directive('ngTableFilterRow', __WEBPACK_IMPORTED_MODULE_7__ngTableFilterRow_directive__["a" /* ngTableFilterRow */])
    .controller('ngTableFilterRowController', __WEBPACK_IMPORTED_MODULE_8__ngTableFilterRowController__["a" /* ngTableFilterRowController */])
    .directive('ngTableGroupRow', __WEBPACK_IMPORTED_MODULE_9__ngTableGroupRow_directive__["a" /* ngTableGroupRow */])
    .controller('ngTableGroupRowController', __WEBPACK_IMPORTED_MODULE_10__ngTableGroupRowController__["a" /* ngTableGroupRowController */])
    .directive('ngTablePagination', __WEBPACK_IMPORTED_MODULE_11__ngTablePagination_directive__["a" /* ngTablePagination */])
    .directive('ngTableSelectFilterDs', __WEBPACK_IMPORTED_MODULE_12__ngTableSelectFilterDs_directive__["a" /* ngTableSelectFilterDs */])
    .directive('ngTableSorterRow', __WEBPACK_IMPORTED_MODULE_13__ngTableSorterRow_directive__["a" /* ngTableSorterRow */])
    .controller('ngTableSorterRowController', __WEBPACK_IMPORTED_MODULE_14__ngTableSorterRowController__["a" /* ngTableSorterRowController */]);



/***/ },
/* 3 */
/* exports provided: default */
/* exports used: default */
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngTableDefaultGetData__ = __webpack_require__(/*! ./ngTableDefaultGetData */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngTableDefaults__ = __webpack_require__(/*! ./ngTableDefaults */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngTableParams__ = __webpack_require__(/*! ./ngTableParams */ 30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngTableEventsChannel__ = __webpack_require__(/*! ./ngTableEventsChannel */ 29);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return module; });






var module = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('ngTable-core', [])
    .provider('ngTableDefaultGetData', __WEBPACK_IMPORTED_MODULE_1__ngTableDefaultGetData__["a" /* ngTableDefaultGetDataProvider */])
    .value('ngTableDefaults',__WEBPACK_IMPORTED_MODULE_2__ngTableDefaults__["a" /* ngTableDefaults */])
    .factory('NgTableParams', __WEBPACK_IMPORTED_MODULE_3__ngTableParams__["a" /* ngTableParamsFactory */])
    .factory('ngTableEventsChannel', __WEBPACK_IMPORTED_MODULE_4__ngTableEventsChannel__["a" /* ngTableEventsChannel */]);



/***/ },
/* 4 */
/* unknown exports provided */
/* exports used: default */
/*!************************************!*\
  !*** ./src/browser/filterRow.html ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/filterRow.html';
var html = "<tr ng-show=\"show_filter\" class=\"ng-table-filters\">\r\n    <th data-title-text=\"{{$column.titleAlt(this) || $column.title(this)}}\" ng-repeat=\"$column in $columns\" ng-if=\"$column.show(this)\" class=\"filter {{$column.class(this)}}\"\r\n        ng-class=\"params.settings().filterOptions.filterLayout === 'horizontal' ? 'filter-horizontal' : ''\">\r\n        <div ng-repeat=\"(name, filter) in $column.filter(this)\" ng-include=\"config.getTemplateUrl(filter)\" class=\"filter-cell\"\r\n             ng-class=\"[getFilterCellCss($column.filter(this), params.settings().filterOptions.filterLayout), $last ? 'last' : '']\">\r\n        </div>\r\n    </th>\r\n</tr>\r\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 5 */
/* unknown exports provided */
/*!*****************************************!*\
  !*** ./src/browser/filters/number.html ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/filters/number.html';
var html = "<input type=\"number\" name=\"{{name}}\" ng-disabled=\"$filterRow.disabled\" ng-model=\"params.filter()[name]\" class=\"input-filter form-control\"\r\n       placeholder=\"{{getFilterPlaceholderValue(filter, name)}}\"/>\r\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 6 */
/* unknown exports provided */
/*!**************************************************!*\
  !*** ./src/browser/filters/select-multiple.html ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/filters/select-multiple.html';
var html = "<select ng-options=\"data.id as data.title for data in $column.data\"\r\n        ng-disabled=\"$filterRow.disabled\"\r\n        multiple ng-multiple=\"true\"\r\n        ng-model=\"params.filter()[name]\"\r\n        class=\"filter filter-select-multiple form-control\" name=\"{{name}}\">\r\n</select>\r\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 7 */
/* unknown exports provided */
/*!*****************************************!*\
  !*** ./src/browser/filters/select.html ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/filters/select.html';
var html = "<select ng-options=\"data.id as data.title for data in $selectData\"\r\n        ng-table-select-filter-ds=\"$column\"\r\n        ng-disabled=\"$filterRow.disabled\"\r\n        ng-model=\"params.filter()[name]\"\r\n        class=\"filter filter-select form-control\" name=\"{{name}}\">\r\n    <option style=\"display:none\" value=\"\"></option>\r\n</select>\r\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 8 */
/* unknown exports provided */
/*!***************************************!*\
  !*** ./src/browser/filters/text.html ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/filters/text.html';
var html = "<input type=\"text\" name=\"{{name}}\" ng-disabled=\"$filterRow.disabled\" ng-model=\"params.filter()[name]\" class=\"input-filter form-control\"\r\n       placeholder=\"{{getFilterPlaceholderValue(filter, name)}}\"/>\r\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 9 */
/* unknown exports provided */
/* exports used: default */
/*!***********************************!*\
  !*** ./src/browser/groupRow.html ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/groupRow.html';
var html = "<tr ng-if=\"params.hasGroup() && params.hasGroupHeader()\" ng-show=\"$groupRow.show\" class=\"ng-table-group-header\">\r\n    <th colspan=\"{{getVisibleColumns().length}}\" class=\"sortable\" ng-class=\"{\r\n                    'sort-asc': params.hasGroup($selGroup, 'asc'),\r\n                    'sort-desc':params.hasGroup($selGroup, 'desc')\r\n                  }\">\r\n        <a href=\"\" ng-click=\"isSelectorOpen = !isSelectorOpen\" class=\"ng-table-group-selector\">\r\n            <strong class=\"sort-indicator\">{{$selGroupTitle}}</strong>\r\n            <button class=\"btn btn-default btn-xs ng-table-group-close\"\r\n                    ng-click=\"$groupRow.show = false; $event.preventDefault(); $event.stopPropagation();\">\r\n                <span class=\"glyphicon glyphicon-remove\"></span>\r\n            </button>\r\n            <button class=\"btn btn-default btn-xs ng-table-group-toggle\"\r\n                    ng-click=\"toggleDetail(); $event.preventDefault(); $event.stopPropagation();\">\r\n                <span class=\"glyphicon\" ng-class=\"{\r\n                    'glyphicon-resize-small': params.settings().groupOptions.isExpanded,\r\n                    'glyphicon-resize-full': !params.settings().groupOptions.isExpanded\r\n                }\"></span>\r\n            </button>\r\n        </a>\r\n        <div class=\"list-group\" ng-if=\"isSelectorOpen\">\r\n            <a href=\"\" class=\"list-group-item\" ng-repeat=\"group in getGroupables()\" ng-click=\"groupBy(group)\">\r\n                <strong>{{ getGroupTitle(group)}}</strong>\r\n                <strong ng-class=\"isSelectedGroup(group) && 'sort-indicator'\"></strong>\r\n            </a>\r\n        </div>\r\n    </th>\r\n</tr>\r\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 10 */
/* unknown exports provided */
/*!*********************************!*\
  !*** ./src/browser/header.html ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/header.html';
var html = "<ng-table-group-row></ng-table-group-row>\r\n<ng-table-sorter-row></ng-table-sorter-row>\r\n<ng-table-filter-row></ng-table-filter-row>\r\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 11 */
/* unknown exports provided */
/*!********************************!*\
  !*** ./src/browser/pager.html ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/pager.html';
var html = "<div class=\"ng-cloak ng-table-pager\" ng-if=\"params.data.length\">\r\n    <div ng-if=\"params.settings().counts.length\" class=\"ng-table-counts btn-group pull-right\">\r\n        <button ng-repeat=\"count in params.settings().counts\" type=\"button\"\r\n                ng-class=\"{'active':params.count() == count}\"\r\n                ng-click=\"params.count(count)\" class=\"btn btn-default\">\r\n            <span ng-bind=\"count\"></span>\r\n        </button>\r\n    </div>\r\n    <ul ng-if=\"pages.length\" class=\"pagination ng-table-pagination\">\r\n        <li ng-class=\"{'disabled': !page.active && !page.current, 'active': page.current}\" ng-repeat=\"page in pages\" ng-switch=\"page.type\">\r\n            <a ng-switch-when=\"prev\" ng-click=\"params.page(page.number)\" href=\"\">&laquo;</a>\r\n            <a ng-switch-when=\"first\" ng-click=\"params.page(page.number)\" href=\"\"><span ng-bind=\"page.number\"></span></a>\r\n            <a ng-switch-when=\"page\" ng-click=\"params.page(page.number)\" href=\"\"><span ng-bind=\"page.number\"></span></a>\r\n            <a ng-switch-when=\"more\" ng-click=\"params.page(page.number)\" href=\"\">&#8230;</a>\r\n            <a ng-switch-when=\"last\" ng-click=\"params.page(page.number)\" href=\"\"><span ng-bind=\"page.number\"></span></a>\r\n            <a ng-switch-when=\"next\" ng-click=\"params.page(page.number)\" href=\"\">&raquo;</a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 12 */
/* unknown exports provided */
/* exports used: default */
/*!************************************!*\
  !*** ./src/browser/sorterRow.html ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

var path = 'ng-table/sorterRow.html';
var html = "<tr class=\"ng-table-sort-header\">\r\n    <th title=\"{{$column.headerTitle(this)}}\"\r\n        ng-repeat=\"$column in $columns\"\r\n        ng-class=\"{\r\n                    'sortable': $column.sortable(this),\r\n                    'sort-asc': params.sorting()[$column.sortable(this)]=='asc',\r\n                    'sort-desc': params.sorting()[$column.sortable(this)]=='desc'\r\n                  }\"\r\n        ng-click=\"sortBy($column, $event)\"\r\n        ng-if=\"$column.show(this)\"\r\n        ng-init=\"template = $column.headerTemplateURL(this)\"\r\n        class=\"header {{$column.class(this)}}\">\r\n        <div ng-if=\"!template\" class=\"ng-table-header\" ng-class=\"{'sort-indicator': params.settings().sortingIndicator == 'div'}\">\r\n            <span ng-bind=\"$column.title(this)\" ng-class=\"{'sort-indicator': params.settings().sortingIndicator == 'span'}\"></span>\r\n        </div>\r\n        <div ng-if=\"template\" ng-include=\"template\"></div>\r\n    </th>\r\n</tr>\r\n";
var angular = __webpack_require__(/*! angular */ 0);
angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },
/* 13 */
/* exports provided: ngTable */
/* exports used: ngTable */
/*!******************************************!*\
  !*** ./src/browser/ngTable.directive.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTable; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

    
/**
 * @ngdoc directive
 * @name ngTable
 * @module ngTable
 * @restrict A
 *
 * @description
 * Directive that instantiates {@link ngTableController ngTableController}.
 */
ngTable.$inject = ['$q', '$parse'];

function ngTable($q, $parse) {

    return {
        restrict: 'A',
        priority: 1001,
        scope: true,
        controller: 'ngTableController',
        compile: function(element) {
            var columns = [],
                i = 0,
                dataRow,
                groupRow,
                rows = [];

            __WEBPACK_IMPORTED_MODULE_0_angular___default.a.forEach(element.find('tr'), function(tr) {
                rows.push(__WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(tr))
            });
            dataRow = rows.filter(function(tr){
                return !tr.hasClass('ng-table-group');
            })[0];
            groupRow = rows.filter(function(tr){
                return tr.hasClass('ng-table-group');
            })[0];

            if (!dataRow) {
                return;
            }
            __WEBPACK_IMPORTED_MODULE_0_angular___default.a.forEach(dataRow.find('td'), function(item) {
                var el = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(item);
                if (el.attr('ignore-cell') && 'true' === el.attr('ignore-cell')) {
                    return;
                }

                var getAttrValue = function(attr){
                    return el.attr('x-data-' + attr) || el.attr('data-' + attr) || el.attr(attr);
                };
                var setAttrValue = function(attr, value){
                    if (el.attr('x-data-' + attr)){
                        el.attr('x-data-' + attr, value)
                    } else if (el.attr('data' + attr)){
                        el.attr('data' + attr, value)
                    } else {
                        el.attr(attr, value)
                    }
                };

                var parsedAttribute = function(attr) {
                    var expr = getAttrValue(attr);
                    if (!expr){
                        return undefined;
                    }

                    var localValue;
                    var getter = function (context) {
                        if (localValue !== undefined){
                            return localValue;
                        }
                        return $parse(expr)(context);
                    };
                    getter.assign = function($scope, value){
                        var parsedExpr = $parse(expr);
                        if (parsedExpr.assign) {
                            // we should be writing back to the parent scope as this is where the expression
                            // came from
                            parsedExpr.assign($scope.$parent, value);
                        } else {
                            localValue = value;
                        }
                    };
                    return getter;
                };
                var titleExpr = getAttrValue('title-alt') || getAttrValue('title');
                if (titleExpr){
                    el.attr('data-title-text', '{{' + titleExpr + '}}'); // this used in responsive table
                }
                // NOTE TO MAINTAINERS: if you add extra fields to a $column be sure to extend ngTableColumn with
                // a corresponding "safe" default
                columns.push({
                    id: i++,
                    title: parsedAttribute('title'),
                    titleAlt: parsedAttribute('title-alt'),
                    headerTitle: parsedAttribute('header-title'),
                    sortable: parsedAttribute('sortable'),
                    'class': parsedAttribute('header-class'),
                    filter: parsedAttribute('filter'),
                    groupable: parsedAttribute('groupable'),
                    headerTemplateURL: parsedAttribute('header'),
                    filterData: parsedAttribute('filter-data'),
                    show: el.attr("ng-if") ? parsedAttribute('ng-if') : undefined
                });

                if (groupRow || el.attr("ng-if")){
                    // change ng-if to bind to our column definition which we know will be writable
                    // because this will potentially increase the $watch count, only do so if we already have an
                    // ng-if or when we definitely need to change visibility of the columns.
                    // currently only ngTableGroupRow directive needs to change visibility
                    setAttrValue('ng-if', '$columns[' + (columns.length - 1) + '].show(this)');
                }
            });
            return function(scope, element, attrs, controller) {
                scope.$columns = columns = controller.buildColumns(columns);

                controller.setupBindingsToInternalScope(attrs.ngTable);
                controller.loadFilterData(columns);
                controller.compileDirectiveTemplates();
            };
        }
    }
}



/***/ },
/* 14 */
/* exports provided: ngTableColumn */
/* exports used: ngTableColumn */
/*!**************************************!*\
  !*** ./src/browser/ngTableColumn.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableColumn; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */



/**
 * @ngdoc service
 * @name ngTableColumn
 * @module ngTable
 * @description
 * Service to construct a $column definition used by {@link ngTable ngTable} directive
 */
ngTableColumn.$inject = [];

function ngTableColumn() {

    return {
        buildColumn: buildColumn
    };

    //////////////

    /**
     * @ngdoc method
     * @name ngTableColumn#buildColumn
     * @description Creates a $column for use within a header template
     *
     * @param {Object} column an existing $column or simple column data object
     * @param {Scope} defaultScope the $scope to supply to the $column getter methods when not supplied by caller
     * @param {Array} columns a reference to the columns array to make available on the context supplied to the
     * $column getter methods
     * @returns {Object} a $column object
     */
    function buildColumn(column, defaultScope, columns){
        // note: we're not modifying the original column object. This helps to avoid unintended side affects
        var extendedCol = Object.create(column);
        var defaults = createDefaults();
        for (var prop in defaults) {
            if (extendedCol[prop] === undefined) {
                extendedCol[prop] = defaults[prop];
            }
            if(!__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(extendedCol[prop])){
                // wrap raw field values with "getter" functions
                // - this is to ensure consistency with how ngTable.compile builds columns
                // - note that the original column object is being "proxied"; this is important
                //   as it ensure that any changes to the original object will be returned by the "getter"
                (function(prop1){
                    var getterSetter = function getterSetter(/*[value] || [$scope, locals]*/) {
                        if (arguments.length === 1 && !isScopeLike(arguments[0])) {
                            getterSetter.assign(null, arguments[0]);
                        } else {
                            return column[prop1];
                        }
                    };
                    getterSetter.assign = function($scope, value){
                        column[prop1] = value;
                    };
                    extendedCol[prop1] = getterSetter;
                })(prop);
            }
            (function(prop1){
                // satisfy the arguments expected by the function returned by parsedAttribute in the ngTable directive
                var getterFn = extendedCol[prop1];
                extendedCol[prop1] = function () {
                    if (arguments.length === 1 && !isScopeLike(arguments[0])){
                        getterFn.assign(null, arguments[0]);
                    } else {
                        var scope = arguments[0] || defaultScope;
                        var context = Object.create(scope);
                        __WEBPACK_IMPORTED_MODULE_0_angular___default.a.extend(context, {
                            $column: extendedCol,
                            $columns: columns
                        });
                        return getterFn.call(column, context);
                    }
                };
                if (getterFn.assign){
                    extendedCol[prop1].assign = getterFn.assign;
                }
            })(prop);
        }
        return extendedCol;
    }

    function createDefaults(){
        return {
            'class': createGetterSetter(''),
            filter: createGetterSetter(false),
            groupable: createGetterSetter(false),
            filterData: __WEBPACK_IMPORTED_MODULE_0_angular___default.a.noop,
            headerTemplateURL: createGetterSetter(false),
            headerTitle: createGetterSetter(''),
            sortable: createGetterSetter(false),
            show: createGetterSetter(true),
            title: createGetterSetter(''),
            titleAlt: createGetterSetter('')
        };
    }

    function createGetterSetter(initialValue){
        var value = initialValue;
        var getterSetter = function getterSetter(/*[value] || [$scope, locals]*/){
            if (arguments.length === 1 && !isScopeLike(arguments[0])) {
                getterSetter.assign(null, arguments[0]);
            } else {
                return value;
            }
        };
        getterSetter.assign = function($scope, newValue){
            value = newValue;
        };
        return getterSetter;
    }

    function isScopeLike(object){
        return object != null && __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(object.$new);
    }
}



/***/ },
/* 15 */
/* exports provided: ngTableColumnsBinding */
/* exports used: ngTableColumnsBinding */
/*!********************************************************!*\
  !*** ./src/browser/ngTableColumnsBinding.directive.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableColumnsBinding; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

ngTableColumnsBinding.$inject = ["$parse"];

/**
 * @ngdoc directive
 * @name ngTableColumnsBinding
 * @description One-way data binds the $columns array generated by ngTable/ngTableDynamic to the specified
 * expression.
 *
 * This allows the $columns array to be accessed outside of the html table markup
 */
function ngTableColumnsBinding($parse){
    var directive = {
        restrict: 'A',
        require: 'ngTable',
        link: linkFn
    };
    return directive;

    function linkFn($scope, $element, $attrs){
        var setter = $parse($attrs.ngTableColumnsBinding).assign;
        if (setter){
            $scope.$watch('$columns', function(newColumns){
                var shallowClone = (newColumns || []).slice(0);
                setter($scope, shallowClone);
            });
        }
    }
}



/***/ },
/* 16 */
/* exports provided: ngTableController */
/* exports used: ngTableController */
/*!******************************************!*\
  !*** ./src/browser/ngTableController.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableController; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */



/**
 * @ngdoc object
 * @name ngTableController
 *
 * @description
 * Each {@link ngTable ngTable} directive creates an instance of `ngTableController`
 */
ngTableController.$inject = [
    '$scope', 'NgTableParams', '$timeout', '$parse', '$compile', '$attrs', '$element', 'ngTableColumn', 'ngTableEventsChannel'
];

function ngTableController($scope, NgTableParams, $timeout, $parse, $compile, $attrs, $element, ngTableColumn, ngTableEventsChannel) {
    var isFirstTimeLoad = true;
    $scope.$filterRow = {};
    $scope.$loading = false;

    // until such times as the directive uses an isolated scope, we need to ensure that the check for
    // the params field only consults the "own properties" of the $scope. This is to avoid seeing the params
    // field on a $scope higher up in the prototype chain
    if (!$scope.hasOwnProperty("params")) {
        $scope.params = new NgTableParams(true);
    }
    $scope.params.settings().$scope = $scope;

    var delayFilter = (function() {
        var timer = 0;
        return function(callback, ms) {
            $timeout.cancel(timer);
            timer = $timeout(callback, ms);
        };
    })();

    function onDataReloadStatusChange (newStatus/*, oldStatus*/) {
        if (!newStatus || $scope.params.hasErrorState()) {
            return;
        }

        $scope.params.settings().$scope = $scope;

        var currentParams = $scope.params;
        var filterOptions = currentParams.settings().filterOptions;

        if (currentParams.hasFilterChanges()) {
            var applyFilter = function () {
                currentParams.page(1);
                currentParams.reload();
            };
            if (filterOptions.filterDelay) {
                delayFilter(applyFilter, filterOptions.filterDelay);
            } else {
                applyFilter();
            }
        } else {
            currentParams.reload();
        }
    }

    // watch for when a new NgTableParams is bound to the scope
    // CRITICAL: the watch must be for reference and NOT value equality; this is because NgTableParams maintains
    // the current data page as a field. Checking this for value equality would be terrible for performance
    // and potentially cause an error if the items in that array has circular references
    $scope.$watch('params', function(newParams, oldParams){
        if (newParams === oldParams || !newParams) {
            return;
        }

        newParams.reload();
    }, false);

    $scope.$watch('params.isDataReloadRequired()', onDataReloadStatusChange);

    this.compileDirectiveTemplates = function () {
        if (!$element.hasClass('ng-table')) {
            $scope.templates = {
                header: ($attrs.templateHeader ? $attrs.templateHeader : 'ng-table/header.html'),
                pagination: ($attrs.templatePagination ? $attrs.templatePagination : 'ng-table/pager.html')
            };
            $element.addClass('ng-table');
            var headerTemplate = null;

            // $element.find('> thead').length === 0 doesn't work on jqlite
            var theadFound = false;
            __WEBPACK_IMPORTED_MODULE_0_angular___default.a.forEach($element.children(), function(e) {
                if (e.tagName === 'THEAD') {
                    theadFound = true;
                }
            });
            if (!theadFound) {
                headerTemplate = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(document.createElement('thead')).attr('ng-include', 'templates.header');
                $element.prepend(headerTemplate);
            }
            var paginationTemplate = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(document.createElement('div')).attr({
                'ng-table-pagination': 'params',
                'template-url': 'templates.pagination'
            });
            $element.after(paginationTemplate);
            if (headerTemplate) {
                $compile(headerTemplate)($scope);
            }
            $compile(paginationTemplate)($scope);
        }
    };

    this.loadFilterData = function ($columns) {
        __WEBPACK_IMPORTED_MODULE_0_angular___default.a.forEach($columns, function ($column) {
            var result;
            result = $column.filterData($scope);
            if (!result) {
                delete $column.filterData;
                return;
            }

            // if we're working with a deferred object or a promise, let's wait for the promise
            /* WARNING: support for returning a $defer is depreciated */
            if ((__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isObject(result) && (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isObject(result.promise) || __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(result.then)))) {
                var pData = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(result.then) ? result : result.promise;
                delete $column.filterData;
                return pData.then(function(data) {
                    // our deferred can eventually return arrays, functions and objects
                    if (!__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isArray(data) && !__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(data) && !__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isObject(data)) {
                        // if none of the above was found - we just want an empty array
                        data = [];
                    }
                    $column.data = data;
                });
            }
            // otherwise, we just return what the user gave us. It could be a function, array, object, whatever
            else {
                return $column.data = result;
            }
        });
    };

    this.buildColumns = function (columns) {
        var result = [];
        (columns || []).forEach(function(col){
            result.push(ngTableColumn.buildColumn(col, $scope, result));
        });
        return result
    };

    this.parseNgTableDynamicExpr = function (attr) {
        if (!attr || attr.indexOf(" with ") > -1) {
            var parts = attr.split(/\s+with\s+/);
            return {
                tableParams: parts[0],
                columns: parts[1]
            };
        } else {
            throw new Error('Parse error (expected example: ng-table-dynamic=\'tableParams with cols\')');
        }
    };

    this.setupBindingsToInternalScope = function(tableParamsExpr){

        // note: this we're setting up watches to simulate angular's isolated scope bindings

        // note: is REALLY important to watch for a change to the ngTableParams *reference* rather than
        // $watch for value equivalence. This is because ngTableParams references the current page of data as
        // a field and it's important not to watch this
        var tableParamsGetter = $parse(tableParamsExpr);
        $scope.$watch(tableParamsGetter, (function (params) {
            if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isUndefined(params)) {
                return;
            }
            $scope.paramsModel = tableParamsGetter;
            $scope.params = params;
        }), false);

        setupFilterRowBindingsToInternalScope();
        setupGroupRowBindingsToInternalScope();
    };

    function setupFilterRowBindingsToInternalScope(){
        if ($attrs.showFilter) {
            $scope.$parent.$watch($attrs.showFilter, function(value) {
                $scope.show_filter = value;
            });
        } else {
            $scope.$watch(hasVisibleFilterColumn, function(value){
                $scope.show_filter = value;
            })
        }

        if ($attrs.disableFilter) {
            $scope.$parent.$watch($attrs.disableFilter, function(value) {
                $scope.$filterRow.disabled = value;
            });
        }
    }

    function setupGroupRowBindingsToInternalScope(){
        $scope.$groupRow = {};
        if ($attrs.showGroup) {
            var showGroupGetter = $parse($attrs.showGroup);
            $scope.$parent.$watch(showGroupGetter, function(value) {
                $scope.$groupRow.show = value;
            });
            if (showGroupGetter.assign){
                // setup two-way databinding thus allowing ngTableGrowRow to assign to the showGroup expression
                $scope.$watch('$groupRow.show', function(value) {
                    showGroupGetter.assign($scope.$parent, value);
                });
            }
        } else{
            $scope.$watch('params.hasGroup()', function(newValue) {
                $scope.$groupRow.show = newValue;
            });
        }
    }

    function getVisibleColumns(){
        return ($scope.$columns || []).filter(function(c){
            return c.show($scope);
        });
    }

    function hasVisibleFilterColumn(){
        if (!$scope.$columns) return false;

        return some($scope.$columns, function($column){
            return $column.show($scope) && $column.filter($scope);
        });
    }

    function some(array, predicate){
        var found = false;
        for (var i = 0; i < array.length; i++) {
            var obj = array[i];
            if (predicate(obj)){
                found = true;
                break;
            }
        }
        return found;
    }

    function commonInit(){
        ngTableEventsChannel.onAfterReloadData(bindDataToScope, $scope, isMyPublisher);
        ngTableEventsChannel.onPagesChanged(bindPagesToScope, $scope, isMyPublisher);

        function bindDataToScope(params, newDatapage){
            var visibleColumns = getVisibleColumns();
            if (params.hasGroup()) {
                $scope.$groups = newDatapage || [];
                $scope.$groups.visibleColumnCount = visibleColumns.length;
            } else {
                $scope.$data = newDatapage || [];
                $scope.$data.visibleColumnCount = visibleColumns.length;
            }
        }

        function bindPagesToScope(params, newPages){
            $scope.pages = newPages
        }

        function isMyPublisher(publisher){
            return $scope.params === publisher;
        }
    }

    commonInit();
}



/***/ },
/* 17 */
/* exports provided: ngTableDynamic */
/* exports used: ngTableDynamic */
/*!*************************************************!*\
  !*** ./src/browser/ngTableDynamic.directive.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableDynamic; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */



/**
 * @ngdoc directive
 * @name ngTableDynamic
 * @module ngTable
 * @restrict A
 *
 * @description
 * A dynamic version of the {@link ngTable ngTable} directive that accepts a dynamic list of columns
 * definitions to render
 */
ngTableDynamic.$inject = [];

function ngTableDynamic(){

    return {
        restrict: 'A',
        priority: 1001,
        scope: true,
        controller: 'ngTableController',
        compile: function(tElement) {
            var row;

            // IE 8 fix :not(.ng-table-group) selector
            __WEBPACK_IMPORTED_MODULE_0_angular___default.a.forEach(tElement.find('tr'), function(tr) {
                tr = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(tr);
                if (!tr.hasClass('ng-table-group') && !row) {
                    row = tr;
                }
            });
            if (!row) {
                return;
            }

            __WEBPACK_IMPORTED_MODULE_0_angular___default.a.forEach(row.find('td'), function(item) {
                var el = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(item);
                var getAttrValue = function(attr){
                    return el.attr('x-data-' + attr) || el.attr('data-' + attr) || el.attr(attr);
                };

                // this used in responsive table
                var titleExpr = getAttrValue('title');
                if (!titleExpr){
                    el.attr('data-title-text', '{{$columns[$index].titleAlt(this) || $columns[$index].title(this)}}');
                }
                var showExpr = el.attr('ng-if');
                if (!showExpr){
                    el.attr('ng-if', '$columns[$index].show(this)');
                }
            });
            return function (scope, element, attrs, controller) {
                var expr = controller.parseNgTableDynamicExpr(attrs.ngTableDynamic);

                controller.setupBindingsToInternalScope(expr.tableParams);
                controller.compileDirectiveTemplates();

                scope.$watchCollection(expr.columns, function (newCols/*, oldCols*/) {
                    scope.$columns = controller.buildColumns(newCols);
                    controller.loadFilterData(scope.$columns);
                });
            };
        }
    };
}



/***/ },
/* 18 */
/* exports provided: ngTableFilterConfigProvider */
/* exports used: ngTableFilterConfigProvider */
/*!********************************************!*\
  !*** ./src/browser/ngTableFilterConfig.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableFilterConfigProvider; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */



ngTableFilterConfigProvider.$inject = [];

function ngTableFilterConfigProvider(){
    var config;
    var defaultConfig = {
        defaultBaseUrl: 'ng-table/filters/',
        defaultExt: '.html',
        aliasUrls: {}
    };

    this.$get = ngTableFilterConfig;
    this.resetConfigs = resetConfigs;
    this.setConfig = setConfig;

    init();

    /////////

    function init(){
        resetConfigs();
    }

    function resetConfigs(){
        config = defaultConfig;
    }

    function setConfig(customConfig){
        var mergeConfig = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.extend({}, config, customConfig);
        mergeConfig.aliasUrls = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.extend({}, config.aliasUrls, customConfig.aliasUrls);
        config = mergeConfig;
    }

    /////////

    ngTableFilterConfig.$inject = [];

    function ngTableFilterConfig(){

        var publicConfig;

        var service = {
            config: publicConfig,
            getTemplateUrl: getTemplateUrl,
            getUrlForAlias: getUrlForAlias
        };
        Object.defineProperty(service, "config", {
            get: function(){
                return publicConfig = publicConfig || __WEBPACK_IMPORTED_MODULE_0_angular___default.a.copy(config);
            },
            enumerable: true
        });

        return service;

        /////////

        function getTemplateUrl(filterDef, filterKey){
            if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isObject(filterDef)){
                filterDef = filterDef.id;
            }
            if (filterDef.indexOf('/') !== -1){
                return filterDef;
            }

            return service.getUrlForAlias(filterDef, filterKey);
        }

        function getUrlForAlias(aliasName/*, filterKey*/){
            return config.aliasUrls[aliasName] || config.defaultBaseUrl + aliasName + config.defaultExt;
        }
    }
}



/***/ },
/* 19 */
/* exports provided: ngTableFilterRow */
/* exports used: ngTableFilterRow */
/*!***************************************************!*\
  !*** ./src/browser/ngTableFilterRow.directive.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filterRow_html__ = __webpack_require__(/*! ./filterRow.html */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filterRow_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__filterRow_html__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableFilterRow; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */



ngTableFilterRow.$inject = [];

function ngTableFilterRow(){
    var directive = {
        restrict: 'E',
        replace: true,
        templateUrl: __WEBPACK_IMPORTED_MODULE_0__filterRow_html___default.a,
        scope: true,
        controller: 'ngTableFilterRowController'
    };
    return directive;
}



/***/ },
/* 20 */
/* exports provided: ngTableFilterRowController */
/* exports used: ngTableFilterRowController */
/*!***************************************************!*\
  !*** ./src/browser/ngTableFilterRowController.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableFilterRowController; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */



ngTableFilterRowController.$inject = ['$scope', 'ngTableFilterConfig'];

function ngTableFilterRowController($scope, ngTableFilterConfig){

    $scope.config = ngTableFilterConfig;

    $scope.getFilterCellCss = function (filter, layout){
        if (layout !== 'horizontal') {
            return 's12';
        }

        var size = Object.keys(filter).length;
        var width = parseInt(12 / size, 10);
        return 's' + width;
    };

    $scope.getFilterPlaceholderValue = function(filterValue/*, filterName*/){
        if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isObject(filterValue)) {
            return filterValue.placeholder;
        } else {
            return '';
        }
    };
}



/***/ },
/* 21 */
/* exports provided: ngTableGroupRow */
/* exports used: ngTableGroupRow */
/*!**************************************************!*\
  !*** ./src/browser/ngTableGroupRow.directive.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__groupRow_html__ = __webpack_require__(/*! ./groupRow.html */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__groupRow_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__groupRow_html__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableGroupRow; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */



ngTableGroupRow.$inject = [];

function ngTableGroupRow(){
    var directive = {
        restrict: 'E',
        replace: true,
        templateUrl: __WEBPACK_IMPORTED_MODULE_0__groupRow_html___default.a,
        scope: true,
        controller: 'ngTableGroupRowController',
        controllerAs: 'dctrl'
    };
    return directive;
}



/***/ },
/* 22 */
/* exports provided: ngTableGroupRowController */
/* exports used: ngTableGroupRowController */
/*!**************************************************!*\
  !*** ./src/browser/ngTableGroupRowController.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableGroupRowController; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */




ngTableGroupRowController.$inject = ['$scope'];

function ngTableGroupRowController($scope){

    var groupFns = [];

    init();

    function init(){
        $scope.getGroupables = getGroupables;
        $scope.getGroupTitle = getGroupTitle;
        $scope.getVisibleColumns = getVisibleColumns;
        $scope.groupBy = groupBy;
        $scope.isSelectedGroup = isSelectedGroup;
        $scope.toggleDetail = toggleDetail;

        $scope.$watch('params.group()', setGroup, true);
    }

    function changeSortDirection(){
      console.log("CSD");
        var newDirection;
        if ($scope.params.hasGroup($scope.$selGroup, 'asc')) {
            newDirection = 'desc';
        } else if ($scope.params.hasGroup($scope.$selGroup, 'desc')){
            newDirection = 'asc';
        } else {
            newDirection = 'asc';
        }
        $scope.params.group($scope.$selGroup, newDirection);
    }

    function findGroupColumn(groupKey) {
        return $scope.$columns.filter(function ($column) {
            return $column.groupable($scope) === groupKey;
        })[0];
    }

    function getGroupTitle(group){
        return __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(group) ? group.title : group.title($scope);
    }

    function getGroupables(){
        var groupableCols = $scope.$columns.filter(function ($column) {
            return $column.groupable($scope);
        });
        return groupFns.concat(groupableCols);
    }

    function getVisibleColumns(){
        return $scope.$columns.filter(function($column){
            return $column.show($scope);
        })
    }

    function groupBy(group){
        console.log("CD");
        if (isSelectedGroup(group)){
            changeSortDirection();
        } else {          
            if (group.groupable){
                $scope.params.group(group.groupable($scope));
            } else{
                $scope.params.group(group);
            }
        }        
    }

    function isSelectedGroup(group){
        if (group.groupable){
            return group.groupable($scope) === $scope.$selGroup;
        } else {
            return group === $scope.$selGroup;
        }
    }

    function setGroup(group){
        var existingGroupCol = findGroupColumn($scope.$selGroup);
        if (existingGroupCol && existingGroupCol.show.assign){
            existingGroupCol.show.assign($scope, true);
        }
        if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(group)) {
            groupFns = [group];
            $scope.$selGroup = group;
            $scope.$selGroupTitle = group.title;
        } else {
            // note: currently only one group is implemented
            var groupKey = Object.keys(group || {})[0];
            var groupedColumn = findGroupColumn(groupKey);
            if (groupedColumn) {
                $scope.$selGroupTitle = groupedColumn.title($scope);
                $scope.$selGroup = groupKey;
                if (groupedColumn.show.assign) {
                    groupedColumn.show.assign($scope, false);
                }
            }
        }
    }

    function toggleDetail(){
        $scope.params.settings().groupOptions.isExpanded = !$scope.params.settings().groupOptions.isExpanded;
        return $scope.params.reload();
    }
}



/***/ },
/* 23 */
/* exports provided: ngTablePagination */
/* exports used: ngTablePagination */
/*!****************************************************!*\
  !*** ./src/browser/ngTablePagination.directive.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTablePagination; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */



/**
 * @ngdoc directive
 * @name ngTablePagination
 * @module ngTable
 * @restrict A
 */
ngTablePagination.$inject = ['$compile', 'ngTableEventsChannel'];

function ngTablePagination($compile, ngTableEventsChannel) {

    return {
        restrict: 'A',
        scope: {
            'params': '=ngTablePagination',
            'templateUrl': '='
        },
        replace: false,
        link: function(scope, element/*, attrs*/) {

            ngTableEventsChannel.onAfterReloadData(function(pubParams) {
                scope.pages = pubParams.generatePagesArray();
            }, scope, function(pubParams){
                return pubParams === scope.params;
            });

            scope.$watch('templateUrl', function(templateUrl) {
                if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isUndefined(templateUrl)) {
                    return;
                }
                var template = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(document.createElement('div'));
                template.attr({
                    'ng-include': 'templateUrl'
                });
                element.append(template);
                $compile(template)(scope);
            });
        }
    };
}



/***/ },
/* 24 */
/* exports provided: ngTableSelectFilterDs */
/* exports used: ngTableSelectFilterDs */
/*!********************************************************!*\
  !*** ./src/browser/ngTableSelectFilterDs.directive.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableSelectFilterDs; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */



/**
 * @ngdoc directive
 * @name ngTableSelectFilterDs
 * @module ngTable
 * @restrict A
 *
 * @description
 * Takes the array returned by $column.filterData and makes it available as `$selectData` on the `$scope`.
 *
 * The resulting `$selectData` array will contain an extra item that is suitable to represent the user
 * "deselecting" an item from a `<select>` tag
 *
 * This directive is is focused on providing a datasource to an `ngOptions` directive
 */
ngTableSelectFilterDs.$inject = [];

function ngTableSelectFilterDs(){
    // note: not using isolated or child scope "by design"
    // this is to allow this directive to be combined with other directives that do

    var directive = {
        restrict: 'A',
        controller: ngTableSelectFilterDsController
    };
    return directive;
}

ngTableSelectFilterDsController.$inject = ['$scope', '$parse', '$attrs', '$q'];
function ngTableSelectFilterDsController($scope, $parse, $attrs, $q){

    var $column = {};
    init();

    function init(){
        $column = $parse($attrs.ngTableSelectFilterDs)($scope);
        $scope.$watch(function(){
            return $column.data;
        }, bindDataSource);
    }

    function bindDataSource(){
        getSelectListData($column).then(function(data){
            if (data && !hasEmptyOption(data)){
                data.unshift({ id: '', title: ''});
            }
            data = data || [];
            $scope.$selectData = data;
        });
    }

    function hasEmptyOption(data) {
        var isMatch;
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            if (item && item.id === '') {
                isMatch = true;
                break;
            }
        }
        return isMatch;
    }

    function getSelectListData($column) {
        var data = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction($column.data) ? $column.data() : $column.data;
        return $q.when(data);
    }
}



/***/ },
/* 25 */
/* exports provided: ngTableSorterRow */
/* exports used: ngTableSorterRow */
/*!***************************************************!*\
  !*** ./src/browser/ngTableSorterRow.directive.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sorterRow_html__ = __webpack_require__(/*! ./sorterRow.html */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sorterRow_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__sorterRow_html__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableSorterRow; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */



ngTableSorterRow.$inject = [];

function ngTableSorterRow(){
    var directive = {
        restrict: 'E',
        replace: true,
        templateUrl: __WEBPACK_IMPORTED_MODULE_0__sorterRow_html___default.a,
        scope: true,
        controller: 'ngTableSorterRowController'
    };
    return directive;
}



/***/ },
/* 26 */
/* exports provided: ngTableSorterRowController */
/* exports used: ngTableSorterRowController */
/*!***************************************************!*\
  !*** ./src/browser/ngTableSorterRowController.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableSorterRowController; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

ngTableSorterRowController.$inject = ['$scope'];

function ngTableSorterRowController($scope){

    $scope.sortBy = sortBy;

    ///////////

    function sortBy($column, event) {
        var parsedSortable = $column.sortable && $column.sortable();
        if (!parsedSortable) {
            return;
        }
        var defaultSort = $scope.params.settings().defaultSort;
        var inverseSort = (defaultSort === 'asc' ? 'desc' : 'asc');
        var sorting = $scope.params.sorting() && $scope.params.sorting()[parsedSortable] && ($scope.params.sorting()[parsedSortable] === defaultSort);
        var sortingParams = (event.ctrlKey || event.metaKey) ? $scope.params.sorting() : {};
        sortingParams[parsedSortable] = (sorting ? inverseSort : defaultSort);
        $scope.params.parameters({
            sorting: sortingParams
        });
    }
}



/***/ },
/* 27 */
/* exports provided: ngTableDefaultGetDataProvider */
/* exports used: ngTableDefaultGetDataProvider */
/*!*******************************************!*\
  !*** ./src/core/ngTableDefaultGetData.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableDefaultGetDataProvider; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */



ngTableDefaultGetDataProvider.$inject = [];

/**
 * @ngdoc provider
 * @name ngTableDefaultGetDataProvider
 * @description Allows for the configuration of the ngTableDefaultGetData service.
 *
 * Set filterFilterName to the name of a angular filter that knows how to apply the values returned by
 * `NgTableParams.filter()` to restrict an array of data.
 *
 * Set sortingFilterName to the name of a angular filter that knows how to apply the values returned by
 * `NgTableParams.orderBy()` to sort an array of data.
 *
 * Out of the box the `ngTableDefaultGetData` service will be configured to use the angular `filter` and `orderBy`
 * filters respectively
 */
function ngTableDefaultGetDataProvider(){
    var provider = this;
    provider.$get = ngTableDefaultGetData;
    provider.filterFilterName = 'filter';
    provider.sortingFilterName = 'orderBy';

    ///////////

    ngTableDefaultGetData.$inject = ['$filter'];

    /**
     * @ngdoc service
     * @name ngTableDefaultGetData
     * @description A default implementation of the getData function that will apply the `filter`, `orderBy` and
     * paging values from the `NgTableParams` instance supplied to the data array supplied.
     *
     * The outcome will be to return the resulting array and to assign the total item count after filtering
     * to the `total` of the `NgTableParams` instance supplied
     */
    function ngTableDefaultGetData($filter) {

        var defaultDataOptions = {applyFilter: true, applySort: true, applyPaging: true};

        getData.applyPaging = applyPaging;
        getData.getFilterFn = getFilterFn;
        getData.getOrderByFn = getOrderByFn;

        return getData;

        function getFilterFn(params) {
            var filterOptions = params.settings().filterOptions;
            if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(filterOptions.filterFn)){
                return filterOptions.filterFn;
            } else {
                return $filter(filterOptions.filterFilterName || provider.filterFilterName);
            }
        }

        function getOrderByFn (/*params*/){            
            return $filter(provider.sortingFilterName);
        }

        function applyFilter(data, params) {
            if (!params.hasFilter()) {
                return data;
            }

            var filter = params.filter(true);
            var filterKeys = Object.keys(filter);
            var parsedFilter = filterKeys.reduce(function(result, key){
                result = setPath(result, filter[key], key);
                return result;
            }, {});
            var filterFn = getFilterFn(params);
            return filterFn.call(params, data, parsedFilter, params.settings().filterOptions.filterComparator);
        }

        function applyPaging(data, params) {          
            var pagedData = data.slice((params.page() - 1) * params.count(), params.page() * params.count());
            if( params.settings().dataOptions.applyPagging ){
              params.total(data.length); // set total for recalc pagination              
            }
            return pagedData;
        }

        function applySort(data, params) {
            var orderBy = params.orderBy();
            var orderByFn = getOrderByFn(params);  
            console.log(orderBy,orderByFn);
            return orderBy.length ? orderByFn(data, orderBy) : data;
        }

        function getData(data, params) {
            if (data == null){
                return [];
            }

            var options = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.extend({}, defaultDataOptions, params.settings().dataOptions);

            var fData = options.applyFilter ? applyFilter(data, params) : data;
            var orderedData = options.applySort ? applySort(fData, params) : fData;
            return options.applyPaging ? applyPaging(orderedData, params) : orderedData;
        }

        // Sets the value at any depth in a nested object based on the path
        // note: adapted from: underscore-contrib#setPath
        function setPath(obj, value, path) {
            var keys     = path.split('.');
            var ret      = obj;
            var lastKey  = keys[keys.length -1];
            var target   = ret;

            var parentPathKeys = keys.slice(0, keys.length -1);
            parentPathKeys.forEach(function(key) {
                if (!target.hasOwnProperty(key)) {
                    target[key] = {};
                }
                target = target[key];
            });

            target[lastKey] = value;
            return ret;
        }
    }
}



/***/ },
/* 28 */
/* exports provided: ngTableDefaults */
/* exports used: ngTableDefaults */
/*!*************************************!*\
  !*** ./src/core/ngTableDefaults.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableDefaults; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

/**
 * @ngdoc object
 * @name ngTableDefaultParams
 * @module ngTable
 * @description Default Parameters for ngTable
 */
var ngTableDefaults = {
    params: {},
    settings: {}
};



/***/ },
/* 29 */
/* exports provided: ngTableEventsChannel */
/* exports used: ngTableEventsChannel */
/*!******************************************!*\
  !*** ./src/core/ngTableEventsChannel.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableEventsChannel; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */



ngTableEventsChannel.$inject = ['$rootScope'];

/**
 * @ngdoc service
 * @name ngTableEventsChannel
 * @description strongly typed pub/sub for `NgTableParams`
 *
 * Supported events:
 *
 * * afterCreated - raised when a new instance of `NgTableParams` has finished being constructed
 * * afterReloadData - raised when the `reload` event has finished loading new data
 * * datasetChanged - raised when `settings` receives a new data array
 * * pagesChanged - raised when a new pages array has been generated
 */
function ngTableEventsChannel($rootScope){

    var events = {};
    events = addChangeEvent('afterCreated', events);
    events = addChangeEvent('afterReloadData', events);
    events = addChangeEvent('datasetChanged', events);
    events = addChangeEvent('pagesChanged', events);
    return events;

    //////////

    function addChangeEvent(eventName, target){
        var fnName = eventName.charAt(0).toUpperCase() + eventName.substring(1);
        var event = {};
        event['on' + fnName] = createEventSubscriptionFn(eventName);
        event['publish' + fnName] = createPublishEventFn(eventName);
        return __WEBPACK_IMPORTED_MODULE_0_angular___default.a.extend(target, event);
    }

    function createEventSubscriptionFn(eventName){

        return function subscription(handler/*[, eventSelector or $scope][, eventSelector]*/){
            var eventSelector = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.identity;
            var scope = $rootScope;

            if (arguments.length === 2){
                if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(arguments[1].$new)) {
                    scope = arguments[1];
                } else {
                    eventSelector = arguments[1]
                }
            } else if (arguments.length > 2){
                scope = arguments[1];
                eventSelector = arguments[2];
            }

            // shorthand for subscriber to only receive events from a specific publisher instance
            if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isObject(eventSelector)) {
                var requiredPublisher = eventSelector;
                eventSelector = function(publisher){
                    return publisher === requiredPublisher;
                }
            }

            return scope.$on('ngTable:' + eventName, function(event, params/*, ...args*/){
                // don't send events published by the internal NgTableParams created by ngTableController
                if (params.isNullInstance) return;

                var eventArgs = rest(arguments, 2);
                var fnArgs = [params].concat(eventArgs);
                if (eventSelector.apply(this, fnArgs)){
                    handler.apply(this, fnArgs);
                }
            });
        }
    }

    function createPublishEventFn(eventName){
        return function publish(/*args*/){
            var fnArgs = ['ngTable:' + eventName].concat(Array.prototype.slice.call(arguments));
            $rootScope.$broadcast.apply($rootScope, fnArgs);
        }
    }

    function rest(array, n) {
        return Array.prototype.slice.call(array, n == null ? 1 : n);
    }
}



/***/ },
/* 30 */
/* exports provided: ngTableParamsFactory */
/* exports used: ngTableParamsFactory */
/*!***********************************!*\
  !*** ./src/core/ngTableParams.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ngTableParamsFactory; });
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */



/**
 * @ngdoc service
 * @name NgTableParams
 * @module ngTable
 * @description Parameters manager for ngTable
 */
ngTableParamsFactory.$inject = ['$q', '$log', '$filter', 'ngTableDefaults', 'ngTableDefaultGetData', 'ngTableEventsChannel'];

function ngTableParamsFactory($q, $log, $filter, ngTableDefaults, ngTableDefaultGetData, ngTableEventsChannel) {

    return NgTableParams;
    
    function NgTableParams(baseParameters, baseSettings) {

        function isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        // the ngTableController "needs" to create a dummy/null instance and it's important to know whether an instance
        // is one of these
        if (typeof baseParameters === "boolean"){
            this.isNullInstance = true;
        }

        var self = this,
            prevParamsMemento,
            errParamsMemento,
            isCommittedDataset = false,
            initialEvents = [],
            log = function() {
                if (settings.debugMode && $log.debug) {
                    $log.debug.apply($log, arguments);
                }
            },
            defaultFilterOptions = {
                filterComparator: undefined, // look for a substring match in case insensitive way
                filterDelay: 500,
                filterDelayThreshold: 10000, // size of dataset array that will trigger the filterDelay being applied
                filterFilterName: undefined, // when defined overrides ngTableDefaultGetDataProvider.filterFilterName
                filterFn: undefined, // when defined overrides the filter function that ngTableDefaultGetData uses
                filterLayout: 'stack' // alternative: 'horizontal'
            },
            defaultGroupOptions = {
                defaultSort: 'asc', // set to 'asc' or 'desc' to apply sorting to groups
                isExpanded: true,
                sortGroups: true
            },
            defaultSettingsFns = getDefaultSettingFns();

        this.data = [];

        /**
         * @ngdoc method
         * @name NgTableParams#parameters
         * @description Set new parameters or get current parameters
         *
         * @param {string} newParameters      New parameters
         * @param {string} parseParamsFromUrl Flag if parse parameters like in url
         * @returns {Object} Current parameters or `this`
         */
        this.parameters = function(newParameters, parseParamsFromUrl) {
            parseParamsFromUrl = parseParamsFromUrl || false;
            if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(newParameters)) {
                for (var key in newParameters) {
                    var value = newParameters[key];
                    if (parseParamsFromUrl && key.indexOf('[') >= 0) {
                        var keys = key.split(/\[(.*)\]/).reverse()
                        var lastKey = '';
                        for (var i = 0, len = keys.length; i < len; i++) {
                            var name = keys[i];
                            if (name !== '') {
                                var v = value;
                                value = {};
                                value[lastKey = name] = (isNumber(v) ? parseFloat(v) : v);
                            }
                        }
                        if (lastKey === 'sorting') {
                            params[lastKey] = {};
                        }
                        params[lastKey] = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.extend(params[lastKey] || {}, value[lastKey]);
                    } else {
                        if (key === 'group'){
                            params[key] = parseGroup(newParameters[key]);
                        } else {
                            params[key] = (isNumber(newParameters[key]) ? parseFloat(newParameters[key]) : newParameters[key]);
                        }
                    }
                }
                log('ngTable: set parameters', params);
                return this;
            }
            return params;
        };

        function parseGroup(group){
            var defaultSort = settings.groupOptions && settings.groupOptions.defaultSort;
            if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(group)) {
                if (group.sortDirection == null){
                    group.sortDirection = defaultSort;
                }
                return group;
            } else if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isString(group)) {
                var grp = {};
                grp[group] = defaultSort;
                return grp;
            } else if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isObject(group)) {
                for (var key in group) {
                    if (group[key] == null){
                        group[key] = defaultSort;
                    }
                }
                return group;
            } else {
                return group;
            }
        }

        /**
         * @ngdoc method
         * @name NgTableParams#settings
         * @description Set new settings for table
         *
         * @param {string} newSettings New settings or undefined
         * @returns {Object} Current settings or `this`
         */
        this.settings = function(newSettings) {
            if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(newSettings)) {

                // todo: don't modify newSettings object: this introduces unexpected side effects;
                // instead take a copy of newSettings

                if (newSettings.filterOptions){
                    newSettings.filterOptions = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.extend({}, settings.filterOptions, newSettings.filterOptions);
                }
                if (newSettings.groupOptions){
                    newSettings.groupOptions = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.extend({}, settings.groupOptions, newSettings.groupOptions);
                }

                if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isArray(newSettings.dataset)) {
                    //auto-set the total from passed in dataset
                    newSettings.total = newSettings.dataset.length;
                }

                var originalDataset = settings.dataset;
                settings = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.extend(settings, newSettings);

                if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isArray(newSettings.dataset)) {
                    optimizeFilterDelay();
                }

                // note: using != as want null and undefined to be treated the same
                var hasDatasetChanged = newSettings.hasOwnProperty('dataset') && (newSettings.dataset != originalDataset);
                if (hasDatasetChanged) {
                    if (isCommittedDataset){
                        this.page(1); // reset page as a new dataset has been supplied
                    }
                    isCommittedDataset = false;

                    var fireEvent = function () {
                        ngTableEventsChannel.publishDatasetChanged(self, newSettings.dataset, originalDataset);
                    };

                    if (initialEvents){
                        initialEvents.push(fireEvent);
                    } else {
                        fireEvent();
                    }
                }
                log('ngTable: set settings', settings);
                return this;
            }
            return settings;
        };

        /**
         * @ngdoc method
         * @name NgTableParams#page
         * @description If parameter page not set return current page else set current page
         *
         * @param {string} page Page number
         * @returns {Object|Number} Current page or `this`
         */
        this.page = function(page) {
            return __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(page) ? this.parameters({
                'page': page
            }) : params.page;
        };

        /**
         * @ngdoc method
         * @name NgTableParams#total
         * @description If parameter total not set return current quantity else set quantity
         *
         * @param {string} total Total quantity of items
         * @returns {Object|Number} Current page or `this`
         */
        this.total = function(total) {          
            return __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(total) ? this.settings({
                'total': total
            }) : settings.total;
        };

        /**
         * @ngdoc method
         * @name NgTableParams#count
         * @description If parameter count not set return current count per page else set count per page
         *
         * @param {string} count Count per number
         * @returns {Object|Number} Count per page or `this`
         */
        this.count = function(count) {
            // reset to first page because can be blank page
            return __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(count) ? this.parameters({
                'count': count,
                'page': 1
            }) : params.count;
        };

        /**
         * @ngdoc method
         * @name NgTableParams#filter
         * @description If 'filter' parameter not set return current filter else set current filter
         *
         * Note: when assigning a new filter, {@link NgTableParams#page page} will be set to 1
         *
         * @param {Object|Boolean} filter 'object': new filter to assign or
         * 'true': to return the current filter minus any insignificant values (null,  undefined and empty string); or
         * 'falsey': to return the current filter "as is"
         * @returns {Object} Current filter or `this`
         */
        this.filter = function(filter) {
            if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(filter) && __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isObject(filter)) {
                return this.parameters({
                    'filter': filter,
                    'page': 1
                });
            } else if (filter === true){
                var keys = Object.keys(params.filter);
                var significantFilter = {};
                for (var i=0; i < keys.length; i++){
                    var filterValue = params.filter[keys[i]];
                    if (filterValue != null && filterValue !== '') {
                        significantFilter[keys[i]] = filterValue;
                    }
                }
                return significantFilter;
            } else {
                return params.filter;
            }
        };

        /**
         * @ngdoc method
         * @name NgTableParams#group
         * @description If 'group' parameter is not set, return current grouping. Otherwise set current group.
         *
         * @param {string|Function|Object} group New group field
         * @param {string} sortDirection Optional direction that the list of groups should be sorted
         * @returns {Object} Current grouping or `this`
         */
        this.group = function(group, sortDirection) {
            if (!__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(group)){
                return params.group;
            }

            var newParameters = {
                page: 1
            };
            if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(group) && __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(sortDirection)){
                group.sortDirection = sortDirection;
                newParameters.group = group;
            } else if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(group) && __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(sortDirection)) {
                var groupArray = {};
                groupArray[group] = sortDirection;
                newParameters.group = groupArray;
            } else {
                newParameters.group = group;
            }
            this.parameters(newParameters);
            return this;
        };

        /**
         * @ngdoc method
         * @name NgTableParams#sorting
         * @description If 'sorting' parameter is not set, return current sorting. Otherwise set current sorting.
         *
         * @param {string} sorting New sorting
         * @returns {Object} Current sorting or `this`
         */
        this.sorting = function(sorting) {
            if (arguments.length == 2) {
                var sortArray = {};
                sortArray[sorting] = arguments[1];
                this.parameters({
                    'sorting': sortArray
                });
                return this;
            }
            return __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(sorting) ? this.parameters({
                'sorting': sorting
            }) : params.sorting;
        };

        /**
         * @ngdoc method
         * @name NgTableParams#isSortBy
         * @description Checks sort field
         *
         * @param {string} field     Field name
         * @param {string} direction Optional direction of sorting ('asc' or 'desc')
         * @returns {Array} Return true if field sorted by direction
         */
        this.isSortBy = function(field, direction) {
            if(direction !== undefined) {
                return __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(params.sorting[field]) && params.sorting[field] == direction;
            } else {
                return __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(params.sorting[field]);
            }
        };

        /**
         * @ngdoc method
         * @name NgTableParams#orderBy
         * @description Return object of sorting parameters for angular filter
         *
         * @returns {Array} Array like: [ '-name', '+age' ]
         */
        this.orderBy = function() {
            return convertSortToOrderBy(params.sorting);
        };

        function convertSortToOrderBy(sorting){
            var result = [];
            for (var column in sorting) {
                result.push((sorting[column] === "asc" ? "+" : "-") + column);
            }
            return result;
        }

        /**
         * @ngdoc method
         * @name NgTableParams#generatePagesArray
         * @description Generate array of pages
         *
         * When no arguments supplied, the current parameter state of this `NgTableParams` instance will be used
         *
         * @param {boolean} currentPage which page must be active
         * @param {boolean} totalItems  Total quantity of items
         * @param {boolean} pageSize    Quantity of items on page
         * @param {number} maxBlocks    Quantity of blocks for pagination
         * @returns {Array} Array of pages
         */
        this.generatePagesArray = function(currentPage, totalItems, pageSize, maxBlocks) {          
            if (!arguments.length){
                currentPage = this.page();
                totalItems = this.total();
                pageSize = this.count();
            }

            var maxPage, maxPivotPages, minPage, numPages, pages, hidePager;
            maxBlocks = maxBlocks && maxBlocks < 6 ? 6 : maxBlocks;

            pages = [];
            numPages = Math.ceil(totalItems / pageSize);
            hidePager = this.parameters.hidePager || true;
            
            if ((numPages > 1) && ( !hidePager )) {
                pages.push({
                    type: 'prev',
                    number: Math.max(1, currentPage - 1),
                    active: currentPage > 1
                });
                pages.push({
                    type: 'first',
                    number: 1,
                    active: currentPage > 1,
                    current: currentPage === 1
                });
                maxPivotPages = Math.round((settings.paginationMaxBlocks - settings.paginationMinBlocks) / 2);
                minPage = Math.max(2, currentPage - maxPivotPages);
                maxPage = Math.min(numPages - 1, currentPage + maxPivotPages * 2 - (currentPage - minPage));
                minPage = Math.max(2, minPage - (maxPivotPages * 2 - (maxPage - minPage)));
                var i = minPage;
                while (i <= maxPage) {
                    if ((i === minPage && i !== 2) || (i === maxPage && i !== numPages - 1)) {
                        pages.push({
                            type: 'more',
                            active: false
                        });
                    } else {
                        pages.push({
                            type: 'page',
                            number: i,
                            active: currentPage !== i,
                            current: currentPage === i
                        });
                    }
                    i++;
                }
                pages.push({
                    type: 'last',
                    number: numPages,
                    active: currentPage !== numPages,
                    current: currentPage === numPages
                });
                pages.push({
                    type: 'next',
                    number: Math.min(numPages, currentPage + 1),
                    active: currentPage < numPages
                });
            }
            return pages;
        };

        /**
         * @ngdoc method
         * @name NgTableParams#isDataReloadRequired
         * @description Return true when a change to this `NgTableParams` instance should require the reload method
         * to be run so as to ensure the data presented to the user reflects the `NgTableParams`
         *
         * Note that this method will return false when the reload method has run but fails. In this case
         * `hasErrorState` will return true.
         */
        this.isDataReloadRequired = function(){
            // note: using != as want to treat null and undefined the same
            return !isCommittedDataset || !__WEBPACK_IMPORTED_MODULE_0_angular___default.a.equals(createComparableParams(), prevParamsMemento)
                || hasGlobalSearchFieldChanges();
        };

        function createComparableParams(){
            var result = {params: params};
            if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(params.group)){
                result.groupSortDirection = params.group.sortDirection;
            }
            return result
        }
        /**
         * @ngdoc method
         * @name NgTableParams#hasFilter
         * @description Determines if NgTableParams#filter has significant filter value(s)
         * (any value except null, undefined, or empty string)
         * @returns {Boolean} true when NgTableParams#filter has at least one significant field value
         */
        this.hasFilter = function(){
            return Object.keys(this.filter(true)).length > 0;
        };

        /**
         * @ngdoc method
         * @name NgTableParams#hasGroup
         * @description Determines if at least one group has been set
         * @returns {Boolean}
         */
        this.hasGroup = function(group, sortDirection){
            if (group == null) {
                return __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(params.group) || Object.keys(params.group).length > 0
            }

            if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(group)) {
                if (sortDirection == null) {
                    return params.group === group;
                } else {
                    return params.group === group && group.sortDirection === sortDirection;
                }
            } else {
                if (sortDirection == null) {
                    return Object.keys(params.group).indexOf(group) !== -1;
                } else {
                    return params.group[group] === sortDirection;
                }
            }
        };
        
        this.hasGroupHeader = function(){
          return __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(params.showGroupHeader)?params.showGroupHeader():params.showGroupHeader;          
        }

        /**
         * @ngdoc method
         * @name NgTableParams#hasFilterChanges
         * @description Return true when a change to `NgTableParams.filters`require the reload method
         * to be run so as to ensure the data presented to the user reflects these filters
         */
        this.hasFilterChanges = function(){
            var previousFilter = (prevParamsMemento && prevParamsMemento.params.filter);
            return !__WEBPACK_IMPORTED_MODULE_0_angular___default.a.equals((params.filter), previousFilter) || hasGlobalSearchFieldChanges();
        };

        function hasGlobalSearchFieldChanges(){
            var currentVal = (params.filter && params.filter.$);
            var previousVal =
                (prevParamsMemento && prevParamsMemento.params.filter && prevParamsMemento.params.filter.$);
            return !__WEBPACK_IMPORTED_MODULE_0_angular___default.a.equals(currentVal, previousVal);
        }

        /**
         * @ngdoc method
         * @name NgTableParams#url
         * @description Return groups for table grouping
         *
         * @param {boolean} asString flag indicates return array of string or object
         * @returns {Array} If asString = true will be return array of url string parameters else key-value object
         */
        this.url = function(asString) {
            asString = asString || false;
            var pairs = (asString ? [] : {});
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    var item = params[key],
                        name = encodeURIComponent(key);
                    if (typeof item === "object") {
                        for (var subkey in item) {
                            if (isSignificantValue(item[subkey], key)) {
                                var pname = name + "[" + encodeURIComponent(subkey) + "]";
                                collectValue(item[subkey], pname);
                            }
                        }
                    } else if (!__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(item) && isSignificantValue(item, key)) {
                        collectValue(item, name);
                    }
                }
            }
            return pairs;

            function collectValue(value, key){
                if (asString) {
                    pairs.push(key + "=" + encodeURIComponent(value));
                } else {
                    pairs[key] = encodeURIComponent(value);
                }
            }

            function isSignificantValue(value, key){
                return key === "group" ? true : __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(value) && value !== "";
            }
        };

        /**
         * @ngdoc method
         * @name NgTableParams#reload
         * @description Reload table data
         */
        this.reload = function() {
            var self = this,
                pData = null;

            settings.$loading = true;

            prevParamsMemento = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.copy(createComparableParams());
            isCommittedDataset = true;

            if (self.hasGroup()) {
                pData = runInterceptorPipeline($q.when(settings.getGroups(self)));
            } else {
                pData = runInterceptorPipeline($q.when(settings.getData(self)));
            }

            log('ngTable: reload data');

            var oldData = self.data;
            return pData.then(function(data) {
                settings.$loading = false;
                errParamsMemento = null;

                self.data = data;
                // note: I think it makes sense to publish this event even when data === oldData
                // subscribers can always set a filter to only receive the event when data !== oldData
                ngTableEventsChannel.publishAfterReloadData(self, data, oldData);
                self.reloadPages();

                return data;
            }).catch(function(reason){
                errParamsMemento = prevParamsMemento;
                // "rethrow"
                return $q.reject(reason);
            });
        };

        /**
         * @ngdoc method
         * @name NgTableParams#hasErrorState
         * @description Return true when an attempt to `reload` the current `parameter` values have resulted in
         * a failure
         *
         * This method will continue to return true until the reload is successfully called or when the
         * `parameter` values have changed
         */
        this.hasErrorState = function(){
            return !!(errParamsMemento && __WEBPACK_IMPORTED_MODULE_0_angular___default.a.equals(errParamsMemento, createComparableParams()));
        };

        function optimizeFilterDelay(){
            // don't debounce by default filter input when working with small synchronous datasets
            if (settings.filterOptions.filterDelay === defaultFilterOptions.filterDelay &&
                settings.total <= settings.filterOptions.filterDelayThreshold &&
                settings.getData === defaultSettingsFns.getData){
                settings.filterOptions.filterDelay = 0;
            }
        }

        this.reloadPages = (function() {
            var currentPages;
            return function(){
                var oldPages = currentPages;                
                var newPages = self.generatePagesArray(self.page(), self.total(), self.count());
                if (!__WEBPACK_IMPORTED_MODULE_0_angular___default.a.equals(oldPages, newPages)){
                    currentPages = newPages;
                    ngTableEventsChannel.publishPagesChanged(this, newPages, oldPages);
                }
            }
        })();

        function runInterceptorPipeline(fetchedData){
            var interceptors = settings.interceptors || [];

            return interceptors.reduce(function(result, interceptor){
                var thenFn = (interceptor.response && interceptor.response.bind(interceptor)) || $q.when;
                var rejectFn = (interceptor.responseError && interceptor.responseError.bind(interceptor)) || $q.reject;
                return result.then(function(data){
                    return thenFn(data, self);
                }, function(reason){
                    return rejectFn(reason, self);
                });
            }, fetchedData);
        }

        function getDefaultSettingFns(){

            return {
                getData: getData,
                getGroups: getGroups
            };

            /**
             * @ngdoc method
             * @name settings#getData
             * @description Returns the data to display in the table
             *
             * Called by `NgTableParams` whenever it considers new data is to be loaded
             *
             * @param {Object} params the `NgTableParams` requesting data
             */
            function getData(params) {
                return ngTableDefaultGetData(params.settings().dataset, params);
            }

            /**
             * @ngdoc method
             * @name settings#getGroups
             * @description Return groups of data to display in the table
             *
             * Called by `NgTableParams` whenever it considers new data is to be loaded
             * and when a `group` value has been assigned
             *
             * @param {Object} params the `NgTableParams` requesting data
             */
            function getGroups(params) {

                var group = params.group();
                var groupFn;
                var sortDirection = undefined;
                if (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(group)) {
                    groupFn = group;
                    sortDirection = group.sortDirection;
                } else {
                    // currently support for only one group implemented
                    var groupField = Object.keys(group)[0];
                    sortDirection = group[groupField];
                    groupFn = function(item){
                        return getPath(item, groupField);
                    };
                }
                
                var settings = params.settings();
                var originalDataOptions = settings.dataOptions;
                settings.dataOptions = { applyPaging: false };
                var gotData = $q.when(settings.getData(params));
                return gotData.then(function(data) {
                    var groups = {};
                    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.forEach(data, function(item) {
                        var groupName = groupFn(item);
                        groups[groupName] = groups[groupName] || {
                                data: [],
                                $hideRows: !settings.groupOptions.isExpanded,
                                value: groupName
                            };
                        groups[groupName].data.push(item);
                    });
                    var result = [];
                    for (var i in groups) {
                        result.push(groups[i]);
                    }
                    if (group.sortGroups && sortDirection) {
                        var orderByFn = ngTableDefaultGetData.getOrderByFn();
                        var orderBy = convertSortToOrderBy({
                            value: sortDirection
                        });
                        result = orderByFn(result, orderBy);
                    }

                    return ngTableDefaultGetData.applyPaging(result, params);
                }).finally(function(){
                    // restore the real options
                    settings.dataOptions = originalDataOptions;
                });
            }

            function getPath (obj, ks) {
                // origianl source https://github.com/documentcloud/underscore-contrib

                if (typeof ks == "string") ks = ks.split(".");

                // If we have reached an undefined property
                // then stop executing and return undefined
                if (obj === undefined) return void 0;

                // If the path array has no more elements, we've reached
                // the intended property and return its value
                if (ks.length === 0) return obj;

                // If we still have elements in the path array and the current
                // value is null, stop executing and return undefined
                if (obj === null) return void 0;

                return getPath(obj[ks[0]], ks.slice(1));
            }
        }

        var params = {
            page: 1,
            count: 10,
            filter: {},
            sorting: {},
            group: {},
            hidePager: false
        };
        __WEBPACK_IMPORTED_MODULE_0_angular___default.a.extend(params, ngTableDefaults.params);

        /**
         * @ngdoc object
         * @name settings
         * @module ngTable
         * @description configuration settings for `NgTableParams`
         */
        var settings = {
            $loading: false,
            dataset: null, //allows data to be set when table is initialized
            total: 0,
            defaultSort: 'desc',
            filterOptions: __WEBPACK_IMPORTED_MODULE_0_angular___default.a.copy(defaultFilterOptions),
            groupOptions: __WEBPACK_IMPORTED_MODULE_0_angular___default.a.copy(defaultGroupOptions),
            counts: [10, 25, 50, 100],
            interceptors: [],
            paginationMaxBlocks: 11,
            paginationMinBlocks: 5,
            sortingIndicator: 'span'
        };

        this.settings(defaultSettingsFns);
        this.settings(ngTableDefaults.settings);
        this.settings(baseSettings);
        this.parameters(baseParameters, true);

        ngTableEventsChannel.publishAfterCreated(this);
        // run events during construction after the initial create event. That way a consumer
        // can subscribe to all events for a table without "dropping" an event
        __WEBPACK_IMPORTED_MODULE_0_angular___default.a.forEach(initialEvents, function(event){
            event();
        });
        initialEvents = null;

        return this;
    }
}



/***/ },
/* 31 */
/* exports provided: default */
/* all exports used */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(/*! angular */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_core__ = __webpack_require__(/*! ./src/core */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_browser__ = __webpack_require__(/*! ./src/browser */ 2);
/* harmony export (binding) */ __webpack_require__.d(exports, "default", function() { return module; });




var module = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('ngTable', [__WEBPACK_IMPORTED_MODULE_1__src_core__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_2__src_browser__["a" /* default */].name]);



/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng-table.js.map