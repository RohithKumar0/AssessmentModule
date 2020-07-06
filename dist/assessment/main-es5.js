function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/User.ts":
  /*!*************************!*\
    !*** ./src/app/User.ts ***!
    \*************************/

  /*! exports provided: User */

  /***/
  function srcAppUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(name, password, email, admin, location, number) {
      _classCallCheck(this, User);

      this.name = name;
      this.password = password;
      this.email = email;
      this.admin = admin;
      this.location = location;
      this.number = number;
    };
    /***/

  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./candidates/candidates.component */
    "./src/app/admin/candidates/candidates.component.ts");
    /* harmony import */


    var _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./assignments/assignments.component */
    "./src/app/admin/assignments/assignments.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create/create.component */
    "./src/app/admin/create/create.component.ts");
    /* harmony import */


    var _login_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../login-service.service */
    "./src/app/login-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdminComponent_ng_container_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(login) {
        _classCallCheck(this, AdminComponent);

        this.login = login;
        this.dummyComponent = _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_1__["CandidatesComponent"];
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.login.logout();
        }
      }, {
        key: "assignComp",
        value: function assignComp(choice) {
          if (choice === "Candidates") {
            this.dummyComponent = _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_1__["CandidatesComponent"];
          } else if (choice === "Assessments") {
            this.dummyComponent = _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_2__["AssignmentsComponent"];
          } else if (choice === "create") {
            this.dummyComponent = _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"];
          } else if (choice === "Profile") {
            this.dummyComponent = _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"];
          }
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service_service__WEBPACK_IMPORTED_MODULE_5__["LoginServiceService"]));
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 20,
      vars: 1,
      consts: [[1, "menuItems"], ["data-item", "Assessments", 3, "click"], ["data-item", "Candidates", 3, "click"], ["data-item", "Create", 3, "click"], ["data-item", "Profile", 3, "click"], ["data-item", "Logout", 3, "click"], [4, "ngComponentOutlet"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_4_listener() {
            return ctx.assignComp("Assessments");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Assessments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_7_listener() {
            return ctx.assignComp("Candidates");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Candidates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_10_listener() {
            return ctx.assignComp("create");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_13_listener() {
            return ctx.assignComp("Profile");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_16_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AdminComponent_ng_container_19_Template, 1, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx.dummyComponent);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgComponentOutlet"]],
      styles: ["@import url(\"https://cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css\");\r\n*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  min-height: 10vh;\r\n  font-family: Hack, monospace;\r\n}\r\ndiv[_ngcontent-%COMP%] {\r\n  color: #727272;\r\n  text-align: center;\r\n}\r\np[_ngcontent-%COMP%]::before {\r\n  content: attr(data-item);\r\n  transition: all 1s ease-in-out;\r\n  color: #8254ff;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 0;\r\n  overflow: hidden;\r\n}\r\np[_ngcontent-%COMP%]:hover::before {\r\n  width: 100%;\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n  margin: 2px;\r\n  width: 100%;\r\n  background: #f9f9f9;\r\n  padding: 1px;\r\n}\r\nnav[_ngcontent-%COMP%]   .menuItems[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  display: flex;\r\n}\r\nnav[_ngcontent-%COMP%]   .menuItems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n}\r\nnav[_ngcontent-%COMP%]   .menuItems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #8f8f8f;\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n  transition: all 0.5s ease-in-out;\r\n  position: relative;\r\n  text-transform: uppercase;\r\n}\r\nnav[_ngcontent-%COMP%]   .menuItems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\r\n  content: attr(data-item);\r\n  transition: 0.5s;\r\n  color: #8254ff;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 0;\r\n  overflow: hidden;\r\n}\r\nnav[_ngcontent-%COMP%]   .menuItems[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\r\n  width: 100%;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  font-size: 12px;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 0px;\r\n  line-height: 0px;\r\n  font-size: 14px;\r\n  background-color: #f1f1f1;\r\n  color: #000000;\r\n  text-align: center;\r\n}\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: inherit;\r\n  border-bottom: 1px solid;\r\n}\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  border-bottom: 1px transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRUFBMEU7QUFDMUU7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vaGFjay1mb250QDMvYnVpbGQvd2ViL2hhY2suY3NzXCIpO1xyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwdmg7XHJcbiAgZm9udC1mYW1pbHk6IEhhY2ssIG1vbm9zcGFjZTtcclxufVxyXG5cclxuZGl2IHtcclxuICBjb2xvcjogIzcyNzI3MjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnA6OmJlZm9yZSB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLWl0ZW0pO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcclxuICBjb2xvcjogIzgyNTRmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxucDpob3Zlcjo6YmVmb3JlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubmF2IHtcclxuICBtYXJnaW46IDJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gIHBhZGRpbmc6IDFweDtcclxufVxyXG5uYXYgLm1lbnVJdGVtcyB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbm5hdiAubWVudUl0ZW1zIGxpIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxubmF2IC5tZW51SXRlbXMgbGkgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjOGY4ZjhmO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbm5hdiAubWVudUl0ZW1zIGxpIGE6OmJlZm9yZSB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLWl0ZW0pO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgY29sb3I6ICM4MjU0ZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbm5hdiAubWVudUl0ZW1zIGxpIGE6aG92ZXI6OmJlZm9yZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuZm9vdGVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbn1cclxuZm9vdGVyIGE6aG92ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCB0cmFuc3BhcmVudDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.css']
        }]
      }], function () {
        return [{
          type: _login_service_service__WEBPACK_IMPORTED_MODULE_5__["LoginServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/assignments/assignments.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/assignments/assignments.component.ts ***!
    \************************************************************/

  /*! exports provided: AssignmentsComponent */

  /***/
  function srcAppAdminAssignmentsAssignmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentsComponent", function () {
      return AssignmentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/assignment.service */
    "./src/app/assignment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");

    var AssignmentsComponent = /*#__PURE__*/function () {
      function AssignmentsComponent(assignService, router) {
        _classCallCheck(this, AssignmentsComponent);

        this.assignService = assignService;
        this.router = router;
        this.columnDefs = [{
          headerName: 'ID',
          field: 'id'
        }, {
          headerName: 'Name',
          field: 'name'
        }, {
          headerName: 'Author',
          field: 'author_name'
        }, {
          headerName: 'Duration',
          field: 'duration'
        }];
      }

      _createClass(AssignmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ongridReady",
        value: function ongridReady(params) {
          // this.assignService.getAll().subscribe((data)=>{console.log(data);params.api.setRowData(data)});
          console.log("kadkjsj");
          this.assignService.getAll().subscribe(function (data) {
            params.api.setRowData(data);
            console.log(data[0]);
          });
        }
      }, {
        key: "getAssignProfile",
        value: function getAssignProfile(params) {
          var id = params.data.id;
          this.router.navigate(['/assignmentProfile/', id]);
        }
      }]);

      return AssignmentsComponent;
    }();

    AssignmentsComponent.ɵfac = function AssignmentsComponent_Factory(t) {
      return new (t || AssignmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AssignmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AssignmentsComponent,
      selectors: [["app-assignments"]],
      decls: 2,
      vars: 3,
      consts: [[2, "padding", "20px"], [1, "ag-theme-balham", 2, "width", "auto", "height", "500px", 3, "columnDefs", "enableSorting", "enableFilter", "rowClicked", "gridReady"]],
      template: function AssignmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ag-grid-angular", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClicked", function AssignmentsComponent_Template_ag_grid_angular_rowClicked_1_listener($event) {
            return ctx.getAssignProfile($event);
          })("gridReady", function AssignmentsComponent_Template_ag_grid_angular_gridReady_1_listener($event) {
            return ctx.ongridReady($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefs)("enableSorting", true)("enableFilter", true);
        }
      },
      directives: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridAngular"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Fzc2lnbm1lbnRzL2Fzc2lnbm1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-assignments',
          templateUrl: './assignments.component.html',
          styleUrls: ['./assignments.component.css']
        }]
      }], function () {
        return [{
          type: src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__["AssignmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/candidates/candidates.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/candidates/candidates.component.ts ***!
    \**********************************************************/

  /*! exports provided: CandidatesComponent */

  /***/
  function srcAppAdminCandidatesCandidatesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandidatesComponent", function () {
      return CandidatesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");

    function CandidatesComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ag-grid-angular", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClicked", function CandidatesComponent_div_5_Template_ag_grid_angular_rowClicked_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.getUserProfile($event);
        })("gridReady", function CandidatesComponent_div_5_Template_ag_grid_angular_gridReady_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onUsers($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableSorting", true)("enableFilter", true)("columnDefs", ctx_r0.columnDefs);
      }
    }

    function CandidatesComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ag-grid-angular", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClicked", function CandidatesComponent_div_6_Template_ag_grid_angular_rowClicked_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.getUserProfile($event);
        })("gridReady", function CandidatesComponent_div_6_Template_ag_grid_angular_gridReady_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onAdmin($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableSorting", true)("enableFilter", true)("columnDefs", ctx_r1.columnDefs);
      }
    }

    var CandidatesComponent = /*#__PURE__*/function () {
      function CandidatesComponent(userService, router) {
        _classCallCheck(this, CandidatesComponent);

        this.userService = userService;
        this.router = router;
        this.admin = false;
        this.columnDefs = [{
          headerName: 'User ID',
          field: 'id'
        }, {
          headerName: 'Name',
          field: 'name'
        }, {
          headerName: 'Email',
          field: 'email'
        }, {
          headerName: 'Location',
          field: 'location'
        }, {
          headerName: 'Number',
          field: 'number'
        }];
      }

      _createClass(CandidatesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "switchUser",
        value: function switchUser() {
          this.admin = false;
        }
      }, {
        key: "switchAdmin",
        value: function switchAdmin() {
          this.admin = true;
        }
      }, {
        key: "onUsers",
        value: function onUsers(params) {
          // this.admin=false;
          // this.gridApi = params.api;
          // this.gridColumnApi= params.columnApi;
          this.userService.getAll().subscribe(function (data) {
            params.api.setRowData(data);
          });
        }
      }, {
        key: "onAdmin",
        value: function onAdmin(params) {
          // this.admin=true
          // this.gridApi = params.api;
          // this.gridColumnApi= params.columnApi;
          this.userService.getAllAdmin().subscribe(function (data) {
            params.api.setRowData(data);
          });
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile(event) {
          var _this = this;

          console.log("thisis clicked" + event.data.id);
          var id = event.data.id;
          this.userService.getById(id).subscribe(function (data) {
            console.log(data);

            _this.router.navigate(['/profile/', id]);
          });
        }
      }]);

      return CandidatesComponent;
    }();

    CandidatesComponent.ɵfac = function CandidatesComponent_Factory(t) {
      return new (t || CandidatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    CandidatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CandidatesComponent,
      selectors: [["app-candidates"]],
      decls: 7,
      vars: 2,
      consts: [[1, "toggleButtons"], [1, "button", 3, "click"], ["style", "padding: 20px; ", 4, "ngIf"], [2, "padding", "20px"], [1, "ag-theme-balham", 2, "width", "auto", "height", "500px", 3, "enableSorting", "enableFilter", "columnDefs", "rowClicked", "gridReady"]],
      template: function CandidatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidatesComponent_Template_button_click_1_listener() {
            return ctx.switchUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "USERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidatesComponent_Template_button_click_3_listener() {
            return ctx.switchAdmin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ADMINS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CandidatesComponent_div_5_Template, 2, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CandidatesComponent_div_6_Template, 2, 3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.admin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.admin);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]],
      styles: [".toggleButtons[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n    padding: 10px;\r\n    margin-left: 10px;\r\n    \r\n    word-spacing: 20px;\r\n}\r\n\r\n.toggleButtons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    padding: 10px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY2FuZGlkYXRlcy9jYW5kaWRhdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7O0FBRWpCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY2FuZGlkYXRlcy9jYW5kaWRhdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9nZ2xlQnV0dG9ucyB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IGJsdWUgc29saWQ7ICovXHJcbiAgICB3b3JkLXNwYWNpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi50b2dnbGVCdXR0b25zIC5idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-candidates',
          templateUrl: './candidates.component.html',
          styleUrls: ['./candidates.component.css']
        }]
      }], function () {
        return [{
          type: src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/create/create.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/admin/create/create.component.ts ***!
    \**************************************************/

  /*! exports provided: CreateComponent */

  /***/
  function srcAppAdminCreateCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
      return CreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_assignment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/assignment */
    "./src/app/assignment.ts");
    /* harmony import */


    var src_app_assignment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/assignment.service */
    "./src/app/assignment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var CreateComponent = /*#__PURE__*/function () {
      function CreateComponent(assign, activatedRouter, auth) {
        _classCallCheck(this, CreateComponent);

        this.assign = assign;
        this.activatedRouter = activatedRouter;
        this.auth = auth;
        this.newAssign = new src_app_assignment__WEBPACK_IMPORTED_MODULE_1__["Assignment1"]("", null, null, null);
      }

      _createClass(CreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.auth.getUserId();
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          console.log(this.newAssign);
          this.assign.addAssignment(this.newAssign, this.id).subscribe(function (data) {
            console.log(data);
          });
        }
      }]);

      return CreateComponent;
    }();

    CreateComponent.ɵfac = function CreateComponent_Factory(t) {
      return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_assignment_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateComponent,
      selectors: [["app-create"]],
      decls: 25,
      vars: 5,
      consts: [[1, "main"], [2, "text-align", "center"], ["create", "ngForm"], [1, "group"], ["name", "question", "placeholder", "Name", "type", "text", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], [1, "highlight"], [1, "bar"], ["name", "a", "placeholder", "Descriptions", "type", "text", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["name", "a", "placeholder", "Pre-Requisites", "type", "text", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["name", "b", "type", "text", "placeholder", "Duration (HH:MM:SS)", "required", "", "minlength", "8", "maxlength", "8", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "button", "buttonBlue", 3, "disabled", "click"], [1, "ripples", "buttonRipples"], [1, "ripplesCircle"]],
      template: function CreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Assignment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.newAssign.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.newAssign.descriptions = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.newAssign.pre_requisites = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.newAssign.duration = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_21_listener() {
            return ctx.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Create ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newAssign.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newAssign.descriptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newAssign.pre_requisites);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newAssign.duration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"]],
      styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.group[_ngcontent-%COMP%] {\r\n    padding-left: 200px;\r\n    padding-top: 15px;\r\n    color: black;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    word-spacing: 10px;\r\n    line-height: normal;\r\n    width: 1000px;\r\n    \r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    padding: 50px;\r\n    width: 100%;\r\n    height: 300px;\r\n    background-color: rgb(61, 61, 58);\r\n}\r\n\r\n.input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    font-size: 16px;\r\n    color: rgb(255, 255, 255);\r\n    border: none;\r\n    border-bottom: 1px solid #fff;\r\n    outline: none;\r\n    background: transparent;\r\n  }\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    color: rgb(127, 127, 250);\r\n    margin-left: 30px;\r\n    width: 100px;\r\n    height: 35px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7O0FBRWpCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDOztBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZ3JvdXAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIFxyXG59XHJcbi5tYWluIHtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDYxLCA1OCk7XHJcbn1cclxuLmlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBjb2xvcjogcmdiKDEyNywgMTI3LCAyNTApO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create',
          templateUrl: './create.component.html',
          styleUrls: ['./create.component.css']
        }]
      }], function () {
        return [{
          type: src_app_assignment_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _admin_candidates_candidates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin/candidates/candidates.component */
    "./src/app/admin/candidates/candidates.component.ts");
    /* harmony import */


    var _auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth-gaurd.service */
    "./src/app/auth-gaurd.service.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _new_registration_new_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./new-registration/new-registration.component */
    "./src/app/new-registration/new-registration.component.ts");
    /* harmony import */


    var _admin_assignments_assignments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin/assignments/assignments.component */
    "./src/app/admin/assignments/assignments.component.ts");
    /* harmony import */


    var _main_assignment_main_assignment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./main-assignment/main-assignment.component */
    "./src/app/main-assignment/main-assignment.component.ts");
    /* harmony import */


    var _take_test_take_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./take-test/take-test.component */
    "./src/app/take-test/take-test.component.ts");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _sample_sample_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./sample/sample.component */
    "./src/app/sample/sample.component.ts");
    /* harmony import */


    var _take_test_test_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./take-test/test/test.component */
    "./src/app/take-test/test/test.component.ts");

    var routes = [{
      path: "sample",
      component: _sample_sample_component__WEBPACK_IMPORTED_MODULE_13__["SampleComponent"]
    }, {
      path: "test",
      component: _take_test_test_test_component__WEBPACK_IMPORTED_MODULE_14__["TestComponent"]
    }, {
      path: "",
      component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"]
    }, {
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: "search",
      component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
    }, {
      path: "admin",
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
      canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__["AuthGaurdService"]]
    }, {
      path: "candidates",
      component: _admin_candidates_candidates_component__WEBPACK_IMPORTED_MODULE_5__["CandidatesComponent"],
      canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__["AuthGaurdService"]]
    }, {
      path: "profile/:id",
      component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"]
    }, {
      path: "new",
      component: _new_registration_new_registration_component__WEBPACK_IMPORTED_MODULE_8__["NewRegistrationComponent"]
    }, {
      path: "assignments",
      component: _admin_assignments_assignments_component__WEBPACK_IMPORTED_MODULE_9__["AssignmentsComponent"]
    }, {
      path: "assignmentProfile/:id",
      component: _main_assignment_main_assignment_component__WEBPACK_IMPORTED_MODULE_10__["MainAssignmentComponent"],
      canActivate: [_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__["AuthGaurdService"]]
    }, {
      path: "takeTest/:id",
      component: _take_test_take_test_component__WEBPACK_IMPORTED_MODULE_11__["TakeTestComponent"]
    }, {
      path: "takeTest/:id/test",
      component: _take_test_test_test_component__WEBPACK_IMPORTED_MODULE_14__["TestComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'assessment';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".Header[_ngcontent-%COMP%]{\r\n    height: 35px;\r\n    background-color: yellowgreen;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSGVhZGVye1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: provideconfig, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "provideconfig", function () {
      return provideconfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _search_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./search/search-results/search-results.component */
    "./src/app/search/search-results/search-results.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _admin_candidates_candidates_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin/candidates/candidates.component */
    "./src/app/admin/candidates/candidates.component.ts");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _new_registration_new_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./new-registration/new-registration.component */
    "./src/app/new-registration/new-registration.component.ts");
    /* harmony import */


    var _admin_assignments_assignments_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin/assignments/assignments.component */
    "./src/app/admin/assignments/assignments.component.ts");
    /* harmony import */


    var _main_assignment_main_assignment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./main-assignment/main-assignment.component */
    "./src/app/main-assignment/main-assignment.component.ts");
    /* harmony import */


    var _main_assignment_about_assignment_about_assignment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./main-assignment/about-assignment/about-assignment.component */
    "./src/app/main-assignment/about-assignment/about-assignment.component.ts");
    /* harmony import */


    var _main_assignment_questions_questions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./main-assignment/questions/questions.component */
    "./src/app/main-assignment/questions/questions.component.ts");
    /* harmony import */


    var _main_assignment_candidate_performance_candidate_performance_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./main-assignment/candidate-performance/candidate-performance.component */
    "./src/app/main-assignment/candidate-performance/candidate-performance.component.ts");
    /* harmony import */


    var _take_test_take_test_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./take-test/take-test.component */
    "./src/app/take-test/take-test.component.ts");
    /* harmony import */


    var _user_profile_my_assignments_my_assignments_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./user-profile/my-assignments/my-assignments.component */
    "./src/app/user-profile/my-assignments/my-assignments.component.ts");
    /* harmony import */


    var _main_assignment_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./main-assignment/add-question/add-question.component */
    "./src/app/main-assignment/add-question/add-question.component.ts");
    /* harmony import */


    var _admin_create_create_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./admin/create/create.component */
    "./src/app/admin/create/create.component.ts");
    /* harmony import */


    var _user_profile_results_results_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./user-profile/results/results.component */
    "./src/app/user-profile/results/results.component.ts");
    /* harmony import */


    var _user_profile_overview_overview_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./user-profile/overview/overview.component */
    "./src/app/user-profile/overview/overview.component.ts");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @swimlane/ngx-graph */
    "./node_modules/@swimlane/ngx-graph/__ivy_ngcc__/fesm2015/swimlane-ngx-graph.js");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _sample_sample_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./sample/sample.component */
    "./src/app/sample/sample.component.ts");
    /* harmony import */


    var _my_assignments_admin_assessments_admin_assessments_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./my-assignments/admin-assessments/admin-assessments.component */
    "./src/app/my-assignments/admin-assessments/admin-assessments.component.ts");
    /* harmony import */


    var _take_test_test_test_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./take-test/test/test.component */
    "./src/app/take-test/test/test.component.ts");

    var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_30__["AuthServiceConfig"]([{
      id: angularx_social_login__WEBPACK_IMPORTED_MODULE_30__["GoogleLoginProvider"].PROVIDER_ID,
      provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_30__["GoogleLoginProvider"]('686655151903-dsnobl97ube8m0q338u86f0nedulkqo7.apps.googleusercontent.com')
    }]);

    function provideconfig() {
      return config;
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_30__["AuthServiceConfig"],
        useFactory: provideconfig
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_26__["NgxChartsModule"], _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_28__["NgxGraphModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_30__["SocialLoginModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"].forRoot({
        config: {
          tokenGetter: function tokenGetter() {
            return localStorage.getItem("token");
          }
        }
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__["AgGridModule"].withComponents([])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"], _search_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__["SearchResultsComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"], _admin_candidates_candidates_component__WEBPACK_IMPORTED_MODULE_10__["CandidatesComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["UserProfileComponent"], _new_registration_new_registration_component__WEBPACK_IMPORTED_MODULE_14__["NewRegistrationComponent"], _admin_assignments_assignments_component__WEBPACK_IMPORTED_MODULE_15__["AssignmentsComponent"], _main_assignment_main_assignment_component__WEBPACK_IMPORTED_MODULE_16__["MainAssignmentComponent"], _main_assignment_about_assignment_about_assignment_component__WEBPACK_IMPORTED_MODULE_17__["AboutAssignmentComponent"], _main_assignment_questions_questions_component__WEBPACK_IMPORTED_MODULE_18__["QuestionsComponent"], _main_assignment_candidate_performance_candidate_performance_component__WEBPACK_IMPORTED_MODULE_19__["CandidatePerformanceComponent"], _take_test_take_test_component__WEBPACK_IMPORTED_MODULE_20__["TakeTestComponent"], _user_profile_my_assignments_my_assignments_component__WEBPACK_IMPORTED_MODULE_21__["MyAssignmentsComponent"], _main_assignment_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_22__["AddQuestionComponent"], _admin_create_create_component__WEBPACK_IMPORTED_MODULE_23__["CreateComponent"], _user_profile_results_results_component__WEBPACK_IMPORTED_MODULE_24__["ResultsComponent"], _user_profile_overview_overview_component__WEBPACK_IMPORTED_MODULE_25__["OverviewComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_29__["LandingComponent"], _sample_sample_component__WEBPACK_IMPORTED_MODULE_31__["SampleComponent"], _my_assignments_admin_assessments_admin_assessments_component__WEBPACK_IMPORTED_MODULE_32__["AdminAssessmentsComponent"], _take_test_test_test_component__WEBPACK_IMPORTED_MODULE_33__["TestComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_26__["NgxChartsModule"], _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_28__["NgxGraphModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_30__["SocialLoginModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__["AgGridModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"], _search_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__["SearchResultsComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"], _admin_candidates_candidates_component__WEBPACK_IMPORTED_MODULE_10__["CandidatesComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["UserProfileComponent"], _new_registration_new_registration_component__WEBPACK_IMPORTED_MODULE_14__["NewRegistrationComponent"], _admin_assignments_assignments_component__WEBPACK_IMPORTED_MODULE_15__["AssignmentsComponent"], _main_assignment_main_assignment_component__WEBPACK_IMPORTED_MODULE_16__["MainAssignmentComponent"], _main_assignment_about_assignment_about_assignment_component__WEBPACK_IMPORTED_MODULE_17__["AboutAssignmentComponent"], _main_assignment_questions_questions_component__WEBPACK_IMPORTED_MODULE_18__["QuestionsComponent"], _main_assignment_candidate_performance_candidate_performance_component__WEBPACK_IMPORTED_MODULE_19__["CandidatePerformanceComponent"], _take_test_take_test_component__WEBPACK_IMPORTED_MODULE_20__["TakeTestComponent"], _user_profile_my_assignments_my_assignments_component__WEBPACK_IMPORTED_MODULE_21__["MyAssignmentsComponent"], _main_assignment_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_22__["AddQuestionComponent"], _admin_create_create_component__WEBPACK_IMPORTED_MODULE_23__["CreateComponent"], _user_profile_results_results_component__WEBPACK_IMPORTED_MODULE_24__["ResultsComponent"], _user_profile_overview_overview_component__WEBPACK_IMPORTED_MODULE_25__["OverviewComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_29__["LandingComponent"], _sample_sample_component__WEBPACK_IMPORTED_MODULE_31__["SampleComponent"], _my_assignments_admin_assessments_admin_assessments_component__WEBPACK_IMPORTED_MODULE_32__["AdminAssessmentsComponent"], _take_test_test_test_component__WEBPACK_IMPORTED_MODULE_33__["TestComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_26__["NgxChartsModule"], _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_28__["NgxGraphModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_30__["SocialLoginModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"].forRoot({
            config: {
              tokenGetter: function tokenGetter() {
                return localStorage.getItem("token");
              }
            }
          }), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__["AgGridModule"].withComponents([])],
          providers: [{
            provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_30__["AuthServiceConfig"],
            useFactory: provideconfig
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/assignment.service.ts":
  /*!***************************************!*\
    !*** ./src/app/assignment.service.ts ***!
    \***************************************/

  /*! exports provided: AssignmentService */

  /***/
  function srcAppAssignmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentService", function () {
      return AssignmentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AssignmentService = /*#__PURE__*/function () {
      function AssignmentService(http) {
        _classCallCheck(this, AssignmentService);

        this.http = http;
        this.mcq = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("NA");
        this.testTaken = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.mcqMark = this.mcq.asObservable();
        this.TakenTest = this.testTaken.asObservable();
        this.baseUrl = "http://localhost:5005/6/assignments";
      }

      _createClass(AssignmentService, [{
        key: "updateMark",
        value: function updateMark(mark) {
          this.mcq.next(mark);
          this.testTaken.next(true);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          console.log("reached");
          return this.http.get(this.baseUrl);
        }
      }, {
        key: "getAllOfAdmin",
        value: function getAllOfAdmin(id) {
          var url = "http://localhost:5005/" + id + "/assignments/admin";
          console.log("reached");
          return this.http.get(url);
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.http.get(this.baseUrl + "/" + id);
        }
      }, {
        key: "getMcqs",
        value: function getMcqs(id) {
          var url = "http://localhost:5005/" + id + "/mcq";
          return this.http.get(url);
        }
      }, {
        key: "getProject",
        value: function getProject(id) {
          var url = "http://localhost:5005/" + id + "/project";
          return this.http.get(url);
        }
      }, {
        key: "getQuiz",
        value: function getQuiz(id) {
          var url = "http://localhost:5005/" + id + "/quiz";
          return this.http.get(url);
        }
      }, {
        key: "getCandidate",
        value: function getCandidate(assignID) {
          var url = this.baseUrl + "/" + assignID + "/candidate";
          return this.http.get(url);
        }
      }, {
        key: "addMcq",
        value: function addMcq(mcq, id) {
          return this.http.post("http://localhost:5005/" + id + "/mcq/add", mcq);
        }
      }, {
        key: "addAssignment",
        value: function addAssignment(Assignment, id) {
          return this.http.post("http://localhost:5005/" + id + "/assignments/add", Assignment);
        }
      }, {
        key: "addProject",
        value: function addProject(newProject, id) {
          console.log(newProject);
          return this.http.post("http://localhost:5005/" + id + "/project/add", newProject);
        }
      }, {
        key: "addQuiz",
        value: function addQuiz(newQuiz, id) {
          return this.http.post("http://localhost:5005/" + id + "/quiz/add", newQuiz);
        }
      }, {
        key: "deleteAssignment",
        value: function deleteAssignment(userID, assignId) {
          console.log("http://localhost:5005/" + userID + "/assignments/" + assignId);
          return this.http["delete"]("http://localhost:5005/" + userID + "/assignments/" + assignId);
        }
      }, {
        key: "deleteMcq",
        value: function deleteMcq(assign, id) {
          return this.http["delete"]("http://localhost:5005/" + assign + "/mcq/" + id);
        }
      }, {
        key: "updateMcq",
        value: function updateMcq(assign, id, mcq) {
          return this.http.put("http://localhost:5005/" + assign + "/mcq/" + id, mcq);
        }
      }, {
        key: "deleteProject",
        value: function deleteProject(assign, id) {
          return this.http["delete"]("http://localhost:5005/" + assign + "/project/" + id);
        }
      }, {
        key: "updateProject",
        value: function updateProject(assign, id, project) {
          return this.http.put("http://localhost:5005/" + assign + "/project/" + id, project);
        }
      }, {
        key: "updateAssignment",
        value: function updateAssignment(id, change) {
          return this.http.put(this.baseUrl + "/" + id, change);
        }
      }, {
        key: "addResult",
        value: function addResult(result, userid, assignId) {
          return this.http.post("http://localhost:5005/" + userid + "/assignments/" + assignId + "/addResult", result);
        }
      }]);

      return AssignmentService;
    }();

    AssignmentService.ɵfac = function AssignmentService_Factory(t) {
      return new (t || AssignmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AssignmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AssignmentService,
      factory: AssignmentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/assignment.ts":
  /*!*******************************!*\
    !*** ./src/app/assignment.ts ***!
    \*******************************/

  /*! exports provided: Assignment1 */

  /***/
  function srcAppAssignmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Assignment1", function () {
      return Assignment1;
    });

    var Assignment1 = function Assignment1(name, descriptions, pre_requisites, duration) {
      _classCallCheck(this, Assignment1);

      this.name = name;
      this.descriptions = descriptions;
      this.pre_requisites = pre_requisites;
      this.duration = duration;
    };
    /***/

  },

  /***/
  "./src/app/auth-gaurd.service.ts":
  /*!***************************************!*\
    !*** ./src/app/auth-gaurd.service.ts ***!
    \***************************************/

  /*! exports provided: AuthGaurdService */

  /***/
  function srcAppAuthGaurdServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGaurdService", function () {
      return AuthGaurdService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGaurdService = /*#__PURE__*/function () {
      function AuthGaurdService(auth, router) {
        _classCallCheck(this, AuthGaurdService);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGaurdService, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.auth.isAutenticated()) {
            //true=admin, false =not authorised
            ///this.router.navigate(['admin']);
            return true;
          }

          return false;
        }
      }]);

      return AuthGaurdService;
    }();

    AuthGaurdService.ɵfac = function AuthGaurdService_Factory(t) {
      return new (t || AuthGaurdService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGaurdService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGaurdService,
      factory: AuthGaurdService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGaurdService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/user.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(jwt, userSevice) {
        _classCallCheck(this, AuthService);

        this.jwt = jwt;
        this.userSevice = userSevice;
      }

      _createClass(AuthService, [{
        key: "isAutenticated",
        value: function isAutenticated() {
          var token = localStorage.getItem("token");
          console.log(token);
          console.log(this.jwt.isTokenExpired(token));

          if (!this.jwt.isTokenExpired(token)) {
            this.CurrentUser = this.jwt.decodeToken(token);
            console.log(this.CurrentUser);

            if (this.CurrentUser["admin"]) {
              return true; //for admin
            }

            return false;
          }

          return false;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem("token");
        }
      }, {
        key: "getUserdetails",
        value: function getUserdetails() {
          this.isAutenticated();
          return this.CurrentUser;
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          if (localStorage.getItem("token")) {
            console.log(this.CurrentUser);
            this.isAutenticated();
            return this.CurrentUser["id"];
          } else {
            return 0;
          }
        }
      }, {
        key: "isGivenIdAdminOrNot",
        value: function isGivenIdAdminOrNot(id) {
          var admin;
          this.userSevice.getById(id).subscribe(function (data) {
            admin = data["admin"];
            console.log(admin);
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(admin).toPromise();
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authRequest.ts":
  /*!********************************!*\
    !*** ./src/app/authRequest.ts ***!
    \********************************/

  /*! exports provided: authRequest */

  /***/
  function srcAppAuthRequestTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authRequest", function () {
      return authRequest;
    });

    var authRequest = function authRequest(username, password) {
      _classCallCheck(this, authRequest);

      this.username = username;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/landing/landing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/landing/landing.component.ts ***!
    \**********************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/login"];
    };

    var _c1 = function _c1() {
      return ["/new"];
    };

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent() {
        _classCallCheck(this, LandingComponent);
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingComponent;
    }();

    LandingComponent.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)();
    };

    LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["app-landing"]],
      decls: 19,
      vars: 4,
      consts: [[1, "picture"], ["src", "../../assets/img/landing.jpg", 2, "width", "85%", "height", "auto"], [1, "welcome"], [2, "font-size", "60px", "text-align", "center"], [1, "login"], [1, "share-button"], [3, "routerLink"], [1, "new"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Welcome to Assessment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Module ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Have an Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SIGN IN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Don't have One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SIGN UP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".picture[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.welcome[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 70px;\r\n    right: 150px;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 300px;\r\n    right: 250px;\r\n     \r\n}\r\n\r\n.new[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 400px;\r\n    right: 250px;\r\n     \r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n    background: #f1f1f1;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100vh;\r\n  }\r\n\r\n.share-button[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n    height: 80px;\r\n    background: #dfe6e9;\r\n    border-radius: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0 50px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    cursor: pointer;\r\n    transition: .3s linear;\r\n  }\r\n\r\n.share-button[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.1);\r\n  }\r\n\r\n.share-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #2d3436;\r\n    color: #f1f1f1;\r\n    text-align: center;\r\n    line-height: 80px;\r\n    z-index: 999;\r\n    transition: .6s linear;\r\n    border-radius: 40px;\r\n   \r\n  }\r\n\r\n.share-button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{\r\n    transform: translateX(-100%);\r\n    transition-delay: .3s;\r\n  }\r\n\r\n.share-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    font-size: 26px;\r\n    margin-right: 20px;\r\n    color: #2d3436;\r\n    text-align: center;\r\n    transform: translateX(-100%);\r\n    opacity: 0;\r\n    transition: .3s linear;\r\n  }\r\n\r\n.share-button[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n\r\n.share-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-of-type(1){\r\n    transition-delay: 1s;\r\n  }\r\n\r\n.share-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-of-type(2){\r\n    transition-delay: .8s;\r\n  }\r\n\r\n.share-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-of-type(3){\r\n    transition-delay: .6s;\r\n  }\r\n\r\n.share-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-of-type(4){\r\n    transition-delay: .4s;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7S0FDWCxVQUFVO0FBQ2Y7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7S0FDWCxVQUFVO0FBQ2Y7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0VBQ2Y7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQjtFQUN4Qjs7QUFDQTtJQUNFLHFCQUFxQjtFQUN2Qjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjs7RUFFckI7O0FBQ0E7SUFDRSw0QkFBNEI7SUFDNUIscUJBQXFCO0VBQ3ZCOztBQUNBO0lBQ0UsT0FBTztJQUNQLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLHNCQUFzQjtFQUN4Qjs7QUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7O0FBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7O0FBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0FBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0FBQ0E7SUFDRSxxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWN0dXJlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLndlbGNvbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgcmlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4ubG9naW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwMHB4O1xyXG4gICAgcmlnaHQ6IDI1MHB4O1xyXG4gICAgIC8qIEdyZWVuICovXHJcbn1cclxuLm5ld3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDAwcHg7XHJcbiAgICByaWdodDogMjUwcHg7XHJcbiAgICAgLyogR3JlZW4gKi9cclxufVxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIC5zaGFyZS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RmZTZlOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCA1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IC4zcyBsaW5lYXI7XHJcbiAgfVxyXG4gIC5zaGFyZS1idXR0b246aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG4gIC5zaGFyZS1idXR0b24gc3BhbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzJkMzQzNjtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB0cmFuc2l0aW9uOiAuNnMgbGluZWFyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgXHJcbiAgfVxyXG4gIC5zaGFyZS1idXR0b246aG92ZXIgc3BhbntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAuM3M7XHJcbiAgfVxyXG4gIC5zaGFyZS1idXR0b24gYSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICMyZDM0MzY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IC4zcyBsaW5lYXI7XHJcbiAgfVxyXG4gIC5zaGFyZS1idXR0b246aG92ZXIgYSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuICAuc2hhcmUtYnV0dG9uIGE6bnRoLW9mLXR5cGUoMSl7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcclxuICB9XHJcbiAgLnNoYXJlLWJ1dHRvbiBhOm50aC1vZi10eXBlKDIpe1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjhzO1xyXG4gIH1cclxuICAuc2hhcmUtYnV0dG9uIGE6bnRoLW9mLXR5cGUoMyl7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAuNnM7XHJcbiAgfVxyXG4gIC5zaGFyZS1idXR0b24gYTpudGgtb2YtdHlwZSg0KXtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IC40cztcclxuICB9XHJcbiAgXHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing',
          templateUrl: './landing.component.html',
          styleUrls: ['./landing.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login-service.service.ts":
  /*!******************************************!*\
    !*** ./src/app/login-service.service.ts ***!
    \******************************************/

  /*! exports provided: LoginServiceService */

  /***/
  function srcAppLoginServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginServiceService", function () {
      return LoginServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginServiceService = /*#__PURE__*/function () {
      function LoginServiceService(http, router) {
        _classCallCheck(this, LoginServiceService);

        this.http = http;
        this.router = router;
        this.url = "http://localhost:5005/authenticate";
      }

      _createClass(LoginServiceService, [{
        key: "loginRequest",
        value: function loginRequest(user) {
          // localStorage.setItem("token",this.adminToken);
          ///localStorage.removeItem("token");
          console.log("login request");
          return this.http.post(this.url, user);
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem("token");
          this.router.navigate(['/login']);
        }
      }, {
        key: "loginByGoogle",
        value: function loginByGoogle(user) {
          return this.http.post("http://localhost:5005/users/loginByGoogle", user);
        }
      }]);

      return LoginServiceService;
    }();

    LoginServiceService.ɵfac = function LoginServiceService_Factory(t) {
      return new (t || LoginServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginServiceService,
      factory: LoginServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../User */
    "./src/app/User.ts");
    /* harmony import */


    var _authRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authRequest */
    "./src/app/authRequest.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _login_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../login-service.service */
    "./src/app/login-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_9_div_1_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
      }
    }

    function LoginComponent_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_12_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password must be at least 8 characters long. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_12_div_1_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_12_div_2_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.minlength);
      }
    }

    function LoginComponent_h2_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "INVALID CREDENTIALS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/new"];
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(loginService, router, authService, socialAuthService) {
        _classCallCheck(this, LoginComponent);

        this.loginService = loginService;
        this.router = router;
        this.authService = authService;
        this.socialAuthService = socialAuthService;
        this.user = new _authRequest__WEBPACK_IMPORTED_MODULE_2__["authRequest"]("", "");
        this.validOrNot = false;
        this.socialuser = angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["SocialUser"];
        this.InvalidCredentials = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem("token")) {
            this.validate();
          }
        }
      }, {
        key: "googleSignin",
        value: function googleSignin() {
          var _this2 = this;

          this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID).then(function (data) {
            _this2.socialuser = data;
            console.log(_this2.socialuser);

            _this2.loginByGoogle();
          });
        }
      }, {
        key: "loginByGoogle",
        value: function loginByGoogle() {
          var _this3 = this;

          var googleSignUser = new _User__WEBPACK_IMPORTED_MODULE_1__["User"](this.socialuser.name, "", this.socialuser.email, false, "", "");
          console.log(googleSignUser);
          this.loginService.loginByGoogle(googleSignUser).subscribe(function (data) {
            _this3.currentUser = data;
            console.log(_this3.currentUser);
            localStorage.removeItem("token");
            localStorage.setItem("token", _this3.currentUser["jwt"]);

            _this3.validate();
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          console.log(this.user);
          this.loginService.loginRequest(this.user).subscribe(function (data) {
            _this4.currentUser = data;
            console.log(_this4.currentUser["jwt"]);
            localStorage.removeItem("token");
            localStorage.setItem("token", _this4.currentUser["jwt"]);
            console.log(localStorage.getItem("token"));

            _this4.validate();
          }, function (error) {
            console.log(error);

            if (error.status == 500) {
              console.log("invalid username and passwod");
              _this4.InvalidCredentials = true;
            }
          });
        }
      }, {
        key: "validate",
        value: function validate() {
          if (this.authService.isAutenticated()) {
            console.log("successful");
            this.router.navigate(["/admin"]);
          } else {
            console.log("search ku pooo");
            this.router.navigate(["/search"]);
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service_service__WEBPACK_IMPORTED_MODULE_4__["LoginServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 23,
      vars: 8,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "wrapper", "fadeInDown"], ["id", "formContent"], [1, "fadeIn", "first"], [3, "ngSubmit"], ["loginForm", "ngForm"], ["type", "email", "id", "login", "name", "user", "placeholder", "Email", "required", "", 1, "fadeIn", "second", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "alert", 4, "ngIf"], ["type", "password", "id", "password", "name", "password", "placeholder", "Password", "required", "", "minlength", "8", 1, "fadeIn", "third", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["style", "color: red;", 4, "ngIf"], ["type", "submit", "value", "Log In", 1, "fadeIn", "fourth", 3, "disabled"], [2, "background-color", "rgb(250, 84, 84)", "color", "white", 3, "click"], [1, "fa", "fa-google"], ["id", "formFooter"], [1, "underlineHover", 3, "routerLink"], [1, "alert"], [4, "ngIf"], [2, "color", "red"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " User ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.user.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 3, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_h2_13_Template, 2, 0, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
            return ctx.googleSignin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Sign in with Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Don't have an account?Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.InvalidCredentials);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: ["html[_ngcontent-%COMP%] {\r\n    background-color: #56baed;\r\n  }\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: \"Poppins\", sans-serif;\r\n    height: 100% !important;\r\n    width: 100% !important;\r\n  }\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #92badd;\r\n    display:inline-block;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n  }\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 20px;\r\n    margin: 0 0 0 0;\r\n    background: url('login.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n\r\n#formContent[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n\r\n#formFooter[_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border-top: 1px solid #dce8f1;\r\n    padding: 25px;\r\n    text-align: center;\r\n    border-radius: 0 0 10px 10px;\r\n  }\r\n\r\n\r\n\r\nh2.inactive[_ngcontent-%COMP%] {\r\n    color: #cccccc;\r\n  }\r\n\r\nh2.active[_ngcontent-%COMP%] {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\n\r\n\r\ninput[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\ninput[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n    background-color: #39ace7;\r\n  }\r\n\r\ninput[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n    transform: scale(0.95);\r\n  }\r\n\r\ninput[type=text][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\ninput[type=text][_ngcontent-%COMP%]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n.fadeInDown[_ngcontent-%COMP%] {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n  }\r\n\r\n@-webkit-keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n@keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n\r\n\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn[_ngcontent-%COMP%] {\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n  \r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n  \r\n    -webkit-animation-duration:1s;\r\n    animation-duration:1s;\r\n  }\r\n\r\n.fadeIn.first[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n  }\r\n\r\n.fadeIn.second[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\r\n  }\r\n\r\n.fadeIn.third[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n  }\r\n\r\n.fadeIn.fourth[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: 1s;\r\n    animation-delay: 1s;\r\n  }\r\n\r\n\r\n\r\n.underlineHover[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover {\r\n    color: #0d0d0d;\r\n  }\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover:after{\r\n    width: 100%;\r\n  }\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n\r\n#icon[_ngcontent-%COMP%] {\r\n    width:60%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsVUFBVTs7QUFFVjtJQUNJLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7QUFJQSxjQUFjOztBQUVkO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZiw0QkFBNkM7SUFDN0MsNEJBQTRCO0lBQzVCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUVFLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFFWix5Q0FBeUM7SUFDekMsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isa0JBQWtCO0lBRWxCLDRCQUE0QjtFQUM5Qjs7QUFJQSxTQUFTOztBQUVUO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxnQ0FBZ0M7RUFDbEM7O0FBSUEsbUJBQW1COztBQUVuQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZUFBZTtJQUVmLDhDQUE4QztJQUU5Qyw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBSzFCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUtFLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVix5QkFBeUI7SUFLekIsZ0NBQWdDO0lBRWhDLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUlBLGVBQWU7O0FBRWYsdUNBQXVDOztBQUN2QztJQUNFLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0U7TUFDRSxVQUFVO01BRVYsbUNBQW1DO0lBQ3JDO0lBQ0E7TUFDRSxVQUFVO01BRVYsZUFBZTtJQUNqQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxVQUFVO01BRVYsbUNBQW1DO0lBQ3JDO0lBQ0E7TUFDRSxVQUFVO01BRVYsZUFBZTtJQUNqQjtFQUNGOztBQUVBLGtDQUFrQzs7QUFDbEMsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFFbEUsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFFMUQ7SUFDRSxTQUFTO0lBQ1Qsa0NBQWtDO0lBRWxDLDBCQUEwQjs7SUFFMUIsb0NBQW9DO0lBRXBDLDRCQUE0Qjs7SUFFNUIsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDJCQUEyQjtJQUUzQixtQkFBbUI7RUFDckI7O0FBRUEsa0NBQWtDOztBQUNsQztJQUNFLGNBQWM7SUFDZCxPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUlBLFdBQVc7O0FBRVg7TUFDSSxhQUFhO0VBQ2pCOztBQUVBO0lBQ0UsU0FBUztFQUNYIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBCQVNJQyAqL1xyXG5cclxuaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzkyYmFkZDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7IFxyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIFNUUlVDVFVSRSAqL1xyXG4gIFxyXG4gIC53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMCAwIDAgMDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvbG9naW4uanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICNmb3JtQ29udGVudCB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm1Gb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIFRBQlMgKi9cclxuICBcclxuICBoMi5pbmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgaDIuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIEZPUk0gVFlQT0dSQVBIWSovXHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZTc7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSxpbnB1dFt0eXBlPWVtYWlsXSxpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBBTklNQVRJT05TICovXHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xyXG4gIC5mYWRlSW5Eb3duIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIFxyXG4gIC5mYWRlSW4ge1xyXG4gICAgb3BhY2l0eTowO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLmZpcnN0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uc2Vjb25kIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4udGhpcmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5mb3VydGgge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICB9XHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuICAudW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIE9USEVSUyAqL1xyXG4gIFxyXG4gICo6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gIH0gXHJcbiAgXHJcbiAgI2ljb24ge1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gIH1cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _login_service_service__WEBPACK_IMPORTED_MODULE_4__["LoginServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-assignment/about-assignment/about-assignment.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/main-assignment/about-assignment/about-assignment.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AboutAssignmentComponent */

  /***/
  function srcAppMainAssignmentAboutAssignmentAboutAssignmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutAssignmentComponent", function () {
      return AboutAssignmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_assignment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/assignment.service */
    "./src/app/assignment.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AboutAssignmentComponent = /*#__PURE__*/function () {
      function AboutAssignmentComponent(activatedRouter, asignService) {
        _classCallCheck(this, AboutAssignmentComponent);

        this.activatedRouter = activatedRouter;
        this.asignService = asignService;
      }

      _createClass(AboutAssignmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.id = this.activatedRouter.snapshot.paramMap.get("id");
          this.asignService.getById(this.id).subscribe(function (data) {
            console.log(data);
            _this5.currentAssignment = data;
            console.log(_this5.currentAssignment);
          });
          this.jstoday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(Date.now(), 'dd-MM-yyyy hh:mm:ss', 'en-US', '+0530');
          console.log(this.jstoday);
        }
      }, {
        key: "save",
        value: function save() {
          console.log(this.currentAssignment);
          this.asignService.updateAssignment(this.id, this.currentAssignment).subscribe(function (data) {
            console.log("update successful");
            console.log(data);
          });
        }
      }]);

      return AboutAssignmentComponent;
    }();

    AboutAssignmentComponent.ɵfac = function AboutAssignmentComponent_Factory(t) {
      return new (t || AboutAssignmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_assignment_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentService"]));
    };

    AboutAssignmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutAssignmentComponent,
      selectors: [["app-about-assignment"]],
      decls: 40,
      vars: 5,
      consts: [[1, "main"], ["about", "ngForm"], [1, "group"], ["value", "currentAssignment.name", "name", "question", "type", "text", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [1, "highlight"], [1, "bar"], ["value", "currentAssignment.descriptions", "name", "a", "placeholder", "Descriptions", "type", "text", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["descriptions", "ngModel"], ["value", "currentAssignment.pre_requisites", "name", "pre", "placeholder", "Pre-Requisites", "type", "text", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["pre_requisites", "ngModel"], ["value", "currentAssignment.duration", "name", "b", "type", "text", "placeholder", "HH:MM:SS", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["duration", "ngModel"], ["type", "button", 1, "button", "buttonBlue", 3, "disabled", "click"], [1, "ripples", "buttonRipples"], [1, "ripplesCircle"]],
      template: function AboutAssignmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Assignment Title ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutAssignmentComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.currentAssignment.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Descriptions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutAssignmentComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.currentAssignment.descriptions = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pre-Requisites ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutAssignmentComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.currentAssignment.pre_requisites = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Duration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutAssignmentComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.currentAssignment.duration = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutAssignmentComponent_Template_button_click_36_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentAssignment.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentAssignment.descriptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentAssignment.pre_requisites);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentAssignment.duration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.pristine);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 300px;\r\n    background-color: rgb(255, 255, 190);\r\n}\r\n\r\n.group[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n    padding-top: 15px;\r\n    color: black;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    word-spacing: 10px;\r\n    line-height: normal;\r\n    \r\n}\r\n\r\n.input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    font-size: 16px;\r\n    color: rgb(10, 10, 10);\r\n    border: none;\r\n    border-bottom: 1px solid #fff;\r\n    outline: none;\r\n    background: transparent;\r\n  }\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    color: rgb(127, 127, 250);\r\n    margin-left: 30px;\r\n    width: 100px;\r\n    height: 35px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1hc3NpZ25tZW50L2Fib3V0LWFzc2lnbm1lbnQvYWJvdXQtYXNzaWdubWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixtQkFBbUI7O0FBRXZCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21haW4tYXNzaWdubWVudC9hYm91dC1hc3NpZ25tZW50L2Fib3V0LWFzc2lnbm1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAxOTApO1xyXG59XHJcblxyXG4uZ3JvdXAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHdvcmQtc3BhY2luZzogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBcclxufVxyXG4uaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogcmdiKDEwLCAxMCwgMTApO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIGNvbG9yOiByZ2IoMTI3LCAxMjcsIDI1MCk7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutAssignmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-assignment',
          templateUrl: './about-assignment.component.html',
          styleUrls: ['./about-assignment.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_assignment_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-assignment/add-question/add-question.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/main-assignment/add-question/add-question.component.ts ***!
    \************************************************************************/

  /*! exports provided: AddQuestionComponent */

  /***/
  function srcAppMainAssignmentAddQuestionAddQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function () {
      return AddQuestionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_mcq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/mcq */
    "./src/app/mcq.ts");
    /* harmony import */


    var src_app_quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/quiz */
    "./src/app/quiz.ts");
    /* harmony import */


    var src_app_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/project */
    "./src/app/project.ts");
    /* harmony import */


    var src_app_assignment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/assignment.service */
    "./src/app/assignment.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AddQuestionComponent = /*#__PURE__*/function () {
      function AddQuestionComponent(assignService, http, activatedRouter) {
        _classCallCheck(this, AddQuestionComponent);

        this.assignService = assignService;
        this.http = http;
        this.activatedRouter = activatedRouter;
        this.newMcq = new src_app_mcq__WEBPACK_IMPORTED_MODULE_1__["Mcq"]('', '', '', "", "", "");
        this.newQuiz = new src_app_quiz__WEBPACK_IMPORTED_MODULE_2__["quiz"]("", "");
        this.newProject = new src_app_project__WEBPACK_IMPORTED_MODULE_3__["project"]("", "");
      }

      _createClass(AddQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.activatedRouter.snapshot.paramMap.get("id");
        }
      }, {
        key: "add",
        value: function add() {
          console.log(this.newMcq);
          this.assignService.addMcq(this.newMcq, this.id).subscribe(function (data) {
            var message = data;
            console.log(message);
          });
        }
      }, {
        key: "addProject",
        value: function addProject() {
          console.log(this.newProject);
          this.assignService.addProject(this.newProject, this.id).subscribe(function (data) {
            var message = data;
            console.log(message);
          });
        }
      }, {
        key: "addQuiz",
        value: function addQuiz() {
          console.log(this.newQuiz);
          this.assignService.addQuiz(this.newQuiz, this.id).subscribe(function (data) {
            var message = data;
            console.log(message);
          });
        }
      }]);

      return AddQuestionComponent;
    }();

    AddQuestionComponent.ɵfac = function AddQuestionComponent_Factory(t) {
      return new (t || AddQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_assignment_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    AddQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddQuestionComponent,
      selectors: [["app-add-question"]],
      decls: 72,
      vars: 13,
      consts: [[1, "mcq"], [2, "color", "red"], ["mcq", "ngForm"], [1, "group"], ["placeholder", "Question", "name", "question", "type", "text", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["question", "ngModel"], [1, "highlight"], [1, "bar"], ["name", "a", "placeholder", "A", "type", "text", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["a", "ngModel"], ["name", "b", "placeholder", "B", "type", "text", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["b", "ngModel"], ["name", "c", "placeholder", "C", "type", "text", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["c", "ngModel"], ["name", "d", "placeholder", "D", "type", "text", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["d", "ngModel"], ["placeholder", "Answer(a, b, c, d)", "name", "answer", "type", "text", "required", "", "minlength", "1", "maxlength", "1", 1, "input", 3, "ngModel", "ngModelChange"], ["answer", "ngModel"], ["type", "button", 1, "button", 3, "disabled", "click"], [1, "ripples", "buttonRipples"], [1, "ripplesCircle"], [1, "quiz"], [2, "color", "red", "padding", "10px"], ["addquiz", "ngForm"], ["type", "text", "name", "question", "required", "", "placeholder", "Question", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "answer", "placeholder", "answer", "required", "", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "button", "value", "Add Quiz", 1, "button", 3, "disabled", "click"], [1, "project"], ["addproject", "ngForm"], ["type", "text", "name", "statement", "placeholder", "Statement", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["statement", "ngModel"], ["type", "text", "name", "technology", "placeholder", "Technology", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["technology", "ngModel"], ["type", "button", "value", "Add Project", 1, "button", 3, "disabled", "click"]],
      template: function AddQuestionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MCQ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.newMcq.question = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.newMcq.a = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.newMcq.b = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.newMcq.c = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.newMcq.d = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.newMcq.answer = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddQuestionComponent_Template_button_click_36_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Add Mcq ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "QUIZ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "form", null, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 24, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_47_listener($event) {
            return ctx.newQuiz.question = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 25, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_51_listener($event) {
            return ctx.newQuiz.answer = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddQuestionComponent_Template_input_click_55_listener() {
            return ctx.addQuiz();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "PROJECTS & ASSIGNMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "form", null, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_63_listener($event) {
            return ctx.newProject.statement = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_67_listener($event) {
            return ctx.newProject.technology = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddQuestionComponent_Template_input_click_71_listener() {
            return ctx.addProject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newMcq.question);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newMcq.a);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newMcq.b);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newMcq.c);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newMcq.d);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newMcq.answer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newQuiz.question);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newQuiz.answer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r7.form.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newProject.statement);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newProject.technology);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r10.form.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.mcq[_ngcontent-%COMP%] {\r\n    background-color: rgb(214, 245, 214);\r\n    width: 100%;\r\n    height: 300px;\r\n}\r\n.quiz[_ngcontent-%COMP%] {\r\n    background-color: rgb(188, 252, 188);\r\n    width: 100%;\r\n    height: 300px;\r\n}\r\n.project[_ngcontent-%COMP%] {\r\n    background-color: rgb(143, 250, 143);\r\n    width: 100%;\r\n    height: 300px;\r\n}\r\n.group[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n    padding-top: 15px;\r\n    color: black;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    word-spacing: 10px;\r\n    line-height: 5px;\r\n    \r\n}\r\n.input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    font-size: 16px;\r\n    color: rgb(10, 10, 10);\r\n    border: none;\r\n    border-bottom: 1px solid #fff;\r\n    outline: none;\r\n    background: transparent;\r\n  }\r\n.button[_ngcontent-%COMP%] {\r\n    color: rgb(127, 127, 250);\r\n    margin-left: 30px;\r\n    width: 100px;\r\n    height: 35px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1hc3NpZ25tZW50L2FkZC1xdWVzdGlvbi9hZGQtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCO0FBQ0Y7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1hc3NpZ25tZW50L2FkZC1xdWVzdGlvbi9hZGQtcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4ubWNxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDI0NSwgMjE0KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4ucXVpeiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg4LCAyNTIsIDE4OCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuLnByb2plY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MywgMjUwLCAxNDMpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbi5ncm91cCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgd29yZC1zcGFjaW5nOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDVweDtcclxuICAgIFxyXG59XHJcbi5pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbi5idXR0b24ge1xyXG4gICAgY29sb3I6IHJnYigxMjcsIDEyNywgMjUwKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-question',
          templateUrl: './add-question.component.html',
          styleUrls: ['./add-question.component.css']
        }]
      }], function () {
        return [{
          type: src_app_assignment_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-assignment/candidate-performance/candidate-performance.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/main-assignment/candidate-performance/candidate-performance.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: CandidatePerformanceComponent */

  /***/
  function srcAppMainAssignmentCandidatePerformanceCandidatePerformanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandidatePerformanceComponent", function () {
      return CandidatePerformanceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/assignment.service */
    "./src/app/assignment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");

    var CandidatePerformanceComponent = /*#__PURE__*/function () {
      function CandidatePerformanceComponent(asignService, activatedRouter) {
        _classCallCheck(this, CandidatePerformanceComponent);

        this.asignService = asignService;
        this.activatedRouter = activatedRouter;
        this.columnDefs = [{
          headerName: 'Assign_name',
          field: 'assign_name'
        }, {
          headerName: 'User Name',
          field: 'author_name'
        }, {
          headerName: 'Mcq',
          field: 'mcq'
        }, {
          headerName: 'Project',
          field: 'project'
        }, {
          headerName: 'Quiz',
          field: 'quiz'
        }, {
          headerName: 'Total',
          field: 'total'
        }];
      }

      _createClass(CandidatePerformanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.activatedRouter.snapshot.paramMap.get("id");
        }
      }, {
        key: "ongridReady",
        value: function ongridReady(params) {
          // this.assignService.getAll().subscribe((data)=>{console.log(data);params.api.setRowData(data)});
          console.log(this.id + "gotit");
          this.asignService.getCandidate(this.id).subscribe(function (data) {
            params.api.setRowData(data);
          });
        }
      }]);

      return CandidatePerformanceComponent;
    }();

    CandidatePerformanceComponent.ɵfac = function CandidatePerformanceComponent_Factory(t) {
      return new (t || CandidatePerformanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    CandidatePerformanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CandidatePerformanceComponent,
      selectors: [["app-candidate-performance"]],
      decls: 2,
      vars: 3,
      consts: [[1, "ag-theme-balham", 2, "width", "1000px", "height", "500px", 3, "columnDefs", "enableSorting", "enableFilter", "gridReady"]],
      template: function CandidatePerformanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ag-grid-angular", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function CandidatePerformanceComponent_Template_ag_grid_angular_gridReady_1_listener($event) {
            return ctx.ongridReady($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefs)("enableSorting", true)("enableFilter", true);
        }
      },
      directives: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridAngular"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tYXNzaWdubWVudC9jYW5kaWRhdGUtcGVyZm9ybWFuY2UvY2FuZGlkYXRlLXBlcmZvcm1hbmNlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidatePerformanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-candidate-performance',
          templateUrl: './candidate-performance.component.html',
          styleUrls: ['./candidate-performance.component.css']
        }]
      }], function () {
        return [{
          type: src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__["AssignmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-assignment/main-assignment.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/main-assignment/main-assignment.component.ts ***!
    \**************************************************************/

  /*! exports provided: MainAssignmentComponent */

  /***/
  function srcAppMainAssignmentMainAssignmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainAssignmentComponent", function () {
      return MainAssignmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _about_assignment_about_assignment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./about-assignment/about-assignment.component */
    "./src/app/main-assignment/about-assignment/about-assignment.component.ts");
    /* harmony import */


    var _candidate_performance_candidate_performance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./candidate-performance/candidate-performance.component */
    "./src/app/main-assignment/candidate-performance/candidate-performance.component.ts");
    /* harmony import */


    var _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./questions/questions.component */
    "./src/app/main-assignment/questions/questions.component.ts");
    /* harmony import */


    var _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-question/add-question.component */
    "./src/app/main-assignment/add-question/add-question.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _assignment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../assignment.service */
    "./src/app/assignment.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MainAssignmentComponent_ng_container_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var MainAssignmentComponent = /*#__PURE__*/function () {
      function MainAssignmentComponent(activatedRouter, asignService, http, auth, router) {
        _classCallCheck(this, MainAssignmentComponent);

        this.activatedRouter = activatedRouter;
        this.asignService = asignService;
        this.http = http;
        this.auth = auth;
        this.router = router;
        this.dummyComponent = _about_assignment_about_assignment_component__WEBPACK_IMPORTED_MODULE_1__["AboutAssignmentComponent"];
      }

      _createClass(MainAssignmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.id = this.activatedRouter.snapshot.paramMap.get("id");
          this.asignService.getById(this.id).subscribe(function (data) {
            console.log(data);
            _this6.currentAssignment = data;
            console.log(_this6.currentAssignment);
          });
          this.userid = this.auth.getUserId();
        }
      }, {
        key: "change",
        value: function change(choice) {
          if (choice == "about") {
            this.dummyComponent = _about_assignment_about_assignment_component__WEBPACK_IMPORTED_MODULE_1__["AboutAssignmentComponent"];
          } else if (choice == "add") {
            this.dummyComponent = _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_4__["AddQuestionComponent"];
          } else if (choice == "performance") {
            this.dummyComponent = _candidate_performance_candidate_performance_component__WEBPACK_IMPORTED_MODULE_2__["CandidatePerformanceComponent"];
          } else if (choice == "questions") {
            this.dummyComponent = _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__["QuestionsComponent"];
          }
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _this7 = this;

          this.asignService.deleteAssignment(this.userid, this.id).subscribe(function (data) {
            _this7.router.navigate(["/admin"]);
          });
        }
      }]);

      return MainAssignmentComponent;
    }();

    MainAssignmentComponent.ɵfac = function MainAssignmentComponent_Factory(t) {
      return new (t || MainAssignmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_assignment_service__WEBPACK_IMPORTED_MODULE_6__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    MainAssignmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainAssignmentComponent,
      selectors: [["app-main-assignment"]],
      decls: 40,
      vars: 5,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "container", 2, "color", "rgb(195, 197, 184)"], [1, "row", "profile"], [1, "col-md-3"], [1, "profile-sidebar"], [1, "profile-usertitle"], [1, "profile-usertitle-name"], [1, "profile-usertitle-job"], [1, "profile-userbuttons"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "profile-usermenu"], [1, "nav"], [1, "active"], [3, "click"], [1, "glyphicon", "glyphicon-home"], [1, "glyphicon", "glyphicon-user"], [1, "glyphicon", "glyphicon-flag"], [1, "col-md-9"], [1, "profile-content"], [4, "ngComponentOutlet"]],
      template: function MainAssignmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainAssignmentComponent_Template_button_click_15_listener() {
            return ctx.change("about");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainAssignmentComponent_Template_button_click_17_listener() {
            return ctx["delete"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainAssignmentComponent_Template_a_click_22_listener() {
            return ctx.change("about");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainAssignmentComponent_Template_a_click_26_listener() {
            return ctx.change("questions");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Questions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainAssignmentComponent_Template_a_click_30_listener() {
            return ctx.change("performance");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Candidate Performance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainAssignmentComponent_Template_a_click_34_listener() {
            return ctx.change("add");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Add Questions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MainAssignmentComponent_ng_container_39_Template, 1, 0, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentAssignment.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentAssignment.topic, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Created by ", ctx.currentAssignment.author_name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentAssignment.duration, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx.dummyComponent);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgComponentOutlet"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    background: rgb(245, 245, 247);\r\n  }\r\n  \r\n  \r\n  \r\n  .profile[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n  \r\n  \r\n  \r\n  .profile-sidebar[_ngcontent-%COMP%] {\r\n    padding: 20px 0 10px 0;\r\n    background: rgb(248, 249, 250);\r\n  }\r\n  \r\n  .profile-userpic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    float: none;\r\n    margin: 0 auto;\r\n    width: 50%;\r\n    height: 50%;\r\n    border-radius: 50% !important;\r\n  }\r\n  \r\n  .profile-usertitle[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .profile-usertitle-name[_ngcontent-%COMP%] {\r\n    color: #5a7391;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    margin-bottom: 7px;\r\n  }\r\n  \r\n  .profile-usertitle-job[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    color: #5b9bd1;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .profile-userbuttons[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .profile-userbuttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-size: 11px;\r\n    font-weight: 600;\r\n    padding: 6px 15px;\r\n    margin-right: 5px;\r\n  }\r\n  \r\n  .profile-userbuttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #f0f4f7;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: none;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #93a3b5;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #fafcfd;\r\n    color: #5b9bd1;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n    border-bottom: none;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #5b9bd1;\r\n    background-color: #f6f9fb;\r\n    border-left: 2px solid #5b9bd1;\r\n    margin-left: -2px;\r\n  }\r\n  \r\n  \r\n  \r\n  .profile-content[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    background: #fff;\r\n    min-height: 460px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1hc3NpZ25tZW50L21haW4tYXNzaWdubWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDhCQUE4QjtFQUNoQzs7RUFFQSxzQkFBc0I7O0VBQ3RCO0lBQ0UsU0FBUztFQUNYOztFQUVBLG9CQUFvQjs7RUFDcEI7SUFDRSxzQkFBc0I7SUFDdEIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUdYLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixpQkFBaUI7RUFDbkI7O0VBRUEsb0JBQW9COztFQUNwQjtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1hc3NpZ25tZW50L21haW4tYXNzaWdubWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMjQ1LCAyNDcpO1xyXG4gIH1cclxuICBcclxuICAvKiBQcm9maWxlIGNvbnRhaW5lciAqL1xyXG4gIC5wcm9maWxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogUHJvZmlsZSBzaWRlYmFyICovXHJcbiAgLnByb2ZpbGUtc2lkZWJhciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ5LCAyNTApO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VycGljIGltZyB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtdXNlcnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXVzZXJ0aXRsZS1uYW1lIHtcclxuICAgIGNvbG9yOiAjNWE3MzkxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtdXNlcnRpdGxlLWpvYiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM1YjliZDE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtdXNlcmJ1dHRvbnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtdXNlcmJ1dHRvbnMgLmJ0biB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXVzZXJidXR0b25zIC5idG46bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgICAgIFxyXG4gIC5wcm9maWxlLXVzZXJtZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXVzZXJtZW51IHVsIGxpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmNGY3O1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VybWVudSB1bCBsaTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXVzZXJtZW51IHVsIGxpIGEge1xyXG4gICAgY29sb3I6ICM5M2EzYjU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VybWVudSB1bCBsaSBhIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXVzZXJtZW51IHVsIGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmNmZDtcclxuICAgIGNvbG9yOiAjNWI5YmQxO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VybWVudSB1bCBsaS5hY3RpdmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtdXNlcm1lbnUgdWwgbGkuYWN0aXZlIGEge1xyXG4gICAgY29sb3I6ICM1YjliZDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOWZiO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNWI5YmQxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFByb2ZpbGUgQ29udGVudCAqL1xyXG4gIC5wcm9maWxlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtaW4taGVpZ2h0OiA0NjBweDtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainAssignmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-assignment',
          templateUrl: './main-assignment.component.html',
          styleUrls: ['./main-assignment.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _assignment_service__WEBPACK_IMPORTED_MODULE_6__["AssignmentService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-assignment/questions/questions.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/main-assignment/questions/questions.component.ts ***!
    \******************************************************************/

  /*! exports provided: QuestionsComponent */

  /***/
  function srcAppMainAssignmentQuestionsQuestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function () {
      return QuestionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/assignment.service */
    "./src/app/assignment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function QuestionsComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsComponent_div_10_Template_h3_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.isMcqClicked = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MCQ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Question : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuestionsComponent_div_10_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.mcq.question = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " a : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuestionsComponent_div_10_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.mcq.a = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " b : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuestionsComponent_div_10_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.mcq.b = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " c : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuestionsComponent_div_10_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.mcq.c = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " d : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuestionsComponent_div_10_Template_input_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.mcq.d = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " answer : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuestionsComponent_div_10_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.mcq.answer = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsComponent_div_10_Template_button_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.deleteMcq();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsComponent_div_10_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.updateMcq();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.mcq.question);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.mcq.a);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.mcq.b);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.mcq.c);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.mcq.d);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.mcq.answer);
      }
    }

    function QuestionsComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsComponent_div_11_Template_h3_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.isProjectClicked = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PROJECT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Statement : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuestionsComponent_div_11_Template_textarea_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.project.statement = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Technology : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuestionsComponent_div_11_Template_textarea_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.project.technology = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsComponent_div_11_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.deleteProject();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsComponent_div_11_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.updateProject();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.project.statement);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.project.technology);
      }
    }

    var QuestionsComponent = /*#__PURE__*/function () {
      function QuestionsComponent(asignService, activatedRouter) {
        _classCallCheck(this, QuestionsComponent);

        this.asignService = asignService;
        this.activatedRouter = activatedRouter;
        this.isMcqClicked = false;
        this.isProjectClicked = false;
        this.columnDefs = [{
          headerName: 'ID',
          field: 'id'
        }, {
          headerName: 'Question',
          field: 'question'
        }, {
          headerName: 'A',
          field: 'a'
        }, {
          headerName: 'B',
          field: 'b'
        }, {
          headerName: 'C',
          field: 'c'
        }, {
          headerName: 'D',
          field: 'd'
        }, {
          headerName: 'Answer',
          field: 'answer'
        }];
        this.columsDefsProjet = [{
          headerName: 'Statement',
          field: 'statement',
          width: 200
        }, {
          headerName: 'Technology',
          field: 'technology'
        }];
        this.defaultColDef = {
          flex: 1,
          sortable: true,
          autoHeight: true,
          filter: true
        };
      }

      _createClass(QuestionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.activatedRouter.snapshot.paramMap.get("id");
        }
      }, {
        key: "mcqClicked",
        value: function mcqClicked(event) {
          console.log(event);
          this.mcq = event.data;
          console.log(this.mcq);
          this.isMcqClicked = true;
        }
      }, {
        key: "projectClicked",
        value: function projectClicked(event) {
          this.project = event.data;
          this.isProjectClicked = true;
        }
      }, {
        key: "ongridReady",
        value: function ongridReady(params) {
          console.log(params);
          this.gridapiMcq = params;
          console.log(this.id + "gotit");
          this.asignService.getMcqs(this.id).subscribe(function (data) {
            params.api.setRowData(data);
          });
        }
      }, {
        key: "onprojectgridReady",
        value: function onprojectgridReady(params) {
          this.gridapiproject = params;
          this.asignService.getProject(this.id).subscribe(function (data) {
            params.api.setRowData(data);
          });
        }
      }, {
        key: "deleteMcq",
        value: function deleteMcq() {
          var _this8 = this;

          this.asignService.deleteMcq(this.id, this.mcq.id).subscribe(function (message) {
            _this8.isMcqClicked = false;

            _this8.asignService.getMcqs(_this8.id).subscribe(function (data) {
              _this8.gridapiMcq.api.setRowData(data);
            });
          });
        }
      }, {
        key: "updateMcq",
        value: function updateMcq() {
          var _this9 = this;

          this.asignService.updateMcq(this.id, this.mcq.id, this.mcq).subscribe(function (data1) {
            _this9.isMcqClicked = false;

            _this9.asignService.getMcqs(_this9.id).subscribe(function (data) {
              _this9.gridapiMcq.api.setRowData(data);
            });
          });
        }
      }, {
        key: "deleteProject",
        value: function deleteProject() {
          var _this10 = this;

          this.asignService.deleteProject(this.id, this.project.id).subscribe(function (message) {
            console.log(message);
            _this10.isProjectClicked = false;

            _this10.asignService.getProject(_this10.id).subscribe(function (data) {
              _this10.gridapiproject.api.setRowData(data);
            });
          });
        }
      }, {
        key: "updateProject",
        value: function updateProject() {
          var _this11 = this;

          this.asignService.updateProject(this.id, this.project.id, this.project).subscribe(function (data1) {
            console.log(data1);
            _this11.isProjectClicked = false;

            _this11.asignService.getProject(_this11.id).subscribe(function (data) {
              _this11.gridapiproject.api.setRowData(data);
            });
          });
        }
      }]);

      return QuestionsComponent;
    }();

    QuestionsComponent.ɵfac = function QuestionsComponent_Factory(t) {
      return new (t || QuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    QuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuestionsComponent,
      selectors: [["app-questions"]],
      inputs: {
        AssignmentId: "AssignmentId"
      },
      decls: 12,
      vars: 9,
      consts: [[1, "ag-theme-balham", 2, "width", "1000px", "height", "200px", 3, "columnDefs", "enableSorting", "enableFilter", "rowClicked", "gridReady"], [1, "ag-theme-balham", 2, "width", "auto", "height", "200px", 3, "columnDefs", "enableSorting", "enableFilter", "defaultColDef", "rowClicked", "gridReady"], ["class", "pop-up", 4, "ngIf"], [1, "pop-up"], [1, "window"], [2, "position", "absolute", "top", "0", "right", "20px", "transform", "rotate(45deg)", "font-size", "large", "cursor", "pointer", 3, "click"], ["value", "mcq.question", "type", "text", "name", "question", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "a", "value", "mcq.a", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "b", "value", "mcq.b", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "c", "value", "mcq.c", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "d", "value", "mcq.d", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "answer", "value", "mcq.answer", 1, "input", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger", 2, "margin", "10px 15px", 3, "click"], [1, "btn", "btn-warning", 2, "margin", "10px 15px", 3, "click"], ["name", "statement", "cols", "25", "rows", "4", 1, "input", 3, "ngModel", "ngModelChange"], ["name", "technology", "cols", "25", "rows", "4", "value", "project.technology", 1, "input", 3, "ngModel", "ngModelChange"]],
      template: function QuestionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MCQ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ag-grid-angular", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClicked", function QuestionsComponent_Template_ag_grid_angular_rowClicked_4_listener($event) {
            return ctx.mcqClicked($event);
          })("gridReady", function QuestionsComponent_Template_ag_grid_angular_gridReady_4_listener($event) {
            return ctx.ongridReady($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PROJECTS & ASSIGNMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ag-grid-angular", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClicked", function QuestionsComponent_Template_ag_grid_angular_rowClicked_9_listener($event) {
            return ctx.projectClicked($event);
          })("gridReady", function QuestionsComponent_Template_ag_grid_angular_gridReady_9_listener($event) {
            return ctx.onprojectgridReady($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuestionsComponent_div_10_Template, 28, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuestionsComponent_div_11_Template, 17, 2, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefs)("enableSorting", true)("enableFilter", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columsDefsProjet)("enableSorting", true)("enableFilter", true)("defaultColDef", ctx.defaultColDef);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMcqClicked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isProjectClicked);
        }
      },
      directives: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridAngular"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: [".pop-up[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    position: absolute;\r\n    top: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.window[_ngcontent-%COMP%]{\r\n    background-color: rgb(59, 58, 58);\r\n    width: 65%;\r\n    height: 400px;\r\n    text-align: center;\r\n    display: block;\r\n    position: relative;\r\n    \r\n}\r\n\r\n.input[_ngcontent-%COMP%]{\r\n    color: white;\r\n    margin: 10px;\r\n    background: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1hc3NpZ25tZW50L3F1ZXN0aW9ucy9xdWVzdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL21haW4tYXNzaWdubWVudC9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wLXVwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ud2luZG93e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA1OCwgNTgpO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59XHJcbi5pbnB1dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-questions',
          templateUrl: './questions.component.html',
          styleUrls: ['./questions.component.css']
        }]
      }], function () {
        return [{
          type: src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__["AssignmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, {
        AssignmentId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/mcq.ts":
  /*!************************!*\
    !*** ./src/app/mcq.ts ***!
    \************************/

  /*! exports provided: Mcq */

  /***/
  function srcAppMcqTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mcq", function () {
      return Mcq;
    });

    var Mcq = function Mcq(question, a, b, c, d, answer) {
      _classCallCheck(this, Mcq);

      this.question = question;
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.answer = answer;
    };
    /***/

  },

  /***/
  "./src/app/my-assignments/admin-assessments/admin-assessments.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/my-assignments/admin-assessments/admin-assessments.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: AdminAssessmentsComponent */

  /***/
  function srcAppMyAssignmentsAdminAssessmentsAdminAssessmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAssessmentsComponent", function () {
      return AdminAssessmentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var src_app_assignment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/assignment.service */
    "./src/app/assignment.service.ts");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");

    var AdminAssessmentsComponent = /*#__PURE__*/function () {
      function AdminAssessmentsComponent(userService, activatedRouter, auth, assignService, router) {
        _classCallCheck(this, AdminAssessmentsComponent);

        this.userService = userService;
        this.activatedRouter = activatedRouter;
        this.auth = auth;
        this.assignService = assignService;
        this.router = router;
        this.columnDefsAdmin = [{
          headerName: 'Author',
          field: 'author_name'
        }, {
          headerName: 'ID',
          field: 'id'
        }, {
          headerName: 'Name',
          field: 'name'
        }, {
          headerName: 'Duration',
          field: 'duration'
        }];
      }

      _createClass(AdminAssessmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.activatedRouter.snapshot.paramMap.get("id")) {
            this.id = this.activatedRouter.snapshot.paramMap.get("id");
          } else {
            this.id = this.auth.getUserId();
          }
        }
      }, {
        key: "ongridReadyadmin",
        value: function ongridReadyadmin(params) {
          this.assignService.getAllOfAdmin(this.id).subscribe(function (data) {
            console.log(data);
            params.api.setRowData(data);
          });
        }
      }, {
        key: "getAssignProfile",
        value: function getAssignProfile(params) {
          var id = params.data.id;
          this.router.navigate(['/assignmentProfile/', id]);
        }
      }]);

      return AdminAssessmentsComponent;
    }();

    AdminAssessmentsComponent.ɵfac = function AdminAssessmentsComponent_Factory(t) {
      return new (t || AdminAssessmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_assignment_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AdminAssessmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminAssessmentsComponent,
      selectors: [["app-admin-assessments"]],
      decls: 2,
      vars: 3,
      consts: [[1, "ag-theme-balham", 2, "width", "1000px", "height", "300px", 3, "columnDefs", "enableSorting", "enableFilter", "rowClicked", "gridReady"]],
      template: function AdminAssessmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ag-grid-angular", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClicked", function AdminAssessmentsComponent_Template_ag_grid_angular_rowClicked_1_listener($event) {
            return ctx.getAssignProfile($event);
          })("gridReady", function AdminAssessmentsComponent_Template_ag_grid_angular_gridReady_1_listener($event) {
            return ctx.ongridReadyadmin($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefsAdmin)("enableSorting", true)("enableFilter", true);
        }
      },
      directives: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridAngular"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWFzc2lnbm1lbnRzL2FkbWluLWFzc2Vzc21lbnRzL2FkbWluLWFzc2Vzc21lbnRzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAssessmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-assessments',
          templateUrl: './admin-assessments.component.html',
          styleUrls: ['./admin-assessments.component.css']
        }]
      }], function () {
        return [{
          type: src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: src_app_assignment_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/new-registration/new-registration.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/new-registration/new-registration.component.ts ***!
    \****************************************************************/

  /*! exports provided: NewRegistrationComponent */

  /***/
  function srcAppNewRegistrationNewRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewRegistrationComponent", function () {
      return NewRegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../User */
    "./src/app/User.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NewRegistrationComponent_h6_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email Already Exists");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/login"];
    };

    var NewRegistrationComponent = /*#__PURE__*/function () {
      function NewRegistrationComponent(userService, router) {
        _classCallCheck(this, NewRegistrationComponent);

        this.userService = userService;
        this.router = router;
        this.newUser = new _User__WEBPACK_IMPORTED_MODULE_1__["User"]('', '', '', false, "", "");
        this.EmailExists = false;
      }

      _createClass(NewRegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createUser",
        value: function createUser() {
          var _this12 = this;

          console.log(this.newUser);
          this.userService.add(this.newUser).subscribe(function (data) {
            var message = data;
            console.log(message);

            if (message["jwt"] == "successful") {
              _this12.router.navigate(["/login"]);
            }
          }, function (error) {
            if (error.status == 500) {
              _this12.EmailExists = true;
            }
          });
        }
      }]);

      return NewRegistrationComponent;
    }();

    NewRegistrationComponent.ɵfac = function NewRegistrationComponent_Factory(t) {
      return new (t || NewRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    NewRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewRegistrationComponent,
      selectors: [["app-new-registration"]],
      decls: 16,
      vars: 9,
      consts: [["href", "https://fonts.googleapis.com/css?family=Open+Sans:400,300,700", "rel", "stylesheet", "type", "text/css"], ["href", "https://fonts.googleapis.com/css?family=Sofia", "rel", "stylesheet", "type", "text/css"], [1, "login"], ["register", "ngForm"], ["name", "username", "placeholder", "Username", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "email", "placeholder", "E-Mail Address", "type", "email", "required", "", 3, "ngModel", "ngModelChange"], ["style", "color: red; background: transparent;", 4, "ngIf"], ["name", "location", "placeholder", "Location", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "number", "placeholder", "Mobile Number", "type", "text", "minlength", "10", "maxlength", "10", "required", "", 3, "ngModel", "ngModelChange"], ["id", "pw", "name", "password", "placeholder", "Password", "type", "password", "required", "", "minlength", "8", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Register", "required", "", 1, "animated", 3, "disabled", "click"], [1, "forgot", 3, "routerLink"], [2, "color", "red", "background", "transparent"]],
      template: function NewRegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewRegistrationComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.newUser.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewRegistrationComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.newUser.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NewRegistrationComponent_h6_9_Template, 2, 0, "h6", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewRegistrationComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.newUser.location = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewRegistrationComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.newUser.number = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewRegistrationComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.newUser.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewRegistrationComponent_Template_input_click_13_listener() {
            return ctx.createUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Already have an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.EmailExists);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newUser.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    background: rgb(40, 49, 58);\r\n    color: #435160;\r\n    font-family: \"Open Sans\", sans-serif;\r\n  }\r\n  \r\n  h2[_ngcontent-%COMP%] {\r\n    color: #6D7781;\r\n    font-family: \"Sofia\", cursive;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-size: 3.6em;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%] {\r\n    color: #435160;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .login[_ngcontent-%COMP%] {\r\n    width: 350px;\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 50%;\r\n    margin-left: -175px;\r\n  }\r\n  \r\n  input[type=\"text\"][_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%] {\r\n    width: 350px;\r\n    padding: 20px 0px;\r\n    background: transparent;\r\n    border: 0;\r\n    border-bottom: 1px solid #435160;\r\n    outline: none;\r\n    color: #6D7781;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  input[type=checkbox][_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  \r\n  label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: absolute;\r\n    margin-right: 10px;\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 50%;\r\n    background: transparent;\r\n    content: \"\";\r\n    transition: all 0.3s ease-in-out;\r\n    cursor: pointer;\r\n    border: 3px solid #435160;\r\n  }\r\n  \r\n  #agree[_ngcontent-%COMP%]:checked    ~ label[for=agree][_ngcontent-%COMP%] {\r\n    background: #435160;\r\n  }\r\n  \r\n  input[type=\"submit\"][_ngcontent-%COMP%] {\r\n    background: #1FCE6D;\r\n    border: 0;\r\n    width: 350px;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    transition: background 0.3s ease-in-out;\r\n  }\r\n  \r\n  input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    background: #16aa56;\r\n    -webkit-animation-name: shake;\r\n            animation-name: shake;\r\n  }\r\n  \r\n  .forgot[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n    display: block;\r\n    font-size: 11px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .forgot[_ngcontent-%COMP%]:hover {\r\n    margin-top: 30px;\r\n    display: block;\r\n    font-size: 11px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    color: #6D7781;\r\n  }\r\n  \r\n  .agree[_ngcontent-%COMP%] {\r\n    padding: 30px 0px;\r\n    font-size: 12px;\r\n    text-indent: 25px;\r\n    line-height: 15px;\r\n  }\r\n  \r\n  [_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    color: #435160;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .animated[_ngcontent-%COMP%] {\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n  }\r\n  \r\n  @-webkit-keyframes shake {\r\n    0%, 100% {\r\n      transform: translateX(0);\r\n    }\r\n    10%, 30%, 50%, 70%, 90% {\r\n      transform: translateX(-10px);\r\n    }\r\n    20%, 40%, 60%, 80% {\r\n      transform: translateX(10px);\r\n    }\r\n  }\r\n  \r\n  @keyframes shake {\r\n    0%, 100% {\r\n      transform: translateX(0);\r\n    }\r\n    10%, 30%, 50%, 70%, 90% {\r\n      transform: translateX(-10px);\r\n    }\r\n    20%, 40%, 60%, 80% {\r\n      transform: translateX(10px);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJlZ2lzdHJhdGlvbi9uZXctcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUNBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0lBQ2YsdUNBQXVDO0VBQ3pDOztFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRTtNQUNFLHdCQUF3QjtJQUMxQjtJQUNBO01BQ0UsNEJBQTRCO0lBQzlCO0lBQ0E7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRjs7RUFWQTtJQUNFO01BQ0Usd0JBQXdCO0lBQzFCO0lBQ0E7TUFDRSw0QkFBNEI7SUFDOUI7SUFDQTtNQUNFLDJCQUEyQjtJQUM3QjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbmV3LXJlZ2lzdHJhdGlvbi9uZXctcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDQwLCA0OSwgNTgpO1xyXG4gICAgY29sb3I6ICM0MzUxNjA7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgY29sb3I6ICM2RDc3ODE7XHJcbiAgICBmb250LWZhbWlseTogXCJTb2ZpYVwiLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMuNmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzQzNTE2MDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNzVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQzNTE2MDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzZENzc4MTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM0MzUxNjA7XHJcbiAgfVxyXG4gIFxyXG4gICNhZ3JlZTpjaGVja2VkIH4gbGFiZWxbZm9yPWFncmVlXSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDM1MTYwO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIGJhY2tncm91bmQ6ICMxRkNFNkQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTZhYTU2O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlO1xyXG4gIH1cclxuICBcclxuICAuZm9yZ290IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuZm9yZ290OmhvdmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM2RDc3ODE7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZ3JlZSB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtaW5kZW50OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzQzNTE2MDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLmFuaW1hdGVkIHtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAgIDAlLCAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG4gICAgMTAlLCAzMCUsIDUwJSwgNzAlLCA5MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xyXG4gICAgfVxyXG4gICAgMjAlLCA0MCUsIDYwJSwgODAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-registration',
          templateUrl: './new-registration.component.html',
          styleUrls: ['./new-registration.component.css']
        }]
      }], function () {
        return [{
          type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/project.ts":
  /*!****************************!*\
    !*** ./src/app/project.ts ***!
    \****************************/

  /*! exports provided: project */

  /***/
  function srcAppProjectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "project", function () {
      return project;
    });

    var project = function project(statement, technology) {
      _classCallCheck(this, project);

      this.statement = statement;
      this.technology = technology;
    };
    /***/

  },

  /***/
  "./src/app/quiz.ts":
  /*!*************************!*\
    !*** ./src/app/quiz.ts ***!
    \*************************/

  /*! exports provided: quiz */

  /***/
  function srcAppQuizTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "quiz", function () {
      return quiz;
    });

    var quiz = function quiz(question, answer) {
      _classCallCheck(this, quiz);

      this.question = question;
      this.answer = answer;
    };
    /***/

  },

  /***/
  "./src/app/result.ts":
  /*!***************************!*\
    !*** ./src/app/result.ts ***!
    \***************************/

  /*! exports provided: result, split */

  /***/
  function srcAppResultTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "result", function () {
      return result;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "split", function () {
      return split;
    });

    var result = function result(assignment_id, mcq, quiz, project, assignment, total) {
      _classCallCheck(this, result);

      this.assignment_id = assignment_id;
      this.mcq = mcq;
      this.quiz = quiz;
      this.project = project;
      this.assignment = assignment;
      this.total = total;
    };

    var split = function split(build, process, testing) {
      _classCallCheck(this, split);

      this.build = build;
      this.process = process;
      this.testing = testing;
    };
    /***/

  },

  /***/
  "./src/app/sample/sample.component.ts":
  /*!********************************************!*\
    !*** ./src/app/sample/sample.component.ts ***!
    \********************************************/

  /*! exports provided: SampleComponent */

  /***/
  function srcAppSampleSampleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SampleComponent", function () {
      return SampleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../authRequest */
    "./src/app/authRequest.ts");
    /* harmony import */


    var _assignment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../assignment.service */
    "./src/app/assignment.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");

    function SampleComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "invalid");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SampleComponent = /*#__PURE__*/function () {
      function SampleComponent(assignService) {
        _classCallCheck(this, SampleComponent);

        this.assignService = assignService;
        this.auth = new _authRequest__WEBPACK_IMPORTED_MODULE_1__["authRequest"]("", "");
        this.first = "curent";
        this.columnDefsAdmin = [{
          headerName: 'Author',
          field: 'author_name',
          resizable: true
        }, {
          headerName: 'ID',
          field: 'id'
        }, {
          headerName: 'Name',
          field: 'name'
        }, {
          headerName: 'Duration',
          field: 'duration'
        }];
        this.defaultColDef = {
          flex: 1,
          editable: true,
          sortable: true,
          autoHeight: true,
          filter: true,
          width: 1000
        };
      }

      _createClass(SampleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit(value) {
          value.click();
          this.first = "changed"; //to click reset simaultanesouly

          if (this.auth.username == "rohith" && this.auth.password == "password") {
            console.log(" usernaem and password");
          } else {
            console.log(" invalid usernaem and password");
          }
        }
      }, {
        key: "rowEditingStarted",
        value: function rowEditingStarted(params) {
          console.log(params);
          console.log("started");
        }
      }, {
        key: "rowchanged",
        value: function rowchanged(params) {
          console.log(params);
          console.log("chaged");
        }
      }, {
        key: "ongridReadyadmin",
        value: function ongridReadyadmin(params) {
          this.gridApi = params.api;
          console.log(params);
          this.assignService.getAllOfAdmin(2).subscribe(function (data) {
            console.log(data);
            params.api.setRowData(data);
          });
        }
      }]);

      return SampleComponent;
    }();

    SampleComponent.ɵfac = function SampleComponent_Factory(t) {
      return new (t || SampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_assignment_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentService"]));
    };

    SampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SampleComponent,
      selectors: [["app-sample"]],
      decls: 17,
      vars: 15,
      consts: [["userForm", "ngForm"], ["type", "text", "placeholder", "Usename", "name", "username", "required", "", 3, "ngModel", "ngModelChange"], ["username", ""], ["type", "text", "minlength", "5", "placeholder", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["password", ""], ["type", "submit", 3, "click"], ["type", "reset"], ["reset", ""], [4, "ngIf"], ["allowContextMenuWithControlKey", "true", "getContextMenuItems", "true", "editType", "fullRow", 1, "ag-theme-balham", 2, "width", "1000px", "height", "300px", 3, "columnDefs", "enableSorting", "enableFilter", "defaultColDef", "gridReady"]],
      template: function SampleComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SampleComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.auth.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SampleComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.auth.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SampleComponent_Template_input_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            return ctx.submit(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SampleComponent_div_12_Template, 3, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ag-grid-angular", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function SampleComponent_Template_ag_grid_angular_gridReady_16_listener($event) {
            return ctx.ongridReadyadmin($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 11, _r0.value), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 13, ctx.auth), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.auth.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.auth.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r2.value, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.first, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefsAdmin)("enableSorting", true)("enableFilter", true)("defaultColDef", ctx.defaultColDef);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridAngular"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZS9zYW1wbGUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sample',
          templateUrl: './sample.component.html',
          styleUrls: ['./sample.component.css']
        }]
      }], function () {
        return [{
          type: _assignment_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search/search-results/search-results.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/search/search-results/search-results.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SearchResultsComponent */

  /***/
  function srcAppSearchSearchResultsSearchResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function () {
      return SearchResultsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/assignment.service */
    "./src/app/assignment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");

    var SearchResultsComponent = /*#__PURE__*/function () {
      function SearchResultsComponent(assignService, router, authSerive) {
        _classCallCheck(this, SearchResultsComponent);

        this.assignService = assignService;
        this.router = router;
        this.authSerive = authSerive;
        this.columnDefs = [{
          headerName: 'ID',
          field: 'id'
        }, {
          headerName: 'Name',
          field: 'name'
        }, {
          headerName: 'Author_id',
          field: 'author_name'
        }, {
          headerName: 'Duration',
          field: 'duration'
        }];
      }

      _createClass(SearchResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ongridReady",
        value: function ongridReady(params) {
          // this.assignService.getAll().subscribe((data)=>{console.log(data);params.api.setRowData(data)});
          console.log("kadkjsj");
          this.assignService.getAll().subscribe(function (data) {
            params.api.setRowData(data);
          });
        }
      }, {
        key: "getAssignProfile",
        value: function getAssignProfile(params) {
          if (this.authSerive.isAutenticated()) {
            var id = params.data.id;
            this.router.navigate(['/assignmentProfile/', id]);
          } else {
            var _id = params.data.id;
            this.router.navigate(['/takeTest/', _id]);
          }
        }
      }]);

      return SearchResultsComponent;
    }();

    SearchResultsComponent.ɵfac = function SearchResultsComponent_Factory(t) {
      return new (t || SearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    SearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchResultsComponent,
      selectors: [["app-search-results"]],
      decls: 2,
      vars: 3,
      consts: [[2, "padding", "20px"], [1, "ag-theme-balham", 2, "width", "auto", "height", "500px", 3, "columnDefs", "enableSorting", "enableFilter", "rowClicked", "gridReady"]],
      template: function SearchResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ag-grid-angular", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClicked", function SearchResultsComponent_Template_ag_grid_angular_rowClicked_1_listener($event) {
            return ctx.getAssignProfile($event);
          })("gridReady", function SearchResultsComponent_Template_ag_grid_angular_gridReady_1_listener($event) {
            return ctx.ongridReady($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx.columnDefs)("enableSorting", true)("enableFilter", true);
        }
      },
      directives: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2gtcmVzdWx0cy9zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-results',
          templateUrl: './search-results.component.html',
          styleUrls: ['./search-results.component.css']
        }]
      }], function () {
        return [{
          type: src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__["AssignmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _login_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../login-service.service */
    "./src/app/login-service.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-results/search-results.component */
    "./src/app/search/search-results/search-results.component.ts");

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(log, auth, router) {
        _classCallCheck(this, SearchComponent);

        this.log = log;
        this.auth = auth;
        this.router = router;
        this.search = "";
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSearch",
        value: function onSearch(text) {
          this.search = text;
          console.log("search selected" + this.search);
        }
      }, {
        key: "profile",
        value: function profile() {
          var id = this.auth.getUserId();
          console.log(id);
          this.router.navigate(['/profile/', id]);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.log.logout();
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service_service__WEBPACK_IMPORTED_MODULE_1__["LoginServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 22,
      vars: 0,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.1.0/css/all.css", "integrity", "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt", "crossorigin", "anonymous"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-10", "col-lg-8"], [1, "card", "card-sm"], [1, "card-body", "row", "no-gutters", "align-items-center"], [1, "col-auto"], [1, "fas", "fa-search", "h4", "text-body"], [1, "col"], ["type", "search", "name", "Search", "placeholder", "Sorry! I do Nothing", 1, "form-control", "form-control-lg", "form-control-borderless"], ["Search", ""], ["type", "submit", 1, "btn", "btn-lg", "btn-success", 3, "click"], ["id", "profileButton", 1, "btn", "btn-dark", 3, "click"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            return ctx.onSearch(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_16_listener() {
            return ctx.profile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_18_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-search-results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_5__["SearchResultsComponent"]],
      styles: [".form-control-borderless[_ngcontent-%COMP%] {\r\n    border: none;\r\n}\r\n\r\n.form-control-borderless[_ngcontent-%COMP%]:hover, .form-control-borderless[_ngcontent-%COMP%]:active, .form-control-borderless[_ngcontent-%COMP%]:focus {\r\n    border: none;\r\n    outline: none;\r\n    box-shadow: none;\r\n}\r\n\r\n#profileButton[_ngcontent-%COMP%]{\r\n    align-self: end;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wtYm9yZGVybGVzcyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtYm9yZGVybGVzczpob3ZlciwgLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmFjdGl2ZSwgLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmZvY3VzIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4jcHJvZmlsZUJ1dHRvbntcclxuICAgIGFsaWduLXNlbGY6IGVuZDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.css']
        }]
      }], function () {
        return [{
          type: _login_service_service__WEBPACK_IMPORTED_MODULE_1__["LoginServiceService"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/take-test/take-test.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/take-test/take-test.component.ts ***!
    \**************************************************/

  /*! exports provided: TakeTestComponent */

  /***/
  function srcAppTakeTestTakeTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TakeTestComponent", function () {
      return TakeTestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../result */
    "./src/app/result.ts");
    /* harmony import */


    var _assignment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../assignment.service */
    "./src/app/assignment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TakeTestComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name :", ctx_r0.currentAssignment.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pre-Requisites : ", ctx_r0.currentAssignment.pre_requisites, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Descriptions : ", ctx_r0.currentAssignment.descriptions, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Duration : ", ctx_r0.currentAssignment.duration, "");
      }
    }

    function TakeTestComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Created By");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", ctx_r1.author.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx_r1.author.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Number: ", ctx_r1.author.number, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Location: ", ctx_r1.author.location, " ");
      }
    }

    var _c0 = function _c0(a1) {
      return ["/takeTest", a1, "test"];
    };

    function TakeTestComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Take Test");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.id));
      }
    }

    function TakeTestComponent_div_27_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TakeTestComponent_div_27_tr_12_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var i_r7 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.projectSubmit(i_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r6.statement);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r6.technology);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Marks:", ctx_r4.projectArray[i_r7], "");
      }
    }

    function TakeTestComponent_div_27_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PROJECT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Process : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 33, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "/100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Testing : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 35, 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "/100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Build : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 37, 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "/100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TakeTestComponent_div_27_div_13_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.projectsplitup(_r10.value, _r11.value, _r12.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TakeTestComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PROJECTS & ASSIGNMENTS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "STATEMENT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "TECHNOLOGY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "RESULTS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TakeTestComponent_div_27_tr_12_Template, 10, 3, "tr", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TakeTestComponent_div_27_div_13_Template, 22, 0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.projects);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isProjectClicked);
      }
    }

    var TakeTestComponent = /*#__PURE__*/function () {
      function TakeTestComponent(asignService, activatedRouter, userService, router, auth, assignService) {
        _classCallCheck(this, TakeTestComponent);

        this.asignService = asignService;
        this.activatedRouter = activatedRouter;
        this.userService = userService;
        this.router = router;
        this.auth = auth;
        this.assignService = assignService;
        this.isAboutAssessmentLoaded = false;
        this.isAuthorLoaded = false;
        this.testTaken = false;
        this.isProjectLoaded = false;
        this.isProjectClicked = false;
        this.currentProjectIndex = null;
      }

      _createClass(TakeTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.id = this.activatedRouter.snapshot.paramMap.get("id");
          this.userID = this.auth.getUserId();
          this.asignService.getById(this.id).subscribe(function (data) {
            console.log(data);
            _this13.currentAssignment = data;
            _this13.isAboutAssessmentLoaded = true;

            _this13.assignService.mcqMark.subscribe(function (mark) {
              _this13.marks = mark;
            });

            _this13.assignService.TakenTest.subscribe(function (data) {
              _this13.testTaken = data;
            });

            _this13.getAuthor();

            _this13.getProject();
          });
        }
      }, {
        key: "getAuthor",
        value: function getAuthor() {
          var _this14 = this;

          this.userService.getById(this.currentAssignment.user_id).subscribe(function (data) {
            _this14.author = data;
            _this14.isAuthorLoaded = true;
          });
        }
      }, {
        key: "projectSubmit",
        value: function projectSubmit(value) {
          this.isProjectClicked = true;
          this.currentProjectIndex = value; //  this.projectArray[value]=50
          //  
        }
      }, {
        key: "projectsplitup",
        value: function projectsplitup(p, t, b) {
          this.projectArray[this.currentProjectIndex] = (Number(p) + Number(t) + Number(b)) / 3;
        }
      }, {
        key: "getProject",
        value: function getProject() {
          var _this15 = this;

          this.asignService.getProject(this.id).subscribe(function (data) {
            _this15.projects = data;
            _this15.isProjectLoaded = true;
            _this15.projectArray = new Array(_this15.projects.length);
          });
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          var projectSum = 0;
          this.projectArray.forEach(function (data) {
            projectSum += data;
          });
          projectSum = projectSum / this.projectArray.length;
          var mcq;
          var total = (projectSum + mcq) / 2;
          this.newResult = new _result__WEBPACK_IMPORTED_MODULE_1__["result"](this.id, mcq, 0, projectSum, 0, total);
          console.log(this.newResult); // this.assignService.addResult(this.newResult,this.userID,this.id).subscribe((data)=>{
          //   console.log(data["jwt"])
          // })
        }
      }]);

      return TakeTestComponent;
    }();

    TakeTestComponent.ɵfac = function TakeTestComponent_Factory(t) {
      return new (t || TakeTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_assignment_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_assignment_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentService"]));
    };

    TakeTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TakeTestComponent,
      selectors: [["app-take-test"]],
      decls: 30,
      vars: 5,
      consts: [[1, "assesment-container"], ["class", "assessment-about", 4, "ngIf"], ["class", "assessment-author", 4, "ngIf"], [1, "tagline"], [2, "padding-top", "10px", "font-size", "28px", "font-weight", "600"], [1, "submission"], [1, "mcq"], [1, "mcq-about"], [2, "font-size", "25px", "font-weight", "600"], [1, "para"], [1, "mcqInstructions"], [1, "heading"], [2, "font-size", "20px", "font-weight", "700", "padding", "10px"], [1, "instruction-body", 2, "margin", "15px 15px"], ["class", "mcq-test", 4, "ngIf"], ["class", "project", 4, "ngIf"], [2, "padding", "10px", "margin-left", "45%", "margin-top", "50px", "margin-bottom", "30px", 3, "click"], [1, "assessment-about"], [1, "assessment-about-header"], [1, "assessment-about-details"], [1, "assessment-author"], [1, "header"], [1, "author-details"], [1, "mcq-test"], [2, "text-decoration", "none", "color", "green", "font-size", "20px", "font-weight", "800", 3, "routerLink"], [1, "project"], [1, "project-box"], [2, "font-size", "25px", "font-weight", "600", "margin-bottom", "20px"], [4, "ngFor", "ngForOf"], ["class", "projectSubmit", 4, "ngIf"], [2, "padding", "10px", "border-radius", "10px", 3, "click"], [1, "projectSubmit"], [1, "projectSubmit-contents"], ["type", "number", "name", "process", 1, "input"], ["p", ""], ["type", "number", "name", "testing", 1, "input"], ["t", ""], ["type", "number", "name", "build", 1, "input"], ["b", ""], [2, "margin", "10px 15px", 3, "click"]],
      template: function TakeTestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TakeTestComponent_div_1_Template, 11, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TakeTestComponent_div_2_Template, 12, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Read the instructions and Take the Test ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mcq");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "No Time Limit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Instructions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Test can be taken only once");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "The test will start once you click on \"Take Test\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Question once answered, cannot be change");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TakeTestComponent_div_26_Template, 3, 3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TakeTestComponent_div_27_Template, 14, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TakeTestComponent_Template_button_click_28_listener() {
            return ctx.onAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Submit Assessment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAboutAssessmentLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthorLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Marks Obtained : ", ctx.marks, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.testTaken);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isProjectLoaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0 0 0 0;\r\n    padding: 0 0 0 0;\r\n    background-color: rgb(211, 210, 210);\r\n}\r\n.assesment-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.assessment-about[_ngcontent-%COMP%], .assessment-author[_ngcontent-%COMP%]{\r\n    margin: 20px 20px;\r\n    position: relative;\r\n    height: 300px;\r\n    width: 40%;\r\n    border: 2px black solid;\r\n    text-align: center;\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.assessment-about-header[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 20px;\r\n    font-size: 24px;\r\n    font-weight: 900;\r\n    background-color: transparent;\r\n    \r\n}\r\n.assessment-about-details[_ngcontent-%COMP%], .author-details[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 50px;\r\n    line-height: 40px;\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    background-color: transparent;\r\n    \r\n}\r\n\r\n.tagline[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 50px;\r\n    border-top: 2px black solid;\r\n    border-bottom: 2px black solid;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n.mcq[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 200px;\r\n    align-items: center;\r\n    position: relative;\r\n    background-color: transparent;\r\n}\r\n.mcq[_ngcontent-%COMP%]   .mcq-about[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 250px;\r\n    margin-left: 200px;\r\n    height: 150px;\r\n    top: 20px;\r\n    border: 2px solid black;\r\n    text-align: center;\r\n}\r\n.mcq[_ngcontent-%COMP%]   .mcq-about[_ngcontent-%COMP%]   .para[_ngcontent-%COMP%]{\r\n    line-height: 25px;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n}\r\n.mcqInstructions[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    right: 300px;\r\n    top:20px;\r\n    border: 2px solid black;\r\n    width: 500px;\r\n    height: 150px ;\r\n}\r\n.mcq[_ngcontent-%COMP%]   .mcq-test[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 120px;\r\n    margin-left: 290px;\r\n\r\n}\r\n.project[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: 200px;\r\n    border: 2px solid black;\r\n    width: 78%;\r\n    height: 500px;\r\n    position: relative;\r\n}\r\n.project-box[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    margin-top: 30px;\r\n    margin-left: 30px;\r\n}\r\n.project-box[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\n    border: 1px solid black;\r\n    padding: 20px;\r\n    border-collapse: collapse;\r\n\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(24, 163, 24);\r\n     color: white;\r\n}\r\n.projectSubmit[_ngcontent-%COMP%]{\r\n    float: right;\r\n    border: 2px solid rgb(5, 5, 5);\r\n    margin-top: 140px;\r\n    margin-right: 50px;\r\n    text-align: center;\r\n    width: 200px;\r\n    height: 220px;\r\n}\r\n.input[_ngcontent-%COMP%]{\r\n    border-radius: 2px;\r\n    width: 70px;\r\n    margin: 10px;\r\n    background: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFrZS10ZXN0L3Rha2UtdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0M7SUFDRyxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNkJBQTZCOztBQUVqQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw2QkFBNkI7O0FBRWpDO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFFQSxnQkFBZ0I7QUFJaEI7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHlCQUF5Qjs7QUFFN0I7QUFDQTtJQUNJLGtDQUFrQztLQUNqQyxZQUFZO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC90YWtlLXRlc3QvdGFrZS10ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMCAwIDAgMDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCAyMTAsIDIxMCk7XHJcbn1cclxuLmFzc2VzbWVudC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYXNzZXNzbWVudC1hYm91dCwgLmFzc2Vzc21lbnQtYXV0aG9ye1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiAuYXNzZXNzbWVudC1hYm91dC1oZWFkZXIsIC5oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBcclxufVxyXG4uYXNzZXNzbWVudC1hYm91dC1kZXRhaWxzLCAuYXV0aG9yLWRldGFpbHN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIFxyXG59XHJcblxyXG4vKiB0ZXN0IHJlc3VsdHMgKi9cclxuLnRhZ2xpbmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci10b3A6IDJweCBibGFjayBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBibGFjayBzb2xpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBzdWJtaXNzaW9ucyAqL1xyXG5cclxuXHJcblxyXG4ubWNxe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubWNxIC5tY3EtYWJvdXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1jcSAubWNxLWFib3V0IC5wYXJhe1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5tY3FJbnN0cnVjdGlvbnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzAwcHg7XHJcbiAgICB0b3A6MjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweCA7XHJcbn1cclxuLm1jcSAubWNxLXRlc3R7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI5MHB4O1xyXG5cclxufVxyXG4ucHJvamVjdHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogNzglO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucHJvamVjdC1ib3h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuLnByb2plY3QtYm94IHRhYmxlLHRyLHRke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTYzLCAyNCk7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5wcm9qZWN0U3VibWl0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDUsIDUsIDUpO1xyXG4gICAgbWFyZ2luLXRvcDogMTQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG59XHJcblxyXG5cclxuLmlucHV0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TakeTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-take-test',
          templateUrl: './take-test.component.html',
          styleUrls: ['./take-test.component.css']
        }]
      }], function () {
        return [{
          type: _assignment_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _assignment_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/take-test/test/test.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/take-test/test/test.component.ts ***!
    \**************************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppTakeTestTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/assignment.service */
    "./src/app/assignment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TestComponent_button_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_button_30_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestComponent_button_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_button_31_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.submit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var TestComponent = /*#__PURE__*/function () {
      function TestComponent(assignService, route, router) {
        _classCallCheck(this, TestComponent);

        this.assignService = assignService;
        this.route = route;
        this.router = router;
        this.index = 0;
        this.mark = 0;
        this.endReached = false;
      }

      _createClass(TestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.id = this.route.snapshot.paramMap.get("id");
          this.assignService.getMcqs(this.id).subscribe(function (data) {
            _this16.mcqList = data;
            console.log(_this16.mcqList);

            _this16.test();
          });
        }
      }, {
        key: "test",
        value: function test() {
          if (this.mcqList.length > 0) {
            this.currentMcq = this.mcqList[this.index];
          } else {
            console.log("select a valid assessment");
          }
        }
      }, {
        key: "next",
        value: function next() {
          if (this.index < this.mcqList.length) {
            if (this.index == this.mcqList.length - 2) {
              this.endReached = true;
            }

            this.index += 1;
            console.log(this.index, this.mcqList.length);
            this.currentMcq = this.mcqList[this.index];
          }
        }
      }, {
        key: "select",
        value: function select(value) {
          console.log(value);

          if (this.currentMcq.answer == value) {
            console.log("correct");
            this.mark += 1;
            this.next();
          } else {
            console.log("wrong");
            this.next();
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          var percent = this.mark * 100 / this.mcqList.length;
          this.assignService.updateMark(percent);
          console.log(this.mark);
          this.router.navigate(["/takeTest", this.id]);
        }
      }]);

      return TestComponent;
    }();

    TestComponent.ɵfac = function TestComponent_Factory(t) {
      return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestComponent,
      selectors: [["app-test"]],
      decls: 32,
      vars: 7,
      consts: [[1, "nav"], [1, "name"], [1, "cancel"], [2, "padding", "10px"], [1, "mcq"], [1, "question"], [1, "options"], [1, "option", 3, "click"], ["type", "radio", "value", "a", "name", "answer"], ["a", ""], ["type", "radio", "value", "b", "name", "answer"], ["b", ""], ["type", "radio", "value", "c", "name", "answer"], ["c", ""], ["type", "radio", "value", "d", "name", "answer"], ["d", ""], [1, "next"], [3, "click", 4, "ngIf"], [3, "click"]],
      template: function TestComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Assessment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_Template_div_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            return ctx.select(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_Template_div_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

            return ctx.select(_r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_Template_div_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            return ctx.select(_r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_Template_div_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            return ctx.select(_r3.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TestComponent_button_30_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TestComponent_button_31_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentMcq.question);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentMcq.a, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentMcq.b, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentMcq.c, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentMcq.d, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.endReached);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.endReached);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]{\r\n    \r\n    width: 100%;\r\n    height: 50px;\r\n    background-color: rgb(202, 202, 202);\r\n}\r\n\r\n.name[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    font-size: 28px;\r\n}\r\n\r\n.cancel[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n    display: inline-block;\r\n}\r\n\r\n.mcq[_ngcontent-%COMP%] {\r\n    margin: 50px auto;\r\n    width: 1200px;\r\n    height: 420px;\r\n    align-content: center;\r\n\r\n}\r\n\r\n.mcq[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]{\r\n    background-color: rgb(29, 170, 88);\r\n    color: white;\r\n    width: 100%;\r\n    height: 100px;\r\n    text-align: center;\r\n    padding-top: 30px;\r\n    font-size: 25px;\r\n    font-weight: 400;\r\n    border-radius:10px 10px 10px 10px;\r\n    \r\n}\r\n\r\n.mcq[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    align-items: center;\r\n}\r\n\r\n.mcq[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]{\r\n \r\n    width: 45%;\r\n    margin: 10px 10px ; \r\n    background-color: rgb(230, 228, 228);\r\n    height: 100px;\r\n    display: inline-block;\r\n    text-align: center;\r\n    padding-top: 25px;\r\n    cursor: pointer;\r\n    border-radius:10px 10px 10px 10px;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    \r\n}\r\n\r\n.mcq[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n}\r\n\r\n.option[_ngcontent-%COMP%]:hover{\r\n    background-color:rgb(46, 46, 45);\r\n    color:  rgb(29, 170, 88);\r\n    border: 2px solid rgb(29, 170, 88);\r\n}\r\n\r\n.option[_ngcontent-%COMP%]::-moz-selection{\r\n    background-color: aqua;\r\n}\r\n\r\n.option[_ngcontent-%COMP%]::selection{\r\n    background-color: aqua;\r\n}\r\n\r\n.next[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    margin: 0 auto;\r\n   position: relative;\r\n   \r\n}\r\n\r\n.next[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background-color: rgb(29, 170, 88);\r\n    border-radius: 10px;\r\n    width: 100px;\r\n    font-size: larger;\r\n    color: white;\r\n    padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFrZS10ZXN0L3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixhQUFhO0lBQ2IscUJBQXFCOztBQUV6Qjs7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUNBQWlDOztBQUVyQzs7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGdCQUFnQjs7QUFFcEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFGQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0dBQ2Ysa0JBQWtCOztBQUVyQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Rha2UtdGVzdC90ZXN0L3Rlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubmF2e1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKTtcclxufVxyXG4ubmFtZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG4uY2FuY2Vse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5tY3Ege1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuLm1jcSAucXVlc3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDE3MCwgODgpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgXHJcbn1cclxuLm1jcSAub3B0aW9uc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1jcSAub3B0aW9ucyAub3B0aW9ue1xyXG4gXHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIyOCwgMjI4KTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBcclxufVxyXG4ubWNxIC5vcHRpb25zIC5vcHRpb24gaW5wdXR7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5vcHRpb246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0NiwgNDYsIDQ1KTtcclxuICAgIGNvbG9yOiAgcmdiKDI5LCAxNzAsIDg4KTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyOSwgMTcwLCA4OCk7XHJcbn1cclxuXHJcbi5vcHRpb246OnNlbGVjdGlvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbn1cclxuXHJcbi5uZXh0e1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgXHJcbn1cclxuXHJcbi5uZXh0IGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTcwLCA4OCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-test',
          templateUrl: './test.component.html',
          styleUrls: ['./test.component.css']
        }]
      }], function () {
        return [{
          type: src_app_assignment_service__WEBPACK_IMPORTED_MODULE_1__["AssignmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-profile/my-assignments/my-assignments.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/user-profile/my-assignments/my-assignments.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MyAssignmentsComponent */

  /***/
  function srcAppUserProfileMyAssignmentsMyAssignmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAssignmentsComponent", function () {
      return MyAssignmentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var src_app_assignment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/assignment.service */
    "./src/app/assignment.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");

    function MyAssignmentsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ag-grid-angular", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function MyAssignmentsComponent_div_0_Template_ag_grid_angular_gridReady_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.ongridReady($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx_r0.columnDefs)("enableSorting", true)("enableFilter", true);
      }
    }

    function MyAssignmentsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MY ASSESSMENTS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ag-grid-angular", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClicked", function MyAssignmentsComponent_div_1_Template_ag_grid_angular_rowClicked_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.getAssignProfile($event);
        })("gridReady", function MyAssignmentsComponent_div_1_Template_ag_grid_angular_gridReady_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.ongridReadyadmin($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnDefs", ctx_r1.columnDefsAdmin)("enableSorting", true)("enableFilter", true);
      }
    }

    var MyAssignmentsComponent = /*#__PURE__*/function () {
      function MyAssignmentsComponent(userService, activatedRouter, auth, assignService, router) {
        _classCallCheck(this, MyAssignmentsComponent);

        this.userService = userService;
        this.activatedRouter = activatedRouter;
        this.auth = auth;
        this.assignService = assignService;
        this.router = router;
        this.isAdmin = false;
        this.columnDefs = [{
          headerName: 'Assign_name',
          field: 'assign_name'
        }, {
          headerName: 'Author Name',
          field: 'author_name'
        }, {
          headerName: 'Mcq',
          field: 'mcq'
        }, {
          headerName: 'Project',
          field: 'project'
        }, {
          headerName: 'Quiz',
          field: 'quiz'
        }, {
          headerName: 'Total',
          field: 'total'
        }];
        this.columnDefsAdmin = [{
          headerName: 'Author',
          field: 'author_name'
        }, {
          headerName: 'ID',
          field: 'id'
        }, {
          headerName: 'Name',
          field: 'name'
        }, {
          headerName: 'Duration',
          field: 'duration'
        }];
      }

      _createClass(MyAssignmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.activatedRouter.snapshot.paramMap.get("id")) {
            this.id = this.activatedRouter.snapshot.paramMap.get("id");
          } else {
            this.isAdmin = true;
            this.id = this.auth.getUserId();
          }
        }
      }, {
        key: "ongridReady",
        value: function ongridReady(params) {
          console.log(this.isAdmin + this.id);
          this.userService.getAssignments(this.id).subscribe(function (data) {
            console.log(data);
            params.api.setRowData(data);
          });
        }
      }, {
        key: "ongridReadyadmin",
        value: function ongridReadyadmin(params) {
          console.log(this.id + this.isAdmin);
          this.assignService.getAllOfAdmin(this.id).subscribe(function (data) {
            console.log(data);
            params.api.setRowData(data);
          });
        }
      }, {
        key: "getAssignProfile",
        value: function getAssignProfile(params) {
          console.log(params);
          var id = params.data.id;
          this.router.navigate(['/assignmentProfile/', id]);
        }
      }]);

      return MyAssignmentsComponent;
    }();

    MyAssignmentsComponent.ɵfac = function MyAssignmentsComponent_Factory(t) {
      return new (t || MyAssignmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_assignment_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    MyAssignmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyAssignmentsComponent,
      selectors: [["app-my-assignments"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "ag-theme-balham", 2, "width", "1000px", "height", "300px", 3, "columnDefs", "enableSorting", "enableFilter", "gridReady"], [1, "ag-theme-balham", 2, "width", "1000px", "height", "300px", 3, "columnDefs", "enableSorting", "enableFilter", "rowClicked", "gridReady"]],
      template: function MyAssignmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyAssignmentsComponent_div_0_Template, 2, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyAssignmentsComponent_div_1_Template, 4, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridAngular"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS9teS1hc3NpZ25tZW50cy9teS1hc3NpZ25tZW50cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAssignmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-assignments',
          templateUrl: './my-assignments.component.html',
          styleUrls: ['./my-assignments.component.css']
        }]
      }], function () {
        return [{
          type: src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: src_app_assignment_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-profile/overview/overview.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/user-profile/overview/overview.component.ts ***!
    \*************************************************************/

  /*! exports provided: OverviewComponent */

  /***/
  function srcAppUserProfileOverviewOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverviewComponent", function () {
      return OverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3-shape */
    "./node_modules/d3-shape/src/index.js");
    /* harmony import */


    var src_app_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/User */
    "./src/app/User.ts");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function OverviewComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Role: Developer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverviewComponent_div_0_div_1_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.edit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", ctx_r3.currentUser.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx_r3.currentUser.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Location: ", ctx_r3.currentUser.location, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Number: ", ctx_r3.currentUser.number, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Assignment Completed: ", ctx_r3.count, "");
      }
    }

    function OverviewComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", null, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Username: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_div_0_div_2_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.currentUser.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_div_0_div_2_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.currentUser.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Location ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_div_0_div_2_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.currentUser.location = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Mobile Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_div_0_div_2_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.currentUser.number = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_div_0_div_2_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.currentUser.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverviewComponent_div_0_div_2_Template_input_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.currentUser.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.currentUser.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.currentUser.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.currentUser.number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.currentUser.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r7.form.pristine || _r7.form.invalid);
      }
    }

    function OverviewComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OverviewComponent_div_0_div_1_Template, 16, 5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OverviewComponent_div_0_div_2_Template, 21, 6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-charts-pie-grid", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function OverviewComponent_div_0_Template_ngx_charts_pie_grid_select_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.onSelect($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.IsEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.IsEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx_r0.viewpie)("scheme", ctx_r0.colorScheme)("results", ctx_r0.percentile)("designatedTotal", 100)("animations", true);
      }
    }

    function OverviewComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-charts-bar-vertical", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function OverviewComponent_div_1_Template_ngx_charts_bar_vertical_select_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.onSelect($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx_r1.view)("scheme", ctx_r1.colorScheme)("results", ctx_r1.VerticalBar)("xAxis", ctx_r1.xAxis)("yAxis", ctx_r1.yAxis)("legend", ctx_r1.legend)("showXAxisLabel", ctx_r1.showXAxisLabel)("showYAxisLabel", ctx_r1.showYAxisLabel)("xAxisLabel", ctx_r1.xAxisLabel)("yAxisLabel", ctx_r1.yAxisLabel);
      }
    }

    function OverviewComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-charts-bar-vertical-2d", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function OverviewComponent_div_2_Template_ngx_charts_bar_vertical_2d_select_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.onSelect($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx_r2.viewstcked)("scheme", ctx_r2.colorSchemestacked)("results", ctx_r2.stackedVertical)("xAxis", ctx_r2.xAxis)("yAxis", ctx_r2.yAxis)("legend", ctx_r2.legend)("showXAxisLabel", ctx_r2.showXAxisLabel)("showYAxisLabel", ctx_r2.showYAxisLabel)("xAxisLabel", ctx_r2.xAxisLabel)("yAxisLabel", ctx_r2.yAxisLabel);
      }
    }

    var OverviewComponent = /*#__PURE__*/function () {
      function OverviewComponent(userSevice, activatedRouter, auth) {
        _classCallCheck(this, OverviewComponent);

        this.userSevice = userSevice;
        this.activatedRouter = activatedRouter;
        this.auth = auth;
        this.total = 0;
        this.IsEdit = true;
        this.count = 0;
        this.stackedVertical = [];
        this.VerticalBar = [];
        this.viewstcked = [450, 300];
        this.viewpie = [250, 200];
        this.view = [450, 300];
        this.legend = true;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Assignments';
        this.yAxisLabel = 'Score';
        this.timeline = false;
        this.isdataloaded = false;
        this.autoScale = true; // curve: any =  shape.line().curve(shape.curveBundle.beta(0.5));

        this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_1__["line"];
        this.colorScheme = {
          domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        this.colorSchemestacked = {
          domain: ['#aae3f5', '#a8385d', '#fcd303', '#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5']
        };
      }

      _createClass(OverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          if (this.activatedRouter.snapshot.paramMap.get("id")) {
            this.id = this.activatedRouter.snapshot.paramMap.get("id");
          } else {
            this.id = this.auth.getUserId();
          }

          this.userSevice.getById(this.id).subscribe(function (data) {
            _this17.currentUser = data;
          });
          this.userSevice.getAssignments(this.id).subscribe(function (data) {
            var _iterator = _createForOfIteratorHelper(data),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var d = _step.value;
                _this17.total = _this17.total + d.total;

                _this17.VerticalBar.push({
                  name: d.assign_name,
                  value: d.total
                });

                _this17.stackedVertical.push({
                  name: d.assign_name,
                  series: [{
                    name: "mcq",
                    value: d.mcq
                  }, // {
                  //   name:"assignment",
                  //   value:d.assignment
                  // },
                  {
                    name: "quiz",
                    value: d.quiz
                  }, {
                    name: "project",
                    value: d.project
                  }]
                });

                console.log(_this17.total);
                _this17.count = _this17.count + 1;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _this17.total = _this17.total / _this17.count;
            console.log(_this17.total);
            console.log(_this17.stackedVertical);
            _this17.percentile = [{
              "name": "Percentile",
              "value": _this17.total
            }];
            _this17.isdataloaded = true;
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(event) {
          console.log(event);
        }
      }, {
        key: "edit",
        value: function edit() {
          this.IsEdit = false;
        }
      }, {
        key: "save",
        value: function save() {
          console.log(this.currentUser);
          var user = new src_app_User__WEBPACK_IMPORTED_MODULE_2__["User"](this.currentUser.name, this.currentUser.password, this.currentUser.email, this.currentUser.admin, this.currentUser.location, this.currentUser.number);
          console.log(user);
          this.userSevice.updateUser(this.id, user).subscribe(function (data) {
            console.log(data["jwt"]);
          });
        }
      }]);

      return OverviewComponent;
    }();

    OverviewComponent.ɵfac = function OverviewComponent_Factory(t) {
      return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
    };

    OverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OverviewComponent,
      selectors: [["app-overview"]],
      decls: 3,
      vars: 3,
      consts: [["class", "bar", 4, "ngIf"], ["class", "verticalBar", 4, "ngIf"], ["class", "stacked", 4, "ngIf"], [1, "bar"], ["class", "details", 4, "ngIf"], ["class", "edit", 4, "ngIf"], [1, "pie"], [3, "view", "scheme", "results", "designatedTotal", "animations", "select"], [1, "details"], [1, "btn", "btn-warning", "btn-sm", "animated", 3, "click"], [1, "edit"], ["edit", "ngForm"], ["name", "username", "placeholder", "Username", "value", "currentUser.name", "type", "text", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["name", "email", "placeholder", "E-Mail Address", "value", "currentUser.email", "type", "email", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["name", "location", "placeholder", "Location", "value", "currentUser.location", "type", "text", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["name", "number", "placeholder", "Mobile Number", "value", "currentUser.number", "type", "text", "minlength", "10", "maxlength", "10", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["id", "pw", "name", "password", "placeholder", "Password", "value", "currentUser.password", "type", "text", "required", "", "minlength", "8", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Save", "required", "", 1, "animated", 3, "disabled", "click"], [1, "verticalBar"], [2, "padding", "15px", 3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "select"], [1, "stacked"], [3, "view", "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "select"]],
      template: function OverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OverviewComponent_div_0_Template, 5, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OverviewComponent_div_1_Template, 2, 10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OverviewComponent_div_2_Template, 2, 10, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isdataloaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isdataloaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isdataloaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["PieGridComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["BarVerticalComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["BarVertical2DComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.bar[_ngcontent-%COMP%]{\r\n    background-color: aliceblue;\r\n    width: 100%;\r\n    height: 300px;\r\n}\r\n.details[_ngcontent-%COMP%] {\r\n\r\n    float: left;\r\n    height: 300px;\r\n    width: 50%;\r\n    padding: 0;\r\n    margin: 0;\r\n    \r\n    \r\n}\r\n.edit[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    font-size: 16px;\r\n    color: rgb(10, 10, 10);\r\n    border: none;\r\n    border-bottom: 1px solid #fff;\r\n    outline: none;\r\n    background: transparent;\r\n    line-height: 5px;\r\n  }\r\n.animated[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      padding: 0px;\r\n      height: 35px;\r\n      width: 100px;\r\n  }\r\n.edit[_ngcontent-%COMP%] {\r\n    float: left;\r\n    height: 300px;\r\n    width: 50%;\r\n    padding: 20px;\r\n    margin: 0;\r\n    text-align: left;\r\n    outline: none;\r\n    color: blue;\r\n    background: transparent;\r\n\r\n}\r\np[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    color: black;\r\n    padding-left: 25px;\r\n    padding-top: 15px;\r\n    line-height: normal;\r\n}\r\n.pie[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 50%;\r\n    height: 300px;\r\n    text-align: end;\r\n    padding-left: 20px;\r\n}\r\n.verticalBar[_ngcontent-%COMP%] {\r\n    color: black;\r\n    width: 100%;\r\n    height: 350px;\r\n    background-color: rgb(188, 222, 252);\r\n}\r\n.stacked[_ngcontent-%COMP%] {\r\n    color: black;\r\n    width: 100%;\r\n    height: 350px;\r\n    padding-top: 20px;\r\n    padding-left: 20px;\r\n    background-color: rgb(151, 204, 250);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0lBQ1YsU0FBUzs7O0FBR2I7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7QUFDQTtNQUNJLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osWUFBWTtNQUNaLFlBQVk7RUFDaEI7QUFDRjtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUJBQXVCOztBQUUzQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUdBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuLmRldGFpbHMge1xyXG5cclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4uZWRpdCAuaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogcmdiKDEwLCAxMCwgMTApO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogNXB4O1xyXG4gIH1cclxuICAuYW5pbWF0ZWR7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbi5lZGl0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxufVxyXG5cclxucHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG4ucGllIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnZlcnRpY2FsQmFyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODgsIDIyMiwgMjUyKTtcclxufVxyXG4uc3RhY2tlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTEsIDIwNCwgMjUwKTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-overview',
          templateUrl: './overview.component.html',
          styleUrls: ['./overview.component.css']
        }]
      }], function () {
        return [{
          type: src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-profile/results/results.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/user-profile/results/results.component.ts ***!
    \***********************************************************/

  /*! exports provided: ResultsComponent */

  /***/
  function srcAppUserProfileResultsResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultsComponent", function () {
      return ResultsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/result */
    "./src/app/result.ts");
    /* harmony import */


    var src_app_assignment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/assignment.service */
    "./src/app/assignment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ResultsComponent = /*#__PURE__*/function () {
      function ResultsComponent(assignService, activatedRouter) {
        _classCallCheck(this, ResultsComponent);

        this.assignService = assignService;
        this.activatedRouter = activatedRouter;
        this.splitup = new src_app_result__WEBPACK_IMPORTED_MODULE_1__["split"](null, null, null);
        this.newResult = new src_app_result__WEBPACK_IMPORTED_MODULE_1__["result"](null, null, null, null, null, null);
      }

      _createClass(ResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.activatedRouter.snapshot.paramMap.get("id");
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          var project = Number(this.splitup.build) + Number(this.splitup.process) + Number(this.splitup.testing);
          this.newResult.project = project;
          var total = (Number(this.newResult.mcq) + Number(this.newResult.project) + Number(this.newResult.quiz) + Number(this.newResult.assignment)) / 4;
          this.newResult.total = total;
          console.log(this.newResult);
          console.log(this.splitup);
          this.assignService.addResult(this.newResult, this.id, this.newResult.assignment_id).subscribe(function (data) {
            console.log(data["jwt"]);
          });
        }
      }]);

      return ResultsComponent;
    }();

    ResultsComponent.ɵfac = function ResultsComponent_Factory(t) {
      return new (t || ResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_assignment_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    ResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultsComponent,
      selectors: [["app-results"]],
      decls: 20,
      vars: 7,
      consts: [[1, "segment"], ["type", "text", "name", "assignment_id", "placeholder", "Assessment ID", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "mcq", "placeholder", "MCQ (out of 100)", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "quiz", "placeholder", "Quiz (out of 100)", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "assignment", "placeholder", "Assignment (out of 100)", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "build", "placeholder", "Build  (out of 30)", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "process", "placeholder", "Process (out of 30)", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "testing", "placeholder", "Testing (out of 40)", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "red", 3, "click"], [1, "fas", "fa-check"]],
      template: function ResultsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResultsComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.newResult.assignment_id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResultsComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.newResult.mcq = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResultsComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.newResult.quiz = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResultsComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.newResult.assignment = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Project :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResultsComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.splitup.build = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResultsComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.splitup.process = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResultsComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.splitup.testing = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_Template_button_click_17_listener() {
            return ctx.onAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newResult.assignment_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newResult.mcq);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newResult.quiz);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newResult.assignment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.splitup.build);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.splitup.process);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.splitup.testing);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n    background-color: #EBECF0;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%], p[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n    font-family: 'Montserrat', sans-serif;\r\n    letter-spacing: -0.2px;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  div[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    color: rgb(111, 111, 117);\r\n    text-shadow: 1px 1px 1px #FFF;\r\n  }\r\n  \r\n  form[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n    width: 320px;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .segment[_ngcontent-%COMP%] {\r\n    padding: 32px 0;\r\n    text-align: center;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    outline: 0;\r\n    font-size: 16px;\r\n    border-radius: 320px;\r\n    padding: 16px;\r\n    color: rgb(34, 32, 32);\r\n    background-color: #EBECF0;\r\n    text-shadow: 1px 1px 0 #FFF;\r\n  }\r\n  \r\n  label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 24px;\r\n    width: 100%;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n    box-shadow: inset 2px 2px 5px rgb(207, 205, 205), inset -5px -5px 10px #FFF;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    transition: all 0.2s ease-in-out;\r\n    -moz-appearance: none;\r\n         appearance: none;\r\n    -webkit-appearance: none;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%]:focus {\r\n    box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%] {\r\n    color: #61677C;\r\n    font-weight: bold;\r\n    box-shadow: -5px -5px 20px #FFF, 5px 5px 20px #BABECC;\r\n    transition: all 0.2s ease-in-out;\r\n    cursor: pointer;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]:hover {\r\n    box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]:active {\r\n    box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n  }\r\n  \r\n  button.unit[_ngcontent-%COMP%] {\r\n    border-radius: 8px;\r\n    line-height: 0;\r\n    width: 48px;\r\n    height: 48px;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0 8px;\r\n    font-size: 19.2px;\r\n  }\r\n  \r\n  button.unit[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n  }\r\n  \r\n  button.red[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    color: #AE1100;\r\n  }\r\n  \r\n  .input-group[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n  }\r\n  \r\n  .input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    flex: 1;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLHNCQUFzQjtJQUN0QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsMkVBQTJFO0lBQzNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLHFCQUFnQjtTQUFoQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0VBQzFCOztFQUNBO0lBQ0UsK0RBQStEO0VBQ2pFOztFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxREFBcUQ7SUFDckQsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxtREFBbUQ7RUFDckQ7O0VBQ0E7SUFDRSwrREFBK0Q7RUFDakU7O0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjs7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtFQUM3Qjs7RUFDQTtJQUNFLFNBQVM7SUFDVCxPQUFPO0VBQ1QiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LCBodG1sIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkVDRjA7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHksIHAsIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGRpdiwgcCB7XHJcbiAgICBjb2xvcjogcmdiKDExMSwgMTExLCAxMTcpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICNGRkY7XHJcbiAgfVxyXG4gIFxyXG4gIGZvcm0ge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuc2VnbWVudCB7XHJcbiAgICBwYWRkaW5nOiAzMnB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiwgaW5wdXQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMyMHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGNvbG9yOiByZ2IoMzQsIDMyLCAzMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQ0YwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAjRkZGO1xyXG4gIH1cclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDVweCByZ2IoMjA3LCAyMDUsIDIwNSksIGluc2V0IC01cHggLTVweCAxMHB4ICNGRkY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgfVxyXG4gIGlucHV0OmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4ICNCQUJFQ0MsIGluc2V0IC0xcHggLTFweCAycHggI0ZGRjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjNjE2NzdDO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3gtc2hhZG93OiAtNXB4IC01cHggMjBweCAjRkZGLCA1cHggNXB4IDIwcHggI0JBQkVDQztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IC0ycHggLTJweCA1cHggI0ZGRiwgMnB4IDJweCA1cHggI0JBQkVDQztcclxuICB9XHJcbiAgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAjQkFCRUNDLCBpbnNldCAtMXB4IC0xcHggMnB4ICNGRkY7XHJcbiAgfVxyXG4gIGJ1dHRvbiAuaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbiAgYnV0dG9uLnVuaXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTkuMnB4O1xyXG4gIH1cclxuICBidXR0b24udW5pdCAuaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIGJ1dHRvbi5yZWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjQUUxMTAwO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIC5pbnB1dC1ncm91cCBsYWJlbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-results',
          templateUrl: './results.component.html',
          styleUrls: ['./results.component.css']
        }]
      }], function () {
        return [{
          type: src_app_assignment_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-profile/user-profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user-profile/user-profile.component.ts ***!
    \********************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _my_assignments_my_assignments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./my-assignments/my-assignments.component */
    "./src/app/user-profile/my-assignments/my-assignments.component.ts");
    /* harmony import */


    var _results_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./results/results.component */
    "./src/app/user-profile/results/results.component.ts");
    /* harmony import */


    var _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./overview/overview.component */
    "./src/app/user-profile/overview/overview.component.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserProfileComponent_div_5_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Admin ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserProfileComponent_div_5_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Developer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserProfileComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserProfileComponent_div_5_div_3_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserProfileComponent_div_5_div_4_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser.admin);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.currentUser.admin);
      }
    }

    function UserProfileComponent_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_6_div_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.admin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Make Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserProfileComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserProfileComponent_div_6_div_1_Template, 3, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.currentUser.admin);
      }
    }

    function UserProfileComponent_ng_container_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var UserProfileComponent = /*#__PURE__*/function () {
      function UserProfileComponent(userService, auth, router, activatedRouter) {
        _classCallCheck(this, UserProfileComponent);

        this.userService = userService;
        this.auth = auth;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.isDataLoaded = false;
        this.dummyComponent = _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"];
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.IsAdmin = this.auth.isAutenticated();
          console.log(this.IsAdmin);

          if (this.IsAdmin) {
            if (this.activatedRouter.snapshot.paramMap.get("id")) {
              this.id = this.activatedRouter.snapshot.paramMap.get("id");
              console.log("parammap");
            } else {
              this.id = this.auth.getUserId();
            }

            this.getCurrentUser();
            this.isDataLoaded = true;
          } else if (Number(this.activatedRouter.snapshot.paramMap.get("id")) == this.auth.getUserId()) {
            console.log("number");
            this.id = this.activatedRouter.snapshot.paramMap.get("id");
            this.getCurrentUser();
            this.isDataLoaded = true;
          } else {
            this.router.navigate([""]);
          }
        }
      }, {
        key: "setComp",
        value: function setComp(choice) {
          if (choice == "Password") {
            this.dummyComponent = null;
          }

          if (choice == "Assignments") {
            this.dummyComponent = _my_assignments_my_assignments_component__WEBPACK_IMPORTED_MODULE_1__["MyAssignmentsComponent"];
          }

          if (choice == "Overview") {
            this.dummyComponent = _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"];
          }

          if (choice == "result") {
            this.dummyComponent = _results_results_component__WEBPACK_IMPORTED_MODULE_2__["ResultsComponent"];
          }
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          var _this18 = this;

          this.userService.getById(this.id).subscribe(function (data) {
            _this18.currentUser = data;
            console.log(_this18.currentUser);
          });
        }
      }, {
        key: "admin",
        value: function admin() {
          var _this19 = this;

          this.userService.admin(this.id).subscribe(function (data) {
            console.log("made admin");

            _this19.router.navigate(["/admin"]);
          });
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
      return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 21,
      vars: 3,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "container", 2, "color", "rgb(195, 197, 184)"], [1, "row", "profile"], [1, "col-md-3"], [1, "profile-sidebar"], ["class", "profile-usertitle", 4, "ngIf"], ["class", "profile-userbuttons", 4, "ngIf"], [1, "profile-usermenu"], [1, "nav"], [1, "active"], [3, "click"], [1, "glyphicon", "glyphicon-home"], [1, "glyphicon", "glyphicon-user"], [1, "col-md-9"], [1, "profile-content"], [4, "ngComponentOutlet"], [1, "profile-usertitle"], [1, "profile-usertitle-name"], ["class", "profile-usertitle-job", 4, "ngIf"], [1, "profile-usertitle-job"], [1, "profile-userbuttons"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 3, "click"]],
      template: function UserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserProfileComponent_div_5_Template, 5, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserProfileComponent_div_6_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_Template_a_click_10_listener() {
            return ctx.setComp("Overview");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Overview ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_Template_a_click_14_listener() {
            return ctx.setComp("Assignments");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Assessments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserProfileComponent_ng_container_19_Template, 1, 0, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Some user related content goes here... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx.dummyComponent);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgComponentOutlet"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    background: rgb(245, 245, 247);\r\n  }\r\n  \r\n  \r\n  \r\n  .profile[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n  \r\n  \r\n  \r\n  .profile-sidebar[_ngcontent-%COMP%] {\r\n    padding: 20px 0 10px 0;\r\n    background: rgb(248, 249, 250);\r\n  }\r\n  \r\n  .profile-userpic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    float: none;\r\n    margin: 0 auto;\r\n    width: 50%;\r\n    height: 50%;\r\n    border-radius: 50% !important;\r\n  }\r\n  \r\n  .profile-usertitle[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .profile-usertitle-name[_ngcontent-%COMP%] {\r\n    color: #5a7391;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    margin-bottom: 7px;\r\n  }\r\n  \r\n  .profile-usertitle-job[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    color: #5b9bd1;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .profile-userbuttons[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .profile-userbuttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-size: 11px;\r\n    font-weight: 600;\r\n    padding: 6px 15px;\r\n    margin-right: 5px;\r\n  }\r\n  \r\n  .profile-userbuttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #f0f4f7;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: none;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #93a3b5;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #fafcfd;\r\n    color: #5b9bd1;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n    border-bottom: none;\r\n  }\r\n  \r\n  .profile-usermenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #5b9bd1;\r\n    background-color: #f6f9fb;\r\n    border-left: 2px solid #5b9bd1;\r\n    margin-left: -2px;\r\n  }\r\n  \r\n  \r\n  \r\n  .profile-content[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    background: #fff;\r\n    min-height: 460px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDhCQUE4QjtFQUNoQzs7RUFFQSxzQkFBc0I7O0VBQ3RCO0lBQ0UsU0FBUztFQUNYOztFQUVBLG9CQUFvQjs7RUFDcEI7SUFDRSxzQkFBc0I7SUFDdEIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUdYLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixpQkFBaUI7RUFDbkI7O0VBRUEsb0JBQW9COztFQUNwQjtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMjQ1LCAyNDcpO1xyXG4gIH1cclxuICBcclxuICAvKiBQcm9maWxlIGNvbnRhaW5lciAqL1xyXG4gIC5wcm9maWxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogUHJvZmlsZSBzaWRlYmFyICovXHJcbiAgLnByb2ZpbGUtc2lkZWJhciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ5LCAyNTApO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VycGljIGltZyB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtdXNlcnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXVzZXJ0aXRsZS1uYW1lIHtcclxuICAgIGNvbG9yOiAjNWE3MzkxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtdXNlcnRpdGxlLWpvYiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM1YjliZDE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtdXNlcmJ1dHRvbnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtdXNlcmJ1dHRvbnMgLmJ0biB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXVzZXJidXR0b25zIC5idG46bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgICAgIFxyXG4gIC5wcm9maWxlLXVzZXJtZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXVzZXJtZW51IHVsIGxpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmNGY3O1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VybWVudSB1bCBsaTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXVzZXJtZW51IHVsIGxpIGEge1xyXG4gICAgY29sb3I6ICM5M2EzYjU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VybWVudSB1bCBsaSBhIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXVzZXJtZW51IHVsIGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmNmZDtcclxuICAgIGNvbG9yOiAjNWI5YmQxO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS11c2VybWVudSB1bCBsaS5hY3RpdmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtdXNlcm1lbnUgdWwgbGkuYWN0aXZlIGEge1xyXG4gICAgY29sb3I6ICM1YjliZDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOWZiO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNWI5YmQxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFByb2ZpbGUgQ29udGVudCAqL1xyXG4gIC5wcm9maWxlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtaW4taGVpZ2h0OiA0NjBweDtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-profile',
          templateUrl: './user-profile.component.html',
          styleUrls: ['./user-profile.component.css']
        }]
      }], function () {
        return [{
          type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.baseURL = "http://localhost:5005/users";
      }

      _createClass(UserService, [{
        key: "getAll",
        value: function getAll() {
          // const token = localStorage.getItem("token")
          // const headers = new HttpHeaders({ Authorization: 'Bearer ' + token});
          return this.http.get(this.baseURL);
        }
      }, {
        key: "getAllAdmin",
        value: function getAllAdmin() {
          return this.http.get(this.baseURL + "/admins");
        }
      }, {
        key: "add",
        value: function add(user) {
          return this.http.post(this.baseURL + '/add', user);
        }
      }, {
        key: "getById",
        value: function getById(id) {
          var url = this.baseURL + "/" + id;
          console.log(url);
          return this.http.get(this.baseURL + "/" + id);
        }
      }, {
        key: "getAssignments",
        value: function getAssignments(id) {
          var url = this.baseURL + "/" + id + "/myAssignments";
          console.log("getAssignments");
          return this.http.get(url);
        }
      }, {
        key: "updateUser",
        value: function updateUser(id, changes) {
          return this.http.put(this.baseURL + "/" + id, changes);
        }
      }, {
        key: "admin",
        value: function admin(id) {
          var url = this.baseURL + "/" + id + "/admin";
          return this.http.get(url);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\acer\Documents\assessment\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map