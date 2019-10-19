(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-assistente-cadastro-assistente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cadastro-assistente/cadastro-assistente.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cadastro-assistente/cadastro-assistente.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"dark\">\r\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Personalize seu assistente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-grid>\r\n      <form #form=\"ngForm\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-item>\r\n              <ion-input\r\n                required\r\n                name=\"apelido\"\r\n                type=\"text\"\r\n                placeholder=\"Escolha um 'apelido' \"\r\n                [(ngModel)]='todas.apelido'\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-list>\r\n              <ion-grid fixed>\r\n\r\n                <ion-col size=\"12\">\r\n\r\n                  <ion-item (click)=\"abrirGaleria()\">\r\n                    <ion-icon\r\n                      name=\"add\"\r\n                      color=\"primary\"\r\n                      slot=\"start\"\r\n                    ></ion-icon>\r\n                    Clique para escolher\r\n                  </ion-item>\r\n\r\n                </ion-col>\r\n              </ion-grid>\r\n            </ion-list>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-button\r\n              expand=\"full\"\r\n              (click)=\"saveTodo()\"\r\n            >\r\n              Salvar\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-grid>\r\n  </ion-card>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cadastro_assistente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro-assistente.page */ "./src/app/pages/cadastro-assistente/cadastro-assistente.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _cadastro_assistente_page__WEBPACK_IMPORTED_MODULE_3__["CadastroAssistentePage"]
    }
];
var CadastroAssistentePageModule = /** @class */ (function () {
    function CadastroAssistentePageModule() {
    }
    CadastroAssistentePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_cadastro_assistente_page__WEBPACK_IMPORTED_MODULE_3__["CadastroAssistentePage"]]
        })
    ], CadastroAssistentePageModule);
    return CadastroAssistentePageModule;
}());



/***/ }),

/***/ "./src/app/pages/cadastro-assistente/cadastro-assistente.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cadastro-assistente/cadastro-assistente.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhZGFzdHJvLWFzc2lzdGVudGUvY2FkYXN0cm8tYXNzaXN0ZW50ZS5wYWdlLnNjc3MifQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_assistenteCadastro_assistente_cadastro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/assistenteCadastro/assistente-cadastro.service */ "./src/app/services/assistenteCadastro/assistente-cadastro.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__);









var CadastroAssistentePage = /** @class */ (function () {
    function CadastroAssistentePage(route, loadingController, assistenteCadastroService, navCtrl, camera, overlay, auth) {
        this.route = route;
        this.loadingController = loadingController;
        this.assistenteCadastroService = assistenteCadastroService;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.overlay = overlay;
        this.auth = auth;
        this.todas = {
            id: '',
            apelido: '',
            icone: ''
        };
        this.photo = '';
    }
    CadastroAssistentePage.prototype.ngOnInit = function () {
        this.idAssistenteCadastro = this.route.snapshot.params['id'];
        if (this.idAssistenteCadastro) {
            this.loadTodo();
        }
    };
    CadastroAssistentePage.prototype.loadTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Carregando Dados do Assistente...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.assistenteCadastroService.getTodo(this.idAssistenteCadastro).subscribe(function (res) {
                            loading.dismiss();
                            _this.todas = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastroAssistentePage.prototype.saveTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Salvando dados cadastrados do assistente...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.idAssistenteCadastro) {
                            if (this.photo != '') {
                                this.todas.icone = this.photo;
                            }
                            console.log(this.photo);
                            this.assistenteCadastroService.updateTodo(this.todas, this.idAssistenteCadastro).then(function () {
                                loading.dismiss();
                                _this.navCtrl.navigateBack('/menu/home');
                            });
                        }
                        else {
                            if (this.photo != '') {
                                this.todas.icone = this.photo;
                            }
                            this.assistenteCadastroService.addTodo(this.todas).then(function () {
                                loading.dismiss();
                                _this.navCtrl.navigateBack('/menu/home');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastroAssistentePage.prototype.abrirGaleria = function () {
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
    CadastroAssistentePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: src_app_services_assistenteCadastro_assistente_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["AssistenteCadastroService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
        { type: src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_7__["OverlayService"] },
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] }
    ]; };
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_7__["OverlayService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]])
    ], CadastroAssistentePage);
    return CadastroAssistentePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-assistente-cadastro-assistente-module-es5.js.map