(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profissional-conteudo-imagem-profissional-conteudo-imagem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo-imagem/profissional-conteudo-imagem.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-conteudo-imagem/profissional-conteudo-imagem.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-grid>\r\n\r\n\r\n\r\n    <form #form=\"ngForm\">\r\n      <ion-card>\r\n        <ion-card-header style=\"background-color: #9BBFFF;\">\r\n          <ion-card-title style=\"font-size: 17px; text-align: center;\">Escolha a imagem que deseja divulgar</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-item (click)=\"abrirGaleria()\">\r\n          <ion-icon\r\n            name=\"add\"\r\n            color=\"primary\"\r\n            slot=\"start\"\r\n          ></ion-icon>\r\n          Clique aqui para enviar\r\n        </ion-item>\r\n\r\n        <ion-card *ngIf=\"photo != ''\">\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Visualização da foto escolhida</ion-card-subtitle>\r\n          </ion-card-header>\r\n\r\n            <img\r\n              [src]='photo'\r\n              [(ngModel)]='todas.imagem'\r\n              height=\"240px\"\r\n              width=\"180px\"\r\n            >\r\n        </ion-card>\r\n\r\n      </ion-card>\r\n      <ion-item\r\n        href\r\n        class=\"activated\"\r\n        color=\"primary\"\r\n      >\r\n        <ion-toggle\r\n          [(ngModel)]=\"mostraMaisInfo\"\r\n          (ionChange)=\"changeMaisInfo()\"\r\n          slot=\"end\"\r\n          name=\"maisInfo\"\r\n        ></ion-toggle>\r\n        <ion-label class=\"ion-text-center\">Mais informações</ion-label>\r\n      </ion-item>\r\n      <ion-card\r\n        style=\"background-color: #9BBFFF;\"\r\n        *ngIf=\"mostraMaisInfo\"\r\n      >\r\n        <ion-item>\r\n          <ion-icon\r\n            name=\"add\"\r\n            slot=\"start\"\r\n            color=\"primary\"\r\n          >\r\n          </ion-icon>\r\n          <ion-input\r\n            type=\"text\"\r\n            name=\"tituloImagem\"\r\n            placeholder=\"Titulo para esta imagem\"\r\n            autofocus=\"true\"\r\n            [(ngModel)]=\"todas.tituloImagem\"\r\n            required\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon\r\n            name=\"add\"\r\n            slot=\"start\"\r\n            color=\"primary\"\r\n          >\r\n          </ion-icon>\r\n          <ion-input\r\n            type=\"text\"\r\n            name=\"autorImagem\"\r\n            placeholder=\"Autor(a) da imagem\"\r\n            autofocus=\"true\"\r\n            [(ngModel)]=\"todas.autorImagem\"\r\n            required\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon\r\n            name=\"add\"\r\n            color=\"primary\"\r\n            slot=\"start\"\r\n          ></ion-icon>\r\n          <ion-textarea\r\n            name=\"maisInfoImagem\"\r\n            autofocus=\"true\"\r\n            [(ngModel)]=\"todas.maisInfoImagem\"\r\n            required\r\n            rows=\"2\"\r\n            cols=\"5\"\r\n            placeholder=\"Informações complementares sobre a imagem...\"\r\n          ></ion-textarea>\r\n        </ion-item>\r\n      </ion-card>\r\n      <ion-item\r\n        href\r\n        class=\"activated\"\r\n        color=\"primary\"\r\n      >\r\n        <ion-toggle\r\n          [(ngModel)]=\"mostraFiltro\"\r\n          (ionChange)=\"changeFiltro()\"\r\n          slot=\"end\"\r\n          name=\"filtro\"\r\n        ></ion-toggle>\r\n        <ion-label class=\"ion-text-center\">Filtro de Conteúdos</ion-label>\r\n      </ion-item>\r\n      <ion-card *ngIf=\"mostraFiltro\">\r\n        <ion-card-header style=\"background-color: #9BBFFF;\">\r\n          <ion-card-title style=\"font-size: 17px; text-align: center;\">Faixa etária destinada</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-radio-group\r\n          [(ngModel)]=\"todas.idade\"\r\n          name=\"selecionaIdade\"\r\n        >\r\n          <ion-item>\r\n            <ion-label>8 a 12 anos</ion-label>\r\n            <ion-radio\r\n              name=\"8a12\"\r\n              value=\"8 a 12\"\r\n              slot=\"start\"\r\n            ></ion-radio>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>13 a 17 anos</ion-label>\r\n            <ion-radio\r\n              name=\"13a17\"\r\n              value=\"13 a 17\"\r\n              slot=\"start\"\r\n            ></ion-radio>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>18 anos ou mais</ion-label>\r\n            <ion-radio\r\n              name=\"18a35\"\r\n              value=\"18 anos ou mais\"\r\n              slot=\"start\"\r\n            ></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n\r\n\r\n\r\n        <ion-card-header style=\"background-color: #9BBFFF;\">\r\n          <ion-card-title style=\"font-size: 17px; text-align: center;\">Avaliação do usuário</ion-card-title>\r\n        </ion-card-header>\r\n\r\n\r\n\r\n        <ion-row>\r\n          <ion-item\r\n            *ngFor=\"let star of stars; let i = index\"\r\n            tappable\r\n            (click)=\"starClicked(i)\"\r\n          >\r\n            <ion-icon\r\n              [name]=\"star\"\r\n              color=\"primary\"\r\n            ></ion-icon>\r\n          </ion-item>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n\r\n\r\n      <ion-button\r\n        expand=\"block\"\r\n        type=\"submit\"\r\n        class=\"login-button\"\r\n        (click)=\"saveTodo()\"\r\n        color=\"dark\"\r\n      >\r\n        Criar conteúdo\r\n      </ion-button>\r\n    </form>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/core/overlay.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/overlay.service.ts ***!
  \*****************************************/
/*! exports provided: OverlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayService", function() { return OverlayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let OverlayService = class OverlayService {
    constructor(alertCtrl, loadingCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    alert(options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create(options);
            yield alert.present();
            return alert;
        });
    }
    loading(options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create(Object.assign({ message: 'Loading...' }, options));
            yield loading.present();
            loading.dismiss();
            return loading;
        });
    }
    toast(options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create(Object.assign({ position: 'bottom', duration: 3000, showCloseButton: true, closeButtonText: 'Ok' }, options));
            yield toast.present();
            return toast;
        });
    }
};
OverlayService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
OverlayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], OverlayService);



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
    constructor(route, loadingController, conteudoImagemService, navCtrl, overlay, auth, camera, toastController) {
        this.route = route;
        this.loadingController = loadingController;
        this.conteudoImagemService = conteudoImagemService;
        this.navCtrl = navCtrl;
        this.overlay = overlay;
        this.auth = auth;
        this.camera = camera;
        this.toastController = toastController;
        //Refernete ao ratebar
        this.numStars = 5;
        this.valor = 0;
        this.ionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stars = [];
        this.photo = '';
        this.todas = {
            idUsuario: '',
            idade: '',
            avaliacao: null,
            tituloImagem: '',
            autorImagem: '',
            imagem: '',
            maisInfoImagem: ''
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
                if (this.photo != '') {
                    this.todas.imagem = this.photo;
                }
                /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
                this.todas.avaliacao = this.geral;
                this.conteudoImagemService.updateTodo(this.todas, this.idConteudoImagem).then(() => {
                    loading.dismiss();
                    this.navCtrl.navigateBack('/menu/profissional-todos-conteudos');
                });
            }
            else {
                if (this.photo != '') {
                    this.todas.imagem = this.photo;
                }
                /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
                this.todas.avaliacao = this.geral;
                this.todas.idUsuario = this.idUsuario;
                this.conteudoImagemService.addTodo(this.todas).then(() => {
                    loading.dismiss();
                    this.navCtrl.navigateForward('/menu/profissional-todos-conteudos');
                    this.presentToast(" A imagem foi cadastrada");
                });
            }
        });
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2500,
                position: 'bottom'
            });
            toast.present();
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
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
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
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], ProfissionalConteudoImagemPage);



/***/ }),

/***/ "./src/app/shared/components/logout-button/logout-button.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/logout-button/logout-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: LogoutButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutButtonComponent", function() { return LogoutButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");





let LogoutButtonComponent = class LogoutButtonComponent {
    constructor(authService, menuCtrl, navCtrl, overlayService) {
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.overlayService = overlayService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(yield this.menuCtrl.isEnabled(this.menuId))) {
                //Checka se o menu esta habilitado
                this.menuCtrl.enable(true, this.menuId); // Se não estiver, indica o  id   do menu q qer habilitar
            }
        });
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.overlayService.alert({
                //Apresenta a mensagem
                message: 'Deseja mesmo sair ?',
                buttons: [
                    {
                        text: 'Sim',
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            yield this.authService.signOut(); // chama o método de deslogar criado
                            /* AULA 95 ->
                            Se usário estiver deslogado, desabilita o login
                            #USAR PARA TIPOS DE USUÁRIO NO FUTURO ???
                            */
                            yield this.menuCtrl.enable(false, this.menuId);
                            // this.navCtrl.navigateRoot('login'); // Finaliza as paginas e dieciona pro login
                        })
                    },
                    'Não' // Não faz nada e segue a execução
                ]
            });
        });
    }
};
LogoutButtonComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__["OverlayService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], LogoutButtonComponent.prototype, "menuId", void 0);
LogoutButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-logout-button',
        template: `
    <ion-buttons>
      <ion-button (click)="logout()">
        <ion-icon name="exit" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-buttons>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
        src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__["OverlayService"]])
], LogoutButtonComponent);



/***/ }),

/***/ "./src/app/shared/components/menu-toggle/menu-toggle.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/menu-toggle/menu-toggle.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuToggleComponent", function() { return MenuToggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/* AULA 92 -> Componente genérico de menu, que pode ser chamado em qualquer momento na aplicação */

let MenuToggleComponent = class MenuToggleComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MenuToggleComponent.prototype, "menu", void 0);
MenuToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-toggle',
        /* Usando HTML inline, não necessitdando de arquivos externos */
        template: `
    <ion-buttons>
      <ion-menu-toggle [menu]="menu">
        <ion-button>
          <ion-icon slot="icon-only" name="menu"></ion-icon>
        </ion-button>
      </ion-menu-toggle>
    </ion-buttons>
  `
    })
], MenuToggleComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_menu_toggle_menu_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu-toggle/menu-toggle.component */ "./src/app/shared/components/menu-toggle/menu-toggle.component.ts");
/* harmony import */ var _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/logout-button/logout-button.component */ "./src/app/shared/components/logout-button/logout-button.component.ts");







let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_6__["LogoutButtonComponent"], _components_menu_toggle_menu_toggle_component__WEBPACK_IMPORTED_MODULE_5__["MenuToggleComponent"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_6__["LogoutButtonComponent"],
            _components_menu_toggle_menu_toggle_component__WEBPACK_IMPORTED_MODULE_5__["MenuToggleComponent"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=profissional-conteudo-imagem-profissional-conteudo-imagem-module-es2015.js.map