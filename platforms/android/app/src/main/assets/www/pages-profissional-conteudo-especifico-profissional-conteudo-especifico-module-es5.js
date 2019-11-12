(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profissional-conteudo-especifico-profissional-conteudo-especifico-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo-especifico/profissional-conteudo-especifico.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-conteudo-especifico/profissional-conteudo-especifico.page.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"success\">\r\n    <ion-buttons>\r\n      <ion-back-button defaultHref=\"menu/home\"></ion-back-button>\r\n      <div>\r\n        <ion-title>Para te ajudar neste momento</ion-title>\r\n      </div>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-fab\r\n  vertical=\"bottom\"\r\n  horizontal=\"end\"\r\n  slot=\"fixed\"\r\n>\r\n  <ion-fab-button\r\n    routerLink=\"/emergencia/emergencia-utilizacao\"\r\n    routerDirection=\"forward\"\r\n    color=\"success\"\r\n  >\r\n    S.O.S\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n<ion-content>\r\n  <ion-card\r\n    *ngFor=\"let texto of profissionalConteudoTexto\"\r\n    style=\"background-color: #FFFFC4;\"\r\n    [routerLink]=\"['/menu/texto-detalhes', texto.id]\"\r\n  >\r\n    <ion-card-header *ngIf=\"!tituloTextoTela\">\r\n      <ion-card-title hidden></ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-header *ngIf=\"tituloTextoTela\">\r\n      <ion-card-title>{{ texto.tituloTexto }}</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content\r\n      *ngIf=\"descricaoTextoTela\"\r\n      style=\"text-align: center; font-size: 15pt;\"\r\n    >\r\n      “{{ texto.texto }}”\r\n    </ion-card-content>\r\n    <ion-card-content\r\n      *ngIf=\"!descricaoTextoTela\"\r\n      style=\"text-align: center;\"\r\n    >\r\n      Nenhum texto foi cadastrado até o momento\r\n    </ion-card-content>\r\n\r\n    <ion-card-header>\r\n      <ion-card-subtitle\r\n        *ngIf=\"!autorTextoTela\"\r\n        style=\"text-align: right;\"\r\n      >\r\n        Autor desconhecido\r\n      </ion-card-subtitle>\r\n      <ion-card-subtitle\r\n        *ngIf=\"autorTextoTela\"\r\n        style=\"text-align: right;\"\r\n      >\r\n        Autor: {{ texto.autorTexto }}\r\n      </ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"background-color: silver;\"\r\n      [routerLink]=\"['/menu/texto-detalhes', texto.id]\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n    </ion-item>\r\n\r\n  </ion-card>\r\n\r\n  <ion-card\r\n    *ngFor=\"let imagem of profissionalConteudoImagem\"\r\n    style=\"background-color: #9AFFF1;\"\r\n  >\r\n    <ion-card-content *ngIf=\"imagem.imagem\">\r\n      <img\r\n        src=\"{{imagem.imagem}}\"\r\n        width=\"350px\"\r\n        height=\"320px\"\r\n      >\r\n    </ion-card-content>\r\n    <ion-card-content *ngIf=\"!imagem.imagem\">\r\n      <ion-card-header style=\"font-size: 15pt; text-align: center;\">Imagem não encontrada</ion-card-header>\r\n    </ion-card-content>\r\n\r\n    <ion-card-header *ngIf=\"!imagem.tituloImagem\">\r\n      <ion-card-title style=\"text-align: center;\">Titulo não cadastrado</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-header>\r\n      <ion-card-title style=\"text-align: center;\">{{imagem.tituloImagem}}</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"background-color: #FFFFC4;\"\r\n      [routerLink]=\"['/menu/imagem-detalhes', imagem.id]\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-card\r\n    *ngFor=\"let video of profissionalConteudoVideo\"\r\n    style=\"background-color: #D0BBFF;\"\r\n  >\r\n    <img src=\"../../../assets/img/abrirmente.PNG\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Video do Youtube</ion-card-subtitle>\r\n      <ion-card-title>{{video.tituloVideo}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>{{video.descricaoVideo}}</ion-card-content>\r\n\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"background-color: silver;\"\r\n      [routerLink]=\"['/menu/video-detalhes', video.id]\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Assistir ao video</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/profissional-conteudo-especifico/profissional-conteudo-especifico.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo-especifico/profissional-conteudo-especifico.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProfissionalConteudoEspecificoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalConteudoEspecificoPageModule", function() { return ProfissionalConteudoEspecificoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profissional_conteudo_especifico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profissional-conteudo-especifico.page */ "./src/app/pages/profissional-conteudo-especifico/profissional-conteudo-especifico.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _profissional_conteudo_especifico_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoEspecificoPage"]
    }
];
var ProfissionalConteudoEspecificoPageModule = /** @class */ (function () {
    function ProfissionalConteudoEspecificoPageModule() {
    }
    ProfissionalConteudoEspecificoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_profissional_conteudo_especifico_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoEspecificoPage"]]
        })
    ], ProfissionalConteudoEspecificoPageModule);
    return ProfissionalConteudoEspecificoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profissional-conteudo-especifico/profissional-conteudo-especifico.page.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo-especifico/profissional-conteudo-especifico.page.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zpc3Npb25hbC1jb250ZXVkby1lc3BlY2lmaWNvL3Byb2Zpc3Npb25hbC1jb250ZXVkby1lc3BlY2lmaWNvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profissional-conteudo-especifico/profissional-conteudo-especifico.page.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo-especifico/profissional-conteudo-especifico.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProfissionalConteudoEspecificoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalConteudoEspecificoPage", function() { return ProfissionalConteudoEspecificoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service */ "./src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service.ts");
/* harmony import */ var src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/queroConversar/quero-conversar.service */ "./src/app/services/queroConversar/quero-conversar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service */ "./src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service.ts");
/* harmony import */ var src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service */ "./src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service.ts");
/* harmony import */ var src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/usuarioCadastro/usuario-cadastro.service */ "./src/app/services/usuarioCadastro/usuario-cadastro.service.ts");










var ProfissionalConteudoEspecificoPage = /** @class */ (function () {
    function ProfissionalConteudoEspecificoPage(navctrl, auth, profissionalConteudoTextoService, profissionalConteudoImagemService, profissionalConteudoVideoService, queroConversarService, route, usuarioCadastro) {
        this.navctrl = navctrl;
        this.auth = auth;
        this.profissionalConteudoTextoService = profissionalConteudoTextoService;
        this.profissionalConteudoImagemService = profissionalConteudoImagemService;
        this.profissionalConteudoVideoService = profissionalConteudoVideoService;
        this.queroConversarService = queroConversarService;
        this.route = route;
        this.usuarioCadastro = usuarioCadastro;
    }
    ProfissionalConteudoEspecificoPage.prototype.ngOnInit = function () {
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.buscaDadosTexto(this.idUsuario);
        this.buscaDadosImagem(this.idUsuario);
        this.buscaDadosVideo(this.idUsuario);
    };
    ProfissionalConteudoEspecificoPage.prototype.buscaDadosTexto = function (idUsuario) {
        var _this = this;
        //Pegando os dados informados pelo usuário, sobre a sua situação
        this.queroConversarService.getTodo(this.idUsuario).subscribe(function (res) {
            _this.avalicaoQueroConversar = res.avaliacao;
            _this.avaliacaoGlobal = _this.avalicaoQueroConversar;
            // Atribuindo na pesquisa
            _this.profissionalConteudoTextoService
                .getTodosPoAvaliacao(_this.avaliacaoGlobal)
                .subscribe(function (res) {
                _this.profissionalConteudoTexto = res;
                // Percorrendo os dados da coleção
                res.forEach(function (x) {
                    _this.tituloTextoTela = x.tituloTexto;
                    _this.descricaoTextoTela = x.texto;
                    _this.autorTextoTela = x.autorTexto;
                });
            });
        });
    };
    ProfissionalConteudoEspecificoPage.prototype.buscaDadosImagem = function (idUsuario) {
        var _this = this;
        //Pegando os dados informados pelo usuário, sobre a sua situação
        this.queroConversarService.getTodo(this.idUsuario).subscribe(function (res) {
            _this.avalicaoQueroConversar = res.avaliacao;
            _this.avaliacaoGlobal = _this.avalicaoQueroConversar;
            // Atribuindo na pesquisa
            _this.profissionalConteudoImagemService
                .getTodosPoAvaliacao(_this.avaliacaoGlobal)
                .subscribe(function (res) {
                _this.profissionalConteudoImagem = res;
                // Percorrendo os dados da coleção
                res.forEach(function (x) {
                    _this.tituloImagemTela = x.tituloImagem;
                    _this.maisInfoImagemTela = x.maisInfoImagem;
                    _this.autorImagemTela = x.autorImagem;
                    _this.imagem64Tela = x.imagem;
                });
            });
        });
    };
    ProfissionalConteudoEspecificoPage.prototype.buscaDadosVideo = function (idUsuario) {
        var _this = this;
        //Pegando os dados informados pelo usuário, sobre a sua situação
        this.queroConversarService.getTodo(this.idUsuario).subscribe(function (res) {
            _this.avalicaoQueroConversar = res.avaliacao;
            _this.avaliacaoGlobal = _this.avalicaoQueroConversar;
            // Atribuindo na pesquisa
            _this.profissionalConteudoVideoService
                .getTodosPoAvaliacao(_this.avaliacaoGlobal)
                .subscribe(function (res) {
                _this.profissionalConteudoVideo = res;
                // Percorrendo os dados da coleção
                res.forEach(function (x) {
                    _this.tituloVideoTela = x.tituloVideo;
                    _this.descricaoVideoTela = x.descricaoVideo;
                    _this.linkVideoTela = x.linkVideo;
                    _this.autorVideoTela = x.autorVideo;
                });
            });
        });
    };
    ProfissionalConteudoEspecificoPage.prototype.ngOnDestroy = function () { };
    ProfissionalConteudoEspecificoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_4__["ProfissionalConteudoTextoService"] },
        { type: src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_7__["ProfissionalConteudoImagemService"] },
        { type: src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_8__["ProfissionalConteudoVideoService"] },
        { type: src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_5__["QueroConversarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioCadastroService"] }
    ]; };
    ProfissionalConteudoEspecificoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profissional-conteudo-especifico',
            template: __webpack_require__(/*! raw-loader!./profissional-conteudo-especifico.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo-especifico/profissional-conteudo-especifico.page.html"),
            styles: [__webpack_require__(/*! ./profissional-conteudo-especifico.page.scss */ "./src/app/pages/profissional-conteudo-especifico/profissional-conteudo-especifico.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_4__["ProfissionalConteudoTextoService"],
            src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_7__["ProfissionalConteudoImagemService"],
            src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_8__["ProfissionalConteudoVideoService"],
            src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_5__["QueroConversarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioCadastroService"]])
    ], ProfissionalConteudoEspecificoPage);
    return ProfissionalConteudoEspecificoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profissional-conteudo-especifico-profissional-conteudo-especifico-module-es5.js.map