(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profissional-conteudo-imagem-profissional-conteudo-imagem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo-imagem/profissional-conteudo-imagem.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-conteudo-imagem/profissional-conteudo-imagem.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header translucent>\r\n  <ion-toolbar color=\"#FFFF\">\r\n    <ion-title style=\"text-align: center; font-size: 12pt\">Divulgue uma frase de apoio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <!-- Deixa responsivo -->\r\n      <ion-col\r\n        size-sm=\"8\"\r\n        size-md=\"12\"\r\n        size-lg=\"3\"\r\n        size-xl=\"3\"\r\n      >\r\n        <form #form=\"ngForm\">\r\n          <ion-card>\r\n            <ion-card-header style=\"background-color: lightsteelblue;\">\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Escolha a imagem que deseja divulgar</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item (click)=\"abrirGaleria()\">\r\n              <ion-icon\r\n                name=\"add\"\r\n                color=\"primary\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              Clique aqui para enviar \r\n            </ion-item>\r\n            <!-- Achar alguma forma de fazer um preview em tento real-->\r\n          </ion-card>\r\n\r\n\r\n          <ion-item\r\n            href\r\n            class=\"activated\"\r\n            color=\"primary\"\r\n          >\r\n            <ion-toggle\r\n              [(ngModel)]=\"mostraMaisInfo\"\r\n              (ionChange)=\"changeMaisInfo()\"\r\n              slot=\"end\"\r\n              name=\"maisInfo\"\r\n            ></ion-toggle>\r\n            <ion-label class=\"ion-text-center\">Mais informações</ion-label>\r\n          </ion-item>\r\n\r\n\r\n          <ion-card\r\n            style=\"background-color: lightsteelblue;\"\r\n            *ngIf=\"mostraMaisInfo\"\r\n          >\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"add\"\r\n                slot=\"start\"\r\n                color=\"primary\"\r\n              >\r\n              </ion-icon>\r\n              <ion-input\r\n                type=\"text\"\r\n                name=\"tituloImagem\"\r\n                placeholder=\"Titulo para esta imagem\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.tituloImagem\"\r\n                required\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"add\"\r\n                slot=\"start\"\r\n                color=\"primary\"\r\n              >\r\n              </ion-icon>\r\n              <ion-input\r\n                type=\"text\"\r\n                name=\"autorImagem\"\r\n                placeholder=\"Autor(a) da imagem\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.autorImagem\"\r\n                required\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"add\"\r\n                color=\"primary\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                name=\"maisInfoImagem\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.maisInfoImagem\"\r\n                required\r\n                rows=\"2\"\r\n                cols=\"5\"\r\n                placeholder=\"Informações complementares sobre a imagem...\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n\r\n          <ion-item\r\n            href\r\n            class=\"activated\"\r\n            color=\"primary\"\r\n          >\r\n            <ion-toggle\r\n              [(ngModel)]=\"mostraFiltro\"\r\n              (ionChange)=\"changeFiltro()\"\r\n              slot=\"end\"\r\n              name=\"filtro\"\r\n            ></ion-toggle>\r\n            <ion-label class=\"ion-text-center\">Filtro de Conteúdos</ion-label>\r\n          </ion-item>\r\n\r\n\r\n          <ion-card *ngIf=\"mostraFiltro\">\r\n            <ion-card-header style=\"background-color: lightsteelblue;\">\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Faixa etária destinada</ion-card-title>\r\n            </ion-card-header>\r\n\r\n\r\n            <ion-radio-group\r\n              [(ngModel)]=\"todas.idade\"\r\n              name=\"selecionaIdade\"\r\n            >\r\n              <ion-item>\r\n                <ion-label>8 a 12 anos</ion-label>\r\n                <ion-radio\r\n                  name=\"8a12\"\r\n                  value=\"8 a 12\"\r\n                  slot=\"start\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n\r\n\r\n              <ion-item>\r\n                <ion-label>13 a 17 anos</ion-label>\r\n                <ion-radio\r\n                  name=\"13a17\"\r\n                  value=\"13 a 17\"\r\n                  slot=\"start\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n\r\n\r\n              <ion-item>\r\n                <ion-label>18 a 35 anos</ion-label>\r\n                <ion-radio\r\n                  name=\"18a35\"\r\n                  value=\"18 a 35\"\r\n                  slot=\"start\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n\r\n\r\n\r\n            <ion-card-header style=\"background-color: lightsteelblue;\">\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Nível de emergência</ion-card-title>\r\n            </ion-card-header>\r\n\r\n\r\n            <ion-radio-group\r\n              [(ngModel)]=\"todas.nivelEmergencia\"\r\n              name=\"selecionaEmergencia\"\r\n            >\r\n              <ion-item>\r\n                <ion-label>Normal</ion-label>\r\n                <ion-radio\r\n                  name=\"normal\"\r\n                  value=\"normal\"\r\n                  slot=\"start\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n\r\n\r\n              <ion-item>\r\n                <ion-label>Preocupante</ion-label>\r\n                <ion-radio\r\n                  name=\"Preocupante\"\r\n                  value=\"preocupante\"\r\n                  slot=\"start\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n\r\n\r\n              <ion-item>\r\n                <ion-label>Urgente</ion-label>\r\n                <ion-radio\r\n                  name=\"urgente\"\r\n                  value=\"urgente\"\r\n                  slot=\"start\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n\r\n\r\n            <ion-card-header style=\"background-color: lightsteelblue;\">\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Avaliação do usuário</ion-card-title>\r\n            </ion-card-header>\r\n\r\n\r\n            <ion-row>\r\n              <ion-item\r\n                *ngFor=\"let star of stars; let i = index\"\r\n                tappable\r\n                (click)=\"starClicked(i)\"\r\n                [(ngModel)]=\"todas.avaliacao\"\r\n                name=\"avaliacao\"\r\n              >\r\n                <ion-icon\r\n                  [name]=\"star\"\r\n                  color=\"primary\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n\r\n          <ion-button\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            class=\"login-button\"\r\n            (click)=\"saveTodo()\"\r\n            color=\"dark\"\r\n          >\r\n            Criar conteúdo\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/profissional-conteudo-imagem/profissional-conteudo-imagem.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo-imagem/profissional-conteudo-imagem.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProfissionalConteudoImagemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalConteudoImagemPageModule", function() { return ProfissionalConteudoImagemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profissional_conteudo_imagem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profissional-conteudo-imagem.page */ "./src/app/pages/profissional-conteudo-imagem/profissional-conteudo-imagem.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _profissional_conteudo_imagem_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoImagemPage"]
    }
];
let ProfissionalConteudoImagemPageModule = class ProfissionalConteudoImagemPageModule {
};
ProfissionalConteudoImagemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_profissional_conteudo_imagem_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoImagemPage"]]
    })
], ProfissionalConteudoImagemPageModule);



/***/ }),

/***/ "./src/app/pages/profissional-conteudo-imagem/profissional-conteudo-imagem.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo-imagem/profissional-conteudo-imagem.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zpc3Npb25hbC1jb250ZXVkby1pbWFnZW0vcHJvZmlzc2lvbmFsLWNvbnRldWRvLWltYWdlbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profissional-conteudo-imagem/profissional-conteudo-imagem.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo-imagem/profissional-conteudo-imagem.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProfissionalConteudoImagemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalConteudoImagemPage", function() { return ProfissionalConteudoImagemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service */ "./src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service.ts");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let ProfissionalConteudoImagemPage = class ProfissionalConteudoImagemPage {
    constructor(route, loadingController, conteudoImagemService, navCtrl, overlay, auth, camera) {
        this.route = route;
        this.loadingController = loadingController;
        this.conteudoImagemService = conteudoImagemService;
        this.navCtrl = navCtrl;
        this.overlay = overlay;
        this.auth = auth;
        this.camera = camera;
        //Refernete ao ratebar
        this.numStars = 5;
        this.valor = 0;
        this.ionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stars = [];
        this.photo = '';
        this.todas = {
            idUsuario: "",
            idade: "",
            nivelEmergencia: "",
            avaliacao: 0,
            tituloImagem: "",
            autorImagem: "",
            imagem: "",
            maisInfoImagem: ""
        };
    }
    changeFiltro() {
        console.log(this.mostraMaisInfo);
    }
    changeMaisInfo() {
        console.log(this.mostraFiltro);
    }
    //Referente a camera e salvar as imagens
    abrirGaleria() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const opcao = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: true,
                targetWidth: 300,
                targetHeight: 300,
                correctOrientation: true
            };
            try {
                this.camera.getPicture(opcao).then(imageData => {
                    let base64Image = 'data:image/jpeg;base64,' + imageData;
                    this.photo = base64Image;
                }, err => {
                    // Handle error
                });
            }
            catch (error) {
                this.overlay.alert(error);
            }
        });
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
    logRatingChange(rating) {
        console.log('changed rating: ', rating);
        // do your stuff
    }
    ngOnInit() {
        this.calc();
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.idConteudoImagem = this.route.snapshot.params['id']; //Pegando o id para uma futura edição
        if (this.idConteudoImagem) {
            this.loadTodo();
        }
    }
    loadTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Carregando seus dados, aguarde.'
            });
            yield loading.present();
            this.conteudoImagemService.getTodo(this.idConteudoImagem).subscribe(res => {
                loading.dismiss();
                this.todas = res;
            });
        });
    }
    saveTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Salvando a imagem cadastrado'
            });
            yield loading.present();
            if (this.idConteudoImagem) {
                /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
                this.todas.avaliacao = this.geral;
                this.conteudoImagemService.updateTodo(this.todas, this.idConteudoImagem).then(() => {
                    loading.dismiss();
                    this.navCtrl.navigateBack('menu/home');
                });
            }
            else {
                if (this.photo != '') {
                    this.todas.imagem = this.photo;
                }
                /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
                this.todas.avaliacao = this.geral;
                this.conteudoImagemService.addTodo(this.todas).then(() => {
                    loading.dismiss();
                    this.navCtrl.navigateForward('menu/home');
                });
            }
        });
    }
};
ProfissionalConteudoImagemPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_4__["ProfissionalConteudoImagemService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_5__["OverlayService"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ProfissionalConteudoImagemPage.prototype, "numStars", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ProfissionalConteudoImagemPage.prototype, "valor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ProfissionalConteudoImagemPage.prototype, "ionClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"])
], ProfissionalConteudoImagemPage.prototype, "form", void 0);
ProfissionalConteudoImagemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profissional-conteudo-imagem',
        template: __webpack_require__(/*! raw-loader!./profissional-conteudo-imagem.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo-imagem/profissional-conteudo-imagem.page.html"),
        styles: [__webpack_require__(/*! ./profissional-conteudo-imagem.page.scss */ "./src/app/pages/profissional-conteudo-imagem/profissional-conteudo-imagem.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_4__["ProfissionalConteudoImagemService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_5__["OverlayService"],
        angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]])
], ProfissionalConteudoImagemPage);



/***/ })

}]);
//# sourceMappingURL=profissional-conteudo-imagem-profissional-conteudo-imagem-module-es2015.js.map