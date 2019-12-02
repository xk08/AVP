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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profissional_cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profissional-cadastro.page */ "./src/app/pages/profissional-cadastro/profissional-cadastro.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _profissional_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalCadastroPage"]
    }
];
let ProfissionalCadastroPageModule = class ProfissionalCadastroPageModule {
};
ProfissionalCadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_profissional_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalCadastroPage"]]
    })
], ProfissionalCadastroPageModule);



/***/ }),

/***/ "./src/app/pages/profissional-cadastro/profissional-cadastro.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profissional-cadastro/profissional-cadastro.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card ion-item {\n  --border-radius: 10px;\n}\nion-card img {\n  width: 70%;\n  margin: auto;\n}\n.texto {\n  color: black;\n}\n.erro-mensagens {\n  font-size: 0.6em;\n  color: red;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlzc2lvbmFsLWNhZGFzdHJvL0Q6XFxtYXJjb3NcXFRDQ1xcdGNjL3NyY1xcYXBwXFxwYWdlc1xccHJvZmlzc2lvbmFsLWNhZGFzdHJvXFxwcm9maXNzaW9uYWwtY2FkYXN0cm8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maXNzaW9uYWwtY2FkYXN0cm8vcHJvZmlzc2lvbmFsLWNhZGFzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FDQUo7QURFRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDQUo7QURHQTtFQUNFLFlBQUE7QUNBRjtBREVBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zpc3Npb25hbC1jYWRhc3Ryby9wcm9maXNzaW9uYWwtY2FkYXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gIGlvbi1pdGVte1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBpbWd7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG4udGV4dG97XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5lcnJvLW1lbnNhZ2Vuc3tcclxuICBmb250LXNpemU6IDAuNmVtO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuIiwiaW9uLWNhcmQgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tY2FyZCBpbWcge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50ZXh0byB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmVycm8tbWVuc2FnZW5zIHtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuarioCadastro/usuario-cadastro.service */ "./src/app/services/usuarioCadastro/usuario-cadastro.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");








let ProfissionalCadastroPage = class ProfissionalCadastroPage {
    constructor(afAuth, usuarioService, loadingController, // Substituir depois pelo overlayService (que é genérico)
    navCtrl, formBuilder, network, core, toastController) {
        this.afAuth = afAuth;
        this.usuarioService = usuarioService;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.network = network;
        this.core = core;
        this.toastController = toastController;
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
    ngOnInit() {
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
    }
    networkConnect() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Conectando com a Internet...'
            });
            this.network.onDisconnect().subscribe(() => {
                loading.dismiss();
            });
        });
    }
    //FUNÇÃO PARA CADASTRAR NOVO USUARIO
    concluiCadastro() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                //Trocar pelo overlay
                message: 'Salvando dados...'
            });
            //PASSA OS DADOS PARA CADASTRAR O USUARIO E SEU ENDEREÇO ENQUANTO ISSO EXIBE UM LOADING
            this.uidUser = this.usuarioService.addUsuarioTodo(this.todoUser).then(() => {
                loading.dismiss();
                this.navCtrl.navigateBack('login');
                this.presentToast('Parabéns, ' + this.todoUser.nome + ' \n Você foi cadastrado (a) com sucesso.');
            })
                .catch((error) => {
                this.core.identificaError(error.code);
            });
        });
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 4000,
                position: 'top'
            });
            toast.present();
        });
    }
};
ProfissionalCadastroPage.ctorParameters = () => [
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioCadastroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"] },
    { type: src_app_core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
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
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], ProfissionalCadastroPage);



/***/ })

}]);
//# sourceMappingURL=pages-profissional-cadastro-profissional-cadastro-module-es2015.js.map