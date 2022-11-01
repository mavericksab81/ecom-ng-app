(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _posts_single_post_single_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts/single-post/single-post.component */ "./src/app/posts/single-post/single-post.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'posts',
        loadChildren: () => __webpack_require__.e(/*! import() | posts-posts-module */ "posts-posts-module").then(__webpack_require__.bind(null, /*! ./posts/posts.module */ "./src/app/posts/posts.module.ts")).then((m) => m.PostsModule),
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'posts/details/:id',
        component: _posts_single_post_single_post_component__WEBPACK_IMPORTED_MODULE_0__["SinglePostComponent"],
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then((m) => m.AuthModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _store_Shared_shared_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/Shared/shared.selector */ "./src/app/store/Shared/shared.selector.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/state/auth.actions */ "./src/app/auth/state/auth.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/loading-spinner/loading-spinner.component */ "./src/app/shared/components/loading-spinner/loading-spinner.component.ts");









function AppComponent_app_loading_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loading-spinner");
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r2, " ");
} }
class AppComponent {
    constructor(store) {
        this.store = store;
        this.title = 'ecom-ng-app';
    }
    ngOnInit() {
        this.showLoading = this.store.select(_store_Shared_shared_selector__WEBPACK_IMPORTED_MODULE_0__["getLoading"]);
        this.errorMessage = this.store.select(_store_Shared_shared_selector__WEBPACK_IMPORTED_MODULE_0__["getErrorMessage"]);
        this.store.dispatch(Object(_auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_2__["autoLogin"])());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 6, consts: [[4, "ngIf"], [1, "container"], [1, "row"], [1, "col-md-12"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_app_loading_spinner_1_Template, 1, 0, "app-loading-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx.showLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, ctx.errorMessage));
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _store_router_custom_serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/router/custom-serializer */ "./src/app/store/router/custom-serializer.ts");
/* harmony import */ var _services_AuthToken_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/AuthToken.interceptor */ "./src/app/services/AuthToken.interceptor.ts");
/* harmony import */ var _auth_state_auth_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/state/auth.effects */ "./src/app/auth/state/auth.effects.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/app.state */ "./src/app/store/app.state.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/components/loading-spinner/loading-spinner.component */ "./src/app/shared/components/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/ngrx-router-store.js");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_AuthToken_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthTokenInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_auth_state_auth_effects__WEBPACK_IMPORTED_MODULE_2__["AuthEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot(_store_app_state__WEBPACK_IMPORTED_MODULE_5__["appReducer"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production,
            }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_17__["StoreRouterConnectingModule"].forRoot({
                serializer: _store_router_custom_serializer__WEBPACK_IMPORTED_MODULE_0__["CustomSerializer"],
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_16__["LoadingSpinnerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_17__["StoreRouterConnectingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_16__["LoadingSpinnerComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_auth_state_auth_effects__WEBPACK_IMPORTED_MODULE_2__["AuthEffects"]]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot(_store_app_state__WEBPACK_IMPORTED_MODULE_5__["appReducer"]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                        logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production,
                    }),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_17__["StoreRouterConnectingModule"].forRoot({
                        serializer: _store_router_custom_serializer__WEBPACK_IMPORTED_MODULE_0__["CustomSerializer"],
                    }),
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_AuthToken_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthTokenInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/state/auth.actions.ts":
/*!********************************************!*\
  !*** ./src/app/auth/state/auth.actions.ts ***!
  \********************************************/
/*! exports provided: LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_START, SIGNUP_SUCCESS, AUTO_LOGIN_ACTION, LOGOUT_ACTION, loginStart, loginSuccess, signupStart, signupSuccess, autoLogin, autoLogout, dummyAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_START", function() { return LOGIN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_START", function() { return SIGNUP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_SUCCESS", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTO_LOGIN_ACTION", function() { return AUTO_LOGIN_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_ACTION", function() { return LOGOUT_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginStart", function() { return loginStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupStart", function() { return signupStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupSuccess", function() { return signupSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoLogin", function() { return autoLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoLogout", function() { return autoLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyAction", function() { return dummyAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const LOGIN_START = '[auth page] login start';
const LOGIN_SUCCESS = '[auth page] login Success';
const LOGIN_FAIL = '[auth page] login Fail';
const SIGNUP_START = '[auth page] signup start';
const SIGNUP_SUCCESS = '[auth page] signup success';
const AUTO_LOGIN_ACTION = '[auth page] auto login';
const LOGOUT_ACTION = '[auth page] logout';
const loginStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGIN_START, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGIN_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const signupStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGNUP_START, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const signupSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGNUP_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const autoLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AUTO_LOGIN_ACTION);
const autoLogout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGOUT_ACTION);
const dummyAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[dummy action]');


/***/ }),

/***/ "./src/app/auth/state/auth.effects.ts":
/*!********************************************!*\
  !*** ./src/app/auth/state/auth.effects.ts ***!
  \********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _store_Shared_shared_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../store/Shared/shared.actions */ "./src/app/store/Shared/shared.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/state/auth.actions.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











class AuthEffects {
    constructor(actions$, authService, store, router) {
        this.actions$ = actions$;
        this.authService = authService;
        this.store = store;
        this.router = router;
        this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["loginStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])((action) => {
                return this.authService.login(action.email, action.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
                    this.store.dispatch(Object(_store_Shared_shared_actions__WEBPACK_IMPORTED_MODULE_0__["setLoadingSpinner"])({ status: false }));
                    this.store.dispatch(Object(_store_Shared_shared_actions__WEBPACK_IMPORTED_MODULE_0__["setErrorMessage"])({ message: '' }));
                    const user = this.authService.formatUser(data);
                    this.authService.setUserInLocalStorage(user);
                    return Object(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"])({ user, redirect: true });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((errResp) => {
                    this.store.dispatch(Object(_store_Shared_shared_actions__WEBPACK_IMPORTED_MODULE_0__["setLoadingSpinner"])({ status: false }));
                    const errorMessage = this.authService.getErrorMessage(errResp.error.error.message);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(Object(_store_Shared_shared_actions__WEBPACK_IMPORTED_MODULE_0__["setErrorMessage"])({ message: errorMessage }));
                }));
            }));
        });
        this.loginRedirect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(...[_auth_actions__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"], _auth_actions__WEBPACK_IMPORTED_MODULE_2__["signupSuccess"]]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((action) => {
                this.store.dispatch(Object(_store_Shared_shared_actions__WEBPACK_IMPORTED_MODULE_0__["setErrorMessage"])({ message: '' }));
                if (action.redirect) {
                    this.router.navigate(['/']);
                }
            }));
        }, { dispatch: false });
        this.signUp$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["signupStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])((action) => {
                return this.authService.signUp(action.email, action.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
                    this.store.dispatch(Object(_store_Shared_shared_actions__WEBPACK_IMPORTED_MODULE_0__["setLoadingSpinner"])({ status: false }));
                    const user = this.authService.formatUser(data);
                    this.authService.setUserInLocalStorage(user);
                    return Object(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["signupSuccess"])({ user, redirect: true });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((errResp) => {
                    this.store.dispatch(Object(_store_Shared_shared_actions__WEBPACK_IMPORTED_MODULE_0__["setLoadingSpinner"])({ status: false }));
                    const errorMessage = this.authService.getErrorMessage(errResp.error.error.message);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(Object(_store_Shared_shared_actions__WEBPACK_IMPORTED_MODULE_0__["setErrorMessage"])({ message: errorMessage }));
                }));
            }));
        });
        this.autoLogin$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["autoLogin"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((action) => {
                const user = this.authService.getUserFromLocalStorage();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(Object(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"])({ user, redirect: false }));
            }));
        });
        this.logout$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_2__["autoLogout"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((action) => {
                this.authService.logout();
                this.router.navigate(['auth']);
            }));
        }, { dispatch: false });
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/state/auth.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/auth/state/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: AuthReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthReducer", function() { return AuthReducer; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/state/auth.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.state */ "./src/app/auth/state/auth.state.ts");



const _authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_auth_state__WEBPACK_IMPORTED_MODULE_2__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_0__["loginSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { user: action.user });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_0__["signupSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { user: action.user });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_0__["autoLogout"], (state) => {
    return Object.assign(Object.assign({}, state), { user: null });
}));
function AuthReducer(state, action) {
    return _authReducer(state, action);
}


/***/ }),

/***/ "./src/app/auth/state/auth.selector.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/state/auth.selector.ts ***!
  \*********************************************/
/*! exports provided: AUTH_STATE_NAME, isAuthenticated, getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_STATE_NAME", function() { return AUTH_STATE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuthenticated", function() { return isAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const AUTH_STATE_NAME = 'auth';
const getAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(AUTH_STATE_NAME);
const isAuthenticated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, (state) => {
    return state.user ? true : false;
});
const getToken = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, (state) => {
    return state.user ? state.user.userToken : null;
});


/***/ }),

/***/ "./src/app/auth/state/auth.state.ts":
/*!******************************************!*\
  !*** ./src/app/auth/state/auth.state.ts ***!
  \******************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    user: null,
};


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, token, localId, expirationDate) {
        this.email = email;
        this.token = token;
        this.localId = localId;
        this.expirationDate = expirationDate;
    }
    get expireDate() {
        return this.expirationDate;
    }
    get userToken() {
        return this.token;
    }
}


/***/ }),

/***/ "./src/app/posts/single-post/single-post.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/single-post/single-post.component.ts ***!
  \************************************************************/
/*! exports provided: SinglePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostComponent", function() { return SinglePostComponent; });
/* harmony import */ var _state_posts_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../state/posts.selector */ "./src/app/posts/state/posts.selector.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function SinglePostComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const postData_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Id: ", postData_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Title: ", postData_r1.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Description: ", postData_r1.description, "");
} }
const _c0 = function () { return ["/posts"]; };
class SinglePostComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.post = this.store.select(_state_posts_selector__WEBPACK_IMPORTED_MODULE_0__["getPostById"]);
    }
}
SinglePostComponent.ɵfac = function SinglePostComponent_Factory(t) { return new (t || SinglePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
SinglePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SinglePostComponent, selectors: [["app-single-post"]], decls: 7, vars: 5, consts: [[4, "ngIf"], [3, "routerLink"]], template: function SinglePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "PostDetails");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SinglePostComponent_div_2_Template, 7, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Back to posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.post));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3NpbmdsZS1wb3N0L3NpbmdsZS1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SinglePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-single-post',
                templateUrl: './single-post.component.html',
                styleUrls: ['./single-post.component.css'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/posts/state/posts.selector.ts":
/*!***********************************************!*\
  !*** ./src/app/posts/state/posts.selector.ts ***!
  \***********************************************/
/*! exports provided: POST_STATE_NAME, postsSelectors, getPosts, getPostEntities, getPostById, getCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_STATE_NAME", function() { return POST_STATE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsSelectors", function() { return postsSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostEntities", function() { return getPostEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostById", function() { return getPostById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCount", function() { return getCount; });
/* harmony import */ var _store_router_router_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../store/router/router.selector */ "./src/app/store/router/router.selector.ts");
/* harmony import */ var _posts_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.state */ "./src/app/posts/state/posts.state.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");



const POST_STATE_NAME = 'posts';
const getPostsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])(POST_STATE_NAME);
const postsSelectors = _posts_state__WEBPACK_IMPORTED_MODULE_1__["postsAdapter"].getSelectors();
const getPosts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getPostsState, postsSelectors.selectAll);
const getPostEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getPostsState, postsSelectors.selectEntities);
const getPostById = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getPostEntities, _store_router_router_selector__WEBPACK_IMPORTED_MODULE_0__["getCurrentRoute"], (posts, route) => {
    return posts ? posts[route.params['id']] : null;
});
const getCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getPostsState, (state) => state.count);


/***/ }),

/***/ "./src/app/posts/state/posts.state.ts":
/*!********************************************!*\
  !*** ./src/app/posts/state/posts.state.ts ***!
  \********************************************/
/*! exports provided: postsAdapter, initialState, sortByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsAdapter", function() { return postsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByName", function() { return sortByName; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js");

const postsAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    sortComparer: sortByName,
});
const initialState = postsAdapter.getInitialState({
    count: 0,
});
function sortByName(a, b) {
    const compare = a.title.localeCompare(b.title);
    if (compare > 0) {
        return -1;
    }
    if (compare < 0) {
        return 1;
    }
    return compare;
}


/***/ }),

/***/ "./src/app/services/AuthToken.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/services/AuthToken.interceptor.ts ***!
  \***************************************************/
/*! exports provided: AuthTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTokenInterceptor", function() { return AuthTokenInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_state_auth_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/state/auth.selector */ "./src/app/auth/state/auth.selector.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");





class AuthTokenInterceptor {
    constructor(store) {
        this.store = store;
    }
    intercept(req, next) {
        return this.store.select(_auth_state_auth_selector__WEBPACK_IMPORTED_MODULE_1__["getToken"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["exhaustMap"])((token) => {
            if (!token) {
                return next.handle(req);
            }
            let modifiedReq = req.clone({
                params: req.params.append('auth', token),
            });
            return next.handle(modifiedReq);
        }));
    }
}
AuthTokenInterceptor.ɵfac = function AuthTokenInterceptor_Factory(t) { return new (t || AuthTokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AuthTokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthTokenInterceptor, factory: AuthTokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthTokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_state_auth_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/state/auth.selector */ "./src/app/auth/state/auth.selector.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AuthGuard {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    canActivate(route, state) {
        return this.store.select(_auth_state_auth_selector__WEBPACK_IMPORTED_MODULE_2__["isAuthenticated"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((authenticate) => {
            if (!authenticate) {
                return this.router.createUrlTree(['auth']);
            }
            return true;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/state/auth.actions */ "./src/app/auth/state/auth.actions.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");







class AuthService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
    }
    login(email, password) {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].FIRBASE_API_KEY}`, { email, password, returnSecureToken: true });
    }
    signUp(email, password) {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].FIRBASE_API_KEY}`, { email, password, returnSecureToken: true });
    }
    formatUser(data) {
        const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
        const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__["User"](data.email, data.idToken, data.localId, expirationDate);
        return user;
    }
    getErrorMessage(message) {
        switch (message) {
            case 'EMAIL_NOT_FOUND':
                return 'Email Not Found';
            case 'INVALID_PASSWORD':
                return 'Invalid Password';
            case 'EMAIL_EXISTS':
                return 'Email already exists';
            default:
                return 'Unknown error occurred. Please try again';
        }
    }
    setUserInLocalStorage(user) {
        localStorage.setItem('userData', JSON.stringify(user));
        this.runTimeoutInterval(user);
    }
    runTimeoutInterval(user) {
        const todaysDate = new Date().getTime();
        const expirationDate = user.expireDate.getTime();
        const timeInterval = expirationDate - todaysDate;
        this.timeoutInterval = setTimeout(() => {
            this.store.dispatch(Object(_auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_3__["autoLogout"])());
            //logout functionality or get the refresh token
        }, timeInterval);
    }
    getUserFromLocalStorage() {
        const userDataString = localStorage.getItem('userData');
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            const expirationDate = new Date(userData.expirationDate);
            const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__["User"](userData.email, userData.token, userData.localId, expirationDate);
            this.runTimeoutInterval(user);
            return user;
        }
        return null;
    }
    logout() {
        localStorage.removeItem('userData');
        if (this.timeoutInterval) {
            clearTimeout(this.timeoutInterval);
            this.timeoutInterval = null;
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _auth_state_auth_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../auth/state/auth.selector */ "./src/app/auth/state/auth.selector.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/state/auth.actions */ "./src/app/auth/state/auth.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function () { return ["/auth"]; };
function HeaderComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/auth/signup"]; };
function HeaderComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
} }
function HeaderComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_18_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onLogout($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c2 = function () { return ["/"]; };
const _c3 = function () { return ["/posts"]; };
class HeaderComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.isAuthenticated = this.store.select(_auth_state_auth_selector__WEBPACK_IMPORTED_MODULE_0__["isAuthenticated"]);
    }
    onLogout(event) {
        event.preventDefault();
        this.store.dispatch(Object(src_app_auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_2__["autoLogout"])());
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 13, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["aria-current", "page", "href", "#", 1, "nav-link", "active", 3, "routerLink"], ["href", "#", 1, "nav-link", 3, "routerLink"], ["class", "nav-item", 4, "ngIf"], ["href", "#", 1, "nav-link", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HeaderComponent_li_14_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HeaderComponent_li_16_Template, 3, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HeaderComponent_li_18_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 5, ctx.isAuthenticated));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 7, ctx.isAuthenticated));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 9, ctx.isAuthenticated));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/loading-spinner/loading-spinner.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/loading-spinner.component.ts ***!
  \********************************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoadingSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 13, vars: 0, consts: [[1, "backdrop"], [1, "loading-spinner"], [1, "lds-roller"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Loading Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lds-roller[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #000;\n  margin: -4px 0 0 -4px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 20vw;\n  left: 40vw;\n  top: 30%;\n  z-index: 99;\n  background-color: #fff;\n  text-align: center;\n  padding: 20px;\n  border: 1px solid #aaa;\n}\n.backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 98;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSx3RUFBZ0U7VUFBaEUsZ0VBQWdFO0VBQ2hFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGO0FBUEE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZHMtcm9sbGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubGRzLXJvbGxlciBkaXYge1xuICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XG59XG4ubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgbWFyZ2luOiAtNHB4IDAgMCAtNHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICB0b3A6IDYzcHg7XG4gIGxlZnQ6IDYzcHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gIHRvcDogNjhweDtcbiAgbGVmdDogNTZweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgdG9wOiA3MXB4O1xuICBsZWZ0OiA0OHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICB0b3A6IDcycHg7XG4gIGxlZnQ6IDQwcHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcbiAgdG9wOiA3MXB4O1xuICBsZWZ0OiAzMnB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDI0cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gIHRvcDogNjNweDtcbiAgbGVmdDogMTdweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcbiAgdG9wOiA1NnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLmxvYWRpbmctc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIwdnc7XG4gIGxlZnQ6IDQwdnc7XG4gIHRvcDogMzAlO1xuICB6LWluZGV4OiA5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xufVxuXG4uYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDk4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-spinner',
                templateUrl: './loading-spinner.component.html',
                styleUrls: ['./loading-spinner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/store/Shared/shared.actions.ts":
/*!************************************************!*\
  !*** ./src/app/store/Shared/shared.actions.ts ***!
  \************************************************/
/*! exports provided: SET_LOADING_ACTION, SET_ERROR_MESSAGE, setLoadingSpinner, setErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING_ACTION", function() { return SET_LOADING_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERROR_MESSAGE", function() { return SET_ERROR_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoadingSpinner", function() { return setLoadingSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setErrorMessage", function() { return setErrorMessage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const SET_LOADING_ACTION = '[shared state] set loading spinner';
const SET_ERROR_MESSAGE = '[shared state] set error message';
const setLoadingSpinner = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_LOADING_ACTION, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setErrorMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_ERROR_MESSAGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/Shared/shared.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/Shared/shared.reducer.ts ***!
  \************************************************/
/*! exports provided: SharedReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedReducer", function() { return SharedReducer; });
/* harmony import */ var _shared_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.actions */ "./src/app/store/Shared/shared.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.state */ "./src/app/store/Shared/shared.state.ts");



const _sharedReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_shared_state__WEBPACK_IMPORTED_MODULE_2__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_shared_actions__WEBPACK_IMPORTED_MODULE_0__["setLoadingSpinner"], (state, action) => {
    return Object.assign(Object.assign({}, state), { showLoading: action.status });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_shared_actions__WEBPACK_IMPORTED_MODULE_0__["setErrorMessage"], (state, action) => {
    return Object.assign(Object.assign({}, state), { errorMessage: action.message });
}));
function SharedReducer(state, action) {
    return _sharedReducer(state, action);
}


/***/ }),

/***/ "./src/app/store/Shared/shared.selector.ts":
/*!*************************************************!*\
  !*** ./src/app/store/Shared/shared.selector.ts ***!
  \*************************************************/
/*! exports provided: SHARED_STATE_NAME, getLoading, getErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARED_STATE_NAME", function() { return SHARED_STATE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return getErrorMessage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const SHARED_STATE_NAME = 'shared';
const getSharedState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(SHARED_STATE_NAME);
const getLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSharedState, (state) => {
    return state.showLoading;
});
const getErrorMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getSharedState, (state) => {
    return state.errorMessage;
});


/***/ }),

/***/ "./src/app/store/Shared/shared.state.ts":
/*!**********************************************!*\
  !*** ./src/app/store/Shared/shared.state.ts ***!
  \**********************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    showLoading: false,
    errorMessage: '',
};


/***/ }),

/***/ "./src/app/store/app.state.ts":
/*!************************************!*\
  !*** ./src/app/store/app.state.ts ***!
  \************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _auth_state_auth_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth/state/auth.selector */ "./src/app/auth/state/auth.selector.ts");
/* harmony import */ var _Shared_shared_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shared/shared.selector */ "./src/app/store/Shared/shared.selector.ts");
/* harmony import */ var _Shared_shared_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shared/shared.reducer */ "./src/app/store/Shared/shared.reducer.ts");
/* harmony import */ var _auth_state_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../auth/state/auth.reducer */ "./src/app/auth/state/auth.reducer.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/ngrx-router-store.js");





const appReducer = {
    [_Shared_shared_selector__WEBPACK_IMPORTED_MODULE_1__["SHARED_STATE_NAME"]]: _Shared_shared_reducer__WEBPACK_IMPORTED_MODULE_2__["SharedReducer"],
    [_auth_state_auth_selector__WEBPACK_IMPORTED_MODULE_0__["AUTH_STATE_NAME"]]: _auth_state_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["AuthReducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["routerReducer"],
};


/***/ }),

/***/ "./src/app/store/router/custom-serializer.ts":
/*!***************************************************!*\
  !*** ./src/app/store/router/custom-serializer.ts ***!
  \***************************************************/
/*! exports provided: CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
class CustomSerializer {
    serialize(routerState) {
        let route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        const { url, root: { queryParams }, } = routerState;
        const { params } = route;
        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url, params, queryParams };
    }
}


/***/ }),

/***/ "./src/app/store/router/router.selector.ts":
/*!*************************************************!*\
  !*** ./src/app/store/router/router.selector.ts ***!
  \*************************************************/
/*! exports provided: getRouterState, getCurrentRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterState", function() { return getRouterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentRoute", function() { return getCurrentRoute; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const getRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('router');
const getCurrentRoute = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRouterState, (router) => {
    return router.state;
});


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    FIRBASE_API_KEY: 'AIzaSyAtUR5ZtxooTSe4kFfsA4OI2Vade9PRHAk',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sabyasachi/Documents/ecom-ng-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map