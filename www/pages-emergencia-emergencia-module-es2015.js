(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-emergencia-emergencia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia/emergencia.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/emergencia/emergencia.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"menu/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Aqui você encontra ajuda</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"top\">\r\n\r\n      <ion-tab-button\r\n        tab=\"emergencia-utilizacao\"\r\n        (click)=\"emergenciaUSelected()\"\r\n      >\r\n        <ion-icon name=\"ios-eye\"></ion-icon>\r\n        <ion-label>Visualizar</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button\r\n        tab=\"emergencia-cadastro\"\r\n        (click)=\"emergenciaCSelected()\"\r\n      >\r\n        <ion-icon name=\"ios-add-circle\"></ion-icon>\r\n        <ion-label>Cadastrar</ion-label>\r\n      </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/emergencia/emergencia.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/emergencia/emergencia.module.ts ***!
  \*******************************************************/
/*! exports provided: EmergenciaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergenciaPageModule", function() { return EmergenciaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _emergencia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emergencia.page */ "./src/app/pages/emergencia/emergencia.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _emergencia_page__WEBPACK_IMPORTED_MODULE_3__["EmergenciaPage"],
        children: [
            {
                path: 'emergencia-cadastro',
                loadChildren: '../emergencia-cadastro/emergencia-cadastro.module#EmergenciaCadastroPageModule'
            },
            {
                path: 'emergencia-cadastro/:id',
                loadChildren: '../emergencia-cadastro/emergencia-cadastro.module#EmergenciaCadastroPageModule'
            },
            {
                path: 'emergencia-utilizacao',
                loadChildren: '../emergencia-utilizacao/emergencia-utilizacao.module#EmergenciaUtilizacaoPageModule'
            },
            {
                path: '',
                redirectTo: '/emergencia/emergencia-cadastro',
                pathMatch: 'full'
            }
        ]
    }
];
let EmergenciaPageModule = class EmergenciaPageModule {
};
EmergenciaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_emergencia_page__WEBPACK_IMPORTED_MODULE_3__["EmergenciaPage"]]
    })
], EmergenciaPageModule);



/***/ }),

/***/ "./src/app/pages/emergencia/emergencia.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/emergencia/emergencia.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtZXJnZW5jaWEvZW1lcmdlbmNpYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/emergencia/emergencia.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/emergencia/emergencia.page.ts ***!
  \*****************************************************/
/*! exports provided: EmergenciaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergenciaPage", function() { return EmergenciaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmergenciaPage = class EmergenciaPage {
    constructor() { }
    ngOnInit() { }
    emergenciaUSelected() { }
    emergenciaCSelected() { }
};
EmergenciaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emergencia',
        template: __webpack_require__(/*! raw-loader!./emergencia.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia/emergencia.page.html"),
        styles: [__webpack_require__(/*! ./emergencia.page.scss */ "./src/app/pages/emergencia/emergencia.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EmergenciaPage);



/***/ })

}]);
//# sourceMappingURL=pages-emergencia-emergencia-module-es2015.js.map