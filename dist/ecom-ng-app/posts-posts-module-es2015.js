(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"],{

/***/ "./src/app/posts/add-post/add-post.component.ts":
/*!******************************************************!*\
  !*** ./src/app/posts/add-post/add-post.component.ts ***!
  \******************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var _state_posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../state/posts.actions */ "./src/app/posts/state/posts.actions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AddPostComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddPostComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Title should be minimum 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddPostComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddPostComponent_div_10_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddPostComponent_div_10_div_2_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.postForm.get("title").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.postForm.get("title").errors.minlength);
} }
class AddPostComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
            ]),
        });
    }
    showDescriptionErrors() {
        const descriptionForm = this.postForm.get('description');
        if (descriptionForm.touched && !descriptionForm.valid) {
            if (descriptionForm.errors.required) {
                return 'Description is required';
            }
            if (descriptionForm.errors.minlength) {
                return 'Description should be of minimum 10 characters length';
            }
        }
    }
    onAddPost() {
        if (!this.postForm.valid) {
            return;
        }
        const post = {
            title: this.postForm.value.title,
            description: this.postForm.value.description,
        };
        this.store.dispatch(Object(_state_posts_actions__WEBPACK_IMPORTED_MODULE_0__["addPost"])({ post }));
    }
}
AddPostComponent.ɵfac = function AddPostComponent_Factory(t) { return new (t || AddPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AddPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddPostComponent, selectors: [["app-add-post"]], decls: 20, vars: 4, consts: [[1, "row", "my-4"], [1, "col-md-12"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["type", "text", "formControlName", "title", 1, "form-control"], [4, "ngIf"], ["formControlName", "description", 1, "form-control"], [1, "my-3"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function AddPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Add Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddPostComponent_Template_form_ngSubmit_5_listener() { return ctx.onAddPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AddPostComponent_div_10_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Add Post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.postForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.postForm.get("title").touched && !ctx.postForm.get("title").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.showDescriptionErrors());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.postForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2FkZC1wb3N0L2FkZC1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AddPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-add-post',
                templateUrl: './add-post.component.html',
                styleUrls: ['./add-post.component.css'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/posts/edit-post/edit-post.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/edit-post/edit-post.component.ts ***!
  \********************************************************/
/*! exports provided: EditPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostComponent", function() { return EditPostComponent; });
/* harmony import */ var _state_posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../state/posts.actions */ "./src/app/posts/state/posts.actions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _state_posts_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../state/posts.selector */ "./src/app/posts/state/posts.selector.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function EditPostComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Title is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditPostComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Title should be minimum 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditPostComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditPostComponent_div_10_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditPostComponent_div_10_div_2_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.postForm.get("title").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.postForm.get("title").errors.minlength);
} }
function EditPostComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditPostComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Description should be minimum 10 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditPostComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditPostComponent_div_15_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditPostComponent_div_15_div_2_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.postForm.get("description").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.postForm.get("description").errors.minlength);
} }
class EditPostComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        this.createForm();
        this.store.select(_state_posts_selector__WEBPACK_IMPORTED_MODULE_2__["getPostById"]).subscribe((post) => {
            if (post) {
                this.post = post;
                this.postForm.patchValue({
                    title: post.title,
                    description: post.description,
                });
            }
        });
    }
    createForm() {
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
            ]),
        });
    }
    onSubmit() {
        if (!this.postForm.valid) {
            return;
        }
        const title = this.postForm.value.title;
        const description = this.postForm.value.description;
        const post = {
            id: this.post.id,
            title,
            description,
        };
        //dispatch the action
        this.store.dispatch(Object(_state_posts_actions__WEBPACK_IMPORTED_MODULE_0__["updatePost"])({ post }));
        this.router.navigate(['posts']);
    }
    ngOnDestroy() {
        if (this.postSubscription) {
            this.postSubscription.unsubscribe();
        }
    }
}
EditPostComponent.ɵfac = function EditPostComponent_Factory(t) { return new (t || EditPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
EditPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditPostComponent, selectors: [["app-edit-post"]], decls: 19, vars: 3, consts: [[1, "row"], [1, "col-md-12"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["type", "text", "formControlName", "title", 1, "form-control"], [4, "ngIf"], ["formControlName", "description", 1, "form-control"], [1, "my-3"], ["type", "submit", 1, "btn", "btn-primary"]], template: function EditPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Update Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EditPostComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, EditPostComponent_div_10_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EditPostComponent_div_15_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Update Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.postForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.postForm.get("title").touched && !ctx.postForm.get("title").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.postForm.get("description").touched && !ctx.postForm.get("description").valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2VkaXQtcG9zdC9lZGl0LXBvc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](EditPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-edit-post',
                templateUrl: './edit-post.component.html',
                styleUrls: ['./edit-post.component.css'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/posts/posts-list/posts-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/posts/posts-list/posts-list.component.ts ***!
  \**********************************************************/
/*! exports provided: PostsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsListComponent", function() { return PostsListComponent; });
/* harmony import */ var _state_posts_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../state/posts.selector */ "./src/app/posts/state/posts.selector.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _state_posts_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/posts.actions */ "./src/app/posts/state/posts.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a1) { return ["edit", a1]; };
const _c1 = function (a1) { return ["details", a1]; };
function PostsListComponent_table_8_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostsListComponent_table_8_tr_12_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const post_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.onDeletePost(post_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, post_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, post_r3.id));
} }
function PostsListComponent_table_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PostsListComponent_table_8_tr_12_Template, 16, 9, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const postsData_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", postsData_r1);
} }
const _c2 = function () { return ["/posts/add"]; };
class PostsListComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.posts = this.store.select(_state_posts_selector__WEBPACK_IMPORTED_MODULE_0__["getPosts"]);
        this.count = this.store.select(_state_posts_selector__WEBPACK_IMPORTED_MODULE_0__["getCount"]);
        this.store.dispatch(Object(_state_posts_actions__WEBPACK_IMPORTED_MODULE_2__["loadPosts"])());
    }
    onDeletePost(id) {
        if (confirm('Are you sure you want to delete')) {
            this.store.dispatch(Object(_state_posts_actions__WEBPACK_IMPORTED_MODULE_2__["deletePost"])({ id }));
        }
    }
}
PostsListComponent.ɵfac = function PostsListComponent_Factory(t) { return new (t || PostsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
PostsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostsListComponent, selectors: [["app-posts-list"]], decls: 12, vars: 8, consts: [[1, "row"], [1, "col-md-8"], ["href", "#", 1, "btn", "btn-primary", 3, "routerLink"], ["class", "table table-striped", 4, "ngIf"], [1, "col-md-4"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [2, "word-break", "break-all"], ["href", "", 1, "btn", "btn-primary", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"], ["href", "", 1, "btn", "btn-info", 3, "routerLink"]], template: function PostsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Add Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PostsListComponent_table_8_Template, 13, 1, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Posts List (", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, ctx.count), ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, ctx.posts));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLWxpc3QvcG9zdHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-posts-list',
                templateUrl: './posts-list.component.html',
                styleUrls: ['./posts-list.component.css'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/posts/posts.module.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var _state_posts_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state/posts.effects */ "./src/app/posts/state/posts.effects.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _state_posts_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/posts.selector */ "./src/app/posts/state/posts.selector.ts");
/* harmony import */ var _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-post/edit-post.component */ "./src/app/posts/edit-post/edit-post.component.ts");
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-post/add-post.component */ "./src/app/posts/add-post/add-post.component.ts");
/* harmony import */ var _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts-list/posts-list.component */ "./src/app/posts/posts-list/posts-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _state_posts_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/posts.reducer */ "./src/app/posts/state/posts.reducer.ts");
/* harmony import */ var _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./single-post/single-post.component */ "./src/app/posts/single-post/single-post.component.ts");

















const routes = [
    {
        path: '',
        component: _posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__["PostsListComponent"],
        children: [
            { path: 'add', component: _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_4__["AddPostComponent"] },
            {
                path: 'edit/:id',
                component: _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_3__["EditPostComponent"],
            },
        ],
    },
];
class PostsModule {
}
PostsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PostsModule });
PostsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function PostsModule_Factory(t) { return new (t || PostsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature(_state_posts_selector__WEBPACK_IMPORTED_MODULE_2__["POST_STATE_NAME"], _state_posts_reducer__WEBPACK_IMPORTED_MODULE_11__["postsReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_state_posts_effects__WEBPACK_IMPORTED_MODULE_0__["PostsEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PostsModule, { declarations: [_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__["PostsListComponent"], _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_4__["AddPostComponent"], _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_3__["EditPostComponent"], _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_12__["SinglePostComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](PostsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
                declarations: [_posts_list_posts_list_component__WEBPACK_IMPORTED_MODULE_5__["PostsListComponent"], _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_4__["AddPostComponent"], _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_3__["EditPostComponent"], _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_12__["SinglePostComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature(_state_posts_selector__WEBPACK_IMPORTED_MODULE_2__["POST_STATE_NAME"], _state_posts_reducer__WEBPACK_IMPORTED_MODULE_11__["postsReducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_state_posts_effects__WEBPACK_IMPORTED_MODULE_0__["PostsEffects"]]),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/posts/state/posts.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/posts/state/posts.actions.ts ***!
  \**********************************************/
/*! exports provided: ADD_POST_ACTION, ADD_POST_SUCCESS, UPDATE_POST_ACTION, UPDATE_POST_SUCCESS, DELETE_POST_ACTION, DELETE_POST_SUCCESS, LOAD_POSTS, LOAD_POSTS_SUCCESS, addPost, addPostSuccess, updatePost, updatePostSuccess, deletePost, deletePostSuccess, loadPosts, loadPostsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_ACTION", function() { return ADD_POST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_ACTION", function() { return UPDATE_POST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_SUCCESS", function() { return UPDATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_ACTION", function() { return DELETE_POST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_SUCCESS", function() { return DELETE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS", function() { return LOAD_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostSuccess", function() { return addPostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePost", function() { return updatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePostSuccess", function() { return updatePostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostSuccess", function() { return deletePostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPosts", function() { return loadPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPostsSuccess", function() { return loadPostsSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const ADD_POST_ACTION = '[posts page] add post';
const ADD_POST_SUCCESS = '[posts page] add post success';
const UPDATE_POST_ACTION = '[posts page] update post';
const UPDATE_POST_SUCCESS = '[posts page] update post success';
const DELETE_POST_ACTION = '[posts page] delete post';
const DELETE_POST_SUCCESS = '[posts page] delete post success';
const LOAD_POSTS = '[posts page] load posts';
const LOAD_POSTS_SUCCESS = '[posts page] load posts success';
const addPost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_POST_ACTION, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addPostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_POST_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updatePost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_POST_ACTION, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updatePostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_POST_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_POST_ACTION, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_POST_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadPosts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_POSTS);
const loadPostsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_POSTS_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/posts/state/posts.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/posts/state/posts.effects.ts ***!
  \**********************************************/
/*! exports provided: PostsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsEffects", function() { return PostsEffects; });
/* harmony import */ var _posts_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.selector */ "./src/app/posts/state/posts.selector.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _posts_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.actions */ "./src/app/posts/state/posts.actions.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/ngrx-router-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/state/auth.actions */ "./src/app/auth/state/auth.actions.ts");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");












class PostsEffects {
    constructor(actions$, postsService, store) {
        this.actions$ = actions$;
        this.postsService = postsService;
        this.store = store;
        this.loadPosts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["loadPosts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.store.select(_posts_selector__WEBPACK_IMPORTED_MODULE_0__["getPosts"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(([action, posts]) => {
                if (!posts.length || posts.length === 1) {
                    return this.postsService.getPosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((posts) => {
                        return Object(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["loadPostsSuccess"])({ posts });
                    }));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(Object(src_app_auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_7__["dummyAction"])());
            }));
        });
        this.addPost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["addPost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((action) => {
                return this.postsService.addPost(action.post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
                    const post = Object.assign(Object.assign({}, action.post), { id: data.name });
                    return Object(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["addPostSuccess"])({ post });
                }));
            }));
        });
        this.updatePost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["updatePost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((action) => {
                return this.postsService.updatePost(action.post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
                    const updatedPost = {
                        id: action.post.id,
                        changes: Object.assign({}, action.post),
                    };
                    return Object(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["updatePostSuccess"])({ post: updatedPost });
                }));
            }));
        });
        this.deletePost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["deletePost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((action) => {
                return this.postsService.deletePost(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
                    return Object(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["deletePostSuccess"])({ id: action.id });
                }));
            }));
        });
        this.getSinglePost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__["ROUTER_NAVIGATION"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((r) => {
                return r.payload.routerState.url.startsWith('/posts/details');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((r) => {
                return r.payload.routerState['params']['id'];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.store.select(_posts_selector__WEBPACK_IMPORTED_MODULE_0__["getPosts"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(([id, posts]) => {
                if (!posts.length) {
                    return this.postsService.getPostById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((post) => {
                        const postData = [Object.assign(Object.assign({}, post), { id })];
                        return Object(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["loadPostsSuccess"])({ posts: postData });
                    }));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(Object(src_app_auth_state_auth_actions__WEBPACK_IMPORTED_MODULE_7__["dummyAction"])());
            }));
        });
    }
}
PostsEffects.ɵfac = function PostsEffects_Factory(t) { return new (t || PostsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_8__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"])); };
PostsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PostsEffects, factory: PostsEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](PostsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_8__["PostsService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/posts/state/posts.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/posts/state/posts.reducer.ts ***!
  \**********************************************/
/*! exports provided: postsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsReducer", function() { return postsReducer; });
/* harmony import */ var _posts_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.actions */ "./src/app/posts/state/posts.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _posts_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.state */ "./src/app/posts/state/posts.state.ts");



const _postsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_posts_state__WEBPACK_IMPORTED_MODULE_2__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_0__["addPostSuccess"], (state, action) => {
    return _posts_state__WEBPACK_IMPORTED_MODULE_2__["postsAdapter"].addOne(action.post, Object.assign(Object.assign({}, state), { count: state.count + 1 }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_0__["updatePostSuccess"], (state, action) => {
    return _posts_state__WEBPACK_IMPORTED_MODULE_2__["postsAdapter"].updateOne(action.post, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_0__["deletePostSuccess"], (state, { id }) => {
    return _posts_state__WEBPACK_IMPORTED_MODULE_2__["postsAdapter"].removeOne(id, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_0__["loadPostsSuccess"], (state, action) => {
    return _posts_state__WEBPACK_IMPORTED_MODULE_2__["postsAdapter"].setAll(action.posts, Object.assign(Object.assign({}, state), { count: state.count + 1 }));
}));
function postsReducer(state, action) {
    return _postsReducer(state, action);
}


/***/ }),

/***/ "./src/app/services/posts.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PostsService {
    constructor(http) {
        this.http = http;
    }
    getPosts() {
        return this.http
            .get(`https://vue-completecourse.firebaseio.com/posts.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            const posts = [];
            for (let key in data) {
                posts.push(Object.assign(Object.assign({}, data[key]), { id: key }));
            }
            return posts;
        }));
    }
    addPost(post) {
        return this.http.post(`https://vue-completecourse.firebaseio.com/posts.json`, post);
    }
    updatePost(post) {
        const postData = {
            [post.id]: { title: post.title, description: post.description },
        };
        return this.http.patch(`https://vue-completecourse.firebaseio.com/posts.json`, postData);
    }
    deletePost(id) {
        return this.http.delete(`https://vue-completecourse.firebaseio.com/posts/${id}.json`);
    }
    getPostById(id) {
        return this.http.get(`https://vue-completecourse.firebaseio.com/posts/${id}.json`);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=posts-posts-module-es2015.js.map