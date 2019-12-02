(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-title style=\"text-align: center;\">Acessando o assistente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <ion-col\r\n        size-sm=\"8\"\r\n        size-md=\"12\"\r\n        size-lg=\"3\"\r\n        size-xl=\"3\"\r\n      >\r\n        <!-- arrumar essas pohha de padding -->\r\n        <h1 style=text-align:center>\r\n          <img\r\n            src=\"../../../assets/img/avp.png\"\r\n            width=\"180px\"\r\n            height=\"160px\"\r\n          >\r\n        </h1>\r\n\r\n\r\n        <form [formGroup]=\"formgroup\">\r\n          <ion-item>\r\n            <ion-icon\r\n              color=\"medium\"\r\n              name=\"mail\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"text\"\r\n              formControlName=\"email\"\r\n              placeholder=\"Informe seu e-mail\"\r\n              [(ngModel)]=\"user.email\"\r\n              required\r\n            ></ion-input>\r\n            <div class=\"erro-mensagens\">\r\n              <ng-container *ngFor=\"let error of errorMensagens.email\">\r\n                <div *ngIf=\"formgroup.get('email').hasError(error.type) && (formgroup.get('email').dirty || formgroup.get('email').touched)\">{{ error.mensagem }}</div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-icon\r\n              color=\"medium\"\r\n              name=\"lock\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"password\"\r\n              formControlName=\"senha\"\r\n              placeholder=\"Informe sua senha\"\r\n              [(ngModel)]=\"user.password\"\r\n              required\r\n            ></ion-input>\r\n            <div class=\"erro-mensagens\">\r\n              <ng-container *ngFor=\"let error of errorMensagens.senha\">\r\n                <div *ngIf=\"formgroup.get('senha').hasError(error.type) && (formgroup.get('senha').dirty || formgroup.get('senha').touched)\">{{ error.mensagem }}</div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-item>\r\n\r\n\r\n        </form>\r\n        <ion-content>\r\n\r\n\r\n          <ion-button\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            color=\"secondary\"\r\n            (click)=\"signIn()\"\r\n            [disabled]=\"formgroup.invalid\"\r\n          >\r\n            Acessar\r\n          </ion-button>\r\n          <ion-button\r\n            expand=\"block\"\r\n            fill=\"clear\"\r\n            (click)=\"createAccount()\"\r\n          >\r\n            Participar\r\n          </ion-button>\r\n        </ion-content>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin-left: auto;\n  margin-right: auto;\n  align-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n#corRoxa {\n  color: #8e68a1;\n}\n\n#corCyan {\n  color: #0fb3a3;\n}\n\nion-button {\n  color: #0cd1e8;\n}\n\nion-card ion-item {\n  --border-radius: 10px;\n}\n\nion-card img {\n  width: 70%;\n  margin: auto;\n}\n\n.texto {\n  color: black;\n}\n\n.erro-mensagens {\n  font-size: 0.6em;\n  color: red;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXG1hcmNvc1xcVENDXFx0Y2Mvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQ0o7O0FER0U7RUFDRSxxQkFBQTtBQ0FKOztBREVFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNBSjs7QURLQTtFQUNFLFlBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgI2NvclJveGEge1xyXG4gICAgY29sb3I6ICM4ZTY4YTE7XHJcbiAgfVxyXG5cclxuICAjY29yQ3lhbiB7XHJcbiAgICBjb2xvcjogIzBmYjNhMztcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b257XHJcbiAgICBjb2xvcjogIzBjZDFlODtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICBpb24taXRlbXtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG59XHJcblxyXG4udGV4dG97XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZXJyby1tZW5zYWdlbnN7XHJcbiAgZm9udC1zaXplOiAwLjZlbTtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImRpdiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2NvclJveGEge1xuICBjb2xvcjogIzhlNjhhMTtcbn1cblxuI2NvckN5YW4ge1xuICBjb2xvcjogIzBmYjNhMztcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiAjMGNkMWU4O1xufVxuXG5pb24tY2FyZCBpb24taXRlbSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1jYXJkIGltZyB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRleHRvIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZXJyby1tZW5zYWdlbnMge1xuICBmb250LXNpemU6IDAuNmVtO1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user */ "./src/app/services/user.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/usuarioCadastro/usuario-cadastro.service */ "./src/app/services/usuarioCadastro/usuario-cadastro.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");











let LoginPage = class LoginPage {
    constructor(router, authService, toastController, network, usuarioCadastro, auth, loadingController, core, formBuilder) {
        this.router = router;
        this.authService = authService;
        this.toastController = toastController;
        this.network = network;
        this.usuarioCadastro = usuarioCadastro;
        this.auth = auth;
        this.loadingController = loadingController;
        this.core = core;
        this.formBuilder = formBuilder;
        this.user = new src_app_services_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.buttonColor = '#000';
        let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            this.presentToast('Sem Internet no Momento');
        });
    }
    ngOnInit() {
        this.errorMensagens = this.core.identForm;
        this.formgroup = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
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
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 3000
            });
            toast.present();
        });
    }
    createAccount() {
        this.router.navigate(['usuario/cadastro']);
    }
    signIn() {
        // achar aqui uma maneira de redirecinar
        this.authService
            .signIn(this.user)
            .then(() => {
            this.usuarioCadastro.getUsuario(this.auth.auth.currentUser.uid).subscribe(res => {
                if (res.isProfissional) {
                    this.router.navigate(['/menu/profissional-todos-conteudos']); //Direciona após logado
                }
                else {
                    this.router.navigate(['menu/home']); //Direciona após logad
                }
            });
        })
            .catch((error) => {
            //IDENTIFICA O ERRO CORRESPONDENTE
            this.core.identificaError(error.code);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"] },
    { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioCadastroService"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
], LoginPage.prototype, "form", void 0);
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"],
        src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioCadastroService"],
        angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], LoginPage);



/***/ }),

/***/ "./src/app/services/user.ts":
/*!**********************************!*\
  !*** ./src/app/services/user.ts ***!
  \**********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map