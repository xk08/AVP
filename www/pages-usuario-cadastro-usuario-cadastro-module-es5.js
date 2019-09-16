(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usuario-cadastro-usuario-cadastro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/usuario-cadastro/usuario-cadastro.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/usuario-cadastro/usuario-cadastro.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Aqui vai um titulo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <!-- Deixa responsivo -->\r\n      <ion-col\r\n        size-sm=\"8\"\r\n        size-md=\"12\"\r\n        size-lg=\"3\"\r\n        size-xl=\"3\"\r\n      >\r\n        <!-- Responsável pelo logo -->\r\n        <h1 text-center>\r\n          <ion-icon\r\n            name=\"done-all\"\r\n            color=\"primary\"\r\n            class=\"icon-7em\"\r\n          ></ion-icon>\r\n        </h1>\r\n        <form #form=\"ngForm\">\r\n\r\n          <!-- NOME -->\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"person\"\r\n              color=\"primary\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"text\"\r\n              name=\"nome\"\r\n              placeholder=\"Seu nome\"\r\n              autofocus=\"true\"\r\n              [(ngModel)]='todoUser.nome'\r\n              required\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <!-- DATA DE NASCIMENTO -->\r\n\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"calendar\"\r\n              color=\"primary\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"date\"\r\n              name=\"dataDeNascimento\"\r\n              autofocus=\"true\"\r\n              [(ngModel)]='todoUser.dataNasc'\r\n              required\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <!-- EMAIL -->\r\n\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"mail\"\r\n              color=\"primary\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"email\"\r\n              name=\"email\"\r\n              placeholder=\"Seu e-mail\"\r\n              inputmode=\"email\"\r\n              autofocus=\"true\"\r\n              [(ngModel)]='todoUser.email'\r\n              required\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <!-- SENHA -->\r\n\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"lock\"\r\n              color=\"primary\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"password\"\r\n              name=\"password\"\r\n              placeholder=\"Sua senha\"\r\n              [(ngModel)]='todoUser.senha'\r\n              required\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <!-- BOTÃO DE CADASTRO -->\r\n\r\n          <ion-button\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            class=\"login-button\"\r\n            [disabled]=\"!form.form.valid\"\r\n            (click)=\"concluiCadastro()\"\r\n          >\r\n            Participar\r\n          </ion-button>\r\n\r\n          <ion-button\r\n            class=\"login-button\"\r\n            expand=\"full\"\r\n            color=\"dark\"\r\n            (click)=\"cadastroProfissional()\"\r\n          >\r\n            Sou Profissional da Saúde\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/usuario-cadastro/usuario-cadastro.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/usuario-cadastro/usuario-cadastro.module.ts ***!
  \*******************************************************************/
/*! exports provided: UsuarioCadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioCadastroPageModule", function() { return UsuarioCadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuario_cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario-cadastro.page */ "./src/app/pages/usuario-cadastro/usuario-cadastro.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _usuario_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["UsuarioCadastroPage"]
    }
];
var UsuarioCadastroPageModule = /** @class */ (function () {
    function UsuarioCadastroPageModule() {
    }
    UsuarioCadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_usuario_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["UsuarioCadastroPage"]]
        })
    ], UsuarioCadastroPageModule);
    return UsuarioCadastroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/usuario-cadastro/usuario-cadastro.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/usuario-cadastro/usuario-cadastro.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8tY2FkYXN0cm8vdXN1YXJpby1jYWRhc3Ryby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/usuario-cadastro/usuario-cadastro.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/usuario-cadastro/usuario-cadastro.page.ts ***!
  \*****************************************************************/
/*! exports provided: UsuarioCadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioCadastroPage", function() { return UsuarioCadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuarioCadastro/usuario-cadastro.service */ "./src/app/services/usuarioCadastro/usuario-cadastro.service.ts");






var UsuarioCadastroPage = /** @class */ (function () {
    function UsuarioCadastroPage(afAuth, usuarioService, loadingController, // Substituir depois pelo overlayService (que é genérico)
    navCtrl) {
        this.afAuth = afAuth;
        this.usuarioService = usuarioService;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        //REFERÊNCIA A CLASS USUARIO
        this.todoUser = {
            nome: '',
            dataNasc: '',
            foto: '',
            profissao: '',
            codigoProfissao: '',
            isAtivo: true,
            email: '',
            senha: '',
            isAdmin: false,
            isProfissional: false
        };
    }
    UsuarioCadastroPage.prototype.ngOnInit = function () { };
    //FUNÇÃO PARA CADASTRAR NOVO USUARIO
    UsuarioCadastroPage.prototype.concluiCadastro = function () {
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
    UsuarioCadastroPage.prototype.cadastroProfissional = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.navCtrl.navigateBack('profissional/cadastro');
                console.log('Redirecionadopara profissional da saúde');
                return [2 /*return*/];
            });
        });
    };
    UsuarioCadastroPage.ctorParameters = function () { return [
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioCadastroService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], UsuarioCadastroPage.prototype, "form", void 0);
    UsuarioCadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario-cadastro',
            template: __webpack_require__(/*! raw-loader!./usuario-cadastro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/usuario-cadastro/usuario-cadastro.page.html"),
            styles: [__webpack_require__(/*! ./usuario-cadastro.page.scss */ "./src/app/pages/usuario-cadastro/usuario-cadastro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioCadastroService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], UsuarioCadastroPage);
    return UsuarioCadastroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-usuario-cadastro-usuario-cadastro-module-es5.js.map