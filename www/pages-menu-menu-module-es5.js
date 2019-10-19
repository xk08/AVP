(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/menu/menu.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <ion-split-pane>\r\n\r\n    <ion-menu>\r\n\r\n      <ion-toolbar color=\"primary\">\r\n        <ion-title>Menu</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-menu-button autoHide=\"true\"></ion-menu-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n\r\n      <ion-content>\r\n        <ion-item>\r\n          <ion-chip>\r\n            <ion-avatar>\r\n              <img src=\"{{ foto }}\">\r\n            </ion-avatar>\r\n\r\n            <ion-label *ngFor=\"let v of listAC\">Olá, {{ v.apelido }}</ion-label>\r\n            <!-- mudar para o assistente, DPS  pega expecidfico -->\r\n          </ion-chip>\r\n        </ion-item>\r\n        <ion-list>\r\n          <ion-menu-toggle\r\n            autoHide=\"false\"\r\n            *ngFor=\"let p of paginas; let i = index\"\r\n          >\r\n            <ion-item [routerLink]=\"p.url\">\r\n              <ion-icon\r\n                slot=\"start\"\r\n                [name]=\"p.icon\"\r\n              ></ion-icon>\r\n              <ion-label>{{p.title}}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <!-- Menus dos ADMS -->\r\n\r\n          <ion-list *ngIf=\"isAdmin\">\r\n            <ion-menu-toggle\r\n              autoHide=\"false\"\r\n              *ngFor=\"let a of paginasAdmin; let i = index\"\r\n            >\r\n              <ion-item [routerLink]=\"a.url\">\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  [name]=\"a.icon\"\r\n                ></ion-icon>\r\n                <ion-label>{{a.title}}</ion-label>\r\n              </ion-item>\r\n            </ion-menu-toggle>\r\n          </ion-list>\r\n\r\n          <!-- Menus dos profissionais -->\r\n\r\n          <ion-list *ngIf=\"isProfissional\">\r\n            <ion-menu-toggle\r\n              autoHide=\"false\"\r\n              *ngFor=\"let pagina of paginasProfissional; let i = index\"\r\n            >\r\n              <ion-item [routerLink]=\"pagina.url\">\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  [name]=\"pagina.icon\"\r\n                ></ion-icon>\r\n                <ion-label>{{pagina.title}}</ion-label>\r\n              </ion-item>\r\n            </ion-menu-toggle>\r\n          </ion-list>\r\n\r\n          <ion-menu-toggle autoHide=\"false\">\r\n            <ion-item\r\n              button\r\n              (click)=\"signOut()\"\r\n            >\r\n              <ion-icon\r\n                slot=\"start\"\r\n                name=\"power\"\r\n              ></ion-icon>\r\n              <ion-label>Sair</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n\r\n    <ion-router-outlet main></ion-router-outlet>\r\n\r\n  </ion-split-pane>\r\n\r\n</ion-app>\r\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5wYWdlLnNjc3MifQ== */"

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
    function MenuPage(authService, usuarioCadastroService, assistenteCadastroService) {
        this.authService = authService;
        this.usuarioCadastroService = usuarioCadastroService;
        this.assistenteCadastroService = assistenteCadastroService;
        this.paginas = [
            {
                title: 'Home',
                url: '/menu/home',
                icon: 'home'
            }
        ];
        this.paginasAdmin = [
            {
                title: 'Home',
                url: '/menu/home',
                icon: 'home'
            }
        ];
        this.paginasProfissional = [
            {
                title: 'HTesteome',
                url: '/menu/home',
                icon: 'add'
            }
        ];
        this.listAC = new Array();
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionList = this.usuarioCadastroService
            .getUsuario(this.authService.auth.currentUser.uid)
            .subscribe(function (res) {
            _this.nome = res.nome;
            _this.foto = res.foto;
            _this.isAdmin = res.isAdmin;
            _this.isProfissional = res.isProfissional;
        });
        // Descobrir como pega só 1 elemento, o id da pessoa ou do assisnte em si
        this.list = this.assistenteCadastroService.getTodos().subscribe(function (res) {
            _this.listAC = res;
        });
    };
    MenuPage.prototype.signOut = function () {
        this.authService.auth.signOut();
    };
    MenuPage.prototype.ngOnDestroy = function () {
        this.subscriptionList.unsubscribe();
    };
    MenuPage.ctorParameters = function () { return [
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioCadastroService"] },
        { type: src_app_services_assistenteCadastro_assistente_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["AssistenteCadastroService"] }
    ]; };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioCadastroService"],
            src_app_services_assistenteCadastro_assistente_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["AssistenteCadastroService"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module-es5.js.map