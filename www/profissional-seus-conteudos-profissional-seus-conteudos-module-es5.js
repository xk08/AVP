(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profissional-seus-conteudos-profissional-seus-conteudos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"medium\">\r\n\r\n    <ion-buttons>\r\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\r\n      <div>\r\n        <ion-button\r\n          shape=\"round\"\r\n          fill=\"outline\"\r\n          (click)=\"direcionaPraTelaCadastro()\"\r\n        >\r\n          Novo conteúdo\r\n        </ion-button>\r\n      </div>\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-header translucent>\r\n  <ion-toolbar translucent>\r\n    <ion-title style=\"text-align: center; font-size: 13pt\">Gerencie seus conteúdos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- RESPONSÁVEL PELOS TEXTOS-->\r\n  <ion-list>\r\n\r\n      <ion-header translucent>\r\n          <ion-toolbar translucent color=\"amareloprofissional\">\r\n            <ion-title style=\"font-size: 13pt\">Seus textos cadastrados</ion-title>\r\n          </ion-toolbar>\r\n        </ion-header>\r\n\r\n\r\n    <ion-item-sliding\r\n      *ngFor=\"let texto of profissionalConteudoTexto\"\r\n    >\r\n      <ion-item lines=\"full\" class=\"testeAmarelo\">\r\n        <ion-col style=\"text-align: center;\">\r\n          <ion-row class=\"ion-padding\">\r\n            <ion-label  style=\"color: black;\">Frase Cadastrada</ion-label>\r\n\r\n          </ion-row>\r\n          <ion-col  style=\"color: black;\">\r\n            <ion-text style=\"text-align: center; font-size: 15pt;\">{{ texto.texto }}</ion-text>\r\n          </ion-col>\r\n        </ion-col>\r\n      </ion-item>\r\n\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option\r\n          [routerLink]=\"['/menu/profissional-conteudo/profissional-conteudo-texto', texto.id]\"\r\n        >\r\n          <ion-icon\r\n            slot=\"icon-only\"\r\n            name=\"ios-construct\"\r\n          ></ion-icon>\r\n          Editar\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n      <ion-item-options side=\"end\">\r\n\r\n        <ion-item-option\r\n          color=\"danger\"\r\n          (click)=\"removeTexto(texto.id)\"\r\n        >\r\n          <ion-icon\r\n            slot=\"icon-only\"\r\n            name=\"md-trash\"\r\n          ></ion-icon>\r\n          Remover\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n\r\n  <!-- RESPONSÁVEL PELAS IMAGENS-->\r\n\r\n  <ion-list>\r\n      <ion-header translucent>\r\n          <ion-toolbar translucent color=\"primary\">\r\n            <ion-title style=\"font-size: 13pt\">Suas imagens cadastradas</ion-title>\r\n          </ion-toolbar>\r\n        </ion-header>\r\n\r\n    <ion-item-sliding\r\n    *ngFor=\"let imagem of profissionalConteudoImagem\"\r\n\r\n    >\r\n\r\n\r\n      <ion-item lines=\"full\">\r\n        <ion-col>\r\n        <ion-row>\r\n            <ion-col  style=\"color: black;\">\r\n                <img\r\n                src=\"{{imagem.imagem}}\"\r\n                width=\"180px\"\r\n                height=\"150px\"\r\n              >\r\n              </ion-col>\r\n          <ion-col>\r\n            <ion-row class=\"ion-padding\">\r\n              <ion-label  style=\" font-size:16pt; color: black;\">Titulo da imagem</ion-label>\r\n              <ion-text style=\"font-size: 12pt;\">{{ imagem.tituloImagem }}</ion-text>\r\n            </ion-row>\r\n            <ion-row class=\"ion-padding\">\r\n                <ion-label  style=\" font-size:16pt; color: black;\">Autor da Imagem</ion-label>\r\n                <ion-text style=\"font-size: 12pt;\">{{ imagem.autorImagem }}</ion-text>\r\n              </ion-row>\r\n          </ion-col>\r\n\r\n\r\n        </ion-row>\r\n      </ion-col>\r\n      </ion-item>\r\n\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option\r\n          [routerLink]=\"['/menu/profissional-conteudo/profissional-conteudo-imagem', imagem.id]\"\r\n        >\r\n          <ion-icon\r\n            slot=\"icon-only\"\r\n            name=\"ios-construct\"\r\n          ></ion-icon>\r\n          Editar\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n      <ion-item-options side=\"end\">\r\n\r\n        <ion-item-option\r\n          color=\"danger\"\r\n          (click)=\"removeImagem(imagem.id)\"\r\n        >\r\n          <ion-icon\r\n            slot=\"icon-only\"\r\n            name=\"md-trash\"\r\n          ></ion-icon>\r\n          Remover\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n    <!-- RESPONSÁVEL PELOS VIDEOS-->\r\n\r\n    <ion-list>\r\n        <ion-header translucent>\r\n            <ion-toolbar translucent color=\"tertiary\">\r\n              <ion-title style=\"font-size: 13pt\">Seus videos cadastrados</ion-title>\r\n            </ion-toolbar>\r\n          </ion-header>\r\n\r\n        <ion-item-sliding\r\n        *ngFor=\"let video of profissionalConteudoVideo\"\r\n        >\r\n\r\n\r\n          <ion-item lines=\"full\">\r\n            <ion-col>\r\n\r\n            <ion-row>\r\n\r\n              <ion-col>\r\n                <ion-row class=\"ion-padding\">\r\n                  <ion-label  style=\" font-size:16pt; color: black;\">Titulo do video</ion-label>\r\n                  <ion-text style=\"font-size: 12pt;\">{{ video.tituloVideo }}</ion-text>\r\n                </ion-row>\r\n                <ion-row class=\"ion-padding\">\r\n                    <ion-label  style=\" font-size:16pt; color: black;\">Autor do video</ion-label>\r\n                    <ion-text style=\"font-size: 12pt;\">{{ video.autorVideo }}</ion-text>\r\n                  </ion-row>\r\n              </ion-col>\r\n\r\n              <ion-col>\r\n                  <!-- ver se consigo pegar dinamico a THUMB -->\r\n                    <img\r\n                    src=\"../../../assets/img/abrirmente.PNG\"\r\n                    width=\"180px\"\r\n                    height=\"150px\"\r\n                  >\r\n                  </ion-col>\r\n\r\n\r\n            </ion-row>\r\n          </ion-col>\r\n          </ion-item>\r\n\r\n          <ion-item-options side=\"start\">\r\n            <ion-item-option\r\n              [routerLink]=\"['/menu/profissional-conteudo/profissional-conteudo-video', video.id]\"\r\n            >\r\n              <ion-icon\r\n                slot=\"icon-only\"\r\n                name=\"ios-construct\"\r\n              ></ion-icon>\r\n              Editar\r\n            </ion-item-option>\r\n          </ion-item-options>\r\n\r\n          <ion-item-options side=\"end\">\r\n\r\n            <ion-item-option\r\n              color=\"danger\"\r\n              (click)=\"removeVideo(video.id)\"\r\n            >\r\n              <ion-icon\r\n                slot=\"icon-only\"\r\n                name=\"md-trash\"\r\n              ></ion-icon>\r\n              Remover\r\n            </ion-item-option>\r\n          </ion-item-options>\r\n\r\n        </ion-item-sliding>\r\n      </ion-list>\r\n\r\n\r\n\r\n  <!-- Looping dos Videos\r\n\r\n  <ion-card\r\n    *ngFor=\"let video of profissionalConteudoVideo\"\r\n    style=\"background-color:lightsteelblue;\"\r\n    [routerLink]=\"['/menu/profissional-conteudo/profissional-conteudo-video', video.id]\"\r\n  >\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Video cadastrado</ion-card-subtitle>\r\n    </ion-card-header>\r\n\r\n    <!-- achar alguma forma de pegar a thumbs\r\n    <img src=\"../../../assets/img/abrirmente.PNG\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Video do Youtube</ion-card-subtitle>\r\n      <ion-card-title>{{video.tituloVideo}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>{{video.descricaoVideo}}</ion-card-content>\r\n  </ion-card>\r\n-->\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var OverlayService = /** @class */ (function () {
    function OverlayService(alertCtrl, loadingCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    OverlayService.prototype.alert = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create(options)];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, alert];
                }
            });
        });
    };
    OverlayService.prototype.loading = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ message: 'Loading...' }, options))];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        loading.dismiss();
                        return [2 /*return*/, loading];
                }
            });
        });
    };
    OverlayService.prototype.toast = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ position: 'bottom', duration: 3000, showCloseButton: true, closeButtonText: 'Ok' }, options))];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, toast];
                }
            });
        });
    };
    OverlayService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    OverlayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], OverlayService);
    return OverlayService;
}());



/***/ }),

/***/ "./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProfissionalSeusConteudosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalSeusConteudosPageModule", function() { return ProfissionalSeusConteudosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profissional_seus_conteudos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profissional-seus-conteudos.page */ "./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _profissional_seus_conteudos_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalSeusConteudosPage"]
    }
];
var ProfissionalSeusConteudosPageModule = /** @class */ (function () {
    function ProfissionalSeusConteudosPageModule() {
    }
    ProfissionalSeusConteudosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_profissional_seus_conteudos_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalSeusConteudosPage"]]
        })
    ], ProfissionalSeusConteudosPageModule);
    return ProfissionalSeusConteudosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button-inner {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\ndiv {\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-item {\n  background-color: lightgreen;\n  --border-color: #989aa2;\n  --border-width: 15px 0px 25px 10px;\n  --border-start-width: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlzc2lvbmFsLXNldXMtY29udGV1ZG9zL0Q6XFx0Y2Mvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maXNzaW9uYWwtc2V1cy1jb250ZXVkb3NcXHByb2Zpc3Npb25hbC1zZXVzLWNvbnRldWRvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2Zpc3Npb25hbC1zZXVzLWNvbnRldWRvcy9wcm9maXNzaW9uYWwtc2V1cy1jb250ZXVkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREtFO0VBQ0UsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zpc3Npb25hbC1zZXVzLWNvbnRldWRvcy9wcm9maXNzaW9uYWwtc2V1cy1jb250ZXVkb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLWlubmVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5kaXYge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuXHJcbiAgaW9uLWl0ZW17IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbiA7IFxyXG4gICAgLS1ib3JkZXItY29sb3I6ICM5ODlhYTI7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMTVweCAwcHggMjVweCAxMHB4O1xyXG4gICAgLS1ib3JkZXItc3RhcnQtd2lkdGg6IDEwcHg7XHJcblxyXG4gICB9XHJcblxyXG4iLCJidXR0b24taW5uZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICAtLWJvcmRlci1jb2xvcjogIzk4OWFhMjtcbiAgLS1ib3JkZXItd2lkdGg6IDE1cHggMHB4IDI1cHggMTBweDtcbiAgLS1ib3JkZXItc3RhcnQtd2lkdGg6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.ts ***!
  \***************************************************************************************/
/*! exports provided: ProfissionalSeusConteudosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalSeusConteudosPage", function() { return ProfissionalSeusConteudosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service */ "./src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service.ts");
/* harmony import */ var src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service */ "./src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service */ "./src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ProfissionalSeusConteudosPage = /** @class */ (function () {
    function ProfissionalSeusConteudosPage(navctrl, auth, profissionalConteudoTextoService, profissionalConteudoImagemService, profissionalConteudoVideoService, route, toastController, alertController) {
        this.navctrl = navctrl;
        this.auth = auth;
        this.profissionalConteudoTextoService = profissionalConteudoTextoService;
        this.profissionalConteudoImagemService = profissionalConteudoImagemService;
        this.profissionalConteudoVideoService = profissionalConteudoVideoService;
        this.route = route;
        this.toastController = toastController;
        this.alertController = alertController;
    }
    ProfissionalSeusConteudosPage.prototype.ngOnInit = function () {
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.buscaDadosTexto(this.idUsuario);
        this.buscaDadosImagem(this.idUsuario);
        this.buscaDadosVideo(this.idUsuario);
    };
    ProfissionalSeusConteudosPage.prototype.buscaDadosTexto = function (idUsuario) {
        var _this = this;
        this.listProfissionalConteudoTexto = this.profissionalConteudoTextoService
            .getTodosPorID(this.idUsuario)
            .subscribe(function (res) {
            _this.profissionalConteudoTexto = res;
            // Percorrendo os dados da coleção
            res.forEach(function (x) {
                _this.tituloTextoTela = x.tituloTexto;
                _this.descricaoTextoTela = x.texto;
                _this.autorTextoTela = x.autorTexto;
            });
        });
    };
    ProfissionalSeusConteudosPage.prototype.buscaDadosImagem = function (idUsuario) {
        var _this = this;
        //Pegando os dados informados pelo usuário, sobre a sua situação
        this.listProfissionalConteudoImagem = this.profissionalConteudoImagemService
            .getTodosPorID(this.idUsuario)
            .subscribe(function (res) {
            _this.profissionalConteudoImagem = res;
            res.forEach(function (x) {
                _this.tituloImagemTela = x.tituloImagem;
                _this.maisInfoImagemTela = x.maisInfoImagem;
                _this.autorImagemTela = x.autorImagem;
                _this.imagem64Tela = x.imagem;
            });
        });
    };
    ProfissionalSeusConteudosPage.prototype.buscaDadosVideo = function (idUsuario) {
        var _this = this;
        this.listProfissionalConteudoVideo = this.profissionalConteudoVideoService
            .getTodosPorID(this.idUsuario)
            .subscribe(function (res) {
            _this.profissionalConteudoVideo = res;
            res.forEach(function (x) {
                _this.tituloVideoTela = x.tituloVideo;
                _this.descricaoVideoTela = x.descricaoVideo;
                _this.linkVideoTela = x.linkVideo;
                _this.autorVideoTela = x.autorVideo;
            });
        });
    };
    ProfissionalSeusConteudosPage.prototype.removeTexto = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Apagar texto',
                            message: "Você tem certeza que deseja apagar ?",
                            buttons: [
                                {
                                    text: 'Não',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        // Não faz nada no momento
                                    }
                                },
                                {
                                    text: 'Sim',
                                    handler: function () {
                                        _this.profissionalConteudoTextoService
                                            .removeTodo(id);
                                        _this.presentToast('O texto foi apagado');
                                    }
                                }
                            ]
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
    ProfissionalSeusConteudosPage.prototype.removeImagem = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Apagar imagem',
                            message: "Você tem certeza que deseja apagar ?",
                            buttons: [
                                {
                                    text: 'Não',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        // Não faz nada
                                    }
                                },
                                {
                                    text: 'Sim',
                                    handler: function () {
                                        _this.profissionalConteudoImagemService
                                            .removeTodo(id);
                                        _this.presentToast('A imagem foi apagada');
                                    }
                                }
                            ]
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
    ProfissionalSeusConteudosPage.prototype.removeVideo = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Apagar video',
                            message: "Você tem certeza que deseja apagar ?",
                            buttons: [
                                {
                                    text: 'Não',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        // Não faz nada
                                    }
                                },
                                {
                                    text: 'Sim',
                                    handler: function () {
                                        _this.profissionalConteudoVideoService
                                            .removeTodo(id);
                                        _this.presentToast('O video foi apagado');
                                    }
                                }
                            ]
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
    ProfissionalSeusConteudosPage.prototype.ngOnDestroy = function () {
        this.listProfissionalConteudoTexto.unsubscribe();
        this.listProfissionalConteudoImagem.unsubscribe();
        this.listProfissionalConteudoVideo.unsubscribe();
    };
    ProfissionalSeusConteudosPage.prototype.direcionaPraTelaCadastro = function () {
        this.navctrl.navigateForward('/menu/profissional-conteudo/profissional-conteudo-texto');
    };
    ProfissionalSeusConteudosPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfissionalSeusConteudosPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
        { type: src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoTextoService"] },
        { type: src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_4__["ProfissionalConteudoImagemService"] },
        { type: src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_6__["ProfissionalConteudoVideoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    ProfissionalSeusConteudosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profissional-seus-conteudos',
            template: __webpack_require__(/*! raw-loader!./profissional-seus-conteudos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.html"),
            styles: [__webpack_require__(/*! ./profissional-seus-conteudos.page.scss */ "./src/app/pages/profissional-seus-conteudos/profissional-seus-conteudos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoTextoService"],
            src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_4__["ProfissionalConteudoImagemService"],
            src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_6__["ProfissionalConteudoVideoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ProfissionalSeusConteudosPage);
    return ProfissionalSeusConteudosPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");





var LogoutButtonComponent = /** @class */ (function () {
    function LogoutButtonComponent(authService, menuCtrl, navCtrl, overlayService) {
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.overlayService = overlayService;
    }
    LogoutButtonComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.menuCtrl.isEnabled(this.menuId)];
                    case 1:
                        if (!(_a.sent())) {
                            //Checka se o menu esta habilitado
                            this.menuCtrl.enable(true, this.menuId); // Se não estiver, indica o  id   do menu q qer habilitar
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LogoutButtonComponent.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.overlayService.alert({
                            //Apresenta a mensagem
                            message: 'Deseja mesmo sair ?',
                            buttons: [
                                {
                                    text: 'Sim',
                                    handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.authService.signOut()];
                                                case 1:
                                                    _a.sent(); // chama o método de deslogar criado
                                                    /* AULA 95 ->
                                                    Se usário estiver deslogado, desabilita o login
                                                    #USAR PARA TIPOS DE USUÁRIO NO FUTURO ???
                                                    */
                                                    return [4 /*yield*/, this.menuCtrl.enable(false, this.menuId)];
                                                case 2:
                                                    /* AULA 95 ->
                                                    Se usário estiver deslogado, desabilita o login
                                                    #USAR PARA TIPOS DE USUÁRIO NO FUTURO ???
                                                    */
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                },
                                'Não' // Não faz nada e segue a execução
                            ]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LogoutButtonComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
        { type: src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__["OverlayService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LogoutButtonComponent.prototype, "menuId", void 0);
    LogoutButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-logout-button',
            template: "\n    <ion-buttons>\n      <ion-button (click)=\"logout()\">\n        <ion-icon name=\"exit\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__["OverlayService"]])
    ], LogoutButtonComponent);
    return LogoutButtonComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* AULA 92 -> Componente genérico de menu, que pode ser chamado em qualquer momento na aplicação */

var MenuToggleComponent = /** @class */ (function () {
    function MenuToggleComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MenuToggleComponent.prototype, "menu", void 0);
    MenuToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-toggle',
            /* Usando HTML inline, não necessitdando de arquivos externos */
            template: "\n    <ion-buttons>\n      <ion-menu-toggle [menu]=\"menu\">\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n  "
        })
    ], MenuToggleComponent);
    return MenuToggleComponent;
}());



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_menu_toggle_menu_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu-toggle/menu-toggle.component */ "./src/app/shared/components/menu-toggle/menu-toggle.component.ts");
/* harmony import */ var _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/logout-button/logout-button.component */ "./src/app/shared/components/logout-button/logout-button.component.ts");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
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
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=profissional-seus-conteudos-profissional-seus-conteudos-module-es5.js.map