(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-quero-conversar-quero-conversar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quero-conversar/quero-conversar.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quero-conversar/quero-conversar.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"menu/home\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <!-- Deixa responsivo -->\r\n      <ion-col size-sm=\"8\" size-md=\"12\" size-lg=\"3\" size-xl=\"3\">\r\n        <form #form=\"ngForm\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle>{{ nomeUsuarioLogado }}</ion-card-subtitle>\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\"\r\n                >No que você está pensando agora ?</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n\r\n            <ion-item>\r\n              <ion-textarea\r\n                name=\"textoLivre\"\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"todas.textoLivre\"\r\n                required\r\n                rows=\"5\"\r\n                cols=\"15\"\r\n                placeholder=\"Escreva seu texto aqui ...\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title style=\"font-size: 17px; text-align: center;\"\r\n                >Como você está nesse momento ?</ion-card-title\r\n              >\r\n            </ion-card-header>\r\n\r\n            <ion-row>\r\n              <ion-item\r\n                *ngFor=\"let star of stars; let i = index\"\r\n                tappable\r\n                (click)=\"starClicked(i)\"\r\n                [(ngModel)]=\"todas.avaliacao\"\r\n                name=\"avaliacaoUsuario\"\r\n              >\r\n                <ion-icon [name]=\"star\"></ion-icon>\r\n              </ion-item>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            class=\"login-button\"\r\n            (click)=\"saveTodo()\"\r\n            color=\"dark\"\r\n          >\r\n            Enviar\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/quero-conversar/quero-conversar.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/quero-conversar/quero-conversar.module.ts ***!
  \*****************************************************************/
/*! exports provided: QueroConversarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueroConversarPageModule", function() { return QueroConversarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quero_conversar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quero-conversar.page */ "./src/app/pages/quero-conversar/quero-conversar.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _quero_conversar_page__WEBPACK_IMPORTED_MODULE_3__["QueroConversarPage"]
    }
];
var QueroConversarPageModule = /** @class */ (function () {
    function QueroConversarPageModule() {
    }
    QueroConversarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_quero_conversar_page__WEBPACK_IMPORTED_MODULE_3__["QueroConversarPage"]]
        })
    ], QueroConversarPageModule);
    return QueroConversarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/quero-conversar/quero-conversar.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/quero-conversar/quero-conversar.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-rating-container {\n  font-size: 30;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVlcm8tY29udmVyc2FyL0Q6XFx0Y2Mvc3JjXFxhcHBcXHBhZ2VzXFxxdWVyby1jb252ZXJzYXJcXHF1ZXJvLWNvbnZlcnNhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3F1ZXJvLWNvbnZlcnNhci9xdWVyby1jb252ZXJzYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVlcm8tY29udmVyc2FyL3F1ZXJvLWNvbnZlcnNhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcmF0aW5nLWNvbnRhaW5lciB7XHJcbiAgZm9udC1zaXplOiAzMDtcclxufVxyXG4iLCJpb24tcmF0aW5nLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMzA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/quero-conversar/quero-conversar.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/quero-conversar/quero-conversar.page.ts ***!
  \***************************************************************/
/*! exports provided: QueroConversarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueroConversarPage", function() { return QueroConversarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/queroConversar/quero-conversar.service */ "./src/app/services/queroConversar/quero-conversar.service.ts");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/usuarioCadastro/usuario-cadastro.service */ "./src/app/services/usuarioCadastro/usuario-cadastro.service.ts");









var QueroConversarPage = /** @class */ (function () {
    function QueroConversarPage(route, loadingController, queroConversarService, navCtrl, overlay, auth, usuarioCadastroService) {
        this.route = route;
        this.loadingController = loadingController;
        this.queroConversarService = queroConversarService;
        this.navCtrl = navCtrl;
        this.overlay = overlay;
        this.auth = auth;
        this.usuarioCadastroService = usuarioCadastroService;
        //Refernete ao ratebar
        this.numStars = 5;
        this.valor = 0;
        this.ionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stars = [];
        this.todas = {
            id: '',
            idUsuario: '',
            textoLivre: '',
            avaliacao: 0
        };
    }
    //RatebarStar
    QueroConversarPage.prototype.calc = function () {
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
    QueroConversarPage.prototype.starClicked = function (index) {
        this.valor = index + 1;
        this.ionClick.emit(this.valor);
        this.calc();
        this.geral = this.valor;
    };
    QueroConversarPage.prototype.logRatingChange = function (rating) {
        console.log('changed rating: ', rating);
        // do your stuff
    };
    QueroConversarPage.prototype.ngOnInit = function () {
        var _this = this;
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.calc();
        this.idQueroConversar = this.route.snapshot.params['id'];
        if (this.idQueroConversar) {
            this.loadTodo();
        }
        //Pegando dados do Usuário para exibir na tela
        this.list = this.usuarioCadastroService
            .getUsuario(this.auth.auth.currentUser.uid)
            .subscribe(function (res) {
            _this.nomeUsuarioLogado = res.nome;
        });
    };
    QueroConversarPage.prototype.loadTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Carregando Dados Informados...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.queroConversarService.getTodo(this.idQueroConversar).subscribe(function (res) {
                            loading.dismiss();
                            _this.todas = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    QueroConversarPage.prototype.saveTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Salvando dados que foram informados'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.idQueroConversar) {
                            this.todas.avaliacao = this.geral;
                            this.queroConversarService.updateTodo(this.todas, this.idQueroConversar).then(function () {
                                loading.dismiss();
                                _this.navCtrl.navigateBack('/menu/home');
                            });
                        }
                        else {
                            this.todas.avaliacao = this.geral;
                            this.todas.idUsuario = this.idUsuario;
                            this.queroConversarService.addTodo(this.todas, this.idUsuario).then(function () {
                                loading.dismiss();
                                _this.navCtrl.navigateBack('/menu/conteudo-especifico');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    QueroConversarPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_5__["QueroConversarService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_6__["OverlayService"] },
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
        { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioCadastroService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], QueroConversarPage.prototype, "numStars", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], QueroConversarPage.prototype, "valor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], QueroConversarPage.prototype, "ionClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], QueroConversarPage.prototype, "form", void 0);
    QueroConversarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quero-conversar',
            template: __webpack_require__(/*! raw-loader!./quero-conversar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quero-conversar/quero-conversar.page.html"),
            styles: [__webpack_require__(/*! ./quero-conversar.page.scss */ "./src/app/pages/quero-conversar/quero-conversar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_5__["QueroConversarService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_6__["OverlayService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"],
            src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioCadastroService"]])
    ], QueroConversarPage);
    return QueroConversarPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-quero-conversar-quero-conversar-module-es5.js.map