(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-assistente-cadastro-assistente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cadastro-assistente/cadastro-assistente.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cadastro-assistente/cadastro-assistente.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"menu/home\" color=\"success\"></ion-back-button>\r\n    </ion-buttons>\r\n      <ion-title color=\"success\">Personalize seu assistente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid style=\"height: 100%\">\r\n  <ion-row justify-content-center align-items-center style=\"height: 100%\">\r\n    <form [formGroup]=\"formgroup\">\r\n     <ion-row>\r\n\r\n       <ion-card-content>\r\n         \r\n        <ion-card style=\"background-color: lightgreen;\" >\r\n            <ion-card-header>\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Apelido ou Nome</ion-card-title>\r\n            </ion-card-header>\r\n          \r\n            <ion-item>\r\n              <ion-input\r\n              type=\"text\"\r\n              formControlName=\"assistente\"\r\n              placeholder=\"Escreva aqui...\"\r\n              [(ngModel)]='todas.apelido'\r\n              required\r\n              ></ion-input>\r\n                \r\n              </ion-item>\r\n          </ion-card>\r\n          \r\n          <ion-card style=\"background-color: lightgreen;\" >\r\n              <ion-card-header>\r\n                <ion-card-title style=\"font-size: 17px; text-align: center;\">Foto ou Icone</ion-card-title>\r\n                </ion-card-header>\r\n                <ion-item (click)=\"abrirGaleria()\">\r\n                    <ion-icon\r\n                      name=\"add\"\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                    ></ion-icon>\r\n                    Clique aqui e escolha\r\n                  </ion-item>\r\n                </ion-card>\r\n\r\n                <ion-card *ngIf=\"todas.icone != ''\">\r\n                  <ion-avatar class=\"contact-avatar\">\r\n                 <img\r\n                   [src]='todas.icone'\r\n                  \r\n                   height=\"240px\"\r\n                   width=\"180px\"\r\n                 >\r\n                 </ion-avatar>\r\n                 <ion-card-header>\r\n                   <ion-card-subtitle>Foto atual do assistente</ion-card-subtitle>\r\n                 </ion-card-header>\r\n                </ion-card>\r\n          \r\n          <ion-card *ngIf=\"photo != ''\">\r\n                <ion-avatar class=\"contact-avatar\">\r\n               <img\r\n                 [src]='photo'\r\n                 [(ngModel)]='todas.icone'\r\n                 height=\"240px\"\r\n                 width=\"180px\"\r\n               >\r\n               </ion-avatar>\r\n               <ion-card-header>\r\n                 <ion-card-subtitle style=\"text-align: center;\">Foto escolhida para seu assistente</ion-card-subtitle>\r\n               </ion-card-header>\r\n              </ion-card>\r\n      </ion-card-content>\r\n    </ion-row>\r\n            <ion-button\r\n            shape=\"round\"\r\n            fill=\"outline\"\r\n            expand=\"block\"\r\n            (click)=\"saveTodo()\"\r\n            color=\"success\"\r\n            [disabled]=\"formgroup.invalid\"\r\n            >\r\n            Pronto\r\n          </ion-button>\r\n      </form>\r\n  </ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n\r\n\r\n\r\n"

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

/***/ "./src/app/pages/cadastro-assistente/cadastro-assistente.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cadastro-assistente/cadastro-assistente.module.ts ***!
  \*************************************************************************/
/*! exports provided: CadastroAssistentePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroAssistentePageModule", function() { return CadastroAssistentePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cadastro_assistente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro-assistente.page */ "./src/app/pages/cadastro-assistente/cadastro-assistente.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _cadastro_assistente_page__WEBPACK_IMPORTED_MODULE_3__["CadastroAssistentePage"]
    }
];
let CadastroAssistentePageModule = class CadastroAssistentePageModule {
};
CadastroAssistentePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_cadastro_assistente_page__WEBPACK_IMPORTED_MODULE_3__["CadastroAssistentePage"]]
    })
], CadastroAssistentePageModule);



/***/ }),

/***/ "./src/app/pages/cadastro-assistente/cadastro-assistente.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cadastro-assistente/cadastro-assistente.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".texto {\n  color: black;\n}\n\n.contact-avatar {\n  width: 50%;\n  height: 50%;\n  margin-left: 25%;\n}\n\nion-rating-container {\n  font-size: 30;\n}\n\nion-button {\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FkYXN0cm8tYXNzaXN0ZW50ZS9EOlxcbWFyY29zXFxUQ0NcXHRjYy9zcmNcXGFwcFxccGFnZXNcXGNhZGFzdHJvLWFzc2lzdGVudGVcXGNhZGFzdHJvLWFzc2lzdGVudGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYWRhc3Ryby1hc3Npc3RlbnRlL2NhZGFzdHJvLWFzc2lzdGVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBRENBO0VBQ0Usc0JBQUE7VUFBQSxxQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FkYXN0cm8tYXNzaXN0ZW50ZS9jYWRhc3Ryby1hc3Npc3RlbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0b3tcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb250YWN0LWF2YXRhcntcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbn1cclxuXHJcbmlvbi1yYXRpbmctY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDMwO1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbiIsIi50ZXh0byB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbnRhY3QtYXZhdGFyIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbmlvbi1yYXRpbmctY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAzMDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cadastro-assistente/cadastro-assistente.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cadastro-assistente/cadastro-assistente.page.ts ***!
  \***********************************************************************/
/*! exports provided: CadastroAssistentePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroAssistentePage", function() { return CadastroAssistentePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_assistenteCadastro_assistente_cadastro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/assistenteCadastro/assistente-cadastro.service */ "./src/app/services/assistenteCadastro/assistente-cadastro.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");











let CadastroAssistentePage = class CadastroAssistentePage {
    constructor(route, loadingController, assistenteCadastroService, camera, overlay, auth, navCtrl, formBuilder, network, core, toastController) {
        this.route = route;
        this.loadingController = loadingController;
        this.assistenteCadastroService = assistenteCadastroService;
        this.camera = camera;
        this.overlay = overlay;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.network = network;
        this.core = core;
        this.toastController = toastController;
        this.photo = '';
        this.todas = {
            idUsuario: '',
            apelido: '',
            icone: ''
        };
    }
    ngOnInit() {
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.idCadastroAssistente = this.auth.auth.currentUser.uid;
        this.errorMensagens = this.core.identForm;
        this.formgroup = this.formBuilder.group({
            assistente: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10)
                ])]
        });
        if (this.idCadastroAssistente) {
            this.loadTodo();
        }
        this.networkConnect();
    }
    loadTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Buscando dados do assistente'
            });
            yield loading.present();
            this.assistenteCadastroService.getTodo(this.idCadastroAssistente).subscribe(res => {
                loading.dismiss();
                this.todas = res;
            });
        });
    }
    networkConnect() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Conectando com a Internet...'
            });
            this.network.onDisconnect().subscribe(() => {
                loading.dismiss();
            });
        });
    }
    saveTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Salvando dados cadastrados do assistente...'
            });
            yield loading.present();
            if (this.idCadastroAssistente) {
                if (this.photo != '') {
                    this.todas.icone = this.photo;
                }
                this.assistenteCadastroService.updateTodo(this.todas, this.idCadastroAssistente).then(() => {
                    loading.dismiss();
                    this.navCtrl.navigateBack('/menu/home');
                });
            }
            else {
                if (this.photo != '') {
                    this.todas.icone = this.photo;
                }
                this.todas.idUsuario = this.idUsuario;
                this.assistenteCadastroService.addTodo(this.todas, this.idUsuario).then(() => {
                    loading.dismiss();
                    this.navCtrl.navigateBack('/menu/home');
                    this.presentToast("Assistente '" + this.todas.apelido + "' cadastrado");
                });
            }
        });
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
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
                }, err => { });
            }
            catch (error) {
                this.overlay.alert(error);
            }
        });
    }
};
CadastroAssistentePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_assistenteCadastro_assistente_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["AssistenteCadastroService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_7__["OverlayService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"] },
    { type: src_app_core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
], CadastroAssistentePage.prototype, "form", void 0);
CadastroAssistentePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cadastro-assistente',
        template: __webpack_require__(/*! raw-loader!./cadastro-assistente.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cadastro-assistente/cadastro-assistente.page.html"),
        styles: [__webpack_require__(/*! ./cadastro-assistente.page.scss */ "./src/app/pages/cadastro-assistente/cadastro-assistente.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_app_services_assistenteCadastro_assistente_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["AssistenteCadastroService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
        src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_7__["OverlayService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], CadastroAssistentePage);



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
//# sourceMappingURL=pages-cadastro-assistente-cadastro-assistente-module-es2015.js.map