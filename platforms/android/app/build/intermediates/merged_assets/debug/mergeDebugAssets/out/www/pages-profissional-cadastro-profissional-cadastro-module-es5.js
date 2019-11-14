(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profissional-cadastro-profissional-cadastro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-cadastro/profissional-cadastro.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-cadastro/profissional-cadastro.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Suas informações</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <!-- Deixa responsivo -->\r\n      <ion-col\r\n        size-sm=\"8\"\r\n        size-md=\"12\"\r\n        size-lg=\"3\"\r\n        size-xl=\"3\"\r\n      >\r\n        <h1 style=text-align:center>\r\n          <img\r\n            src=\"../../../assets/img/avp.png\"\r\n            width=\"130px\"\r\n            height=\"100px\"\r\n          >\r\n        </h1>\r\n        <form [formGroup]=\"formgroup\">\r\n          <!-- NOME -->\r\n          <ion-item>\r\n            <ion-icon\r\n              color=\"dark\"\r\n              name=\"person\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"text\"\r\n              formControlName=\"nome\"\r\n              placeholder=\"Nome\"\r\n              [(ngModel)]='todoUser.nome'\r\n              required\r\n            ></ion-input>\r\n            <div class=\"erro-mensagens\">\r\n              <ng-container *ngFor=\"let error of errorMensagens.nome\">\r\n                <div *ngIf=\"formgroup.get('nome').hasError(error.type) && (formgroup.get('nome').dirty || formgroup.get('nome').touched)\">{{ error.mensagem }}</div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-item>\r\n          <!-- PROFISSÃO -->\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"md-briefcase\"\r\n              color=\"dark\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"text\"\r\n              formControlName=\"profissao\"\r\n              placeholder=\"Profissão\"\r\n              [(ngModel)]=\"todoUser.profissao\"\r\n              required\r\n            ></ion-input>\r\n            <div class=\"erro-mensagens\">\r\n              <ng-container *ngFor=\"let error of errorMensagens.profissao\">\r\n                <div *ngIf=\"formgroup.get('profissao').hasError(error.type) && (formgroup.get('profissao').dirty || formgroup.get('profissao').touched)\">{{ error.mensagem }}</div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-item>\r\n          <!-- EMAIL -->\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"mail\"\r\n              color=\"dark\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"text\"\r\n              formControlName=\"email\"\r\n              placeholder=\"E-mail\"\r\n              [(ngModel)]=\"todoUser.email\"\r\n              required\r\n            ></ion-input>\r\n            <div class=\"erro-mensagens\">\r\n              <ng-container *ngFor=\"let error of errorMensagens.email\">\r\n                <div *ngIf=\"formgroup.get('email').hasError(error.type) && (formgroup.get('email').dirty || formgroup.get('email').touched)\">{{ error.mensagem }}</div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-item>\r\n          <!-- SENHA -->\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"lock\"\r\n              color=\"dark\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"password\"\r\n              formControlName=\"senha\"\r\n              placeholder=\"Senha\"\r\n              [(ngModel)]=\"todoUser.senha\"\r\n              required\r\n            ></ion-input>\r\n            <div class=\"erro-mensagens\">\r\n              <ng-container *ngFor=\"let error of errorMensagens.senha\">\r\n                <div *ngIf=\"formgroup.get('senha').hasError(error.type) && (formgroup.get('senha').dirty || formgroup.get('senha').touched)\">{{ error.mensagem }}</div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-item>\r\n\r\n\r\n\r\n\r\n          <!-- BOTÃO DE CADASTRO -->\r\n          <ion-button\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            class=\"login-button\"\r\n            (click)=\"concluiCadastro()\"\r\n            color=\"dark\"\r\n            [disabled]=\"formgroup.invalid\"\r\n          >\r\n            Colaborar\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/profissional-cadastro/profissional-cadastro.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profissional-cadastro/profissional-cadastro.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProfissionalCadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalCadastroPageModule", function() { return ProfissionalCadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profissional_cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profissional-cadastro.page */ "./src/app/pages/profissional-cadastro/profissional-cadastro.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _profissional_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalCadastroPage"]
    }
];
var ProfissionalCadastroPageModule = /** @class */ (function () {
    function ProfissionalCadastroPageModule() {
    }
    ProfissionalCadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_profissional_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalCadastroPage"]]
        })
    ], ProfissionalCadastroPageModule);
    return ProfissionalCadastroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profissional-cadastro/profissional-cadastro.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profissional-cadastro/profissional-cadastro.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card ion-item {\n  --border-radius: 10px;\n}\nion-card img {\n  width: 70%;\n  margin: auto;\n}\n.texto {\n  color: black;\n}\n.erro-mensagens {\n  font-size: 0.6em;\n  color: red;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlzc2lvbmFsLWNhZGFzdHJvL0Q6XFx0Y2Mvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maXNzaW9uYWwtY2FkYXN0cm9cXHByb2Zpc3Npb25hbC1jYWRhc3Ryby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2Zpc3Npb25hbC1jYWRhc3Ryby9wcm9maXNzaW9uYWwtY2FkYXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUNBSjtBREVFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNBSjtBREtBO0VBQ0UsWUFBQTtBQ0ZGO0FES0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlzc2lvbmFsLWNhZGFzdHJvL3Byb2Zpc3Npb25hbC1jYWRhc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnRleHRve1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmVycm8tbWVuc2FnZW5ze1xyXG4gIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiIsImlvbi1jYXJkIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLWNhcmQgaW1nIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGV4dG8ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5lcnJvLW1lbnNhZ2VucyB7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/profissional-cadastro/profissional-cadastro.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profissional-cadastro/profissional-cadastro.page.ts ***!
  \***************************************************************************/
/*! exports provided: ProfissionalCadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalCadastroPage", function() { return ProfissionalCadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuarioCadastro/usuario-cadastro.service */ "./src/app/services/usuarioCadastro/usuario-cadastro.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");








var ProfissionalCadastroPage = /** @class */ (function () {
    function ProfissionalCadastroPage(afAuth, usuarioService, loadingController, // Substituir depois pelo overlayService (que é genérico)
    navCtrl, formBuilder, network, core) {
        this.afAuth = afAuth;
        this.usuarioService = usuarioService;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.network = network;
        this.core = core;
        //REFERÊNCIA A CLASS USUARIO
        this.todoUser = {
            nome: '',
            dataNasc: 0,
            foto: '',
            profissao: '',
            email: '',
            senha: '',
            isAdmin: false,
            isProfissional: true
        };
    }
    ProfissionalCadastroPage.prototype.ngOnInit = function () {
        this.errorMensagens = this.core.identForm;
        this.formgroup = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                ])],
            profissao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
                ])]
        });
        this.networkConnect();
    };
    ProfissionalCadastroPage.prototype.networkConnect = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Conectando com a Internet...'
                        })];
                    case 1:
                        loading = _a.sent();
                        this.network.onDisconnect().subscribe(function () {
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    //FUNÇÃO PARA CADASTRAR NOVO USUARIO
    ProfissionalCadastroPage.prototype.concluiCadastro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            //Trocar pelo overlay
                            message: 'Salvando dados...'
                        })];
                    case 1:
                        loading = _a.sent();
                        //PASSA OS DADOS PARA CADASTRAR O USUARIO E SEU ENDEREÇO ENQUANTO ISSO EXIBE UM LOADING
                        this.uidUser = this.usuarioService.addUsuarioTodo(this.todoUser).then(function () {
                            loading.dismiss();
                            _this.navCtrl.navigateBack('login');
                        })
                            .catch(function (error) {
                            _this.core.identificaError(error.code);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfissionalCadastroPage.ctorParameters = function () { return [
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioCadastroService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"] },
        { type: src_app_core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"] }
    ]; };
    ProfissionalCadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profissional-cadastro',
            template: __webpack_require__(/*! raw-loader!./profissional-cadastro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-cadastro/profissional-cadastro.page.html"),
            styles: [__webpack_require__(/*! ./profissional-cadastro.page.scss */ "./src/app/pages/profissional-cadastro/profissional-cadastro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioCadastroService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"]])
    ], ProfissionalCadastroPage);
    return ProfissionalCadastroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profissional-cadastro-profissional-cadastro-module-es5.js.map