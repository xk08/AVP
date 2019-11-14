(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/menu/menu.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <ion-split-pane>\r\n\r\n\r\n    <ion-menu>\r\n      <ion-toolbar color=\"primary\">\r\n        <ion-title>Menu</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-menu-button autoHide=\"true\"></ion-menu-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n\r\n\r\n      <ion-content>\r\n\r\n\r\n        <!-- Se for USUÁRIO normal, pega foto e nome ou padrão -->\r\n        <ion-item *ngIf=\"!isProfissional\">\r\n          <ion-chip>\r\n\r\n\r\n\r\n            <ion-avatar *ngIf=\"icone != ''\">\r\n              <img src=\"{{icone}}\">\r\n            </ion-avatar>\r\n\r\n\r\n            <ion-avatar *ngIf=\"icone == ''\">\r\n              <img src=\"../../../assets/img/avp.png\">\r\n            </ion-avatar>\r\n\r\n\r\n            <ion-label *ngIf=\"apelido == ''\">Assistente não cadastrado</ion-label>\r\n            <ion-label *ngIf=\"apelido != ''\">Olá, sou {{apelido}} seu assistente</ion-label>\r\n\r\n\r\n          </ion-chip>\r\n        </ion-item>\r\n\r\n\r\n        <!-- Se for PROFISSIONAL  normal, pega foto e nome ou padrão -->\r\n        <ion-item *ngIf=\"isProfissional\">\r\n          <ion-chip>\r\n\r\n\r\n            <ion-avatar\r\n              slot=\"start\"\r\n              class=\"contact-avatar\"\r\n              *ngIf=\"fotoUsuario != ''\"\r\n            >\r\n              <img src=\"{{fotoUsuario}}\">\r\n            </ion-avatar>\r\n\r\n\r\n            <ion-avatar\r\n              slot=\"start\"\r\n              class=\"contact-avatar\"\r\n              *ngIf=\"fotoUsuario == ''\"\r\n            >\r\n              <img src=\"../../../assets/img/avp.png\">\r\n            </ion-avatar>\r\n\r\n\r\n\r\n            <ion-label>Bem vindo {{nomeUsuario}}</ion-label>\r\n\r\n\r\n          </ion-chip>\r\n        </ion-item>\r\n\r\n\r\n        <ion-list\r\n          ion-list\r\n          *ngIf=\"!isProfissional\"\r\n        >\r\n\r\n\r\n          <ion-menu-toggle\r\n            autoHide=\"false\"\r\n            *ngFor=\"let p of paginas; let i = index\"\r\n          >\r\n            <ion-item [routerLink]=\"p.url\">\r\n              <ion-icon\r\n                slot=\"start\"\r\n                [name]=\"p.icon\"\r\n              ></ion-icon>\r\n              <ion-label>{{p.title}}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n\r\n        <!-- Menus dos profissionais -->\r\n\r\n        <ion-list *ngIf=\"isProfissional\">\r\n\r\n          <ion-menu-toggle\r\n            autoHide=\"false\"\r\n            *ngFor=\"let pagina of paginasProfissional; let i = index\"\r\n          >\r\n            <ion-item [routerLink]=\"pagina.url\">\r\n              <ion-icon\r\n                slot=\"start\"\r\n                [name]=\"pagina.icon\"\r\n              ></ion-icon>\r\n              <ion-label>{{pagina.title}}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n\r\n\r\n        <ion-menu-toggle autoHide=\"false\">\r\n          <ion-item\r\n            button\r\n            (click)=\"signOut()\"\r\n          >\r\n            <ion-icon\r\n              slot=\"start\"\r\n              name=\"power\"\r\n            ></ion-icon>\r\n            <ion-label>Sair</ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet main></ion-router-outlet>\r\n\r\n\r\n  </ion-split-pane>\r\n\r\n\r\n</ion-app>\r\n"

/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/auth.guard */ "./src/app/guards/auth.guard.ts");






var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
        children: [
            {
                path: 'home',
                loadChildren: '../home/home.module#HomePageModule',
                canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'texto-detalhes/:id',
                loadChildren: '../texto-detalhes/texto-detalhes.module#TextoDetalhesPageModule',
                canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'imagem-detalhes/:id',
                loadChildren: '../imagem-detalhes/imagem-detalhes.module#ImagemDetalhesPageModule',
                canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'video-detalhes/:id',
                loadChildren: '../video-detalhes/video-detalhes.module#VideoDetalhesPageModule',
                canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'profissional-conteudo',
                loadChildren: '../profissional-conteudo/profissional-conteudo.module#ProfissionalConteudoPageModule',
                canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'profissional-todos-conteudos',
                loadChildren: '../profissional-seus-conteudos/profissional-seus-conteudos.module#ProfissionalSeusConteudosPageModule',
                canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: '',
                redirectTo: 'home'
            }
        ]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  margin-left: 10px;\n  border: 3px solid white;\n}\n\nion-chip {\n  width: 100%;\n}\n\nion-chip img {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9EOlxcdGNjL3NyY1xcYXBwXFxwYWdlc1xcbWVudVxcbWVudS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEREk7RUFDSSxZQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhcntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbn1cclxuaW9uLWNoaXB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGltZ3tcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn0iLCJpb24tYXZhdGFyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xufVxuXG5pb24tY2hpcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNoaXAgaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuarioCadastro/usuario-cadastro.service */ "./src/app/services/usuarioCadastro/usuario-cadastro.service.ts");
/* harmony import */ var src_app_services_assistenteCadastro_assistente_cadastro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/assistenteCadastro/assistente-cadastro.service */ "./src/app/services/assistenteCadastro/assistente-cadastro.service.ts");





var MenuPage = /** @class */ (function () {
    function MenuPage(authService, assistenteCadastroService, usuarioCadastroService) {
        this.authService = authService;
        this.assistenteCadastroService = assistenteCadastroService;
        this.usuarioCadastroService = usuarioCadastroService;
        this.paginas = [
            {
                title: 'Inicio',
                url: '/menu/home',
                icon: 'home'
            },
            {
                title: 'Cadastrar Assistente',
                url: '/assistente/cadastro',
                icon: 'logo-angular'
            }
        ];
        this.paginasProfissional = [
            {
                title: 'Inicio',
                url: '/menu/profissional-todos-conteudos',
                icon: 'home'
            }
        ];
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        // Pegando dados do assistente para exibir na tela
        this.idAssistente = this.authService.auth.currentUser.uid;
        console.log(this.idAssistente);
        this.list = this.assistenteCadastroService.getTodo(this.idAssistente).subscribe(function (res) {
            _this.apelido = res.apelido;
            _this.icone = res.icone;
        });
        // Pegando dados do Usuário para exibir na tela
        this.listUsuario = this.usuarioCadastroService
            .getUsuario(this.authService.auth.currentUser.uid)
            .subscribe(function (res) {
            _this.nomeUsuario = res.nome;
            _this.fotoUsuario = res.foto;
            _this.isProfissional = res.isProfissional;
        });
    };
    MenuPage.prototype.signOut = function () {
        this.authService.auth.signOut();
    };
    MenuPage.prototype.ngOnDestroy = function () {
        this.list.unsubscribe();
    };
    MenuPage.ctorParameters = function () { return [
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: src_app_services_assistenteCadastro_assistente_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["AssistenteCadastroService"] },
        { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioCadastroService"] }
    ]; };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            src_app_services_assistenteCadastro_assistente_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["AssistenteCadastroService"],
            src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioCadastroService"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module-es5.js.map