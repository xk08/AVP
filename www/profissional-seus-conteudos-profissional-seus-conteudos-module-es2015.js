(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profissional-seus-conteudos-profissional-seus-conteudos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n\n    <ion-buttons>\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n      <div>\n        <ion-button\n          shape=\"round\"\n          fill=\"outline\"\n          (click)=\"direcionaPraTelaCadastro()\"\n        >\n          Novo conteúdo\n        </ion-button>\n      </div>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-header translucent>\n  <ion-toolbar translucent>\n    <ion-title style=\"text-align: center; font-size: 13pt\">Gerencie seus conteúdos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Looping dos textos -->\n  <ion-card\n    *ngFor=\"let texto of profissionalConteudoTexto\"\n    style=\"background-color:lightyellow;\"\n    [routerLink]=\"['/menu/profissional-conteudo/profissional-conteudo-texto', texto.id]\"\n  >\n    <ion-card-header>\n      <ion-card-subtitle>Frase cadastrada</ion-card-subtitle>\n      <ion-card-title>{{ texto.tituloTexto }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content style=\"text-align: center; font-size: 15pt;\">“{{ texto.texto }}”</ion-card-content>\n  </ion-card>\n\n  <!-- Looping das imagens -->\n  <ion-card\n    *ngFor=\"let imagem of profissionalConteudoImagem\"\n    style=\"background-color:lightcyan;\"\n    [routerLink]=\"['/menu/profissional-conteudo/profissional-conteudo-imagem', imagem.id]\"\n  >\n    <ion-card-header>\n      <ion-card-subtitle>Imagem cadastrada</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <img\n        src=\"{{imagem.imagem}}\"\n        width=\"540px\"\n        height=\"480px\"\n      >\n    </ion-card-content>\n\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center;\">{{imagem.tituloImagem}}</ion-card-title>\n    </ion-card-header>\n\n  </ion-card>\n\n  <!-- Looping dos Videos -->\n\n  <ion-card\n    *ngFor=\"let video of profissionalConteudoVideo\"\n    style=\"background-color:lightsteelblue;\"\n    [routerLink]=\"['/menu/profissional-conteudo/profissional-conteudo-video', video.id]\"\n  >\n    <ion-card-header>\n      <ion-card-subtitle>Video cadastrado</ion-card-subtitle>\n    </ion-card-header>\n\n    <!-- achar alguma forma de pegar a thumbs -->\n    <img src=\"../../../assets/img/abrirmente.PNG\">\n    <ion-card-header>\n      <ion-card-subtitle>Video do Youtube</ion-card-subtitle>\n      <ion-card-title>{{video.tituloVideo}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>{{video.descricaoVideo}}</ion-card-content>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProfissionalSeusConteudosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalSeusConteudosPageModule", function() { return ProfissionalSeusConteudosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profissional_seus_conteudos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profissional-seus-conteudos.page */ "./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _profissional_seus_conteudos_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalSeusConteudosPage"]
    }
];
let ProfissionalSeusConteudosPageModule = class ProfissionalSeusConteudosPageModule {
};
ProfissionalSeusConteudosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_profissional_seus_conteudos_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalSeusConteudosPage"]]
    })
], ProfissionalSeusConteudosPageModule);



/***/ }),

/***/ "./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button-inner {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-card {\n  background-color: #d8eff4;\n}\n\ndiv {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlzc2lvbmFsLXNldXMtY29udGV1ZG9zL0Q6XFx0Y2Mvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maXNzaW9uYWwtc2V1cy1jb250ZXVkb3NcXHByb2Zpc3Npb25hbC1zZXVzLWNvbnRldWRvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2Zpc3Npb25hbC1zZXVzLWNvbnRldWRvcy9wcm9maXNzaW9uYWwtc2V1cy1jb250ZXVkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zpc3Npb25hbC1zZXVzLWNvbnRldWRvcy9wcm9maXNzaW9uYWwtc2V1cy1jb250ZXVkb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLWlubmVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGVmZjQ7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiIsImJ1dHRvbi1pbm5lciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGVmZjQ7XG59XG5cbmRpdiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.ts ***!
  \***************************************************************************************/
/*! exports provided: ProfissionalSeusConteudosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalSeusConteudosPage", function() { return ProfissionalSeusConteudosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service */ "./src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service.ts");
/* harmony import */ var src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service */ "./src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service */ "./src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let ProfissionalSeusConteudosPage = class ProfissionalSeusConteudosPage {
    constructor(navctrl, auth, profissionalConteudoTextoService, profissionalConteudoImagemService, profissionalConteudoVideoService, route) {
        this.navctrl = navctrl;
        this.auth = auth;
        this.profissionalConteudoTextoService = profissionalConteudoTextoService;
        this.profissionalConteudoImagemService = profissionalConteudoImagemService;
        this.profissionalConteudoVideoService = profissionalConteudoVideoService;
        this.route = route;
    }
    ngOnInit() {
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.buscaDadosTexto();
        this.buscaDadosImagem();
        this.buscaDadosVideo();
    }
    buscaDadosTexto() {
        this.profissionalConteudoTextoService.getTodos().subscribe(res => {
            this.profissionalConteudoTexto = res;
            // Percorrendo os dados da coleção
            res.forEach(x => {
                this.tituloTextoTela = x.tituloTexto;
                this.descricaoTextoTela = x.texto;
                this.autorTextoTela = x.autorTexto;
            });
        });
    }
    buscaDadosImagem() {
        //Pegando os dados informados pelo usuário, sobre a sua situação
        this.profissionalConteudoImagemService.getTodos().subscribe(res => {
            this.profissionalConteudoImagem = res;
            res.forEach(x => {
                this.tituloImagemTela = x.tituloImagem;
                this.maisInfoImagemTela = x.maisInfoImagem;
                this.autorImagemTela = x.autorImagem;
                this.imagem64Tela = x.imagem;
            });
        });
    }
    buscaDadosVideo() {
        this.profissionalConteudoVideoService
            .getTodos()
            .subscribe(res => {
            this.profissionalConteudoVideo = res;
            res.forEach(x => {
                this.tituloVideoTela = x.tituloVideo;
                this.descricaoVideoTela = x.descricaoVideo;
                this.linkVideoTela = x.linkVideo;
                this.autorVideoTela = x.autorVideo;
            });
        });
    }
    ngOnDestroy() {
        this.listProfissionalConteudoTexto.unsubscribe();
        this.listProfissionalConteudoImagem.unsubscribe();
        this.listProfissionalConteudoVideo.unsubscribe();
    }
    direcionaPraTelaCadastro() {
        this.navctrl.navigateForward('/menu/profissional-conteudo/profissional-conteudo-texto');
    }
};
ProfissionalSeusConteudosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoTextoService"] },
    { type: src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_4__["ProfissionalConteudoImagemService"] },
    { type: src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_6__["ProfissionalConteudoVideoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
ProfissionalSeusConteudosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profissional-seus-conteudos',
        template: __webpack_require__(/*! raw-loader!./profissional-seus-conteudos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.html"),
        styles: [__webpack_require__(/*! ./profissional-seus-conteudos.page.scss */ "./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
        src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoTextoService"],
        src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_4__["ProfissionalConteudoImagemService"],
        src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_6__["ProfissionalConteudoVideoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], ProfissionalSeusConteudosPage);



/***/ })

}]);
//# sourceMappingURL=profissional-seus-conteudos-profissional-seus-conteudos-module-es2015.js.map