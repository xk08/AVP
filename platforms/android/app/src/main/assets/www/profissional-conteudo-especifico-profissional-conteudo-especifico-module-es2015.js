(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profissional-conteudo-especifico-profissional-conteudo-especifico-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo-especifico/profissional-conteudo-especifico.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-conteudo-especifico/profissional-conteudo-especifico.page.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-buttons>\r\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\r\n      <div>\r\n        <ion-title>Para te ajudar neste momento</ion-title>\r\n      </div>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n\r\n<ion-fab\r\n  vertical=\"bottom\"\r\n  horizontal=\"end\"\r\n  slot=\"fixed\"\r\n>\r\n  <ion-fab-button\r\n    routerLink=\"/emergencia/emergencia-utilizacao\"\r\n    routerDirection=\"forward\"\r\n    color=\"primary\"\r\n  >\r\n    S.O.S\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n\r\n\r\n\r\n<ion-content>\r\n\r\n\r\n  <ion-card\r\n    *ngFor=\"let texto of profissionalConteudoTexto\"\r\n    style=\"background-color:lightgray;\"\r\n    [routerLink]=\"['/menu/texto-detalhes', texto.id]\"\r\n  >\r\n    <ion-card-header *ngIf=\"!tituloTextoTela\">\r\n      <ion-card-title hidden></ion-card-title>\r\n    </ion-card-header>\r\n\r\n\r\n    <ion-card-header *ngIf=\"tituloTextoTela\">\r\n      <ion-card-title>{{ texto.tituloTexto }}</ion-card-title>\r\n    </ion-card-header>\r\n\r\n\r\n\r\n    <ion-card-content\r\n      *ngIf=\"descricaoTextoTela\"\r\n      style=\"text-align: center; font-size: 15pt;\"\r\n    >\r\n      “{{ texto.texto }}”\r\n    </ion-card-content>\r\n    <ion-card-content\r\n      *ngIf=\"!descricaoTextoTela\"\r\n      style=\"text-align: center;\"\r\n    >\r\n      Nenhum texto foi cadastrado até o momento\r\n    </ion-card-content>\r\n\r\n\r\n    <ion-card-header>\r\n      <ion-card-subtitle\r\n        *ngIf=\"!autorTextoTela\"\r\n        style=\"text-align: right;\"\r\n      >\r\n        Autor desconhecido\r\n      </ion-card-subtitle>\r\n      <ion-card-subtitle\r\n        *ngIf=\"autorTextoTela\"\r\n        style=\"text-align: right;\"\r\n      >\r\n        Autor: {{ texto.autorTexto }}\r\n      </ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"background-color: silver;\"\r\n      [routerLink]=\"['/menu/texto-detalhes', texto.id]\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n    </ion-item>\r\n\r\n\r\n  </ion-card>\r\n\r\n\r\n  <ion-card *ngFor=\"let imagem of profissionalConteudoImagem\">\r\n\r\n\r\n    <ion-card-content *ngIf=\"imagem.imagem\">\r\n      <img\r\n        src=\"{{imagem.imagem}}\"\r\n        width=\"320px\"\r\n        height=\"280px\"\r\n      >\r\n    </ion-card-content>\r\n    <ion-card-content *ngIf=\"!imagem.imagem\">\r\n      <ion-card-header style=\"font-size: 15pt; text-align: center;\">Imagem não encontrada</ion-card-header>\r\n    </ion-card-content>\r\n\r\n\r\n\r\n    <ion-card-header *ngIf=\"!imagem.tituloImagem\">\r\n      <ion-card-title style=\"text-align: center;\">Titulo não cadastrado</ion-card-title>\r\n    </ion-card-header>\r\n\r\n\r\n\r\n    <ion-card-header>\r\n      <ion-card-title style=\"text-align: center;\">{{imagem.tituloImagem}}</ion-card-title>\r\n    </ion-card-header>\r\n\r\n\r\n\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"background-color: silver;\"\r\n      [routerLink]=\"['/menu/imagem-detalhes', imagem.id]\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n\r\n\r\n  <ion-card>\r\n    <img src=\"../../../assets/img/abrirmente.PNG\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Video do Youtube</ion-card-subtitle>\r\n      <ion-card-title>Compreenda a sí mesmo</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      Compreenda A Si Mesmo E Ao Universo Com Esse Vídeo! Um vídeo para pararmos e refletirmos sobre\r\n      tudo aquilo que está a nossa volta e as crenças que temos sobre FOCO e PRESENÇA Depois desse\r\n      vídeo você vai saber a como aproveitar a vida muito mais!\r\n    </ion-card-content>\r\n\r\n\r\n\r\n\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"color: lightseagreen\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Assistir ao video completo</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Frase</ion-card-subtitle>\r\n      <ion-card-title>Familia</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      Amo minha família do jeito que é; pode não ser perfeita, mas o que importa é que nela sobram\r\n      amor e compreensão.\r\n    </ion-card-content>\r\n\r\n\r\n\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"color: lightseagreen\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n\r\n\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Frase</ion-card-subtitle>\r\n      <ion-card-title>Amigos</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      Enquanto alguns escolhem pessoas perfeitas, eu escolho as que me fazem bem.\r\n    </ion-card-content>\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"color: lightseagreen\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profissional_conteudo_especifico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profissional-conteudo-especifico.page */ "./src/app/pages/profissional-conteudo-especifico/profissional-conteudo-especifico.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _profissional_conteudo_especifico_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoEspecificoPage"]
    }
];
let ProfissionalConteudoEspecificoPageModule = class ProfissionalConteudoEspecificoPageModule {
};
ProfissionalConteudoEspecificoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_profissional_conteudo_especifico_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoEspecificoPage"]]
    })
], ProfissionalConteudoEspecificoPageModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service */ "./src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service.ts");
/* harmony import */ var src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/queroConversar/quero-conversar.service */ "./src/app/services/queroConversar/quero-conversar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service */ "./src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service.ts");








let ProfissionalConteudoEspecificoPage = class ProfissionalConteudoEspecificoPage {
    constructor(navctrl, auth, profissionalConteudoTextoService, profissionalConteudoImagemService, queroConversarService, route) {
        this.navctrl = navctrl;
        this.auth = auth;
        this.profissionalConteudoTextoService = profissionalConteudoTextoService;
        this.profissionalConteudoImagemService = profissionalConteudoImagemService;
        this.queroConversarService = queroConversarService;
        this.route = route;
    }
    ngOnInit() {
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.buscaDadosTexto(this.idUsuario);
        this.buscaDadosImagem(this.idUsuario);
    }
    buscaDadosTexto(idUsuario) {
        //Pegando os dados informados pelo usuário, sobre a sua situação
        this.listQueroConversar = this.queroConversarService.getTodo(this.idUsuario).subscribe(res => {
            this.avalicaoQueroConversar = res.avaliacao;
            this.avaliacaoGlobal = this.avalicaoQueroConversar;
            // Atribuindo na pesquisa
            this.profissionalConteudoTextoService
                .getTodosPoAvaliacao(this.avaliacaoGlobal)
                .subscribe(res => {
                this.profissionalConteudoTexto = res;
                // Percorrendo os dados da coleção
                res.forEach(x => {
                    this.tituloTextoTela = x.tituloTexto;
                    this.descricaoTextoTela = x.texto;
                    this.autorTextoTela = x.autorTexto;
                });
            });
        });
    }
    buscaDadosImagem(idUsuario) {
        //Pegando os dados informados pelo usuário, sobre a sua situação
        this.listQueroConversar = this.queroConversarService.getTodo(this.idUsuario).subscribe(res => {
            this.avalicaoQueroConversar = res.avaliacao;
            this.avaliacaoGlobal = this.avalicaoQueroConversar;
            // Atribuindo na pesquisa
            this.profissionalConteudoImagemService
                .getTodosPoAvaliacao(this.avaliacaoGlobal)
                .subscribe(res => {
                this.profissionalConteudoImagem = res;
                // Percorrendo os dados da coleção
                res.forEach(x => {
                    this.tituloImagemTela = x.tituloImagem;
                    this.maisInfoImagemTela = x.maisInfoImagem;
                    this.autorImagemTela = x.autorImagem;
                    this.imagem64Tela = x.imagem;
                });
            });
        });
    }
    ngOnDestroy() {
        this.listQueroConversar.unsubscribe();
        this.listProfissionalConteudoTexto.unsubscribe();
        this.listProfissionalConteudoImagem.unsubscribe();
    }
};
ProfissionalConteudoEspecificoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_4__["ProfissionalConteudoTextoService"] },
    { type: src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_7__["ProfissionalConteudoImagemService"] },
    { type: src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_5__["QueroConversarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
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
        src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_5__["QueroConversarService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], ProfissionalConteudoEspecificoPage);



/***/ })

}]);
//# sourceMappingURL=profissional-conteudo-especifico-profissional-conteudo-especifico-module-es2015.js.map