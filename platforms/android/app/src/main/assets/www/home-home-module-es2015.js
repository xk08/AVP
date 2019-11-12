(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons>\r\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\r\n      <div>\r\n        <ion-button shape=\"round\" fill=\"outline\" (click)=\"direcionaPraTela()\">\r\n          Como estou Hoje\r\n        </ion-button>\r\n      </div>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button\r\n    routerLink=\"/emergencia/emergencia-utilizacao\"\r\n    routerDirection=\"forward\"\r\n    color=\"secondary\"\r\n  >\r\n    S.O.S\r\n  </ion-fab-button>\r\n</ion-fab>\r\n<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align: center; font-size: 15pt\"\r\n      >Recomendados para você</ion-title\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card\r\n    *ngFor=\"let texto of profissionalConteudoTextoTela\"\r\n    style=\"background-color: #FFFFC4;;\"\r\n  >\r\n    <ion-card-header *ngIf=\"tituloTextoTela == '' \">\r\n      <ion-card-title hidden></ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-header *ngIf=\"tituloTextoTela\">\r\n      <ion-card-title>{{ texto.tituloTexto }}</ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content\r\n      *ngIf=\"descricaoTextoTela\"\r\n      style=\"text-align: center; font-size: 15pt;\"\r\n    >\r\n      “{{ texto.texto }}”\r\n    </ion-card-content>\r\n    <ion-card-content\r\n      *ngIf=\"descricaoTextoTela == '' \"\r\n      style=\"text-align: center;\"\r\n    >\r\n      Nenhum texto foi cadastrado até o momento.\r\n    </ion-card-content>\r\n\r\n    <ion-card-header>\r\n      <ion-card-subtitle\r\n        *ngIf=\"autorTextoTela == '' \"\r\n        style=\"text-align: right;\"\r\n      >\r\n        Autor desconhecido\r\n      </ion-card-subtitle>\r\n      <ion-card-subtitle *ngIf=\"autorTextoTela\" style=\"text-align: right;\">\r\n        Autor:{{ texto.autorTexto }}\r\n      </ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"background-color: #FFFFC4;\"\r\n      [routerLink]=\"['/menu/texto-detalhes', texto.id]\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Mais informações</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-card\r\n    *ngFor=\"let imagem of profissionalConteudoImagemTela\"\r\n    style=\"color: #9AFFF1;\"\r\n  >\r\n    <ion-card-content *ngIf=\"imagem.imagem\">\r\n      <!-- achar uma maneira de melhorar aqui -->\r\n      <img src=\"{{imagem.imagem}}\" width=\"350px\" height=\"320px\" />\r\n    </ion-card-content>\r\n    <ion-card-content *ngIf=\"imagem.imagem == ''\">\r\n      <ion-card-header style=\"font-size: 15pt; text-align: center;\"\r\n        >Imagem não encontrada</ion-card-header\r\n      >\r\n    </ion-card-content>\r\n\r\n    <ion-card-header *ngIf=\"imagem.tituloImagem == ''\">\r\n      <ion-card-title style=\"text-align: center;\"\r\n        >Titulo não cadastrado</ion-card-title\r\n      >\r\n    </ion-card-header>\r\n\r\n    <ion-card-header *ngIf=\"imagem.tituloImagem\">\r\n      <ion-card-title style=\"text-align: center;\"\r\n        >{{imagem.tituloImagem}}</ion-card-title\r\n      >\r\n    </ion-card-header>\r\n\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"background-color: lightsteelblue;\"\r\n      [routerLink]=\"['/menu/imagem-detalhes', imagem.id]\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Ver mais informações</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-card\r\n    *ngFor=\"let video of profissionalConteudoVideoTela\"\r\n    style=\"background-color: #D0BBFF;\"\r\n  >\r\n    <!-- achar alguma forma de pegar a thumbs -->\r\n    <img src=\"../../../assets/img/abrirmente.PNG\" />\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Video do Youtube</ion-card-subtitle>\r\n      <ion-card-title>{{video.tituloVideo}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>{{video.descricaoVideo}}</ion-card-content>\r\n\r\n    <ion-item\r\n      href\r\n      class=\"activated\"\r\n      style=\"background-color: silver;\"\r\n      [routerLink]=\"['/menu/video-detalhes', video.id]\"\r\n    >\r\n      <ion-label class=\"ion-text-center\">Assistir ao video</ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-card-content>\r\n    <iframe\r\n      width=\"320\"\r\n      height=\"320\"\r\n      [src]=\"videoDoYoutube(vid)\"\r\n      frameborder=\"0\"\r\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n      allowfullscreen\r\n    ></iframe>\r\n  </ion-card-content>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/core/overlay.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/overlay.service.ts ***!
  \*****************************************/
/*! exports provided: OverlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayService", function() { return OverlayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let OverlayService = class OverlayService {
    constructor(alertCtrl, loadingCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    alert(options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create(options);
            yield alert.present();
            return alert;
        });
    }
    loading(options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create(Object.assign({ message: 'Loading...' }, options));
            yield loading.present();
            loading.dismiss();
            return loading;
        });
    }
    toast(options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create(Object.assign({ position: 'bottom', duration: 3000, showCloseButton: true, closeButtonText: 'Ok' }, options));
            yield toast.present();
            return toast;
        });
    }
};
OverlayService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
OverlayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], OverlayService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
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
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]]
    })
], HomePageModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuarioCadastro/usuario-cadastro.service */ "./src/app/services/usuarioCadastro/usuario-cadastro.service.ts");
/* harmony import */ var src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service */ "./src/app/services/profissionalConteudoTexto/profissional-conteudo-texto.service.ts");
/* harmony import */ var src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service */ "./src/app/services/profissionalConteudoImagem/profissional-conteudo-imagem.service.ts");
/* harmony import */ var src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service */ "./src/app/services/profissionalConteudoVideo/profissional-conteudo-video.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");










let HomePage = class HomePage {
    constructor(navctrl, auth, usuarioCadastro, profissionalConteudoTextoService, profissionalConteudoImagemService, profissionalConteudoVideoService, route, dom) {
        this.navctrl = navctrl;
        this.auth = auth;
        this.usuarioCadastro = usuarioCadastro;
        this.profissionalConteudoTextoService = profissionalConteudoTextoService;
        this.profissionalConteudoImagemService = profissionalConteudoImagemService;
        this.profissionalConteudoVideoService = profissionalConteudoVideoService;
        this.route = route;
        this.dom = dom;
        this.vid = 'https://www.youtube.com/embed/hHYDVmWE9FI';
    }
    videoDoYoutube(vid) {
        return this.dom.bypassSecurityTrustResourceUrl(vid);
    }
    ngOnInit() {
        this.idUsuario = this.auth.auth.currentUser.uid;
        this.buscaDadosTexto(this.idUsuario);
        this.buscaDadosImagem(this.idUsuario);
        this.buscaDadosVideo(this.idUsuario);
    }
    /* TEXTO */
    buscaDadosTexto(idUsuario) {
        //Pegando algunas dados do usuário (como idade e se é profissional)
        this.listUsuario = this.usuarioCadastro
            .getUsuario(this.idUsuario)
            .subscribe(res => {
            this.admin = res.isProfissional;
            //Pegando a data de nascimento da coleção
            this.idadeUsuario = res.dataNasc;
            //Convertendo a data em idade
            var dob = new Date(this.idadeUsuario);
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            var birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());
            var age = currentYear - dob.getFullYear();
            this.idadeConvertida = age;
            //Testando a idade do usuário e atribuindo a uma variavel global
            if (this.idadeConvertida >= 8 && this.idadeConvertida <= 12) {
                this.idadeDoIFF = "8 a 12"; // variavel que será enviada ao Service
            }
            else {
            }
            if (this.idadeConvertida >= 13 && this.idadeConvertida <= 17) {
                this.idadeDoIFF = "13 a 17";
            }
            else {
            }
            if (this.idadeConvertida >= 18 && this.idadeConvertida <= 99) {
                this.idadeDoIFF = "18 anos ou mais";
            }
            //Buscando os dados do service em especifico
            this.listProfissionalConteudoTexto = this.profissionalConteudoTextoService
                .getTodosPorIdade(this.idadeDoIFF)
                .subscribe(res => {
                //Pegando a coleção inteira
                this.profissionalConteudoTextoTela = res;
                //Percorrendo a coleçção e pegando os campos
                res.forEach(x => {
                    this.tituloTextoTela = x.tituloTexto;
                    this.descricaoTextoTela = x.texto;
                    this.autorTextoTela = x.autorTexto;
                });
            });
        });
    }
    /* IMAGEM */
    buscaDadosImagem(idUsuario) {
        //Pegando algunas dados do usuário (como idade e se é profissional)
        this.listUsuario = this.usuarioCadastro
            .getUsuario(this.idUsuario)
            .subscribe(res => {
            this.admin = res.isProfissional;
            //Pegando a data de nascimento da coleção
            this.idadeUsuario = res.dataNasc;
            //Convertendo a data em idade
            var dob = new Date(this.idadeUsuario);
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            var birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());
            var age = currentYear - dob.getFullYear();
            this.idadeConvertida = age;
            //Testando a idade do usuário e atribuindo a uma variavel global
            if (this.idadeConvertida >= 8 && this.idadeConvertida <= 12) {
                this.idadeDoIFF = "8 a 12"; // variavel que será enviada ao Service
            }
            else {
            }
            if (this.idadeConvertida >= 13 && this.idadeConvertida <= 17) {
                this.idadeDoIFF = "13 a 17";
            }
            else {
            }
            if (this.idadeConvertida >= 18 && this.idadeConvertida <= 99) {
                this.idadeDoIFF = "18 anos ou mais";
            }
            //Buscando os dados do service em especifico
            this.listProfissionalConteudoImagem = this.profissionalConteudoImagemService
                .getTodosPorIdade(this.idadeDoIFF)
                .subscribe(res => {
                //Pegando a coleção inteira
                this.profissionalConteudoImagemTela = res;
                //Percorrendo a coleçção e pegando os campos
                res.forEach(x => {
                    this.tituloImagemTela = x.tituloImagem;
                    this.maisInfoImagemTela = x.maisInfoImagem;
                    this.autorImagemTela = x.autorImagem;
                    this.imagem64Tela = x.imagem;
                });
            });
        });
    }
    /* VIDEO */
    buscaDadosVideo(idUsuario) {
        //Pegando algunas dados do usuário (como idade e se é profissional)
        this.listUsuario = this.usuarioCadastro
            .getUsuario(this.idUsuario)
            .subscribe(res => {
            this.admin = res.isProfissional;
            //Pegando a data de nascimento da coleção
            this.idadeUsuario = res.dataNasc;
            //Convertendo a data em idade
            var dob = new Date(this.idadeUsuario);
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            var birthdayThisYear = new Date(currentYear, dob.getMonth(), dob.getDate());
            var age = currentYear - dob.getFullYear();
            this.idadeConvertida = age;
            //Testando a idade do usuário e atribuindo a uma variavel global
            if (this.idadeConvertida >= 8 && this.idadeConvertida <= 12) {
                this.idadeDoIFF = "8 a 12"; // variavel que será enviada ao Service
            }
            else {
            }
            if (this.idadeConvertida >= 13 && this.idadeConvertida <= 17) {
                this.idadeDoIFF = "13 a 17";
            }
            else {
            }
            if (this.idadeConvertida >= 18 && this.idadeConvertida <= 99) {
                this.idadeDoIFF = "18 anos ou mais";
            }
            //Buscando os dados do service em especifico
            this.listProfissionalConteudoVideo = this.profissionalConteudoVideoService
                .getTodosPorIdade(this.idadeDoIFF)
                .subscribe(res => {
                //Pegando a coleção inteira
                this.profissionalConteudoVideoTela = res;
                //Percorrendo a coleçção e pegando os campos
                res.forEach(x => {
                    this.tituloVideoTela = x.tituloVideo;
                    this.descricaoVideoTela = x.descricaoVideo;
                    this.linkVideoTela = x.linkVideo;
                    this.autorVideoTela = x.autorVideo;
                });
            });
        });
    }
    direcionaPraTela() {
        this.navctrl.navigateForward("quero-conversar");
    }
    ngOnDestroy() {
        this.listUsuario.unsubscribe();
        this.listProfissionalConteudoTexto.unsubscribe();
        this.listProfissionalConteudoImagem.unsubscribe();
        this.listProfissionalConteudoVideo.unsubscribe();
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioCadastroService"] },
    { type: src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_5__["ProfissionalConteudoTextoService"] },
    { type: src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_6__["ProfissionalConteudoImagemService"] },
    { type: src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_7__["ProfissionalConteudoVideoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        src_app_services_usuarioCadastro_usuario_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioCadastroService"],
        src_app_services_profissionalConteudoTexto_profissional_conteudo_texto_service__WEBPACK_IMPORTED_MODULE_5__["ProfissionalConteudoTextoService"],
        src_app_services_profissionalConteudoImagem_profissional_conteudo_imagem_service__WEBPACK_IMPORTED_MODULE_6__["ProfissionalConteudoImagemService"],
        src_app_services_profissionalConteudoVideo_profissional_conteudo_video_service__WEBPACK_IMPORTED_MODULE_7__["ProfissionalConteudoVideoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]])
], HomePage);



/***/ }),

/***/ "./src/app/services/usuarioCadastro/usuario-cadastro.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/usuarioCadastro/usuario-cadastro.service.ts ***!
  \**********************************************************************/
/*! exports provided: UsuarioCadastroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioCadastroService", function() { return UsuarioCadastroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UsuarioCadastroService = class UsuarioCadastroService {
    constructor(db, authService) {
        this.db = db;
        this.authService = authService;
        this.todosCollection = db.collection('UsuarioCadastro');
        this.todosUsuarios = this.todosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const uid = a.payload.doc.id;
                return Object.assign({ uid }, data);
            });
        }));
    }
    getUsuarios() {
        return this.todosUsuarios;
    }
    getUsuario(id) {
        return this.todosCollection.doc(id).valueChanges();
    }
    updateUsuarioTodo(toda, id) {
        return this.todosCollection.doc(id).update(toda);
    }
    updateUsuarioAdmin(id, valor) {
        return this.todosCollection.doc(id).update({ isAdmin: valor });
    }
    updateUsuarioProfissional(id, valor) {
        return this.todosCollection.doc(id).update({ isProfissional: valor });
    }
    //FUNÇÃO PARA CADASTRAR NOVO USUARIO
    addUsuarioTodo(dataUser) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //CADASTRA USUARIO NO AUTHENTICATION
            const newUser = yield this.authService.createUser(dataUser.email, dataUser.senha);
            //EXLUI A SENHA E O EMAIL, PARA NÃO IR A DATABASE
            delete dataUser.senha;
            // delete dataUser.email;
            dataUser.foto =
                'https://firebasestorage.googleapis.com/v0/b/primeirobanco-8d1a9.appspot.com/o/User.png?alt=media&token=78d69205-4005-4f3b-8925-10439a145ffa';
            //ADICIONA O RETANTES DOS DADOS DO USUARIO NO DATABASE
            this.db
                .collection('UsuarioCadastro')
                .doc(newUser.user.uid)
                .set(dataUser);
            return;
        });
    }
    removeUsuarioTodo(id) {
        return this.todosCollection.doc(id).delete();
    }
    // Não sei oq essa pohha ta fazendo
    getUsuarioPorid(categoria) {
        return this.db
            .collection('UsuarioCadastro', ref => ref.where('idCategoria', '==', categoria))
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                console.log(data);
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getUsuarioUmPorUm(id) {
        return this.todosCollection
            .doc(id)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(a => {
            const data = a.payload.data();
            console.log(data);
            const id = a.payload.id;
            return Object.assign({ id }, data);
        }));
    }
};
UsuarioCadastroService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
UsuarioCadastroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], UsuarioCadastroService);



/***/ }),

/***/ "./src/app/shared/components/logout-button/logout-button.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/logout-button/logout-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: LogoutButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutButtonComponent", function() { return LogoutButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/overlay.service */ "./src/app/core/overlay.service.ts");





let LogoutButtonComponent = class LogoutButtonComponent {
    constructor(authService, menuCtrl, navCtrl, overlayService) {
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.overlayService = overlayService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!(yield this.menuCtrl.isEnabled(this.menuId))) {
                //Checka se o menu esta habilitado
                this.menuCtrl.enable(true, this.menuId); // Se não estiver, indica o  id   do menu q qer habilitar
            }
        });
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.overlayService.alert({
                //Apresenta a mensagem
                message: 'Deseja mesmo sair ?',
                buttons: [
                    {
                        text: 'Sim',
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            yield this.authService.signOut(); // chama o método de deslogar criado
                            /* AULA 95 ->
                            Se usário estiver deslogado, desabilita o login
                            #USAR PARA TIPOS DE USUÁRIO NO FUTURO ???
                            */
                            yield this.menuCtrl.enable(false, this.menuId);
                            // this.navCtrl.navigateRoot('login'); // Finaliza as paginas e dieciona pro login
                        })
                    },
                    'Não' // Não faz nada e segue a execução
                ]
            });
        });
    }
};
LogoutButtonComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__["OverlayService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], LogoutButtonComponent.prototype, "menuId", void 0);
LogoutButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-logout-button',
        template: `
    <ion-buttons>
      <ion-button (click)="logout()">
        <ion-icon name="exit" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-buttons>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
        src_app_core_overlay_service__WEBPACK_IMPORTED_MODULE_4__["OverlayService"]])
], LogoutButtonComponent);



/***/ }),

/***/ "./src/app/shared/components/menu-toggle/menu-toggle.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/menu-toggle/menu-toggle.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuToggleComponent", function() { return MenuToggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/* AULA 92 -> Componente genérico de menu, que pode ser chamado em qualquer momento na aplicação */

let MenuToggleComponent = class MenuToggleComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MenuToggleComponent.prototype, "menu", void 0);
MenuToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-toggle',
        /* Usando HTML inline, não necessitdando de arquivos externos */
        template: `
    <ion-buttons>
      <ion-menu-toggle [menu]="menu">
        <ion-button>
          <ion-icon slot="icon-only" name="menu"></ion-icon>
        </ion-button>
      </ion-menu-toggle>
    </ion-buttons>
  `
    })
], MenuToggleComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_menu_toggle_menu_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu-toggle/menu-toggle.component */ "./src/app/shared/components/menu-toggle/menu-toggle.component.ts");
/* harmony import */ var _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/logout-button/logout-button.component */ "./src/app/shared/components/logout-button/logout-button.component.ts");







let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_6__["LogoutButtonComponent"], _components_menu_toggle_menu_toggle_component__WEBPACK_IMPORTED_MODULE_5__["MenuToggleComponent"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_6__["LogoutButtonComponent"],
            _components_menu_toggle_menu_toggle_component__WEBPACK_IMPORTED_MODULE_5__["MenuToggleComponent"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map