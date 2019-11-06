(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["texto-detalhes-texto-detalhes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/texto-detalhes/texto-detalhes.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/texto-detalhes/texto-detalhes.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\r\n  <ion-toolbar color=\"#FFFF\">\r\n    <ion-title style=\"text-align: center; font-size: 15pt\">Mais informações</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"menu/home\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n\r\n  <ion-card style=\"background-color: lightcyan;\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle style=\"font-size: 12pt;\">Titulo do texto</ion-card-subtitle>\r\n      <ion-card-title>{{tituloTela}}</ion-card-title>\r\n    </ion-card-header>\r\n  </ion-card>\r\n\r\n  <ion-card style=\"background-color:lightgray;\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle style=\"font-size: 12pt;\">Autor do Texto</ion-card-subtitle>\r\n      <ion-card-title *ngIf=\"!autorTextoTela\">Autor não encontrado</ion-card-title>\r\n      <ion-card-title>{{autorTextoTela}}</ion-card-title>\r\n    </ion-card-header>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card style=\"background-color: lightsteelblue;\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle style=\"font-size: 12pt;\">Mais informações para você</ion-card-subtitle>\r\n      <ion-card-title *ngIf=\"!maisInfoTela\">\r\n        Nenhuma informação extra foi cadastrada.\r\n      </ion-card-title>\r\n      <ion-card-title>{{maisInfoTela}}</ion-card-title>\r\n    </ion-card-header>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/texto-detalhes/texto-detalhes.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/texto-detalhes/texto-detalhes.module.ts ***!
  \***************************************************************/
/*! exports provided: TextoDetalhesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextoDetalhesPageModule", function() { return TextoDetalhesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _texto_detalhes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./texto-detalhes.page */ "./src/app/pages/texto-detalhes/texto-detalhes.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _texto_detalhes_page__WEBPACK_IMPORTED_MODULE_3__["TextoDetalhesPage"]
    }
];
let TextoDetalhesPageModule = class TextoDetalhesPageModule {
};
TextoDetalhesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_texto_detalhes_page__WEBPACK_IMPORTED_MODULE_3__["TextoDetalhesPage"]]
    })
], TextoDetalhesPageModule);



/***/ }),

/***/ "./src/app/pages/texto-detalhes/texto-detalhes.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/texto-detalhes/texto-detalhes.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RleHRvLWRldGFsaGVzL3RleHRvLWRldGFsaGVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/texto-detalhes/texto-detalhes.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/texto-detalhes/texto-detalhes.page.ts ***!
  \*************************************************************/
/*! exports provided: TextoDetalhesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextoDetalhesPage", function() { return TextoDetalhesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service */ "./src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service.ts");




let TextoDetalhesPage = class TextoDetalhesPage {
    constructor(route, profissionalTextoService) {
        this.route = route;
        this.profissionalTextoService = profissionalTextoService;
    }
    ngOnInit() {
        this.idTexto = this.route.snapshot.params['id'];
        this.list = this.profissionalTextoService.getTodo(this.idTexto).subscribe(res => {
            this.maisInfoTela = res.maisInfoTexto;
            this.tituloTela = res.tituloTexto;
            this.autorTextoTela = res.autorTexto;
            this.textoTela = res.texto;
        });
    }
    ngOnDestroy() {
        this.list.unsubscribe();
    }
};
TextoDetalhesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoTextoService"] }
];
TextoDetalhesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-texto-detalhes',
        template: __webpack_require__(/*! raw-loader!./texto-detalhes.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/texto-detalhes/texto-detalhes.page.html"),
        styles: [__webpack_require__(/*! ./texto-detalhes.page.scss */ "./src/app/pages/texto-detalhes/texto-detalhes.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoTextoService"]])
], TextoDetalhesPage);



/***/ })

}]);
//# sourceMappingURL=texto-detalhes-texto-detalhes-module-es2015.js.map