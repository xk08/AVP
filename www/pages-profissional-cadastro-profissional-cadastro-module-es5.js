(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profissional-cadastro-profissional-cadastro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-cadastro/profissional-cadastro.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-cadastro/profissional-cadastro.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Suas informações</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <!-- Deixa responsivo -->\r\n      <ion-col\r\n        size-sm=\"8\"\r\n        size-md=\"12\"\r\n        size-lg=\"3\"\r\n        size-xl=\"3\"\r\n      >\r\n\r\n\r\n\r\n\r\n\r\n        <h1 style=text-align:center>\r\n          <img\r\n            src=\"../../../assets/img/avp.png\"\r\n            width=\"130px\"\r\n            height=\"100px\"\r\n          >\r\n        </h1>\r\n        <!-- continuar esssa pohha -->\r\n        <ion-item style=\"background-color: slategrey;\">\r\n          <ion-icon\r\n            name=\"md-camera\"\r\n            slot=\"start\"\r\n            color=\"dark\"\r\n          >\r\n          </ion-icon>\r\n          Enviar foto de perfil\r\n        </ion-item>\r\n\r\n\r\n\r\n\r\n        <form #form=\"ngForm\">\r\n\r\n\r\n\r\n\r\n          <!-- NOME -->\r\n          <ion-item>\r\n            <ion-icon\r\n              color=\"dark\"\r\n              name=\"person\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"text\"\r\n              name=\"nome\"\r\n              placeholder=\"Nome\"\r\n              autofocus=\"true\"\r\n              [(ngModel)]='todoUser.nome'\r\n              required\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n          <!-- PROFISSÃO -->\r\n\r\n\r\n\r\n\r\n\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"md-briefcase\"\r\n              color=\"dark\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"text\"\r\n              name=\"profissao\"\r\n              placeholder=\"Profissão exercida\"\r\n              autofocus=\"true\"\r\n              [(ngModel)]='todoUser.profissao'\r\n              required\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n\r\n\r\n\r\n          <!-- CODIGO PROFISSÃO -->\r\n\r\n\r\n\r\n\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"md-checkbox\"\r\n              color=\"dark\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"text\"\r\n              name=\"codigoProfissao\"\r\n              placeholder=\"Código da profissão\"\r\n              autofocus=\"true\"\r\n              [(ngModel)]='todoUser.codigoProfissao'\r\n              required\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n          <!-- EMAIL -->\r\n\r\n\r\n\r\n\r\n\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"mail\"\r\n              color=\"dark\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"email\"\r\n              name=\"email\"\r\n              placeholder=\"E-mail\"\r\n              inputmode=\"email\"\r\n              autofocus=\"true\"\r\n              [(ngModel)]='todoUser.email'\r\n              required\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n          <!-- SENHA -->\r\n\r\n\r\n\r\n\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"lock\"\r\n              color=\"dark\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"password\"\r\n              name=\"password\"\r\n              placeholder=\"Senha\"\r\n              [(ngModel)]='todoUser.senha'\r\n              required\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n          <!-- BOTÃO DE CADASTRO -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <ion-button\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            class=\"login-button\"\r\n            (click)=\"concluiCadastro()\"\r\n            color=\"dark\"\r\n          >\r\n            Colaborar\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zpc3Npb25hbC1jYWRhc3Ryby9wcm9maXNzaW9uYWwtY2FkYXN0cm8ucGFnZS5zY3NzIn0= */"

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






var ProfissionalCadastroPage = /** @class */ (function () {
    function ProfissionalCadastroPage(afAuth, usuarioService, loadingController, // Substituir depois pelo overlayService (que é genérico)
    navCtrl) {
        this.afAuth = afAuth;
        this.usuarioService = usuarioService;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        //REFERÊNCIA A CLASS USUARIO
        this.todoUser = {
            nome: '',
            dataNasc: 0,
            foto: '',
            profissao: '',
            codigoProfissao: '',
            isAtivo: true,
            email: '',
            senha: '',
            isAdmin: false,
            isProfissional: true
        };
    }
    ProfissionalCadastroPage.prototype.ngOnInit = function () { };
    //FUNÇÃO PARA CADASTRAR NOVO USUARIO
    ProfissionalCadastroPage.prototype.concluiCadastro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
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
                        });
                        //APÓS DADOS CADASTRADOS, ENVIA O USUARIO PARA O INICIO DA APLICAÇÃO
                        this.navCtrl.navigateBack('login');
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfissionalCadastroPage.ctorParameters = function () { return [
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioCadastroService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ProfissionalCadastroPage.prototype, "form", void 0);
    ProfissionalCadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profissional-cadastro',
            template: __webpack_require__(/*! raw-loader!./profissional-cadastro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-cadastro/profissional-cadastro.page.html"),
            styles: [__webpack_require__(/*! ./profissional-cadastro.page.scss */ "./src/app/pages/profissional-cadastro/profissional-cadastro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioCadastroService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], ProfissionalCadastroPage);
    return ProfissionalCadastroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profissional-cadastro-profissional-cadastro-module-es5.js.map