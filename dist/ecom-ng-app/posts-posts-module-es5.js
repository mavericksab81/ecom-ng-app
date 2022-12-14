(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"], {
    /***/
    "./src/app/posts/add-post/add-post.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/posts/add-post/add-post.component.ts ***!
      \******************************************************/

    /*! exports provided: AddPostComponent */

    /***/
    function srcAppPostsAddPostAddPostComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPostComponent", function () {
        return AddPostComponent;
      });
      /* harmony import */


      var _state_posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../state/posts.actions */
      "./src/app/posts/state/posts.actions.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AddPostComponent_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Title is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function AddPostComponent_div_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Title should be minimum 6 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function AddPostComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, AddPostComponent_div_10_div_1_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, AddPostComponent_div_10_div_2_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.postForm.get("title").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.postForm.get("title").errors.minlength);
        }
      }

      var AddPostComponent = /*#__PURE__*/function () {
        function AddPostComponent(store) {
          _classCallCheck(this, AddPostComponent);

          this.store = store;
        }

        _createClass(AddPostComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)])
            });
          }
        }, {
          key: "showDescriptionErrors",
          value: function showDescriptionErrors() {
            var descriptionForm = this.postForm.get('description');

            if (descriptionForm.touched && !descriptionForm.valid) {
              if (descriptionForm.errors.required) {
                return 'Description is required';
              }

              if (descriptionForm.errors.minlength) {
                return 'Description should be of minimum 10 characters length';
              }
            }
          }
        }, {
          key: "onAddPost",
          value: function onAddPost() {
            if (!this.postForm.valid) {
              return;
            }

            var post = {
              title: this.postForm.value.title,
              description: this.postForm.value.description
            };
            this.store.dispatch(Object(_state_posts_actions__WEBPACK_IMPORTED_MODULE_0__["addPost"])({
              post: post
            }));
          }
        }]);

        return AddPostComponent;
      }();

      AddPostComponent.??fac = function AddPostComponent_Factory(t) {
        return new (t || AddPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
      };

      AddPostComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: AddPostComponent,
        selectors: [["app-add-post"]],
        decls: 20,
        vars: 4,
        consts: [[1, "row", "my-4"], [1, "col-md-12"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["type", "text", "formControlName", "title", 1, "form-control"], [4, "ngIf"], ["formControlName", "description", 1, "form-control"], [1, "my-3"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
        template: function AddPostComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Add Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function AddPostComponent_Template_form_ngSubmit_5_listener() {
              return ctx.onAddPost();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, AddPostComponent_div_10_Template, 3, 2, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "textarea", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, " Add Post ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.postForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.postForm.get("title").touched && !ctx.postForm.get("title").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.showDescriptionErrors());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx.postForm.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2FkZC1wb3N0L2FkZC1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](AddPostComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-add-post',
            templateUrl: './add-post.component.html',
            styleUrls: ['./add-post.component.css']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/posts/edit-post/edit-post.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/posts/edit-post/edit-post.component.ts ***!
      \********************************************************/

    /*! exports provided: EditPostComponent */

    /***/
    function srcAppPostsEditPostEditPostComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPostComponent", function () {
        return EditPostComponent;
      });
      /* harmony import */


      var _state_posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../state/posts.actions */
      "./src/app/posts/state/posts.actions.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _state_posts_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../state/posts.selector */
      "./src/app/posts/state/posts.selector.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function EditPostComponent_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Title is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      function EditPostComponent_div_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Title should be minimum 6 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      function EditPostComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, EditPostComponent_div_10_div_1_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, EditPostComponent_div_10_div_2_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r0.postForm.get("title").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r0.postForm.get("title").errors.minlength);
        }
      }

      function EditPostComponent_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Description is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      function EditPostComponent_div_15_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Description should be minimum 10 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }
      }

      function EditPostComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, EditPostComponent_div_15_div_1_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, EditPostComponent_div_15_div_2_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.postForm.get("description").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.postForm.get("description").errors.minlength);
        }
      }

      var EditPostComponent = /*#__PURE__*/function () {
        function EditPostComponent(store, router) {
          _classCallCheck(this, EditPostComponent);

          this.store = store;
          this.router = router;
        }

        _createClass(EditPostComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.createForm();
            this.store.select(_state_posts_selector__WEBPACK_IMPORTED_MODULE_2__["getPostById"]).subscribe(function (post) {
              if (post) {
                _this.post = post;

                _this.postForm.patchValue({
                  title: post.title,
                  description: post.description
                });
              }
            });
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)])
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (!this.postForm.valid) {
              return;
            }

            var title = this.postForm.value.title;
            var description = this.postForm.value.description;
            var post = {
              id: this.post.id,
              title: title,
              description: description
            }; //dispatch the action

            this.store.dispatch(Object(_state_posts_actions__WEBPACK_IMPORTED_MODULE_0__["updatePost"])({
              post: post
            }));
            this.router.navigate(['posts']);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.postSubscription) {
              this.postSubscription.unsubscribe();
            }
          }
        }]);

        return EditPostComponent;
      }();

      EditPostComponent.??fac = function EditPostComponent_Factory(t) {
        return new (t || EditPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      EditPostComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: EditPostComponent,
        selectors: [["app-edit-post"]],
        decls: 19,
        vars: 3,
        consts: [[1, "row"], [1, "col-md-12"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["type", "text", "formControlName", "title", 1, "form-control"], [4, "ngIf"], ["formControlName", "description", 1, "form-control"], [1, "my-3"], ["type", "submit", 1, "btn", "btn-primary"]],
        template: function EditPostComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "Update Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngSubmit", function EditPostComponent_Template_form_ngSubmit_5_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](10, EditPostComponent_div_10_Template, 3, 2, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](14, "textarea", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](15, EditPostComponent_div_15_Template, 3, 2, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18, "Update Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.postForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.postForm.get("title").touched && !ctx.postForm.get("title").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.postForm.get("description").touched && !ctx.postForm.get("description").valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2VkaXQtcG9zdC9lZGl0LXBvc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](EditPostComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'app-edit-post',
            templateUrl: './edit-post.component.html',
            styleUrls: ['./edit-post.component.css']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/posts/posts-list/posts-list.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/posts/posts-list/posts-list.component.ts ***!
      \**********************************************************/

    /*! exports provided: PostsListComponent */

    /***/
    function srcAppPostsPostsListPostsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsListComponent", function () {
        return PostsListComponent;
      });
      /* harmony import */


      var _state_posts_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../state/posts.selector */
      "./src/app/posts/state/posts.selector.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _state_posts_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../state/posts.actions */
      "./src/app/posts/state/posts.actions.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = function _c0(a1) {
        return ["edit", a1];
      };

      var _c1 = function _c1(a1) {
        return ["details", a1];
      };

      function PostsListComponent_table_8_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function PostsListComponent_table_8_tr_12_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5);

            var post_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

            return ctx_r4.onDeletePost(post_r3.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var post_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](post_r3.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](post_r3.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](post_r3.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](5, _c0, post_r3.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](7, _c1, post_r3.id));
        }
      }

      function PostsListComponent_table_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, PostsListComponent_table_8_tr_12_Template, 16, 9, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var postsData_r1 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", postsData_r1);
        }
      }

      var _c2 = function _c2() {
        return ["/posts/add"];
      };

      var PostsListComponent = /*#__PURE__*/function () {
        function PostsListComponent(store) {
          _classCallCheck(this, PostsListComponent);

          this.store = store;
        }

        _createClass(PostsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.posts = this.store.select(_state_posts_selector__WEBPACK_IMPORTED_MODULE_0__["getPosts"]);
            this.count = this.store.select(_state_posts_selector__WEBPACK_IMPORTED_MODULE_0__["getCount"]);
            this.store.dispatch(Object(_state_posts_actions__WEBPACK_IMPORTED_MODULE_2__["loadPosts"])());
          }
        }, {
          key: "onDeletePost",
          value: function onDeletePost(id) {
            if (confirm('Are you sure you want to delete')) {
              this.store.dispatch(Object(_state_posts_actions__WEBPACK_IMPORTED_MODULE_2__["deletePost"])({
                id: id
              }));
            }
          }
        }]);

        return PostsListComponent;
      }();

      PostsListComponent.??fac = function PostsListComponent_Factory(t) {
        return new (t || PostsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
      };

      PostsListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: PostsListComponent,
        selectors: [["app-posts-list"]],
        decls: 12,
        vars: 8,
        consts: [[1, "row"], [1, "col-md-8"], ["href", "#", 1, "btn", "btn-primary", 3, "routerLink"], ["class", "table table-striped", 4, "ngIf"], [1, "col-md-4"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [2, "word-break", "break-all"], ["href", "", 1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"], ["href", "", 1, "btn", "btn-info", 3, "routerLink"]],
        template: function PostsListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Add Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, PostsListComponent_table_8_Template, 13, 1, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Posts List (", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](4, 3, ctx.count), ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](7, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](9, 5, ctx.posts));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWxpc3QvcG9zdHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](PostsListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-posts-list',
            templateUrl: './posts-list.component.html',
            styleUrls: ['./posts-list.component.css']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/posts/posts.module.ts":
    /*!***************************************!*\
      !*** ./src/app/posts/posts.module.ts ***!
      \***************************************/

    /*! exports provided: PostsModule */

    /***/
    function srcAppPostsPostsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsModule", function () {
        return PostsModule;
      });
      /* harmony import */


      var _state_posts_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./state/posts.effects */
      "./src/app/posts/state/posts.effects.ts");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
      /* harmony import */


      var _state_posts_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./state/posts.selector */
      "./src/app/posts/state/posts.selector.ts");
      /* harmony import */


      var _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-post/edit-post.component */
      "./src/app/posts/edit-post/edit-post.component.ts");
      /* harmony import */


      var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-post/add-post.component */
      "./src/app/posts/add-post/add-post.component.ts");
      /* harmony import */


      var _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./posts-list/posts-list.component */
      "./src/app/posts/posts-list/posts-list.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
      /* harmony import */


      var _state_posts_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./state/posts.reducer */
      "./src/app/posts/state/posts.reducer.ts");
      /* harmony import */


      var _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./single-post/single-post.component */
      "./src/app/posts/single-post/single-post.component.ts");

      var routes = [{
        path: '',
        component: _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__["PostsListComponent"],
        children: [{
          path: 'add',
          component: _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_4__["AddPostComponent"]
        }, {
          path: 'edit/:id',
          component: _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_3__["EditPostComponent"]
        }]
      }];

      var PostsModule = function PostsModule() {
        _classCallCheck(this, PostsModule);
      };

      PostsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({
        type: PostsModule
      });
      PostsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({
        factory: function PostsModule_Factory(t) {
          return new (t || PostsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes), _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature(_state_posts_selector__WEBPACK_IMPORTED_MODULE_2__["POST_STATE_NAME"], _state_posts_reducer__WEBPACK_IMPORTED_MODULE_11__["postsReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_state_posts_effects__WEBPACK_IMPORTED_MODULE_0__["PostsEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](PostsModule, {
          declarations: [_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__["PostsListComponent"], _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_4__["AddPostComponent"], _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_3__["EditPostComponent"], _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_12__["SinglePostComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsFeatureModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["??setClassMetadata"](PostsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
          args: [{
            declarations: [_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__["PostsListComponent"], _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_4__["AddPostComponent"], _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_3__["EditPostComponent"], _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_12__["SinglePostComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes), _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature(_state_posts_selector__WEBPACK_IMPORTED_MODULE_2__["POST_STATE_NAME"], _state_posts_reducer__WEBPACK_IMPORTED_MODULE_11__["postsReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_state_posts_effects__WEBPACK_IMPORTED_MODULE_0__["PostsEffects"]])]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/posts/state/posts.actions.ts":
    /*!**********************************************!*\
      !*** ./src/app/posts/state/posts.actions.ts ***!
      \**********************************************/

    /*! exports provided: ADD_POST_ACTION, ADD_POST_SUCCESS, UPDATE_POST_ACTION, UPDATE_POST_SUCCESS, DELETE_POST_ACTION, DELETE_POST_SUCCESS, LOAD_POSTS, LOAD_POSTS_SUCCESS, addPost, addPostSuccess, updatePost, updatePostSuccess, deletePost, deletePostSuccess, loadPosts, loadPostsSuccess */

    /***/
    function srcAppPostsStatePostsActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ADD_POST_ACTION", function () {
        return ADD_POST_ACTION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function () {
        return ADD_POST_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UPDATE_POST_ACTION", function () {
        return UPDATE_POST_ACTION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UPDATE_POST_SUCCESS", function () {
        return UPDATE_POST_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DELETE_POST_ACTION", function () {
        return DELETE_POST_ACTION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DELETE_POST_SUCCESS", function () {
        return DELETE_POST_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOAD_POSTS", function () {
        return LOAD_POSTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function () {
        return LOAD_POSTS_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addPost", function () {
        return addPost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addPostSuccess", function () {
        return addPostSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updatePost", function () {
        return updatePost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updatePostSuccess", function () {
        return updatePostSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deletePost", function () {
        return deletePost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deletePostSuccess", function () {
        return deletePostSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadPosts", function () {
        return loadPosts;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadPostsSuccess", function () {
        return loadPostsSuccess;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

      var ADD_POST_ACTION = '[posts page] add post';
      var ADD_POST_SUCCESS = '[posts page] add post success';
      var UPDATE_POST_ACTION = '[posts page] update post';
      var UPDATE_POST_SUCCESS = '[posts page] update post success';
      var DELETE_POST_ACTION = '[posts page] delete post';
      var DELETE_POST_SUCCESS = '[posts page] delete post success';
      var LOAD_POSTS = '[posts page] load posts';
      var LOAD_POSTS_SUCCESS = '[posts page] load posts success';
      var addPost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_POST_ACTION, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var addPostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_POST_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updatePost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_POST_ACTION, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updatePostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_POST_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deletePost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_POST_ACTION, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deletePostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_POST_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadPosts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_POSTS);
      var loadPostsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_POSTS_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "./src/app/posts/state/posts.effects.ts":
    /*!**********************************************!*\
      !*** ./src/app/posts/state/posts.effects.ts ***!
      \**********************************************/

    /*! exports provided: PostsEffects */

    /***/
    function srcAppPostsStatePostsEffectsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsEffects", function () {
        return PostsEffects;
      });
      /* harmony import */


      var _posts_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./posts.selector */
      "./src/app/posts/state/posts.selector.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _posts_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./posts.actions */
      "./src/app/posts/state/posts.actions.ts");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/effects */
      "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/router-store */
      "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/ngrx-router-store.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_app_auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/auth/state/auth.actions */
      "./src/app/auth/state/auth.actions.ts");
      /* harmony import */


      var _services_posts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../services/posts.service */
      "./src/app/services/posts.service.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

      var PostsEffects = function PostsEffects(actions$, postsService, store) {
        var _this2 = this;

        _classCallCheck(this, PostsEffects);

        this.actions$ = actions$;
        this.postsService = postsService;
        this.store = store;
        this.loadPosts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["loadPosts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(_this2.store.select(_posts_selector__WEBPACK_IMPORTED_MODULE_0__["getPosts"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                action = _ref2[0],
                posts = _ref2[1];

            if (!posts.length || posts.length === 1) {
              return _this2.postsService.getPosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (posts) {
                return Object(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["loadPostsSuccess"])({
                  posts: posts
                });
              }));
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(Object(src_app_auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_7__["dummyAction"])());
          }));
        });
        this.addPost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["addPost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (action) {
            return _this2.postsService.addPost(action.post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              var post = Object.assign(Object.assign({}, action.post), {
                id: data.name
              });
              return Object(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["addPostSuccess"])({
                post: post
              });
            }));
          }));
        });
        this.updatePost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["updatePost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (action) {
            return _this2.postsService.updatePost(action.post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              var updatedPost = {
                id: action.post.id,
                changes: Object.assign({}, action.post)
              };
              return Object(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["updatePostSuccess"])({
                post: updatedPost
              });
            }));
          }));
        });
        this.deletePost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["deletePost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (action) {
            return _this2.postsService.deletePost(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              return Object(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["deletePostSuccess"])({
                id: action.id
              });
            }));
          }));
        });
        this.getSinglePost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this2.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__["ROUTER_NAVIGATION"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (r) {
            return r.payload.routerState.url.startsWith('/posts/details');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (r) {
            return r.payload.routerState['params']['id'];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(_this2.store.select(_posts_selector__WEBPACK_IMPORTED_MODULE_0__["getPosts"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                id = _ref4[0],
                posts = _ref4[1];

            if (!posts.length) {
              return _this2.postsService.getPostById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (post) {
                var postData = [Object.assign(Object.assign({}, post), {
                  id: id
                })];
                return Object(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["loadPostsSuccess"])({
                  posts: postData
                });
              }));
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(Object(src_app_auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_7__["dummyAction"])());
          }));
        });
      };

      PostsEffects.??fac = function PostsEffects_Factory(t) {
        return new (t || PostsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_8__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]));
      };

      PostsEffects.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({
        token: PostsEffects,
        factory: PostsEffects.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["??setClassMetadata"](PostsEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
          }, {
            type: _services_posts_service__WEBPACK_IMPORTED_MODULE_8__["PostsService"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/posts/state/posts.reducer.ts":
    /*!**********************************************!*\
      !*** ./src/app/posts/state/posts.reducer.ts ***!
      \**********************************************/

    /*! exports provided: postsReducer */

    /***/
    function srcAppPostsStatePostsReducerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "postsReducer", function () {
        return postsReducer;
      });
      /* harmony import */


      var _posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./posts.actions */
      "./src/app/posts/state/posts.actions.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
      /* harmony import */


      var _posts_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./posts.state */
      "./src/app/posts/state/posts.state.ts");

      var _postsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_posts_state__WEBPACK_IMPORTED_MODULE_2__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_0__["addPostSuccess"], function (state, action) {
        return _posts_state__WEBPACK_IMPORTED_MODULE_2__["postsAdapter"].addOne(action.post, Object.assign(Object.assign({}, state), {
          count: state.count + 1
        }));
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_0__["updatePostSuccess"], function (state, action) {
        return _posts_state__WEBPACK_IMPORTED_MODULE_2__["postsAdapter"].updateOne(action.post, state);
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_0__["deletePostSuccess"], function (state, _ref5) {
        var id = _ref5.id;
        return _posts_state__WEBPACK_IMPORTED_MODULE_2__["postsAdapter"].removeOne(id, state);
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_0__["loadPostsSuccess"], function (state, action) {
        return _posts_state__WEBPACK_IMPORTED_MODULE_2__["postsAdapter"].setAll(action.posts, Object.assign(Object.assign({}, state), {
          count: state.count + 1
        }));
      }));

      function postsReducer(state, action) {
        return _postsReducer(state, action);
      }
      /***/

    },

    /***/
    "./src/app/services/posts.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/posts.service.ts ***!
      \*******************************************/

    /*! exports provided: PostsService */

    /***/
    function srcAppServicesPostsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsService", function () {
        return PostsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var PostsService = /*#__PURE__*/function () {
        function PostsService(http) {
          _classCallCheck(this, PostsService);

          this.http = http;
        }

        _createClass(PostsService, [{
          key: "getPosts",
          value: function getPosts() {
            return this.http.get("https://vue-completecourse.firebaseio.com/posts.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
              var posts = [];

              for (var key in data) {
                posts.push(Object.assign(Object.assign({}, data[key]), {
                  id: key
                }));
              }

              return posts;
            }));
          }
        }, {
          key: "addPost",
          value: function addPost(post) {
            return this.http.post("https://vue-completecourse.firebaseio.com/posts.json", post);
          }
        }, {
          key: "updatePost",
          value: function updatePost(post) {
            var postData = _defineProperty({}, post.id, {
              title: post.title,
              description: post.description
            });

            return this.http.patch("https://vue-completecourse.firebaseio.com/posts.json", postData);
          }
        }, {
          key: "deletePost",
          value: function deletePost(id) {
            return this.http["delete"]("https://vue-completecourse.firebaseio.com/posts/".concat(id, ".json"));
          }
        }, {
          key: "getPostById",
          value: function getPostById(id) {
            return this.http.get("https://vue-completecourse.firebaseio.com/posts/".concat(id, ".json"));
          }
        }]);

        return PostsService;
      }();

      PostsService.??fac = function PostsService_Factory(t) {
        return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      PostsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: PostsService,
        factory: PostsService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PostsService, [{
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

    }
  }]);
})();
//# sourceMappingURL=posts-posts-module-es5.js.map