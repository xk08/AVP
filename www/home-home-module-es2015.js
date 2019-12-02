(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons>\r\n      <ion-menu-button autoHide=\"true\"></ion-menu-button>\r\n      <div>\r\n        <ion-button\r\n          shape=\"round\"\r\n          fill=\"outline\"\r\n          (click)=\"direcionaPraTela()\"\r\n        >\r\n          Como estou Hoje\r\n        </ion-button>\r\n      </div>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-fab\r\n  vertical=\"bottom\"\r\n  horizontal=\"end\"\r\n  slot=\"fixed\"\r\n>\r\n  <ion-fab-button\r\n    routerLink=\"/emergencia/emergencia-utilizacao\"\r\n    routerDirection=\"forward\"\r\n    color=\"secondary\"\r\n  >\r\n    S.O.S\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align: center; font-size: 15pt\">Recomendados para você</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-header\r\n    translucent\r\n  >\r\n    <ion-toolbar\r\n      translucent\r\n      color=\"amareloprofissional\"\r\n    >\r\n      <ion-toggle\r\n        [(ngModel)]=\"mostraMaisInfoTexto\"\r\n        color=\"medium\"\r\n        slot=\"end\"\r\n        name=\"filtro\"\r\n        checked\r\n      ></ion-toggle>\r\n      <ion-title style=\"font-size: 15pt; text-align: center; font-family: monospace;\">Textos e frases</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <br>\r\n  \r\n  <div *ngIf=\"mostraMaisInfoTexto\">\r\n\r\n      <ion-card-content\r\n      *ngIf=\"!profissionalConteudoTextoTela || profissionalConteudoTextoTela.length == 0\"\r\n      style=\"font-size: 12pt; text-align: center;\"\r\n    >\r\n    <ion-card-header>\r\n       Não há textos ou frases cadastrados\r\n    </ion-card-header>\r\n    </ion-card-content>\r\n\r\n    <ion-card\r\n      *ngFor=\"let texto of profissionalConteudoTextoTela\"\r\n      style=\"background-color: #FFFFC4;;\"\r\n    >\r\n\r\n      <ion-card-header *ngIf=\"tituloTextoTela\">\r\n        <ion-card-title>{{ texto.tituloTexto }}</ion-card-title>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content\r\n        style=\"text-align: center; font-size: 15pt;\"\r\n      >\r\n        “{{ texto.texto }}”\r\n      </ion-card-content>\r\n\r\n\r\n      <ion-card-header>\r\n        <ion-card-subtitle\r\n          *ngIf=\"autorTextoTela\"\r\n          style=\"text-align: right;\"\r\n        >\r\n          Autor:{{ texto.autorTexto }}\r\n        </ion-card-subtitle>\r\n      </ion-card-header>\r\n\r\n      <ion-item\r\n        href\r\n        class=\"activated\"\r\n        style=\"background-color: #FFFFC4;\"\r\n        [routerLink]=\"['/menu/texto-detalhes', texto.id]\"\r\n      >\r\n        <ion-label class=\"ion-text-center\">Mais informações</ion-label>\r\n      </ion-item>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <ion-header\r\n    translucent\r\n  >\r\n    <ion-toolbar\r\n      translucent\r\n      color=\"primary\"\r\n    >\r\n      <ion-toggle\r\n        [(ngModel)]=\"mostraMaisInfoImagem\"\r\n        color=\"medium\"\r\n        slot=\"end\"\r\n        name=\"filtro\"\r\n        checked\r\n      ></ion-toggle>\r\n      <ion-title style=\"font-size: 15pt; text-align: center; font-family: monospace;\">Imagens</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <br>\r\n  <div *ngIf=\"mostraMaisInfoImagem\">\r\n\r\n      <ion-card-content \r\n      *ngIf=\"!profissionalConteudoImagemTela || profissionalConteudoImagemTela.length == 0\">\r\n          <ion-card-header style=\"font-size: 12pt; text-align: center;\">Não há imagens cadastradas</ion-card-header>\r\n        </ion-card-content>\r\n\r\n    <ion-card\r\n      *ngFor=\"let imagem of profissionalConteudoImagemTela\"\r\n      style=\"color: #9AFFF1;\"\r\n    >\r\n      <ion-card-content>\r\n        <img\r\n          src=\"{{imagem.imagem}}\"\r\n          width=\"350px\"\r\n          height=\"320px\"\r\n        >\r\n      </ion-card-content>\r\n\r\n\r\n      <ion-card-header>\r\n        <ion-card-title style=\"text-align: center;\">{{imagem.tituloImagem}}</ion-card-title>\r\n      </ion-card-header>\r\n\r\n\r\n      <ion-item\r\n        href\r\n        class=\"activated\"\r\n        style=\"background-color: lightsteelblue;\"\r\n        [routerLink]=\"['/menu/imagem-detalhes', imagem.id]\"\r\n      >\r\n        <ion-label class=\"ion-text-center\">Mais informações</ion-label>\r\n      </ion-item>\r\n    </ion-card>\r\n  </div>\r\n\r\n\r\n\r\n  <ion-header\r\n    translucent\r\n  >\r\n    <ion-toolbar\r\n      translucent\r\n      color=\"tertiary\"\r\n    >\r\n      <ion-toggle\r\n        [(ngModel)]=\"mostraMaisInfoVideo\"\r\n        color=\"medium\"\r\n        slot=\"end\"\r\n        name=\"filtro\"\r\n        checked\r\n      ></ion-toggle>\r\n      <ion-title style=\"font-size: 15pt; text-align: center; font-family: monospace;\">Videos</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div *ngIf=\"mostraMaisInfoVideo\">\r\n\r\n      <ion-card-content *ngIf=\"!profissionalConteudoVideoTela || profissionalConteudoVideoTela.length == 0\">\r\n          <ion-card-header style=\"font-size: 12pt; text-align: center;\">Não há videos cadastrados</ion-card-header>\r\n      </ion-card-content>\r\n\r\n    <ion-card\r\n      *ngFor=\"let video of profissionalConteudoVideoTela\"\r\n      style=\"background-color: #D0BBFF;\"\r\n    >\r\n  \r\n      <iframe\r\n        width=\"350\"\r\n        height=\"300\"\r\n        [src]=\"videoDoYT(video.linkVideo)\"\r\n        frameborder=\"0\"\r\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n        allowfullscreen\r\n      ></iframe>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Video do Youtube</ion-card-subtitle>\r\n        <ion-card-title>{{video.tituloVideo}}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>{{video.descricaoVideo}}</ion-card-content>\r\n\r\n      <ion-item\r\n        href\r\n        class=\"activated\"\r\n        style=\"background-color: silver;\"\r\n        [routerLink]=\"['/menu/video-detalhes', video.id]\"\r\n      >\r\n        <ion-label class=\"ion-text-center\">Mais informações</ion-label>\r\n      </ion-item>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n"

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

module.exports = "button-inner {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-card {\n  background-color: #d8eff4;\n}\n\ndiv {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9EOlxcbWFyY29zXFxUQ0NcXHRjYy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24taW5uZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhlZmY0IDsgXHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIFxyXG59XHJcbiIsImJ1dHRvbi1pbm5lciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGVmZjQ7XG59XG5cbmRpdiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */"

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
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");











let HomePage = class HomePage {
    constructor(navctrl, auth, usuarioCadastro, profissionalConteudoTextoService, profissionalConteudoImagemService, profissionalConteudoVideoService, route, dom, localNotifications) {
        this.navctrl = navctrl;
        this.auth = auth;
        this.usuarioCadastro = usuarioCadastro;
        this.profissionalConteudoTextoService = profissionalConteudoTextoService;
        this.profissionalConteudoImagemService = profissionalConteudoImagemService;
        this.profissionalConteudoVideoService = profissionalConteudoVideoService;
        this.route = route;
        this.dom = dom;
        this.localNotifications = localNotifications;
        //Dos toggles
        this.mostraMaisInfoTexto = false;
        this.mostraMaisInfoImagem = false;
        this.mostraMaisInfoVideo = true;
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
                    // AQUI É A NOTIFICAÇÃO
                    if (this.profissionalConteudoTextoTela != null) {
                        this.openNotificacao(this.tituloTextoTela, this.descricaoTextoTela);
                        console.log("Teste se chega algo ->" + this.tituloTextoTela);
                    }
                });
            });
        });
    }
    openNotificacao(titulo, texto) {
        this.localNotifications.schedule({
            title: titulo,
            text: texto,
            trigger: { at: new Date(new Date().getTime() + 2000) },
            led: 'FF0000',
            sound: null
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
                    this.autorVideoTela = x.autorVideo;
                    this.linkVideoTela = x.linkVideo;
                });
            });
        });
    }
    //Ver como pego de acordo com o link do app do youtube no celu
    /// que é assim -> https://youtu.be/Pi-s0ZFK3aM
    videoDoYT(vid) {
        this.finalLink = vid.substring(vid.indexOf('=') + 1);
        this.urlEmbd = `https://www.youtube.com/embed/${this.finalLink}`;
        return this.dom.bypassSecurityTrustResourceUrl(this.urlEmbd);
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
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"] }
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
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map