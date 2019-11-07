(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profissional-conteudo-profissional-conteudo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo/profissional-conteudo.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-conteudo/profissional-conteudo.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n\n    <ion-buttons>\n      <ion-back-button defaultHref=\"menu/profissional-todos-conteudos\"></ion-back-button>\n      <div>\n        <ion-title>Cadastro de conteúdos</ion-title>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n\n      <ion-tab-button\n        tab=\"profissional-conteudo-texto\"\n        (click)=\"profissionalConteudoTexto()\"\n      >\n        <ion-icon name=\"ios-text\"></ion-icon>\n        <ion-label>Texto</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button\n        tab=\"profissional-conteudo-imagem\"\n        (click)=\"profissionalConteudoImagem()\"\n      >\n        <ion-icon name=\"ios-images\"></ion-icon>\n        <ion-label>Imagem</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button\n        tab=\"profissional-conteudo-video\"\n        (click)=\"profissionalConteudoVideo()\"\n      >\n        <ion-icon name=\"ios-videocam\"></ion-icon>\n        <ion-label>Video</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profissional-conteudo/profissional-conteudo.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo/profissional-conteudo.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProfissionalConteudoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalConteudoPageModule", function() { return ProfissionalConteudoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profissional_conteudo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profissional-conteudo.page */ "./src/app/pages/profissional-conteudo/profissional-conteudo.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _profissional_conteudo_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoPage"],
        children: [
            {
                path: 'profissional-conteudo-texto',
                loadChildren: '../profissional-conteudo-texto/profissional-conteudo-texto.module#ProfissionalConteudoTextoPageModule'
            },
            {
                path: 'profissional-conteudo-texto/:id',
                loadChildren: '../profissional-conteudo-texto/profissional-conteudo-texto.module#ProfissionalConteudoTextoPageModule'
            },
            {
                path: 'profissional-conteudo-imagem',
                loadChildren: '../profissional-conteudo-imagem/profissional-conteudo-imagem.module#ProfissionalConteudoImagemPageModule'
            },
            {
                path: 'profissional-conteudo-imagem/:id',
                loadChildren: '../profissional-conteudo-imagem/profissional-conteudo-imagem.module#ProfissionalConteudoImagemPageModule'
            },
            {
                path: 'profissional-conteudo-video',
                loadChildren: '../profissional-conteudo-video/profissional-conteudo-video.module#ProfissionalConteudoVideoPageModule'
            },
            {
                path: 'profissional-conteudo-video/:id',
                loadChildren: '../profissional-conteudo-video/profissional-conteudo-video.module#ProfissionalConteudoVideoPageModule'
            },
            {
                path: '',
                redirectTo: '/menu/profissional-conteudo/profissional-conteudo-texto',
                pathMatch: 'full'
            }
        ]
    }
];
let ProfissionalConteudoPageModule = class ProfissionalConteudoPageModule {
};
ProfissionalConteudoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_profissional_conteudo_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoPage"]]
    })
], ProfissionalConteudoPageModule);



/***/ }),

/***/ "./src/app/pages/profissional-conteudo/profissional-conteudo.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo/profissional-conteudo.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zpc3Npb25hbC1jb250ZXVkby9wcm9maXNzaW9uYWwtY29udGV1ZG8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profissional-conteudo/profissional-conteudo.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo/profissional-conteudo.page.ts ***!
  \***************************************************************************/
/*! exports provided: ProfissionalConteudoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalConteudoPage", function() { return ProfissionalConteudoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfissionalConteudoPage = class ProfissionalConteudoPage {
    constructor() { }
    ngOnInit() { }
    profissionalConteudoTexto() { }
    profissionalConteudoImagem() { }
    profissionalConteudoVideo() { }
};
ProfissionalConteudoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profissional-conteudo',
        template: __webpack_require__(/*! raw-loader!./profissional-conteudo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo/profissional-conteudo.page.html"),
        styles: [__webpack_require__(/*! ./profissional-conteudo.page.scss */ "./src/app/pages/profissional-conteudo/profissional-conteudo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProfissionalConteudoPage);



/***/ })

}]);
//# sourceMappingURL=profissional-conteudo-profissional-conteudo-module-es2015.js.map