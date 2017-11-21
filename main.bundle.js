webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ENTIRE DOCUMENT */\n/* Styling for the whole page */\nbody {\n    /* Layout declarations */\n    margin: 0 auto;\n    /* Typography declarations */\n    font-size: 62.5%;\n    font-family: \"Muli\", \"Helvetica Neue\", \"Arial\", \"sans-serif\";\n    font-weight: 300;\n    color: #EDEDED;\n    -webkit-font-smoothing: antialiased;\n  }\n  \n  /* HEADER */\n  .masthead {\n    /* Layout declarations */\n    background: url(\"https://images5.alphacoders.com/302/302485.jpg\") no-repeat fixed center;\n    background-size: cover;\n    padding: 1em 2em;\n    border-top: 8px solid #EDEDED;\n    text-align: center;\n    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),\n                 0px 8px 13px rgba(0,0,0,0.1),\n                 0px 18px 23px rgba(0,0,0,0.1);\n    /* Typography declarations */\n    font-size: 4em;\n  }\n  \n  .masthead-intro {\n    font-size:12rem;\n    font-family: 'Lato', sans-serif;\n    margin: 2em 0 0 0;\n  }\n  \n  .masthead-heading {\n    /* Typography declarations */\n    font-size: 10rem;\n    font-family: 'Lato', sans-serif;\n    /* Layout declarations */\n    padding: 0;\n    margin: 0 0 1em;\n  }\n  \n  /* BODY */\n  /* General styling for the three sections of the body */\n  section {\n    /* Layout declarations */\n    \n    max-width: 50em;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 3em;\n  }\n  \n  /* Gradient that runs through the body */\n  .gradient {\n    padding: 10em;\n    /* can be treated like a fallback */\n    background-color: white;;\n    /* will be \"on top\", if browser supports it */\n    background: url(\"https://images5.alphacoders.com/366/366373.jpg\") no-repeat fixed center;\n    /*background-image: linear-gradient(aqua,teal);*/\n  }\n  \n  /* The h2 tags are the main categories */\n  h2 {\n    /* Typography declarations */\n    font-size: 4em;\n  }\n  \n  /* The h3 tags are the additional questions */\n  h3 {\n    /* Typography declarations */\n    \n    font-size: 40px;\n  }\n  \n  /* The p tags that are descendants of the section tags are the answers */\n  section p {\n    /* Typography declarations */\n    font-size: 2em;\n    line-height: 1.3em;\n  }\n  \n  /* This class is included in the last p tag of each section to create more space */\n  .space-maker {\n    /* Layout declarations */\n    margin-bottom: 3em;\n    \n  }\n  \n  /* FOOTER */\n\n  .footer {\n    /*background: rgb(41, 59, 63);*/\n    background: url(\"https://images.alphacoders.com/777/777158.jpg\") no-repeat fixed center;\n    padding: 50px 0;\n}\n  .content-footer {\n    /* Layout declarations */\n/*background: rgb(41, 59, 63);*/\nbackground: url(\"https://images.alphacoders.com/777/777158.jpg\") no-repeat fixed center;\n    padding: 10em;\n    border-bottom: 8px solid #EDEDED;\n  }\n  \n  .content-footer > p {\n    /* Layout declarations */\n    line-height: 1.3em;\n    text-align: center;\n    /* Typography declarations */\n    font-size: 2em;\n  }\n  \n  .social {\n    /* Layout declarations */\n    text-align: center;\n    padding: 0;\n  }\n  \n  .social > li {\n    /* Layout declarations */\n    display: inline-block;\n    line-height: 1.3em;\n    margin-right: 2em;\n    /* Typography declarations */\n    font-size: 10px;\n  }\n  \n  a {\n    /* Typography declarations */\n    color: #EDEDED;\n    text-decoration: none;\n  }\n  \n  a:hover {\n    /* Layout declarations */\n    color:pink;\n    transition: all 0.2s ease;\n  }\n\n\n  \n  \n  .social li:last-child {\n    /* Layout declarations */\n    margin-right: 0;\n  }\n  \n  /* Responsive design */\n  @media only screen and (max-width: 500px) {\n    /* HEADER */\n    .masthead {\n      padding: 1em;\n    }\n    \n    .masthead-intro {\n      font-size: 1.5rem;\n    }\n    \n    .masthead-heading {\n      font-size: 4rem;\n    }\n    \n    /* BODY */\n    .gradient {\n      padding: 5em;\n    }\n    \n    h2 {\n      font-size: 2rem;\n    }\n    \n    h3 {\n      font-size: 1.5rem;\n    }\n    \n    section p {\n      font-size: 1rem;\n    }\n    \n    /* FOOTER */\n    .content-footer {\n      padding: 4em;\n    }\n    \n    .social > li {\n    /* Layout declarations */\n    display: block;\n    margin-right: 0;\n    }\n    \n    a {\n      line-height: 3em;\n    }\n    \n    .content-footer p a {\n      line-height: 0;\n    } \n  }\n  \n    /* FOOTER */\n  @media only screen and (max-width: 344px) {\n    .content-footer p a {\n      line-height: 3em;\n    }\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head>\n<!-- Header (SECTION 1/3) -->\n<header class=\"masthead container-fluid text-center img-responsive margin\">\n  <p class=\"masthead-intro\">B&P</p>\n  <h1 class=\"masthead-heading\">Enterprise</h1>\n  <h4><font color=\"white\">\"Love to design,implement and deliver\" \n    <br>\n    ~~Team B&P\n  </font>\n</h4>\n  \n \n</header>\n\n<!-- the div is used to apply the gradient -->\n<div class=\"gradient container-fluid text-center\">\n<!-- Body (SECTION 2/3) -->\n<section>\n  <h3><font color=\"teal\">About B&P</font></h3>\n    <p>B&P Enterprise is a website building company focused on improving the quality and functionality \n      of websites .\n    </p>\n    <p class=\"space-maker\"></p>\n</section>\n\n<section>\n  <h3><font color=\"teal\">Offering</font></h3>\n    <p class=\"space-maker\">\n        Our offering is a combination of design,innovation  and technology. \n        \n    </p>\n</section>\n\n<section>\n  <h3> More About us </h3>\n  <i class=\"fa fa-lightbulb-o\" \n  style=\"font-size:60px;text-shadow:2px 2px 4px #000000;\"\n  aria-hidden=\"true\"></i>\n  <h3>Our Philosophy</h3>\n  <p class=\"space-maker\">\n      Web design is full of problems looking for solutions. Unfortunately too many designers (and clients) \n      forget or ignore the problem they are trying to solve, \n      and instead focus on just the aesthetics instead of looking at the bigger picture of what the site \n      is trying to achieve. \n      This should cause us to start asking ourselves what our role as “designer” is exactly.\n  </p>\n  <i class=\"fa fa-star\" \n  style=\"font-size:60px;text-shadow:2px 2px 4px #000000;\"\n  aria-hidden=\"true\"></i>\n  <h3>Our Purpose</h3>\n  <p class=\"space-maker\">\n      Websites are built to sell things, promote people or businesses, provide information, \n      connect people, and store content. Each type of site has specific challenges and problems that \n      must be overcome to make the site function in the best way possible. \n      The challenges you need to solve are often big picture things, like the best way of connecting \n      with the target audience of a site. They could be things to do with process, \n      like the most efficient way of collecting credit card details from users.\n       They could be information visualization, \n      such as the best way to present a complex table of data, or they could be simple things like how \n      big to make a button or a heading in relation to the rest of the page. \n      Regardless of the size of the problem, Our job is to solve these problems,\n       not just to make the problems look prettier.\n  </p>\n  <i class=\"fa fa-users\" \n  style=\"font-size:60px;text-shadow:2px 2px 4px #000000;\"\n  aria-hidden=\"true\"></i>\n  <h3>Who we are?</h3>\n  <p>We are a team of highly passionate and talented individuals with vast experience in IT .</p>\n</section>\n</div>\n\n\n\n<!-- Footer (SECTION 3/3) -->\n<footer class=\"content-footer container-fluid text-center\">\n  \n    <p><font color=\"white\"  >Contact Us </font></p>\n  <ul class=\"social\">\n      \n    <li><a href=\"https://www.facebook.com/\" target=_Blank>Facebook</a></li>\n    <li><a href=\"https://github.com/\" target=_Blank>Github</a></li>\n    <li><a href=\"https://twitter.com/\"  target=_Blank>Twitter</a></li>\n  </ul>\n<br>\n  <i class=\"fa fa-copyright\" aria-hidden=\"true\" style=\"color:white\">\n    <font color=\"white\">\n    2017 bandpenterprise.All Rights Reserved\n  </font>\n  </i>\n  \n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map