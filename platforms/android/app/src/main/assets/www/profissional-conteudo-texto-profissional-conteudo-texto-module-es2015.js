(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profissional-conteudo-texto-profissional-conteudo-texto-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo-texto/profissional-conteudo-texto.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-conteudo-texto/profissional-conteudo-texto.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header translucent>\r\n  <ion-toolbar color=\"#FFFF\">\r\n    <ion-title style=\"text-align: center; font-size: 12pt\">Divulgue uma frase de apoio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n<ion-content>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <!-- Deixa responsivo -->\r\n      <ion-col\r\n        size-sm=\"8\"\r\n        size-md=\"12\"\r\n        size-lg=\"3\"\r\n        size-xl=\"3\"\r\n      >\r\n        <form #form=\"ngForm\">\r\n          <ion-card>\r\n            <ion-card-header style=\"background-color: #f2e57f\r\n\r\n;\">\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Divulgue uma frase de apoio</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"ios-bulb\"\r\n                color=\"amareloprofissional\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                name=\"texto\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.texto\"\r\n                required\r\n                rows=\"3\"\r\n                cols=\"10\"\r\n                placeholder=\"Utilize este espaço para escrever...\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <ion-item\r\n            href\r\n            class=\"activated\"\r\n            color=\"amareloprofissional\"\r\n          >\r\n            <ion-toggle\r\n              [(ngModel)]=\"mostraMaisInfo\"\r\n              (ionChange)=\"changeMaisInfo()\"\r\n              color=\"medium\"\r\n              slot=\"end\"\r\n              name=\"maisInfo\"\r\n            ></ion-toggle>\r\n            <ion-label class=\"ion-text-center\">Preencher mais informações</ion-label>\r\n          </ion-item>\r\n\r\n          <ion-card\r\n            style=\"background-color: #f2e57f\r\n;\"\r\n            *ngIf=\"mostraMaisInfo\"\r\n          >\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"add\"\r\n                slot=\"start\"\r\n                color=\"amareloprofissional\"\r\n              >\r\n              </ion-icon>\r\n              <ion-input\r\n                type=\"text\"\r\n                name=\"tituloTexo\"\r\n                placeholder=\"Titulo\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.tituloTexto\"\r\n                required\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"add\"\r\n                slot=\"start\"\r\n                color=\"amareloprofissional\"\r\n              >\r\n              </ion-icon>\r\n              <ion-input\r\n                type=\"text\"\r\n                name=\"autorTexto\"\r\n                placeholder=\"Autor do texto\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.autorTexto\"\r\n                required\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"add\"\r\n                color=\"amareloprofissional\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                name=\"maisInfo\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.maisInfoTexto\"\r\n                required\r\n                rows=\"2\"\r\n                cols=\"5\"\r\n                placeholder=\"Informações complementares...\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <ion-item\r\n            href\r\n            class=\"activated\"\r\n            color=\"amareloprofissional\"\r\n          >\r\n            <ion-toggle\r\n              [(ngModel)]=\"mostraFiltro\"\r\n              (ionChange)=\"changeFiltro()\"\r\n              color=\"medium\"\r\n              slot=\"end\"\r\n              name=\"filtro\"\r\n            ></ion-toggle>\r\n            <ion-label class=\"ion-text-center\">Filtro de Conteúdos</ion-label>\r\n          </ion-item>\r\n\r\n          <ion-card *ngIf=\"mostraFiltro\">\r\n            <ion-card-header style=\"background-color: #f2e57f\r\n\r\n;\">\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Faixa etária destinada</ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <ion-radio-group\r\n              [(ngModel)]=\"todas.idade\"\r\n              name=\"selecionaIdade\"\r\n              color=\"amareloprofissional\"\r\n            >\r\n              <ion-item>\r\n                <ion-label>8 a 12 anos</ion-label>\r\n                <ion-radio\r\n                  name=\"8a12\"\r\n                  value=\"8 a 12\"\r\n                  slot=\"start\"\r\n                  color=\"amareloprofissional\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>13 a 17 anos</ion-label>\r\n                <ion-radio\r\n                  name=\"13a17\"\r\n                  value=\"13 a 17\"\r\n                  slot=\"start\"\r\n                  color=\"amareloprofissional\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>18 anos ou mais</ion-label>\r\n                <ion-radio\r\n                  name=\"18a35\"\r\n                  value=\"18 anos ou mais\"\r\n                  slot=\"start\"\r\n                  color=\"amareloprofissional\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n\r\n            <ion-card-header style=\"background-color: #f2e57f\r\n\r\n;\">\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Avaliação do usuário</ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <ion-row>\r\n              <ion-item\r\n                *ngFor=\"let star of stars; let i = index\"\r\n                tappable\r\n                (click)=\"starClicked(i)\"\r\n              >\r\n                <ion-icon\r\n                  [name]=\"star\"\r\n                  color=\"amareloprofissional\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            class=\"login-button\"\r\n            (click)=\"saveTodo()\"\r\n            color=\"dark\"\r\n          >\r\n            Criar conteúdo\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

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

/***/ "./src/app/pages/profissional-conteudo-texto/profissional-conteudo-texto.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo-texto/profissional-conteudo-texto.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProfissionalConteudoTextoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalConteudoTextoPageModule", function() { return ProfissionalConteudoTextoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profissional_conteudo_texto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profissional-conteudo-texto.page */ "./src/app/pages/profissional-conteudo-texto/profissional-conteudo-texto.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _profissional_conteudo_texto_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoTextoPage"]
    }
];
let ProfissionalConteudoTextoPageModule = class ProfissionalConteudoTextoPageModule {
};
ProfissionalConteudoTextoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_profissional_conteudo_texto_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoTextoPage"]]
    })
], ProfissionalConteudoTextoPageModule);



/***/ }),

/***/ "./src/app/pages/profissional-conteudo-texto/profissional-conteudo-texto.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo-texto/profissional-conteudo-texto.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zpc3Npb25hbC1jb250ZXVkby10ZXh0by9wcm9maXNzaW9uYWwtY29udGV1ZG8tdGV4dG8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profissional-conteudo-texto/profissional-conteudo-texto.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo-texto/profissional-conteudo-texto.page.ts ***!
  \***************************************************************************************/
/*! exports provided: ProfissionalConteudoTextoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalConteudoTextoPage", function() { return ProfissionalConteudoTextoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service */ "./src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service.ts");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__);








let ProfissionalConteudoTextoPage = class ProfissionalConteudoTextoPage {
    constructor(route, loadingController, conteudoTextoService, navCtrl, overlay, auth) {
        this.route = route;
        this.loadingController = loadingController;
        this.conteudoTextoService = conteudoTextoService;
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
            tituloTexto: '',
            autorTexto: '',
            texto: '',
            maisInfoTexto: '',
            idade: '',
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
        this.idConteudoTexto = this.route.snapshot.params['id']; //Pegando o id para uma futura edição
        if (this.idConteudoTexto) {
            this.loadTodo();
        }
    }
    loadTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Carregando seus dados'
            });
            yield loading.present();
            this.conteudoTextoService.getTodo(this.idConteudoTexto).subscribe(res => {
                loading.dismiss();
                this.todas = res;
            });
        });
    }
    saveTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Salvando o texto cadastrado'
            });
            yield loading.present();
            //Testando se ja existe, se sim, faz update
            if (this.idConteudoTexto) {
                this.conteudoTextoService.updateTodo(this.todas, this.idConteudoTexto).then(() => {
                    loading.dismiss();
                    this.navCtrl.navigateBack('/menu/profissional-todos-conteudos');
                });
            }
            else {
                // Se não existir, falva no banco
                this.todas.avaliacao = this.geral;
                this.todas.idUsuario = this.idUsuario;
                this.conteudoTextoService.addTodo(this.todas).then(() => {
                    loading.dismiss();
                    this.navCtrl.navigateForward('/menu/profissional-todos-conteudos');
                });
            }
        });
    }
};
ProfissionalConteudoTextoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_5__["ProfissionalConteudoTextoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_6__["OverlayService"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ProfissionalConteudoTextoPage.prototype, "numStars", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ProfissionalConteudoTextoPage.prototype, "valor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ProfissionalConteudoTextoPage.prototype, "ionClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], ProfissionalConteudoTextoPage.prototype, "form", void 0);
ProfissionalConteudoTextoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profissional-conteudo-texto',
        template: __webpack_require__(/*! raw-loader!./profissional-conteudo-texto.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo-texto/profissional-conteudo-texto.page.html"),
        styles: [__webpack_require__(/*! ./profissional-conteudo-texto.page.scss */ "./src/app/pages/profissional-conteudo-texto/profissional-conteudo-texto.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_5__["ProfissionalConteudoTextoService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_6__["OverlayService"],
        angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]])
], ProfissionalConteudoTextoPage);



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
//# sourceMappingURL=profissional-conteudo-texto-profissional-conteudo-texto-module-es2015.js.map