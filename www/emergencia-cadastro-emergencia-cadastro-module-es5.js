(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emergencia-cadastro-emergencia-cadastro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\r\n    <ion-toolbar color=\"#FFFF\">\r\n\r\n      <ion-title style=\"text-align: center; font-size: 12pt\"> Informações emergênciais</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <!-- Deixa responsivo -->\r\n      <ion-col\r\n        size-sm=\"8\"\r\n        size-md=\"12\"\r\n        size-lg=\"3\"\r\n        size-xl=\"3\"\r\n      >\r\n      <form #form=\"ngForm\">\r\n\r\n  \r\n        <!-- PRIMEIRO NÚMERO -->\r\n          <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-title style=\"font-size: 17px; text-align: center;\" >Informações da primeira pessoa</ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-item>\r\n                  <ion-icon\r\n                    name=\"md-call\"\r\n                    color=\"dark\"\r\n                    slot=\"start\"\r\n                  ></ion-icon>\r\n                  <ion-input\r\n                    type=\"number\"\r\n                    name=\"primeiroNumero\"\r\n                    placeholder=\"Numero de celular\"\r\n                    autofocus=\"true\"\r\n                    [(ngModel)]='todas.primeiroNumero'\r\n                    required\r\n                  ></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-icon\r\n                      name=\"ios-person\"\r\n                      color=\"dark\"\r\n                      slot=\"start\"\r\n                    ></ion-icon>\r\n                    <ion-input\r\n                      type=\"text\"\r\n                      name=\"nomePrimeiroNumero\"\r\n                      placeholder=\"Nome ou apelido\"\r\n                      autofocus=\"true\"\r\n                      [(ngModel)]='todas.nomePrimeiroNumero'\r\n                      required\r\n                    ></ion-input>\r\n                </ion-item>\r\n          </ion-card>\r\n\r\n          <!-- SEGUNDO NÚMERO -->\r\n\r\n          <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-title style=\"font-size: 17px; text-align: center;\">Informações da segunda pessoa</ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-item>\r\n                  <ion-icon\r\n                    name=\"md-call\"\r\n                    color=\"dark\"\r\n                    slot=\"start\"\r\n                  ></ion-icon>\r\n                  <ion-input\r\n                        type=\"number\"\r\n                        name=\"segundoNumero\"\r\n                        placeholder=\"Segundo número\"\r\n                        autofocus=\"true\"\r\n                        [(ngModel)]='todas.segundoNumero'\r\n                        required\r\n                      ></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-icon\r\n                      name=\"ios-person\"\r\n                      color=\"dark\"\r\n                      slot=\"start\"\r\n                    ></ion-icon>\r\n                    <ion-input\r\n                        type=\"text\"\r\n                        name=\"nomeSegundoNumero\"\r\n                        placeholder=\"Nome ou apelido\"\r\n                        autofocus=\"true\"\r\n                        [(ngModel)]='todas.nomeSegundoNumero'\r\n                        required\r\n                      ></ion-input>\r\n                </ion-item>\r\n          </ion-card>\r\n\r\n          <!-- FRASE QUE GOSTA -->\r\n\r\n          <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-title style=\"font-size: 17px; text-align: center;\">Frase que você gosta</ion-card-title>\r\n              </ion-card-header>\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"ios-bulb\"\r\n              color=\"dark\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-textarea\r\n              name=\"frase\"\r\n              autofocus=\"true\"\r\n              [(ngModel)]='todas.frase'\r\n              required\r\n              rows=\"5\"\r\n              cols=\"10\"\r\n              placeholder=\"Escreva aqui sua frase...\"\r\n            ></ion-textarea>\r\n          </ion-item>\r\n          </ion-card>\r\n\r\n          <!-- FOTO QUE GOSTA -->\r\n\r\n          <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-title style=\"font-size: 17px; text-align: center;\">Foto que você gosta e admira</ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-item (click)=\"abrirGaleria()\">\r\n\r\n              <ion-icon\r\n                name=\"add\"\r\n                color=\"primary\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              Clique para escolher\r\n            </ion-item>\r\n\r\n              <ion-label style=\"font-size: 12pt;\">Prè-Visualização</ion-label>\r\n              <img [src]=\"todas.foto\">\r\n\r\n            \r\n        </ion-card>\r\n  \r\n\r\n          <!-- BOTÃO DE CADASTRO -->\r\n\r\n          <ion-button\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            class=\"login-button\"\r\n            (click)=\"saveTodo()\"\r\n            color='dark'\r\n          >\r\n            Salvar Informações\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _emergencia_cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emergencia-cadastro.page */ "./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _emergencia_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["EmergenciaCadastroPage"]
    }
];
var EmergenciaCadastroPageModule = /** @class */ (function () {
    function EmergenciaCadastroPageModule() {
    }
    EmergenciaCadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_emergencia_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["EmergenciaCadastroPage"]]
        })
    ], EmergenciaCadastroPageModule);
    return EmergenciaCadastroPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emergenciaCadastro/emergencia-cadastro.service */ "./src/app/services/emergenciaCadastro/emergencia-cadastro.service.ts");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__);











var EmergenciaCadastroPage = /** @class */ (function () {
    function EmergenciaCadastroPage(route, loadingController, emergenciaCadastroService, navCtrl, camera, platform, file, storageService, overlay, auth) {
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
    EmergenciaCadastroPage.prototype.ngOnInit = function () {
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.idEmergenciaCadastro = this.route.snapshot.params['id'];
        if (this.idEmergenciaCadastro) {
            this.loadTodo();
        }
    };
    EmergenciaCadastroPage.prototype.loadTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Carregando seus dados, aguarde.'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.emergenciaCadastroService.getTodo(this.idEmergenciaCadastro).subscribe(function (res) {
                            loading.dismiss();
                            _this.todas = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EmergenciaCadastroPage.prototype.saveTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Salvando dados de S.O.S'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.idEmergenciaCadastro) {
                            if (this.photo != '') {
                                this.todas.foto = this.photo;
                            }
                            /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
                            this.emergenciaCadastroService.updateTodo(this.todas, this.idEmergenciaCadastro).then(function () {
                                loading.dismiss();
                                _this.navCtrl.navigateBack('emergencia/emergencia-utilizacao');
                            });
                        }
                        else {
                            if (this.photo != '') {
                                this.todas.foto = this.photo;
                            }
                            /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
                            this.emergenciaCadastroService.addTodo(this.todas, this.idUsuario).then(function () {
                                loading.dismiss();
                                _this.navCtrl.navigateBack('emergencia/emergencia-utilizacao');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EmergenciaCadastroPage.prototype.abrirGaleria = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var opcao;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                opcao = {
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
                    this.camera.getPicture(opcao).then(function (imageData) {
                        // imageData is either a base64 encoded string or a file URI
                        // If it's base64 (DATA_URL):
                        var base64Image = 'data:image/jpeg;base64,' + imageData;
                        _this.photo = base64Image;
                    }, function (err) {
                        // Handle error
                    });
                }
                catch (error) {
                    this.overlay.alert(error);
                }
                return [2 /*return*/];
            });
        });
    };
    EmergenciaCadastroPage.ctorParameters = function () { return [
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
    ]; };
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
    return EmergenciaCadastroPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage/storage */ "./node_modules/@angular/fire/storage/storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


 //Ver se n vai dar pau aqui

var StorageService = /** @class */ (function () {
    function StorageService(afs, alertController) {
        this.afs = afs;
        this.alertController = alertController;
        //Mudar para o genérico
    }
    StorageService.prototype.presentAlert = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            subHeader: 'Subtitle',
                            message: msg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageService.prototype.uploadImagemUsuario = function (uidUsuarioCadastro, photo) {
        var ref = this.afs.ref('UsuarioCadastro/' + uidUsuarioCadastro);
        ref.putString(photo, 'data_url');
        return ref.getDownloadURL();
    };
    StorageService.prototype.uploadImagemAssistenteCadastro = function (idAssistenteCadastro, photo) {
        console.log(photo);
        var ref = this.afs.ref('AssistenteCadastro/' + idAssistenteCadastro);
        ref.putString(photo, 'data_url');
        return ref.getDownloadURL();
    };
    StorageService.prototype.uploadImagemEmergenciaCadastro = function (idEmergenciaCadastro, photo) {
        console.log(photo);
        var ref = this.afs.ref('EmergenciaCadastro/' + idEmergenciaCadastro);
        ref.putString(photo, 'data_url');
        return ref.getDownloadURL();
    };
    StorageService.ctorParameters = function () { return [
        { type: _angular_fire_storage_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_storage_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], StorageService);
    return StorageService;
}());



/***/ })

}]);
//# sourceMappingURL=emergencia-cadastro-emergencia-cadastro-module-es5.js.map