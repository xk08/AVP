(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-assistente-cadastro-assistente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cadastro-assistente/cadastro-assistente.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cadastro-assistente/cadastro-assistente.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"dark\">\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Personalize seu assistente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-grid>\n      <form #form=\"ngForm\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-input\n                required\n                name=\"apelido\"\n                type=\"text\"\n                placeholder=\"Escolha um 'apelido' \"\n                [(ngModel)]='todas.apelido'\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-list>\n              <ion-grid fixed>\n\n                <ion-col size=\"12\">\n\n                  <ion-item (click)=\"abrirGaleria()\">\n                    <ion-icon\n                      name=\"add\"\n                      color=\"primary\"\n                      slot=\"start\"\n                    ></ion-icon>\n                    Clique para escolher\n                  </ion-item>\n\n                </ion-col>\n              </ion-grid>\n            </ion-list>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button\n              expand=\"full\"\n              (click)=\"saveTodo()\"\n              [disabled]=\"!form.form.valid\"\n            >\n              Salvar\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cadastro-assistente/cadastro-assistente.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cadastro-assistente/cadastro-assistente.module.ts ***!
  \*************************************************************************/
/*! exports provided: CadastroAssistentePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroAssistentePageModule", function() { return CadastroAssistentePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cadastro_assistente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro-assistente.page */ "./src/app/pages/cadastro-assistente/cadastro-assistente.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var routes = [
    {
        path: '',
        component: _cadastro_assistente_page__WEBPACK_IMPORTED_MODULE_3__["CadastroAssistentePage"]
    }
];
var CadastroAssistentePageModule = /** @class */ (function () {
    function CadastroAssistentePageModule() {
    }
    CadastroAssistentePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_cadastro_assistente_page__WEBPACK_IMPORTED_MODULE_3__["CadastroAssistentePage"]]
        })
    ], CadastroAssistentePageModule);
    return CadastroAssistentePageModule;
}());



/***/ }),

/***/ "./src/app/pages/cadastro-assistente/cadastro-assistente.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cadastro-assistente/cadastro-assistente.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhZGFzdHJvLWFzc2lzdGVudGUvY2FkYXN0cm8tYXNzaXN0ZW50ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/cadastro-assistente/cadastro-assistente.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cadastro-assistente/cadastro-assistente.page.ts ***!
  \***********************************************************************/
/*! exports provided: CadastroAssistentePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroAssistentePage", function() { return CadastroAssistentePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_assistenteCadastro_assistente_cadastro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/assistenteCadastro/assistente-cadastro.service */ "./src/app/services/assistenteCadastro/assistente-cadastro.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var CadastroAssistentePage = /** @class */ (function () {
    function CadastroAssistentePage(route, loadingController, assistenteCadastroService, navCtrl, camera, platform, file, storageService) {
        this.route = route;
        this.loadingController = loadingController;
        this.assistenteCadastroService = assistenteCadastroService;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.platform = platform;
        this.file = file;
        this.storageService = storageService;
        this.todas = {
            //os dados que estão sendo mantidos
            apelido: '',
            icone: ''
        };
    }
    CadastroAssistentePage.prototype.ngOnInit = function () {
        this.idAssistenteCadastro = this.route.snapshot.params['apelido']; // Why ?
        if (this.idAssistenteCadastro) {
            this.loadTodo();
        }
    };
    CadastroAssistentePage.prototype.loadTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Carregando Categoria...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.assistenteCadastroService.getTodo(this.idAssistenteCadastro).subscribe(function (res) {
                            loading.dismiss();
                            _this.todas = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastroAssistentePage.prototype.saveTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Salvando os Dados do Assistente'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.idAssistenteCadastro) {
                            /* TESTA SE JA EXISTE, ENTÃO FAZ UPDATE */
                            this.assistenteCadastroService.updateTodo(this.todas, this.idAssistenteCadastro).then(function () {
                                loading.dismiss();
                                _this.navCtrl.navigateBack('/menu/home');
                            });
                        }
                        else {
                            /* SENÃO EXISTIR, FAZ CADASTRO DE NOVOS DADOS */
                            this.assistenteCadastroService.addTodo(this.todas).then(function () {
                                loading.dismiss();
                                _this.navCtrl.navigateBack('/menu/home');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastroAssistentePage.prototype.abrirGaleria = function () {
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
                            .uploadImagemAssistenteCadastro(this.todas.apelido, this.blob)
                            .subscribe(function (res) {
                            _this.todas.icone = res;
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
    CadastroAssistentePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: src_app_services_assistenteCadastro_assistente_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["AssistenteCadastroService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
        { type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"])
    ], CadastroAssistentePage.prototype, "form", void 0);
    CadastroAssistentePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastro-assistente',
            template: __webpack_require__(/*! raw-loader!./cadastro-assistente.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cadastro-assistente/cadastro-assistente.page.html"),
            styles: [__webpack_require__(/*! ./cadastro-assistente.page.scss */ "./src/app/pages/cadastro-assistente/cadastro-assistente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_app_services_assistenteCadastro_assistente_cadastro_service__WEBPACK_IMPORTED_MODULE_4__["AssistenteCadastroService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
    ], CadastroAssistentePage);
    return CadastroAssistentePage;
}());



/***/ }),

/***/ "./src/app/services/assistenteCadastro/assistente-cadastro.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/services/assistenteCadastro/assistente-cadastro.service.ts ***!
  \****************************************************************************/
/*! exports provided: AssistenteCadastroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistenteCadastroService", function() { return AssistenteCadastroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AssistenteCadastroService = /** @class */ (function () {
    function AssistenteCadastroService(db) {
        this.todosCollection = db.collection('AssistenteCadastro');
    }
    AssistenteCadastroService.prototype.getTodos = function () {
        return this.todosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    AssistenteCadastroService.prototype.getTodo = function (id) {
        return this.todosCollection.doc(id).valueChanges();
    };
    AssistenteCadastroService.prototype.updateTodo = function (toda, id) {
        return this.todosCollection.doc(id).update(toda);
    };
    AssistenteCadastroService.prototype.addTodo = function (toda) {
        return this.todosCollection.add(toda);
    };
    AssistenteCadastroService.prototype.removeTodo = function (id) {
        return this.todosCollection.doc(id).delete();
    };
    AssistenteCadastroService.ctorParameters = function () { return [
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    AssistenteCadastroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], AssistenteCadastroService);
    return AssistenteCadastroService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-assistente-cadastro-assistente-module-es5.js.map