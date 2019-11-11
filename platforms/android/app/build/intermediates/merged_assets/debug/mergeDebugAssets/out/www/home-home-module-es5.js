(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons>\r\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\r\n      <div>\r\n        <ion-button\r\n          shape=\"round\"\r\n          fill=\"outline\"\r\n          (click)=\"direcionaPraTela()\"\r\n        >\r\n          Quero Conversar\r\n        </ion-button>\r\n      </div>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-fab\r\n  vertical=\"bottom\"\r\n  horizontal=\"end\"\r\n  slot=\"fixed\"\r\n>\r\n  <ion-fab-button\r\n    routerLink=\"/emergencia/emergencia-utilizacao\"\r\n    routerDirection=\"forward\"\r\n    color=\"secondary\"\r\n  >\r\n    S.O.S\r\n  </ion-fab-button>\r\n</ion-fab>\r\n<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align: center; font-size: 15pt\">Recomendados para você</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n  <ion-card\r\n    *ngFor=\"let texto of profissionalConteudoTextoTela\"\r\n    style=\"background-color: #FFFFC4;;\"\r\n  >\r\n    <ion-card-header *ngIf=\"tituloTextoTela == '' \">\r\n      <ion-card-title hidden></ion-card-title>\r\n    </ion-card-header>\r\n\r\n\r\n\r\n    <ion-card-header *ngIf=\"tituloTextoTela\">\r\n      <ion-card-title>{{ texto.tituloTexto }}</ion-card-title>\r\n    </ion-card-header>\r\n\r\n\r\n\r\n    <ion-card-content\r\n      *ngIf=\"descricaoTextoTela\"\r\n      style=\"text-align: center; font-size: 15pt;\"\r\n    >\r\n      “{{ texto.texto }}”\r\n    </ion-card-content>\r\n    <ion-card-content\r\n      *ngIf=\"descricaoTextoTela == '' \"\r\n      style=\"text-align: center;\"\r\n    >\r\n      Nenhum texto foi cadastrado até o momento.\r\n    </ion-card-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <ion-card-header>\r\n      <ion-card-subtitle\r\n        *ngIf=\"autorTextoTela == '' \"\r\n        style=\"text-align: right;\"\r\n      >\r\n        Autor desconhecido\r\n      </ion-card-subtitle>\r\n      <ion-card-subtitle\r\n        *ngIf=\"autorTextoTela\"\r\n        style=\"text-align: right;\"\r\n      >\r\n        Autor:{{ texto.autorTexto }}\r\n      </ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"background-color: #FFFFC4;\"\r\n      [routerLink]=\"['/menu/texto-detalhes', texto.id]\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Mais informações</ion-label>\r\n    </ion-item>\r\n\r\n\r\n\r\n  </ion-card>\r\n\r\n\r\n\r\n  <ion-card\r\n    *ngFor=\"let imagem of profissionalConteudoImagemTela\"\r\n    style=\"color: #9AFFF1;\"\r\n  >\r\n\r\n\r\n\r\n    <ion-card-content *ngIf=\"imagem.imagem\">\r\n      <!-- achar uma maneira de melhorar aqui -->\r\n      <img\r\n        src=\"{{imagem.imagem}}\"\r\n        width=\"350px\"\r\n        height=\"320px\"\r\n      >\r\n    </ion-card-content>\r\n    <ion-card-content *ngIf=\"imagem.imagem == ''\">\r\n      <ion-card-header style=\"font-size: 15pt; text-align: center;\">Imagem não encontrada</ion-card-header>\r\n    </ion-card-content>\r\n\r\n\r\n\r\n    <ion-card-header *ngIf=\"imagem.tituloImagem == ''\">\r\n      <ion-card-title style=\"text-align: center;\">Titulo não cadastrado</ion-card-title>\r\n    </ion-card-header>\r\n\r\n\r\n\r\n    <ion-card-header *ngIf=\"imagem.tituloImagem\">\r\n      <ion-card-title style=\"text-align: center;\">{{imagem.tituloImagem}}</ion-card-title>\r\n    </ion-card-header>\r\n\r\n\r\n\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"background-color: lightsteelblue;\"\r\n      [routerLink]=\"['/menu/imagem-detalhes', imagem.id]\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n\r\n\r\n\r\n  <ion-card\r\n    *ngFor=\"let video of profissionalConteudoVideoTela\"\r\n    style=\"background-color: #D0BBFF;\"\r\n  >\r\n\r\n\r\n    <!-- achar alguma forma de pegar a thumbs -->\r\n    <img src=\"../../../assets/img/abrirmente.PNG\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Video do Youtube</ion-card-subtitle>\r\n      <ion-card-title>{{video.tituloVideo}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>{{video.descricaoVideo}}</ion-card-content>\r\n\r\n\r\n\r\n\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"background-color: silver;\"\r\n      [routerLink]=\"['/menu/video-detalhes', video.id]\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Assistir ao video</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service */ "./src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service.ts");
/* harmony import */ var src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service */ "./src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var HomePage = /** @class */ (function () {
    function HomePage(navctrl, auth, usuarioCadastro, profissionalConteudoTextoService, profissionalConteudoImagemService, profissionalConteudoVideoService, route) {
        this.navctrl = navctrl;
        this.auth = auth;
        this.usuarioCadastro = usuarioCadastro;
        this.profissionalConteudoTextoService = profissionalConteudoTextoService;
        this.profissionalConteudoImagemService = profissionalConteudoImagemService;
        this.profissionalConteudoVideoService = profissionalConteudoVideoService;
        this.route = route;
    }
    HomePage.prototype.ngOnInit = function () {
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.buscaDadosTexto(this.idUsuario);
        this.buscaDadosImagem(this.idUsuario);
        this.buscaDadosVideo(this.idUsuario);
    };
    /* TEXTO */
    HomePage.prototype.buscaDadosTexto = function (idUsuario) {
        var _this = this;
        //Pegando algunas dados do usuário (como idade e se é profissional)
        this.listUsuario = this.usuarioCadastro.getUsuario(this.idUsuario).subscribe(function (res) {
            _this.admin = res.isProfissional;
            //Pegando a data de nascimento da coleção
            _this.idadeUsuario = res.dataNasc;
            //Convertendo a data em idade
            var dob = new Date(_this.idadeUsuario);
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            var birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());
            var age = currentYear - dob.getFullYear();
            _this.idadeConvertida = age;
            //Testando a idade do usuário e atribuindo a uma variavel global
            if (_this.idadeConvertida >= 8 && _this.idadeConvertida <= 12) {
                _this.idadeDoIFF = '8 a 12'; // variavel que será enviada ao Service
            }
            else {
            }
            if (_this.idadeConvertida >= 13 && _this.idadeConvertida <= 17) {
                _this.idadeDoIFF = '13 a 17';
            }
            else {
            }
            if (_this.idadeConvertida >= 18 && _this.idadeConvertida <= 99) {
                _this.idadeDoIFF = '18 anos ou mais';
            }
            //Buscando os dados do service em especifico
            _this.listProfissionalConteudoTexto = _this.profissionalConteudoTextoService
                .getTodosPorIdade(_this.idadeDoIFF)
                .subscribe(function (res) {
                //Pegando a coleção inteira
                _this.profissionalConteudoTextoTela = res;
                //Percorrendo a coleçção e pegando os campos
                res.forEach(function (x) {
                    _this.tituloTextoTela = x.tituloTexto;
                    _this.descricaoTextoTela = x.texto;
                    _this.autorTextoTela = x.autorTexto;
                });
            });
        });
    };
    /* IMAGEM */
    HomePage.prototype.buscaDadosImagem = function (idUsuario) {
        var _this = this;
        //Pegando algunas dados do usuário (como idade e se é profissional)
        this.listUsuario = this.usuarioCadastro.getUsuario(this.idUsuario).subscribe(function (res) {
            _this.admin = res.isProfissional;
            //Pegando a data de nascimento da coleção
            _this.idadeUsuario = res.dataNasc;
            //Convertendo a data em idade
            var dob = new Date(_this.idadeUsuario);
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            var birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());
            var age = currentYear - dob.getFullYear();
            _this.idadeConvertida = age;
            //Testando a idade do usuário e atribuindo a uma variavel global
            if (_this.idadeConvertida >= 8 && _this.idadeConvertida <= 12) {
                _this.idadeDoIFF = '8 a 12'; // variavel que será enviada ao Service
            }
            else {
            }
            if (_this.idadeConvertida >= 13 && _this.idadeConvertida <= 17) {
                _this.idadeDoIFF = '13 a 17';
            }
            else {
            }
            if (_this.idadeConvertida >= 18 && _this.idadeConvertida <= 99) {
                _this.idadeDoIFF = '18 anos ou mais';
            }
            //Buscando os dados do service em especifico
            _this.listProfissionalConteudoImagem = _this.profissionalConteudoImagemService
                .getTodosPorIdade(_this.idadeDoIFF)
                .subscribe(function (res) {
                //Pegando a coleção inteira
                _this.profissionalConteudoImagemTela = res;
                //Percorrendo a coleçção e pegando os campos
                res.forEach(function (x) {
                    _this.tituloImagemTela = x.tituloImagem;
                    _this.maisInfoImagemTela = x.maisInfoImagem;
                    _this.autorImagemTela = x.autorImagem;
                    _this.imagem64Tela = x.imagem;
                });
            });
        });
    };
    /* VIDEO */
    HomePage.prototype.buscaDadosVideo = function (idUsuario) {
        var _this = this;
        //Pegando algunas dados do usuário (como idade e se é profissional)
        this.listUsuario = this.usuarioCadastro.getUsuario(this.idUsuario).subscribe(function (res) {
            _this.admin = res.isProfissional;
            //Pegando a data de nascimento da coleção
            _this.idadeUsuario = res.dataNasc;
            //Convertendo a data em idade
            var dob = new Date(_this.idadeUsuario);
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            var birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());
            var age = currentYear - dob.getFullYear();
            _this.idadeConvertida = age;
            //Testando a idade do usuário e atribuindo a uma variavel global
            if (_this.idadeConvertida >= 8 && _this.idadeConvertida <= 12) {
                _this.idadeDoIFF = '8 a 12'; // variavel que será enviada ao Service
            }
            else {
            }
            if (_this.idadeConvertida >= 13 && _this.idadeConvertida <= 17) {
                _this.idadeDoIFF = '13 a 17';
            }
            else {
            }
            if (_this.idadeConvertida >= 18 && _this.idadeConvertida <= 99) {
                _this.idadeDoIFF = '18 anos ou mais';
            }
            //Buscando os dados do service em especifico
            _this.listProfissionalConteudoVideo = _this.profissionalConteudoVideoService
                .getTodosPorIdade(_this.idadeDoIFF)
                .subscribe(function (res) {
                //Pegando a coleção inteira
                _this.profissionalConteudoVideoTela = res;
                //Percorrendo a coleçção e pegando os campos
                res.forEach(function (x) {
                    _this.tituloVideoTela = x.tituloVideo;
                    _this.descricaoVideoTela = x.descricaoVideo;
                    _this.linkVideoTela = x.linkVideo;
                    _this.autorVideoTela = x.autorVideo;
                });
            });
        });
    };
    HomePage.prototype.direcionaPraTela = function () {
        this.navctrl.navigateForward('quero-conversar');
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.listUsuario.unsubscribe();
        this.listProfissionalConteudoTexto.unsubscribe();
        this.listProfissionalConteudoImagem.unsubscribe();
        this.listProfissionalConteudoVideo.unsubscribe();
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioCadastroService"] },
        { type: src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_5__["ProfissionalConteudoTextoService"] },
        { type: src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_6__["ProfissionalConteudoImagemService"] },
        { type: src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_7__["ProfissionalConteudoVideoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
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
            src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_6__["ProfissionalConteudoImagemService"],
            src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_7__["ProfissionalConteudoVideoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map