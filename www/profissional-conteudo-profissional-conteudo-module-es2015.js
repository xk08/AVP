(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profissional-conteudo-profissional-conteudo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo/profissional-conteudo.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profissional-conteudo/profissional-conteudo.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n\n    <ion-buttons>\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\n      <div>\n        <ion-title>Proporcionando conteúdos</ion-title>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n\n      <ion-tab-button\n        tab=\"profissional-conteudo-texto\"\n        (click)=\"profissionalConteudoTexto()\"\n      >\n        <ion-icon name=\"ios-text\"></ion-icon>\n        <ion-label>Texto</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button\n        tab=\"profissional-conteudo-imagem\"\n        (click)=\"profissionalConteudoImagem()\"\n      >\n        <ion-icon name=\"ios-images\"></ion-icon>\n        <ion-label>Imagem</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button\n        tab=\"profissional-conteudo-video\"\n        (click)=\"profissionalConteudoVideo()\"\n      >\n        <ion-icon name=\"ios-videocam\"></ion-icon>\n        <ion-label>Video</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profissional-conteudo/profissional-conteudo.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo/profissional-conteudo.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProfissionalConteudoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalConteudoPageModule", function() { return ProfissionalConteudoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profissional_conteudo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profissional-conteudo.page */ "./src/app/pages/profissional-conteudo/profissional-conteudo.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _profissional_conteudo_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoPage"],
        children: [
            {
                path: 'profissional-conteudo-texto',
                loadChildren: '../profissional-conteudo-texto/profissional-conteudo-texto.module#ProfissionalConteudoTextoPageModule'
            },
            {
                path: 'profissional-conteudo-imagem',
                loadChildren: '../profissional-conteudo-imagem/profissional-conteudo-imagem.module#ProfissionalConteudoImagemPageModule'
            },
            {
                path: 'profissional-conteudo-video',
                loadChildren: '../profissional-conteudo-video/profissional-conteudo-video.module#ProfissionalConteudoVideoPageModule'
            },
            /*
            Responsável pela rota genérica
            {
              path: '',
              redirectTo: '/profissional-conteudo/profissional-conteudo-texto',
              pathMatch: 'full'
            }
            */
            {
                path: '',
                redirectTo: '/menu/profissional-conteudo',
                pathMatch: 'full'
            }
        ]
    }
];
let ProfissionalConteudoPageModule = class ProfissionalConteudoPageModule {
};
ProfissionalConteudoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_profissional_conteudo_page__WEBPACK_IMPORTED_MODULE_3__["ProfissionalConteudoPage"]]
    })
], ProfissionalConteudoPageModule);



/***/ }),

/***/ "./src/app/pages/profissional-conteudo/profissional-conteudo.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo/profissional-conteudo.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zpc3Npb25hbC1jb250ZXVkby9wcm9maXNzaW9uYWwtY29udGV1ZG8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profissional-conteudo/profissional-conteudo.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profissional-conteudo/profissional-conteudo.page.ts ***!
  \***************************************************************************/
/*! exports provided: ProfissionalConteudoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfissionalConteudoPage", function() { return ProfissionalConteudoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service */ "./src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let ProfissionalConteudoPage = class ProfissionalConteudoPage {
    constructor(conteudoTextoService, router, auth, navctrl) {
        this.conteudoTextoService = conteudoTextoService;
        this.router = router;
        this.auth = auth;
        this.navctrl = navctrl;
        // Referente a criação de texto pelo profissional
        this.todasTexto = {
            tituloTexto: '',
            autorTexto: '',
            texto: '',
            maisInfoTexto: ''
        };
    }
    ngOnInit() {
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.conteudoTextoService.getTodo(this.idUsuario).subscribe(res => {
            this.todasTexto = res;
        });
        /* pegando dados especificos
        this.listTexto = this.conteudoTextoService.getTodos(this.idUsuario).subscribe(res => {
          this.tituloTexto = res.tituloTexto ;
          this.autorTexto = res.autorTexto ;
          this.texto = res.texto ;
          this.maisInfoTexto = res.maisInfoTexto ;
        });
      }
    
    
    
      /*
      mandaPraTelaCadastroEmergencia() {
        this.navctrl.navigateForward('/emergencia/emergencia-cadastro');
        this.listTexto;
      }
      */
    }
    profissionalConteudoTexto() { }
    profissionalConteudoImagem() { }
    profissionalConteudoVideo() { }
};
ProfissionalConteudoPage.ctorParameters = () => [
    { type: src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_2__["ProfissionalConteudoTextoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
ProfissionalConteudoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profissional-conteudo',
        template: __webpack_require__(/*! raw-loader!./profissional-conteudo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profissional-conteudo/profissional-conteudo.page.html"),
        styles: [__webpack_require__(/*! ./profissional-conteudo.page.scss */ "./src/app/pages/profissional-conteudo/profissional-conteudo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_2__["ProfissionalConteudoTextoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], ProfissionalConteudoPage);



/***/ })

}]);
//# sourceMappingURL=profissional-conteudo-profissional-conteudo-module-es2015.js.map