(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emergencia-utilizacao-emergencia-utilizacao-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <!-- Deixa responsivo -->\r\n      <ion-col\r\n        size-sm=\"8\"\r\n        size-md=\"12\"\r\n        size-lg=\"3\"\r\n        size-xl=\"3\"\r\n      >\r\n\r\n        <form #form=\"ngForm\">\r\n\r\n          <ion-text text-align=\"justify-content-center\">Número de pessoas proximas a você</ion-text>\r\n\r\n          <!-- PRIMEIRO NÚMERO -->\r\n\r\n          <ion-title>\r\n            <ion-label>Foto que você gosta e admira</ion-label>\r\n          </ion-title>\r\n\r\n          <ion-item *ngFor=\"let emergencia of listEmergenciaCadastro ; let index = index\">\r\n            {{index}}Numero 01: {{emergencia.primeiroNumero}}\r\n            {{index}} Número 02: {{emergencia.segundoNumero}}\r\n            {{index}} Frase: {{emergencia.frase}}\r\n            <img [src]=\"emergencia.foto\">\r\n          </ion-item>\r\n\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EmergenciaUtilizacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergenciaUtilizacaoPageModule", function() { return EmergenciaUtilizacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _emergencia_utilizacao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emergencia-utilizacao.page */ "./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _emergencia_utilizacao_page__WEBPACK_IMPORTED_MODULE_3__["EmergenciaUtilizacaoPage"]
    }
];
var EmergenciaUtilizacaoPageModule = /** @class */ (function () {
    function EmergenciaUtilizacaoPageModule() {
    }
    EmergenciaUtilizacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_emergencia_utilizacao_page__WEBPACK_IMPORTED_MODULE_3__["EmergenciaUtilizacaoPage"]]
        })
    ], EmergenciaUtilizacaoPageModule);
    return EmergenciaUtilizacaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtZXJnZW5jaWEtdXRpbGl6YWNhby9lbWVyZ2VuY2lhLXV0aWxpemFjYW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.ts ***!
  \***************************************************************************/
/*! exports provided: EmergenciaUtilizacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergenciaUtilizacaoPage", function() { return EmergenciaUtilizacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emergenciaCadastro/emergencia-cadastro.service */ "./src/app/services/emergenciaCadastro/emergencia-cadastro.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EmergenciaUtilizacaoPage = /** @class */ (function () {
    function EmergenciaUtilizacaoPage(emergenciaCadastroService, router) {
        this.emergenciaCadastroService = emergenciaCadastroService;
        this.router = router;
        this.listEmergenciaCadastro = new Array();
    }
    EmergenciaUtilizacaoPage.prototype.ngOnInit = function () {
        var _this = this;
        //Achar uma forma de pegar só 1 index
        this.list = this.emergenciaCadastroService.getTodos().subscribe(function (res) {
            _this.listEmergenciaCadastro = res;
        });
    };
    EmergenciaUtilizacaoPage.ctorParameters = function () { return [
        { type: src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_2__["EmergenciaCadastroService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    EmergenciaUtilizacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emergencia-utilizacao',
            template: __webpack_require__(/*! raw-loader!./emergencia-utilizacao.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.html"),
            styles: [__webpack_require__(/*! ./emergencia-utilizacao.page.scss */ "./src/app/pages/emergencia-utilizacao/emergencia-utilizacao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_2__["EmergenciaCadastroService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmergenciaUtilizacaoPage);
    return EmergenciaUtilizacaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=emergencia-utilizacao-emergencia-utilizacao-module-es5.js.map