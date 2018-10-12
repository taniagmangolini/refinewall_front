webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.endpoints.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Endpoint; });
/* unused harmony export headers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var BASE_URL = 'https://refinewall.herokuapp.com';
//const BASE_URL = 'http://localhost:8080';
var GLOBAL = {
    // login: BASE_URL + '/login', 
    refineBySequence: BASE_URL + '/refine/sequence/',
    refineById: BASE_URL + '/refine/id/',
    uniprotById: BASE_URL + '/uniprot'
};
var Endpoint = __assign({}, GLOBAL);
var headers = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    })
};


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_async_local_storage__ = __webpack_require__("./node_modules/angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__ = __webpack_require__("./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_loading_loading_component__ = __webpack_require__("./src/app/components/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__filter_FilterBlastPipe__ = __webpack_require__("./src/app/filter/FilterBlastPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__filter_FilterSucestByDescriptionGenePipe__ = __webpack_require__("./src/app/filter/FilterSucestByDescriptionGenePipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sorters_ArraySortPipe__ = __webpack_require__("./src/app/sorters/ArraySortPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_Refine_service__ = __webpack_require__("./src/app/services/Refine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_popover__ = __webpack_require__("./node_modules/ng2-popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngui_tab__ = __webpack_require__("./node_modules/@ngui/tab/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngui_tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__ngui_tab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_modal_sucest_modal_sucest_modal_component__ = __webpack_require__("./src/app/pages/home/modal/sucest-modal/sucest-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_modal_uniprot_modal_uniprot_modal_component__ = __webpack_require__("./src/app/pages/home/modal/uniprot-modal/uniprot-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_modal_sucest_modal_sucest_modal_component__["a" /* SucestModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_modal_uniprot_modal_uniprot_modal_component__["a" /* UniprotModalComponent */],
                __WEBPACK_IMPORTED_MODULE_14__filter_FilterSucestByDescriptionGenePipe__["a" /* FilterSucestByDescriptionGenePipe */],
                __WEBPACK_IMPORTED_MODULE_13__filter_FilterBlastPipe__["a" /* FilterBlastPipe */],
                __WEBPACK_IMPORTED_MODULE_15__sorters_ArraySortPipe__["a" /* ArraySortPipe */],
                __WEBPACK_IMPORTED_MODULE_11__components_loading_loading_component__["a" /* LoadingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_async_local_storage__["a" /* AsyncLocalStorageModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_18_ng2_popover__["PopoverModule"],
                __WEBPACK_IMPORTED_MODULE_19__ngui_tab__["NguiTabModule"],
                __WEBPACK_IMPORTED_MODULE_22_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__["BootstrapModalModule"].forRoot({ container: document.body })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_Refine_service__["a" /* RefineService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_20__pages_home_modal_sucest_modal_sucest_modal_component__["a" /* SucestModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_modal_uniprot_modal_uniprot_modal_component__["a" /* UniprotModalComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");

var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__pages_home_home_component__["a" /* HomeComponent */] }
];


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- Footer -->\r\n    <footer class=\"footer bg-light\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 h-100 text-center text-lg-left my-auto\">\r\n              <!--<ul class=\"list-inline mb-2\">\r\n                <li class=\"list-inline-item\">\r\n                  <a href=\"#\">About</a>\r\n                </li>\r\n                <li class=\"list-inline-item\">&sdot;</li>\r\n                <li class=\"list-inline-item\">\r\n                  <a href=\"#\">Contact</a>\r\n                </li>\r\n              </ul>-->\r\n              <p class=\"text-muted small mb-4 mb-lg-0 text-center\">&copy; RefineWall 2018</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/loading/loading.component.css":
/***/ (function(module, exports) {

module.exports = ".loading-box{\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0,0,0,0.75);\n  position: absolute;\n  top: 0;\n}\n\n.loading-title {\n  color: white;\n}\n\n.loading {\n  border: 16px solid #f3f3f3;\n  border-top: 16px solid #3498db;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n}\n\n.loading.small {\n  border: 7px solid #f3f3f3;\n  border-top: 7px solid #3498db;\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}"

/***/ }),

/***/ "./src/app/components/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"active\" class=\"loading-box content-center vertical\">\n  <p class=\"loading-title\">{{title}}</p>\n  <div class=\"loading small\">\n    LOADING\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
        this.active = false;
        this.title = 'Loading..';
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoadingComponent.prototype, "active", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LoadingComponent.prototype, "title", void 0);
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__("./src/app/components/loading/loading.component.html"),
            styles: [__webpack_require__("./src/app/components/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light static-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\"><img class=\"img-fluid\" src=\"assets/refine.png\" height=\"20%\" width=\"40%\"></a>\n    <a  (click)=\"redirectToLafiecoWebsite()\"><img class=\"img-fluid\" src=\"assets/logo.png\" alt=\"Lafieco\" height=\"60%\" width=\"60%\"></a>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.lafiecoLink = "http://www.lafieco.com.br";
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.redirectToLafiecoWebsite = function () {
        window.open("http://www.lafieco.com.br", "_blank");
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/filter/FilterBlastPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterBlastPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterBlastPipe = (function () {
    function FilterBlastPipe() {
    }
    FilterBlastPipe.prototype.transform = function (items, filter) {
        if (filter === undefined || filter == '') {
            return items;
        }
        var search = filter != null ? filter.toLowerCase() : "";
        return items.filter(function (item) {
            var uniqueIdentifier = item.uniqueIdentifier != null ? item.uniqueIdentifier.toLowerCase() : "";
            var organismName = item.organismName != null ? item.organismName.toLowerCase() : "";
            var geneName = item.geneName != null ? item.geneName.toLowerCase() : "";
            var entryName = item.entryName != null ? item.entryName.toLowerCase() : "";
            var proteinName = item.proteinName != null ? item.proteinName.toLowerCase() : "";
            var sucestBusca = item.sucestBusca != null ? item.sucestBusca.toLowerCase() : "";
            if (uniqueIdentifier.includes(search) ||
                organismName.includes(search) ||
                (sucestBusca != null && sucestBusca.includes(search)) ||
                (geneName != null && geneName.includes(search)) ||
                entryName.includes(search) ||
                (proteinName != null && proteinName.includes(search))) {
                return item;
            }
        });
    };
    FilterBlastPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterBlastPipe'
        })
    ], FilterBlastPipe);
    return FilterBlastPipe;
}());



/***/ }),

/***/ "./src/app/filter/FilterSucestByDescriptionGenePipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterSucestByDescriptionGenePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterSucestByDescriptionGenePipe = (function () {
    function FilterSucestByDescriptionGenePipe() {
    }
    FilterSucestByDescriptionGenePipe.prototype.transform = function (items, filter) {
        if (filter === undefined || filter == '' || filter != null) {
            return items;
        }
        var search = filter.toLowerCase();
        return items.filter(function (item) {
            var gene = item.gene != null ? item.gene.toLowerCase() : '';
            var description = item.description != null ? item.description.toLowerCase() : '';
            if (description.includes(search) || gene.includes(search)) {
                return item;
            }
        });
    };
    FilterSucestByDescriptionGenePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterSucestByDescriptionGenePipe'
        })
    ], FilterSucestByDescriptionGenePipe);
    return FilterSucestByDescriptionGenePipe;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "header.masthead {\r\n  position: relative;\r\n  background-color: #343a40;\r\n  background: url('bg-sugarcane.c996524f3b98939eb66f.jpg');\r\n  background-size: cover;\r\n  padding-top: 8rem;\r\n  padding-bottom: 8rem;\r\n}\r\n\r\n.result {\r\n  background-color: white;\r\n  padding-top: 4rem;\r\n  padding-bottom: 4rem;\r\n}\r\n\r\n.search-radio {\r\n  color: black;\r\n  background-color: white;\r\n  margin: 1rem;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"container\">\r\n\r\n  <app-navbar></app-navbar>\r\n\r\n      <!-- Masthead -->\r\n      <header class=\"masthead text-white text-center\">\r\n        <div class=\"overlay\"></div>\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-9 mx-auto\">\r\n            </div>\r\n            <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto\">\r\n              <form>\r\n                <div class=\"form-row\">\r\n                    <div class=\"col-12 col-md-12 mb-2 mb-md-0\">\r\n                        <input class=\"form-control form-control\" type=\"email\" placeholder=\"Enter you e-mail\" name=\"emailSearch\" [popover]=\"emailPopover\" [(ngModel)]=\"emailSearch\" email pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" required/>\r\n                    </div>\r\n                    <popover-content #emailPopover\r\n                    [closeOnMouseOutside]=\"true\"\r\n                    placement=\"auto bottom\"><span style=\"color: blue\">Please, enter a valid e-mail</span>\r\n                  </popover-content>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"col-12 col-md-12 mb-2 mb-md-0\">\r\n                      <textarea class=\"form-control form-control\" required  rows=\"5\" placeholder=\"Enter what you are looking for...\" name=\"sequenceSearch\" [(ngModel)]=\"sequenceSearch\"></textarea>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                  <div class=\"card-block\">\r\n                    <div class=\"form-row \">\r\n                      <div class=\"col-12 col-md-6 mb-2 mb-md-0\">\r\n                        <label class=\"radio-inline search-radio\"><input type=\"radio\" name=\"sequenceOption\" value=\"sequence\" [(ngModel)]=\"optionSearch\" checked [popover]=\"sequencePopover\">Sequence</label>\r\n                        <popover-content #sequencePopover\r\n                        [closeOnMouseOutside]=\"true\"\r\n                        placement=\"auto bottom\"><span style=\"color: blue\">Aminoacid sequence</span>\r\n                      </popover-content>\r\n                      </div>\r\n                      <div class=\"col-12 col-md-6 mb-2 mb-md-0\">\r\n                        <label class=\"radio-inline search-radio\"><input type=\"radio\"  name=\"idOption\" value=\"id\" [(ngModel)]=\"optionSearch\"  [popover]=\"idPopover\">Id</label>\r\n                        <popover-content #idPopover\r\n                          [closeOnMouseOutside]=\"true\"\r\n                          placement=\"auto bottom\"><span style=\"color: blue\">Sucest, Uniprot or Gene</span>\r\n                        </popover-content>\r\n                      </div>\r\n                    </div>\r\n                   </div>\r\n                    <span style=\"color: red\">{{errorMsg}}</span>\r\n                  </div>\r\n\r\n                  <div class=\"form-row\">\r\n                      <div class=\"col-12 col-md-12\">\r\n                        <button type=\"submit\" class=\"btn btn-block btn-lg btn-primary\" (click)=\"refineIdOrSequence()\">Search</button>\r\n                      </div>\r\n                  </div>\r\n\r\n              </form>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </header>\r\n\r\n      <section class=\"result\">\r\n          <div class=\"container\" *ngIf=\"hasResult && blastResultList?.length > 0\"> \r\n              <div class=\"row\">\r\n                <div class=\"col-12 col-md-12\">\r\n                <ngui-tab\r\n                  selected=\"js\"\r\n                  selected-index-class=\"selected\"\r\n                  selected-contents-class=\"fadeIn animated\">\r\n                  <div class=\"tabs\">\r\n                    <div index=\"sucest\" *ngIf=\"sucestList?.length > 0 && sucestList[0].gene != 'NOT_FOUND'\">Sucest</div>\r\n                    <div index=\"blast\">Blast Result</div>\r\n                      <a (click)=\"exportToCsv()\"><i class=\"fa fa-file-excel-o\" aria-hidden=\"true\" style=\"color:green\"  [popover]=\"excelPopover\" [popoverOnHover]=\"true\"></i>\r\n                      <popover-content #excelPopover\r\n                      [closeOnMouseOutside]=\"true\"\r\n                       placement=\" top\">\r\n                       <span style=\"color: blue\">Export to Excel</span>\r\n                    </popover-content>\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"tab-contents\">\r\n\r\n                  <!---SUCEST TAB-->\r\n                    <div contents=\"sucest\">\r\n\r\n                      <div class=\"\">\r\n                        <div class=\"content-end\">\r\n                          <input \r\n                            type=\"text\" \r\n                            class=\"form-control\" \r\n                            placeholder=\"Search..\"\r\n                            [(ngModel)]=\"search\" />\r\n                    \r\n                          <i class=\"fa fa-search search\"></i>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <table class=\"table table-striped\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th style=\"width: 20%\">\r\n                              Gene\r\n                            </th>\r\n                            <th style=\"width: 40%\">\r\n                              Description\r\n                            </th>\r\n                            <th style=\"width: 10%\"  [popover]=\"domainPopover\" [popoverOnHover]=\"true\">\r\n                              Domain\r\n                              <popover-content #domainPopover\r\n                              [closeOnMouseOutside]=\"true\"\r\n                               placement=\" top\">\r\n                                <span style=\"color: blue\">C: Cellulose</span><br>\r\n                                <span style=\"color: blue\">H: Hemicellulose</span><br>\r\n                                <span style=\"color: blue\">P: Pectin</span><br>\r\n                                <span style=\"color: blue\">L: Lignin</span><br>\r\n                                <span style=\"color: blue\">E: Expansin</span><br>\r\n                                <span style=\"color: blue\">M: Metabolism</span><br>\r\n                                <span style=\"color: blue\">O: Others</span>\r\n                                <span style=\"color: blue\">NA: Not Defined</span>\r\n                            </popover-content>\r\n                            </th>\r\n                            <th style=\"width: 10%\">\r\n                              Details \r\n                            </th>\r\n                          </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let item of sucestList | filterSucestByDescriptionGenePipe: search \">\r\n  \r\n                          <td *ngIf=\"item.gene != 'NOT_FOUND'\">{{item.gene}}</td>\r\n                          <td *ngIf=\"item.gene != 'NOT_FOUND'\">{{item.description}}</td>\r\n                          <td *ngIf=\"item.gene != 'NOT_FOUND'\">C, P</td>\r\n                          <td *ngIf=\"item.gene != 'NOT_FOUND'\"><button class=\"btn-sm btn-primary\" (click)=\"callSucestModal(item)\"><i class=\"fa fa-edit fa-fw\" aria-hidden=\"true\"></i></button>\r\n     \r\n                      </tr>\r\n                      </tbody>\r\n                      <tfoot>\r\n                        <tr>\r\n                          <td colspan=\"4\">\r\n                            \r\n                          </td>\r\n                      </tr>\r\n                    </tfoot>\r\n                </table>\r\n\r\n              </div>\r\n\r\n\r\n              <!---BLAST TAB-->\r\n              <div contents=\"blast\">\r\n                  <div class=\"\">\r\n                      <div class=\"content-end\">\r\n                        <input \r\n                          type=\"text\" \r\n                          class=\"form-control\" \r\n                          placeholder=\"Search..\"\r\n                          [(ngModel)]=\"search\" />\r\n                  \r\n                        <i class=\"fa fa-search search\"></i>\r\n                      </div>\r\n                    </div>\r\n\r\n                  <table class=\"table table-striped\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th style=\"width: 10%\">\r\n                          Sucest\r\n                          </th>\r\n                          <th style=\"width: 10%\">\r\n                          Uniprot\r\n                          </th>\r\n                          <th style=\"width: 10%\">\r\n                          Protein\r\n                          </th>\r\n                          <th style=\"width: 10%\">\r\n                          Organism\r\n                          </th>\r\n                          <th style=\"width: 10%\">\r\n                          Gene\r\n                          </th>\r\n                          <th style=\"width: 5%\">\r\n                          Score\r\n                          </th>\r\n                          <th>\r\n                          Detail\r\n                          </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of blastResultList | filterBlastPipe: search | sort:'score'  | paginate: { itemsPerPage: 30, currentPage: p}\">\r\n                          <td>{{item.sucestBusca}}</td>\r\n                          <td>{{item.entryName}}</td>\r\n                          <td>{{item.proteinName}}</td>\r\n                          <td>{{item.organismName}}</td>\r\n                          <td>{{item.geneName}}</td>\r\n                          <td>{{item.score}}</td>\r\n                          <td><button class=\"btn-sm btn-primary\" (click)=\"callUniprotModal(item)\"><i class=\"fa fa-edit fa-fw\" aria-hidden=\"true\"></i></button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                      <tr>\r\n                        <td colspan=\"4\">\r\n                        </td>\r\n                    </tr>\r\n                  </tfoot>\r\n              </table>\r\n              <pagination-controls  class=\"content-center\" (pageChange)=\"p = $event\"  previousLabel=\"Previous\" nextLabel=\"Next\"></pagination-controls>\r\n                  </div>\r\n                 </div>\r\n                </ngui-tab>\r\n              </div>\r\n              </div>\r\n            </div>\r\n      </section>\r\n  \r\n      <app-footer></app-footer>\r\n\r\n</div>\r\n<ng4-loading-spinner [timeout]=\"600000\"></ng4-loading-spinner>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Refine_service__ = __webpack_require__("./src/app/services/Refine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_sucest_modal_sucest_modal_component__ = __webpack_require__("./src/app/pages/home/modal/sucest-modal/sucest-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_uniprot_modal_uniprot_modal_component__ = __webpack_require__("./src/app/pages/home/modal/uniprot-modal/uniprot-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_export_to_csv__ = __webpack_require__("./node_modules/export-to-csv/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_export_to_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_export_to_csv__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = (function () {
    function HomeComponent(modal, spinnerService, refineService) {
        this.modal = modal;
        this.spinnerService = spinnerService;
        this.refineService = refineService;
        this.sucestList = [];
        this.blastResultList = [];
        this.hasResult = false;
        this.errorMsg = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.clearSearch();
    };
    HomeComponent.prototype.clearSearch = function () {
        this.sucestList = [];
        this.blastResultList = [];
        this.sequenceSearch = "";
        this.emailSearch = "";
        this.optionSearch = "";
        this.hasResult = false;
        this.errorMsg = "";
    };
    HomeComponent.prototype.refineIdOrSequence = function () {
        this.blastResultList = [];
        this.sucestList = [];
        this.hasResult = false;
        this.errorMsg = "";
        if (this.optionSearch == "" && this.sequenceSearch == "" && this.emailSearch == "") {
            this.errorMsg = 'Inform all the search fields!';
        }
        else if (this.optionSearch == "") {
            this.errorMsg = 'Select the search option!';
        }
        else if (this.optionSearch == "sequence" && this.sequenceSearch == "") {
            this.errorMsg = 'Inform the sequence!';
        }
        else if (this.optionSearch == "id" && this.sequenceSearch == "") {
            this.errorMsg = 'return "Informe the id!';
        }
        else if (this.emailSearch == "") {
            this.errorMsg = 'Inform your e-mail!';
        }
        if (this.errorMsg != "") {
            return;
        }
        this.spinnerService.show();
        if (this.optionSearch == "id") {
            this.searchByIdEmail();
        }
        else {
            this.searchBySequenceEmail();
        }
        //console.log("blastResultList " + (this.blastResultList == null));
        // console.log("hasresult " + this.hasResult);
        // console.log("error " + this.errorMsg);
    };
    ;
    HomeComponent.prototype.searchByIdEmail = function () {
        var _this = this;
        console.log("by Id " + this.sequenceSearch);
        this.refineService.getRefineResultByIdEmail(this.sequenceSearch, this.emailSearch)
            .subscribe(function (data) {
            console.log("entrou 1");
            if (data != null && data != undefined) {
                if (data.sucests != null && data.sucests.length > 0) {
                    _this.sucestList = data.sucests;
                    console.log("entrou 2");
                    for (var i = 0; i < _this.sucestList.length; i++) {
                        if (_this.sucestList[i].blastResults != []) {
                            console.log(_this.sucestList[i]);
                            for (var j = 0; j < _this.sucestList[i].blastResults.length; j++) {
                                _this.blastResultList.push(_this.sucestList[i].blastResults[j]);
                            }
                        }
                    }
                    _this.hasResult = true;
                }
                else {
                    _this.hasResult = false;
                    _this.errorMsg = "Not found!";
                }
            }
            else {
                _this.hasResult = false;
                _this.errorMsg = "Not found!";
            }
            _this.spinnerService.hide();
        }, function (error) {
            console.log("error= >" + error.message);
            _this.errorMsg = "Error to process the request: " + error.message;
            _this.spinnerService.hide();
        });
    };
    ;
    HomeComponent.prototype.searchBySequenceEmail = function () {
        var _this = this;
        console.log("by sequence " + this.sequenceSearch);
        this.refineService.getRefineResultBySequenceEmail(this.sequenceSearch, this.emailSearch)
            .subscribe(function (data) {
            if (data != null) {
                if (data.sucests != null && data.sucests.length > 0) {
                    _this.sucestList = data.sucests;
                    console.log(_this.sucestList);
                    for (var i = 0; i < _this.sucestList.length; i++) {
                        if (_this.sucestList[i].blastResults != []) {
                            console.log(_this.sucestList[i]);
                            for (var j = 0; j < _this.sucestList[i].blastResults.length; j++) {
                                _this.blastResultList.push(_this.sucestList[i].blastResults[j]);
                            }
                        }
                    }
                    _this.hasResult = true;
                }
                else {
                    _this.hasResult = false;
                    _this.errorMsg = "Not found!";
                }
            }
            else {
                _this.hasResult = false;
                _this.errorMsg = "Not found!";
            }
            _this.spinnerService.hide();
        }, function (error) {
            console.log("error = >" + error.message);
            _this.errorMsg = "Error to process the request: " + error.message;
            _this.spinnerService.hide();
        });
    };
    HomeComponent.prototype.callSucestModal = function (sucestSelected) {
        this.modal.addDialog(__WEBPACK_IMPORTED_MODULE_3__modal_sucest_modal_sucest_modal_component__["a" /* SucestModalComponent */], {
            sucest: sucestSelected
        });
    };
    HomeComponent.prototype.callUniprotModal = function (blastItemSelected) {
        this.modal.addDialog(__WEBPACK_IMPORTED_MODULE_4__modal_uniprot_modal_uniprot_modal_component__["a" /* UniprotModalComponent */], {
            blastResult: blastItemSelected
        });
    };
    HomeComponent.prototype.exportToCsv = function () {
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: false,
            useBom: true,
            useKeysAsHeaders: true
        };
        var csvExporter = new __WEBPACK_IMPORTED_MODULE_6_export_to_csv__["ExportToCsv"](options);
        csvExporter.generateCsv(this.blastResultList);
    };
    ;
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__services_Refine_service__["a" /* RefineService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/modal/sucest-modal/sucest-modal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/modal/sucest-modal/sucest-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-box modal-dialog\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header content-center vertical\">\r\n            <button type=\"button\" class=\"close\" (click)=\"cancel()\" >&times;</button>\r\n            <h4 class=\"modal-title\">Details - {{sucest.gene}}</h4>\r\n        </div>\r\n      \r\n        <div class=\"container modal-body\">\r\n                <li *ngFor=\"let item of sucest.sequences\">\r\n                        <textarea class=\"form-control form-control\" [(ngModel)]=\"item.sequence\" readonly></textarea>\r\n                </li>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/modal/sucest-modal/sucest-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SucestModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SucestModalComponent = (function (_super) {
    __extends(SucestModalComponent, _super);
    function SucestModalComponent(modal) {
        var _this = _super.call(this, modal) || this;
        _this.modal = modal;
        return _this;
    }
    SucestModalComponent.prototype.ngOnInit = function () {
    };
    SucestModalComponent.prototype.cancel = function () {
        this.result = false;
        this.close();
    };
    SucestModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sucest-modal',
            template: __webpack_require__("./src/app/pages/home/modal/sucest-modal/sucest-modal.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/modal/sucest-modal/sucest-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]])
    ], SucestModalComponent);
    return SucestModalComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/home/modal/uniprot-modal/uniprot-modal.component.css":
/***/ (function(module, exports) {

module.exports = ".detail-label {\r\n font-weight: bold   \r\n}\r\n.organism-italic {\r\n    font-style: italic   \r\n   }"

/***/ }),

/***/ "./src/app/pages/home/modal/uniprot-modal/uniprot-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-box modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-header content-center vertical\">\r\n                <button type=\"button\" class=\"close\" (click)=\"cancel()\" >&times;</button>\r\n                <h4 class=\"modal-title\">{{blastResult.entryName}}</h4>\r\n            </div>\r\n          \r\n            <div class=\"container modal-body\">\r\n                <div class=\"panel panel-default\">\r\n\r\n                        <div class=\"panel-heading\">\r\n                            <div class=\"card text-center\">\r\n                                <div class=\"card-header\">\r\n                                    <ul class=\"nav nav-tabs card-header-tabs\">\r\n                                        <li class=\"nav-item\" (click)=\"changeOption('Details')\"><a  class=\"nav-link active\" href=\"#\">Details</a></li>\r\n                                        <li class=\"nav-item\"><a  class=\"nav-link\" href=\"#\" (click)=\"changeOption('Sequence')\">Sequence</a></li>\r\n                                        <li class=\"nav-item\"><a  class=\"nav-link\"  href=\"#\" (click)=\"changeOption('Databases')\">Databases</a></li>\r\n                                        <li class=\"nav-item\"><a  class=\"nav-link\"  href=\"#\" (click)=\"changeOption('Keywords')\">Keywords</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>        \r\n\r\n                        <div class=\"panel-body\">\r\n\r\n                            <!--DETAILS-->\r\n                            <div *ngIf=\"option == 'Details'\">\r\n\r\n                                <div class=\"card\">\r\n                                    <h5 class=\"card-header\">Statistics</h5>\r\n                                    <div class=\"card-body\">\r\n                                        <div class=\"container\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm\">\r\n                                                    <span class=\"detail-label\"> Score </span>\r\n                                                </div>\r\n                                                <div class=\"col-sm\">\r\n                                                   <span class=\"detail-label\"> Evalue </span>\r\n                                                </div>\r\n                                                <div class=\"col-sm\">\r\n                                                    <span class=\"detail-label\"> Identities </span>   \r\n                                                </div>\r\n                                                <div class=\"col-sm\">\r\n                                                    <span class=\"detail-label\"> Gaps </span>   \r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                    <div class=\"col-sm card-text\">\r\n                                                            {{blastResult.score}}\r\n                                                    </div>                                              \r\n                                                    <div class=\"col-sm card-text\">\r\n                                                       {{blastResult.evalue}}\r\n                                                    </div>\r\n                                                    <div class=\"col-sm card-text\">\r\n                                                        {{blastResult.identities}}   \r\n                                                    </div>\r\n                                                    <div class=\"col-sm card-text\">\r\n                                                        {{blastResult.gaps}}   \r\n                                                    </div>\r\n                                            </div>\r\n                                        </div>   \r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"card\" *ngIf=\"uniprotVO != null && uniprotVO.protein != null\">\r\n                                        <h5 class=\"card-header\">Protein</h5>\r\n                                        <div class=\"card-body\">\r\n                                            <div class=\"container\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-sm col-12 col-md-4 mb-2 mb-md-0\">\r\n                                                           <span class=\"detail-label\"> Protein Name </span>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm col-12 col-md-4 mb-2 mb-md-0\">\r\n                                                            <span class=\"detail-label\"> Organism </span>   \r\n                                                        </div>\r\n                                                        <div class=\"col-sm col-12 col-md-4 mb-2 mb-md-0\">\r\n                                                                <span class=\"detail-label\"> EC Numbers </span>   \r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                            <div class=\"col-sm col-12 col-md-4 mb-2 mb-md-0 card-text\">\r\n                                                               {{uniprotVO.protein.proteinName}}\r\n                                                            </div>\r\n                                                            <div class=\"col-sm col-12 col-md-4 mb-2 mb-md-0 card-text\">\r\n                                                                <span class=\"organism-italic\">{{uniprotVO.organism}}</span>   \r\n                                                            </div>\r\n                                                            <div class=\"col-sm col-12 col-md-4 mb-2 mb-md-0 \" *ngIf=\"uniprotVO.protein.ecNumber?.length > 0\">\r\n                                                                    <li *ngFor=\"let item of uniprotVO.protein.ecNumber\">\r\n                                                                        <span class=\"card-text\"> {{item}} </span>\r\n                                                                    </li>\r\n                                                            </div>\r\n                                                    </div>\r\n\r\n                                                </div>  \r\n\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                              \r\n                                    <div class=\"card\"  *ngIf=\"uniprotVO != null && uniprotVO.genes!.length > 0\">\r\n                                            <h5 class=\"card-header\">Genes</h5>\r\n                                            <div class=\"card-body\">\r\n                                                 <li *ngFor=\"let item of uniprotVO.genes\">\r\n                                                     <span class=\"card-text\"> {{item}} </span>\r\n                                                 </li>\r\n                                            </div>\r\n                                    </div>\r\n                            </div>\r\n\r\n                    <!--SEQUENCE-->\r\n                    <div class=\"card\" *ngIf=\"option == 'Sequence'\">\r\n                            <h5 class=\"card-header\">Sequence</h5>\r\n                            <div class=\"card-body\">\r\n                                <span class=\"card-text\">{{uniprotVO.sequence}}</span>\r\n                            </div>\r\n                    </div>\r\n                            \r\n                    <!--DATABASES-->\r\n                    <div class=\"card\" *ngIf=\"option == 'Databases' && uniprotVO != null &&  uniprotVO.databases!.length > 0\">\r\n                            <div class=\"card-body\">\r\n                                <ul>\r\n                                        <li *ngFor=\"let db of uniprotVO.databases\">\r\n                                            <span class=\"card-text\">{{db}}</span>\r\n                                        </li>\r\n                                </ul>             \r\n                            </div>\r\n                    </div>\r\n\r\n                    <!--KEYWORDS-->\r\n                    <div class=\"card\" *ngIf=\"option == 'Keywords' && uniprotVO != null &&  uniprotVO.keywords != null\">\r\n                            <div class=\"card-body\">\r\n                                <li *ngFor=\"let item of uniprotVO.keywords\">\r\n                                    <span class=\"card-text\"> {{item}} </span>\r\n                                </li>                            \r\n                            </div>\r\n                    </div>\r\n                  \r\n                    \r\n                </div>\r\n                     \r\n            </div>\r\n\r\n    </div>\r\n</div>\r\n<ng4-loading-spinner> </ng4-loading-spinner>"

/***/ }),

/***/ "./src/app/pages/home/modal/uniprot-modal/uniprot-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniprotModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Refine_service__ = __webpack_require__("./src/app/services/Refine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UniprotModalComponent = (function (_super) {
    __extends(UniprotModalComponent, _super);
    function UniprotModalComponent(modal, refineService, spinnerService) {
        var _this = _super.call(this, modal) || this;
        _this.modal = modal;
        _this.refineService = refineService;
        _this.spinnerService = spinnerService;
        _this.option = 'Details';
        _this.spinnerService.show();
        return _this;
    }
    UniprotModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.blastResult != null && this.blastResult.entryName != null) {
            this.refineService.getUniprotById(this.blastResult.entryName).subscribe(function (data) {
                if (data != null) {
                    _this.uniprotVO = data;
                }
                _this.spinnerService.hide();
            }, function (error) {
                _this.spinnerService.hide();
                console.log("Error = > " + error);
            });
        }
    };
    ;
    UniprotModalComponent.prototype.changeOption = function (selectedOption) {
        this.option = selectedOption;
    };
    ;
    UniprotModalComponent.prototype.cancel = function () {
        this.result = false;
        this.close();
    };
    UniprotModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-uniprot-modal',
            template: __webpack_require__("./src/app/pages/home/modal/uniprot-modal/uniprot-modal.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/modal/uniprot-modal/uniprot-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_2__services_Refine_service__["a" /* RefineService */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], UniprotModalComponent);
    return UniprotModalComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "./src/app/services/Refine.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_endpoints__ = __webpack_require__("./src/app/app.endpoints.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RefineService = (function () {
    function RefineService(http) {
        this.http = http;
    }
    RefineService.prototype.getRefineResultBySequenceEmail = function (sequence, email) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_endpoints__["a" /* Endpoint */].refineBySequence + "?sequence=" + sequence + "&email=" + email);
    };
    RefineService.prototype.getRefineResultByIdEmail = function (id, email) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_endpoints__["a" /* Endpoint */].refineById + "?id=" + id + "&email=" + email);
    };
    RefineService.prototype.getUniprotById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_endpoints__["a" /* Endpoint */].uniprotById + "?idProtein=" + id);
    };
    RefineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RefineService);
    return RefineService;
}());



/***/ }),

/***/ "./src/app/sorters/ArraySortPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArraySortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArraySortPipe = (function () {
    function ArraySortPipe() {
    }
    ArraySortPipe.prototype.transform = function (array, field) {
        if (array != null && array != []) {
            array.sort(function (a, b) {
                if (b[field] < a[field]) {
                    return -1;
                }
                else if (b[field] > a[field]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            return array;
        }
    };
    ArraySortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sort'
        })
    ], ArraySortPipe);
    return ArraySortPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map