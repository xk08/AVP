(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-assistente-cadastro-assistente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cadastro-assistente/cadastro-assistente.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cadastro-assistente/cadastro-assistente.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"success\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"menu/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Personalize seu assistente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-grid>\r\n      <form #form=\"ngForm\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-item>\r\n              <ion-input\r\n                required\r\n                name=\"apelido\"\r\n                type=\"text\"\r\n                placeholder=\"Escolha um 'apelido' para ele \"\r\n                [(ngModel)]='todas.apelido'\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-list>\r\n              <ion-grid\r\n                fixed\r\n                *ngFor=\"let assistente of listAssistente\"\r\n              >\r\n                <ion-col size=\"12\">\r\n                  <ion-item (click)=\"abrirGaleria()\">\r\n                    <ion-icon\r\n                      name=\"add\"\r\n                      color=\"success\"\r\n                      slot=\"start\"\r\n                    ></ion-icon>\r\n                    Clique aqui e escolha\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-card *ngIf=\"assistente.icone\">\r\n                  <ion-card-header>\r\n                    <ion-card-subtitle>Pré Visualização</ion-card-subtitle>\r\n                  </ion-card-header>\r\n                  <img\r\n                    [src]=\"assistente.icone\"\r\n                    height=\"240px\"\r\n                    width=\"180px\"\r\n                  >\r\n                </ion-card>\r\n              </ion-grid>\r\n            </ion-list>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-button\r\n              expand=\"full\"\r\n              (click)=\"saveTodo()\"\r\n              color=\"success\"\r\n            >\r\n              Pronto\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-grid>\r\n  </ion-card>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_assistenteCadastro_assistente_cadastro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/assistenteCadastro/assistente-cadastro.service */ "./src/app/services/assistenteCadastro/assistente-cadastro.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");









let CadastroAssistentePage = class CadastroAssistentePage {
    constructor(route, loadingController, assistenteCadastroService, navCtrl, camera, overlay, auth) {
        this.route = route;
        this.loadingController = loadingController;
        this.assistenteCadastroService = assistenteCadastroService;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.overlay = overlay;
        this.auth = auth;
        this.photo = '';
        this.todas = {
            idUsuario: '',
            apelido: '',
            icone: ''
        };
    }
    ngOnInit() {
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.idCadastroAssistente = this.route.snapshot.params['id'];
        if (this.idUsuario) {
            this.loadTodo();
        }
    }
    loadTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Carregando ""algoo""...'
            });
            yield loading.present();
            this.assistenteCadastroService.getTodos(this.idUsuario).subscribe(res => {
                loading.dismiss();
                this.listAssistente = res;
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_7__["OverlayService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] }
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
        src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_7__["OverlayService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]])
], CadastroAssistentePage);



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-assistente-cadastro-assistente-module-es2015.js.map