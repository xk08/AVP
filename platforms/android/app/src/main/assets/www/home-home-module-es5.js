(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n\r\n\r\n    <ion-buttons>\r\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\r\n      <div>\r\n        <ion-button\r\n          shape=\"round\"\r\n          fill=\"outline\"\r\n          (click)=\"direcionaPraTela()\"\r\n        >\r\n          Quero Conversar\r\n        </ion-button>\r\n      </div>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-fab\r\n  vertical=\"bottom\"\r\n  horizontal=\"end\"\r\n  slot=\"fixed\"\r\n>\r\n  <ion-fab-button\r\n    routerLink=\"/emergencia/emergencia-utilizacao\"\r\n    routerDirection=\"forward\"\r\n    color=\"secondary\"\r\n  >\r\n    S.O.S\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n\r\n<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align: center; font-size: 15pt\">Recomendados para você</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n\r\n  <ion-card>\r\n    <img src=\"../../../assets/img/fraseamigos.PNG\">\r\n  </ion-card>\r\n\r\n\r\n  <ion-card>\r\n    <img src=\"../../../assets/img/serfeliz.PNG\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Video do Youtube</ion-card-subtitle>\r\n      <ion-card-title>{{tituloTela}}?</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>{{textoTela}}</ion-card-content>\r\n\r\n\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"color: lightseagreen\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Assistir ao video completo</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Frase do dia</ion-card-subtitle>\r\n      <ion-card-title>Sobre o amor</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      “Você é quem decide o que vai ser eterno em você, no seu coração.\r\n                Deus nos dá o dom de eternizar em nós o que vale a pena, e esquecer definitivamente aquilo que não vale.”\r\n    </ion-card-content>\r\n\r\n\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"color: lightseagreen\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card>\r\n    <img src=\"../../../assets/img/tulipas.PNG\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Foto do dia</ion-card-subtitle>\r\n      <ion-card-title>\r\n        A vida é colorida, aproveite todos os momentos.\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n\r\n\r\n\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"color: rgb(101, 221, 215)\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n    </ion-item>\r\n\r\n\r\n\r\n  </ion-card>\r\n\r\n\r\n  <ion-card>\r\n    <img src=\"../../../assets/img/abrirmente.PNG\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Video do Youtube</ion-card-subtitle>\r\n      <ion-card-title>Compreenda a sí mesmo</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      Compreenda  A Si Mesmo E Ao Universo Com Esse Vídeo! Um vídeo para pararmos e refletirmos sobre tudo aquilo que está a nossa volta e as crenças que temos sobre FOCO e PRESENÇA\r\n                    Depois desse vídeo você vai saber a como aproveitar a vida muito mais!\r\n    </ion-card-content>\r\n\r\n\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"color: lightseagreen\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Assistir ao video completo</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Frase</ion-card-subtitle>\r\n      <ion-card-title>Familia</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      Amo minha família do jeito que é; pode não ser perfeita, mas o que importa é que nela sobram amor e compreensão.\r\n    </ion-card-content>\r\n\r\n\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"color: lightseagreen\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Frase</ion-card-subtitle>\r\n      <ion-card-title>Amigos</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      Enquanto alguns escolhem pessoas perfeitas, eu escolho as que me fazem bem.\r\n    </ion-card-content>\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"color: lightseagreen\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: '',
                redirectTo: '/menu/home',
                pathMatch: 'full'
            }
        ]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button-inner {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-card {\n  background-color: #d8eff4;\n}\n\ndiv {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9EOlxcdGNjL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi1pbm5lciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGVmZjQgOyBcclxufVxyXG5cclxuZGl2IHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgXHJcbn1cclxuIiwiYnV0dG9uLWlubmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZWZmNDtcbn1cblxuZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuarioCadastro/usuario-cadastro.service */ "./src/app/services/usuarioCadastro/usuario-cadastro.service.ts");
/* harmony import */ var src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service */ "./src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service.ts");
/* harmony import */ var src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/queroConversar/quero-conversar.service */ "./src/app/services/queroConversar/quero-conversar.service.ts");







var HomePage = /** @class */ (function () {
    function HomePage(navctrl, auth, usuarioCadastro, conteudoTexto, queroConversarService) {
        this.navctrl = navctrl;
        this.auth = auth;
        this.usuarioCadastro = usuarioCadastro;
        this.conteudoTexto = conteudoTexto;
        this.queroConversarService = queroConversarService;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.busca(this.idUsuario);
        this.subscription = this.usuarioCadastro.getUsuario(this.idUsuario).subscribe(function (res) {
            _this.admin = res.isProfissional;
        });
    };
    HomePage.prototype.busca = function (idUsuario) {
        var _this = this;
        this.listQueroConversar = this.queroConversarService.getTodo(this.idUsuario).subscribe(function (res) {
            _this.avalicao = res.avaliacao;
            _this.tituloGlobal = _this.avalicao;
            console.log('Essa pohha -> ' + _this.tituloGlobal);
            //Parte que pega o texto, teste
            _this.conteudoTexto.getTodosPoAvaliacao(_this.tituloGlobal).subscribe(function (res) {
                _this.texto = res;
                // Arrumar essa p0ohha
                res.forEach(function (x) {
                    _this.tituloTela = x.tituloTexto;
                    _this.textoTela = x.texto;
                    console.log('Exibindo titulo- >' + x.tituloTexto);
                    console.log('Exibindo texto- >' + x.texto);
                });
            });
        });
    };
    // REfrente ao profissional
    HomePage.prototype.profissionalConteudoTexto = function () { };
    HomePage.prototype.profissionalConteudoImagem = function () { };
    HomePage.prototype.profissionalConteudoVideo = function () { };
    HomePage.prototype.direcionaPraTela = function () {
        this.navctrl.navigateForward('quero-conversar');
    };
    HomePage.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioCadastroService"] },
        { type: src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_5__["ProfissionalConteudoTextoService"] },
        { type: src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_6__["QueroConversarService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioCadastroService"],
            src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_5__["ProfissionalConteudoTextoService"],
            src_app_services_queroConversar_quero_conversar_service__WEBPACK_IMPORTED_MODULE_6__["QueroConversarService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map