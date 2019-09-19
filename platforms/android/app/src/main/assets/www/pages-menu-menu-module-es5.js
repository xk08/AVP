(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/menu/menu.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-split-pane>\n\n    <ion-menu>\n\n      <ion-toolbar color=\"primary\">\n        <ion-title>Menu</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-menu-button autoHide=\"true\"></ion-menu-button>\n        </ion-buttons>\n      </ion-toolbar>\n\n      <ion-content>\n        <ion-item>\n          <ion-chip>\n            <ion-avatar>\n              <img src=\"{{ foto }}\">\n            </ion-avatar>\n            <ion-label>Olá, {{ nome }}</ion-label>\n            <!-- mudar para o assistente, DPS -->\n          </ion-chip>\n        </ion-item>\n        <ion-list>\n          <ion-menu-toggle\n            autoHide=\"false\"\n            *ngFor=\"let p of paginas; let i = index\"\n          >\n            <ion-item [routerLink]=\"p.url\">\n              <ion-icon\n                slot=\"start\"\n                [name]=\"p.icon\"\n              ></ion-icon>\n              <ion-label>{{p.title}}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-list *ngIf=\"isAdmin\">\n            <ion-menu-toggle\n              autoHide=\"false\"\n              *ngFor=\"let a of paginasAdmin; let i = index\"\n            >\n              <ion-item [routerLink]=\"a.url\">\n                <ion-icon\n                  slot=\"start\"\n                  [name]=\"a.icon\"\n                ></ion-icon>\n                <ion-label>{{a.title}}</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n          </ion-list>\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item\n              button\n              (click)=\"signOut()\"\n            >\n              <ion-icon\n                slot=\"start\"\n                name=\"power\"\n              ></ion-icon>\n              <ion-label>Sair</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-router-outlet main></ion-router-outlet>\n\n  </ion-split-pane>\n\n</ion-app>\n"

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




var MenuPage = /** @class */ (function () {
    function MenuPage(authService, usuarioCadastroService) {
        this.authService = authService;
        this.usuarioCadastroService = usuarioCadastroService;
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
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionList = this.usuarioCadastroService
            .getUsuario(this.authService.auth.currentUser.uid)
            .subscribe(function (res) {
            _this.nome = res.nome;
            _this.foto = res.foto;
            _this.isAdmin = res.isAdmin;
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
        { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioCadastroService"] }
    ]; };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioCadastroService"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module-es5.js.map