(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emergencia-cadastro-emergencia-cadastro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\r\n  <ion-toolbar color=\"#FFFF\">\r\n\r\n\r\n\r\n\r\n\r\n    <ion-title style=\"text-align: center; font-size: 12pt\">Informações emergênciais</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <!-- Deixa responsivo -->\r\n      <ion-col\r\n        size-sm=\"8\"\r\n        size-md=\"12\"\r\n        size-lg=\"3\"\r\n        size-xl=\"3\"\r\n      >\r\n        <form #form=\"ngForm\">\r\n\r\n\r\n          <!-- PRIMEIRO NÚMERO -->\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Informações da primeira pessoa</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"md-call\"\r\n                color=\"primary\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              <ion-input\r\n                type=\"text\"\r\n                name=\"primeiroNumero\"\r\n                placeholder=\"Numero de celular\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]='todas.primeiroNumero'\r\n                [brmasker]=\"{mask:'00000-0000', type:'num', len:10 }\"\r\n                required\r\n              ></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"ios-person\"\r\n                color=\"primary\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              <ion-input\r\n                type=\"text\"\r\n                name=\"nomePrimeiroNumero\"\r\n                placeholder=\"Nome ou apelido\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]='todas.nomePrimeiroNumero'\r\n                [brmasker]=\"{len:8 }\"\r\n                required\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n          <!-- SEGUNDO NÚMERO -->\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Informações da segunda pessoa</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"md-call\"\r\n                color=\"primary\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              <ion-input\r\n                type=\"text\"\r\n                name=\"segundoNumero\"\r\n                placeholder=\"Segundo número\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]='todas.segundoNumero'\r\n                [brmasker]=\"{mask:'00000-0000', type:'num', len:10 }\"\r\n                required\r\n              ></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"ios-person\"\r\n                color=\"primary\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              <ion-input\r\n                type=\"text\"\r\n                name=\"nomeSegundoNumero\"\r\n                placeholder=\"Nome ou apelido\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]='todas.nomeSegundoNumero'\r\n                [brmasker]=\"{len:8 }\"\r\n                required\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n          <!-- FRASE QUE GOSTA -->\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Frase que você gosta</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"ios-bulb\"\r\n                color=\"primary\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                name=\"frase\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]='todas.frase'\r\n                required\r\n                rows=\"5\"\r\n                cols=\"10\"\r\n                placeholder=\"Escreva aqui sua frase...\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n          </ion-card>\r\n          <!-- FOTO QUE GOSTA -->\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Foto que você gosta e admira</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item (click)=\"abrirGaleria()\">\r\n\r\n\r\n              <ion-icon\r\n                name=\"add\"\r\n                color=\"primary\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              Clique para escolher\r\n            </ion-item>\r\n            <ion-card *ngIf=\"todas.foto\">\r\n              <ion-label\r\n                color=\"primary\"\r\n                style=\"font-size: 12pt; text-align: center;\"\r\n              >\r\n                Prè-Visualização\r\n              </ion-label>\r\n              <img\r\n                [src]=\"todas.foto\"\r\n                width=\"180\"\r\n                height=\"240\"\r\n              >\r\n            </ion-card>\r\n          </ion-card>\r\n          <!-- BOTÃO DE CADASTRO -->\r\n          <ion-button\r\n            fill=\"outline\"\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            class=\"login-button\"\r\n            (click)=\"saveTodo()\"\r\n            color=\"primary\"\r\n          >\r\n            Salvar\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

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

/***/ "./src/app/pages/emergencia-cadastro/emergencia-cadastro.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/emergencia-cadastro/emergencia-cadastro.module.ts ***!
  \*************************************************************************/
/*! exports provided: EmergenciaCadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergenciaCadastroPageModule", function() { return EmergenciaCadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _emergencia_cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emergencia-cadastro.page */ "./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");






const routes = [
    {
        path: '',
        component: _emergencia_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["EmergenciaCadastroPage"]
    }
];
let EmergenciaCadastroPageModule = class EmergenciaCadastroPageModule {
};
EmergenciaCadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), br_mask__WEBPACK_IMPORTED_MODULE_5__["BrMaskerModule"]],
        declarations: [_emergencia_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["EmergenciaCadastroPage"]]
    })
], EmergenciaCadastroPageModule);



/***/ }),

/***/ "./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtZXJnZW5jaWEtY2FkYXN0cm8vZW1lcmdlbmNpYS1jYWRhc3Ryby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.ts ***!
  \***********************************************************************/
/*! exports provided: EmergenciaCadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergenciaCadastroPage", function() { return EmergenciaCadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emergenciaCadastro/emergencia-cadastro.service */ "./src/app/services/emergenciaCadastro/emergencia-cadastro.service.ts");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__);











let EmergenciaCadastroPage = class EmergenciaCadastroPage {
    constructor(route, loadingController, emergenciaCadastroService, navCtrl, camera, platform, file, storageService, overlay, auth) {
        this.route = route;
        this.loadingController = loadingController;
        this.emergenciaCadastroService = emergenciaCadastroService;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.platform = platform;
        this.file = file;
        this.storageService = storageService;
        this.overlay = overlay;
        this.auth = auth;
        this.todas = {
            //os dados que estão sendo mantidos
            idUsuario: '',
            foto: '',
            primeiroNumero: '',
            nomePrimeiroNumero: '',
            segundoNumero: '',
            nomeSegundoNumero: '',
            frase: ''
        };
        this.photo = '';
    }
    ngOnInit() {
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.idEmergenciaCadastro = this.route.snapshot.params['id'];
        if (this.idEmergenciaCadastro) {
            this.loadTodo();
        }
    }
    loadTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Carregando seus dados, aguarde.'
            });
            yield loading.present();
            this.emergenciaCadastroService.getTodo(this.idEmergenciaCadastro).subscribe(res => {
                loading.dismiss();
                this.todas = res;
            });
        });
    }
    saveTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Salvando dados de S.O.S'
            });
            yield loading.present();
            if (this.idEmergenciaCadastro) {
                if (this.photo != '') {
                    this.todas.foto = this.photo;
                }
                /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
                this.emergenciaCadastroService.updateTodo(this.todas, this.idEmergenciaCadastro).then(() => {
                    loading.dismiss();
                    this.navCtrl.navigateBack('emergencia/emergencia-utilizacao');
                });
            }
            else {
                if (this.photo != '') {
                    this.todas.foto = this.photo;
                }
                /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
                this.emergenciaCadastroService.addTodo(this.todas, this.idUsuario).then(() => {
                    loading.dismiss();
                    this.navCtrl.navigateBack('emergencia/emergencia-utilizacao');
                });
            }
        });
    }
    abrirGaleria() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const opcao = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                //mediaType: this.camera.MediaType.PICTURE,
                allowEdit: true,
                targetWidth: 300,
                targetHeight: 300,
                correctOrientation: true
            };
            try {
                this.camera.getPicture(opcao).then(imageData => {
                    // imageData is either a base64 encoded string or a file URI
                    // If it's base64 (DATA_URL):
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
};
EmergenciaCadastroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_5__["EmergenciaCadastroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_9__["OverlayService"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], EmergenciaCadastroPage.prototype, "form", void 0);
EmergenciaCadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emergencia-cadastro',
        template: __webpack_require__(/*! raw-loader!./emergencia-cadastro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.html"),
        styles: [__webpack_require__(/*! ./emergencia-cadastro.page.scss */ "./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_5__["EmergenciaCadastroService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
        src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
        src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_9__["OverlayService"],
        angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"]])
], EmergenciaCadastroPage);



/***/ }),

/***/ "./src/app/services/storage/storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage/storage */ "./node_modules/@angular/fire/storage/storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


 //Ver se n vai dar pau aqui

let StorageService = class StorageService {
    constructor(afs, alertController) {
        this.afs = afs;
        this.alertController = alertController;
        //Mudar para o genérico
    }
    presentAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //Mudar para o genérico
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'Subtitle',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    uploadImagemUsuario(uidUsuarioCadastro, photo) {
        const ref = this.afs.ref('UsuarioCadastro/' + uidUsuarioCadastro);
        ref.putString(photo, 'data_url');
        return ref.getDownloadURL();
    }
    uploadImagemAssistenteCadastro(idAssistenteCadastro, photo) {
        console.log(photo);
        const ref = this.afs.ref('AssistenteCadastro/' + idAssistenteCadastro);
        ref.putString(photo, 'data_url');
        return ref.getDownloadURL();
    }
    uploadImagemEmergenciaCadastro(idEmergenciaCadastro, photo) {
        console.log(photo);
        const ref = this.afs.ref('EmergenciaCadastro/' + idEmergenciaCadastro);
        ref.putString(photo, 'data_url');
        return ref.getDownloadURL();
    }
};
StorageService.ctorParameters = () => [
    { type: _angular_fire_storage_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], StorageService);



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
//# sourceMappingURL=emergencia-cadastro-emergencia-cadastro-module-es2015.js.map