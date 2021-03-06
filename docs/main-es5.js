function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
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
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _file_explorer_model_create_file_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./file-explorer/model/create-file-request */
    "./src/app/file-explorer/model/create-file-request.ts");
    /* harmony import */


    var _shared_services_files_file_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/services/files/file-rest.service */
    "./src/app/shared/services/files/file-rest.service.ts");
    /* harmony import */


    var _shared_services_files_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/services/files/file.service */
    "./src/app/shared/services/files/file.service.ts");
    /* harmony import */


    var _file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./file-explorer/file-explorer.component */
    "./src/app/file-explorer/file-explorer.component.ts");
    /* harmony import */


    var _cli_cli_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cli/cli.component */
    "./src/app/cli/cli.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(fileExplorerService, fileService) {
        _classCallCheck(this, AppComponent);

        this.fileExplorerService = fileExplorerService;
        this.fileService = fileService;
        this.stack = [];
        this.ROOT = '/';
        this.currentPath = this.ROOT;
        this.canNavigateUp = false;
        this.isLoading = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateFileElementQuery();
        }
      }, {
        key: "addFolder",
        value: function addFolder(folder) {
          var _this = this;

          var newFolder = {
            name: folder.name,
            isFolder: true,
            path: this.currentPath ? this.currentPath : this.ROOT
          };
          this.isLoading = true;
          this.fileExplorerService.makeDirect(newFolder.name, newFolder.path).then(function () {
            _this.updateFileElementQuery();
          })["finally"](function () {
            return _this.isLoading = false;
          });
        }
      }, {
        key: "addFile",
        value: function addFile(file) {
          var _this2 = this;

          this.isLoading = true;
          var createFileRequest = new _file_explorer_model_create_file_request__WEBPACK_IMPORTED_MODULE_1__["CreateFileRequest"]();
          createFileRequest.name = file.name;
          createFileRequest.size = 10;
          createFileRequest.path = this.currentPath ? this.currentPath : this.ROOT;
          createFileRequest.fileExtension = 'txt';
          createFileRequest.data = file.data;
          this.fileExplorerService.createFile(createFileRequest).then(function () {
            _this2.updateFileElementQuery();
          })["finally"](function () {
            return _this2.isLoading = false;
          });
        }
      }, {
        key: "navigateToFolder",
        value: function navigateToFolder(element) {
          var currentRoot = element;
          this.stack.push(currentRoot);
          this.currentPath = this.fileService.pushToPath(this.currentPath, element.name);
          this.query(this.currentPath);
          this.canNavigateUp = true;
        }
      }, {
        key: "navigateUp",
        value: function navigateUp() {
          if (this.stack.length == 1) {
            this.canNavigateUp = false;
            this.stack.pop();
            this.currentPath = this.fileService.popFromPath(this.currentPath);
            this.updateFileElementQuery();
          } else {
            this.stack.pop();
            this.currentPath = this.fileService.popFromPath(this.currentPath);
            this.updateFileElementQuery();
          }
        }
      }, {
        key: "moveElement",
        value: function moveElement(event) {}
      }, {
        key: "renameElement",
        value: function renameElement(element) {}
      }, {
        key: "removeElement",
        value: function removeElement(element) {}
      }, {
        key: "updateFileElementQuery",
        value: function updateFileElementQuery() {
          this.query(this.currentPath ? this.currentPath : this.ROOT);
        }
      }, {
        key: "query",
        value: function query(path) {
          var _this3 = this;

          this.isLoading = true;
          this.fileExplorerService.list(path).then(function (resp) {
            if (resp && resp.errorCode == 0) {
              var children = resp.data;
              _this3.fileElements = [];
              children.forEach(function (file) {
                _this3.fileElements.push({
                  id: file.id,
                  name: file.name,
                  path: file.path,
                  isFolder: file.folder,
                  fileExtension: file.fileExtension,
                  data: file.data
                });
              });
            }
          })["catch"](function (err) {
            console.log('error', err);
          })["finally"](function () {
            return _this3.isLoading = false;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_files_file_rest_service__WEBPACK_IMPORTED_MODULE_2__["FileRestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_services_files_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]));
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 4,
      consts: [["role", "main", 1, "content"], [1, "file-explorer"], [3, "fileElements", "path", "canNavigateUp", "isLoading", "folderAdded", "fileAdded", "elementRemoved", "navigatedDown", "navigatedUp", "elementRenamed", "elementMoved"], [1, "terminal"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-file-explorer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("folderAdded", function AppComponent_Template_app_file_explorer_folderAdded_2_listener($event) {
            return ctx.addFolder($event);
          })("fileAdded", function AppComponent_Template_app_file_explorer_fileAdded_2_listener($event) {
            return ctx.addFile($event);
          })("elementRemoved", function AppComponent_Template_app_file_explorer_elementRemoved_2_listener($event) {
            return ctx.removeElement($event);
          })("navigatedDown", function AppComponent_Template_app_file_explorer_navigatedDown_2_listener($event) {
            return ctx.navigateToFolder($event);
          })("navigatedUp", function AppComponent_Template_app_file_explorer_navigatedUp_2_listener() {
            return ctx.navigateUp();
          })("elementRenamed", function AppComponent_Template_app_file_explorer_elementRenamed_2_listener($event) {
            return ctx.renameElement($event);
          })("elementMoved", function AppComponent_Template_app_file_explorer_elementMoved_2_listener($event) {
            return ctx.moveElement($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-cli");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("fileElements", ctx.fileElements)("path", ctx.currentPath)("canNavigateUp", ctx.canNavigateUp)("isLoading", ctx.isLoading);
        }
      },
      directives: [_file_explorer_file_explorer_component__WEBPACK_IMPORTED_MODULE_4__["FileExplorerComponent"], _cli_cli_component__WEBPACK_IMPORTED_MODULE_5__["CliComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
      styles: [".content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.content[_ngcontent-%COMP%]   .file-explorer[_ngcontent-%COMP%] {\n  height: 50%;\n}\n.content[_ngcontent-%COMP%]   .terminal[_ngcontent-%COMP%] {\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFByb2plY3RzXFxzaW1wbGUtZmlsZS1zeXN0ZW0tZmUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FERUU7RUFDRSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAuZmlsZS1leHBsb3JlciB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbCB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcbn1cclxuIiwiLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRlbnQgLmZpbGUtZXhwbG9yZXIge1xuICBoZWlnaHQ6IDUwJTtcbn1cbi5jb250ZW50IC50ZXJtaW5hbCB7XG4gIGhlaWdodDogNTAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_files_file_rest_service__WEBPACK_IMPORTED_MODULE_2__["FileRestService"]
        }, {
          type: _shared_services_files_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ng_terminal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-terminal */
    "./node_modules/ng-terminal/__ivy_ngcc__/fesm2015/ng-terminal.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _cli_cli_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cli/cli.module */
    "./src/app/cli/cli.module.ts");
    /* harmony import */


    var _file_explorer_file_explorer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./file-explorer/file-explorer.module */
    "./src/app/file-explorer/file-explorer.module.ts");
    /* harmony import */


    var _shared_services_files_file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/services/files/file.service */
    "./src/app/shared/services/files/file.service.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_shared_services_files_file_service__WEBPACK_IMPORTED_MODULE_8__["FileService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ng_terminal__WEBPACK_IMPORTED_MODULE_3__["NgTerminalModule"], _file_explorer_file_explorer_module__WEBPACK_IMPORTED_MODULE_7__["FileExplorerModule"], _cli_cli_module__WEBPACK_IMPORTED_MODULE_6__["CliModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ng_terminal__WEBPACK_IMPORTED_MODULE_3__["NgTerminalModule"], _file_explorer_file_explorer_module__WEBPACK_IMPORTED_MODULE_7__["FileExplorerModule"], _cli_cli_module__WEBPACK_IMPORTED_MODULE_6__["CliModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ng_terminal__WEBPACK_IMPORTED_MODULE_3__["NgTerminalModule"], _file_explorer_file_explorer_module__WEBPACK_IMPORTED_MODULE_7__["FileExplorerModule"], _cli_cli_module__WEBPACK_IMPORTED_MODULE_6__["CliModule"]],
          providers: [_shared_services_files_file_service__WEBPACK_IMPORTED_MODULE_8__["FileService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cli/cli.component.ts": function srcAppCliCliComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CliComponent", function () {
      return CliComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_files_file_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/files/file-rest.service */
    "./src/app/shared/services/files/file-rest.service.ts");
    /* harmony import */


    var _shared_services_files_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/files/file.service */
    "./src/app/shared/services/files/file.service.ts");
    /* harmony import */


    var ng_terminal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-terminal */
    "./node_modules/ng-terminal/__ivy_ngcc__/fesm2015/ng-terminal.js");

    var _c0 = ["term"];

    var CliComponent =
    /*#__PURE__*/
    function () {
      function CliComponent(fileExplorerService, fileService) {
        _classCallCheck(this, CliComponent);

        this.fileExplorerService = fileExplorerService;
        this.fileService = fileService;
        this.ENTER_KEYCODE = 13;
        this.BACKSPACE_KEYCODE = 8;
        this.GREEN_ANSI_COLOR = '\x1b[1;32m';
        this.BLUE_ANSI_COLOR = '\x1b[1;34m';
        this.WHITE_ANSI_COLOR = '\x1b[37m';
        this.prefix = "".concat(this.GREEN_ANSI_COLOR, "file-system: ").concat(this.WHITE_ANSI_COLOR);
        this.currentPath = '/';
        this.command = '';
      }

      _createClass(CliComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          if (this.child) {
            this.child.write("hint: type 'help' to see supported commands\r\n");
            this.child.write("".concat(this.prefix).concat(this.currentPath, "$ "));
          }

          this.child.keyEventInput.subscribe(function (e) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var ev, printable;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      ev = e.domEvent;
                      printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

                      if (!(ev.keyCode === this.ENTER_KEYCODE)) {
                        _context.next = 9;
                        break;
                      }

                      _context.next = 5;
                      return this.execute(this.command, this.child);

                    case 5:
                      this.command = '';
                      this.child.write("\r\n".concat(this.prefix).concat(this.currentPath, "$ "));
                      _context.next = 10;
                      break;

                    case 9:
                      if (ev.keyCode === this.BACKSPACE_KEYCODE) {
                        if (this.child.underlying.buffer.active.cursorX > 2) {
                          this.child.write('\b \b');
                          this.command = this.command.substring(0, this.command.length - 1);
                        }
                      } else if (printable) {
                        this.child.write(e.key);
                        this.command = this.command.concat(e.key);
                      }

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "execute",
        value: function execute(command, child) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var args, cmd, targetPath;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    command = command.replace('\r', '');
                    args = command.split(' ');
                    cmd = args[0];
                    console.log(args);
                    _context2.t0 = cmd;
                    _context2.next = _context2.t0 === 'ls' ? 7 : _context2.t0 === 'cd' ? 10 : _context2.t0 === 'help' ? 14 : 16;
                    break;

                  case 7:
                    _context2.next = 9;
                    return this.fileExplorerService.list(this.currentPath).then(function (resp) {
                      var items = resp.data;
                      items.forEach(function (item) {
                        return _this5.child.write("\r\n ".concat(_this5.showItemInfo(item)));
                      });

                      _this5.child.write("\r\n  Total: ".concat(items.length));
                    });

                  case 9:
                    return _context2.abrupt("break", 18);

                  case 10:
                    targetPath = this.cdExtract(args[1]);
                    _context2.next = 13;
                    return this.fileExplorerService.changeDirect(targetPath).then(function (resp) {
                      var valid = resp.data;

                      if (valid || targetPath == '/') {
                        _this5.currentPath = targetPath;
                      } else {
                        _this5.child.write("\r\n  Cannot found ".concat(targetPath));
                      }
                    });

                  case 13:
                    return _context2.abrupt("break", 18);

                  case 14:
                    this.showHelp();
                    return _context2.abrupt("break", 18);

                  case 16:
                    this.child.write("\r\n  ".concat(command, " - command not found"));
                    return _context2.abrupt("break", 18);

                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "showItemInfo",
        value: function showItemInfo(item) {
          // file shows in blue color, otherwise white color.
          return "".concat(item.folder ? this.WHITE_ANSI_COLOR : this.BLUE_ANSI_COLOR) + "".concat(item.folder ? 'd' : 'f', " - ").concat(item.createAt ? new Date(item.createAt).toJSON().slice(0, 10).split('-').reverse().join('/') : '-', " - ").concat(item.name).concat(this.WHITE_ANSI_COLOR);
        }
      }, {
        key: "cdExtract",
        value: function cdExtract(cmd) {
          var _this6 = this;

          var clone_currentPath = this.currentPath; // [..] : back to parent

          var backLevels = cmd.match(/\.{2}/g);

          if (backLevels) {
            var n = backLevels ? backLevels.length : 0;

            for (var i = 0; i < n; i++) {
              clone_currentPath = this.fileService.popFromPath(clone_currentPath);
            } // back to parent and navigate to another dir


            var folders = cmd.split('/');
            folders = folders.filter(function (x) {
              return !/\.{2}/.test(x);
            });
            folders.forEach(function (folder) {
              return clone_currentPath = _this6.fileService.pushToPath(clone_currentPath, folder);
            });
            return clone_currentPath;
          } // [ / ] : back to home


          if (this.isRoot(cmd)) {
            clone_currentPath = cmd;
            return clone_currentPath;
          }

          return this.fileService.pushToPath(clone_currentPath, cmd);
        }
      }, {
        key: "isRoot",
        value: function isRoot(currentPath) {
          return currentPath == '/';
        }
      }, {
        key: "showHelp",
        value: function showHelp() {
          this.child.write("\r\n  cd FOLDER_PATH  : change current working directory/folder to the specified FOLDER");
          this.child.write("\r\n  ls              : list out all items directly under a folder");
        }
      }]);

      return CliComponent;
    }();

    CliComponent.??fac = function CliComponent_Factory(t) {
      return new (t || CliComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_files_file_rest_service__WEBPACK_IMPORTED_MODULE_2__["FileRestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_files_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]));
    };

    CliComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: CliComponent,
      selectors: [["app-cli"]],
      viewQuery: function CliComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????staticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.child = _t.first);
        }
      },
      decls: 2,
      vars: 0,
      consts: [["term", ""]],
      template: function CliComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "ng-terminal", null, 0);
        }
      },
      directives: [ng_terminal__WEBPACK_IMPORTED_MODULE_4__["NgTerminalComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaS9jbGkuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](CliComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-cli',
          templateUrl: './cli.component.html',
          styleUrls: ['./cli.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_files_file_rest_service__WEBPACK_IMPORTED_MODULE_2__["FileRestService"]
        }, {
          type: _shared_services_files_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]
        }];
      }, {
        child: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['term', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cli/cli.module.ts": function srcAppCliCliModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CliModule", function () {
      return CliModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _cli_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cli.component */
    "./src/app/cli/cli.component.ts");

    var CliModule = function CliModule() {
      _classCallCheck(this, CliModule);
    };

    CliModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: CliModule
    });
    CliModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function CliModule_Factory(t) {
        return new (t || CliModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](CliModule, {
        declarations: [_cli_component__WEBPACK_IMPORTED_MODULE_3__["CliComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        exports: [_cli_component__WEBPACK_IMPORTED_MODULE_3__["CliComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](CliModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
          declarations: [_cli_component__WEBPACK_IMPORTED_MODULE_3__["CliComponent"]],
          exports: [_cli_component__WEBPACK_IMPORTED_MODULE_3__["CliComponent"]],
          entryComponents: [_cli_component__WEBPACK_IMPORTED_MODULE_3__["CliComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/file-explorer/file-explorer.component.ts": function srcAppFileExplorerFileExplorerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileExplorerComponent", function () {
      return FileExplorerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modals_fileDialog_fileDialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modals/fileDialog/fileDialog.component */
    "./src/app/file-explorer/modals/fileDialog/fileDialog.component.ts");
    /* harmony import */


    var _modals_newFileDialog_newFileDialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modals/newFileDialog/newFileDialog.component */
    "./src/app/file-explorer/modals/newFileDialog/newFileDialog.component.ts");
    /* harmony import */


    var _modals_newFolderDialog_newFolderDialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modals/newFolderDialog/newFolderDialog.component */
    "./src/app/file-explorer/modals/newFolderDialog/newFolderDialog.component.ts");
    /* harmony import */


    var _modals_renameDialog_renameDialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modals/renameDialog/renameDialog.component */
    "./src/app/file-explorer/modals/renameDialog/renameDialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function FileExplorerComponent_mat_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FileExplorerComponent_mat_icon_1_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r11.navigateUp();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "arrow_back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function FileExplorerComponent_mat_progress_bar_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-progress-bar", 13);
      }
    }

    function FileExplorerComponent_mat_grid_tile_15_mat_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "folder");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function FileExplorerComponent_mat_grid_tile_15_mat_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "insert_drive_file");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        element: a0
      };
    };

    function FileExplorerComponent_mat_grid_tile_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-grid-tile", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FileExplorerComponent_mat_grid_tile_15_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

          var element_r13 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r17.navigate(element_r13);
        })("contextmenu", function FileExplorerComponent_mat_grid_tile_15_Template_div_contextmenu_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r19.openMenu($event, _r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, FileExplorerComponent_mat_grid_tile_15_mat_icon_4_Template, 2, 0, "mat-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, FileExplorerComponent_mat_grid_tile_15_mat_icon_5_Template, 2, 0, "mat-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r7)("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, element_r13));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", element_r13.isFolder);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !element_r13.isFolder);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", element_r13.name, "", element_r13.fileExtension ? "." + element_r13.fileExtension : "", "");
      }
    }

    function FileExplorerComponent_ng_template_18_Template(rf, ctx) {}

    function FileExplorerComponent_ng_template_21_ng_container_0_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FileExplorerComponent_ng_template_21_ng_container_0_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);

          var element_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var self_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().self;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r25.moveElement(self_r21, element_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](element_r23.name);
      }
    }

    function FileExplorerComponent_ng_template_21_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, FileExplorerComponent_ng_template_21_ng_container_0_button_1_Template, 2, 1, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
      }

      if (rf & 2) {
        var element_r23 = ctx.$implicit;

        var self_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().self;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", element_r23.isFolder && element_r23.id !== self_r21.id);
      }
    }

    function FileExplorerComponent_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, FileExplorerComponent_ng_template_21_ng_container_0_Template, 2, 1, "ng-container", 20);
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r10.fileElements);
      }
    }

    var FileExplorerComponent =
    /*#__PURE__*/
    function () {
      function FileExplorerComponent(dialog) {
        _classCallCheck(this, FileExplorerComponent);

        this.dialog = dialog;
        this.isLoading = false;
        this.folderAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elementRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elementRenamed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elementMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.navigatedDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.navigatedUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FileExplorerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deleteElement",
        value: function deleteElement(element) {
          this.elementRemoved.emit(element);
        }
      }, {
        key: "navigate",
        value: function navigate(element) {
          if (element.isFolder) {
            this.navigatedDown.emit(element);
          } else {
            this.openDetailFile(element);
          }
        }
      }, {
        key: "navigateUp",
        value: function navigateUp() {
          this.navigatedUp.emit();
        }
      }, {
        key: "moveElement",
        value: function moveElement(element, moveTo) {
          this.elementMoved.emit({
            element: element,
            moveTo: moveTo
          });
        }
      }, {
        key: "openNewFolderDialog",
        value: function openNewFolderDialog() {
          var _this7 = this;

          var dialogRef = this.dialog.open(_modals_newFolderDialog_newFolderDialog_component__WEBPACK_IMPORTED_MODULE_3__["NewFolderDialogComponent"]);
          dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
              _this7.folderAdded.emit({
                name: res
              });
            }
          });
        }
      }, {
        key: "openNewFileDialog",
        value: function openNewFileDialog() {
          var _this8 = this;

          var dialogRef = this.dialog.open(_modals_newFileDialog_newFileDialog_component__WEBPACK_IMPORTED_MODULE_2__["NewFileDialogComponent"]);
          dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
              _this8.fileAdded.emit({
                name: res[0],
                data: res[1]
              });
            }
          });
        }
      }, {
        key: "openRenameDialog",
        value: function openRenameDialog(element) {
          var _this9 = this;

          var dialogRef = this.dialog.open(_modals_renameDialog_renameDialog_component__WEBPACK_IMPORTED_MODULE_4__["RenameDialogComponent"]);
          dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
              element.name = res;

              _this9.elementRenamed.emit(element);
            }
          });
        }
      }, {
        key: "openMenu",
        value: function openMenu(event, viewChild) {
          event.preventDefault(); // viewChild.openMenu();
        }
      }, {
        key: "openDetailFile",
        value: function openDetailFile(element) {
          var dialogRef = this.dialog.open(_modals_fileDialog_fileDialog_component__WEBPACK_IMPORTED_MODULE_1__["FileDialogComponent"], {
            data: {
              fileName: element.name,
              fileData: element.data,
              fileExtension: element.fileExtension
            }
          });
        }
      }]);

      return FileExplorerComponent;
    }();

    FileExplorerComponent.??fac = function FileExplorerComponent_Factory(t) {
      return new (t || FileExplorerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    FileExplorerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FileExplorerComponent,
      selectors: [["app-file-explorer"]],
      inputs: {
        fileElements: "fileElements",
        canNavigateUp: "canNavigateUp",
        path: "path",
        isLoading: "isLoading"
      },
      outputs: {
        folderAdded: "folderAdded",
        fileAdded: "fileAdded",
        elementRemoved: "elementRemoved",
        elementRenamed: "elementRenamed",
        elementMoved: "elementMoved",
        navigatedDown: "navigatedDown",
        navigatedUp: "navigatedUp"
      },
      decls: 22,
      vars: 5,
      consts: [["class", "pointer", 3, "click", 4, "ngIf"], [2, "margin-left", "8px"], [1, "spacer"], [1, "pointer", 3, "click"], ["mode", "indeterminate", 4, "ngIf"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "space-between stretch", 1, "container"], ["fxFlex", "", "fxLayout", "row", 1, "content"], ["cols", "8", "rowHeight", "100px", "fxFlex", ""], ["class", "file-or-folder", 4, "ngFor", "ngForOf"], [3, "overlapTrigger"], ["rootMenu", "matMenu"], ["matMenuContent", ""], ["moveToMenu", "matMenu"], ["mode", "indeterminate"], [1, "file-or-folder"], [3, "matMenuTriggerFor", "matMenuTriggerData"], ["menuTrigger", "matMenuTrigger"], ["fxLayout", "column", "fxLayoutAlign", "space-between center", 1, "item", 3, "click", "contextmenu"], ["color", "primary", "class", "file-or-folder-icon pointer", 4, "ngIf"], ["color", "primary", 1, "file-or-folder-icon", "pointer"], [4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"]],
      template: function FileExplorerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, FileExplorerComponent_mat_icon_1_Template, 2, 0, "mat-icon", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FileExplorerComponent_Template_mat_icon_click_5_listener() {
            return ctx.openNewFileDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "text_snippet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FileExplorerComponent_Template_mat_icon_click_9_listener() {
            return ctx.openNewFolderDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "create_new_folder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, FileExplorerComponent_mat_progress_bar_11_Template, 1, 0, "mat-progress-bar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-grid-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, FileExplorerComponent_mat_grid_tile_15_Template, 8, 8, "mat-grid-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-menu", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, FileExplorerComponent_ng_template_18_Template, 0, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-menu", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, FileExplorerComponent_ng_template_21_Template, 1, 1, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.canNavigateUp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.path || "Files");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.fileElements);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("overlapTrigger", false);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuContent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridTile"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  min-width: 825px;\n  display: flex;\n  flex-direction: column;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.file-or-folder[_ngcontent-%COMP%] {\n  padding: 8px;\n  overflow: hidden;\n}\n\n.file-or-folder-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 50px;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.item[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS1leHBsb3Jlci9FOlxcUHJvamVjdHNcXHNpbXBsZS1maWxlLXN5c3RlbS1mZS9zcmNcXGFwcFxcZmlsZS1leHBsb3JlclxcZmlsZS1leHBsb3Jlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmlsZS1leHBsb3Jlci9maWxlLWV4cGxvcmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBRUEsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQ0FBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtZXhwbG9yZXIvZmlsZS1leHBsb3Jlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiA4MjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uZmlsZS1vci1mb2xkZXIge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZmlsZS1vci1mb2xkZXItaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5pdGVtOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgLy8gaGVpZ2h0OiAxMTZweDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiA4MjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5maWxlLW9yLWZvbGRlciB7XG4gIHBhZGRpbmc6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZpbGUtb3ItZm9sZGVyLWljb24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5pdGVtOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcbiAgd2lkdGg6IDcwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FileExplorerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-file-explorer',
          templateUrl: './file-explorer.component.html',
          styleUrls: ['./file-explorer.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, {
        fileElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        canNavigateUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        path: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        folderAdded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        fileAdded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        elementRemoved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        elementRenamed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        elementMoved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        navigatedDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        navigatedUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/file-explorer/file-explorer.module.ts": function srcAppFileExplorerFileExplorerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileExplorerModule", function () {
      return FileExplorerModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _file_explorer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./file-explorer.component */
    "./src/app/file-explorer/file-explorer.component.ts");
    /* harmony import */


    var _modals_fileDialog_fileDialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modals/fileDialog/fileDialog.component */
    "./src/app/file-explorer/modals/fileDialog/fileDialog.component.ts");
    /* harmony import */


    var _modals_newFileDialog_newFileDialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modals/newFileDialog/newFileDialog.component */
    "./src/app/file-explorer/modals/newFileDialog/newFileDialog.component.ts");
    /* harmony import */


    var _modals_newFolderDialog_newFolderDialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modals/newFolderDialog/newFolderDialog.component */
    "./src/app/file-explorer/modals/newFolderDialog/newFolderDialog.component.ts");
    /* harmony import */


    var _modals_renameDialog_renameDialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modals/renameDialog/renameDialog.component */
    "./src/app/file-explorer/modals/renameDialog/renameDialog.component.ts");

    var FileExplorerModule = function FileExplorerModule() {
      _classCallCheck(this, FileExplorerModule);
    };

    FileExplorerModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: FileExplorerModule
    });
    FileExplorerModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function FileExplorerModule_Factory(t) {
        return new (t || FileExplorerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](FileExplorerModule, {
        declarations: [_file_explorer_component__WEBPACK_IMPORTED_MODULE_3__["FileExplorerComponent"], _modals_newFolderDialog_newFolderDialog_component__WEBPACK_IMPORTED_MODULE_6__["NewFolderDialogComponent"], _modals_renameDialog_renameDialog_component__WEBPACK_IMPORTED_MODULE_7__["RenameDialogComponent"], _modals_fileDialog_fileDialog_component__WEBPACK_IMPORTED_MODULE_4__["FileDialogComponent"], _modals_newFileDialog_newFileDialog_component__WEBPACK_IMPORTED_MODULE_5__["NewFileDialogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        exports: [_file_explorer_component__WEBPACK_IMPORTED_MODULE_3__["FileExplorerComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](FileExplorerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
          declarations: [_file_explorer_component__WEBPACK_IMPORTED_MODULE_3__["FileExplorerComponent"], _modals_newFolderDialog_newFolderDialog_component__WEBPACK_IMPORTED_MODULE_6__["NewFolderDialogComponent"], _modals_renameDialog_renameDialog_component__WEBPACK_IMPORTED_MODULE_7__["RenameDialogComponent"], _modals_fileDialog_fileDialog_component__WEBPACK_IMPORTED_MODULE_4__["FileDialogComponent"], _modals_newFileDialog_newFileDialog_component__WEBPACK_IMPORTED_MODULE_5__["NewFileDialogComponent"]],
          exports: [_file_explorer_component__WEBPACK_IMPORTED_MODULE_3__["FileExplorerComponent"]],
          entryComponents: [_modals_newFolderDialog_newFolderDialog_component__WEBPACK_IMPORTED_MODULE_6__["NewFolderDialogComponent"], _modals_renameDialog_renameDialog_component__WEBPACK_IMPORTED_MODULE_7__["RenameDialogComponent"], _modals_newFolderDialog_newFolderDialog_component__WEBPACK_IMPORTED_MODULE_6__["NewFolderDialogComponent"], _modals_newFileDialog_newFileDialog_component__WEBPACK_IMPORTED_MODULE_5__["NewFileDialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/file-explorer/modals/fileDialog/fileDialog.component.ts": function srcAppFileExplorerModalsFileDialogFileDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileDialogComponent", function () {
      return FileDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var FileDialogComponent =
    /*#__PURE__*/
    function () {
      function FileDialogComponent(data, dialogRef) {
        _classCallCheck(this, FileDialogComponent);

        this.data = data;
        this.dialogRef = dialogRef;
        this.fileData = '';
        this.displayName = '';
      }

      _createClass(FileDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fileData = this.data.fileData;
          this.displayName = "".concat(this.data.fileName, ".").concat(this.data.fileExtension);
        }
      }]);

      return FileDialogComponent;
    }();

    FileDialogComponent.??fac = function FileDialogComponent_Factory(t) {
      return new (t || FileDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    FileDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FileDialogComponent,
      selectors: [["app-fileDialog"]],
      decls: 5,
      vars: 2,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", "appearance", "fill", 1, "text-view"], [1, "form"], ["matInput", "", 1, "form__content", 3, "ngModel", "ngModelChange"]],
      template: function FileDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "textarea", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function FileDialogComponent_Template_textarea_ngModelChange_4_listener($event) {
            return ctx.fileData = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.fileData);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: [".text-view[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 200px;\n}\n.text-view[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  width: 500px;\n}\n.text-view[_ngcontent-%COMP%]   .form__content[_ngcontent-%COMP%] {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS1leHBsb3Jlci9tb2RhbHMvZmlsZURpYWxvZy9FOlxcUHJvamVjdHNcXHNpbXBsZS1maWxlLXN5c3RlbS1mZS9zcmNcXGFwcFxcZmlsZS1leHBsb3JlclxcbW9kYWxzXFxmaWxlRGlhbG9nXFxmaWxlRGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9maWxlLWV4cGxvcmVyL21vZGFscy9maWxlRGlhbG9nL2ZpbGVEaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtZXhwbG9yZXIvbW9kYWxzL2ZpbGVEaWFsb2cvZmlsZURpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LXZpZXcge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAuZm9ybSB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcblxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi50ZXh0LXZpZXcge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG4udGV4dC12aWV3IC5mb3JtIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuLnRleHQtdmlldyAuZm9ybV9fY29udGVudCB7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FileDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fileDialog',
          templateUrl: './fileDialog.component.html',
          styleUrls: ['./fileDialog.component.scss']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/file-explorer/modals/newFileDialog/newFileDialog.component.ts": function srcAppFileExplorerModalsNewFileDialogNewFileDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewFileDialogComponent", function () {
      return NewFileDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function NewFileDialogComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Invalid name, please try again");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return [a0, a1];
    };

    var NewFileDialogComponent =
    /*#__PURE__*/
    function () {
      function NewFileDialogComponent(dialogRef) {
        _classCallCheck(this, NewFileDialogComponent);

        this.dialogRef = dialogRef;
        this.invalid = false;
      }

      _createClass(NewFileDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChange",
        value: function onChange() {
          this.invalid = !/^[a-zA-Z0-9 _-]+$/.test(this.fileName);
        }
      }]);

      return NewFileDialogComponent;
    }();

    NewFileDialogComponent.??fac = function NewFileDialogComponent_Factory(t) {
      return new (t || NewFileDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    NewFileDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: NewFileDialogComponent,
      selectors: [["app-newFileDialog"]],
      decls: 14,
      vars: 8,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", "appearance", "fill", 1, "text-view"], [1, "form"], ["matInput", "", "placeholder", "File Name", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", "placeholder", "Note", 1, "form__content", 3, "ngModel", "ngModelChange"], ["class", "warning-text", 4, "ngIf"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close", "disabled"], [1, "warning-text"]],
      template: function NewFileDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Create a new text file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NewFileDialogComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.fileName = $event;
          })("change", function NewFileDialogComponent_Template_input_change_4_listener() {
            return ctx.onChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "textarea", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NewFileDialogComponent_Template_textarea_ngModelChange_7_listener($event) {
            return ctx.fileData = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, NewFileDialogComponent_div_8_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.fileData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("mat-dialog-close", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](5, _c0, ctx.fileName, ctx.fileData))("disabled", ctx.invalid);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".warning-text[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n}\n\n.text-view[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 200px;\n}\n\n.text-view[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.text-view[_ngcontent-%COMP%]   .form__content[_ngcontent-%COMP%] {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS1leHBsb3Jlci9tb2RhbHMvbmV3RmlsZURpYWxvZy9FOlxcUHJvamVjdHNcXHNpbXBsZS1maWxlLXN5c3RlbS1mZS9zcmNcXGFwcFxcZmlsZS1leHBsb3JlclxcbW9kYWxzXFxuZXdGaWxlRGlhbG9nXFxuZXdGaWxlRGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9maWxlLWV4cGxvcmVyL21vZGFscy9uZXdGaWxlRGlhbG9nL25ld0ZpbGVEaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNFRjs7QURBRTtFQUNFLFlBQUE7QUNFSjs7QURBSTtFQUNFLGFBQUE7QUNFTiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtZXhwbG9yZXIvbW9kYWxzL25ld0ZpbGVEaWFsb2cvbmV3RmlsZURpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuaW5nLXRleHQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi50ZXh0LXZpZXcge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAuZm9ybSB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcblxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi53YXJuaW5nLXRleHQge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50ZXh0LXZpZXcge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG4udGV4dC12aWV3IC5mb3JtIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuLnRleHQtdmlldyAuZm9ybV9fY29udGVudCB7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewFileDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-newFileDialog',
          templateUrl: './newFileDialog.component.html',
          styleUrls: ['./newFileDialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/file-explorer/modals/newFolderDialog/newFolderDialog.component.ts": function srcAppFileExplorerModalsNewFolderDialogNewFolderDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewFolderDialogComponent", function () {
      return NewFolderDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function NewFolderDialogComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Invalid name, please try again");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var NewFolderDialogComponent =
    /*#__PURE__*/
    function () {
      function NewFolderDialogComponent(dialogRef) {
        _classCallCheck(this, NewFolderDialogComponent);

        this.dialogRef = dialogRef;
        this.invalid = false;
      }

      _createClass(NewFolderDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChange",
        value: function onChange() {
          this.invalid = !/^[a-zA-Z0-9 _-]+$/.test(this.folderName);
        }
      }]);

      return NewFolderDialogComponent;
    }();

    NewFolderDialogComponent.??fac = function NewFolderDialogComponent_Factory(t) {
      return new (t || NewFolderDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    NewFolderDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: NewFolderDialogComponent,
      selectors: [["app-newFolderDialog"]],
      decls: 11,
      vars: 4,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "example-full-width"], ["matInput", "", "placeholder", "Folder Name", 3, "ngModel", "ngModelChange", "change"], ["class", "warning-text", 4, "ngIf"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close", "disabled"], [1, "warning-text"]],
      template: function NewFolderDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Create a new folder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NewFolderDialogComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.folderName = $event;
          })("change", function NewFolderDialogComponent_Template_input_change_4_listener() {
            return ctx.onChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, NewFolderDialogComponent_div_5_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.folderName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("mat-dialog-close", ctx.folderName)("disabled", ctx.invalid);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".warning-text[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS1leHBsb3Jlci9tb2RhbHMvbmV3Rm9sZGVyRGlhbG9nL0U6XFxQcm9qZWN0c1xcc2ltcGxlLWZpbGUtc3lzdGVtLWZlL3NyY1xcYXBwXFxmaWxlLWV4cGxvcmVyXFxtb2RhbHNcXG5ld0ZvbGRlckRpYWxvZ1xcbmV3Rm9sZGVyRGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9maWxlLWV4cGxvcmVyL21vZGFscy9uZXdGb2xkZXJEaWFsb2cvbmV3Rm9sZGVyRGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtZXhwbG9yZXIvbW9kYWxzL25ld0ZvbGRlckRpYWxvZy9uZXdGb2xkZXJEaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FybmluZy10ZXh0IHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iLCIud2FybmluZy10ZXh0IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewFolderDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-newFolderDialog',
          templateUrl: './newFolderDialog.component.html',
          styleUrls: ['./newFolderDialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/file-explorer/modals/renameDialog/renameDialog.component.ts": function srcAppFileExplorerModalsRenameDialogRenameDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenameDialogComponent", function () {
      return RenameDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function RenameDialogComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Invalid name, please try again");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var RenameDialogComponent =
    /*#__PURE__*/
    function () {
      function RenameDialogComponent(dialogRef) {
        _classCallCheck(this, RenameDialogComponent);

        this.dialogRef = dialogRef;
        this.invalid = false;
      }

      _createClass(RenameDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChange",
        value: function onChange() {
          this.invalid = !/^[a-zA-Z0-9 _-]+$/.test(this.folderName);
        }
      }]);

      return RenameDialogComponent;
    }();

    RenameDialogComponent.??fac = function RenameDialogComponent_Factory(t) {
      return new (t || RenameDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    RenameDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RenameDialogComponent,
      selectors: [["app-renameDialog"]],
      decls: 11,
      vars: 4,
      consts: [["mat-dialog-title", ""], [1, "example-full-width"], ["matInput", "", "placeholder", "Folder Name", 3, "ngModel", "ngModelChange", "change"], ["class", "warning-text", 4, "ngIf"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close", "disabled"], [1, "warning-text"]],
      template: function RenameDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Rename Element");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RenameDialogComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.folderName = $event;
          })("change", function RenameDialogComponent_Template_input_change_4_listener() {
            return ctx.onChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, RenameDialogComponent_div_5_Template, 2, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.folderName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("mat-dialog-close", ctx.folderName)("disabled", ctx.invalid);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".warning-text[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS1leHBsb3Jlci9tb2RhbHMvcmVuYW1lRGlhbG9nL0U6XFxQcm9qZWN0c1xcc2ltcGxlLWZpbGUtc3lzdGVtLWZlL3NyY1xcYXBwXFxmaWxlLWV4cGxvcmVyXFxtb2RhbHNcXHJlbmFtZURpYWxvZ1xccmVuYW1lRGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9maWxlLWV4cGxvcmVyL21vZGFscy9yZW5hbWVEaWFsb2cvcmVuYW1lRGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtZXhwbG9yZXIvbW9kYWxzL3JlbmFtZURpYWxvZy9yZW5hbWVEaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FybmluZy10ZXh0IHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iLCIud2FybmluZy10ZXh0IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RenameDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-renameDialog',
          templateUrl: './renameDialog.component.html',
          styleUrls: ['./renameDialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/file-explorer/model/create-file-request.ts": function srcAppFileExplorerModelCreateFileRequestTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateFileRequest", function () {
      return CreateFileRequest;
    });

    var CreateFileRequest = function CreateFileRequest() {
      _classCallCheck(this, CreateFileRequest);
    };
    /***/

  },

  /***/
  "./src/app/shared/rest/rest.service.ts": function srcAppSharedRestRestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestService", function () {
      return RestService;
    });

    var RestService =
    /*#__PURE__*/
    function () {
      // public host = 'http://localhost:9090';
      function RestService(http, resourceUrl) {
        _classCallCheck(this, RestService);

        this.http = http;
        this.resourceUrl = resourceUrl;
        this.host = 'https://simple-file-system.herokuapp.com';
      }

      _createClass(RestService, [{
        key: "get",
        value: function get(path) {
          return this.http.get("".concat(this.host, "/").concat(this.resourceUrl).concat(path)).toPromise();
        }
      }, {
        key: "post",
        value: function post(path, request) {
          return this.http.post("".concat(this.host, "/").concat(this.resourceUrl).concat(path), request).toPromise();
        }
      }]);

      return RestService;
    }();
    /***/

  },

  /***/
  "./src/app/shared/services/files/file-rest.service.ts": function srcAppSharedServicesFilesFileRestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileRestService", function () {
      return FileRestService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _rest_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../rest/rest.service */
    "./src/app/shared/rest/rest.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var FileRestService =
    /*#__PURE__*/
    function (_rest_rest_service__W) {
      _inherits(FileRestService, _rest_rest_service__W);

      var _super = _createSuper(FileRestService);

      function FileRestService(http) {
        _classCallCheck(this, FileRestService);

        return _super.call(this, http, 'files');
      }

      _createClass(FileRestService, [{
        key: "list",
        value: function list(filePath) {
          return _get(_getPrototypeOf(FileRestService.prototype), "get", this).call(this, "/ls?path=".concat(filePath));
        }
      }, {
        key: "makeDirect",
        value: function makeDirect(name, filePath) {
          return _get(_getPrototypeOf(FileRestService.prototype), "post", this).call(this, "/mkdir?path=".concat(filePath, "&name=").concat(name), null);
        }
      }, {
        key: "changeDirect",
        value: function changeDirect(filePath) {
          return _get(_getPrototypeOf(FileRestService.prototype), "get", this).call(this, "/cd?path=".concat(filePath));
        }
      }, {
        key: "createFile",
        value: function createFile(request) {
          return _get(_getPrototypeOf(FileRestService.prototype), "post", this).call(this, "/cr", request);
        }
      }]);

      return FileRestService;
    }(_rest_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]);

    FileRestService.??fac = function FileRestService_Factory(t) {
      return new (t || FileRestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    FileRestService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: FileRestService,
      factory: FileRestService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FileRestService, [{
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
  "./src/app/shared/services/files/file.service.ts": function srcAppSharedServicesFilesFileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileService", function () {
      return FileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FileService =
    /*#__PURE__*/
    function () {
      function FileService() {
        _classCallCheck(this, FileService);
      }

      _createClass(FileService, [{
        key: "popFromPath",
        value: function popFromPath(path) {
          if (this.isRoot(path)) {
            return path;
          }

          var p = path ? path : '';
          var split = p.split('/');
          split.splice(split.length - 2, 1);
          p = split.join('/');
          return p;
        }
      }, {
        key: "pushToPath",
        value: function pushToPath(path, folderName) {
          var p = path ? path : '';
          p += "".concat(folderName, "/");
          return p;
        }
      }, {
        key: "isRoot",
        value: function isRoot(currentPath) {
          return currentPath == '/';
        }
      }]);

      return FileService;
    }();

    FileService.??fac = function FileService_Factory(t) {
      return new (t || FileService)();
    };

    FileService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: FileService,
      factory: FileService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts": function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var ng_terminal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ng-terminal */
    "./node_modules/ng-terminal/__ivy_ngcc__/fesm2015/ng-terminal.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: SharedModule
    });
    SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [],
      imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_terminal__WEBPACK_IMPORTED_MODULE_17__["NgTerminalModule"]], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_terminal__WEBPACK_IMPORTED_MODULE_17__["NgTerminalModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](SharedModule, {
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_terminal__WEBPACK_IMPORTED_MODULE_17__["NgTerminalModule"]],
        exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_terminal__WEBPACK_IMPORTED_MODULE_17__["NgTerminalModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_terminal__WEBPACK_IMPORTED_MODULE_17__["NgTerminalModule"]],
          exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_terminal__WEBPACK_IMPORTED_MODULE_17__["NgTerminalModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
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
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Projects\simple-file-system-fe\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map