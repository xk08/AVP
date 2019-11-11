(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profissional-conteudo-video-profissional-conteudo-video-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo-video/profissional-conteudo-video.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-conteudo-video/profissional-conteudo-video.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header translucent>\r\n  <ion-toolbar color=\"#FFFF\">\r\n    <ion-title style=\"text-align: center; font-size: 12pt\">Divulgue uma frase de apoio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <!-- Deixa responsivo -->\r\n      <ion-col\r\n        size-sm=\"8\"\r\n        size-md=\"12\"\r\n        size-lg=\"3\"\r\n        size-xl=\"3\"\r\n      >\r\n        <form #form=\"ngForm\">\r\n          <ion-card>\r\n            <ion-card-header style=\"background-color: #D0BBFF;\">\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">\r\n                Direcione um video a alguém que precisa de ajuda\r\n              </ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"ios-bulb\"\r\n                color=\"tertiary\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                name=\"video\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.linkVideo\"\r\n                required\r\n                rows=\"2\"\r\n                cols=\"8\"\r\n                placeholder=\"Cole aqui o endereço (URL) do video...\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n\r\n            <!-- Pré visualização -->\r\n            <ion-card>\r\n              <ion-card-header style=\"background-color: #D0BBFF;\">\r\n                <ion-card-title style=\"font-size: 17px; text-align: center;\">Pré visualização do video escolhido</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-card>\r\n\r\n          <ion-item\r\n            href\r\n            class=\"activated\"\r\n            color=\"tertiary\"\r\n          >\r\n            <ion-toggle\r\n              [(ngModel)]=\"mostraMaisInfo\"\r\n              (ionChange)=\"changeMaisInfo()\"\r\n              color=\"medium\"\r\n              slot=\"end\"\r\n              name=\"maisInfo\"\r\n            ></ion-toggle>\r\n            <ion-label class=\"ion-text-center\">Informações complementares</ion-label>\r\n          </ion-item>\r\n\r\n          <ion-card\r\n            style=\"background-color:  #D0BBFF;\"\r\n            *ngIf=\"mostraMaisInfo\"\r\n          >\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"add\"\r\n                slot=\"start\"\r\n                color=\"tertiary\"\r\n              >\r\n              </ion-icon>\r\n              <ion-input\r\n                type=\"text\"\r\n                name=\"tituloVideo\"\r\n                placeholder=\"Titulo do Video\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.tituloVideo\"\r\n                required\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"add\"\r\n                slot=\"start\"\r\n                color=\"tertiary\"\r\n              >\r\n              </ion-icon>\r\n              <ion-input\r\n                type=\"text\"\r\n                name=\"autorVideo\"\r\n                placeholder=\"Autor do video\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.autorVideo\"\r\n                required\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-icon\r\n                name=\"add\"\r\n                color=\"tertiary\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                name=\"descricaoVideo\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.descricaoVideo\"\r\n                required\r\n                rows=\"2\"\r\n                cols=\"5\"\r\n                placeholder=\"Informações complementares sobre o video...\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <ion-item\r\n            href\r\n            class=\"activated\"\r\n            color=\"tertiary\"\r\n          >\r\n            <ion-toggle\r\n              [(ngModel)]=\"mostraFiltro\"\r\n              (ionChange)=\"changeFiltro()\"\r\n              slot=\"end\"\r\n              name=\"filtro\"\r\n              color=\"medium\"\r\n            ></ion-toggle>\r\n            <ion-label class=\"ion-text-center\">Filtro de Conteúdos</ion-label>\r\n          </ion-item>\r\n\r\n          <ion-card *ngIf=\"mostraFiltro\">\r\n            <ion-card-header style=\"background-color: #D0BBFF;\">\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Faixa etária destinada</ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <ion-radio-group\r\n              [(ngModel)]=\"todas.idade\"\r\n              name=\"selecionaIdade\"\r\n            >\r\n              <ion-item>\r\n                <ion-label>8 a 12 anos</ion-label>\r\n                <ion-radio\r\n                  name=\"8a12\"\r\n                  value=\"8 a 12\"\r\n                  slot=\"start\"\r\n                  color=\"tertiary\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>13 a 17 anos</ion-label>\r\n                <ion-radio\r\n                  name=\"13a17\"\r\n                  value=\"13 a 17\"\r\n                  slot=\"start\"\r\n                  color=\"tertiary\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>18 anos ou mais</ion-label>\r\n                <ion-radio\r\n                  name=\"18a35\"\r\n                  value=\"18 anos ou mais\"\r\n                  slot=\"start\"\r\n                  color=\"tertiary\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n\r\n            <ion-card-header style=\"background-color:  #D0BBFF;\">\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\">Avaliação do usuário</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-row>\r\n              <ion-item\r\n                *ngFor=\"let star of stars; let i = index\"\r\n                tappable\r\n                (click)=\"starClicked(i)\"\r\n                [(ngModel)]=\"todas.avaliacao\"\r\n                name=\"avaliacao\"\r\n              >\r\n                <ion-icon\r\n                  [name]=\"star\"\r\n                  color=\"primary\"\r\n                  color=\"tertiary\"\r\n                ></ion-icon>\r\n              </ion-item>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            class=\"login-button\"\r\n            (click)=\"saveTodo()\"\r\n            color=\"dark\"\r\n          >\r\n            Criar conteúdo\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profissional_conteudo_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profissional-conteudo-video.page */ "./src/app/pages/profissional-conteudo-video/profissional-conteudo-video.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _profissional_conteudo_video_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoVideoPage"]
    }
];
var ProfissionalConteudoVideoPageModule = /** @class */ (function () {
    function ProfissionalConteudoVideoPageModule() {
    }
    ProfissionalConteudoVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_profissional_conteudo_video_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoVideoPage"]]
        })
    ], ProfissionalConteudoVideoPageModule);
    return ProfissionalConteudoVideoPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service */ "./src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);







var ProfissionalConteudoVideoPage = /** @class */ (function () {
    function ProfissionalConteudoVideoPage(route, loadingController, conteudoVideoService, navCtrl, auth) {
        this.route = route;
        this.loadingController = loadingController;
        this.conteudoVideoService = conteudoVideoService;
        this.navCtrl = navCtrl;
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
            avaliacao: null
        };
    }
    ProfissionalConteudoVideoPage.prototype.changeFiltro = function () {
        console.log(this.mostraMaisInfo);
    };
    ProfissionalConteudoVideoPage.prototype.changeMaisInfo = function () {
        console.log(this.mostraFiltro);
    };
    //RatebarStar
    ProfissionalConteudoVideoPage.prototype.calc = function () {
        this.stars = [];
        var tmp = this.valor;
        for (var i = 0; i < this.numStars; i++, tmp--) {
            if (tmp >= 1)
                this.stars.push('star');
            else if (tmp > 0 && tmp < 1)
                this.stars.push('star-half');
            else
                this.stars.push('star-outline');
        }
    };
    ProfissionalConteudoVideoPage.prototype.starClicked = function (index) {
        this.valor = index + 1;
        this.ionClick.emit(this.valor);
        this.calc();
        this.geral = this.valor;
    };
    ProfissionalConteudoVideoPage.prototype.ngOnInit = function () {
        this.calc();
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.idConteudoVideo = this.route.snapshot.params['id']; //Pegando o id para uma futura edição
        if (this.idConteudoVideo) {
            this.loadTodo();
        }
    };
    ProfissionalConteudoVideoPage.prototype.loadTodo = function () {
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
                        this.conteudoVideoService.getTodo(this.idConteudoVideo).subscribe(function (res) {
                            loading.dismiss();
                            _this.todas = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfissionalConteudoVideoPage.prototype.saveTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Salvando o video cadastrado'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.idConteudoVideo) {
                            /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
                            this.todas.avaliacao = this.geral;
                            this.conteudoVideoService.updateTodo(this.todas, this.idConteudoVideo).then(function () {
                                loading.dismiss();
                                _this.navCtrl.navigateBack('/menu/profissional-todos-conteudos');
                            });
                        }
                        else {
                            /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
                            this.todas.avaliacao = this.geral;
                            this.todas.idUsuario = this.idUsuario;
                            this.conteudoVideoService.addTodo(this.todas).then(function () {
                                loading.dismiss();
                                _this.navCtrl.navigateForward('/menu/profissional-todos-conteudos');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfissionalConteudoVideoPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_5__["ProfissionalConteudoVideoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] }
    ]; };
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
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]])
    ], ProfissionalConteudoVideoPage);
    return ProfissionalConteudoVideoPage;
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
//# sourceMappingURL=profissional-conteudo-video-profissional-conteudo-video-module-es5.js.map