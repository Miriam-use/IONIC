(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dato-dato-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dato/dato.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dato/dato.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Datos Alumno</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label position=\"floating\" > Nombre</ion-label>\n    <ion-input type=\"text\" name=\"nombre\" [(ngModel)]=\"heroe.nombre\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\" > Correo Electronico</ion-label>\n    <ion-input type=\"text\" name=\"email\" [(ngModel)]=\"heroe.email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\" > Telefono</ion-label>\n    <ion-input type=\"text\" name=\"telefono\" [(ngModel)]=\"heroe.telefono\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\" > Matricula</ion-label>\n    <ion-input type=\"text\" name=\"matricula\" [(ngModel)]=\"heroe.matricula\"></ion-input>\n  </ion-item>\n\n  <br>\n  <ion-button color=\"primary\" expand=\"block\" (click)=\"saveHeroe()\">Guardar</ion-button>\n\n  <br>\n  <ion-button color=\"danger\" expand=\"block\" routerLink=\"/home\">Cancelar</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/dato/dato-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/dato/dato-routing.module.ts ***!
  \*********************************************/
/*! exports provided: DatoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatoPageRoutingModule", function() { return DatoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dato_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dato.page */ "./src/app/dato/dato.page.ts");




const routes = [
    {
        path: '',
        component: _dato_page__WEBPACK_IMPORTED_MODULE_3__["DatoPage"]
    }
];
let DatoPageRoutingModule = class DatoPageRoutingModule {
};
DatoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DatoPageRoutingModule);



/***/ }),

/***/ "./src/app/dato/dato.module.ts":
/*!*************************************!*\
  !*** ./src/app/dato/dato.module.ts ***!
  \*************************************/
/*! exports provided: DatoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatoPageModule", function() { return DatoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dato_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dato-routing.module */ "./src/app/dato/dato-routing.module.ts");
/* harmony import */ var _dato_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dato.page */ "./src/app/dato/dato.page.ts");







let DatoPageModule = class DatoPageModule {
};
DatoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dato_routing_module__WEBPACK_IMPORTED_MODULE_5__["DatoPageRoutingModule"]
        ],
        declarations: [_dato_page__WEBPACK_IMPORTED_MODULE_6__["DatoPage"]]
    })
], DatoPageModule);



/***/ }),

/***/ "./src/app/dato/dato.page.scss":
/*!*************************************!*\
  !*** ./src/app/dato/dato.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdG8vZGF0by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/dato/dato.page.ts":
/*!***********************************!*\
  !*** ./src/app/dato/dato.page.ts ***!
  \***********************************/
/*! exports provided: DatoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatoPage", function() { return DatoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let DatoPage = class DatoPage {
    constructor(router, db, authService) {
        this.router = router;
        this.db = db;
        this.authService = authService;
        this.heroes = []; //Array donde cargaremos los alumnos que hay en la base de datos y las mostraremos en nuestra page
        this.heroe = { id: null, nombre: null, email: null, telefono: null, matricula: null }; //Declaramos un objeto vacio de alumno
        this.show = false; //Inicializamos la variable a false, para que por defecto no se muestren los campos
        this.idSelected = null; // Inicializamos a null idselected, que significará que no tenemos ningun alumno existente selecionada.
        authService.getHeroes()
            .subscribe(heroes => {
            this.heroes = heroes;
        }); //Hacemos una llamada a nuestro servicio, al metodo getHeroes y nos devolvera toda los alumnos que hay en nuestra abase de datos
        // y las cargaremos en nuestro array
    }
    ngOnInit() {
    }
    saveHeroe() {
        if (this.idSelected != null) { //si es diferente a null actualizamos, sino creamos uno nuevo
            this.authService.updateHeroe(this.heroe);
        }
        else {
            this.authService.saveHeroe(this.heroe);
        }
        this.clear();
        this.router.navigate(['/home']);
    }
    selecHeroe(id) {
        this.show = true;
        this.idSelected = id; //cogemos su id
        let receivedHeroe; //declaramos un objeto vacio que será el que reciba la información de el alumno que seleccionamos
        this.authService.getHeroe(id) //hacemos uso de la funcion getHeroe de nuestro servicio
            .subscribe(heroe => {
            receivedHeroe = this.heroe; //el objeto vacio recibe la variable
            this.heroe = receivedHeroe; //Y se lo asignamos al objeto heroe los valores que se han retornado del servicio
        });
    }
    removeSelectedHeroe() {
        //Llamamos a la funcion removeHeroe de nuestro servicio, le pasamos el idselected y se borra ese alumno
        this.authService.removeHeroe(this.idSelected);
        this.clear();
    }
    clear() {
        //inicializamos los valores de las variables una vez hecha una acción
        this.show = false;
        this.idSelected = null;
        this.heroe.id = null;
        this.heroe.nombre = null;
        this.heroe.email = null;
        this.heroe.telefono = null;
        this.heroe.matricula = null;
    }
};
DatoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
DatoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dato',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dato.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dato/dato.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dato.page.scss */ "./src/app/dato/dato.page.scss")).default]
    })
], DatoPage);



/***/ })

}]);
//# sourceMappingURL=dato-dato-module-es2015.js.map