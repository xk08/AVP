(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emergencia-cadastro-emergencia-cadastro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <!-- alinha no centro e define pra coluna a resolucao de acordo com o tamanho da tela -->\r\n    <ion-row justify-content-center>\r\n      <!-- Deixa responsivo -->\r\n      <ion-col\r\n        size-sm=\"8\"\r\n        size-md=\"12\"\r\n        size-lg=\"3\"\r\n        size-xl=\"3\"\r\n      >\r\n\r\n        <form #form=\"ngForm\">\r\n\r\n          <ion-text text-align=\"justify-content-center\">Número de pessoas proximas a você</ion-text>\r\n\r\n          <!-- PRIMEIRO NÚMERO -->\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"person\"\r\n              color=\"primary\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"text\"\r\n              name=\"primeiroNumero\"\r\n              placeholder=\"Primeiro número\"\r\n              autofocus=\"true\"\r\n              [(ngModel)]='todas.primeiroNumero'\r\n              required\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <!-- SEGUNDO NÚMERO -->\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"person\"\r\n              color=\"primary\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-input\r\n              type=\"text\"\r\n              name=\"segundoNumero\"\r\n              placeholder=\"Segundo número\"\r\n              autofocus=\"true\"\r\n              [(ngModel)]='todas.segundoNumero'\r\n              required\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-icon\r\n              name=\"person\"\r\n              color=\"primary\"\r\n              slot=\"start\"\r\n            ></ion-icon>\r\n            <ion-textarea\r\n              name=\"frase\"\r\n              autofocus=\"true\"\r\n              [(ngModel)]='todas.frase'\r\n              required\r\n              rows=\"4\"\r\n              cols=\"10\"\r\n              placeholder=\"Frase que você gosta e admira...\"\r\n            ></ion-textarea>\r\n          </ion-item>\r\n          <ion-title>\r\n            <ion-label>Foto que você gosta e admira</ion-label>\r\n            <ion-item (click)=\"abrirGaleria()\">\r\n              <ion-icon\r\n                name=\"add\"\r\n                color=\"primary\"\r\n                slot=\"start\"\r\n              ></ion-icon>\r\n              Clique para escolher\r\n            </ion-item>\r\n          </ion-title>\r\n\r\n          <!-- BOTÃO DE CADASTRO -->\r\n\r\n          <ion-button\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            class=\"login-button\"\r\n            [disabled]=\"!form.form.valid\"\r\n            (click)=\"saveTodo()\"\r\n            color='dark'\r\n          >\r\n            Salvar Informações\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/emergencia-cadastro/emergencia-cadastro.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/emergencia-cadastro/emergencia-cadastro.module.ts ***!
  \*************************************************************************/
/*! exports provided: EmergenciaCadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergenciaCadastroPageModule", function() { return EmergenciaCadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _emergencia_cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emergencia-cadastro.page */ "./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _emergencia_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["EmergenciaCadastroPage"]
    }
];
var EmergenciaCadastroPageModule = /** @class */ (function () {
    function EmergenciaCadastroPageModule() {
    }
    EmergenciaCadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_emergencia_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["EmergenciaCadastroPage"]]
        })
    ], EmergenciaCadastroPageModule);
    return EmergenciaCadastroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtZXJnZW5jaWEtY2FkYXN0cm8vZW1lcmdlbmNpYS1jYWRhc3Ryby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.ts ***!
  \***********************************************************************/
/*! exports provided: EmergenciaCadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergenciaCadastroPage", function() { return EmergenciaCadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emergenciaCadastro/emergencia-cadastro.service */ "./src/app/services/emergenciaCadastro/emergencia-cadastro.service.ts");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");









var EmergenciaCadastroPage = /** @class */ (function () {
    function EmergenciaCadastroPage(route, loadingController, emergenciaCadastroService, navCtrl, camera, platform, file, storageService) {
        this.route = route;
        this.loadingController = loadingController;
        this.emergenciaCadastroService = emergenciaCadastroService;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.platform = platform;
        this.file = file;
        this.storageService = storageService;
        this.todas = {
            //os dados que estão sendo mantidos
            idAlternativo: '',
            foto: '',
            primeiroNumero: '',
            segundoNumero: '',
            frase: ''
        };
    }
    EmergenciaCadastroPage.prototype.ngOnInit = function () {
        this.idEmergenciaCadastro = this.route.snapshot.params['idAlternativo']; // Why ?
        if (this.idEmergenciaCadastro) {
            this.loadTodo();
        }
    };
    EmergenciaCadastroPage.prototype.loadTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Carregando ""algoo""...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.emergenciaCadastroService.getTodo(this.idEmergenciaCadastro).subscribe(function (res) {
                            loading.dismiss();
                            _this.todas = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EmergenciaCadastroPage.prototype.saveTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Salvando os Dados do mecanismo de S.O.S'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.idEmergenciaCadastro) {
                            /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
                            this.emergenciaCadastroService.updateTodo(this.todas, this.idEmergenciaCadastro).then(function () {
                                loading.dismiss();
                                _this.navCtrl.navigateBack('/menu/home');
                                console.log('Até aqui ta indo, salvo com sucesso');
                            });
                        }
                        else {
                            /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
                            this.emergenciaCadastroService.addTodo(this.todas).then(function () {
                                loading.dismiss();
                                _this.navCtrl.navigateBack('/menu/home');
                                console.log('Até aqui ta indo, salvo com sucesso');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EmergenciaCadastroPage.prototype.abrirGaleria = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var opcao, fileUrl, file, path, buffer, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opcao = {
                            quality: 30,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                            correctOrientation: true
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.camera.getPicture(opcao)];
                    case 2:
                        fileUrl = _a.sent();
                        file = void 0;
                        if (this.platform.is('ios')) {
                            //IOS RETORNA IMG_23456789.jpg
                            file = fileUrl.split('/').pop();
                        }
                        else {
                            //ANDROID RETORNA IMG_23456.jpg?23456789 SENDO ASSIM O TRATAMENTO É DIFERENTE
                            file = fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.indexOf('?'));
                        }
                        path = fileUrl.substring(0, fileUrl.lastIndexOf('/'));
                        return [4 /*yield*/, this.file.readAsArrayBuffer(path, file)];
                    case 3:
                        buffer = _a.sent();
                        this.blob = new Blob([buffer], { type: 'image/jpg' });
                        this.storageService
                            .uploadImagemEmergenciaCadastro(this.todas.idAlternativo, this.blob)
                            .subscribe(function (res) {
                            _this.todas.foto = res;
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EmergenciaCadastroPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_5__["EmergenciaCadastroService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
        { type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], EmergenciaCadastroPage.prototype, "form", void 0);
    EmergenciaCadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emergencia-cadastro',
            template: __webpack_require__(/*! raw-loader!./emergencia-cadastro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.html"),
            styles: [__webpack_require__(/*! ./emergencia-cadastro.page.scss */ "./src/app/pages/emergencia-cadastro/emergencia-cadastro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            src_app_services_emergenciaCadastro_emergencia_cadastro_service__WEBPACK_IMPORTED_MODULE_5__["EmergenciaCadastroService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
    ], EmergenciaCadastroPage);
    return EmergenciaCadastroPage;
}());



/***/ }),

/***/ "./src/app/services/emergenciaCadastro/emergencia-cadastro.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/services/emergenciaCadastro/emergencia-cadastro.service.ts ***!
  \****************************************************************************/
/*! exports provided: EmergenciaCadastroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergenciaCadastroService", function() { return EmergenciaCadastroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var EmergenciaCadastroService = /** @class */ (function () {
    function EmergenciaCadastroService(db) {
        this.todosCollection = db.collection('EmergenciaCadastro');
    }
    EmergenciaCadastroService.prototype.getTodos = function () {
        return this.todosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    EmergenciaCadastroService.prototype.getTodo = function (id) {
        return this.todosCollection.doc(id).valueChanges();
    };
    EmergenciaCadastroService.prototype.updateTodo = function (toda, id) {
        return this.todosCollection.doc(id).update(toda);
    };
    EmergenciaCadastroService.prototype.addTodo = function (toda) {
        return this.todosCollection.add(toda);
    };
    EmergenciaCadastroService.prototype.removeTodo = function (id) {
        return this.todosCollection.doc(id).delete();
    };
    EmergenciaCadastroService.ctorParameters = function () { return [
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    EmergenciaCadastroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], EmergenciaCadastroService);
    return EmergenciaCadastroService;
}());



/***/ })

}]);
//# sourceMappingURL=emergencia-cadastro-emergencia-cadastro-module-es5.js.map