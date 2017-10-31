webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n  height: 100%;\n}\n\nbody {\n  background: #bcdee7 url(\"https://scontent-lga3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/1897932_1085650611445377_3861281195292365503_n.jpg?oh=db2590634ddcc0035fc76cc7e80ebc58&oe=57247502\") no-repeat center center fixed;\n  background-size: 100% auto;\n  position: fixed;\n  padding: 0px;\n  margin: 0px;\n  width: 500px;\n  height: 500px;\n  font: normal 14px/1.618em \"Hind\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\nbody:before {\n  content: \"\";\n  height: 0px;\n  padding: 0px;\n  border: 110em solid #313440;\n  position: absolute;\n  left: 50%;\n  top: 100%;\n  z-index: 2;\n  display: block;\n  border-radius: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  -webkit-animation: puff_portrait 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, borderRadius 0.2s 2.3s linear forwards;\n  animation: puff_portrait 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, borderRadius 0.2s 2.3s linear forwards;\n}\n\nh1,\nh2 {\n  font-weight: 400;\n  margin: 0px 0px 5px 0px;\n}\n\nh1 {\n  font-size: 24px;\n}\n\nh2 {\n  font-size: 16px;\n}\n\np {\n  margin: 0px;\n}\n\n.profile-card {\n  background: #FFB300;\n  width: 500px;\n  height: 56px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 2;\n  overflow: hidden;\n  opacity: 0;\n  margin-top: 70px;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);\n  -webkit-animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia_landscape 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards;\n  animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia_landscape 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards;\n}\n\n.profile-card header {\n  width: 179px;\n  height: 280px;\n  padding: 40px 20px 30px 20px;\n  display: inline-block;\n  float: left;\n  border-right: 2px dashed #EEEEEE;\n  background: #FFFFFF;\n  color: #000000;\n  margin-top: 50px;\n  opacity: 0;\n  text-align: center;\n  -webkit-animation: moveIn 1s 3.1s ease forwards;\n  animation: moveIn 1s 3.1s ease forwards;\n}\n\n.profile-card header h1 {\n  color: #FF5722;\n}\n\n.profile-card header a {\n  display: inline-block;\n  text-align: center;\n  position: relative;\n  margin: 25px 30px;\n}\n\n.profile-card header a:after {\n  position: absolute;\n  content: \"\";\n  bottom: 3px;\n  right: 3px;\n  width: 20px;\n  height: 20px;\n  border: 4px solid #FFFFFF;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  background: linear-gradient(#2196F3 0%, #2196F3 50%, #FFC107 50%, #FFC107 100%);\n  border-radius: 50%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-animation: scaleIn 0.3s 3.5s ease forwards;\n  animation: scaleIn 0.3s 3.5s ease forwards;\n}\n\n.profile-card header a > img {\n  width: 120px;\n  max-width: 100%;\n  border-radius: 50%;\n  transition: box-shadow 0.3s ease;\n  box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.06);\n}\n\n.profile-card header a:hover > img {\n  box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.1);\n}\n\n.profile-card .profile-bio {\n  width: 500px;\n  height: 180px;\n  display: inline-block;\n  float: right;\n  padding: 50px 20px 30px 20px;\n  background: #FFFFFF;\n  color: #333333;\n  margin-top: 50px;\n  text-align: center;\n  opacity: 0;\n  -webkit-animation: moveIn 1s 3.1s ease forwards;\n  animation: moveIn 1s 3.1s ease forwards;\n}\n\n.profile-social-links {\n  width: 218px;\n  display: inline-block;\n  float: right;\n  margin: 0px;\n  padding: 15px 20px;\n  background: #FFFFFF;\n  margin-top: 50px;\n  text-align: center;\n  opacity: 0;\n  box-sizing: border-box;\n  -webkit-animation: moveIn 1s 3.1s ease forwards;\n  animation: moveIn 1s 3.1s ease forwards;\n}\n\n.profile-social-links li {\n  list-style: none;\n  margin: -5px 0px 0px 0px;\n  padding: 0px;\n  float: left;\n  width: 33.3%;\n  text-align: center;\n}\n\n.profile-social-links li a {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  padding: 6px;\n  position: relative;\n  overflow: hidden!important;\n  border-radius: 50%;\n}\n\n.profile-social-links li a img {\n  position: relative;\n  z-index: 1;\n}\n\n.profile-social-links li a:before {\n  display: block;\n  content: \"\";\n  background: rgba(0, 0, 0, 0.3);\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 36px;\n  height: 36px;\n  opacity: 1;\n  transition: opacity 1s ease-out, -webkit-transform 0.4s ease;\n  transition: transform 0.4s ease, opacity 1s ease-out;\n  transition: transform 0.4s ease, opacity 1s ease-out, -webkit-transform 0.4s ease;\n  -webkit-transform: scale3d(0, 0, 1);\n  transform: scale3d(0, 0, 1);\n  border-radius: 50%;\n}\n\n.profile-social-links li a:hover:before {\n  -webkit-animation: ripple 1s ease forwards;\n  animation: ripple 1s ease forwards;\n}\n\n.profile-social-links li a img,\n.profile-social-links li a svg {\n  width: 24px;\n}\n\n@media screen and (min-aspect-ratio: 4/3) {\n  body {\n    background-size: 100% auto;\n  }\n  body:before {\n    width: 0px;\n  }\n  @-webkit-keyframes puff {\n    0% {\n      top: 100%;\n      width: 0px;\n      padding-bottom: 0px;\n    }\n    100% {\n      top: 50%;\n      width: 100%;\n      padding-bottom: 100%;\n    }\n  }\n  @keyframes puff {\n    0% {\n      top: 100%;\n      width: 0px;\n      padding-bottom: 0px;\n    }\n    100% {\n      top: 50%;\n      width: 100%;\n      padding-bottom: 100%;\n    }\n  }\n}\n\n@media screen and (min-height: 480px) {\n  .profile-card {\n    -webkit-animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia_portrait 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards;\n    animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia_portrait 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards;\n  }\n  .profile-card header {\n    width: auto;\n    height: auto;\n    padding: 30px 20px;\n    display: block;\n    float: none;\n    border-right: none;\n  }\n  .profile-card .profile-bio {\n    width: auto;\n    height: auto;\n    padding: 15px 20px 30px 20px;\n    display: block;\n    float: none;\n  }\n  .profile-social-links {\n    width: 100%;\n    display: block;\n    float: none;\n  }\n}\n\n@media screen and (min-aspect-ratio: 4/3) {\n  body {\n    background-size: 100% auto;\n  }\n  body:before {\n    width: 0px;\n    -webkit-animation: puff_landscape 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, borderRadius 0.2s 2.3s linear forwards;\n    animation: puff_landscape 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, borderRadius 0.2s 2.3s linear forwards;\n  }\n}\n\n@-webkit-keyframes init {\n  0% {\n    width: 0px;\n    height: 0px;\n  }\n  100% {\n    width: 56px;\n    height: 56px;\n    margin-top: 0px;\n    opacity: 1;\n  }\n}\n\n@keyframes init {\n  0% {\n    width: 0px;\n    height: 0px;\n  }\n  100% {\n    width: 56px;\n    height: 56px;\n    margin-top: 0px;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes puff_portrait {\n  0% {\n    top: 100%;\n    height: 0px;\n    padding: 0px;\n  }\n  100% {\n    top: 50%;\n    height: 100%;\n    padding: 0px 100%;\n  }\n}\n\n@keyframes puff_portrait {\n  0% {\n    top: 100%;\n    height: 0px;\n    padding: 0px;\n  }\n  100% {\n    top: 50%;\n    height: 100%;\n    padding: 0px 100%;\n  }\n}\n\n@-webkit-keyframes puff_landscape {\n  0% {\n    top: 100%;\n    width: 0px;\n    padding-bottom: 0px;\n  }\n  100% {\n    top: 50%;\n    width: 100%;\n    padding-bottom: 100%;\n  }\n}\n\n@keyframes puff_landscape {\n  0% {\n    top: 100%;\n    width: 0px;\n    padding-bottom: 0px;\n  }\n  100% {\n    top: 50%;\n    width: 100%;\n    padding-bottom: 100%;\n  }\n}\n\n@-webkit-keyframes borderRadius {\n  0% {\n    -webkit-border-radius: 50%;\n  }\n  100% {\n    -webkit-border-radius: 0px;\n  }\n}\n\n@keyframes borderRadius {\n  0% {\n    -webkit-border-radius: 50%;\n  }\n  100% {\n    border-radius: 0px;\n  }\n}\n\n@-webkit-keyframes moveDown {\n  0% {\n    top: 50%;\n  }\n  50% {\n    top: 40%;\n  }\n  100% {\n    top: 100%;\n  }\n}\n\n@keyframes moveDown {\n  0% {\n    top: 50%;\n  }\n  50% {\n    top: 40%;\n  }\n  100% {\n    top: 100%;\n  }\n}\n\n@-webkit-keyframes moveUp {\n  0% {\n    background: #FFB300;\n    top: 100%;\n  }\n  50% {\n    top: 40%;\n  }\n  100% {\n    top: 50%;\n    background: #E0E0E0;\n  }\n}\n\n@keyframes moveUp {\n  0% {\n    background: #FFB300;\n    top: 100%;\n  }\n  50% {\n    top: 40%;\n  }\n  100% {\n    top: 50%;\n    background: #E0E0E0;\n  }\n}\n\n@-webkit-keyframes materia_landscape {\n  0% {\n    background: #E0E0E0;\n  }\n  50% {\n    -webkit-border-radius: 4px;\n  }\n  100% {\n    width: 440px;\n    height: 280px;\n    background: #FFFFFF;\n    -webkit-border-radius: 4px;\n  }\n}\n\n@keyframes materia_landscape {\n  0% {\n    background: #E0E0E0;\n  }\n  50% {\n    border-radius: 4px;\n  }\n  100% {\n    width: 440px;\n    height: 280px;\n    background: #FFFFFF;\n    border-radius: 4px;\n  }\n}\n\n@-webkit-keyframes materia_portrait {\n  0% {\n    background: #E0E0E0;\n  }\n  50% {\n    -webkit-border-radius: 4px;\n  }\n  100% {\n    width: 280px;\n    height: 440px;\n    background: #FFFFFF;\n    -webkit-border-radius: 4px;\n  }\n}\n\n@keyframes materia_portrait {\n  0% {\n    background: #E0E0E0;\n  }\n  50% {\n    border-radius: 4px;\n  }\n  100% {\n    width: 280px;\n    height: 440px;\n    background: #FFFFFF;\n    border-radius: 4px;\n  }\n}\n\n@-webkit-keyframes moveIn {\n  0% {\n    margin-top: 50px;\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    margin-top: -20px;\n  }\n}\n\n@keyframes moveIn {\n  0% {\n    margin-top: 50px;\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    margin-top: -20px;\n  }\n}\n\n@-webkit-keyframes scaleIn {\n  0% {\n    -webkit-transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes scaleIn {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@-webkit-keyframes ripple {\n  0% {\n    -webkit-transform: scale3d(0, 0, 0);\n            transform: scale3d(0, 0, 0);\n  }\n  50%,\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes ripple {\n  0% {\n    -webkit-transform: scale3d(0, 0, 0);\n            transform: scale3d(0, 0, 0);\n  }\n  50%,\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n  100% {\n    opacity: 0;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"profile-card\">\n  <head><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\"></head>\n    <header>\n  \n      <!-- here’s the avatar -->\n      <a href=\"http://juntianhuang.com/resumech\">\n        <img src=\"https://sharemy.media/ben/codepen/portfolio/ben.png\" />\n      </a>\n  \n      <!-- the username -->\n      <h1>Dr.Sam</h1>\n  \n      <!-- and role or location -->\n      <h2>Nephrologist</h2>\n  \n    </header>\n  \n    <!-- bit of a bio; who are you? -->\n    <div class=\"profile-bio\">\n  \n      <p>A nephrologist is a medical doctor who specializes in kidney care and treating diseases of the kidneys.</p>\n  \n    </div>\n  \n    <!-- some social links to show off -->\n    <ul class=\"profile-social-links\">\n  \n      <!-- twitter - el clásico  -->\n      <li>\n        <a href=\"https://www.facebook.com\" target=\"_blank\">\n          <svg viewBox=\"0 0 24 24\">\n            <path fill=\"#3b5998\" d=\"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\" />\n          </svg>\n        </a>\n      </li>\n  \n      <!-- envato – use this one to link to your marketplace profile -->\n      <li>\n        <a href=\"http://linkedin.com\" target=\"_blank\">\n          <svg viewBox=\"0 0 24 24\">\n            <path fill=\"#82B541\" d=\"M18.334,1.909c-0.604-0.327-2.313-0.125-4.375,0.503c-3.621,2.464-6.664,6.11-6.89,11.971c-0.05,0.148-0.402-0.025-0.478-0.053c-0.981-1.859-1.358-3.846-0.554-6.688C6.189,7.39,5.686,7.089,5.611,7.165C5.435,7.34,4.681,8.145,4.178,9c-2.464,4.249-0.855,9.733,3.445,12.122c4.299,2.389,9.733,0.855,12.12-3.445C22.533,12.695,19.969,2.814,18.334,1.909z\"\n            />\n          </svg>\n        </a>\n      </li>\n  \n      <!-- codepen - your codepen profile-->\n      <li>\n        <a href=\"https://instagram.com\" target=\"_blank\">\n          <svg viewBox=\"0 0 24 24\">\n            <path fill=\"#000000\" d=\"M19.45,13.29L17.5,12L19.45,10.71M12.77,18.78V15.17L16.13,12.93L18.83,14.74M12,13.83L9.26,12L12,10.17L14.74,12M11.23,18.78L5.17,14.74L7.87,12.93L11.23,15.17M4.55,10.71L6.5,12L4.55,13.29M11.23,5.22V8.83L7.87,11.07L5.17,9.26M12.77,5.22L18.83,9.26L16.13,11.07L12.77,8.83M21,9.16C21,9.15 21,9.13 21,9.12C21,9.1 21,9.08 20.97,9.06C20.97,9.05 20.97,9.03 20.96,9C20.96,9 20.95,9 20.94,8.96C20.94,8.95 20.93,8.94 20.92,8.93C20.92,8.91 20.91,8.89 20.9,8.88C20.89,8.86 20.88,8.85 20.88,8.84C20.87,8.82 20.85,8.81 20.84,8.79C20.83,8.78 20.83,8.77 20.82,8.76A0.04,0.04 0 0,0 20.78,8.72C20.77,8.71 20.76,8.7 20.75,8.69C20.73,8.67 20.72,8.66 20.7,8.65C20.69,8.64 20.68,8.63 20.67,8.62C20.66,8.62 20.66,8.62 20.66,8.61L12.43,3.13C12.17,2.96 11.83,2.96 11.57,3.13L3.34,8.61C3.34,8.62 3.34,8.62 3.33,8.62C3.32,8.63 3.31,8.64 3.3,8.65C3.28,8.66 3.27,8.67 3.25,8.69C3.24,8.7 3.23,8.71 3.22,8.72C3.21,8.73 3.2,8.74 3.18,8.76C3.17,8.77 3.17,8.78 3.16,8.79C3.15,8.81 3.13,8.82 3.12,8.84C3.12,8.85 3.11,8.86 3.1,8.88C3.09,8.89 3.08,8.91 3.08,8.93C3.07,8.94 3.06,8.95 3.06,8.96C3.05,9 3.05,9 3.04,9C3.03,9.03 3.03,9.05 3.03,9.06C3,9.08 3,9.1 3,9.12C3,9.13 3,9.15 3,9.16C3,9.19 3,9.22 3,9.26V14.74C3,14.78 3,14.81 3,14.84C3,14.85 3,14.87 3,14.88C3,14.9 3,14.92 3.03,14.94C3.03,14.95 3.03,14.97 3.04,15C3.05,15 3.05,15 3.06,15.04C3.06,15.05 3.07,15.06 3.08,15.07C3.08,15.09 3.09,15.11 3.1,15.12C3.11,15.14 3.12,15.15 3.12,15.16C3.13,15.18 3.15,15.19 3.16,15.21C3.17,15.22 3.17,15.23 3.18,15.24C3.2,15.25 3.21,15.27 3.22,15.28C3.23,15.29 3.24,15.3 3.25,15.31C3.27,15.33 3.28,15.34 3.3,15.35C3.31,15.36 3.32,15.37 3.33,15.38C3.34,15.38 3.34,15.38 3.34,15.39L11.57,20.87C11.7,20.96 11.85,21 12,21C12.15,21 12.3,20.96 12.43,20.87L20.66,15.39C20.66,15.38 20.66,15.38 20.67,15.38C20.68,15.37 20.69,15.36 20.7,15.35C20.72,15.34 20.73,15.33 20.75,15.31C20.76,15.3 20.77,15.29 20.78,15.28C20.79,15.27 20.8,15.25 20.82,15.24C20.83,15.23 20.83,15.22 20.84,15.21C20.85,15.19 20.87,15.18 20.88,15.16C20.88,15.15 20.89,15.14 20.9,15.12C20.91,15.11 20.92,15.09 20.92,15.07C20.93,15.06 20.94,15.05 20.94,15.04C20.95,15 20.96,15 20.96,15C20.97,14.97 20.97,14.95 20.97,14.94C21,14.92 21,14.9 21,14.88C21,14.87 21,14.85 21,14.84C21,14.81 21,14.78 21,14.74V9.26C21,9.22 21,9.19 21,9.16Z\"\n            />\n          </svg>\n        </a>\n      </li>\n  \n      <!-- add or remove social profiles as you see fit -->\n  \n    </ul>\n  \n  </aside>\n  <!-- that’s all folks! -->"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-raised-button {\n   \n    font-family: inherit;\n    padding: 0px 0;\n    font-size: 14px;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #e6e6e6;\n    position: relative;\n    display: inline-block;\n    outline: none;\n    margin: 15px 25px;\n    \n  }\n\n  .button-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n\n  .example-container {\n    width:500px;\n    height: 600px;\n    border: 1px solid rgba(0, 0, 0, 0.5);\n  }\n  \n  @media (max-width: 600px) {\n    .button-row{\n      display:none;\n      \n    }\n  }   \n    \n\n  .mat-toolbar.mat-primary {\n    width:100%;\n    background: #252525;\n    color: rgba(255,255,255,.87);\n}\n\n.mat-fab.mat-primary, .mat-mini-fab.mat-primary, .mat-raised-button.mat-primary {\n  background-color:#252525;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n<!-- Header Design -->\n\n<mat-toolbar color='primary'>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon>menu</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item routerLink=\"/home\" routerLinkActive=\"active\">\n                  <span>Home</span>\n                </button>\n                <button mat-menu-item routerLink=\"/about\" routerLinkActive=\"active\">\n                \n                  <span>About</span>\n                </button>\n                <button mat-menu-item routerLink=\"/services\" routerLinkActive=\"active\">\n                  \n                  <span>Services</span>\n                </button>\n                <button mat-menu-item routerLink=\"/testimonial\" routerLinkActive=\"active\">\n                      \n                        <span>Testimonials</span>\n                      </button>\n                <button mat-menu-item routerLink=\"/contact\" routerLinkActive=\"active\" >\n                            \n                            <span>Contact</span>\n                </button>\n              </mat-menu>\n        <div class=\"button-row\" style=\"width:100%;\">\n       <button mat-raised-button  routerLink=\"/home\" routerLinkActive=\"active\"  style=\"width:20%\" color=\"primary\">Home</button>\n       <button mat-raised-button  routerLink=\"/about\" routerLinkActive=\"active\" style=\"width:20%\"color=\"primary\">About</button>\n        <button mat-raised-button  routerLink=\"/services\" routerLinkActive=\"active\"style=\"width:20%\"color=\"primary\">Services</button>\n        <button mat-raised-button  routerLink=\"/testimonial\" routerLinkActive=\"active\"style=\"width:20%\"color=\"primary\">Testimonials</button>\n        <button mat-raised-button  routerLink=\"/contact\" routerLinkActive=\"active\" style=\"width:20%\"color=\"primary\">Contact</button>\n        </div>\n    </mat-toolbar>\n\n    \n  \n\n  \n   \n\n \n  <router-outlet></router-outlet>\n <!-- Footer Design -->\n<footer style=\"position: fixed; bottom: 0px;left: 0px; width: 100%; height: 60px\">\n    <mat-toolbar color=\"primary\" class=\"bottom\">\n        <i class=\"material-icons\">copyright</i>\n         <span style=\"font-size: 10px\" >copyrights</span>\n         \n    </mat-toolbar>\n    </footer>\n    "

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
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* unused harmony export MaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__testimonial_testimonial_component__ = __webpack_require__("../../../../../src/app/testimonial/testimonial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//Routing
var appRoutes = [
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
    },
    {
        path: 'testimonial',
        component: __WEBPACK_IMPORTED_MODULE_9__testimonial_testimonial_component__["a" /* TestimonialComponent */],
    },
    {
        path: 'services',
        component: __WEBPACK_IMPORTED_MODULE_10__services_services_component__["a" /* ServicesComponent */],
    },
];
//NgModule for material 
var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatMenuModule */]
        ]
    })
], MaterialModule);

//material done
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_9__testimonial_testimonial_component__["a" /* TestimonialComponent */],
            __WEBPACK_IMPORTED_MODULE_10__services_services_component__["a" /* ServicesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            MaterialModule,
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyAj5WVCzS-nhQJvJMJWBt-spgHIwRbPRW4'
            }),
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n  margin: 0;\n  background: #fff;\n  color: #999;\n}\n\n.section-lead {\n  max-width: 600px;\n  margin: 1rem auto 1.5rem;\n}\n\np {\n  font-size: 0.9rem;\n  margin: 1rem 0;\n  line-height: 1.5;\n}\n\nsection {\n  max-width: 1000px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 30px;\n}\n\nh3 {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 600;\n  color: #333;\n  font-size: 1.825rem;\n  margin: 0px;\n}\n.example-full-width {\n  width: 240px;\n\n}\n/*Google Maps */\nagm-map {\n  height: 300px;\n  width:380px;\n   \n}\n.service3\n{\n  height: 300px;\n  width:380px;\n}\n\n\n\n.service a {\n  color: #5b7abb;\n  display: block;\n}\n\n.service h4 {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 600;\n  color: #56ceba;\n  font-size: 1.3rem;\n  margin: 1rem 0 0.6rem;\n}\n\n.services-grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.service {\n  background: #ffffff;\n  margin: 20px;\n  \n  border-radius: 4px;\n  text-align: center;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n      flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  border: 2px solid #e7e7e7;\n  transition: all 0.3s ease;\n}\n\n.service:hover {\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);\n}\n\n\n\n\n.service1 h4,\n.service1 .cta {\n  color: #42b7ca;\n}\n\n.service1:hover {\n  border: 2px solid #42b7ca;\n}\n\n\n.service2 h4,\n.service2 .cta {\n  color: #425fca;\n}\n\n.service2:hover {\n  border: 2px solid #425fca;\n}\n\n\n.service3 h4,\n.service3 .cta {\n  color: #9c42ca;\n}\n\n.service3:hover {\n  border: 2px solid #9c42ca;\n}\n\n.service .cta span {\n  font-size: 0.6rem;\n}\n\n.service > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n}\n\n.service .cta {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\n@media all and (max-width:900px) {\n  .services-grid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n        flex-direction: column;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<head><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\"></head>\n\n<section>\n    <h3>Office hours</h3>\n    <p class=\"section-lead\">Monday - Friday: 0.00 am-0.00pm<br>Saturday : 0.00 am-0.00pm<br>Sunday: 0.00 am-0.00pm</p>\n    \n    <div class=\"services-grid\">\n      <div class=\"service service1\">\n       \n          <form class=\"example-form\">\n              <mat-form-field class=\"example-full-width\" >\n                <input matInput floatPlaceholder=\"auto\" placeholder=\"Name\" >\n              </mat-form-field>\n              \n              \n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n                <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n              </mat-form-field><br>\n              <mat-form-field class=\"example-full-width\" >\n                <input matInput floatPlaceholder=\"auto\" placeholder=\"Subject\" >\n              </mat-form-field><br>\n              \n              <mat-form-field class=\"example-full-width\">\n                <textarea matInput placeholder=\"Message\"></textarea>\n              </mat-form-field>\n            <button mat-raised-button color=\"primary\" class=\"example-full-width\" >Send Message</button>\n              </form> \n             \n        \n      </div>\n     \n      \n      <div class=\"service service2\">\n      \n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n              <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map>\n             \n      </div>\n      <div class=\"service service3\">\n          <h4>Contact Us</h4>\n        <span>\n         <p> <i class=\"material-icons\">location_on</i>\n          1234 NW 12th St. Nageroil B.C. 12345</p>\n         <p> <i class=\"material-icons\">phone</i>(123)456-7890</p>\n         <p><i class=\"material-icons\">email</i>hello@nephrology.com</p>\n            </span>  \n        </div>\n    </div>\n  </section>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ContactComponent = (function () {
    function ContactComponent() {
        this.title = 'Location';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]);
    }
    ContactComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    })
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*, *:after, *:before {\n  box-sizing:border-box;\n  -webkit-box-sizing: border-box;\n  -webkit-transition: all .6s ease;\n}\n\n@media (max-width: 600px) {\n  .warmOscar::before {\n    content:'';\n    position: absolute;\n    top:30%;\n    left:5%;\n    right:5%;\n    width: 400px;\n    height:50%;\n    background-color: rgba(0,0,0,.5);\n  }\n\n}\n\n\n .image {\n  position: fixed; \n  top: 08%; \n  left: 0; \n\n  /* Preserve aspet ratio */\n  min-width: 100%;\n  min-height: 100%;\n}\n\n .warmOscar {  \n    text-align:center;\n    color:#252525;\n  }\n   .warmOscar h2 {\n    margin-top: 0;\n    font-weight: 100;\n    font-size: 2.25em;\n    -webkit-transform: translateY(150%);\n    line-height: 1em;\n  }\n  .warmOscar h2 span {\n    display:inline-block;\n    font-weight: 900;\n    border-top: 2px solid white;\n    border-bottom: 2px solid white;\n  }\n  .warmOscar p {\n    opacity: 0;\n    max-width: 80%;\n    margin:0 auto;\n    -webkit-transform: scale(.5);\n  }\n  @media (min-width: 600px) {\n  .warmOscar::before {\n    content:'';\n    position: absolute;\n    top:30%;\n    left:15%;\n    right:15%;\n    width: 1000px;\n    height:50%;\n    background-color: rgba(0,0,0,.5);\n  }\n}\n  .warmOscar::after {\n    content:'';\n    position: absolute;\n    top:5%;\n    left:0;\n    width: 100%;\n    height:100%;\n    border: 1px solid white;\n    opacity: 0;\n    -webkit-transform: scale(.5);\n  }\n  \n  .warmOscar:hover::before {\n    opacity: 0;\n  }\n  \n  .warmOscar:hover::after {\n    opacity: 1;\n    -webkit-transform: scale(.8);\n    \n  }\n  \n  .warmOscar:hover h2 {\n    -webkit-transform: none;\n  }\n  \n  .warmOscar:hover p {\n    opacity: 1;\n    -webkit-transform: none;\n  }\n  .warmOscar .absoluteCenter {\n    \n    width: 100%;\n    padding: 3rem;\n    \n    position: absolute;\n    left: 0px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    text-transform:unset;\n    font-family: Arial, sans-serif;\n    letter-spacing: -.025em;\n    line-height: 1.5em;\n    z-index: 1;\n  }\n \n\n\n.h2 {\n  font: 400 100px/1.5 'Pacifico', Helvetica, sans-serif;\n  color: #2b2b2b;\n  text-shadow: 3px 3px 0px rgba(0,0,0,0.1), 7px 7px 0px rgba(0,0,0,0.05);\n  \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<head><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\"></head>\n\n<img src=\"https://static.pexels.com/photos/433267/pexels-photo-433267.jpeg\" class=\"image\" >\n<div class=\"warmOscar\">\n  <div class=\"absoluteCenter\">\n      \n      <link href='http://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>\n    <h2 class=\"h2\">Dr.Sam's Nephrology.<span>Care</span></h2>\n   \n    <p >Protect your kidneys ,Save your heart.<br>\n \n      <i class=\"material-icons\">location_on</i>1234 NW 12th St. Nageroil B.C. 12345<br>\n      <i class=\"material-icons\">call</i>+91 912 3456789<br>\n     <i class=\"material-icons\">email</i>hello@nephrology.com\n    </p>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans);", ""]);

// module
exports.push([module.i, "*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n  margin: 0;\n  background: #fff;\n  color: #999;\n}\n\na {\n  text-decoration: none;\n  margin: 1rem 0;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 0.8125rem;\n  letter-spacing: 1px;\n}\n\np {\n  font-size: 0.9rem;\n  margin: 1rem 0;\n  line-height: 1.5;\n}\n\nsection {\n  max-width: 1000px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 30px;\n}\n\nh3 {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 600;\n  color: #333;\n  font-size: 1.825rem;\n  margin: 1.3rem 0;\n}\n\n.section-lead {\n  max-width: 600px;\n  margin: 1rem auto 1.5rem;\n}\n\n.service a {\n  color: #5b7abb;\n  display: block;\n}\n\n.service h4 {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 600;\n  color: #56ceba;\n  font-size: 1.3rem;\n  margin: 1rem 0 0.6rem;\n}\n\n.services-grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.service {\n  background: #fff;\n  margin: 20px;\n  padding: 20px;\n  border-radius: 4px;\n  text-align: center;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n      flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  border: 2px solid #e7e7e7;\n  transition: all 0.3s ease;\n}\n\n.service:hover {\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);\n}\n\n.service i {\n  font-size: 3.45rem;\n  margin: 1rem 0;\n}\n\n.service1 i,\n.service1 h4,\n.service1 .cta {\n  color: #42b7ca;\n}\n\n.service1:hover {\n  border: 2px solid #42b7ca;\n}\n\n.service2 i,\n.service2 h4,\n.service2 .cta {\n  color: #425fca;\n}\n\n.service2:hover {\n  border: 2px solid #425fca;\n}\n\n.service3 i,\n.service3 h4,\n.service3 .cta {\n  color: #9c42ca;\n}\n\n.service3:hover {\n  border: 2px solid #9c42ca;\n}\n\n.service .cta span {\n  font-size: 0.6rem;\n}\n\n.service > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n}\n\n.service .cta {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\n@media all and (max-width:900px) {\n  .services-grid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n        flex-direction: column;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "\n<head><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\"></head>\n<section>\n  <h3>Our Services</h3>\n  <p class=\"section-lead\">We perform a variety of services.</p>\n  <div class=\"services-grid\">\n    <div class=\"service service1\">\n      <i class=\"ti-bar-chart\"></i>\n      <h4>Kidney transplantation</h4>\n      <p>Kidney transplantation or renal transplantation is the organ transplant of a kidney into a patient with end-stage renal disease. Kidney transplantation is typically classified as deceased-donor (formerly known as cadaveric) or living-donor transplantation depending on the source of the donor organ. </p>\n      <a href=\"#\" class=\"cta\">Read More <span class=\"ti-angle-right\"></span></a>\n    </div>\n\n    <div class=\"service service2\">\n      <i class=\"ti-light-bulb\"></i>\n      <h4>Treatment of acute kidney injury</h4>\n      <p>Measures to correct underlying causes of acute kidney injury (AKI) should begin at the earliest indication of renal dysfunction. Serum creatinine does not rise to abnormal levels until a large proportion of the renal mass is damaged, because the relationship between the glomerular filtration rate .</p>\n      <a href=\"#\" class=\"cta\">Read More <span class=\"ti-angle-right\"></span></a>\n    </div>\n\n    <div class=\"service service3\">\n      <i class=\"ti-money\"></i>\n      <h4>Electrolyte and acid/base disorders</h4>\n      <p>Surgical patients are at high risk for derangements of body water distribution, electrolyte homeostasis, and acid-base physiology. These disturbances may be secondary to trauma, preexisting medical conditions which alter normal physiology, or the nature of the surgery.</p>\n      <a href=\"#\" class=\"cta\">Read more <span class=\"ti-angle-right\"></span></a>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-services',
        template: __webpack_require__("../../../../../src/app/services/services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/services/services.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ServicesComponent);

//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/testimonial/testimonial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:400,500,800);", ""]);

// module
exports.push([module.i, "figure.snip1232 {\n  font-family: 'Raleway', Arial, sans-serif;\n  position: relative;\n  float: left;\n  overflow: hidden;\n  margin: 10px 1%;\n  min-width: 220px;\n  max-width: 310px;\n  width: 100%;\n  color: #333;\n  text-align: left;\n  box-shadow: none !important;\n}\nfigure.snip1232 * {\n  box-sizing: border-box;\n}\nfigure.snip1232 img {\n  max-width: 100%;\n  height: 80px;\n  width: 80px;\n  border-radius: 50%;\n  margin-right: 5px;\n  display: block;\n  z-index: 1;\n  position: absolute;\n  right: 50%;\n}\nfigure.snip1232 blockquote {\n  margin: 0;\n  display: block;\n  border-radius: 8px;\n  position: relative;\n  background-color: #fafafa;\n  padding: 65px 50px 35px 50px;\n  font-size: 0.8em;\n  font-weight: 500;\n  margin: -40px 0 0;\n  line-height: 1.6em;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n}\nfigure.snip1232 blockquote:before,\nfigure.snip1232 blockquote:after {\n  font-family: 'FontAwesome';\n  content: \"\\201C\";\n  position: absolute;\n  font-size: 50px;\n  opacity: 0.3;\n  font-style: normal;\n}\nfigure.snip1232 blockquote:before {\n  top: 55px;\n  left: 20px;\n}\nfigure.snip1232 blockquote:after {\n  content: \"\\201D\";\n  right: 20px;\n  bottom: 5px;\n}\nfigure.snip1232 .author {\n  margin: 0;\n  height: 80px;\n  display: block;\n  text-align: left;\n  padding: 0 35px;\n  position: relative;\n  z-index: 1;\n}\nfigure.snip1232 .author h5,\nfigure.snip1232 .author span {\n  left: 50%;\n  position: absolute;\n  opacity: 0.8;\n  padding: 3px 5px;\n}\nfigure.snip1232 .author h5 {\n  text-transform: uppercase;\n  bottom: 50%;\n  margin: 0;\n  font-weight: 800;\n  color: #ffffff;\n}\nfigure.snip1232 .author span {\n  font-size: 0.8em;\n  color: #000000;\n  top: 50%;\n  font-weight: 500;\n}\n/* Demo purposes only */\nbody {\n  background-color: #212121;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/testimonial/testimonial.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<head><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\"></head>\n<figure class=\"snip1232\">\n  <div class=\"author\">\n    <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample7.jpg\" alt=\"sq-sample7\"/>\n    <h5>Pelican Steve</h5><span>Matt</span>\n  </div>\n  <blockquote>I adore Dr.Sam such a great physician. </blockquote>\n</figure>\n<figure class=\"snip1232 hover\">\n  <div class=\"author\">\n    <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample10.jpg\" alt=\"sq-sample10\"/>\n    <h5>Max Conversion</h5><span>LittleSnippets</span>\n  </div>\n  <blockquote>Thank you Dr.Sam. You saved my life.</blockquote>\n</figure>\n<figure class=\"snip1232\">\n  <div class=\"author\">\n    <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample12.jpg\" alt=\"sq-sample12\"/>\n    <h5>Eleanor Faint</h5><span>Carrie</span>\n  </div>\n  <blockquote>Dr.Sam is Such a cool & Talented person. Much awesome.</blockquote>\n</figure>"

/***/ }),

/***/ "../../../../../src/app/testimonial/testimonial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialComponent = (function () {
    function TestimonialComponent() {
    }
    TestimonialComponent.prototype.ngOnInit = function () {
    };
    return TestimonialComponent;
}());
TestimonialComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-testimonial',
        template: __webpack_require__("../../../../../src/app/testimonial/testimonial.component.html"),
        styles: [__webpack_require__("../../../../../src/app/testimonial/testimonial.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TestimonialComponent);

//# sourceMappingURL=testimonial.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map