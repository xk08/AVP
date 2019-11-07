(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imagem-detalhes-imagem-detalhes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/imagem-detalhes/imagem-detalhes.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/imagem-detalhes/imagem-detalhes.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar color=\"#FFFF\">\n    <ion-title style=\"text-align: center; font-size: 15pt\">Mais informações</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"menu/home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-card style=\"background-color: lightcyan;\">\n\n    <ion-card-header *ngIf=\"tituloImagemTela\">\n      <ion-card-subtitle style=\"font-size: 12pt;\">Titulo desta imagem</ion-card-subtitle>\n      <ion-card-title>{{tituloImagemTela}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-header *ngIf=\"!tituloImagemTela\">\n      <ion-card-subtitle style=\"font-size: 12pt;\">Titulo desta imagem</ion-card-subtitle>\n      <ion-card-title>Titulo não cadastrado</ion-card-title>\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card style=\"background-color: lightcyan;\">\n\n    <ion-card-header *ngIf=\"autorImagemTela\">\n      <ion-card-subtitle style=\"font-size: 12pt;\">Autoria da imagem</ion-card-subtitle>\n      <ion-card-title>{{autorImagemTela}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-header *ngIf=\"!autorImagemTela\">\n      <ion-card-subtitle style=\"font-size: 12pt;\">Autoria da imagem</ion-card-subtitle>\n      <ion-card-title>Autor não encontrado</ion-card-title>\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card style=\"background-color: lightcyan;\">\n\n    <ion-card-header *ngIf=\"maisInfoImagemTela\">\n      <ion-card-subtitle style=\"font-size: 12pt;\">Informações complementares</ion-card-subtitle>\n      <ion-card-title>{{maisInfoImagemTela}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-header *ngIf=\"!maisInfoImagemTela\">\n      <ion-card-subtitle style=\"font-size: 12pt;\">Informações complementares</ion-card-subtitle>\n      <ion-card-title>\n        Nenhuma informação foi cadastrada até o momento.\n      </ion-card-title>\n    </ion-card-header>\n\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/imagem-detalhes/imagem-detalhes.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/imagem-detalhes/imagem-detalhes.module.ts ***!
  \*****************************************************************/
/*! exports provided: ImagemDetalhesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagemDetalhesPageModule", function() { return ImagemDetalhesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _imagem_detalhes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imagem-detalhes.page */ "./src/app/pages/imagem-detalhes/imagem-detalhes.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _imagem_detalhes_page__WEBPACK_IMPORTED_MODULE_3__["ImagemDetalhesPage"]
    }
];
var ImagemDetalhesPageModule = /** @class */ (function () {
    function ImagemDetalhesPageModule() {
    }
    ImagemDetalhesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_imagem_detalhes_page__WEBPACK_IMPORTED_MODULE_3__["ImagemDetalhesPage"]]
        })
    ], ImagemDetalhesPageModule);
    return ImagemDetalhesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/imagem-detalhes/imagem-detalhes.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/imagem-detalhes/imagem-detalhes.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltYWdlbS1kZXRhbGhlcy9pbWFnZW0tZGV0YWxoZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/imagem-detalhes/imagem-detalhes.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/imagem-detalhes/imagem-detalhes.page.ts ***!
  \***************************************************************/
/*! exports provided: ImagemDetalhesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagemDetalhesPage", function() { return ImagemDetalhesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service */ "./src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service.ts");




var ImagemDetalhesPage = /** @class */ (function () {
    function ImagemDetalhesPage(route, profissionalImagemService) {
        this.route = route;
        this.profissionalImagemService = profissionalImagemService;
    }
    ImagemDetalhesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.idImagem = this.route.snapshot.params['id'];
        this.list = this.profissionalImagemService.getTodo(this.idImagem).subscribe(function (res) {
            _this.maisInfoImagemTela = res.maisInfoImagem;
            _this.tituloImagemTela = res.tituloImagem;
            _this.autorImagemTela = res.autorImagem;
            _this.imagemTela = res.imagem;
        });
    };
    ImagemDetalhesPage.prototype.ngOnDestroy = function () {
        this.list.unsubscribe();
    };
    ImagemDetalhesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoImagemService"] }
    ]; };
    ImagemDetalhesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-imagem-detalhes',
            template: __webpack_require__(/*! raw-loader!./imagem-detalhes.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/imagem-detalhes/imagem-detalhes.page.html"),
            styles: [__webpack_require__(/*! ./imagem-detalhes.page.scss */ "./src/app/pages/imagem-detalhes/imagem-detalhes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoImagemService"]])
    ], ImagemDetalhesPage);
    return ImagemDetalhesPage;
}());



/***/ })

}]);
//# sourceMappingURL=imagem-detalhes-imagem-detalhes-module-es5.js.map