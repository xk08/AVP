(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-detalhes-video-detalhes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/video-detalhes/video-detalhes.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/video-detalhes/video-detalhes.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar color=\"tertiary\" >\n    <ion-title style=\"text-align: center; font-size: 15pt\">Mais informações</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"menu/home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-card style=\"background-color: #a695cc;\">\n    <ion-card-header>\n      <ion-card-subtitle style=\"font-size: 12pt;\">Titulo do video</ion-card-subtitle>\n      <ion-card-title>{{tituloVideoTela}}</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card style=\"background-color:#d0bbff\n;\">\n    <ion-card-header>\n      <ion-card-subtitle style=\"font-size: 12pt;\">Autoria do video</ion-card-subtitle>\n      <ion-card-title *ngIf=\"!autorVideoTela\">Autor não encontrado</ion-card-title>\n      <ion-card-title *ngIf=\"autorVideoTela\">{{autorVideoTela}}</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card style=\"background-color: #d9c8ff;\">\n    <ion-card-header>\n      <ion-card-subtitle style=\"font-size: 12pt;\">Descrição complementar do video</ion-card-subtitle>\n      <ion-card-title *ngIf=\"!descricaoVideoTela\">\n        Nenhuma informação extra foi encontrada.\n      </ion-card-title>\n      <ion-card-title *ngIf=\"descricaoVideoTela\">{{descricaoVideoTela}}</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card style=\"background-color: #e2d6ff;\">\n    <ion-card-header>\n      <ion-card-subtitle style=\"font-size: 12pt;\">URL do video</ion-card-subtitle>\n      <ion-card-title *ngIf=\"!urlVideoTela\">Nenhuma URL  foi encontrada.</ion-card-title>\n      <ion-card-title *ngIf=\"urlVideoTela\">{{urlVideoTela}}</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/video-detalhes/video-detalhes.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/video-detalhes/video-detalhes.module.ts ***!
  \***************************************************************/
/*! exports provided: VideoDetalhesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetalhesPageModule", function() { return VideoDetalhesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _video_detalhes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-detalhes.page */ "./src/app/pages/video-detalhes/video-detalhes.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _video_detalhes_page__WEBPACK_IMPORTED_MODULE_3__["VideoDetalhesPage"]
    }
];
let VideoDetalhesPageModule = class VideoDetalhesPageModule {
};
VideoDetalhesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_video_detalhes_page__WEBPACK_IMPORTED_MODULE_3__["VideoDetalhesPage"]]
    })
], VideoDetalhesPageModule);



/***/ }),

/***/ "./src/app/pages/video-detalhes/video-detalhes.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/video-detalhes/video-detalhes.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZGVvLWRldGFsaGVzL3ZpZGVvLWRldGFsaGVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/video-detalhes/video-detalhes.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/video-detalhes/video-detalhes.page.ts ***!
  \*************************************************************/
/*! exports provided: VideoDetalhesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetalhesPage", function() { return VideoDetalhesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service */ "./src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service.ts");




let VideoDetalhesPage = class VideoDetalhesPage {
    constructor(route, profissionalVideoService) {
        this.route = route;
        this.profissionalVideoService = profissionalVideoService;
    }
    ngOnInit() {
        this.idVideo = this.route.snapshot.params['id'];
        this.list = this.profissionalVideoService.getTodo(this.idVideo).subscribe(res => {
            this.descricaoVideoTela = res.descricaoVideo;
            this.tituloVideoTela = res.tituloVideo;
            this.autorVideoTela = res.autorVideo;
            this.urlVideoTela = res.linkVideo;
        });
    }
    ngOnDestroy() {
        this.list.unsubscribe();
    }
};
VideoDetalhesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoVideoService"] }
];
VideoDetalhesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-detalhes',
        template: __webpack_require__(/*! raw-loader!./video-detalhes.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/video-detalhes/video-detalhes.page.html"),
        styles: [__webpack_require__(/*! ./video-detalhes.page.scss */ "./src/app/pages/video-detalhes/video-detalhes.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoVideoService"]])
], VideoDetalhesPage);



/***/ })

}]);
//# sourceMappingURL=video-detalhes-video-detalhes-module-es2015.js.map