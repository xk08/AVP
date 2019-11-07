(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profissional-conteudo-video-profissional-conteudo-video-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo-video/profissional-conteudo-video.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-conteudo-video/profissional-conteudo-video.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header translucent>\r\n  <ion-toolbar color=\"#FFFF\">\r\n    <ion-title style=\"text-align: center; font-size: 12pt\">Divulgue uma frase de apoio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <!-- Deixa responsivo -->\r\n      <ion-col\r\n        size-sm=\"8\"\r\n        size-md=\"12\"\r\n        size-lg=\"3\"\r\n        size-xl=\"3\"\r\n      >\r\n        <form #form=\"ngForm\">\r\n          <ion-card>\r\n            <ion-card-header style=\"background-color: lightsteelblue;\">\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">\r\n                Direcione um video a alguém que precisa de ajuda\r\n              </ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"ios-bulb\"\r\n                color=\"dark\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                name=\"video\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.linkVideo\"\r\n                required\r\n                rows=\"2\"\r\n                cols=\"8\"\r\n                placeholder=\"Cole aqui o endereço (URL) do video...\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n\r\n\r\n\r\n            <!-- Pré visualização -->\r\n            <ion-card>\r\n              <ion-card-header style=\"background-color: lightsteelblue;\">\r\n                <ion-card-title style=\"font-size: 17px; text-align: center;\">Pré visualização do video escolhido</ion-card-title>\r\n              </ion-card-header>\r\n\r\n\r\n            </ion-card>\r\n          </ion-card>\r\n\r\n\r\n\r\n          <ion-item\r\n            href\r\n            class=\"activated\"\r\n            color=\"primary\"\r\n          >\r\n            <ion-toggle\r\n              [(ngModel)]=\"mostraMaisInfo\"\r\n              (ionChange)=\"changeMaisInfo()\"\r\n              slot=\"end\"\r\n              name=\"maisInfo\"\r\n            ></ion-toggle>\r\n            <ion-label class=\"ion-text-center\">Informações complementares</ion-label>\r\n          </ion-item>\r\n\r\n\r\n\r\n          <ion-card\r\n            style=\"background-color: lightsteelblue;\"\r\n            *ngIf=\"mostraMaisInfo\"\r\n          >\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"add\"\r\n                slot=\"start\"\r\n                color=\"primary\"\r\n              >\r\n              </ion-icon>\r\n              <ion-input\r\n                type=\"text\"\r\n                name=\"tituloVideo\"\r\n                placeholder=\"Titulo do Video\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.tituloVideo\"\r\n                required\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n\r\n\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"add\"\r\n                slot=\"start\"\r\n                color=\"primary\"\r\n              >\r\n              </ion-icon>\r\n              <ion-input\r\n                type=\"text\"\r\n                name=\"autorVideo\"\r\n                placeholder=\"Autor do video\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.autorVideo\"\r\n                required\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n\r\n\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"add\"\r\n                color=\"primary\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                name=\"descricaoVideo\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.descricaoVideo\"\r\n                required\r\n                rows=\"2\"\r\n                cols=\"5\"\r\n                placeholder=\"Informações complementares sobre o video...\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <ion-item\r\n            href\r\n            class=\"activated\"\r\n            color=\"primary\"\r\n          >\r\n            <ion-toggle\r\n              [(ngModel)]=\"mostraFiltro\"\r\n              (ionChange)=\"changeFiltro()\"\r\n              slot=\"end\"\r\n              name=\"filtro\"\r\n            ></ion-toggle>\r\n            <ion-label class=\"ion-text-center\">Filtro de Conteúdos</ion-label>\r\n          </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <ion-card *ngIf=\"mostraFiltro\">\r\n            <ion-card-header style=\"background-color: lightsteelblue;\">\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Faixa etária destinada</ion-card-title>\r\n            </ion-card-header>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <ion-radio-group\r\n              [(ngModel)]=\"todas.idade\"\r\n              name=\"selecionaIdade\"\r\n            >\r\n              <ion-item>\r\n                <ion-label>8 a 12 anos</ion-label>\r\n                <ion-radio\r\n                  name=\"8a12\"\r\n                  value=\"8 a 12\"\r\n                  slot=\"start\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <ion-item>\r\n                <ion-label>13 a 17 anos</ion-label>\r\n                <ion-radio\r\n                  name=\"13a17\"\r\n                  value=\"13 a 17\"\r\n                  slot=\"start\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <ion-item>\r\n                <ion-label>18 a 35 anos</ion-label>\r\n                <ion-radio\r\n                  name=\"18a35\"\r\n                  value=\"18 a 35\"\r\n                  slot=\"start\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <ion-card-header style=\"background-color: lightsteelblue;\">\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Nível de emergência</ion-card-title>\r\n            </ion-card-header>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <ion-radio-group\r\n              [(ngModel)]=\"todas.nivelEmergencia\"\r\n              name=\"selecionaEmergencia\"\r\n            >\r\n              <ion-item>\r\n                <ion-label>Normal</ion-label>\r\n                <ion-radio\r\n                  name=\"normal\"\r\n                  value=\"normal\"\r\n                  slot=\"start\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <ion-item>\r\n                <ion-label>Preocupante</ion-label>\r\n                <ion-radio\r\n                  name=\"Preocupante\"\r\n                  value=\"preocupante\"\r\n                  slot=\"start\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <ion-item>\r\n                <ion-label>Urgente</ion-label>\r\n                <ion-radio\r\n                  name=\"urgente\"\r\n                  value=\"urgente\"\r\n                  slot=\"start\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <ion-card-header style=\"background-color: lightsteelblue;\">\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Avaliação do usuário</ion-card-title>\r\n            </ion-card-header>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <ion-row>\r\n              <ion-item\r\n                *ngFor=\"let star of stars; let i = index\"\r\n                tappable\r\n                (click)=\"starClicked(i)\"\r\n                [(ngModel)]=\"todas.avaliacao\"\r\n                name=\"avaliacao\"\r\n              >\r\n                <ion-icon\r\n                  [name]=\"star\"\r\n                  color=\"primary\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <ion-button\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            class=\"login-button\"\r\n            (click)=\"saveTodo()\"\r\n            color=\"dark\"\r\n          >\r\n            Criar conteúdo\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/profissional-conteudo-video/profissional-conteudo-video.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo-video/profissional-conteudo-video.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProfissionalConteudoVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalConteudoVideoPageModule", function() { return ProfissionalConteudoVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profissional_conteudo_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profissional-conteudo-video.page */ "./src/app/pages/profissional-conteudo-video/profissional-conteudo-video.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _profissional_conteudo_video_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoVideoPage"]
    }
];
let ProfissionalConteudoVideoPageModule = class ProfissionalConteudoVideoPageModule {
};
ProfissionalConteudoVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_profissional_conteudo_video_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoVideoPage"]]
    })
], ProfissionalConteudoVideoPageModule);



/***/ }),

/***/ "./src/app/pages/profissional-conteudo-video/profissional-conteudo-video.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo-video/profissional-conteudo-video.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zpc3Npb25hbC1jb250ZXVkby12aWRlby9wcm9maXNzaW9uYWwtY29udGV1ZG8tdmlkZW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profissional-conteudo-video/profissional-conteudo-video.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo-video/profissional-conteudo-video.page.ts ***!
  \***************************************************************************************/
/*! exports provided: ProfissionalConteudoVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalConteudoVideoPage", function() { return ProfissionalConteudoVideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service */ "./src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service.ts");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__);








let ProfissionalConteudoVideoPage = class ProfissionalConteudoVideoPage {
    constructor(route, loadingController, conteudoVideoService, navCtrl, overlay, auth) {
        this.route = route;
        this.loadingController = loadingController;
        this.conteudoVideoService = conteudoVideoService;
        this.navCtrl = navCtrl;
        this.overlay = overlay;
        this.auth = auth;
        //Refernete ao ratebar
        this.numStars = 5;
        this.valor = 0;
        this.ionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stars = [];
        this.todas = {
            idUsuario: '',
            tituloVideo: '',
            autorVideo: '',
            linkVideo: '',
            descricaoVideo: '',
            idade: '',
            nivelEmergencia: '',
            avaliacao: null
        };
    }
    changeFiltro() {
        console.log(this.mostraMaisInfo);
    }
    changeMaisInfo() {
        console.log(this.mostraFiltro);
    }
    //RatebarStar
    calc() {
        this.stars = [];
        let tmp = this.valor;
        for (let i = 0; i < this.numStars; i++, tmp--) {
            if (tmp >= 1)
                this.stars.push('star');
            else if (tmp > 0 && tmp < 1)
                this.stars.push('star-half');
            else
                this.stars.push('star-outline');
        }
    }
    starClicked(index) {
        this.valor = index + 1;
        this.ionClick.emit(this.valor);
        this.calc();
        this.geral = this.valor;
    }
    ngOnInit() {
        this.calc();
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.idConteudoVideo = this.route.snapshot.params['id']; //Pegando o id para uma futura edição
        if (this.idConteudoVideo) {
            this.loadTodo();
        }
    }
    loadTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Carregando seus dados, aguarde.'
            });
            yield loading.present();
            this.conteudoVideoService.getTodo(this.idConteudoVideo).subscribe(res => {
                loading.dismiss();
                this.todas = res;
            });
        });
    }
    saveTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Salvando o video cadastrado'
            });
            yield loading.present();
            if (this.idConteudoVideo) {
                /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
                this.todas.avaliacao = this.geral;
                this.conteudoVideoService.updateTodo(this.todas, this.idConteudoVideo).then(() => {
                    loading.dismiss();
                    this.navCtrl.navigateBack('/menu/profissional-todos-conteudos');
                });
            }
            else {
                /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
                this.todas.avaliacao = this.geral;
                this.conteudoVideoService.addTodo(this.todas).then(() => {
                    loading.dismiss();
                    this.navCtrl.navigateForward('/menu/profissional-todos-conteudos');
                });
            }
        });
    }
};
ProfissionalConteudoVideoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_5__["ProfissionalConteudoVideoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_6__["OverlayService"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ProfissionalConteudoVideoPage.prototype, "numStars", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ProfissionalConteudoVideoPage.prototype, "valor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ProfissionalConteudoVideoPage.prototype, "ionClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], ProfissionalConteudoVideoPage.prototype, "form", void 0);
ProfissionalConteudoVideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profissional-conteudo-video',
        template: __webpack_require__(/*! raw-loader!./profissional-conteudo-video.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo-video/profissional-conteudo-video.page.html"),
        styles: [__webpack_require__(/*! ./profissional-conteudo-video.page.scss */ "./src/app/pages/profissional-conteudo-video/profissional-conteudo-video.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_5__["ProfissionalConteudoVideoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_6__["OverlayService"],
        angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]])
], ProfissionalConteudoVideoPage);



/***/ })

}]);
//# sourceMappingURL=profissional-conteudo-video-profissional-conteudo-video-module-es2015.js.map