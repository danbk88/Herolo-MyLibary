webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n    height: 100vh;\r\n    background-image: url('library.cfeb49d89ad13d171737.jpg');\r\n    background-size: cover;\r\n    background-repeat:no-repeat;\r\n    background-color: rgba(255,255,255,0.6);\r\n    background-blend-mode: lighten;\r\n}\r\n.flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n  }\r\n#img-glasses{\r\n    -ms-flex-item-align: end;\r\n        align-self: flex-end;\r\n    width: 20%;\r\n    height: 100%;\r\n    background: transparent;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <head>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n  </head>\n  <body>\n      <app-books-libary></app-books-libary>\n  </body>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'My Libary :)';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_books_libary_books_libary_component__ = __webpack_require__("./src/app/components/books-libary/books-libary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_libary_service__ = __webpack_require__("./src/app/services/libary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_book_validation_service__ = __webpack_require__("./src/app/services/book-validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pop_ups_add_book_pop_up_add_book_pop_up_component__ = __webpack_require__("./src/app/pop-ups/add-book-pop-up/add-book-pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pop_ups_edit_book_pop_up_edit_book_pop_up_component__ = __webpack_require__("./src/app/pop-ups/edit-book-pop-up/edit-book-pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pop_ups_delete_book_pop_up_delete_book_pop_up_component__ = __webpack_require__("./src/app/pop-ups/delete-book-pop-up/delete-book-pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_books_libary_books_libary_component__["a" /* BooksLibaryComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pop_ups_add_book_pop_up_add_book_pop_up_component__["a" /* AddBookPopUpComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pop_ups_edit_book_pop_up_edit_book_pop_up_component__["a" /* EditBookPopUpComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pop_ups_delete_book_pop_up_delete_book_pop_up_component__["a" /* DeleteBookPopUpComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_libary_service__["a" /* LibaryService */], __WEBPACK_IMPORTED_MODULE_11__services_book_validation_service__["a" /* BookValidationService */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_12__pop_ups_add_book_pop_up_add_book_pop_up_component__["a" /* AddBookPopUpComponent */], __WEBPACK_IMPORTED_MODULE_13__pop_ups_edit_book_pop_up_edit_book_pop_up_component__["a" /* EditBookPopUpComponent */], __WEBPACK_IMPORTED_MODULE_14__pop_ups_delete_book_pop_up_delete_book_pop_up_component__["a" /* DeleteBookPopUpComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/books-libary/books-libary.component.css":
/***/ (function(module, exports) {

module.exports = ".appTitle{\r\n    height: 10vh;\r\n    text-align: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    border-bottom: solid;\r\n    border-bottom-color: rgb(116, 112, 112);\r\n    border-bottom-width: 3px;   \r\n}\r\n\r\nh5:hover{\r\n    background-color: #eee;\r\n}\r\n\r\n.flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.table{\r\n      border-style: solid;\r\n      border-color: black;\r\n      border-collapse: collapse;\r\n}\r\n\r\ntr{\r\n    background:rgb(225, 240, 220);\r\n}\r\n\r\ntr:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\ntr.thead{\r\n    border-style: solid;\r\n    border-color: black;\r\n    background: rgb(152, 164, 172);\r\n}\r\n\r\n.pointer {\r\n    cursor: pointer;\r\n}\r\n\r\n.tableRow{\r\n    font-size: calc(6px + 1vw);\r\n}\r\n\r\nbutton{\r\n    font-size: calc(5px + 1vw);\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    padding: 3px;\r\n}"

/***/ }),

/***/ "./src/app/components/books-libary/books-libary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"appTitle\">\n  <h1 style=\"font-size:calc(12px + 1.7vw); padding-top: 10px;\">\n    Welcome to my Libary :)\n  </h1>\n</div>\n<div class=\"container\">\n  <span style=\"font-size:calc(12px + 1.5vw);\"><b>Choose a book or Add one: </b></span>\n  <button class=\"btn btn-success\" (click)=\"AddBook_Clicked()\">ADD BOOK</button>\n</div><br>\n<div class=\"flex-container table-responsive\" style=\"text-align: center\">\n  <!-- <div id=\"table-scroll\"> todo -->\n    <div>\n    <table class=\"table table-bordered\" > \n      <thead >\n        <tr class=\"thead tableRow\">\n          <th>#</th>\n          <th>Book Title</th>\n          <th>Book ID</th>\n          <th>Author</th>\n          <th>Publish Date</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let book of booksList; let i = index\" class=\"pointer tableRow\">\n          <th>{{ i + 1 }}</th>\n          <td>\"{{book.BookTitle | titlecase}}\"</td>\n          <td>{{ book.BookID }}</td>\n          <td>{{ book.AuthorName}}</td>\n          <td>{{ book.PublishedDate }}</td>\n          <td>\n            <div class=\"flex-container\">\n              <button class=\"btn btn-success\" (click)=\"EditBook_Clicked(i)\">EDIT</button>\n              &nbsp;\n              <button class=\"btn btn-success\" (click)=\"DeleteBook_Clicked(i)\">DELETE</button>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <br>\n</div>"

/***/ }),

/***/ "./src/app/components/books-libary/books-libary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksLibaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_libary_service__ = __webpack_require__("./src/app/services/libary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pop_ups_add_book_pop_up_add_book_pop_up_component__ = __webpack_require__("./src/app/pop-ups/add-book-pop-up/add-book-pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pop_ups_edit_book_pop_up_edit_book_pop_up_component__ = __webpack_require__("./src/app/pop-ups/edit-book-pop-up/edit-book-pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pop_ups_delete_book_pop_up_delete_book_pop_up_component__ = __webpack_require__("./src/app/pop-ups/delete-book-pop-up/delete-book-pop-up.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BooksLibaryComponent = /** @class */ (function () {
    function BooksLibaryComponent(libaryService, dialog) {
        this.libaryService = libaryService;
        this.dialog = dialog;
        this.isPopupOpened = true;
    }
    BooksLibaryComponent.prototype.ngOnInit = function () {
        this.currItemIndex = 0;
        this.setItemChosen(0);
        this.importBooks();
    };
    BooksLibaryComponent.prototype.importBooks = function () {
        var _this = this;
        console.log("Importing Persons from server...");
        this.libaryService.importBooks().subscribe(function (importedPersons) { return _this.setBooksList(importedPersons); });
    };
    BooksLibaryComponent.prototype.setItemChosen = function (index) {
        this.currItemIndex = index;
    };
    BooksLibaryComponent.prototype.getBooksList = function () {
        this.booksList = this.libaryService.GetAllBooks();
    };
    BooksLibaryComponent.prototype.setBooksList = function (books) {
        console.log(books);
        this.libaryService.setLibary(books);
        this.getBooksList();
    };
    BooksLibaryComponent.prototype.EditBook_Clicked = function (index) {
        var _this = this;
        this.isPopupOpened = true;
        this.currItemIndex = index;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__pop_ups_edit_book_pop_up_edit_book_pop_up_component__["a" /* EditBookPopUpComponent */], {
            data: this.libaryService.GetBook(this.currItemIndex)
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.isPopupOpened = false;
        });
    };
    BooksLibaryComponent.prototype.DeleteBook_Clicked = function (index) {
        var _this = this;
        this.isPopupOpened = true;
        this.currItemIndex = index;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__pop_ups_delete_book_pop_up_delete_book_pop_up_component__["a" /* DeleteBookPopUpComponent */], {
            data: this.currItemIndex
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.isPopupOpened = false;
        });
    };
    BooksLibaryComponent.prototype.AddBook_Clicked = function () {
        var _this = this;
        this.isPopupOpened = true;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__pop_ups_add_book_pop_up_add_book_pop_up_component__["a" /* AddBookPopUpComponent */], {
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.isPopupOpened = false;
        });
    };
    BooksLibaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-books-libary',
            template: __webpack_require__("./src/app/components/books-libary/books-libary.component.html"),
            styles: [__webpack_require__("./src/app/components/books-libary/books-libary.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_libary_service__["a" /* LibaryService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialog */]])
    ], BooksLibaryComponent);
    return BooksLibaryComponent;
}());



/***/ }),

/***/ "./src/app/pop-ups/add-book-pop-up/add-book-pop-up.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pop-ups/add-book-pop-up/add-book-pop-up.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card-header>\n  <mat-toolbar>\n    <mat-card-title>Book Information</mat-card-title>\n    <span></span>\n  </mat-toolbar>\n</mat-card-header>\n<mat-card-content>\n  <div class=\"container\">\n    <form [formGroup]= \"_bookForm\" (submit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <label>Book ID</label>\n            <input type=\"text\" formControlName=\"BookID\" class=\"form-control\">\n          </div>\n          <div class=\"col-md-6\">\n            <label>Author name</label>\n            <input type=\"text\" formControlName=\"AuthorName\" class=\"form-control\">\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <label>Date published</label>\n            <input type=\"date\" formControlName=\"PublishedDate\" class=\"form-control\">\n          </div>\n          <div class=\"col-md-6\">\n            <label>Book title</label>\n            <input type=\"text\" formControlName=\"BookTitle\" class=\"form-control\">\n          </div>\n        </div>\n        <br>\n        <div class=\"row flex-container\">\n          <div class=\"col-md-6\">\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"onNoClick()\">Cancel</button>\n          <button id=\"submitbtn\" type=\"submit\" class=\"btn btn-success\">Save </button>\n          </div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n  <div class=\"row bg-danger\">\n    {{errormsg}}\n  </div>\n</mat-card-content>"

/***/ }),

/***/ "./src/app/pop-ups/add-book-pop-up/add-book-pop-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBookPopUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_libary_service__ = __webpack_require__("./src/app/services/libary.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ADD_ACTION = "ADD";
var AddBookPopUpComponent = /** @class */ (function () {
    function AddBookPopUpComponent(_formBuilder, dialogRef, _LibaryService, data) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this._LibaryService = _LibaryService;
        this.data = data;
    }
    AddBookPopUpComponent.prototype.ngOnInit = function () {
        this._bookForm = this._formBuilder.group({
            BookID: [this.data.BookID],
            AuthorName: [this.data.AuthorName],
            PublishedDate: [this.data.PublishedDate],
            BookTitle: [this.data.BookTitle]
        });
        // Init Error msg:
        this.errormsg = "";
    };
    AddBookPopUpComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddBookPopUpComponent.prototype.onSubmit = function () {
        if (this.validateData(this._bookForm.value) > 0) {
            // Data is valid:
            this._LibaryService.AddBook(this._bookForm.value);
            this.dialogRef.close();
        }
    };
    AddBookPopUpComponent.prototype.validateData = function (book) {
        this.errormsg = this._LibaryService.ValidateBookData(book, ADD_ACTION);
        if (this.errormsg !== "") {
            //Data is not valid
            return -1;
        }
        else {
            return 1;
        }
    };
    AddBookPopUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-add-book-pop-up',
            template: __webpack_require__("./src/app/pop-ups/add-book-pop-up/add-book-pop-up.component.html"),
            styles: [__webpack_require__("./src/app/pop-ups/add-book-pop-up/add-book-pop-up.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3__services_libary_service__["a" /* LibaryService */], Object])
    ], AddBookPopUpComponent);
    return AddBookPopUpComponent;
}());



/***/ }),

/***/ "./src/app/pop-ups/delete-book-pop-up/delete-book-pop-up.component.css":
/***/ (function(module, exports) {

module.exports = ".flex-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 40px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.flex-container > button{\r\n    margin: 8px;\r\n}"

/***/ }),

/***/ "./src/app/pop-ups/delete-book-pop-up/delete-book-pop-up.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"flex-container\">\n      <form (submit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <div class=\"row\">\n              <h6>The chosen book will be deleted</h6><br>\n          </div>\n          <div class=\"row flex-container\">\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"onNoClick()\">Cancel</button>\n            <button id=\"submitbtn\" type=\"submit\" class=\"btn btn-success\">OK</button>\n          </div>\n        </div>\n      </form>\n    </div>"

/***/ }),

/***/ "./src/app/pop-ups/delete-book-pop-up/delete-book-pop-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteBookPopUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_libary_service__ = __webpack_require__("./src/app/services/libary.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DeleteBookPopUpComponent = /** @class */ (function () {
    function DeleteBookPopUpComponent(dialogRef, _LibaryService, data) {
        this.dialogRef = dialogRef;
        this._LibaryService = _LibaryService;
        this.data = data;
    }
    DeleteBookPopUpComponent.prototype.ngOnInit = function () {
    };
    DeleteBookPopUpComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteBookPopUpComponent.prototype.onSubmit = function () {
        this._LibaryService.DeleteBook(this.data);
        this.dialogRef.close();
    };
    DeleteBookPopUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-delete-book-pop-up',
            template: __webpack_require__("./src/app/pop-ups/delete-book-pop-up/delete-book-pop-up.component.html"),
            styles: [__webpack_require__("./src/app/pop-ups/delete-book-pop-up/delete-book-pop-up.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__services_libary_service__["a" /* LibaryService */], Object])
    ], DeleteBookPopUpComponent);
    return DeleteBookPopUpComponent;
}());



/***/ }),

/***/ "./src/app/pop-ups/edit-book-pop-up/edit-book-pop-up.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pop-ups/edit-book-pop-up/edit-book-pop-up.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card-header>\n    <mat-toolbar>\n      <mat-card-title>Book Information</mat-card-title>\n      <span></span>\n    </mat-toolbar>\n  </mat-card-header>\n  <mat-card-content>\n    <div class=\"container\">\n      <form [formGroup]= \"_bookForm\" (submit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Author name</label>\n              <input type=\"text\" formControlName=\"AuthorName\" class=\"form-control\">\n            </div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <label>Date published</label>\n              <input type=\"date\" formControlName=\"PublishedDate\" class=\"form-control\">\n            </div>\n            <div class=\"col-md-6\">\n              <label>Book title</label>\n              <input type=\"text\" formControlName=\"BookTitle\" class=\"form-control\">\n            </div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"onNoClick()\">Cancel</button>\n            <button id=\"submitbtn\" type=\"submit\" class=\"btn btn-success\">Edit </button>\n            </div>\n          </div>\n        </div>\n  \n      </form>\n    </div>\n    <div class=\"row bg-danger\">\n        {{errormsg}}\n      </div>\n  </mat-card-content>"

/***/ }),

/***/ "./src/app/pop-ups/edit-book-pop-up/edit-book-pop-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBookPopUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_libary_service__ = __webpack_require__("./src/app/services/libary.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EDIT_ACTION = "EDIT";
var EditBookPopUpComponent = /** @class */ (function () {
    function EditBookPopUpComponent(_formBuilder, dialogRef, _LibaryService, data) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this._LibaryService = _LibaryService;
        this.data = data;
    }
    EditBookPopUpComponent.prototype.ngOnInit = function () {
        this._bookForm = this._formBuilder.group({
            BookID: [this.data.BookID],
            AuthorName: [this.data.AuthorName],
            PublishedDate: [this.data.PublishedDate],
            BookTitle: [this.data.BookTitle]
        });
    };
    EditBookPopUpComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditBookPopUpComponent.prototype.onSubmit = function () {
        if (this.validateData(this._bookForm.value) > 0) {
            // Data is valid:
            this._LibaryService.EditBook(this._bookForm.value);
            this.dialogRef.close();
        }
    };
    EditBookPopUpComponent.prototype.validateData = function (book) {
        this.errormsg = this._LibaryService.ValidateBookData(book, EDIT_ACTION);
        if (this.errormsg !== "") {
            //Data is not valid
            return -1;
        }
        else {
            return 1;
        }
    };
    EditBookPopUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-edit-book-pop-up',
            template: __webpack_require__("./src/app/pop-ups/edit-book-pop-up/edit-book-pop-up.component.html"),
            styles: [__webpack_require__("./src/app/pop-ups/edit-book-pop-up/edit-book-pop-up.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3__services_libary_service__["a" /* LibaryService */], Object])
    ], EditBookPopUpComponent);
    return EditBookPopUpComponent;
}());



/***/ }),

/***/ "./src/app/services/book-validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IDError = " ERROR - Book ID must be a number, try again";
var IDMissingError = " ERROR - Book ID is missing, try again";
var AuthorNameError = " ERROR - Author name is empty, try again";
var BookTitleError = " ERROR - Book title is empty, try again";
var BookTitleExistError = " ERROR - Book title is already exist in libary, try again";
var PublishedDateError = " ERROR - Published date is not valid, try again";
var BookValidationService = /** @class */ (function () {
    function BookValidationService() {
    }
    BookValidationService.prototype.ValidateBookData = function (book, libary, action) {
        this.retrunMsg = "";
        var _action = 0;
        if (action === "ADD") {
            _action = 1;
        }
        else {
            // Action is Edit, check if book title changed:
            var oldBookTitle = libary.find(function (bookFromLibary) { return bookFromLibary.BookID === book.BookID; }).BookTitle;
            if (oldBookTitle !== book.BookTitle) {
                _action = 1;
            }
        }
        if (book.BookID === null) {
            // Book ID is missing:
            this.retrunMsg = IDMissingError;
        }
        else if (book.AuthorName === null || book.AuthorName === "") {
            // Author name is missing:
            this.retrunMsg = AuthorNameError;
        }
        else if (this.isBookExistInLibary(book, libary, _action) < 0) {
            // Book title is already in libary:
            this.retrunMsg = BookTitleExistError;
        }
        else if (book.BookTitle === null || book.BookTitle === "") {
            // Book title is missing:
            this.retrunMsg = BookTitleError;
        }
        else if (book.PublishedDate === null) {
            // Published date is not valid::
            this.retrunMsg = PublishedDateError;
        }
        return this.retrunMsg;
    };
    BookValidationService.prototype.isBookExistInLibary = function (book, libary, action) {
        for (var index = 0; index < libary.length; index++) {
            if (libary[index].BookTitle === book.BookTitle) {
                action++;
                if (action > 1) {
                    return -1;
                }
            }
        }
        return 1;
    };
    BookValidationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BookValidationService);
    return BookValidationService;
}());



/***/ }),

/***/ "./src/app/services/libary.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibaryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_validation_service__ = __webpack_require__("./src/app/services/book-validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LibaryService = /** @class */ (function () {
    function LibaryService(bookValidationService, http) {
        this.bookValidationService = bookValidationService;
        this.http = http;
        this.booksRemoteUrl = "https://raw.githubusercontent.com/danbk88/books/master/books.json";
    }
    LibaryService.prototype.importBooks = function () {
        return this.http.get(this.booksRemoteUrl);
    };
    LibaryService.prototype.removeAllNonAlphaFromBookTitle = function (book) {
        book.BookTitle = book.BookTitle.replace(/[^a-zA-Z ]/g, "");
    };
    LibaryService.prototype.toTitleCase = function (myStr) {
        var i, j, str, lowers, uppers;
        str = myStr.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
        // Certain minor words should be left lowercase unless 
        // they are the first or last words in the string
        lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
            'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
        for (i = 0, j = lowers.length; i < j; i++)
            str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'), function (txt) {
                return txt.toLowerCase();
            });
        // Certain words such as initialisms or acronyms should be left uppercase
        uppers = ['Id', 'Tv'];
        for (i = 0, j = uppers.length; i < j; i++)
            str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'), uppers[i].toUpperCase());
        return str;
    };
    LibaryService.prototype.GetAllBooks = function () {
        return this.booksList;
    };
    LibaryService.prototype.GetBook = function (bookIndex) {
        return this.booksList[bookIndex];
    };
    LibaryService.prototype.AddBook = function (book) {
        this.removeAllNonAlphaFromBookTitle(book);
        this.booksList.push(book);
    };
    LibaryService.prototype.DeleteBook = function (index) {
        this.booksList.splice(index, 1);
    };
    LibaryService.prototype.setLibary = function (books) {
        console.log(books);
        for (var index = 0; index < books.length; index++) {
            this.removeAllNonAlphaFromBookTitle(books[index]);
        }
        // Set titlecase to all book titles:
        for (var index = 0; index < books.length; index++) {
            books[index].BookTitle = this.toTitleCase(books[index].BookTitle);
        }
        this.booksList = books;
    };
    LibaryService.prototype.EditBook = function (newbook) {
        this.updateBook(this.booksList.find(function (bookFromLibary) { return bookFromLibary.BookID === newbook.BookID; }), newbook);
    };
    LibaryService.prototype.updateBook = function (libaryBook, NewBook) {
        libaryBook.AuthorName = NewBook.AuthorName;
        libaryBook.BookTitle = NewBook.BookTitle;
        this.removeAllNonAlphaFromBookTitle(libaryBook);
        libaryBook.PublishedDate = NewBook.PublishedDate;
    };
    LibaryService.prototype.ValidateBookData = function (book, action) {
        if (book.BookTitle !== null && book.BookTitle !== "") {
            this.removeAllNonAlphaFromBookTitle(book);
            book.BookTitle = this.toTitleCase(book.BookTitle);
        }
        return this.bookValidationService.ValidateBookData(book, this.booksList, action);
    };
    LibaryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__book_validation_service__["a" /* BookValidationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LibaryService);
    return LibaryService;
}());



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");



// if (environment.production) {
//   enableProdMode();
// }
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map