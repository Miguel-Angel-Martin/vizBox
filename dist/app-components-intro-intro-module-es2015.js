(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-intro-intro-module"],{

/***/ "./node_modules/@avl-controls/core/dist/avl-card/avl-card.css.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-card/avl-card.css.js ***!
  \***********************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer */ "./node_modules/@polymer/polymer/polymer-element.js");

const style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"] `<style>
:host {
  --avl-card-background-color: var(--avl-background-color);
  --avl-card-text-color: var(--avl-foreground-color);
  --avl-card-action-background-color: var(--avl-background-color);
  --avl-card-shadow: var(--avl-box-shadow-1dp);
  
  font-family: var(--avl-font-family);
  background-color: var(--avl-card-background-color);
  color: var(--avl-card-text-color);
  
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  border-radius: 2px;
  font-size: 14px;
  box-shadow: var(--avl-card-shadow);
  width: 100%;
  height: auto;
}

.thumbnail {
  width: 40px;
  height: 40px;
  margin-right: 16px;
  align-self: center;
  flex-shrink: 0;
}

.heading-content {
  padding: 16px 24px;
}

.heading-content > div {
  display: flex;
  flex-direction: row;
}

:host ::slotted([slot="title"]) {
  margin: 0px;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 26px;
}

.avl-card ::slotted([slot="title"]) {
  margin: 0px;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 26px;
  font-size: 24px;
}

.avl-card ::slotted([slot="subtitle"]) {
  margin: 0px;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 26px;
  font-size: 16px;
}

:host ::slotted([slot="subtitle"]) {
  margin: 0px;
  font-size: 16px;
  padding-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 24px;
}

.title {
  display: inline-grid;
}

::slotted([slot="content"]) {
  padding: 0px;
  position: relative;
}

::slotted(div) {
  padding: 0px;
}

.content {
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
}

.header {
  position: relative;
  padding: 0;
  color: var(--avl-card-text-color);
}

iron-image {
  --iron-image-width: 100%;
  --iron-image-height: auto;
  display: block;
}

.image {
  padding-bottom: 16px;
}

div.content {
  padding: 0px 24px 16px;
}

div.actions{
  padding: 0px 16px;
}

.actions {
  margin-top: auto;
  bottom: 0;
  background-color: var(--avl-card-action-background-color);
}

.actions ::slotted([slot="actions"]) {
  padding: 0px;
  float: left;
}

.actions ::slotted([slot="actions-right"]) {
  padding: 0px;
  float: right;
}</style>`;

//# sourceMappingURL=avl-card.css.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-card/avl-card.html.js":
/*!************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-card/avl-card.html.js ***!
  \************************************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-card.css */ "./node_modules/@avl-controls/core/dist/avl-card/avl-card.css.js");
/* harmony import */ var _all_initial_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all-initial.css */ "./node_modules/@avl-controls/core/dist/all-initial.css.js");
/* harmony import */ var _avl_icon_avl_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../avl-icon/avl-icon */ "./node_modules/@avl-controls/core/dist/avl-icon/avl-icon.js");
/* harmony import */ var _polymer_iron_image_iron_image_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-image/iron-image.js */ "./node_modules/@polymer/iron-image/iron-image.js");





let template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
  ${_all_initial_css__WEBPACK_IMPORTED_MODULE_2__["allInitial"]}
  ${_avl_card_css__WEBPACK_IMPORTED_MODULE_1__["style"]}

  <div class="header" class$={{getHeaderClass()}}>
    <template is="dom-if" if="{{titleBelowImage}}">
      <iron-image src="[[image]]" > </iron-image>
      <div class="heading-content">
        <div>
          <template is="dom-if" if="[[titleIcon]]">
            <avl-icon class="thumbnail" icon="[[titleIcon]]"></avl-icon>
          </template>
          <div class="title">
            <slot name="title"> </slot>
            <slot name="subtitle"> </slot>
          </div>
        </div>
      </div>
    </template>

    <template is="dom-if" if="{{!titleBelowImage}}">
      <div class="heading-content">
        <div>
          <template is="dom-if" if="[[titleIcon]]">
            <avl-icon class="thumbnail" icon="[[titleIcon]]"></avl-icon>
          </template>
      
          <div class="title">
            <slot name="title"> </slot>
            <slot name="subtitle"> </slot>
          </div>
        </div>
      </div>

      <template is="dom-if" if="[[image]]">
        <iron-image src="[[image]]" class="image" > </iron-image>
      </template>
    </template>
  </div>

  <div class="content">
    <slot> </slot>
    <slot name="content"> </slot>
  </div>

  <div class="actions">
    <slot name="actions"> </slot>
    <slot name="actions-right"> </slot>
  </div>`;

//# sourceMappingURL=avl-card.html.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-card/avl-card.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-card/avl-card.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_card_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-card.html */ "./node_modules/@avl-controls/core/dist/avl-card/avl-card.html.js");


class AvlCardImpl extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
    constructor() {
        super(...arguments);
        this.titleBelowImage = false;
    }
    static get is() {
        return 'avl-card';
    }
    static get template() {
        return _avl_card_html__WEBPACK_IMPORTED_MODULE_1__["template"];
    }
    static get properties() {
        return {
            image: String,
            titleBelowImage: Boolean,
            titleIcon: String,
        };
    }
    getHeaderClass() {
        if (this.image == null) {
            return 'header no-image';
        }
        return 'header';
    }
}
customElements.define(AvlCardImpl.is, AvlCardImpl);

//# sourceMappingURL=avl-card.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.css.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.css.js ***!
  \*********************************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer */ "./node_modules/@polymer/polymer/polymer-element.js");

const style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"] `<style>
:host{
  display: inline-block;
  flex-wrap: wrap;
}

avl-chips-chip:hover{
  cursor: pointer;
}

avl-chips-chip{
  margin: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  transition-property: box-shadow;
  transition-duration: 0.2s; 
  display: inline-flex;
}

avl-chips-chip[disabled]{
  cursor: default;
}

avl-chips-chip[readonly]{
  cursor: default;
}

avl-chips-chip:active:not([disabled]){
  background-color: var(--avl-chips-chip-pressed-color, var(--avl-ink-pressed-color));
  box-shadow: var(--avl-chips-shadow ,var(--avl-box-shadow-8dp));
}

.title{
  padding-top:2px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: var(--avl-foreground-color);
}

.container{
  display: inline-flex;
  flex-wrap: wrap;
}</style>`;

//# sourceMappingURL=avl-chip-list.css.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.html.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.html.js ***!
  \**********************************************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_chip_list_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-chip-list.css */ "./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.css.js");
/* harmony import */ var _all_initial_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all-initial.css */ "./node_modules/@avl-controls/core/dist/all-initial.css.js");
/* harmony import */ var _avl_chips_chip_avl_chips_chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../avl-chips-chip/avl-chips-chip */ "./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.js");




let template = _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["html"] `
  ${_all_initial_css__WEBPACK_IMPORTED_MODULE_2__["allInitial"]}
  ${_avl_chip_list_css__WEBPACK_IMPORTED_MODULE_1__["style"]}
  <template is="dom-if" if="[[label]]">
      <div class="title">{{label}}</div>
    </template>
    <div class="container">
      <template is="dom-repeat" items="[[items]]" on-dom-change="start">
        <avl-chips-chip label="[[item.label]]" value="[[item]]" disabled="{{isDisabled(item,disabled)}}"
          readonly="{{isReadOnly(item, readonly)}}" on-checked-changed="chipSelected" filter="[[multiSelect]]"
          not-selectable="[[notSelectable]]"></avl-chips-chip>
      </template>
    </div>`;

//# sourceMappingURL=avl-chip-list.html.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.js ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_chip_list_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-chip-list.html */ "./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.html.js");


class AvlChipListImpl extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
    constructor() {
        super();
        this.selectedIndexes = [];
        this.selectedValues = [];
        this.notSelectable = true;
        this.initialized = false;
        this.ignoreCheckedEvents = false;
        this.addEventListener('focusin', (event) => {
            this.focused = true;
        });
        this.addEventListener('focusout', (event) => {
            this.focused = false;
        });
    }
    static get is() { return 'avl-chip-list'; }
    static get template() {
        return _avl_chip_list_html__WEBPACK_IMPORTED_MODULE_1__["template"];
    }
    static get properties() {
        return {
            items: {
                type: Array,
                observer: 'itemsChange'
            },
            disabled: {
                type: Boolean,
                reflectToAttribute: true
            },
            selectedValue: {
                type: Object,
                notify: true,
                observer: 'selectedValueChange'
            },
            selectedIndex: {
                type: Number,
                value: -1,
                reflectToAttribute: true,
                observer: 'selectedIndexChange',
                notify: true
            },
            selectedValues: {
                type: Array,
                notify: true
            },
            selectedIndexes: {
                type: Array,
                notify: true
            },
            focused: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true
            },
            readonly: {
                type: Boolean,
                reflectToAttribute: true
            },
            allowDeselection: {
                type: Boolean,
                reflectToAttribute: true
            },
            singleSelect: {
                type: Boolean,
                observer: 'singleSelectChanged',
                reflectToAttribute: true
            },
            multiSelect: {
                type: Boolean,
                observer: 'multiSelectChanged',
                reflectToAttribute: true
            },
            label: {
                type: String,
                notify: true
            }
        };
    }
    static get observers() {
        return [
            'selectedValuesChanged(selectedValues.splices)',
            'selectedIndexesChanged(selectedIndexes.splices)',
        ];
    }
    itemsChange() {
        this.initialized = false;
    }
    singleSelectChanged() {
        this.notSelectable = this.singleSelect ? false : true;
    }
    multiSelectChanged() {
        this.notSelectable = this.multiSelect ? false : true;
    }
    start() {
        this.initialized = true;
        if (!this.multiSelect && !this.singleSelect) {
            return;
        }
        if (!this.multiSelect) {
            if (this.selectedValue !== undefined)
                this.selectedValueChange();
            if (this.selectedIndex !== -1)
                this.selectedIndexChange();
        }
        else {
            if (this.selectedValues.length)
                this.selectedValuesChanged();
            if (this.selectedIndexes.length)
                this.selectedIndexesChanged();
        }
    }
    refreshSelectedIndexes() {
        this.selectedIndexesChanged();
        this.dispatchEvent(new CustomEvent('selected-indexes-changed', { detail: { value: this.selectedIndexes } }));
    }
    refreshSelectedValues() {
        this.selectedValuesChanged();
        this.dispatchEvent(new CustomEvent('selected-values-changed', { detail: { value: this.selectedValues } }));
    }
    findIndexOfValue(target) {
        if (!this.items || !target)
            return -1;
        return this.items.findIndex((item) => item.value === target.value);
    }
    isDisabled(item, disabled) {
        return item.disabled || this.disabled;
    }
    isReadOnly(item, readonly) {
        return item.readonly || this.readonly;
    }
    selectedValueChange() {
        if (!this.multiSelect && !this.singleSelect) {
            return;
        }
        if (this.items && !this.multiSelect) {
            if (this.selectedValue != undefined) {
                let chip = [...this.shadowRoot.querySelectorAll("avl-chips-chip")];
                if (chip.length != 0) {
                    let index = chip.findIndex((x) => x.value == this.selectedValue);
                    if (chip[index] && chip[index].disabled !== true) {
                        chip[index].checked = true;
                        this.selectedIndex = index;
                    }
                }
            }
            else {
                this.selectedIndex = -1;
            }
        }
    }
    selectedIndexChange() {
        if (!this.multiSelect && !this.singleSelect) {
            return;
        }
        if (this.items && !this.multiSelect) {
            const chip = [...this.shadowRoot.querySelectorAll("avl-chips-chip")];
            if (this.selectedIndex > -1 && chip.length > this.selectedIndex) {
                chip[this.selectedIndex].checked = true;
                this.selectedValue = this.items[this.selectedIndex];
            }
            for (var i = 0; i < chip.length; i++) {
                /** removes checked chip when another one is pressed*/
                if (this.selectedIndex != i) {
                    chip[i].checked = false;
                }
            }
        }
    }
    selectedValuesChanged() {
        if (!this.multiSelect && !this.singleSelect) {
            return;
        }
        if (this.multiSelect && this.items) {
            let newSelectedIndexes = [];
            if (this.items.length != 0) {
                for (var i = 0; i < this.items.length; i++) {
                    if (this.selectedValues.find((x) => x == this.items[i])) {
                        newSelectedIndexes.push(i);
                    }
                }
            }
            if (!this.arraysEqual(this.selectedIndexes, newSelectedIndexes)) {
                this.selectedIndexes.splice(0, this.selectedIndexes.length, ...newSelectedIndexes);
                this.refreshSelectedIndexes();
            }
        }
    }
    selectedIndexesChanged() {
        if (!this.multiSelect && !this.singleSelect) {
            return;
        }
        if (this.multiSelect && this.items) {
            let newSelectedValues = [];
            if (this.items.length != 0) {
                for (var i = 0; i < this.selectedIndexes.length; i++) {
                    const index = this.selectedIndexes[i];
                    if (index < this.items.length) {
                        newSelectedValues.push(this.items[index]);
                    }
                }
                if (!this.arraysEqual(this.selectedValues, newSelectedValues)) {
                    this.selectedValues.splice(0, this.selectedValues.length, ...newSelectedValues);
                    this.refreshSelectedValues();
                }
            }
            const chips = [...this.shadowRoot.querySelectorAll("avl-chips-chip")];
            this.ignoreCheckedEvents = true;
            for (let i = 0; i < chips.length; i++) {
                if (this.selectedIndexes.indexOf(i) != -1) {
                    chips[i].checked = true;
                }
                else {
                    chips[i].checked = false;
                }
            }
            this.ignoreCheckedEvents = false;
        }
    }
    chipSelected(event) {
        if (!this.initialized || this.ignoreCheckedEvents)
            return;
        if (!this.multiSelect && !this.singleSelect) {
            return;
        }
        if (!this.multiSelect) {
            if (event.detail.value) {
                const index = this.findIndexOfValue(event.target.value);
                this.selectedIndex = index;
                this.selectedValue = event.target.value;
            }
            else if (event.target.value === this.selectedValue) {
                if (this.allowDeselection) {
                    this.selectedIndex = -1;
                    this.selectedValue = undefined;
                }
                else {
                    this.selectedValueChange();
                }
            }
        }
        else {
            let index = this.selectedValues.findIndex(x => x == event.target.value);
            if (index > -1) {
                this.selectedValues.splice(index, 1);
                this.refreshSelectedValues();
            }
            else {
                this.selectedValues.push(event.target.value);
                this.refreshSelectedValues();
            }
        }
    }
    arraysEqual(a, b) {
        if (!a || !b)
            return false;
        if (a.length != b.length)
            return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    }
}
customElements.define(AvlChipListImpl.is, AvlChipListImpl);

//# sourceMappingURL=avl-chip-list.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.css.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.css.js ***!
  \***********************************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer */ "./node_modules/@polymer/polymer/polymer-element.js");

const style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"] `<style>
:host {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 30px;
    padding: 0 16px;
    border-radius: 16px;
    border: 1px solid;
    border-color: var(--avl-chips-border-color, var(--avl-border-focus-color));
    color: var(--avl-chips-text-color, var(--avl-link-color));
    font-family: Roboto, sans-serif;
    font-size: 14px;
    white-space: nowrap;
  }

paper-ripple {
  background-position: center;
  transition: background 0.2s;
  position: absolute;
  width:100%;
  height: 100%;
  color: var(--avl-chips-ripple-color, var(--avl-ink-pressed-color));
}

:host([disabled]) paper-ripple {
  color: rgba(0,0,0,0);
}

:host([readonly]) paper-ripple {
  color: rgba(0,0,0,0);
}

:host([invalid]) paper-ripple {
  color: var(--avl-chips-pressed-error-color, var(--avl-ink-error-pressed-color));
}

:host(:hover){
 background-color: var(--avl-chips-hover-color, var(--avl-ink-hover-color));
}

:host(:active) {
  background-color: var(--avl-chips-pressed-color, var(--avl-ink-pressed-color));
}

:host([disabled]){
  background-color:  var(--avl-chips-disabled-background-color, var(--avl-background-disabled-color));
  color: var(--avl-chips-disabled-text-color, var(--avl-foreground-disabled-color));
  border-color: var(--avl-chips-disabled-border-color, var(--avl-border-disabled-color));
  outline:none;
}

:host([readonly]){
  border-color: var(--avl-chip-list-readonly-border-color, var(--avl-border-emphasis-high-color));
  color: var(--avl-chip-list-readonly-text-color, var(--avl-foreground-color));
  outline:none;
  pointer-events: none;
  cursor: default;
}

:host(:not([disabled]):not([readonly]):not([invalid])[focused]){
  background-color: var(--avl-chips-focused-color,var(--avl-ink-focus-color));
  outline: none;
}

:host(:not([disabled]):not([readonly])[invalid][focused]){
background-color: var(--avl-chips-focused-invalid-color,var(--avl-ink-error-focus-color));
outline: none;
} 
 
avl-icon.checkIcon{
  --avl-icon-custom-color:  var(--avl-chips-icon-color, var(--avl-icon-default-emphasis-high-color));
}

avl-icon.removeIcon{
  --avl-icon-custom-color: var(--avl-chips-removeIcon-color, var(--avl-emphasis-medium-color));
}

avl-icon.thumbnail{
  --avl-icon-custom-color: var(--avl-chips-thumbnail-color, var(--avl-emphasis-medium-color));
}

:host([invalid]) avl-icon.removeIcon{
  --avl-icon-custom-color: var(--avl-chips-removeIcon-color, var(--avl-error-color));
}

:host([disabled]) avl-icon.thumbnail{
  --avl-icon-custom-color: var(--avl-chips-thumbnail-disabled-color, var(--avl-foreground-disabled-color));
}

:host([disabled]) avl-icon.removeIcon{
  --avl-icon-custom-color: var(--avl-chips-removeIcon-disabled-color, var(--avl-foreground-disabled-color));
}

:host([invalid]) {
  border-color: var(--avl-chips-border-error-color, var(--avl-error-color));
  color: var(--avl-chip-list-readonly-text-color, var(--avl-error-color));
}

 :host([invalid]:hover)  {
  border-color: var(--avl-chips-border-error-color, var(--avl-error-color));
  background-color: var(--avl-chips-hover-error-color, var(--avl-ink-error-hover-color));
}

:host([invalid][checked][focused]) paper-ripple {
  border-color: var(--avl-chips-border-error-color, var(--avl-error-color));
  background-color: var(--avl-chips-focused-error-color, var(--avl-ink-error-focus-color));
}

:host([invalid][checked][active]) paper-ripple {
  border-color: var(--avl-chips-border-error-color, var(--avl-error-color));
  background-color: var(--avl-chips-pressed-error-color, var(--avl-ink-error-pressed-color));
}  

:host avl-icon.checkIcon{
  display: none;
}

:host avl-icon.removeIcon:not([removeIcon]){
  display: none;
}

:host([checked][filter]) avl-icon.checkIcon{
  display: inline-block;
  margin-left: 4px;
  margin-right: 8px;
}

:host avl-icon.thumbnail{
  display: inline-block;
  position: relative;
  left: -12px;
  margin-right: -4px;
}

:host avl-icon.thumbnail:not([thumbnail]){
  display: none;
}

:host([remove-icon]) avl-icon.removeIcon {
  display: inline-block;
  position: relative;
  right: -12px;
  margin-left: -4px;
}

:host([checked][filter][readonly]) avl-icon.checkIcon{
  display: inline-block;
  margin-left: 4px;
  margin-right: 8px;
  --avl-icon-custom-color:var(--avl-emphasis-medium-color);
}

:host([checked][filter]){
  padding-left: 0px;
}

:host(:hover:not([disabled]):not([readonly])[checked]){
  background-color: var(--avl-chips-selected-hover-background-color, var(--avl-background-selected-hover-color));
}

:host(:not([disabled]):not([readonly])[checked][focused]){
  background-color: var(--avl-chips-selected-focus-background-color, var(--avl-background-selected-focus-color));
}

:host(:not([disabled]):not([readonly])[checked]:not([invalid])){
  background-color: var(--avl-chips-selected-pressed-background-color, var(--avl-background-selected-pressed-color));
}

:host(:not([disabled]):not([readonly])[checked][invalid]){
  background-color: var(--avl-chips-selected-pressed-invalid-background-color, var(--avl-ink-error-pressed-color)); /* needs to be done (color is not specified) */
  border-color: var(--avl-chips-border-error-color, var(--avl-error-color));
}

:host([disabled]) avl-icon.checkIcon{
  display: none;
}

avl-chips-chip[readonly]{
  cursor: default;
}

:host(:not([disabled])[checked]){
  background-color: var(--avl-chips-selected-background-color, var(--avl-background-selected-color));
  color: var(--avl-chips-selected-text-color,var(--avl-foreground-color));
  border-color: var(--avl-chips-selected-border-color, var(--avl-border-pressed-color));
}

:host(:not([disabled])[checked][readonly]){
  background-color:var(--avl-chip-list-readonly-selected-background-color, var(--avl-background-disabled-color));
  color: var(--avl-chip-list-readonly-text-color, var(--avl-foreground-color));
  border-color: var(--avl-chip-list-readonly-border-color, var(--avl-border-emphasis-high-color));
}

/* box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20); */
</style>`;

//# sourceMappingURL=avl-chips-chip.css.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.html.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.html.js ***!
  \************************************************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_chips_chip_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-chips-chip.css */ "./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.css.js");
/* harmony import */ var _all_initial_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all-initial.css */ "./node_modules/@avl-controls/core/dist/all-initial.css.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple.js */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var _avl_icon_avl_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../avl-icon/avl-icon */ "./node_modules/@avl-controls/core/dist/avl-icon/avl-icon.js");





let template = _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["html"] `
  ${_all_initial_css__WEBPACK_IMPORTED_MODULE_2__["allInitial"]}
  ${_avl_chips_chip_css__WEBPACK_IMPORTED_MODULE_1__["style"]}

  <avl-icon class="checkIcon" icon="check"></avl-icon>
  <avl-icon class="thumbnail" icon="[[thumbnailIcon]]" src="[[thumbnailImage]]" thumbnail$="[[hasThumbnail()]]"></avl-icon>
  <div class="text" label="[[label]]" value="{{value}}"> {{label}} </div>
  <avl-icon class="removeIcon" icon="icons:clear" on-click="removeIconClicked" removeIcon$="[[hasRemoveIcon()]]"></avl-icon>
  <paper-ripple initial-opacity="1" opacity-decay-velocity="3.2"></paper-ripple>`;

//# sourceMappingURL=avl-chips-chip.html.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_chips_chip_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-chips-chip.html */ "./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.html.js");


class AvlChipsChipImpl extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
    constructor() {
        super(...arguments);
        this.removeIcon = false;
    }
    static get is() {
        return 'avl-chips-chip';
    }
    static get template() {
        return _avl_chips_chip_html__WEBPACK_IMPORTED_MODULE_1__["template"];
    }
    static get properties() {
        return {
            checked: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                notify: true
            },
            focused: {
                type: Boolean,
                notify: true,
                reflectToAttribute: true,
            },
            active: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            disabled: {
                type: Boolean,
                value: false,
                notify: true,
                reflectToAttribute: true,
                observer: 'tabIndexChanged'
            },
            readonly: {
                type: Boolean,
                notify: true,
                reflectToAttribute: true,
                observer: 'tabIndexChanged'
            },
            filter: {
                type: Boolean,
                reflectToAttribute: true,
            },
            label: {
                type: String,
                reflectToAttribute: true,
            },
            tabindex: {
                type: Number,
                reflectToAttribute: true
            },
            value: {
                type: Object,
                notify: true
            },
            notSelectable: {
                type: Boolean
            },
            thumbnailIcon: {
                type: String,
            },
            removeIcon: {
                type: Boolean,
                reflectToAttribute: true
            },
            thumbnailImage: {
                type: String,
            },
            invalid: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true,
                value: false,
                observer: 'invalidChanged'
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('keydown', (event) => {
            if (event.key == ' ' || event.key == 'Enter') {
                this.onPressed();
                this.toggleChecked();
            }
        });
        this.addEventListener('focusin', () => {
            this.focused = true;
        });
        this.addEventListener('focusout', () => {
            this.focused = false;
        });
        this.addEventListener('mouseup', () => {
            if (!this.disabled) {
                this.onUnpressed();
            }
        });
        this.addEventListener('mousedown', () => {
            if (!this.disabled) {
                this.onPressed();
                this.toggleChecked();
            }
        });
    }
    tabIndexChanged() {
        this.tabindex = (this.readonly || this.disabled) ? -1 : 0;
    }
    toggleChecked() {
        if (!this.disabled && !this.notSelectable) {
            this.checked = !this.checked;
        }
    }
    onUnpressed(event) {
        if (this.active) {
            this.active = false;
        }
    }
    onPressed() {
        if (!this.disabled)
            this.active = true;
    }
    hasThumbnail() {
        return this.thumbnailIcon != null || this.thumbnailImage != null;
    }
    hasRemoveIcon() {
        return this.removeIcon;
    }
    removeIconClicked(e) {
        this.dispatchEvent(new CustomEvent('chips-removed', { detail: e.detail }));
    }
    invalidChanged(value) {
        this.dispatchEvent(new CustomEvent('chips-invalid-changed', { detail: value }));
    }
}
customElements.define(AvlChipsChipImpl.is, AvlChipsChipImpl);

//# sourceMappingURL=avl-chips-chip.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-list/avl-list.css.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-list/avl-list.css.js ***!
  \***********************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer */ "./node_modules/@polymer/polymer/polymer-element.js");

const style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"] `<style>
:host {
  display: block;
  font-family: var(--avl-font-family);
  height: 200px;
  width: 250px;
  --avl-item-padding-left: var(--avl-list-item-padding-left, 24px);
  --avl-item-padding-right: var(--avl-list-item-padding-right, 24px);
  --avl-item-height: var(--avl-list-item-height, 48px);

  --avl-item-background-color: var(--avl-list-item-background-color, var(--avl-background-color));
  --avl-list-item-selected-color: var(--avl-background-selected-color);
  --avl-list-item-hover-color: var(--avl-ink-default-hover-color);
  --avl-list-item-focused-color: var(--avl-ink-default-focus-color);
  --avl-list-item-pressed-color: var(--avl-ink-default-pressed-color);
  --avl-list-item-selected-hover-color: var(--avl-background-selected-hover-color);
  --avl-list-item-selected-focus-color: var(--avl-background-selected-focus-color);
  --avl-list-item-selected-pressed-color: var(--avl-background-selected-pressed-color);
  --avl-list-item-disabled-text-color: var(--avl-foreground-disabled-color);
}

avl-item {
  cursor: pointer;
}
avl-item[focused] {
  cursor: pointer;
}
avl-item[focused][drag-and-drop] {
  cursor: -moz-grab;
  cursor: -webkit-grab;
  cursor: grab;
}
avl-item[dragging] {
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
  cursor: grabbing;
}


avl-item[fake-focus] {
  background-color: var(--avl-list-item-focused-color);
}

avl-item[checked][fake-focus] {
  background-color: var(--avl-list-item-selected-focus-color);
}

avl-item[readonly]{
  cursor: default;
}

avl-item[disabled]{
  cursor: default;
  --avl-item-disabled-text-color: var(--avl-list-item-disabled-text-color);
}

avl-item[image]{
  --avl-item-height: 56px;
}

avl-item[sublabel]{
  --avl-item-height: 64px;
}

avl-item:hover[readonly]:not([checked]){
  background-color: var(--avl-background-color);
}

avl-item[readonly][checked]{
  background-color: var(--avl-background-disabled-color);
}

avl-item:hover:not([nohover]):not([readonly]):not([disabled]){
  background-color: var(--avl-list-item-hover-color);
}

avl-item:not([readonly]):not([checked]):not([nohover])[pressed]{
  background-color: var(--avl-list-item-pressed-color);
}

avl-item:not([readonly])[focused]:not([checked]):not([pressed]){
  background-color: var(--avl-list-item-focused-color);
}

avl-item:not([readonly])[checked]{
  background-color: var(--avl-list-item-selected-color);
}

avl-item:not([readonly])[checked]:hover:not([nohover]){
  background-color: var(--avl-list-item-selected-hover-color);
}

avl-item:not([readonly])[checked][focused]{
  background-color: var(--avl-list-item-selected-focus-color);
}

avl-item:not([readonly])[checked][pressed]:not([nohover]){
  background-color: var(--avl-list-item-selected-pressed-color);
}

avl-item { /* Fixes text selection in Edge while dragging */
  -ms-user-select: none;
}

avl-item[selectable-with-checkbox]{
  --avl-item-padding-left: 12px;
}

avl-item[right-checkbox]{
  --avl-item-padding-right: 12px;
}

avl-item[overflow-menu]{
  --avl-item-padding-right: 12px;
}

#scrollable {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
}

#itemPositioner {
  position: absolute;
  width: 100%;
}

#dummyFocusable {
  width: 0px;
  height: 0px;
}

#placeholderElement {
  background-color: var(--avl-drop-area-color);
}</style>`;

//# sourceMappingURL=avl-list.css.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-list/avl-list.html.js":
/*!************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-list/avl-list.html.js ***!
  \************************************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_list_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-list.css */ "./node_modules/@avl-controls/core/dist/avl-list/avl-list.css.js");
/* harmony import */ var _all_initial_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all-initial.css */ "./node_modules/@avl-controls/core/dist/all-initial.css.js");
/* harmony import */ var _avl_item_avl_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../avl-item/avl-item */ "./node_modules/@avl-controls/core/dist/avl-item/avl-item.js");
/* harmony import */ var _avl_overflow_menu_avl_overflow_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../avl-overflow-menu/avl-overflow-menu */ "./node_modules/@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu.js");
/* harmony import */ var _avl_icon_button_avl_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../avl-icon-button/avl-icon-button */ "./node_modules/@avl-controls/core/dist/avl-icon-button/avl-icon-button.js");
/* harmony import */ var _avl_icon_avl_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../avl-icon/avl-icon */ "./node_modules/@avl-controls/core/dist/avl-icon/avl-icon.js");







let template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["html"] ` ${_all_initial_css__WEBPACK_IMPORTED_MODULE_2__["allInitial"]} ${_avl_list_css__WEBPACK_IMPORTED_MODULE_1__["style"]}

  <div id="scrollable" on-scroll="handleScroll">
    <div id="itemContainer">
      <div id="itemPositioner" on-mousemove="dndItemMousemove" on-touchmove="dndItemMousemove">
        <template
          id="itemsTemplate"
          is="dom-repeat"
          items="[[visibleRows]]"
          index-as="[[index]]"
          restamp="true"
          mutable-data="true"
          on-dom-change="itemsRendered"
        >
          <template is="dom-if" if="[[isDragoverRow(item, dnd.dragoverRow, dnd.dragging)]]">
            <template is="dom-if" if="[[isDndBefore(dnd.dragoverBefore, item)]]">
              <div id="placeholderElement" style="height: 48px; width: 100%;"></div>
            </template>
          </template>

          <avl-item
            value="[[item]]"
            label="[[item.label]]"
            sublabel="[[item.sublabel]]"
            tabindex="{{tabindex}}"
            badge-value="[[item.badgeValue]]"
            icon="[[item.icon]]"
            image="[[item.image]]"
            disabled$="{{isDisabled(item.disabled,disabled)}}"
            readonly$="{{isReadonly(item.readonly, readonly)}}"
            on-click="itemClick"
            on-keydown="onKeydown"
            drag-indicator="[[dragIndicator]]"
            drag-and-drop="[[dragAndDrop]]"
            on-focused-changed="itemFocusedChanged"
            selectable-with-checkbox="[[multiSelect]]"
            on-selection-checkbox-changed="selectionCheckboxClicked"
            right-checkbox="[[hasRightCheckbox(item)]]"
            right-checkbox-value="{{item.rightCheckbox}}"
            on-right-checkbox-value-changed="rightCheckboxValueChanged"
            overflow-menu="[[hasOverflowMenu(overflowMenuItems)]]"
            index$="[[index]]"
            nohover$="[[isNohover(dnd.dragging, item)]]"
            on-mousedown="dndItemMousedown"
            on-touchstart="dndItemMousedown"
            on-dragstart="dragstart"
            fake-focus-enabled="[[fakeFocus]]"
          >
            <template is="dom-if" if="[[overflowMenuItems]]">
              <avl-overflow-menu
                slot="overflow-menu"
                items="[[overflowMenuItems]]"
                disabled="{{isDisabled(item.disabled,disabled)}}"
                row="[[item]]"
                on-item-clicked="overflowMenuItemClicked"
              >
                <avl-icon-button
                  tabindex="-1"
                  icon="more-vert"
                  slot="trigger"
                  disabled-tabindex
                  disabled="{{isDisabled(item.disabled,disabled)}}"
                ></avl-icon-button>
              </avl-overflow-menu>
            </template>
          </avl-item>

          <template is="dom-if" if="[[isDragoverRow(item, dnd.dragoverRow, dnd.dragging)]]">
            <template is="dom-if" if="[[!isDndBefore(dnd.dragoverBefore, item)]]">
              <div id="placeholderElement" style="height: 48px; width: 100%;"></div>
            </template>
          </template>
        </template>
      </div>
    </div>
  </div>

  <div id="dummyFocusable" tabindex$="{{tabindex}}"></div>
  <div
    id="draggedElementContainer"
    on-mousemove="dndItemMousemove"
    on-touchmove="dndItemMousemove"
  ></div>`;

//# sourceMappingURL=avl-list.html.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-list/avl-list.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-list/avl-list.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drag_and_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-and-drop */ "./node_modules/@avl-controls/core/dist/avl-list/drag-and-drop.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_list_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avl-list.html */ "./node_modules/@avl-controls/core/dist/avl-list/avl-list.html.js");



class AvlListImpl extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
    constructor() {
        super(...arguments);
        this.selectedIndex = -1;
        this.tabindex = 0;
        this.visibleRows = [];
        this.rows = [];
        this.totalRows = 0;
        this.cachedRows = [];
        this.cachedRowHeights = [];
        this.pageCached = {};
        this.pageSize = 10;
        this.defaultItemHeight = 48;
        this.fakeFocus = false;
        this.fakeFocusIndex = -1;
        this.focusedIndex = -1;
        this._selectedIndexes = { values: [], locked: false, set: false };
        this._selectedValues = { values: [], locked: false, set: false };
        this.hideDraggedElement = () => {
            const itemElements = [...this.$.itemContainer.querySelectorAll('avl-item')];
            for (const itemEl of itemElements) {
                if (this.dnd && itemEl['value'] === this.dnd.draggedRow) {
                    itemEl.style.display = 'none';
                }
                else {
                    itemEl.style.display = 'block';
                }
            }
        };
    }
    static get is() { return 'avl-list'; }
    static get template() {
        return _avl_list_html__WEBPACK_IMPORTED_MODULE_2__["template"];
    }
    static get properties() {
        return {
            rows: {
                type: Array,
                observer: 'rowsChanged'
            },
            dataProvider: {
                type: Object,
                observer: 'dataProviderChanged'
            },
            selectedValue: {
                type: Object,
                observer: 'selectedValueChanged',
                notify: true
            },
            selectedIndex: {
                type: Number,
                observer: 'selectedIndexChanged',
                notify: true
            },
            pageSize: {
                type: Number,
                observer: 'pageSizeChanged'
            },
            disabled: {
                type: Boolean,
                observer: 'disabledChanged',
                reflectToAttribute: true
            },
            readonly: {
                type: Boolean,
                observer: 'disabledChanged',
                reflectToAttribute: true
            },
            focused: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true
            },
            _selectedValues: {
                type: Array,
                notify: true,
            },
            _selectedIndexes: {
                type: Array,
                notify: true,
            },
            selectedValues: {
                type: Array,
                notify: true,
                observer: 'selectedValuesChanged'
            },
            selectedIndexes: {
                type: Array,
                notify: true,
                observer: 'selectedIndexesChanged'
            },
            singleSelect: {
                type: Boolean,
                observer: 'singleSelectChanged',
                reflectToAttribute: true
            },
            multiSelect: {
                type: Boolean,
                observer: 'multiSelectChanged',
                reflectToAttribute: true
            },
            allowActiveRow: {
                type: Boolean,
                value: false,
                reflectToAttribute: true
            },
            activeRow: {
                type: Object,
                observer: 'activeRowChanged',
                notify: true
            },
            dragAndDrop: {
                type: Boolean,
                observer: 'dragAndDropChanged',
            },
            dragIndicator: {
                type: Boolean,
            },
            fakeFocus: {
                type: Boolean,
                observer: 'fakeFocusChanged',
            }
        };
    }
    unlock() {
        if (this._selectedValues.locked && this._selectedIndexes.locked) {
            this._selectedIndexes.locked = false;
            this._selectedValues.locked = false;
        }
        this.selectRows();
    }
    selectedValuesChanged() {
        if (this.selectedValues.length === 0 && !this._selectedValues.set) {
            return;
        }
        this._selectedValues.values = this.selectedValues;
        this._selectedValues.locked = true;
        if (!this._selectedValues.set) {
            this._selectedValues.set = true;
        }
        if (this.rows == null || this.rows.length === 0) {
            this.selectRows();
        }
        if (this.rows && this.rows.length > 0) {
            this._selectedIndexes.values = this.selectedValues.map(val => this.rows.indexOf(val));
            if (!this._selectedIndexes.locked) {
                this.selectedIndexes = this._selectedIndexes.values;
                this.unlock();
            }
        }
    }
    selectedIndexesChanged() {
        if (this.selectedIndexes.length === 0 && !this._selectedIndexes.set) {
            return;
        }
        this._selectedIndexes.values = this.selectedIndexes.sort();
        this._selectedIndexes.locked = true;
        if (!this._selectedIndexes.set) {
            this._selectedIndexes.set = true;
        }
        this._selectedIndexes.set = true;
        if (this.rows && this.rows.length > 0) {
            this._selectedValues.values = this.selectedIndexes.map(index => this.rows[index]);
            if (!this._selectedValues.locked) {
                this.selectedValues = this._selectedValues.values;
                this.unlock();
            }
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.initDnd();
        // change focussed state
        this.addEventListener('focusin', (e) => {
            if (!this.readonly)
                this.focused = true;
        });
        this.addEventListener('focusout', (e) => {
            this.focused = false;
        });
        this.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'Up':
                case 'ArrowUp':
                    e.preventDefault();
                    this.focusedIndex = Math.max(0, this.focusedIndex - 1);
                    this.scrollItemIntoView(this.focusedIndex);
                    this.focusItem(this.focusedIndex);
                    break;
                case 'Down':
                case 'ArrowDown':
                    e.preventDefault();
                    this.focusedIndex = Math.min(this.totalRows - 1, this.focusedIndex + 1);
                    this.scrollItemIntoView(this.focusedIndex);
                    this.focusItem(this.focusedIndex);
                    break;
                case ' ':
                    e.preventDefault();
                    break;
                case 'Enter':
                    e.preventDefault();
                    break;
            }
        });
        this.getRows(0, 1);
        if (this.allowActiveRow) {
            this.waitForRender(this).then(() => {
                let itemHeight = this.shadowRoot.querySelector('#scrollable').children[0].querySelector('avl-item').scrollHeight;
                let index = this.rows.findIndex(r => r.label == this.activeRow.label);
                this.shadowRoot.querySelector('#scrollable').scrollTop = itemHeight * index;
            });
        }
    }
    waitForRender(el) {
        return new Promise(function (resolve, reject) {
            let interval = setInterval(() => {
                if (el.shadowRoot.querySelector('#itemPositioner').childElementCount > 1) {
                    clearInterval(interval);
                    resolve();
                }
            }, 100);
        });
    }
    disconnectedCallback() {
        super['disconnectedCallback']();
        if (this.dnd)
            this.dnd.destruct();
    }
    focus() {
        const itemElements = [...this.$.itemContainer.querySelectorAll('avl-item')];
        if (itemElements.length) {
            itemElements[0].focus();
        }
    }
    fakeFocusNext() {
        if (!this.fakeFocus)
            return;
        this.resetFakeFocus();
        const itemElements = this.$.itemContainer.querySelectorAll('avl-item');
        this.fakeFocusIndex = Math.min(this.totalRows - 1, this.fakeFocusIndex + 1);
        this.scrollItemIntoView(this.fakeFocusIndex);
        const item = itemElements[this.fakeFocusIndex - this.currentFirstIndex];
        if (item) {
            item.fakeFocus = true;
        }
    }
    fakeFocusPrevious() {
        if (!this.fakeFocus)
            return;
        this.resetFakeFocus();
        const itemElements = this.$.itemContainer.querySelectorAll('avl-item');
        this.fakeFocusIndex = Math.max(0, this.fakeFocusIndex - 1);
        this.scrollItemIntoView(this.fakeFocusIndex);
        const item = itemElements[this.fakeFocusIndex - this.currentFirstIndex];
        if (item) {
            item.fakeFocus = true;
        }
    }
    getFakeFocusRow() {
        return this.cachedRows[this.fakeFocusIndex];
    }
    itemClick(e) {
        const item = e.target;
        if (item.tagName.toLowerCase() != 'avl-item')
            return;
        this.itemSelect(item);
    }
    onKeydown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const item = e.target;
            if (item.tagName.toLowerCase() != 'avl-item')
                return;
            this.itemSelect(item);
        }
    }
    itemSelect(item) {
        const value = item.value;
        if (!item.disabled && !item.readonly && this.singleSelect) {
            this.selectedValue = value;
            item.checked = true;
        }
        else if (!item.disabled && !item.readonly && this.multiSelect && this.allowActiveRow) {
            this.activeRow = value;
        }
    }
    activeRowChanged() {
        this.selectAndFocusCorrectItem();
    }
    selectionCheckboxClicked(event) {
        const item = event.target;
        if (!item.disabled && !item.readonly && this.multiSelect) {
            if (item.selectableWithCheckboxChecked) {
                if (!this.selectedValues) {
                    this.selectedValues = [item.value];
                }
                else {
                    this.selectedValues.push(item.value);
                    this.selectedValues = this.selectedValues.slice();
                }
            }
            else {
                this.selectedValues = this.selectedValues.filter((x) => x !== item.value);
            }
        }
        this.selectAndFocusCorrectItem();
    }
    rightCheckboxValueChanged(e) {
        const row = e.target['value'];
        this.dispatchEvent(new CustomEvent('right-checkbox-changed', { detail: { value: e.detail.value, row: row } }));
    }
    overflowMenuItemClicked(e) {
        const row = e.target['row'];
        this.dispatchEvent(new CustomEvent('overflow-menu-item-clicked', { detail: { item: e.detail, row: row } }));
    }
    scrollItemIntoView(index) {
        if (index < 0 || index > this.totalRows)
            return;
        const item = this.cachedRows[index];
        if (item) {
            const itemElements = [...this.$.itemContainer.querySelectorAll('avl-item')];
            const itemEl = itemElements.find(el => el.value == item);
            if (!itemEl) {
                this.$.scrollable.scrollTop = Math.min(Math.max(0, this.getItemPosition(index)), this.getTotalHeight());
            }
        }
    }
    focusItem(index) {
        if (index < 0 || index > this.totalRows)
            return;
        const item = this.cachedRows[index];
        if (item) {
            const itemElements = [...this.$.itemContainer.querySelectorAll('avl-item')];
            const itemEl = itemElements.find(el => el.value == item);
            if (itemEl) {
                if (!itemEl.focused) {
                    itemEl.focus();
                }
            }
            else {
                this.$.dummyFocusable.focus();
            }
        }
    }
    itemFocusedChanged(e) {
        if (e.detail.value) {
            this.focusedIndex = this.cachedRows.findIndex(row => row == e.target.value);
        }
    }
    handleScroll(e) {
        this.prepareVisibleRows();
        this.selectAndFocusCorrectItem();
        this.dnd.scrollableScroll(e);
    }
    getTotalHeight() {
        let height = 0;
        for (let i = 0; i < this.totalRows; ++i) {
            if (this.cachedRowHeights[i] !== undefined) {
                height += this.cachedRowHeights[i];
            }
            else {
                height += this.defaultItemHeight;
            }
        }
        return height;
    }
    getItemPosition(index) {
        let position = 0;
        for (let i = 0; i < index; ++i) {
            if (this.cachedRowHeights[i] !== undefined) {
                position += this.cachedRowHeights[i];
            }
            else {
                position += this.defaultItemHeight;
            }
        }
        return position;
    }
    getFirstVisibleIndex(scrollTop) {
        let currentHeight = 0;
        for (let i = 0; i < this.totalRows; ++i) {
            if (this.cachedRowHeights[i] !== undefined) {
                currentHeight += this.cachedRowHeights[i];
            }
            else {
                currentHeight += this.defaultItemHeight;
            }
            if (currentHeight > scrollTop) {
                return i;
            }
        }
        return this.totalRows;
    }
    getLastVisibleIndex(height, firstIndex) {
        let currentHeight = 0;
        for (let i = firstIndex; i < this.totalRows; ++i) {
            if (this.cachedRowHeights[i] !== undefined) {
                currentHeight += this.cachedRowHeights[i];
            }
            else {
                currentHeight += this.defaultItemHeight;
            }
            if (currentHeight > height) {
                return i + 1;
            }
        }
        return this.totalRows;
    }
    prepareVisibleRows() {
        this.$.itemContainer.style.height = `${this.getTotalHeight()}px`;
        const firstIndex = this.getFirstVisibleIndex(this.$.scrollable.scrollTop);
        const lastIndex = this.getLastVisibleIndex(this.$.scrollable.clientHeight, firstIndex);
        this.currentFirstIndex = firstIndex;
        this.getRows(firstIndex, lastIndex - firstIndex);
        this.visibleRows = this.cachedRows.slice(firstIndex, lastIndex);
        this.$.itemPositioner.style.top = `${this.getItemPosition(firstIndex)}px`;
    }
    selectRows(itemElements) {
        if (!this.multiSelect) {
            return;
        }
        if (itemElements == null) {
            itemElements = [...this.$.itemContainer.querySelectorAll('avl-item')];
        }
        if (this._selectedValues) {
            itemElements.forEach(el => {
                el.selectableWithCheckboxChecked = false;
                this._selectedValues.values.forEach(val => {
                    if (el.value === val) {
                        el.selectableWithCheckboxChecked = true;
                    }
                });
            });
        }
    }
    itemsRendered() {
        this.selectAndFocusCorrectItem();
        this.hideDraggedElement();
        // update cached row heights
        const itemElements = [...this.$.itemContainer.querySelectorAll('avl-item')];
        if (itemElements.length) {
            const startIndex = this.cachedRows.findIndex(row => row === itemElements[0].value);
            for (let i = 0; i < itemElements.length; ++i) {
                if (this.dnd && itemElements[i].value !== this.dnd.draggedRow) {
                    this.cachedRowHeights[startIndex + i] = itemElements[i].clientHeight;
                }
            }
        }
        this.selectRows(itemElements);
        if (this.fakeFocus) {
            const item = itemElements[0];
            if (item && item.fakeFocus)
                item.fakeFocus = false;
            if (item && this.currentFirstIndex === 0) {
                item.fakeFocus = true;
                this.fakeFocusIndex = 0;
                this.dispatchEvent(new CustomEvent('initial-fake-focus', { detail: { value: item.value } }));
            }
        }
        if (this.fakeFocus) {
            this.resetFakeFocus();
            if (this.currentFirstIndex === 0 && this.fakeFocusIndex == -1) {
                const item = itemElements[0];
                if (item) {
                    item.fakeFocus = true;
                    this.fakeFocusIndex = 0;
                    this.dispatchEvent(new CustomEvent('initial-fake-focus', { detail: { value: item.value } }));
                }
            }
            else if (this.fakeFocusIndex !== -1) {
                const item = itemElements[this.fakeFocusIndex - this.currentFirstIndex];
                if (item) {
                    item.fakeFocus = true;
                }
            }
        }
    }
    rowsChanged() {
        this.dataProvider = (params) => new Promise(resolve => {
            /**
             * There's an issue in angular where an async pipe where gives you a null as an initial value:
             * https://github.com/angular/angular/issues/16982
             * So rows couldn't be used with an async pipe without this.
             */
            if (this.rows == null) {
                resolve({
                    rows: [],
                    totalRows: 0
                });
            }
            else {
                resolve({
                    rows: this.rows.slice(params.page * params.pageSize, (params.page + 1) * params.pageSize),
                    totalRows: this.rows.length
                });
            }
        });
    }
    dataProviderChanged() {
        this.cachedRows = [];
        this.cachedRowHeights = [];
        this.pageCached = {};
        this.prepareVisibleRows();
    }
    pageSizeChanged() {
        this.dataProviderChanged();
    }
    selectAndFocusCorrectItem() {
        const itemElements = [...this.$.itemContainer.querySelectorAll('avl-item')];
        for (const itemEl of itemElements) {
            if (this.singleSelect) {
                itemEl.checked = itemEl.value === this.selectedValue;
            }
            else if (this.multiSelect) {
                itemEl.checked = itemEl.value === this.activeRow;
            }
        }
        this.focusItem(this.focusedIndex);
    }
    selectedValueChanged() {
        if (!this.cachedRows)
            return;
        for (let i = 0; i < this.cachedRows.length; ++i) {
            if (this.cachedRows[i] === this.selectedValue) {
                this.selectedIndex = i;
                break;
            }
        }
        this.selectAndFocusCorrectItem();
        this.resetFakeFocus();
        this.fakeFocusIndex = -1;
    }
    selectedIndexChanged() {
        if (!this.cachedRows || this.selectedIndex == undefined)
            return;
        if (this.cachedRows[this.selectedIndex]) {
            this.selectedValue = this.cachedRows[this.selectedIndex];
        }
    }
    resetFakeFocus() {
        const itemElements = [...this.$.itemContainer.querySelectorAll('avl-item')];
        for (const item of itemElements) {
            if (item.fakeFocus) {
                item.fakeFocus = false;
            }
        }
    }
    disabledChanged() {
        this.tabindex = (this.disabled || this.readonly) ? -1 : 0;
    }
    fakeFocusChanged(val) {
        if (val) {
            this.setAttribute('tabindex', '-1');
        }
    }
    multiSelectChanged() {
    }
    singleSelectChanged() {
        this.selectAndFocusCorrectItem();
    }
    getRows(start, n) {
        if (!this.dataProvider)
            return;
        for (let page = Math.floor(start / this.pageSize); page < Math.floor((start + n) / this.pageSize) + 1; ++page) {
            if (!this.pageCached[page]) {
                this.pageCached[page] = true;
                this.dataProvider({ page: page, pageSize: this.pageSize }).then(res => {
                    const rows = res.rows;
                    const totalRows = res.totalRows;
                    for (let j = 0; j < rows.length; ++j) {
                        this.cachedRows[page * this.pageSize + j] = rows[j];
                    }
                    this.totalRows = totalRows;
                    this.prepareVisibleRows();
                    // check if some of the newly fetched items are selected
                    if (this.singleSelect) {
                        if (this.selectedValue) {
                            this.selectedValueChanged();
                        }
                        else if (this.selectedIndex != -1) {
                            this.selectedIndexChanged();
                        }
                    }
                    if (this.multiSelect) {
                        if (this.selectedValues && this.selectedValues.length > 0) {
                            this._selectedIndexes.locked = true;
                            this.selectedValuesChanged();
                            this._selectedIndexes.locked = false;
                        }
                        else if (this.selectedIndexes && this.selectedIndexes.length > 0) {
                            this._selectedValues.locked = true;
                            this.selectedIndexesChanged();
                            this._selectedIndexes.locked = false;
                        }
                    }
                });
            }
        }
    }
    initDnd() {
        this.dnd = new _drag_and_drop__WEBPACK_IMPORTED_MODULE_0__["DragAndDrop"](() => this.$.itemsTemplate.render(), () => {
            this.focusedIndex = -1;
            this.$.dummyFocusable.focus();
        }, (draggedRow, dragoverRow, before) => {
            if (!draggedRow || !dragoverRow)
                return;
            const oldIndex = this.cachedRows.indexOf(draggedRow);
            let insertIndex = this.cachedRows.indexOf(dragoverRow);
            if (!before) {
                insertIndex++;
            }
            const newCachedRows = this.cachedRows.slice();
            newCachedRows.splice(oldIndex, 1, null);
            newCachedRows.splice(insertIndex, 0, draggedRow);
            newCachedRows.splice(newCachedRows.indexOf(null), 1);
            const newIndex = newCachedRows.indexOf(draggedRow);
            if (this.rows.length > 0) {
                this.splice('rows', 0, newCachedRows.length, ...newCachedRows);
            }
            if (newIndex !== oldIndex) {
                this.cachedRows = newCachedRows;
                this.prepareVisibleRows();
                this.dispatchEvent(new CustomEvent('row-reordered', { detail: { row: draggedRow, index: newIndex, oldIndex: oldIndex } }));
                if (this.singleSelect) {
                    this.selectedValueChanged();
                }
                else if (this.multiSelect) {
                    this.selectedValuesChanged();
                }
            }
        }, dy => this.$.scrollable.scrollTop = Math.min(Math.max(0, this.$.scrollable.scrollTop + dy), this.getTotalHeight()), this.hideDraggedElement, () => [...this.$.itemContainer.querySelectorAll('avl-item')], this.$.draggedElementContainer, this.$.scrollable);
        this.dnd.disabled = !this.dragAndDrop || this.readonly;
        this.dndItemMousedown = this.dnd.itemMousedown;
        this.dndItemMousemove = this.dnd.itemMousemove;
    }
    // prevents ghost image dragging
    dragstart(e) {
        e.preventDefault();
        return false;
    }
    dragAndDropChanged() {
        if (this.dnd) {
            this.dnd.disabled = !this.dragAndDrop;
        }
    }
    isDraggedRow(item) {
        return this.dnd && this.dnd.dragging && item === this.dnd.draggedRow;
    }
    isDragoverRow(item) {
        return this.dnd && this.dnd.dragging && item === this.dnd.dragoverRow;
    }
    isDndBefore(before) {
        return before;
    }
    isNohover() {
        return this.dnd && this.dnd.dragging;
    }
    isDisabled(itemDisabled) {
        return itemDisabled || this.disabled;
    }
    isReadonly(itemReadonly) {
        return itemReadonly || this.readonly;
    }
    hasOverflowMenu() {
        return this.overflowMenuItems && this.overflowMenuItems.length;
    }
    hasRightCheckbox(item) {
        if (item)
            return item.rightCheckbox !== undefined;
        else
            return false;
    }
    arraysEqual(a, b) {
        if (!a || !b)
            return false;
        if (a.length != b.length)
            return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    }
}
customElements.define(AvlListImpl.is, AvlListImpl);

//# sourceMappingURL=avl-list.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-list/drag-and-drop.js":
/*!************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-list/drag-and-drop.js ***!
  \************************************************************************/
/*! exports provided: DragAndDrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDrop", function() { return DragAndDrop; });
class DragAndDrop {
    constructor(rerender, dragStartCallback, dropCallback, scrollBy, hideDraggedElement, getItemElements, draggedElementContainer, scrollable) {
        this.rerender = rerender;
        this.dragStartCallback = dragStartCallback;
        this.dropCallback = dropCallback;
        this.scrollBy = scrollBy;
        this.hideDraggedElement = hideDraggedElement;
        this.getItemElements = getItemElements;
        this.draggedElementContainer = draggedElementContainer;
        this.scrollable = scrollable;
        this.dragging = false;
        this.predragging = false; // item has been clicked, but the dragging is not yet started
        this.itemMousemove = (e) => {
            if (window.matchMedia('(pointer:coarse)').matches) {
                if (!this.dragging)
                    return;
                if (window['TouchEvent'] && e instanceof TouchEvent) {
                    // prevent scrolling
                    e.preventDefault();
                    this.lastX = e.touches[0].clientX;
                    this.lastY = e.touches[0].clientY;
                }
                this.scrollableMousemove(e);
                this.refreshDragoverRow();
            }
            else {
                if (e instanceof MouseEvent) {
                    this.lastX = e.clientX;
                    this.lastY = e.clientY;
                    if (this.draggedElement) {
                        this.hideDraggedElement();
                        this.refreshDragoverRow();
                    }
                    else if (Math.pow(this.lastX - this.dragStartX, 2) + Math.pow(this.lastY - this.dragStartY, 2) >
                        25) {
                        this.predragging = true;
                        if (this.disabled)
                            return;
                        const item = e.target;
                        if (item.tagName.toLowerCase() != 'avl-item')
                            return;
                        this.predragging = false;
                        this.dragging = true;
                        this.notDraggedYet = true;
                        this.dragStartCallback();
                        // clone item element
                        this.draggedRow = item['value'];
                        const clonedItem = item.cloneNode(true);
                        const propertiesToCopy = Object.keys(customElements.get('avl-item').properties);
                        for (let prop of propertiesToCopy) {
                            clonedItem[prop] = item[prop];
                        }
                        clonedItem.style.width = `${item.clientWidth}px`;
                        clonedItem.style.cursor = 'inherit';
                        clonedItem.style.zIndex = '2000';
                        // prevents ghost image dragging
                        clonedItem.addEventListener('dragstart', (e) => {
                            e.preventDefault();
                            return false;
                        });
                        this.draggedElement = document.createElement('div');
                        //get parent avl-list
                        const child = item.parentElement.parentElement.parentElement;
                        const list = child.__dataHost;
                        if (list.hasAttribute('drag-indicator') && !list.hasOverflowMenu()) {
                            let dragIcon = document.createElement('avl-icon');
                            dragIcon.setAttribute('icon', 'custom-icons:drag-handle-icon');
                            dragIcon.id = 'dragIcon';
                            const styles = {
                                paddingLeft: '',
                                float: 'right',
                                paddingRight: '24px',
                                paddingTop: '12px',
                                color: 'var(--avl-item-iron-color, var(--avl-emphasis-medium-color))',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                flex: '0 0 auto'
                            };
                            Object.assign(dragIcon.style, styles);
                            this.draggedElement.appendChild(dragIcon);
                        }
                        this.draggedElement.style.backgroundColor = 'var(--avl-background-color)';
                        this.draggedElement.appendChild(clonedItem);
                        this.draggedElementContainer.appendChild(this.draggedElement);
                        clonedItem.setAttribute('pressed', '');
                        this.draggedElement.style.position = 'fixed';
                        this.draggedElement.style.touchAction = 'none';
                        this.draggedElement.style.boxShadow =
                            '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
                        const itemRect = item.getBoundingClientRect();
                        const top = itemRect.top;
                        const left = itemRect.left;
                        if (e instanceof MouseEvent) {
                            this.dragOffsetY = e.y - top;
                            this.dragOffsetX = e.x - left;
                            // so that grabbing the bottom half doesn't displace the next element
                            this.lastY = top + 1;
                            this.lastX = left + 1;
                        }
                    }
                    this.scrollableMousemove(e);
                }
            }
        };
        this.itemMousedown = (e) => {
            if (window.matchMedia('(pointer:coarse)').matches) {
                if (this.disabled)
                    return;
                const item = e.target;
                if (item.tagName.toLowerCase() != 'avl-item')
                    return;
                this.predragging = true;
                this.predragTimeout = window.setTimeout(() => {
                    if (this.predragging) {
                        this.predragging = false;
                        this.dragging = true;
                        this.notDraggedYet = true;
                        this.dragStartCallback();
                        // clone item element
                        this.draggedRow = item['value'];
                        const clonedItem = item.cloneNode(true);
                        const propertiesToCopy = Object.keys(customElements.get('avl-item').properties);
                        for (let prop of propertiesToCopy) {
                            clonedItem[prop] = item[prop];
                        }
                        clonedItem.style.width = `${item.clientWidth}px`;
                        clonedItem.style.cursor = 'inherit';
                        clonedItem.style.zIndex = '2000';
                        // prevents ghost image dragging
                        clonedItem.addEventListener('dragstart', (e) => {
                            e.preventDefault();
                            return false;
                        });
                        this.draggedElement = document.createElement('div');
                        this.draggedElement.style.backgroundColor = 'var(--avl-background-color)';
                        this.draggedElement.appendChild(clonedItem);
                        this.draggedElementContainer.appendChild(this.draggedElement);
                        clonedItem.setAttribute('pressed', '');
                        this.draggedElement.style.position = 'fixed';
                        this.draggedElement.style.touchAction = 'none';
                        this.draggedElement.style.boxShadow =
                            '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
                        const itemRect = item.getBoundingClientRect();
                        const top = itemRect.top;
                        const left = itemRect.left;
                        if (window['TouchEvent'] && e instanceof TouchEvent) {
                            this.dragOffsetY = e.touches[0].clientY - top;
                            this.dragOffsetX = e.touches[0].clientX - left;
                        }
                        // so that grabbing the bottom half doesn't displace the next element
                        this.lastY = top + 1;
                        this.lastX = left + 1;
                        this.hideDraggedElement();
                        this.refreshDragoverRow();
                        this.mouseMoveListener(e);
                    }
                }, 500);
            }
            else {
                if (e instanceof MouseEvent) {
                    this.dragStartX = e.clientX;
                    this.dragStartY = e.clientY;
                }
            }
            document.addEventListener('mousemove', this.mouseMoveListener);
            document.addEventListener('touchmove', this.mouseMoveListener);
            document.addEventListener('mouseup', this.mouseupListener);
            document.addEventListener('touchend', this.mouseupListener);
            window.addEventListener('keydown', this.escapeListener);
            window.addEventListener('blur', this.cancelDrag);
        };
        this.scrollableMousemove = (e) => {
            if (!this.dragging)
                return;
            let y;
            if (e instanceof MouseEvent) {
                y = e.y;
            }
            else if (window['TouchEvent'] && e instanceof TouchEvent) {
                y = e.touches[0].clientY;
            }
            const scrollRect = this.scrollable.getBoundingClientRect();
            const top = scrollRect.top;
            const bottom = scrollRect.bottom;
            if (y > bottom - 30) {
                if (this.dragScrollInterval == undefined) {
                    this.scrollSpeed = 5;
                    this.dragScrollInterval = window.setInterval(() => {
                        this.scrollSpeed = Math.min(this.scrollSpeed + 3, 40);
                        this.scrollBy(this.scrollSpeed);
                    }, 150);
                }
            }
            else if (y < top + 30) {
                if (this.dragScrollInterval == undefined) {
                    this.scrollSpeed = 5;
                    this.dragScrollInterval = window.setInterval(() => {
                        this.scrollSpeed = Math.min(this.scrollSpeed + 3, 40);
                        this.scrollBy(-this.scrollSpeed);
                    }, 150);
                }
            }
            else {
                if (this.dragScrollInterval !== undefined) {
                    clearInterval(this.dragScrollInterval);
                    this.dragScrollInterval = undefined;
                }
            }
        };
        this.mouseMoveListener = (e) => {
            if (this.predragging) {
                this.cancelDrag();
                return;
            }
            if (!this.dragging)
                return;
            if (this.notDraggedYet) {
                this.draggedElement.style.cursor = 'grab';
                this.notDraggedYet = false;
            }
            else {
                this.draggedElement.style.cursor = 'grabbing';
            }
            if (e instanceof MouseEvent) {
                this.draggedElement.style.top = `${e.y - this.dragOffsetY}px`;
                this.draggedElement.style.left = `${e.x - this.dragOffsetX}px`;
            }
            else if (window['TouchEvent'] && e instanceof TouchEvent) {
                this.draggedElement.style.top = `${e.touches[0].clientY - this.dragOffsetY}px`;
                this.draggedElement.style.left = `${e.touches[0].clientX - this.dragOffsetX}px`;
            }
        };
        this.mouseupListener = (e) => {
            this.removeDragListeners();
            if (this.dragging) {
                this.dropCallback(this.draggedRow, this.dragoverRow, this.dragoverBefore);
            }
            this.resetDrag();
        };
        this.cancelDrag = () => {
            this.removeDragListeners();
            this.resetDrag();
        };
        this.escapeListener = (e) => {
            switch (e.key) {
                case 'Esc':
                case 'Escape':
                    this.cancelDrag();
                    break;
            }
        };
    }
    destruct() {
        this.cancelDrag();
    }
    scrollableScroll(e) {
        this.refreshDragoverRow();
    }
    refreshDragoverRow() {
        const items = this.getItemElements();
        for (let item of items) {
            if (this.pointInsideElement(this.lastX, this.lastY, item)) {
                this.dragoverRow = item['value'];
                const itemRect = item.getBoundingClientRect();
                const top = itemRect.top;
                const height = itemRect.height;
                this.dragoverBefore = this.lastY < top + height / 2;
                this.rerender();
                return;
            }
        }
        if (this.notDraggedYet) {
            this.dragoverBefore = false;
            this.dragoverRow = items[items.length - 1]['value'];
            this.rerender();
        }
    }
    resetDrag() {
        this.dragStartX = undefined;
        this.dragStartY = undefined;
        this.draggedRow = undefined;
        this.dragoverRow = undefined;
        this.predragging = false;
        this.hideDraggedElement();
        if (this.draggedElement) {
            this.draggedElementContainer.removeChild(this.draggedElement);
            this.draggedElement = undefined;
        }
        if (this.dragging) {
            this.dragging = false;
            this.rerender();
        }
    }
    removeDragListeners() {
        document.removeEventListener('mouseup', this.mouseupListener);
        document.removeEventListener('touchend', this.mouseupListener);
        document.removeEventListener('mousemove', this.mouseMoveListener);
        document.removeEventListener('touchmove', this.mouseMoveListener);
        window.removeEventListener('keydown', this.escapeListener);
        window.removeEventListener('blur', this.cancelDrag);
        if (this.dragScrollInterval !== undefined) {
            clearInterval(this.dragScrollInterval);
            this.dragScrollInterval = undefined;
        }
        if (this.predragTimeout !== undefined) {
            clearTimeout(this.predragTimeout);
            this.predragTimeout = undefined;
        }
    }
    pointInsideElement(x, y, element) {
        const rect = element.getBoundingClientRect();
        return x > rect.left && x < rect.right && y > rect.top && y < rect.bottom;
    }
}

//# sourceMappingURL=drag-and-drop.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.css.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.css.js ***!
  \********************************************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer */ "./node_modules/@polymer/polymer/polymer-element.js");

const style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"] `<style>
.item-container {
  display: grid;
  grid-template-columns: auto 24px;
  grid-template-rows: 24px 4px;
  grid-column-gap: 16px;
  grid-row-gap: 0px;
  padding-right: 12px;
}

:host([focused]) .item-container {
  background-color: var(--avl-upload-file-focus-color);
}

.item-container .item-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-self: center;
  font-size: 14px;
}

.item-container .item-icon {
  align-self: center;
  justify-self: center;
  cursor: pointer;
  grid-column: 2;
  --avl-icon-button-color: var(--avl-upload-icons-color);
}

.item-container.complete {
  grid-template-rows: 24px;
  
  padding-top: 12px;
  padding-bottom: 12px;
}

:host(:hover) .item-container.complete {
  background-color: var(--avl-upload-file-hover-color);
}

.item-container.complete a{
  color: var(--avl-upload-file-uploaded-color);
  text-decoration: none;
  outline:none;
  cursor: pointer;
}

:host(:hover) .item-container.complete a{
  color: var(--avl-upload-file-label-hover-color);
  text-decoration: none;

}

.item-container.complete .item-icon {
  grid-row: 1;
}

.item-container.loading {
  color: var(--avl-upload-file-name-color);
  padding-top: 10px;
  padding-bottom: 10px;
}

.item-container.fail .error-message {
  font-size: 12px;
  color: var(--avl-upload-file-error-message-color);
}

.item-container.fail {
  grid-template-rows: 24px 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}

.item-container.fail .item-icon {
  grid-column-start: 2; 
  grid-column-end: 3; 
  grid-row-start: 1; 
  grid-row-end: 3;
}

.item-container.fail .item-name {
  color: var(--avl-upload-file-fail-color);
}</style>`;

//# sourceMappingURL=avl-file-view.css.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.html.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.html.js ***!
  \*********************************************************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_file_view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-file-view.css */ "./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.css.js");
/* harmony import */ var _avl_upload_progress_avl_upload_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../avl-upload-progress/avl-upload-progress */ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.js");
/* harmony import */ var _avl_overflow_menu_avl_overflow_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../avl-overflow-menu/avl-overflow-menu */ "./node_modules/@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu.js");
/* harmony import */ var _avl_icon_button_avl_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../avl-icon-button/avl-icon-button */ "./node_modules/@avl-controls/core/dist/avl-icon-button/avl-icon-button.js");





//<link rel="import" href="../avl-upload-progress/avl-upload-progress.html">
let template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
  ${_avl_file_view_css__WEBPACK_IMPORTED_MODULE_1__["style"]}
    <template is="dom-if" if="[[checkStatus(_file.status, 'uploading')]]">
      <div class="item-container loading">
        <avl-overflow-tooltip class="item-name">[[_file.name]]</avl-overflow-tooltip>
        <avl-icon-button id="abortIcon" class="item-icon" icon="icons:close" on-click="abortUpload" ></avl-icon-button>
        <avl-upload-progress percentage="[[percentage]]" indeterminate="[[indeterminateProgress]]"></avl-upload-progress>
      </div>
    </template>
    <template is="dom-if" if="[[checkStatus(_file.status, 'complete')]]">
      <div class="item-container complete">
        <div class="item-name">
          <template is="dom-if" if="[[_file.downloadUrl]]">
            <a tabindex="-1" on-click="fileLinkClicked">
              [[_file.name]]
            </a>
          </template>
          <template is="dom-if" if="[[!_file.downloadUrl]]">
            [[_file.name]]
          </template>
        </div>
        <avl-overflow-menu tabindex="-1" class="item-icon" items="[[completeMenuItems]]" on-item-clicked="fileMenuItemClicked" disabled="[[disabled]]">
          <avl-icon-button icon="more-vert" slot="trigger" disabled="[[disabled]]"></avl-icon-button>
        </avl-overflow-menu>
      </div>
    </template>
    <template is="dom-if" if="[[checkStatus(_file.status, 'fail')]]">
      <div class="item-container fail">
        <avl-overflow-tooltip class="item-name">[[_file.name]]</avl-overflow-tooltip>
        <avl-overflow-menu tabindex="-1" class="item-icon" items="[[failMenuItems]]" on-item-clicked="fileMenuItemClicked" disabled="[[disabled]]">
          <avl-icon-button icon="more-vert" slot="trigger" disabled="[[disabled]]"></avl-icon-button>
        </avl-overflow-menu>
        <div class="error-message">[[failErrorMessage]]</div>
      </div>
    </template>
    <template is="dom-if" if="[[checkStatus(_file.status, 'abort')]]">
      <div class="item-container fail">
        <avl-overflow-tooltip class="item-name">[[_file.name]]</avl-overflow-tooltip>
        <avl-overflow-menu tabindex="-1" class="item-icon" items="[[abortMenuItems]]" on-item-clicked="fileMenuItemClicked" disabled="[[disabled]]">
          <avl-icon-button icon="more-vert" slot="trigger" disabled="[[disabled]]"></avl-icon-button>
        </avl-overflow-menu>
        <div class="error-message">[[abortErrorMessage]]</div>
      </div>
    </template>
    <a id="downloadAnchor" style="display:none"></a>`;

//# sourceMappingURL=avl-file-view.html.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_file_view_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-file-view.html */ "./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.html.js");


class AvlFileViewImpl extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
    constructor() {
        super(...arguments);
        this.percentage = 0;
    }
    static get is() { return 'avl-file-view'; }
    static get properties() {
        return {
            focused: {
                type: Boolean,
                reflectToAttribute: true,
            },
            disabled: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true
            },
            file: {
                type: Object,
                observer: 'fileChanged'
            },
            target: {
                type: String
            },
            service: {
                type: Object
            },
            accept: {
                type: String
            },
            additionalMenuItems: {
                type: Array,
                observer: 'resetMenuItems'
            },
            indeterminateProgress: {
                type: Boolean,
                value: false
            },
            failErrorMessage: {
                type: String
            },
            abortErrorMessage: {
                type: String
            },
            retryMenuItem: {
                type: Object,
                observer: 'resetMenuItems'
            },
            removeMenuItem: {
                type: Object,
                observer: 'resetMenuItems'
            },
            downloadMenuItem: {
                type: Object,
                observer: 'resetMenuItems'
            }
        };
    }
    static get template() {
        return _avl_file_view_html__WEBPACK_IMPORTED_MODULE_1__["template"];
    }
    connectedCallback() {
        super.connectedCallback();
        this.resetMenuItems();
        this.addEventListener("focusin", (event) => {
            this.focused = true;
        });
        this.addEventListener("blur", (event) => {
            this.focused = false;
        });
        this.addEventListener('menu-item-clicked', (event) => {
            if (event.detail.item === this.retryMenuItem) {
                this.setFileStatus('notStarted');
                this.upload();
            }
            if (event.detail.item === this.downloadMenuItem && this.file.downloadUrl) {
                this.download(this.file.downloadUrl);
            }
            this.focus();
        });
        this.addEventListener('keydown', (e) => {
            if (e.key == 'Enter' || e.key == ' ') {
                const overflowMenu = this.shadowRoot.querySelectorAll('avl-overflow-menu');
                if (overflowMenu.length > 1) {
                    overflowMenu[0].open = false;
                    overflowMenu[1].open = true;
                }
                else
                    overflowMenu[0].open = true;
            }
        });
        this.addEventListener('keydown', (e) => {
            if (e.key == 'Escapce' || e.key == 'Esc') {
                const overflowMenu = this.shadowRoot.querySelector('avl-overflow-menu');
                overflowMenu.open = false;
            }
        });
    }
    /* focused */
    focusedIn() {
        this.focused = true;
    }
    focusedOut() {
        this.focused = false;
    }
    setFileStatus(status) {
        this.file.status = status;
        this.set('_file.status', status);
        this.dispatchEvent(new CustomEvent('file-status-changed', { detail: { value: this.file.status } }));
    }
    download(url) {
        this.service.downloadFile(url)
            .then((blob) => {
            const objectUrl = window.URL.createObjectURL(blob);
            this.$.downloadAnchor.href = objectUrl;
            this.$.downloadAnchor.target = '_blank';
            this.$.downloadAnchor.download = this.file.name;
            this.$.downloadAnchor.click();
            window.URL.revokeObjectURL(objectUrl);
        });
    }
    resetMenuItems() {
        this.completeMenuItems = [this.downloadMenuItem, this.removeMenuItem];
        this.abortMenuItems = [this.retryMenuItem, this.removeMenuItem];
        this.failMenuItems = [this.retryMenuItem, this.removeMenuItem];
        if (this.additionalMenuItems) {
            Object.keys(this.additionalMenuItems).forEach((status) => {
                if (['abort', 'fail', 'complete'].indexOf(status) !== -1) {
                    this[`${status}MenuItems`] = this[`${status}MenuItems`].concat(this.additionalMenuItems[`${status}`]);
                }
            });
        }
    }
    fileChanged(file) {
        this._file = Object.assign({}, file);
        if (file && file.status === 'notStarted') {
            this.upload();
        }
    }
    upload() {
        this.abortUploadAction = this.service.uploadFile(this.file, this.target, this.onUploadProgress.bind(this), this.onComplete.bind(this), this.onError.bind(this));
        this.setFileStatus('uploading');
        this.dispatchEvent(new CustomEvent('upload-start', { detail: { value: this.file } }));
    }
    onUploadProgress(progress) {
        if (progress.lengthComputable) {
            this.setUploadProgress(progress.loaded);
            this.percentage = 100 * (this.file.loaded / this.file.size);
        }
        else {
            this.indeterminateProgress = true;
        }
    }
    setUploadProgress(loaded) {
        this.file.loaded = loaded;
        this.set('_file.loaded', loaded);
    }
    onComplete(downloadUrl) {
        this.setFileStatus('complete');
        if (downloadUrl) {
            this.setDownloadUrl(downloadUrl);
        }
        this.dispatchEvent(new CustomEvent('upload-complete', { detail: { value: this.file } }));
    }
    setDownloadUrl(url) {
        this.set('_file.downloadUrl', url);
        this.file.downloadUrl = url;
    }
    onError(errorResponse) {
        this.setFileStatus('fail');
        this.dispatchEvent(new CustomEvent('upload-fail', { detail: { value: this.file, error: errorResponse } }));
    }
    checkStatus(currentStatus, status) {
        return currentStatus === status;
    }
    abortUpload(file) {
        this.abortUploadAction();
        this.setFileStatus('abort');
        this.dispatchEvent(new CustomEvent('upload-abort', { detail: { value: this.file } }));
    }
    fileLinkClicked(e) {
        e.preventDefault();
        if (this.file.downloadUrl)
            this.download(this.file.downloadUrl);
    }
    fileMenuItemClicked(e) {
        const item = e.detail.value;
        this.dispatchEvent(new CustomEvent('menu-item-clicked', { detail: { value: this.file, item: item } }));
    }
}
customElements.define(AvlFileViewImpl.is, AvlFileViewImpl);

//# sourceMappingURL=avl-file-view.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.css.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.css.js ***!
  \****************************************************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer */ "./node_modules/@polymer/polymer/polymer-element.js");

const style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"] `<style>
.avl-upload-modal {
  display: block;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.avl-upload-modal-content {
  background-color: var(--avl-background-color);
  margin: 15% auto;
  padding: 20px 20px 0 20px;
  width: 200px;
  box-shadow: var(--avl-box-shadow-24dp);
}

.avl-upload-modal-content h1 {
  font-size: 16px;
  font-weight: bolder;
}

.avl-upload-modal-content p.errorFileName {
  margin: 0;
}

.avl-upload-modal-content-footer {
  width: 100%;
  text-align: right;
  position: relative;
  left: 20px;
}</style>`;

//# sourceMappingURL=avl-upload-dialog.css.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.html.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.html.js ***!
  \*****************************************************************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_upload_dialog_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-upload-dialog.css */ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.css.js");
/* harmony import */ var _avl_button_avl_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../avl-button/avl-button */ "./node_modules/@avl-controls/core/dist/avl-button/avl-button.js");



let template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
  ${_avl_upload_dialog_css__WEBPACK_IMPORTED_MODULE_1__["style"]}
      <div id="container">
        <div id="avl-upload-modal" class="avl-upload-modal">
          <div class="avl-upload-modal-content">
            <h1>{{failErrorTypeTitle}}</h1>
            <p>{{failErrorTypeMessage}}</p>
            <template is="dom-if" if="[[errorFiles]]">
              <b>{{failErrorFiles}}:</b>
              <template is="dom-repeat" items="{{errorFiles}}">
                <p class="errorFileName">{{displayIndex(index)}}) {{item.name}}</p>
              </template>
            </template>
            <div class="avl-upload-modal-content-footer">
              <avl-button id="avl-upload-dialog-button" on-click="closeDialog">OK</avl-button>
            </div>
          </div>
        </div>
      </div>`;

//# sourceMappingURL=avl-upload-dialog.html.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.js ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _avl_upload_dialog_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avl-upload-dialog.html */ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.html.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");


class UploadDialogImpl extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
    constructor() {
        super(...arguments);
        this.failErrorTypeMessage = 'The format of the file(s) you are trying to upload is not acceptable by software.';
        this.failErrorTypeTitle = 'Unsupported File Format';
        this.failErrorFiles = 'File(s)';
    }
    static get is() { return 'avl-upload-dialog'; }
    static get properties() {
        return {
            errorFiles: {
                type: Array,
            }
        };
    }
    static get template() {
        return _avl_upload_dialog_html__WEBPACK_IMPORTED_MODULE_0__["template"];
    }
    closeDialog() {
        this.dispatchEvent(new CustomEvent('close', { detail: 'true' }));
    }
    async translateLabels() {
        if (!AvlLocalizationService || !AvlLocalizationService.translationService)
            return;
        let translationService = AvlLocalizationService.translationService;
        this.failErrorTypeMessage = await translationService.translate('VizBox.AvlUpload.FormatIsUnsupportedMessage');
        this.failErrorTypeTitle = await translationService.translate('VizBox.AvlUpload.FormatIsUnsupported');
        this.failErrorFiles = await translationService.translate('VizBox.AvlUpload.FailErrorFiles');
    }
    displayIndex(index) {
        return index + 1;
    }
}
customElements.define(UploadDialogImpl.is, UploadDialogImpl);

//# sourceMappingURL=avl-upload-dialog.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.css.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.css.js ***!
  \********************************************************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer */ "./node_modules/@polymer/polymer/polymer-element.js");

const style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"] `<style>
:host {
  display: block;
  width: 100%;
}

#container {
  background-color: var(--avl-upload-progress-bar-color);
  height: 4px;
  width: 100%;
  overflow: hidden;
}

#indicator {
  background-color: var(--avl-upload-progress-bar-indicator-color);
  height: 100%;
}

:host([indeterminate]) #indicator {
  background-color: var(--avl-upload-progress-bar-color);
  width: 100%;
}

.indeterminate::after {
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  transform-origin: right center;
  animation: indeterminate-bar 1s linear infinite;
  background-color: var(--avl-upload-progress-bar-indicator-color);
}

@keyframes indeterminate-bar {
  0% {
    transform: scaleX(1) translateX(-100%);
  }
  50% {
    transform: scaleX(1) translateX(0%);
  }
  75% {
    transform: scaleX(1) translateX(0%);
    animation-timing-function: cubic-bezier(.28,.62,.37,.91);
  }
  100% {
    transform: scaleX(0) translateX(0%);
  }
}</style>`;

//# sourceMappingURL=avl-upload-progress.css.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.html.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.html.js ***!
  \*********************************************************************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_upload_progress_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-upload-progress.css */ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.css.js");


let template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
  ${_avl_upload_progress_css__WEBPACK_IMPORTED_MODULE_1__["style"]}

  <div id="container">
    <template is="dom-if" if="[[!indeterminate]]">
      <div id="indicator" style$="width: {{percentage}}%;"></div>
    </template>
    <template is="dom-if" if="[[indeterminate]]">
      <div id="indicator" class="indeterminate"></div>
    </template>
  </div>`;

//# sourceMappingURL=avl-upload-progress.html.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.js ***!
  \****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_upload_progress_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-upload-progress.html */ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.html.js");


class ProgressBarImpl extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
    static get is() { return 'avl-upload-progress'; }
    static get properties() {
        return {
            percentage: {
                type: Number
            },
            indeterminate: {
                type: Boolean,
                value: false,
                reflectToAttribute: true
            }
        };
    }
    static get template() {
        return _avl_upload_progress_html__WEBPACK_IMPORTED_MODULE_1__["template"];
    }
}
customElements.define(ProgressBarImpl.is, ProgressBarImpl);

//# sourceMappingURL=avl-upload-progress.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.css.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.css.js ***!
  \***************************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer */ "./node_modules/@polymer/polymer/polymer-element.js");

const style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"] `<style>
:host {
  --avl-icon-custom-color: var(--avl-upload-drop-zone-icon-color, var(--avl-icon-default-color));

  --avl-upload-file-uploaded-color: var(--avl-link-color);
  --avl-upload-file-label-hover-color: var(--avl-link-hover-color);
  --avl-upload-file-error-message-color: var(--avl-error-color);
  --avl-upload-file-fail-color: var(--avl-foreground-disabled-color);
  --avl-upload-file-name-color: var(--avl-foreground-medium-color);
  --avl-upload-file-hover-color: var(--avl-ink-default-hover-color);
  --avl-upload-file-focus-color: var(--avl-ink-default-focus-color);
  
  --avl-upload-icons-color: var(--avl-icon-color);

  --avl-upload-progress-bar-color: var(--avl-progress-25-color);
  --avl-upload-progress-bar-indicator-color: var(--avl-progress-color);

  --avl-upload-drop-zone-border-color: var(--avl-divider-color);
  --avl-upload-drop-zone-active-border-color: var(--avl-border-color);

  --avl-upload-drop-zone-hover-background-color: var(--avl-ink-default-hover-color);
  --avl-upload-drop-zone-hover-border-color: var(--avl-border-color);
  --avl-upload-drop-zone-focus-background-color: var(--avl-ink-default-focus-color);

  --avl-upload-drop-zone-disabled-background-color: var(--avl-background-color);
  --avl-upload-drop-zone-disabled-border-color: var(--avl-ink-default-hover-color);
  --avl-upload-drop-zone-disabled-text-color: var(--avl-foreground-disabled-color);

  --avl-upload-drop-zone-invalid-border-color: var(--avl-error-color);
  --avl-upload-drop-zone-invalid-text-color: var(--avl-error-color);
  --avl-upload-drop-zone-invalid-background-color: var(--avl-background-color);
  
  --avl-upload-drop-zone-disabled-icon-color: var(--avl-icon-disabled-color);
  --avl-upload-drop-zone-pressed-color: var(--avl-ink-default-pressed-color);

  width: 300px;
  
  font-family: var(--avl-font-family);
  color: var(--avl-upload-default-text-color, var(--avl-foreground-color));
  background-color: var(--avl-upload-drop-zone-background-color, var(--avl-background-color));
  display: block;

  max-height: 256px;
  margin-top: 4px;
  margin-bottom: 8px;
}

avl-file-view {
  outline: none;
  display: block;
}

span{
  color: var(--avl-link-color);
}

#uploadContainer {
  font-size: 12px;
  display: flex; 
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  align-items: stretch;
  max-height: inherit;
  height: inherit;
}

.file-list {
  max-height: 100%;
  height: 100%;
  outline: none;
  flex: 0 1 auto;
  overflow-y: auto;
}

.dropzone{
  outline: none;
  min-height: 46px;
  cursor: pointer;
  padding: 8px; 
  position: relative;
  text-align: center;
  border: 1px solid;
  border-color: var(--avl-upload-drop-zone-border-color);
  background-color: var(--avl-upload-drop-zone-background-color);
  transition-property: background-color;
  transition-duration: 0.35s;
  border-radius: 2px;
}

.dropzone:hover:not([disabled]){
  background-color: var(--avl-upload-drop-zone-hover-background-color);
  border-color: var(--avl-upload-drop-zone-hover-border-color);
}

:host([readonly]) .dropzone {
  display: none;
}

.dropzone.focusDropzone{
  background-color: var(--avl-upload-drop-zone-focus-background-color);
  border-color: var(--avl-upload-drop-zone-hover-border-color);
}

:host([disabled]) .dropzone{
  background-color: var(--avl-upload-drop-zone-disabled-background-color);
  border-color: var(--avl-upload-drop-zone-disabled-border-color);
  color:  var(--avl-upload-drop-zone-disabled-text-color);
  cursor: default;
}

:host([disabled]){
  --avl-upload-drop-zone-icon-color: var(--avl-upload-drop-zone-disabled-icon-color);
}

:host([invalid]) .dropzone{
  border-color:  var(--avl-upload-drop-zone-invalid-border-color);
  color: var(--avl-upload-drop-zone-invalid-text-color);
  background-color: var(--avl-upload-drop-zone-invalid-background-color);
}

:host([invalid]){
  --avl-upload-drop-zone-icon-color: var(--avl-upload-drop-zone-disabled-icon-color);
}

.dropzone[active]{
  border-color: var(--avl-upload-drop-zone-active-border-color);
}

.dropzone.dragged{
  background-color: var(--avl-upload-drop-zone-focus-background-color);
}

paper-ripple {
  background-position: center;
  transition: background 0.2s;
  position: absolute;
  width: 100%;
  height: 100%;
  color: var(--avl-upload-drop-zone-pressed-color);
}

#fileInput {
  display: none;
}</style>`;

//# sourceMappingURL=avl-upload.css.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.html.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.html.js ***!
  \****************************************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_upload_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-upload.css */ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.css.js");
/* harmony import */ var _all_initial_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all-initial.css */ "./node_modules/@avl-controls/core/dist/all-initial.css.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple.js */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var _avl_file_view_avl_file_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./avl-file-view/avl-file-view */ "./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.js");
/* harmony import */ var _avl_upload_dialog_avl_upload_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./avl-upload-dialog/avl-upload-dialog */ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.js");
/* harmony import */ var _avl_overflow_menu_avl_overflow_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../avl-overflow-menu/avl-overflow-menu */ "./node_modules/@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu.js");







let template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
  ${_all_initial_css__WEBPACK_IMPORTED_MODULE_2__["allInitial"]}
  ${_avl_upload_css__WEBPACK_IMPORTED_MODULE_1__["style"]}

  <div id="uploadContainer">
    <div class="header">
      [[label]]
    </div>
    
    <div class="file-list" tabindex="0" on-focus="fileListFocus" on-mousedown="fileListMouseDown">
      <template is="dom-repeat" items="{{files}}">
        <avl-file-view class="file-view" tabindex="-1" service="[[uploadService]]" accept="[[accept]]"
                        target="[[target]]" file="{{item}}" additional-menu-items="[[additionalMenuItems]]"
                        indeterminate-progress="[[indeterminateProgress]]"
                        fail-error-message="[[failErrorMessage]]"
                        abort-error-message="[[abortErrorMessage]]"
                        retry-menu-item="[[retryMenuItem]]"
                        remove-menu-item="[[removeMenuItem]]"
                        download-menu-item="[[downloadMenuItem]]"
                        on-upload-start="redispatchFileEvent"
                        on-upload-fail="redispatchFileEvent"
                        on-upload-complete="redispatchFileEvent"
                        on-upload-abort="redispatchFileEvent"
                        on-menu-item-clicked="redispatchFileEvent"
                        on-file-rejected="redispatchFileEvent"
                        on-file-status-changed="onFileStatusChange"
                        disabled="[[disabled]]"
                        on-focus="focusedIn" 
                        on-focusout="focusedOut">
        </avl-file-view>
      </template>
    </div>

    <div id="dropzone" tabindex="0" class="dropzone" on-click="browseFiles" on-focus="focusedIn" on-focusout="focusedOut">
      <avl-icon icon="icons:cloud-upload"></avl-icon>
      <template is="dom-if" if="[[shouldShowError(invalid, errorMessage)]]">
        <div>{{errorMessage}}</div>
      </template>
      <template is="dom-if" if="[[!shouldShowError(invalid, errorMessage)]]">
        <!-- property innerHTML when written as an attibute according to polymer rules (camelCase to kebab-case) is inner-h-t-m-l -->
        <div inner-h-t-m-l="[[dragAreaMessage]]"></div>
      </template>
      <template is="dom-if" if="[[!disabled]]">
        <template is="dom-if" if="[[!readonly]]">
          <paper-ripple initial-opacity="1"></paper-ripple>
        </template>
      </template>
    </div>
    <template is="dom-if" if="[[isErrorDialogOpen]]">
        <avl-upload-dialog on-close="closeErrorDialog" error-files="[[errorArray]]"></avl-upload-dialog>
    </template>
  </div>

  <input id="fileInput" type="file" multiple accept="{{accept}}">`;

//# sourceMappingURL=avl-upload.html.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.js ***!
  \***********************************************************************/
/*! exports provided: AvlFileImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvlFileImpl", function() { return AvlFileImpl; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_upload_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-upload.html */ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.html.js");
/* harmony import */ var _avl_localization_service_avl_localization_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../avl-localization-service/avl-localization-service.js */ "./node_modules/@avl-controls/core/dist/avl-localization-service/avl-localization-service.js");
/* harmony import */ var _avl_localization_service_avl_localization_service_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_avl_localization_service_avl_localization_service_js__WEBPACK_IMPORTED_MODULE_2__);



function isTypeAccepted(file, accept) {
    const acceptArray = accept.split(',');
    const filenameSegments = file.name.split('.');
    const ext = `.${filenameSegments.slice(-1)}`;
    const mediaType = file.type;
    // if some mimetypes are defined with asterisk e.g. image/*
    const mimeAll = acceptArray.filter(item => {
        return /\w+\/\*/.test(item);
    }).map(item => item.split('/')[0]);
    if (mimeAll.indexOf('*') === -1 &&
        mimeAll.indexOf(mediaType.split('/')[0]) === -1 &&
        acceptArray.indexOf(ext) === -1 &&
        acceptArray.indexOf(mediaType) === -1) {
        return false;
    }
    return true;
}
class AvlUploadServiceImpl {
    uploadFile(file, target, progressCallback, completeCallback, failCallback) {
        const formData = new FormData();
        formData.append('file', file.file);
        const xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', (e) => {
            if (progressCallback) {
                progressCallback(e);
            }
        });
        xhr.open('POST', target, true);
        xhr.addEventListener('load', (e) => {
            if (completeCallback && xhr.status === 200) {
                const response = JSON.parse(xhr.response);
                if (response && response.downloadUrl) {
                    completeCallback(response.downloadUrl);
                }
                else {
                    completeCallback();
                }
            }
            else if (failCallback) {
                failCallback({
                    status: xhr.status,
                    response: xhr.response
                });
            }
        });
        xhr.addEventListener('error', (e) => {
            if (failCallback) {
                failCallback({
                    status: xhr.status,
                    response: xhr.response
                });
            }
        });
        xhr.send(formData);
        return xhr.abort.bind(xhr);
    }
    downloadFile(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.addEventListener('load', (e) => {
                if (xhr.status === 200 && xhr.response instanceof Blob) {
                    resolve(xhr.response);
                }
                else {
                    reject(xhr.statusText);
                }
            });
            xhr.addEventListener('error', (err) => {
                reject(err);
            });
            xhr.send();
        });
    }
}
class AvlFileImpl {
    constructor(file) {
        this.file = file;
        this.loaded = 0;
        this.status = 'notStarted';
        this.name = file.name;
        this.type = file.type;
        this.size = file.size;
    }
}
class AvlUploadImpl extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
    constructor() {
        super(...arguments);
        this.mouseEvent = false;
        this.isErrorDialogOpen = false;
        this.errorArray = [];
        this.failErrorMessage = 'Upload is unsuccessful.';
        this.abortErrorMessage = 'Upload aborted.';
        this.dragAreaMessage = 'Drag a file to attach, or <span>browse</span>';
        this.retryMenuItemLabel = 'Retry';
        this.removeMenuItemLabel = 'Remove';
        this.downloadMenuItemLabel = 'Download';
        this.uploadService = new AvlUploadServiceImpl;
    }
    static get is() { return 'avl-upload'; }
    static get properties() {
        return {
            focused: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true
            },
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'resetMenuItems'
            },
            accept: {
                type: String
            },
            target: {
                type: String
            },
            label: {
                type: String
            },
            additionalMenuItems: {
                type: Object,
            },
            required: {
                type: Boolean,
                reflectToAttribute: true,
                value: false
            },
            invalid: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true,
                computed: 'computeInvalid(_invalid, files.*, required, hasComplete)'
            },
            validationCallback: {
                type: Function
            },
            alreadyUploadedFiles: {
                type: Array,
                value: []
            },
            uploadService: {
                type: Object,
            },
            errorMessage: {
                type: String,
            },
            files: {
                type: Array,
            },
            readonly: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'resetMenuItems'
            }
        };
    }
    static get observers() {
        return [
            'filesListChanged(files)',
        ];
    }
    static get template() {
        return _avl_upload_html__WEBPACK_IMPORTED_MODULE_1__["template"];
    }
    async translateLabels() {
        if (!AvlLocalizationService || !AvlLocalizationService.translationService)
            return;
        let translationService = AvlLocalizationService.translationService;
        this.failErrorMessage = await translationService.translate('VizBox.AvlUpload.UploadIsUnsuccessful');
        this.abortErrorMessage = await translationService.translate('VizBox.AvlUpload.UploadAborted');
        let browseLabel = await translationService.translate('VizBox.AvlUpload.Browse');
        this.dragAreaMessage = await translationService.translate('VizBox.AvlUpload.DragAreaMessage', { browse: `<span>${browseLabel}</span>` });
        this.retryMenuItemLabel = await translationService.translate('VizBox.AvlUpload.Retry');
        this.removeMenuItemLabel = await translationService.translate('VizBox.AvlUpload.Remove');
        this.downloadMenuItemLabel = await translationService.translate('VizBox.AvlUpload.Download');
        this.resetMenuItems();
    }
    computeInvalid(_invalid, fileChange, required, hasComplete) {
        if (_invalid != null) {
            return _invalid;
        }
        if (required === false && !this.validationCallback) {
            return false;
        }
        const files = fileChange.value;
        const doValidate = fileChange.path === 'files' && files != null;
        if (!doValidate)
            return this.invalid;
        if (doValidate) {
            if (this.validationCallback && files) {
                return !this.validationCallback(files);
            }
            if (required === true && (files == null || files.length === 0 || (files.length > 0 && !hasComplete))) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    }
    hasCompletedFile() {
        return this.files.find(f => f.status === 'complete') != null;
    }
    filesListChanged() {
        this.dispatchEvent(new CustomEvent('files-changed', { detail: { value: this.files } }));
    }
    onFileStatusChange(event) {
        this.set('hasComplete', this.hasCompletedFile());
        if (this.validationCallback) {
            this.set('_invalid', !this.validationCallback(this.files));
        }
    }
    resetMenuItems() {
        if (this.disabled) {
            this.setAttribute("tabindex", "-1");
        }
        else {
            this.removeAttribute("tabindex");
        }
        if (!this.disabled && !this.readonly) {
            this.retryMenuItem = { label: this.retryMenuItemLabel };
            this.removeMenuItem = { label: this.removeMenuItemLabel };
            this.downloadMenuItem = { label: this.downloadMenuItemLabel };
        }
        else {
            this.retryMenuItem = { label: this.retryMenuItemLabel };
            this.removeMenuItem = undefined;
            this.downloadMenuItem = { label: this.downloadMenuItemLabel };
        }
    }
    connectedCallback() {
        super.connectedCallback();
        if (AvlLocalizationService && AvlLocalizationService.translationService) {
            this.translateLabels();
        }
        this.files = this.files || [];
        this.resetMenuItems();
        this.$.fileInput.addEventListener('change', (e) => {
            this.errorArray = [];
            const fileInput = this.$.fileInput;
            const filesToUpload = Array.from(fileInput.files).map(file => new AvlFileImpl(file));
            this.handleAddFiles(filesToUpload);
            fileInput.value = '';
        });
        this.addEventListener('menu-item-clicked', (e) => {
            if (e.detail.item === this.removeMenuItem) {
                const file = e.detail.value;
                const index = this.files.indexOf(file);
                if (index !== -1) {
                    this.files = [...this.files.slice(0, index), ...this.files.slice(index + 1)];
                    this.$.fileInput.value = null;
                    this.set('hasComplete', this.hasCompletedFile());
                }
            }
        });
        this.fileListElement = this.shadowRoot.querySelector('.file-list');
        this.fileListElement.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowUp' || event.key === 'Up' || event.key === 'ArrowDown' || event.key === 'Down') {
                event.preventDefault();
                let overflowMenu;
                (this.shadowRoot.querySelectorAll('avl-file-view')).forEach((item) => {
                    if (item === document.activeElement.shadowRoot.activeElement) {
                        overflowMenu = item.shadowRoot.querySelector('avl-overflow-menu');
                    }
                });
                if (overflowMenu) {
                    if (!overflowMenu.open) {
                        const fileViewFiles = this.shadowRoot.querySelectorAll('avl-file-view');
                        const allItemElements = [];
                        let currentItemIndex;
                        fileViewFiles.forEach((userItem, index) => {
                            if (userItem.focused == true) {
                                currentItemIndex = index;
                            }
                            allItemElements.push(userItem);
                        });
                        if (!currentItemIndex) {
                            currentItemIndex = 0;
                        }
                        const itemIndexToMoveTo = this.navigate(currentItemIndex, event.key);
                        if (itemIndexToMoveTo !== undefined) {
                            allItemElements[itemIndexToMoveTo].focus();
                            event.preventDefault();
                        }
                    }
                }
            }
        });
        this.dropArea = this.shadowRoot.querySelector('#dropzone');
        this.dropArea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ')
                this.browseFiles();
        });
        this.dropArea.addEventListener('dragenter', this.preventDefaults, false);
        this.dropArea.addEventListener('dragover', (e) => {
            this.preventDefaults(e);
            this.dropArea.classList.add("dragged");
        }, false);
        this.dropArea.addEventListener('dragleave', (e) => {
            this.preventDefaults(e);
            this.dropArea.classList.remove("dragged");
        }, false);
        this.dropArea.addEventListener('drop', (e) => {
            this.preventDefaults(e);
            this.dropArea.classList.remove("dragged");
        }, false);
        if (!this.disabled) {
            this.dropArea.addEventListener('drop', this.handleDrop.bind(this), false);
        }
    }
    fileNameVerification(file) {
        var i = 1;
        let nameArray = file.name.split(/\.(?=[^\.]+$)/);
        while (this.files.find(f => f.name == file.name)) {
            file.name = nameArray[0] + '-(' + i + ').' + nameArray[1];
            i++;
        }
    }
    handleAddFiles(files) {
        let filesToUpload = [];
        for (const file of files) {
            this.fileNameVerification(file);
            if (this.accept && !isTypeAccepted(file, this.accept)) {
                setTimeout(_ => this.dispatchEvent(new CustomEvent('file-rejected', { detail: { value: file } })));
                this.errorArray.push(file);
            }
            else {
                filesToUpload = [...filesToUpload, file];
            }
        }
        if (this.errorArray.length > 0) {
            this.openErrorDialog();
        }
        if (filesToUpload.length > 0) {
            this.files = [...this.files, ...filesToUpload];
        }
    }
    handleDrop(e) {
        this.errorArray = [];
        let dt = e.dataTransfer;
        const draggedFiles = dt.files;
        const filesToUpload = Array.from(draggedFiles).map(file => new AvlFileImpl(file));
        this.handleAddFiles(filesToUpload);
    }
    focusedIn(event) {
        if (event.target.id === "dropzone") {
            event.target.classList.add("focusDropzone");
        }
        if (!this.disabled) {
            this.focused = true;
        }
    }
    focusedOut(event) {
        if (event.target.id === "dropzone") {
            event.target.classList.remove("focusDropzone");
        }
        this.focused = false;
    }
    fileListFocus() {
        const firstFileView = this.shadowRoot.querySelector('.file-view');
        if (firstFileView && !this.disabled && !this.mouseEvent) {
            firstFileView.focus();
        }
        this.mouseEvent = false;
    }
    fileListMouseDown() {
        this.mouseEvent = true;
    }
    preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    browseFiles() {
        if (!this.disabled && !this.readonly) {
            this.$.fileInput.click();
        }
    }
    redispatchFileEvent(e) {
        this.dispatchEvent(new CustomEvent(e.type, { detail: e.detail }));
    }
    shouldShowError(invalid, errorMessage) {
        return invalid === true && errorMessage != null;
    }
    openErrorDialog() {
        this.isErrorDialogOpen = true;
    }
    closeErrorDialog() {
        this.isErrorDialogOpen = false;
    }
    navigate(currentItemIndex, keyPressed) {
        switch (keyPressed) {
            case 'ArrowUp':
            case 'Up':
                if (currentItemIndex === 0) {
                    return undefined;
                }
                return currentItemIndex - 1;
            case 'ArrowDown':
            case 'Down':
                if (currentItemIndex === this.files.length - 1) {
                    return undefined;
                }
                return currentItemIndex + 1;
            default:
                return undefined;
        }
    }
}
customElements.define(AvlUploadImpl.is, AvlUploadImpl);

//# sourceMappingURL=avl-upload.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/datatable/dist/avl-datatable/array-data-provider.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/array-data-provider.js ***!
  \****************************************************************************************/
/*! exports provided: getValueFromPath, getParentObjectFromPath, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFromPath", function() { return getValueFromPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentObjectFromPath", function() { return getParentObjectFromPath; });
/* harmony import */ var _avl_controls_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @avl-controls/interfaces */ "./node_modules/@avl-controls/interfaces/index.js");

/** Returns undefined if the path doesn't exist. */
const getValueFromPath = (row, path) => {
    let current = row;
    for (const part of path.split('.')) {
        if (typeof current !== 'object' || current === null) {
            return undefined;
        }
        current = current[part];
    }
    return current;
};
const getParentObjectFromPath = (row, path) => {
    let current = row;
    const parts = path.split('.');
    for (let i = 0; i < parts.length - 1; ++i) {
        if (current[parts[i]] === undefined || current[parts[i]] === null) {
            return current;
        }
        else {
            current = current[parts[i]];
        }
    }
    return current;
};
/**
 * Creates a [[DataProvider]] from an array.
 * @param data - Array with data
 */
const createArrayDataProvider = (data) => {
    return (params) => new Promise((resolve, reject) => {
        let tmpData;
        if (params.parentItem) {
            tmpData = params.parentItem.children;
        }
        else {
            tmpData = data === undefined ? [] : data.slice();
        }
        updateHasChildren(tmpData);
        updateDescendantsMatchFilter(tmpData, params.filters, params.globalFilterFields);
        if (filtersExist(params.filters)) {
            // If any of the ancestors match filter, then don't filter the children
            if (!params.parentItem || !ancestorsMatchFilter(params.parentItem, params.filters, params.globalFilterFields, data)) {
                tmpData = tmpData.filter((item) => item.descendantsMatchFilter || matchesFilter(item, params.filters, params.globalFilterFields));
            }
        }
        // Sort the items
        if (params.sortOrders.length) {
            for (const order of params.sortOrders.reverse()) {
                tmpData.sort((a, b) => {
                    const toLowercase = (value) => typeof value === 'string' ? value.toLowerCase() : value;
                    const value1 = toLowercase(getValueFromPath(a, order.path));
                    const value2 = toLowercase(getValueFromPath(b, order.path));
                    let ret;
                    if (value1 === null || value1 === undefined || value1 === '' || value2 === null || value2 === undefined || value2 === '') {
                        ret = (value1 === null || value1 === undefined || value1 === '') ? 1 : -1;
                    }
                    else {
                        ret = value1 >= value2 ? 1 : -1;
                    }
                    return order.ascending ? ret : ret * -1;
                });
            }
        }
        resolve({ rows: tmpData.slice(params.page * params.pageSize, (params.page + 1) * params.pageSize), totalRows: tmpData.length });
    });
};
/** Add a hasChildren property to the rows */
function updateHasChildren(data) {
    for (const row of data) {
        const hasChildren = rowHasChildren(row);
        if (hasChildren || row.hasChildren !== undefined) {
            row.hasChildren = hasChildren;
        }
    }
}
function updateDescendantsMatchFilter(data, filters, globalFilterFields) {
    for (const row of data) {
        const descMatchFilter = descendantsMatchFilter(row, filters, globalFilterFields);
        if (descMatchFilter || row.descendantsMatchFilter !== undefined) {
            row.descendantsMatchFilter = descMatchFilter;
        }
    }
}
const valueOnPathMatchesFilter = (row, path, filter) => {
    const value = getValueFromPath(row, path);
    if (typeof value !== 'string') {
        return false;
    }
    return getValueFromPath(row, path).toLowerCase().indexOf(filter) !== -1;
};
function matchesFilter(row, filters, globalFilterFields) {
    if (!filtersExist(filters)) {
        return true;
    }
    for (const [path, value] of filters) {
        if (path === _avl_controls_interfaces__WEBPACK_IMPORTED_MODULE_0__["globalFilterKey"]) {
            if (globalFilterFields && globalFilterFields.length > 0) {
                const globalFilter = filters.get(_avl_controls_interfaces__WEBPACK_IMPORTED_MODULE_0__["globalFilterKey"]).toLowerCase();
                let found = false;
                for (const paths of globalFilterFields) {
                    if (valueOnPathMatchesFilter(row, paths, globalFilter)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else if (!valueOnPathMatchesFilter(row, path, value.toLocaleLowerCase())) {
            return false;
        }
    }
    return true;
}
function descendantsMatchFilter(row, filters, globalFilterFields) {
    if (!rowHasChildren(row)) {
        return false;
    }
    if (!filtersExist(filters)) {
        return false;
    }
    for (const child of row.children) {
        if (matchesFilter(child, filters, globalFilterFields)) {
            return true;
        }
        if (descendantsMatchFilter(child, filters, globalFilterFields)) {
            return true;
        }
    }
    return false;
}
/** Do any of the ancestors match the filter, including the parent */
function ancestorsMatchFilter(parent, filters, globalFilterFields, data) {
    const parentsAncestors = findAncestors(data, parent);
    for (const ancestor of [parent, ...parentsAncestors]) {
        if (matchesFilter(ancestor, filters, globalFilterFields)) {
            return true;
        }
    }
    return false;
}
/** Returns all ancestors. */
function findAncestors(data, descendant) {
    const ancestors = [];
    // No ancestors, it's a top level item.
    if (data.includes(descendant)) {
        return [];
    }
    for (const row of data) {
        if (isAncestorOf(row, descendant, ancestors)) {
            return ancestors;
        }
    }
    return ancestors;
}
function isAncestorOf(potentialAncestor, descendant, ancestors) {
    if (!rowHasChildren(potentialAncestor)) {
        return false;
    }
    if (potentialAncestor.children.includes(descendant)) {
        ancestors.push(potentialAncestor);
        return true;
    }
    for (const row of potentialAncestor.children) {
        if (isAncestorOf(row, descendant, ancestors)) {
            ancestors.push(potentialAncestor);
            return true;
        }
    }
    return false;
}
function rowHasChildren(row) {
    return row.children instanceof Array && row.children.length > 0;
}
function filtersExist(filters) {
    if (filters.size === 0) {
        return false;
    }
    for (const value of filters.values()) {
        if (value !== '') {
            return true;
        }
    }
    return false;
}
/* harmony default export */ __webpack_exports__["default"] = (createArrayDataProvider);

//# sourceMappingURL=array-data-provider.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.css.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.css.js ***!
  \******************************************************************************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer */ "./node_modules/@polymer/polymer/polymer-element.js");

const style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"] `<style>
.clickable {
    cursor: pointer;
    padding: 10px;
    color: var(--avl-emphasis-medium-color);
}

.buttonLabel{
    float: left;
    line-height: 24px;
}

.dialog{
    position: absolute;
    right: 0;
    background-color: var(--avl-menu-background-color);
    width: 360px;
    height: 444px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1300;
}

.items{
    display:block;
}

avl-icon{
    color: var(--avl-emphasis-medium-color);
}
.wrapper{
    position: relative;
    outline: none;
}
.columnDefinitions{
    display:block;
    position: relative;
    height:273px;
    overflow-y: auto;
}

.title{
    border-bottom: 1px solid var(--avl-divider-color);
    padding: 24px 24px 0 24px;
}

.titleText{
    color: var(--avl-item-text-color, var(--avl-emphasis-high-color));
    margin: 0;
    font-weight: normal;
    font-size: 20px;
}

.headerChipsContainer {
    margin: 8px 0;
}

.buttonContainer{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 56px;
    border-top: 1px solid var(--avl-divider-color);
}

.header-icon {
    font-size: 12px;
}

.header-image {
    height: auto;
    width: auto;
    max-height: 18px;
} 

avl-list {
    width: 360px;
    height: 273px;
}

    /* Desktop */
:host([desktop]) .titleText{
    color: var(--avl-primary-text-color);
}

:host([desktop]) avl-button{
    margin:10px;
}

:host([desktop]) avl-checkbox{
    margin-left:10px;
}

:host([desktop]) .clickable{
    color: var(--avl-primary-text-color);
}

:host([desktop]) .dialog{
    box-shadow: initial;
    border: 1px solid black;
}

.icon{
    color:var(--avl-primary-text-color);
    width: 18px;
    height: 18px;
}
</style>`;

//# sourceMappingURL=avl-column-selector-dialog.css.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.html.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.html.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_controls_core_dist_avl_button_avl_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @avl-controls/core/dist/avl-button/avl-button */ "./node_modules/@avl-controls/core/dist/avl-button/avl-button.js");
/* harmony import */ var _avl_controls_core_dist_avl_checkbox_avl_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @avl-controls/core/dist/avl-checkbox/avl-checkbox */ "./node_modules/@avl-controls/core/dist/avl-checkbox/avl-checkbox.js");
/* harmony import */ var _avl_controls_core_dist_avl_icon_avl_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @avl-controls/core/dist/avl-icon/avl-icon */ "./node_modules/@avl-controls/core/dist/avl-icon/avl-icon.js");
/* harmony import */ var _avl_controls_core_dist_avl_list_avl_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @avl-controls/core/dist/avl-list/avl-list */ "./node_modules/@avl-controls/core/dist/avl-list/avl-list.js");
/* harmony import */ var _avl_controls_core_dist_avl_chip_list_avl_chip_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @avl-controls/core/dist/avl-chip-list/avl-chip-list */ "./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.js");
/* harmony import */ var _avl_column_selector_dialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avl-column-selector-dialog.css */ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.css.js");







let template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
  ${_avl_column_selector_dialog_css__WEBPACK_IMPORTED_MODULE_6__["style"]}
<div class="wrapper" id="avl-column-selector-dialog" on-focus="focusedIn" tabindex="0">
    <div class="clickable" id="btn-open-dialog" on-click="toggleOpen">
        <template is="dom-if" if="[[allColumns]]">
        <avl-icon-button src="data:image/svg+xml,%3Csvg id='baseline-view_column-24px' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath id='Pfad_922' data-name='Pfad 922' d='M11.059,25h5.882V5H11.059ZM4,25H9.882V5H4ZM18.118,5V25H24V5Z' transform='translate(-2 -3)' fill='%233ca0b9'/%3E%3Cpath id='Pfad_923' data-name='Pfad 923' d='M0,0H24V24H0Z' fill='none'/%3E%3C/svg%3E" id="icon-open-dialog"></avl-icon-button>
        </template>
        <template is="dom-if" if="[[!allColumns]]">
        <avl-icon-button src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg id='Gruppe_1688' data-name='Gruppe 1688' transform='translate(-438 -55)'%3E%3Cg id='Columns' transform='translate(438 55)'%3E%3Cpath id='Pfad_924' data-name='Pfad 924' d='M21,22H17a1,1,0,0,1-1-1V3a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V21A1,1,0,0,1,21,22ZM20,4H18V20h2Z' fill='%233ca0b9'/%3E%3Cpath id='Pfad_925' data-name='Pfad 925' d='M14,22H10a1,1,0,0,1-1-1V3a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V21A1,1,0,0,1,14,22ZM13,4H11V20h2Z' fill='%233ca0b9'/%3E%3Cpath id='Pfad_926' data-name='Pfad 926' d='M7,22H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2H7A1,1,0,0,1,8,3V21A1,1,0,0,1,7,22ZM6,4H4V20H6Z' fill='%233ca0b9'/%3E%3C/g%3E%3Crect id='Rechteck_1305' data-name='Rechteck 1305' width='24' height='24' transform='translate(438 55)' fill='none'/%3E%3C/g%3E%3C/svg%3E" id="icon-open-dialog"></avl-icon-button>
        </template>
    </div>
    <template is="dom-if" if="[[opened]]">
        <div class="dialog" style="bottom: [[dialogBottom]]">
            <div class="title">
                <h2 class="titleText">
                    [[columnsLabel]]
                </h2>
                <div class="headerChipsContainer">
                    <avl-chip-list single-select id="selectedIndexChip" items="{{selectItems}}" selected-index={{selected}} on-selected-index-changed="selectedValueChanged"></avl-chip-list>
                </div>
            </div>
            <div class="columnDefinitions" style="height: [[columnHeight]]">
                <template restamp is="dom-if" if="[[isLists]]">
                    <avl-list class="avl-list-datatable" multi-select id="multiSelection" selected-indexes="{{selectedIndexes}}" rows="{{columnItems}}" on-row-reordered="rowReordered" drag-and-drop style="height: [[columnHeight]]"></avl-list>
                </template>
            </div>
            <template is="dom-if" if="[[isDialogFooter]]">
                <div class="buttonContainer">
                    <avl-button class="cancel-button" id="btn-reset-dialog" on-click="resetToDefault">[[resetButtonLabel]]</avl-button>
                </div>
            </template>
        </div>
    </template>
</div>
`;

//# sourceMappingURL=avl-column-selector-dialog.html.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.js ***!
  \**************************************************************************************************************************/
/*! exports provided: chipsOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chipsOptions", function() { return chipsOptions; });
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_column_selector_dialog_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avl-column-selector-dialog.html */ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.html.js");


var chipsOptions;
(function (chipsOptions) {
    chipsOptions[chipsOptions["Selected"] = 0] = "Selected";
    chipsOptions[chipsOptions["All"] = 1] = "All";
})(chipsOptions || (chipsOptions = {}));
class AvlColumnSelectorDialogImpl extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
    constructor() {
        super(...arguments);
        this.opened = false;
        this.columnItems = [];
        this.allColumns = true;
        this.selectItems = [
            {
                label: 'Selected',
                value: 0
            },
            {
                label: 'All',
                value: 1
            }
        ];
        this.selected = 1;
        this.reordered = false;
        this.firstOpen = false;
        this.isDialogFooter = false;
        this.leafColumnsFlag = false;
        this.columnHeight = '329px';
        this.dialogBottom = '-444px';
        this.isLists = true;
        this.isSelectClick = false;
        this.isAllSelectClick = false;
        this.openDialog = false;
    }
    static get is() { return 'avl-column-selector-dialog'; }
    static get properties() {
        return {
            leafColumns: {
                type: Array,
                observer: 'leafColumnsObserverChanged'
            },
            columns: {
                type: Array
            },
            selectItems: {
                type: Array
            },
            columnItems: {
                type: Array
            },
            selectedIndexes: {
                type: Array,
                observer: 'selectedIndexesChanged',
                notify: true,
                value: []
            },
            focused: {
                type: Boolean,
                reflectToAttribute: true
            },
            label: {
                type: String
            },
            selected: {
                type: Number
            },
            desktop: {
                type: Boolean,
                value: false,
                reflectToAttribute: true
            },
            columnsLabel: {
                type: String
            },
            applyButtonLabel: {
                type: String
            },
            resetButtonLabel: {
                type: String
            },
            dialogFooter: {
                type: String,
                observer: 'dialogFooterChanged',
            }
        };
    }
    static get template() {
        return _avl_column_selector_dialog_html__WEBPACK_IMPORTED_MODULE_1__["template"];
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('click', (e) => {
            // e.preventDefault();
            if ((this.shadowRoot.activeElement && this.shadowRoot.activeElement.id !== 'icon-open-dialog'
                && this.shadowRoot.activeElement.id !== 'selectedIndexChip'
                && this.shadowRoot.activeElement.id !== 'multiSelection'
                && this.shadowRoot.activeElement.id !== 'avl-column-selector-dialog'
                && this.shadowRoot.activeElement.id !== 'btn-reset-dialog'
                && this.shadowRoot.activeElement.id !== 'btn-open-dialog')
                || !this.shadowRoot.activeElement) {
                this.focused = false;
                this.opened = false;
                this.firstOpen = false;
            }
        });
    }
    disconnectedCallback() {
        super['disconnectedCallback']();
    }
    leafColumnsObserverChanged() {
        var interval = setInterval(() => {
            if (this.leafColumns.length > 0) {
                clearInterval(interval);
                if (this.leafColumns.find(i => i.hidden == true)) {
                    this.allColumns = false;
                }
            }
        }, 100);
    }
    leafColumnsChanged() {
        if (this.leafColumns.length > 0 && !this.leafColumnsFlag) {
            this.defaultLeafColumns = [];
            this.leafColumns.forEach(item => {
                this.defaultLeafColumns.push(JSON.parse(JSON.stringify(item)));
            });
            this.leafColumnsFlag = true;
        }
        // this.dispatchEvent(new CustomEvent('selected-columns-changed'));
        // this.opened = false;
    }
    resetToDefault() {
        const resetPromise = new Promise((resolve, reject) => {
            this.isLists = false;
            this.reordered = true;
            let columns = this.defaultLeafColumns.map(item => {
                return {
                    label: item.caption,
                    id: item.valueField,
                    icon: item.headerIcon,
                    image: item.headerImage,
                    disabled: item.disabled ? item.disabled : false
                };
            });
            if (JSON.stringify(this.columnItems) != JSON.stringify(columns)) {
                this.columnItems = columns;
            }
            this.leafColumns = [];
            this.defaultLeafColumns.forEach(item => {
                this.leafColumns.push(JSON.parse(JSON.stringify(item)));
            });
            this.dispatchEvent(new CustomEvent('selected-columns-changed', {
                detail: this.leafColumns
            }));
            if (this.defaultLeafColumns.length !== this.selectedIndexes.length) {
                var indexes = [];
                this.defaultLeafColumns.forEach((item, index) => {
                    if (!item.hidden) {
                        indexes.push(index);
                    }
                });
                this.selectedIndexes = indexes;
            }
            resolve('true');
        });
        resetPromise.then(res => {
            this.isLists = true;
            this.reordered = false;
            this.allColumns = true;
            this.selected = chipsOptions.All;
        });
    }
    focusedIn(event) {
        this.focused = true;
    }
    toggleOpen(e) {
        console.log('Toogle Open: ' + this.opened);
        const togglePromise = new Promise((resolve, reject) => {
            if (e.y >= 450 && ((e.screenY - e.y) < 450)) {
                this.dialogBottom = '56px';
            }
            else {
                this.dialogBottom = '-444px';
            }
            this.leafColumnsChanged();
            this.focused = true;
            this.opened = !this.opened;
            this.firstOpen = true;
            if (this.opened && this.leafColumns) {
                this.selected = chipsOptions.Selected;
                this.selectedIndexes = [];
                this.columnItems = [];
                this.leafColumns.forEach((item, index) => {
                    if (!item.hidden) {
                        this.columnItems.push({
                            label: item.caption,
                            id: item.valueField,
                            icon: item.headerIcon,
                            image: item.headerImage,
                            disabled: item.disabled ? item.disabled : false,
                            hidden: item.hidden ? item.hidden : false
                        });
                    }
                });
                this.columnItems.forEach((item, index) => {
                    if (!item.hidden) {
                        this.selectedIndexes.push(index);
                    }
                });
                this.isLists = false;
                resolve('true');
            }
        });
        togglePromise.then(res => {
            setTimeout(() => {
                this.isLists = true;
                this.firstOpen = false;
            }, 0);
        });
    }
    selectedIndexesChanged() {
        if (this.selectedIndexes.length == 0 && !this.reordered && !this.firstOpen && !this.isSelectClick) {
            this.leafColumns.map(item => {
                item.hidden = true;
            });
            this.dispatchEvent(new CustomEvent('selected-columns-changed', {
                detail: this.leafColumns
            }));
        }
        else {
            this.isSelectClick = false;
        }
        if (this.selectedIndexes.length > 0 && !this.reordered && !this.firstOpen) {
            this.leafColumns.map(item => {
                item.hidden = true;
            });
            for (var i = 0; i < this.selectedIndexes.length; i++) {
                let index = this.leafColumns.findIndex(item => item.valueField == this.columnItems[this.selectedIndexes[i]].id);
                this.leafColumns[index].hidden = false;
            }
            if (this.leafColumns.length !== this.selectedIndexes.length) {
                this.allColumns = false;
            }
            else {
                this.allColumns = true;
            }
            if (!this.isAllSelectClick) {
                this.isAllSelectClick = false;
                this.dispatchEvent(new CustomEvent('selected-columns-changed', {
                    detail: this.leafColumns
                }));
            }
            else {
                this.isAllSelectClick = false;
            }
        }
        else {
            this.reordered = false;
            this.isAllSelectClick = false;
            if (this.selectedIndexes.length > 0) {
                this.firstOpen = false;
            }
        }
    }
    rowReordered() {
        this.reordered = true;
        let reorderedArray = [];
        this.columnItems.forEach(item => {
            reorderedArray.push(this.leafColumns.find(c => c.valueField === item.id));
        });
        // this.leafColumns = reorderedArray;
        this.dispatchEvent(new CustomEvent('selected-columns-changed', {
            detail: reorderedArray
        }));
    }
    selectedValueChanged(e) {
        const selectedValuePromise = new Promise((resolve, reject) => {
            this.isSelectClick = true;
            this.firstOpen = false;
            this.reordered = false;
            switch (e.detail.value) {
                case chipsOptions.Selected: {
                    this.leafColumns.map(item => {
                        item.hidden = true;
                    });
                    for (var i = 0; i < this.selectedIndexes.length; i++) {
                        this.leafColumns[this.selectedIndexes[i]].hidden = false;
                    }
                    this.columnItems = [];
                    this.selectedIndexes = [];
                    this.leafColumns.forEach((item, index) => {
                        if (!item.hidden) {
                            this.columnItems.push({
                                label: item.caption,
                                id: item.valueField,
                                icon: item.headerIcon,
                                image: item.headerImage,
                                disabled: item.disabled ? item.disabled : false
                            });
                        }
                    });
                    this.columnItems.forEach((item, index) => {
                        this.selectedIndexes.push(index);
                    });
                    this.reordered = true;
                    this.isLists = false;
                    resolve('true');
                    break;
                }
                case chipsOptions.All: {
                    this.isAllSelectClick = true;
                    this.selectedIndexes = [];
                    this.columnItems = [];
                    this.defaultLeafColumns.forEach(item => {
                        if (!this.leafColumns.find(i => i.valueField === item.valueField)) {
                            item.hidden = true;
                            this.leafColumns.push(JSON.parse(JSON.stringify(item)));
                        }
                    });
                    this.leafColumns.forEach((item, index) => {
                        this.columnItems.push({
                            label: item.caption,
                            id: item.valueField,
                            icon: item.headerIcon,
                            image: item.headerImage,
                            disabled: item.disabled ? item.disabled : false
                        });
                        if (!item.hidden) {
                            this.selectedIndexes.push(index);
                        }
                    });
                    this.isLists = false;
                    resolve('true');
                    break;
                }
                default: {
                    break;
                }
            }
        });
        selectedValuePromise.then(res => {
            setTimeout(() => {
                this.isLists = true;
                this.firstOpen = false;
                this.reordered = false;
            }, 0);
        });
    }
    dialogFooterChanged() {
        this.isDialogFooter = JSON.parse(this.dialogFooter);
        if (this.isDialogFooter) {
            this.columnHeight = '273px';
        }
    }
}
customElements.define(AvlColumnSelectorDialogImpl.is, AvlColumnSelectorDialogImpl);

//# sourceMappingURL=avl-column-selector-dialog.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.consts.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.consts.js ***!
  \*****************************************************************************************/
/*! exports provided: MAX_PAGES_PER_SECTION, MIN_PAGES_PER_SECTION, DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE_LABEL, DEFAULT_PAGE_SIZE_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_PAGES_PER_SECTION", function() { return MAX_PAGES_PER_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_PAGES_PER_SECTION", function() { return MIN_PAGES_PER_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PAGE_SIZE", function() { return DEFAULT_PAGE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PAGE_SIZE_LABEL", function() { return DEFAULT_PAGE_SIZE_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PAGE_SIZE_OPTIONS", function() { return DEFAULT_PAGE_SIZE_OPTIONS; });
const MAX_PAGES_PER_SECTION = 7;
const MIN_PAGES_PER_SECTION = 2;
// Default properties values
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_PAGE_SIZE_LABEL = 'Choose page size';
const DEFAULT_PAGE_SIZE_OPTIONS = [
    { value: 10, label: 'Show 10 per page' },
    { value: 50, label: 'Show 50 per page' },
    { value: Number.MAX_SAFE_INTEGER, label: 'Show all' }
];

//# sourceMappingURL=avl-datatable.consts.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.css.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.css.js ***!
  \**************************************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer */ "./node_modules/@polymer/polymer/polymer-element.js");

const style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"] `<style>
:host {
  --avl-datatable-row-background-color: var(--avl-background-color);
  --avl-datatable-header-icon-color: var(--avl-link-color);

  --avl-datatable-column-header-color: var(--avl-link-color);
  --avl-datatable-content-color: var(--avl-foreground-color);
  --avl-datatable-row-hover-color: var(--avl-background-hover-color);
  --avl-datatable-row-selection-color: var(--avl-background-selected-color);
  --avl-datatable-divider-color: var(--avl-divider-color);
  --avl-datatable-link-color: var(--avl-link-color);
  --avl-datatable-link-hover-color: var(--avl-link-hover-color);

  font-family: var(--avl-font-family);
  display: block;
  width: 100%;
  height:420px;
  font-size: 14px;
}

vaadin-grid {
  border: 0;
  background: var(--avl-datatable-row-background-color);
  width: 100%;
  height: 100%;
}

vaadin-grid vaadin-grid-cell-content {
  padding-right: 0px;
  margin-right: 24px;
}

:host .cell-content {
  font-size: 14px;
}

:host .header-content {
  user-select: text;
  -webkit-user-select: text;
}

.iconText{
  color: var(--avl-datatable-content-color);
}

.textColumn{
  color: var(--avl-datatable-content-color);
}
.dateColumn{
  color: var(--avl-datatable-content-color);
}
.numberColumn{
  color: var(--avl-datatable-content-color);
}

.header-image {
  height: auto;
  width: auto;
  max-height: 18px;
}

.header-icon {
  font-size: 14px;
  --avl-icon-custom-color:var(--avl-datatable-header-icon-color);
}

/* Pagination */
#pages {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  color: var(--avl-secondary-color, #3ca0b9);
}

#pages > button {
  color: var(--avl-secondary-color, #3ca0b9);
  user-select: none;
  padding: 2px 3px 2px;
  margin: 0 5px;
  border-radius: 10%;
  border: 0;
  background: transparent;
  font: inherit;
  outline: none;
  font-size: 16px;
  cursor: pointer;
}

#pages > button:not([disabled]):hover,
#pages > button:not([disabled]):focus {
  color: var(--avl-secondary-color, #3ca0b9);;
  background-color: #f3f3f3;
}

#pages > button[selected],
#pages > button[selected]:focus {
  font-weight: bold;
  color: var(--avl-menu-background-color, #FFFFFF);
  background-color: var(--avl-secondary-color, #3ca0b9);
}

#pages > button[disabled] {
  color: var(--avl-foreground-disabled-color);
  cursor: default;
}

/* Space for the pagination buttons */
#grid.with-pagination {
  height: calc(100% - 65px);
}

.elipsis {
  overflow: hidden;
  text-overflow: ellipsis;
}

avl-dropdown{
  margin-top: 3px;
}

avl-overflow-menu {
  display: inline;
}

/* Global filter */
.globalFilter {
  margin-bottom: 10px;
  width: auto;
  flex-grow: 1;
}

#grid.with-global-filter, #grid.with-column-selector {
  height: calc(100% - 72px);
}

#grid.with-pagination.with-global-filter, #grid.with-pagination.with-column-selector {
  height: calc(100% - 170px);
}

/* Global filter and column selector */
:host([global-filter]) .top-flex-container, :host([column-selector]) .top-flex-container {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

avl-column-selector-dialog {
  flex-grow: 0;
}

avl-icon{
  width: 18px;
  height: 18px;
}
.iconText{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
}

.iconText avl-icon{
  padding-right: 16px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
.iconText p{
  font-size: 14px;
}

.numberColumn{
  text-align: right;
}

.textColumn{
  text-align: left;
}

avl-checkbox {
  margin-right: 0px;
}

.header-icon-content,
.flex-center{
  display: flex;
  justify-content: center;
}

a {
  color: var(--avl-datatable-link-color);
  text-decoration: none;
}

a:hover:not(:active) {
  color: var(--avl-datatable-link-hover-color);
}

.table-checkbox {
  margin: 0;
  padding: 0;
  text-align: center;
}

.table-header-checkbox {
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>`;

//# sourceMappingURL=avl-datatable.css.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.html.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.html.js ***!
  \***************************************************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony import */ var _vaadin_vaadin_grid_src_all_imports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-grid/src/all-imports */ "./node_modules/@vaadin/vaadin-grid/src/all-imports.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_controls_core_dist_all_initial_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @avl-controls/core/dist/all-initial.css */ "./node_modules/@avl-controls/core/dist/all-initial.css.js");
/* harmony import */ var _avl_controls_core_dist_avl_checkbox_avl_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @avl-controls/core/dist/avl-checkbox/avl-checkbox */ "./node_modules/@avl-controls/core/dist/avl-checkbox/avl-checkbox.js");
/* harmony import */ var _avl_controls_core_dist_avl_textfield_avl_textfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @avl-controls/core/dist/avl-textfield/avl-textfield */ "./node_modules/@avl-controls/core/dist/avl-textfield/avl-textfield.js");
/* harmony import */ var _avl_controls_core_dist_avl_button_avl_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @avl-controls/core/dist/avl-button/avl-button */ "./node_modules/@avl-controls/core/dist/avl-button/avl-button.js");
/* harmony import */ var _avl_controls_core_dist_avl_icon_button_avl_icon_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @avl-controls/core/dist/avl-icon-button/avl-icon-button */ "./node_modules/@avl-controls/core/dist/avl-icon-button/avl-icon-button.js");
/* harmony import */ var _avl_controls_core_dist_avl_dropdown_avl_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @avl-controls/core/dist/avl-dropdown/avl-dropdown */ "./node_modules/@avl-controls/core/dist/avl-dropdown/avl-dropdown.js");
/* harmony import */ var _avl_controls_core_dist_avl_overflow_menu_avl_overflow_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu */ "./node_modules/@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu.js");
/* harmony import */ var _avl_column_selector_dialog_avl_column_selector_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./avl-column-selector-dialog/avl-column-selector-dialog */ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.js");
/* harmony import */ var _themes_vaadin_grid_material_theme_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./themes/vaadin-grid-material-theme.css */ "./node_modules/@avl-controls/datatable/dist/avl-datatable/themes/vaadin-grid-material-theme.css.js");
/* harmony import */ var _themes_vaadin_grid_sorter_material_theme_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./themes/vaadin-grid-sorter-material-theme.css */ "./node_modules/@avl-controls/datatable/dist/avl-datatable/themes/vaadin-grid-sorter-material-theme.css.js");
/* harmony import */ var _avl_datatable_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./avl-datatable.css */ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.css.js");













let template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
  ${_avl_controls_core_dist_all_initial_css__WEBPACK_IMPORTED_MODULE_2__["allInitial"]} ${_avl_datatable_css__WEBPACK_IMPORTED_MODULE_12__["style"]}

  <avl-overflow-menu id="overflowMenu"></avl-overflow-menu>

  <div class="top-flex-container">
    <template is="dom-if" if="[[globalFilter]]">
      <avl-textfield
        class="globalFilter"
        value="{{globalFilterValue}}"
        label="[[globalFilterLabel]]"
        placeholder="[[globalFilterLabel]]"
        compact-mode
      ></avl-textfield>
    </template>

    <template is="dom-if" if="[[columnSelector]]">
      <avl-column-selector-dialog
        columns-label="[[columnSelectorLabel]]"
        apply-button-label="[[applyButtonLabel]]"
        reset-button-label="[[resetButtonLabel]]"
        leaf-columns="[[leafColumns]]"
        on-selected-columns-changed="selectedColumnsChanged"
        dialog-footer="{{dialogFooter}}"
      ></avl-column-selector-dialog>
    </template>
  </div>

  <vaadin-grid id="grid" selected-items="{{selectedItems}}" class$="{{getGridClass(pagination, globalFilter)}}">
    <template is="dom-if" if="[[multiSelect]]">
      <vaadin-grid-selection-column
        header-renderer="[[selectionHeaderRenderer]]"
        renderer="[[selectionColumnRenderer]]"
      ></vaadin-grid-selection-column>
    </template>
  </vaadin-grid>

  <template is="dom-if" if="[[pagination]]">
    <template is="dom-if" if="[[totalNumOfRows]]" restamp>
      <div id="pages">
        <avl-dropdown
          label="[[pageSizeLabel]]"
          selected-index="{{pageSizeIndex}}"
          no-label-float
          compact-mode
          items="[[pageSizeOptions]]"
        ></avl-dropdown>

        <button on-click="_prev" disabled="{{isLeftButtonDisabled(selectedPage)}}" id="prevButton">&lt;</button>

        <template is="dom-if" if="[[pages.left]]">
          <template is="dom-repeat" items="[[pages.left]]">
            <button on-click="_select" class="pageButton" selected$="[[_isSelected(selectedPage, item)]]">
              [[item]]
            </button>
          </template>
        </template>

        <template is="dom-if" if="[[pages.middle]]">
          <div class="threeDots">...</div>
          <template is="dom-repeat" items="[[pages.middle]]">
            <button on-click="_select" class="pageButton" selected$="[[_isSelected(selectedPage, item)]]">
              [[item]]
            </button>
          </template>
        </template>

        <template is="dom-if" if="[[pages.right]]">
          <div class="threeDots">...</div>
          <template is="dom-repeat" items="[[pages.right]]">
            <button on-click="_select" class="pageButton" selected$="[[_isSelected(selectedPage, item)]]">
              [[item]]
            </button>
          </template>
        </template>

        <button on-click="_next" disabled="{{isRightButtonDisabled(selectedPage, pageSize)}}" id="nextButton">
          &gt;
        </button>
      </div>
    </template>
  </template>
`;

//# sourceMappingURL=avl-datatable.html.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _avl_controls_core_dist_avl_localization_service_avl_localization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @avl-controls/core/dist/avl-localization-service/avl-localization-service */ "./node_modules/@avl-controls/core/dist/avl-localization-service/avl-localization-service.js");
/* harmony import */ var _avl_controls_core_dist_avl_localization_service_avl_localization_service__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_avl_controls_core_dist_avl_localization_service_avl_localization_service__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _avl_controls_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @avl-controls/interfaces */ "./node_modules/@avl-controls/interfaces/index.js");
/* harmony import */ var _column_definitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./column-definitions */ "./node_modules/@avl-controls/datatable/dist/avl-datatable/column-definitions.js");
/* harmony import */ var _array_data_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array-data-provider */ "./node_modules/@avl-controls/datatable/dist/avl-datatable/array-data-provider.js");
/* harmony import */ var _avl_datatable_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./avl-datatable.html */ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.html.js");
/* harmony import */ var _avl_datatable_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avl-datatable.models */ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.models.js");
/* harmony import */ var _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./avl-datatable.consts */ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.consts.js");








class AvlDatatableImpl extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
    constructor() {
        super(...arguments);
        this.singleSelect = false;
        this.multiSelect = false;
        this.allowActiveRow = false;
        this.checkboxAllSelectClicked = false;
        this.pageSize = _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_PAGE_SIZE"];
        this.selectedPage = 0;
        this.globalFilter = false;
        this.globalFilterLabel = 'Filter...';
        this.treeColumn = false;
        this.pageSizeOptions = _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_PAGE_SIZE_OPTIONS"];
        this.pageSizeLabel = _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_PAGE_SIZE_LABEL"];
        this.dialogFooter = false;
        this.pageSizeIndex = 0;
        this.leafColumns = [];
        this.pages = {};
        this._data = undefined;
        this._lastFilters = new Map(); // only used for pagination
        this.dataProviderCalled = false; // if vaadin data provider has been called since init
        this.recreatingHeaders = false;
        this.isLazyLoading = true;
        this.checkboxClicked = false;
        this.row2formattedRow = new Map();
        this.idx2formattedRow = new Map();
        this.rowIndexPropertyName = '__index';
        this.rowPropertyName = '__row';
        this.columnSelectorLabel = 'Manage columns';
        this.resetButtonLabel = 'Reset to default';
        // used for calculating pages
        this.totalNumOfRows = 0;
        // TODO: there are actually 2 arrays -> raw/real and formatted, formatted is passed to vaadin and used for
        // selecting and deselecting but when returning data to user (upon selection) we want to return
        // to user the raw/real data -> this wouldn't have to be so if directly used raw rows with vaadin row templates
        this.__rowsCache = []; // caching remote data which is transformed to formatted data
        this.__formattedRowsCache = []; // this is passed to vaadin grid and it is used for de/selecting rows
        this.selectedIndex = undefined;
        this.selectedValue = undefined;
        this.selectedIndexes = [];
        this.selectedValues = [];
        this.lastActiveItem = undefined;
        this.range = (start, end) => {
            return [...Array(end - start).keys()].map((x) => x + start + 1);
        };
        this.formatColumn = (column) => {
            if (!Object(_column_definitions__WEBPACK_IMPORTED_MODULE_3__["isLeafColumn"])(column)) {
                return;
            }
            // default properties
            column.sortable = !!column.sortable;
            column.flexWidth = column.flexWidth || 0;
            // default formatter based on type and only for certain types
            switch (column.type) {
                case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Number:
                    column.formatter =
                        column.formatter || ((value) => AvlLocalizationService.formatNumber(value, column.numberOptions));
                    break;
                case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Date:
                    column.formatter =
                        column.formatter || ((value) => AvlLocalizationService.formatDateTime(value, column.dateTimeOptions));
                    break;
                default:
            }
        };
        this.selectionColumnRenderer = (cell, _, rowData) => {
            let checkbox = cell.firstElementChild;
            if (!checkbox) {
                checkbox = document.createElement('avl-checkbox');
                checkbox.addEventListener('click', (e) => {
                    e.stopPropagation();
                    checkbox = e.target;
                    if (checkbox.checked) {
                        this.grid.selectedItems.push(checkbox.__item);
                        this.selectedValues = this.grid.selectedItems.map((formattedRow) => formattedRow[this.rowPropertyName]);
                        this.selectedIndexes = this.selectedValues.map((value) => {
                            return this.row2formattedRow.get(value)[this.rowIndexPropertyName];
                        });
                    }
                    else {
                        const index = this.grid.selectedItems.indexOf(checkbox.__item);
                        if (index !== -1) {
                            this.grid.selectedItems.splice(index, 1);
                        }
                        this.checkboxClicked = false;
                        this.selectedValues = this.grid.selectedItems.map((formattedRow) => formattedRow[this.rowPropertyName]);
                        this.selectedIndexes = this.selectedValues.map((value) => {
                            return this.row2formattedRow.get(value)[this.rowIndexPropertyName];
                        });
                        this.checkboxAllSelectClicked = false;
                    }
                    if (!this.isLazyLoading && this.grid.selectedItems.length === this.data.length) {
                        this.checkboxClicked = true;
                    }
                    if (!this.isLazyLoading && !this.treeColumn) {
                        this.headerCheckboxState();
                    }
                });
                cell.className = 'table-checkbox';
                cell.appendChild(checkbox);
            }
            const items = [].slice.call(this.grid.shadowRoot.querySelector('#items').children);
            let i = 0;
            if (i < items.length) {
                i++;
            }
            else {
                this.checkboxAllSelectClicked = false;
            }
            checkbox.__item = rowData.item;
            checkbox.checked = rowData.selected;
        };
        // sets class on cell <vaadin-grid-cell-content>,
        // creates checkbox and adds it inside it in cell content
        this.selectionHeaderRenderer = (cell, _, refresh = false) => {
            if (!cell) {
                return;
            }
            const className = 'table-header-checkbox';
            if (cell.className === className && !refresh) {
                return;
            }
            cell.className = className;
            cell.id = className;
            const checkbox = this.createCheckBox();
            this.doLoadGridTask().then(() => {
                if (this.isLazyLoading || this.singleSelect || this.treeColumn) {
                    return;
                }
                if (cell.hasChildNodes()) {
                    cell.removeChild(cell.firstChild);
                }
                cell.append(checkbox);
            });
        };
        this.getColumnNameFromEvent = (event) => {
            const header = event.detail.resizedColumn.firstElementChild;
            return this.getLabel(header.content);
        };
        this.getLabel = (headerContent) => {
            const label = headerContent.getAttribute ? headerContent.getAttribute('aria-label') : null;
            if (label) {
                return label;
            }
            else if (headerContent.firstElementChild && !(headerContent.firstElementChild instanceof HTMLImageElement)) {
                return this.getLabel(headerContent.firstElementChild);
            }
            else {
                return headerContent.innerHTML;
            }
        };
        this.getColumnNameFromTargetElement = (target) => {
            const firstChild = target.firstElementChild;
            const vaadinGridfilter = firstChild.getElementsByTagName('vaadin-grid-filter')[0];
            const label = vaadinGridfilter ? vaadinGridfilter.firstElementChild['label'] : firstChild.firstElementChild.innerHTML;
            return label;
        };
        this.subscribeToSortDirectionChanged = () => {
            if (!this.eventSubscription) {
                const gridSorterList = this.grid.querySelectorAll('vaadin-grid-sorter');
                const gridSorterLength = gridSorterList.length;
                gridSorterList.forEach((sorter, key) => {
                    sorter.addEventListener('direction-changed', (event) => {
                        const detail = {
                            columnName: this.getColumnNameFromTargetElement(event.target),
                            sortDirection: event.detail.value
                        };
                        if (event.detail.value) {
                            // dispatches two events if another column have been sorted previously - for previously sorted column and sorted column
                            this.dispatchEvent(new CustomEvent('column-sort-direction-changed', { detail: detail }));
                        }
                    });
                    if (key === gridSorterLength - 1) {
                        this.eventSubscription = true;
                    }
                });
            }
        };
    }
    static get is() {
        return 'avl-datatable';
    }
    static get template() {
        return _avl_datatable_html__WEBPACK_IMPORTED_MODULE_5__["template"];
    }
    static get properties() {
        return {
            columnDefinitions: {
                type: Array,
                observer: 'columnDefinitionsChanged',
            },
            dataProvider: {
                type: Function,
                observer: 'dataProviderChanged',
            },
            pagination: {
                type: Boolean,
            },
            dialogFooter: {
                type: Boolean,
            },
            pageSize: {
                type: Number,
                notify: true,
                observer: 'pageSizeChanged',
            },
            pageSizeIndex: {
                type: Number,
                observer: 'pageSizeIndexChanged',
            },
            selectedPage: {
                type: Number,
                notify: true,
                observer: 'selectedPageChanged',
            },
            singleSelect: {
                type: Boolean,
                observer: 'singleSelectChanged',
                reflectToAttribute: true,
                value: false,
            },
            multiSelect: {
                type: Boolean,
                observer: 'multiSelectChanged',
                reflectToAttribute: true,
                value: false,
            },
            allowActiveRow: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            activeRow: {
                type: Object,
                notify: true,
            },
            selectedIndex: {
                type: Number,
                observer: 'selectedIndexChanged',
                notify: true,
                value: undefined,
            },
            selectedValue: {
                type: String,
                observer: 'selectedValueChanged',
                notify: true,
                value: undefined,
            },
            selectedIndexes: {
                type: Array,
                observer: 'selectedIndexesChanged',
                notify: true,
                value: [],
            },
            selectedValues: {
                type: Array,
                observer: 'selectedValuesChanged',
                notify: true,
                value: [],
            },
            globalFilter: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            globalFilterValue: {
                type: String,
                observer: 'globalFilterValueChanged',
            },
            globalFilterLabel: {
                type: String,
            },
            treeColumn: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'treeColumnChanged',
            },
            columnSelector: {
                type: Boolean,
                reflectToAttribute: true,
            },
            pageSizeLabel: String,
        };
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this.__formattedRowsCache = [];
        this._data = data;
        this.dataProvider = Object(_array_data_provider__WEBPACK_IMPORTED_MODULE_4__["default"])(this._data);
        const cell = this.shadowRoot.querySelector('#table-header-checkbox');
        this.selectionHeaderRenderer(cell, null, true);
        if (this.isLazyLoading) {
            this.isLazyLoading = false;
        }
    }
    get grid() {
        if (!this._grid) {
            this._grid = this.shadowRoot.querySelector('#grid');
        }
        return this._grid;
    }
    setVaadinGridSize(pageSize) {
        this.grid.setAttribute('size', String(pageSize));
    }
    setTotalRows(numOfRows) {
        if (this.totalNumOfRows === numOfRows) {
            return;
        }
        this.totalNumOfRows = numOfRows;
        this.setVaadinGridSize(this.totalNumOfRows);
        this.pageSizeChanged();
    }
    selectedColumnsChanged(e) {
        this.columnDefinitions = e.detail || this.columnDefinitions.slice();
        const cell = this.shadowRoot.querySelector('#table-header-checkbox');
        this.selectionHeaderRenderer(cell, null, true);
    }
    clearCache() {
        this.grid.clearCache();
    }
    areSortOrdersEqual(prevOrders, newOrders) {
        if (prevOrders.length !== newOrders.length) {
            return false;
        }
        return JSON.stringify(prevOrders) === JSON.stringify(newOrders);
    }
    areFiltersEqual(prevFilters, newFilters) {
        if (prevFilters.size !== newFilters.size) {
            return false;
        }
        for (const [key, value] of prevFilters) {
            if (newFilters.get(key) !== value) {
                return false;
            }
        }
        return true;
    }
    getFieldsForGlobalFilter() {
        const globalFilterableTypes = [_column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Text, _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Button, _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Link, _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].IconText];
        const globalFilterPaths = [];
        if (this.columnDefinitions) {
            this.traverseColumnsAndPerformAction((column) => {
                if (!Object(_column_definitions__WEBPACK_IMPORTED_MODULE_3__["isLeafColumn"])(column) || column.hidden || !globalFilterableTypes.includes(column.type)) {
                    return;
                }
                let path;
                switch (column.type) {
                    case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Link:
                        break;
                    case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].IconText:
                        path = column.valueField + '.text';
                        break;
                    default:
                        path = column.valueField;
                        break;
                }
                globalFilterPaths.push(path);
            });
        }
        return globalFilterPaths;
    }
    updateExpandedItems(grid, rows) {
        rows.filter((row) => row.descendantsMatchFilter).forEach((row) => grid.push('expandedItems', row));
    }
    collapseEverything() {
        this.grid.expandedItems = [];
    }
    calculateSortOrders(orders) {
        return orders.map((order) => new _avl_datatable_models__WEBPACK_IMPORTED_MODULE_6__["OrderImpl"](order.path, order.direction === 'asc'));
    }
    calculateFilters(filters) {
        const calculatedFilters = new Map();
        for (const filter of filters) {
            if (filter && filter.value !== '') {
                calculatedFilters.set(filter.path, filter.value);
            }
        }
        if (this.globalFilter && this.globalFilterValue) {
            calculatedFilters.set(_avl_controls_interfaces__WEBPACK_IMPORTED_MODULE_2__["globalFilterKey"], this.globalFilterValue);
        }
        return calculatedFilters;
    }
    formatRows(data, page, pageSize) {
        const formattedRows = data.rows.map((row, idx) => {
            const formattedRow = this.formatRow(row);
            formattedRow[this.rowIndexPropertyName] = page * pageSize + idx;
            formattedRow[this.rowPropertyName] = row;
            return formattedRow;
        });
        return formattedRows;
    }
    dataProviderChanged() {
        if (!this.grid) {
            return;
        }
        this.grid.dataProvider = (params, callback) => {
            if (this.recreatingHeaders) {
                callback([], 0);
                return;
            }
            // construct TableDataRequestParamsImpl from params
            const sortOrders = this.calculateSortOrders(params.sortOrders);
            const filters = this.calculateFilters(params.filters);
            const tableDataRequestParams = {
                page: params.page,
                pageSize: Math.min(params.pageSize, this.pageSize),
                filters,
                globalFilterFields: this.getFieldsForGlobalFilter(),
                sortOrders,
                parentItem: params.parentItem ? params.parentItem[this.rowPropertyName] : params.parentItem,
            };
            this.dataProvider(tableDataRequestParams).then((providerData) => {
                const formattedRows = this.formatRows(providerData, params.page, params.pageSize);
                this.cacheRowsForLookup(providerData, params.page, params.pageSize, formattedRows);
                if (tableDataRequestParams.parentItem) {
                    callback(formattedRows, providerData.totalRows);
                }
                else {
                    callback(formattedRows);
                    this.setTotalRows(providerData.totalRows);
                }
                this.updateExpandedItems(this.grid, formattedRows);
                this.dataProviderCalled = true;
                this.deselectEverything();
                this.subscribeToSortDirectionChanged();
            });
        };
    }
    globalFilterValueChanged() {
        if (this.dataProviderCalled) {
            this.clearCache();
        }
        this.resetCheckboxes();
    }
    connectedCallback() {
        super.connectedCallback();
        if (AvlLocalizationService && AvlLocalizationService.translationService) {
            this.translateLabels();
        }
        const ofMenu = this.$.overflowMenu;
        this.grid.addEventListener('active-item-changed', (e) => this.activeItemChanged(e.detail.value));
        this.grid.addEventListener('click', (e) => {
            const constructEventDetail = (t) => ({
                row: t['item'][this.rowPropertyName],
                valueField: t.getAttribute('value-field'),
            });
            const target = e.target;
            if (target.tagName.toLocaleLowerCase() === 'avl-button' ||
                target.tagName.toLocaleLowerCase() === 'avl-icon-button') {
                if (target.hasAttribute('overflow-menu')) {
                    if (ofMenu.trigger !== e.target) {
                        this.handleOverflowMenuClick(e);
                    }
                }
                else {
                    const detail = constructEventDetail(target);
                    this.dispatchEvent(new CustomEvent('button-click', {
                        detail: detail,
                    }));
                }
            }
            else if (target.tagName.toLowerCase() === 'a') {
                if (target.hasAttribute('do-not-follow-links')) {
                    e.preventDefault();
                }
                const detail = constructEventDetail(target);
                this.dispatchEvent(new CustomEvent('link-click', {
                    detail: detail,
                }));
            }
        });
        this.grid.addEventListener('column-resize', (event) => {
            const detail = {
                columnName: this.getColumnNameFromEvent(event),
                columnSize: event.detail.resizedColumn.width
            };
            this.dispatchEvent(new CustomEvent('column-size-changed', { detail: detail }));
        });
    }
    async translateLabels() {
        if (!AvlLocalizationService || !AvlLocalizationService.translationService) {
            return;
        }
        const translationService = AvlLocalizationService.translationService;
        this.columnSelectorLabel = await translationService.translate('VizBox.AvlDatatable.Columns');
        this.resetButtonLabel = await translationService.translate('VizBox.AvlDatatable.Reset');
    }
    handleOverflowMenuClick(e) {
        const ofMenu = this.$.overflowMenu;
        const target = e.target;
        if (ofMenu.trigger !== target) {
            ofMenu.removeEventListener('item-clicked', this.overflowMenuItemClickedListener);
            this.overflowMenuItemClickedListener = (event) => {
                const detail = {
                    row: target['item'][this.rowPropertyName],
                    valueField: target.getAttribute('value-field'),
                    item: event.detail.value,
                };
                this.dispatchEvent(new CustomEvent('overflow-menu-item-click', {
                    detail: detail,
                }));
            };
            const cellId = parseInt(target.parentElement.getAttribute('column-index'), 10);
            const menuItems = this.leafColumns[cellId].menuItems;
            ofMenu.items = menuItems;
            ofMenu.trigger = e.target;
            setTimeout(() => {
                ofMenu.open = true;
            });
            ofMenu.addEventListener('item-clicked', this.overflowMenuItemClickedListener);
        }
    }
    traverseColumnsAndPerformAction(action) {
        // copy list
        const stack = this.columnDefinitions.slice();
        // do DFS starting from left-most column
        while (stack.length) {
            const column = stack.shift();
            // add children to stack
            if (Object(_column_definitions__WEBPACK_IMPORTED_MODULE_3__["isGroupColumn"])(column) && column.childColumns) {
                stack.unshift(...column.childColumns.slice());
            }
            action(column);
        }
    }
    formatRow(row, index) {
        // copy row
        const formattedRow = JSON.parse(JSON.stringify(row));
        for (const leafCol of this.leafColumns) {
            // format for certain data types
            if (leafCol.type === _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Number || leafCol.type === _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Date) {
                const object = Object(_array_data_provider__WEBPACK_IMPORTED_MODULE_4__["getValueFromPath"])(formattedRow, leafCol.valueField);
                if (object !== undefined && object !== null) {
                    const parentObject = Object(_array_data_provider__WEBPACK_IMPORTED_MODULE_4__["getParentObjectFromPath"])(formattedRow, leafCol.valueField);
                    const propertyName = leafCol.valueField.split('.')[leafCol.valueField.split('.').length - 1];
                    if (leafCol.type === _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Date) {
                        parentObject[propertyName] = new Date(parentObject[propertyName]);
                    }
                    parentObject[propertyName] = leafCol.formatter(parentObject[propertyName]);
                }
            }
        }
        return formattedRow;
    }
    setPages() {
        if (!this.totalNumOfRows || !this.pageSize) {
            return;
        }
        const pages = {};
        const totalPages = Math.ceil(this.totalNumOfRows / this.pageSize);
        if (totalPages <= _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MAX_PAGES_PER_SECTION"] + _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MIN_PAGES_PER_SECTION"]) {
            // one section - too few pages to split them into multiple sections
            pages.left = this.range(0, totalPages);
        }
        else if (this.selectedPage < _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MAX_PAGES_PER_SECTION"] - 1) {
            // split pages into two sections with first one containing selected page
            pages.left = this.range(0, _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MAX_PAGES_PER_SECTION"]);
            pages.middle = this.range(totalPages - _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MIN_PAGES_PER_SECTION"], totalPages);
        }
        else {
            // left section has minimum number of pages
            pages.left = this.range(0, _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MIN_PAGES_PER_SECTION"]);
            if (this.selectedPage > totalPages - _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MAX_PAGES_PER_SECTION"]) {
                // middle section has maximum number of pages (tail part of the array) and contains selected page
                pages.middle = this.range(totalPages - _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MAX_PAGES_PER_SECTION"], totalPages);
            }
            else {
                // three sections with selected page in the middle one
                const startMiddle = this.selectedPage - Math.floor(_avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MAX_PAGES_PER_SECTION"] / 2);
                pages.middle = this.range(startMiddle, startMiddle + _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MAX_PAGES_PER_SECTION"]);
                pages.right = this.range(totalPages - _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MIN_PAGES_PER_SECTION"], totalPages);
            }
        }
        this.pages = pages;
    }
    pageSizeChanged() {
        if (!this.pagination) {
            this.pageSize = 50;
            return;
        }
        if (Number.isNaN(this.pageSize) || this.pageSize < 1) {
            return;
        }
        const truncatedNumber = Math.trunc(this.pageSize);
        if (this.pageSize !== truncatedNumber) {
            this.pageSize = truncatedNumber;
            return;
        }
        // Adjusts the page size options dropdown, if value exists
        this.pageSizeIndex = this.pageSizeOptions.findIndex((option) => option.value === this.pageSize);
        this.updateTable();
    }
    updateTable() {
        if (this.totalNumOfRows === 0) {
            this.pages = {};
            return;
        }
        this.selectedPage = 0;
        const gridSize = Math.min(this.pageSize, this.totalNumOfRows);
        this.setVaadinGridSize(gridSize);
        this.setPages();
    }
    pageSizeIndexChanged() {
        if (this.pageSizeIndex > -1) {
            this.pageSize = this.pageSizeOptions[this.pageSizeIndex].value;
        }
    }
    selectedPageChanged() {
        this.setPages();
        if (!this.grid || !this.dataProvider || !this.pagination) {
            return;
        }
        this.grid.dataProvider = (params, callback) => {
            // construct TableDataRequestParamsImpl from params
            const sortOrders = this.calculateSortOrders(params.sortOrders);
            const filters = this.calculateFilters(params.filters);
            /* if filters changed since the last time dataProvider has been called we need to set selected
            page to 0 because we don't know how many rows/pages there will be after fetching the data  */
            if (!this.areFiltersEqual(this._lastFilters, filters)) {
                this.selectedPage = 0;
            }
            this._lastFilters = filters;
            const tableDataRequestParams = {
                page: this.selectedPage,
                pageSize: Math.min(this.totalNumOfRows, this.pageSize),
                filters,
                globalFilterFields: this.getFieldsForGlobalFilter(),
                sortOrders,
                parentItem: params.parentItem ? params.parentItem[this.rowPropertyName] : params.parentItem,
            };
            this.dataProvider(tableDataRequestParams).then((providerData) => {
                // format rows
                const formattedRows = this.formatRows(providerData, params.page, params.pageSize);
                this.cacheRowsForLookup(providerData, params.page, params.pageSize, formattedRows);
                if (tableDataRequestParams.parentItem) {
                    callback(formattedRows, providerData.totalRows);
                }
                else {
                    callback(formattedRows);
                    this.setTotalRows(providerData.totalRows);
                    // If this is the last page, number of rows might be smaller than the page size.
                    if (this.selectedPage === Math.ceil(this.totalNumOfRows / this.pageSize) - 1) {
                        this.setVaadinGridSize(providerData.rows.length);
                    }
                    else {
                        // If the size was changed on the last page, set it back.
                        this.setVaadinGridSize(this.pageSize);
                    }
                }
                this.updateExpandedItems(this.grid, formattedRows);
            });
        };
    }
    isLeftButtonDisabled(page) {
        return page === 0;
    }
    isRightButtonDisabled(page, pageSize) {
        const totalPages = Math.ceil(this.totalNumOfRows / pageSize);
        return this.totalNumOfRows === 0 || page === totalPages - 1;
    }
    deselectEverything() {
        if (this.singleSelect) {
            this.selectedValue = undefined;
        }
        if (this.multiSelect && this.selectedValues.length > 0) {
            this.selectedValues = [];
            this.selectedIndexes = [];
        }
    }
    // Pagination
    _isSelected(page, item) {
        return page === item - 1;
    }
    _select(e) {
        // selection is not persistent when changing pages
        this.deselectEverything();
        this.collapseEverything();
        this.resetCheckboxes();
        this.selectedPage = e.model.item - 1;
    }
    _next() {
        // selection is not persistent when changing pages
        this.deselectEverything();
        this.collapseEverything();
        this.resetCheckboxes();
        const totalPages = Math.ceil(this.totalNumOfRows / this.pageSize);
        this.selectedPage = Math.min(totalPages - 1, this.selectedPage + 1);
    }
    _prev() {
        // selection is not persistent when changing pages
        this.deselectEverything();
        this.collapseEverything();
        this.resetCheckboxes();
        this.selectedPage = Math.max(0, this.selectedPage - 1);
    }
    columnDefinitionsChanged() {
        if (!this.columnDefinitions) {
            return;
        }
        const childColumnsExist = JSON.stringify(this.columnDefinitions).indexOf('childColumns') !== -1;
        if (childColumnsExist && this.columnSelector) {
            this.columnSelector = false;
            throw new Error('Column selector is not supported with grouped headers');
        }
        this.createHeaders();
    }
    treeColumnChanged() {
        if (!this.treeColumn || !this.columnDefinitions) {
            return;
        }
        this.createHeaders();
    }
    createHeaders() {
        const oldColumns = this.shadowRoot.querySelectorAll('vaadin-grid-column, vaadin-grid-column-group');
        if (oldColumns.length) {
            this.recreatingHeaders = true;
            // reset filter and sorter when changing headers because vaadin still remembers them even if elements are removed
            this.grid.querySelectorAll('.filter-textfield').forEach((el) => (el['value'] = ''));
            this.grid.querySelectorAll('vaadin-grid-sorter').forEach((el) => (el['direction'] = null));
            oldColumns.forEach((c) => c.parentElement.removeChild(c));
        }
        this.traverseColumnsAndPerformAction(this.formatColumn);
        this.leafColumns = [];
        this.columnDefinitions
            .map((col, id) => this.createGridHeaderHTML(col, String(id)))
            .filter((header) => header)
            .forEach((header) => this.grid.appendChild(header));
        if (this.recreatingHeaders) {
            this.recreatingHeaders = false;
            if (this.dataProviderCalled) {
                this.clearCache();
            }
        }
        this.leafColumns
            .filter((col) => col.filterable)
            .forEach((col) => setTimeout(() => this.filterLeafColumn(col), 0));
    }
    createGridHeaderHTML(col, testLabel) {
        if (Object(_column_definitions__WEBPACK_IMPORTED_MODULE_3__["isGroupColumn"])(col)) {
            return this.createGroupGridHeaderHTML(col, testLabel);
        }
        if (Object(_column_definitions__WEBPACK_IMPORTED_MODULE_3__["isLeafColumn"])(col)) {
            this.leafColumns.push(col);
            return this.getLeafColumnHTML(col, this.leafColumns.length - 1, testLabel);
        }
        throw new Error('Unknown type. Column definition for LeafColumn must have valueField property set' + col);
    }
    createGroupGridHeaderHTML(column, testLabel) {
        const columnGroupHeader = document.createElement('vaadin-grid-column-group');
        columnGroupHeader.resizable = true;
        const headerTemplate = document.createElement('template');
        headerTemplate.classList.add('header');
        headerTemplate.innerHTML = `<span class="header-content" test-label="${testLabel}">${column.caption}</span>`;
        columnGroupHeader.appendChild(headerTemplate);
        column.childColumns
            .map((col, id) => this.createGridHeaderHTML(col, testLabel + '>' + id))
            .filter((col) => col)
            .forEach((col) => columnGroupHeader.appendChild(col));
        return columnGroupHeader;
    }
    getLeafColumnTemplate(column) {
        const style = `${column.defaultStyle || ''}[[item.${column.valueField}Style]]`;
        switch (column.type) {
            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Text:
                return `<div style="${style}" class="textColumn" title="[[item.${column.valueField}]]">[[item.${column.valueField}]]</div>`;
            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Number:
                return `<div style="${style}" class="numberColumn" title="[[item.${column.valueField}]]">[[item.${column.valueField}]]</div>`;
            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Date:
                return `<div style="${style}" class="elipsis dateColumn" title="[[item.${column.valueField}]]">[[item.${column.valueField}]]</div>`;
            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Icon:
                return `<div class="flex-center" ><avl-icon style="${style}" icon="[[item.${column.valueField}]]"></avl-icon></div>`;
            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Image:
                return `<img style="${style}" src="[[item.${column.valueField}]]">`;
            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Checkbox:
                return `<avl-checkbox style="${style}" checked="[[item.${column.valueField}]]" disabled></avl-checkbox>`;
            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Button:
                return `<template is="dom-if" if="[[item.${column.valueField}]]"><avl-button style="${style}" item="{{item}}" value-field="${column.valueField}">[[item.${column.valueField}]]</avl-button></template>`;
            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].IconButton:
                return `<avl-icon-button style="${style}" item="{{item}}" value-field="${column.valueField}" icon="{{item.${column.valueField}}}"></avl-icon-button>`;
            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Link:
                return `<a style="${style}" href="[[item.${column.valueField}.href]]" target="[[item.${column.valueField}.target]]" item="{{item}}" value-field="${column.valueField}" ${column.doNotFollowLinks ? 'do-not-follow-links' : ''} >[[item.${column.valueField}.text]]</a>`;
            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].IconText:
                return `<div class="iconText"><avl-icon style="${style}" icon="[[item.${column.valueField}.icon]]"></avl-icon><p>[[item.${column.valueField}.text]]</p></div>`;
            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].OverflowMenu:
                return `<avl-icon-button item="{{item}}" overflow-menu icon="more-vert" value-field="${column.valueField}" style="${style}"></avl-icon-button>`;
            default:
                return '';
        }
    }
    getLeafColumnHTML(column, columnIndex, testLabel) {
        if (column.hidden) {
            return undefined;
        }
        let header;
        // Header icon or image
        let iconOrImageHtml = '';
        if (column.headerIcon) {
            iconOrImageHtml = `<avl-icon class="header-icon" icon="${column.headerIcon}"></avl-icon>`;
        }
        else if (column.headerImage) {
            iconOrImageHtml = `<img class="header-image" src="${column.headerImage}"></i>`;
        }
        if (column.filterable) {
            const variableName = '_' + column.valueField.replace('.', '_');
            header = `<vaadin-grid-filter aria-label="${column.caption}" path="${column.valueField}" value="[[${variableName}]]">
                  <avl-textfield slot="filter" no-label-float compact-mode class="filter-textfield"
                    label="${column.caption}"
                    value="{{${variableName}}}" focus-target> </avl-textfield>
                </vaadin-grid-filter>`;
        }
        else if (iconOrImageHtml) {
            header = `<span class="header-icon-content" test-label="${testLabel}">${iconOrImageHtml}</span>`;
        }
        else {
            header = `<span class="header-content" test-label="${testLabel}">${column.caption}</span>`;
        }
        if (column.sortable) {
            const direction = column.sortDirection ? 'direction="' + column.sortDirection + '"' : '';
            header = `<vaadin-grid-sorter path="${column.valueField}" ${direction}>
                  <div class="cell sortable-header">
                    ${header}
                  </div>
                </vaadin-grid-sorter>`;
        }
        const columnEl = document.createElement('vaadin-grid-column');
        columnEl.resizable = true;
        if (column.width) {
            columnEl.setAttribute('width', column.width);
        }
        columnEl.setAttribute('flex-grow', column.flexWidth.toString());
        const headerTemplate = document.createElement('template');
        headerTemplate.classList.add('header');
        headerTemplate.innerHTML = header;
        const itemTemplate = document.createElement('template');
        let itemTemplateString = `<span class="cell-content" column-index="${columnIndex}" row-index$="{{index}}">${this.getLeafColumnTemplate(column)}</span>`;
        if (this.treeColumn && columnIndex === 0) {
            itemTemplateString = `<vaadin-grid-tree-toggle leaf="[[!item.hasChildren]]" expanded="{{expanded}}" level="[[level]]">
              ${itemTemplateString}
        </vaadin-grid-tree-toggle>`;
        }
        itemTemplate.innerHTML = itemTemplateString;
        columnEl.appendChild(headerTemplate);
        columnEl.appendChild(itemTemplate);
        return columnEl;
    }
    getGridClass(pagination, globalFilter) {
        const classList = [];
        if (pagination) {
            classList.push('with-pagination');
        }
        if (globalFilter) {
            classList.push('with-global-filter');
        }
        if (this.columnSelector) {
            classList.push('with-column-selector');
        }
        return classList.join(' ');
    }
    headerCheckboxState() {
        var _a;
        const tableHeaderCheckbox = this.grid.querySelector('#table-header-checkbox');
        if (!((_a = tableHeaderCheckbox === null || tableHeaderCheckbox === void 0 ? void 0 : tableHeaderCheckbox.children) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        const child = this.grid.querySelector('#table-header-checkbox').children[0];
        if (this.grid.selectedItems.length && this.grid.selectedItems.length !== this.grid.items.length) {
            child.indeterminate = true;
        }
        else if (this.grid.selectedItems.length === this.grid.items.length) {
            child.checked = true;
            child.indeterminate = false;
        }
        else if (!this.grid.selectedItems.length) {
            child.checked = false;
            child.indeterminate = false;
        }
    }
    createCheckBox() {
        const checkbox = document.createElement('avl-checkbox');
        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!this.checkboxClicked || !checkbox.checked) {
                if (checkbox.checked) {
                    this.checkboxAllSelectClicked = true;
                    let items = [].slice.call(this.grid.shadowRoot.querySelector('#items').children);
                    this.grid.selectedItems = [];
                    items = items.slice(0, this.grid.items.length);
                    items.forEach((item) => {
                        this.grid.selectedItems.push(item._item);
                        item.children[0]._content.children[0].checked = true;
                    });
                    if (this.pagination) {
                        if (!this.isLazyLoading && this.grid.selectedItems.length === this.grid.items.length) {
                            const values = this.grid.selectedItems.map((formattedRow) => formattedRow[this.rowPropertyName]);
                            this.selectedValues = values.slice(0, this.grid.items.length);
                            this.selectedIndexes = this.selectedValues.map((value) => {
                                return this.row2formattedRow.get(value)[this.rowIndexPropertyName];
                            });
                        }
                    }
                    else {
                        if (!this.isLazyLoading && this.grid.selectedItems.length === this.data.length) {
                            this.selectedValues = this.grid.selectedItems.map((formattedRow) => formattedRow[this.rowPropertyName]);
                            this.selectedIndexes = this.selectedValues.map((value) => {
                                return this.row2formattedRow.get(value)[this.rowIndexPropertyName];
                            });
                        }
                    }
                }
                else {
                    this.grid.selectedItems = [];
                    if (!this.isLazyLoading) {
                        this.selectedValues = this.grid.selectedItems.map((formattedRow) => formattedRow[this.rowPropertyName]);
                        this.selectedIndexes = this.selectedValues.map((value) => {
                            return this.row2formattedRow.get(value)[this.rowIndexPropertyName];
                        });
                    }
                    this.checkboxClicked = false;
                    this.checkboxAllSelectClicked = false;
                }
            }
            else {
                this.checkboxClicked = false;
            }
        });
        return checkbox;
    }
    resetCheckboxes() {
        return new Promise((resolve) => {
            if (this.grid.selectedItems.length > 0) {
                this.selectedValues = [];
            }
            const tableHeaderCheckbox = this.grid.querySelector('#table-header-checkbox');
            if (tableHeaderCheckbox && tableHeaderCheckbox.children.length > 0) {
                tableHeaderCheckbox.children[0].checked = false;
                tableHeaderCheckbox.children[0].indeterminate = false;
            }
            if (this.grid.selectedItems.length > 0) {
                this.grid.selectedItems = [];
            }
            resolve('done');
        });
    }
    doLoadGridTask() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const numChilds = this.grid.shadowRoot.querySelector('#items').childElementCount;
                if (numChilds > 0) {
                    resolve('done');
                }
            }, 100);
        });
    }
    filterLeafColumn(col) {
        if (this.grid.querySelector(`vaadin-grid-filter[path="${col.valueField}"]`)) {
            const filterGridFilterElement = this.grid.querySelector(`vaadin-grid-filter[path="${col.valueField}"]`);
            const filterTextfield = filterGridFilterElement.querySelector('avl-textfield');
            filterTextfield.addEventListener('value-changed', (e) => {
                this.resetCheckboxes();
            });
            filterTextfield['value'] = col.filterKey;
        }
    }
    cacheRowsForLookup(data, page, pageSize, formattedRows) {
        data.rows.forEach((row, idx) => {
            const tableIdx = page * pageSize + idx;
            this.row2formattedRow.set(row, formattedRows[idx]);
            this.idx2formattedRow.set(tableIdx, formattedRows[idx]);
        });
    }
    activeItemChanged(activeItem) {
        if (activeItem === null) {
            activeItem = this.lastActiveItem;
        }
        if (this.allowActiveRow) {
            this.activeRow = activeItem;
            this.grid.shadowRoot.querySelectorAll('#items tr').forEach((el) => el.removeAttribute('selected'));
            this.grid.shadowRoot.activeElement.parentNode.setAttribute('selected', 'true');
            // set properties
            if (!this.singleSelect) {
                this.selectedIndex = activeItem ? activeItem[this.rowIndexPropertyName] : undefined;
                this.selectedValue = activeItem ? activeItem[this.rowPropertyName] : undefined;
                this.grid.shadowRoot.activeElement.parentNode.setAttribute('selected', 'true');
            }
        }
        this.lastActiveItem = activeItem;
        // single select mode
        if (this.singleSelect && activeItem) {
            // select clicked item or deselect it if it was previously selected
            if (this.grid.selectedItems[0] === activeItem) {
                this.grid.deselectItem(activeItem);
            }
            else {
                // only one can be selected in single select mode
                this.grid.selectedItems = [];
                this.grid.selectItem(activeItem);
            }
            // set properties
            this.selectedIndex = this.grid.selectedItems[0] ? activeItem[this.rowIndexPropertyName] : undefined;
            this.selectedValue = this.grid.selectedItems[0] ? activeItem[this.rowPropertyName] : undefined;
            return;
        }
    }
    singleSelectChanged() {
        // reset multi select if someone turned on single select
        if (this.singleSelect) {
            this.multiSelect = false;
            this.selectedIndexes = [];
            this.selectedValues = [];
        }
        this.grid.selectedItems = [];
    }
    multiSelectChanged() {
        // reset single select if someone turned on single select
        if (this.multiSelect) {
            // reset selectedIndex and selectedValue
            this.singleSelect = false;
            this.selectedIndex = undefined;
            this.selectedValue = undefined;
        }
        this.grid.selectedItems = [];
    }
    selectedValueChanged() {
        if (this.multiSelect) {
            return;
        }
        this.grid.selectedItems = [];
        // if invalid value or undefined just return
        if (!this.singleSelect || !this.selectedValue) {
            return;
        }
        // selectItem ignores undefined values
        this.grid.selectItem(this.row2formattedRow.get(this.selectedValue));
        // sync index
        this.selectedIndex = this.row2formattedRow.get(this.selectedValue)[this.rowIndexPropertyName];
    }
    selectedIndexChanged() {
        if (this.multiSelect) {
            return;
        }
        // deselect everything
        this.grid.selectedItems = [];
        // if invalid value or undefined just return
        if (!this.singleSelect || typeof this.selectedIndex !== 'number') {
            return;
        }
        // selectItem ignores undefined values
        this.grid.selectItem(this.idx2formattedRow.get(this.selectedIndex));
        // properly set selected value
        this.selectedValue = this.idx2formattedRow.get(this.selectedIndex)[this.rowPropertyName];
    }
    selectedValuesChanged() {
        this.doLoadGridTask().then(() => {
            this.refreshSelectedValues();
            if (!this.isLazyLoading && !this.treeColumn) {
                this.headerCheckboxState();
            }
        });
    }
    refreshSelectedValues() {
        if (!this.multiSelect || !Array.isArray(this.selectedValues)) {
            return;
        }
        // deselect everything
        this.grid.selectedItems = [];
        // selectItem ignores undefined values
        this.selectedValues.forEach((value) => this.grid.selectItem(this.row2formattedRow.get(value)));
        // compare if already set
        const selectedIndexes = this.selectedValues.map((value) => {
            return this.row2formattedRow.get(value)[this.rowIndexPropertyName];
        });
        if (this.selectedIndexes.length !== selectedIndexes.length) {
            this.selectedIndexes = selectedIndexes;
            return;
        }
        for (const idx in selectedIndexes) {
            if (selectedIndexes[idx] !== this.selectedIndexes[idx]) {
                this.selectedIndexes = selectedIndexes;
                return;
            }
        }
    }
    selectedIndexesChanged() {
        this.doLoadGridTask().then(() => {
            this.refreshSelectedIndexes();
            if (!this.isLazyLoading && !this.treeColumn) {
                this.headerCheckboxState();
            }
        });
    }
    refreshSelectedIndexes() {
        if (!this.multiSelect || !Array.isArray(this.selectedIndexes)) {
            return;
        }
        // deselect everything
        this.grid.selectedItems = [];
        // selectItem ignores undefined values
        this.selectedIndexes.forEach((idx) => this.grid.selectItem(this.idx2formattedRow.get(idx)));
        // compare if already set
        const selectedValues = this.selectedIndexes.map((idx) => {
            return this.idx2formattedRow.get(idx)[this.rowPropertyName];
        });
        if (this.selectedValues.length !== selectedValues.length) {
            this.selectedValues = selectedValues;
            return;
        }
        for (const idx in selectedValues) {
            if (selectedValues[idx] !== this.selectedValues[idx]) {
                this.selectedValues = selectedValues;
                return;
            }
        }
    }
}
customElements.define(AvlDatatableImpl.is, AvlDatatableImpl);

//# sourceMappingURL=avl-datatable.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.models.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.models.js ***!
  \*****************************************************************************************/
/*! exports provided: OrderImpl, VaadinGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderImpl", function() { return OrderImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaadinGrid", function() { return VaadinGrid; });
/* harmony import */ var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer */ "./node_modules/@polymer/polymer/polymer-element.js");

class OrderImpl {
    constructor(path, ascending) {
        this.path = path;
        this.ascending = ascending;
    }
}
class VaadinGrid extends _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
}

//# sourceMappingURL=avl-datatable.models.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/datatable/dist/avl-datatable/column-definitions.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/column-definitions.js ***!
  \***************************************************************************************/
/*! exports provided: Column, LeafColumn, GroupColumn, ColumnType, isLeafColumn, isGroupColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafColumn", function() { return LeafColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupColumn", function() { return GroupColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnType", function() { return ColumnType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeafColumn", function() { return isLeafColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGroupColumn", function() { return isGroupColumn; });
class Column {
    constructor(caption) {
        this.caption = caption;
    }
}
class LeafColumn extends Column {
    constructor(caption, valueField, type, sortable, filterable, flexWidth, width, formatter, defaultStyle, headerIcon, headerImage, hidden, numberOptions, dateTimeOptions, menuItems, doNotFollowLinks, disabled, sortDirection, filterKey) {
        super(caption);
        this.caption = caption;
        this.valueField = valueField;
        this.type = type;
        this.sortable = sortable;
        this.filterable = filterable;
        this.flexWidth = flexWidth;
        this.width = width;
        this.formatter = formatter;
        this.defaultStyle = defaultStyle;
        this.headerIcon = headerIcon;
        this.headerImage = headerImage;
        this.hidden = hidden;
        this.numberOptions = numberOptions;
        this.dateTimeOptions = dateTimeOptions;
        this.menuItems = menuItems;
        this.doNotFollowLinks = doNotFollowLinks;
        this.disabled = disabled;
        this.sortDirection = sortDirection;
        this.filterKey = filterKey;
    }
}
class GroupColumn extends Column {
    constructor(caption, childColumns) {
        super(caption);
        this.caption = caption;
        this.childColumns = childColumns;
    }
}
var ColumnType;
(function (ColumnType) {
    ColumnType["Text"] = "Text";
    ColumnType["Number"] = "Number";
    ColumnType["Date"] = "Date";
    ColumnType["Icon"] = "Icon";
    ColumnType["Image"] = "Image";
    ColumnType["Led"] = "Led";
    ColumnType["Checkbox"] = "Checkbox";
    ColumnType["Link"] = "Link";
    ColumnType["Button"] = "Button";
    ColumnType["IconButton"] = "IconButton";
    ColumnType["IconText"] = "IconText";
    ColumnType["OverflowMenu"] = "OverflowMenu";
})(ColumnType || (ColumnType = {}));
function isLeafColumn(column) {
    return !!column.valueField;
}
function isGroupColumn(column) {
    return !!column.childColumns;
}

//# sourceMappingURL=column-definitions.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/datatable/dist/avl-datatable/themes/vaadin-grid-material-theme.css.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/themes/vaadin-grid-material-theme.css.js ***!
  \**********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");

const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"] `<dom-module id="material-grid" theme-for="vaadin-grid">
  <template>
    <style>
      /* From: https://github.com/vaadin/vaadin-material-theme */

      :host {
        font-family: Roboto, sans-serif;
      }

      [part~="body-cell"] {
        height: var(--avl-datatable-row-height, 48px);
      }

      [part~="header-cell"] {
        height: 48px;
      }

      [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        padding: 12px 24px;
      }

      [part~="details-cell"] ::slotted(vaadin-grid-cell-content) {
        padding: 14px 16px;
      }

      [part~="header-cell"],
      [part~="footer-cell"] {
        background-color: var(--avl-datatable-row-background-color);
        color: var(--avl-datatable-column-header-color); 
        font-size: 14px;
        font-weight: normal;
      }

      [part~="header-cell"] {
        text-transform: uppercase;
      }

      /* Header and footer divider between body rows */

      [part~="body-cell"],
      [part~="details-cell"],
      [part~="row"]:last-child > [part~="header-cell"] {
        border-bottom: 1px solid var(--avl-datatable-divider-color);
      }

      [part~="row"]:first-child > [part~="footer-cell"] {
        border-top: 1px solid var(--avl-datatable-divider-color);
      }

      /* Body rows/cells */

      [part~="body-cell"] {
        background-color: var(--avl-datatable-row-background-color);
        overflow: hidden;
      }

      [part~="row"]:hover > [part~="body-cell"] {
        background: var(--avl-datatable-row-hover-color);
      }

      /* Selected row */
      [part~="body-cell"]::before {
        content: "";
        pointer-events: none;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: var(--avl-datatable-row-selection-color);
        opacity: 0;
        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 0.2, 0.1);
      }

      :host(:not([reordering])) [part~="row"][selected] > [part~="body-cell"]::before {
        opacity: 0.2;
      }

      [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
        /* NOTE(platosha): Raise cell content above background cell pseudo elements */
        position: relative;
      }

      /* Column reordering */

      :host([reordering]) [part~="cell"] {
        background: var(--material-secondary-background-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="allowed"] {
        background: var(--material-background-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="dragging"] {
        background: var(--material-background-color);
      }

      /* Frozen columns */

      [part~="cell"][last-frozen] {
        border-right: 1px solid var(--avl-datatable-divider-color);
      }

      /* Column resizing */

      :host(:not([theme~="column-dividers"])) [part~="cell"]:not([last-frozen]) [part="resize-handle"] {
        border-right: 1px solid var(--avl-datatable-divider-color);
      }

      /* Keyboard navigation */

      [part~="cell"]:focus {
        outline: none;
      }

      :host([navigating]) [part~="cell"]:focus {
        box-shadow: inset 0 0 0 1px var(--avl-datatable-column-header-color);
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

//# sourceMappingURL=vaadin-grid-material-theme.css.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/datatable/dist/avl-datatable/themes/vaadin-grid-sorter-material-theme.css.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/themes/vaadin-grid-sorter-material-theme.css.js ***!
  \*****************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");



const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"] `<dom-module id="material-grid-sorter" theme-for="vaadin-grid-sorter">
  <template>
    <style>
      :host {
        justify-content: flex-start;
        height: 100%;
        align-items: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      :host([direction]) {
        color: var(--material-body-text-color);
      }

      [part="indicators"] {
        order: -1;
      }

      [part="indicators"]::before {
        display: inline-block;
        width: 24px;
        font-family: "material-icons";
        font-size: 18px;
        line-height: 18px;
        transition: .1s opacity cubic-bezier(.4, 0, .2, .1), .1s width cubic-bezier(.4, 0, .2, .1);
        opacity: .5;
      }

      :host(:not([direction])) [part="indicators"]::before {
        content: var(--material-icons-arrow-upward);
        width: 0;
        opacity: 0;
      }

      :host([direction]) [part="indicators"]::before {
        opacity: 1;
      }

      :host([direction="asc"]) [part="indicators"]::before {
        content: var(--material-icons-arrow-upward);
      }

      :host([direction="desc"]) [part="indicators"]::before {
        content: var(--material-icons-arrow-downward);
      }

      :host(:hover) [part="indicators"]::before {
        width: 24px;
        opacity: 1;
      }

      [part="order"] {
        right: 4px;
        top: -8px;
        font-size: 10px;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

//# sourceMappingURL=vaadin-grid-sorter-material-theme.css.js.map


/***/ }),

/***/ "./node_modules/@avl-controls/interfaces/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@avl-controls/interfaces/index.js ***!
  \********************************************************/
/*! exports provided: globalFilterKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_avl_dataprovider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/avl-dataprovider */ "./node_modules/@avl-controls/interfaces/src/avl-dataprovider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "globalFilterKey", function() { return _src_avl_dataprovider__WEBPACK_IMPORTED_MODULE_0__["globalFilterKey"]; });




/***/ }),

/***/ "./node_modules/@avl-controls/interfaces/src/avl-dataprovider.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@avl-controls/interfaces/src/avl-dataprovider.js ***!
  \***********************************************************************/
/*! exports provided: globalFilterKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalFilterKey", function() { return globalFilterKey; });
/**
 * Name of the key used to set global filter value in filters map.
 */
const globalFilterKey = 'globalFilter';


/***/ }),

/***/ "./node_modules/@polymer/iron-image/iron-image.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/iron-image/iron-image.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_resolve_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/resolve-url.js */ "./node_modules/@polymer/polymer/lib/utils/resolve-url.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/






/**
`iron-image` is an element for displaying an image that provides useful sizing and
preloading options not found on the standard `<img>` tag.

The `sizing` option allows the image to be either cropped (`cover`) or
letterboxed (`contain`) to fill a fixed user-size placed on the element.

The `preload` option prevents the browser from rendering the image until the
image is fully loaded.  In the interim, either the element's CSS `background-color`
can be be used as the placeholder, or the `placeholder` property can be
set to a URL (preferably a data-URI, for instant rendering) for an
placeholder image.

The `fade` option (only valid when `preload` is set) will cause the placeholder
image/color to be faded out once the image is rendered.

Examples:

  Basically identical to `<img src="...">` tag:

    <iron-image src="http://lorempixel.com/400/400"></iron-image>

  Will letterbox the image to fit:

    <iron-image style="width:400px; height:400px;" sizing="contain"
      src="http://lorempixel.com/600/400"></iron-image>

  Will crop the image to fit:

    <iron-image style="width:400px; height:400px;" sizing="cover"
      src="http://lorempixel.com/600/400"></iron-image>

  Will show light-gray background until the image loads:

    <iron-image style="width:400px; height:400px; background-color: lightgray;"
      sizing="cover" preload src="http://lorempixel.com/600/400"></iron-image>

  Will show a base-64 encoded placeholder image until the image loads:

    <iron-image style="width:400px; height:400px;" placeholder="data:image/gif;base64,..."
      sizing="cover" preload src="http://lorempixel.com/600/400"></iron-image>

  Will fade the light-gray background out once the image is loaded:

    <iron-image style="width:400px; height:400px; background-color: lightgray;"
      sizing="cover" preload fade src="http://lorempixel.com/600/400"></iron-image>

Custom property | Description | Default
----------------|-------------|----------
`--iron-image-placeholder` | Mixin applied to #placeholder | `{}`
`--iron-image-width` | Sets the width of the wrapped image | `auto`
`--iron-image-height` | Sets the height of the wrapped image | `auto`

@group Iron Elements
@element iron-image
@demo demo/index.html
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,

  is: 'iron-image',

  properties: {
    /**
     * The URL of an image.
     */
    src: {type: String, value: ''},

    /**
     * A short text alternative for the image.
     */
    alt: {type: String, value: null},

    /**
     * CORS enabled images support:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
     */
    crossorigin: {type: String, value: null},

    /**
     * When true, the image is prevented from loading and any placeholder is
     * shown.  This may be useful when a binding to the src property is known to
     * be invalid, to prevent 404 requests.
     */
    preventLoad: {type: Boolean, value: false},

    /**
     * Sets a sizing option for the image.  Valid values are `contain` (full
     * aspect ratio of the image is contained within the element and
     * letterboxed) or `cover` (image is cropped in order to fully cover the
     * bounds of the element), or `null` (default: image takes natural size).
     */
    sizing: {type: String, value: null, reflectToAttribute: true},

    /**
     * When a sizing option is used (`cover` or `contain`), this determines
     * how the image is aligned within the element bounds.
     */
    position: {type: String, value: 'center'},

    /**
     * When `true`, any change to the `src` property will cause the
     * `placeholder` image to be shown until the new image has loaded.
     */
    preload: {type: Boolean, value: false},

    /**
     * This image will be used as a background/placeholder until the src image
     * has loaded.  Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */
    placeholder: {type: String, value: null, observer: '_placeholderChanged'},

    /**
     * When `preload` is true, setting `fade` to true will cause the image to
     * fade into place.
     */
    fade: {type: Boolean, value: false},

    /**
     * Read-only value that is true when the image is loaded.
     */
    loaded: {notify: true, readOnly: true, type: Boolean, value: false},

    /**
     * Read-only value that tracks the loading state of the image when the
     * `preload` option is used.
     */
    loading: {notify: true, readOnly: true, type: Boolean, value: false},

    /**
     * Read-only value that indicates that the last set `src` failed to load.
     */
    error: {notify: true, readOnly: true, type: Boolean, value: false},

    /**
     * Can be used to set the width of image (e.g. via binding); size may also
     * be set via CSS.
     */
    width: {observer: '_widthChanged', type: Number, value: null},

    /**
     * Can be used to set the height of image (e.g. via binding); size may also
     * be set via CSS.
     *
     * @attribute height
     * @type number
     * @default null
     */
    height: {observer: '_heightChanged', type: Number, value: null},
  },

  observers: [
    '_transformChanged(sizing, position)',
    '_loadStateObserver(src, preventLoad)'
  ],

  created: function() {
    this._resolvedSrc = '';
  },

  _imgOnLoad: function() {
    if (this.$.img.src !== this._resolveSrc(this.src)) {
      return;
    }

    this._setLoading(false);
    this._setLoaded(true);
    this._setError(false);
  },

  _imgOnError: function() {
    if (this.$.img.src !== this._resolveSrc(this.src)) {
      return;
    }

    this.$.img.removeAttribute('src');
    this.$.sizedImgDiv.style.backgroundImage = '';

    this._setLoading(false);
    this._setLoaded(false);
    this._setError(true);
  },

  _computePlaceholderHidden: function() {
    return !this.preload || (!this.fade && !this.loading && this.loaded);
  },

  _computePlaceholderClassName: function() {
    return (this.preload && this.fade && !this.loading && this.loaded) ?
        'faded-out' :
        '';
  },

  _computeImgDivHidden: function() {
    return !this.sizing;
  },

  _computeImgDivARIAHidden: function() {
    return this.alt === '' ? 'true' : undefined;
  },

  _computeImgDivARIALabel: function() {
    if (this.alt !== null) {
      return this.alt;
    }

    // Polymer.ResolveUrl.resolveUrl will resolve '' relative to a URL x to
    // that URL x, but '' is the default for src.
    if (this.src === '') {
      return '';
    }

    // NOTE: Use of `URL` was removed here because IE11 doesn't support
    // constructing it. If this ends up being problematic, we should
    // consider reverting and adding the URL polyfill as a dev dependency.
    var resolved = this._resolveSrc(this.src);
    // Remove query parts, get file name.
    return resolved.replace(/[?|#].*/g, '').split('/').pop();
  },

  _computeImgHidden: function() {
    return !!this.sizing;
  },

  _widthChanged: function() {
    this.style.width = isNaN(this.width) ? this.width : this.width + 'px';
  },

  _heightChanged: function() {
    this.style.height = isNaN(this.height) ? this.height : this.height + 'px';
  },

  _loadStateObserver: function(src, preventLoad) {
    var newResolvedSrc = this._resolveSrc(src);
    if (newResolvedSrc === this._resolvedSrc) {
      return;
    }

    this._resolvedSrc = '';
    this.$.img.removeAttribute('src');
    this.$.sizedImgDiv.style.backgroundImage = '';

    if (src === '' || preventLoad) {
      this._setLoading(false);
      this._setLoaded(false);
      this._setError(false);
    } else {
      this._resolvedSrc = newResolvedSrc;
      this.$.img.src = this._resolvedSrc;
      this.$.sizedImgDiv.style.backgroundImage =
          'url("' + this._resolvedSrc + '")';

      this._setLoading(true);
      this._setLoaded(false);
      this._setError(false);
    }
  },

  _placeholderChanged: function() {
    this.$.placeholder.style.backgroundImage =
        this.placeholder ? 'url("' + this.placeholder + '")' : '';
  },

  _transformChanged: function() {
    var sizedImgDivStyle = this.$.sizedImgDiv.style;
    var placeholderStyle = this.$.placeholder.style;

    sizedImgDivStyle.backgroundSize = placeholderStyle.backgroundSize =
        this.sizing;

    sizedImgDivStyle.backgroundPosition = placeholderStyle.backgroundPosition =
        this.sizing ? this.position : '';

    sizedImgDivStyle.backgroundRepeat = placeholderStyle.backgroundRepeat =
        this.sizing ? 'no-repeat' : '';
  },

  _resolveSrc: function(testSrc) {
    var resolved = Object(_polymer_polymer_lib_utils_resolve_url_js__WEBPACK_IMPORTED_MODULE_3__["resolveUrl"])(testSrc, this.$.baseURIAnchor.href);
    // NOTE: Use of `URL` was removed here because IE11 doesn't support
    // constructing it. If this ends up being problematic, we should
    // consider reverting and adding the URL polyfill as a dev dependency.
    if (resolved.length >= 2 && resolved[0] === '/' && resolved[1] !== '/') {
      // In IE location.origin might not work
      // https://connect.microsoft.com/IE/feedback/details/1763802/location-origin-is-undefined-in-ie-11-on-windows-10-but-works-on-windows-7
      resolved = (location.origin || location.protocol + '//' + location.host) +
          resolved;
    }
    return resolved;
  }
});


/***/ }),

/***/ "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js ***!
  \******************************************************************************************/
/*! exports provided: IronScrollTargetBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronScrollTargetBehavior", function() { return IronScrollTargetBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/




/**
 * `Polymer.IronScrollTargetBehavior` allows an element to respond to scroll
 * events from a designated scroll target.
 *
 * Elements that consume this behavior can override the `_scrollHandler`
 * method to add logic on the scroll event.
 *
 * @demo demo/scrolling-region.html Scrolling Region
 * @demo demo/document.html Document Element
 * @polymerBehavior
 */
const IronScrollTargetBehavior = {

  properties: {

    /**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */
    scrollTarget: {
      type: HTMLElement,
      value: function() {
        return this._defaultScrollTarget;
      }
    }
  },

  observers: ['_scrollTargetChanged(scrollTarget, isAttached)'],

  /**
   * True if the event listener should be installed.
   */
  _shouldHaveListener: true,

  _scrollTargetChanged: function(scrollTarget, isAttached) {
    var eventTarget;

    if (this._oldScrollTarget) {
      this._toggleScrollListener(false, this._oldScrollTarget);
      this._oldScrollTarget = null;
    }
    if (!isAttached) {
      return;
    }
    // Support element id references
    if (scrollTarget === 'document') {
      this.scrollTarget = this._doc;

    } else if (typeof scrollTarget === 'string') {
      var domHost = this.domHost;

      this.scrollTarget = domHost && domHost.$ ?
          domHost.$[scrollTarget] :
          Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this.ownerDocument).querySelector('#' + scrollTarget);

    } else if (this._isValidScrollTarget()) {
      this._oldScrollTarget = scrollTarget;
      this._toggleScrollListener(this._shouldHaveListener, scrollTarget);
    }
  },

  /**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */
  _scrollHandler: function scrollHandler() {},

  /**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */
  get _defaultScrollTarget() {
    return this._doc;
  },

  /**
   * Shortcut for the document element
   *
   * @type {Element}
   */
  get _doc() {
    return this.ownerDocument.documentElement;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  get _scrollTop() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageYOffset :
                                               this.scrollTarget.scrollTop;
    }
    return 0;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  get _scrollLeft() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageXOffset :
                                               this.scrollTarget.scrollLeft;
    }
    return 0;
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  set _scrollTop(top) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(window.pageXOffset, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  set _scrollLeft(left) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, window.pageYOffset);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
    }
  },

  /**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */
  scroll: function(leftOrOptions, top) {
    var left;

    if (typeof leftOrOptions === 'object') {
      left = leftOrOptions.left;
      top = leftOrOptions.top;
    } else {
      left = leftOrOptions;
    }

    left = left || 0;
    top = top || 0;
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetWidth() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerWidth :
                                               this.scrollTarget.offsetWidth;
    }
    return 0;
  },

  /**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetHeight() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerHeight :
                                               this.scrollTarget.offsetHeight;
    }
    return 0;
  },

  /**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */
  _isValidScrollTarget: function() {
    return this.scrollTarget instanceof HTMLElement;
  },

  _toggleScrollListener: function(yes, scrollTarget) {
    var eventTarget = scrollTarget === this._doc ? window : scrollTarget;
    if (yes) {
      if (!this._boundScrollHandler) {
        this._boundScrollHandler = this._scrollHandler.bind(this);
        eventTarget.addEventListener('scroll', this._boundScrollHandler);
      }
    } else {
      if (this._boundScrollHandler) {
        eventTarget.removeEventListener('scroll', this._boundScrollHandler);
        this._boundScrollHandler = null;
      }
    }
  },

  /**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */
  toggleScrollListener: function(yes) {
    this._shouldHaveListener = yes;
    this._toggleScrollListener(yes, this.scrollTarget);
  }

};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-checkbox/src/vaadin-checkbox.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-checkbox/src/vaadin-checkbox.js ***!
  \*********************************************************************/
/*! exports provided: CheckboxElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxElement", function() { return CheckboxElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







/**
 * `<vaadin-checkbox>` is a Web Component for customized checkboxes.
 *
 * ```html
 * <vaadin-checkbox>
 *   Make my profile visible
 * </vaadin-checkbox>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name         | Description
 * ------------------|----------------
 * `checkbox`        | The wrapper element for the native <input type="checkbox">
 * `label`           | The wrapper element in which the component's children, namely the label, is slotted
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|--------------
 * `active`     | Set when the checkbox is pressed down, either with mouse, touch or the keyboard. | `:host`
 * `disabled`   | Set when the checkbox is disabled. | `:host`
 * `focus-ring` | Set when the checkbox is focused using the keyboard. | `:host`
 * `focused`    | Set when the checkbox is focused. | `:host`
 * `indeterminate` | Set when the checkbox is in indeterminate mode. | `:host`
 * `checked` | Set when the checkbox is checked. | `:host`
 * `empty` | Set when there is no label provided. | `label`
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends PolymerElement
 * @mixes ElementMixin
 * @mixes ControlStateMixin
 * @mixes ThemableMixin
 * @mixes GestureEventListeners
 * @demo demo/index.html
 */
class CheckboxElement extends
  Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ElementMixin"])(
    Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ControlStateMixin"])(
      Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemableMixin"])(
        Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`;
  }

  static get is() {
    return 'vaadin-checkbox';
  }

  static get version() {
    return '2.5.0';
  }

  static get properties() {
    return {
      /**
       * True if the checkbox is checked.
       * @type {boolean}
       */
      checked: {
        type: Boolean,
        value: false,
        notify: true,
        observer: '_checkedChanged',
        reflectToAttribute: true
      },

      /**
       * Indeterminate state of the checkbox when it's neither checked nor unchecked, but undetermined.
       * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes
       * @type {boolean}
       */
      indeterminate: {
        type: Boolean,
        notify: true,
        observer: '_indeterminateChanged',
        reflectToAttribute: true,
        value: false
      },

      /**
       * The value given to the data submitted with the checkbox's name to the server when the control is inside a form.
       */
      value: {
        type: String,
        value: 'on'
      },

      /** @private */
      _nativeCheckbox: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    /**
     * @type {string}
     * Name of the element.
     */
    this.name;
  }

  get name() {
    return this.checked ? this._storedName : '';
  }

  set name(name) {
    this._storedName = name;
  }

  ready() {
    super.ready();

    this.setAttribute('role', 'checkbox');

    this._nativeCheckbox = this.shadowRoot.querySelector('input[type="checkbox"]');

    this.addEventListener('click', this._handleClick.bind(this));

    this._addActiveListeners();

    const attrName = this.getAttribute('name');
    if (attrName) {
      this.name = attrName;
    }

    this.shadowRoot.querySelector('[part~="label"]').querySelector('slot')
      .addEventListener('slotchange', this._updateLabelAttribute.bind(this));

    this._updateLabelAttribute();
  }

  /** @private */
  _updateLabelAttribute() {
    const label = this.shadowRoot.querySelector('[part~="label"]');
    const assignedNodes = label.firstElementChild.assignedNodes();
    if (this._isAssignedNodesEmpty(assignedNodes)) {
      label.setAttribute('empty', '');
    } else {
      label.removeAttribute('empty');
    }
  }

  /** @private */
  _isAssignedNodesEmpty(nodes) {
    // The assigned nodes considered to be empty if there is no slotted content or only one empty text node
    return nodes.length === 0 ||
          (nodes.length == 1
          && nodes[0].nodeType == Node.TEXT_NODE
          && nodes[0].textContent.trim() === '');
  }

  /** @private */
  _checkedChanged(checked) {
    if (this.indeterminate) {
      this.setAttribute('aria-checked', 'mixed');
    } else {
      this.setAttribute('aria-checked', Boolean(checked));
    }
  }

  /** @private */
  _indeterminateChanged(indeterminate) {
    if (indeterminate) {
      this.setAttribute('aria-checked', 'mixed');
    } else {
      this.setAttribute('aria-checked', this.checked);
    }
  }

  /** @private */
  _addActiveListeners() {
    // DOWN
    this._addEventListenerToNode(this, 'down', (e) => {
      if (this.__interactionsAllowed(e)) {
        this.setAttribute('active', '');
      }
    });

    // UP
    this._addEventListenerToNode(this, 'up', () => this.removeAttribute('active'));

    // KEYDOWN
    this.addEventListener('keydown', e => {
      if (this.__interactionsAllowed(e) && e.keyCode === 32) {
        e.preventDefault();
        this.setAttribute('active', '');
      }
    });

    // KEYUP
    this.addEventListener('keyup', e => {
      if (this.__interactionsAllowed(e) && e.keyCode === 32) {
        e.preventDefault();
        this._toggleChecked();
        this.removeAttribute('active');

        if (this.indeterminate) {
          this.indeterminate = false;
        }
      }
    });
  }

  /**
   * @return {!HTMLInputElement}
   * @protected
   */
  get focusElement() {
    return this.shadowRoot.querySelector('input');
  }

  /**
   * True if users' interactions (mouse or keyboard)
   * should toggle the checkbox
   */
  __interactionsAllowed(e) {
    if (this.disabled) {
      return false;
    }

    // https://github.com/vaadin/vaadin-checkbox/issues/63
    if (e.target.localName === 'a') {
      return false;
    }

    return true;
  }

  /** @private */
  _handleClick(e) {
    if (this.__interactionsAllowed(e)) {
      if (!this.indeterminate) {
        if (e.composedPath()[0] !== this._nativeCheckbox) {
          e.preventDefault();
          this._toggleChecked();
        }
      } else {
        /*
         * Required for IE 11 and Edge.
         * See issue here: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7344418/
         */
        this.indeterminate = false;
        e.preventDefault();
        this._toggleChecked();
      }
    }
  }

  /** @protected */
  _toggleChecked() {
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('change', {composed: false, bubbles: true}));
  }

  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */
}

customElements.define(CheckboxElement.is, CheckboxElement);




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js ***!
  \***************************************************************************************/
/*! exports provided: ControlStateMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlStateMixin", function() { return ControlStateMixin; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
// We consider the keyboard to be active if the window has received a keydown
// event since the last mousedown event.
let keyboardActive = false;

// Listen for top-level keydown and mousedown events.
// Use capture phase so we detect events even if they're handled.
window.addEventListener(
  'keydown',
  () => {
    keyboardActive = true;
  },
  {capture: true}
);

window.addEventListener(
  'mousedown',
  () => {
    keyboardActive = false;
  },
  {capture: true}
);

/**
 * A private mixin to avoid problems with dynamic properties and Polymer Analyzer.
 * No need to expose these properties in the API docs.
 * @polymerMixin
 * @private
 */
const TabIndexMixin = superClass => class VaadinTabIndexMixin extends superClass {
  static get properties() {
    var properties = {
      /**
       * Internal property needed to listen to `tabindex` attribute changes.
       *
       * For changing the tabindex of this component use the native `tabIndex` property.
       * @private
       */
      tabindex: {
        type: Number,
        value: 0,
        reflectToAttribute: true,
        observer: '_tabindexChanged'
      }
    };

    if (window.ShadyDOM) {
      // ShadyDOM browsers need the `tabIndex` in order to notify when the user changes it programmatically.
      properties['tabIndex'] = properties.tabindex;
    }

    return properties;
  }
};

/**
 * Polymer.IronControlState is not a proper 2.0 class, also, its tabindex
 * implementation fails in the shadow dom, so we have this for vaadin elements.
 * @polymerMixin
 */
const ControlStateMixin = superClass => class VaadinControlStateMixin extends TabIndexMixin(superClass) {
  static get properties() {
    return {
      /**
       * Specify that this control should have input focus when the page loads.
       */
      autofocus: {
        type: Boolean
      },

      /**
       * Stores the previous value of tabindex attribute of the disabled element
       * @private
       */
      _previousTabIndex: {
        type: Number
      },

      /**
       * If true, the user cannot interact with this element.
       */
      disabled: {
        type: Boolean,
        observer: '_disabledChanged',
        reflectToAttribute: true
      },

      /**
       * @private
       */
      _isShiftTabbing: {
        type: Boolean
      }
    };
  }

  /**
   * @protected
   */
  ready() {
    this.addEventListener('focusin', e => {
      if (e.composedPath()[0] === this) {
        // Only focus if the focus is received from somewhere outside
        if (!this.contains(e.relatedTarget)) {
          this._focus();
        }
      } else if (e.composedPath().indexOf(this.focusElement) !== -1 && !this.disabled) {
        this._setFocused(true);
      }
    });
    this.addEventListener('focusout', e => this._setFocused(false));

    // In super.ready() other 'focusin' and 'focusout' listeners might be
    // added, so we call it after our own ones to ensure they execute first.
    // Issue to watch out: when incorrect, <vaadin-combo-box> refocuses the
    // input field on iOS after “Done” is pressed.
    super.ready();

    // This fixes the bug in Firefox 61 (https://bugzilla.mozilla.org/show_bug.cgi?id=1472887)
    // where focusout event does not go out of shady DOM because composed property in the event is not true
    const ensureEventComposed = e => {
      if (!e.composed) {
        e.target.dispatchEvent(new CustomEvent(e.type, {
          bubbles: true,
          composed: true,
          cancelable: false
        }));
      }
    };
    this.shadowRoot.addEventListener('focusin', ensureEventComposed);
    this.shadowRoot.addEventListener('focusout', ensureEventComposed);

    this.addEventListener('keydown', e => {
      if (!e.defaultPrevented && e.keyCode === 9) {
        if (e.shiftKey) {
          // Flag is checked in _focus event handler.
          this._isShiftTabbing = true;
          HTMLElement.prototype.focus.apply(this);
          this._setFocused(false);
          // Event handling in IE is asynchronous and the flag is removed asynchronously as well
          setTimeout(() => this._isShiftTabbing = false, 0);
        } else {
          // Workaround for FF63-65 bug that causes the focus to get lost when
          // blurring a slotted component with focusable shadow root content
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1528686
          // TODO: Remove when safe
          const firefox = window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);
          if (firefox
            && parseFloat(firefox[1]) >= 63
            && parseFloat(firefox[1]) < 66
            && this.parentNode
            && this.nextSibling) {
            const fakeTarget = document.createElement('input');
            fakeTarget.style.position = 'absolute';
            fakeTarget.style.opacity = '0';
            fakeTarget.tabIndex = this.tabIndex;

            this.parentNode.insertBefore(fakeTarget, this.nextSibling);
            fakeTarget.focus();
            fakeTarget.addEventListener('focusout', () => this.parentNode.removeChild(fakeTarget));
          }
        }

      }
    });

    if (this.autofocus && !this.disabled) {
      window.requestAnimationFrame(() => {
        this._focus();
        this._setFocused(true);
        this.setAttribute('focus-ring', '');
      });
    }
  }

  /**
   * @protected
   */
  disconnectedCallback() {
    super.disconnectedCallback();

    // in non-Chrome browsers, blur does not fire on the element when it is disconnected.
    // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.
    if (this.hasAttribute('focused')) {
      this._setFocused(false);
    }
  }

  /**
   * @param {boolean} focused
   * @protected
   */
  _setFocused(focused) {
    if (focused) {
      this.setAttribute('focused', '');
    } else {
      this.removeAttribute('focused');
    }

    // focus-ring is true when the element was focused from the keyboard.
    // Focus Ring [A11ycasts]: https://youtu.be/ilj2P5-5CjI
    if (focused && keyboardActive) {
      this.setAttribute('focus-ring', '');
    } else {
      this.removeAttribute('focus-ring');
    }
  }

  /**
   * Any element extending this mixin is required to implement this getter.
   * It returns the actual focusable element in the component.
   * @return {Element | null | undefined}
   */
  get focusElement() {
    window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`);
    return this;
  }

  /**
   * @protected
   */
  _focus() {
    if (!this.focusElement || this._isShiftTabbing) {
      return;
    }

    this.focusElement.focus();
    this._setFocused(true);
  }

  /**
   * Moving the focus from the host element causes firing of the blur event what leads to problems in IE.
   * @private
   */
  focus() {
    if (!this.focusElement || this.disabled) {
      return;
    }

    this.focusElement.focus();
    this._setFocused(true);
  }

  /**
   * Native bluring in the host element does nothing because it does not have the focus.
   * In chrome it works, but not in FF.
   * @private
   */
  blur() {
    if (!this.focusElement) {
      return;
    }
    this.focusElement.blur();
    this._setFocused(false);
  }

  /**
   * @param {boolean} disabled
   * @private
   */
  _disabledChanged(disabled) {
    this.focusElement.disabled = disabled;
    if (disabled) {
      this.blur();
      this._previousTabIndex = this.tabindex;
      this.tabindex = -1;
      this.setAttribute('aria-disabled', 'true');
    } else {
      if (typeof this._previousTabIndex !== 'undefined') {
        this.tabindex = this._previousTabIndex;
      }
      this.removeAttribute('aria-disabled');
    }
  }

  /**
   * @param {number | null | undefined} tabindex
   * @private
   */
  _tabindexChanged(tabindex) {
    if (tabindex !== undefined) {
      this.focusElement.tabIndex = tabindex;
    }

    if (this.disabled && this.tabindex) {
      // If tabindex attribute was changed while checkbox was disabled
      if (this.tabindex !== -1) {
        this._previousTabIndex = this.tabindex;
      }
      this.tabindex = tabindex = undefined;
    }

    if (window.ShadyDOM) {
      this.setProperties({tabIndex: tabindex, tabindex: tabindex});
    }
  }

  /**
   * @protected
   */
  click() {
    if (!this.disabled) {
      super.click();
    }
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js ***!
  \***************************************************************************************************/
/*! exports provided: runIfDevelopmentMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runIfDevelopmentMode", function() { return runIfDevelopmentMode; });
const DEV_MODE_CODE_REGEXP =
  /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;

const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;

function isMinified() {
  function test() {
    /** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/
    return true;
  }
  return uncommentAndRun(test);
}

function isDevelopmentMode() {
  try {
    if (isForcedDevelopmentMode()) {
      return true;
    }

    if (!isLocalhost()) {
      return false;
    }

    if (FlowClients) {
      return !isFlowProductionMode();
    }

    return !isMinified();
  } catch (e) {
    // Some error in this code, assume production so no further actions will be taken
    return false;
  }
}

function isForcedDevelopmentMode() {
  return localStorage.getItem("vaadin.developmentmode.force");
}

function isLocalhost() {
  return (["localhost","127.0.0.1"].indexOf(window.location.hostname) >= 0);
}

function isFlowProductionMode() {
  if (FlowClients) {
    const productionModeApps = Object.keys(FlowClients)
      .map(key => FlowClients[key])
      .filter(client => client.productionMode);
    if (productionModeApps.length > 0) {
      return true;
    }
  }
  return false;
}

function uncommentAndRun(callback, args) {
  if (typeof callback !== 'function') {
    return;
  }

  const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());
  if (match) {
    try {
      // requires CSP: script-src 'unsafe-eval'
      callback = new Function(match[1]);
    } catch (e) {
      // eat the exception
      console.log('vaadin-development-mode-detector: uncommentAndRun() failed', e)
    }
  }

  return callback(args);
}

// A guard against polymer-modulizer removing the window.Vaadin
// initialization above.
window['Vaadin'] = window['Vaadin'] || {};

/**
 * Inspects the source code of the given `callback` function for
 * specially-marked _commented_ code. If such commented code is found in the
 * callback source, uncomments and runs that code instead of the callback
 * itself. Otherwise runs the callback as is.
 *
 * The optional arguments are passed into the callback / uncommented code,
 * the result is returned.
 *
 * See the `isMinified()` function source code in this file for an example.
 *
 */
const runIfDevelopmentMode = function(callback, args) {
  if (window.Vaadin.developmentMode) {
    return uncommentAndRun(callback, args);
  }
};

if (window.Vaadin.developmentMode === undefined) {
  window.Vaadin.developmentMode = isDevelopmentMode();
}


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-helper.js":
/*!************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-helper.js ***!
  \************************************************************************/
/*! exports provided: DirHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirHelper", function() { return DirHelper; });
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * Helper that provides a set of functions for RTL.
 */
class DirHelper {
  /**
   * Get the scroll type in the current browser view.
   *
   * @return {string} the scroll type. Possible values are `default|reverse|negative`
   */
  static detectScrollType() {
    const dummy = document.createElement('div');
    dummy.textContent = 'ABCD';
    dummy.dir = 'rtl';
    dummy.style.fontSize = '14px';
    dummy.style.width = '4px';
    dummy.style.height = '1px';
    dummy.style.position = 'absolute';
    dummy.style.top = '-1000px';
    dummy.style.overflow = 'scroll';
    document.body.appendChild(dummy);

    let cachedType = 'reverse';
    if (dummy.scrollLeft > 0) {
      cachedType = 'default';
    } else {
      dummy.scrollLeft = 2;
      if (dummy.scrollLeft < 2) {
        cachedType = 'negative';
      }
    }
    document.body.removeChild(dummy);
    return cachedType;
  }

  /**
   * Get the scrollLeft value of the element relative to the direction
   *
   * @param {string} scrollType type of the scroll detected with `detectScrollType`
   * @param {string} direction current direction of the element
   * @param {Element} element
   * @return {number} the scrollLeft value.
  */
  static getNormalizedScrollLeft(scrollType, direction, element) {
    const {scrollLeft} = element;
    if (direction !== 'rtl' || !scrollType) {
      return scrollLeft;
    }

    switch (scrollType) {
      case 'negative':
        return element.scrollWidth - element.clientWidth + scrollLeft;
      case 'reverse':
        return element.scrollWidth - element.clientWidth - scrollLeft;
    }
    return scrollLeft;
  }

  /**
   * Set the scrollLeft value of the element relative to the direction
   *
   * @param {string} scrollType type of the scroll detected with `detectScrollType`
   * @param {string} direction current direction of the element
   * @param {Element} element
   * @param {number} scrollLeft the scrollLeft value to be set
   */
  static setNormalizedScrollLeft(scrollType, direction, element, scrollLeft) {
    if (direction !== 'rtl' || !scrollType) {
      element.scrollLeft = scrollLeft;
      return;
    }

    switch (scrollType) {
      case 'negative':
        element.scrollLeft = element.clientWidth - element.scrollWidth + scrollLeft;
        break;
      case 'reverse':
        element.scrollLeft = element.scrollWidth - element.clientWidth - scrollLeft;
        break;
      default:
        element.scrollLeft = scrollLeft;
        break;
    }
  }
}




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-mixin.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-mixin.js ***!
  \***********************************************************************/
/*! exports provided: DirMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirMixin", function() { return DirMixin; });
/* harmony import */ var _vaadin_dir_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-dir-helper.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-helper.js");

/**
 * Array of Vaadin custom element classes that have been subscribed to the dir changes.
 */
const directionSubscribers = [];
const directionUpdater = function() {
  const documentDir = getDocumentDir();
  directionSubscribers.forEach(element => {
    alignDirs(element, documentDir);
  });
};

let scrollType;

const directionObserver = new MutationObserver(directionUpdater);
directionObserver.observe(document.documentElement, {attributes: true, attributeFilter: ['dir']});

const alignDirs = function(element, documentDir) {
  if (documentDir) {
    element.setAttribute('dir', documentDir);
  } else {
    element.removeAttribute('dir');
  }
};

const getDocumentDir = function() {
  return document.documentElement.getAttribute('dir');
};

/**
 * @polymerMixin
 */
const DirMixin = superClass => class VaadinDirMixin extends superClass {
  static get properties() {
    return {
      /**
       * @protected
       */
      dir: {
        type: String,
        readOnly: true
      }
    };
  }

  /** @protected */
  static finalize() {
    super.finalize();

    if (!scrollType) {
      scrollType = _vaadin_dir_helper_js__WEBPACK_IMPORTED_MODULE_0__["DirHelper"].detectScrollType();
    }
  }

  /** @protected */
  connectedCallback() {
    super.connectedCallback();

    if (!this.hasAttribute('dir')) {
      this.__subscribe();
      alignDirs(this, getDocumentDir());
    }
  }

  /** @protected */
  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name !== 'dir') {
      return;
    }

    // New value equals to the document direction and the element is not subscribed to the changes
    const newValueEqlDocDir = newValue === getDocumentDir() && directionSubscribers.indexOf(this) === -1;
    // Value was emptied and the element is not subscribed to the changes
    const newValueEmptied = !newValue && oldValue && directionSubscribers.indexOf(this) === -1;
    // New value is different and the old equals to document direction and the element is not subscribed to the changes
    const newDiffValue = newValue !== getDocumentDir() && oldValue === getDocumentDir();

    if (newValueEqlDocDir || newValueEmptied) {
      this.__subscribe();
      alignDirs(this, getDocumentDir());
    } else if (newDiffValue) {
      this.__subscribe(false);
    }
  }

  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.__subscribe(false);
    this.removeAttribute('dir');
  }

  /** @private */
  __subscribe(push = true) {
    if (push) {
      directionSubscribers.indexOf(this) === -1 &&
        directionSubscribers.push(this);
    } else {
      directionSubscribers.indexOf(this) > -1 &&
        directionSubscribers.splice(directionSubscribers.indexOf(this), 1);
    }
  }

  /**
   * @param {Element} element
   * @return {number}
   * @protected
   */
  __getNormalizedScrollLeft(element) {
    return _vaadin_dir_helper_js__WEBPACK_IMPORTED_MODULE_0__["DirHelper"].getNormalizedScrollLeft(scrollType, this.getAttribute('dir') || 'ltr', element);
  }

  /**
   * @param {Element} element
   * @param {number} scrollLeft
   * @protected
   */
  __setNormalizedScrollLeft(element, scrollLeft) {
    return _vaadin_dir_helper_js__WEBPACK_IMPORTED_MODULE_0__["DirHelper"].setNormalizedScrollLeft(scrollType, this.getAttribute('dir') || 'ltr', element, scrollLeft);
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js ***!
  \***************************************************************************/
/*! exports provided: ElementMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementMixin", function() { return ElementMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-dir-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-mixin.js");
/* harmony import */ var _vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js */ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js");






if (!window.Vaadin) {
  window['Vaadin'] = {};
}

/**
 * Array of Vaadin custom element classes that have been finalized.
 */
window['Vaadin'].registrations = window.Vaadin.registrations || [];

// Use the hack to prevent polymer-modulizer from converting to exports
window['Vaadin'].developmentModeCallback = window.Vaadin.developmentModeCallback || {};
window['Vaadin'].developmentModeCallback['vaadin-usage-statistics'] = function() {
  if (_vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_4__["usageStatistics"]) {
    Object(_vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_4__["usageStatistics"])();
  }
};

let statsJob;

const registered = new Set();

/**
 * @polymerMixin
 * @mixes DirMixin
 */
const ElementMixin = superClass => class VaadinElementMixin extends Object(_vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_3__["DirMixin"])(superClass) {
  /** @protected */
  static finalize() {
    super.finalize();

    const {is} = this;

    // Registers a class prototype for telemetry purposes.
    if (is && !registered.has(is)) {
      window.Vaadin.registrations.push(this);
      registered.add(is);

      if (window.Vaadin.developmentModeCallback) {
        statsJob = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(statsJob,
          _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["idlePeriod"], () => {
            window.Vaadin.developmentModeCallback['vaadin-usage-statistics']();
          }
        );
        Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["enqueueDebouncer"])(statsJob);
      }
    }
  }

  constructor() {
    super();
    if (document.doctype === null) {
      console.warn(
        'Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.'
      );
    }
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/all-imports.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/all-imports.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-grid.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid.js");
/* harmony import */ var _vaadin_grid_column_group_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-grid-column-group.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-group.js");
/* harmony import */ var _vaadin_grid_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-grid-filter.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter.js");
/* harmony import */ var _vaadin_grid_filter_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-grid-filter-column.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-column.js");
/* harmony import */ var _vaadin_grid_sorter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vaadin-grid-sorter.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sorter.js");
/* harmony import */ var _vaadin_grid_sort_column_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaadin-grid-sort-column.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-column.js");
/* harmony import */ var _vaadin_grid_selection_column_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaadin-grid-selection-column.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-column.js");
/* harmony import */ var _vaadin_grid_tree_toggle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vaadin-grid-tree-toggle.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-tree-toggle.js");
/* harmony import */ var _vaadin_grid_tree_column_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vaadin-grid-tree-column.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-tree-column.js");










/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/iron-list.js":
/*!***********************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/iron-list.js ***!
  \***********************************************************/
/*! exports provided: PolymerIronList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolymerIronList", function() { return PolymerIronList; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js */ "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class.js */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**

This is a fork of <iron-list> for <vaadin-grid>'s internal purposes only!
To update:
1. Get the most recent code from https://github.com/PolymerElements/iron-list/
2. Remove the  <dom-module id="iron-list"> to avoid collisions with actual <iron-list>
3. Change "Polymer({" to "window.PolymerIronList = Polymer.Class({" to expose the class
3.1. Add @namespace
4. Optional: Remove all properties and functions not needed by <vaadin-grid>
5. Profit!

*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/








var IOS = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);
var IOS_TOUCH_SCROLLING = IOS && IOS[1] >= 8;
var DEFAULT_PHYSICAL_COUNT = 3;
var ANIMATION_FRAME = _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_3__["animationFrame"];
var IDLE_TIME = _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_3__["idlePeriod"];
var MICRO_TASK = _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_3__["microTask"];

/**
 * @constructor
 */
const PolymerIronList = Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__["Class"])({

  behaviors: [
    _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"],
    _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronScrollTargetBehavior"]
  ],

  /**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both directions.
   */
  _ratio: 0.5,

  /**
   * The padding-top value for the list.
   */
  _scrollerPaddingTop: 0,

  /**
   * This value is the same as `scrollTop`.
   */
  _scrollPosition: 0,

  /**
   * The sum of the heights of all the tiles in the DOM.
   */
  _physicalSize: 0,

  /**
   * The average `offsetHeight` of the tiles observed till now.
   */
  _physicalAverage: 0,

  /**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */
  _physicalAverageCount: 0,

  /**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */
  _physicalTop: 0,

  /**
   * The number of items in the list.
   */
  _virtualCount: 0,

  /**
   * The estimated scroll height based on `_physicalAverage`
   */
  _estScrollHeight: 0,

  /**
   * The scroll height of the dom node
   */
  _scrollHeight: 0,

  /**
   * The height of the list. This is referred as the viewport in the context of list.
   */
  _viewportHeight: 0,

  /**
   * The width of the list. This is referred as the viewport in the context of list.
   */
  _viewportWidth: 0,

  /**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!TemplatizerNode>}
   */
  _physicalItems: null,

  /**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */
  _physicalSizes: null,

  /**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */
  _firstVisibleIndexVal: null,

  /**
   * A Polymer collection for the items.
   * @type {?Polymer.Collection}
   */
  _collection: null,

  /**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */
  _lastVisibleIndexVal: null,

  /**
   * The max number of pages to render. One page is equivalent to the height of the list.
   */
  _maxPages: 2,

  /**
   * The virtual index of the focused item.
   */
  _focusedVirtualIndex: -1,

  /**
   * The maximum items per row
   */
  _itemsPerRow: 1,

  /**
   * The height of the row in grid layout.
   */
  _rowHeight: 0,

  /**
   * The cost of stamping a template in ms.
   */
  _templateCost: 0,

  /**
   * The bottom of the physical content.
   */
  get _physicalBottom() {
    return this._physicalTop + this._physicalSize;
  },

  /**
   * The bottom of the scroll.
   */
  get _scrollBottom() {
    return this._scrollPosition + this._viewportHeight;
  },

  /**
   * The n-th item rendered in the last physical item.
   */
  get _virtualEnd() {
    return this._virtualStart + this._physicalCount - 1;
  },

  /**
   * The height of the physical content that isn't on the screen.
   */
  get _hiddenContentSize() {
    var size = this.grid ? this._physicalRows * this._rowHeight : this._physicalSize;
    return size - this._viewportHeight;
  },

  /**
   * The maximum scroll top value.
   */
  get _maxScrollTop() {
    return this._estScrollHeight - this._viewportHeight + this._scrollOffset;
  },

  /**
   * The largest n-th value for an item such that it can be rendered in `_physicalStart`.
   */
  get _maxVirtualStart() {
    var virtualCount = this._convertIndexToCompleteRow(this._virtualCount);
    return Math.max(0, virtualCount - this._physicalCount);
  },

  set _virtualStart(val) {
    val = this._clamp(val, 0, this._maxVirtualStart);
    if (this.grid) {
      val = val - (val % this._itemsPerRow);
    }
    this._virtualStartVal = val;
  },

  get _virtualStart() {
    return this._virtualStartVal || 0;
  },

  /**
   * The k-th tile that is at the top of the scrolling list.
   */
  set _physicalStart(val) {
    val = val % this._physicalCount;
    if (val < 0) {
      val = this._physicalCount + val;
    }
    if (this.grid) {
      val = val - (val % this._itemsPerRow);
    }
    this._physicalStartVal = val;
  },

  get _physicalStart() {
    return this._physicalStartVal || 0;
  },

  /**
   * The k-th tile that is at the bottom of the scrolling list.
   */
  get _physicalEnd() {
    return (this._physicalStart + this._physicalCount - 1) % this._physicalCount;
  },

  set _physicalCount(val) {
    this._physicalCountVal = val;
  },

  get _physicalCount() {
    return this._physicalCountVal || 0;
  },

  /**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */
  get _optPhysicalSize() {
    return this._viewportHeight === 0 ? Infinity : this._viewportHeight * this._maxPages;
  },

  /**
   * True if the current list is visible.
   */
  get _isVisible() {
    return Boolean(this.offsetWidth || this.offsetHeight);
  },

  /**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */
  get firstVisibleIndex() {
    var idx = this._firstVisibleIndexVal;
    if (idx == null) {
      var physicalOffset = this._physicalTop + this._scrollOffset;

      idx = this._iterateItems(function(pidx, vidx) {
        physicalOffset += this._getPhysicalSizeIncrement(pidx);

        if (physicalOffset > this._scrollPosition) {
          return this.grid ? vidx - (vidx % this._itemsPerRow) : vidx;
        }
        // Handle a partially rendered final row in grid mode
        if (this.grid && this._virtualCount - 1 === vidx) {
          return vidx - (vidx % this._itemsPerRow);
        }
      }) || 0;
      this._firstVisibleIndexVal = idx;
    }
    return idx;
  },

  /**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */
  get lastVisibleIndex() {
    var idx = this._lastVisibleIndexVal;
    if (idx == null) {
      if (this.grid) {
        idx = Math.min(this._virtualCount, this.firstVisibleIndex + this._estRowsInView * this._itemsPerRow - 1);
      } else {
        var physicalOffset = this._physicalTop + this._scrollOffset;
        this._iterateItems(function(pidx, vidx) {
          if (physicalOffset < this._scrollBottom) {
            idx = vidx;
          }
          physicalOffset += this._getPhysicalSizeIncrement(pidx);
        });
      }
      this._lastVisibleIndexVal = idx;
    }
    return idx;
  },

  get _scrollOffset() {
    return this._scrollerPaddingTop;
  },

  attached: function() {
    this._debounce('_render', this._render, ANIMATION_FRAME);
    // `iron-resize` is fired when the list is attached if the event is added
    // before attached causing unnecessary work.
    this.listen(this, 'iron-resize', '_resizeHandler');
  },

  detached: function() {
    this.unlisten(this, 'iron-resize', '_resizeHandler');
  },

  /**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */
  updateViewportBoundaries: function() {
    var styles = window.getComputedStyle(this);
    this._scrollerPaddingTop = this.scrollTarget === this ? 0 : parseInt(styles['padding-top'], 10);
    this._isRTL = Boolean(styles.direction === 'rtl');
    this._viewportWidth = this.$.items.offsetWidth;
    this._viewportHeight = this._scrollTargetHeight;
    this.grid && this._updateGridMetrics();
  },

  /**
   * Recycles the physical items when needed.
   */
  _scrollHandler: function() {
    var scrollTop = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop));
    var delta = scrollTop - this._scrollPosition;
    var isScrollingDown = delta >= 0;
    // Track the current scroll position.
    this._scrollPosition = scrollTop;
    // Clear indexes for first and last visible indexes.
    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null;
    // Random access.
    if (Math.abs(delta) > this._physicalSize && this._physicalSize > 0) {
      delta = delta - this._scrollOffset;
      var idxAdjustment = Math.round(delta / this._physicalAverage) * this._itemsPerRow;
      this._virtualStart = this._virtualStart + idxAdjustment;
      this._physicalStart = this._physicalStart + idxAdjustment;
      // Estimate new physical offset.
      this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;
      this._update();
    } else if (this._physicalCount > 0) {
      var reusables = this._getReusables(isScrollingDown);
      if (isScrollingDown) {
        this._physicalTop = reusables.physicalTop;
        this._virtualStart = this._virtualStart + reusables.indexes.length;
        this._physicalStart = this._physicalStart + reusables.indexes.length;
      } else {
        this._virtualStart = this._virtualStart - reusables.indexes.length;
        this._physicalStart = this._physicalStart - reusables.indexes.length;
      }
      this._update(reusables.indexes, isScrollingDown ? null : reusables.indexes);
      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, 0), MICRO_TASK);
    }
  },

  /**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */
  _getReusables: function(fromTop) {
    var ith, offsetContent, physicalItemHeight;
    var idxs = [];
    var protectedOffsetContent = this._hiddenContentSize * this._ratio;
    var virtualStart = this._virtualStart;
    var virtualEnd = this._virtualEnd;
    var physicalCount = this._physicalCount;
    var top = this._physicalTop + this._scrollOffset;
    var bottom = this._physicalBottom + this._scrollOffset;
    var scrollTop = this._scrollTop;
    var scrollBottom = this._scrollBottom;

    if (fromTop) {
      ith = this._physicalStart;
      offsetContent = scrollTop - top;
    } else {
      ith = this._physicalEnd;
      offsetContent = bottom - scrollBottom;
    }
    // eslint-disable-next-line no-constant-condition
    while (true) {
      physicalItemHeight = this._getPhysicalSizeIncrement(ith);
      offsetContent = offsetContent - physicalItemHeight;
      if (idxs.length >= physicalCount || offsetContent <= protectedOffsetContent) {
        break;
      }
      if (fromTop) {
        // Check that index is within the valid range.
        if (virtualEnd + idxs.length + 1 >= this._virtualCount) {
          break;
        }
        // Check that the index is not visible.
        if (top + physicalItemHeight >= scrollTop - this._scrollOffset) {
          break;
        }
        idxs.push(ith);
        top = top + physicalItemHeight;
        ith = (ith + 1) % physicalCount;
      } else {
        // Check that index is within the valid range.
        if (virtualStart - idxs.length <= 0) {
          break;
        }
        // Check that the index is not visible.
        if (top + this._physicalSize - physicalItemHeight <= scrollBottom) {
          break;
        }
        idxs.push(ith);
        top = top - physicalItemHeight;
        ith = (ith === 0) ? physicalCount - 1 : ith - 1;
      }
    }
    return {indexes: idxs, physicalTop: top - this._scrollOffset};
  },

  /**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */
  _update: function(itemSet, movingUp) {
    if ((itemSet && itemSet.length === 0) || this._physicalCount === 0) {
      return;
    }
    this._manageFocus();
    this._assignModels(itemSet);
    this._updateMetrics(itemSet);
    // Adjust offset after measuring.
    if (movingUp) {
      while (movingUp.length) {
        var idx = movingUp.pop();
        this._physicalTop -= this._getPhysicalSizeIncrement(idx);
      }
    }
    this._positionItems();
    this._updateScrollerSize();
  },

  _isClientFull: function() {
    return this._scrollBottom != 0 && this._physicalBottom - 1 >= this._scrollBottom &&
        this._physicalTop <= this._scrollPosition;
  },

  /**
   * Increases the pool size.
   */
  _increasePoolIfNeeded: function(count) {
    var nextPhysicalCount = this._clamp(this._physicalCount + count,
      DEFAULT_PHYSICAL_COUNT, this._virtualCount - this._virtualStart);
    nextPhysicalCount = this._convertIndexToCompleteRow(nextPhysicalCount);
    var delta = nextPhysicalCount - this._physicalCount;
    var nextIncrease = Math.round(this._physicalCount * 0.5);

    if (delta < 0) {
      return;
    }
    if (delta > 0) {
      var ts = window.performance.now();
      // Concat arrays in place.
      [].push.apply(this._physicalItems, this._createPool(delta));
      // Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't support it.
      for (var i = 0; i < delta; i++) {
        this._physicalSizes.push(0);
      }
      this._physicalCount = this._physicalCount + delta;
      // Update the physical start if it needs to preserve the model of the focused item.
      // In this situation, the focused item is currently rendered and its model would
      // have changed after increasing the pool if the physical start remained unchanged.
      if (this._physicalStart > this._physicalEnd &&
          this._isIndexRendered(this._focusedVirtualIndex) &&
          this._getPhysicalIndex(this._focusedVirtualIndex) < this._physicalEnd) {
        this._physicalStart = this._physicalStart + delta;
      }
      this._update();
      this._templateCost = (window.performance.now() - ts) / delta;
      nextIncrease = Math.round(this._physicalCount * 0.5);
    }
    // The upper bounds is not fixed when dealing with a grid that doesn't
    // fill it's last row with the exact number of items per row.
    if (this._virtualEnd >= this._virtualCount - 1 || nextIncrease === 0) {
      // Do nothing.
    } else if (!this._isClientFull()) {
      this._debounce(
        '_increasePoolIfNeeded',
        this._increasePoolIfNeeded.bind(
          this,
          nextIncrease
        ), MICRO_TASK);
    } else if (this._physicalSize < this._optPhysicalSize) {
      // Yield and increase the pool during idle time until the physical size is optimal.
      this._debounce(
        '_increasePoolIfNeeded',
        this._increasePoolIfNeeded.bind(
          this,
          this._clamp(Math.round(50 / this._templateCost), 1, nextIncrease)
        ), IDLE_TIME);
    }
  },

  /**
   * Renders the a new list.
   */
  _render: function() {
    if (!this.isAttached || !this._isVisible) {
      return;
    }
    if (this._physicalCount !== 0) {
      var reusables = this._getReusables(true);
      this._physicalTop = reusables.physicalTop;
      this._virtualStart = this._virtualStart + reusables.indexes.length;
      this._physicalStart = this._physicalStart + reusables.indexes.length;
      this._update(reusables.indexes);
      this._update();
      this._increasePoolIfNeeded(0);
    } else if (this._virtualCount > 0) {
      // Initial render
      this.updateViewportBoundaries();
      this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT);
    }
  },

  /**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */
  _itemsChanged: function(change) {
    if (change.path === 'items') {
      this._virtualStart = 0;
      this._physicalTop = 0;
      this._virtualCount = this.items ? this.items.length : 0;
      this._collection = this.items && undefined ?
        undefined.get(this.items) : null;
      this._physicalIndexForKey = {};
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      this._physicalCount = this._physicalCount || 0;
      this._physicalItems = this._physicalItems || [];
      this._physicalSizes = this._physicalSizes || [];
      this._physicalStart = 0;
      if (this._scrollTop > this._scrollOffset) {
        this._resetScrollPosition(0);
      }
      this._removeFocusedItem();
      this._debounce('_render', this._render, ANIMATION_FRAME);
    }
  },

  /**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */
  _iterateItems: function(fn, itemSet) {
    var pidx, vidx, rtn, i;

    if (arguments.length === 2 && itemSet) {
      for (i = 0; i < itemSet.length; i++) {
        pidx = itemSet[i];
        vidx = this._computeVidx(pidx);
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    } else {
      pidx = this._physicalStart;
      vidx = this._virtualStart;
      for (; pidx < this._physicalCount; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
      for (pidx = 0; pidx < this._physicalStart; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    }
  },

  /**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */
  _computeVidx: function(pidx) {
    if (pidx >= this._physicalStart) {
      return this._virtualStart + (pidx - this._physicalStart);
    }
    return this._virtualStart + (this._physicalCount - this._physicalStart) + pidx;
  },

  /**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */
  _updateMetrics: function(itemSet) {
    // Make sure we distributed all the physical items
    // so we can measure them.
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_5__["flush"])();

    var newPhysicalSize = 0;
    var oldPhysicalSize = 0;
    var prevAvgCount = this._physicalAverageCount;
    var prevPhysicalAvg = this._physicalAverage;

    this._iterateItems(function(pidx, vidx) {
      oldPhysicalSize += this._physicalSizes[pidx];
      this._physicalSizes[pidx] = this._physicalItems[pidx].offsetHeight;
      newPhysicalSize += this._physicalSizes[pidx];
      this._physicalAverageCount += this._physicalSizes[pidx] ? 1 : 0;
    }, itemSet);

    if (this.grid) {
      this._updateGridMetrics();
      this._physicalSize = Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
    } else {
      oldPhysicalSize = (this._itemsPerRow === 1) ?
        oldPhysicalSize :
        Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
      this._physicalSize = this._physicalSize + newPhysicalSize - oldPhysicalSize;
      this._itemsPerRow = 1;
    }
    // Update the average if it measured something.
    if (this._physicalAverageCount !== prevAvgCount) {
      this._physicalAverage = Math.round(
        ((prevPhysicalAvg * prevAvgCount) + newPhysicalSize) /
        this._physicalAverageCount);
    }
  },

  /**
   * Updates the position of the physical items.
   */
  _positionItems: function() {
    this._adjustScrollPosition();

    var y = this._physicalTop;

    this._iterateItems(function(pidx, vidx) {
      this.translate3d(0, y + 'px', 0, this._physicalItems[pidx]);
      y += this._physicalSizes[pidx];
    });
  },

  _getPhysicalSizeIncrement: function(pidx) {
    if (!this.grid) {
      return this._physicalSizes[pidx];
    }
    if (this._computeVidx(pidx) % this._itemsPerRow !== this._itemsPerRow - 1) {
      return 0;
    }
    return this._rowHeight;
  },

  /**
   * Adjusts the scroll position when it was overestimated.
   */
  _adjustScrollPosition: function() {
    var deltaHeight = this._virtualStart === 0 ? this._physicalTop : Math.min(this._scrollPosition + this._physicalTop, 0);
    // Note: the delta can be positive or negative.
    if (deltaHeight !== 0) {
      this._physicalTop = this._physicalTop - deltaHeight;
      var scrollTop = this._scrollTop;
      // juking scroll position during interial scrolling on iOS is no bueno
      if (!IOS_TOUCH_SCROLLING && scrollTop > 0) {
        this._resetScrollPosition(scrollTop - deltaHeight);
      }
    }
  },

  /**
   * Sets the position of the scroll.
   */
  _resetScrollPosition: function(pos) {
    if (this.scrollTarget && pos >= 0) {
      this._scrollTop = pos;
      this._scrollPosition = this._scrollTop;
    }
  },

  /**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */
  _updateScrollerSize: function(forceUpdate) {
    if (this.grid) {
      this._estScrollHeight = this._virtualRowCount * this._rowHeight;
    } else {
      this._estScrollHeight = (this._physicalBottom +
          Math.max(this._virtualCount - this._physicalCount - this._virtualStart, 0) * this._physicalAverage);
    }
    forceUpdate = forceUpdate || this._scrollHeight === 0;
    forceUpdate = forceUpdate || this._scrollPosition >= this._estScrollHeight - this._physicalSize;
    forceUpdate = forceUpdate || this.grid && this.$.items.style.height < this._estScrollHeight;
    // Amortize height adjustment, so it won't trigger large repaints too often.
    if (forceUpdate || Math.abs(this._estScrollHeight - this._scrollHeight) >= this._viewportHeight) {
      this.$.items.style.height = this._estScrollHeight + 'px';
      this._scrollHeight = this._estScrollHeight;
    }
  },

  /**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */
  scrollToIndex: function(idx) {
    if (typeof idx !== 'number' || idx < 0 || idx > this.items.length - 1) {
      return;
    }
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_5__["flush"])();
    // Items should have been rendered prior scrolling to an index.
    if (this._physicalCount === 0) {
      return;
    }
    idx = this._clamp(idx, 0, this._virtualCount - 1);
    // Update the virtual start only when needed.
    if (!this._isIndexRendered(idx) || idx >= this._maxVirtualStart) {
      this._virtualStart = this.grid ? (idx - this._itemsPerRow * 2) : (idx - 1);
    }
    this._manageFocus();
    this._assignModels();
    this._updateMetrics();
    // Estimate new physical offset.
    this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;

    var currentTopItem = this._physicalStart;
    var currentVirtualItem = this._virtualStart;
    var targetOffsetTop = 0;
    var hiddenContentSize = this._hiddenContentSize;
    // scroll to the item as much as we can.
    while (currentVirtualItem < idx && targetOffsetTop <= hiddenContentSize) {
      targetOffsetTop = targetOffsetTop + this._getPhysicalSizeIncrement(currentTopItem);
      currentTopItem = (currentTopItem + 1) % this._physicalCount;
      currentVirtualItem++;
    }
    this._updateScrollerSize(true);
    this._positionItems();
    this._resetScrollPosition(this._physicalTop + this._scrollOffset + targetOffsetTop);
    this._increasePoolIfNeeded(0);
    // clear cached visible index.
    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null;
  },

  /**
   * Reset the physical average and the average count.
   */
  _resetAverage: function() {
    this._physicalAverage = 0;
    this._physicalAverageCount = 0;
  },

  /**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */
  _resizeHandler: function() {
    this._debounce('_render', function() {
      // clear cached visible index.
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      // Skip the resize event on touch devices when the address bar slides up.
      this.updateViewportBoundaries();
      if (this._isVisible) {
        // Reinstall the scroll event listener.
        this.toggleScrollListener(true);
        this._resetAverage();
        this._render();
      } else {
        // Uninstall the scroll event listener.
        this.toggleScrollListener(false);
      }
    }, ANIMATION_FRAME);
  },

  /**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */
  _convertIndexToCompleteRow: function(idx) {
    // when grid == false _itemPerRow can be unset.
    this._itemsPerRow = this._itemsPerRow || 1;
    return this.grid ? Math.ceil(idx / this._itemsPerRow) * this._itemsPerRow : idx;
  },

  _isIndexRendered: function(idx) {
    return idx >= this._virtualStart && idx <= this._virtualEnd;
  },

  _getPhysicalIndex: function(vidx) {
    return (this._physicalStart + (vidx - this._virtualStart)) % this._physicalCount;
  },

  _clamp: function(v, min, max) {
    return Math.min(max, Math.max(min, v));
  },

  _debounce: function(name, cb, asyncModule) {
    this._debouncers = this._debouncers || {};
    this._debouncers[name] = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__["Debouncer"].debounce(
      this._debouncers[name],
      asyncModule,
      cb.bind(this));
    Object(_polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__["enqueueDebouncer"])(this._debouncers[name]);
  }

});


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-a11y-mixin.js":
/*!************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-a11y-mixin.js ***!
  \************************************************************************/
/*! exports provided: A11yMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A11yMixin", function() { return A11yMixin; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */
const A11yMixin = superClass => class A11yMixin extends superClass {
  static get observers() {
    return [
      '_a11yUpdateGridSize(size, _columnTree, _columnTree.*)'
    ];
  }

  /** @private */
  _a11yGetHeaderRowCount(_columnTree) {
    return _columnTree.filter(level => level.some(col => col._headerTemplate || col.headerRenderer || col.path || col.header)).length;
  }

  /** @private */
  _a11yGetFooterRowCount(_columnTree) {
    return _columnTree.filter(level => level.some(col => col._headerTemplate || col.headerRenderer)).length;
  }

  /** @private */
  _a11yUpdateGridSize(size, _columnTree) {
    if (size === undefined || _columnTree === undefined) {
      return;
    }

    const bodyColumns = _columnTree[_columnTree.length - 1];
    this.$.table.setAttribute(
      'aria-rowcount',
      size + this._a11yGetHeaderRowCount(_columnTree) + this._a11yGetFooterRowCount(_columnTree)
    );
    this.$.table.setAttribute('aria-colcount', bodyColumns && bodyColumns.length || 0);

    this._a11yUpdateHeaderRows();
    this._a11yUpdateFooterRows();
  }

  /** @protected */
  _a11yUpdateHeaderRows() {
    Array.from(this.$.header.children).forEach((headerRow, index) =>
      headerRow.setAttribute('aria-rowindex', index + 1)
    );
  }

  /** @protected */
  _a11yUpdateFooterRows() {
    Array.from(this.$.footer.children).forEach((footerRow, index) =>
      footerRow.setAttribute(
        'aria-rowindex',
        this._a11yGetHeaderRowCount(this._columnTree) + this.size + index + 1
      )
    );
  }

  /**
   * @param {!HTMLElement} row
   * @param {number} index
   * @protected
   */
  _a11yUpdateRowRowindex(row, index) {
    row.setAttribute('aria-rowindex', index + this._a11yGetHeaderRowCount(this._columnTree) + 1);
  }

  /**
   * @param {!HTMLElement} row
   * @param {boolean} selected
   * @protected
   */
  _a11yUpdateRowSelected(row, selected) {
    // Jaws reads selection only for rows, NVDA only for cells
    row.setAttribute('aria-selected', Boolean(selected));
    Array.from(row.children).forEach(cell =>
      cell.setAttribute('aria-selected', Boolean(selected))
    );
  }

  /**
   * @param {!HTMLElement} row
   * @param {number} level
   * @protected
   */
  _a11yUpdateRowLevel(row, level) {
    row.setAttribute('aria-level', level + 1);
  }

  /**
   * @param {!HTMLElement} row
   * @param {boolean} detailsOpened
   * @protected
   */
  _a11yUpdateRowDetailsOpened(row, detailsOpened) {
    Array.from(row.children).forEach(cell => {
      if (typeof detailsOpened === 'boolean') {
        cell.setAttribute('aria-expanded', detailsOpened);
      } else {
        if (cell.hasAttribute('aria-expanded')) {
          cell.removeAttribute('aria-expanded');
        }
      }
    });
  }

  /**
   * @param {!HTMLElement} row
   * @param {!HTMLElement} detailsCell
   * @protected
   */
  _a11ySetRowDetailsCell(row, detailsCell) {
    Array.from(row.children).forEach(cell => {
      if (cell !== detailsCell) {
        cell.setAttribute('aria-controls', detailsCell.id);
      }
    });
  }

  /**
   * @param {!HTMLElement} row
   * @param {number} colspan
   * @protected
   */
  _a11yUpdateCellColspan(cell, colspan) {
    cell.setAttribute('aria-colspan', Number(colspan));
  }

  /** @protected */
  _a11yUpdateSorters() {
    Array.from(this.querySelectorAll('vaadin-grid-sorter')).forEach(sorter => {
      let cellContent = sorter.parentNode;
      while (cellContent && cellContent.localName !== 'vaadin-grid-cell-content') {
        cellContent = cellContent.parentNode;
      }
      if (cellContent && cellContent.assignedSlot) {
        const cell = cellContent.assignedSlot.parentNode;
        cell.setAttribute('aria-sort', {
          'asc': 'ascending',
          'desc': 'descending'
        }[String(sorter.direction)] || 'none');
      }
    });
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-active-item-mixin.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-active-item-mixin.js ***!
  \*******************************************************************************/
/*! exports provided: ActiveItemMixin, isFocusable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveItemMixin", function() { return ActiveItemMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFocusable", function() { return isFocusable; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */
const ActiveItemMixin = superClass => class ActiveItemMixin extends superClass {

  static get properties() {
    return {
      /**
       * The item user has last interacted with. Turns to `null` after user deactivates
       * the item by re-interacting with the currently active item.
       * @type {GridItem}
       */
      activeItem: {
        type: Object,
        notify: true,
        value: null
      }
    };
  }

  ready() {
    super.ready();

    this.$.scroller.addEventListener('click', this._onClick.bind(this));
    this.addEventListener('cell-activate', this._activateItem.bind(this));
  }

  /** @private */
  _activateItem(e) {
    const model = e.detail.model;
    const clickedItem = model ? model.item : null;

    if (clickedItem) {
      this.activeItem = !this._itemsEqual(this.activeItem, clickedItem) ? clickedItem : null;
    }
  }

  /**
   * We need to listen to click instead of tap because on mobile safari, the
   * document.activeElement has not been updated (focus has not been shifted)
   * yet at the point when tap event is being executed.
   * @param {!MouseEvent} e
   * @protected
   */
  _onClick(e) {
    if (e.defaultPrevented) {
      // Something has handled this click already, e. g., <vaadin-grid-sorter>
      return;
    }

    const path = e.composedPath();
    const cell = path[path.indexOf(this.$.table) - 3];
    if (!cell || cell.getAttribute('part').indexOf('details-cell') > -1) {
      return;
    }
    const cellContent = cell._content;

    const activeElement = this.getRootNode().activeElement;
    const cellContentHasFocus = cellContent.contains(activeElement) &&
      // MSIE bug: flex children receive focus. Make type & attributes check.
      (!this._ie || this._isFocusable(activeElement));
    if (!cellContentHasFocus && !this._isFocusable(e.target)) {
      this.dispatchEvent(new CustomEvent('cell-activate', {detail: {
        model: this.__getRowModel(cell.parentElement)
      }}));
    }
  }

  /**
   * @param {!Element} target
   * @return {boolean}
   * @protected
   */
  _isFocusable(target) {
    return isFocusable(target);
  }
};

/**
 * @param {!Element} target
 * @return {boolean}
 * @protected
 */
const isFocusable = (target) => {
  if (!target.parentNode) {
    return false;
  }
  const focusables = Array.from(target.parentNode
    .querySelectorAll('[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]'))
    .filter(element => element.getAttribute('part') !== 'cell body-cell');

  const isFocusableElement = focusables.indexOf(target) !== -1;
  return !target.disabled && isFocusableElement;
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-array-data-provider-mixin.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-array-data-provider-mixin.js ***!
  \***************************************************************************************/
/*! exports provided: ArrayDataProviderMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataProviderMixin", function() { return ArrayDataProviderMixin; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/


/**
 * @polymerMixin
 */
const ArrayDataProviderMixin = superClass => class ArrayDataProviderMixin extends superClass {

  static get properties() {

    return {
      /**
       * An array containing the items which will be stamped to the column template
       * instances.
       *
       * @type {Array<!GridItem> | undefined}
       */
      items: Array

    };
  }

  static get observers() {
    return [
      '_itemsChanged(items, items.*, isAttached)'
    ];
  }

  /** @private */
  _itemsChanged(items, splices, isAttached) {
    if (!isAttached) {
      return;
    }
    if (!Array.isArray(items)) {
      if (items === undefined || items === null) {
        this.size = 0;
      }
      if (this.dataProvider === this._arrayDataProvider) {
        this.dataProvider = undefined;
      }
      return;
    }

    this.size = items.length;
    this.dataProvider = this.dataProvider || this._arrayDataProvider;
    this.clearCache();
    this._ensureFirstPageLoaded();
  }

  /**
   * @param {GridDataProviderParams} opts
   * @param {GridDataProviderCallback} cb
   * @protected
   */
  _arrayDataProvider(opts, cb) {
    let items = (Array.isArray(this.items) ? this.items : []).slice(0);

    if (this._filters && this._checkPaths(this._filters, 'filtering', items)) {
      items = this._filter(items);
    }

    this.size = items.length;

    if (opts.sortOrders.length && this._checkPaths(this._sorters, 'sorting', items)) {
      items = items.sort(this._multiSort.bind(this));
    }

    const start = opts.page * opts.pageSize;
    const end = start + opts.pageSize;
    const slice = items.slice(start, end);
    cb(slice, items.length);
  }

  /**
   * Check array of filters/sorters for paths validity, console.warn invalid items
   * @param {!Array<!GridFilter | !GridSorter>} arrayToCheck The array of filters/sorters to check
   * @param {string} action The name of action to include in warning (filtering, sorting)
   * @param {!Array<!GridItem>} items
   * @protected
   */
  _checkPaths(arrayToCheck, action, items) {
    if (!items.length) {
      return false;
    }

    let result = true;

    for (var i in arrayToCheck) {
      const path = arrayToCheck[i].path;

      // skip simple paths
      if (!path || path.indexOf('.') === -1) {
        continue;
      }

      const parentProperty = path.replace(/\.[^\.]*$/, ''); // a.b.c -> a.b
      if (_polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(parentProperty, items[0]) === undefined) {
        console.warn(`Path "${path}" used for ${action} does not exist in all of the items, ${action} is disabled.`);
        result = false;
      }
    }

    return result;
  }

  /**
   * @param {unknown} a
   * @param {unknown} b
   * @return {number}
   * @protected
   */
  _multiSort(a, b) {
    return this._sorters.map(sort => {
      if (sort.direction === 'asc') {
        return this._compare(_polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(sort.path, a), _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(sort.path, b));
      } else if (sort.direction === 'desc') {
        return this._compare(_polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(sort.path, b), _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(sort.path, a));
      }
      return 0;
    }).reduce((p, n) => {
      return p ? p : n;
    }, 0);
  }

  /**
   * @param {unknown} value
   * @return {string}
   * @protected
   */
  _normalizeEmptyValue(value) {
    if ([undefined, null].indexOf(value) >= 0) {
      return '';
    } else if (isNaN(value)) {
      return value.toString();
    } else {
      return value;
    }
  }

  /**
   * @param {unknown} a
   * @param {unknown} b
   * @return {number}
   * @protected
   */
  _compare(a, b) {
    a = this._normalizeEmptyValue(a);
    b = this._normalizeEmptyValue(b);

    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

  /**
   * @param {!Array<!GridItem>} items
   * @return {!Array<!GridItem>}
   * @protected
   */
  _filter(items) {
    return items.filter((item, index) => {
      return this._filters.filter(filter => {
        const value = this._normalizeEmptyValue(_polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(filter.path, item));
        const filterValueLowercase = this._normalizeEmptyValue(filter.value).toString().toLowerCase();
        return value.toString().toLowerCase().indexOf(filterValueLowercase) === -1;
      }).length === 0;
    });
  }

};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-group.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-group.js ***!
  \**************************************************************************/
/*! exports provided: GridColumnGroupElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridColumnGroupElement", function() { return GridColumnGroupElement; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js */ "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js");
/* harmony import */ var _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-grid-column.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js");
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/






/**
 * A `<vaadin-grid-column-group>` is used to make groups of columns in `<vaadin-grid>` and
 * to configure additional headers and footers.
 *
 * Groups can be nested to create complex header and footer configurations.
 *
 * The `class` attribute is used to differentiate header and footer templates.
 *
 * #### Example:
 * ```html
 * <vaadin-grid-column-group resizable>
 *  <template class="header">Name</template>
 *
 *  <vaadin-grid-column>
 *    <template class="header">First</template>
 *    <template>[[item.name.first]]</template>
 *  </vaadin-grid-column>
 *  <vaadin-grid-column>
 *    <template class="header">Last</template>
 *    <template>[[item.name.last]]</template>
 *  </vaadin-grid-column>
 * </vaadin-grid-column-group>
 * ```
 *
 * @extends PolymerElement
 * @mixes ColumnBaseMixin
 */
class GridColumnGroupElement extends Object(_vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_3__["ColumnBaseMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {

  static get is() {
    return 'vaadin-grid-column-group';
  }

  static get properties() {
    return {
      /** @private */
      _childColumns: {
        value: function() {
          return this._getChildColumns(this);
        }
      },

      /**
       * Flex grow ratio for the column group as the sum of the ratios of its child columns.
       * @attr {number} flex-grow
       */
      flexGrow: {
        type: Number,
        readOnly: true
      },

      /**
       * Width of the column group as the sum of the widths of its child columns.
       */
      width: {
        type: String,
        readOnly: true
      },

      /** @private */
      _visibleChildColumns: Array,

      /** @private */
      _colSpan: Number,

      /** @private */
      _rootColumns: Array
    };
  }

  static get observers() {
    return [
      '_updateVisibleChildColumns(_childColumns)',
      '_childColumnsChanged(_childColumns)',
      '_groupFrozenChanged(frozen, _rootColumns)',
      '_groupHiddenChanged(hidden, _rootColumns)',
      '_visibleChildColumnsChanged(_visibleChildColumns)',
      '_colSpanChanged(_colSpan, _headerCell, _footerCell)',
      '_groupOrderChanged(_order, _rootColumns)',
      '_groupReorderStatusChanged(_reorderStatus, _rootColumns)',
      '_groupResizableChanged(resizable, _rootColumns)'
    ];
  }

  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    this._addNodeObserver();
    this._updateFlexAndWidth();
  }

  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    this._observer && this._observer.disconnect();
  }

  /**
   * @param {string} path
   * @param {unknown=} value
   * @protected
   */
  _columnPropChanged(path, value) {
    if (path === 'hidden') {
      this._preventHiddenCascade = true;
      this._updateVisibleChildColumns(this._childColumns);
      this._preventHiddenCascade = false;
    }

    if (/flexGrow|width|hidden|_childColumns/.test(path)) {
      this._updateFlexAndWidth();
    }

    if (path === 'frozen') {
      // Don’t unfreeze the frozen group because of a non-frozen child
      this.frozen = this.frozen || value;
    }

    if (path === 'lastFrozen') {
      // Don’t unfreeze the frozen group because of a non-frozen child
      this._lastFrozen = this._lastFrozen || value;
    }
  }

  /** @private */
  _groupOrderChanged(order, rootColumns) {
    if (rootColumns) {
      const _rootColumns = rootColumns.slice(0);

      if (!order) {
        _rootColumns.forEach(column => column._order = 0);
        return;
      }
      // The parent column order number cascades downwards to it's children
      // so that the resulting order numbering constructs as follows:
      // [             1000              ]
      // [     1100    ] | [     1200    ]
      // [1110] | [1120] | [1210] | [1220]

      // Trailing zeros are counted so we know the level on which we're working on.
      const trailingZeros = /(0+)$/.exec(order).pop().length;

      // In an unlikely situation where a group has more than 9 child columns,
      // the child scope must have 1 digit less...
      const childCountDigits = ~~(Math.log(rootColumns.length) / Math.log(Math.LN10)) + 1;

      // Final scope for the child columns needs to mind both factors.
      const scope = Math.pow(10, trailingZeros - childCountDigits);


      if (_rootColumns[0] && _rootColumns[0]._order) {
        _rootColumns.sort((a, b) => a._order - b._order);
      }

      _rootColumns.forEach((column, index) => column._order = order + ((index + 1) * scope));
    }
  }

  /** @private */
  _groupReorderStatusChanged(reorderStatus, rootColumns) {
    if (reorderStatus === undefined || rootColumns === undefined) {
      return;
    }

    rootColumns.forEach(column => column._reorderStatus = reorderStatus);
  }

  /** @private */
  _groupResizableChanged(resizable, rootColumns) {
    if (resizable === undefined || rootColumns === undefined) {
      return;
    }

    rootColumns.forEach(column => column.resizable = resizable);
  }

  /** @private */
  _updateVisibleChildColumns(childColumns) {
    this._visibleChildColumns = Array.prototype.filter.call(childColumns, col => !col.hidden);
  }

  /** @private */
  _childColumnsChanged(childColumns) {
    if (!this._autoHidden && this.hidden) {
      Array.prototype.forEach.call(childColumns, column => column.hidden = true);
      this._updateVisibleChildColumns(childColumns);
    }
  }

  /** @protected */
  _updateFlexAndWidth() {
    if (!this._visibleChildColumns) {
      return;
    }

    if (this._visibleChildColumns.length) {
      this._setWidth('calc(' + Array.prototype
        .reduce.call(this._visibleChildColumns, (prev, curr) => prev += ' + ' + (curr.width || '0px')
          .replace('calc', ''), '')
        .substring(3) + ')');
    } else {
      this._setWidth('0px');
    }

    this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns, (prev, curr) => prev + curr.flexGrow, 0));
  }

  /** @private */
  _groupFrozenChanged(frozen, rootColumns) {
    if (rootColumns === undefined || frozen === undefined) {
      return;
    }

    // Don’t propagate the default `false` value.
    if (frozen !== false) {
      Array.from(rootColumns).forEach(col => col.frozen = frozen);
    }
  }

  /** @private */
  _groupHiddenChanged(hidden, rootColumns) {
    if (rootColumns && !this._preventHiddenCascade) {
      this._ignoreVisibleChildColumns = true;
      rootColumns.forEach(column => column.hidden = hidden);
      this._ignoreVisibleChildColumns = false;
    }

    this._columnPropChanged('hidden');
  }

  /** @private */
  _visibleChildColumnsChanged(visibleChildColumns) {
    this._colSpan = visibleChildColumns.length;

    if (!this._ignoreVisibleChildColumns) {
      if (visibleChildColumns.length === 0) {
        this._autoHidden = this.hidden = true;
      } else if (this.hidden && this._autoHidden) {
        this._autoHidden = this.hidden = false;
      }
    }
  }

  /** @private */
  _colSpanChanged(colSpan, headerCell, footerCell) {
    if (headerCell) {
      headerCell.setAttribute('colspan', colSpan);
      this._grid && this._grid._a11yUpdateCellColspan(headerCell, colSpan);
    }
    if (footerCell) {
      footerCell.setAttribute('colspan', colSpan);
      this._grid && this._grid._a11yUpdateCellColspan(footerCell, colSpan);
    }
  }

  /**
   * @param {!GridColumnGroupElement} el
   * @return {!Array<!GridColumnElement>}
   * @protected
   */
  _getChildColumns(el) {
    return _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_2__["FlattenedNodesObserver"].getFlattenedNodes(el).filter(this._isColumnElement);
  }

  /** @private */
  _addNodeObserver() {
    this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_2__["FlattenedNodesObserver"](this, info => {
      if (info.addedNodes.filter(this._isColumnElement).length > 0 ||
        info.removedNodes.filter(this._isColumnElement).length > 0) {

        this._preventHiddenCascade = true;
        this._rootColumns = this._getChildColumns(this);
        this._childColumns = this._rootColumns;
        this._preventHiddenCascade = false;

        // Update the column tree with microtask timing to avoid shady style scope issues
        _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["microTask"].run(() => {
          this._grid && this._grid._updateColumnTree && this._grid._updateColumnTree();
        });
      }
    });
    this._observer.flush();
  }

  /**
   * @param {!Node} node
   * @return {boolean}
   * @protected
   */
  _isColumnElement(node) {
    return node.nodeType === Node.ELEMENT_NODE && /\bcolumn\b/.test(node.localName);
  }
}

customElements.define(GridColumnGroupElement.is, GridColumnGroupElement);



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-reordering-mixin.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-reordering-mixin.js ***!
  \*************************************************************************************/
/*! exports provided: ColumnReorderingMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnReorderingMixin", function() { return ColumnReorderingMixin; });
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/settings.js */ "./node_modules/@polymer/polymer/lib/utils/settings.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/






/**
 * @polymerMixin
 */
const ColumnReorderingMixin = superClass => class ColumnReorderingMixin extends Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_0__["GestureEventListeners"])(superClass) {

  static get properties() {
    return {
      /**
       * Set to true to allow column reordering.
       * @attr {boolean} column-reordering-allowed
       * @type {boolean}
       */
      columnReorderingAllowed: {
        type: Boolean,
        value: false
      },

      /** @private */
      _orderBaseScope: {
        type: Number,
        value: 10000000
      }
    };
  }

  static get observers() {
    return [
      '_updateOrders(_columnTree, _columnTree.*)'
    ];
  }

  ready() {
    super.ready();
    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_1__["addListener"])(this, 'track', this._onTrackEvent);
    this._reorderGhost = this.shadowRoot.querySelector('[part="reorder-ghost"]');

    this.addEventListener('touchstart', this._onTouchStart.bind(this));
    this.addEventListener('touchmove', this._onTouchMove.bind(this));
    this.addEventListener('touchend', this._onTouchEnd.bind(this));
    this.addEventListener('contextmenu', this._onContextMenu.bind(this));
  }

  /** @private */
  _onContextMenu(e) {
    if (this.hasAttribute('reordering')) {
      e.preventDefault();
    }
  }

  /** @private */
  _onTouchStart(e) {
    // Touch event, delay activation by 100ms
    this._startTouchReorderTimeout = setTimeout(() => {
      this._onTrackStart({
        detail: {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        }
      });
    }, 100);
  }

  /** @private */
  _onTouchMove(e) {
    if (this._draggedColumn) {
      e.preventDefault();
    }
    clearTimeout(this._startTouchReorderTimeout);
  }

  /** @private */
  _onTouchEnd() {
    clearTimeout(this._startTouchReorderTimeout);
    this._onTrackEnd();
  }

  /** @private */
  _onTrackEvent(e) {
    if (e.detail.state === 'start') {
      const path = e.composedPath();
      const headerCell = path[path.indexOf(this.$.header) - 2];
      if (!headerCell || !headerCell._content) {
        // Not a header column
        return;
      }

      const activeElement = this.getRootNode().activeElement;
      if (headerCell._content.contains(this.getRootNode().activeElement)
          && (!this._ie || !this._isFocusable(activeElement))) {
        // Something was focused inside the cell
        return;
      }

      if (this.$.scroller.hasAttribute('column-resizing')) {
        // Resizing is in progress
        return;
      }

      if (!this._touchDevice) {
        // Not a touch device
        this._onTrackStart(e);
      }
    } else if (e.detail.state === 'track') {
      this._onTrack(e);
    } else if (e.detail.state === 'end') {
      this._onTrackEnd(e);
    }
  }

  /** @private */
  _onTrackStart(e) {
    if (!this.columnReorderingAllowed) {
      return;
    }

    // Cancel reordering if there are draggable nodes on the event path
    const path = e.path || Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(e).path;
    if (path && path.filter(node => node.hasAttribute && node.hasAttribute('draggable'))[0]) {
      return;
    }

    const headerCell = this._cellFromPoint(e.detail.x, e.detail.y);
    if (!headerCell || headerCell.getAttribute('part').indexOf('header-cell') === -1) {
      return;
    }

    this._toggleAttribute('reordering', true, this);
    this._draggedColumn = headerCell._column;
    while (this._draggedColumn.parentElement.childElementCount === 1) {
      // This is the only column in the group, drag the whole group instead
      this._draggedColumn = this._draggedColumn.parentElement;
    }
    this._setSiblingsReorderStatus(this._draggedColumn, 'allowed');
    this._draggedColumn._reorderStatus = 'dragging';

    this._updateGhost(headerCell);
    this._reorderGhost.style.visibility = 'visible';
    this._updateGhostPosition(e.detail.x, this._touchDevice ? e.detail.y - 50 : e.detail.y);
    this._autoScroller();
  }

  /** @private */
  _onTrack(e) {
    if (!this._draggedColumn) {
      // Reordering didn’t start. Skip this event.
      return;
    }

    const targetCell = this._cellFromPoint(e.detail.x, e.detail.y);
    if (!targetCell) {
      return;
    }

    const targetColumn = this._getTargetColumn(targetCell, this._draggedColumn);
    if (this._isSwapAllowed(this._draggedColumn, targetColumn) &&
      this._isSwappableByPosition(targetColumn, e.detail.x)) {
      this._swapColumnOrders(this._draggedColumn, targetColumn);
    }

    this._updateGhostPosition(e.detail.x, this._touchDevice ? e.detail.y - 50 : e.detail.y);
    this._lastDragClientX = e.detail.x;
  }

  /** @private */
  _onTrackEnd() {
    if (!this._draggedColumn) {
      // Reordering didn’t start. Skip this event.
      return;
    }

    this._toggleAttribute('reordering', false, this);
    this._draggedColumn._reorderStatus = '';
    this._setSiblingsReorderStatus(this._draggedColumn, '');
    this._draggedColumn = null;
    this._lastDragClientX = null;
    this._reorderGhost.style.visibility = 'hidden';

    this.dispatchEvent(new CustomEvent('column-reorder', {detail: {
      columns: this._getColumnsInOrder()
    }}));
  }

  /**
   * @return {!Array<!GridColumnElement>}
   * @protected
   */
  _getColumnsInOrder() {
    return this._columnTree.slice(0).pop()
      .filter(c => !c.hidden)
      .sort((b, a) => (b._order - a._order));
  }

  /**
   * @param {number} x
   * @param {number} y
   * @return {HTMLElement | undefined}
   * @protected
   */
  _cellFromPoint(x, y) {
    x = x || 0;
    y = y || 0;
    if (!this._draggedColumn) {
      this._toggleAttribute('no-content-pointer-events', true, this.$.scroller);
    }
    let cell;
    if (_polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_3__["useShadow"]) {
      cell = this.shadowRoot.elementFromPoint(x, y);
    } else {
      cell = document.elementFromPoint(x, y);

      // Workaround a FF58 bug
      if (cell.localName === 'vaadin-grid-cell-content') {
        cell = cell.assignedSlot.parentNode;
      }

    }
    this._toggleAttribute('no-content-pointer-events', false, this.$.scroller);

    // Make sure the element is actually a cell
    if (cell && cell._column) {
      return cell;
    }
  }

  /**
   * @param {number} eventClientX
   * @param {number} eventClientY
   * @protected
   */
  _updateGhostPosition(eventClientX, eventClientY) {
    const ghostRect = this._reorderGhost.getBoundingClientRect();
    // // This is where we want to position the ghost
    const targetLeft = eventClientX - ghostRect.width / 2;
    const targetTop = eventClientY - ghostRect.height / 2;
    // Current position
    const _left = parseInt(this._reorderGhost._left || 0);
    const _top = parseInt(this._reorderGhost._top || 0);
    // Reposition the ghost
    this._reorderGhost._left = _left - (ghostRect.left - targetLeft);
    this._reorderGhost._top = _top - (ghostRect.top - targetTop);
    this._reorderGhost.style.transform = `translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`;
  }

  /**
   * @param {!Element} e
   * @return {string}
   * @protected
   */
  _getInnerText(e) {
    if (e.localName) {
      // Custom implementation needed since IE11 doesn't respect the spec in case of hidden elements
      if (getComputedStyle(e).display === 'none') {
        return '';
      } else {
        return Array.from(e.childNodes).map(n => this._getInnerText(n)).join('');
      }
    } else {
      return e.textContent;
    }
  }

  /**
   * @param {!HTMLElement} cell
   * @return {!HTMLElement}
   * @protected
   */
  _updateGhost(cell) {
    const ghost = this._reorderGhost;
    ghost.textContent = this._getInnerText(cell._content);
    const style = window.getComputedStyle(cell);
    ['boxSizing', 'display', 'width', 'height', 'background', 'alignItems', 'padding', 'border', 'flex-direction', 'overflow']
      .forEach(propertyName => ghost.style[propertyName] = style[propertyName]);
    return ghost;
  }

  /** @private */
  _updateOrders(columnTree, splices) {
    if (columnTree === undefined || splices === undefined) {
      return;
    }

    // Reset all column orders
    columnTree[0].forEach((column, index) => column._order = 0);
    // Set order numbers to top-level columns
    columnTree[0].forEach((column, index) => column._order = (index + 1) * this._orderBaseScope);
  }

  /**
   * @param {!GridColumnElement} column
   * @param {string} status
   * @protected
   */
  _setSiblingsReorderStatus(column, status) {
    Array.from(column.parentNode.children)
      .filter(child => /column/.test(child.localName) && this._isSwapAllowed(child, column))
      .forEach(sibling => sibling._reorderStatus = status);
  }

  /** @protected */
  _autoScroller() {
    if (this._lastDragClientX) {
      const rightDiff = this._lastDragClientX - this.getBoundingClientRect().right + 50;
      const leftDiff = this.getBoundingClientRect().left - this._lastDragClientX + 50;

      if (rightDiff > 0) {
        this.$.table.scrollLeft += rightDiff / 10;
      } else if (leftDiff > 0) {
        this.$.table.scrollLeft -= leftDiff / 10;
      }
      this._scrollHandler();
    }

    if (this._draggedColumn) {
      this.async(this._autoScroller, 10);
    }
  }

  /**
   * @param {GridColumnElement | undefined} column1
   * @param {GridColumnElement | undefined} column2
   * @return {boolean | undefined}
   * @protected
   */
  _isSwapAllowed(column1, column2) {
    if (column1 && column2) {
      const differentColumns = column1 !== column2;
      const sameParent = column1.parentElement === column2.parentElement;
      const sameFrozen = column1.frozen === column2.frozen;
      return differentColumns && sameParent && sameFrozen;
    }
  }

  /**
   * @param {!GridColumnElement} targetColumn
   * @param {number} clientX
   * @return {boolean}
   * @protected
   */
  _isSwappableByPosition(targetColumn, clientX) {
    const targetCell =
      Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter(cell => targetColumn.contains(cell._column))[0];
    const sourceCellRect = this.$.header.querySelector('tr:not([hidden]) [reorder-status=dragging]').getBoundingClientRect();
    const targetRect = targetCell.getBoundingClientRect();
    if (targetRect.left > sourceCellRect.left) {
      return clientX > targetRect.right - sourceCellRect.width;
    } else {
      return clientX < targetRect.left + sourceCellRect.width;
    }
  }

  /**
   * @param {!GridColumnElement} column1
   * @param {!GridColumnElement} column2
   * @protected
   */
  _swapColumnOrders(column1, column2) {
    const _order = column1._order;
    column1._order = column2._order;
    column2._order = _order;
    this._updateLastFrozen();
    this._updateFirstAndLastColumn();
  }

  /**
   * @param {HTMLElement | undefined} targetCell
   * @param {GridColumnElement} draggedColumn
   * @return {GridColumnElement | undefined}
   * @protected
   */
  _getTargetColumn(targetCell, draggedColumn) {
    if (targetCell && draggedColumn) {
      let candidate = targetCell._column;
      while (candidate.parentElement !== draggedColumn.parentElement && candidate !== this) {
        candidate = candidate.parentElement;
      }
      if (candidate.parentElement === draggedColumn.parentElement) {
        return candidate;
      } else {
        return targetCell._column;
      }
    }
  }

  /**
   * Fired when the columns in the grid are reordered.
   *
   * @event column-reorder
   * @param {Object} detail
   * @param {Object} detail.columns the columns in the new order
   */
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-resizing-mixin.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-resizing-mixin.js ***!
  \***********************************************************************************/
/*! exports provided: ColumnResizingMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnResizingMixin", function() { return ColumnResizingMixin; });
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




/**
 * @polymerMixin
 */
const ColumnResizingMixin = superClass => class ColumnResizingMixin extends Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_0__["GestureEventListeners"])(superClass) {

  ready() {
    super.ready();
    const scroller = this.$.scroller;
    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_1__["addListener"])(scroller, 'track', this._onHeaderTrack.bind(this));

    // Disallow scrolling while resizing
    scroller.addEventListener('touchmove', e => scroller.hasAttribute('column-resizing') && e.preventDefault());

    // Disable contextmenu on any resize separator.
    scroller.addEventListener('contextmenu', e => e.target.getAttribute('part') == 'resize-handle' && e.preventDefault());

    // Disable native cell focus when resizing
    scroller.addEventListener('mousedown', e => e.target.getAttribute('part') === 'resize-handle' && e.preventDefault());
  }

  /** @private */
  _onHeaderTrack(e) {
    const handle = e.target;
    if (handle.getAttribute('part') === 'resize-handle') {
      const cell = handle.parentElement;
      let column = cell._column;

      this._toggleAttribute('column-resizing', true, this.$.scroller);

      // Get the target column to resize
      while (column.localName === 'vaadin-grid-column-group') {
        column = Array.prototype.slice.call(column._childColumns, 0)
          .sort(function(a, b) {
            return a._order - b._order;
          })
          .filter(function(column) {
            return !column.hidden;
          }).pop();
      }

      const columnRowCells = Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]'));
      var targetCell = columnRowCells.filter(cell => cell._column === column)[0];
      // Resize the target column
      if (targetCell.offsetWidth) {
        var style = window.getComputedStyle(targetCell);
        var minWidth = 10 + parseInt(style.paddingLeft) + parseInt(style.paddingRight) + parseInt(style.borderLeftWidth)
          + parseInt(style.borderRightWidth) + parseInt(style.marginLeft) + parseInt(style.marginRight);
        const maxWidth = targetCell.offsetWidth + (this.__isRTL ? targetCell.getBoundingClientRect().left - e.detail.x :
          e.detail.x - targetCell.getBoundingClientRect().right);
        column.width = Math.max(minWidth, maxWidth) + 'px';
        column.flexGrow = 0;
      }
      // Fix width and flex-grow for all preceding columns
      columnRowCells
        .sort(
          function(a, b) {
            return a._column._order - b._column._order;
          })
        .forEach(function(cell, index, array) {
          if (index < array.indexOf(targetCell)) {
            cell._column.width = cell.offsetWidth + 'px';
            cell._column.flexGrow = 0;
          }
        });

      if (e.detail.state === 'end') {
        this._toggleAttribute('column-resizing', false, this.$.scroller);
        this.dispatchEvent(new CustomEvent('column-resize', {
          detail: {resizedColumn: column}
        }));
      }

      // Notify resize
      this._resizeHandler();
    }
  }

  /**
  * Fired when a column in the grid is resized by the user.
  *
  * @event column-resize
  * @param {Object} detail
  * @param {Object} detail.resizedColumn the column that was resized
  */
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js":
/*!********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js ***!
  \********************************************************************/
/*! exports provided: ColumnBaseMixin, GridColumnElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnBaseMixin", function() { return ColumnBaseMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridColumnElement", function() { return GridColumnElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js */ "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-dir-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-mixin.js");
/* harmony import */ var _vaadin_grid_templatizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-grid-templatizer.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-templatizer.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/








/**
 * @polymerMixin
 */
const ColumnBaseMixin = superClass => class ColumnBaseMixin extends superClass {
  static get properties() {
    return {
      /**
       * When set to true, the column is user-resizable.
       * @default false
       */
      resizable: {
        type: Boolean,
        value: function() {
          if (this.localName === 'vaadin-grid-column-group') {
            return;
          }

          const parent = this.parentNode;
          if (parent && parent.localName === 'vaadin-grid-column-group') {
            return parent.resizable || false;
          } else {
            return false;
          }
        }
      },

      /**
       * @type {HTMLTemplateElement}
       * @protected
       */
      _headerTemplate: {
        type: Object
      },

      /**
       * @type {HTMLTemplateElement}
       * @protected
       */
      _footerTemplate: {
        type: Object
      },

      /**
       * When true, the column is frozen. When a column inside of a column group is frozen,
       * all of the sibling columns inside the group will get frozen also.
       * @type {boolean}
       */
      frozen: {
        type: Boolean,
        value: false
      },

      /**
       * When set to true, the cells for this column are hidden.
       */
      hidden: {
        type: Boolean
      },

      /**
       * Text content to display in the header cell of the column.
       */
      header: {
        type: String
      },

      /**
       * Aligns the columns cell content horizontally.
       * Supported values: "start", "center" and "end".
       * @attr {start|center|end} text-align
       * @type {GridColumnTextAlign | null | undefined}
       */
      textAlign: {
        type: String
      },

      /**
       * @type {boolean}
       * @protected
       */
      _lastFrozen: {
        type: Boolean,
        value: false
      },

      /** @protected */
      _order: Number,

      /** @private */
      _reorderStatus: Boolean,

      /**
       * @type {Array<!HTMLElement>}
       * @protected
       */
      _emptyCells: Array,

      /** @private */
      _headerCell: Object,

      /** @private */
      _footerCell: Object,

      /** @protected */
      _grid: Object,

      /**
       * Custom function for rendering the header content.
       * Receives two arguments:
       *
       * - `root` The header cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       *
       * @type {GridHeaderFooterRenderer | null | undefined}
       */
      headerRenderer: Function,

      /**
       * Custom function for rendering the footer content.
       * Receives two arguments:
       *
       * - `root` The footer cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       *
       * @type {GridHeaderFooterRenderer | null | undefined}
       */
      footerRenderer: Function
    };
  }

  static get observers() {
    return [
      '_widthChanged(width, _headerCell, _footerCell, _cells.*)',
      '_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)',
      '_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)',
      '_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)',
      '_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)',
      '_orderChanged(_order, _headerCell, _footerCell, _cells.*)',
      '_lastFrozenChanged(_lastFrozen)',
      '_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)',
      '_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)',
      '_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)',
      '_resizableChanged(resizable, _headerCell)',
      '_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)',
      '_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)'
    ];
  }

  /** @protected */
  connectedCallback() {
    super.connectedCallback();

    this._bodyTemplate && (this._bodyTemplate.templatizer._grid = this._grid);
    this._headerTemplate && (this._headerTemplate.templatizer._grid = this._grid);
    this._footerTemplate && (this._footerTemplate.templatizer._grid = this._grid);

    this._templateObserver.flush();
    if (!this._bodyTemplate) {
      // The observer might not have triggered if the tag is empty. Run manually.
      this._templateObserver.callback();
    }

    requestAnimationFrame(() => {
      this._allCells.forEach(cell => {
        if (!cell._content.parentNode) {
          this._grid && this._grid.appendChild(cell._content);
        }
      });
    });
  }

  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();

    requestAnimationFrame(() => {
      if (!this._findHostGrid()) {
        this._allCells.forEach(cell => {
          if (cell._content.parentNode) {
            cell._content.parentNode.removeChild(cell._content);
          }
        });
      }
    });

    this._gridValue = undefined;
  }

  /**
   * @return {!GridElement | undefined}
   * @protected
   */
  _findHostGrid() {
    let el = this;
    // Custom elements extending grid must have a specific localName
    while (el && !/^vaadin.*grid(-pro)?$/.test(el.localName)) {
      el = el.assignedSlot ? el.assignedSlot.parentNode : el.parentNode;
    }
    return el || undefined;
  }

  /**
   * @return {!GridElement | undefined}
   * @protected
   */
  get _grid() {
    if (!this._gridValue) {
      this._gridValue = this._findHostGrid();
    }
    return this._gridValue;
  }

  /**
   * @return {!Array<!HTMLElement>}
   * @protected
   */
  get _allCells() {
    return []
      .concat(this._cells || [])
      .concat(this._emptyCells || [])
      .concat(this._headerCell)
      .concat(this._footerCell)
      .filter(cell => cell);
  }

  constructor() {
    super();

    this._templateObserver = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_1__["FlattenedNodesObserver"](this, info => {
      this._headerTemplate = this._prepareHeaderTemplate();
      this._footerTemplate = this._prepareFooterTemplate();
      this._bodyTemplate = this._prepareBodyTemplate();
    });
  }

  /**
   * @return {HTMLTemplateElement}
   * @protected
   */
  _prepareHeaderTemplate() {
    return this._prepareTemplatizer(this._findTemplate(true) || null, {});
  }

  /**
   * @return {HTMLTemplateElement}
   * @protected
   */
  _prepareFooterTemplate() {
    return this._prepareTemplatizer(this._findTemplate(false, true) || null, {});
  }

  /**
   * @return {HTMLTemplateElement}
   * @protected
   */
  _prepareBodyTemplate() {
    return this._prepareTemplatizer(this._findTemplate() || null);
  }

  /**
   * @param {HTMLTemplateElement} template
   * @param {object} instanceProps
   * @return {HTMLTemplateElement}
   * @protected
   */
  _prepareTemplatizer(template, instanceProps) {
    if (template && !template.templatizer) {
      const templatizer = new _vaadin_grid_templatizer_js__WEBPACK_IMPORTED_MODULE_3__["Templatizer"]();
      templatizer._grid = this._grid;
      templatizer.dataHost = this.dataHost;
      templatizer._instanceProps = instanceProps || templatizer._instanceProps;
      templatizer.template = template;
      template.templatizer = templatizer;
    }

    return template;
  }

  /** @protected */
  _renderHeaderAndFooter() {
    if (this.headerRenderer && this._headerCell) {
      this.__runRenderer(this.headerRenderer, this._headerCell);
    }
    if (this.footerRenderer && this._footerCell) {
      this.__runRenderer(this.footerRenderer, this._footerCell);
    }
  }

  /** @private */
  __runRenderer(renderer, cell, model) {
    const args = [cell._content, this];
    if (model && model.item) {
      args.push(model);
    }
    renderer.apply(this, args);
  }

  /** @private */
  __setColumnTemplateOrRenderer(template, renderer, cells) {
    if (template && renderer) {
      throw new Error('You should only use either a renderer or a template');
    }

    cells.forEach(cell => {
      const model = this._grid.__getRowModel(cell.parentElement);

      if (renderer) {
        cell._renderer = renderer;

        if (model.item || renderer === this.headerRenderer || renderer === this.footerRenderer) {
          this.__runRenderer(renderer, cell, model);
        }
      } else if (cell._template !== template) {
        cell._template = template;

        cell._content.innerHTML = '';
        template.templatizer._grid = template.templatizer._grid || this._grid;
        const inst = template.templatizer.createInstance();
        cell._content.appendChild(inst.root);
        cell._instance = inst;
        if (model.item) {
          cell._instance.setProperties(model);
        }
      }
    });
  }

  /** @private */
  _setBodyTemplateOrRenderer(template, renderer, cells, splices) {
    if ((template || renderer) && cells) {
      this.__setColumnTemplateOrRenderer(template, renderer, cells);
    }
  }

  /** @private */
  _setHeaderTemplateOrRenderer(headerTemplate, headerRenderer, headerCell) {
    if ((headerTemplate || headerRenderer) && headerCell) {
      this.__setColumnTemplateOrRenderer(headerTemplate, headerRenderer, [headerCell]);
    }
  }

  /** @private */
  _setFooterTemplateOrRenderer(footerTemplate, footerRenderer, footerCell) {
    if ((footerTemplate || footerRenderer) && footerCell) {
      this.__setColumnTemplateOrRenderer(footerTemplate, footerRenderer, [footerCell]);
      this._grid.__updateHeaderFooterRowVisibility(footerCell.parentElement);
    }
  }

  /**
   * @param {boolean} header
   * @param {boolean} footer
   * @return {HTMLTemplateElement}
   * @protected
   */
  _selectFirstTemplate(header = false, footer = false) {
    return _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_1__["FlattenedNodesObserver"].getFlattenedNodes(this)
      .filter(node =>
        node.localName === 'template'
        && node.classList.contains('header') === header
        && node.classList.contains('footer') === footer
      )[0];
  }

  /**
   * @param {boolean} header
   * @param {boolean} footer
   * @return {HTMLTemplateElement}
   * @protected
   */
  _findTemplate(header, footer) {
    const template = this._selectFirstTemplate(header, footer);
    if (template) {
      if (this.dataHost) {
        // set dataHost to the context where template has been defined
        template._rootDataHost = this.dataHost._rootDataHost || this.dataHost;
      }
    }
    return template;
  }

  /** @private */
  _flexGrowChanged(flexGrow, headerCell, footerCell, cells) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged('flexGrow');
    }

    this._allCells.forEach(cell => cell.style.flexGrow = flexGrow);
  }

  /** @private */
  _orderChanged(order, headerCell, footerCell, cells) {
    this._allCells.forEach(cell => cell.style.order = order);
  }

  /** @private */
  _widthChanged(width, headerCell, footerCell, cells) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged('width');
    }

    this._allCells.forEach(cell => cell.style.width = width);

    // Force a reflow to workaround browser issues causing double scrollbars to grid
    // https://github.com/vaadin/vaadin-grid/issues/1586
    if (this._grid && this._grid.__forceReflow) {
      this._grid.__forceReflow();
    }
  }

  /** @private */
  _frozenChanged(frozen, headerCell, footerCell, cells) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged('frozen', frozen);
    }

    this._allCells.forEach(cell => this._toggleAttribute('frozen', frozen, cell));

    this._grid && this._grid._frozenCellsChanged && this._grid._frozenCellsChanged();
  }

  /** @private */
  _lastFrozenChanged(lastFrozen) {
    this._allCells.forEach(cell => this._toggleAttribute('last-frozen', lastFrozen, cell));

    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._lastFrozen = lastFrozen;
    }
  }

  /**
   * @param {string | undefined} path
   * @param {string | undefined} header
   * @param {!HTMLTableCellElement | undefined} headerCell
   * @param {!HTMLTableCellElement | undefined} footerCell
   * @param {!object | undefined} cells
   * @param {GridBodyRenderer | undefined} renderer
   * @param {GridHeaderFooterRenderer | undefined} headerRenderer
   * @param {HTMLTemplateElement | undefined} bodyTemplate
   * @param {HTMLTemplateElement | undefined} headerTemplate
   * @protected
   */
  _pathOrHeaderChanged(path, header, headerCell, footerCell, cells, renderer, headerRenderer, bodyTemplate, headerTemplate) {
    const hasHeaderText = header !== undefined;
    if (!headerRenderer && !headerTemplate && hasHeaderText && headerCell) {
      this.__setTextContent(headerCell._content, header);
    }

    if (path && cells.value) {
      if (!renderer && !bodyTemplate) {
        const pathRenderer = (root, owner, {item}) => this.__setTextContent(root, this.get(path, item));
        this.__setColumnTemplateOrRenderer(undefined, pathRenderer, cells.value);
      }

      if (!headerRenderer && !headerTemplate && !hasHeaderText && headerCell && header !== null) {
        this.__setTextContent(headerCell._content, this._generateHeader(path));
      }
    }

    if (headerCell) {
      this._grid.__updateHeaderFooterRowVisibility(headerCell.parentElement);
    }
  }

  /** @private */
  __setTextContent(node, textContent) {
    node.textContent !== textContent && (node.textContent = textContent);
  }

  /**
   * @param {string} path
   * @return {string}
   * @protected
   */
  _generateHeader(path) {
    return path
      .substr(path.lastIndexOf('.') + 1)
      .replace(/([A-Z])/g, '-$1').toLowerCase()
      .replace(/-/g, ' ')
      .replace(/^./, match => match.toUpperCase());
  }

  /**
   * @param {string} name
   * @param {boolean} bool
   * @param {!Element} node
   * @protected
   */
  _toggleAttribute(name, bool, node) {
    if (node.hasAttribute(name) === !bool) {
      if (bool) {
        node.setAttribute(name, '');
      } else {
        node.removeAttribute(name);
      }
    }
  }

  /** @private */
  _reorderStatusChanged(reorderStatus, headerCell, footerCell, cells) {
    this._allCells.forEach(cell => cell.setAttribute('reorder-status', reorderStatus));
  }

  /** @private */
  _resizableChanged(resizable, headerCell) {
    if (resizable === undefined || headerCell === undefined) {
      return;
    }

    if (headerCell) {
      [headerCell].concat(this._emptyCells).forEach(cell => {
        if (cell) {
          const existingHandle = cell.querySelector('[part~="resize-handle"]');
          if (existingHandle) {
            cell.removeChild(existingHandle);
          }

          if (resizable) {
            const handle = document.createElement('div');
            handle.setAttribute('part', 'resize-handle');
            cell.appendChild(handle);
          }
        }
      });
    }
  }

  /** @private */
  _textAlignChanged(textAlign, _cells, _headerCell, _footerCell) {
    if (textAlign === undefined) {
      return;
    }
    if (['start', 'end', 'center'].indexOf(textAlign) === -1) {
      console.warn('textAlign can only be set as "start", "end" or "center"');
      return;
    }

    let textAlignFallback;
    if (getComputedStyle(this._grid).direction === 'ltr') {
      if (textAlign === 'start') {
        textAlignFallback = 'left';
      } else if (textAlign === 'end') {
        textAlignFallback = 'right';
      }
    } else {
      if (textAlign === 'start') {
        textAlignFallback = 'right';
      } else if (textAlign === 'end') {
        textAlignFallback = 'left';
      }
    }

    this._allCells.forEach(cell => {
      cell._content.style.textAlign = textAlign;
      if (getComputedStyle(cell._content).textAlign !== textAlign) {
        cell._content.style.textAlign = textAlignFallback;
      }
    });
  }

  /** @private */
  _hiddenChanged(hidden, headerCell, footerCell, cells) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged('hidden', hidden);
    }

    if (!!hidden !== !!this._previousHidden && this._grid) {
      if (hidden === true) {
        this._allCells.forEach(cell => {
          if (cell._content.parentNode) {
            cell._content.parentNode.removeChild(cell._content);
          }
        });
      }
      this._grid._debouncerHiddenChanged = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(
        this._grid._debouncerHiddenChanged,
        _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_5__["animationFrame"],
        () => {
          if (this._grid && this._grid._renderColumnTree) {
            this._grid._renderColumnTree(this._grid._columnTree);
          }
        }
      );

      this._grid._updateLastFrozen && this._grid._updateLastFrozen();
      this._grid.notifyResize && this._grid.notifyResize();
      this._grid._resetKeyboardNavigation && this._grid._resetKeyboardNavigation();
    }
    this._previousHidden = hidden;
  }

};

/**
 * A `<vaadin-grid-column>` is used to configure how a column in `<vaadin-grid>`
 * should look like.
 *
 * See `<vaadin-grid>` documentation and demos for instructions and examples on how
 * to configure the `<vaadin-grid-column>`.
 * ```
 *
 * @extends PolymerElement
 * @mixes ColumnBaseMixin
 */
class GridColumnElement extends ColumnBaseMixin(Object(_vaadin_vaadin_element_mixin_vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_2__["DirMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])) {
  static get is() {
    return 'vaadin-grid-column';
  }

  static get properties() {
    return {
      /**
       * Width of the cells for this column.
       */
      width: {
        type: String,
        value: '100px'
      },

      /**
       * Flex grow ratio for the cell widths. When set to 0, cell width is fixed.
       * @attr {number} flex-grow
       * @type {number}
       */
      flexGrow: {
        type: Number,
        value: 1
      },

      /**
       * Custom function for rendering the cell content.
       * Receives three arguments:
       *
       * - `root` The cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       * - `model` The object with the properties related with
       *   the rendered item, contains:
       *   - `model.index` The index of the item.
       *   - `model.item` The item.
       *   - `model.expanded` Sublevel toggle state.
       *   - `model.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `model.selected` Selected state.
       *
       * @type {GridBodyRenderer | null | undefined}
       */
      renderer: Function,

      /**
       * Path to an item sub-property whose value gets displayed in the column body cells.
       * The property name is also shown in the column header if an explicit header or renderer isn't defined.
       */
      path: {
        type: String
      },

      /**
       * Automatically sets the width of the column based on the column contents when this is set to `true`.
       *
       * For performance reasons the column width is calculated automatically only once when the grid items
       * are rendered for the first time and the calculation only considers the rows which are currently
       * rendered in DOM (a bit more than what is currently visible). If the grid is scrolled, or the cell
       * content changes, the column width might not match the contents anymore.
       *
       * Hidden columns are ignored in the calculation and their widths are not automatically updated when
       * you show a column that was initially hidden.
       *
       * You can manually trigger the auto sizing behavior again by calling `grid.recalculateColumnWidths()`.
       *
       * The column width may still grow larger when `flexGrow` is not 0.
       * @attr {boolean} auto-width
       * @type {boolean}
       */
      autoWidth: {
        type: Boolean,
        value: false
      },

      /**
       * @type {HTMLTemplateElement}
       * @protected
       */
      _bodyTemplate: {
        type: Object
      },

      /**
       * @type {Array<!HTMLElement>}
       * @protected
       */
      _cells: Array

    };
  }

}

customElements.define(GridColumnElement.is, GridColumnElement);



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-data-provider-mixin.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-data-provider-mixin.js ***!
  \*********************************************************************************/
/*! exports provided: ItemCache, DataProviderMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCache", function() { return ItemCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProviderMixin", function() { return DataProviderMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




const ItemCache = class ItemCache {
  /**
   * @param {!HTMLElement} grid
   * @param {!ItemCache | undefined} parentCache
   * @param {!GridItem | undefined} parentItem
   */
  constructor(grid, parentCache, parentItem) {
    /** @type {!HTMLElement} */
    this.grid = grid;
    /** @type {!ItemCache | undefined} */
    this.parentCache = parentCache;
    /** @type {!GridItem | undefined} */
    this.parentItem = parentItem;
    /** @type {object} */
    this.itemCaches = {};
    /** @type {object} */
    this.items = {};
    /** @type {number} */
    this.effectiveSize = 0;
    /** @type {number} */
    this.size = 0;
    /** @type {object} */
    this.pendingRequests = {};
  }

  /**
   * @return {boolean}
   */
  isLoading() {
    return Boolean(Object.keys(this.pendingRequests).length || Object.keys(this.itemCaches).filter(index => {
      return this.itemCaches[index].isLoading();
    })[0]);
  }

  /**
   * @param {number} index
   * @return {!GridItem | undefined}
   */
  getItemForIndex(index) {
    const {cache, scaledIndex} = this.getCacheAndIndex(index);
    return cache.items[scaledIndex];
  }

  updateSize() {
    this.effectiveSize = (!this.parentItem || this.grid._isExpanded(this.parentItem)) ?
      this.size + Object.keys(this.itemCaches).reduce((prev, curr) => {
        const subCache = this.itemCaches[curr];
        subCache.updateSize();
        return prev + subCache.effectiveSize;
      }, 0) :
      0;
  }

  /**
   * @param {number} scaledIndex
   */
  ensureSubCacheForScaledIndex(scaledIndex) {
    if (!this.itemCaches[scaledIndex]) {
      const subCache = new ItemCache(this.grid, this, this.items[scaledIndex]);
      this.itemCaches[scaledIndex] = subCache;
      this.grid._loadPage(0, subCache);
    }
  }

  /**
   * @param {number} index
   * @return {{cache: !ItemCache, scaledIndex: number}}
   */
  getCacheAndIndex(index) {
    let thisLevelIndex = index;
    const keys = Object.keys(this.itemCaches);
    for (var i = 0; i < keys.length; i++) {
      const expandedIndex = Number(keys[i]);
      const subCache = this.itemCaches[expandedIndex];
      if (thisLevelIndex <= expandedIndex) {
        return {cache: this, scaledIndex: thisLevelIndex};
      } else if (thisLevelIndex <= expandedIndex + subCache.effectiveSize) {
        return subCache.getCacheAndIndex(thisLevelIndex - expandedIndex - 1);
      }
      thisLevelIndex -= subCache.effectiveSize;
    }
    return {cache: this, scaledIndex: thisLevelIndex};
  }

};

/**
 * @polymerMixin
 */
const DataProviderMixin = superClass => class DataProviderMixin extends superClass {

  static get properties() {
    return {

      /**
       * Number of items fetched at a time from the dataprovider.
       * @attr {number} page-size
       * @type {number}
       */
      pageSize: {
        type: Number,
        value: 50,
        observer: '_pageSizeChanged'
      },

      /**
       * Function that provides items lazily. Receives arguments `params`, `callback`
       *
       * `params.page` Requested page index
       *
       * `params.pageSize` Current page size
       *
       * `params.filters` Currently applied filters
       *
       * `params.sortOrders` Currently applied sorting orders
       *
       * `params.parentItem` When tree is used, and sublevel items
       * are requested, reference to parent item of the requested sublevel.
       * Otherwise `undefined`.
       *
       * `callback(items, size)` Callback function with arguments:
       *   - `items` Current page of items
       *   - `size` Total number of items. When tree sublevel items
       *     are requested, total number of items in the requested sublevel.
       *     Optional when tree is not used, required for tree.
       *
       * @type {GridDataProvider | null | undefined}
       */
      dataProvider: {
        type: Object,
        notify: true,
        observer: '_dataProviderChanged'
      },

      /**
       * `true` while data is being requested from the data provider.
       */
      loading: {
        type: Boolean,
        notify: true,
        readOnly: true,
        reflectToAttribute: true
      },

      /**
       * @type {!ItemCache}
       * @protected
       */
      _cache: {
        type: Object,
        value: function() {
          const cache = new ItemCache(this);
          return cache;
        }
      },

      /**
       * Path to an item sub-property that identifies the item.
       * @attr {string} item-id-path
       */
      itemIdPath: {
        type: String,
        value: null
      },

      /**
       * An array that contains the expanded items.
       * @type {!Array<!GridItem>}
       */
      expandedItems: {
        type: Object,
        notify: true,
        value: () => []
      }

    };
  }

  static get observers() {
    return [
      '_sizeChanged(size)',
      '_itemIdPathChanged(itemIdPath)',
      '_expandedItemsChanged(expandedItems.*)'
    ];
  }

  /** @private */
  _sizeChanged(size) {
    const delta = size - this._cache.size;
    this._cache.size += delta;
    this._cache.effectiveSize += delta;
    this._effectiveSize = this._cache.effectiveSize;
  }

  /**
   * @param {number} index
   * @param {HTMLElement} el
   * @protected
   */
  _getItem(index, el) {
    if (index >= this._effectiveSize) {
      return;
    }

    el.index = index;
    const {cache, scaledIndex} = this._cache.getCacheAndIndex(index);
    const item = cache.items[scaledIndex];
    if (item) {
      this._toggleAttribute('loading', false, el);
      this._updateItem(el, item);
      if (this._isExpanded(item)) {
        cache.ensureSubCacheForScaledIndex(scaledIndex);
      }
    } else {
      this._toggleAttribute('loading', true, el);
      this._loadPage(this._getPageForIndex(scaledIndex), cache);
    }

  }

  /** @private */
  _expandedInstanceChangedCallback(inst, value) {
    if (inst.item === undefined) {
      return;
    }
    if (value) {
      this.expandItem(inst.item);
    } else {
      this.collapseItem(inst.item);
    }
  }

  /**
   * Returns a value that identifies the item. Uses `itemIdPath` if available.
   * Can be customized by overriding.
   * @param {!GridItem} item
   * @return {!GridItem | !unknown}
   */
  getItemId(item) {
    return this.itemIdPath ? this.get(this.itemIdPath, item) : item;
  }

  /**
   * @param {!GridItem} item
   * @return {boolean}
   * @protected
   */
  _isExpanded(item) {
    return this.__expandedKeys.has(this.getItemId(item));
  }

  /** @private */
  _expandedItemsChanged(e) {
    this.__cacheExpandedKeys();
    this._cache.updateSize();
    this._effectiveSize = this._cache.effectiveSize;
    this._assignModels();
  }

  /** @private */
  _itemIdPathChanged(e) {
    this.__cacheExpandedKeys();
  }

  /** @private */
  __cacheExpandedKeys() {
    if (this.expandedItems) {
      this.__expandedKeys = new Set();
      this.expandedItems.forEach(item => {
        this.__expandedKeys.add(this.getItemId(item));
      });
    }
  }

  /**
   * Expands the given item tree.
   * @param {!GridItem} item
   */
  expandItem(item) {
    if (!this._isExpanded(item)) {
      this.push('expandedItems', item);
    }
  }

  /**
   * Collapses the given item tree.
   * @param {!GridItem} item
   */
  collapseItem(item) {
    if (this._isExpanded(item)) {
      this.splice('expandedItems', this._getItemIndexInArray(item, this.expandedItems), 1);
    }
  }

  /**
   * @param {number} index
   * @return {number}
   * @protected
   */
  _getIndexLevel(index) {
    let {cache} = this._cache.getCacheAndIndex(index);
    let level = 0;
    while (cache.parentCache) {
      cache = cache.parentCache;
      level++;
    }
    return level;
  }

  /**
   * @return {boolean}
   * @protected
   */
  _canPopulate() {
    return Boolean(this._hasData && this._columnTree);
  }

  /**
   * @param {number} page
   * @param {ItemCache} cache
   * @protected
   */
  _loadPage(page, cache) {
    // make sure same page isn't requested multiple times.
    if (!cache.pendingRequests[page] && this.dataProvider) {
      this._setLoading(true);
      cache.pendingRequests[page] = true;
      const params = {
        page,
        pageSize: this.pageSize,
        sortOrders: this._mapSorters(),
        filters: this._mapFilters(),
        parentItem: cache.parentItem
      };

      this.dataProvider(params, (items, size) => {
        if (size !== undefined) {
          cache.size = size;
        } else {
          if (params.parentItem) {
            cache.size = items.length;
          }
        }

        const currentItems = Array.from(this.$.items.children).map(row => row._item);

        // Populate the cache with new items
        items.forEach((item, itemsIndex) => {
          const itemIndex = page * this.pageSize + itemsIndex;
          cache.items[itemIndex] = item;
          if (this._isExpanded(item) && currentItems.indexOf(item) > -1) {
            // Force synchronous data request for expanded item sub-cache
            cache.ensureSubCacheForScaledIndex(itemIndex);
          }
        });

        this._hasData = true;

        delete cache.pendingRequests[page];

        this._debouncerApplyCachedData = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(
          this._debouncerApplyCachedData,
          _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(0),
          () => {
            this._setLoading(false);
            this._cache.updateSize();
            this._effectiveSize = this._cache.effectiveSize;

            Array.from(this.$.items.children)
              .filter(row => !row.hidden)
              .forEach(row => {
                const cachedItem = this._cache.getItemForIndex(row.index);
                if (cachedItem) {
                  this._getItem(row.index, row);
                }
              });

            this._increasePoolIfNeeded(0);
          }
        );

        if (!this._cache.isLoading()) {
          this._debouncerApplyCachedData.flush();
        }

        this.__itemsReceived();
      });
    }
  }

  /**
   * @param {number} index
   * @return {number}
   * @private
   */
  _getPageForIndex(index) {
    return Math.floor(index / this.pageSize);
  }

  /**
   * Clears the cached pages and reloads data from dataprovider when needed.
   */
  clearCache() {
    this._cache = new ItemCache(this);
    Array.from(this.$.items.children).forEach(row => {
      Array.from(row.children).forEach(cell => {
        // Force data system to pick up subproperty changes
        cell._instance && cell._instance._setPendingProperty('item', {}, false);
      });
    });
    this._cache.size = this.size || 0;
    this._cache.updateSize();
    this._hasData = false;
    this._assignModels();

    if (!this._effectiveSize) {
      this._loadPage(0, this._cache);
    }
  }

  /** @private */
  _pageSizeChanged(pageSize, oldPageSize) {
    if (oldPageSize !== undefined && pageSize !== oldPageSize) {
      this.clearCache();
    }
  }

  /** @protected */
  _checkSize() {
    if (this.size === undefined && this._effectiveSize === 0) {
      console.warn(
        'The <vaadin-grid> needs the total number of items' +
        ' in order to display rows. Set the total number of items' +
        ' to the `size` property, or provide the total number of items' +
        ' in the second argument of the `dataProvider`’s `callback` call.'
      );
    }
  }

  /** @private */
  _dataProviderChanged(dataProvider, oldDataProvider) {
    if (oldDataProvider !== undefined) {
      this.clearCache();
    }

    if (dataProvider && this.items && this.items.length) {
      // Fixes possibly invalid cached lastVisibleIndex value in <iron-list>
      this._scrollToIndex(this._firstVisibleIndex);
    }

    this._ensureFirstPageLoaded();

    this._debouncerCheckSize = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(
      this._debouncerCheckSize,
      _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(2000),
      this._checkSize.bind(this));

    this._scrollHandler();
  }

  /** @protected */
  _ensureFirstPageLoaded() {
    if (!this._hasData) {
      // load data before adding rows to make sure they have content when
      // rendered for the first time.
      this._loadPage(0, this._cache);
    }
  }

  /**
   * @param {!GridItem} item1
   * @param {!GridItem} item2
   * @return {boolean}
   * @protected
   */
  _itemsEqual(item1, item2) {
    return this.getItemId(item1) === this.getItemId(item2);
  }

  /**
   * @param {!GridItem} item
   * @param {!Array<!GridItem>} array
   * @return {number}
   * @protected
   */
  _getItemIndexInArray(item, array) {
    let result = -1;
    array.forEach((i, idx) => {
      if (this._itemsEqual(i, item)) {
        result = idx;
      }
    });
    return result;
  }

};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-drag-and-drop-mixin.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-drag-and-drop-mixin.js ***!
  \*********************************************************************************/
/*! exports provided: DragAndDropMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropMixin", function() { return DragAndDropMixin; });
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const DropMode = {
  BETWEEN: 'between',
  ON_TOP: 'on-top',
  ON_TOP_OR_BETWEEN: 'on-top-or-between',
  ON_GRID: 'on-grid'
};

const DropLocation = {
  ON_TOP: 'on-top',
  ABOVE: 'above',
  BELOW: 'below',
  EMPTY: 'empty'
};

/**
 * @polymerMixin
 */
const DragAndDropMixin = superClass => class DragAndDropMixin extends superClass {

  static get properties() {
    return {
      /**
       * Defines the locations within the Grid row where an element can be dropped.
       *
       * Possible values are:
       * - `between`: The drop event can happen between Grid rows.
       * - `on-top`: The drop event can happen on top of Grid rows.
       * - `on-top-or-between`: The drop event can happen either on top of or between Grid rows.
       * - `on-grid`: The drop event will not happen on any specific row, it will show the drop target outline around the whole grid.
       * @attr {between|on-top|on-top-or-between|on-grid} drop-mode
       * @type {GridDropMode | null | undefined}
       */
      dropMode: String,

      /**
       * Marks the grid's rows to be available for dragging.
       * @attr {boolean} rows-draggable
       */
      rowsDraggable: Boolean,

      /**
       * A function that filters dragging of specific grid rows. The return value should be false
       * if dragging of the row should be disabled.
       *
       * Receives one argument:
       * - `model` The object with the properties related with
       *   the rendered item, contains:
       *   - `model.index` The index of the item.
       *   - `model.item` The item.
       *   - `model.expanded` Sublevel toggle state.
       *   - `model.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `model.selected` Selected state.
       *
       * @type {GridDragAndDropFilter | null | undefined}
       */
      dragFilter: Function,

      /**
       * A function that filters dropping on specific grid rows. The return value should be false
       * if dropping on the row should be disabled.
       *
       * Receives one argument:
       * - `model` The object with the properties related with
       *   the rendered item, contains:
       *   - `model.index` The index of the item.
       *   - `model.item` The item.
       *   - `model.expanded` Sublevel toggle state.
       *   - `model.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `model.selected` Selected state.
       *
       * @type {GridDragAndDropFilter | null | undefined}
       */
      dropFilter: Function,

      /** @private */
      __dndAutoScrollThreshold: {
        value: 50
      }

    };
  }

  static get observers() {
    return [
      '_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)'
    ];
  }

  /** @protected */
  ready() {
    super.ready();
    this.$.table.addEventListener('dragstart', this._onDragStart.bind(this));
    this.$.table.addEventListener('dragend', this._onDragEnd.bind(this));
    this.$.table.addEventListener('dragover', this._onDragOver.bind(this));
    this.$.table.addEventListener('dragleave', this._onDragLeave.bind(this));
    this.$.table.addEventListener('drop', this._onDrop.bind(this));
    this.$.table.addEventListener('dragenter', e => {
      if (this.dropMode) {
        e.preventDefault();
        e.stopPropagation();
      }
    });

  }

  /** @private */
  _onDragStart(e) {
    if (this.rowsDraggable) {
      let row = e.target;
      if (row.localName === 'vaadin-grid-cell-content') {
        // The draggable node is the cell content element on browsers that support native shadow
        row = row.assignedSlot.parentNode.parentNode;
      }
      if (row.parentNode !== this.$.items) {
        return;
      }

      e.stopPropagation();
      this._toggleAttribute('dragging-rows', true, this);

      if (this._safari) {
        // Safari doesn't get proper drag images from transformed
        // elements so we need to switch to top temporarily
        const transform = row.style.transform;
        row.style.top = /translateY\((.*)\)/.exec(transform)[1];
        row.style.transform = 'none';
        requestAnimationFrame(() => {
          row.style.top = '';
          row.style.transform = transform;
        });
      }

      const rowRect = row.getBoundingClientRect();
      if (!window.ShadyDOM) {
        if (this._ios) {
          e.dataTransfer.setDragImage(row);
        } else {
          e.dataTransfer.setDragImage(row, e.clientX - rowRect.left, e.clientY - rowRect.top);
        }

      }

      let rows = [row];
      if (this._isSelected(row._item)) {
        rows = this.__getViewportRows()
          .filter(row => this._isSelected(row._item))
          .filter(row => !this.dragFilter || this.dragFilter(this.__getRowModel(row)));
      }

      // Set the default transfer data
      e.dataTransfer.setData('text', this.__formatDefaultTransferData(rows));

      row.setAttribute('dragstart', rows.length > 1 ? rows.length : '');
      this.updateStyles({
        '--_grid-drag-start-x': `${e.clientX - rowRect.left + 20}px`,
        '--_grid-drag-start-y': `${e.clientY - rowRect.top + 10}px`
      });

      requestAnimationFrame(() => {
        row.removeAttribute('dragstart');
        this.updateStyles({'--_grid-drag-start-x': '', '--_grid-drag-start-y': ''});
      });

      const event = new CustomEvent('grid-dragstart', {
        detail: {
          draggedItems: rows.map(row => row._item),
          setDragData: (type, data) => e.dataTransfer.setData(type, data),
          setDraggedItemsCount: count => row.setAttribute('dragstart', count)
        }
      });
      event.originalEvent = e;
      this.dispatchEvent(event);
    }
  }

  /** @private */
  _onDragEnd(e) {
    this._toggleAttribute('dragging-rows', false, this);
    e.stopPropagation();
    const event = new CustomEvent('grid-dragend');
    event.originalEvent = e;
    this.dispatchEvent(event);
  }

  /** @private */
  _onDragLeave(e) {
    e.stopPropagation();
    this._clearDragStyles();
  }

  /** @private */
  _onDragOver(e) {

    if (this.dropMode) {
      this._dropLocation = undefined;
      this._dragOverItem = undefined;

      if (this.__dndAutoScroll(e.clientY)) {
        this._clearDragStyles();
        return;
      }

      let row = e.composedPath().filter(node => node.localName === 'tr')[0];

      if (!this._effectiveSize || this.dropMode === DropMode.ON_GRID) {
        // The grid is empty or "on-grid" drop mode was used, always default to "empty"
        this._dropLocation = DropLocation.EMPTY;
      } else if (!row || row.parentNode !== this.$.items) {
        // The dragover didn't occur on a body row but the grid has items
        if (row) {
          // The dragover occurred over a header/footer row
          return;
        } else if (this.dropMode === DropMode.BETWEEN || this.dropMode === DropMode.ON_TOP_OR_BETWEEN) {
          // The drop mode allows setting the last row as the drag over item
          row = Array.from(this.$.items.children).filter(row => !row.hidden).pop();
          this._dropLocation = DropLocation.BELOW;
        } else {
          // Drop mode on-top used but the dragover didn't occur over one of the existing rows
          return;
        }
      } else {
        // The dragover occurred on a body row, determine the drop location from coordinates
        const rowRect = row.getBoundingClientRect();

        this._dropLocation = DropLocation.ON_TOP;

        if (this.dropMode === DropMode.BETWEEN) {
          const dropAbove = e.clientY - rowRect.top < rowRect.bottom - e.clientY;
          this._dropLocation = dropAbove ? DropLocation.ABOVE : DropLocation.BELOW;

        } else if (this.dropMode === DropMode.ON_TOP_OR_BETWEEN) {
          if (e.clientY - rowRect.top < rowRect.height / 3) {
            this._dropLocation = DropLocation.ABOVE;
          } else if (e.clientY - rowRect.top > (rowRect.height / 3) * 2) {
            this._dropLocation = DropLocation.BELOW;
          }
        }
      }

      if (row && row.hasAttribute('drop-disabled')) {
        this._dropLocation = undefined;
        return;
      }

      e.stopPropagation();
      e.preventDefault();

      if (this._dropLocation === DropLocation.EMPTY) {
        this._toggleAttribute('dragover', true, this);
      } else if (row) {
        this._dragOverItem = row._item;
        if (row.getAttribute('dragover') !== this._dropLocation) {
          row.setAttribute('dragover', this._dropLocation);
        }
      } else {
        this._clearDragStyles();
      }
    }
  }

  /** @private */
  __dndAutoScroll(clientY) {
    if (this.__dndAutoScrolling) {
      return true;
    }

    const headerBottom = this.$.header.getBoundingClientRect().bottom;
    const footerTop = this.$.footer.getBoundingClientRect().top;
    const topDiff = headerBottom - clientY + this.__dndAutoScrollThreshold;
    const bottomDiff = clientY - footerTop + this.__dndAutoScrollThreshold;
    let scrollTopDelta = 0;

    if (bottomDiff > 0) {
      scrollTopDelta = bottomDiff * 2;
    } else if (topDiff > 0) {
      scrollTopDelta = -topDiff * 2;
    }

    if (scrollTopDelta) {
      const scrollTop = this.$.table.scrollTop;
      this.$.table.scrollTop += scrollTopDelta;
      const scrollTopChanged = scrollTop !== this.$.table.scrollTop;
      if (scrollTopChanged) {
        this.__dndAutoScrolling = true;
        // Disallow more auto-scrolls within 20ms
        setTimeout(() => this.__dndAutoScrolling = false, 20);
        this._scrollHandler();
        return true;
      }
    }
  }

  /** @private */
  __getViewportRows() {
    const headerBottom = this.$.header.getBoundingClientRect().bottom;
    const footerTop = this.$.footer.getBoundingClientRect().top;
    return Array.from(this.$.items.children)
      .filter(row => {
        const rowRect = row.getBoundingClientRect();
        return rowRect.bottom > headerBottom && rowRect.top < footerTop;
      });
  }

  /** @protected */
  _clearDragStyles() {
    this.removeAttribute('dragover');
    Array.from(this.$.items.children).forEach(row => row.removeAttribute('dragover'));
  }

  /** @private */
  _onDrop(e) {
    if (this.dropMode) {
      e.stopPropagation();
      e.preventDefault();

      const dragData = e.dataTransfer.types && Array.from(e.dataTransfer.types).map(type => {
        return {
          type,
          data: e.dataTransfer.getData(type)
        };
      });

      this._clearDragStyles();

      const event = new CustomEvent('grid-drop', {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        detail: {
          dropTargetItem: this._dragOverItem,
          dropLocation: this._dropLocation,
          dragData
        }
      });
      event.originalEvent = e;
      this.dispatchEvent(event);
    }
  }

  /** @private */
  __formatDefaultTransferData(rows) {
    return rows
      .map(row => {
        return Array.from(row.children)
          .filter(cell => !cell.hidden && cell.getAttribute('part').indexOf('details-cell') === -1)
          .sort((a, b) => {
            return a._column._order > b._column._order ? 1 : -1;
          })
          .map(cell => cell._content.textContent.trim())
          .filter(content => content)
          .join('\t');
      })
      .join('\n');
  }

  /** @private */
  _dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter) {
    this.filterDragAndDrop();
  }

  /**
   * Runs the `dragFilter` and `dropFilter` hooks for the visible cells.
   * If the filter depends on varying conditions, you may need to
   * call this function manually in order to update the draggability when
   * the conditions change.
   */
  filterDragAndDrop() {
    Array.from(this.$.items.children).filter(row => !row.hidden).forEach(
      row => {
        this._filterDragAndDrop(row, this.__getRowModel(row));
      }
    );
  }

  /**
   * @param {!HTMLElement} row
   * @param {!GridItemModel} model
   * @protected
   */
  _filterDragAndDrop(row, model) {
    const dragDisabled = !this.rowsDraggable || (this.dragFilter && !this.dragFilter(model));
    const dropDisabled = !this.dropMode || (this.dropFilter && !this.dropFilter(model));

    const draggableElements = window.ShadyDOM
      ? [row]
      : Array.from(row.children).map(cell => cell._content);

    draggableElements.forEach(e => {
      if (dragDisabled) {
        e.removeAttribute('draggable');
      } else {
        e.setAttribute('draggable', true);
      }
    });

    this._toggleAttribute('drag-disabled', dragDisabled, row);
    this._toggleAttribute('drop-disabled', dropDisabled, row);
  }

  /**
   * Fired when starting to drag grid rows.
   *
   * @event grid-dragstart
   * @param {Object} originalEvent The native dragstart event
   * @param {Object} detail
   * @param {Object} detail.draggedItems the items in the visible viewport that are dragged
   * @param {Function} detail.setDraggedItemsCount Overrides the default number shown in the drag image on multi row drag.
   * Parameter is of type number.
   * @param {Function} detail.setDragData Sets dataTransfer data for the drag operation.
   * Note that "text" is the only data type supported by all the browsers the grid currently supports (including IE11).
   * The function takes two parameters:
   * - type:string The type of the data
   * - data:string The data
   */

  /**
   * Fired when the dragging of the rows ends.
   *
   * @event grid-dragend
   * @param {Object} originalEvent The native dragend event
   */

  /**
   * Fired when a drop occurs on top of the grid.
   *
   * @event grid-drop
   * @param {Object} originalEvent The native drop event
   * @param {Object} detail
   * @param {Object} detail.dropTargetItem The item of the grid row on which the drop occurred.
   * @param {string} detail.dropLocation The position at which the drop event took place relative to a row.
   * Depending on the dropMode value, the drop location can be one of the following
   * - `on-top`: when the drop occurred on top of the row
   * - `above`: when the drop occurred above the row
   * - `below`: when the drop occurred below the row
   * - `empty`: when the drop occurred over the grid, not relative to any specific row
   * @param {string} detail.dragData An array of items with the payload as a string representation as the
   * `data` property and the type of the data as `type` property.
   */
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-dynamic-columns-mixin.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-dynamic-columns-mixin.js ***!
  \***********************************************************************************/
/*! exports provided: DynamicColumnsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicColumnsMixin", function() { return DynamicColumnsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js */ "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/






/**
 * @polymerMixin
 */
const DynamicColumnsMixin = superClass => class DynamicColumnsMixin extends superClass {

  /** @protected */
  ready() {
    super.ready();
    this._addNodeObserver();
  }

  /** @private */
  _hasColumnGroups(columns) {
    for (let i = 0; i < columns.length; i++) {
      if (columns[i].localName === 'vaadin-grid-column-group') {
        return true;
      }
    }

    return false;
  }

  /**
   * @param {!GridColumnGroupElement} el
   * @return {!Array<!GridColumnElement>}
   * @protected
   */
  _getChildColumns(el) {
    return _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedNodesObserver"].getFlattenedNodes(el).filter(this._isColumnElement);
  }

  /** @private */
  _flattenColumnGroups(columns) {
    return columns.map(col => {
      if (col.localName === 'vaadin-grid-column-group') {
        return this._getChildColumns(col);
      } else {
        return [col];
      }
    }).reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);
  }

  /** @private */
  _getColumnTree() {
    var rootColumns = _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedNodesObserver"].getFlattenedNodes(this).filter(this._isColumnElement);
    var _columnTree = [];

    for (var c = rootColumns; ;) {
      _columnTree.push(c);
      if (!this._hasColumnGroups(c)) {
        break;
      }
      c = this._flattenColumnGroups(c);
    }

    return _columnTree;
  }

  /** @protected */
  _updateColumnTree() {
    var columnTree = this._getColumnTree();
    if (!this._arrayEquals(columnTree, this._columnTree)) {
      this._columnTree = columnTree;
    }
  }

  /** @private */
  _addNodeObserver() {
    this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedNodesObserver"](this, info => {

      const rowDetailsTemplate = info.addedNodes.filter(n => n.localName === 'template' && n.classList.contains('row-details'))[0];
      if (rowDetailsTemplate && this._rowDetailsTemplate !== rowDetailsTemplate) {
        this._rowDetailsTemplate = rowDetailsTemplate;
      }

      if (info.addedNodes.filter(this._isColumnElement).length > 0 ||
        info.removedNodes.filter(this._isColumnElement).length > 0) {
        this._updateColumnTree();
      }

      this._debouncerCheckImports = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(
        this._debouncerCheckImports,
        _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__["timeOut"].after(2000),
        this._checkImports.bind(this));

      this._ensureFirstPageLoaded();
    });
  }

  /** @private */
  _arrayEquals(arr1, arr2) {
    if (!arr1 || !arr2 || arr1.length != arr2.length) {
      return false;
    }

    for (var i = 0, l = arr1.length; i < l; i++) {
      // Check if we have nested arrays
      if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
        // recurse into the nested arrays
        if (!this._arrayEquals(arr1[i], arr2[i])) {
          return false;
        }
      } else if (arr1[i] != arr2[i]) {
        return false;
      }
    }
    return true;
  }

  /** @protected */
  _checkImports() {
    [
      'vaadin-grid-column-group',
      'vaadin-grid-filter',
      'vaadin-grid-filter-column',
      'vaadin-grid-tree-toggle',
      'vaadin-grid-selection-column',
      'vaadin-grid-sort-column',
      'vaadin-grid-sorter'
    ].forEach(elementName => {
      var element = this.querySelector(elementName);
      if (element && !(element instanceof _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])) {
        console.warn(`Make sure you have imported the required module for <${elementName}> element.`);
      }
    });
  }

  /** @protected */
  _updateFirstAndLastColumn() {
    Array.from(this.shadowRoot.querySelectorAll('tr')).forEach(row => this._updateFirstAndLastColumnForRow(row));
  }

  /**
   * @param {!HTMLElement} row
   * @protected
   */
  _updateFirstAndLastColumnForRow(row) {
    Array.from(row.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))
      .sort((a, b) => {
        return a._column._order - b._column._order;
      }).forEach((cell, cellIndex, children) => {
        this._toggleAttribute('first-column', cellIndex === 0, cell);
        this._toggleAttribute('last-column', cellIndex === children.length - 1, cell);
      });
  }

  /**
   * @param {!Node} node
   * @return {boolean}
   * @protected
   */
  _isColumnElement(node) {
    return node.nodeType === Node.ELEMENT_NODE && /\bcolumn\b/.test(node.localName);
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-event-context-mixin.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-event-context-mixin.js ***!
  \*********************************************************************************/
/*! exports provided: EventContextMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventContextMixin", function() { return EventContextMixin; });
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */
const EventContextMixin = superClass => class EventContextMixin extends superClass {

  /**
   * Returns an object with context information about the event target:
   * - `item`: the data object corresponding to the targeted row (not specified when targeting header or footer)
   * - `column`: the column element corresponding to the targeted cell (not specified when targeting row details)
   * - `section`: whether the event targeted the body, header, footer or details of the grid
   *
   * These additional properties are included when `item` is specified:
   * - `index`: the index of the item
   * - `selected`: the selected state of the item
   * - `detailsOpened`: whether the row details are open for the item
   * - `expanded`: the expanded state of the tree toggle
   * - `level`: the tree hierarchy level
   *
   * The returned object is populated only when a grid cell, header, footer or row details is found in `event.composedPath()`.
   * This means mostly mouse and keyboard events. If such a grid part is not found in the path, an empty object is returned.
   * This may be the case eg. if the event is fired on the `<vaadin-grid>` element and not any deeper in the DOM, or if
   * the event targets the empty part of the grid body.
   *
   * @param {!Event} event
   * @return {GridEventContext | object}
   */
  getEventContext(event) {

    const context = {};

    const path = event.composedPath();
    const cell = path[path.indexOf(this.$.table) - 3];

    if (!cell) {
      return context;
    }

    context.section = ['body', 'header', 'footer', 'details']
      .filter(section => cell.getAttribute('part').indexOf(section) > -1)[0];

    if (cell._column) {
      context.column = cell._column;
    }

    if (context.section === 'body' || context.section === 'details') {
      Object.assign(context, this.__getRowModel(cell.parentElement));
    }

    return context;
  }

};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-column.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-column.js ***!
  \***************************************************************************/
/*! exports provided: GridFilterColumnElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFilterColumnElement", function() { return GridFilterColumnElement; });
/* harmony import */ var _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-grid-column.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js");
/* harmony import */ var _vaadin_grid_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-grid-filter.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




/**
 * `<vaadin-grid-filter-column>` is a helper element for the `<vaadin-grid>`
 * that provides default header template and functionality for filtering.
 *
 * #### Example:
 * ```html
 * <vaadin-grid items="[[items]]">
 *  <vaadin-grid-filter-column path="name.first"></vaadin-grid-filter-column>
 *
 *  <vaadin-grid-column>
 *    ...
 * ```
 *
 */
class GridFilterColumnElement extends _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_0__["GridColumnElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <template class="header" id="headerTemplate">
      <vaadin-grid-filter path="[[path]]" value="[[_filterValue]]">
        <vaadin-text-field theme="small" focus-target="" style="max-width: 100%;" slot="filter" value="{{_filterValue}}" label="[[_getHeader(header, path)]]"></vaadin-text-field>
      </vaadin-grid-filter>
    </template>
`;
  }

  static get is() {
    return 'vaadin-grid-filter-column';
  }

  static get properties() {
    return {
      /**
       * JS Path of the property in the item used for filtering the data.
       */
      path: String,

      /**
       * Text to display as the label of the column filter text-field.
       */
      header: String
    };
  }

  /** @private */
  _prepareHeaderTemplate() {
    const headerTemplate = this._prepareTemplatizer(this.$.headerTemplate);
    // needed to override the dataHost correctly in case internal template is used.
    headerTemplate.templatizer.dataHost = this;
    return headerTemplate;
  }

  /** @private */
  _getHeader(header, path) {
    return header || this._generateHeader(path);
  }
}

customElements.define(GridFilterColumnElement.is, GridFilterColumnElement);




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-mixin.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-mixin.js ***!
  \**************************************************************************/
/*! exports provided: FilterMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMixin", function() { return FilterMixin; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */
const FilterMixin = superClass => class FilterMixin extends superClass {

  static get properties() {
    return {
      /** @private */
      _filters: {
        type: Array,
        value: function() {
          return [];
        }
      }
    };
  }

  /** @protected */
  ready() {
    super.ready();
    this.addEventListener('filter-changed', this._filterChanged.bind(this));
  }

  /** @private */
  _filterChanged(e) {
    if (this._filters.indexOf(e.target) === -1) {
      this._filters.push(e.target);
    }

    e.stopPropagation();

    if (this.dataProvider) {
      this.clearCache();
    }
  }

  /**
   * @return {!Array<!GridFilter>}
   * @protected
   */
  _mapFilters() {
    return this._filters.map(filter => {
      return {
        path: filter.path,
        value: filter.value
      };
    });
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter.js":
/*!********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter.js ***!
  \********************************************************************/
/*! exports provided: GridFilterElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFilterElement", function() { return GridFilterElement; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _vaadin_vaadin_text_field_src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-text-field/src/vaadin-text-field.js */ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







/**
 * `<vaadin-grid-filter>` is a helper element for the `<vaadin-grid>` that provides out-of-the-box UI controls,
 * and handlers for filtering the grid data.
 *
 * #### Example:
 * ```html
 * <vaadin-grid-column>
 *   <template class="header">
 *     <vaadin-grid-filter path="name.first"></vaadin-grid-filter>
 *   </template>
 *   <template>[[item.name.first]]</template>
 * </vaadin-grid-column>
 * ```
 *
 */
class GridFilterElement extends _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <style>
      :host {
        display: inline-flex;
        max-width: 100%;
      }

      #filter {
        width: 100%;
        box-sizing: border-box;
      }
    </style>
    <slot name="filter">
      <vaadin-text-field id="filter" value="{{value}}"></vaadin-text-field>
    </slot>
`;
  }

  static get is() {
    return 'vaadin-grid-filter';
  }

  static get properties() {
    return {
      /**
       * JS Path of the property in the item used for filtering the data.
       */
      path: String,

      /**
       * Current filter value.
       */
      value: {
        type: String,
        notify: true
      },

      /** @private */
      _connected: Boolean
    };
  }

  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    this._connected = true;
  }

  static get observers() {
    return ['_filterChanged(path, value, _connected)'];
  }

  /** @protected */
  ready() {
    super.ready();

    const child = this.firstElementChild;
    if (child && child.getAttribute('slot') !== 'filter') {
      console.warn('Make sure you have assigned slot="filter" to the child elements of <vaadin-grid-filter>');
      child.setAttribute('slot', 'filter');
    }
  }

  /** @private */
  _filterChanged(path, value, connected) {
    if (path === undefined || value === undefined || !connected) {
      return;
    }
    if (this._previousValue === undefined && value === '') {
      return;
    }
    this._previousValue = value;

    this._debouncerFilterChanged = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__["Debouncer"].debounce(
      this._debouncerFilterChanged,
      _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_4__["timeOut"].after(200),
      () => {
        this.dispatchEvent(new CustomEvent('filter-changed', {bubbles: true}));
      });
  }

  focus() {
    this.$.filter.focus();
  }
}

customElements.define(GridFilterElement.is, GridFilterElement);




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-keyboard-navigation-mixin.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-keyboard-navigation-mixin.js ***!
  \***************************************************************************************/
/*! exports provided: KeyboardNavigationMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardNavigationMixin", function() { return KeyboardNavigationMixin; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */
const KeyboardNavigationMixin = superClass => class KeyboardNavigationMixin extends superClass {
  static get properties() {
    return {
      /** @private */
      _headerFocusable: {
        type: Object,
        observer: '_focusableChanged'
      },

      /**
       * @type {!HTMLElement | undefined}
       * @protected
       */
      _itemsFocusable: {
        type: Object,
        observer: '_focusableChanged'
      },

      /** @private */
      _footerFocusable: {
        type: Object,
        observer: '_focusableChanged'
      },

      /** @private */
      _navigatingIsHidden: Boolean,

      /**
       * @type {number}
       * @protected
       */
      _focusedItemIndex: {
        type: Number,
        value: 0
      },

      /** @private */
      _focusedColumnOrder: Number
    };
  }

  /** @protected */
  ready() {
    super.ready();

    if (this._ios || this._android) {
      // Disable keyboard navigation on mobile devices
      return;
    }

    this.addEventListener('keydown', this._onKeyDown);
    this.addEventListener('keyup', this._onKeyUp);

    this.addEventListener('focusin', this._onFocusIn);
    this.addEventListener('focusout', this._onFocusOut);

    // When focus goes from cell to another cell, focusin/focusout events do
    // not escape the grid’s shadowRoot, thus listening inside the shadowRoot.
    this.$.table.addEventListener('focusin', this._onCellFocusIn.bind(this));
    this.$.table.addEventListener('focusout', this._onCellFocusOut.bind(this));

    this.addEventListener('mousedown', () => {
      this._toggleAttribute('navigating', false, this);
      this._isMousedown = true;
    });
    this.addEventListener('mouseup', () => this._isMousedown = false);
  }

  /** @private */
  _focusableChanged(focusable, oldFocusable) {
    if (oldFocusable) {
      oldFocusable.setAttribute('tabindex', '-1');
    }
    if (focusable) {
      focusable.setAttribute('tabindex', '0');
    }
  }

  /**
   * @param {!KeyboardEvent} e
   * @protected
   */
  _onKeyDown(e) {
    // Ensure standard key value, unified across browsers
    let key = e.key;
    if (key === 'Up' || key === 'Down' || key === 'Left' || key === 'Right') {
      // MSIE & Edge
      key = 'Arrow' + key;
    }
    if (key === 'Esc') {
      // MSIE & Edge
      key = 'Escape';
    }
    if (key === 'Spacebar') {
      // MSIE
      key = ' ';
    }

    let keyGroup;
    switch (key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'PageUp':
      case 'PageDown':
      case 'Home':
      case 'End':
        keyGroup = 'Navigation';
        break;
      case 'Enter':
      case 'Escape':
      case 'F2':
        keyGroup = 'Interaction';
        break;
      case 'Tab':
        keyGroup = 'Tab';
        break;
      case ' ':
        keyGroup = 'Space';
        break;
    }

    this._detectInteracting(e);
    if (this.hasAttribute('interacting') && keyGroup !== 'Interaction') {
      // When in the interacting mode, only the “Interaction” keys are handled.
      keyGroup = undefined;
    }

    if (keyGroup) {
      this[`_on${keyGroup}KeyDown`](e, key);
    }
  }

  /** @private */
  _ensureScrolledToIndex(index) {
    const targetRowInDom = Array.from(this.$.items.children).filter(child => child.index === index)[0];
    if (!targetRowInDom) {
      this._scrollToIndex(index);
    }
  }

  /** @private */
  _onNavigationKeyDown(e, key) {
    this._scrollHandler();

    e.preventDefault();

    function indexOfChildElement(el) {
      return Array.prototype.indexOf.call(el.parentNode.children, el);
    }

    const visibleItemsCount = this._lastVisibleIndex - this._firstVisibleIndex - 1;

    let dx = 0, dy = 0;
    switch (key) {
      case 'ArrowRight':
        dx = this.__isRTL ? -1 : 1;
        break;
      case 'ArrowLeft':
        dx = this.__isRTL ? 1 : -1;
        break;
      case 'Home':
        dx = -Infinity;
        e.ctrlKey && (dy = -Infinity);
        break;
      case 'End':
        dx = Infinity;
        e.ctrlKey && (dy = Infinity);
        break;
      case 'ArrowDown':
        dy = 1;
        break;
      case 'ArrowUp':
        dy = -1;
        break;
      case 'PageDown':
        dy = visibleItemsCount;
        break;
      case 'PageUp':
        dy = -visibleItemsCount;
        break;
    }

    const activeCell = e.composedPath()[0];
    const columnIndex = indexOfChildElement(activeCell);
    const isRowDetails = this._elementMatches(activeCell, '[part~="details-cell"]');

    const activeRow = activeCell.parentNode;

    const activeRowGroup = activeRow.parentNode;
    const maxRowIndex = (activeRowGroup === this.$.items ? this._effectiveSize : activeRowGroup.children.length) - 1;

    // Body rows have index property, otherwise DOM child index of the row is used.
    const rowIndex = (activeRowGroup === this.$.items) ?
      (this._focusedItemIndex !== undefined ? this._focusedItemIndex : activeRow.index) :
      indexOfChildElement(activeRow);

    // Index of the destination row
    let dstRowIndex = Math.max(0, Math.min(rowIndex + dy, maxRowIndex));

    // Row details navigation logic
    let dstIsRowDetails = false;
    if (activeRowGroup === this.$.items) {
      const item = activeRow._item;
      const dstItem = this._cache.getItemForIndex(dstRowIndex);
      // Should we navigate to row details?
      if (isRowDetails) {
        dstIsRowDetails = dy === 0;
      } else {
        dstIsRowDetails = dy === 1 && this._isDetailsOpened(item) ||
          dy === -1 && dstRowIndex !== rowIndex && this._isDetailsOpened(dstItem);
      }
      // Should we navigate between details and regular cells of the same row?
      if (dstIsRowDetails !== isRowDetails &&
          (dy === 1 && dstIsRowDetails || dy === -1 && !dstIsRowDetails)) {
        dstRowIndex = rowIndex;
      }
    }

    // Header and footer could have hidden rows, e. g., if none of the columns
    // or groups on the given column tree level define template. Skip them
    // in vertical keyboard navigation.
    if (activeRowGroup !== this.$.items) {
      if (dstRowIndex > rowIndex) {
        while (
          dstRowIndex < maxRowIndex &&
          activeRowGroup.children[dstRowIndex].hidden
        ) {
          dstRowIndex++;
        }
      } else if (dstRowIndex < rowIndex) {
        while (
          dstRowIndex > 0 &&
          activeRowGroup.children[dstRowIndex].hidden
        ) {
          dstRowIndex--;
        }
      }
    }

    // _focusedColumnOrder is memoized — this is to ensure predictable
    // navigation when entering and leaving detail and column group cells.
    if (this._focusedColumnOrder === undefined) {
      if (isRowDetails) {
        this._focusedColumnOrder = 0;
      } else {
        this._focusedColumnOrder = this._getColumns(activeRowGroup, rowIndex).filter(c => !c.hidden)[columnIndex]._order;
      }
    }

    // Find orderedColumnIndex — the index of order closest matching the
    // original _focusedColumnOrder in the sorted array of orders
    // of the visible columns on the destination row.
    const dstColumns = this._getColumns(activeRowGroup, dstRowIndex).filter(c => !c.hidden);
    const dstSortedColumnOrders = dstColumns.map(c => c._order)
      .sort((b, a) => (b - a));
    const maxOrderedColumnIndex = dstSortedColumnOrders.length - 1;
    const orderedColumnIndex = dstSortedColumnOrders.indexOf(
      dstSortedColumnOrders.slice(0).sort((b, a) =>
        Math.abs(b - this._focusedColumnOrder) - Math.abs(a - this._focusedColumnOrder)
      )[0]
    );

    // Index of the destination column order
    const dstOrderedColumnIndex = (dy === 0 && isRowDetails) ? orderedColumnIndex :
      Math.max(0, Math.min(orderedColumnIndex + dx, maxOrderedColumnIndex));

    if (dstOrderedColumnIndex !== orderedColumnIndex) {
      // Horizontal movement invalidates stored _focusedColumnOrder
      this._focusedColumnOrder = undefined;
    }

    // Ensure correct vertical scroll position, destination row is visible
    if (activeRowGroup === this.$.items) {
      this._ensureScrolledToIndex(dstRowIndex);
    }

    // This has to be set after scrolling, otherwise it can be removed by
    // `_preventScrollerRotatingCellFocus(row, index)` during scrolling.
    this._toggleAttribute('navigating', true, this);

    const columnIndexByOrder = dstColumns.reduce((acc, col, i) => (acc[col._order] = i, acc), {});
    const dstColumnIndex = columnIndexByOrder[dstSortedColumnOrders[dstOrderedColumnIndex]];

    // For body rows, use index property to find destination row, otherwise use DOM child index
    const dstRow = activeRowGroup === this.$.items ?
      Array.from(activeRowGroup.children).filter(el => el.index === dstRowIndex)[0] :
      activeRowGroup.children[dstRowIndex];
    if (!dstRow) {
      return;
    }

    // Here we go!
    const dstCell = dstIsRowDetails ?
      Array.from(dstRow.children)
        .filter(el => this._elementMatches(el, '[part~="details-cell"]'))[0] :
      dstRow.children[dstColumnIndex];
    this._scrollHorizontallyToCell(dstCell);
    if (activeRowGroup === this.$.items) {
      // When scrolling with repeated keydown, sometimes FocusEvent listeners
      // are too late to update _focusedItemIndex. Ensure next keydown
      // listener invocation gets updated _focusedItemIndex value.
      this._focusedItemIndex = dstRowIndex;
    }

    if (activeRowGroup === this.$.items) {
      const dstRect = dstCell.getBoundingClientRect();
      const footerTop = this.$.footer.getBoundingClientRect().top;
      const headerBottom = this.$.header.getBoundingClientRect().bottom;
      if (dstRect.bottom > footerTop) {
        this.$.table.scrollTop += dstRect.bottom - footerTop;
        this._scrollHandler();
      } else if (dstRect.top < headerBottom) {
        this.$.table.scrollTop -= headerBottom - dstRect.top;
        this._scrollHandler();
      }
    }

    dstCell.focus();
  }

  /** @private */
  _parseEventPath(path) {
    const tableIndex = path.indexOf(this.$.table);
    return {
      rowGroup: path[tableIndex - 1],
      row: path[tableIndex - 2],
      cell: path[tableIndex - 3]
    };
  }

  /** @private */
  _onInteractionKeyDown(e, key) {
    const localTarget = e.composedPath()[0];
    const localTargetIsTextInput = localTarget.localName === 'input' &&
      !/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(localTarget.type);

    let wantInteracting;
    switch (key) {
      case 'Enter':
        wantInteracting = this.hasAttribute('interacting') ? !localTargetIsTextInput : true;
        break;
      case 'Escape':
        wantInteracting = false;
        break;
      case 'F2':
        wantInteracting = !this.hasAttribute('interacting');
        break;
    }

    const {cell} = this._parseEventPath(e.composedPath());

    if (this.hasAttribute('interacting') !== wantInteracting) {
      if (wantInteracting) {
        const focusTarget = cell._content.querySelector('[focus-target]') ||
          cell._content.firstElementChild;
        if (focusTarget) {
          e.preventDefault();
          focusTarget.focus();
          this._toggleAttribute('interacting', true, this);
          this._toggleAttribute('navigating', false, this);
        }
      } else {
        e.preventDefault();
        this._focusedColumnOrder = undefined;
        cell.focus();
        this._toggleAttribute('interacting', false, this);
        this._toggleAttribute('navigating', true, this);
      }
    }
  }

  /** @private */
  _predictFocusStepTarget(srcElement, step) {
    const tabOrder = [
      this.$.table,
      this._headerFocusable,
      this._itemsFocusable,
      this._footerFocusable,
      this.$.focusexit
    ];

    let index = tabOrder.indexOf(srcElement);

    index += step;
    while (index >= 0 && index <= tabOrder.length - 1 &&
        (!tabOrder[index] || tabOrder[index].parentNode.hidden)) {
      index += step;
    }

    return tabOrder[index];
  }

  /** @private */
  _onTabKeyDown(e) {
    const focusTarget = this._predictFocusStepTarget(e.composedPath()[0], e.shiftKey ? -1 : 1);

    if (focusTarget === this.$.table) {
      // The focus is about to exit the grid to the top.
      this.$.table.focus();
    } else if (focusTarget === this.$.focusexit) {
      // The focus is about to exit the grid to the bottom.
      this.$.focusexit.focus();
    } else if (focusTarget === this._itemsFocusable) {
      let itemsFocusTarget = focusTarget;
      const targetRow = this._itemsFocusable.parentNode;
      this._ensureScrolledToIndex(this._focusedItemIndex);
      if (targetRow.index !== this._focusedItemIndex) {
        // The target row, which is about to be focused next, has been
        // assigned with a new index since last focus, probably because of
        // scrolling. Focus the row for the stored focused item index instead.
        const columnIndex = Array.from(targetRow.children).indexOf(this._itemsFocusable);
        const focusedItemRow = Array.from(this.$.items.children)
          .filter(row => row.index === this._focusedItemIndex)[0];
        if (focusedItemRow) {
          itemsFocusTarget = focusedItemRow.children[columnIndex];
        }
      }
      e.preventDefault();
      itemsFocusTarget.focus();
    } else {
      e.preventDefault();
      focusTarget.focus();
    }

    this._toggleAttribute('navigating', true, this);
  }

  /** @private */
  _onSpaceKeyDown(e) {
    e.preventDefault();

    const cell = e.composedPath()[0];
    if (!cell._content || !cell._content.firstElementChild) {
      this.dispatchEvent(new CustomEvent('cell-activate', {detail: {
        model: this.__getRowModel(cell.parentElement)
      }}));
    }
  }

  /** @private */
  _onKeyUp(e) {
    if (!/^( |SpaceBar)$/.test(e.key)) {
      return;
    }

    e.preventDefault();

    const cell = e.composedPath()[0];
    if (cell._content && cell._content.firstElementChild) {
      const wasNavigating = this.hasAttribute('navigating');
      cell._content.firstElementChild.click();
      this._toggleAttribute('navigating', wasNavigating, this);
    }
  }

  /**
   * @param {!FocusEvent} e
   * @protected
   */
  _onFocusIn(e) {
    if (!this._isMousedown) {
      this._toggleAttribute('navigating', true, this);
    }

    const rootTarget = e.composedPath()[0];

    if (rootTarget === this.$.table ||
        rootTarget === this.$.focusexit) {
      // The focus enters the top (bottom) of the grid, meaning that user has
      // tabbed (shift-tabbed) into the grid. Move the focus to
      // the first (the last) focusable.
      this._predictFocusStepTarget(
        rootTarget,
        rootTarget === this.$.table ? 1 : -1
      ).focus();
      this._toggleAttribute('interacting', false, this);
    } else {
      this._detectInteracting(e);
    }
  }

  /**
   * @param {!FocusEvent} e
   * @protected
   */
  _onFocusOut(e) {
    this._toggleAttribute('navigating', false, this);
    this._detectInteracting(e);
  }

  /** @private */
  _onCellFocusIn(e) {
    this._detectInteracting(e);

    if (e.composedPath().indexOf(this.$.table) === 3) {
      const cell = e.composedPath()[0];
      this._activeRowGroup = cell.parentNode.parentNode;
      if (this._activeRowGroup === this.$.header) {
        this._headerFocusable = cell;
      } else if (this._activeRowGroup === this.$.items) {
        this._itemsFocusable = cell;
      } else if (this._activeRowGroup === this.$.footer) {
        this._footerFocusable = cell;
      }
      // Inform cell content of the focus (used in <vaadin-grid-sorter>)
      cell._content.dispatchEvent(new CustomEvent('cell-focusin', {bubbles: false}));
    }

    this._detectFocusedItemIndex(e);
  }

  /** @private */
  _onCellFocusOut(e) {
    if (e.composedPath().indexOf(this.$.table) === 3) {
      const cell = e.composedPath()[0];
      // Inform cell content of the focus (used in <vaadin-grid-sorter>)
      cell._content.dispatchEvent(new CustomEvent('cell-focusout', {bubbles: false}));
    }
  }

  /** @private */
  _detectInteracting(e) {
    this._toggleAttribute('interacting',
      e.composedPath().some(el => el.localName === 'vaadin-grid-cell-content'),
      this);
  }

  /** @private */
  _detectFocusedItemIndex(e) {
    const {rowGroup, row} = this._parseEventPath(e.composedPath());
    if (rowGroup === this.$.items) {
      this._focusedItemIndex = row.index;
    }
  }

  /**
   * @param {!HTMLTableRowElement} row
   * @param {number} index
   * @protected
   */
  _preventScrollerRotatingCellFocus(row, index) {
    if (row.index === this._focusedItemIndex && this.hasAttribute('navigating') && this._activeRowGroup === this.$.items) {
      // Focused item has went, hide navigation mode
      this._navigatingIsHidden = true;
      this._toggleAttribute('navigating', false, this);
    }
    if (index === this._focusedItemIndex && this._navigatingIsHidden) {
      // Focused item is back, restore navigation mode
      this._navigatingIsHidden = false;
      this._toggleAttribute('navigating', true, this);
    }
  }

  /**
   * @param {HTMLTableSectionElement=} rowGroup
   * @param {number=} rowIndex
   * @return {!Array<!GridColumnElement>}
   * @protected
   */
  _getColumns(rowGroup, rowIndex) {
    let columnTreeLevel = this._columnTree.length - 1;
    if (rowGroup === this.$.header) {
      columnTreeLevel = rowIndex;
    } else if (rowGroup === this.$.footer) {
      columnTreeLevel = this._columnTree.length - 1 - rowIndex;
    }
    return this._columnTree[columnTreeLevel];
  }

  /** @protected */
  _resetKeyboardNavigation() {
    if (this.$.header.firstElementChild) {
      this._headerFocusable = Array.from(this.$.header.firstElementChild.children).filter(el => !el.hidden)[0];
    }

    if (this.$.items.firstElementChild) {
      const firstVisibleIndexRow = this._iterateItems((pidx, vidx) => {
        if (this._firstVisibleIndex === vidx) {
          return this.$.items.children[pidx];
        }
      });
      if (firstVisibleIndexRow) {
        this._itemsFocusable = Array.from(firstVisibleIndexRow.children).filter(el => !el.hidden)[0];
      }
    }

    if (this.$.footer.firstElementChild) {
      this._footerFocusable = Array.from(this.$.footer.firstElementChild.children).filter(el => !el.hidden)[0];
    }
  }

  /**
   * @param {!HTMLElement} dstCell
   * @protected
   */
  _scrollHorizontallyToCell(dstCell) {
    if (dstCell.hasAttribute('frozen') || this._elementMatches(dstCell, '[part~="details-cell"]')) {
      // These cells are, by design, always visible, no need to scroll.
      return;
    }

    const dstCellRect = dstCell.getBoundingClientRect();
    const dstRow = dstCell.parentNode;
    const dstCellIndex = Array.from(dstRow.children).indexOf(dstCell);
    const tableRect = this.$.table.getBoundingClientRect();
    let leftBoundary = tableRect.left, rightBoundary = tableRect.right;
    for (let i = dstCellIndex - 1; i >= 0; i--) {
      const cell = dstRow.children[i];
      if (cell.hasAttribute('hidden') ||
          this._elementMatches(cell, '[part~="details-cell"]')) {
        continue;
      }
      if (cell.hasAttribute('frozen')) {
        leftBoundary = cell.getBoundingClientRect().right;
        break;
      }
    }
    for (let i = dstCellIndex + 1; i < dstRow.children.length; i++) {
      const cell = dstRow.children[i];
      if (cell.hasAttribute('hidden') ||
          this._elementMatches(cell, '[part~="details-cell"]')) {
        continue;
      }
      if (cell.hasAttribute('frozen')) {
        rightBoundary = cell.getBoundingClientRect().left;
        break;
      }
    }

    if (dstCellRect.left < leftBoundary) {
      this.$.table.scrollLeft += Math.round(dstCellRect.left - leftBoundary);
    }
    if (dstCellRect.right > rightBoundary) {
      this.$.table.scrollLeft += Math.round(dstCellRect.right - rightBoundary);
    }
  }

  /** @private */
  _elementMatches(el, query) {
    return el.matches ? el.matches(query) :
      Array.from(el.parentNode.querySelectorAll(query)).indexOf(el) !== -1;
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-row-details-mixin.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-row-details-mixin.js ***!
  \*******************************************************************************/
/*! exports provided: RowDetailsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowDetailsMixin", function() { return RowDetailsMixin; });
/* harmony import */ var _vaadin_grid_templatizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-grid-templatizer.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-templatizer.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




/**
 * @polymerMixin
 */
const RowDetailsMixin = superClass => class RowDetailsMixin extends superClass {
  static get properties() {
    return {
      /**
       * An array containing references to items with open row details.
       * @type {Array<GridItem> | null | undefined}
       */
      detailsOpenedItems: {
        type: Array,
        value: function() {
          return [];
        }
      },

      /**
       * @type {HTMLTemplateElement}
       * @protected
       */
      _rowDetailsTemplate: Object,

      /**
       * Custom function for rendering the content of the row details.
       * Receives three arguments:
       *
       * - `root` The row details content DOM element. Append your content to it.
       * - `grid` The `<vaadin-grid>` element.
       * - `model` The object with the properties related with
       *   the rendered item, contains:
       *   - `model.index` The index of the item.
       *   - `model.item` The item.
       *
       * @type {GridRowDetailsRenderer | null | undefined}
       */
      rowDetailsRenderer: Function,

      /**
       * @type {!Array<!HTMLElement> | undefined}
       * @protected
       */
      _detailsCells: {
        type: Array,
      }
    };
  }

  static get observers() {
    return [
      '_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)',
      '_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)'
    ];
  }

  /** @private */
  _rowDetailsTemplateOrRendererChanged(rowDetailsTemplate, rowDetailsRenderer) {
    if (rowDetailsTemplate && rowDetailsRenderer) {
      throw new Error('You should only use either a renderer or a template for row details');
    }
    if (rowDetailsTemplate || rowDetailsRenderer) {
      if (rowDetailsTemplate && !rowDetailsTemplate.templatizer) {
        var templatizer = new _vaadin_grid_templatizer_js__WEBPACK_IMPORTED_MODULE_0__["Templatizer"]();
        templatizer._grid = this;
        templatizer.dataHost = this.dataHost;
        templatizer.template = rowDetailsTemplate;
        rowDetailsTemplate.templatizer = templatizer;
      }

      if (this._columnTree) {
        // Only update the rows if the column tree has already been initialized
        Array.from(this.$.items.children).forEach(row => {
          if (!row.querySelector('[part~=details-cell]')) {
            this._updateRow(row, this._columnTree[this._columnTree.length - 1]);
            this._a11yUpdateRowDetailsOpened(row, false);
          }
          // Clear any old template instances
          delete row.querySelector('[part~=details-cell]')._instance;
        });
      }

      if (this.detailsOpenedItems.length) {
        Array.from(this.$.items.children).forEach(this._toggleDetailsCell, this);
        this._update();
      }
    }
  }

  /** @private */
  _detailsOpenedItemsChanged(changeRecord, rowDetailsTemplate, rowDetailsRenderer) {
    if (changeRecord.path === 'detailsOpenedItems.length' || !changeRecord.value) {
      // Let’s avoid duplicate work of both “.splices” and “.length” updates.
      return;
    }
    Array.from(this.$.items.children).forEach(row => {
      this._toggleDetailsCell(row, row._item);
      this._a11yUpdateRowDetailsOpened(row, this._isDetailsOpened(row._item));
      this._toggleAttribute('details-opened', this._isDetailsOpened(row._item), row);
    });
  }

  /**
   * @param {!HTMLElement} cell
   * @protected
   */
  _configureDetailsCell(cell) {
    cell.setAttribute('part', 'cell details-cell');
    // Freeze the details cell, so that it does not scroll horizontally
    // with the normal cells. This way it looks less weird.
    this._toggleAttribute('frozen', true, cell);
  }

  /**
   * @param {!HTMLElement} row
   * @param {!GridItem} item
   * @protected
   */
  _toggleDetailsCell(row, item) {
    const cell = row.querySelector('[part~="details-cell"]');
    if (!cell) {
      return;
    }
    const detailsHidden = !this._isDetailsOpened(item);
    const hiddenChanged = !!cell.hidden !== detailsHidden;

    if (!cell._instance && !cell._renderer || cell.hidden !== detailsHidden) {
      cell.hidden = detailsHidden;
      if (detailsHidden) {
        row.style.removeProperty('padding-bottom');
      } else {
        if (this.rowDetailsRenderer) {
          cell._renderer = this.rowDetailsRenderer;
          cell._renderer.call(this, cell._content, this, {index: row.index, item: item});
        } else if (this._rowDetailsTemplate && !cell._instance) {
          // Stamp the template
          cell._instance = this._rowDetailsTemplate.templatizer.createInstance();
          cell._content.innerHTML = '';
          cell._content.appendChild(cell._instance.root);
          this._updateItem(row, item);
        }

        Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_1__["flush"])();
        row.style.setProperty('padding-bottom', `${cell.offsetHeight}px`);

        requestAnimationFrame(() => this.notifyResize());
      }
    }
    if (hiddenChanged) {
      this._updateMetrics();
      this._positionItems();
    }
  }

  /** @protected */
  _updateDetailsCellHeights() {
    Array.from(this.$.items.querySelectorAll('[part~="details-cell"]:not([hidden])')).forEach(cell => {
      cell.parentElement.style.setProperty('padding-bottom', `${cell.offsetHeight}px`);
    });
  }

  /**
   * @param {!GridItem} item
   * @return {boolean}
   * @protected
   */
  _isDetailsOpened(item) {
    return this.detailsOpenedItems && this._getItemIndexInArray(item, this.detailsOpenedItems) !== -1;
  }

  /**
   * Open the details row of a given item.
   * @param {!GridItem} item
   */
  openItemDetails(item) {
    if (!this._isDetailsOpened(item)) {
      this.push('detailsOpenedItems', item);
    }
  }

  /**
   * Close the details row of a given item.
   * @param {!GridItem} item
   */
  closeItemDetails(item) {
    if (this._isDetailsOpened(item)) {
      this.splice('detailsOpenedItems', this._getItemIndexInArray(item, this.detailsOpenedItems), 1);
    }
  }

  /** @private */
  _detailsOpenedInstanceChangedCallback(instance, value) {
    if (super._detailsOpenedInstanceChangedCallback) {
      super._detailsOpenedInstanceChangedCallback(instance, value);
    }
    if (value) {
      this.openItemDetails(instance.item);
    } else {
      this.closeItemDetails(instance.item);
    }
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroll-mixin.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroll-mixin.js ***!
  \**************************************************************************/
/*! exports provided: ScrollMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollMixin", function() { return ScrollMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




/**
 * @polymerMixin
 */
const ScrollMixin = superClass => class ScrollMixin extends superClass {
  /** @private */
  get _timeouts() {
    return {
      SCROLLING: 500,
      IGNORE_WHEEL: 500
    };
  }

  static get properties() {
    return {
      /**
       * Cached array of frozen cells
       * @private
       */
      _frozenCells: {
        type: Array,
        value: () => [],
      },

      /** @private */
      _rowWithFocusedElement: Element,

      /** @private */
      _deltaYAcc: {
        type: Number,
        value: 0
      },

      /** @private */
      _useSticky: {
        type: Boolean,
        value: window.CSS && window.CSS.supports &&
          (window.CSS.supports('position', 'sticky') || window.CSS.supports('position', '-webkit-sticky'))
      }

    };
  }

  static get observers() {
    return [
      '_scrollViewportHeightUpdated(_viewportHeight)'
    ];
  }

  /**
   * Override (from iron-scroll-target-behavior) to avoid document scroll
   * @private
   */
  set _scrollTop(top) {
    this.$.table.scrollTop = top;
  }

  /** @private */
  get _scrollTop() {
    return this.$.table.scrollTop;
  }

  constructor() {
    super();
    this._scrollLineHeight = this._getScrollLineHeight();
  }

  /**
   * @returns {Number|undefined} - The browser's default font-size in pixels
   * @private
   */
  _getScrollLineHeight() {
    const el = document.createElement('div');
    el.style.fontSize = 'initial';
    el.style.display = 'none';
    document.body.appendChild(el);
    const fontSize = window.getComputedStyle(el).fontSize;
    document.body.removeChild(el);
    return fontSize ? window.parseInt(fontSize) : undefined;
  }

  /** @private */
  _scrollViewportHeightUpdated(_viewportHeight) {
    this._scrollPageHeight = _viewportHeight - this.$.header.clientHeight - this.$.footer.clientHeight - this._scrollLineHeight;
  }

  /** @protected */
  ready() {
    super.ready();

    // Preserve accessor to the legacy scrolling functionality
    this.$.outerscroller = document.createElement('div');

    this.scrollTarget = this.$.table;

    this.addEventListener('wheel', this._onWheel);

    this.$.items.addEventListener('focusin', (e) => {
      const itemsIndex = e.composedPath().indexOf(this.$.items);
      this._rowWithFocusedElement = e.composedPath()[itemsIndex - 1];
    });
    this.$.items.addEventListener('focusout', () => this._rowWithFocusedElement = undefined);

    // Reordering the physical rows cancels the user's grab of the scroll bar handle on Safari.
    // Need to defer reordering until the user lets go of the scroll bar handle.
    this.scrollTarget.addEventListener('mousedown', () => this.__mouseDown = true);
    this.scrollTarget.addEventListener('mouseup', () => {
      this.__mouseDown = false;
      if (this.__pendingReorder) {
        this.__pendingReorder = false;
        setTimeout(() => this._reorderRows(), this._timeouts.SCROLLING);
      }
    });
  }

  /**
   * Scroll to a specific row index in the virtual list. Note that the row index is
   * not always the same for any particular item. For example, sorting/filtering/expanding
   * or collapsing hierarchical items can affect the row index related to an item.
   *
   * @param {number} index Row index to scroll to
   */
  scrollToIndex(index) {
    this._accessIronListAPI(() => super.scrollToIndex(index));
  }

  /** @private */
  _onWheel(e) {
    if (e.ctrlKey || this._hasScrolledAncestor(e.target, e.deltaX, e.deltaY)) {
      return;
    }

    const table = this.$.table;

    let deltaY = e.deltaY;
    if (e.deltaMode === WheelEvent.DOM_DELTA_LINE) {
      // Scrolling by "lines of text" instead of pixels
      deltaY *= this._scrollLineHeight;
    } else if (e.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
      // Scrolling by "pages" instead of pixels
      deltaY *= this._scrollPageHeight;
    }

    if (this._wheelAnimationFrame) {
      // Skip new wheel events while one is being processed
      this._deltaYAcc += deltaY;
      e.preventDefault();
      return;
    }

    deltaY += this._deltaYAcc;
    this._deltaYAcc = 0;

    this._wheelAnimationFrame = true;
    this._debouncerWheelAnimationFrame = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(
      this._debouncerWheelAnimationFrame,
      _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["animationFrame"],
      () => this._wheelAnimationFrame = false
    );

    var momentum = Math.abs(e.deltaX) + Math.abs(deltaY);

    if (this._canScroll(table, e.deltaX, deltaY)) {
      e.preventDefault();
      table.scrollTop += deltaY;
      table.scrollLeft += e.deltaX;
      this._scrollHandler();
      this._hasResidualMomentum = true;

      this._ignoreNewWheel = true;
      this._debouncerIgnoreNewWheel = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(
        this._debouncerIgnoreNewWheel,
        _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(this._timeouts.IGNORE_WHEEL),
        () => this._ignoreNewWheel = false
      );
    } else if (this._hasResidualMomentum && momentum <= this._previousMomentum || this._ignoreNewWheel) {
      e.preventDefault();
    } else if (momentum > this._previousMomentum) {
      this._hasResidualMomentum = false;
    }
    this._previousMomentum = momentum;
  }

  /**
   * Determines if the element has an ancestor prior to this
   * cell content that handles the scroll delta
   * @private
   */
  _hasScrolledAncestor(el, deltaX, deltaY) {
    if (el.localName === 'vaadin-grid-cell-content') {
      return false;
    } else if (this._canScroll(el, deltaX, deltaY)
      && ['auto', 'scroll'].indexOf(getComputedStyle(el).overflow) !== -1) {
      return true;
    } else if (el !== this && el.parentElement) {
      return this._hasScrolledAncestor(el.parentElement, deltaX, deltaY);
    }
  }

  /**
   * Determines if the the given scroll deltas can be applied to the element
   * (fully or partially)
   * @private
   */
  _canScroll(el, deltaX, deltaY) {
    return (deltaY > 0 && el.scrollTop < el.scrollHeight - el.offsetHeight) ||
    (deltaY < 0 && el.scrollTop > 0) ||
    (deltaX > 0 && el.scrollLeft < el.scrollWidth - el.offsetWidth) ||
    (deltaX < 0 && el.scrollLeft > 0);
  }

  /** @private */
  _scheduleScrolling() {
    if (!this._scrollingFrame) {
      // Defer setting state attributes to avoid Edge hiccups
      this._scrollingFrame = requestAnimationFrame(() => this._toggleAttribute('scrolling', true, this.$.scroller));
    }
    this._debounceScrolling = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(
      this._debounceScrolling,
      _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(this._timeouts.SCROLLING),
      () => {
        cancelAnimationFrame(this._scrollingFrame);
        delete this._scrollingFrame;
        this._toggleAttribute('scrolling', false, this.$.scroller);
        this._reorderRows();
      }
    );
  }

  /** @private */
  _afterScroll() {
    this._translateStationaryElements();

    if (!this.hasAttribute('reordering')) {
      this._scheduleScrolling();
    }

    this._updateOverflow();
  }

  /** @private */
  _updateOverflow() {
    // Set overflow styling attributes
    let overflow = '';
    const table = this.$.table;
    if (table.scrollTop < table.scrollHeight - table.clientHeight) {
      overflow += ' bottom';
    }

    if (table.scrollTop > 0) {
      overflow += ' top';
    }

    if (table.scrollLeft < table.scrollWidth - table.clientWidth) {
      overflow += ' right';
    }

    if (table.scrollLeft > 0) {
      overflow += ' left';
    }

    this._debounceOverflow = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(
      this._debounceOverflow,
      _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["animationFrame"],
      () => {
        const value = overflow.trim();
        if (value.length > 0 && this.getAttribute('overflow') !== value) {
          this.setAttribute('overflow', value);
        } else if (value.length == 0 && this.hasAttribute('overflow')) {
          this.removeAttribute('overflow');
        }
      }
    );
  }

  /**
   * Correct order needed for preserving correct tab order between cell contents.
   * @private
   */
  _reorderRows() {
    if (this.__mouseDown) {
      this.__pendingReorder = true;
      return;
    }

    const body = this.$.items;
    const items = body.querySelectorAll('tr');
    if (!items.length) {
      return;
    }

    const adjustedVirtualStart = this._virtualStart + this._vidxOffset;

    // Which row to use as a target?
    const targetRow = this._rowWithFocusedElement || Array.from(items).filter(row => !row.hidden)[0];
    if (!targetRow) {
      // All rows are hidden, don't reorder
      return;
    }

    // Where the target row should be?
    const targetPhysicalIndex = targetRow.index - adjustedVirtualStart;

    // Reodrer the DOM elements to keep the target row at the target physical index
    const delta = Array.from(items).indexOf(targetRow) - targetPhysicalIndex;
    if (delta > 0) {
      for (let i = 0; i < delta; i++) {
        body.appendChild(items[i]);
      }
    } else if (delta < 0) {
      for (let i = items.length + delta; i < items.length; i++) {
        body.insertBefore(items[i], items[0]);
      }
    }

    // Due to a rendering bug, reordering the rows can make the sticky header disappear on Safari
    // if the grid is used inside of a flex box. This is a workaround for the issue.
    if (this._safari) {
      const {transform} = this.$.header.style;
      this.$.header.style.transform = '';
      setTimeout(() => this.$.header.style.transform = transform);
    }
  }

  /** @protected */
  _frozenCellsChanged() {
    this._debouncerCacheElements = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(
      this._debouncerCacheElements,
      _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["microTask"],
      () => {
        Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(function(cell) {
          cell.style.transform = '';
        });
        this._frozenCells = Array.prototype.slice.call(this.$.table.querySelectorAll('[frozen]'));
        this._updateScrollerMeasurements();
        this._translateStationaryElements();
      }
    );
    this._updateLastFrozen();
  }

  /** @protected */
  _updateScrollerMeasurements() {
    if (this._frozenCells.length > 0 && this.__isRTL) {
      this.__scrollerMetrics = {
        scrollWidth: this.$.table.scrollWidth,
        clientWidth: this.$.table.clientWidth
      };
    }
  }

  /** @protected */
  _updateLastFrozen() {
    if (!this._columnTree) {
      return;
    }

    const columnsRow = this._columnTree[this._columnTree.length - 1].slice(0);
    columnsRow.sort((a, b) => {
      return a._order - b._order;
    });
    const lastFrozen = columnsRow.reduce((prev, col, index) => {
      col._lastFrozen = false;
      return col.frozen && !col.hidden ? index : prev;
    }, undefined);
    if (lastFrozen !== undefined) {
      columnsRow[lastFrozen]._lastFrozen = true;
    }
  }

  /** @private */
  _translateStationaryElements() {
    const scrollLeft = Math.max(0, this._scrollLeft);
    const scrollTop = Math.max(0, this._scrollTop);

    let leftOffset = 0;
    let topOffset = 0;
    let footerOffset = 0;
    if (!this._useSticky) {
      leftOffset = scrollLeft;
      topOffset = scrollTop;
      footerOffset = this.$.table.clientHeight - this.$.footer.offsetHeight - this.$.footer.offsetTop;
    }

    this.$.header.style.transform = this._getTranslate(-scrollLeft + leftOffset, topOffset);
    this.$.footer.style.transform = this._getTranslate(-scrollLeft + leftOffset, topOffset + footerOffset);
    this.$.items.style.transform = this._getTranslate(-scrollLeft + leftOffset, 0);

    if (this._frozenCells.length > 0) {
      const x = this.__isRTL ?
        this.__getNormalizedScrollLeft(this.$.table) + this.__scrollerMetrics.clientWidth -
        this.__scrollerMetrics.scrollWidth
        : this._scrollLeft;
      var frozenCellTransform = this._getTranslate(x, 0);

      for (var i = 0; i < this._frozenCells.length; i++) {
        this._frozenCells[i].style.transform = frozenCellTransform;
      }
    }
  }

  /** @private */
  _getTranslate(x, y) {
    return `translate(${x}px, ${y}px)`;
  }

};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroller.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroller.js ***!
  \**********************************************************************/
/*! exports provided: ScrollerElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollerElement", function() { return GridScrollerElement; });
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _iron_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iron-list.js */ "./node_modules/@vaadin/vaadin-grid/src/iron-list.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/






/**
 * This Element is used internally by vaadin-grid.
 *
 * @implements PolymerIronList
 * @extends HTMLElement
 */
class GridScrollerElement extends _iron_list_js__WEBPACK_IMPORTED_MODULE_3__["PolymerIronList"] {

  static get is() {
    return 'vaadin-grid-scroller';
  }

  static get properties() {
    return {
      size: {
        type: Number,
        notify: true
      },

      /**
       * @type {number}
       * @protected
       */
      _vidxOffset: {
        value: 0
      }
    };
  }

  static get observers() {
    return [
      '_effectiveSizeChanged(_effectiveSize)'
    ];
  }

  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    this._scrollHandler();
  }

  /**
   * @param {!HTMLTableRowElement} item
   * @param {number} index
   * @protected
   */
  _updateScrollerItem(item, index) {}

  /** @protected */
  _afterScroll() {}

  /** @protected */
  _getRowTarget() {}

  /** @protected */
  _createScrollerRows() {}

  /** @protected */
  _canPopulate() {}

  /**
   * @param {number} index
   * @protected
   */
  scrollToIndex(index) {
    this._warnPrivateAPIAccess('scrollToIndex');

    this._scrollingToIndex = true;
    index = Math.min(Math.max(index, 0), this._effectiveSize - 1);
    this.$.table.scrollTop = index / this._effectiveSize * (this.$.table.scrollHeight - this.$.table.offsetHeight);
    this._scrollHandler();

    if (this._accessIronListAPI(() => this._maxScrollTop) && this._virtualCount < this._effectiveSize) {
      this._adjustVirtualIndexOffset(1000000);
    }

    this._accessIronListAPI(() => super.scrollToIndex(index - this._vidxOffset));
    this._scrollHandler();

    // Ensure scroll position
    const row = Array.from(this.$.items.children).filter(child => child.index === index)[0];
    if (row) {
      const headerOffset = row.getBoundingClientRect().top - this.$.header.getBoundingClientRect().bottom;
      if (Math.abs(headerOffset) > 1) {
        this.$.table.scrollTop += headerOffset;
        this._scrollHandler();
      }
    }

    this._scrollingToIndex = false;
  }

  /** @private */
  _effectiveSizeChanged(size) {
    let fvi; // first visible (adjusted) index
    let fviOffset = 0;
    this._iterateItems((pidx, vidx) => {
      if (vidx === this._firstVisibleIndex) {
        const row = this._physicalItems[pidx];
        fvi = row.index;
        fviOffset = row.getBoundingClientRect().top;
      }
    });

    if (this.items && size < this.items.length) {
      // Size was reduced, scroll to 0 first
      this._scrollTop = 0;
    }
    if (!Array.isArray(this.items)) {
      // Edge/IE seems to have the lowest maximum
      const maxVirtualItems = this._edge || this._ie ? 30000 : 100000;
      this.items = {length: Math.min(size, maxVirtualItems)};
    }

    this._accessIronListAPI(() => super._itemsChanged({path: 'items'}));

    this._virtualCount = Math.min(this.items.length, size) || 0;

    if (this._scrollTop === 0) {
      this._accessIronListAPI(() => this._scrollToIndex(Math.min(size - 1, fvi)));
      this._iterateItems((pidx, vidx) => {
        const row = this._physicalItems[pidx];
        if (row.index === fvi) {
          this.$.table.scrollTop += Math.round(row.getBoundingClientRect().top - fviOffset);
        }
        // Restore keyboard focus to the right cell
        if (row.index === this._focusedItemIndex && this._itemsFocusable && this.$.items.contains(this.shadowRoot.activeElement)) {
          const cellIndex = Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);
          row.children[cellIndex].focus();
        }
      });
    }
    this._assignModels();
    requestAnimationFrame(() => this._update());

    this.__updateFooterPositioning();

    if (this._ie) {
      // Workaround an IE flexbox bug where the rows would horizontally collapse
      // whenever item count change toggles the scrollbar visibility (is tested)
      this.$.table.style.display = 'block';
      setTimeout(() => {
        this.$.table.style.display = 'flex';
        this._translateStationaryElements();
      });
    }
  }

  /** @protected */
  _positionItems() {
    this._adjustScrollPosition();

    let rePosition;
    if (isNaN(this._physicalTop)) {
      rePosition = true;
      this._physicalTop = 0;
    }

    let y = this._physicalTop;
    this._iterateItems((pidx, vidx) => {
      this._physicalItems[pidx].style.transform = `translateY(${y}px)`;
      y += this._physicalSizes[pidx];
    });

    if (rePosition) {
      this._scrollToIndex(0);
    }
  }

  /**
   * @param {number} count
   * @protected
   */
  _increasePoolIfNeeded(count) {
    if ((count === 0 && this._scrollingToIndex) || !this._canPopulate() || !this._effectiveSize) {
      return;
    }

    if (!this._initialPoolCreated) {
      this._initialPoolCreated = true;
      super._increasePoolIfNeeded(25);
    } else if (this._optPhysicalSize !== Infinity) {
      this._debounceIncreasePool = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(
        this._debounceIncreasePool,
        _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["animationFrame"],
        () => {
          this._updateMetrics();
          const remainingPhysicalSize = this._optPhysicalSize - this._physicalSize;
          let estimatedMissingRowCount = Math.ceil(remainingPhysicalSize / this._physicalAverage);

          if (this._physicalCount + estimatedMissingRowCount > this._effectiveSize) {
            // Do not increase the physical item count above the this._effectiveSize
            estimatedMissingRowCount = Math.max(0, this._effectiveSize - this._physicalCount);
          }

          if (this._physicalSize && estimatedMissingRowCount > 0 && this._optPhysicalSize !== Infinity) {
            super._increasePoolIfNeeded(estimatedMissingRowCount);
            // Ensure the rows are in order after increasing pool
            this.__reorderChildNodes();
          }
        });
    }
  }

  /** @private */
  __reorderChildNodes() {
    const childNodes = Array.from(this.$.items.childNodes);
    const rowsInOrder = !!childNodes.reduce((inOrder, current, currentIndex, array) => {
      if (currentIndex === 0 || array[currentIndex - 1].index === current.index - 1) {
        return inOrder;
      }
    }, true);

    if (!rowsInOrder) {
      childNodes.sort((row1, row2) => {
        return row1.index - row2.index;
      }).forEach(row => this.$.items.appendChild(row));
    }
  }

  /** @private */
  _createPool(size) {
    const fragment = document.createDocumentFragment();
    const physicalItems = this._createScrollerRows(size);

    physicalItems.forEach(inst => fragment.appendChild(inst));
    this._getRowTarget().appendChild(fragment);

    // Weird hack needed to get Safari to actually distribute slots
    const content = this.querySelector('[slot]');
    if (content) {
      const slot = content.getAttribute('slot');
      content.setAttribute('slot', 'foo-bar');
      content.setAttribute('slot', slot);
    }

    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_0__["afterNextRender"])(this, () => this.notifyResize());
    return physicalItems;
  }

  /**
   * Assigns the data models to a given set of items.
   * @param {!Array<number>=} itemSet
   * @protected
   */
  _assignModels(itemSet) {
    this._iterateItems((pidx, vidx) => {
      const el = this._physicalItems[pidx];
      this._toggleAttribute('hidden', vidx >= this._effectiveSize, el);
      this._updateScrollerItem(el, vidx + (this._vidxOffset || 0));
    }, itemSet);
  }

  /** @protected */
  _scrollHandler() {
    const delta = this.$.table.scrollTop - this._scrollPosition;
    this._accessIronListAPI(super._scrollHandler);
    const oldOffset = this._vidxOffset;
    if (this._accessIronListAPI(() => this._maxScrollTop) && this._virtualCount < this._effectiveSize) {
      this._adjustVirtualIndexOffset(delta);
    } else {
      this._vidxOffset = 0;
    }
    if (this._vidxOffset !== oldOffset) {
      this._update();
    }
    this._afterScroll();
  }

  /** @private */
  _adjustVirtualIndexOffset(delta) {
    if (Math.abs(delta) > 10000) {
      if (this._noScale) {
        this._noScale = false;
        return;
      }
      const scale = this.$.table.scrollTop / (this.$.table.scrollHeight - this.$.table.offsetHeight);
      const offset = scale * this._effectiveSize;
      this._vidxOffset = Math.round(offset - scale * this._virtualCount);
    } else {
      // Make sure user can always swipe/wheel scroll to the start and end
      const oldOffset = this._vidxOffset || 0;
      const threshold = 1000;
      const maxShift = 100;
      // At start
      if (this._scrollTop === 0) {
        this._vidxOffset = 0;
        if (oldOffset !== this._vidxOffset) {
          super.scrollToIndex(0);
        }
      } else if (this.firstVisibleIndex < threshold && this._vidxOffset > 0) {
        this._vidxOffset -= Math.min(this._vidxOffset, maxShift);
        if (oldOffset !== this._vidxOffset) {
          super.scrollToIndex(this.firstVisibleIndex + (oldOffset - this._vidxOffset));
        }
        this._noScale = true;
      }
      // At end
      const maxOffset = this._effectiveSize - this._virtualCount;
      if (this._scrollTop >= this._maxScrollTop && this._maxScrollTop > 0) {
        this._vidxOffset = maxOffset;
        if (oldOffset !== this._vidxOffset) {
          super.scrollToIndex(this._virtualCount);
        }
      } else if (this.firstVisibleIndex > this._virtualCount - threshold && this._vidxOffset < maxOffset) {
        this._vidxOffset += Math.min(maxOffset - this._vidxOffset, maxShift);
        if (oldOffset !== this._vidxOffset) {
          super.scrollToIndex(this.firstVisibleIndex - (this._vidxOffset - oldOffset));
        }
        this._noScale = true;
      }
    }
  }

  /** @private */
  _accessIronListAPI(cb) {
    this._warnPrivateAPIAccessAsyncEnabled = false;
    const returnValue = cb.apply(this);
    this._debouncerWarnPrivateAPIAccess = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(
      this._debouncerWarnPrivateAPIAccess,
      _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["animationFrame"],
      () => this._warnPrivateAPIAccessAsyncEnabled = true
    );
    return returnValue;
  }

  /**
   * Allow iron-list to access its APIs from debounced callbacks without warns
   * @private
   */
  _debounceRender(cb, asyncModule) {
    super._debounceRender(() => this._accessIronListAPI(cb), asyncModule);
  }

  /**
   * Warn when iron-list APIs are being accessed directly
   * @private
   */
  _warnPrivateAPIAccess(apiName) {
    if (this._warnPrivateAPIAccessAsyncEnabled) {
      console.warn(`Accessing private API (${apiName})!`);
    }
  }

  /** @protected */
  _render() {
    this._accessIronListAPI(super._render);
  }

  /** @private */
  _createFocusBackfillItem() { /* Ignore */ }

  /** @private */
  _multiSelectionChanged() { /* Ignore */ }

  /** @private */
  clearSelection() { /* Ignore */ }

  /** @protected */
  _itemsChanged() { /* Ignore */ }

  /** @private */
  _manageFocus() { /* Ignore */ }

  /** @private */
  _removeFocusedItem() { /* Ignore */ }

  /**
   * @return {number}
   * @protected
   */
  get _firstVisibleIndex() {
    return this._accessIronListAPI(() => super.firstVisibleIndex);
  }

  /**
   * @return {number}
   * @protected
   */
  get _lastVisibleIndex() {
    return this._accessIronListAPI(() => super.lastVisibleIndex);
  }

  /**
   * @param {number} index
   * @protected
   */
  _scrollToIndex(index) {
    this._accessIronListAPI(() => this.scrollToIndex(index));
  }

  /** @private */
  get firstVisibleIndex() {
    this._warnPrivateAPIAccess('firstVisibleIndex'); return super.firstVisibleIndex;
  }

  /** @private */
  set firstVisibleIndex(value) {
    this._warnPrivateAPIAccess('firstVisibleIndex'); super.firstVisibleIndex = value;
  }

  /** @private */
  get lastVisibleIndex() {
    this._warnPrivateAPIAccess('lastVisibleIndex'); return super.lastVisibleIndex;
  }

  /** @private */
  set lastVisibleIndex(value) {
    this._warnPrivateAPIAccess('lastVisibleIndex'); super.lastVisibleIndex = value;
  }

  /** @private */
  updateViewportBoundaries() {
    this._warnPrivateAPIAccess('updateViewportBoundaries'); super.updateViewportBoundaries.apply(this, arguments);
  }

  /** @protected */
  _resizeHandler() {
    super._resizeHandler();
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["flush"])();
  }
}

customElements.define(GridScrollerElement.is, GridScrollerElement);




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-column.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-column.js ***!
  \******************************************************************************/
/*! exports provided: GridSelectionColumnElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSelectionColumnElement", function() { return GridSelectionColumnElement; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-grid-column.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js");
/* harmony import */ var _vaadin_vaadin_checkbox_src_vaadin_checkbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-checkbox/src/vaadin-checkbox.js */ "./node_modules/@vaadin/vaadin-checkbox/src/vaadin-checkbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * `<vaadin-grid-selection-column>` is a helper element for the `<vaadin-grid>`
 * that provides default templates and functionality for item selection.
 *
 * #### Example:
 * ```html
 * <vaadin-grid items="[[items]]">
 *  <vaadin-grid-selection-column frozen auto-select></vaadin-grid-selection-column>
 *
 *  <vaadin-grid-column>
 *    ...
 * ```
 *
 * By default the selection column displays `<vaadin-checkbox>` elements in the
 * column cells. The checkboxes in the body rows toggle selection of the corresponding row items.
 *
 * When the grid data is provided as an array of [`items`](#/elements/vaadin-grid#property-items),
 * the column header gets an additional checkbox that can be used for toggling
 * selection for all the items at once.
 *
 * __The default content can also be overridden__
 *
 */
class GridSelectionColumnElement extends _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_1__["GridColumnElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <template class="header" id="defaultHeaderTemplate">
      <vaadin-checkbox class="vaadin-grid-select-all-checkbox" aria-label="Select All" hidden\$="[[_selectAllHidden]]" on-checked-changed="_onSelectAllCheckedChanged" checked="[[_isChecked(selectAll, _indeterminate)]]" indeterminate="[[_indeterminate]]"></vaadin-checkbox>
    </template>
    <template id="defaultBodyTemplate">
      <vaadin-checkbox aria-label="Select Row" checked="{{selected}}"></vaadin-checkbox>
    </template>
`;
  }

  static get is() {
    return 'vaadin-grid-selection-column';
  }

  static get properties() {
    return {
      /**
       * Width of the cells for this column.
       */
      width: {
        type: String,
        value: '58px'
      },

      /**
       * Flex grow ratio for the cell widths. When set to 0, cell width is fixed.
       * @attr {number} flex-grow
       * @type {number}
       */
      flexGrow: {
        type: Number,
        value: 0
      },

      /**
       * When true, all the items are selected.
       * @attr {boolean} select-all
       * @type {boolean}
       */
      selectAll: {
        type: Boolean,
        value: false,
        notify: true
      },

      /**
       * When true, the active gets automatically selected.
       * @attr {boolean} auto-select
       * @type {boolean}
       */
      autoSelect: {
        type: Boolean,
        value: false,
      },

      /** @private */
      _indeterminate: Boolean,

      /**
       * The previous state of activeItem. When activeItem turns to `null`,
       * previousActiveItem will have an Object with just unselected activeItem
       * @private
       */
      _previousActiveItem: Object,

      /** @private */
      _selectAllHidden: Boolean
    };
  }

  static get observers() {
    return [
      '_onSelectAllChanged(selectAll)'
    ];
  }

  /** @private */
  _pathOrHeaderChanged(path, header, headerCell, footerCell, cells, renderer, headerRenderer, bodyTemplate, headerTemplate) {
    // As a special case, allow overriding the default header / body templates
    if (cells.value && (path !== undefined || renderer !== undefined)) {
      this._bodyTemplate = bodyTemplate = undefined;
      this.__cleanCellsOfTemplateProperties(cells.value);
    }
    if (headerCell && (header !== undefined || headerRenderer !== undefined)) {
      this._headerTemplate = headerTemplate = undefined;
      this.__cleanCellsOfTemplateProperties([headerCell]);
    }
    super._pathOrHeaderChanged(path, header, headerCell, footerCell, cells, renderer, headerRenderer, bodyTemplate, headerTemplate);
  }

  /** @private */
  __cleanCellsOfTemplateProperties(cells) {
    cells.forEach(cell => {
      cell._content.innerHTML = '';
      delete cell._instance;
      delete cell._template;
    });
  }

  /** @private */
  _prepareHeaderTemplate() {
    const headerTemplate = this._prepareTemplatizer(this._findTemplate(true) || this.$.defaultHeaderTemplate);
    // needed to override the dataHost correctly in case internal template is used.
    headerTemplate.templatizer.dataHost = headerTemplate === this.$.defaultHeaderTemplate ? this : this.dataHost;

    return headerTemplate;
  }

  /** @private */
  _prepareBodyTemplate() {
    const template = this._prepareTemplatizer(this._findTemplate() || this.$.defaultBodyTemplate);
    // needed to override the dataHost correctly in case internal template is used.
    template.templatizer.dataHost = template === this.$.defaultBodyTemplate ? this : this.dataHost;

    return template;
  }

  constructor() {
    super();

    this._boundOnActiveItemChanged = this._onActiveItemChanged.bind(this);
    this._boundOnDataProviderChanged = this._onDataProviderChanged.bind(this);
    this._boundOnSelectedItemsChanged = this._onSelectedItemsChanged.bind(this);
  }

  /** @protected */
  disconnectedCallback() {
    this._grid.removeEventListener('active-item-changed', this._boundOnActiveItemChanged);
    this._grid.removeEventListener('data-provider-changed', this._boundOnDataProviderChanged);
    this._grid.removeEventListener('filter-changed', this._boundOnSelectedItemsChanged);
    this._grid.removeEventListener('selected-items-changed', this._boundOnSelectedItemsChanged);

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari && window.ShadyDOM && this.parentElement) {
      // Detach might have beem caused by order change.
      // Shady on safari doesn't restore isAttached so we'll need to do it manually.
      const parent = this.parentElement;
      const nextSibling = this.nextElementSibling;
      parent.removeChild(this);
      if (nextSibling) {
        parent.insertBefore(this, nextSibling);
      } else {
        parent.appendChild(this);
      }
    }

    super.disconnectedCallback();
  }

  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    if (this._grid) {
      this._grid.addEventListener('active-item-changed', this._boundOnActiveItemChanged);
      this._grid.addEventListener('data-provider-changed', this._boundOnDataProviderChanged);
      this._grid.addEventListener('filter-changed', this._boundOnSelectedItemsChanged);
      this._grid.addEventListener('selected-items-changed', this._boundOnSelectedItemsChanged);
    }
  }

  /** @private */
  _onSelectAllChanged(selectAll) {
    if (selectAll === undefined || !this._grid) {
      return;
    }

    if (this._selectAllChangeLock) {
      return;
    }

    this._grid.selectedItems = selectAll && Array.isArray(this._grid.items) ? this._grid._filter(this._grid.items) : [];
  }

  /**
   * Return true if array `a` contains all the items in `b`
   * We need this when sorting or to preserve selection after filtering.
   * @private
   */
  _arrayContains(a, b) {
    for (var i = 0; a && b && b[i] && a.indexOf(b[i]) >= 0; i++); // eslint-disable-line
    return i == b.length;
  }

  /** @private */
  _onSelectAllCheckedChanged(e) {
    this.selectAll = this._indeterminate || e.target.checked;
  }

  /**
   * iOS needs indeterminated + checked at the same time
   * @private
   */
  _isChecked(selectAll, indeterminate) {
    return indeterminate || selectAll;
  }

  /** @private */
  _onActiveItemChanged(e) {
    const activeItem = e.detail.value;
    if (this.autoSelect) {
      const item = activeItem || this._previousActiveItem;
      if (item) {
        this._grid._toggleItem(item);
      }
    }
    this._previousActiveItem = activeItem;
  }

  /** @private */
  _onSelectedItemsChanged(e) {
    this._selectAllChangeLock = true;
    if (Array.isArray(this._grid.items)) {
      if (!this._grid.selectedItems.length) {
        this.selectAll = false;
        this._indeterminate = false;
      } else if (this._arrayContains(this._grid.selectedItems, this._grid._filter(this._grid.items))) {
        this.selectAll = true;
        this._indeterminate = false;
      } else {
        this.selectAll = false;
        this._indeterminate = true;
      }
    }
    this._selectAllChangeLock = false;
  }

  /** @private */
  _onDataProviderChanged(e) {
    this._selectAllHidden = !Array.isArray(this._grid.items);
  }
}

customElements.define(GridSelectionColumnElement.is, GridSelectionColumnElement);




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-mixin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-mixin.js ***!
  \*****************************************************************************/
/*! exports provided: SelectionMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionMixin", function() { return SelectionMixin; });
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */
const SelectionMixin = superClass => class SelectionMixin extends superClass {

  static get properties() {
    return {
      /**
       * An array that contains the selected items.
       * @type {Array<GridItem>}
       */
      selectedItems: {
        type: Object,
        notify: true,
        value: () => []
      }
    };
  }

  static get observers() {
    return [
      '_selectedItemsChanged(selectedItems.*)'
    ];
  }

  /**
   * @param {!GridItem} item
   * @return {boolean}
   * @protected
   */
  _isSelected(item) {
    return this.selectedItems && this._getItemIndexInArray(item, this.selectedItems) > -1;
  }

  /**
   * Selects the given item.
   *
   * @method selectItem
   * @param {!GridItem} item The item object
   */
  selectItem(item) {
    if (!this._isSelected(item)) {
      this.push('selectedItems', item);
    }
  }

  /**
   * Deselects the given item if it is already selected.
   *
   * @method deselect
   * @param {!GridItem} item The item object
   */
  deselectItem(item) {
    const index = this._getItemIndexInArray(item, this.selectedItems);
    if (index > -1) {
      this.splice('selectedItems', index, 1);
    }
  }

  /**
   * Toggles the selected state of the given item.
   *
   * @method toggle
   * @param {!GridItem} item The item object
   * @protected
   */
  _toggleItem(item) {
    const index = this._getItemIndexInArray(item, this.selectedItems);
    if (index === -1) {
      this.selectItem(item);
    } else {
      this.deselectItem(item);
    }
  }

  /** @private */
  _selectedItemsChanged(e) {
    if (this.$.items.children.length && (e.path === 'selectedItems' || e.path === 'selectedItems.splices')) {
      Array.from(this.$.items.children).forEach(row => {
        this._updateItem(row, row._item);
      });
    }
  }

  /** @private */
  _selectedInstanceChangedCallback(instance, value) {
    if (super._selectedInstanceChangedCallback) {
      super._selectedInstanceChangedCallback(instance, value);
    }
    if (value) {
      this.selectItem(instance.item);
    } else {
      this.deselectItem(instance.item);
    }
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-column.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-column.js ***!
  \*************************************************************************/
/*! exports provided: GridSortColumnElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSortColumnElement", function() { return GridSortColumnElement; });
/* harmony import */ var _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-grid-column.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js");
/* harmony import */ var _vaadin_grid_sorter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-grid-sorter.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sorter.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




/**
 * `<vaadin-grid-sort-column>` is a helper element for the `<vaadin-grid>`
 * that provides default header template and functionality for sorting.
 *
 * #### Example:
 * ```html
 * <vaadin-grid items="[[items]]">
 *  <vaadin-grid-sort-column path="name.first" direction="asc"></vaadin-grid-sort-column>
 *
 *  <vaadin-grid-column>
 *    ...
 * ```
 *
 */
class GridSortColumnElement extends _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_0__["GridColumnElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <template class="header" id="headerTemplate">
      <vaadin-grid-sorter path="[[path]]" direction="{{direction}}">[[_getHeader(header, path)]]</vaadin-grid-sorter>
    </template>
`;
  }

  static get is() {
    return 'vaadin-grid-sort-column';
  }

  static get properties() {
    return {
      /**
       * JS Path of the property in the item used for sorting the data.
       */
      path: String,

      /**
       * How to sort the data.
       * Possible values are `asc` to use an ascending algorithm, `desc` to sort the data in
       * descending direction, or `null` for not sorting the data.
       * @type {GridSorterDirection | undefined}
       */
      direction: {
        type: String,
        notify: true
      }
    };
  }

  /** @private */
  _prepareHeaderTemplate() {
    const headerTemplate = this._prepareTemplatizer(this.$.headerTemplate);
    // needed to override the dataHost correctly in case internal template is used.
    headerTemplate.templatizer.dataHost = this;
    return headerTemplate;
  }

  /** @private */
  _getHeader(header, path) {
    return header || this._generateHeader(path);
  }
}

customElements.define(GridSortColumnElement.is, GridSortColumnElement);




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-mixin.js":
/*!************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-mixin.js ***!
  \************************************************************************/
/*! exports provided: SortMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortMixin", function() { return SortMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




/**
 * @polymerMixin
 */
const SortMixin = superClass => class SortMixin extends superClass {
  static get properties() {
    return {
      /**
       * When `true`, all `<vaadin-grid-sorter>` are applied for sorting.
       * @attr {boolean} multi-sort
       * @type {boolean}
       */
      multiSort: {
        type: Boolean,
        value: false
      },

      /**
       * @type {!Array<!GridSorter>}
       * @protected
       */
      _sorters: {
        type: Array,
        value: function() {
          return [];
        }
      },

      /** @private */
      _previousSorters: {
        type: Array,
        value: function() {
          return [];
        }
      }
    };
  }

  /** @protected */
  ready() {
    super.ready();
    this.addEventListener('sorter-changed', this._onSorterChanged);

    // With Polymer 2 & shady the 'sorter-changed' listener isn't guaranteed to be registered
    // before child <vaadin-grid-sorter>'s upgrade and fire the events. The following
    // makes sure that 'sorter-changed' is fired for all <vaadin-grid-sorter> elements
    // after this (<vaadin-grid>) is ready (and the listeners are active).
    if (window.ShadyDOM) {
      _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["microTask"].run(() => {
        const sorters = this.querySelectorAll('vaadin-grid-sorter');
        Array.from(sorters).forEach((sorter) => {
          // Don't try to fire if the sorter hasn't been upgraded yet
          if (sorter instanceof _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
            sorter.dispatchEvent(new CustomEvent('sorter-changed', {bubbles: true, composed: true}));
          }
        });
      });
    }
  }

  /** @private */
  _onSorterChanged(e) {
    const sorter = e.target;

    this._removeArrayItem(this._sorters, sorter);
    sorter._order = null;

    if (this.multiSort) {
      if (sorter.direction) {
        this._sorters.unshift(sorter);
      }

      this._sorters.forEach((sorter, index) => sorter._order = this._sorters.length > 1 ? index : null, this);
    } else {
      if (sorter.direction) {
        this._sorters.forEach(sorter => {
          sorter._order = null;
          sorter.direction = null;
        });
        this._sorters = [sorter];
      }
    }

    e.stopPropagation();

    if (this.dataProvider &&
      // No need to clear cache if sorters didn't change
      JSON.stringify(this._previousSorters) !== JSON.stringify(this._mapSorters())) {
      this.clearCache();
    }

    this._a11yUpdateSorters();

    this._previousSorters = this._mapSorters();
  }

  /**
   * @return {!Array<!GridSorter>}
   * @protected
   */
  _mapSorters() {
    return this._sorters.map(sorter => {
      return {
        path: sorter.path,
        direction: sorter.direction
      };
    });
  }

  /** @private */
  _removeArrayItem(array, item) {
    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sorter.js":
/*!********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sorter.js ***!
  \********************************************************************/
/*! exports provided: GridSorterElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSorterElement", function() { return GridSorterElement; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-dir-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<custom-style>
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);
/**
 * `<vaadin-grid-sorter>` is a helper element for the `<vaadin-grid>` that provides out-of-the-box UI controls,
 * visual feedback, and handlers for sorting the grid data.
 *
 * #### Example:
 * ```html
 * <vaadin-grid-column>
 *   <template class="header">
 *     <vaadin-grid-sorter path="name.first">First name</vaadin-grid-sorter>
 *   </template>
 *   <template>[[item.name.first]]</template>
 * </vaadin-grid-column>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `content` | The slotted content wrapper
 * `indicators` | The internal sorter indicators.
 * `order` | The internal sorter order
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `direction` | Sort direction of a sorter | :host
 *
 * @extends PolymerElement
 */
class GridSorterElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemableMixin"])(Object(_vaadin_vaadin_element_mixin_vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_3__["DirMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: inline-flex;
        cursor: pointer;
        max-width: 100%;
      }

      [part="content"] {
        flex: 1 1 auto;
      }

      [part="indicators"] {
        position: relative;
        align-self: center;
        flex: none;
      }

      [part="order"] {
        display: inline;
        vertical-align: super;
      }

      [part="indicators"]::before {
        font-family: 'vaadin-grid-sorter-icons';
        display: inline-block;
      }

      :host(:not([direction])) [part="indicators"]::before {
        content: "\\e901";
      }

      :host([direction=asc]) [part="indicators"]::before {
        content: "\\e900";
      }

      :host([direction=desc]) [part="indicators"]::before {
        content: "\\e902";
      }
    </style>

    <div part="content">
      <slot></slot>
    </div>
    <div part="indicators">
      <span part="order">[[_getDisplayOrder(_order)]]</span>
    </div>
`;
  }

  static get is() {
    return 'vaadin-grid-sorter';
  }

  static get properties() {
    return {
      /**
       * JS Path of the property in the item used for sorting the data.
       */
      path: String,

      /**
       * How to sort the data.
       * Possible values are `asc` to use an ascending algorithm, `desc` to sort the data in
       * descending direction, or `null` for not sorting the data.
       * @type {GridSorterDirection | undefined}
       */
      direction: {
        type: String,
        reflectToAttribute: true,
        notify: true,
        value: null
      },

      /**
       * @type {number | null}
       * @protected
       */
      _order: {
        type: Number,
        value: null
      },

      /** @private */
      _isConnected: {
        type: Boolean,
        value: false
      }
    };
  }

  static get observers() {
    return [
      '_pathOrDirectionChanged(path, direction, _isConnected)',
      '_directionOrOrderChanged(direction, _order)'
    ];
  }

  /** @protected */
  ready() {
    super.ready();
    this.addEventListener('click', this._onClick.bind(this));
  }

  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    this._isConnected = true;
  }

  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    this._isConnected = false;
  }

  /** @private */
  _pathOrDirectionChanged(path, direction, isConnected) {
    if (path === undefined || direction === undefined || isConnected === undefined) {
      return;
    }

    if (isConnected) {
      this.dispatchEvent(new CustomEvent('sorter-changed', {bubbles: true, composed: true}));
    }
  }

  /** @private */
  _getDisplayOrder(order) {
    return order === null ? '' : order + 1;
  }

  /** @private */
  _onClick(e) {
    const activeElement = this.getRootNode().activeElement;
    if (this !== activeElement && this.contains(activeElement)) {
      // Some focusable content inside the sorter was clicked, do nothing.
      return;
    }

    e.preventDefault();
    if (this.direction === 'asc') {
      this.direction = 'desc';
    } else if (this.direction === 'desc') {
      this.direction = null;
    } else {
      this.direction = 'asc';
    }
  }

  /** @private */
  _directionOrOrderChanged(direction, order) {
    if (direction === undefined || order === undefined) {
      return;
    }

    // Safari has an issue with repainting shadow root element styles when a host attribute changes.
    // Need this workaround (toggle any inline css property on and off) until the issue gets fixed.
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari && this.root) {
      this.root.querySelectorAll('*').forEach(function(el) {
        el.style['-webkit-backface-visibility'] = 'visible';
        el.style['-webkit-backface-visibility'] = '';
      });
    }
  }
}

customElements.define(GridSorterElement.is, GridSorterElement);




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styles.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/



const VaadinGridStyles = document.createElement('dom-module');

// NOTE(web-padawan): https://github.com/vaadin/vaadin-grid/issues/1514
VaadinGridStyles.appendChild(
  _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`
  <style>
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~="row"] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~="row"][loading] [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~="row"] {
      position: absolute;
    }

    #items [part~="row"]:empty {
      height: 1em;
    }

    [part~="cell"]:not([part~="details-cell"]) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~="details-cell"] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~="cell"] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~="resize-handle"],
    #scroller[no-content-pointer-events] [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~="reorder-ghost"] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    #scroller[ie][column-reordering-allowed] [part~="header-cell"] {
      -ms-user-select: none;
    }

    /* Resizing styles */
    [part~="resize-handle"] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~="resize-handle"]::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~="resize-handle"]::before,
    [last-frozen] [part~="resize-handle"]::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~="details-cell"] {
      display: none !important;
    }

    #sizer [part~="cell"][hidden] {
      display: none !important;
    }

    #sizer [part~="cell"] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~="cell"]::before {
      content: "-";
    }

    #sizer [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir="rtl"]) #items,
    :host([dir="rtl"]) #header,
    :host([dir="rtl"]) #footer {
      left: auto;
    }

    :host([dir="rtl"]) [part~="reorder-ghost"] {
      left: auto;
      right: 0;
    }

    :host([dir="rtl"]) [part~="resize-handle"] {
      left: 0;
      right: auto;
    }

    :host([dir="rtl"]) [part~="resize-handle"]::before {
      transform: translateX(50%);
    }

    :host([dir="rtl"]) [last-column] [part~="resize-handle"]::before,
    :host([dir="rtl"]) [last-frozen] [part~="resize-handle"]::before {
      left: 0;
      right: auto;
    }
  </style>
`);

VaadinGridStyles.register('vaadin-grid-styles');


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styling-mixin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styling-mixin.js ***!
  \***************************************************************************/
/*! exports provided: StylingMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylingMixin", function() { return StylingMixin; });
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
 * @polymerMixin
 */
const StylingMixin = superClass => class StylingMixin extends superClass {

  static get properties() {
    return {
      /**
       * A function that allows generating CSS class names for grid cells
       * based on their row and column. The return value should be the generated
       * class name as a string, or multiple class names separated by whitespace
       * characters.
       *
       * Receives two arguments:
       * - `column` The `<vaadin-grid-column>` element (`undefined` for details-cell).
       * - `model` The object with the properties related with
       *   the rendered item, contains:
       *   - `model.index` The index of the item.
       *   - `model.item` The item.
       *   - `model.expanded` Sublevel toggle state.
       *   - `model.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `model.selected` Selected state.
       *
       * @type {GridCellClassNameGenerator | null | undefined}
       */
      cellClassNameGenerator: Function
    };
  }

  static get observers() {
    return [
      '__cellClassNameGeneratorChanged(cellClassNameGenerator)'
    ];
  }

  __cellClassNameGeneratorChanged(cellClassGenerator) {
    this.generateCellClassNames();
  }

  /**
   * Runs the `cellClassNameGenerator` for the visible cells.
   * If the generator depends on varying conditions, you need to
   * call this function manually in order to update the styles when
   * the conditions change.
   */
  generateCellClassNames() {
    Array.from(this.$.items.children).filter(row => !row.hidden).forEach(
      row => this._generateCellClassNames(row, this.__getRowModel(row)));
  }

  /** @private */
  _generateCellClassNames(row, model) {
    Array.from(row.children).forEach(cell => {
      if (cell.__generatedClasses) {
        cell.__generatedClasses.forEach(className => cell.classList.remove(className));
      }
      if (this.cellClassNameGenerator) {
        const result = this.cellClassNameGenerator(cell._column, model);
        cell.__generatedClasses = result && result.split(' ').filter(className => className.length > 0);
        if (cell.__generatedClasses) {
          cell.__generatedClasses.forEach(className => cell.classList.add(className));
        }
      }
    });
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-templatizer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-templatizer.js ***!
  \*************************************************************************/
/*! exports provided: Templatizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Templatizer", function() { return GridTemplatizer; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/



/**
 * `vaadin-grid-templatizer` is a helper element for the `vaadin-grid` that is preparing and
 * stamping instances of cells and columns templates
 *
 * @extends PolymerElement
 * @private
 */
class GridTemplatizer extends (class extends _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {}) {
  static get is() {
    return 'vaadin-grid-templatizer';
  }

  static get properties() {
    return {
      dataHost: Object,

      template: Object,

      _templateInstances: {
        type: Array,
        value: function() {
          return [];
        }
      },

      _parentPathValues: {
        value: function() {
          return {};
        }
      },

      _grid: Object
    };
  }

  static get observers() {
    return [
      '_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)'
    ];
  }

  constructor() {
    super();

    this._instanceProps = {
      detailsOpened: true,
      index: true,
      item: true,
      selected: true,
      expanded: true,
      level: true
    };
  }

  createInstance() {
    this._ensureTemplatized();
    const instance = new this._TemplateClass({});
    this.addInstance(instance);

    return instance;
  }

  addInstance(instance) {
    if (this._templateInstances.indexOf(instance) === -1) {
      this._templateInstances.push(instance);
      requestAnimationFrame(() => this.notifyPath('_templateInstances.*', this._templateInstances));
    }
  }

  removeInstance(instance) {
    const index = this._templateInstances.indexOf(instance);
    this.splice('_templateInstances', index, 1);
  }

  _ensureTemplatized() {
    if (!this._TemplateClass) {
      this._TemplateClass = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__["templatize"])(this.template, this, {
        instanceProps: this._instanceProps,
        parentModel: true,

        forwardHostProp: function(prop, value) {
          this._forwardParentProp(prop, value);

          if (this._templateInstances) {
            this._templateInstances.forEach(inst => inst.notifyPath(prop, value));
          }
        },

        notifyInstanceProp: function(inst, prop, value) {
          if (prop === 'index' || prop === 'item') {
            // We don’t need a change notification for these.
            return;
          }

          const originalProp = `__${prop}__`;

          // Notify for only user-action changes, not for scrolling updates. E. g.,
          // if `detailsOpened` is different from `__detailsOpened__`, which was set during render.
          if (inst[originalProp] === value) {
            return;
          }
          inst[originalProp] = value;

          const row = Array.from(this._grid.$.items.children).filter(row => this._grid._itemsEqual(row._item, inst.item))[0];
          if (row) {
            Array.from(row.children).forEach(cell => {
              if (cell._instance) {
                cell._instance[originalProp] = value;
                cell._instance.notifyPath(prop, value);
              }
            });
          }

          const itemPrefix = 'item.';
          if (Array.isArray(this._grid.items) && prop.indexOf(itemPrefix) === 0) {
            const itemsIndex = this._grid.items.indexOf(inst.item);
            const path = prop.slice(itemPrefix.length);
            this._grid.notifyPath(`items.${itemsIndex}.${path}`, value);
          }

          const gridCallback = `_${prop}InstanceChangedCallback`;
          if (this._grid && this._grid[gridCallback]) {
            this._grid[gridCallback](inst, value);
          }
        }

      });
    }
  }

  _forwardParentProp(prop, value) {
    this._parentPathValues[prop] = value;
    this._templateInstances.forEach(inst => inst.notifyPath(prop, value));
  }

  _templateInstancesChanged(t, p) {
    let index, count;
    if (t.path === '_templateInstances') {
      // Iterate all instances
      index = 0;
      count = this._templateInstances.length;
    } else if (t.path === '_templateInstances.splices') {
      // Iterate only new instances
      index = t.value.index;
      count = t.value.addedCount;
    } else {
      return;
    }
    Object.keys(this._parentPathValues || {}).forEach(keyName => {
      for (var i = index; i < index + count; i++) {
        this._templateInstances[i].set(keyName, this._parentPathValues[keyName]);
      }
    });
  }

}

customElements.define(GridTemplatizer.is, GridTemplatizer);




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-tree-column.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-tree-column.js ***!
  \*************************************************************************/
/*! exports provided: GridTreeColumnElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridTreeColumnElement", function() { return GridTreeColumnElement; });
/* harmony import */ var _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-grid-column.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js");
/* harmony import */ var _vaadin_grid_tree_toggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-grid-tree-toggle.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-tree-toggle.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




/**
 * `<vaadin-grid-tree-column>` is a helper element for the `<vaadin-grid>`
 * that provides default template and functionality for toggling tree/hierarchical items.
 *
 * #### Example:
 * ```html
 * <vaadin-grid items="[[items]]">
 *  <vaadin-grid-tree-column path="name.first"></vaadin-grid-tree-column>
 *
 *  <vaadin-grid-column>
 *    ...
 * ```
 *
 */
class GridTreeColumnElement extends _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_0__["GridColumnElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <template id="template">
      <vaadin-grid-tree-toggle leaf="[[__isLeafItem(item, itemHasChildrenPath)]]" expanded="{{expanded}}" level="[[level]]">
        [[__getToggleContent(path, item)]]
      </vaadin-grid-tree-toggle>
    </template>
`;
  }

  static get is() {
    return 'vaadin-grid-tree-column';
  }

  static get properties() {
    return {
      /**
       * JS Path of the property in the item used as text content for the tree toggle.
       */
      path: String,

      /**
       * JS Path of the property in the item that indicates whether the item has child items.
       * @attr {string} item-has-children-path
       */
      itemHasChildrenPath: {
        type: String,
        value: 'children'
      }
    };
  }

  /** @private */
  _prepareBodyTemplate() {
    const template = this._prepareTemplatizer(this.$.template);
    // needed to override the dataHost correctly in case internal template is used.
    template.templatizer.dataHost = this;
    return template;
  }

  __isLeafItem(item, itemHasChildrenPath) {
    return !(item && item[itemHasChildrenPath]);
  }

  __getToggleContent(path, item) {
    return path && this.get(path, item);
  }
}

customElements.define(GridTreeColumnElement.is, GridTreeColumnElement);




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-tree-toggle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-tree-toggle.js ***!
  \*************************************************************************/
/*! exports provided: GridTreeToggleElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridTreeToggleElement", function() { return GridTreeToggleElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-dir-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _vaadin_grid_active_item_mixin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaadin-grid-active-item-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-active-item-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/









const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<custom-style>
  <style>
    @font-face {
      font-family: "vaadin-grid-tree-icons";
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);
/**
 * `<vaadin-grid-tree-toggle>` is a helper element for the `<vaadin-grid>`
 * that provides toggle and level display functionality for the item tree.
 *
 * #### Example:
 * ```html
 * <vaadin-grid-column>
 *   <template class="header">Package name</template>
 *   <template>
 *     <vaadin-grid-tree-toggle
 *         leaf="[[!item.hasChildren]]"
 *         expanded="{{expanded}}"
 *         level="[[level]]">
 *       [[item.name]]
 *     </vaadin-grid-tree-toggle>
 *   </template>
 * </vaadin-grid-column>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `toggle` | The tree toggle icon
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * ---|---|---
 * `expanded` | When present, the toggle is expanded | :host
 * `leaf` | When present, the toggle is not expandable, i. e., the current item is a leaf | :host
 *
 * The following custom CSS properties are available on
 * the `<vaadin-grid-tree-toggle>` element:
 *
 * Custom CSS property | Description | Default
 * ---|---|---
 * `--vaadin-grid-tree-toggle-level-offset` | Visual offset step for each tree sublevel | `1em`
 *
 * @extends PolymerElement
 * @mixes ThemableMixin
 */
class GridTreeToggleElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(Object(_vaadin_vaadin_element_mixin_vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_4__["DirMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        display: inline-flex;
        align-items: baseline;

        /* CSS API for :host */
        --vaadin-grid-tree-toggle-level-offset: 1em;

        /*
          ShadyCSS seems to polyfill :dir(rtl) only for :host, thus using
          a host custom CSS property for ltr/rtl toggle icon choice.
         */
        ---collapsed-icon: "\\e7be\\00a0";
      }

      :host(:dir(rtl)) {
        ---collapsed-icon: "\\e7bd\\00a0";
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:not([leaf])) {
        cursor: pointer;
      }

      #level-spacer,
      [part="toggle"] {
        flex: none;
      }

      #level-spacer {
        display: inline-block;
        width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
      }

      [part="toggle"]::before {
        font-family: "vaadin-grid-tree-icons";
        line-height: 1em; /* make icon font metrics not affect baseline */
      }

      :host(:not([expanded])) [part="toggle"]::before {
        content: var(---collapsed-icon);
      }

      :host([expanded]) [part="toggle"]::before {
        content: "\\e7bc\\00a0"; /* icon glyph + single non-breaking space */
      }

      :host([leaf]) [part="toggle"] {
        visibility: hidden;
      }
    </style>

    <span id="level-spacer"></span>
    <span part="toggle"></span>
    <slot></slot>
`;
  }

  static get is() {
    return 'vaadin-grid-tree-toggle';
  }

  static get properties() {
    return {
      /**
       * Current level of the tree represented with a horizontal offset
       * of the toggle button.
       * @type {number}
       */
      level: {
        type: Number,
        value: 0,
        observer: '_levelChanged'
      },

      /**
       * Hides the toggle icon and disables toggling a tree sublevel.
       * @type {boolean}
       */
      leaf: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * Sublevel toggle state.
       * @type {boolean}
       */
      expanded: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      }
    };
  }

  /** @protected */
  ready() {
    super.ready();

    this.addEventListener('click', e => this._onClick(e));
  }

  /** @private */
  _onClick(e) {
    if (this.leaf) {
      return;
    }
    if (Object(_vaadin_grid_active_item_mixin_js__WEBPACK_IMPORTED_MODULE_6__["isFocusable"])(e.target)) {
      return;
    }

    e.preventDefault();
    this.expanded = !this.expanded;
  }

  /** @private */
  _levelChanged(level) {
    const value = Number(level).toString();
    this.style['---level'] = value;
    // Async is to make DOM updates applied before evaluating the style
    // update, required for polyfilled RTL support in MSIE and Edge.
    this._debouncerUpdateLevel = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(
      this._debouncerUpdateLevel,
      _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_7__["microTask"],
      () => this.updateStyles({'---level': value})
    );
  }
}

customElements.define(GridTreeToggleElement.is, GridTreeToggleElement);




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid.js ***!
  \*************************************************************/
/*! exports provided: GridElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridElement", function() { return GridElement; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_grid_scroller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-grid-scroller.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroller.js");
/* harmony import */ var _vaadin_grid_a11y_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-grid-a11y-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-a11y-mixin.js");
/* harmony import */ var _vaadin_grid_active_item_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vaadin-grid-active-item-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-active-item-mixin.js");
/* harmony import */ var _vaadin_grid_array_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaadin-grid-array-data-provider-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-array-data-provider-mixin.js");
/* harmony import */ var _vaadin_grid_column_resizing_mixin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaadin-grid-column-resizing-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-resizing-mixin.js");
/* harmony import */ var _vaadin_grid_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vaadin-grid-data-provider-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-data-provider-mixin.js");
/* harmony import */ var _vaadin_grid_dynamic_columns_mixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vaadin-grid-dynamic-columns-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-dynamic-columns-mixin.js");
/* harmony import */ var _vaadin_grid_event_context_mixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vaadin-grid-event-context-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-event-context-mixin.js");
/* harmony import */ var _vaadin_grid_filter_mixin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vaadin-grid-filter-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-mixin.js");
/* harmony import */ var _vaadin_grid_row_details_mixin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vaadin-grid-row-details-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-row-details-mixin.js");
/* harmony import */ var _vaadin_grid_scroll_mixin_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vaadin-grid-scroll-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroll-mixin.js");
/* harmony import */ var _vaadin_grid_selection_mixin_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vaadin-grid-selection-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-mixin.js");
/* harmony import */ var _vaadin_grid_sort_mixin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vaadin-grid-sort-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-mixin.js");
/* harmony import */ var _vaadin_grid_styling_mixin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vaadin-grid-styling-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styling-mixin.js");
/* harmony import */ var _vaadin_grid_drag_and_drop_mixin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vaadin-grid-drag-and-drop-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-drag-and-drop-mixin.js");
/* harmony import */ var _vaadin_grid_keyboard_navigation_mixin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vaadin-grid-keyboard-navigation-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-keyboard-navigation-mixin.js");
/* harmony import */ var _vaadin_grid_column_reordering_mixin_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vaadin-grid-column-reordering-mixin.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-reordering-mixin.js");
/* harmony import */ var _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vaadin-grid-column.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js");
/* harmony import */ var _vaadin_grid_styles_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vaadin-grid-styles.js */ "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styles.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




























const TOUCH_DEVICE = (() => {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
})();

/**
 *
 * `<vaadin-grid>` is a free, high quality data grid / data table Web Component. The content of the
 * the grid can be populated in two ways: imperatively by using renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Quick Start
 *
 * Start with an assigning an array to the [`items`](#/elements/vaadin-grid#property-items) property to visualize your data.
 *
 * Use the [`<vaadin-grid-column>`](#/elements/vaadin-grid-column) element to configure the grid columns. Set `path` and `header`
 * shorthand properties for the columns to define what gets rendered in the cells of the column.
 *
 * #### Example:
 * ```html
 * <vaadin-grid>
 *   <vaadin-grid-column path="name.first" header="First name"></vaadin-grid-column>
 *   <vaadin-grid-column path="name.last" header="Last name"></vaadin-grid-column>
 *   <vaadin-grid-column path="email"></vaadin-grid-column>
 * </vaadin-grid>
 * ```
 *
 * For custom content `vaadin-grid-column` element provides you with three types of `renderer` callback functions: `headerRenderer`,
 * `renderer` and `footerRenderer`.
 *
 * Each of those renderer functions provides `root`, `column`, `model` arguments when applicable.
 * Generate DOM content, append it to the `root` element and control the state
 * of the host element by accessing `column`. Before generating new content,
 * users are able to check if there is already content in `root` for reusing it.
 *
 * Renderers are called on initialization of new column cells and each time the
 * related row model is updated. DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * #### Example:
 * ```html
 * <vaadin-grid>
 *   <vaadin-grid-column></vaadin-grid-column>
 *   <vaadin-grid-column></vaadin-grid-column>
 *   <vaadin-grid-column></vaadin-grid-column>
 * </vaadin-grid>
 * ```
 * ```js
 * const grid = document.querySelector('vaadin-grid');
 * grid.items = [{'name': 'John', 'surname': 'Lennon', 'role': 'singer'},
 *               {'name': 'Ringo', 'surname': 'Starr', 'role': 'drums'}];
 *
 * const columns = grid.querySelectorAll('vaadin-grid-column');
 *
 * columns[0].headerRenderer = function(root) {
 *   root.textContent = 'Name';
 * };
 * columns[0].renderer = function(root, column, model) {
 *   root.textContent = model.item.name;
 * };
 *
 * columns[1].headerRenderer = function(root) {
 *   root.textContent = 'Surname';
 * };
 * columns[1].renderer = function(root, column, model) {
 *   root.textContent = model.item.surname;
 * };
 *
 * columns[2].headerRenderer = function(root) {
 *   root.textContent = 'Role';
 * };
 * columns[2].renderer = function(root, column, model) {
 *   root.textContent = model.item.role;
 * };
 * ```
 *
 * Alternatively, the content can be provided with Polymer's Templates:
 *
 * #### Example:
 * ```html
 * <vaadin-grid items='[{"name": "John", "surname": "Lennon", "role": "singer"},
 * {"name": "Ringo", "surname": "Starr", "role": "drums"}]'>
 *   <vaadin-grid-column>
 *     <template class="header">Name</template>
 *     <template>[[item.name]]</template>
 *   </vaadin-grid-column>
 *   <vaadin-grid-column>
 *     <template class="header">Surname</template>
 *     <template>[[item.surname]]</template>
 *   </vaadin-grid-column>
 *   <vaadin-grid-column>
 *     <template class="header">Role</template>
 *     <template>[[item.role]]</template>
 *   </vaadin-grid-column>
 * </vaadin-grid>
 * ```
 *
 * The following helper elements can be used for further customization:
 * - [`<vaadin-grid-column-group>`](#/elements/vaadin-grid-column-group)
 * - [`<vaadin-grid-filter>`](#/elements/vaadin-grid-filter)
 * - [`<vaadin-grid-sorter>`](#/elements/vaadin-grid-sorter)
 * - [`<vaadin-grid-selection-column>`](#/elements/vaadin-grid-selection-column)
 * - [`<vaadin-grid-tree-toggle>`](#/elements/vaadin-grid-tree-toggle)
 *
 * __Note that the helper elements must be explicitly imported.__
 * If you want to import everything at once you can use the `all-imports.html` bundle.
 *
 * A column template can be decorated with one the following class names to specify its purpose
 * - `header`: Marks a header template
 * - `footer`: Marks a footer template
 * - `row-details`: Marks a row details template
 *
 * The following built-in template variables can be bound to inside the column templates:
 * - `[[index]]`: Number representing the row index
 * - `[[item]]` and it's sub-properties: Data object (provided by a data provider / items array)
 * - `{{selected}}`: True if the item is selected (can be two-way bound)
 * - `{{detailsOpened}}`: True if the item has row details opened (can be two-way bound)
 * - `{{expanded}}`: True if the item has tree sublevel expanded (can be two-way bound)
 * - `[[level]]`: Number of the tree sublevel of the item, first level-items have 0
 *
 * ### Lazy Loading with Function Data Provider
 *
 * In addition to assigning an array to the items property, you can alternatively
 * provide the `<vaadin-grid>` data through the
 * [`dataProvider`](#/elements/vaadin-grid#property-dataProvider) function property.
 * The `<vaadin-grid>` calls this function lazily, only when it needs more data
 * to be displayed.
 *
 * See the [`dataProvider`](#/elements/vaadin-grid#property-dataProvider) in
 * the API reference below for the detailed data provider arguments description,
 * and the “Assigning Data” page in the demos.
 *
 * __Note that expanding the tree grid's item will trigger a call to the `dataProvider`.__
 *
 * __Also, note that when using function data providers, the total number of items
 * needs to be set manually. The total number of items can be returned
 * in the second argument of the data provider callback:__
 *
 * ```javascript
 * grid.dataProvider = function(params, callback) {
 *   var url = 'https://api.example/data' +
 *       '?page=' + params.page +        // the requested page index
 *       '&per_page=' + params.pageSize; // number of items on the page
 *   var xhr = new XMLHttpRequest();
 *   xhr.onload = function() {
 *     var response = JSON.parse(xhr.responseText);
 *     callback(
 *       response.employees, // requested page of items
 *       response.totalSize  // total number of items
 *     );
 *   };
 *   xhr.open('GET', url, true);
 *   xhr.send();
 * };
 * ```
 *
 * __Alternatively, you can use the `size` property to set the total number of items:__
 *
 * ```javascript
 * grid.size = 200; // The total number of items
 * grid.dataProvider = function(params, callback) {
 *   var url = 'https://api.example/data' +
 *       '?page=' + params.page +        // the requested page index
 *       '&per_page=' + params.pageSize; // number of items on the page
 *   var xhr = new XMLHttpRequest();
 *   xhr.onload = function() {
 *     var response = JSON.parse(xhr.responseText);
 *     callback(response.employees);
 *   };
 *   xhr.open('GET', url, true);
 *   xhr.send();
 * };
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `row` | Row in the internal table
 * `cell` | Cell in the internal table
 * `header-cell` | Header cell in the internal table
 * `body-cell` | Body cell in the internal table
 * `footer-cell` | Footer cell in the internal table
 * `details-cell` | Row details cell in the internal table
 * `resize-handle` | Handle for resizing the columns
 * `reorder-ghost` | Ghost element of the header cell being dragged
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `loading` | Set when the grid is loading data from data provider | :host
 * `interacting` | Keyboard navigation in interaction mode | :host
 * `navigating` | Keyboard navigation in navigation mode | :host
 * `overflow` | Set when rows are overflowing the grid viewport. Possible values: `top`, `bottom`, `left`, `right` | :host
 * `reordering` | Set when the grid's columns are being reordered | :host
 * `dragover` | Set when the grid (not a specific row) is dragged over | :host
 * `dragging-rows` : Set when grid rows are dragged  | :host
 * `reorder-status` | Reflects the status of a cell while columns are being reordered | cell
 * `frozen` | Frozen cell | cell
 * `last-frozen` | Last frozen cell | cell
* * `first-column` | First visible cell on a row | cell
 * `last-column` | Last visible cell on a row | cell
 * `selected` | Selected row | row
 * `expanded` | Expanded row | row
 * `details-opened` | Row with details open | row
 * `loading` | Row that is waiting for data from data provider | row
 * `odd` | Odd row | row
 * `first` | The first body row | row
 * `dragstart` | Set for one frame when drag of a row is starting. The value is a number when multiple rows are dragged | row
 * `dragover` | Set when the row is dragged over | row
 * `drag-disabled` | Set to a row that isn't available for dragging | row
 * `drop-disabled` | Set to a row that can't be dropped on top of | row
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends ScrollerElement
 * @mixes ThemableMixin
 * @mixes A11yMixin
 * @mixes ActiveItemMixin
 * @mixes ArrayDataProviderMixin
 * @mixes ColumnResizingMixin
 * @mixes DataProviderMixin
 * @mixes DynamicColumnsMixin
 * @mixes FilterMixin
 * @mixes RowDetailsMixin
 * @mixes ScrollMixin
 * @mixes SelectionMixin
 * @mixes SortMixin
 * @mixes KeyboardNavigationMixin
 * @mixes ColumnReorderingMixin
 * @mixes EventContextMixin
 * @mixes StylingMixin
 * @mixes DragAndDropMixin
 * @demo demo/index.html
 */
class GridElement extends
  Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_21__["ElementMixin"])(
    Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(
      Object(_vaadin_grid_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_7__["DataProviderMixin"])(
        Object(_vaadin_grid_array_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_5__["ArrayDataProviderMixin"])(
          Object(_vaadin_grid_dynamic_columns_mixin_js__WEBPACK_IMPORTED_MODULE_8__["DynamicColumnsMixin"])(
            Object(_vaadin_grid_active_item_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ActiveItemMixin"])(
              Object(_vaadin_grid_scroll_mixin_js__WEBPACK_IMPORTED_MODULE_12__["ScrollMixin"])(
                Object(_vaadin_grid_selection_mixin_js__WEBPACK_IMPORTED_MODULE_13__["SelectionMixin"])(
                  Object(_vaadin_grid_sort_mixin_js__WEBPACK_IMPORTED_MODULE_14__["SortMixin"])(
                    Object(_vaadin_grid_row_details_mixin_js__WEBPACK_IMPORTED_MODULE_11__["RowDetailsMixin"])(
                      Object(_vaadin_grid_keyboard_navigation_mixin_js__WEBPACK_IMPORTED_MODULE_17__["KeyboardNavigationMixin"])(
                        Object(_vaadin_grid_a11y_mixin_js__WEBPACK_IMPORTED_MODULE_3__["A11yMixin"])(
                          Object(_vaadin_grid_filter_mixin_js__WEBPACK_IMPORTED_MODULE_10__["FilterMixin"])(
                            Object(_vaadin_grid_column_reordering_mixin_js__WEBPACK_IMPORTED_MODULE_18__["ColumnReorderingMixin"])(
                              Object(_vaadin_grid_column_resizing_mixin_js__WEBPACK_IMPORTED_MODULE_6__["ColumnResizingMixin"])(
                                Object(_vaadin_grid_event_context_mixin_js__WEBPACK_IMPORTED_MODULE_9__["EventContextMixin"])(
                                  Object(_vaadin_grid_drag_and_drop_mixin_js__WEBPACK_IMPORTED_MODULE_16__["DragAndDropMixin"])(
                                    Object(_vaadin_grid_styling_mixin_js__WEBPACK_IMPORTED_MODULE_15__["StylingMixin"])(
                                      _vaadin_grid_scroller_js__WEBPACK_IMPORTED_MODULE_2__["ScrollerElement"])))))))))))))))))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_22__["html"]`
    <style include="vaadin-grid-styles"></style>

    <div id="scroller" safari\$="[[_safari]]" ios\$="[[_ios]]" ie\$="[[_ie]]" loading\$="[[loading]]" column-reordering-allowed\$="[[columnReorderingAllowed]]">

      <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
        <caption id="sizer" part="row"></caption>
        <thead id="header" role="rowgroup"></thead>
        <tbody id="items" role="rowgroup"></tbody>
        <tfoot id="footer" role="rowgroup"></tfoot>
      </table>

      <div part="reorder-ghost"></div>
    </div>

    <!-- The template needs at least one slot or else shady doesn't distribute -->
    <slot name="nodistribute"></slot>

    <div id="focusexit" tabindex="0"></div>
`;
  }

  static get is() {
    return 'vaadin-grid';
  }

  static get version() {
    return '5.7.5';
  }

  static get observers() {
    return [
      '_columnTreeChanged(_columnTree, _columnTree.*)'
    ];
  }

  static get properties() {
    return {
      /** @private */
      _safari: {
        type: Boolean,
        value: /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      },

      /** @private */
      _ios: {
        type: Boolean,
        value: (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
          || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
      },

      /** @private */
      _edge: {
        type: Boolean,
        value: typeof CSS !== 'undefined' && CSS.supports('(-ms-ime-align:auto)')
      },

      /** @private */
      _ie: {
        type: Boolean,
        value: !!(navigator.userAgent.match(/Trident/) && !navigator.userAgent.match(/MSIE/))
      },

      /** @private */
      _firefox: {
        type: Boolean,
        value: navigator.userAgent.toLowerCase().indexOf('firefox') > -1
      },

      /** @private */
      _android: {
        type: Boolean,
        value: /android/i.test(navigator.userAgent)
      },

      /** @private */
      _touchDevice: {
        type: Boolean,
        value: TOUCH_DEVICE
      },

      /**
       * If true, the grid's height is defined by its rows.
       *
       * Effectively, this disables the grid's virtual scrolling so that all the rows are rendered in the DOM at once.
       * If the grid has a large number of items, using the feature is discouraged to avoid performance issues.
       * @attr {boolean} height-by-rows
       * @type {boolean}
       */
      heightByRows: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_heightByRowsChanged'
      },

      /** @private */
      _recalculateColumnWidthOnceLoadingFinished: {
        type: Boolean,
        value: true
      }
    };
  }

  constructor() {
    super();
    this.addEventListener('animationend', this._onAnimationEnd);
  }

  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    this.recalculateColumnWidths();
  }

  /**
   * @param {string} name
   * @param {?string} oldValue
   * @param {?string} newValue
   * @protected
   */
  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === 'dir') {
      this.__isRTL = newValue === 'rtl';
      this._updateScrollerMeasurements();
    }
  }

  /** @private */
  __hasRowsWithClientHeight() {
    return !!Array.from(this.$.items.children).filter(row => row.clientHeight).length;
  }

  /** @protected */
  __itemsReceived() {
    if (this._recalculateColumnWidthOnceLoadingFinished
      && !this._cache.isLoading()
      && this.__hasRowsWithClientHeight()) {
      this._recalculateColumnWidthOnceLoadingFinished = false;
      this.recalculateColumnWidths();
    }
  }

  /**
   * @param {!Array<!GridColumnElement>} cols the columns to auto size based on their content width
   * @private
   */
  _recalculateColumnWidths(cols) {
    // Note: The `cols.forEach()` loops below could be implemented as a single loop but this has been
    // split for performance reasons to batch these similar actions [write/read] together to avoid
    // unnecessary layout trashing.

    // [write] Set automatic width for all cells (breaks column alignment)
    cols.forEach(col => {
      col.width = 'auto';
      col._origFlexGrow = col.flexGrow;
      col.flexGrow = 0;
    });
    // [read] Measure max cell width in each column
    cols.forEach(col => {
      col._currentWidth = 0;
      // Note: _allCells only contains cells which are currently rendered in DOM
      col._allCells.forEach(c => {
        // Add 1px buffer to the offset width to avoid too narrow columns (sub-pixel rendering)
        const cellWidth = c.offsetWidth + 1;
        col._currentWidth = Math.max(col._currentWidth, cellWidth);
      });
    });
    // [write] Set column widths to fit widest measured content
    cols.forEach(col => {
      col.width = `${col._currentWidth}px`;
      col.flexGrow = col._origFlexGrow;
      col._currentWidth = undefined;
      col._origFlexGrow = undefined;
    });
  }

  /**
   * Updates the `width` of all columns which have `autoWidth` set to `true`.
   */
  recalculateColumnWidths() {
    if (!this._columnTree) {
      return; // No columns
    }
    if (this._cache.isLoading()) {
      this._recalculateColumnWidthOnceLoadingFinished = true;
    } else {
      const cols = this._getColumns().filter(col => !col.hidden && col.autoWidth);
      this._recalculateColumnWidths(cols);
    }
  }

  /** @private */
  _createScrollerRows(count) {
    const rows = [];
    for (var i = 0; i < count; i++) {
      const row = document.createElement('tr');
      row.setAttribute('part', 'row');
      row.setAttribute('role', 'row');
      if (this._columnTree) {
        this._updateRow(row, this._columnTree[this._columnTree.length - 1], 'body', false, true);
      }
      rows.push(row);
    }

    if (this._columnTree) {
      this._columnTree[this._columnTree.length - 1].forEach(c => c.notifyPath && c.notifyPath('_cells.*', c._cells));
    }

    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_23__["beforeNextRender"])(this, () => {
      this._updateFirstAndLastColumn();
      this._resetKeyboardNavigation();
    });
    return rows;
  }

  /** @private */
  _getRowTarget() {
    return this.$.items;
  }

  /** @private */
  _createCell(tagName) {
    const contentId = this._contentIndex = this._contentIndex + 1 || 0;
    const slotName = 'vaadin-grid-cell-content-' + contentId;

    const cellContent = document.createElement('vaadin-grid-cell-content');
    cellContent.setAttribute('slot', slotName);

    const cell = document.createElement(tagName);
    cell.id = slotName.replace('-content-', '-');
    cell.setAttribute('tabindex', '-1');
    cell.setAttribute('role', tagName === 'td' ? 'gridcell' : 'columnheader');

    const slot = document.createElement('slot');
    slot.setAttribute('name', slotName);

    cell.appendChild(slot);

    cell._content = cellContent;

    // With native Shadow DOM, mousedown on slotted element does not focus
    // focusable slot wrapper, that is why cells are not focused with
    // mousedown. Workaround: listen for mousedown and focus manually.
    cellContent.addEventListener('mousedown', () => {
      if (window.chrome) {
        // Chrome bug: focusing before mouseup prevents text selection, see http://crbug.com/771903
        const mouseUpListener = () => {
          if (!cellContent.contains(this.getRootNode().activeElement)) {
            cell.focus();
          }
          // If focus is in the cell content — respect it, do not change.
          document.removeEventListener('mouseup', mouseUpListener, true);
        };
        document.addEventListener('mouseup', mouseUpListener, true);
      } else {
        // Focus on mouseup, on the other hand, removes selection on Safari.
        // Watch out sync focus removal issue, only async focus works here.
        setTimeout(() => {
          if (!cellContent.contains(this.getRootNode().activeElement)) {
            cell.focus();
          }
        });
      }
    });

    return cell;
  }

  /**
   * @param {!HTMLTableRowElement} row
   * @param {!Array<!GridColumnElement>} columns
   * @param {?string} section
   * @param {boolean} isColumnRow
   * @param {boolean} noNotify
   * @protected
   */
  _updateRow(row, columns, section, isColumnRow, noNotify) {
    section = section || 'body';

    const contentsFragment = document.createDocumentFragment();

    Array.from(row.children).forEach(cell => cell._vacant = true);
    row.innerHTML = '';
    if (row.id !== 'sizer') {
      row.hidden = true;
    }
    columns
      .filter(column => !column.hidden)
      .forEach((column, index, cols) => {
        let cell;

        if (section === 'body') {
        // Body
          column._cells = column._cells || [];
          cell = column._cells.filter(cell => cell._vacant)[0];
          if (!cell) {
            cell = this._createCell('td');
            column._cells.push(cell);
          }
          cell.setAttribute('part', 'cell body-cell');
          row.appendChild(cell);

          if (index === cols.length - 1 && (this._rowDetailsTemplate || this.rowDetailsRenderer)) {
          // Add details cell as last cell to body rows
            this._detailsCells = this._detailsCells || [];
            const detailsCell = this._detailsCells.filter(cell => cell._vacant)[0] || this._createCell('td');
            if (this._detailsCells.indexOf(detailsCell) === -1) {
              this._detailsCells.push(detailsCell);
            }
            if (!detailsCell._content.parentElement) {
              contentsFragment.appendChild(detailsCell._content);
            }
            this._configureDetailsCell(detailsCell);
            row.appendChild(detailsCell);
            this._a11ySetRowDetailsCell(row, detailsCell);
            detailsCell._vacant = false;
          }

          if (column.notifyPath && !noNotify) {
            column.notifyPath('_cells.*', column._cells);
          }
        } else {
        // Header & footer
          const tagName = section === 'header' ? 'th' : 'td';
          if (isColumnRow || column.localName === 'vaadin-grid-column-group') {
            cell = column[`_${section}Cell`] || this._createCell(tagName);
            cell._column = column;
            row.appendChild(cell);
            column[`_${section}Cell`] = cell;
          } else {
            column._emptyCells = column._emptyCells || [];
            cell = column._emptyCells.filter(cell => cell._vacant)[0] || this._createCell(tagName);
            cell._column = column;
            row.appendChild(cell);
            if (column._emptyCells.indexOf(cell) === -1) {
              column._emptyCells.push(cell);
            }
          }
          cell.setAttribute('part', `cell ${section}-cell`);
          this.__updateHeaderFooterRowVisibility(row);
        }

        if (!cell._content.parentElement) {
          contentsFragment.appendChild(cell._content);
        }
        cell._vacant = false;
        cell._column = column;
      });

    // Might be empty if only cache was used
    this.appendChild(contentsFragment);

    this._frozenCellsChanged();
    this._updateFirstAndLastColumnForRow(row);
  }

  /**
   * @param {HTMLTableRowElement} row
   * @protected
   */
  __updateHeaderFooterRowVisibility(row) {
    if (!row) {
      return;
    }

    const visibleRowCells = Array.from(row.children).filter(cell => {
      const column = cell._column;
      if (column._emptyCells && column._emptyCells.indexOf(cell) > -1) {
        // The cell is an "empty cell"  -> doesn't block hiding the row
        return false;
      }
      if (row.parentElement === this.$.header) {
        if (column.headerRenderer || column._headerTemplate) {
          // The cell is the header cell of a column that has a header renderer
          // or a header template -> row should be visible
          return true;
        }
        if (column.header === null) {
          // The column header is explicilty set to null -> doesn't block hiding the row
          return false;
        }
        if (column.path || column.header !== undefined) {
          // The column has an explicit non-null header or a path that generates a header
          // -> row should be visible
          return true;
        }
      } else {
        if (column.footerRenderer || column._footerTemplate) {
          // The cell is the footer cell of a column that has a footer renderer
          // or a footer template -> row should be visible
          return true;
        }
      }
    });

    if (row.hidden !== !visibleRowCells.length) {
      row.hidden = !visibleRowCells.length;
      this.notifyResize();
    }
  }

  /** @private */
  _updateScrollerItem(row, index) {
    this._preventScrollerRotatingCellFocus(row, index);

    if (!this._columnTree) {
      return;
    }

    this._toggleAttribute('first', index === 0, row);
    this._toggleAttribute('odd', index % 2, row);
    this._a11yUpdateRowRowindex(row, index);
    this._getItem(index, row);
  }

  /** @private */
  _columnTreeChanged(columnTree, splices) {
    this._renderColumnTree(columnTree);
    this.recalculateColumnWidths();
  }

  /**
   * @param {!Array<!GridColumnElement>} columnTree
   * @protected
   */
  _renderColumnTree(columnTree) {
    Array.from(this.$.items.children).forEach((row) => this._updateRow(row, columnTree[columnTree.length - 1], null, false, true));

    while (this.$.header.children.length < columnTree.length) {
      const headerRow = document.createElement('tr');
      headerRow.setAttribute('part', 'row');
      headerRow.setAttribute('role', 'row');
      this.$.header.appendChild(headerRow);

      const footerRow = document.createElement('tr');
      footerRow.setAttribute('part', 'row');
      footerRow.setAttribute('role', 'row');
      this.$.footer.appendChild(footerRow);
    }
    while (this.$.header.children.length > columnTree.length) {
      this.$.header.removeChild(this.$.header.firstElementChild);
      this.$.footer.removeChild(this.$.footer.firstElementChild);
    }

    Array.from(this.$.header.children)
      .forEach((headerRow, index) => this._updateRow(headerRow, columnTree[index], 'header', index === columnTree.length - 1));

    Array.from(this.$.footer.children)
      .forEach((footerRow, index) => this._updateRow(footerRow, columnTree[columnTree.length - 1 - index], 'footer', index === 0));

    // Sizer rows
    this._updateRow(this.$.sizer, columnTree[columnTree.length - 1]);

    this._resizeHandler();
    this._frozenCellsChanged();
    this._updateFirstAndLastColumn();
    this._resetKeyboardNavigation();
    this._a11yUpdateHeaderRows();
    this._a11yUpdateFooterRows();
    this.__updateFooterPositioning();
  }

  __updateFooterPositioning() {
    if (this._firefox) {
      // Sticky (or translated) footer in a flexbox host doesn't get included in
      // the scroll height calculation on FF. This is a workaround for the issue.
      this.$.items.style.paddingBottom = 0;
      if (!this.heightByRows) {
        this.$.items.style.paddingBottom = `${this.$.footer.offsetHeight}px`;
      }
    }

    if (this._ios) {
      const isOldIOS = !window.CSS.supports('position', 'sticky');
      if (isOldIOS) {
        // Due to a rendering bug, the sticky header may disappear on an older iOS (10-12) Safari
        // if the grid is used inside of a flex box. This is a workaround for the issue.
        this.$.table.style.height = '';
        this.$.table.style.minHeight = '100%';
        this.$.table.style.maxHeight = '100%';
        setTimeout(() => this.$.table.style.height = `${this.$.scroller.offsetHeight}px`);
      }
    }
  }

  /**
   * @param {!HTMLElement} row
   * @param {GridItem} item
   * @protected
   */
  _updateItem(row, item) {
    row._item = item;
    const model = this.__getRowModel(row);

    this._toggleAttribute('selected', model.selected, row);
    this._a11yUpdateRowSelected(row, model.selected);
    this._a11yUpdateRowLevel(row, model.level);
    this._toggleAttribute('expanded', model.expanded, row);
    if (this._rowDetailsTemplate || this.rowDetailsRenderer) {
      this._toggleDetailsCell(row, item);
    }
    this._generateCellClassNames(row, model);
    this._filterDragAndDrop(row, model);

    Array.from(row.children).forEach(cell => {
      if (cell._renderer) {
        const owner = cell._column || this;
        cell._renderer.call(owner, cell._content, owner, model);
      } else if (cell._instance) {
        cell._instance.__detailsOpened__ = model.detailsOpened;
        cell._instance.__selected__ = model.selected;
        cell._instance.__level__ = model.level;
        cell._instance.__expanded__ = model.expanded;
        cell._instance.setProperties(model);
      }
    });

    this._debouncerUpdateHeights = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_24__["Debouncer"].debounce(this._debouncerUpdateHeights,
      _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_25__["timeOut"].after(1), () => {
        this._updateMetrics();
        this._positionItems();
        this._updateScrollerSize();
      }
    );
  }

  /** @private */
  _resizeHandler() {
    this._updateDetailsCellHeights();
    this._accessIronListAPI(super._resizeHandler, true);
    this._updateScrollerMeasurements();
    this.__updateFooterPositioning();
  }

  /** @private */
  _onAnimationEnd(e) {
    // ShadyCSS applies scoping suffixes to animation names
    if (e.animationName.indexOf('vaadin-grid-appear') === 0) {
      this._render();
      e.stopPropagation();
      this.notifyResize();
      this.__itemsReceived();

      requestAnimationFrame(() => {
        // This needs to be set programmatically in order to avoid an iOS 10 bug (disappearing grid)
        this.$.table.style.webkitOverflowScrolling = 'touch';
      });
    }
  }

  /**
   * @param {string} name
   * @param {boolean} bool
   * @param {!Element} node
   * @protected
   */
  _toggleAttribute(name, bool, node) {
    if (node.hasAttribute(name) === !bool) {
      if (bool) {
        node.setAttribute(name, '');
      } else {
        node.removeAttribute(name);
      }
    }
  }

  /**
   * @param {!HTMLTableRowElement} row
   * @return {!GridItemModel}
   * @protected
   */
  __getRowModel(row) {
    return {
      index: row.index,
      item: row._item,
      level: this._getIndexLevel(row.index),
      expanded: this._isExpanded(row._item),
      selected: this._isSelected(row._item),
      detailsOpened:
        !!(this._rowDetailsTemplate || this.rowDetailsRenderer) && this._isDetailsOpened(row._item)
    };
  }

  /**
   * Manually invoke existing renderers for all the columns
   * (header, footer and body cells) and opened row details.
   */
  render() {
    if (this._columnTree) {
      // header and footer renderers
      this._columnTree.forEach(level => {
        level.forEach(column => column._renderHeaderAndFooter());
      });

      // body and row details renderers
      this._update();
    }
  }

  /**
   * Updates the computed metrics and positioning of internal grid parts
   * (row/details cell positioning etc). Needs to be invoked whenever the sizing of grid
   * content changes asynchronously to ensure consistent appearance (e.g. when a
   * contained image whose bounds aren't known beforehand finishes loading).
   */
  notifyResize() {
    super.notifyResize();
  }

  /** @private */
  _heightByRowsChanged(value, oldValue) {
    if (value || oldValue) {
      this.notifyResize();
    }
  }

  /** @protected */
  __forceReflow() {
    this._debouncerForceReflow = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_24__["Debouncer"].debounce(this._debouncerForceReflow,
      _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_25__["animationFrame"], () => {
        this.$.scroller.style.overflow = 'hidden';
        setTimeout(() => this.$.scroller.style.overflow = '');
      }
    );
  }
}

customElements.define(GridElement.is, GridElement);



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/color.js":
/*!**************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/color.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-material-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");



const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="material-color-light">
  <template>
    <style>
      :host,
      #host-fix {
        /* Text colors */
        --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));
        --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));
        --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));

        /* Primary colors */
        --material-primary-color: var(--primary-color, #6200ee);
        --material-primary-contrast-color: var(--dark-theme-base-color, #fff);
        --material-primary-text-color: var(--material-primary-color);

        /* Error colors */
        --material-error-color: var(--error-color, #b00020);
        --material-error-text-color: var(--material-error-color);

        /* Background colors */
        --material-background-color: var(--light-theme-background-color, #fff);
        --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);
        --material-disabled-color: rgba(0, 0, 0, 0.26);

        /* Divider colors */
        --material-divider-color: rgba(0, 0, 0, 0.12);

        /* Undocumented internal properties (prefixed with three dashes) */

        /* Text field tweaks */
        --_material-text-field-input-line-background-color: initial;
        --_material-text-field-input-line-opacity: initial;
        --_material-text-field-input-line-hover-opacity: initial;
        --_material-text-field-focused-label-opacity: initial;

        /* Button tweaks */
        --_material-button-raised-background-color: initial;
        --_material-button-outline-color: initial;

        /* Grid tweaks */
        --_material-grid-row-hover-background-color: initial;

        /* Split layout tweaks */
        --_material-split-layout-splitter-background-color: initial;

        background-color: var(--material-background-color);
        color: var(--material-body-text-color);
      }

      [theme~="dark"] {
        /* Text colors */
        --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));
        --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));
        --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));

        /* Primary colors */
        --material-primary-color: var(--light-primary-color, #7e3ff2);
        --material-primary-text-color: #b794f6;

        /* Error colors */
        --material-error-color: var(--error-color, #de2839);
        --material-error-text-color: var(--material-error-color);

        /* Background colors */
        --material-background-color: var(--dark-theme-background-color, #303030);
        --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);
        --material-disabled-color: rgba(255, 255, 255, 0.3);

        /* Divider colors */
        --material-divider-color: rgba(255, 255, 255, 0.12);

        /* Undocumented internal properties (prefixed with three dashes) */

        /* Text field tweaks */
        --_material-text-field-input-line-background-color: #fff;
        --_material-text-field-input-line-opacity: 0.7;
        --_material-text-field-input-line-hover-opacity: 1;
        --_material-text-field-focused-label-opacity: 1;

        /* Button tweaks */
        --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);
        --_material-button-outline-color: rgba(255, 255, 255, 0.2);

        /* Grid tweaks */
        --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);
        --_material-grid-row-selected-overlay-opacity: 0.16;

        /* Split layout tweaks */
        --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);

        background-color: var(--material-background-color);
        color: var(--material-body-text-color);
      }

      a {
        color: inherit;
      }
    </style>
  </template>
</dom-module><dom-module id="material-color-dark">
  <template>
    <style>
      :host,
      #host-fix {
        /* Text colors */
        --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));
        --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));
        --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));

        /* Primary colors */
        --material-primary-color: var(--light-primary-color, #7e3ff2);
        --material-primary-text-color: #b794f6;

        /* Error colors */
        --material-error-color: var(--error-color, #de2839);
        --material-error-text-color: var(--material-error-color);

        /* Background colors */
        --material-background-color: var(--dark-theme-background-color, #303030);
        --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);
        --material-disabled-color: rgba(255, 255, 255, 0.3);

        /* Divider colors */
        --material-divider-color: rgba(255, 255, 255, 0.12);

        /* Undocumented internal properties (prefixed with three dashes) */

        /* Text field tweaks */
        --_material-text-field-input-line-background-color: #fff;
        --_material-text-field-input-line-opacity: 0.7;
        --_material-text-field-input-line-hover-opacity: 1;
        --_material-text-field-focused-label-opacity: 1;

        /* Button tweaks */
        --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);
        --_material-button-outline-color: rgba(255, 255, 255, 0.2);

        /* Grid tweaks */
        --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);
        --_material-grid-row-selected-overlay-opacity: 0.16;

        /* Split layout tweaks */
        --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);

        background-color: var(--material-background-color);
        color: var(--material-body-text-color);
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    :root {
      /* Text colors */
      --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));
      --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));
      --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));

      /* Primary colors */
      --material-primary-color: var(--primary-color, #6200ee);
      --material-primary-contrast-color: var(--dark-theme-base-color, #fff);
      --material-primary-text-color: var(--material-primary-color);

      /* Error colors */
      --material-error-color: var(--error-color, #b00020);
      --material-error-text-color: var(--material-error-color);

      /* Background colors */
      --material-background-color: var(--light-theme-background-color, #fff);
      --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);
      --material-disabled-color: rgba(0, 0, 0, 0.26);

      /* Divider colors */
      --material-divider-color: rgba(0, 0, 0, 0.12);
    }
  </style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/font-icons.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-material-styles/version.js");


const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<custom-style>
  <style>
    @font-face {
      font-family: 'material-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAjAAAsAAAAADZQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAARAAAAFZSk09oY21hcAAAAYgAAACNAAACNOuCXH5nbHlmAAACGAAABDwAAAXsdK8UGGhlYWQAAAZUAAAAMAAAADYX9T2IaGhlYQAABoQAAAAgAAAAJBGyCLpobXR4AAAGpAAAABQAAABAjXoAAGxvY2EAAAa4AAAAIgAAACIKMgjUbWF4cAAABtwAAAAfAAAAIAEeAFRuYW1lAAAG/AAAATQAAAJe3l764XBvc3QAAAgwAAAAjwAAAMqJEjDWeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYOS4wTiBgZWBgYGfbQIDA2MAhGZpYChlymZgYGJgZWbACgLSXFMYHF4xvuJnv/CvgOEG+wXG6UBhRpAcAMyUDJN4nO2R2Q0DIQxEHwt7HzSSGlJQvlJkqqGJjYdJGbH0PPJgELKBEcjBIyiQ3iQUr3BT9zNb9wvP3lPkt3rfkZNy1KXnIXpLvDgxs7DGvZ2Dk4saxxP/OHr+/KqqCZo+08EgzUa7acVoym002lubDNLZIF0M0tUg3Yz22XaD9DD6XTsN0ssgrYb6BZEQJiUAAAB4nH1UbUhbVxg+77259yZMJbfko7DhbnJtrjYuWfNxsx9qBFu32ljHWqWO6VD6MW1G4uYPsfSDdQOHXOuPrtYfKytKJziYEJkQZLQ/BqHCpsUfghZX1jHBjBUWWqfes51zE1dloyfJyXvOed5znvO+z3sQINKEeb4WmRECBURZBAGEeU1fyOgPhliJlTT9geneVpTxD23/jPbinSAGRYgADGuMP8P4CILgGd9W1HRPXyDeiEEIL5pvCnH0MnqVeMhh2e4iP9ldAnbRVgpBV6AGwmLIB6xLdAnzpzPb+zOn1fdU8uVr8/9/3eVr+fEMacZg1+LGBmfLczKHuNuIQ8gCggUU9lP8/hDjN01pcBluk8sQK4/jOa6P4kCxEOI8p+kTzCkNq6Z1YukTGswVcLUFHNnOCeyaBvexqjGnuD4Nh3GYWIVYxLkV9FJ+PwqluwpxcqK+QGJidIyfDLkm0hnW8wXiziL09xskPma0Hx1CEbKPW+CRwFudDuR0SBEVRVSr4kGKh3UrPlA81kgNRFTJWQpOh1UoAYFnZZoC07dz6RRejx0/HgN7Kg0j6RTYY01NMbyeSs+NXR9+WB2NVj8cvg71z+2eG0zxMVwjmAksO53G3elpnKVOYJtOw430NNhiTRsb//HDacPmbPoE/uEC0OsbMRtn12jGLQwzCznIsWu4CHJ77vgKkl50RzkcDMti0DQ1939M8izPUSG8mPJmWSZDEkSaieivy7IqzKMSdABVoTcROsDLEj1N3RehuQLebjOiGQxEFF52Kx7FEw5FLKCGQ0bEZbegqEGJkuUZMh0MOB1Oh93G/7b4GOdy63i0veruJSwMmlcGN1vLvQdHOs8kzndOFxW3xhoqK8HUiX9SvRV09mLy91+eQdGfWTjXHv1R/xJfktwGqL2x+yx8/McoWD6AjcFnZYPc153nE2c6Ryq85Sl4zdsQay0u1jNwKHmRzh70qtl3u85i7clXOAsfwVW+0tvQ2Ooy9ERqYZsvQfuQQu5biPW/gS4oyUOFpFIdOaiMeKIiN+1tdBygKyGKMU09XV3CMy0tcHRpFbKrS3C0pQXPLK0+HejtqTt8uK6nF6w71sA79XXlFRXldfXjOwZf0tGGJ5eX8WRbR0cbNC8vQ3Nbx1bpXkf8hFqstMfVMNCuGiO6AhFYyRTjVjYHmFm06y3ykQGhKxn1YN3JJkmwTCfkfOWEjMqhyQOXyP+auJaXcVU0WkUkPTYzdutR5XzFRLL3Sn8ifsfn9/vuxBO5RPcJ/D0zyzUn9mqfCE78pve7QKgAox6v+05SLKXF0M7SQbiVIW+enaEkyod+djTnMoIdNqINInkByStyzd3dNXorNXT18v3oFxf6j7xlHNHP2YygR6u74noXTuJFo8QeTw5+3vh2MDDTZz154spnN/PcjXx8kvyw7gh+hJMwDDlc9A+3XcsFeJxjYGRgYADi5PtWjvH8Nl8ZuDkTgCIM16srKhH0v0zO++wXgFwOBiaQKAA6hAuJeJxjYGRgYL/wr4CBgcuKgeH/f877DEARFCAAAIewBYJ4nGNgYGDgTCAOc1lhigEAvMIGAwAAAAAAGAAwAGIAdgCKAJ4AwAEkATIBcAHoAlACXgKsAvYAAHicY2BkYGAQYPBgYGEAASYg5gJCBob/YD4DABFeAXMAeJx9kL1uwjAUhU8gUJVIVaWqnRgsVepSEX5G1BkkRgb2EBwIcuLIMUi8QR+kT9CH6NgH6VP0xHiBAVtyvvvdc50oAB7xgwDNCvDgzma1cMfqzG3Ss+eQ/Oq5gwhjz136D889vGPhOcITDrwhCO9p+vj03GL+y3Ob/ttzSP713MEL/jx30Q/guYdV0Pcc4S0wRWKlyRM1yFNd1ku5PajkSl5WK2nqXJdiHI8uG3NZSkOzEeuTqI/bibWZyIwuxEyXViqlRWX0XqY23llbTYfDzPs41QUKJLCQMMhJCgM+U2iUqLGk3/JfKHbMzeSt3sr5mqapBf9/jNHNiTl96XrnzIZTa5x41jjyiya0FhnrjBnNuwRmbrZJK25NU7nenialj7FzUxWmGHJnV/nYvb34BzHZcLZ4nG2MQQ6CMBREO0ARtSjuvASHqu1XCD+0+YKE20tD3DmLmbxk8lSm9tzV/zTIkKOARokDKhxxwhkGNS64osFNXaxIWFoflnGx4s2Oc0xQOcs0eivadeQGs/VHwtgyPaf6B9K/ukk7pnTj4IbKS4jJp2lziaGVWt+/7YPJ5xsUke1aCnGwvpxjGqW+tN8xfgA=) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --material-icons-arrow-downward: "\\ea01";
      --material-icons-arrow-upward: "\\ea02";
      --material-icons-calendar: "\\ea03";
      --material-icons-check: "\\ea04";
      --material-icons-chevron-left: "\\ea05";
      --material-icons-chevron-right: "\\ea06";
      --material-icons-clear: "\\ea07";
      --material-icons-clock: "\\ea08";
      --material-icons-dropdown: "\\ea09";
      --material-icons-error: "\\ea0a";
      --material-icons-eye-disabled: "\\ea0b";
      --material-icons-eye: "\\ea0c";
      --material-icons-play: "\\ea0d";
      --material-icons-reload: "\\ea0e";
      --material-icons-upload: "\\ea0f";
    }
  </style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);

/* NOTICE: Generated with 'gulp icons' */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/version.js":
/*!****************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/version.js ***!
  \****************************************************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
class Material extends HTMLElement {
  static get version() {
    return '1.3.2';
  }
}

customElements.define('vaadin-material-styles', Material);




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js ***!
  \*******************************************************************************/
/*! exports provided: TextFieldMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldMixin", function() { return TextFieldMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`<dom-module id="vaadin-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-flex;
        outline: none;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-text-field-container,
      .vaadin-text-area-container {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        max-width: 100%;
        width: var(--vaadin-text-field-default-width, 12em);
      }

      [part="label"]:empty {
        display: none;
      }

      [part="input-field"] {
        display: flex;
        align-items: center;
        flex: auto;
      }

      .vaadin-text-field-container [part="input-field"] {
        flex-grow: 0;
      }

      /* Reset the native input styles */
      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea) {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        min-width: 0;
        font: inherit;
        font-size: 1em;
        line-height: normal;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      [part="input-field"] ::slotted(*) {
        flex: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      [part="input-field"] ::slotted(textarea) {
        resize: none;
      }

      [part="value"]::-ms-clear,
      [part="input-field"] ::slotted(input)::-ms-clear {
        display: none;
      }

      [part="clear-button"] {
        cursor: default;
      }

      [part="clear-button"]::before {
        content: "✕";
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

const HOST_PROPS = {
  default: ['list', 'autofocus', 'pattern', 'autocapitalize', 'autocorrect', 'maxlength',
    'minlength', 'name', 'placeholder', 'autocomplete', 'title', 'disabled', 'readonly', 'required'],
  accessible: ['invalid']
};

const PROP_TYPE = {
  DEFAULT: 'default',
  ACCESSIBLE: 'accessible'
};


/**
 * @polymerMixin
 */
const TextFieldMixin = subclass => class VaadinTextFieldMixin extends subclass {
  static get properties() {
    return {
      /**
       * Whether the value of the control can be automatically completed by the browser.
       * List of available options at:
       * https://developer.mozilla.org/en/docs/Web/HTML/Element/input#attr-autocomplete
       */
      autocomplete: {
        type: String
      },

      /**
       * This is a property supported by Safari that is used to control whether
       * autocorrection should be enabled when the user is entering/editing the text.
       * Possible values are:
       * on: Enable autocorrection.
       * off: Disable autocorrection.
       * @type {!TextFieldAutoCorrect | undefined}
       */
      autocorrect: {
        type: String
      },

      /**
       * This is a property supported by Safari and Chrome that is used to control whether
       * autocapitalization should be enabled when the user is entering/editing the text.
       * Possible values are:
       * characters: Characters capitalization.
       * words: Words capitalization.
       * sentences: Sentences capitalization.
       * none: No capitalization.
       * @type {!TextFieldAutoCapitalize | undefined}
       */
      autocapitalize: {
        type: String
      },

      /**
       * Specify that the value should be automatically selected when the field gains focus.
       * @type {boolean}
       */
      autoselect: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to display the clear icon which clears the input.
       * @attr {boolean} clear-button-visible
       * @type {boolean}
       */
      clearButtonVisible: {
        type: Boolean,
        value: false
      },

      /**
       * Error to show when the input value is invalid.
       * @attr {string} error-message
       * @type {string}
       */
      errorMessage: {
        type: String,
        value: '',
        observer: '_errorMessageChanged'
      },

      /**
       * Object with translated strings used for localization. Has
       * the following structure and default values:
       *
       * ```
       * {
       *   // Translation of the clear icon button accessible label
       *   clear: 'Clear'
       * }
       * ```
       * @type {{clear: string}}
       */
      i18n: {
        type: Object,
        value: () => {
          return {
            clear: 'Clear'
          };
        }
      },

      /**
       * String used for the label element.
       * @type {string}
       */
      label: {
        type: String,
        value: '',
        observer: '_labelChanged'
      },

      /**
       * String used for the helper text.
       * @attr {string} helper-text
       * @type {string | null}
       */
      helperText: {
        type: String,
        value: '',
        observer: '_helperTextChanged'
      },

      /**
       * Maximum number of characters (in Unicode code points) that the user can enter.
       */
      maxlength: {
        type: Number
      },

      /**
       * Minimum number of characters (in Unicode code points) that the user can enter.
       */
      minlength: {
        type: Number
      },

      /**
       * The name of the control, which is submitted with the form data.
       */
      name: {
        type: String
      },

      /**
       * A hint to the user of what can be entered in the control.
       */
      placeholder: {
        type: String
      },

      /**
       * This attribute indicates that the user cannot modify the value of the control.
       */
      readonly: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * Specifies that the user must fill in a value.
       */
      required: {
        type: Boolean,
        reflectToAttribute: true
      },


      /**
       * The initial value of the control.
       * It can be used for two-way data binding.
       * @type {string}
       */
      value: {
        type: String,
        value: '',
        observer: '_valueChanged',
        notify: true
      },

      /**
       * This property is set to true when the control value is invalid.
       * @type {boolean}
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        value: false
      },

      /**
       * Specifies that the text field has value.
       * @attr {boolean} has-value
       */
      hasValue: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * When set to true, user is prevented from typing a value that
       * conflicts with the given `pattern`.
       * @attr {boolean} prevent-invalid-input
       */
      preventInvalidInput: {
        type: Boolean
      },

      /**
       * A pattern matched against individual characters the user inputs.
       * When set, the field will prevent:
       * - `keyDown` events if the entered key doesn't match `/^_enabledCharPattern$/`
       * - `paste` events if the pasted text doesn't match `/^_enabledCharPattern*$/`
       * - `drop` events if the dropped text doesn't match `/^_enabledCharPattern*$/`
       *
       * For example, to enable entering only numbers and minus signs,
       * `_enabledCharPattern = "[\\d-]"`
       * @protected
       */
      _enabledCharPattern: String,

      /** @private */
      _labelId: String,

      /** @private */
      _helperTextId: String,

      /** @private */
      _errorId: String,

      /** @private */
      _inputId: String,

      /** @private */
      _hasSlottedHelper: Boolean
    };
  }

  static get observers() {
    return ['_stateChanged(disabled, readonly, clearButtonVisible, hasValue)',
      '_hostPropsChanged(' + HOST_PROPS.default.join(', ') + ')',
      '_hostAccessiblePropsChanged(' + HOST_PROPS.accessible.join(', ') + ')',
      '_getActiveErrorId(invalid, errorMessage, _errorId, helperText, _helperTextId, _hasSlottedHelper)',
      '_getActiveLabelId(label, _labelId, _inputId)',
      '__observeOffsetHeight(errorMessage, invalid, label, helperText)',
      '__enabledCharPatternChanged(_enabledCharPattern)'
    ];
  }

  /**
   * @return {HTMLElement | undefined}
   * @protected
   */
  get focusElement() {
    if (!this.shadowRoot) {
      return;
    }
    const slotted = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);
    if (slotted) {
      return slotted;
    }
    return this.shadowRoot.querySelector('[part="value"]');
  }

  /**
   * @return {HTMLElement | undefined}}
   * @protected
   */
  get inputElement() {
    return this.focusElement;
  }

  /**
   * @return {string}
   * @protected
   */
  get _slottedTagName() {
    return 'input';
  }

  /** @protected */
  _createConstraintsObserver() {
    // This complex observer needs to be added dynamically here (instead of defining it above in the `get observers()`)
    // so that it runs after complex observers of inheriting classes. Otherwise e.g. `_stepOrMinChanged()` observer of
    // vaadin-number-field would run after this and the `min` and `step` properties would not yet be propagated to
    // the `inputElement` when this runs.
    this._createMethodObserver('_constraintsChanged(required, minlength, maxlength, pattern)');
  }

  /** @private */
  _onInput(e) {
    if (this.__preventInput) {
      e.stopImmediatePropagation();
      this.__preventInput = false;
      return;
    }

    if (this.preventInvalidInput) {
      const input = this.inputElement;
      if (input.value.length > 0 && !this.checkValidity()) {
        input.value = this.value || '';
        // add input-prevented attribute for 200ms
        this.setAttribute('input-prevented', '');
        this._inputDebouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(
          this._inputDebouncer,
          _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["timeOut"].after(200), () => {
            this.removeAttribute('input-prevented');
          });
        return;
      }
    }

    if (!e.__fromClearButton) {
      this.__userInput = true;
    }

    this.value = e.target.value;
    this.__userInput = false;
  }

  // NOTE(yuriy): Workaround needed for IE11 and Edge for proper displaying
  // of the clear button instead of setting display property for it depending on state.
  /** @private */
  _stateChanged(disabled, readonly, clearButtonVisible, hasValue) {
    if (!disabled &&
        !readonly &&
        clearButtonVisible &&
        hasValue
    ) {
      this.$.clearButton.removeAttribute('hidden');
    } else {
      this.$.clearButton.setAttribute('hidden', true);
    }
  }

  /**
   * @param {!Event} e
   * @protected
   */
  _onChange(e) {
    if (this._valueClearing) {
      return;
    }

    // In the Shadow DOM, the `change` event is not leaked into the
    // ancestor tree, so we must do this manually.
    const changeEvent = new CustomEvent('change', {
      detail: {
        sourceEvent: e
      },
      bubbles: e.bubbles,
      cancelable: e.cancelable,
    });
    this.dispatchEvent(changeEvent);
  }

  /**
   * @param {unknown} newVal
   * @param {unknown} oldVal
   * @protected
   */
  _valueChanged(newVal, oldVal) {
    // setting initial value to empty string, skip validation
    if (newVal === '' && oldVal === undefined) {
      return;
    }

    if (newVal !== '' && newVal != null) {
      this.hasValue = true;
    } else {
      this.hasValue = false;
    }

    if (this.__userInput) {
      return;
    } else if (newVal !== undefined) {
      this.inputElement.value = newVal;
    } else {
      this.value = this.inputElement.value = '';
    }

    if (this.invalid) {
      this.validate();
    }
  }

  /** @private */
  _labelChanged(label) {
    this._setOrToggleAttribute('has-label', !!label, this);
  }

  /** @private */
  _helperTextChanged(helperText) {
    this._setOrToggleAttribute('has-helper', !!helperText, this);
  }

  /** @private */
  _errorMessageChanged(errorMessage) {
    this._setOrToggleAttribute('has-error-message', !!errorMessage, this);
  }

  /** @private */
  _onHelperSlotChange() {
    const slottedNodes = this.shadowRoot.querySelector(`[name="helper"]`).assignedNodes({flatten: true});
    // Only has slotted helper if not a text node
    // Text nodes are added by the helperText prop and not the helper slot
    // The filter is added due to shady DOM triggering this callback on helperText prop change
    this._hasSlottedHelper = slottedNodes.filter(node => node.nodeType !== 3).length;

    if (this._hasSlottedHelper) {
      this.setAttribute('has-helper', 'slotted');
    } else if (this.helperText === '' || this.helperText === null) {
      this.removeAttribute('has-helper');
    }
  }

  /** @private */
  _onSlotChange() {
    const slotted = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);

    if (this.value) {
      this.inputElement.value = this.value;
      this.validate();
    }

    if (slotted && !this._slottedInput) {
      this._validateSlottedValue(slotted);
      this._addInputListeners(slotted);
      this._addIEListeners(slotted);
      this._slottedInput = slotted;
    } else if (!slotted && this._slottedInput) {
      this._removeInputListeners(this._slottedInput);
      this._removeIEListeners(this._slottedInput);
      this._slottedInput = undefined;
    }

    Object.keys(PROP_TYPE).map(key => PROP_TYPE[key]).forEach(type =>
      this._propagateHostAttributes(HOST_PROPS[type].map(attr => this[attr]), type));
  }

  /** @private */
  _hostPropsChanged(...attributesValues) {
    this._propagateHostAttributes(attributesValues, PROP_TYPE.DEFAULT);
  }

  /** @private */
  _hostAccessiblePropsChanged(...attributesValues) {
    this._propagateHostAttributes(attributesValues, PROP_TYPE.ACCESSIBLE);
  }

  /** @private */
  _validateSlottedValue(slotted) {
    if (slotted.value !== this.value) {
      console.warn('Please define value on the vaadin-text-field component!');
      slotted.value = '';
    }
  }

  /** @private */
  _propagateHostAttributes(attributesValues, type) {
    const input = this.inputElement;
    const attributeNames = HOST_PROPS[type];

    if (type === PROP_TYPE.ACCESSIBLE) {
      attributeNames.forEach((attr, index) => {
        this._setOrToggleAttribute(attr, attributesValues[index], input);
        this._setOrToggleAttribute(`aria-${attr}`, attributesValues[index] ? 'true' : false, input);
      });
    } else {
      attributeNames.forEach((attr, index) => {
        this._setOrToggleAttribute(attr, attributesValues[index], input);
      });
    }
  }

  /** @private */
  _setOrToggleAttribute(name, value, node) {
    if (!name || !node) {
      return;
    }

    if (value) {
      node.setAttribute(name, (typeof value === 'boolean') ? '' : value);
    } else {
      node.removeAttribute(name);
    }
  }

  /**
   * @param {boolean | undefined} required
   * @param {number | undefined} minlength
   * @param {number | undefined} maxlength
   * @param {string | undefined} maxlength
   * @protected
   */
  _constraintsChanged(required, minlength, maxlength, pattern) {
    if (!this.invalid) {
      return;
    }

    if (!required && !minlength && !maxlength && !pattern) {
      this.invalid = false;
    } else {
      this.validate();
    }
  }

  /**
   * Returns true if the current input value satisfies all constraints (if any)
   * @return {boolean}
   */
  checkValidity() {
    // Note (Yuriy): `__forceCheckValidity` is used in containing components (i.e. `vaadin-date-picker`) in order
    // to force the checkValidity instead of returning the previous invalid state.
    if (this.required || this.pattern || this.maxlength || this.minlength || this.__forceCheckValidity) {
      return this.inputElement.checkValidity();
    } else {
      return !this.invalid;
    }
  }

  /** @private */
  _addInputListeners(node) {
    node.addEventListener('input', this._boundOnInput);
    node.addEventListener('change', this._boundOnChange);
    node.addEventListener('blur', this._boundOnBlur);
    node.addEventListener('focus', this._boundOnFocus);
    node.addEventListener('paste', this._boundOnPaste);
    node.addEventListener('drop', this._boundOnDrop);
    node.addEventListener('beforeinput', this._boundOnBeforeInput);
  }

  /** @private */
  _removeInputListeners(node) {
    node.removeEventListener('input', this._boundOnInput);
    node.removeEventListener('change', this._boundOnChange);
    node.removeEventListener('blur', this._boundOnBlur);
    node.removeEventListener('focus', this._boundOnFocus);
    node.removeEventListener('paste', this._boundOnPaste);
    node.removeEventListener('drop', this._boundOnDrop);
    node.removeEventListener('beforeinput', this._boundOnBeforeInput);
  }

  /** @protected */
  ready() {
    super.ready();

    this._createConstraintsObserver();

    this._boundOnInput = this._onInput.bind(this);
    this._boundOnChange = this._onChange.bind(this);
    this._boundOnBlur = this._onBlur.bind(this);
    this._boundOnFocus = this._onFocus.bind(this);
    this._boundOnPaste = this._onPaste.bind(this);
    this._boundOnDrop = this._onDrop.bind(this);
    this._boundOnBeforeInput = this._onBeforeInput.bind(this);

    const defaultInput = this.shadowRoot.querySelector('[part="value"]');
    this._slottedInput = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);
    this._addInputListeners(defaultInput);
    this._addIEListeners(defaultInput);
    if (this._slottedInput) {
      this._addIEListeners(this._slottedInput);
      this._addInputListeners(this._slottedInput);
    }

    this.shadowRoot.querySelector('[name="input"], [name="textarea"]')
      .addEventListener('slotchange', this._onSlotChange.bind(this));

    this._onHelperSlotChange();
    this.shadowRoot.querySelector('[name="helper"]').addEventListener('slotchange', this._onHelperSlotChange.bind(this));

    if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
      this.updateStyles();
    }

    this.$.clearButton.addEventListener('mousedown', () => this._valueClearing = true);
    this.$.clearButton.addEventListener('mouseleave', () => this._valueClearing = false);
    this.$.clearButton.addEventListener('click', this._onClearButtonClick.bind(this));
    this.addEventListener('keydown', this._onKeyDown.bind(this));

    var uniqueId = TextFieldMixin._uniqueId = 1 + TextFieldMixin._uniqueId || 0;
    this._errorId = `${this.constructor.is}-error-${uniqueId}`;
    this._labelId = `${this.constructor.is}-label-${uniqueId}`;
    this._helperTextId = `${this.constructor.is}-helper-${uniqueId}`;
    this._inputId = `${this.constructor.is}-input-${uniqueId}`;

    // Lumo theme defines a max-height transition for the "error-message"
    // part on invalid state change.
    this.shadowRoot.querySelector('[part="error-message"]')
      .addEventListener('transitionend', () => {
        this.__observeOffsetHeight();
      });
  }

  /**
   * Returns true if `value` is valid.
   * `<iron-form>` uses this to check the validity for all its elements.
   *
   * @return {boolean} True if the value is valid.
   */
  validate() {
    return !(this.invalid = !this.checkValidity());
  }

  clear() {
    this.value = '';
  }

  /** @private */
  _onBlur() {
    this.validate();
  }

  /** @private */
  _onFocus() {
    if (this.autoselect) {
      this.inputElement.select();
      // iOS 9 workaround: https://stackoverflow.com/a/7436574
      setTimeout(() => {
        try {
          this.inputElement.setSelectionRange(0, 9999);
        } catch (e) {
          // The workaround may cause errors on different input types.
          // Needs to be suppressed. See https://github.com/vaadin/flow/issues/6070
        }
      });
    }
  }

  /** @private */
  _onClearButtonClick(e) {
    e.preventDefault();
    // NOTE(yuriy): This line won't affect focus on the host. Cannot be properly tested.
    this.inputElement.focus();
    this.clear();
    this._valueClearing = false;
    if (navigator.userAgent.match(/Trident/)) {
      // Disable IE input" event prevention here, we want the input event from
      // below to propagate normally.
      this.__preventInput = false;
    }
    const inputEvent = new Event('input', {bubbles: true, composed: true});
    inputEvent.__fromClearButton = true;
    const changeEvent = new Event('change', {bubbles: !this._slottedInput});
    changeEvent.__fromClearButton = true;
    this.inputElement.dispatchEvent(inputEvent);
    this.inputElement.dispatchEvent(changeEvent);
  }

  /**
   * @param {!KeyboardEvent} e
   * @protected
   */
  _onKeyDown(e) {
    if (e.keyCode === 27 && this.clearButtonVisible) {
      const dispatchChange = !!this.value;
      this.clear();
      dispatchChange && this.inputElement.dispatchEvent(new Event('change', {bubbles: !this._slottedInput}));
    }

    if (this._enabledCharPattern && !this.__shouldAcceptKey(e)) {
      e.preventDefault();
    }
  }

  /** @private */
  __shouldAcceptKey(event) {
    return (event.metaKey || event.ctrlKey)
      || !event.key // allow typing anything if event.key is not supported
      || event.key.length !== 1 // allow "Backspace", "ArrowLeft" etc.
      || this.__enabledCharRegExp.test(event.key);
  }

  /** @private */
  _onPaste(e) {
    if (this._enabledCharPattern) {
      const pastedText = (e.clipboardData || window.clipboardData).getData('text');
      if (!this.__enabledTextRegExp.test(pastedText)) {
        e.preventDefault();
      }
    }
  }

  /** @private */
  _onDrop(e) {
    if (this._enabledCharPattern) {
      const draggedText = e.dataTransfer.getData('text');
      if (!this.__enabledTextRegExp.test(draggedText)) {
        e.preventDefault();
      }
    }
  }

  /** @private */
  _onBeforeInput(e) {
    // The `beforeinput` event covers all the cases for `_enabledCharPattern`: keyboard, pasting and dropping,
    // but it is still experimental technology so we can't rely on it. It's used here just as an additional check,
    // because it seems to be the only way to detect and prevent specific keys on mobile devices. See issue #429.
    if (this._enabledCharPattern && e.data && !this.__enabledTextRegExp.test(e.data)) {
      e.preventDefault();
    }
  }

  /** @private */
  __enabledCharPatternChanged(_enabledCharPattern) {
    this.__enabledCharRegExp = _enabledCharPattern && new RegExp('^' + _enabledCharPattern + '$');
    this.__enabledTextRegExp = _enabledCharPattern && new RegExp('^' + _enabledCharPattern + '*$');
  }

  /** @private */
  _addIEListeners(node) {
    /* istanbul ignore if */
    if (navigator.userAgent.match(/Trident/)) {
      // IE11 dispatches `input` event in following cases:
      // - focus or blur, when placeholder attribute is set
      // - placeholder attribute value changed
      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101220/
      this._shouldPreventInput = () => {
        this.__preventInput = true;
        requestAnimationFrame(() => {
          this.__preventInput = false;
        });
      };
      node.addEventListener('focusin', this._shouldPreventInput);
      node.addEventListener('focusout', this._shouldPreventInput);
      this._createPropertyObserver('placeholder', this._shouldPreventInput);
    }
  }

  /** @private */
  _removeIEListeners(node) {
    /* istanbul ignore if */
    if (navigator.userAgent.match(/Trident/)) {
      node.removeEventListener('focusin', this._shouldPreventInput);
      node.removeEventListener('focusout', this._shouldPreventInput);
    }
  }

  /** @private */
  _getActiveErrorId(invalid, errorMessage, errorId, helperText, helperTextId, hasSlottedHelper) {
    const ids = [];
    if (helperText || hasSlottedHelper) {
      ids.push(helperTextId);
    }
    if (errorMessage && invalid) {
      ids.push(errorId);
    }
    this._setOrToggleAttribute('aria-describedby', ids.join(' '), this.focusElement);
  }

  /** @private */
  _getActiveLabelId(label, _labelId, _inputId) {
    let ids = _inputId;
    if (label) {
      ids = `${_labelId} ${_inputId}`;
    }
    this.focusElement.setAttribute('aria-labelledby', ids);
  }

  /** @private */
  _getErrorMessageAriaHidden(invalid, errorMessage, errorId) {
    return (!(errorMessage && invalid ? errorId : undefined)).toString();
  }

  /** @private */
  _dispatchIronResizeEventIfNeeded(sizePropertyName, value) {
    const previousSizePropertyName = '__previous' + sizePropertyName;
    if (this[previousSizePropertyName] !== undefined
        && this[previousSizePropertyName] !== value) {
      this.dispatchEvent(
        new CustomEvent('iron-resize', {bubbles: true})
      );
    }

    this[previousSizePropertyName] = value;
  }

  /** @private */
  __observeOffsetHeight() {
    this.__observeOffsetHeightDebouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(
      this.__observeOffsetHeightDebouncer,
      _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["animationFrame"], () => {
        this._dispatchIronResizeEventIfNeeded('Height', this.offsetHeight);
      });
  }

  /**
   * @param {string} prop
   * @param {string} oldVal
   * @param {string} newVal
   * @protected
   */
  attributeChangedCallback(prop, oldVal, newVal) {
    super.attributeChangedCallback(prop, oldVal, newVal);
    // Needed until Edge has CSS Custom Properties (present in Edge Preview)
    /* istanbul ignore if */
    if (!(window.ShadyCSS && window.ShadyCSS.nativeCss) &&
      /^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)) {
      this.updateStyles();
    }

    // Safari has an issue with repainting shadow root element styles when a host attribute changes.
    // Need this workaround (toggle any inline css property on and off) until the issue gets fixed.
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    /* istanbul ignore if */
    if (isSafari && this.root) {
      const WEBKIT_PROPERTY = '-webkit-backface-visibility';
      this.root.querySelectorAll('*').forEach(el => {
        el.style[WEBKIT_PROPERTY] = 'visible';
        el.style[WEBKIT_PROPERTY] = '';
      });
    }
  }

  // Workaround for https://github.com/Polymer/polymer/issues/5259
  get __data() {
    return this.__dataValue || {};
  }

  set __data(value) {
    this.__dataValue = value;
  }

  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */

  /**
   * Fired when the value is changed by the user: on every typing keystroke,
   * and the value is cleared using the clear button.
   *
   * @event input
   */

  /**
   * Fired when the size of the element changes.
   *
   * @event iron-resize
   */
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js ***!
  \*************************************************************************/
/*! exports provided: TextFieldElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldElement", function() { return TextFieldElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-text-field-mixin.js */ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







/**
 * `<vaadin-text-field>` is a Web Component for text field control in forms.
 *
 * ```html
 * <vaadin-text-field label="First Name">
 * </vaadin-text-field>
 * ```
 *
 * ### Prefixes and suffixes
 *
 * These are child elements of a `<vaadin-text-field>` that are displayed
 * inline with the input, before or after.
 * In order for an element to be considered as a prefix, it must have the slot
 * attribute set to `prefix` (and similarly for `suffix`).
 *
 * ```html
 * <vaadin-text-field label="Email address">
 *   <div slot="prefix">Sent to:</div>
 *   <div slot="suffix">@vaadin.com</div>
 * </vaadin-text-area>
 * ```
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|-------------
 * `--vaadin-text-field-default-width` | Set the default width of the input field | `12em`
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label element
 * `input-field` | The element that wraps prefix, value and suffix
 * `value` | The text value element inside the `input-field` element
 * `error-message` | The error message element
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `disabled` | Set to a disabled text field | :host
 * `has-value` | Set when the element has a value | :host
 * `has-label` | Set when the element has a label | :host
 * `has-helper` | Set when the element has helper text or slot | :host
 * `has-error-message` | Set when the element has an error message | :host
 * `invalid` | Set when the element is invalid | :host
 * `input-prevented` | Temporarily set when invalid input is prevented | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `readonly` | Set to a readonly text field | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends PolymerElement
 * @mixes TextFieldMixin
 * @mixes ControlStateMixin
 * @mixes ThemableMixin
 * @mixes ElementMixin
 * @demo demo/index.html
 */
class TextFieldElement extends
  Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ElementMixin"])(
    Object(_vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__["TextFieldMixin"])(
      Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ControlStateMixin"])(
        Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="helper-text" on-click="focus" id="[[_helperTextId]]">
        <slot name="helper">[[helperText]]</slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`;
  }

  static get is() {
    return 'vaadin-text-field';
  }

  static get version() {
    return '2.8.2';
  }

  static get properties() {
    return {
      /**
       * Identifies a list of pre-defined options to suggest to the user.
       * The value must be the id of a <datalist> element in the same document.
       */
      list: {
        type: String
      },

      /**
       * A regular expression that the value is checked against.
       * The pattern must match the entire value, not just some subset.
       */
      pattern: {
        type: String
      },

      /**
       * The text usually displayed in a tooltip popup when the mouse is over the field.
       * @type {string}
       */
      title: {
        type: String
      }
    };
  }
}

customElements.define(TextFieldElement.is, TextFieldElement);




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js ***!
  \*****************************************************************************/
/*! exports provided: ThemableMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemableMixin", function() { return ThemableMixin; });
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");
/* harmony import */ var _vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");



/**
 * @polymerMixin
 * @mixes ThemePropertyMixin
 */
const ThemableMixin = superClass => class VaadinThemableMixin extends Object(_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemePropertyMixin"])(superClass) {

  /** @protected */
  static finalize() {
    super.finalize();

    const template = this.prototype._template;

    const hasOwnTemplate = this.template && this.template.parentElement && this.template.parentElement.id === this.is;
    const inheritedTemplate = Object.getPrototypeOf(this.prototype)._template;
    if (inheritedTemplate && !hasOwnTemplate) {
      // The element doesn't define its own template -> include the theme modules from the inherited template
      Array.from(inheritedTemplate.content.querySelectorAll('style[include]')).forEach(s => {
        this._includeStyle(s.getAttribute('include'), template);
      });
    }

    this._includeMatchingThemes(template);
  }

  /** @private */
  static _includeMatchingThemes(template) {
    const domModule = _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_0__["DomModule"];
    const modules = domModule.prototype.modules;

    let hasThemes = false;
    const defaultModuleName = this.is + '-default-theme';

    Object.keys(modules)
      .sort((moduleNameA, moduleNameB) => {
        const vaadinA = moduleNameA.indexOf('vaadin-') === 0;
        const vaadinB = moduleNameB.indexOf('vaadin-') === 0;

        const vaadinThemePrefixes = ['lumo-', 'material-'];
        const vaadinThemeA = vaadinThemePrefixes.filter(prefix => moduleNameA.indexOf(prefix) === 0).length > 0;
        const vaadinThemeB = vaadinThemePrefixes.filter(prefix => moduleNameB.indexOf(prefix) === 0).length > 0;

        if (vaadinA !== vaadinB) {
          // Include vaadin core styles first
          return vaadinA ? -1 : 1;
        } else if (vaadinThemeA !== vaadinThemeB) {
          // Include vaadin theme styles after that
          return vaadinThemeA ? -1 : 1;
        } else {
          // Lastly include custom styles so they override all vaadin styles
          return 0;
        }
      })
      .forEach(moduleName => {
        if (moduleName !== defaultModuleName) {
          const themeFor = modules[moduleName].getAttribute('theme-for');
          if (themeFor) {
            themeFor.split(' ').forEach(themeForToken => {
              if (new RegExp('^' + themeForToken.split('*').join('.*') + '$').test(this.is)) {
                hasThemes = true;
                this._includeStyle(moduleName, template);
              }
            });
          }
        }
      });

    if (!hasThemes && modules[defaultModuleName]) {
      // No theme modules found, include the default module if it exists
      this._includeStyle(defaultModuleName, template);
    }
  }

  /** @private */
  static _includeStyle(moduleName, template) {
    if (template && !template.content.querySelector(`style[include="${moduleName}"]`)) {
      const styleEl = document.createElement('style');
      styleEl.setAttribute('include', moduleName);
      template.content.appendChild(styleEl);
    }
  }

};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js ***!
  \***********************************************************************************/
/*! exports provided: ThemePropertyMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemePropertyMixin", function() { return ThemePropertyMixin; });
/**
 * @polymerMixin
 */
const ThemePropertyMixin = superClass => class VaadinThemePropertyMixin extends superClass {
  static get properties() {
    return {
      /**
       * Helper property with theme attribute value facilitating propagation
       * in shadow DOM.
       *
       * Enables the component implementation to propagate the `theme`
       * attribute value to the subcomponents in Shadow DOM by binding
       * the subcomponent’s "theme" attribute to the `theme` property of
       * the host.
       *
       * **NOTE:** Extending the mixin only provides the property for binding,
       * and does not make the propagation alone.
       *
       * See [Theme Attribute and Subcomponents](https://github.com/vaadin/vaadin-themable-mixin/wiki/5.-Theme-Attribute-and-Subcomponents).
       * page for more information.
       *
       * @protected
       */
      theme: {
        type: String,
        readOnly: true
      }
    };
  }

  /** @protected */
  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);

    if (name === 'theme') {
      this._setTheme(newValue);
    }
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics-collect.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics-collect.js ***!
  \*****************************************************************************************/
/*! exports provided: usageStatistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usageStatistics", function() { return usageStatistics; });
/* harmony import */ var _vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js */ "./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js");
/* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */
/*

This script gathers usage statistics from the application running in development mode.

Statistics gathering is automatically disabled and excluded from production builds.

For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.

*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/


function maybeGatherAndSendStats() {
  /** vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.0';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/
}

const usageStatistics = function() {
  if (typeof _vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__["runIfDevelopmentMode"] === 'function') {
    return Object(_vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__["runIfDevelopmentMode"])(maybeGatherAndSendStats);
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js ***!
  \*********************************************************************************/
/*! exports provided: usageStatistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_usage_statistics_collect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-usage-statistics-collect.js */ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics-collect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usageStatistics", function() { return _vaadin_usage_statistics_collect_js__WEBPACK_IMPORTED_MODULE_0__["usageStatistics"]; });




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/intro.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/intro.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"avl-container-start\">{{ 'VizBoxStarterKit.WelcomeToTheAVLWebStarterKit' |  translate }}</h1>\r\n<p>{{ 'VizBoxStarterKit.AVLWebStarterKitIsApplicationExample' | translate }}</p>\r\n<p>{{ 'VizBoxStarterKit.VizBoxPlatformIsDesignedToBringYouUpToSpeed' | translate }}</p>\r\n\r\n<div\r\n fxLayout=\"row\"\r\n fxLayoutAlign=\"start stretch\"\r\n [fxLayoutGap]=\"selectedPet ? '10px' : '0px'\">\r\n\r\n <viz-pets\r\n   [fxFlex]=\"selectedPet ? 70 : 100\"\r\n   (selectedPetChanged)=\"selectedPet = $event\"></viz-pets>\r\n  \r\n <viz-pet-detail\r\n   [fxFlex]=\"selectedPet ? 30 : 0\"\r\n   [pet]=\"selectedPet\"></viz-pet-detail>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pet-detail/pet-detail.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pet-detail/pet-detail.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin-top: 56px;\">\r\n  <avl-card *ngIf=\"pet\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxFill>\r\n    <h1 slot=\"title\">{{ pet.name }}</h1>\r\n    <div slot=\"content\">\r\n      <div fxLayout=\"row\" class=\"property\">\r\n        <div fxFlex=\"20\" class=\"label\">{{ 'VizBoxStarterKit.Status' | translate }}</div>\r\n        <div fxFlex class=\"value\">{{ pet.status }}</div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" class=\"property\">\r\n        <div fxFlex=\"20\" class=\"label\">{{ 'VizBoxStarterKit.Tags' | translate }}</div>\r\n        <div fxFlex class=\"value\">\r\n          <ng-container *ngFor=\"let tag of pet.tags; let isLast = last\">\r\n            {{ tag.name }}{{ isLast ? '' : ', ' }}\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" class=\"property\">\r\n        <div fxFlex=\"20\" class=\"label\">{{ 'VizBoxStarterKit.Photos' | translate }}</div>\r\n        <div fxFlex class=\"value\">\r\n          <ng-container *ngFor=\"let photo of petPhotos\">\r\n            <img *ngIf=\"photo.visible; else loading\" [src]=\"photo.url\"  style=\"width: 200px;\"/>\r\n\r\n            <ng-template #loading>\r\n              <div class=\"photo-loading-indicator\">\r\n                {{ 'VizBoxStarterKit.Loading...' | translate }}\r\n              </div>\r\n            </ng-template>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </avl-card>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pet-dialog/pet-dialog.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pet-dialog/pet-dialog.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<avl-dialog class=\"petDialog\" id=\"dialog\"\r\n  [(open)]=\"open\"\r\n  (openChange)=\"dialogOpen($event)\">\r\n\r\n  <ng-template #content>\r\n  <avl-dialog-header *ngIf=\"edit; else newPetBlock\">\r\n    {{ 'VizBoxStarterKit.EditPet' | translate }}\r\n  </avl-dialog-header>\r\n  <ng-template #newPetBlock>\r\n    <avl-dialog-header>\r\n      {{ 'VizBoxStarterKit.NewPet' | translate }}\r\n    </avl-dialog-header>\r\n  </ng-template>\r\n  <avl-dialog-content>\r\n  <form #petForm=\"ngForm\">\r\n    <avl-textfield label=\"{{ 'VizBoxStarterKit.Name' | translate }}\"\r\n      [(ngModel)]=\"dialogPet.name\"\r\n      name=\"name\"\r\n      #name=\"ngModel\" required></avl-textfield>\r\n\r\n    <avl-dropdown label=\"Status\" [items]=\"statusOptions\"\r\n      [(ngModel)]=\"dialogPet.status\"\r\n      name=\"status\"\r\n      #status=\"ngModel\" required>\r\n    </avl-dropdown>\r\n\r\n    <avl-upload accept=\".png,.jpg\" [target]=\"uploadPath\"\r\n      (uploadComplete)=\"onFileUploadComplete($event)\"\r\n      (uploadStart)=\"onFileUploadStarted($event)\"\r\n      (menuItemClicked)=\"onFileMenuItemClicked($event)\"\r\n      [(ngModel)]=\"uploadedFiles\" name=\"upload\"\r\n    ></avl-upload>\r\n  </form>\r\n</avl-dialog-content>\r\n      <avl-dialog-footer>\r\n        <avl-button class=\"cancelButton\" (click)=\"closeDialog()\">\r\n          {{ 'VizBoxStarterKit.Cancel' | translate }}\r\n        </avl-button>\r\n    \r\n        <avl-button\r\n          id=\"save-button\"\r\n          (click)=\"savePet(petForm.form.valid)\"\r\n          [disabled]=\"filesUploading || !petForm.form.valid\">\r\n          {{ 'VizBoxStarterKit.Save' | translate }}\r\n        </avl-button>\r\n      </avl-dialog-footer>\r\n</ng-template>\r\n</avl-dialog>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pets/pets.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pets/pets.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxFill>\r\n\r\n  <div class=\"action-bar\">\r\n    <h3 class=\"action-title\">{{ 'VizBoxStarterKit.PetsInStore' | translate }}</h3>\r\n    <div class=\"action-buttons\">\r\n      <avl-icon-button id=\"add-button\" (click)=\"addPet()\" icon=\"add\"></avl-icon-button>\r\n      <avl-icon-button id=\"edit-button\" (click)=\"editPet(selectedPet)\" [disabled]=\"!selectedPet\" icon=\"create\"></avl-icon-button>\r\n      <avl-icon-button id=\"delete-button\" (click)=\"deletePet()\" accent [disabled]=\"!selectedPet\" icon=\"delete\" class=\"action-secondary\"></avl-icon-button>\r\n    </div>\r\n  </div>\r\n\r\n  <avl-datatable #petsTable single-select (selectedValueChange)=\"petSelectionChanged($event)\" [columnDefinitions]=\"columnDefinitions\"\r\n    [dataProvider]=\"petStoreProvider\" pagination page-size=\"6\" column-selector></avl-datatable>\r\n</div>\r\n\r\n<viz-pet-dialog [open]=\"addEditDialogOpen\" [edit]=\"isEditing\" [pet]=\"selectedPet\" (save)=\"savePet($event)\" (cancel)=\"addEditDialogOpen = false\"></viz-pet-dialog>\r\n");

/***/ }),

/***/ "./src/app/components/intro/intro-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/intro/intro-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: IntroRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroRoutingModule", function() { return IntroRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro.component */ "./src/app/components/intro/intro.component.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const introRoutes = [{ path: '', component: _intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] }];
let IntroRoutingModule = class IntroRoutingModule {
};
IntroRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(introRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], IntroRoutingModule);



/***/ }),

/***/ "./src/app/components/intro/intro.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/intro/intro.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("avl-card{\r\n    display: block;\r\n}\r\n.card{\r\n    margin: 24px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRyby9pbnRyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF2bC1jYXJke1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBtYXJnaW46IDI0cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/intro/intro.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/intro/intro.component.ts ***!
  \*****************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let IntroComponent = class IntroComponent {
};
IntroComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'viz-intro',
        template: __importDefault(__webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/intro.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./intro.component.css */ "./src/app/components/intro/intro.component.css")).default]
    })
], IntroComponent);



/***/ }),

/***/ "./src/app/components/intro/intro.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/intro/intro.module.ts ***!
  \**************************************************/
/*! exports provided: IntroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroModule", function() { return IntroModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.component */ "./src/app/components/intro/intro.component.ts");
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intro-routing.module */ "./src/app/components/intro/intro-routing.module.ts");
/* harmony import */ var _pets_pets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pets/pets.component */ "./src/app/components/intro/pets/pets.component.ts");
/* harmony import */ var _pet_dialog_pet_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pet-dialog/pet-dialog.component */ "./src/app/components/intro/pet-dialog/pet-dialog.component.ts");
/* harmony import */ var _pet_detail_pet_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pet-detail/pet-detail.component */ "./src/app/components/intro/pet-detail/pet-detail.component.ts");
/* harmony import */ var _avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @avl-controls/ng-binders */ "./node_modules/@avl-controls/ng-binders/__ivy_ngcc__/fesm2015/avl-controls-ng-binders.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let IntroModule = class IntroModule {
};
IntroModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _intro_routing_module__WEBPACK_IMPORTED_MODULE_4__["IntroRoutingModule"]],
        declarations: [_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"], _pets_pets_component__WEBPACK_IMPORTED_MODULE_5__["PetsComponent"], _pet_detail_pet_detail_component__WEBPACK_IMPORTED_MODULE_7__["PetDetailComponent"], _pet_dialog_pet_dialog_component__WEBPACK_IMPORTED_MODULE_6__["PetDialogComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        exports: [_intro_routing_module__WEBPACK_IMPORTED_MODULE_4__["IntroRoutingModule"]],
        providers: [
            { provide: _avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_8__["UPLOAD_SERVICE"], useClass: _avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_8__["UploadService"] }
        ]
    })
], IntroModule);



/***/ }),

/***/ "./src/app/components/intro/pet-detail/pet-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/intro/pet-detail/pet-detail.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".property {\r\n margin-top: 10px;\r\n}\r\n\r\n.property > .label {\r\n  color: #9C9C9C;\r\n}\r\n\r\n.photo-loading-indicator {\r\n  background-color: #CCCCCC;\r\n  width: 200px;\r\n  height: 200px;\r\n  line-height: 200px;\r\n  text-align: center;\r\n  margin-bottom: 4px;\r\n}\r\n\r\nh1{\r\n  font-size: 24px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRyby9wZXQtZGV0YWlsL3BldC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ludHJvL3BldC1kZXRhaWwvcGV0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5IHtcclxuIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eSA+IC5sYWJlbCB7XHJcbiAgY29sb3I6ICM5QzlDOUM7XHJcbn1cclxuXHJcbi5waG90by1sb2FkaW5nLWluZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBsaW5lLWhlaWdodDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuaDF7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/intro/pet-detail/pet-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/intro/pet-detail/pet-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: PetDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetDetailComponent", function() { return PetDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var pet_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pet-store */ "./src/pet-store/index.ts");
/* harmony import */ var _pet_photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pet-photo */ "./src/app/components/intro/pet-detail/pet-photo.ts");
/* harmony import */ var _avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @avl-controls/ng-binders */ "./node_modules/@avl-controls/ng-binders/__ivy_ngcc__/fesm2015/avl-controls-ng-binders.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _avl_controls_core_dist_avl_card_avl_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @avl-controls/core/dist/avl-card/avl-card */ "./node_modules/@avl-controls/core/dist/avl-card/avl-card.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let PetDetailComponent = class PetDetailComponent {
    constructor(uploadService, sanitizer) {
        this.uploadService = uploadService;
        this.sanitizer = sanitizer;
    }
    ngOnChanges(changes) {
        const pet = changes.pet;
        if (pet && pet.currentValue && pet.currentValue.photoUrls) {
            this.preloadPhotos();
        }
    }
    preloadPhotos() {
        this.petPhotos = this.pet.photoUrls.map((url, i) => {
            const nonCachedPhotoUrl = `${url}?${this.pet.id}${i}`;
            const img = new Image();
            img.src = nonCachedPhotoUrl;
            let petImage = new _pet_photo__WEBPACK_IMPORTED_MODULE_2__["PetPhoto"](nonCachedPhotoUrl);
            img.onload = () => {
                petImage.visible = true;
                URL.revokeObjectURL(petImage.url);
            };
            img.onerror = () => {
                this.uploadService.downloadFile(url)
                    .then((data) => {
                    const url = URL.createObjectURL(data);
                    img.src = url;
                    petImage.url = this.sanitizer.bypassSecurityTrustUrl(url);
                });
            };
            return petImage;
        });
    }
};
PetDetailComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_SERVICE"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], PetDetailComponent.prototype, "pet", void 0);
PetDetailComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'viz-pet-detail',
        template: __importDefault(__webpack_require__(/*! raw-loader!./pet-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pet-detail/pet-detail.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./pet-detail.component.css */ "./src/app/components/intro/pet-detail/pet-detail.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_SERVICE"])),
    __metadata("design:paramtypes", [Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
], PetDetailComponent);



/***/ }),

/***/ "./src/app/components/intro/pet-detail/pet-photo.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/intro/pet-detail/pet-photo.ts ***!
  \**********************************************************/
/*! exports provided: PetPhoto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetPhoto", function() { return PetPhoto; });
class PetPhoto {
    constructor(url) {
        this.url = url;
        this.visible = false;
    }
}


/***/ }),

/***/ "./src/app/components/intro/pet-dialog/pet-dialog.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/intro/pet-dialog/pet-dialog.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("avl-textfield {\r\n  width: 80%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRyby9wZXQtZGlhbG9nL3BldC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm8vcGV0LWRpYWxvZy9wZXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhdmwtdGV4dGZpZWxkIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/intro/pet-dialog/pet-dialog.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/intro/pet-dialog/pet-dialog.component.ts ***!
  \*********************************************************************/
/*! exports provided: PetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetDialogComponent", function() { return PetDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var pet_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pet-store */ "./src/pet-store/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _avl_controls_core_dist_avl_textfield_avl_textfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @avl-controls/core/dist/avl-textfield/avl-textfield */ "./node_modules/@avl-controls/core/dist/avl-textfield/avl-textfield.js");
/* harmony import */ var _avl_controls_core_dist_avl_dropdown_avl_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @avl-controls/core/dist/avl-dropdown/avl-dropdown */ "./node_modules/@avl-controls/core/dist/avl-dropdown/avl-dropdown.js");
/* harmony import */ var _avl_controls_core_dist_avl_upload_avl_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @avl-controls/core/dist/avl-upload/avl-upload */ "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.js");
/* harmony import */ var _avl_controls_core_dist_avl_button_avl_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @avl-controls/core/dist/avl-button/avl-button */ "./node_modules/@avl-controls/core/dist/avl-button/avl-button.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let PetDialogComponent = class PetDialogComponent {
    constructor(translateService, basePath) {
        this.translateService = translateService;
        this.open = false;
        this.edit = false;
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.statusOptions = this.getStatusOptions();
        this.dialogPet = this.getNewPet();
        this.uploadedFiles = [];
        this.numFilesUploading = 0;
        this.uploadPath = `${basePath}/v2/Upload`;
    }
    dialogOpen(open) {
        if (open) {
            this.dialogPet = this.edit ? Object.assign({}, this.pet) : this.getNewPet();
            if (this.edit) {
                this.uploadedFiles = this.dialogPet.photoUrls.map((url, index) => {
                    const name = url.split('_', 2)[1] || `file_${index}.jpg`;
                    return {
                        name: name,
                        status: 'complete',
                        downloadUrl: url
                    };
                });
            }
        }
        else {
            this.closeDialog();
            this.uploadedFiles = [];
        }
    }
    closeDialog() {
        this.cancel.emit();
        this.open = false;
    }
    onFileUploadComplete(file) {
        this.dialogPet.photoUrls.push(file.downloadUrl);
        this.numFilesUploading -= 1;
    }
    onFileMenuItemClicked(detail) {
        const photoUrls = this.dialogPet.photoUrls;
        if (detail.item.label === this.translateService.instant('VizBoxStarterKit.Remove')) {
            const index = photoUrls.indexOf(detail.value.downloadUrl);
            if (index !== -1) {
                photoUrls.splice(index, 1);
            }
        }
    }
    onFileUploadStarted(file) {
        this.numFilesUploading += 1;
    }
    get filesUploading() {
        return this.numFilesUploading > 0;
    }
    savePet(formValid) {
        if (!formValid) {
            return;
        }
        this.save.emit(this.dialogPet);
        this.open = false;
    }
    getNewPet() {
        // Pet interface was generated from Swagger File
        // -> create a Pet class otherwise.
        return {
            name: '',
            status: this.statusOptions[0].value,
            photoUrls: []
        };
    }
    getStatusOptions() {
        // Status was generated from Swagger File as object/string
        // -> create an enum otherwise.
        return Object.keys(pet_store__WEBPACK_IMPORTED_MODULE_1__["Pet"].StatusEnum).map(key => {
            const enumLabel = pet_store__WEBPACK_IMPORTED_MODULE_1__["Pet"].StatusEnum[key];
            let label;
            switch (enumLabel) {
                case 'available':
                    label = this.translateService.instant('VizBoxStarterKit.Available');
                    break;
                case 'pending':
                    label = this.translateService.instant('VizBoxStarterKit.Pending');
                    break;
                case 'sold':
                    label = this.translateService.instant('VizBoxStarterKit.Sold');
                    break;
            }
            return { value: enumLabel, label: label };
        });
    }
};
PetDialogComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [pet_store__WEBPACK_IMPORTED_MODULE_1__["BASE_PATH"],] }] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], PetDialogComponent.prototype, "open", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], PetDialogComponent.prototype, "edit", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], PetDialogComponent.prototype, "pet", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PetDialogComponent.prototype, "cancel", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PetDialogComponent.prototype, "save", void 0);
PetDialogComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'viz-pet-dialog',
        template: __importDefault(__webpack_require__(/*! raw-loader!./pet-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pet-dialog/pet-dialog.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./pet-dialog.component.css */ "./src/app/components/intro/pet-dialog/pet-dialog.component.css")).default]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(pet_store__WEBPACK_IMPORTED_MODULE_1__["BASE_PATH"])),
    __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], String])
], PetDialogComponent);



/***/ }),

/***/ "./src/app/components/intro/pets/pets.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/intro/pets/pets.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".action-bar {\r\n  margin-top: 8px;\r\n  margin-bottom: 8px;\r\n  width: 100%;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.action-title {\r\n  float: left;\r\n  text-align: left;\r\n  /* font-size: 24px; */\r\n  margin-top: 8px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.action-buttons {\r\n  float: right;\r\n  text-align: left;\r\n  --avl-icon-button-color: var(--avl-secondary-color);\r\n}\r\n\r\n.action-secondary {\r\n  --avl-icon-button-color: var(--avl-secondary-color);\r\n}\r\n\r\navl-datatable {\r\n  height: 506px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRyby9wZXRzL3BldHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm8vcGV0cy9wZXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uLWJhciB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcblxyXG4uYWN0aW9uLXRpdGxlIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC8qIGZvbnQtc2l6ZTogMjRweDsgKi9cclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbnMge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC0tYXZsLWljb24tYnV0dG9uLWNvbG9yOiB2YXIoLS1hdmwtc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLmFjdGlvbi1zZWNvbmRhcnkge1xyXG4gIC0tYXZsLWljb24tYnV0dG9uLWNvbG9yOiB2YXIoLS1hdmwtc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuYXZsLWRhdGF0YWJsZSB7XHJcbiAgaGVpZ2h0OiA1MDZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/intro/pets/pets.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/intro/pets/pets.component.ts ***!
  \*********************************************************/
/*! exports provided: PetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsComponent", function() { return PetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @avl-controls/datatable/dist/avl-datatable/column-definitions */ "./node_modules/@avl-controls/datatable/dist/avl-datatable/column-definitions.js");
/* harmony import */ var pet_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pet-store */ "./src/pet-store/index.ts");
/* harmony import */ var _sort_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort-order */ "./src/app/components/intro/pets/sort-order.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _avl_controls_core_dist_avl_icon_button_avl_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @avl-controls/core/dist/avl-icon-button/avl-icon-button */ "./node_modules/@avl-controls/core/dist/avl-icon-button/avl-icon-button.js");
/* harmony import */ var _avl_controls_datatable_dist_avl_datatable_avl_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @avl-controls/datatable/dist/avl-datatable/avl-datatable */ "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let PetsComponent = class PetsComponent {
    constructor(petService, translateService) {
        this.petService = petService;
        this.translateService = translateService;
        this.selectedPetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnDefinitions = [
            new _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["LeafColumn"](this.translateService.instant('VizBoxStarterKit.ID'), 'id', _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["ColumnType"].Text, false, false, 1, undefined, undefined, undefined, undefined, undefined, true),
            new _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["LeafColumn"](this.translateService.instant('VizBoxStarterKit.Name'), 'name', _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["ColumnType"].Text, true, true, 3, '40px'),
            new _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["LeafColumn"](this.translateService.instant('VizBoxStarterKit.Status'), 'status', _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["ColumnType"].Text, true, false, 3, '40px'),
            new _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["LeafColumn"](this.translateService.instant('VizBoxStarterKit.Category'), 'category.name', _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["ColumnType"].Text, true, false, 3, '40px', undefined, undefined, undefined, undefined, true)
        ];
        this.isEditing = false;
        this.addEditDialogOpen = false;
        this.petStoreProvider = (params) => this.getPetStoreProvider(params);
    }
    petSelectionChanged(pet) {
        this.selectedPetChanged.emit(pet);
        this.selectedPet = pet;
    }
    addPet() {
        this.addEditDialogOpen = true;
        this.isEditing = false;
    }
    editPet(pet) {
        this.selectedPet = pet;
        this.isEditing = true;
        this.addEditDialogOpen = true;
    }
    deletePet() {
        const petsTable = this.petsTableElement.nativeElement;
        this.petService.deletePet(this.selectedPet.id).subscribe(res => petsTable.clearCache());
        delete this.selectedPet;
        this.selectedPetChanged.emit(undefined);
    }
    savePet(pet) {
        this.addEditDialogOpen = false;
        this.selectedPetChanged.emit(pet);
        const petsTable = this.petsTableElement.nativeElement;
        if (this.isEditing) {
            this.petService.updatePet(pet).subscribe(res => petsTable.clearCache());
        }
        else {
            this.petService.addPet(pet).subscribe(res => petsTable.clearCache());
        }
    }
    getPetStoreProvider(params) {
        return new Promise((resolve, reject) => {
            let observable;
            const sorting = params.sortOrders.find(f => f.path === 'name' || f.path === 'status');
            let sortBy, sortOrder;
            if (sorting) {
                sortBy = sorting.path;
                sortOrder = sorting.ascending ? _sort_order__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].Ascending : _sort_order__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].Descending;
            }
            const nameFilter = params.filters.get('name');
            observable = this.petService.getPets(nameFilter, undefined, undefined, params.page * params.pageSize, params.pageSize, sortBy, sortOrder);
            observable.subscribe(response => {
                setTimeout(() => {
                    resolve({ rows: response.result, totalRows: response.size });
                }, 0);
            }, error => this.handleError(error));
        });
    }
    handleError(error) {
        const petsTable = this.petsTableElement.nativeElement;
        petsTable.data = [{ name: this.translateService.instant('VizBoxStarterKit.ConnectionFailedToPetstoreServer') }];
    }
};
PetsComponent.ctorParameters = () => [
    { type: pet_store__WEBPACK_IMPORTED_MODULE_2__["PetApiService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], PetsComponent.prototype, "selectedPetChanged", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('petsTable'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], PetsComponent.prototype, "petsTableElement", void 0);
PetsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'viz-pets',
        template: __importDefault(__webpack_require__(/*! raw-loader!./pets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pets/pets.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./pets.component.css */ "./src/app/components/intro/pets/pets.component.css")).default]
    }),
    __metadata("design:paramtypes", [pet_store__WEBPACK_IMPORTED_MODULE_2__["PetApiService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
], PetsComponent);



/***/ }),

/***/ "./src/app/components/intro/pets/sort-order.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/intro/pets/sort-order.ts ***!
  \*****************************************************/
/*! exports provided: SortOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortOrder", function() { return SortOrder; });
var SortOrder;
(function (SortOrder) {
    SortOrder["Ascending"] = "asc";
    SortOrder["Descending"] = "desc";
})(SortOrder || (SortOrder = {}));


/***/ }),

/***/ "./src/pet-store/api/api.ts":
/*!**********************************!*\
  !*** ./src/pet-store/api/api.ts ***!
  \**********************************/
/*! exports provided: PetApiService, APIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _petApi_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./petApi.service */ "./src/pet-store/api/petApi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PetApiService", function() { return _petApi_service__WEBPACK_IMPORTED_MODULE_0__["PetApiService"]; });



const APIS = [_petApi_service__WEBPACK_IMPORTED_MODULE_0__["PetApiService"]];


/***/ }),

/***/ "./src/pet-store/index.ts":
/*!********************************!*\
  !*** ./src/pet-store/index.ts ***!
  \********************************/
/*! exports provided: PetApiService, APIS, Pet, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "./src/pet-store/api/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PetApiService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["PetApiService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"]; });

/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/models */ "./src/pet-store/model/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pet", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["Pet"]; });

/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./src/pet-store/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["COLLECTION_FORMATS"]; });

/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ "./src/pet-store/configuration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]; });

/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.module */ "./src/pet-store/api.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return _api_module__WEBPACK_IMPORTED_MODULE_4__["ApiModule"]; });








/***/ }),

/***/ "./src/pet-store/model/models.ts":
/*!***************************************!*\
  !*** ./src/pet-store/model/models.ts ***!
  \***************************************/
/*! exports provided: Pet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pet */ "./src/pet-store/model/pet.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pet", function() { return _pet__WEBPACK_IMPORTED_MODULE_0__["Pet"]; });




/***/ }),

/***/ "./src/pet-store/model/pet.ts":
/*!************************************!*\
  !*** ./src/pet-store/model/pet.ts ***!
  \************************************/
/*! exports provided: Pet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pet", function() { return Pet; });
var Pet;
(function (Pet) {
    Pet.StatusEnum = {
        Available: 'available',
        Pending: 'pending',
        Sold: 'sold'
    };
})(Pet || (Pet = {}));


/***/ })

}]);
//# sourceMappingURL=app-components-intro-intro-module-es2015.js.map