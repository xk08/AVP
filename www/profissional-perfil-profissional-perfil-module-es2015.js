(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profissional-perfil-profissional-perfil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-perfil/profissional-perfil.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-perfil/profissional-perfil.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"light\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"menu/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Atualizar informações</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <!-- Deixa responsivo -->\r\n      <ion-col\r\n        size-sm=\"8\"\r\n        size-md=\"12\"\r\n        size-lg=\"3\"\r\n        size-xl=\"3\"\r\n      >\r\n        <form [formGroup]=\"formgroup\">\r\n\r\n          <!-- NOME -->\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"person\"\r\n              color=\"dark\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"text\"\r\n              name=\"nome\"\r\n              placeholder=\"Nome\"\r\n              autofocus=\"true\"\r\n              required\r\n              [(ngModel)]='todoUser.nome'\r\n              formControlName=\"nome\"\r\n            ></ion-input>\r\n            <div class=\"erro-mensagens\">\r\n              <ng-container *ngFor=\"let error of errorMensagens.nome\">\r\n                <div *ngIf=\"formgroup.get('nome').hasError(error.type) && (formgroup.get('nome').dirty || formgroup.get('nome').touched)\">{{ error.mensagem }}</div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-item>\r\n\r\n              <!-- PROFISSÃO -->\r\n              <ion-item>\r\n                <ion-icon\r\n                  name=\"md-briefcase\"\r\n                  color=\"dark\"\r\n                  slot=\"start\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  formControlName=\"profissao\"\r\n                  placeholder=\"Profissão\"\r\n                  [(ngModel)]=\"todoUser.profissao\"\r\n                  required\r\n                ></ion-input>\r\n                <div class=\"erro-mensagens\">\r\n                  <ng-container *ngFor=\"let error of errorMensagens.profissao\">\r\n                    <div *ngIf=\"formgroup.get('profissao').hasError(error.type) && (formgroup.get('profissao').dirty || formgroup.get('profissao').touched)\">{{ error.mensagem }}</div>\r\n                  </ng-container>\r\n                </div>\r\n              </ion-item>\r\n\r\n      \r\n          <!-- EMAIL -->\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"mail\"\r\n              color=\"dark\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"text\"\r\n              formControlName=\"email\"\r\n              placeholder=\"E-mail\"\r\n              [(ngModel)]='todoUser.email'\r\n              required\r\n            ></ion-input>\r\n            <div class=\"erro-mensagens\">\r\n              <ng-container *ngFor=\"let error of errorMensagens.email\">\r\n                <div *ngIf=\"formgroup.get('email').hasError(error.type) && (formgroup.get('email').dirty || formgroup.get('email').touched)\">{{ error.mensagem }}</div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-item>\r\n\r\n          <!-- SENHA -->\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"lock\"\r\n              color=\"dark\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"password\"\r\n              formControlName=\"senha\"\r\n              placeholder=\"Senha\"\r\n              [(ngModel)]='todoUser.senha'\r\n              required\r\n            ></ion-input>\r\n            <div class=\"erro-mensagens\">\r\n              <ng-container *ngFor=\"let error of errorMensagens.senha\">\r\n                <div *ngIf=\"formgroup.get('senha').hasError(error.type) && (formgroup.get('senha').dirty || formgroup.get('senha').touched)\">{{ error.mensagem }}</div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-item>\r\n\r\n          <!-- BOTÃO DE CADASTRO -->\r\n          <ion-button\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            class=\"login-button\"\r\n            (click)=\"saveTodo()\"\r\n            color=\"light\"\r\n            [disabled]=\"formgroup.invalid\"\r\n          >\r\n            Atualizar\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/profissional-perfil/profissional-perfil.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profissional-perfil/profissional-perfil.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProfissionalPerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalPerfilPageModule", function() { return ProfissionalPerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profissional_perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profissional-perfil.page */ "./src/app/pages/profissional-perfil/profissional-perfil.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _profissional_perfil_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalPerfilPage"]
    }
];
let ProfissionalPerfilPageModule = class ProfissionalPerfilPageModule {
};
ProfissionalPerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [_profissional_perfil_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalPerfilPage"]]
    })
], ProfissionalPerfilPageModule);



/***/ }),

/***/ "./src/app/pages/profissional-perfil/profissional-perfil.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profissional-perfil/profissional-perfil.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card ion-item {\n  --border-radius: 10px;\n}\nion-card img {\n  width: 70%;\n  margin: auto;\n}\n.texto {\n  color: black;\n}\n.erro-mensagens {\n  font-size: 0.6em;\n  color: red;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlzc2lvbmFsLXBlcmZpbC9EOlxcbWFyY29zXFxUQ0NcXHRjYy9zcmNcXGFwcFxccGFnZXNcXHByb2Zpc3Npb25hbC1wZXJmaWxcXHByb2Zpc3Npb25hbC1wZXJmaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maXNzaW9uYWwtcGVyZmlsL3Byb2Zpc3Npb25hbC1wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UscUJBQUE7QUNBTjtBREVJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNBTjtBREtFO0VBQ0UsWUFBQTtBQ0ZKO0FES0U7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlzc2lvbmFsLXBlcmZpbC9wcm9maXNzaW9uYWwtcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnRleHRve1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuZXJyby1tZW5zYWdlbnN7XHJcbiAgICBmb250LXNpemU6IDAuNmVtO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gICIsImlvbi1jYXJkIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLWNhcmQgaW1nIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGV4dG8ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5lcnJvLW1lbnNhZ2VucyB7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/profissional-perfil/profissional-perfil.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profissional-perfil/profissional-perfil.page.ts ***!
  \***********************************************************************/
/*! exports provided: ProfissionalPerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalPerfilPage", function() { return ProfissionalPerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuarioCadastro/usuario-cadastro.service */ "./src/app/services/usuarioCadastro/usuario-cadastro.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/core.module */ "./src/app/core/core.module.ts");









let ProfissionalPerfilPage = class ProfissionalPerfilPage {
    constructor(usuarioService, loadingController, // Substituir depois pelo overlayService (que é genérico)
    navCtrl, core, formBuilder, network, toastController, auth, authService) {
        this.usuarioService = usuarioService;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.core = core;
        this.formBuilder = formBuilder;
        this.network = network;
        this.toastController = toastController;
        this.auth = auth;
        this.authService = authService;
        //REFERÊNCIA A CLASS USUARIO
        this.todoUser = {
            nome: '',
            dataNasc: null,
            foto: '',
            profissao: '',
            email: '',
            senha: '',
            isAdmin: false,
            isProfissional: false
        };
    }
    ngOnInit() {
        this.uidUsuario = this.authService.getAuth().currentUser.uid;
        if (this.uidUsuario) {
            this.loadTodo(this.uidUsuario);
        }
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
    }
    loadTodo(uidUser) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Carregando suas informações.'
            });
            yield loading.present();
            this.usuarioService.getUsuario(uidUser).subscribe(res => {
                loading.dismiss();
                this.todoUser = res;
            });
        });
    }
    saveTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Salvando novas informações'
            });
            yield loading.present();
            if (this.idUsuario) {
                this.usuarioService.updateUsuarioTodo(this.todoUser, this.authService.getAuth().currentUser.uid).then(() => {
                    loading.dismiss();
                    this.navCtrl.navigateBack('menu/home');
                });
            }
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
    cadastroProfissional() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.navCtrl.navigateBack('profissional/cadastro');
        });
    }
};
ProfissionalPerfilPage.ctorParameters = () => [
    { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioCadastroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
ProfissionalPerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profissional-perfil',
        template: __webpack_require__(/*! raw-loader!./profissional-perfil.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-perfil/profissional-perfil.page.html"),
        styles: [__webpack_require__(/*! ./profissional-perfil.page.scss */ "./src/app/pages/profissional-perfil/profissional-perfil.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioCadastroService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
], ProfissionalPerfilPage);



/***/ })

}]);
//# sourceMappingURL=profissional-perfil-profissional-perfil-module-es2015.js.map