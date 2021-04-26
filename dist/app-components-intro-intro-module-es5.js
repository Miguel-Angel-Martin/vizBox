function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"vaadin-text-field-shared-styles\">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class=\"vaadin-text-field-container\">\n\n      <label part=\"label\" on-click=\"focus\" id=\"[[_labelId]]\">[[label]]</label>\n\n      <div part=\"input-field\" id=\"[[_inputId]]\">\n\n        <slot name=\"prefix\"></slot>\n\n        <slot name=\"input\">\n          <input part=\"value\">\n        </slot>\n\n        <div part=\"clear-button\" id=\"clearButton\" role=\"button\" aria-label$=\"[[i18n.clear]]\"></div>\n        <slot name=\"suffix\"></slot>\n\n      </div>\n\n      <div part=\"helper-text\" on-click=\"focus\" id=\"[[_helperTextId]]\">\n        <slot name=\"helper\">[[helperText]]</slot>\n      </div>\n\n      <div part=\"error-message\" id=\"[[_errorId]]\" aria-live=\"assertive\" aria-hidden$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]\">[[errorMessage]]</div>\n\n    </div>\n"], ["\n    <style include=\"vaadin-text-field-shared-styles\">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class=\"vaadin-text-field-container\">\n\n      <label part=\"label\" on-click=\"focus\" id=\"[[_labelId]]\">[[label]]</label>\n\n      <div part=\"input-field\" id=\"[[_inputId]]\">\n\n        <slot name=\"prefix\"></slot>\n\n        <slot name=\"input\">\n          <input part=\"value\">\n        </slot>\n\n        <div part=\"clear-button\" id=\"clearButton\" role=\"button\" aria-label\\$=\"[[i18n.clear]]\"></div>\n        <slot name=\"suffix\"></slot>\n\n      </div>\n\n      <div part=\"helper-text\" on-click=\"focus\" id=\"[[_helperTextId]]\">\n        <slot name=\"helper\">[[helperText]]</slot>\n      </div>\n\n      <div part=\"error-message\" id=\"[[_errorId]]\" aria-live=\"assertive\" aria-hidden\\$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]\">[[errorMessage]]</div>\n\n    </div>\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"vaadin-text-field-shared-styles\">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: \"\\2003\";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part=\"label\"]:empty {\n        display: none;\n      }\n\n      [part=\"input-field\"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part=\"input-field\"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part=\"input-field\"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part=\"input-field\"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part=\"value\"]::-ms-clear,\n      [part=\"input-field\"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part=\"clear-button\"] {\n        cursor: default;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: \"\u2715\";\n      }\n    </style>\n  </template>\n</dom-module>"], ["<dom-module id=\"vaadin-text-field-shared-styles\">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: \"\\\\2003\";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part=\"label\"]:empty {\n        display: none;\n      }\n\n      [part=\"input-field\"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part=\"input-field\"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part=\"input-field\"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part=\"input-field\"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part=\"value\"]::-ms-clear,\n      [part=\"input-field\"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part=\"clear-button\"] {\n        cursor: default;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: \"\u2715\";\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"vaadin-grid-styles\"></style>\n\n    <div id=\"scroller\" safari$=\"[[_safari]]\" ios$=\"[[_ios]]\" ie$=\"[[_ie]]\" loading$=\"[[loading]]\" column-reordering-allowed$=\"[[columnReorderingAllowed]]\">\n\n      <table id=\"table\" role=\"grid\" aria-multiselectable=\"true\" tabindex=\"0\">\n        <caption id=\"sizer\" part=\"row\"></caption>\n        <thead id=\"header\" role=\"rowgroup\"></thead>\n        <tbody id=\"items\" role=\"rowgroup\"></tbody>\n        <tfoot id=\"footer\" role=\"rowgroup\"></tfoot>\n      </table>\n\n      <div part=\"reorder-ghost\"></div>\n    </div>\n\n    <!-- The template needs at least one slot or else shady doesn't distribute -->\n    <slot name=\"nodistribute\"></slot>\n\n    <div id=\"focusexit\" tabindex=\"0\"></div>\n"], ["\n    <style include=\"vaadin-grid-styles\"></style>\n\n    <div id=\"scroller\" safari\\$=\"[[_safari]]\" ios\\$=\"[[_ios]]\" ie\\$=\"[[_ie]]\" loading\\$=\"[[loading]]\" column-reordering-allowed\\$=\"[[columnReorderingAllowed]]\">\n\n      <table id=\"table\" role=\"grid\" aria-multiselectable=\"true\" tabindex=\"0\">\n        <caption id=\"sizer\" part=\"row\"></caption>\n        <thead id=\"header\" role=\"rowgroup\"></thead>\n        <tbody id=\"items\" role=\"rowgroup\"></tbody>\n        <tfoot id=\"footer\" role=\"rowgroup\"></tfoot>\n      </table>\n\n      <div part=\"reorder-ghost\"></div>\n    </div>\n\n    <!-- The template needs at least one slot or else shady doesn't distribute -->\n    <slot name=\"nodistribute\"></slot>\n\n    <div id=\"focusexit\" tabindex=\"0\"></div>\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-flex;\n        align-items: baseline;\n\n        /* CSS API for :host */\n        --vaadin-grid-tree-toggle-level-offset: 1em;\n\n        /*\n          ShadyCSS seems to polyfill :dir(rtl) only for :host, thus using\n          a host custom CSS property for ltr/rtl toggle icon choice.\n         */\n        ---collapsed-icon: \"\\e7be\\00a0\";\n      }\n\n      :host(:dir(rtl)) {\n        ---collapsed-icon: \"\\e7bd\\00a0\";\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:not([leaf])) {\n        cursor: pointer;\n      }\n\n      #level-spacer,\n      [part=\"toggle\"] {\n        flex: none;\n      }\n\n      #level-spacer {\n        display: inline-block;\n        width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));\n      }\n\n      [part=\"toggle\"]::before {\n        font-family: \"vaadin-grid-tree-icons\";\n        line-height: 1em; /* make icon font metrics not affect baseline */\n      }\n\n      :host(:not([expanded])) [part=\"toggle\"]::before {\n        content: var(---collapsed-icon);\n      }\n\n      :host([expanded]) [part=\"toggle\"]::before {\n        content: \"\\e7bc\\00a0\"; /* icon glyph + single non-breaking space */\n      }\n\n      :host([leaf]) [part=\"toggle\"] {\n        visibility: hidden;\n      }\n    </style>\n\n    <span id=\"level-spacer\"></span>\n    <span part=\"toggle\"></span>\n    <slot></slot>\n"], ["\n    <style>\n      :host {\n        display: inline-flex;\n        align-items: baseline;\n\n        /* CSS API for :host */\n        --vaadin-grid-tree-toggle-level-offset: 1em;\n\n        /*\n          ShadyCSS seems to polyfill :dir(rtl) only for :host, thus using\n          a host custom CSS property for ltr/rtl toggle icon choice.\n         */\n        ---collapsed-icon: \"\\\\e7be\\\\00a0\";\n      }\n\n      :host(:dir(rtl)) {\n        ---collapsed-icon: \"\\\\e7bd\\\\00a0\";\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:not([leaf])) {\n        cursor: pointer;\n      }\n\n      #level-spacer,\n      [part=\"toggle\"] {\n        flex: none;\n      }\n\n      #level-spacer {\n        display: inline-block;\n        width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));\n      }\n\n      [part=\"toggle\"]::before {\n        font-family: \"vaadin-grid-tree-icons\";\n        line-height: 1em; /* make icon font metrics not affect baseline */\n      }\n\n      :host(:not([expanded])) [part=\"toggle\"]::before {\n        content: var(---collapsed-icon);\n      }\n\n      :host([expanded]) [part=\"toggle\"]::before {\n        content: \"\\\\e7bc\\\\00a0\"; /* icon glyph + single non-breaking space */\n      }\n\n      :host([leaf]) [part=\"toggle\"] {\n        visibility: hidden;\n      }\n    </style>\n\n    <span id=\"level-spacer\"></span>\n    <span part=\"toggle\"></span>\n    <slot></slot>\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n    <template id=\"template\">\n      <vaadin-grid-tree-toggle leaf=\"[[__isLeafItem(item, itemHasChildrenPath)]]\" expanded=\"{{expanded}}\" level=\"[[level]]\">\n        [[__getToggleContent(path, item)]]\n      </vaadin-grid-tree-toggle>\n    </template>\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  <style>\n    @keyframes vaadin-grid-appear {\n      to {\n        opacity: 1;\n      }\n    }\n\n    :host {\n      display: block;\n      animation: 1ms vaadin-grid-appear;\n      height: 400px;\n      flex: 1 1 auto;\n      align-self: stretch;\n      position: relative;\n    }\n\n    :host([hidden]) {\n      display: none !important;\n    }\n\n    #scroller {\n      display: block;\n      transform: translateY(0);\n      width: auto;\n      height: auto;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n    }\n\n    :host([height-by-rows]) {\n      height: auto;\n      align-self: flex-start;\n      flex-grow: 0;\n      width: 100%;\n    }\n\n    :host([height-by-rows]) #scroller {\n      width: 100%;\n      height: 100%;\n      position: relative;\n    }\n\n    #table {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      height: 100%;\n      overflow: auto;\n      position: relative;\n      outline: none;\n      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */\n      z-index: 0;\n    }\n\n    #header,\n    #footer {\n      display: block;\n      position: -webkit-sticky;\n      position: sticky;\n      left: 0;\n      overflow: visible;\n      width: 100%;\n      z-index: 1;\n    }\n\n    #header {\n      top: 0;\n    }\n\n    th {\n      text-align: inherit;\n    }\n\n    /* Safari doesn't work with \"inherit\" */\n    [safari] th {\n      text-align: initial;\n    }\n\n    #footer {\n      bottom: 0;\n    }\n\n    #items {\n      flex-grow: 1;\n      flex-shrink: 0;\n      display: block;\n      position: -webkit-sticky;\n      position: sticky;\n      width: 100%;\n      left: 0;\n      overflow: visible;\n    }\n\n    [part~=\"row\"] {\n      display: flex;\n      width: 100%;\n      box-sizing: border-box;\n      margin: 0;\n    }\n\n    [part~=\"row\"][loading] [part~=\"body-cell\"] ::slotted(vaadin-grid-cell-content) {\n      opacity: 0;\n    }\n\n    #items [part~=\"row\"] {\n      position: absolute;\n    }\n\n    #items [part~=\"row\"]:empty {\n      height: 1em;\n    }\n\n    [part~=\"cell\"]:not([part~=\"details-cell\"]) {\n      flex-shrink: 0;\n      flex-grow: 1;\n      box-sizing: border-box;\n      display: flex;\n      width: 100%;\n      position: relative;\n      align-items: center;\n      padding: 0;\n      white-space: nowrap;\n    }\n\n    [part~=\"details-cell\"] {\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      box-sizing: border-box;\n      padding: 0;\n    }\n\n    [part~=\"cell\"] ::slotted(vaadin-grid-cell-content) {\n      display: block;\n      width: 100%;\n      box-sizing: border-box;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    [hidden] {\n      display: none !important;\n    }\n\n    [frozen] {\n      z-index: 2;\n      will-change: transform;\n    }\n\n    [no-scrollbars][safari] #table,\n    [no-scrollbars][firefox] #table {\n      overflow: hidden;\n    }\n\n    /* Reordering styles */\n    :host([reordering]) [part~=\"cell\"] ::slotted(vaadin-grid-cell-content),\n    :host([reordering]) [part~=\"resize-handle\"],\n    #scroller[no-content-pointer-events] [part~=\"cell\"] ::slotted(vaadin-grid-cell-content) {\n      pointer-events: none;\n    }\n\n    [part~=\"reorder-ghost\"] {\n      visibility: hidden;\n      position: fixed;\n      pointer-events: none;\n      opacity: 0.5;\n\n      /* Prevent overflowing the grid in Firefox */\n      top: 0;\n      left: 0;\n    }\n\n    :host([reordering]) {\n      -moz-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n    }\n\n    #scroller[ie][column-reordering-allowed] [part~=\"header-cell\"] {\n      -ms-user-select: none;\n    }\n\n    /* Resizing styles */\n    [part~=\"resize-handle\"] {\n      position: absolute;\n      top: 0;\n      right: 0;\n      height: 100%;\n      cursor: col-resize;\n      z-index: 1;\n    }\n\n    [part~=\"resize-handle\"]::before {\n      position: absolute;\n      content: \"\";\n      height: 100%;\n      width: 35px;\n      transform: translateX(-50%);\n    }\n\n    [last-column] [part~=\"resize-handle\"]::before,\n    [last-frozen] [part~=\"resize-handle\"]::before {\n      width: 18px;\n      transform: none;\n      right: 0;\n    }\n\n    #scroller[column-resizing] {\n      -ms-user-select: none;\n      -moz-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n    }\n\n    /* Sizer styles */\n    #sizer {\n      display: flex;\n      position: absolute;\n      visibility: hidden;\n    }\n\n    #sizer [part~=\"details-cell\"] {\n      display: none !important;\n    }\n\n    #sizer [part~=\"cell\"][hidden] {\n      display: none !important;\n    }\n\n    #sizer [part~=\"cell\"] {\n      display: block;\n      flex-shrink: 0;\n      line-height: 0;\n      height: 0 !important;\n      min-height: 0 !important;\n      max-height: 0 !important;\n      padding: 0 !important;\n      border: none !important;\n    }\n\n    #sizer [part~=\"cell\"]::before {\n      content: \"-\";\n    }\n\n    #sizer [part~=\"cell\"] ::slotted(vaadin-grid-cell-content) {\n      display: none !important;\n    }\n\n    /* RTL specific styles */\n\n    :host([dir=\"rtl\"]) #items,\n    :host([dir=\"rtl\"]) #header,\n    :host([dir=\"rtl\"]) #footer {\n      left: auto;\n    }\n\n    :host([dir=\"rtl\"]) [part~=\"reorder-ghost\"] {\n      left: auto;\n      right: 0;\n    }\n\n    :host([dir=\"rtl\"]) [part~=\"resize-handle\"] {\n      left: 0;\n      right: auto;\n    }\n\n    :host([dir=\"rtl\"]) [part~=\"resize-handle\"]::before {\n      transform: translateX(50%);\n    }\n\n    :host([dir=\"rtl\"]) [last-column] [part~=\"resize-handle\"]::before,\n    :host([dir=\"rtl\"]) [last-frozen] [part~=\"resize-handle\"]::before {\n      left: 0;\n      right: auto;\n    }\n  </style>\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-flex;\n        cursor: pointer;\n        max-width: 100%;\n      }\n\n      [part=\"content\"] {\n        flex: 1 1 auto;\n      }\n\n      [part=\"indicators\"] {\n        position: relative;\n        align-self: center;\n        flex: none;\n      }\n\n      [part=\"order\"] {\n        display: inline;\n        vertical-align: super;\n      }\n\n      [part=\"indicators\"]::before {\n        font-family: 'vaadin-grid-sorter-icons';\n        display: inline-block;\n      }\n\n      :host(:not([direction])) [part=\"indicators\"]::before {\n        content: \"\\e901\";\n      }\n\n      :host([direction=asc]) [part=\"indicators\"]::before {\n        content: \"\\e900\";\n      }\n\n      :host([direction=desc]) [part=\"indicators\"]::before {\n        content: \"\\e902\";\n      }\n    </style>\n\n    <div part=\"content\">\n      <slot></slot>\n    </div>\n    <div part=\"indicators\">\n      <span part=\"order\">[[_getDisplayOrder(_order)]]</span>\n    </div>\n"], ["\n    <style>\n      :host {\n        display: inline-flex;\n        cursor: pointer;\n        max-width: 100%;\n      }\n\n      [part=\"content\"] {\n        flex: 1 1 auto;\n      }\n\n      [part=\"indicators\"] {\n        position: relative;\n        align-self: center;\n        flex: none;\n      }\n\n      [part=\"order\"] {\n        display: inline;\n        vertical-align: super;\n      }\n\n      [part=\"indicators\"]::before {\n        font-family: 'vaadin-grid-sorter-icons';\n        display: inline-block;\n      }\n\n      :host(:not([direction])) [part=\"indicators\"]::before {\n        content: \"\\\\e901\";\n      }\n\n      :host([direction=asc]) [part=\"indicators\"]::before {\n        content: \"\\\\e900\";\n      }\n\n      :host([direction=desc]) [part=\"indicators\"]::before {\n        content: \"\\\\e902\";\n      }\n    </style>\n\n    <div part=\"content\">\n      <slot></slot>\n    </div>\n    <div part=\"indicators\">\n      <span part=\"order\">[[_getDisplayOrder(_order)]]</span>\n    </div>\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n    <template class=\"header\" id=\"headerTemplate\">\n      <vaadin-grid-sorter path=\"[[path]]\" direction=\"{{direction}}\">[[_getHeader(header, path)]]</vaadin-grid-sorter>\n    </template>\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n    <template class=\"header\" id=\"defaultHeaderTemplate\">\n      <vaadin-checkbox class=\"vaadin-grid-select-all-checkbox\" aria-label=\"Select All\" hidden$=\"[[_selectAllHidden]]\" on-checked-changed=\"_onSelectAllCheckedChanged\" checked=\"[[_isChecked(selectAll, _indeterminate)]]\" indeterminate=\"[[_indeterminate]]\"></vaadin-checkbox>\n    </template>\n    <template id=\"defaultBodyTemplate\">\n      <vaadin-checkbox aria-label=\"Select Row\" checked=\"{{selected}}\"></vaadin-checkbox>\n    </template>\n"], ["\n    <template class=\"header\" id=\"defaultHeaderTemplate\">\n      <vaadin-checkbox class=\"vaadin-grid-select-all-checkbox\" aria-label=\"Select All\" hidden\\$=\"[[_selectAllHidden]]\" on-checked-changed=\"_onSelectAllCheckedChanged\" checked=\"[[_isChecked(selectAll, _indeterminate)]]\" indeterminate=\"[[_indeterminate]]\"></vaadin-checkbox>\n    </template>\n    <template id=\"defaultBodyTemplate\">\n      <vaadin-checkbox aria-label=\"Select Row\" checked=\"{{selected}}\"></vaadin-checkbox>\n    </template>\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-flex;\n        max-width: 100%;\n      }\n\n      #filter {\n        width: 100%;\n        box-sizing: border-box;\n      }\n    </style>\n    <slot name=\"filter\">\n      <vaadin-text-field id=\"filter\" value=\"{{value}}\"></vaadin-text-field>\n    </slot>\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n    <template class=\"header\" id=\"headerTemplate\">\n      <vaadin-grid-filter path=\"[[path]]\" value=\"[[_filterValue]]\">\n        <vaadin-text-field theme=\"small\" focus-target=\"\" style=\"max-width: 100%;\" slot=\"filter\" value=\"{{_filterValue}}\" label=\"[[_getHeader(header, path)]]\"></vaadin-text-field>\n      </vaadin-grid-filter>\n    </template>\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      label {\n        display: inline-flex;\n        align-items: baseline;\n        outline: none;\n      }\n\n      [part=\"checkbox\"] {\n        position: relative;\n        display: inline-block;\n        flex: none;\n      }\n\n      input[type=\"checkbox\"] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n        margin: 0;\n      }\n\n      :host([disabled]) {\n        -webkit-tap-highlight-color: transparent;\n      }\n    </style>\n\n    <label>\n      <span part=\"checkbox\">\n        <input type=\"checkbox\" checked=\"{{checked::change}}\" disabled$=\"[[disabled]]\" indeterminate=\"{{indeterminate::change}}\" role=\"presentation\" tabindex=\"-1\">\n      </span>\n\n      <span part=\"label\">\n        <slot></slot>\n      </span>\n    </label>\n"], ["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      label {\n        display: inline-flex;\n        align-items: baseline;\n        outline: none;\n      }\n\n      [part=\"checkbox\"] {\n        position: relative;\n        display: inline-block;\n        flex: none;\n      }\n\n      input[type=\"checkbox\"] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n        margin: 0;\n      }\n\n      :host([disabled]) {\n        -webkit-tap-highlight-color: transparent;\n      }\n    </style>\n\n    <label>\n      <span part=\"checkbox\">\n        <input type=\"checkbox\" checked=\"{{checked::change}}\" disabled\\$=\"[[disabled]]\" indeterminate=\"{{indeterminate::change}}\" role=\"presentation\" tabindex=\"-1\">\n      </span>\n\n      <span part=\"label\">\n        <slot></slot>\n      </span>\n    </label>\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #baseURIAnchor {\n        display: none;\n      }\n\n      #sizedImgDiv {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n\n        display: none;\n      }\n\n      #img {\n        display: block;\n        width: var(--iron-image-width, auto);\n        height: var(--iron-image-height, auto);\n      }\n\n      :host([sizing]) #sizedImgDiv {\n        display: block;\n      }\n\n      :host([sizing]) #img {\n        display: none;\n      }\n\n      #placeholder {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n\n        background-color: inherit;\n        opacity: 1;\n\n        @apply --iron-image-placeholder;\n      }\n\n      #placeholder.faded-out {\n        transition: opacity 0.5s linear;\n        opacity: 0;\n      }\n    </style>\n\n    <a id=\"baseURIAnchor\" href=\"#\"></a>\n    <div id=\"sizedImgDiv\" role=\"img\" hidden$=\"[[_computeImgDivHidden(sizing)]]\" aria-hidden$=\"[[_computeImgDivARIAHidden(alt)]]\" aria-label$=\"[[_computeImgDivARIALabel(alt, src)]]\"></div>\n    <img id=\"img\" alt$=\"[[alt]]\" hidden$=\"[[_computeImgHidden(sizing)]]\" crossorigin$=\"[[crossorigin]]\" on-load=\"_imgOnLoad\" on-error=\"_imgOnError\">\n    <div id=\"placeholder\" hidden$=\"[[_computePlaceholderHidden(preload, fade, loading, loaded)]]\" class$=\"[[_computePlaceholderClassName(preload, fade, loading, loaded)]]\"></div>\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"material-grid-sorter\" theme-for=\"vaadin-grid-sorter\">\n  <template>\n    <style>\n      :host {\n        justify-content: flex-start;\n        height: 100%;\n        align-items: center;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      :host([direction]) {\n        color: var(--material-body-text-color);\n      }\n\n      [part=\"indicators\"] {\n        order: -1;\n      }\n\n      [part=\"indicators\"]::before {\n        display: inline-block;\n        width: 24px;\n        font-family: \"material-icons\";\n        font-size: 18px;\n        line-height: 18px;\n        transition: .1s opacity cubic-bezier(.4, 0, .2, .1), .1s width cubic-bezier(.4, 0, .2, .1);\n        opacity: .5;\n      }\n\n      :host(:not([direction])) [part=\"indicators\"]::before {\n        content: var(--material-icons-arrow-upward);\n        width: 0;\n        opacity: 0;\n      }\n\n      :host([direction]) [part=\"indicators\"]::before {\n        opacity: 1;\n      }\n\n      :host([direction=\"asc\"]) [part=\"indicators\"]::before {\n        content: var(--material-icons-arrow-upward);\n      }\n\n      :host([direction=\"desc\"]) [part=\"indicators\"]::before {\n        content: var(--material-icons-arrow-downward);\n      }\n\n      :host(:hover) [part=\"indicators\"]::before {\n        width: 24px;\n        opacity: 1;\n      }\n\n      [part=\"order\"] {\n        right: 4px;\n        top: -8px;\n        font-size: 10px;\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"material-grid\" theme-for=\"vaadin-grid\">\n  <template>\n    <style>\n      /* From: https://github.com/vaadin/vaadin-material-theme */\n\n      :host {\n        font-family: Roboto, sans-serif;\n      }\n\n      [part~=\"body-cell\"] {\n        height: var(--avl-datatable-row-height, 48px);\n      }\n\n      [part~=\"header-cell\"] {\n        height: 48px;\n      }\n\n      [part~=\"cell\"] ::slotted(vaadin-grid-cell-content) {\n        padding: 12px 24px;\n      }\n\n      [part~=\"details-cell\"] ::slotted(vaadin-grid-cell-content) {\n        padding: 14px 16px;\n      }\n\n      [part~=\"header-cell\"],\n      [part~=\"footer-cell\"] {\n        background-color: var(--avl-datatable-row-background-color);\n        color: var(--avl-datatable-column-header-color); \n        font-size: 14px;\n        font-weight: normal;\n      }\n\n      [part~=\"header-cell\"] {\n        text-transform: uppercase;\n      }\n\n      /* Header and footer divider between body rows */\n\n      [part~=\"body-cell\"],\n      [part~=\"details-cell\"],\n      [part~=\"row\"]:last-child > [part~=\"header-cell\"] {\n        border-bottom: 1px solid var(--avl-datatable-divider-color);\n      }\n\n      [part~=\"row\"]:first-child > [part~=\"footer-cell\"] {\n        border-top: 1px solid var(--avl-datatable-divider-color);\n      }\n\n      /* Body rows/cells */\n\n      [part~=\"body-cell\"] {\n        background-color: var(--avl-datatable-row-background-color);\n        overflow: hidden;\n      }\n\n      [part~=\"row\"]:hover > [part~=\"body-cell\"] {\n        background: var(--avl-datatable-row-hover-color);\n      }\n\n      /* Selected row */\n      [part~=\"body-cell\"]::before {\n        content: \"\";\n        pointer-events: none;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: var(--avl-datatable-row-selection-color);\n        opacity: 0;\n        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 0.2, 0.1);\n      }\n\n      :host(:not([reordering])) [part~=\"row\"][selected] > [part~=\"body-cell\"]::before {\n        opacity: 0.2;\n      }\n\n      [part~=\"body-cell\"] ::slotted(vaadin-grid-cell-content) {\n        /* NOTE(platosha): Raise cell content above background cell pseudo elements */\n        position: relative;\n      }\n\n      /* Column reordering */\n\n      :host([reordering]) [part~=\"cell\"] {\n        background: var(--material-secondary-background-color);\n      }\n\n      :host([reordering]) [part~=\"cell\"][reorder-status=\"allowed\"] {\n        background: var(--material-background-color);\n      }\n\n      :host([reordering]) [part~=\"cell\"][reorder-status=\"dragging\"] {\n        background: var(--material-background-color);\n      }\n\n      /* Frozen columns */\n\n      [part~=\"cell\"][last-frozen] {\n        border-right: 1px solid var(--avl-datatable-divider-color);\n      }\n\n      /* Column resizing */\n\n      :host(:not([theme~=\"column-dividers\"])) [part~=\"cell\"]:not([last-frozen]) [part=\"resize-handle\"] {\n        border-right: 1px solid var(--avl-datatable-divider-color);\n      }\n\n      /* Keyboard navigation */\n\n      [part~=\"cell\"]:focus {\n        outline: none;\n      }\n\n      :host([navigating]) [part~=\"cell\"]:focus {\n        box-shadow: inset 0 0 0 1px var(--avl-datatable-column-header-color);\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  ", " ", "\n\n  <avl-overflow-menu id=\"overflowMenu\"></avl-overflow-menu>\n\n  <div class=\"top-flex-container\">\n    <template is=\"dom-if\" if=\"[[globalFilter]]\">\n      <avl-textfield\n        class=\"globalFilter\"\n        value=\"{{globalFilterValue}}\"\n        label=\"[[globalFilterLabel]]\"\n        placeholder=\"[[globalFilterLabel]]\"\n        compact-mode\n      ></avl-textfield>\n    </template>\n\n    <template is=\"dom-if\" if=\"[[columnSelector]]\">\n      <avl-column-selector-dialog\n        columns-label=\"[[columnSelectorLabel]]\"\n        apply-button-label=\"[[applyButtonLabel]]\"\n        reset-button-label=\"[[resetButtonLabel]]\"\n        leaf-columns=\"[[leafColumns]]\"\n        on-selected-columns-changed=\"selectedColumnsChanged\"\n        dialog-footer=\"{{dialogFooter}}\"\n      ></avl-column-selector-dialog>\n    </template>\n  </div>\n\n  <vaadin-grid id=\"grid\" selected-items=\"{{selectedItems}}\" class$=\"{{getGridClass(pagination, globalFilter)}}\">\n    <template is=\"dom-if\" if=\"[[multiSelect]]\">\n      <vaadin-grid-selection-column\n        header-renderer=\"[[selectionHeaderRenderer]]\"\n        renderer=\"[[selectionColumnRenderer]]\"\n      ></vaadin-grid-selection-column>\n    </template>\n  </vaadin-grid>\n\n  <template is=\"dom-if\" if=\"[[pagination]]\">\n    <template is=\"dom-if\" if=\"[[totalNumOfRows]]\" restamp>\n      <div id=\"pages\">\n        <avl-dropdown\n          label=\"[[pageSizeLabel]]\"\n          selected-index=\"{{pageSizeIndex}}\"\n          no-label-float\n          compact-mode\n          items=\"[[pageSizeOptions]]\"\n        ></avl-dropdown>\n\n        <button on-click=\"_prev\" disabled=\"{{isLeftButtonDisabled(selectedPage)}}\" id=\"prevButton\">&lt;</button>\n\n        <template is=\"dom-if\" if=\"[[pages.left]]\">\n          <template is=\"dom-repeat\" items=\"[[pages.left]]\">\n            <button on-click=\"_select\" class=\"pageButton\" selected$=\"[[_isSelected(selectedPage, item)]]\">\n              [[item]]\n            </button>\n          </template>\n        </template>\n\n        <template is=\"dom-if\" if=\"[[pages.middle]]\">\n          <div class=\"threeDots\">...</div>\n          <template is=\"dom-repeat\" items=\"[[pages.middle]]\">\n            <button on-click=\"_select\" class=\"pageButton\" selected$=\"[[_isSelected(selectedPage, item)]]\">\n              [[item]]\n            </button>\n          </template>\n        </template>\n\n        <template is=\"dom-if\" if=\"[[pages.right]]\">\n          <div class=\"threeDots\">...</div>\n          <template is=\"dom-repeat\" items=\"[[pages.right]]\">\n            <button on-click=\"_select\" class=\"pageButton\" selected$=\"[[_isSelected(selectedPage, item)]]\">\n              [[item]]\n            </button>\n          </template>\n        </template>\n\n        <button on-click=\"_next\" disabled=\"{{isRightButtonDisabled(selectedPage, pageSize)}}\" id=\"nextButton\">\n          &gt;\n        </button>\n      </div>\n    </template>\n  </template>\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["<style>\n:host {\n  --avl-datatable-row-background-color: var(--avl-background-color);\n  --avl-datatable-header-icon-color: var(--avl-link-color);\n\n  --avl-datatable-column-header-color: var(--avl-link-color);\n  --avl-datatable-content-color: var(--avl-foreground-color);\n  --avl-datatable-row-hover-color: var(--avl-background-hover-color);\n  --avl-datatable-row-selection-color: var(--avl-background-selected-color);\n  --avl-datatable-divider-color: var(--avl-divider-color);\n  --avl-datatable-link-color: var(--avl-link-color);\n  --avl-datatable-link-hover-color: var(--avl-link-hover-color);\n\n  font-family: var(--avl-font-family);\n  display: block;\n  width: 100%;\n  height:420px;\n  font-size: 14px;\n}\n\nvaadin-grid {\n  border: 0;\n  background: var(--avl-datatable-row-background-color);\n  width: 100%;\n  height: 100%;\n}\n\nvaadin-grid vaadin-grid-cell-content {\n  padding-right: 0px;\n  margin-right: 24px;\n}\n\n:host .cell-content {\n  font-size: 14px;\n}\n\n:host .header-content {\n  user-select: text;\n  -webkit-user-select: text;\n}\n\n.iconText{\n  color: var(--avl-datatable-content-color);\n}\n\n.textColumn{\n  color: var(--avl-datatable-content-color);\n}\n.dateColumn{\n  color: var(--avl-datatable-content-color);\n}\n.numberColumn{\n  color: var(--avl-datatable-content-color);\n}\n\n.header-image {\n  height: auto;\n  width: auto;\n  max-height: 18px;\n}\n\n.header-icon {\n  font-size: 14px;\n  --avl-icon-custom-color:var(--avl-datatable-header-icon-color);\n}\n\n/* Pagination */\n#pages {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 20px;\n  align-items: center;\n  justify-content: center;\n  color: var(--avl-secondary-color, #3ca0b9);\n}\n\n#pages > button {\n  color: var(--avl-secondary-color, #3ca0b9);\n  user-select: none;\n  padding: 2px 3px 2px;\n  margin: 0 5px;\n  border-radius: 10%;\n  border: 0;\n  background: transparent;\n  font: inherit;\n  outline: none;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n#pages > button:not([disabled]):hover,\n#pages > button:not([disabled]):focus {\n  color: var(--avl-secondary-color, #3ca0b9);;\n  background-color: #f3f3f3;\n}\n\n#pages > button[selected],\n#pages > button[selected]:focus {\n  font-weight: bold;\n  color: var(--avl-menu-background-color, #FFFFFF);\n  background-color: var(--avl-secondary-color, #3ca0b9);\n}\n\n#pages > button[disabled] {\n  color: var(--avl-foreground-disabled-color);\n  cursor: default;\n}\n\n/* Space for the pagination buttons */\n#grid.with-pagination {\n  height: calc(100% - 65px);\n}\n\n.elipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\navl-dropdown{\n  margin-top: 3px;\n}\n\navl-overflow-menu {\n  display: inline;\n}\n\n/* Global filter */\n.globalFilter {\n  margin-bottom: 10px;\n  width: auto;\n  flex-grow: 1;\n}\n\n#grid.with-global-filter, #grid.with-column-selector {\n  height: calc(100% - 72px);\n}\n\n#grid.with-pagination.with-global-filter, #grid.with-pagination.with-column-selector {\n  height: calc(100% - 170px);\n}\n\n/* Global filter and column selector */\n:host([global-filter]) .top-flex-container, :host([column-selector]) .top-flex-container {\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\navl-column-selector-dialog {\n  flex-grow: 0;\n}\n\navl-icon{\n  width: 18px;\n  height: 18px;\n}\n.iconText{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 48px;\n}\n\n.iconText avl-icon{\n  padding-right: 16px;\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.iconText p{\n  font-size: 14px;\n}\n\n.numberColumn{\n  text-align: right;\n}\n\n.textColumn{\n  text-align: left;\n}\n\navl-checkbox {\n  margin-right: 0px;\n}\n\n.header-icon-content,\n.flex-center{\n  display: flex;\n  justify-content: center;\n}\n\na {\n  color: var(--avl-datatable-link-color);\n  text-decoration: none;\n}\n\na:hover:not(:active) {\n  color: var(--avl-datatable-link-hover-color);\n}\n\n.table-checkbox {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\n\n.table-header-checkbox {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\n</style>"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  ", "\n<div class=\"wrapper\" id=\"avl-column-selector-dialog\" on-focus=\"focusedIn\" tabindex=\"0\">\n    <div class=\"clickable\" id=\"btn-open-dialog\" on-click=\"toggleOpen\">\n        <template is=\"dom-if\" if=\"[[allColumns]]\">\n        <avl-icon-button src=\"data:image/svg+xml,%3Csvg id='baseline-view_column-24px' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath id='Pfad_922' data-name='Pfad 922' d='M11.059,25h5.882V5H11.059ZM4,25H9.882V5H4ZM18.118,5V25H24V5Z' transform='translate(-2 -3)' fill='%233ca0b9'/%3E%3Cpath id='Pfad_923' data-name='Pfad 923' d='M0,0H24V24H0Z' fill='none'/%3E%3C/svg%3E\" id=\"icon-open-dialog\"></avl-icon-button>\n        </template>\n        <template is=\"dom-if\" if=\"[[!allColumns]]\">\n        <avl-icon-button src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg id='Gruppe_1688' data-name='Gruppe 1688' transform='translate(-438 -55)'%3E%3Cg id='Columns' transform='translate(438 55)'%3E%3Cpath id='Pfad_924' data-name='Pfad 924' d='M21,22H17a1,1,0,0,1-1-1V3a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V21A1,1,0,0,1,21,22ZM20,4H18V20h2Z' fill='%233ca0b9'/%3E%3Cpath id='Pfad_925' data-name='Pfad 925' d='M14,22H10a1,1,0,0,1-1-1V3a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V21A1,1,0,0,1,14,22ZM13,4H11V20h2Z' fill='%233ca0b9'/%3E%3Cpath id='Pfad_926' data-name='Pfad 926' d='M7,22H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2H7A1,1,0,0,1,8,3V21A1,1,0,0,1,7,22ZM6,4H4V20H6Z' fill='%233ca0b9'/%3E%3C/g%3E%3Crect id='Rechteck_1305' data-name='Rechteck 1305' width='24' height='24' transform='translate(438 55)' fill='none'/%3E%3C/g%3E%3C/svg%3E\" id=\"icon-open-dialog\"></avl-icon-button>\n        </template>\n    </div>\n    <template is=\"dom-if\" if=\"[[opened]]\">\n        <div class=\"dialog\" style=\"bottom: [[dialogBottom]]\">\n            <div class=\"title\">\n                <h2 class=\"titleText\">\n                    [[columnsLabel]]\n                </h2>\n                <div class=\"headerChipsContainer\">\n                    <avl-chip-list single-select id=\"selectedIndexChip\" items=\"{{selectItems}}\" selected-index={{selected}} on-selected-index-changed=\"selectedValueChanged\"></avl-chip-list>\n                </div>\n            </div>\n            <div class=\"columnDefinitions\" style=\"height: [[columnHeight]]\">\n                <template restamp is=\"dom-if\" if=\"[[isLists]]\">\n                    <avl-list class=\"avl-list-datatable\" multi-select id=\"multiSelection\" selected-indexes=\"{{selectedIndexes}}\" rows=\"{{columnItems}}\" on-row-reordered=\"rowReordered\" drag-and-drop style=\"height: [[columnHeight]]\"></avl-list>\n                </template>\n            </div>\n            <template is=\"dom-if\" if=\"[[isDialogFooter]]\">\n                <div class=\"buttonContainer\">\n                    <avl-button class=\"cancel-button\" id=\"btn-reset-dialog\" on-click=\"resetToDefault\">[[resetButtonLabel]]</avl-button>\n                </div>\n            </template>\n        </div>\n    </template>\n</div>\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["<style>\n.clickable {\n    cursor: pointer;\n    padding: 10px;\n    color: var(--avl-emphasis-medium-color);\n}\n\n.buttonLabel{\n    float: left;\n    line-height: 24px;\n}\n\n.dialog{\n    position: absolute;\n    right: 0;\n    background-color: var(--avl-menu-background-color);\n    width: 360px;\n    height: 444px;\n    overflow: auto;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1300;\n}\n\n.items{\n    display:block;\n}\n\navl-icon{\n    color: var(--avl-emphasis-medium-color);\n}\n.wrapper{\n    position: relative;\n    outline: none;\n}\n.columnDefinitions{\n    display:block;\n    position: relative;\n    height:273px;\n    overflow-y: auto;\n}\n\n.title{\n    border-bottom: 1px solid var(--avl-divider-color);\n    padding: 24px 24px 0 24px;\n}\n\n.titleText{\n    color: var(--avl-item-text-color, var(--avl-emphasis-high-color));\n    margin: 0;\n    font-weight: normal;\n    font-size: 20px;\n}\n\n.headerChipsContainer {\n    margin: 8px 0;\n}\n\n.buttonContainer{\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    height: 56px;\n    border-top: 1px solid var(--avl-divider-color);\n}\n\n.header-icon {\n    font-size: 12px;\n}\n\n.header-image {\n    height: auto;\n    width: auto;\n    max-height: 18px;\n} \n\navl-list {\n    width: 360px;\n    height: 273px;\n}\n\n    /* Desktop */\n:host([desktop]) .titleText{\n    color: var(--avl-primary-text-color);\n}\n\n:host([desktop]) avl-button{\n    margin:10px;\n}\n\n:host([desktop]) avl-checkbox{\n    margin-left:10px;\n}\n\n:host([desktop]) .clickable{\n    color: var(--avl-primary-text-color);\n}\n\n:host([desktop]) .dialog{\n    box-shadow: initial;\n    border: 1px solid black;\n}\n\n.icon{\n    color:var(--avl-primary-text-color);\n    width: 18px;\n    height: 18px;\n}\n</style>"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n\n  <div id=\"uploadContainer\">\n    <div class=\"header\">\n      [[label]]\n    </div>\n    \n    <div class=\"file-list\" tabindex=\"0\" on-focus=\"fileListFocus\" on-mousedown=\"fileListMouseDown\">\n      <template is=\"dom-repeat\" items=\"{{files}}\">\n        <avl-file-view class=\"file-view\" tabindex=\"-1\" service=\"[[uploadService]]\" accept=\"[[accept]]\"\n                        target=\"[[target]]\" file=\"{{item}}\" additional-menu-items=\"[[additionalMenuItems]]\"\n                        indeterminate-progress=\"[[indeterminateProgress]]\"\n                        fail-error-message=\"[[failErrorMessage]]\"\n                        abort-error-message=\"[[abortErrorMessage]]\"\n                        retry-menu-item=\"[[retryMenuItem]]\"\n                        remove-menu-item=\"[[removeMenuItem]]\"\n                        download-menu-item=\"[[downloadMenuItem]]\"\n                        on-upload-start=\"redispatchFileEvent\"\n                        on-upload-fail=\"redispatchFileEvent\"\n                        on-upload-complete=\"redispatchFileEvent\"\n                        on-upload-abort=\"redispatchFileEvent\"\n                        on-menu-item-clicked=\"redispatchFileEvent\"\n                        on-file-rejected=\"redispatchFileEvent\"\n                        on-file-status-changed=\"onFileStatusChange\"\n                        disabled=\"[[disabled]]\"\n                        on-focus=\"focusedIn\" \n                        on-focusout=\"focusedOut\">\n        </avl-file-view>\n      </template>\n    </div>\n\n    <div id=\"dropzone\" tabindex=\"0\" class=\"dropzone\" on-click=\"browseFiles\" on-focus=\"focusedIn\" on-focusout=\"focusedOut\">\n      <avl-icon icon=\"icons:cloud-upload\"></avl-icon>\n      <template is=\"dom-if\" if=\"[[shouldShowError(invalid, errorMessage)]]\">\n        <div>{{errorMessage}}</div>\n      </template>\n      <template is=\"dom-if\" if=\"[[!shouldShowError(invalid, errorMessage)]]\">\n        <!-- property innerHTML when written as an attibute according to polymer rules (camelCase to kebab-case) is inner-h-t-m-l -->\n        <div inner-h-t-m-l=\"[[dragAreaMessage]]\"></div>\n      </template>\n      <template is=\"dom-if\" if=\"[[!disabled]]\">\n        <template is=\"dom-if\" if=\"[[!readonly]]\">\n          <paper-ripple initial-opacity=\"1\"></paper-ripple>\n        </template>\n      </template>\n    </div>\n    <template is=\"dom-if\" if=\"[[isErrorDialogOpen]]\">\n        <avl-upload-dialog on-close=\"closeErrorDialog\" error-files=\"[[errorArray]]\"></avl-upload-dialog>\n    </template>\n  </div>\n\n  <input id=\"fileInput\" type=\"file\" multiple accept=\"{{accept}}\">"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["<style>\n:host {\n  --avl-icon-custom-color: var(--avl-upload-drop-zone-icon-color, var(--avl-icon-default-color));\n\n  --avl-upload-file-uploaded-color: var(--avl-link-color);\n  --avl-upload-file-label-hover-color: var(--avl-link-hover-color);\n  --avl-upload-file-error-message-color: var(--avl-error-color);\n  --avl-upload-file-fail-color: var(--avl-foreground-disabled-color);\n  --avl-upload-file-name-color: var(--avl-foreground-medium-color);\n  --avl-upload-file-hover-color: var(--avl-ink-default-hover-color);\n  --avl-upload-file-focus-color: var(--avl-ink-default-focus-color);\n  \n  --avl-upload-icons-color: var(--avl-icon-color);\n\n  --avl-upload-progress-bar-color: var(--avl-progress-25-color);\n  --avl-upload-progress-bar-indicator-color: var(--avl-progress-color);\n\n  --avl-upload-drop-zone-border-color: var(--avl-divider-color);\n  --avl-upload-drop-zone-active-border-color: var(--avl-border-color);\n\n  --avl-upload-drop-zone-hover-background-color: var(--avl-ink-default-hover-color);\n  --avl-upload-drop-zone-hover-border-color: var(--avl-border-color);\n  --avl-upload-drop-zone-focus-background-color: var(--avl-ink-default-focus-color);\n\n  --avl-upload-drop-zone-disabled-background-color: var(--avl-background-color);\n  --avl-upload-drop-zone-disabled-border-color: var(--avl-ink-default-hover-color);\n  --avl-upload-drop-zone-disabled-text-color: var(--avl-foreground-disabled-color);\n\n  --avl-upload-drop-zone-invalid-border-color: var(--avl-error-color);\n  --avl-upload-drop-zone-invalid-text-color: var(--avl-error-color);\n  --avl-upload-drop-zone-invalid-background-color: var(--avl-background-color);\n  \n  --avl-upload-drop-zone-disabled-icon-color: var(--avl-icon-disabled-color);\n  --avl-upload-drop-zone-pressed-color: var(--avl-ink-default-pressed-color);\n\n  width: 300px;\n  \n  font-family: var(--avl-font-family);\n  color: var(--avl-upload-default-text-color, var(--avl-foreground-color));\n  background-color: var(--avl-upload-drop-zone-background-color, var(--avl-background-color));\n  display: block;\n\n  max-height: 256px;\n  margin-top: 4px;\n  margin-bottom: 8px;\n}\n\navl-file-view {\n  outline: none;\n  display: block;\n}\n\nspan{\n  color: var(--avl-link-color);\n}\n\n#uploadContainer {\n  font-size: 12px;\n  display: flex; \n  justify-content: flex-start;\n  flex-direction: column;\n  width: 100%;\n  align-items: stretch;\n  max-height: inherit;\n  height: inherit;\n}\n\n.file-list {\n  max-height: 100%;\n  height: 100%;\n  outline: none;\n  flex: 0 1 auto;\n  overflow-y: auto;\n}\n\n.dropzone{\n  outline: none;\n  min-height: 46px;\n  cursor: pointer;\n  padding: 8px; \n  position: relative;\n  text-align: center;\n  border: 1px solid;\n  border-color: var(--avl-upload-drop-zone-border-color);\n  background-color: var(--avl-upload-drop-zone-background-color);\n  transition-property: background-color;\n  transition-duration: 0.35s;\n  border-radius: 2px;\n}\n\n.dropzone:hover:not([disabled]){\n  background-color: var(--avl-upload-drop-zone-hover-background-color);\n  border-color: var(--avl-upload-drop-zone-hover-border-color);\n}\n\n:host([readonly]) .dropzone {\n  display: none;\n}\n\n.dropzone.focusDropzone{\n  background-color: var(--avl-upload-drop-zone-focus-background-color);\n  border-color: var(--avl-upload-drop-zone-hover-border-color);\n}\n\n:host([disabled]) .dropzone{\n  background-color: var(--avl-upload-drop-zone-disabled-background-color);\n  border-color: var(--avl-upload-drop-zone-disabled-border-color);\n  color:  var(--avl-upload-drop-zone-disabled-text-color);\n  cursor: default;\n}\n\n:host([disabled]){\n  --avl-upload-drop-zone-icon-color: var(--avl-upload-drop-zone-disabled-icon-color);\n}\n\n:host([invalid]) .dropzone{\n  border-color:  var(--avl-upload-drop-zone-invalid-border-color);\n  color: var(--avl-upload-drop-zone-invalid-text-color);\n  background-color: var(--avl-upload-drop-zone-invalid-background-color);\n}\n\n:host([invalid]){\n  --avl-upload-drop-zone-icon-color: var(--avl-upload-drop-zone-disabled-icon-color);\n}\n\n.dropzone[active]{\n  border-color: var(--avl-upload-drop-zone-active-border-color);\n}\n\n.dropzone.dragged{\n  background-color: var(--avl-upload-drop-zone-focus-background-color);\n}\n\npaper-ripple {\n  background-position: center;\n  transition: background 0.2s;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  color: var(--avl-upload-drop-zone-pressed-color);\n}\n\n#fileInput {\n  display: none;\n}</style>"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  <div id=\"container\">\n    <template is=\"dom-if\" if=\"[[!indeterminate]]\">\n      <div id=\"indicator\" style$=\"width: {{percentage}}%;\"></div>\n    </template>\n    <template is=\"dom-if\" if=\"[[indeterminate]]\">\n      <div id=\"indicator\" class=\"indeterminate\"></div>\n    </template>\n  </div>"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["<style>\n:host {\n  display: block;\n  width: 100%;\n}\n\n#container {\n  background-color: var(--avl-upload-progress-bar-color);\n  height: 4px;\n  width: 100%;\n  overflow: hidden;\n}\n\n#indicator {\n  background-color: var(--avl-upload-progress-bar-indicator-color);\n  height: 100%;\n}\n\n:host([indeterminate]) #indicator {\n  background-color: var(--avl-upload-progress-bar-color);\n  width: 100%;\n}\n\n.indeterminate::after {\n  content: '';\n  display: block;\n  height: 100%;\n  width: 100%;\n  transform-origin: right center;\n  animation: indeterminate-bar 1s linear infinite;\n  background-color: var(--avl-upload-progress-bar-indicator-color);\n}\n\n@keyframes indeterminate-bar {\n  0% {\n    transform: scaleX(1) translateX(-100%);\n  }\n  50% {\n    transform: scaleX(1) translateX(0%);\n  }\n  75% {\n    transform: scaleX(1) translateX(0%);\n    animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n  }\n  100% {\n    transform: scaleX(0) translateX(0%);\n  }\n}</style>"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  ", "\n      <div id=\"container\">\n        <div id=\"avl-upload-modal\" class=\"avl-upload-modal\">\n          <div class=\"avl-upload-modal-content\">\n            <h1>{{failErrorTypeTitle}}</h1>\n            <p>{{failErrorTypeMessage}}</p>\n            <template is=\"dom-if\" if=\"[[errorFiles]]\">\n              <b>{{failErrorFiles}}:</b>\n              <template is=\"dom-repeat\" items=\"{{errorFiles}}\">\n                <p class=\"errorFileName\">{{displayIndex(index)}}) {{item.name}}</p>\n              </template>\n            </template>\n            <div class=\"avl-upload-modal-content-footer\">\n              <avl-button id=\"avl-upload-dialog-button\" on-click=\"closeDialog\">OK</avl-button>\n            </div>\n          </div>\n        </div>\n      </div>"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["<style>\n.avl-upload-modal {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n\n.avl-upload-modal-content {\n  background-color: var(--avl-background-color);\n  margin: 15% auto;\n  padding: 20px 20px 0 20px;\n  width: 200px;\n  box-shadow: var(--avl-box-shadow-24dp);\n}\n\n.avl-upload-modal-content h1 {\n  font-size: 16px;\n  font-weight: bolder;\n}\n\n.avl-upload-modal-content p.errorFileName {\n  margin: 0;\n}\n\n.avl-upload-modal-content-footer {\n  width: 100%;\n  text-align: right;\n  position: relative;\n  left: 20px;\n}</style>"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  ", "\n    <template is=\"dom-if\" if=\"[[checkStatus(_file.status, 'uploading')]]\">\n      <div class=\"item-container loading\">\n        <avl-overflow-tooltip class=\"item-name\">[[_file.name]]</avl-overflow-tooltip>\n        <avl-icon-button id=\"abortIcon\" class=\"item-icon\" icon=\"icons:close\" on-click=\"abortUpload\" ></avl-icon-button>\n        <avl-upload-progress percentage=\"[[percentage]]\" indeterminate=\"[[indeterminateProgress]]\"></avl-upload-progress>\n      </div>\n    </template>\n    <template is=\"dom-if\" if=\"[[checkStatus(_file.status, 'complete')]]\">\n      <div class=\"item-container complete\">\n        <div class=\"item-name\">\n          <template is=\"dom-if\" if=\"[[_file.downloadUrl]]\">\n            <a tabindex=\"-1\" on-click=\"fileLinkClicked\">\n              [[_file.name]]\n            </a>\n          </template>\n          <template is=\"dom-if\" if=\"[[!_file.downloadUrl]]\">\n            [[_file.name]]\n          </template>\n        </div>\n        <avl-overflow-menu tabindex=\"-1\" class=\"item-icon\" items=\"[[completeMenuItems]]\" on-item-clicked=\"fileMenuItemClicked\" disabled=\"[[disabled]]\">\n          <avl-icon-button icon=\"more-vert\" slot=\"trigger\" disabled=\"[[disabled]]\"></avl-icon-button>\n        </avl-overflow-menu>\n      </div>\n    </template>\n    <template is=\"dom-if\" if=\"[[checkStatus(_file.status, 'fail')]]\">\n      <div class=\"item-container fail\">\n        <avl-overflow-tooltip class=\"item-name\">[[_file.name]]</avl-overflow-tooltip>\n        <avl-overflow-menu tabindex=\"-1\" class=\"item-icon\" items=\"[[failMenuItems]]\" on-item-clicked=\"fileMenuItemClicked\" disabled=\"[[disabled]]\">\n          <avl-icon-button icon=\"more-vert\" slot=\"trigger\" disabled=\"[[disabled]]\"></avl-icon-button>\n        </avl-overflow-menu>\n        <div class=\"error-message\">[[failErrorMessage]]</div>\n      </div>\n    </template>\n    <template is=\"dom-if\" if=\"[[checkStatus(_file.status, 'abort')]]\">\n      <div class=\"item-container fail\">\n        <avl-overflow-tooltip class=\"item-name\">[[_file.name]]</avl-overflow-tooltip>\n        <avl-overflow-menu tabindex=\"-1\" class=\"item-icon\" items=\"[[abortMenuItems]]\" on-item-clicked=\"fileMenuItemClicked\" disabled=\"[[disabled]]\">\n          <avl-icon-button icon=\"more-vert\" slot=\"trigger\" disabled=\"[[disabled]]\"></avl-icon-button>\n        </avl-overflow-menu>\n        <div class=\"error-message\">[[abortErrorMessage]]</div>\n      </div>\n    </template>\n    <a id=\"downloadAnchor\" style=\"display:none\"></a>"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["<style>\n.item-container {\n  display: grid;\n  grid-template-columns: auto 24px;\n  grid-template-rows: 24px 4px;\n  grid-column-gap: 16px;\n  grid-row-gap: 0px;\n  padding-right: 12px;\n}\n\n:host([focused]) .item-container {\n  background-color: var(--avl-upload-file-focus-color);\n}\n\n.item-container .item-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  align-self: center;\n  font-size: 14px;\n}\n\n.item-container .item-icon {\n  align-self: center;\n  justify-self: center;\n  cursor: pointer;\n  grid-column: 2;\n  --avl-icon-button-color: var(--avl-upload-icons-color);\n}\n\n.item-container.complete {\n  grid-template-rows: 24px;\n  \n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n\n:host(:hover) .item-container.complete {\n  background-color: var(--avl-upload-file-hover-color);\n}\n\n.item-container.complete a{\n  color: var(--avl-upload-file-uploaded-color);\n  text-decoration: none;\n  outline:none;\n  cursor: pointer;\n}\n\n:host(:hover) .item-container.complete a{\n  color: var(--avl-upload-file-label-hover-color);\n  text-decoration: none;\n\n}\n\n.item-container.complete .item-icon {\n  grid-row: 1;\n}\n\n.item-container.loading {\n  color: var(--avl-upload-file-name-color);\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.item-container.fail .error-message {\n  font-size: 12px;\n  color: var(--avl-upload-file-error-message-color);\n}\n\n.item-container.fail {\n  grid-template-rows: 24px 12px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n\n.item-container.fail .item-icon {\n  grid-column-start: 2; \n  grid-column-end: 3; \n  grid-row-start: 1; \n  grid-row-end: 3;\n}\n\n.item-container.fail .item-name {\n  color: var(--avl-upload-file-fail-color);\n}</style>"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral([" ", " ", "\n\n  <div id=\"scrollable\" on-scroll=\"handleScroll\">\n    <div id=\"itemContainer\">\n      <div id=\"itemPositioner\" on-mousemove=\"dndItemMousemove\" on-touchmove=\"dndItemMousemove\">\n        <template\n          id=\"itemsTemplate\"\n          is=\"dom-repeat\"\n          items=\"[[visibleRows]]\"\n          index-as=\"[[index]]\"\n          restamp=\"true\"\n          mutable-data=\"true\"\n          on-dom-change=\"itemsRendered\"\n        >\n          <template is=\"dom-if\" if=\"[[isDragoverRow(item, dnd.dragoverRow, dnd.dragging)]]\">\n            <template is=\"dom-if\" if=\"[[isDndBefore(dnd.dragoverBefore, item)]]\">\n              <div id=\"placeholderElement\" style=\"height: 48px; width: 100%;\"></div>\n            </template>\n          </template>\n\n          <avl-item\n            value=\"[[item]]\"\n            label=\"[[item.label]]\"\n            sublabel=\"[[item.sublabel]]\"\n            tabindex=\"{{tabindex}}\"\n            badge-value=\"[[item.badgeValue]]\"\n            icon=\"[[item.icon]]\"\n            image=\"[[item.image]]\"\n            disabled$=\"{{isDisabled(item.disabled,disabled)}}\"\n            readonly$=\"{{isReadonly(item.readonly, readonly)}}\"\n            on-click=\"itemClick\"\n            on-keydown=\"onKeydown\"\n            drag-indicator=\"[[dragIndicator]]\"\n            drag-and-drop=\"[[dragAndDrop]]\"\n            on-focused-changed=\"itemFocusedChanged\"\n            selectable-with-checkbox=\"[[multiSelect]]\"\n            on-selection-checkbox-changed=\"selectionCheckboxClicked\"\n            right-checkbox=\"[[hasRightCheckbox(item)]]\"\n            right-checkbox-value=\"{{item.rightCheckbox}}\"\n            on-right-checkbox-value-changed=\"rightCheckboxValueChanged\"\n            overflow-menu=\"[[hasOverflowMenu(overflowMenuItems)]]\"\n            index$=\"[[index]]\"\n            nohover$=\"[[isNohover(dnd.dragging, item)]]\"\n            on-mousedown=\"dndItemMousedown\"\n            on-touchstart=\"dndItemMousedown\"\n            on-dragstart=\"dragstart\"\n            fake-focus-enabled=\"[[fakeFocus]]\"\n          >\n            <template is=\"dom-if\" if=\"[[overflowMenuItems]]\">\n              <avl-overflow-menu\n                slot=\"overflow-menu\"\n                items=\"[[overflowMenuItems]]\"\n                disabled=\"{{isDisabled(item.disabled,disabled)}}\"\n                row=\"[[item]]\"\n                on-item-clicked=\"overflowMenuItemClicked\"\n              >\n                <avl-icon-button\n                  tabindex=\"-1\"\n                  icon=\"more-vert\"\n                  slot=\"trigger\"\n                  disabled-tabindex\n                  disabled=\"{{isDisabled(item.disabled,disabled)}}\"\n                ></avl-icon-button>\n              </avl-overflow-menu>\n            </template>\n          </avl-item>\n\n          <template is=\"dom-if\" if=\"[[isDragoverRow(item, dnd.dragoverRow, dnd.dragging)]]\">\n            <template is=\"dom-if\" if=\"[[!isDndBefore(dnd.dragoverBefore, item)]]\">\n              <div id=\"placeholderElement\" style=\"height: 48px; width: 100%;\"></div>\n            </template>\n          </template>\n        </template>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"dummyFocusable\" tabindex$=\"{{tabindex}}\"></div>\n  <div\n    id=\"draggedElementContainer\"\n    on-mousemove=\"dndItemMousemove\"\n    on-touchmove=\"dndItemMousemove\"\n  ></div>"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["<style>\n:host {\n  display: block;\n  font-family: var(--avl-font-family);\n  height: 200px;\n  width: 250px;\n  --avl-item-padding-left: var(--avl-list-item-padding-left, 24px);\n  --avl-item-padding-right: var(--avl-list-item-padding-right, 24px);\n  --avl-item-height: var(--avl-list-item-height, 48px);\n\n  --avl-item-background-color: var(--avl-list-item-background-color, var(--avl-background-color));\n  --avl-list-item-selected-color: var(--avl-background-selected-color);\n  --avl-list-item-hover-color: var(--avl-ink-default-hover-color);\n  --avl-list-item-focused-color: var(--avl-ink-default-focus-color);\n  --avl-list-item-pressed-color: var(--avl-ink-default-pressed-color);\n  --avl-list-item-selected-hover-color: var(--avl-background-selected-hover-color);\n  --avl-list-item-selected-focus-color: var(--avl-background-selected-focus-color);\n  --avl-list-item-selected-pressed-color: var(--avl-background-selected-pressed-color);\n  --avl-list-item-disabled-text-color: var(--avl-foreground-disabled-color);\n}\n\navl-item {\n  cursor: pointer;\n}\navl-item[focused] {\n  cursor: pointer;\n}\navl-item[focused][drag-and-drop] {\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\navl-item[dragging] {\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n\navl-item[fake-focus] {\n  background-color: var(--avl-list-item-focused-color);\n}\n\navl-item[checked][fake-focus] {\n  background-color: var(--avl-list-item-selected-focus-color);\n}\n\navl-item[readonly]{\n  cursor: default;\n}\n\navl-item[disabled]{\n  cursor: default;\n  --avl-item-disabled-text-color: var(--avl-list-item-disabled-text-color);\n}\n\navl-item[image]{\n  --avl-item-height: 56px;\n}\n\navl-item[sublabel]{\n  --avl-item-height: 64px;\n}\n\navl-item:hover[readonly]:not([checked]){\n  background-color: var(--avl-background-color);\n}\n\navl-item[readonly][checked]{\n  background-color: var(--avl-background-disabled-color);\n}\n\navl-item:hover:not([nohover]):not([readonly]):not([disabled]){\n  background-color: var(--avl-list-item-hover-color);\n}\n\navl-item:not([readonly]):not([checked]):not([nohover])[pressed]{\n  background-color: var(--avl-list-item-pressed-color);\n}\n\navl-item:not([readonly])[focused]:not([checked]):not([pressed]){\n  background-color: var(--avl-list-item-focused-color);\n}\n\navl-item:not([readonly])[checked]{\n  background-color: var(--avl-list-item-selected-color);\n}\n\navl-item:not([readonly])[checked]:hover:not([nohover]){\n  background-color: var(--avl-list-item-selected-hover-color);\n}\n\navl-item:not([readonly])[checked][focused]{\n  background-color: var(--avl-list-item-selected-focus-color);\n}\n\navl-item:not([readonly])[checked][pressed]:not([nohover]){\n  background-color: var(--avl-list-item-selected-pressed-color);\n}\n\navl-item { /* Fixes text selection in Edge while dragging */\n  -ms-user-select: none;\n}\n\navl-item[selectable-with-checkbox]{\n  --avl-item-padding-left: 12px;\n}\n\navl-item[right-checkbox]{\n  --avl-item-padding-right: 12px;\n}\n\navl-item[overflow-menu]{\n  --avl-item-padding-right: 12px;\n}\n\n#scrollable {\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n}\n\n#itemPositioner {\n  position: absolute;\n  width: 100%;\n}\n\n#dummyFocusable {\n  width: 0px;\n  height: 0px;\n}\n\n#placeholderElement {\n  background-color: var(--avl-drop-area-color);\n}</style>"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n\n  <avl-icon class=\"checkIcon\" icon=\"check\"></avl-icon>\n  <avl-icon class=\"thumbnail\" icon=\"[[thumbnailIcon]]\" src=\"[[thumbnailImage]]\" thumbnail$=\"[[hasThumbnail()]]\"></avl-icon>\n  <div class=\"text\" label=\"[[label]]\" value=\"{{value}}\"> {{label}} </div>\n  <avl-icon class=\"removeIcon\" icon=\"icons:clear\" on-click=\"removeIconClicked\" removeIcon$=\"[[hasRemoveIcon()]]\"></avl-icon>\n  <paper-ripple initial-opacity=\"1\" opacity-decay-velocity=\"3.2\"></paper-ripple>"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["<style>\n:host {\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    height: 30px;\n    padding: 0 16px;\n    border-radius: 16px;\n    border: 1px solid;\n    border-color: var(--avl-chips-border-color, var(--avl-border-focus-color));\n    color: var(--avl-chips-text-color, var(--avl-link-color));\n    font-family: Roboto, sans-serif;\n    font-size: 14px;\n    white-space: nowrap;\n  }\n\npaper-ripple {\n  background-position: center;\n  transition: background 0.2s;\n  position: absolute;\n  width:100%;\n  height: 100%;\n  color: var(--avl-chips-ripple-color, var(--avl-ink-pressed-color));\n}\n\n:host([disabled]) paper-ripple {\n  color: rgba(0,0,0,0);\n}\n\n:host([readonly]) paper-ripple {\n  color: rgba(0,0,0,0);\n}\n\n:host([invalid]) paper-ripple {\n  color: var(--avl-chips-pressed-error-color, var(--avl-ink-error-pressed-color));\n}\n\n:host(:hover){\n background-color: var(--avl-chips-hover-color, var(--avl-ink-hover-color));\n}\n\n:host(:active) {\n  background-color: var(--avl-chips-pressed-color, var(--avl-ink-pressed-color));\n}\n\n:host([disabled]){\n  background-color:  var(--avl-chips-disabled-background-color, var(--avl-background-disabled-color));\n  color: var(--avl-chips-disabled-text-color, var(--avl-foreground-disabled-color));\n  border-color: var(--avl-chips-disabled-border-color, var(--avl-border-disabled-color));\n  outline:none;\n}\n\n:host([readonly]){\n  border-color: var(--avl-chip-list-readonly-border-color, var(--avl-border-emphasis-high-color));\n  color: var(--avl-chip-list-readonly-text-color, var(--avl-foreground-color));\n  outline:none;\n  pointer-events: none;\n  cursor: default;\n}\n\n:host(:not([disabled]):not([readonly]):not([invalid])[focused]){\n  background-color: var(--avl-chips-focused-color,var(--avl-ink-focus-color));\n  outline: none;\n}\n\n:host(:not([disabled]):not([readonly])[invalid][focused]){\nbackground-color: var(--avl-chips-focused-invalid-color,var(--avl-ink-error-focus-color));\noutline: none;\n} \n \navl-icon.checkIcon{\n  --avl-icon-custom-color:  var(--avl-chips-icon-color, var(--avl-icon-default-emphasis-high-color));\n}\n\navl-icon.removeIcon{\n  --avl-icon-custom-color: var(--avl-chips-removeIcon-color, var(--avl-emphasis-medium-color));\n}\n\navl-icon.thumbnail{\n  --avl-icon-custom-color: var(--avl-chips-thumbnail-color, var(--avl-emphasis-medium-color));\n}\n\n:host([invalid]) avl-icon.removeIcon{\n  --avl-icon-custom-color: var(--avl-chips-removeIcon-color, var(--avl-error-color));\n}\n\n:host([disabled]) avl-icon.thumbnail{\n  --avl-icon-custom-color: var(--avl-chips-thumbnail-disabled-color, var(--avl-foreground-disabled-color));\n}\n\n:host([disabled]) avl-icon.removeIcon{\n  --avl-icon-custom-color: var(--avl-chips-removeIcon-disabled-color, var(--avl-foreground-disabled-color));\n}\n\n:host([invalid]) {\n  border-color: var(--avl-chips-border-error-color, var(--avl-error-color));\n  color: var(--avl-chip-list-readonly-text-color, var(--avl-error-color));\n}\n\n :host([invalid]:hover)  {\n  border-color: var(--avl-chips-border-error-color, var(--avl-error-color));\n  background-color: var(--avl-chips-hover-error-color, var(--avl-ink-error-hover-color));\n}\n\n:host([invalid][checked][focused]) paper-ripple {\n  border-color: var(--avl-chips-border-error-color, var(--avl-error-color));\n  background-color: var(--avl-chips-focused-error-color, var(--avl-ink-error-focus-color));\n}\n\n:host([invalid][checked][active]) paper-ripple {\n  border-color: var(--avl-chips-border-error-color, var(--avl-error-color));\n  background-color: var(--avl-chips-pressed-error-color, var(--avl-ink-error-pressed-color));\n}  \n\n:host avl-icon.checkIcon{\n  display: none;\n}\n\n:host avl-icon.removeIcon:not([removeIcon]){\n  display: none;\n}\n\n:host([checked][filter]) avl-icon.checkIcon{\n  display: inline-block;\n  margin-left: 4px;\n  margin-right: 8px;\n}\n\n:host avl-icon.thumbnail{\n  display: inline-block;\n  position: relative;\n  left: -12px;\n  margin-right: -4px;\n}\n\n:host avl-icon.thumbnail:not([thumbnail]){\n  display: none;\n}\n\n:host([remove-icon]) avl-icon.removeIcon {\n  display: inline-block;\n  position: relative;\n  right: -12px;\n  margin-left: -4px;\n}\n\n:host([checked][filter][readonly]) avl-icon.checkIcon{\n  display: inline-block;\n  margin-left: 4px;\n  margin-right: 8px;\n  --avl-icon-custom-color:var(--avl-emphasis-medium-color);\n}\n\n:host([checked][filter]){\n  padding-left: 0px;\n}\n\n:host(:hover:not([disabled]):not([readonly])[checked]){\n  background-color: var(--avl-chips-selected-hover-background-color, var(--avl-background-selected-hover-color));\n}\n\n:host(:not([disabled]):not([readonly])[checked][focused]){\n  background-color: var(--avl-chips-selected-focus-background-color, var(--avl-background-selected-focus-color));\n}\n\n:host(:not([disabled]):not([readonly])[checked]:not([invalid])){\n  background-color: var(--avl-chips-selected-pressed-background-color, var(--avl-background-selected-pressed-color));\n}\n\n:host(:not([disabled]):not([readonly])[checked][invalid]){\n  background-color: var(--avl-chips-selected-pressed-invalid-background-color, var(--avl-ink-error-pressed-color)); /* needs to be done (color is not specified) */\n  border-color: var(--avl-chips-border-error-color, var(--avl-error-color));\n}\n\n:host([disabled]) avl-icon.checkIcon{\n  display: none;\n}\n\navl-chips-chip[readonly]{\n  cursor: default;\n}\n\n:host(:not([disabled])[checked]){\n  background-color: var(--avl-chips-selected-background-color, var(--avl-background-selected-color));\n  color: var(--avl-chips-selected-text-color,var(--avl-foreground-color));\n  border-color: var(--avl-chips-selected-border-color, var(--avl-border-pressed-color));\n}\n\n:host(:not([disabled])[checked][readonly]){\n  background-color:var(--avl-chip-list-readonly-selected-background-color, var(--avl-background-disabled-color));\n  color: var(--avl-chip-list-readonly-text-color, var(--avl-foreground-color));\n  border-color: var(--avl-chip-list-readonly-border-color, var(--avl-border-emphasis-high-color));\n}\n\n/* box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20); */\n</style>"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  <template is=\"dom-if\" if=\"[[label]]\">\n      <div class=\"title\">{{label}}</div>\n    </template>\n    <div class=\"container\">\n      <template is=\"dom-repeat\" items=\"[[items]]\" on-dom-change=\"start\">\n        <avl-chips-chip label=\"[[item.label]]\" value=\"[[item]]\" disabled=\"{{isDisabled(item,disabled)}}\"\n          readonly=\"{{isReadOnly(item, readonly)}}\" on-checked-changed=\"chipSelected\" filter=\"[[multiSelect]]\"\n          not-selectable=\"[[notSelectable]]\"></avl-chips-chip>\n      </template>\n    </div>"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["<style>\n:host{\n  display: inline-block;\n  flex-wrap: wrap;\n}\n\navl-chips-chip:hover{\n  cursor: pointer;\n}\n\navl-chips-chip{\n  margin: 4px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  transition-property: box-shadow;\n  transition-duration: 0.2s; \n  display: inline-flex;\n}\n\navl-chips-chip[disabled]{\n  cursor: default;\n}\n\navl-chips-chip[readonly]{\n  cursor: default;\n}\n\navl-chips-chip:active:not([disabled]){\n  background-color: var(--avl-chips-chip-pressed-color, var(--avl-ink-pressed-color));\n  box-shadow: var(--avl-chips-shadow ,var(--avl-box-shadow-8dp));\n}\n\n.title{\n  padding-top:2px;\n  font-family: Roboto, sans-serif;\n  font-size: 14px;\n  color: var(--avl-foreground-color);\n}\n\n.container{\n  display: inline-flex;\n  flex-wrap: wrap;\n}</style>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n\n  <div class=\"header\" class$={{getHeaderClass()}}>\n    <template is=\"dom-if\" if=\"{{titleBelowImage}}\">\n      <iron-image src=\"[[image]]\" > </iron-image>\n      <div class=\"heading-content\">\n        <div>\n          <template is=\"dom-if\" if=\"[[titleIcon]]\">\n            <avl-icon class=\"thumbnail\" icon=\"[[titleIcon]]\"></avl-icon>\n          </template>\n          <div class=\"title\">\n            <slot name=\"title\"> </slot>\n            <slot name=\"subtitle\"> </slot>\n          </div>\n        </div>\n      </div>\n    </template>\n\n    <template is=\"dom-if\" if=\"{{!titleBelowImage}}\">\n      <div class=\"heading-content\">\n        <div>\n          <template is=\"dom-if\" if=\"[[titleIcon]]\">\n            <avl-icon class=\"thumbnail\" icon=\"[[titleIcon]]\"></avl-icon>\n          </template>\n      \n          <div class=\"title\">\n            <slot name=\"title\"> </slot>\n            <slot name=\"subtitle\"> </slot>\n          </div>\n        </div>\n      </div>\n\n      <template is=\"dom-if\" if=\"[[image]]\">\n        <iron-image src=\"[[image]]\" class=\"image\" > </iron-image>\n      </template>\n    </template>\n  </div>\n\n  <div class=\"content\">\n    <slot> </slot>\n    <slot name=\"content\"> </slot>\n  </div>\n\n  <div class=\"actions\">\n    <slot name=\"actions\"> </slot>\n    <slot name=\"actions-right\"> </slot>\n  </div>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["<style>\n:host {\n  --avl-card-background-color: var(--avl-background-color);\n  --avl-card-text-color: var(--avl-foreground-color);\n  --avl-card-action-background-color: var(--avl-background-color);\n  --avl-card-shadow: var(--avl-box-shadow-1dp);\n  \n  font-family: var(--avl-font-family);\n  background-color: var(--avl-card-background-color);\n  color: var(--avl-card-text-color);\n  \n  display: flex;\n  flex-direction: column;\n  position: relative;\n  box-sizing: border-box;\n  border-radius: 2px;\n  font-size: 14px;\n  box-shadow: var(--avl-card-shadow);\n  width: 100%;\n  height: auto;\n}\n\n.thumbnail {\n  width: 40px;\n  height: 40px;\n  margin-right: 16px;\n  align-self: center;\n  flex-shrink: 0;\n}\n\n.heading-content {\n  padding: 16px 24px;\n}\n\n.heading-content > div {\n  display: flex;\n  flex-direction: row;\n}\n\n:host ::slotted([slot=\"title\"]) {\n  margin: 0px;\n  font-size: 24px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 26px;\n}\n\n.avl-card ::slotted([slot=\"title\"]) {\n  margin: 0px;\n  font-size: 24px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 26px;\n  font-size: 24px;\n}\n\n.avl-card ::slotted([slot=\"subtitle\"]) {\n  margin: 0px;\n  font-size: 24px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 26px;\n  font-size: 16px;\n}\n\n:host ::slotted([slot=\"subtitle\"]) {\n  margin: 0px;\n  font-size: 16px;\n  padding-top: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 24px;\n}\n\n.title {\n  display: inline-grid;\n}\n\n::slotted([slot=\"content\"]) {\n  padding: 0px;\n  position: relative;\n}\n\n::slotted(div) {\n  padding: 0px;\n}\n\n.content {\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 100%;\n}\n\n.header {\n  position: relative;\n  padding: 0;\n  color: var(--avl-card-text-color);\n}\n\niron-image {\n  --iron-image-width: 100%;\n  --iron-image-height: auto;\n  display: block;\n}\n\n.image {\n  padding-bottom: 16px;\n}\n\ndiv.content {\n  padding: 0px 24px 16px;\n}\n\ndiv.actions{\n  padding: 0px 16px;\n}\n\n.actions {\n  margin-top: auto;\n  bottom: 0;\n  background-color: var(--avl-card-action-background-color);\n}\n\n.actions ::slotted([slot=\"actions\"]) {\n  padding: 0px;\n  float: left;\n}\n\n.actions ::slotted([slot=\"actions-right\"]) {\n  padding: 0px;\n  float: right;\n}</style>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-intro-intro-module"], {
  /***/
  "./node_modules/@avl-controls/core/dist/avl-card/avl-card.css.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-card/avl-card.css.js ***!
    \***********************************************************************/

  /*! exports provided: style */

  /***/
  function node_modulesAvlControlsCoreDistAvlCardAvlCardCssJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "style", function () {
      return style;
    });
    /* harmony import */


    var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer */
    "./node_modules/@polymer/polymer/polymer-element.js");

    var style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject()); //# sourceMappingURL=avl-card.css.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-card/avl-card.html.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-card/avl-card.html.js ***!
    \************************************************************************/

  /*! exports provided: template */

  /***/
  function node_modulesAvlControlsCoreDistAvlCardAvlCardHtmlJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "template", function () {
      return template;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-card.css */
    "./node_modules/@avl-controls/core/dist/avl-card/avl-card.css.js");
    /* harmony import */


    var _all_initial_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../all-initial.css */
    "./node_modules/@avl-controls/core/dist/all-initial.css.js");
    /* harmony import */


    var _avl_icon_avl_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../avl-icon/avl-icon */
    "./node_modules/@avl-controls/core/dist/avl-icon/avl-icon.js");
    /* harmony import */


    var _polymer_iron_image_iron_image_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @polymer/iron-image/iron-image.js */
    "./node_modules/@polymer/iron-image/iron-image.js");

    var template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject2(), _all_initial_css__WEBPACK_IMPORTED_MODULE_2__["allInitial"], _avl_card_css__WEBPACK_IMPORTED_MODULE_1__["style"]); //# sourceMappingURL=avl-card.html.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-card/avl-card.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-card/avl-card.js ***!
    \*******************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesAvlControlsCoreDistAvlCardAvlCardJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_card_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-card.html */
    "./node_modules/@avl-controls/core/dist/avl-card/avl-card.html.js");

    var AvlCardImpl = /*#__PURE__*/function (_polymer_polymer_poly) {
      _inherits(AvlCardImpl, _polymer_polymer_poly);

      var _super = _createSuper(AvlCardImpl);

      function AvlCardImpl() {
        var _this;

        _classCallCheck(this, AvlCardImpl);

        _this = _super.apply(this, arguments);
        _this.titleBelowImage = false;
        return _this;
      }

      _createClass(AvlCardImpl, [{
        key: "getHeaderClass",
        value: function getHeaderClass() {
          if (this.image == null) {
            return 'header no-image';
          }

          return 'header';
        }
      }], [{
        key: "is",
        get: function get() {
          return 'avl-card';
        }
      }, {
        key: "template",
        get: function get() {
          return _avl_card_html__WEBPACK_IMPORTED_MODULE_1__["template"];
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            image: String,
            titleBelowImage: Boolean,
            titleIcon: String
          };
        }
      }]);

      return AvlCardImpl;
    }(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

    customElements.define(AvlCardImpl.is, AvlCardImpl); //# sourceMappingURL=avl-card.js.map

    /***/
  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.css.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.css.js ***!
    \*********************************************************************************/

  /*! exports provided: style */

  /***/
  function node_modulesAvlControlsCoreDistAvlChipListAvlChipListCssJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "style", function () {
      return style;
    });
    /* harmony import */


    var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer */
    "./node_modules/@polymer/polymer/polymer-element.js");

    var style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject3()); //# sourceMappingURL=avl-chip-list.css.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.html.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.html.js ***!
    \**********************************************************************************/

  /*! exports provided: template */

  /***/
  function node_modulesAvlControlsCoreDistAvlChipListAvlChipListHtmlJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "template", function () {
      return template;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element.js */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_chip_list_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-chip-list.css */
    "./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.css.js");
    /* harmony import */


    var _all_initial_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../all-initial.css */
    "./node_modules/@avl-controls/core/dist/all-initial.css.js");
    /* harmony import */


    var _avl_chips_chip_avl_chips_chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../avl-chips-chip/avl-chips-chip */
    "./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.js");

    var template = _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject4(), _all_initial_css__WEBPACK_IMPORTED_MODULE_2__["allInitial"], _avl_chip_list_css__WEBPACK_IMPORTED_MODULE_1__["style"]); //# sourceMappingURL=avl-chip-list.html.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.js ***!
    \*****************************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesAvlControlsCoreDistAvlChipListAvlChipListJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_chip_list_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-chip-list.html */
    "./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.html.js");

    var AvlChipListImpl = /*#__PURE__*/function (_polymer_polymer_poly2) {
      _inherits(AvlChipListImpl, _polymer_polymer_poly2);

      var _super2 = _createSuper(AvlChipListImpl);

      function AvlChipListImpl() {
        var _this2;

        _classCallCheck(this, AvlChipListImpl);

        _this2 = _super2.call(this);
        _this2.selectedIndexes = [];
        _this2.selectedValues = [];
        _this2.notSelectable = true;
        _this2.initialized = false;
        _this2.ignoreCheckedEvents = false;

        _this2.addEventListener('focusin', function (event) {
          _this2.focused = true;
        });

        _this2.addEventListener('focusout', function (event) {
          _this2.focused = false;
        });

        return _this2;
      }

      _createClass(AvlChipListImpl, [{
        key: "itemsChange",
        value: function itemsChange() {
          this.initialized = false;
        }
      }, {
        key: "singleSelectChanged",
        value: function singleSelectChanged() {
          this.notSelectable = this.singleSelect ? false : true;
        }
      }, {
        key: "multiSelectChanged",
        value: function multiSelectChanged() {
          this.notSelectable = this.multiSelect ? false : true;
        }
      }, {
        key: "start",
        value: function start() {
          this.initialized = true;

          if (!this.multiSelect && !this.singleSelect) {
            return;
          }

          if (!this.multiSelect) {
            if (this.selectedValue !== undefined) this.selectedValueChange();
            if (this.selectedIndex !== -1) this.selectedIndexChange();
          } else {
            if (this.selectedValues.length) this.selectedValuesChanged();
            if (this.selectedIndexes.length) this.selectedIndexesChanged();
          }
        }
      }, {
        key: "refreshSelectedIndexes",
        value: function refreshSelectedIndexes() {
          this.selectedIndexesChanged();
          this.dispatchEvent(new CustomEvent('selected-indexes-changed', {
            detail: {
              value: this.selectedIndexes
            }
          }));
        }
      }, {
        key: "refreshSelectedValues",
        value: function refreshSelectedValues() {
          this.selectedValuesChanged();
          this.dispatchEvent(new CustomEvent('selected-values-changed', {
            detail: {
              value: this.selectedValues
            }
          }));
        }
      }, {
        key: "findIndexOfValue",
        value: function findIndexOfValue(target) {
          if (!this.items || !target) return -1;
          return this.items.findIndex(function (item) {
            return item.value === target.value;
          });
        }
      }, {
        key: "isDisabled",
        value: function isDisabled(item, disabled) {
          return item.disabled || this.disabled;
        }
      }, {
        key: "isReadOnly",
        value: function isReadOnly(item, readonly) {
          return item.readonly || this.readonly;
        }
      }, {
        key: "selectedValueChange",
        value: function selectedValueChange() {
          var _this3 = this;

          if (!this.multiSelect && !this.singleSelect) {
            return;
          }

          if (this.items && !this.multiSelect) {
            if (this.selectedValue != undefined) {
              var chip = _toConsumableArray(this.shadowRoot.querySelectorAll("avl-chips-chip"));

              if (chip.length != 0) {
                var index = chip.findIndex(function (x) {
                  return x.value == _this3.selectedValue;
                });

                if (chip[index] && chip[index].disabled !== true) {
                  chip[index].checked = true;
                  this.selectedIndex = index;
                }
              }
            } else {
              this.selectedIndex = -1;
            }
          }
        }
      }, {
        key: "selectedIndexChange",
        value: function selectedIndexChange() {
          if (!this.multiSelect && !this.singleSelect) {
            return;
          }

          if (this.items && !this.multiSelect) {
            var chip = _toConsumableArray(this.shadowRoot.querySelectorAll("avl-chips-chip"));

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
      }, {
        key: "selectedValuesChanged",
        value: function selectedValuesChanged() {
          var _this4 = this;

          if (!this.multiSelect && !this.singleSelect) {
            return;
          }

          if (this.multiSelect && this.items) {
            var newSelectedIndexes = [];

            if (this.items.length != 0) {
              for (var i = 0; i < this.items.length; i++) {
                if (this.selectedValues.find(function (x) {
                  return x == _this4.items[i];
                })) {
                  newSelectedIndexes.push(i);
                }
              }
            }

            if (!this.arraysEqual(this.selectedIndexes, newSelectedIndexes)) {
              var _this$selectedIndexes;

              (_this$selectedIndexes = this.selectedIndexes).splice.apply(_this$selectedIndexes, [0, this.selectedIndexes.length].concat(newSelectedIndexes));

              this.refreshSelectedIndexes();
            }
          }
        }
      }, {
        key: "selectedIndexesChanged",
        value: function selectedIndexesChanged() {
          if (!this.multiSelect && !this.singleSelect) {
            return;
          }

          if (this.multiSelect && this.items) {
            var newSelectedValues = [];

            if (this.items.length != 0) {
              for (var i = 0; i < this.selectedIndexes.length; i++) {
                var index = this.selectedIndexes[i];

                if (index < this.items.length) {
                  newSelectedValues.push(this.items[index]);
                }
              }

              if (!this.arraysEqual(this.selectedValues, newSelectedValues)) {
                var _this$selectedValues;

                (_this$selectedValues = this.selectedValues).splice.apply(_this$selectedValues, [0, this.selectedValues.length].concat(newSelectedValues));

                this.refreshSelectedValues();
              }
            }

            var chips = _toConsumableArray(this.shadowRoot.querySelectorAll("avl-chips-chip"));

            this.ignoreCheckedEvents = true;

            for (var _i = 0; _i < chips.length; _i++) {
              if (this.selectedIndexes.indexOf(_i) != -1) {
                chips[_i].checked = true;
              } else {
                chips[_i].checked = false;
              }
            }

            this.ignoreCheckedEvents = false;
          }
        }
      }, {
        key: "chipSelected",
        value: function chipSelected(event) {
          if (!this.initialized || this.ignoreCheckedEvents) return;

          if (!this.multiSelect && !this.singleSelect) {
            return;
          }

          if (!this.multiSelect) {
            if (event.detail.value) {
              var index = this.findIndexOfValue(event.target.value);
              this.selectedIndex = index;
              this.selectedValue = event.target.value;
            } else if (event.target.value === this.selectedValue) {
              if (this.allowDeselection) {
                this.selectedIndex = -1;
                this.selectedValue = undefined;
              } else {
                this.selectedValueChange();
              }
            }
          } else {
            var _index = this.selectedValues.findIndex(function (x) {
              return x == event.target.value;
            });

            if (_index > -1) {
              this.selectedValues.splice(_index, 1);
              this.refreshSelectedValues();
            } else {
              this.selectedValues.push(event.target.value);
              this.refreshSelectedValues();
            }
          }
        }
      }, {
        key: "arraysEqual",
        value: function arraysEqual(a, b) {
          if (!a || !b) return false;
          if (a.length != b.length) return false;

          for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
          }

          return true;
        }
      }], [{
        key: "is",
        get: function get() {
          return 'avl-chip-list';
        }
      }, {
        key: "template",
        get: function get() {
          return _avl_chip_list_html__WEBPACK_IMPORTED_MODULE_1__["template"];
        }
      }, {
        key: "properties",
        get: function get() {
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
      }, {
        key: "observers",
        get: function get() {
          return ['selectedValuesChanged(selectedValues.splices)', 'selectedIndexesChanged(selectedIndexes.splices)'];
        }
      }]);

      return AvlChipListImpl;
    }(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

    customElements.define(AvlChipListImpl.is, AvlChipListImpl); //# sourceMappingURL=avl-chip-list.js.map

    /***/
  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.css.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.css.js ***!
    \***********************************************************************************/

  /*! exports provided: style */

  /***/
  function node_modulesAvlControlsCoreDistAvlChipsChipAvlChipsChipCssJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "style", function () {
      return style;
    });
    /* harmony import */


    var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer */
    "./node_modules/@polymer/polymer/polymer-element.js");

    var style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject5()); //# sourceMappingURL=avl-chips-chip.css.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.html.js":
  /*!************************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.html.js ***!
    \************************************************************************************/

  /*! exports provided: template */

  /***/
  function node_modulesAvlControlsCoreDistAvlChipsChipAvlChipsChipHtmlJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "template", function () {
      return template;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element.js */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_chips_chip_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-chips-chip.css */
    "./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.css.js");
    /* harmony import */


    var _all_initial_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../all-initial.css */
    "./node_modules/@avl-controls/core/dist/all-initial.css.js");
    /* harmony import */


    var _polymer_paper_ripple_paper_ripple_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @polymer/paper-ripple/paper-ripple.js */
    "./node_modules/@polymer/paper-ripple/paper-ripple.js");
    /* harmony import */


    var _avl_icon_avl_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../avl-icon/avl-icon */
    "./node_modules/@avl-controls/core/dist/avl-icon/avl-icon.js");

    var template = _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject6(), _all_initial_css__WEBPACK_IMPORTED_MODULE_2__["allInitial"], _avl_chips_chip_css__WEBPACK_IMPORTED_MODULE_1__["style"]); //# sourceMappingURL=avl-chips-chip.html.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.js ***!
    \*******************************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesAvlControlsCoreDistAvlChipsChipAvlChipsChipJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_chips_chip_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-chips-chip.html */
    "./node_modules/@avl-controls/core/dist/avl-chips-chip/avl-chips-chip.html.js");

    var AvlChipsChipImpl = /*#__PURE__*/function (_polymer_polymer_poly3) {
      _inherits(AvlChipsChipImpl, _polymer_polymer_poly3);

      var _super3 = _createSuper(AvlChipsChipImpl);

      function AvlChipsChipImpl() {
        var _this5;

        _classCallCheck(this, AvlChipsChipImpl);

        _this5 = _super3.apply(this, arguments);
        _this5.removeIcon = false;
        return _this5;
      }

      _createClass(AvlChipsChipImpl, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this6 = this;

          _get(_getPrototypeOf(AvlChipsChipImpl.prototype), "connectedCallback", this).call(this);

          this.addEventListener('keydown', function (event) {
            if (event.key == ' ' || event.key == 'Enter') {
              _this6.onPressed();

              _this6.toggleChecked();
            }
          });
          this.addEventListener('focusin', function () {
            _this6.focused = true;
          });
          this.addEventListener('focusout', function () {
            _this6.focused = false;
          });
          this.addEventListener('mouseup', function () {
            if (!_this6.disabled) {
              _this6.onUnpressed();
            }
          });
          this.addEventListener('mousedown', function () {
            if (!_this6.disabled) {
              _this6.onPressed();

              _this6.toggleChecked();
            }
          });
        }
      }, {
        key: "tabIndexChanged",
        value: function tabIndexChanged() {
          this.tabindex = this.readonly || this.disabled ? -1 : 0;
        }
      }, {
        key: "toggleChecked",
        value: function toggleChecked() {
          if (!this.disabled && !this.notSelectable) {
            this.checked = !this.checked;
          }
        }
      }, {
        key: "onUnpressed",
        value: function onUnpressed(event) {
          if (this.active) {
            this.active = false;
          }
        }
      }, {
        key: "onPressed",
        value: function onPressed() {
          if (!this.disabled) this.active = true;
        }
      }, {
        key: "hasThumbnail",
        value: function hasThumbnail() {
          return this.thumbnailIcon != null || this.thumbnailImage != null;
        }
      }, {
        key: "hasRemoveIcon",
        value: function hasRemoveIcon() {
          return this.removeIcon;
        }
      }, {
        key: "removeIconClicked",
        value: function removeIconClicked(e) {
          this.dispatchEvent(new CustomEvent('chips-removed', {
            detail: e.detail
          }));
        }
      }, {
        key: "invalidChanged",
        value: function invalidChanged(value) {
          this.dispatchEvent(new CustomEvent('chips-invalid-changed', {
            detail: value
          }));
        }
      }], [{
        key: "is",
        get: function get() {
          return 'avl-chips-chip';
        }
      }, {
        key: "template",
        get: function get() {
          return _avl_chips_chip_html__WEBPACK_IMPORTED_MODULE_1__["template"];
        }
      }, {
        key: "properties",
        get: function get() {
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
              reflectToAttribute: true
            },
            active: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
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
              reflectToAttribute: true
            },
            label: {
              type: String,
              reflectToAttribute: true
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
              type: String
            },
            removeIcon: {
              type: Boolean,
              reflectToAttribute: true
            },
            thumbnailImage: {
              type: String
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
      }]);

      return AvlChipsChipImpl;
    }(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

    customElements.define(AvlChipsChipImpl.is, AvlChipsChipImpl); //# sourceMappingURL=avl-chips-chip.js.map

    /***/
  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-list/avl-list.css.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-list/avl-list.css.js ***!
    \***********************************************************************/

  /*! exports provided: style */

  /***/
  function node_modulesAvlControlsCoreDistAvlListAvlListCssJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "style", function () {
      return style;
    });
    /* harmony import */


    var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer */
    "./node_modules/@polymer/polymer/polymer-element.js");

    var style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject7()); //# sourceMappingURL=avl-list.css.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-list/avl-list.html.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-list/avl-list.html.js ***!
    \************************************************************************/

  /*! exports provided: template */

  /***/
  function node_modulesAvlControlsCoreDistAvlListAvlListHtmlJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "template", function () {
      return template;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_list_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-list.css */
    "./node_modules/@avl-controls/core/dist/avl-list/avl-list.css.js");
    /* harmony import */


    var _all_initial_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../all-initial.css */
    "./node_modules/@avl-controls/core/dist/all-initial.css.js");
    /* harmony import */


    var _avl_item_avl_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../avl-item/avl-item */
    "./node_modules/@avl-controls/core/dist/avl-item/avl-item.js");
    /* harmony import */


    var _avl_overflow_menu_avl_overflow_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../avl-overflow-menu/avl-overflow-menu */
    "./node_modules/@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu.js");
    /* harmony import */


    var _avl_icon_button_avl_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../avl-icon-button/avl-icon-button */
    "./node_modules/@avl-controls/core/dist/avl-icon-button/avl-icon-button.js");
    /* harmony import */


    var _avl_icon_avl_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../avl-icon/avl-icon */
    "./node_modules/@avl-controls/core/dist/avl-icon/avl-icon.js");

    var template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject8(), _all_initial_css__WEBPACK_IMPORTED_MODULE_2__["allInitial"], _avl_list_css__WEBPACK_IMPORTED_MODULE_1__["style"]); //# sourceMappingURL=avl-list.html.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-list/avl-list.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-list/avl-list.js ***!
    \*******************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesAvlControlsCoreDistAvlListAvlListJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _drag_and_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./drag-and-drop */
    "./node_modules/@avl-controls/core/dist/avl-list/drag-and-drop.js");
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_list_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./avl-list.html */
    "./node_modules/@avl-controls/core/dist/avl-list/avl-list.html.js");

    var AvlListImpl = /*#__PURE__*/function (_polymer_polymer_poly4) {
      _inherits(AvlListImpl, _polymer_polymer_poly4);

      var _super4 = _createSuper(AvlListImpl);

      function AvlListImpl() {
        var _this7;

        _classCallCheck(this, AvlListImpl);

        _this7 = _super4.apply(this, arguments);
        _this7.selectedIndex = -1;
        _this7.tabindex = 0;
        _this7.visibleRows = [];
        _this7.rows = [];
        _this7.totalRows = 0;
        _this7.cachedRows = [];
        _this7.cachedRowHeights = [];
        _this7.pageCached = {};
        _this7.pageSize = 10;
        _this7.defaultItemHeight = 48;
        _this7.fakeFocus = false;
        _this7.fakeFocusIndex = -1;
        _this7.focusedIndex = -1;
        _this7._selectedIndexes = {
          values: [],
          locked: false,
          set: false
        };
        _this7._selectedValues = {
          values: [],
          locked: false,
          set: false
        };

        _this7.hideDraggedElement = function () {
          var itemElements = _toConsumableArray(_this7.$.itemContainer.querySelectorAll('avl-item'));

          var _iterator = _createForOfIteratorHelper(itemElements),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var itemEl = _step.value;

              if (_this7.dnd && itemEl['value'] === _this7.dnd.draggedRow) {
                itemEl.style.display = 'none';
              } else {
                itemEl.style.display = 'block';
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        };

        return _this7;
      }

      _createClass(AvlListImpl, [{
        key: "unlock",
        value: function unlock() {
          if (this._selectedValues.locked && this._selectedIndexes.locked) {
            this._selectedIndexes.locked = false;
            this._selectedValues.locked = false;
          }

          this.selectRows();
        }
      }, {
        key: "selectedValuesChanged",
        value: function selectedValuesChanged() {
          var _this8 = this;

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
            this._selectedIndexes.values = this.selectedValues.map(function (val) {
              return _this8.rows.indexOf(val);
            });

            if (!this._selectedIndexes.locked) {
              this.selectedIndexes = this._selectedIndexes.values;
              this.unlock();
            }
          }
        }
      }, {
        key: "selectedIndexesChanged",
        value: function selectedIndexesChanged() {
          var _this9 = this;

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
            this._selectedValues.values = this.selectedIndexes.map(function (index) {
              return _this9.rows[index];
            });

            if (!this._selectedValues.locked) {
              this.selectedValues = this._selectedValues.values;
              this.unlock();
            }
          }
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this10 = this;

          _get(_getPrototypeOf(AvlListImpl.prototype), "connectedCallback", this).call(this);

          this.initDnd(); // change focussed state

          this.addEventListener('focusin', function (e) {
            if (!_this10.readonly) _this10.focused = true;
          });
          this.addEventListener('focusout', function (e) {
            _this10.focused = false;
          });
          this.addEventListener('keydown', function (e) {
            switch (e.key) {
              case 'Up':
              case 'ArrowUp':
                e.preventDefault();
                _this10.focusedIndex = Math.max(0, _this10.focusedIndex - 1);

                _this10.scrollItemIntoView(_this10.focusedIndex);

                _this10.focusItem(_this10.focusedIndex);

                break;

              case 'Down':
              case 'ArrowDown':
                e.preventDefault();
                _this10.focusedIndex = Math.min(_this10.totalRows - 1, _this10.focusedIndex + 1);

                _this10.scrollItemIntoView(_this10.focusedIndex);

                _this10.focusItem(_this10.focusedIndex);

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
            this.waitForRender(this).then(function () {
              var itemHeight = _this10.shadowRoot.querySelector('#scrollable').children[0].querySelector('avl-item').scrollHeight;

              var index = _this10.rows.findIndex(function (r) {
                return r.label == _this10.activeRow.label;
              });

              _this10.shadowRoot.querySelector('#scrollable').scrollTop = itemHeight * index;
            });
          }
        }
      }, {
        key: "waitForRender",
        value: function waitForRender(el) {
          return new Promise(function (resolve, reject) {
            var interval = setInterval(function () {
              if (el.shadowRoot.querySelector('#itemPositioner').childElementCount > 1) {
                clearInterval(interval);
                resolve();
              }
            }, 100);
          });
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(AvlListImpl.prototype), 'disconnectedCallback', this).call(this);

          if (this.dnd) this.dnd.destruct();
        }
      }, {
        key: "focus",
        value: function focus() {
          var itemElements = _toConsumableArray(this.$.itemContainer.querySelectorAll('avl-item'));

          if (itemElements.length) {
            itemElements[0].focus();
          }
        }
      }, {
        key: "fakeFocusNext",
        value: function fakeFocusNext() {
          if (!this.fakeFocus) return;
          this.resetFakeFocus();
          var itemElements = this.$.itemContainer.querySelectorAll('avl-item');
          this.fakeFocusIndex = Math.min(this.totalRows - 1, this.fakeFocusIndex + 1);
          this.scrollItemIntoView(this.fakeFocusIndex);
          var item = itemElements[this.fakeFocusIndex - this.currentFirstIndex];

          if (item) {
            item.fakeFocus = true;
          }
        }
      }, {
        key: "fakeFocusPrevious",
        value: function fakeFocusPrevious() {
          if (!this.fakeFocus) return;
          this.resetFakeFocus();
          var itemElements = this.$.itemContainer.querySelectorAll('avl-item');
          this.fakeFocusIndex = Math.max(0, this.fakeFocusIndex - 1);
          this.scrollItemIntoView(this.fakeFocusIndex);
          var item = itemElements[this.fakeFocusIndex - this.currentFirstIndex];

          if (item) {
            item.fakeFocus = true;
          }
        }
      }, {
        key: "getFakeFocusRow",
        value: function getFakeFocusRow() {
          return this.cachedRows[this.fakeFocusIndex];
        }
      }, {
        key: "itemClick",
        value: function itemClick(e) {
          var item = e.target;
          if (item.tagName.toLowerCase() != 'avl-item') return;
          this.itemSelect(item);
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            var item = e.target;
            if (item.tagName.toLowerCase() != 'avl-item') return;
            this.itemSelect(item);
          }
        }
      }, {
        key: "itemSelect",
        value: function itemSelect(item) {
          var value = item.value;

          if (!item.disabled && !item.readonly && this.singleSelect) {
            this.selectedValue = value;
            item.checked = true;
          } else if (!item.disabled && !item.readonly && this.multiSelect && this.allowActiveRow) {
            this.activeRow = value;
          }
        }
      }, {
        key: "activeRowChanged",
        value: function activeRowChanged() {
          this.selectAndFocusCorrectItem();
        }
      }, {
        key: "selectionCheckboxClicked",
        value: function selectionCheckboxClicked(event) {
          var item = event.target;

          if (!item.disabled && !item.readonly && this.multiSelect) {
            if (item.selectableWithCheckboxChecked) {
              if (!this.selectedValues) {
                this.selectedValues = [item.value];
              } else {
                this.selectedValues.push(item.value);
                this.selectedValues = this.selectedValues.slice();
              }
            } else {
              this.selectedValues = this.selectedValues.filter(function (x) {
                return x !== item.value;
              });
            }
          }

          this.selectAndFocusCorrectItem();
        }
      }, {
        key: "rightCheckboxValueChanged",
        value: function rightCheckboxValueChanged(e) {
          var row = e.target['value'];
          this.dispatchEvent(new CustomEvent('right-checkbox-changed', {
            detail: {
              value: e.detail.value,
              row: row
            }
          }));
        }
      }, {
        key: "overflowMenuItemClicked",
        value: function overflowMenuItemClicked(e) {
          var row = e.target['row'];
          this.dispatchEvent(new CustomEvent('overflow-menu-item-clicked', {
            detail: {
              item: e.detail,
              row: row
            }
          }));
        }
      }, {
        key: "scrollItemIntoView",
        value: function scrollItemIntoView(index) {
          if (index < 0 || index > this.totalRows) return;
          var item = this.cachedRows[index];

          if (item) {
            var itemElements = _toConsumableArray(this.$.itemContainer.querySelectorAll('avl-item'));

            var itemEl = itemElements.find(function (el) {
              return el.value == item;
            });

            if (!itemEl) {
              this.$.scrollable.scrollTop = Math.min(Math.max(0, this.getItemPosition(index)), this.getTotalHeight());
            }
          }
        }
      }, {
        key: "focusItem",
        value: function focusItem(index) {
          if (index < 0 || index > this.totalRows) return;
          var item = this.cachedRows[index];

          if (item) {
            var itemElements = _toConsumableArray(this.$.itemContainer.querySelectorAll('avl-item'));

            var itemEl = itemElements.find(function (el) {
              return el.value == item;
            });

            if (itemEl) {
              if (!itemEl.focused) {
                itemEl.focus();
              }
            } else {
              this.$.dummyFocusable.focus();
            }
          }
        }
      }, {
        key: "itemFocusedChanged",
        value: function itemFocusedChanged(e) {
          if (e.detail.value) {
            this.focusedIndex = this.cachedRows.findIndex(function (row) {
              return row == e.target.value;
            });
          }
        }
      }, {
        key: "handleScroll",
        value: function handleScroll(e) {
          this.prepareVisibleRows();
          this.selectAndFocusCorrectItem();
          this.dnd.scrollableScroll(e);
        }
      }, {
        key: "getTotalHeight",
        value: function getTotalHeight() {
          var height = 0;

          for (var i = 0; i < this.totalRows; ++i) {
            if (this.cachedRowHeights[i] !== undefined) {
              height += this.cachedRowHeights[i];
            } else {
              height += this.defaultItemHeight;
            }
          }

          return height;
        }
      }, {
        key: "getItemPosition",
        value: function getItemPosition(index) {
          var position = 0;

          for (var i = 0; i < index; ++i) {
            if (this.cachedRowHeights[i] !== undefined) {
              position += this.cachedRowHeights[i];
            } else {
              position += this.defaultItemHeight;
            }
          }

          return position;
        }
      }, {
        key: "getFirstVisibleIndex",
        value: function getFirstVisibleIndex(scrollTop) {
          var currentHeight = 0;

          for (var i = 0; i < this.totalRows; ++i) {
            if (this.cachedRowHeights[i] !== undefined) {
              currentHeight += this.cachedRowHeights[i];
            } else {
              currentHeight += this.defaultItemHeight;
            }

            if (currentHeight > scrollTop) {
              return i;
            }
          }

          return this.totalRows;
        }
      }, {
        key: "getLastVisibleIndex",
        value: function getLastVisibleIndex(height, firstIndex) {
          var currentHeight = 0;

          for (var i = firstIndex; i < this.totalRows; ++i) {
            if (this.cachedRowHeights[i] !== undefined) {
              currentHeight += this.cachedRowHeights[i];
            } else {
              currentHeight += this.defaultItemHeight;
            }

            if (currentHeight > height) {
              return i + 1;
            }
          }

          return this.totalRows;
        }
      }, {
        key: "prepareVisibleRows",
        value: function prepareVisibleRows() {
          this.$.itemContainer.style.height = "".concat(this.getTotalHeight(), "px");
          var firstIndex = this.getFirstVisibleIndex(this.$.scrollable.scrollTop);
          var lastIndex = this.getLastVisibleIndex(this.$.scrollable.clientHeight, firstIndex);
          this.currentFirstIndex = firstIndex;
          this.getRows(firstIndex, lastIndex - firstIndex);
          this.visibleRows = this.cachedRows.slice(firstIndex, lastIndex);
          this.$.itemPositioner.style.top = "".concat(this.getItemPosition(firstIndex), "px");
        }
      }, {
        key: "selectRows",
        value: function selectRows(itemElements) {
          var _this11 = this;

          if (!this.multiSelect) {
            return;
          }

          if (itemElements == null) {
            itemElements = _toConsumableArray(this.$.itemContainer.querySelectorAll('avl-item'));
          }

          if (this._selectedValues) {
            itemElements.forEach(function (el) {
              el.selectableWithCheckboxChecked = false;

              _this11._selectedValues.values.forEach(function (val) {
                if (el.value === val) {
                  el.selectableWithCheckboxChecked = true;
                }
              });
            });
          }
        }
      }, {
        key: "itemsRendered",
        value: function itemsRendered() {
          this.selectAndFocusCorrectItem();
          this.hideDraggedElement(); // update cached row heights

          var itemElements = _toConsumableArray(this.$.itemContainer.querySelectorAll('avl-item'));

          if (itemElements.length) {
            var startIndex = this.cachedRows.findIndex(function (row) {
              return row === itemElements[0].value;
            });

            for (var i = 0; i < itemElements.length; ++i) {
              if (this.dnd && itemElements[i].value !== this.dnd.draggedRow) {
                this.cachedRowHeights[startIndex + i] = itemElements[i].clientHeight;
              }
            }
          }

          this.selectRows(itemElements);

          if (this.fakeFocus) {
            var item = itemElements[0];
            if (item && item.fakeFocus) item.fakeFocus = false;

            if (item && this.currentFirstIndex === 0) {
              item.fakeFocus = true;
              this.fakeFocusIndex = 0;
              this.dispatchEvent(new CustomEvent('initial-fake-focus', {
                detail: {
                  value: item.value
                }
              }));
            }
          }

          if (this.fakeFocus) {
            this.resetFakeFocus();

            if (this.currentFirstIndex === 0 && this.fakeFocusIndex == -1) {
              var _item = itemElements[0];

              if (_item) {
                _item.fakeFocus = true;
                this.fakeFocusIndex = 0;
                this.dispatchEvent(new CustomEvent('initial-fake-focus', {
                  detail: {
                    value: _item.value
                  }
                }));
              }
            } else if (this.fakeFocusIndex !== -1) {
              var _item2 = itemElements[this.fakeFocusIndex - this.currentFirstIndex];

              if (_item2) {
                _item2.fakeFocus = true;
              }
            }
          }
        }
      }, {
        key: "rowsChanged",
        value: function rowsChanged() {
          var _this12 = this;

          this.dataProvider = function (params) {
            return new Promise(function (resolve) {
              /**
               * There's an issue in angular where an async pipe where gives you a null as an initial value:
               * https://github.com/angular/angular/issues/16982
               * So rows couldn't be used with an async pipe without this.
               */
              if (_this12.rows == null) {
                resolve({
                  rows: [],
                  totalRows: 0
                });
              } else {
                resolve({
                  rows: _this12.rows.slice(params.page * params.pageSize, (params.page + 1) * params.pageSize),
                  totalRows: _this12.rows.length
                });
              }
            });
          };
        }
      }, {
        key: "dataProviderChanged",
        value: function dataProviderChanged() {
          this.cachedRows = [];
          this.cachedRowHeights = [];
          this.pageCached = {};
          this.prepareVisibleRows();
        }
      }, {
        key: "pageSizeChanged",
        value: function pageSizeChanged() {
          this.dataProviderChanged();
        }
      }, {
        key: "selectAndFocusCorrectItem",
        value: function selectAndFocusCorrectItem() {
          var itemElements = _toConsumableArray(this.$.itemContainer.querySelectorAll('avl-item'));

          var _iterator2 = _createForOfIteratorHelper(itemElements),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var itemEl = _step2.value;

              if (this.singleSelect) {
                itemEl.checked = itemEl.value === this.selectedValue;
              } else if (this.multiSelect) {
                itemEl.checked = itemEl.value === this.activeRow;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.focusItem(this.focusedIndex);
        }
      }, {
        key: "selectedValueChanged",
        value: function selectedValueChanged() {
          if (!this.cachedRows) return;

          for (var i = 0; i < this.cachedRows.length; ++i) {
            if (this.cachedRows[i] === this.selectedValue) {
              this.selectedIndex = i;
              break;
            }
          }

          this.selectAndFocusCorrectItem();
          this.resetFakeFocus();
          this.fakeFocusIndex = -1;
        }
      }, {
        key: "selectedIndexChanged",
        value: function selectedIndexChanged() {
          if (!this.cachedRows || this.selectedIndex == undefined) return;

          if (this.cachedRows[this.selectedIndex]) {
            this.selectedValue = this.cachedRows[this.selectedIndex];
          }
        }
      }, {
        key: "resetFakeFocus",
        value: function resetFakeFocus() {
          var itemElements = _toConsumableArray(this.$.itemContainer.querySelectorAll('avl-item'));

          var _iterator3 = _createForOfIteratorHelper(itemElements),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var item = _step3.value;

              if (item.fakeFocus) {
                item.fakeFocus = false;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, {
        key: "disabledChanged",
        value: function disabledChanged() {
          this.tabindex = this.disabled || this.readonly ? -1 : 0;
        }
      }, {
        key: "fakeFocusChanged",
        value: function fakeFocusChanged(val) {
          if (val) {
            this.setAttribute('tabindex', '-1');
          }
        }
      }, {
        key: "multiSelectChanged",
        value: function multiSelectChanged() {}
      }, {
        key: "singleSelectChanged",
        value: function singleSelectChanged() {
          this.selectAndFocusCorrectItem();
        }
      }, {
        key: "getRows",
        value: function getRows(start, n) {
          var _this13 = this;

          if (!this.dataProvider) return;

          var _loop = function _loop(page) {
            if (!_this13.pageCached[page]) {
              _this13.pageCached[page] = true;

              _this13.dataProvider({
                page: page,
                pageSize: _this13.pageSize
              }).then(function (res) {
                var rows = res.rows;
                var totalRows = res.totalRows;

                for (var j = 0; j < rows.length; ++j) {
                  _this13.cachedRows[page * _this13.pageSize + j] = rows[j];
                }

                _this13.totalRows = totalRows;

                _this13.prepareVisibleRows(); // check if some of the newly fetched items are selected


                if (_this13.singleSelect) {
                  if (_this13.selectedValue) {
                    _this13.selectedValueChanged();
                  } else if (_this13.selectedIndex != -1) {
                    _this13.selectedIndexChanged();
                  }
                }

                if (_this13.multiSelect) {
                  if (_this13.selectedValues && _this13.selectedValues.length > 0) {
                    _this13._selectedIndexes.locked = true;

                    _this13.selectedValuesChanged();

                    _this13._selectedIndexes.locked = false;
                  } else if (_this13.selectedIndexes && _this13.selectedIndexes.length > 0) {
                    _this13._selectedValues.locked = true;

                    _this13.selectedIndexesChanged();

                    _this13._selectedIndexes.locked = false;
                  }
                }
              });
            }
          };

          for (var page = Math.floor(start / this.pageSize); page < Math.floor((start + n) / this.pageSize) + 1; ++page) {
            _loop(page);
          }
        }
      }, {
        key: "initDnd",
        value: function initDnd() {
          var _this14 = this;

          this.dnd = new _drag_and_drop__WEBPACK_IMPORTED_MODULE_0__["DragAndDrop"](function () {
            return _this14.$.itemsTemplate.render();
          }, function () {
            _this14.focusedIndex = -1;

            _this14.$.dummyFocusable.focus();
          }, function (draggedRow, dragoverRow, before) {
            if (!draggedRow || !dragoverRow) return;

            var oldIndex = _this14.cachedRows.indexOf(draggedRow);

            var insertIndex = _this14.cachedRows.indexOf(dragoverRow);

            if (!before) {
              insertIndex++;
            }

            var newCachedRows = _this14.cachedRows.slice();

            newCachedRows.splice(oldIndex, 1, null);
            newCachedRows.splice(insertIndex, 0, draggedRow);
            newCachedRows.splice(newCachedRows.indexOf(null), 1);
            var newIndex = newCachedRows.indexOf(draggedRow);

            if (_this14.rows.length > 0) {
              _this14.splice.apply(_this14, ['rows', 0, newCachedRows.length].concat(_toConsumableArray(newCachedRows)));
            }

            if (newIndex !== oldIndex) {
              _this14.cachedRows = newCachedRows;

              _this14.prepareVisibleRows();

              _this14.dispatchEvent(new CustomEvent('row-reordered', {
                detail: {
                  row: draggedRow,
                  index: newIndex,
                  oldIndex: oldIndex
                }
              }));

              if (_this14.singleSelect) {
                _this14.selectedValueChanged();
              } else if (_this14.multiSelect) {
                _this14.selectedValuesChanged();
              }
            }
          }, function (dy) {
            return _this14.$.scrollable.scrollTop = Math.min(Math.max(0, _this14.$.scrollable.scrollTop + dy), _this14.getTotalHeight());
          }, this.hideDraggedElement, function () {
            return _toConsumableArray(_this14.$.itemContainer.querySelectorAll('avl-item'));
          }, this.$.draggedElementContainer, this.$.scrollable);
          this.dnd.disabled = !this.dragAndDrop || this.readonly;
          this.dndItemMousedown = this.dnd.itemMousedown;
          this.dndItemMousemove = this.dnd.itemMousemove;
        } // prevents ghost image dragging

      }, {
        key: "dragstart",
        value: function dragstart(e) {
          e.preventDefault();
          return false;
        }
      }, {
        key: "dragAndDropChanged",
        value: function dragAndDropChanged() {
          if (this.dnd) {
            this.dnd.disabled = !this.dragAndDrop;
          }
        }
      }, {
        key: "isDraggedRow",
        value: function isDraggedRow(item) {
          return this.dnd && this.dnd.dragging && item === this.dnd.draggedRow;
        }
      }, {
        key: "isDragoverRow",
        value: function isDragoverRow(item) {
          return this.dnd && this.dnd.dragging && item === this.dnd.dragoverRow;
        }
      }, {
        key: "isDndBefore",
        value: function isDndBefore(before) {
          return before;
        }
      }, {
        key: "isNohover",
        value: function isNohover() {
          return this.dnd && this.dnd.dragging;
        }
      }, {
        key: "isDisabled",
        value: function isDisabled(itemDisabled) {
          return itemDisabled || this.disabled;
        }
      }, {
        key: "isReadonly",
        value: function isReadonly(itemReadonly) {
          return itemReadonly || this.readonly;
        }
      }, {
        key: "hasOverflowMenu",
        value: function hasOverflowMenu() {
          return this.overflowMenuItems && this.overflowMenuItems.length;
        }
      }, {
        key: "hasRightCheckbox",
        value: function hasRightCheckbox(item) {
          if (item) return item.rightCheckbox !== undefined;else return false;
        }
      }, {
        key: "arraysEqual",
        value: function arraysEqual(a, b) {
          if (!a || !b) return false;
          if (a.length != b.length) return false;

          for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
          }

          return true;
        }
      }], [{
        key: "is",
        get: function get() {
          return 'avl-list';
        }
      }, {
        key: "template",
        get: function get() {
          return _avl_list_html__WEBPACK_IMPORTED_MODULE_2__["template"];
        }
      }, {
        key: "properties",
        get: function get() {
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
              notify: true
            },
            _selectedIndexes: {
              type: Array,
              notify: true
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
              observer: 'dragAndDropChanged'
            },
            dragIndicator: {
              type: Boolean
            },
            fakeFocus: {
              type: Boolean,
              observer: 'fakeFocusChanged'
            }
          };
        }
      }]);

      return AvlListImpl;
    }(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

    customElements.define(AvlListImpl.is, AvlListImpl); //# sourceMappingURL=avl-list.js.map

    /***/
  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-list/drag-and-drop.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-list/drag-and-drop.js ***!
    \************************************************************************/

  /*! exports provided: DragAndDrop */

  /***/
  function node_modulesAvlControlsCoreDistAvlListDragAndDropJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragAndDrop", function () {
      return DragAndDrop;
    });

    var DragAndDrop = /*#__PURE__*/function () {
      function DragAndDrop(rerender, dragStartCallback, dropCallback, scrollBy, hideDraggedElement, getItemElements, draggedElementContainer, scrollable) {
        var _this15 = this;

        _classCallCheck(this, DragAndDrop);

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

        this.itemMousemove = function (e) {
          if (window.matchMedia('(pointer:coarse)').matches) {
            if (!_this15.dragging) return;

            if (window['TouchEvent'] && e instanceof TouchEvent) {
              // prevent scrolling
              e.preventDefault();
              _this15.lastX = e.touches[0].clientX;
              _this15.lastY = e.touches[0].clientY;
            }

            _this15.scrollableMousemove(e);

            _this15.refreshDragoverRow();
          } else {
            if (e instanceof MouseEvent) {
              _this15.lastX = e.clientX;
              _this15.lastY = e.clientY;

              if (_this15.draggedElement) {
                _this15.hideDraggedElement();

                _this15.refreshDragoverRow();
              } else if (Math.pow(_this15.lastX - _this15.dragStartX, 2) + Math.pow(_this15.lastY - _this15.dragStartY, 2) > 25) {
                _this15.predragging = true;
                if (_this15.disabled) return;
                var item = e.target;
                if (item.tagName.toLowerCase() != 'avl-item') return;
                _this15.predragging = false;
                _this15.dragging = true;
                _this15.notDraggedYet = true;

                _this15.dragStartCallback(); // clone item element


                _this15.draggedRow = item['value'];
                var clonedItem = item.cloneNode(true);
                var propertiesToCopy = Object.keys(customElements.get('avl-item').properties);

                for (var _i2 = 0, _propertiesToCopy = propertiesToCopy; _i2 < _propertiesToCopy.length; _i2++) {
                  var prop = _propertiesToCopy[_i2];
                  clonedItem[prop] = item[prop];
                }

                clonedItem.style.width = "".concat(item.clientWidth, "px");
                clonedItem.style.cursor = 'inherit';
                clonedItem.style.zIndex = '2000'; // prevents ghost image dragging

                clonedItem.addEventListener('dragstart', function (e) {
                  e.preventDefault();
                  return false;
                });
                _this15.draggedElement = document.createElement('div'); //get parent avl-list

                var child = item.parentElement.parentElement.parentElement;
                var list = child.__dataHost;

                if (list.hasAttribute('drag-indicator') && !list.hasOverflowMenu()) {
                  var dragIcon = document.createElement('avl-icon');
                  dragIcon.setAttribute('icon', 'custom-icons:drag-handle-icon');
                  dragIcon.id = 'dragIcon';
                  var styles = {
                    paddingLeft: '',
                    "float": 'right',
                    paddingRight: '24px',
                    paddingTop: '12px',
                    color: 'var(--avl-item-iron-color, var(--avl-emphasis-medium-color))',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    flex: '0 0 auto'
                  };
                  Object.assign(dragIcon.style, styles);

                  _this15.draggedElement.appendChild(dragIcon);
                }

                _this15.draggedElement.style.backgroundColor = 'var(--avl-background-color)';

                _this15.draggedElement.appendChild(clonedItem);

                _this15.draggedElementContainer.appendChild(_this15.draggedElement);

                clonedItem.setAttribute('pressed', '');
                _this15.draggedElement.style.position = 'fixed';
                _this15.draggedElement.style.touchAction = 'none';
                _this15.draggedElement.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
                var itemRect = item.getBoundingClientRect();
                var top = itemRect.top;
                var left = itemRect.left;

                if (e instanceof MouseEvent) {
                  _this15.dragOffsetY = e.y - top;
                  _this15.dragOffsetX = e.x - left; // so that grabbing the bottom half doesn't displace the next element

                  _this15.lastY = top + 1;
                  _this15.lastX = left + 1;
                }
              }

              _this15.scrollableMousemove(e);
            }
          }
        };

        this.itemMousedown = function (e) {
          if (window.matchMedia('(pointer:coarse)').matches) {
            if (_this15.disabled) return;
            var item = e.target;
            if (item.tagName.toLowerCase() != 'avl-item') return;
            _this15.predragging = true;
            _this15.predragTimeout = window.setTimeout(function () {
              if (_this15.predragging) {
                _this15.predragging = false;
                _this15.dragging = true;
                _this15.notDraggedYet = true;

                _this15.dragStartCallback(); // clone item element


                _this15.draggedRow = item['value'];
                var clonedItem = item.cloneNode(true);
                var propertiesToCopy = Object.keys(customElements.get('avl-item').properties);

                for (var _i3 = 0, _propertiesToCopy2 = propertiesToCopy; _i3 < _propertiesToCopy2.length; _i3++) {
                  var prop = _propertiesToCopy2[_i3];
                  clonedItem[prop] = item[prop];
                }

                clonedItem.style.width = "".concat(item.clientWidth, "px");
                clonedItem.style.cursor = 'inherit';
                clonedItem.style.zIndex = '2000'; // prevents ghost image dragging

                clonedItem.addEventListener('dragstart', function (e) {
                  e.preventDefault();
                  return false;
                });
                _this15.draggedElement = document.createElement('div');
                _this15.draggedElement.style.backgroundColor = 'var(--avl-background-color)';

                _this15.draggedElement.appendChild(clonedItem);

                _this15.draggedElementContainer.appendChild(_this15.draggedElement);

                clonedItem.setAttribute('pressed', '');
                _this15.draggedElement.style.position = 'fixed';
                _this15.draggedElement.style.touchAction = 'none';
                _this15.draggedElement.style.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
                var itemRect = item.getBoundingClientRect();
                var top = itemRect.top;
                var left = itemRect.left;

                if (window['TouchEvent'] && e instanceof TouchEvent) {
                  _this15.dragOffsetY = e.touches[0].clientY - top;
                  _this15.dragOffsetX = e.touches[0].clientX - left;
                } // so that grabbing the bottom half doesn't displace the next element


                _this15.lastY = top + 1;
                _this15.lastX = left + 1;

                _this15.hideDraggedElement();

                _this15.refreshDragoverRow();

                _this15.mouseMoveListener(e);
              }
            }, 500);
          } else {
            if (e instanceof MouseEvent) {
              _this15.dragStartX = e.clientX;
              _this15.dragStartY = e.clientY;
            }
          }

          document.addEventListener('mousemove', _this15.mouseMoveListener);
          document.addEventListener('touchmove', _this15.mouseMoveListener);
          document.addEventListener('mouseup', _this15.mouseupListener);
          document.addEventListener('touchend', _this15.mouseupListener);
          window.addEventListener('keydown', _this15.escapeListener);
          window.addEventListener('blur', _this15.cancelDrag);
        };

        this.scrollableMousemove = function (e) {
          if (!_this15.dragging) return;
          var y;

          if (e instanceof MouseEvent) {
            y = e.y;
          } else if (window['TouchEvent'] && e instanceof TouchEvent) {
            y = e.touches[0].clientY;
          }

          var scrollRect = _this15.scrollable.getBoundingClientRect();

          var top = scrollRect.top;
          var bottom = scrollRect.bottom;

          if (y > bottom - 30) {
            if (_this15.dragScrollInterval == undefined) {
              _this15.scrollSpeed = 5;
              _this15.dragScrollInterval = window.setInterval(function () {
                _this15.scrollSpeed = Math.min(_this15.scrollSpeed + 3, 40);

                _this15.scrollBy(_this15.scrollSpeed);
              }, 150);
            }
          } else if (y < top + 30) {
            if (_this15.dragScrollInterval == undefined) {
              _this15.scrollSpeed = 5;
              _this15.dragScrollInterval = window.setInterval(function () {
                _this15.scrollSpeed = Math.min(_this15.scrollSpeed + 3, 40);

                _this15.scrollBy(-_this15.scrollSpeed);
              }, 150);
            }
          } else {
            if (_this15.dragScrollInterval !== undefined) {
              clearInterval(_this15.dragScrollInterval);
              _this15.dragScrollInterval = undefined;
            }
          }
        };

        this.mouseMoveListener = function (e) {
          if (_this15.predragging) {
            _this15.cancelDrag();

            return;
          }

          if (!_this15.dragging) return;

          if (_this15.notDraggedYet) {
            _this15.draggedElement.style.cursor = 'grab';
            _this15.notDraggedYet = false;
          } else {
            _this15.draggedElement.style.cursor = 'grabbing';
          }

          if (e instanceof MouseEvent) {
            _this15.draggedElement.style.top = "".concat(e.y - _this15.dragOffsetY, "px");
            _this15.draggedElement.style.left = "".concat(e.x - _this15.dragOffsetX, "px");
          } else if (window['TouchEvent'] && e instanceof TouchEvent) {
            _this15.draggedElement.style.top = "".concat(e.touches[0].clientY - _this15.dragOffsetY, "px");
            _this15.draggedElement.style.left = "".concat(e.touches[0].clientX - _this15.dragOffsetX, "px");
          }
        };

        this.mouseupListener = function (e) {
          _this15.removeDragListeners();

          if (_this15.dragging) {
            _this15.dropCallback(_this15.draggedRow, _this15.dragoverRow, _this15.dragoverBefore);
          }

          _this15.resetDrag();
        };

        this.cancelDrag = function () {
          _this15.removeDragListeners();

          _this15.resetDrag();
        };

        this.escapeListener = function (e) {
          switch (e.key) {
            case 'Esc':
            case 'Escape':
              _this15.cancelDrag();

              break;
          }
        };
      }

      _createClass(DragAndDrop, [{
        key: "destruct",
        value: function destruct() {
          this.cancelDrag();
        }
      }, {
        key: "scrollableScroll",
        value: function scrollableScroll(e) {
          this.refreshDragoverRow();
        }
      }, {
        key: "refreshDragoverRow",
        value: function refreshDragoverRow() {
          var items = this.getItemElements();

          var _iterator4 = _createForOfIteratorHelper(items),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var item = _step4.value;

              if (this.pointInsideElement(this.lastX, this.lastY, item)) {
                this.dragoverRow = item['value'];
                var itemRect = item.getBoundingClientRect();
                var top = itemRect.top;
                var height = itemRect.height;
                this.dragoverBefore = this.lastY < top + height / 2;
                this.rerender();
                return;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          if (this.notDraggedYet) {
            this.dragoverBefore = false;
            this.dragoverRow = items[items.length - 1]['value'];
            this.rerender();
          }
        }
      }, {
        key: "resetDrag",
        value: function resetDrag() {
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
      }, {
        key: "removeDragListeners",
        value: function removeDragListeners() {
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
      }, {
        key: "pointInsideElement",
        value: function pointInsideElement(x, y, element) {
          var rect = element.getBoundingClientRect();
          return x > rect.left && x < rect.right && y > rect.top && y < rect.bottom;
        }
      }]);

      return DragAndDrop;
    }(); //# sourceMappingURL=drag-and-drop.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.css.js":
  /*!********************************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.css.js ***!
    \********************************************************************************************/

  /*! exports provided: style */

  /***/
  function node_modulesAvlControlsCoreDistAvlUploadAvlFileViewAvlFileViewCssJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "style", function () {
      return style;
    });
    /* harmony import */


    var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer */
    "./node_modules/@polymer/polymer/polymer-element.js");

    var style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject9()); //# sourceMappingURL=avl-file-view.css.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.html.js":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.html.js ***!
    \*********************************************************************************************/

  /*! exports provided: template */

  /***/
  function node_modulesAvlControlsCoreDistAvlUploadAvlFileViewAvlFileViewHtmlJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "template", function () {
      return template;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_file_view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-file-view.css */
    "./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.css.js");
    /* harmony import */


    var _avl_upload_progress_avl_upload_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../avl-upload-progress/avl-upload-progress */
    "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.js");
    /* harmony import */


    var _avl_overflow_menu_avl_overflow_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../avl-overflow-menu/avl-overflow-menu */
    "./node_modules/@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu.js");
    /* harmony import */


    var _avl_icon_button_avl_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../avl-icon-button/avl-icon-button */
    "./node_modules/@avl-controls/core/dist/avl-icon-button/avl-icon-button.js"); //<link rel="import" href="../avl-upload-progress/avl-upload-progress.html">


    var template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject10(), _avl_file_view_css__WEBPACK_IMPORTED_MODULE_1__["style"]); //# sourceMappingURL=avl-file-view.html.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.js":
  /*!****************************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.js ***!
    \****************************************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesAvlControlsCoreDistAvlUploadAvlFileViewAvlFileViewJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_file_view_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-file-view.html */
    "./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.html.js");

    var AvlFileViewImpl = /*#__PURE__*/function (_polymer_polymer_poly5) {
      _inherits(AvlFileViewImpl, _polymer_polymer_poly5);

      var _super5 = _createSuper(AvlFileViewImpl);

      function AvlFileViewImpl() {
        var _this16;

        _classCallCheck(this, AvlFileViewImpl);

        _this16 = _super5.apply(this, arguments);
        _this16.percentage = 0;
        return _this16;
      }

      _createClass(AvlFileViewImpl, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this17 = this;

          _get(_getPrototypeOf(AvlFileViewImpl.prototype), "connectedCallback", this).call(this);

          this.resetMenuItems();
          this.addEventListener("focusin", function (event) {
            _this17.focused = true;
          });
          this.addEventListener("blur", function (event) {
            _this17.focused = false;
          });
          this.addEventListener('menu-item-clicked', function (event) {
            if (event.detail.item === _this17.retryMenuItem) {
              _this17.setFileStatus('notStarted');

              _this17.upload();
            }

            if (event.detail.item === _this17.downloadMenuItem && _this17.file.downloadUrl) {
              _this17.download(_this17.file.downloadUrl);
            }

            _this17.focus();
          });
          this.addEventListener('keydown', function (e) {
            if (e.key == 'Enter' || e.key == ' ') {
              var overflowMenu = _this17.shadowRoot.querySelectorAll('avl-overflow-menu');

              if (overflowMenu.length > 1) {
                overflowMenu[0].open = false;
                overflowMenu[1].open = true;
              } else overflowMenu[0].open = true;
            }
          });
          this.addEventListener('keydown', function (e) {
            if (e.key == 'Escapce' || e.key == 'Esc') {
              var overflowMenu = _this17.shadowRoot.querySelector('avl-overflow-menu');

              overflowMenu.open = false;
            }
          });
        }
        /* focused */

      }, {
        key: "focusedIn",
        value: function focusedIn() {
          this.focused = true;
        }
      }, {
        key: "focusedOut",
        value: function focusedOut() {
          this.focused = false;
        }
      }, {
        key: "setFileStatus",
        value: function setFileStatus(status) {
          this.file.status = status;
          this.set('_file.status', status);
          this.dispatchEvent(new CustomEvent('file-status-changed', {
            detail: {
              value: this.file.status
            }
          }));
        }
      }, {
        key: "download",
        value: function download(url) {
          var _this18 = this;

          this.service.downloadFile(url).then(function (blob) {
            var objectUrl = window.URL.createObjectURL(blob);
            _this18.$.downloadAnchor.href = objectUrl;
            _this18.$.downloadAnchor.target = '_blank';
            _this18.$.downloadAnchor.download = _this18.file.name;

            _this18.$.downloadAnchor.click();

            window.URL.revokeObjectURL(objectUrl);
          });
        }
      }, {
        key: "resetMenuItems",
        value: function resetMenuItems() {
          var _this19 = this;

          this.completeMenuItems = [this.downloadMenuItem, this.removeMenuItem];
          this.abortMenuItems = [this.retryMenuItem, this.removeMenuItem];
          this.failMenuItems = [this.retryMenuItem, this.removeMenuItem];

          if (this.additionalMenuItems) {
            Object.keys(this.additionalMenuItems).forEach(function (status) {
              if (['abort', 'fail', 'complete'].indexOf(status) !== -1) {
                _this19["".concat(status, "MenuItems")] = _this19["".concat(status, "MenuItems")].concat(_this19.additionalMenuItems["".concat(status)]);
              }
            });
          }
        }
      }, {
        key: "fileChanged",
        value: function fileChanged(file) {
          this._file = Object.assign({}, file);

          if (file && file.status === 'notStarted') {
            this.upload();
          }
        }
      }, {
        key: "upload",
        value: function upload() {
          this.abortUploadAction = this.service.uploadFile(this.file, this.target, this.onUploadProgress.bind(this), this.onComplete.bind(this), this.onError.bind(this));
          this.setFileStatus('uploading');
          this.dispatchEvent(new CustomEvent('upload-start', {
            detail: {
              value: this.file
            }
          }));
        }
      }, {
        key: "onUploadProgress",
        value: function onUploadProgress(progress) {
          if (progress.lengthComputable) {
            this.setUploadProgress(progress.loaded);
            this.percentage = 100 * (this.file.loaded / this.file.size);
          } else {
            this.indeterminateProgress = true;
          }
        }
      }, {
        key: "setUploadProgress",
        value: function setUploadProgress(loaded) {
          this.file.loaded = loaded;
          this.set('_file.loaded', loaded);
        }
      }, {
        key: "onComplete",
        value: function onComplete(downloadUrl) {
          this.setFileStatus('complete');

          if (downloadUrl) {
            this.setDownloadUrl(downloadUrl);
          }

          this.dispatchEvent(new CustomEvent('upload-complete', {
            detail: {
              value: this.file
            }
          }));
        }
      }, {
        key: "setDownloadUrl",
        value: function setDownloadUrl(url) {
          this.set('_file.downloadUrl', url);
          this.file.downloadUrl = url;
        }
      }, {
        key: "onError",
        value: function onError(errorResponse) {
          this.setFileStatus('fail');
          this.dispatchEvent(new CustomEvent('upload-fail', {
            detail: {
              value: this.file,
              error: errorResponse
            }
          }));
        }
      }, {
        key: "checkStatus",
        value: function checkStatus(currentStatus, status) {
          return currentStatus === status;
        }
      }, {
        key: "abortUpload",
        value: function abortUpload(file) {
          this.abortUploadAction();
          this.setFileStatus('abort');
          this.dispatchEvent(new CustomEvent('upload-abort', {
            detail: {
              value: this.file
            }
          }));
        }
      }, {
        key: "fileLinkClicked",
        value: function fileLinkClicked(e) {
          e.preventDefault();
          if (this.file.downloadUrl) this.download(this.file.downloadUrl);
        }
      }, {
        key: "fileMenuItemClicked",
        value: function fileMenuItemClicked(e) {
          var item = e.detail.value;
          this.dispatchEvent(new CustomEvent('menu-item-clicked', {
            detail: {
              value: this.file,
              item: item
            }
          }));
        }
      }], [{
        key: "is",
        get: function get() {
          return 'avl-file-view';
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            focused: {
              type: Boolean,
              reflectToAttribute: true
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
      }, {
        key: "template",
        get: function get() {
          return _avl_file_view_html__WEBPACK_IMPORTED_MODULE_1__["template"];
        }
      }]);

      return AvlFileViewImpl;
    }(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

    customElements.define(AvlFileViewImpl.is, AvlFileViewImpl); //# sourceMappingURL=avl-file-view.js.map

    /***/
  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.css.js":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.css.js ***!
    \****************************************************************************************************/

  /*! exports provided: style */

  /***/
  function node_modulesAvlControlsCoreDistAvlUploadAvlUploadDialogAvlUploadDialogCssJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "style", function () {
      return style;
    });
    /* harmony import */


    var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer */
    "./node_modules/@polymer/polymer/polymer-element.js");

    var style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject11()); //# sourceMappingURL=avl-upload-dialog.css.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.html.js":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.html.js ***!
    \*****************************************************************************************************/

  /*! exports provided: template */

  /***/
  function node_modulesAvlControlsCoreDistAvlUploadAvlUploadDialogAvlUploadDialogHtmlJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "template", function () {
      return template;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_upload_dialog_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-upload-dialog.css */
    "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.css.js");
    /* harmony import */


    var _avl_button_avl_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../avl-button/avl-button */
    "./node_modules/@avl-controls/core/dist/avl-button/avl-button.js");

    var template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject12(), _avl_upload_dialog_css__WEBPACK_IMPORTED_MODULE_1__["style"]); //# sourceMappingURL=avl-upload-dialog.html.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.js":
  /*!************************************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.js ***!
    \************************************************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesAvlControlsCoreDistAvlUploadAvlUploadDialogAvlUploadDialogJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _avl_upload_dialog_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./avl-upload-dialog.html */
    "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.html.js");
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");

    var UploadDialogImpl = /*#__PURE__*/function (_polymer_polymer_poly6) {
      _inherits(UploadDialogImpl, _polymer_polymer_poly6);

      var _super6 = _createSuper(UploadDialogImpl);

      function UploadDialogImpl() {
        var _this20;

        _classCallCheck(this, UploadDialogImpl);

        _this20 = _super6.apply(this, arguments);
        _this20.failErrorTypeMessage = 'The format of the file(s) you are trying to upload is not acceptable by software.';
        _this20.failErrorTypeTitle = 'Unsupported File Format';
        _this20.failErrorFiles = 'File(s)';
        return _this20;
      }

      _createClass(UploadDialogImpl, [{
        key: "closeDialog",
        value: function closeDialog() {
          this.dispatchEvent(new CustomEvent('close', {
            detail: 'true'
          }));
        }
      }, {
        key: "translateLabels",
        value: function () {
          var _translateLabels = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var translationService;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(!AvlLocalizationService || !AvlLocalizationService.translationService)) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    translationService = AvlLocalizationService.translationService;
                    _context.next = 5;
                    return translationService.translate('VizBox.AvlUpload.FormatIsUnsupportedMessage');

                  case 5:
                    this.failErrorTypeMessage = _context.sent;
                    _context.next = 8;
                    return translationService.translate('VizBox.AvlUpload.FormatIsUnsupported');

                  case 8:
                    this.failErrorTypeTitle = _context.sent;
                    _context.next = 11;
                    return translationService.translate('VizBox.AvlUpload.FailErrorFiles');

                  case 11:
                    this.failErrorFiles = _context.sent;

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function translateLabels() {
            return _translateLabels.apply(this, arguments);
          }

          return translateLabels;
        }()
      }, {
        key: "displayIndex",
        value: function displayIndex(index) {
          return index + 1;
        }
      }], [{
        key: "is",
        get: function get() {
          return 'avl-upload-dialog';
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            errorFiles: {
              type: Array
            }
          };
        }
      }, {
        key: "template",
        get: function get() {
          return _avl_upload_dialog_html__WEBPACK_IMPORTED_MODULE_0__["template"];
        }
      }]);

      return UploadDialogImpl;
    }(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

    customElements.define(UploadDialogImpl.is, UploadDialogImpl); //# sourceMappingURL=avl-upload-dialog.js.map

    /***/
  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.css.js":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.css.js ***!
    \********************************************************************************************************/

  /*! exports provided: style */

  /***/
  function node_modulesAvlControlsCoreDistAvlUploadAvlUploadProgressAvlUploadProgressCssJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "style", function () {
      return style;
    });
    /* harmony import */


    var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer */
    "./node_modules/@polymer/polymer/polymer-element.js");

    var style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject13()); //# sourceMappingURL=avl-upload-progress.css.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.html.js":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.html.js ***!
    \*********************************************************************************************************/

  /*! exports provided: template */

  /***/
  function node_modulesAvlControlsCoreDistAvlUploadAvlUploadProgressAvlUploadProgressHtmlJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "template", function () {
      return template;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_upload_progress_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-upload-progress.css */
    "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.css.js");

    var template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject14(), _avl_upload_progress_css__WEBPACK_IMPORTED_MODULE_1__["style"]); //# sourceMappingURL=avl-upload-progress.html.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.js":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.js ***!
    \****************************************************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesAvlControlsCoreDistAvlUploadAvlUploadProgressAvlUploadProgressJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_upload_progress_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-upload-progress.html */
    "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-progress/avl-upload-progress.html.js");

    var ProgressBarImpl = /*#__PURE__*/function (_polymer_polymer_poly7) {
      _inherits(ProgressBarImpl, _polymer_polymer_poly7);

      var _super7 = _createSuper(ProgressBarImpl);

      function ProgressBarImpl() {
        _classCallCheck(this, ProgressBarImpl);

        return _super7.apply(this, arguments);
      }

      _createClass(ProgressBarImpl, null, [{
        key: "is",
        get: function get() {
          return 'avl-upload-progress';
        }
      }, {
        key: "properties",
        get: function get() {
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
      }, {
        key: "template",
        get: function get() {
          return _avl_upload_progress_html__WEBPACK_IMPORTED_MODULE_1__["template"];
        }
      }]);

      return ProgressBarImpl;
    }(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

    customElements.define(ProgressBarImpl.is, ProgressBarImpl); //# sourceMappingURL=avl-upload-progress.js.map

    /***/
  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.css.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.css.js ***!
    \***************************************************************************/

  /*! exports provided: style */

  /***/
  function node_modulesAvlControlsCoreDistAvlUploadAvlUploadCssJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "style", function () {
      return style;
    });
    /* harmony import */


    var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer */
    "./node_modules/@polymer/polymer/polymer-element.js");

    var style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject15()); //# sourceMappingURL=avl-upload.css.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.html.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.html.js ***!
    \****************************************************************************/

  /*! exports provided: template */

  /***/
  function node_modulesAvlControlsCoreDistAvlUploadAvlUploadHtmlJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "template", function () {
      return template;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_upload_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-upload.css */
    "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.css.js");
    /* harmony import */


    var _all_initial_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../all-initial.css */
    "./node_modules/@avl-controls/core/dist/all-initial.css.js");
    /* harmony import */


    var _polymer_paper_ripple_paper_ripple_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @polymer/paper-ripple/paper-ripple.js */
    "./node_modules/@polymer/paper-ripple/paper-ripple.js");
    /* harmony import */


    var _avl_file_view_avl_file_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./avl-file-view/avl-file-view */
    "./node_modules/@avl-controls/core/dist/avl-upload/avl-file-view/avl-file-view.js");
    /* harmony import */


    var _avl_upload_dialog_avl_upload_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./avl-upload-dialog/avl-upload-dialog */
    "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload-dialog/avl-upload-dialog.js");
    /* harmony import */


    var _avl_overflow_menu_avl_overflow_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../avl-overflow-menu/avl-overflow-menu */
    "./node_modules/@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu.js");

    var template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject16(), _all_initial_css__WEBPACK_IMPORTED_MODULE_2__["allInitial"], _avl_upload_css__WEBPACK_IMPORTED_MODULE_1__["style"]); //# sourceMappingURL=avl-upload.html.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.js ***!
    \***********************************************************************/

  /*! exports provided: AvlFileImpl */

  /***/
  function node_modulesAvlControlsCoreDistAvlUploadAvlUploadJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvlFileImpl", function () {
      return AvlFileImpl;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_upload_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-upload.html */
    "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.html.js");
    /* harmony import */


    var _avl_localization_service_avl_localization_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../avl-localization-service/avl-localization-service.js */
    "./node_modules/@avl-controls/core/dist/avl-localization-service/avl-localization-service.js");
    /* harmony import */


    var _avl_localization_service_avl_localization_service_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_avl_localization_service_avl_localization_service_js__WEBPACK_IMPORTED_MODULE_2__);

    function isTypeAccepted(file, accept) {
      var acceptArray = accept.split(',');
      var filenameSegments = file.name.split('.');
      var ext = ".".concat(filenameSegments.slice(-1));
      var mediaType = file.type; // if some mimetypes are defined with asterisk e.g. image/*

      var mimeAll = acceptArray.filter(function (item) {
        return /\w+\/\*/.test(item);
      }).map(function (item) {
        return item.split('/')[0];
      });

      if (mimeAll.indexOf('*') === -1 && mimeAll.indexOf(mediaType.split('/')[0]) === -1 && acceptArray.indexOf(ext) === -1 && acceptArray.indexOf(mediaType) === -1) {
        return false;
      }

      return true;
    }

    var AvlUploadServiceImpl = /*#__PURE__*/function () {
      function AvlUploadServiceImpl() {
        _classCallCheck(this, AvlUploadServiceImpl);
      }

      _createClass(AvlUploadServiceImpl, [{
        key: "uploadFile",
        value: function uploadFile(file, target, progressCallback, completeCallback, failCallback) {
          var formData = new FormData();
          formData.append('file', file.file);
          var xhr = new XMLHttpRequest();
          xhr.upload.addEventListener('progress', function (e) {
            if (progressCallback) {
              progressCallback(e);
            }
          });
          xhr.open('POST', target, true);
          xhr.addEventListener('load', function (e) {
            if (completeCallback && xhr.status === 200) {
              var response = JSON.parse(xhr.response);

              if (response && response.downloadUrl) {
                completeCallback(response.downloadUrl);
              } else {
                completeCallback();
              }
            } else if (failCallback) {
              failCallback({
                status: xhr.status,
                response: xhr.response
              });
            }
          });
          xhr.addEventListener('error', function (e) {
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
      }, {
        key: "downloadFile",
        value: function downloadFile(url) {
          return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.addEventListener('load', function (e) {
              if (xhr.status === 200 && xhr.response instanceof Blob) {
                resolve(xhr.response);
              } else {
                reject(xhr.statusText);
              }
            });
            xhr.addEventListener('error', function (err) {
              reject(err);
            });
            xhr.send();
          });
        }
      }]);

      return AvlUploadServiceImpl;
    }();

    var AvlFileImpl = function AvlFileImpl(file) {
      _classCallCheck(this, AvlFileImpl);

      this.file = file;
      this.loaded = 0;
      this.status = 'notStarted';
      this.name = file.name;
      this.type = file.type;
      this.size = file.size;
    };

    var AvlUploadImpl = /*#__PURE__*/function (_polymer_polymer_poly8) {
      _inherits(AvlUploadImpl, _polymer_polymer_poly8);

      var _super8 = _createSuper(AvlUploadImpl);

      function AvlUploadImpl() {
        var _this21;

        _classCallCheck(this, AvlUploadImpl);

        _this21 = _super8.apply(this, arguments);
        _this21.mouseEvent = false;
        _this21.isErrorDialogOpen = false;
        _this21.errorArray = [];
        _this21.failErrorMessage = 'Upload is unsuccessful.';
        _this21.abortErrorMessage = 'Upload aborted.';
        _this21.dragAreaMessage = 'Drag a file to attach, or <span>browse</span>';
        _this21.retryMenuItemLabel = 'Retry';
        _this21.removeMenuItemLabel = 'Remove';
        _this21.downloadMenuItemLabel = 'Download';
        _this21.uploadService = new AvlUploadServiceImpl();
        return _this21;
      }

      _createClass(AvlUploadImpl, [{
        key: "translateLabels",
        value: function () {
          var _translateLabels2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var translationService, browseLabel;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(!AvlLocalizationService || !AvlLocalizationService.translationService)) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    translationService = AvlLocalizationService.translationService;
                    _context2.next = 5;
                    return translationService.translate('VizBox.AvlUpload.UploadIsUnsuccessful');

                  case 5:
                    this.failErrorMessage = _context2.sent;
                    _context2.next = 8;
                    return translationService.translate('VizBox.AvlUpload.UploadAborted');

                  case 8:
                    this.abortErrorMessage = _context2.sent;
                    _context2.next = 11;
                    return translationService.translate('VizBox.AvlUpload.Browse');

                  case 11:
                    browseLabel = _context2.sent;
                    _context2.next = 14;
                    return translationService.translate('VizBox.AvlUpload.DragAreaMessage', {
                      browse: "<span>".concat(browseLabel, "</span>")
                    });

                  case 14:
                    this.dragAreaMessage = _context2.sent;
                    _context2.next = 17;
                    return translationService.translate('VizBox.AvlUpload.Retry');

                  case 17:
                    this.retryMenuItemLabel = _context2.sent;
                    _context2.next = 20;
                    return translationService.translate('VizBox.AvlUpload.Remove');

                  case 20:
                    this.removeMenuItemLabel = _context2.sent;
                    _context2.next = 23;
                    return translationService.translate('VizBox.AvlUpload.Download');

                  case 23:
                    this.downloadMenuItemLabel = _context2.sent;
                    this.resetMenuItems();

                  case 25:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function translateLabels() {
            return _translateLabels2.apply(this, arguments);
          }

          return translateLabels;
        }()
      }, {
        key: "computeInvalid",
        value: function computeInvalid(_invalid, fileChange, required, hasComplete) {
          if (_invalid != null) {
            return _invalid;
          }

          if (required === false && !this.validationCallback) {
            return false;
          }

          var files = fileChange.value;
          var doValidate = fileChange.path === 'files' && files != null;
          if (!doValidate) return this.invalid;

          if (doValidate) {
            if (this.validationCallback && files) {
              return !this.validationCallback(files);
            }

            if (required === true && (files == null || files.length === 0 || files.length > 0 && !hasComplete)) {
              return true;
            } else {
              return false;
            }
          }

          return false;
        }
      }, {
        key: "hasCompletedFile",
        value: function hasCompletedFile() {
          return this.files.find(function (f) {
            return f.status === 'complete';
          }) != null;
        }
      }, {
        key: "filesListChanged",
        value: function filesListChanged() {
          this.dispatchEvent(new CustomEvent('files-changed', {
            detail: {
              value: this.files
            }
          }));
        }
      }, {
        key: "onFileStatusChange",
        value: function onFileStatusChange(event) {
          this.set('hasComplete', this.hasCompletedFile());

          if (this.validationCallback) {
            this.set('_invalid', !this.validationCallback(this.files));
          }
        }
      }, {
        key: "resetMenuItems",
        value: function resetMenuItems() {
          if (this.disabled) {
            this.setAttribute("tabindex", "-1");
          } else {
            this.removeAttribute("tabindex");
          }

          if (!this.disabled && !this.readonly) {
            this.retryMenuItem = {
              label: this.retryMenuItemLabel
            };
            this.removeMenuItem = {
              label: this.removeMenuItemLabel
            };
            this.downloadMenuItem = {
              label: this.downloadMenuItemLabel
            };
          } else {
            this.retryMenuItem = {
              label: this.retryMenuItemLabel
            };
            this.removeMenuItem = undefined;
            this.downloadMenuItem = {
              label: this.downloadMenuItemLabel
            };
          }
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this22 = this;

          _get(_getPrototypeOf(AvlUploadImpl.prototype), "connectedCallback", this).call(this);

          if (AvlLocalizationService && AvlLocalizationService.translationService) {
            this.translateLabels();
          }

          this.files = this.files || [];
          this.resetMenuItems();
          this.$.fileInput.addEventListener('change', function (e) {
            _this22.errorArray = [];
            var fileInput = _this22.$.fileInput;
            var filesToUpload = Array.from(fileInput.files).map(function (file) {
              return new AvlFileImpl(file);
            });

            _this22.handleAddFiles(filesToUpload);

            fileInput.value = '';
          });
          this.addEventListener('menu-item-clicked', function (e) {
            if (e.detail.item === _this22.removeMenuItem) {
              var file = e.detail.value;

              var index = _this22.files.indexOf(file);

              if (index !== -1) {
                _this22.files = [].concat(_toConsumableArray(_this22.files.slice(0, index)), _toConsumableArray(_this22.files.slice(index + 1)));
                _this22.$.fileInput.value = null;

                _this22.set('hasComplete', _this22.hasCompletedFile());
              }
            }
          });
          this.fileListElement = this.shadowRoot.querySelector('.file-list');
          this.fileListElement.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowUp' || event.key === 'Up' || event.key === 'ArrowDown' || event.key === 'Down') {
              event.preventDefault();
              var overflowMenu;

              _this22.shadowRoot.querySelectorAll('avl-file-view').forEach(function (item) {
                if (item === document.activeElement.shadowRoot.activeElement) {
                  overflowMenu = item.shadowRoot.querySelector('avl-overflow-menu');
                }
              });

              if (overflowMenu) {
                if (!overflowMenu.open) {
                  var fileViewFiles = _this22.shadowRoot.querySelectorAll('avl-file-view');

                  var allItemElements = [];
                  var currentItemIndex;
                  fileViewFiles.forEach(function (userItem, index) {
                    if (userItem.focused == true) {
                      currentItemIndex = index;
                    }

                    allItemElements.push(userItem);
                  });

                  if (!currentItemIndex) {
                    currentItemIndex = 0;
                  }

                  var itemIndexToMoveTo = _this22.navigate(currentItemIndex, event.key);

                  if (itemIndexToMoveTo !== undefined) {
                    allItemElements[itemIndexToMoveTo].focus();
                    event.preventDefault();
                  }
                }
              }
            }
          });
          this.dropArea = this.shadowRoot.querySelector('#dropzone');
          this.dropArea.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') _this22.browseFiles();
          });
          this.dropArea.addEventListener('dragenter', this.preventDefaults, false);
          this.dropArea.addEventListener('dragover', function (e) {
            _this22.preventDefaults(e);

            _this22.dropArea.classList.add("dragged");
          }, false);
          this.dropArea.addEventListener('dragleave', function (e) {
            _this22.preventDefaults(e);

            _this22.dropArea.classList.remove("dragged");
          }, false);
          this.dropArea.addEventListener('drop', function (e) {
            _this22.preventDefaults(e);

            _this22.dropArea.classList.remove("dragged");
          }, false);

          if (!this.disabled) {
            this.dropArea.addEventListener('drop', this.handleDrop.bind(this), false);
          }
        }
      }, {
        key: "fileNameVerification",
        value: function fileNameVerification(file) {
          var i = 1;
          var nameArray = file.name.split(/\.(?=[^\.]+$)/);

          while (this.files.find(function (f) {
            return f.name == file.name;
          })) {
            file.name = nameArray[0] + '-(' + i + ').' + nameArray[1];
            i++;
          }
        }
      }, {
        key: "handleAddFiles",
        value: function handleAddFiles(files) {
          var _this23 = this;

          var filesToUpload = [];

          var _iterator5 = _createForOfIteratorHelper(files),
              _step5;

          try {
            var _loop2 = function _loop2() {
              var file = _step5.value;

              _this23.fileNameVerification(file);

              if (_this23.accept && !isTypeAccepted(file, _this23.accept)) {
                setTimeout(function (_) {
                  return _this23.dispatchEvent(new CustomEvent('file-rejected', {
                    detail: {
                      value: file
                    }
                  }));
                });

                _this23.errorArray.push(file);
              } else {
                filesToUpload = [].concat(_toConsumableArray(filesToUpload), [file]);
              }
            };

            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              _loop2();
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          if (this.errorArray.length > 0) {
            this.openErrorDialog();
          }

          if (filesToUpload.length > 0) {
            this.files = [].concat(_toConsumableArray(this.files), _toConsumableArray(filesToUpload));
          }
        }
      }, {
        key: "handleDrop",
        value: function handleDrop(e) {
          this.errorArray = [];
          var dt = e.dataTransfer;
          var draggedFiles = dt.files;
          var filesToUpload = Array.from(draggedFiles).map(function (file) {
            return new AvlFileImpl(file);
          });
          this.handleAddFiles(filesToUpload);
        }
      }, {
        key: "focusedIn",
        value: function focusedIn(event) {
          if (event.target.id === "dropzone") {
            event.target.classList.add("focusDropzone");
          }

          if (!this.disabled) {
            this.focused = true;
          }
        }
      }, {
        key: "focusedOut",
        value: function focusedOut(event) {
          if (event.target.id === "dropzone") {
            event.target.classList.remove("focusDropzone");
          }

          this.focused = false;
        }
      }, {
        key: "fileListFocus",
        value: function fileListFocus() {
          var firstFileView = this.shadowRoot.querySelector('.file-view');

          if (firstFileView && !this.disabled && !this.mouseEvent) {
            firstFileView.focus();
          }

          this.mouseEvent = false;
        }
      }, {
        key: "fileListMouseDown",
        value: function fileListMouseDown() {
          this.mouseEvent = true;
        }
      }, {
        key: "preventDefaults",
        value: function preventDefaults(e) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, {
        key: "browseFiles",
        value: function browseFiles() {
          if (!this.disabled && !this.readonly) {
            this.$.fileInput.click();
          }
        }
      }, {
        key: "redispatchFileEvent",
        value: function redispatchFileEvent(e) {
          this.dispatchEvent(new CustomEvent(e.type, {
            detail: e.detail
          }));
        }
      }, {
        key: "shouldShowError",
        value: function shouldShowError(invalid, errorMessage) {
          return invalid === true && errorMessage != null;
        }
      }, {
        key: "openErrorDialog",
        value: function openErrorDialog() {
          this.isErrorDialogOpen = true;
        }
      }, {
        key: "closeErrorDialog",
        value: function closeErrorDialog() {
          this.isErrorDialogOpen = false;
        }
      }, {
        key: "navigate",
        value: function navigate(currentItemIndex, keyPressed) {
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
      }], [{
        key: "is",
        get: function get() {
          return 'avl-upload';
        }
      }, {
        key: "properties",
        get: function get() {
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
              type: Object
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
              type: Object
            },
            errorMessage: {
              type: String
            },
            files: {
              type: Array
            },
            readonly: {
              type: Boolean,
              value: false,
              reflectToAttribute: true,
              observer: 'resetMenuItems'
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['filesListChanged(files)'];
        }
      }, {
        key: "template",
        get: function get() {
          return _avl_upload_html__WEBPACK_IMPORTED_MODULE_1__["template"];
        }
      }]);

      return AvlUploadImpl;
    }(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

    customElements.define(AvlUploadImpl.is, AvlUploadImpl); //# sourceMappingURL=avl-upload.js.map

    /***/
  },

  /***/
  "./node_modules/@avl-controls/datatable/dist/avl-datatable/array-data-provider.js":
  /*!****************************************************************************************!*\
    !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/array-data-provider.js ***!
    \****************************************************************************************/

  /*! exports provided: getValueFromPath, getParentObjectFromPath, default */

  /***/
  function node_modulesAvlControlsDatatableDistAvlDatatableArrayDataProviderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getValueFromPath", function () {
      return getValueFromPath;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getParentObjectFromPath", function () {
      return getParentObjectFromPath;
    });
    /* harmony import */


    var _avl_controls_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @avl-controls/interfaces */
    "./node_modules/@avl-controls/interfaces/index.js");
    /** Returns undefined if the path doesn't exist. */


    var getValueFromPath = function getValueFromPath(row, path) {
      var current = row;

      var _iterator6 = _createForOfIteratorHelper(path.split('.')),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var part = _step6.value;

          if (typeof current !== 'object' || current === null) {
            return undefined;
          }

          current = current[part];
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return current;
    };

    var getParentObjectFromPath = function getParentObjectFromPath(row, path) {
      var current = row;
      var parts = path.split('.');

      for (var i = 0; i < parts.length - 1; ++i) {
        if (current[parts[i]] === undefined || current[parts[i]] === null) {
          return current;
        } else {
          current = current[parts[i]];
        }
      }

      return current;
    };
    /**
     * Creates a [[DataProvider]] from an array.
     * @param data - Array with data
     */


    var createArrayDataProvider = function createArrayDataProvider(data) {
      return function (params) {
        return new Promise(function (resolve, reject) {
          var tmpData;

          if (params.parentItem) {
            tmpData = params.parentItem.children;
          } else {
            tmpData = data === undefined ? [] : data.slice();
          }

          updateHasChildren(tmpData);
          updateDescendantsMatchFilter(tmpData, params.filters, params.globalFilterFields);

          if (filtersExist(params.filters)) {
            // If any of the ancestors match filter, then don't filter the children
            if (!params.parentItem || !ancestorsMatchFilter(params.parentItem, params.filters, params.globalFilterFields, data)) {
              tmpData = tmpData.filter(function (item) {
                return item.descendantsMatchFilter || matchesFilter(item, params.filters, params.globalFilterFields);
              });
            }
          } // Sort the items


          if (params.sortOrders.length) {
            var _iterator7 = _createForOfIteratorHelper(params.sortOrders.reverse()),
                _step7;

            try {
              var _loop3 = function _loop3() {
                var order = _step7.value;
                tmpData.sort(function (a, b) {
                  var toLowercase = function toLowercase(value) {
                    return typeof value === 'string' ? value.toLowerCase() : value;
                  };

                  var value1 = toLowercase(getValueFromPath(a, order.path));
                  var value2 = toLowercase(getValueFromPath(b, order.path));
                  var ret;

                  if (value1 === null || value1 === undefined || value1 === '' || value2 === null || value2 === undefined || value2 === '') {
                    ret = value1 === null || value1 === undefined || value1 === '' ? 1 : -1;
                  } else {
                    ret = value1 >= value2 ? 1 : -1;
                  }

                  return order.ascending ? ret : ret * -1;
                });
              };

              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                _loop3();
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }

          resolve({
            rows: tmpData.slice(params.page * params.pageSize, (params.page + 1) * params.pageSize),
            totalRows: tmpData.length
          });
        });
      };
    };
    /** Add a hasChildren property to the rows */


    function updateHasChildren(data) {
      var _iterator8 = _createForOfIteratorHelper(data),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var row = _step8.value;
          var hasChildren = rowHasChildren(row);

          if (hasChildren || row.hasChildren !== undefined) {
            row.hasChildren = hasChildren;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }

    function updateDescendantsMatchFilter(data, filters, globalFilterFields) {
      var _iterator9 = _createForOfIteratorHelper(data),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var row = _step9.value;
          var descMatchFilter = descendantsMatchFilter(row, filters, globalFilterFields);

          if (descMatchFilter || row.descendantsMatchFilter !== undefined) {
            row.descendantsMatchFilter = descMatchFilter;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }

    var valueOnPathMatchesFilter = function valueOnPathMatchesFilter(row, path, filter) {
      var value = getValueFromPath(row, path);

      if (typeof value !== 'string') {
        return false;
      }

      return getValueFromPath(row, path).toLowerCase().indexOf(filter) !== -1;
    };

    function matchesFilter(row, filters, globalFilterFields) {
      if (!filtersExist(filters)) {
        return true;
      }

      var _iterator10 = _createForOfIteratorHelper(filters),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _step10$value = _slicedToArray(_step10.value, 2),
              path = _step10$value[0],
              value = _step10$value[1];

          if (path === _avl_controls_interfaces__WEBPACK_IMPORTED_MODULE_0__["globalFilterKey"]) {
            if (globalFilterFields && globalFilterFields.length > 0) {
              var globalFilter = filters.get(_avl_controls_interfaces__WEBPACK_IMPORTED_MODULE_0__["globalFilterKey"]).toLowerCase();
              var found = false;

              var _iterator11 = _createForOfIteratorHelper(globalFilterFields),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var paths = _step11.value;

                  if (valueOnPathMatchesFilter(row, paths, globalFilter)) {
                    found = true;
                    break;
                  }
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }

              if (!found) {
                return false;
              }
            } else {
              return false;
            }
          } else if (!valueOnPathMatchesFilter(row, path, value.toLocaleLowerCase())) {
            return false;
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
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

      var _iterator12 = _createForOfIteratorHelper(row.children),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var child = _step12.value;

          if (matchesFilter(child, filters, globalFilterFields)) {
            return true;
          }

          if (descendantsMatchFilter(child, filters, globalFilterFields)) {
            return true;
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      return false;
    }
    /** Do any of the ancestors match the filter, including the parent */


    function ancestorsMatchFilter(parent, filters, globalFilterFields, data) {
      var parentsAncestors = findAncestors(data, parent);

      for (var _i4 = 0, _arr2 = [parent].concat(_toConsumableArray(parentsAncestors)); _i4 < _arr2.length; _i4++) {
        var ancestor = _arr2[_i4];

        if (matchesFilter(ancestor, filters, globalFilterFields)) {
          return true;
        }
      }

      return false;
    }
    /** Returns all ancestors. */


    function findAncestors(data, descendant) {
      var ancestors = []; // No ancestors, it's a top level item.

      if (data.includes(descendant)) {
        return [];
      }

      var _iterator13 = _createForOfIteratorHelper(data),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var row = _step13.value;

          if (isAncestorOf(row, descendant, ancestors)) {
            return ancestors;
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
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

      var _iterator14 = _createForOfIteratorHelper(potentialAncestor.children),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var row = _step14.value;

          if (isAncestorOf(row, descendant, ancestors)) {
            ancestors.push(potentialAncestor);
            return true;
          }
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
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

      var _iterator15 = _createForOfIteratorHelper(filters.values()),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var value = _step15.value;

          if (value !== '') {
            return true;
          }
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      return false;
    }
    /* harmony default export */


    __webpack_exports__["default"] = createArrayDataProvider; //# sourceMappingURL=array-data-provider.js.map

    /***/
  },

  /***/
  "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.css.js":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.css.js ***!
    \******************************************************************************************************************************/

  /*! exports provided: style */

  /***/
  function node_modulesAvlControlsDatatableDistAvlDatatableAvlColumnSelectorDialogAvlColumnSelectorDialogCssJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "style", function () {
      return style;
    });
    /* harmony import */


    var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer */
    "./node_modules/@polymer/polymer/polymer-element.js");

    var style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject17()); //# sourceMappingURL=avl-column-selector-dialog.css.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.html.js":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.html.js ***!
    \*******************************************************************************************************************************/

  /*! exports provided: template */

  /***/
  function node_modulesAvlControlsDatatableDistAvlDatatableAvlColumnSelectorDialogAvlColumnSelectorDialogHtmlJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "template", function () {
      return template;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_button_avl_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-button/avl-button */
    "./node_modules/@avl-controls/core/dist/avl-button/avl-button.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_checkbox_avl_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-checkbox/avl-checkbox */
    "./node_modules/@avl-controls/core/dist/avl-checkbox/avl-checkbox.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_icon_avl_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-icon/avl-icon */
    "./node_modules/@avl-controls/core/dist/avl-icon/avl-icon.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_list_avl_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-list/avl-list */
    "./node_modules/@avl-controls/core/dist/avl-list/avl-list.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_chip_list_avl_chip_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-chip-list/avl-chip-list */
    "./node_modules/@avl-controls/core/dist/avl-chip-list/avl-chip-list.js");
    /* harmony import */


    var _avl_column_selector_dialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./avl-column-selector-dialog.css */
    "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.css.js");

    var template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject18(), _avl_column_selector_dialog_css__WEBPACK_IMPORTED_MODULE_6__["style"]); //# sourceMappingURL=avl-column-selector-dialog.html.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.js":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.js ***!
    \**************************************************************************************************************************/

  /*! exports provided: chipsOptions */

  /***/
  function node_modulesAvlControlsDatatableDistAvlDatatableAvlColumnSelectorDialogAvlColumnSelectorDialogJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "chipsOptions", function () {
      return chipsOptions;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_column_selector_dialog_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./avl-column-selector-dialog.html */
    "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.html.js");

    var chipsOptions;

    (function (chipsOptions) {
      chipsOptions[chipsOptions["Selected"] = 0] = "Selected";
      chipsOptions[chipsOptions["All"] = 1] = "All";
    })(chipsOptions || (chipsOptions = {}));

    var AvlColumnSelectorDialogImpl = /*#__PURE__*/function (_polymer_polymer_poly9) {
      _inherits(AvlColumnSelectorDialogImpl, _polymer_polymer_poly9);

      var _super9 = _createSuper(AvlColumnSelectorDialogImpl);

      function AvlColumnSelectorDialogImpl() {
        var _this24;

        _classCallCheck(this, AvlColumnSelectorDialogImpl);

        _this24 = _super9.apply(this, arguments);
        _this24.opened = false;
        _this24.columnItems = [];
        _this24.allColumns = true;
        _this24.selectItems = [{
          label: 'Selected',
          value: 0
        }, {
          label: 'All',
          value: 1
        }];
        _this24.selected = 1;
        _this24.reordered = false;
        _this24.firstOpen = false;
        _this24.isDialogFooter = false;
        _this24.leafColumnsFlag = false;
        _this24.columnHeight = '329px';
        _this24.dialogBottom = '-444px';
        _this24.isLists = true;
        _this24.isSelectClick = false;
        _this24.isAllSelectClick = false;
        _this24.openDialog = false;
        return _this24;
      }

      _createClass(AvlColumnSelectorDialogImpl, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this25 = this;

          _get(_getPrototypeOf(AvlColumnSelectorDialogImpl.prototype), "connectedCallback", this).call(this);

          document.addEventListener('click', function (e) {
            // e.preventDefault();
            if (_this25.shadowRoot.activeElement && _this25.shadowRoot.activeElement.id !== 'icon-open-dialog' && _this25.shadowRoot.activeElement.id !== 'selectedIndexChip' && _this25.shadowRoot.activeElement.id !== 'multiSelection' && _this25.shadowRoot.activeElement.id !== 'avl-column-selector-dialog' && _this25.shadowRoot.activeElement.id !== 'btn-reset-dialog' && _this25.shadowRoot.activeElement.id !== 'btn-open-dialog' || !_this25.shadowRoot.activeElement) {
              _this25.focused = false;
              _this25.opened = false;
              _this25.firstOpen = false;
            }
          });
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(AvlColumnSelectorDialogImpl.prototype), 'disconnectedCallback', this).call(this);
        }
      }, {
        key: "leafColumnsObserverChanged",
        value: function leafColumnsObserverChanged() {
          var _this26 = this;

          var interval = setInterval(function () {
            if (_this26.leafColumns.length > 0) {
              clearInterval(interval);

              if (_this26.leafColumns.find(function (i) {
                return i.hidden == true;
              })) {
                _this26.allColumns = false;
              }
            }
          }, 100);
        }
      }, {
        key: "leafColumnsChanged",
        value: function leafColumnsChanged() {
          var _this27 = this;

          if (this.leafColumns.length > 0 && !this.leafColumnsFlag) {
            this.defaultLeafColumns = [];
            this.leafColumns.forEach(function (item) {
              _this27.defaultLeafColumns.push(JSON.parse(JSON.stringify(item)));
            });
            this.leafColumnsFlag = true;
          } // this.dispatchEvent(new CustomEvent('selected-columns-changed'));
          // this.opened = false;

        }
      }, {
        key: "resetToDefault",
        value: function resetToDefault() {
          var _this28 = this;

          var resetPromise = new Promise(function (resolve, reject) {
            _this28.isLists = false;
            _this28.reordered = true;

            var columns = _this28.defaultLeafColumns.map(function (item) {
              return {
                label: item.caption,
                id: item.valueField,
                icon: item.headerIcon,
                image: item.headerImage,
                disabled: item.disabled ? item.disabled : false
              };
            });

            if (JSON.stringify(_this28.columnItems) != JSON.stringify(columns)) {
              _this28.columnItems = columns;
            }

            _this28.leafColumns = [];

            _this28.defaultLeafColumns.forEach(function (item) {
              _this28.leafColumns.push(JSON.parse(JSON.stringify(item)));
            });

            _this28.dispatchEvent(new CustomEvent('selected-columns-changed', {
              detail: _this28.leafColumns
            }));

            if (_this28.defaultLeafColumns.length !== _this28.selectedIndexes.length) {
              var indexes = [];

              _this28.defaultLeafColumns.forEach(function (item, index) {
                if (!item.hidden) {
                  indexes.push(index);
                }
              });

              _this28.selectedIndexes = indexes;
            }

            resolve('true');
          });
          resetPromise.then(function (res) {
            _this28.isLists = true;
            _this28.reordered = false;
            _this28.allColumns = true;
            _this28.selected = chipsOptions.All;
          });
        }
      }, {
        key: "focusedIn",
        value: function focusedIn(event) {
          this.focused = true;
        }
      }, {
        key: "toggleOpen",
        value: function toggleOpen(e) {
          var _this29 = this;

          console.log('Toogle Open: ' + this.opened);
          var togglePromise = new Promise(function (resolve, reject) {
            if (e.y >= 450 && e.screenY - e.y < 450) {
              _this29.dialogBottom = '56px';
            } else {
              _this29.dialogBottom = '-444px';
            }

            _this29.leafColumnsChanged();

            _this29.focused = true;
            _this29.opened = !_this29.opened;
            _this29.firstOpen = true;

            if (_this29.opened && _this29.leafColumns) {
              _this29.selected = chipsOptions.Selected;
              _this29.selectedIndexes = [];
              _this29.columnItems = [];

              _this29.leafColumns.forEach(function (item, index) {
                if (!item.hidden) {
                  _this29.columnItems.push({
                    label: item.caption,
                    id: item.valueField,
                    icon: item.headerIcon,
                    image: item.headerImage,
                    disabled: item.disabled ? item.disabled : false,
                    hidden: item.hidden ? item.hidden : false
                  });
                }
              });

              _this29.columnItems.forEach(function (item, index) {
                if (!item.hidden) {
                  _this29.selectedIndexes.push(index);
                }
              });

              _this29.isLists = false;
              resolve('true');
            }
          });
          togglePromise.then(function (res) {
            setTimeout(function () {
              _this29.isLists = true;
              _this29.firstOpen = false;
            }, 0);
          });
        }
      }, {
        key: "selectedIndexesChanged",
        value: function selectedIndexesChanged() {
          var _this30 = this;

          if (this.selectedIndexes.length == 0 && !this.reordered && !this.firstOpen && !this.isSelectClick) {
            this.leafColumns.map(function (item) {
              item.hidden = true;
            });
            this.dispatchEvent(new CustomEvent('selected-columns-changed', {
              detail: this.leafColumns
            }));
          } else {
            this.isSelectClick = false;
          }

          if (this.selectedIndexes.length > 0 && !this.reordered && !this.firstOpen) {
            this.leafColumns.map(function (item) {
              item.hidden = true;
            });

            for (var i = 0; i < this.selectedIndexes.length; i++) {
              var index = this.leafColumns.findIndex(function (item) {
                return item.valueField == _this30.columnItems[_this30.selectedIndexes[i]].id;
              });
              this.leafColumns[index].hidden = false;
            }

            if (this.leafColumns.length !== this.selectedIndexes.length) {
              this.allColumns = false;
            } else {
              this.allColumns = true;
            }

            if (!this.isAllSelectClick) {
              this.isAllSelectClick = false;
              this.dispatchEvent(new CustomEvent('selected-columns-changed', {
                detail: this.leafColumns
              }));
            } else {
              this.isAllSelectClick = false;
            }
          } else {
            this.reordered = false;
            this.isAllSelectClick = false;

            if (this.selectedIndexes.length > 0) {
              this.firstOpen = false;
            }
          }
        }
      }, {
        key: "rowReordered",
        value: function rowReordered() {
          var _this31 = this;

          this.reordered = true;
          var reorderedArray = [];
          this.columnItems.forEach(function (item) {
            reorderedArray.push(_this31.leafColumns.find(function (c) {
              return c.valueField === item.id;
            }));
          }); // this.leafColumns = reorderedArray;

          this.dispatchEvent(new CustomEvent('selected-columns-changed', {
            detail: reorderedArray
          }));
        }
      }, {
        key: "selectedValueChanged",
        value: function selectedValueChanged(e) {
          var _this32 = this;

          var selectedValuePromise = new Promise(function (resolve, reject) {
            _this32.isSelectClick = true;
            _this32.firstOpen = false;
            _this32.reordered = false;

            switch (e.detail.value) {
              case chipsOptions.Selected:
                {
                  _this32.leafColumns.map(function (item) {
                    item.hidden = true;
                  });

                  for (var i = 0; i < _this32.selectedIndexes.length; i++) {
                    _this32.leafColumns[_this32.selectedIndexes[i]].hidden = false;
                  }

                  _this32.columnItems = [];
                  _this32.selectedIndexes = [];

                  _this32.leafColumns.forEach(function (item, index) {
                    if (!item.hidden) {
                      _this32.columnItems.push({
                        label: item.caption,
                        id: item.valueField,
                        icon: item.headerIcon,
                        image: item.headerImage,
                        disabled: item.disabled ? item.disabled : false
                      });
                    }
                  });

                  _this32.columnItems.forEach(function (item, index) {
                    _this32.selectedIndexes.push(index);
                  });

                  _this32.reordered = true;
                  _this32.isLists = false;
                  resolve('true');
                  break;
                }

              case chipsOptions.All:
                {
                  _this32.isAllSelectClick = true;
                  _this32.selectedIndexes = [];
                  _this32.columnItems = [];

                  _this32.defaultLeafColumns.forEach(function (item) {
                    if (!_this32.leafColumns.find(function (i) {
                      return i.valueField === item.valueField;
                    })) {
                      item.hidden = true;

                      _this32.leafColumns.push(JSON.parse(JSON.stringify(item)));
                    }
                  });

                  _this32.leafColumns.forEach(function (item, index) {
                    _this32.columnItems.push({
                      label: item.caption,
                      id: item.valueField,
                      icon: item.headerIcon,
                      image: item.headerImage,
                      disabled: item.disabled ? item.disabled : false
                    });

                    if (!item.hidden) {
                      _this32.selectedIndexes.push(index);
                    }
                  });

                  _this32.isLists = false;
                  resolve('true');
                  break;
                }

              default:
                {
                  break;
                }
            }
          });
          selectedValuePromise.then(function (res) {
            setTimeout(function () {
              _this32.isLists = true;
              _this32.firstOpen = false;
              _this32.reordered = false;
            }, 0);
          });
        }
      }, {
        key: "dialogFooterChanged",
        value: function dialogFooterChanged() {
          this.isDialogFooter = JSON.parse(this.dialogFooter);

          if (this.isDialogFooter) {
            this.columnHeight = '273px';
          }
        }
      }], [{
        key: "is",
        get: function get() {
          return 'avl-column-selector-dialog';
        }
      }, {
        key: "properties",
        get: function get() {
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
              observer: 'dialogFooterChanged'
            }
          };
        }
      }, {
        key: "template",
        get: function get() {
          return _avl_column_selector_dialog_html__WEBPACK_IMPORTED_MODULE_1__["template"];
        }
      }]);

      return AvlColumnSelectorDialogImpl;
    }(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

    customElements.define(AvlColumnSelectorDialogImpl.is, AvlColumnSelectorDialogImpl); //# sourceMappingURL=avl-column-selector-dialog.js.map

    /***/
  },

  /***/
  "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.consts.js":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.consts.js ***!
    \*****************************************************************************************/

  /*! exports provided: MAX_PAGES_PER_SECTION, MIN_PAGES_PER_SECTION, DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE_LABEL, DEFAULT_PAGE_SIZE_OPTIONS */

  /***/
  function node_modulesAvlControlsDatatableDistAvlDatatableAvlDatatableConstsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAX_PAGES_PER_SECTION", function () {
      return MAX_PAGES_PER_SECTION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MIN_PAGES_PER_SECTION", function () {
      return MIN_PAGES_PER_SECTION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_PAGE_SIZE", function () {
      return DEFAULT_PAGE_SIZE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_PAGE_SIZE_LABEL", function () {
      return DEFAULT_PAGE_SIZE_LABEL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_PAGE_SIZE_OPTIONS", function () {
      return DEFAULT_PAGE_SIZE_OPTIONS;
    });

    var MAX_PAGES_PER_SECTION = 7;
    var MIN_PAGES_PER_SECTION = 2; // Default properties values

    var DEFAULT_PAGE_SIZE = 10;
    var DEFAULT_PAGE_SIZE_LABEL = 'Choose page size';
    var DEFAULT_PAGE_SIZE_OPTIONS = [{
      value: 10,
      label: 'Show 10 per page'
    }, {
      value: 50,
      label: 'Show 50 per page'
    }, {
      value: Number.MAX_SAFE_INTEGER,
      label: 'Show all'
    }]; //# sourceMappingURL=avl-datatable.consts.js.map

    /***/
  },

  /***/
  "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.css.js":
  /*!**************************************************************************************!*\
    !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.css.js ***!
    \**************************************************************************************/

  /*! exports provided: style */

  /***/
  function node_modulesAvlControlsDatatableDistAvlDatatableAvlDatatableCssJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "style", function () {
      return style;
    });
    /* harmony import */


    var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer */
    "./node_modules/@polymer/polymer/polymer-element.js");

    var style = _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject19()); //# sourceMappingURL=avl-datatable.css.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.html.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.html.js ***!
    \***************************************************************************************/

  /*! exports provided: template */

  /***/
  function node_modulesAvlControlsDatatableDistAvlDatatableAvlDatatableHtmlJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "template", function () {
      return template;
    });
    /* harmony import */


    var _vaadin_vaadin_grid_src_all_imports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @vaadin/vaadin-grid/src/all-imports */
    "./node_modules/@vaadin/vaadin-grid/src/all-imports.js");
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_controls_core_dist_all_initial_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @avl-controls/core/dist/all-initial.css */
    "./node_modules/@avl-controls/core/dist/all-initial.css.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_checkbox_avl_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-checkbox/avl-checkbox */
    "./node_modules/@avl-controls/core/dist/avl-checkbox/avl-checkbox.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_textfield_avl_textfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-textfield/avl-textfield */
    "./node_modules/@avl-controls/core/dist/avl-textfield/avl-textfield.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_button_avl_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-button/avl-button */
    "./node_modules/@avl-controls/core/dist/avl-button/avl-button.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_icon_button_avl_icon_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-icon-button/avl-icon-button */
    "./node_modules/@avl-controls/core/dist/avl-icon-button/avl-icon-button.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_dropdown_avl_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-dropdown/avl-dropdown */
    "./node_modules/@avl-controls/core/dist/avl-dropdown/avl-dropdown.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_overflow_menu_avl_overflow_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu */
    "./node_modules/@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu.js");
    /* harmony import */


    var _avl_column_selector_dialog_avl_column_selector_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./avl-column-selector-dialog/avl-column-selector-dialog */
    "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-column-selector-dialog/avl-column-selector-dialog.js");
    /* harmony import */


    var _themes_vaadin_grid_material_theme_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./themes/vaadin-grid-material-theme.css */
    "./node_modules/@avl-controls/datatable/dist/avl-datatable/themes/vaadin-grid-material-theme.css.js");
    /* harmony import */


    var _themes_vaadin_grid_sorter_material_theme_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./themes/vaadin-grid-sorter-material-theme.css */
    "./node_modules/@avl-controls/datatable/dist/avl-datatable/themes/vaadin-grid-sorter-material-theme.css.js");
    /* harmony import */


    var _avl_datatable_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./avl-datatable.css */
    "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.css.js");

    var template = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["html"](_templateObject20(), _avl_controls_core_dist_all_initial_css__WEBPACK_IMPORTED_MODULE_2__["allInitial"], _avl_datatable_css__WEBPACK_IMPORTED_MODULE_12__["style"]); //# sourceMappingURL=avl-datatable.html.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.js ***!
    \**********************************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesAvlControlsDatatableDistAvlDatatableAvlDatatableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_localization_service_avl_localization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-localization-service/avl-localization-service */
    "./node_modules/@avl-controls/core/dist/avl-localization-service/avl-localization-service.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_localization_service_avl_localization_service__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_avl_controls_core_dist_avl_localization_service_avl_localization_service__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _avl_controls_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @avl-controls/interfaces */
    "./node_modules/@avl-controls/interfaces/index.js");
    /* harmony import */


    var _column_definitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./column-definitions */
    "./node_modules/@avl-controls/datatable/dist/avl-datatable/column-definitions.js");
    /* harmony import */


    var _array_data_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./array-data-provider */
    "./node_modules/@avl-controls/datatable/dist/avl-datatable/array-data-provider.js");
    /* harmony import */


    var _avl_datatable_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./avl-datatable.html */
    "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.html.js");
    /* harmony import */


    var _avl_datatable_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./avl-datatable.models */
    "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.models.js");
    /* harmony import */


    var _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./avl-datatable.consts */
    "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.consts.js");

    var AvlDatatableImpl = /*#__PURE__*/function (_polymer_polymer_poly10) {
      _inherits(AvlDatatableImpl, _polymer_polymer_poly10);

      var _super10 = _createSuper(AvlDatatableImpl);

      function AvlDatatableImpl() {
        var _this33;

        _classCallCheck(this, AvlDatatableImpl);

        _this33 = _super10.apply(this, arguments);
        _this33.singleSelect = false;
        _this33.multiSelect = false;
        _this33.allowActiveRow = false;
        _this33.checkboxAllSelectClicked = false;
        _this33.pageSize = _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_PAGE_SIZE"];
        _this33.selectedPage = 0;
        _this33.globalFilter = false;
        _this33.globalFilterLabel = 'Filter...';
        _this33.treeColumn = false;
        _this33.pageSizeOptions = _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_PAGE_SIZE_OPTIONS"];
        _this33.pageSizeLabel = _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_PAGE_SIZE_LABEL"];
        _this33.dialogFooter = false;
        _this33.pageSizeIndex = 0;
        _this33.leafColumns = [];
        _this33.pages = {};
        _this33._data = undefined;
        _this33._lastFilters = new Map(); // only used for pagination

        _this33.dataProviderCalled = false; // if vaadin data provider has been called since init

        _this33.recreatingHeaders = false;
        _this33.isLazyLoading = true;
        _this33.checkboxClicked = false;
        _this33.row2formattedRow = new Map();
        _this33.idx2formattedRow = new Map();
        _this33.rowIndexPropertyName = '__index';
        _this33.rowPropertyName = '__row';
        _this33.columnSelectorLabel = 'Manage columns';
        _this33.resetButtonLabel = 'Reset to default'; // used for calculating pages

        _this33.totalNumOfRows = 0; // TODO: there are actually 2 arrays -> raw/real and formatted, formatted is passed to vaadin and used for
        // selecting and deselecting but when returning data to user (upon selection) we want to return
        // to user the raw/real data -> this wouldn't have to be so if directly used raw rows with vaadin row templates

        _this33.__rowsCache = []; // caching remote data which is transformed to formatted data

        _this33.__formattedRowsCache = []; // this is passed to vaadin grid and it is used for de/selecting rows

        _this33.selectedIndex = undefined;
        _this33.selectedValue = undefined;
        _this33.selectedIndexes = [];
        _this33.selectedValues = [];
        _this33.lastActiveItem = undefined;

        _this33.range = function (start, end) {
          return _toConsumableArray(Array(end - start).keys()).map(function (x) {
            return x + start + 1;
          });
        };

        _this33.formatColumn = function (column) {
          if (!Object(_column_definitions__WEBPACK_IMPORTED_MODULE_3__["isLeafColumn"])(column)) {
            return;
          } // default properties


          column.sortable = !!column.sortable;
          column.flexWidth = column.flexWidth || 0; // default formatter based on type and only for certain types

          switch (column.type) {
            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Number:
              column.formatter = column.formatter || function (value) {
                return AvlLocalizationService.formatNumber(value, column.numberOptions);
              };

              break;

            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Date:
              column.formatter = column.formatter || function (value) {
                return AvlLocalizationService.formatDateTime(value, column.dateTimeOptions);
              };

              break;

            default:
          }
        };

        _this33.selectionColumnRenderer = function (cell, _, rowData) {
          var checkbox = cell.firstElementChild;

          if (!checkbox) {
            checkbox = document.createElement('avl-checkbox');
            checkbox.addEventListener('click', function (e) {
              e.stopPropagation();
              checkbox = e.target;

              if (checkbox.checked) {
                _this33.grid.selectedItems.push(checkbox.__item);

                _this33.selectedValues = _this33.grid.selectedItems.map(function (formattedRow) {
                  return formattedRow[_this33.rowPropertyName];
                });
                _this33.selectedIndexes = _this33.selectedValues.map(function (value) {
                  return _this33.row2formattedRow.get(value)[_this33.rowIndexPropertyName];
                });
              } else {
                var index = _this33.grid.selectedItems.indexOf(checkbox.__item);

                if (index !== -1) {
                  _this33.grid.selectedItems.splice(index, 1);
                }

                _this33.checkboxClicked = false;
                _this33.selectedValues = _this33.grid.selectedItems.map(function (formattedRow) {
                  return formattedRow[_this33.rowPropertyName];
                });
                _this33.selectedIndexes = _this33.selectedValues.map(function (value) {
                  return _this33.row2formattedRow.get(value)[_this33.rowIndexPropertyName];
                });
                _this33.checkboxAllSelectClicked = false;
              }

              if (!_this33.isLazyLoading && _this33.grid.selectedItems.length === _this33.data.length) {
                _this33.checkboxClicked = true;
              }

              if (!_this33.isLazyLoading && !_this33.treeColumn) {
                _this33.headerCheckboxState();
              }
            });
            cell.className = 'table-checkbox';
            cell.appendChild(checkbox);
          }

          var items = [].slice.call(_this33.grid.shadowRoot.querySelector('#items').children);
          var i = 0;

          if (i < items.length) {
            i++;
          } else {
            _this33.checkboxAllSelectClicked = false;
          }

          checkbox.__item = rowData.item;
          checkbox.checked = rowData.selected;
        }; // sets class on cell <vaadin-grid-cell-content>,
        // creates checkbox and adds it inside it in cell content


        _this33.selectionHeaderRenderer = function (cell, _) {
          var refresh = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (!cell) {
            return;
          }

          var className = 'table-header-checkbox';

          if (cell.className === className && !refresh) {
            return;
          }

          cell.className = className;
          cell.id = className;

          var checkbox = _this33.createCheckBox();

          _this33.doLoadGridTask().then(function () {
            if (_this33.isLazyLoading || _this33.singleSelect || _this33.treeColumn) {
              return;
            }

            if (cell.hasChildNodes()) {
              cell.removeChild(cell.firstChild);
            }

            cell.append(checkbox);
          });
        };

        _this33.getColumnNameFromEvent = function (event) {
          var header = event.detail.resizedColumn.firstElementChild;
          return _this33.getLabel(header.content);
        };

        _this33.getLabel = function (headerContent) {
          var label = headerContent.getAttribute ? headerContent.getAttribute('aria-label') : null;

          if (label) {
            return label;
          } else if (headerContent.firstElementChild && !(headerContent.firstElementChild instanceof HTMLImageElement)) {
            return _this33.getLabel(headerContent.firstElementChild);
          } else {
            return headerContent.innerHTML;
          }
        };

        _this33.getColumnNameFromTargetElement = function (target) {
          var firstChild = target.firstElementChild;
          var vaadinGridfilter = firstChild.getElementsByTagName('vaadin-grid-filter')[0];
          var label = vaadinGridfilter ? vaadinGridfilter.firstElementChild['label'] : firstChild.firstElementChild.innerHTML;
          return label;
        };

        _this33.subscribeToSortDirectionChanged = function () {
          if (!_this33.eventSubscription) {
            var gridSorterList = _this33.grid.querySelectorAll('vaadin-grid-sorter');

            var gridSorterLength = gridSorterList.length;
            gridSorterList.forEach(function (sorter, key) {
              sorter.addEventListener('direction-changed', function (event) {
                var detail = {
                  columnName: _this33.getColumnNameFromTargetElement(event.target),
                  sortDirection: event.detail.value
                };

                if (event.detail.value) {
                  // dispatches two events if another column have been sorted previously - for previously sorted column and sorted column
                  _this33.dispatchEvent(new CustomEvent('column-sort-direction-changed', {
                    detail: detail
                  }));
                }
              });

              if (key === gridSorterLength - 1) {
                _this33.eventSubscription = true;
              }
            });
          }
        };

        return _this33;
      }

      _createClass(AvlDatatableImpl, [{
        key: "setVaadinGridSize",
        value: function setVaadinGridSize(pageSize) {
          this.grid.setAttribute('size', String(pageSize));
        }
      }, {
        key: "setTotalRows",
        value: function setTotalRows(numOfRows) {
          if (this.totalNumOfRows === numOfRows) {
            return;
          }

          this.totalNumOfRows = numOfRows;
          this.setVaadinGridSize(this.totalNumOfRows);
          this.pageSizeChanged();
        }
      }, {
        key: "selectedColumnsChanged",
        value: function selectedColumnsChanged(e) {
          this.columnDefinitions = e.detail || this.columnDefinitions.slice();
          var cell = this.shadowRoot.querySelector('#table-header-checkbox');
          this.selectionHeaderRenderer(cell, null, true);
        }
      }, {
        key: "clearCache",
        value: function clearCache() {
          this.grid.clearCache();
        }
      }, {
        key: "areSortOrdersEqual",
        value: function areSortOrdersEqual(prevOrders, newOrders) {
          if (prevOrders.length !== newOrders.length) {
            return false;
          }

          return JSON.stringify(prevOrders) === JSON.stringify(newOrders);
        }
      }, {
        key: "areFiltersEqual",
        value: function areFiltersEqual(prevFilters, newFilters) {
          if (prevFilters.size !== newFilters.size) {
            return false;
          }

          var _iterator16 = _createForOfIteratorHelper(prevFilters),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var _step16$value = _slicedToArray(_step16.value, 2),
                  key = _step16$value[0],
                  value = _step16$value[1];

              if (newFilters.get(key) !== value) {
                return false;
              }
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }

          return true;
        }
      }, {
        key: "getFieldsForGlobalFilter",
        value: function getFieldsForGlobalFilter() {
          var globalFilterableTypes = [_column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Text, _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Button, _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Link, _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].IconText];
          var globalFilterPaths = [];

          if (this.columnDefinitions) {
            this.traverseColumnsAndPerformAction(function (column) {
              if (!Object(_column_definitions__WEBPACK_IMPORTED_MODULE_3__["isLeafColumn"])(column) || column.hidden || !globalFilterableTypes.includes(column.type)) {
                return;
              }

              var path;

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
      }, {
        key: "updateExpandedItems",
        value: function updateExpandedItems(grid, rows) {
          rows.filter(function (row) {
            return row.descendantsMatchFilter;
          }).forEach(function (row) {
            return grid.push('expandedItems', row);
          });
        }
      }, {
        key: "collapseEverything",
        value: function collapseEverything() {
          this.grid.expandedItems = [];
        }
      }, {
        key: "calculateSortOrders",
        value: function calculateSortOrders(orders) {
          return orders.map(function (order) {
            return new _avl_datatable_models__WEBPACK_IMPORTED_MODULE_6__["OrderImpl"](order.path, order.direction === 'asc');
          });
        }
      }, {
        key: "calculateFilters",
        value: function calculateFilters(filters) {
          var calculatedFilters = new Map();

          var _iterator17 = _createForOfIteratorHelper(filters),
              _step17;

          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var filter = _step17.value;

              if (filter && filter.value !== '') {
                calculatedFilters.set(filter.path, filter.value);
              }
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }

          if (this.globalFilter && this.globalFilterValue) {
            calculatedFilters.set(_avl_controls_interfaces__WEBPACK_IMPORTED_MODULE_2__["globalFilterKey"], this.globalFilterValue);
          }

          return calculatedFilters;
        }
      }, {
        key: "formatRows",
        value: function formatRows(data, page, pageSize) {
          var _this34 = this;

          var formattedRows = data.rows.map(function (row, idx) {
            var formattedRow = _this34.formatRow(row);

            formattedRow[_this34.rowIndexPropertyName] = page * pageSize + idx;
            formattedRow[_this34.rowPropertyName] = row;
            return formattedRow;
          });
          return formattedRows;
        }
      }, {
        key: "dataProviderChanged",
        value: function dataProviderChanged() {
          var _this35 = this;

          if (!this.grid) {
            return;
          }

          this.grid.dataProvider = function (params, callback) {
            if (_this35.recreatingHeaders) {
              callback([], 0);
              return;
            } // construct TableDataRequestParamsImpl from params


            var sortOrders = _this35.calculateSortOrders(params.sortOrders);

            var filters = _this35.calculateFilters(params.filters);

            var tableDataRequestParams = {
              page: params.page,
              pageSize: Math.min(params.pageSize, _this35.pageSize),
              filters: filters,
              globalFilterFields: _this35.getFieldsForGlobalFilter(),
              sortOrders: sortOrders,
              parentItem: params.parentItem ? params.parentItem[_this35.rowPropertyName] : params.parentItem
            };

            _this35.dataProvider(tableDataRequestParams).then(function (providerData) {
              var formattedRows = _this35.formatRows(providerData, params.page, params.pageSize);

              _this35.cacheRowsForLookup(providerData, params.page, params.pageSize, formattedRows);

              if (tableDataRequestParams.parentItem) {
                callback(formattedRows, providerData.totalRows);
              } else {
                callback(formattedRows);

                _this35.setTotalRows(providerData.totalRows);
              }

              _this35.updateExpandedItems(_this35.grid, formattedRows);

              _this35.dataProviderCalled = true;

              _this35.deselectEverything();

              _this35.subscribeToSortDirectionChanged();
            });
          };
        }
      }, {
        key: "globalFilterValueChanged",
        value: function globalFilterValueChanged() {
          if (this.dataProviderCalled) {
            this.clearCache();
          }

          this.resetCheckboxes();
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this36 = this;

          _get(_getPrototypeOf(AvlDatatableImpl.prototype), "connectedCallback", this).call(this);

          if (AvlLocalizationService && AvlLocalizationService.translationService) {
            this.translateLabels();
          }

          var ofMenu = this.$.overflowMenu;
          this.grid.addEventListener('active-item-changed', function (e) {
            return _this36.activeItemChanged(e.detail.value);
          });
          this.grid.addEventListener('click', function (e) {
            var constructEventDetail = function constructEventDetail(t) {
              return {
                row: t['item'][_this36.rowPropertyName],
                valueField: t.getAttribute('value-field')
              };
            };

            var target = e.target;

            if (target.tagName.toLocaleLowerCase() === 'avl-button' || target.tagName.toLocaleLowerCase() === 'avl-icon-button') {
              if (target.hasAttribute('overflow-menu')) {
                if (ofMenu.trigger !== e.target) {
                  _this36.handleOverflowMenuClick(e);
                }
              } else {
                var detail = constructEventDetail(target);

                _this36.dispatchEvent(new CustomEvent('button-click', {
                  detail: detail
                }));
              }
            } else if (target.tagName.toLowerCase() === 'a') {
              if (target.hasAttribute('do-not-follow-links')) {
                e.preventDefault();
              }

              var _detail = constructEventDetail(target);

              _this36.dispatchEvent(new CustomEvent('link-click', {
                detail: _detail
              }));
            }
          });
          this.grid.addEventListener('column-resize', function (event) {
            var detail = {
              columnName: _this36.getColumnNameFromEvent(event),
              columnSize: event.detail.resizedColumn.width
            };

            _this36.dispatchEvent(new CustomEvent('column-size-changed', {
              detail: detail
            }));
          });
        }
      }, {
        key: "translateLabels",
        value: function () {
          var _translateLabels3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var translationService;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(!AvlLocalizationService || !AvlLocalizationService.translationService)) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 2:
                    translationService = AvlLocalizationService.translationService;
                    _context3.next = 5;
                    return translationService.translate('VizBox.AvlDatatable.Columns');

                  case 5:
                    this.columnSelectorLabel = _context3.sent;
                    _context3.next = 8;
                    return translationService.translate('VizBox.AvlDatatable.Reset');

                  case 8:
                    this.resetButtonLabel = _context3.sent;

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function translateLabels() {
            return _translateLabels3.apply(this, arguments);
          }

          return translateLabels;
        }()
      }, {
        key: "handleOverflowMenuClick",
        value: function handleOverflowMenuClick(e) {
          var _this37 = this;

          var ofMenu = this.$.overflowMenu;
          var target = e.target;

          if (ofMenu.trigger !== target) {
            ofMenu.removeEventListener('item-clicked', this.overflowMenuItemClickedListener);

            this.overflowMenuItemClickedListener = function (event) {
              var detail = {
                row: target['item'][_this37.rowPropertyName],
                valueField: target.getAttribute('value-field'),
                item: event.detail.value
              };

              _this37.dispatchEvent(new CustomEvent('overflow-menu-item-click', {
                detail: detail
              }));
            };

            var cellId = parseInt(target.parentElement.getAttribute('column-index'), 10);
            var menuItems = this.leafColumns[cellId].menuItems;
            ofMenu.items = menuItems;
            ofMenu.trigger = e.target;
            setTimeout(function () {
              ofMenu.open = true;
            });
            ofMenu.addEventListener('item-clicked', this.overflowMenuItemClickedListener);
          }
        }
      }, {
        key: "traverseColumnsAndPerformAction",
        value: function traverseColumnsAndPerformAction(action) {
          // copy list
          var stack = this.columnDefinitions.slice(); // do DFS starting from left-most column

          while (stack.length) {
            var column = stack.shift(); // add children to stack

            if (Object(_column_definitions__WEBPACK_IMPORTED_MODULE_3__["isGroupColumn"])(column) && column.childColumns) {
              stack.unshift.apply(stack, _toConsumableArray(column.childColumns.slice()));
            }

            action(column);
          }
        }
      }, {
        key: "formatRow",
        value: function formatRow(row, index) {
          // copy row
          var formattedRow = JSON.parse(JSON.stringify(row));

          var _iterator18 = _createForOfIteratorHelper(this.leafColumns),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var leafCol = _step18.value;

              // format for certain data types
              if (leafCol.type === _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Number || leafCol.type === _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Date) {
                var object = Object(_array_data_provider__WEBPACK_IMPORTED_MODULE_4__["getValueFromPath"])(formattedRow, leafCol.valueField);

                if (object !== undefined && object !== null) {
                  var parentObject = Object(_array_data_provider__WEBPACK_IMPORTED_MODULE_4__["getParentObjectFromPath"])(formattedRow, leafCol.valueField);
                  var propertyName = leafCol.valueField.split('.')[leafCol.valueField.split('.').length - 1];

                  if (leafCol.type === _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Date) {
                    parentObject[propertyName] = new Date(parentObject[propertyName]);
                  }

                  parentObject[propertyName] = leafCol.formatter(parentObject[propertyName]);
                }
              }
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          return formattedRow;
        }
      }, {
        key: "setPages",
        value: function setPages() {
          if (!this.totalNumOfRows || !this.pageSize) {
            return;
          }

          var pages = {};
          var totalPages = Math.ceil(this.totalNumOfRows / this.pageSize);

          if (totalPages <= _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MAX_PAGES_PER_SECTION"] + _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MIN_PAGES_PER_SECTION"]) {
            // one section - too few pages to split them into multiple sections
            pages.left = this.range(0, totalPages);
          } else if (this.selectedPage < _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MAX_PAGES_PER_SECTION"] - 1) {
            // split pages into two sections with first one containing selected page
            pages.left = this.range(0, _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MAX_PAGES_PER_SECTION"]);
            pages.middle = this.range(totalPages - _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MIN_PAGES_PER_SECTION"], totalPages);
          } else {
            // left section has minimum number of pages
            pages.left = this.range(0, _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MIN_PAGES_PER_SECTION"]);

            if (this.selectedPage > totalPages - _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MAX_PAGES_PER_SECTION"]) {
              // middle section has maximum number of pages (tail part of the array) and contains selected page
              pages.middle = this.range(totalPages - _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MAX_PAGES_PER_SECTION"], totalPages);
            } else {
              // three sections with selected page in the middle one
              var startMiddle = this.selectedPage - Math.floor(_avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MAX_PAGES_PER_SECTION"] / 2);
              pages.middle = this.range(startMiddle, startMiddle + _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MAX_PAGES_PER_SECTION"]);
              pages.right = this.range(totalPages - _avl_datatable_consts__WEBPACK_IMPORTED_MODULE_7__["MIN_PAGES_PER_SECTION"], totalPages);
            }
          }

          this.pages = pages;
        }
      }, {
        key: "pageSizeChanged",
        value: function pageSizeChanged() {
          var _this38 = this;

          if (!this.pagination) {
            this.pageSize = 50;
            return;
          }

          if (Number.isNaN(this.pageSize) || this.pageSize < 1) {
            return;
          }

          var truncatedNumber = Math.trunc(this.pageSize);

          if (this.pageSize !== truncatedNumber) {
            this.pageSize = truncatedNumber;
            return;
          } // Adjusts the page size options dropdown, if value exists


          this.pageSizeIndex = this.pageSizeOptions.findIndex(function (option) {
            return option.value === _this38.pageSize;
          });
          this.updateTable();
        }
      }, {
        key: "updateTable",
        value: function updateTable() {
          if (this.totalNumOfRows === 0) {
            this.pages = {};
            return;
          }

          this.selectedPage = 0;
          var gridSize = Math.min(this.pageSize, this.totalNumOfRows);
          this.setVaadinGridSize(gridSize);
          this.setPages();
        }
      }, {
        key: "pageSizeIndexChanged",
        value: function pageSizeIndexChanged() {
          if (this.pageSizeIndex > -1) {
            this.pageSize = this.pageSizeOptions[this.pageSizeIndex].value;
          }
        }
      }, {
        key: "selectedPageChanged",
        value: function selectedPageChanged() {
          var _this39 = this;

          this.setPages();

          if (!this.grid || !this.dataProvider || !this.pagination) {
            return;
          }

          this.grid.dataProvider = function (params, callback) {
            // construct TableDataRequestParamsImpl from params
            var sortOrders = _this39.calculateSortOrders(params.sortOrders);

            var filters = _this39.calculateFilters(params.filters);
            /* if filters changed since the last time dataProvider has been called we need to set selected
            page to 0 because we don't know how many rows/pages there will be after fetching the data  */


            if (!_this39.areFiltersEqual(_this39._lastFilters, filters)) {
              _this39.selectedPage = 0;
            }

            _this39._lastFilters = filters;
            var tableDataRequestParams = {
              page: _this39.selectedPage,
              pageSize: Math.min(_this39.totalNumOfRows, _this39.pageSize),
              filters: filters,
              globalFilterFields: _this39.getFieldsForGlobalFilter(),
              sortOrders: sortOrders,
              parentItem: params.parentItem ? params.parentItem[_this39.rowPropertyName] : params.parentItem
            };

            _this39.dataProvider(tableDataRequestParams).then(function (providerData) {
              // format rows
              var formattedRows = _this39.formatRows(providerData, params.page, params.pageSize);

              _this39.cacheRowsForLookup(providerData, params.page, params.pageSize, formattedRows);

              if (tableDataRequestParams.parentItem) {
                callback(formattedRows, providerData.totalRows);
              } else {
                callback(formattedRows);

                _this39.setTotalRows(providerData.totalRows); // If this is the last page, number of rows might be smaller than the page size.


                if (_this39.selectedPage === Math.ceil(_this39.totalNumOfRows / _this39.pageSize) - 1) {
                  _this39.setVaadinGridSize(providerData.rows.length);
                } else {
                  // If the size was changed on the last page, set it back.
                  _this39.setVaadinGridSize(_this39.pageSize);
                }
              }

              _this39.updateExpandedItems(_this39.grid, formattedRows);
            });
          };
        }
      }, {
        key: "isLeftButtonDisabled",
        value: function isLeftButtonDisabled(page) {
          return page === 0;
        }
      }, {
        key: "isRightButtonDisabled",
        value: function isRightButtonDisabled(page, pageSize) {
          var totalPages = Math.ceil(this.totalNumOfRows / pageSize);
          return this.totalNumOfRows === 0 || page === totalPages - 1;
        }
      }, {
        key: "deselectEverything",
        value: function deselectEverything() {
          if (this.singleSelect) {
            this.selectedValue = undefined;
          }

          if (this.multiSelect && this.selectedValues.length > 0) {
            this.selectedValues = [];
            this.selectedIndexes = [];
          }
        } // Pagination

      }, {
        key: "_isSelected",
        value: function _isSelected(page, item) {
          return page === item - 1;
        }
      }, {
        key: "_select",
        value: function _select(e) {
          // selection is not persistent when changing pages
          this.deselectEverything();
          this.collapseEverything();
          this.resetCheckboxes();
          this.selectedPage = e.model.item - 1;
        }
      }, {
        key: "_next",
        value: function _next() {
          // selection is not persistent when changing pages
          this.deselectEverything();
          this.collapseEverything();
          this.resetCheckboxes();
          var totalPages = Math.ceil(this.totalNumOfRows / this.pageSize);
          this.selectedPage = Math.min(totalPages - 1, this.selectedPage + 1);
        }
      }, {
        key: "_prev",
        value: function _prev() {
          // selection is not persistent when changing pages
          this.deselectEverything();
          this.collapseEverything();
          this.resetCheckboxes();
          this.selectedPage = Math.max(0, this.selectedPage - 1);
        }
      }, {
        key: "columnDefinitionsChanged",
        value: function columnDefinitionsChanged() {
          if (!this.columnDefinitions) {
            return;
          }

          var childColumnsExist = JSON.stringify(this.columnDefinitions).indexOf('childColumns') !== -1;

          if (childColumnsExist && this.columnSelector) {
            this.columnSelector = false;
            throw new Error('Column selector is not supported with grouped headers');
          }

          this.createHeaders();
        }
      }, {
        key: "treeColumnChanged",
        value: function treeColumnChanged() {
          if (!this.treeColumn || !this.columnDefinitions) {
            return;
          }

          this.createHeaders();
        }
      }, {
        key: "createHeaders",
        value: function createHeaders() {
          var _this40 = this;

          var oldColumns = this.shadowRoot.querySelectorAll('vaadin-grid-column, vaadin-grid-column-group');

          if (oldColumns.length) {
            this.recreatingHeaders = true; // reset filter and sorter when changing headers because vaadin still remembers them even if elements are removed

            this.grid.querySelectorAll('.filter-textfield').forEach(function (el) {
              return el['value'] = '';
            });
            this.grid.querySelectorAll('vaadin-grid-sorter').forEach(function (el) {
              return el['direction'] = null;
            });
            oldColumns.forEach(function (c) {
              return c.parentElement.removeChild(c);
            });
          }

          this.traverseColumnsAndPerformAction(this.formatColumn);
          this.leafColumns = [];
          this.columnDefinitions.map(function (col, id) {
            return _this40.createGridHeaderHTML(col, String(id));
          }).filter(function (header) {
            return header;
          }).forEach(function (header) {
            return _this40.grid.appendChild(header);
          });

          if (this.recreatingHeaders) {
            this.recreatingHeaders = false;

            if (this.dataProviderCalled) {
              this.clearCache();
            }
          }

          this.leafColumns.filter(function (col) {
            return col.filterable;
          }).forEach(function (col) {
            return setTimeout(function () {
              return _this40.filterLeafColumn(col);
            }, 0);
          });
        }
      }, {
        key: "createGridHeaderHTML",
        value: function createGridHeaderHTML(col, testLabel) {
          if (Object(_column_definitions__WEBPACK_IMPORTED_MODULE_3__["isGroupColumn"])(col)) {
            return this.createGroupGridHeaderHTML(col, testLabel);
          }

          if (Object(_column_definitions__WEBPACK_IMPORTED_MODULE_3__["isLeafColumn"])(col)) {
            this.leafColumns.push(col);
            return this.getLeafColumnHTML(col, this.leafColumns.length - 1, testLabel);
          }

          throw new Error('Unknown type. Column definition for LeafColumn must have valueField property set' + col);
        }
      }, {
        key: "createGroupGridHeaderHTML",
        value: function createGroupGridHeaderHTML(column, testLabel) {
          var _this41 = this;

          var columnGroupHeader = document.createElement('vaadin-grid-column-group');
          columnGroupHeader.resizable = true;
          var headerTemplate = document.createElement('template');
          headerTemplate.classList.add('header');
          headerTemplate.innerHTML = "<span class=\"header-content\" test-label=\"".concat(testLabel, "\">").concat(column.caption, "</span>");
          columnGroupHeader.appendChild(headerTemplate);
          column.childColumns.map(function (col, id) {
            return _this41.createGridHeaderHTML(col, testLabel + '>' + id);
          }).filter(function (col) {
            return col;
          }).forEach(function (col) {
            return columnGroupHeader.appendChild(col);
          });
          return columnGroupHeader;
        }
      }, {
        key: "getLeafColumnTemplate",
        value: function getLeafColumnTemplate(column) {
          var style = "".concat(column.defaultStyle || '', "[[item.").concat(column.valueField, "Style]]");

          switch (column.type) {
            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Text:
              return "<div style=\"".concat(style, "\" class=\"textColumn\" title=\"[[item.").concat(column.valueField, "]]\">[[item.").concat(column.valueField, "]]</div>");

            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Number:
              return "<div style=\"".concat(style, "\" class=\"numberColumn\" title=\"[[item.").concat(column.valueField, "]]\">[[item.").concat(column.valueField, "]]</div>");

            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Date:
              return "<div style=\"".concat(style, "\" class=\"elipsis dateColumn\" title=\"[[item.").concat(column.valueField, "]]\">[[item.").concat(column.valueField, "]]</div>");

            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Icon:
              return "<div class=\"flex-center\" ><avl-icon style=\"".concat(style, "\" icon=\"[[item.").concat(column.valueField, "]]\"></avl-icon></div>");

            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Image:
              return "<img style=\"".concat(style, "\" src=\"[[item.").concat(column.valueField, "]]\">");

            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Checkbox:
              return "<avl-checkbox style=\"".concat(style, "\" checked=\"[[item.").concat(column.valueField, "]]\" disabled></avl-checkbox>");

            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Button:
              return "<template is=\"dom-if\" if=\"[[item.".concat(column.valueField, "]]\"><avl-button style=\"").concat(style, "\" item=\"{{item}}\" value-field=\"").concat(column.valueField, "\">[[item.").concat(column.valueField, "]]</avl-button></template>");

            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].IconButton:
              return "<avl-icon-button style=\"".concat(style, "\" item=\"{{item}}\" value-field=\"").concat(column.valueField, "\" icon=\"{{item.").concat(column.valueField, "}}\"></avl-icon-button>");

            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].Link:
              return "<a style=\"".concat(style, "\" href=\"[[item.").concat(column.valueField, ".href]]\" target=\"[[item.").concat(column.valueField, ".target]]\" item=\"{{item}}\" value-field=\"").concat(column.valueField, "\" ").concat(column.doNotFollowLinks ? 'do-not-follow-links' : '', " >[[item.").concat(column.valueField, ".text]]</a>");

            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].IconText:
              return "<div class=\"iconText\"><avl-icon style=\"".concat(style, "\" icon=\"[[item.").concat(column.valueField, ".icon]]\"></avl-icon><p>[[item.").concat(column.valueField, ".text]]</p></div>");

            case _column_definitions__WEBPACK_IMPORTED_MODULE_3__["ColumnType"].OverflowMenu:
              return "<avl-icon-button item=\"{{item}}\" overflow-menu icon=\"more-vert\" value-field=\"".concat(column.valueField, "\" style=\"").concat(style, "\"></avl-icon-button>");

            default:
              return '';
          }
        }
      }, {
        key: "getLeafColumnHTML",
        value: function getLeafColumnHTML(column, columnIndex, testLabel) {
          if (column.hidden) {
            return undefined;
          }

          var header; // Header icon or image

          var iconOrImageHtml = '';

          if (column.headerIcon) {
            iconOrImageHtml = "<avl-icon class=\"header-icon\" icon=\"".concat(column.headerIcon, "\"></avl-icon>");
          } else if (column.headerImage) {
            iconOrImageHtml = "<img class=\"header-image\" src=\"".concat(column.headerImage, "\"></i>");
          }

          if (column.filterable) {
            var variableName = '_' + column.valueField.replace('.', '_');
            header = "<vaadin-grid-filter aria-label=\"".concat(column.caption, "\" path=\"").concat(column.valueField, "\" value=\"[[").concat(variableName, "]]\">\n                  <avl-textfield slot=\"filter\" no-label-float compact-mode class=\"filter-textfield\"\n                    label=\"").concat(column.caption, "\"\n                    value=\"{{").concat(variableName, "}}\" focus-target> </avl-textfield>\n                </vaadin-grid-filter>");
          } else if (iconOrImageHtml) {
            header = "<span class=\"header-icon-content\" test-label=\"".concat(testLabel, "\">").concat(iconOrImageHtml, "</span>");
          } else {
            header = "<span class=\"header-content\" test-label=\"".concat(testLabel, "\">").concat(column.caption, "</span>");
          }

          if (column.sortable) {
            var direction = column.sortDirection ? 'direction="' + column.sortDirection + '"' : '';
            header = "<vaadin-grid-sorter path=\"".concat(column.valueField, "\" ").concat(direction, ">\n                  <div class=\"cell sortable-header\">\n                    ").concat(header, "\n                  </div>\n                </vaadin-grid-sorter>");
          }

          var columnEl = document.createElement('vaadin-grid-column');
          columnEl.resizable = true;

          if (column.width) {
            columnEl.setAttribute('width', column.width);
          }

          columnEl.setAttribute('flex-grow', column.flexWidth.toString());
          var headerTemplate = document.createElement('template');
          headerTemplate.classList.add('header');
          headerTemplate.innerHTML = header;
          var itemTemplate = document.createElement('template');
          var itemTemplateString = "<span class=\"cell-content\" column-index=\"".concat(columnIndex, "\" row-index$=\"{{index}}\">").concat(this.getLeafColumnTemplate(column), "</span>");

          if (this.treeColumn && columnIndex === 0) {
            itemTemplateString = "<vaadin-grid-tree-toggle leaf=\"[[!item.hasChildren]]\" expanded=\"{{expanded}}\" level=\"[[level]]\">\n              ".concat(itemTemplateString, "\n        </vaadin-grid-tree-toggle>");
          }

          itemTemplate.innerHTML = itemTemplateString;
          columnEl.appendChild(headerTemplate);
          columnEl.appendChild(itemTemplate);
          return columnEl;
        }
      }, {
        key: "getGridClass",
        value: function getGridClass(pagination, globalFilter) {
          var classList = [];

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
      }, {
        key: "headerCheckboxState",
        value: function headerCheckboxState() {
          var _a;

          var tableHeaderCheckbox = this.grid.querySelector('#table-header-checkbox');

          if (!((_a = tableHeaderCheckbox === null || tableHeaderCheckbox === void 0 ? void 0 : tableHeaderCheckbox.children) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
          }

          var child = this.grid.querySelector('#table-header-checkbox').children[0];

          if (this.grid.selectedItems.length && this.grid.selectedItems.length !== this.grid.items.length) {
            child.indeterminate = true;
          } else if (this.grid.selectedItems.length === this.grid.items.length) {
            child.checked = true;
            child.indeterminate = false;
          } else if (!this.grid.selectedItems.length) {
            child.checked = false;
            child.indeterminate = false;
          }
        }
      }, {
        key: "createCheckBox",
        value: function createCheckBox() {
          var _this42 = this;

          var checkbox = document.createElement('avl-checkbox');
          checkbox.addEventListener('click', function (e) {
            e.stopPropagation();

            if (!_this42.checkboxClicked || !checkbox.checked) {
              if (checkbox.checked) {
                _this42.checkboxAllSelectClicked = true;
                var items = [].slice.call(_this42.grid.shadowRoot.querySelector('#items').children);
                _this42.grid.selectedItems = [];
                items = items.slice(0, _this42.grid.items.length);
                items.forEach(function (item) {
                  _this42.grid.selectedItems.push(item._item);

                  item.children[0]._content.children[0].checked = true;
                });

                if (_this42.pagination) {
                  if (!_this42.isLazyLoading && _this42.grid.selectedItems.length === _this42.grid.items.length) {
                    var values = _this42.grid.selectedItems.map(function (formattedRow) {
                      return formattedRow[_this42.rowPropertyName];
                    });

                    _this42.selectedValues = values.slice(0, _this42.grid.items.length);
                    _this42.selectedIndexes = _this42.selectedValues.map(function (value) {
                      return _this42.row2formattedRow.get(value)[_this42.rowIndexPropertyName];
                    });
                  }
                } else {
                  if (!_this42.isLazyLoading && _this42.grid.selectedItems.length === _this42.data.length) {
                    _this42.selectedValues = _this42.grid.selectedItems.map(function (formattedRow) {
                      return formattedRow[_this42.rowPropertyName];
                    });
                    _this42.selectedIndexes = _this42.selectedValues.map(function (value) {
                      return _this42.row2formattedRow.get(value)[_this42.rowIndexPropertyName];
                    });
                  }
                }
              } else {
                _this42.grid.selectedItems = [];

                if (!_this42.isLazyLoading) {
                  _this42.selectedValues = _this42.grid.selectedItems.map(function (formattedRow) {
                    return formattedRow[_this42.rowPropertyName];
                  });
                  _this42.selectedIndexes = _this42.selectedValues.map(function (value) {
                    return _this42.row2formattedRow.get(value)[_this42.rowIndexPropertyName];
                  });
                }

                _this42.checkboxClicked = false;
                _this42.checkboxAllSelectClicked = false;
              }
            } else {
              _this42.checkboxClicked = false;
            }
          });
          return checkbox;
        }
      }, {
        key: "resetCheckboxes",
        value: function resetCheckboxes() {
          var _this43 = this;

          return new Promise(function (resolve) {
            if (_this43.grid.selectedItems.length > 0) {
              _this43.selectedValues = [];
            }

            var tableHeaderCheckbox = _this43.grid.querySelector('#table-header-checkbox');

            if (tableHeaderCheckbox && tableHeaderCheckbox.children.length > 0) {
              tableHeaderCheckbox.children[0].checked = false;
              tableHeaderCheckbox.children[0].indeterminate = false;
            }

            if (_this43.grid.selectedItems.length > 0) {
              _this43.grid.selectedItems = [];
            }

            resolve('done');
          });
        }
      }, {
        key: "doLoadGridTask",
        value: function doLoadGridTask() {
          var _this44 = this;

          return new Promise(function (resolve) {
            setTimeout(function () {
              var numChilds = _this44.grid.shadowRoot.querySelector('#items').childElementCount;

              if (numChilds > 0) {
                resolve('done');
              }
            }, 100);
          });
        }
      }, {
        key: "filterLeafColumn",
        value: function filterLeafColumn(col) {
          var _this45 = this;

          if (this.grid.querySelector("vaadin-grid-filter[path=\"".concat(col.valueField, "\"]"))) {
            var filterGridFilterElement = this.grid.querySelector("vaadin-grid-filter[path=\"".concat(col.valueField, "\"]"));
            var filterTextfield = filterGridFilterElement.querySelector('avl-textfield');
            filterTextfield.addEventListener('value-changed', function (e) {
              _this45.resetCheckboxes();
            });
            filterTextfield['value'] = col.filterKey;
          }
        }
      }, {
        key: "cacheRowsForLookup",
        value: function cacheRowsForLookup(data, page, pageSize, formattedRows) {
          var _this46 = this;

          data.rows.forEach(function (row, idx) {
            var tableIdx = page * pageSize + idx;

            _this46.row2formattedRow.set(row, formattedRows[idx]);

            _this46.idx2formattedRow.set(tableIdx, formattedRows[idx]);
          });
        }
      }, {
        key: "activeItemChanged",
        value: function activeItemChanged(activeItem) {
          if (activeItem === null) {
            activeItem = this.lastActiveItem;
          }

          if (this.allowActiveRow) {
            this.activeRow = activeItem;
            this.grid.shadowRoot.querySelectorAll('#items tr').forEach(function (el) {
              return el.removeAttribute('selected');
            });
            this.grid.shadowRoot.activeElement.parentNode.setAttribute('selected', 'true'); // set properties

            if (!this.singleSelect) {
              this.selectedIndex = activeItem ? activeItem[this.rowIndexPropertyName] : undefined;
              this.selectedValue = activeItem ? activeItem[this.rowPropertyName] : undefined;
              this.grid.shadowRoot.activeElement.parentNode.setAttribute('selected', 'true');
            }
          }

          this.lastActiveItem = activeItem; // single select mode

          if (this.singleSelect && activeItem) {
            // select clicked item or deselect it if it was previously selected
            if (this.grid.selectedItems[0] === activeItem) {
              this.grid.deselectItem(activeItem);
            } else {
              // only one can be selected in single select mode
              this.grid.selectedItems = [];
              this.grid.selectItem(activeItem);
            } // set properties


            this.selectedIndex = this.grid.selectedItems[0] ? activeItem[this.rowIndexPropertyName] : undefined;
            this.selectedValue = this.grid.selectedItems[0] ? activeItem[this.rowPropertyName] : undefined;
            return;
          }
        }
      }, {
        key: "singleSelectChanged",
        value: function singleSelectChanged() {
          // reset multi select if someone turned on single select
          if (this.singleSelect) {
            this.multiSelect = false;
            this.selectedIndexes = [];
            this.selectedValues = [];
          }

          this.grid.selectedItems = [];
        }
      }, {
        key: "multiSelectChanged",
        value: function multiSelectChanged() {
          // reset single select if someone turned on single select
          if (this.multiSelect) {
            // reset selectedIndex and selectedValue
            this.singleSelect = false;
            this.selectedIndex = undefined;
            this.selectedValue = undefined;
          }

          this.grid.selectedItems = [];
        }
      }, {
        key: "selectedValueChanged",
        value: function selectedValueChanged() {
          if (this.multiSelect) {
            return;
          }

          this.grid.selectedItems = []; // if invalid value or undefined just return

          if (!this.singleSelect || !this.selectedValue) {
            return;
          } // selectItem ignores undefined values


          this.grid.selectItem(this.row2formattedRow.get(this.selectedValue)); // sync index

          this.selectedIndex = this.row2formattedRow.get(this.selectedValue)[this.rowIndexPropertyName];
        }
      }, {
        key: "selectedIndexChanged",
        value: function selectedIndexChanged() {
          if (this.multiSelect) {
            return;
          } // deselect everything


          this.grid.selectedItems = []; // if invalid value or undefined just return

          if (!this.singleSelect || typeof this.selectedIndex !== 'number') {
            return;
          } // selectItem ignores undefined values


          this.grid.selectItem(this.idx2formattedRow.get(this.selectedIndex)); // properly set selected value

          this.selectedValue = this.idx2formattedRow.get(this.selectedIndex)[this.rowPropertyName];
        }
      }, {
        key: "selectedValuesChanged",
        value: function selectedValuesChanged() {
          var _this47 = this;

          this.doLoadGridTask().then(function () {
            _this47.refreshSelectedValues();

            if (!_this47.isLazyLoading && !_this47.treeColumn) {
              _this47.headerCheckboxState();
            }
          });
        }
      }, {
        key: "refreshSelectedValues",
        value: function refreshSelectedValues() {
          var _this48 = this;

          if (!this.multiSelect || !Array.isArray(this.selectedValues)) {
            return;
          } // deselect everything


          this.grid.selectedItems = []; // selectItem ignores undefined values

          this.selectedValues.forEach(function (value) {
            return _this48.grid.selectItem(_this48.row2formattedRow.get(value));
          }); // compare if already set

          var selectedIndexes = this.selectedValues.map(function (value) {
            return _this48.row2formattedRow.get(value)[_this48.rowIndexPropertyName];
          });

          if (this.selectedIndexes.length !== selectedIndexes.length) {
            this.selectedIndexes = selectedIndexes;
            return;
          }

          for (var idx in selectedIndexes) {
            if (selectedIndexes[idx] !== this.selectedIndexes[idx]) {
              this.selectedIndexes = selectedIndexes;
              return;
            }
          }
        }
      }, {
        key: "selectedIndexesChanged",
        value: function selectedIndexesChanged() {
          var _this49 = this;

          this.doLoadGridTask().then(function () {
            _this49.refreshSelectedIndexes();

            if (!_this49.isLazyLoading && !_this49.treeColumn) {
              _this49.headerCheckboxState();
            }
          });
        }
      }, {
        key: "refreshSelectedIndexes",
        value: function refreshSelectedIndexes() {
          var _this50 = this;

          if (!this.multiSelect || !Array.isArray(this.selectedIndexes)) {
            return;
          } // deselect everything


          this.grid.selectedItems = []; // selectItem ignores undefined values

          this.selectedIndexes.forEach(function (idx) {
            return _this50.grid.selectItem(_this50.idx2formattedRow.get(idx));
          }); // compare if already set

          var selectedValues = this.selectedIndexes.map(function (idx) {
            return _this50.idx2formattedRow.get(idx)[_this50.rowPropertyName];
          });

          if (this.selectedValues.length !== selectedValues.length) {
            this.selectedValues = selectedValues;
            return;
          }

          for (var idx in selectedValues) {
            if (selectedValues[idx] !== this.selectedValues[idx]) {
              this.selectedValues = selectedValues;
              return;
            }
          }
        }
      }, {
        key: "data",
        get: function get() {
          return this._data;
        },
        set: function set(data) {
          this.__formattedRowsCache = [];
          this._data = data;
          this.dataProvider = Object(_array_data_provider__WEBPACK_IMPORTED_MODULE_4__["default"])(this._data);
          var cell = this.shadowRoot.querySelector('#table-header-checkbox');
          this.selectionHeaderRenderer(cell, null, true);

          if (this.isLazyLoading) {
            this.isLazyLoading = false;
          }
        }
      }, {
        key: "grid",
        get: function get() {
          if (!this._grid) {
            this._grid = this.shadowRoot.querySelector('#grid');
          }

          return this._grid;
        }
      }], [{
        key: "is",
        get: function get() {
          return 'avl-datatable';
        }
      }, {
        key: "template",
        get: function get() {
          return _avl_datatable_html__WEBPACK_IMPORTED_MODULE_5__["template"];
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            columnDefinitions: {
              type: Array,
              observer: 'columnDefinitionsChanged'
            },
            dataProvider: {
              type: Function,
              observer: 'dataProviderChanged'
            },
            pagination: {
              type: Boolean
            },
            dialogFooter: {
              type: Boolean
            },
            pageSize: {
              type: Number,
              notify: true,
              observer: 'pageSizeChanged'
            },
            pageSizeIndex: {
              type: Number,
              observer: 'pageSizeIndexChanged'
            },
            selectedPage: {
              type: Number,
              notify: true,
              observer: 'selectedPageChanged'
            },
            singleSelect: {
              type: Boolean,
              observer: 'singleSelectChanged',
              reflectToAttribute: true,
              value: false
            },
            multiSelect: {
              type: Boolean,
              observer: 'multiSelectChanged',
              reflectToAttribute: true,
              value: false
            },
            allowActiveRow: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },
            activeRow: {
              type: Object,
              notify: true
            },
            selectedIndex: {
              type: Number,
              observer: 'selectedIndexChanged',
              notify: true,
              value: undefined
            },
            selectedValue: {
              type: String,
              observer: 'selectedValueChanged',
              notify: true,
              value: undefined
            },
            selectedIndexes: {
              type: Array,
              observer: 'selectedIndexesChanged',
              notify: true,
              value: []
            },
            selectedValues: {
              type: Array,
              observer: 'selectedValuesChanged',
              notify: true,
              value: []
            },
            globalFilter: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },
            globalFilterValue: {
              type: String,
              observer: 'globalFilterValueChanged'
            },
            globalFilterLabel: {
              type: String
            },
            treeColumn: {
              type: Boolean,
              value: false,
              reflectToAttribute: true,
              observer: 'treeColumnChanged'
            },
            columnSelector: {
              type: Boolean,
              reflectToAttribute: true
            },
            pageSizeLabel: String
          };
        }
      }]);

      return AvlDatatableImpl;
    }(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

    customElements.define(AvlDatatableImpl.is, AvlDatatableImpl); //# sourceMappingURL=avl-datatable.js.map

    /***/
  },

  /***/
  "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.models.js":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.models.js ***!
    \*****************************************************************************************/

  /*! exports provided: OrderImpl, VaadinGrid */

  /***/
  function node_modulesAvlControlsDatatableDistAvlDatatableAvlDatatableModelsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderImpl", function () {
      return OrderImpl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VaadinGrid", function () {
      return VaadinGrid;
    });
    /* harmony import */


    var _polymer_polymer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer */
    "./node_modules/@polymer/polymer/polymer-element.js");

    var OrderImpl = function OrderImpl(path, ascending) {
      _classCallCheck(this, OrderImpl);

      this.path = path;
      this.ascending = ascending;
    };

    var VaadinGrid = /*#__PURE__*/function (_polymer_polymer__WEB) {
      _inherits(VaadinGrid, _polymer_polymer__WEB);

      var _super11 = _createSuper(VaadinGrid);

      function VaadinGrid() {
        _classCallCheck(this, VaadinGrid);

        return _super11.apply(this, arguments);
      }

      return VaadinGrid;
    }(_polymer_polymer__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]); //# sourceMappingURL=avl-datatable.models.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/datatable/dist/avl-datatable/column-definitions.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/column-definitions.js ***!
    \***************************************************************************************/

  /*! exports provided: Column, LeafColumn, GroupColumn, ColumnType, isLeafColumn, isGroupColumn */

  /***/
  function node_modulesAvlControlsDatatableDistAvlDatatableColumnDefinitionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Column", function () {
      return Column;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeafColumn", function () {
      return LeafColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupColumn", function () {
      return GroupColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnType", function () {
      return ColumnType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isLeafColumn", function () {
      return isLeafColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isGroupColumn", function () {
      return isGroupColumn;
    });

    var Column = function Column(caption) {
      _classCallCheck(this, Column);

      this.caption = caption;
    };

    var LeafColumn = /*#__PURE__*/function (_Column) {
      _inherits(LeafColumn, _Column);

      var _super12 = _createSuper(LeafColumn);

      function LeafColumn(caption, valueField, type, sortable, filterable, flexWidth, width, formatter, defaultStyle, headerIcon, headerImage, hidden, numberOptions, dateTimeOptions, menuItems, doNotFollowLinks, disabled, sortDirection, filterKey) {
        var _this51;

        _classCallCheck(this, LeafColumn);

        _this51 = _super12.call(this, caption);
        _this51.caption = caption;
        _this51.valueField = valueField;
        _this51.type = type;
        _this51.sortable = sortable;
        _this51.filterable = filterable;
        _this51.flexWidth = flexWidth;
        _this51.width = width;
        _this51.formatter = formatter;
        _this51.defaultStyle = defaultStyle;
        _this51.headerIcon = headerIcon;
        _this51.headerImage = headerImage;
        _this51.hidden = hidden;
        _this51.numberOptions = numberOptions;
        _this51.dateTimeOptions = dateTimeOptions;
        _this51.menuItems = menuItems;
        _this51.doNotFollowLinks = doNotFollowLinks;
        _this51.disabled = disabled;
        _this51.sortDirection = sortDirection;
        _this51.filterKey = filterKey;
        return _this51;
      }

      return LeafColumn;
    }(Column);

    var GroupColumn = /*#__PURE__*/function (_Column2) {
      _inherits(GroupColumn, _Column2);

      var _super13 = _createSuper(GroupColumn);

      function GroupColumn(caption, childColumns) {
        var _this52;

        _classCallCheck(this, GroupColumn);

        _this52 = _super13.call(this, caption);
        _this52.caption = caption;
        _this52.childColumns = childColumns;
        return _this52;
      }

      return GroupColumn;
    }(Column);

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
    } //# sourceMappingURL=column-definitions.js.map

    /***/

  },

  /***/
  "./node_modules/@avl-controls/datatable/dist/avl-datatable/themes/vaadin-grid-material-theme.css.js":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/themes/vaadin-grid-material-theme.css.js ***!
    \**********************************************************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesAvlControlsDatatableDistAvlDatatableThemesVaadinGridMaterialThemeCssJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");

    var $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"](_templateObject21());

    document.head.appendChild($_documentContainer.content); //# sourceMappingURL=vaadin-grid-material-theme.css.js.map

    /***/
  },

  /***/
  "./node_modules/@avl-controls/datatable/dist/avl-datatable/themes/vaadin-grid-sorter-material-theme.css.js":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/@avl-controls/datatable/dist/avl-datatable/themes/vaadin-grid-sorter-material-theme.css.js ***!
    \*****************************************************************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesAvlControlsDatatableDistAvlDatatableThemesVaadinGridSorterMaterialThemeCssJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @vaadin/vaadin-material-styles/color.js */
    "./node_modules/@vaadin/vaadin-material-styles/color.js");
    /* harmony import */


    var _vaadin_vaadin_material_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @vaadin/vaadin-material-styles/font-icons.js */
    "./node_modules/@vaadin/vaadin-material-styles/font-icons.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");

    var $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"](_templateObject22());

    document.head.appendChild($_documentContainer.content); //# sourceMappingURL=vaadin-grid-sorter-material-theme.css.js.map

    /***/
  },

  /***/
  "./node_modules/@avl-controls/interfaces/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/@avl-controls/interfaces/index.js ***!
    \********************************************************/

  /*! exports provided: globalFilterKey */

  /***/
  function node_modulesAvlControlsInterfacesIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _src_avl_dataprovider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./src/avl-dataprovider */
    "./node_modules/@avl-controls/interfaces/src/avl-dataprovider.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "globalFilterKey", function () {
      return _src_avl_dataprovider__WEBPACK_IMPORTED_MODULE_0__["globalFilterKey"];
    });
    /***/

  },

  /***/
  "./node_modules/@avl-controls/interfaces/src/avl-dataprovider.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@avl-controls/interfaces/src/avl-dataprovider.js ***!
    \***********************************************************************/

  /*! exports provided: globalFilterKey */

  /***/
  function node_modulesAvlControlsInterfacesSrcAvlDataproviderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "globalFilterKey", function () {
      return globalFilterKey;
    });
    /**
     * Name of the key used to set global filter value in filters map.
     */


    var globalFilterKey = 'globalFilter';
    /***/
  },

  /***/
  "./node_modules/@polymer/iron-image/iron-image.js":
  /*!********************************************************!*\
    !*** ./node_modules/@polymer/iron-image/iron-image.js ***!
    \********************************************************/

  /*! no exports provided */

  /***/
  function node_modulesPolymerIronImageIronImageJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-legacy.js */
    "./node_modules/@polymer/polymer/polymer-legacy.js");
    /* harmony import */


    var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/legacy/polymer-fn.js */
    "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_resolve_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/resolve-url.js */
    "./node_modules/@polymer/polymer/lib/utils/resolve-url.js");
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
      _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"](_templateObject23()),
      is: 'iron-image',
      properties: {
        /**
         * The URL of an image.
         */
        src: {
          type: String,
          value: ''
        },

        /**
         * A short text alternative for the image.
         */
        alt: {
          type: String,
          value: null
        },

        /**
         * CORS enabled images support:
         * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
         */
        crossorigin: {
          type: String,
          value: null
        },

        /**
         * When true, the image is prevented from loading and any placeholder is
         * shown.  This may be useful when a binding to the src property is known to
         * be invalid, to prevent 404 requests.
         */
        preventLoad: {
          type: Boolean,
          value: false
        },

        /**
         * Sets a sizing option for the image.  Valid values are `contain` (full
         * aspect ratio of the image is contained within the element and
         * letterboxed) or `cover` (image is cropped in order to fully cover the
         * bounds of the element), or `null` (default: image takes natural size).
         */
        sizing: {
          type: String,
          value: null,
          reflectToAttribute: true
        },

        /**
         * When a sizing option is used (`cover` or `contain`), this determines
         * how the image is aligned within the element bounds.
         */
        position: {
          type: String,
          value: 'center'
        },

        /**
         * When `true`, any change to the `src` property will cause the
         * `placeholder` image to be shown until the new image has loaded.
         */
        preload: {
          type: Boolean,
          value: false
        },

        /**
         * This image will be used as a background/placeholder until the src image
         * has loaded.  Use of a data-URI for placeholder is encouraged for instant
         * rendering.
         */
        placeholder: {
          type: String,
          value: null,
          observer: '_placeholderChanged'
        },

        /**
         * When `preload` is true, setting `fade` to true will cause the image to
         * fade into place.
         */
        fade: {
          type: Boolean,
          value: false
        },

        /**
         * Read-only value that is true when the image is loaded.
         */
        loaded: {
          notify: true,
          readOnly: true,
          type: Boolean,
          value: false
        },

        /**
         * Read-only value that tracks the loading state of the image when the
         * `preload` option is used.
         */
        loading: {
          notify: true,
          readOnly: true,
          type: Boolean,
          value: false
        },

        /**
         * Read-only value that indicates that the last set `src` failed to load.
         */
        error: {
          notify: true,
          readOnly: true,
          type: Boolean,
          value: false
        },

        /**
         * Can be used to set the width of image (e.g. via binding); size may also
         * be set via CSS.
         */
        width: {
          observer: '_widthChanged',
          type: Number,
          value: null
        },

        /**
         * Can be used to set the height of image (e.g. via binding); size may also
         * be set via CSS.
         *
         * @attribute height
         * @type number
         * @default null
         */
        height: {
          observer: '_heightChanged',
          type: Number,
          value: null
        }
      },
      observers: ['_transformChanged(sizing, position)', '_loadStateObserver(src, preventLoad)'],
      created: function created() {
        this._resolvedSrc = '';
      },
      _imgOnLoad: function _imgOnLoad() {
        if (this.$.img.src !== this._resolveSrc(this.src)) {
          return;
        }

        this._setLoading(false);

        this._setLoaded(true);

        this._setError(false);
      },
      _imgOnError: function _imgOnError() {
        if (this.$.img.src !== this._resolveSrc(this.src)) {
          return;
        }

        this.$.img.removeAttribute('src');
        this.$.sizedImgDiv.style.backgroundImage = '';

        this._setLoading(false);

        this._setLoaded(false);

        this._setError(true);
      },
      _computePlaceholderHidden: function _computePlaceholderHidden() {
        return !this.preload || !this.fade && !this.loading && this.loaded;
      },
      _computePlaceholderClassName: function _computePlaceholderClassName() {
        return this.preload && this.fade && !this.loading && this.loaded ? 'faded-out' : '';
      },
      _computeImgDivHidden: function _computeImgDivHidden() {
        return !this.sizing;
      },
      _computeImgDivARIAHidden: function _computeImgDivARIAHidden() {
        return this.alt === '' ? 'true' : undefined;
      },
      _computeImgDivARIALabel: function _computeImgDivARIALabel() {
        if (this.alt !== null) {
          return this.alt;
        } // Polymer.ResolveUrl.resolveUrl will resolve '' relative to a URL x to
        // that URL x, but '' is the default for src.


        if (this.src === '') {
          return '';
        } // NOTE: Use of `URL` was removed here because IE11 doesn't support
        // constructing it. If this ends up being problematic, we should
        // consider reverting and adding the URL polyfill as a dev dependency.


        var resolved = this._resolveSrc(this.src); // Remove query parts, get file name.


        return resolved.replace(/[?|#].*/g, '').split('/').pop();
      },
      _computeImgHidden: function _computeImgHidden() {
        return !!this.sizing;
      },
      _widthChanged: function _widthChanged() {
        this.style.width = isNaN(this.width) ? this.width : this.width + 'px';
      },
      _heightChanged: function _heightChanged() {
        this.style.height = isNaN(this.height) ? this.height : this.height + 'px';
      },
      _loadStateObserver: function _loadStateObserver(src, preventLoad) {
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
          this.$.sizedImgDiv.style.backgroundImage = 'url("' + this._resolvedSrc + '")';

          this._setLoading(true);

          this._setLoaded(false);

          this._setError(false);
        }
      },
      _placeholderChanged: function _placeholderChanged() {
        this.$.placeholder.style.backgroundImage = this.placeholder ? 'url("' + this.placeholder + '")' : '';
      },
      _transformChanged: function _transformChanged() {
        var sizedImgDivStyle = this.$.sizedImgDiv.style;
        var placeholderStyle = this.$.placeholder.style;
        sizedImgDivStyle.backgroundSize = placeholderStyle.backgroundSize = this.sizing;
        sizedImgDivStyle.backgroundPosition = placeholderStyle.backgroundPosition = this.sizing ? this.position : '';
        sizedImgDivStyle.backgroundRepeat = placeholderStyle.backgroundRepeat = this.sizing ? 'no-repeat' : '';
      },
      _resolveSrc: function _resolveSrc(testSrc) {
        var resolved = Object(_polymer_polymer_lib_utils_resolve_url_js__WEBPACK_IMPORTED_MODULE_3__["resolveUrl"])(testSrc, this.$.baseURIAnchor.href); // NOTE: Use of `URL` was removed here because IE11 doesn't support
        // constructing it. If this ends up being problematic, we should
        // consider reverting and adding the URL polyfill as a dev dependency.

        if (resolved.length >= 2 && resolved[0] === '/' && resolved[1] !== '/') {
          // In IE location.origin might not work
          // https://connect.microsoft.com/IE/feedback/details/1763802/location-origin-is-undefined-in-ie-11-on-windows-10-but-works-on-windows-7
          resolved = (location.origin || location.protocol + '//' + location.host) + resolved;
        }

        return resolved;
      }
    });
    /***/
  },

  /***/
  "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js":
  /*!******************************************************************************************!*\
    !*** ./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js ***!
    \******************************************************************************************/

  /*! exports provided: IronScrollTargetBehavior */

  /***/
  function node_modulesPolymerIronScrollTargetBehaviorIronScrollTargetBehaviorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IronScrollTargetBehavior", function () {
      return IronScrollTargetBehavior;
    });
    /* harmony import */


    var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-legacy.js */
    "./node_modules/@polymer/polymer/polymer-legacy.js");
    /* harmony import */


    var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/legacy/polymer.dom.js */
    "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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


    var IronScrollTargetBehavior = {
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
          value: function value() {
            return this._defaultScrollTarget;
          }
        }
      },
      observers: ['_scrollTargetChanged(scrollTarget, isAttached)'],

      /**
       * True if the event listener should be installed.
       */
      _shouldHaveListener: true,
      _scrollTargetChanged: function _scrollTargetChanged(scrollTarget, isAttached) {
        var eventTarget;

        if (this._oldScrollTarget) {
          this._toggleScrollListener(false, this._oldScrollTarget);

          this._oldScrollTarget = null;
        }

        if (!isAttached) {
          return;
        } // Support element id references


        if (scrollTarget === 'document') {
          this.scrollTarget = this._doc;
        } else if (typeof scrollTarget === 'string') {
          var domHost = this.domHost;
          this.scrollTarget = domHost && domHost.$ ? domHost.$[scrollTarget] : Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this.ownerDocument).querySelector('#' + scrollTarget);
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
          return this.scrollTarget === this._doc ? window.pageYOffset : this.scrollTarget.scrollTop;
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
          return this.scrollTarget === this._doc ? window.pageXOffset : this.scrollTarget.scrollLeft;
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
      scroll: function scroll(leftOrOptions, top) {
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
          return this.scrollTarget === this._doc ? window.innerWidth : this.scrollTarget.offsetWidth;
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
          return this.scrollTarget === this._doc ? window.innerHeight : this.scrollTarget.offsetHeight;
        }

        return 0;
      },

      /**
       * Returns true if the scroll target is a valid HTMLElement.
       *
       * @return {boolean}
       */
      _isValidScrollTarget: function _isValidScrollTarget() {
        return this.scrollTarget instanceof HTMLElement;
      },
      _toggleScrollListener: function _toggleScrollListener(yes, scrollTarget) {
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
      toggleScrollListener: function toggleScrollListener(yes) {
        this._shouldHaveListener = yes;

        this._toggleScrollListener(yes, this.scrollTarget);
      }
    };
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-checkbox/src/vaadin-checkbox.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-checkbox/src/vaadin-checkbox.js ***!
    \*********************************************************************/

  /*! exports provided: CheckboxElement */

  /***/
  function node_modulesVaadinVaadinCheckboxSrcVaadinCheckboxJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxElement", function () {
      return CheckboxElement;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element.js */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */
    "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
    /* harmony import */


    var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */
    "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
    /* harmony import */


    var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */
    "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
    /* harmony import */


    var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */
    "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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


    var CheckboxElement = /*#__PURE__*/function (_Object) {
      _inherits(CheckboxElement, _Object);

      var _super14 = _createSuper(CheckboxElement);

      _createClass(CheckboxElement, null, [{
        key: "template",
        get: function get() {
          return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"](_templateObject24());
        }
      }, {
        key: "is",
        get: function get() {
          return 'vaadin-checkbox';
        }
      }, {
        key: "version",
        get: function get() {
          return '2.5.0';
        }
      }, {
        key: "properties",
        get: function get() {
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
      }]);

      function CheckboxElement() {
        var _this53;

        _classCallCheck(this, CheckboxElement);

        _this53 = _super14.call(this);
        /**
         * @type {string}
         * Name of the element.
         */

        _this53.name;
        return _this53;
      }

      _createClass(CheckboxElement, [{
        key: "ready",
        value: function ready() {
          _get(_getPrototypeOf(CheckboxElement.prototype), "ready", this).call(this);

          this.setAttribute('role', 'checkbox');
          this._nativeCheckbox = this.shadowRoot.querySelector('input[type="checkbox"]');
          this.addEventListener('click', this._handleClick.bind(this));

          this._addActiveListeners();

          var attrName = this.getAttribute('name');

          if (attrName) {
            this.name = attrName;
          }

          this.shadowRoot.querySelector('[part~="label"]').querySelector('slot').addEventListener('slotchange', this._updateLabelAttribute.bind(this));

          this._updateLabelAttribute();
        }
        /** @private */

      }, {
        key: "_updateLabelAttribute",
        value: function _updateLabelAttribute() {
          var label = this.shadowRoot.querySelector('[part~="label"]');
          var assignedNodes = label.firstElementChild.assignedNodes();

          if (this._isAssignedNodesEmpty(assignedNodes)) {
            label.setAttribute('empty', '');
          } else {
            label.removeAttribute('empty');
          }
        }
        /** @private */

      }, {
        key: "_isAssignedNodesEmpty",
        value: function _isAssignedNodesEmpty(nodes) {
          // The assigned nodes considered to be empty if there is no slotted content or only one empty text node
          return nodes.length === 0 || nodes.length == 1 && nodes[0].nodeType == Node.TEXT_NODE && nodes[0].textContent.trim() === '';
        }
        /** @private */

      }, {
        key: "_checkedChanged",
        value: function _checkedChanged(checked) {
          if (this.indeterminate) {
            this.setAttribute('aria-checked', 'mixed');
          } else {
            this.setAttribute('aria-checked', Boolean(checked));
          }
        }
        /** @private */

      }, {
        key: "_indeterminateChanged",
        value: function _indeterminateChanged(indeterminate) {
          if (indeterminate) {
            this.setAttribute('aria-checked', 'mixed');
          } else {
            this.setAttribute('aria-checked', this.checked);
          }
        }
        /** @private */

      }, {
        key: "_addActiveListeners",
        value: function _addActiveListeners() {
          var _this54 = this;

          // DOWN
          this._addEventListenerToNode(this, 'down', function (e) {
            if (_this54.__interactionsAllowed(e)) {
              _this54.setAttribute('active', '');
            }
          }); // UP


          this._addEventListenerToNode(this, 'up', function () {
            return _this54.removeAttribute('active');
          }); // KEYDOWN


          this.addEventListener('keydown', function (e) {
            if (_this54.__interactionsAllowed(e) && e.keyCode === 32) {
              e.preventDefault();

              _this54.setAttribute('active', '');
            }
          }); // KEYUP

          this.addEventListener('keyup', function (e) {
            if (_this54.__interactionsAllowed(e) && e.keyCode === 32) {
              e.preventDefault();

              _this54._toggleChecked();

              _this54.removeAttribute('active');

              if (_this54.indeterminate) {
                _this54.indeterminate = false;
              }
            }
          });
        }
        /**
         * @return {!HTMLInputElement}
         * @protected
         */

      }, {
        key: "__interactionsAllowed",

        /**
         * True if users' interactions (mouse or keyboard)
         * should toggle the checkbox
         */
        value: function __interactionsAllowed(e) {
          if (this.disabled) {
            return false;
          } // https://github.com/vaadin/vaadin-checkbox/issues/63


          if (e.target.localName === 'a') {
            return false;
          }

          return true;
        }
        /** @private */

      }, {
        key: "_handleClick",
        value: function _handleClick(e) {
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

      }, {
        key: "_toggleChecked",
        value: function _toggleChecked() {
          this.checked = !this.checked;
          this.dispatchEvent(new CustomEvent('change', {
            composed: false,
            bubbles: true
          }));
        }
        /**
         * Fired when the user commits a value change.
         *
         * @event change
         */

      }, {
        key: "name",
        get: function get() {
          return this.checked ? this._storedName : '';
        },
        set: function set(name) {
          this._storedName = name;
        }
      }, {
        key: "focusElement",
        get: function get() {
          return this.shadowRoot.querySelector('input');
        }
      }]);

      return CheckboxElement;
    }(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemableMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))));

    customElements.define(CheckboxElement.is, CheckboxElement);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js ***!
    \***************************************************************************************/

  /*! exports provided: ControlStateMixin */

  /***/
  function node_modulesVaadinVaadinControlStateMixinVaadinControlStateMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlStateMixin", function () {
      return ControlStateMixin;
    });
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */
    // We consider the keyboard to be active if the window has received a keydown
    // event since the last mousedown event.


    var keyboardActive = false; // Listen for top-level keydown and mousedown events.
    // Use capture phase so we detect events even if they're handled.

    window.addEventListener('keydown', function () {
      keyboardActive = true;
    }, {
      capture: true
    });
    window.addEventListener('mousedown', function () {
      keyboardActive = false;
    }, {
      capture: true
    });
    /**
     * A private mixin to avoid problems with dynamic properties and Polymer Analyzer.
     * No need to expose these properties in the API docs.
     * @polymerMixin
     * @private
     */

    var TabIndexMixin = function TabIndexMixin(superClass) {
      return /*#__PURE__*/function (_superClass) {
        _inherits(VaadinTabIndexMixin, _superClass);

        var _super15 = _createSuper(VaadinTabIndexMixin);

        function VaadinTabIndexMixin() {
          _classCallCheck(this, VaadinTabIndexMixin);

          return _super15.apply(this, arguments);
        }

        _createClass(VaadinTabIndexMixin, null, [{
          key: "properties",
          get: function get() {
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
        }]);

        return VaadinTabIndexMixin;
      }(superClass);
    };
    /**
     * Polymer.IronControlState is not a proper 2.0 class, also, its tabindex
     * implementation fails in the shadow dom, so we have this for vaadin elements.
     * @polymerMixin
     */


    var ControlStateMixin = function ControlStateMixin(superClass) {
      return /*#__PURE__*/function (_TabIndexMixin) {
        _inherits(VaadinControlStateMixin, _TabIndexMixin);

        var _super16 = _createSuper(VaadinControlStateMixin);

        function VaadinControlStateMixin() {
          _classCallCheck(this, VaadinControlStateMixin);

          return _super16.apply(this, arguments);
        }

        _createClass(VaadinControlStateMixin, [{
          key: "ready",

          /**
           * @protected
           */
          value: function ready() {
            var _this55 = this;

            this.addEventListener('focusin', function (e) {
              if (e.composedPath()[0] === _this55) {
                // Only focus if the focus is received from somewhere outside
                if (!_this55.contains(e.relatedTarget)) {
                  _this55._focus();
                }
              } else if (e.composedPath().indexOf(_this55.focusElement) !== -1 && !_this55.disabled) {
                _this55._setFocused(true);
              }
            });
            this.addEventListener('focusout', function (e) {
              return _this55._setFocused(false);
            }); // In super.ready() other 'focusin' and 'focusout' listeners might be
            // added, so we call it after our own ones to ensure they execute first.
            // Issue to watch out: when incorrect, <vaadin-combo-box> refocuses the
            // input field on iOS after “Done” is pressed.

            _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "ready", this).call(this); // This fixes the bug in Firefox 61 (https://bugzilla.mozilla.org/show_bug.cgi?id=1472887)
            // where focusout event does not go out of shady DOM because composed property in the event is not true


            var ensureEventComposed = function ensureEventComposed(e) {
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
            this.addEventListener('keydown', function (e) {
              if (!e.defaultPrevented && e.keyCode === 9) {
                if (e.shiftKey) {
                  // Flag is checked in _focus event handler.
                  _this55._isShiftTabbing = true;
                  HTMLElement.prototype.focus.apply(_this55);

                  _this55._setFocused(false); // Event handling in IE is asynchronous and the flag is removed asynchronously as well


                  setTimeout(function () {
                    return _this55._isShiftTabbing = false;
                  }, 0);
                } else {
                  // Workaround for FF63-65 bug that causes the focus to get lost when
                  // blurring a slotted component with focusable shadow root content
                  // https://bugzilla.mozilla.org/show_bug.cgi?id=1528686
                  // TODO: Remove when safe
                  var firefox = window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);

                  if (firefox && parseFloat(firefox[1]) >= 63 && parseFloat(firefox[1]) < 66 && _this55.parentNode && _this55.nextSibling) {
                    var fakeTarget = document.createElement('input');
                    fakeTarget.style.position = 'absolute';
                    fakeTarget.style.opacity = '0';
                    fakeTarget.tabIndex = _this55.tabIndex;

                    _this55.parentNode.insertBefore(fakeTarget, _this55.nextSibling);

                    fakeTarget.focus();
                    fakeTarget.addEventListener('focusout', function () {
                      return _this55.parentNode.removeChild(fakeTarget);
                    });
                  }
                }
              }
            });

            if (this.autofocus && !this.disabled) {
              window.requestAnimationFrame(function () {
                _this55._focus();

                _this55._setFocused(true);

                _this55.setAttribute('focus-ring', '');
              });
            }
          }
          /**
           * @protected
           */

        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "disconnectedCallback", this).call(this); // in non-Chrome browsers, blur does not fire on the element when it is disconnected.
            // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.


            if (this.hasAttribute('focused')) {
              this._setFocused(false);
            }
          }
          /**
           * @param {boolean} focused
           * @protected
           */

        }, {
          key: "_setFocused",
          value: function _setFocused(focused) {
            if (focused) {
              this.setAttribute('focused', '');
            } else {
              this.removeAttribute('focused');
            } // focus-ring is true when the element was focused from the keyboard.
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

        }, {
          key: "_focus",

          /**
           * @protected
           */
          value: function _focus() {
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

        }, {
          key: "focus",
          value: function focus() {
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

        }, {
          key: "blur",
          value: function blur() {
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

        }, {
          key: "_disabledChanged",
          value: function _disabledChanged(disabled) {
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

        }, {
          key: "_tabindexChanged",
          value: function _tabindexChanged(tabindex) {
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
              this.setProperties({
                tabIndex: tabindex,
                tabindex: tabindex
              });
            }
          }
          /**
           * @protected
           */

        }, {
          key: "click",
          value: function click() {
            if (!this.disabled) {
              _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "click", this).call(this);
            }
          }
        }, {
          key: "focusElement",
          get: function get() {
            window.console.warn("Please implement the 'focusElement' property in <".concat(this.localName, ">"));
            return this;
          }
        }], [{
          key: "properties",
          get: function get() {
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
        }]);

        return VaadinControlStateMixin;
      }(TabIndexMixin(superClass));
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js ***!
    \***************************************************************************************************/

  /*! exports provided: runIfDevelopmentMode */

  /***/
  function node_modulesVaadinVaadinDevelopmentModeDetectorVaadinDevelopmentModeDetectorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "runIfDevelopmentMode", function () {
      return runIfDevelopmentMode;
    });

    var DEV_MODE_CODE_REGEXP = /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
    var FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;

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
      return ["localhost", "127.0.0.1"].indexOf(window.location.hostname) >= 0;
    }

    function isFlowProductionMode() {
      if (FlowClients) {
        var productionModeApps = Object.keys(FlowClients).map(function (key) {
          return FlowClients[key];
        }).filter(function (client) {
          return client.productionMode;
        });

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

      var match = DEV_MODE_CODE_REGEXP.exec(callback.toString());

      if (match) {
        try {
          // requires CSP: script-src 'unsafe-eval'
          callback = new Function(match[1]);
        } catch (e) {
          // eat the exception
          console.log('vaadin-development-mode-detector: uncommentAndRun() failed', e);
        }
      }

      return callback(args);
    } // A guard against polymer-modulizer removing the window.Vaadin
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

    var runIfDevelopmentMode = function runIfDevelopmentMode(callback, args) {
      if (window.Vaadin.developmentMode) {
        return uncommentAndRun(callback, args);
      }
    };

    if (window.Vaadin.developmentMode === undefined) {
      window.Vaadin.developmentMode = isDevelopmentMode();
    }
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-helper.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-helper.js ***!
    \************************************************************************/

  /*! exports provided: DirHelper */

  /***/
  function node_modulesVaadinVaadinElementMixinVaadinDirHelperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirHelper", function () {
      return DirHelper;
    });
    /**
    @license
    Copyright (c) 2020 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * Helper that provides a set of functions for RTL.
     */


    var DirHelper = /*#__PURE__*/function () {
      function DirHelper() {
        _classCallCheck(this, DirHelper);
      }

      _createClass(DirHelper, null, [{
        key: "detectScrollType",

        /**
         * Get the scroll type in the current browser view.
         *
         * @return {string} the scroll type. Possible values are `default|reverse|negative`
         */
        value: function detectScrollType() {
          var dummy = document.createElement('div');
          dummy.textContent = 'ABCD';
          dummy.dir = 'rtl';
          dummy.style.fontSize = '14px';
          dummy.style.width = '4px';
          dummy.style.height = '1px';
          dummy.style.position = 'absolute';
          dummy.style.top = '-1000px';
          dummy.style.overflow = 'scroll';
          document.body.appendChild(dummy);
          var cachedType = 'reverse';

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

      }, {
        key: "getNormalizedScrollLeft",
        value: function getNormalizedScrollLeft(scrollType, direction, element) {
          var scrollLeft = element.scrollLeft;

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

      }, {
        key: "setNormalizedScrollLeft",
        value: function setNormalizedScrollLeft(scrollType, direction, element, scrollLeft) {
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
      }]);

      return DirHelper;
    }();
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-mixin.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-mixin.js ***!
    \***********************************************************************/

  /*! exports provided: DirMixin */

  /***/
  function node_modulesVaadinVaadinElementMixinVaadinDirMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirMixin", function () {
      return DirMixin;
    });
    /* harmony import */


    var _vaadin_dir_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./vaadin-dir-helper.js */
    "./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-helper.js");
    /**
     * Array of Vaadin custom element classes that have been subscribed to the dir changes.
     */


    var directionSubscribers = [];

    var directionUpdater = function directionUpdater() {
      var documentDir = getDocumentDir();
      directionSubscribers.forEach(function (element) {
        alignDirs(element, documentDir);
      });
    };

    var scrollType;
    var directionObserver = new MutationObserver(directionUpdater);
    directionObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['dir']
    });

    var alignDirs = function alignDirs(element, documentDir) {
      if (documentDir) {
        element.setAttribute('dir', documentDir);
      } else {
        element.removeAttribute('dir');
      }
    };

    var getDocumentDir = function getDocumentDir() {
      return document.documentElement.getAttribute('dir');
    };
    /**
     * @polymerMixin
     */


    var DirMixin = function DirMixin(superClass) {
      return /*#__PURE__*/function (_superClass2) {
        _inherits(VaadinDirMixin, _superClass2);

        var _super17 = _createSuper(VaadinDirMixin);

        function VaadinDirMixin() {
          _classCallCheck(this, VaadinDirMixin);

          return _super17.apply(this, arguments);
        }

        _createClass(VaadinDirMixin, [{
          key: "connectedCallback",

          /** @protected */
          value: function connectedCallback() {
            _get(_getPrototypeOf(VaadinDirMixin.prototype), "connectedCallback", this).call(this);

            if (!this.hasAttribute('dir')) {
              this.__subscribe();

              alignDirs(this, getDocumentDir());
            }
          }
          /** @protected */

        }, {
          key: "attributeChangedCallback",
          value: function attributeChangedCallback(name, oldValue, newValue) {
            _get(_getPrototypeOf(VaadinDirMixin.prototype), "attributeChangedCallback", this).call(this, name, oldValue, newValue);

            if (name !== 'dir') {
              return;
            } // New value equals to the document direction and the element is not subscribed to the changes


            var newValueEqlDocDir = newValue === getDocumentDir() && directionSubscribers.indexOf(this) === -1; // Value was emptied and the element is not subscribed to the changes

            var newValueEmptied = !newValue && oldValue && directionSubscribers.indexOf(this) === -1; // New value is different and the old equals to document direction and the element is not subscribed to the changes

            var newDiffValue = newValue !== getDocumentDir() && oldValue === getDocumentDir();

            if (newValueEqlDocDir || newValueEmptied) {
              this.__subscribe();

              alignDirs(this, getDocumentDir());
            } else if (newDiffValue) {
              this.__subscribe(false);
            }
          }
          /** @protected */

        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            _get(_getPrototypeOf(VaadinDirMixin.prototype), "disconnectedCallback", this).call(this);

            this.__subscribe(false);

            this.removeAttribute('dir');
          }
          /** @private */

        }, {
          key: "__subscribe",
          value: function __subscribe() {
            var push = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (push) {
              directionSubscribers.indexOf(this) === -1 && directionSubscribers.push(this);
            } else {
              directionSubscribers.indexOf(this) > -1 && directionSubscribers.splice(directionSubscribers.indexOf(this), 1);
            }
          }
          /**
           * @param {Element} element
           * @return {number}
           * @protected
           */

        }, {
          key: "__getNormalizedScrollLeft",
          value: function __getNormalizedScrollLeft(element) {
            return _vaadin_dir_helper_js__WEBPACK_IMPORTED_MODULE_0__["DirHelper"].getNormalizedScrollLeft(scrollType, this.getAttribute('dir') || 'ltr', element);
          }
          /**
           * @param {Element} element
           * @param {number} scrollLeft
           * @protected
           */

        }, {
          key: "__setNormalizedScrollLeft",
          value: function __setNormalizedScrollLeft(element, scrollLeft) {
            return _vaadin_dir_helper_js__WEBPACK_IMPORTED_MODULE_0__["DirHelper"].setNormalizedScrollLeft(scrollType, this.getAttribute('dir') || 'ltr', element, scrollLeft);
          }
        }], [{
          key: "finalize",

          /** @protected */
          value: function finalize() {
            _get(_getPrototypeOf(VaadinDirMixin), "finalize", this).call(this);

            if (!scrollType) {
              scrollType = _vaadin_dir_helper_js__WEBPACK_IMPORTED_MODULE_0__["DirHelper"].detectScrollType();
            }
          }
        }, {
          key: "properties",
          get: function get() {
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
        }]);

        return VaadinDirMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js ***!
    \***************************************************************************/

  /*! exports provided: ElementMixin */

  /***/
  function node_modulesVaadinVaadinElementMixinVaadinElementMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElementMixin", function () {
      return ElementMixin;
    });
    /* harmony import */


    var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/async.js */
    "./node_modules/@polymer/polymer/lib/utils/async.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/debounce.js */
    "./node_modules/@polymer/polymer/lib/utils/debounce.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/flush.js */
    "./node_modules/@polymer/polymer/lib/utils/flush.js");
    /* harmony import */


    var _vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vaadin-dir-mixin.js */
    "./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-mixin.js");
    /* harmony import */


    var _vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js */
    "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js");

    if (!window.Vaadin) {
      window['Vaadin'] = {};
    }
    /**
     * Array of Vaadin custom element classes that have been finalized.
     */


    window['Vaadin'].registrations = window.Vaadin.registrations || []; // Use the hack to prevent polymer-modulizer from converting to exports

    window['Vaadin'].developmentModeCallback = window.Vaadin.developmentModeCallback || {};

    window['Vaadin'].developmentModeCallback['vaadin-usage-statistics'] = function () {
      if (_vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_4__["usageStatistics"]) {
        Object(_vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_4__["usageStatistics"])();
      }
    };

    var statsJob;
    var registered = new Set();
    /**
     * @polymerMixin
     * @mixes DirMixin
     */

    var ElementMixin = function ElementMixin(superClass) {
      return /*#__PURE__*/function (_Object2) {
        _inherits(VaadinElementMixin, _Object2);

        var _super18 = _createSuper(VaadinElementMixin);

        _createClass(VaadinElementMixin, null, [{
          key: "finalize",

          /** @protected */
          value: function finalize() {
            _get(_getPrototypeOf(VaadinElementMixin), "finalize", this).call(this);

            var is = this.is; // Registers a class prototype for telemetry purposes.

            if (is && !registered.has(is)) {
              window.Vaadin.registrations.push(this);
              registered.add(is);

              if (window.Vaadin.developmentModeCallback) {
                statsJob = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(statsJob, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["idlePeriod"], function () {
                  window.Vaadin.developmentModeCallback['vaadin-usage-statistics']();
                });
                Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["enqueueDebouncer"])(statsJob);
              }
            }
          }
        }]);

        function VaadinElementMixin() {
          var _this56;

          _classCallCheck(this, VaadinElementMixin);

          _this56 = _super18.call(this);

          if (document.doctype === null) {
            console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.');
          }

          return _this56;
        }

        return VaadinElementMixin;
      }(Object(_vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_3__["DirMixin"])(superClass));
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/all-imports.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/all-imports.js ***!
    \*************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesVaadinVaadinGridSrcAllImportsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _vaadin_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./vaadin-grid.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid.js");
    /* harmony import */


    var _vaadin_grid_column_group_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./vaadin-grid-column-group.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-group.js");
    /* harmony import */


    var _vaadin_grid_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./vaadin-grid-filter.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter.js");
    /* harmony import */


    var _vaadin_grid_filter_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vaadin-grid-filter-column.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-column.js");
    /* harmony import */


    var _vaadin_grid_sorter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./vaadin-grid-sorter.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sorter.js");
    /* harmony import */


    var _vaadin_grid_sort_column_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vaadin-grid-sort-column.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-column.js");
    /* harmony import */


    var _vaadin_grid_selection_column_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vaadin-grid-selection-column.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-column.js");
    /* harmony import */


    var _vaadin_grid_tree_toggle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./vaadin-grid-tree-toggle.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-tree-toggle.js");
    /* harmony import */


    var _vaadin_grid_tree_column_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./vaadin-grid-tree-column.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-tree-column.js");
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
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/iron-list.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/iron-list.js ***!
    \***********************************************************/

  /*! exports provided: PolymerIronList */

  /***/
  function node_modulesVaadinVaadinGridSrcIronListJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolymerIronList", function () {
      return PolymerIronList;
    });
    /* harmony import */


    var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-legacy.js */
    "./node_modules/@polymer/polymer/polymer-legacy.js");
    /* harmony import */


    var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */
    "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
    /* harmony import */


    var _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js */
    "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/async.js */
    "./node_modules/@polymer/polymer/lib/utils/async.js");
    /* harmony import */


    var _polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @polymer/polymer/lib/legacy/class.js */
    "./node_modules/@polymer/polymer/lib/legacy/class.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/flush.js */
    "./node_modules/@polymer/polymer/lib/utils/flush.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/debounce.js */
    "./node_modules/@polymer/polymer/lib/utils/debounce.js");
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

    var PolymerIronList = Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__["Class"])({
      behaviors: [_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"], _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronScrollTargetBehavior"]],

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
          val = val - val % this._itemsPerRow;
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
          val = val - val % this._itemsPerRow;
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
          idx = this._iterateItems(function (pidx, vidx) {
            physicalOffset += this._getPhysicalSizeIncrement(pidx);

            if (physicalOffset > this._scrollPosition) {
              return this.grid ? vidx - vidx % this._itemsPerRow : vidx;
            } // Handle a partially rendered final row in grid mode


            if (this.grid && this._virtualCount - 1 === vidx) {
              return vidx - vidx % this._itemsPerRow;
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

            this._iterateItems(function (pidx, vidx) {
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

      attached: function attached() {
        this._debounce('_render', this._render, ANIMATION_FRAME); // `iron-resize` is fired when the list is attached if the event is added
        // before attached causing unnecessary work.


        this.listen(this, 'iron-resize', '_resizeHandler');
      },
      detached: function detached() {
        this.unlisten(this, 'iron-resize', '_resizeHandler');
      },

      /**
       * Invoke this method if you dynamically update the viewport's
       * size or CSS padding.
       *
       * @method updateViewportBoundaries
       */
      updateViewportBoundaries: function updateViewportBoundaries() {
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
      _scrollHandler: function _scrollHandler() {
        var scrollTop = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop));
        var delta = scrollTop - this._scrollPosition;
        var isScrollingDown = delta >= 0; // Track the current scroll position.

        this._scrollPosition = scrollTop; // Clear indexes for first and last visible indexes.

        this._firstVisibleIndexVal = null;
        this._lastVisibleIndexVal = null; // Random access.

        if (Math.abs(delta) > this._physicalSize && this._physicalSize > 0) {
          delta = delta - this._scrollOffset;

          var idxAdjustment = Math.round(delta / this._physicalAverage) * this._itemsPerRow;

          this._virtualStart = this._virtualStart + idxAdjustment;
          this._physicalStart = this._physicalStart + idxAdjustment; // Estimate new physical offset.

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
      _getReusables: function _getReusables(fromTop) {
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
        } // eslint-disable-next-line no-constant-condition


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
            } // Check that the index is not visible.


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
            } // Check that the index is not visible.


            if (top + this._physicalSize - physicalItemHeight <= scrollBottom) {
              break;
            }

            idxs.push(ith);
            top = top - physicalItemHeight;
            ith = ith === 0 ? physicalCount - 1 : ith - 1;
          }
        }

        return {
          indexes: idxs,
          physicalTop: top - this._scrollOffset
        };
      },

      /**
       * Update the list of items, starting from the `_virtualStart` item.
       * @param {!Array<number>=} itemSet
       * @param {!Array<number>=} movingUp
       */
      _update: function _update(itemSet, movingUp) {
        if (itemSet && itemSet.length === 0 || this._physicalCount === 0) {
          return;
        }

        this._manageFocus();

        this._assignModels(itemSet);

        this._updateMetrics(itemSet); // Adjust offset after measuring.


        if (movingUp) {
          while (movingUp.length) {
            var idx = movingUp.pop();
            this._physicalTop -= this._getPhysicalSizeIncrement(idx);
          }
        }

        this._positionItems();

        this._updateScrollerSize();
      },
      _isClientFull: function _isClientFull() {
        return this._scrollBottom != 0 && this._physicalBottom - 1 >= this._scrollBottom && this._physicalTop <= this._scrollPosition;
      },

      /**
       * Increases the pool size.
       */
      _increasePoolIfNeeded: function _increasePoolIfNeeded(count) {
        var nextPhysicalCount = this._clamp(this._physicalCount + count, DEFAULT_PHYSICAL_COUNT, this._virtualCount - this._virtualStart);

        nextPhysicalCount = this._convertIndexToCompleteRow(nextPhysicalCount);
        var delta = nextPhysicalCount - this._physicalCount;
        var nextIncrease = Math.round(this._physicalCount * 0.5);

        if (delta < 0) {
          return;
        }

        if (delta > 0) {
          var ts = window.performance.now(); // Concat arrays in place.

          [].push.apply(this._physicalItems, this._createPool(delta)); // Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't support it.

          for (var i = 0; i < delta; i++) {
            this._physicalSizes.push(0);
          }

          this._physicalCount = this._physicalCount + delta; // Update the physical start if it needs to preserve the model of the focused item.
          // In this situation, the focused item is currently rendered and its model would
          // have changed after increasing the pool if the physical start remained unchanged.

          if (this._physicalStart > this._physicalEnd && this._isIndexRendered(this._focusedVirtualIndex) && this._getPhysicalIndex(this._focusedVirtualIndex) < this._physicalEnd) {
            this._physicalStart = this._physicalStart + delta;
          }

          this._update();

          this._templateCost = (window.performance.now() - ts) / delta;
          nextIncrease = Math.round(this._physicalCount * 0.5);
        } // The upper bounds is not fixed when dealing with a grid that doesn't
        // fill it's last row with the exact number of items per row.


        if (this._virtualEnd >= this._virtualCount - 1 || nextIncrease === 0) {// Do nothing.
        } else if (!this._isClientFull()) {
          this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, nextIncrease), MICRO_TASK);
        } else if (this._physicalSize < this._optPhysicalSize) {
          // Yield and increase the pool during idle time until the physical size is optimal.
          this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, this._clamp(Math.round(50 / this._templateCost), 1, nextIncrease)), IDLE_TIME);
        }
      },

      /**
       * Renders the a new list.
       */
      _render: function _render() {
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
      _itemsChanged: function _itemsChanged(change) {
        if (change.path === 'items') {
          this._virtualStart = 0;
          this._physicalTop = 0;
          this._virtualCount = this.items ? this.items.length : 0;
          this._collection = this.items && undefined ? undefined.get(this.items) : null;
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
      _iterateItems: function _iterateItems(fn, itemSet) {
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
      _computeVidx: function _computeVidx(pidx) {
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
      _updateMetrics: function _updateMetrics(itemSet) {
        // Make sure we distributed all the physical items
        // so we can measure them.
        Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_5__["flush"])();
        var newPhysicalSize = 0;
        var oldPhysicalSize = 0;
        var prevAvgCount = this._physicalAverageCount;
        var prevPhysicalAvg = this._physicalAverage;

        this._iterateItems(function (pidx, vidx) {
          oldPhysicalSize += this._physicalSizes[pidx];
          this._physicalSizes[pidx] = this._physicalItems[pidx].offsetHeight;
          newPhysicalSize += this._physicalSizes[pidx];
          this._physicalAverageCount += this._physicalSizes[pidx] ? 1 : 0;
        }, itemSet);

        if (this.grid) {
          this._updateGridMetrics();

          this._physicalSize = Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
        } else {
          oldPhysicalSize = this._itemsPerRow === 1 ? oldPhysicalSize : Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
          this._physicalSize = this._physicalSize + newPhysicalSize - oldPhysicalSize;
          this._itemsPerRow = 1;
        } // Update the average if it measured something.


        if (this._physicalAverageCount !== prevAvgCount) {
          this._physicalAverage = Math.round((prevPhysicalAvg * prevAvgCount + newPhysicalSize) / this._physicalAverageCount);
        }
      },

      /**
       * Updates the position of the physical items.
       */
      _positionItems: function _positionItems() {
        this._adjustScrollPosition();

        var y = this._physicalTop;

        this._iterateItems(function (pidx, vidx) {
          this.translate3d(0, y + 'px', 0, this._physicalItems[pidx]);
          y += this._physicalSizes[pidx];
        });
      },
      _getPhysicalSizeIncrement: function _getPhysicalSizeIncrement(pidx) {
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
      _adjustScrollPosition: function _adjustScrollPosition() {
        var deltaHeight = this._virtualStart === 0 ? this._physicalTop : Math.min(this._scrollPosition + this._physicalTop, 0); // Note: the delta can be positive or negative.

        if (deltaHeight !== 0) {
          this._physicalTop = this._physicalTop - deltaHeight;
          var scrollTop = this._scrollTop; // juking scroll position during interial scrolling on iOS is no bueno

          if (!IOS_TOUCH_SCROLLING && scrollTop > 0) {
            this._resetScrollPosition(scrollTop - deltaHeight);
          }
        }
      },

      /**
       * Sets the position of the scroll.
       */
      _resetScrollPosition: function _resetScrollPosition(pos) {
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
      _updateScrollerSize: function _updateScrollerSize(forceUpdate) {
        if (this.grid) {
          this._estScrollHeight = this._virtualRowCount * this._rowHeight;
        } else {
          this._estScrollHeight = this._physicalBottom + Math.max(this._virtualCount - this._physicalCount - this._virtualStart, 0) * this._physicalAverage;
        }

        forceUpdate = forceUpdate || this._scrollHeight === 0;
        forceUpdate = forceUpdate || this._scrollPosition >= this._estScrollHeight - this._physicalSize;
        forceUpdate = forceUpdate || this.grid && this.$.items.style.height < this._estScrollHeight; // Amortize height adjustment, so it won't trigger large repaints too often.

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
      scrollToIndex: function scrollToIndex(idx) {
        if (typeof idx !== 'number' || idx < 0 || idx > this.items.length - 1) {
          return;
        }

        Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_5__["flush"])(); // Items should have been rendered prior scrolling to an index.

        if (this._physicalCount === 0) {
          return;
        }

        idx = this._clamp(idx, 0, this._virtualCount - 1); // Update the virtual start only when needed.

        if (!this._isIndexRendered(idx) || idx >= this._maxVirtualStart) {
          this._virtualStart = this.grid ? idx - this._itemsPerRow * 2 : idx - 1;
        }

        this._manageFocus();

        this._assignModels();

        this._updateMetrics(); // Estimate new physical offset.


        this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;
        var currentTopItem = this._physicalStart;
        var currentVirtualItem = this._virtualStart;
        var targetOffsetTop = 0;
        var hiddenContentSize = this._hiddenContentSize; // scroll to the item as much as we can.

        while (currentVirtualItem < idx && targetOffsetTop <= hiddenContentSize) {
          targetOffsetTop = targetOffsetTop + this._getPhysicalSizeIncrement(currentTopItem);
          currentTopItem = (currentTopItem + 1) % this._physicalCount;
          currentVirtualItem++;
        }

        this._updateScrollerSize(true);

        this._positionItems();

        this._resetScrollPosition(this._physicalTop + this._scrollOffset + targetOffsetTop);

        this._increasePoolIfNeeded(0); // clear cached visible index.


        this._firstVisibleIndexVal = null;
        this._lastVisibleIndexVal = null;
      },

      /**
       * Reset the physical average and the average count.
       */
      _resetAverage: function _resetAverage() {
        this._physicalAverage = 0;
        this._physicalAverageCount = 0;
      },

      /**
       * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
       * when the element is resized.
       */
      _resizeHandler: function _resizeHandler() {
        this._debounce('_render', function () {
          // clear cached visible index.
          this._firstVisibleIndexVal = null;
          this._lastVisibleIndexVal = null; // Skip the resize event on touch devices when the address bar slides up.

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
      _convertIndexToCompleteRow: function _convertIndexToCompleteRow(idx) {
        // when grid == false _itemPerRow can be unset.
        this._itemsPerRow = this._itemsPerRow || 1;
        return this.grid ? Math.ceil(idx / this._itemsPerRow) * this._itemsPerRow : idx;
      },
      _isIndexRendered: function _isIndexRendered(idx) {
        return idx >= this._virtualStart && idx <= this._virtualEnd;
      },
      _getPhysicalIndex: function _getPhysicalIndex(vidx) {
        return (this._physicalStart + (vidx - this._virtualStart)) % this._physicalCount;
      },
      _clamp: function _clamp(v, min, max) {
        return Math.min(max, Math.max(min, v));
      },
      _debounce: function _debounce(name, cb, asyncModule) {
        this._debouncers = this._debouncers || {};
        this._debouncers[name] = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__["Debouncer"].debounce(this._debouncers[name], asyncModule, cb.bind(this));
        Object(_polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__["enqueueDebouncer"])(this._debouncers[name]);
      }
    });
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-a11y-mixin.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-a11y-mixin.js ***!
    \************************************************************************/

  /*! exports provided: A11yMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridA11yMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "A11yMixin", function () {
      return A11yMixin;
    });
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var A11yMixin = function A11yMixin(superClass) {
      return /*#__PURE__*/function (_superClass3) {
        _inherits(A11yMixin, _superClass3);

        var _super19 = _createSuper(A11yMixin);

        function A11yMixin() {
          _classCallCheck(this, A11yMixin);

          return _super19.apply(this, arguments);
        }

        _createClass(A11yMixin, [{
          key: "_a11yGetHeaderRowCount",

          /** @private */
          value: function _a11yGetHeaderRowCount(_columnTree) {
            return _columnTree.filter(function (level) {
              return level.some(function (col) {
                return col._headerTemplate || col.headerRenderer || col.path || col.header;
              });
            }).length;
          }
          /** @private */

        }, {
          key: "_a11yGetFooterRowCount",
          value: function _a11yGetFooterRowCount(_columnTree) {
            return _columnTree.filter(function (level) {
              return level.some(function (col) {
                return col._headerTemplate || col.headerRenderer;
              });
            }).length;
          }
          /** @private */

        }, {
          key: "_a11yUpdateGridSize",
          value: function _a11yUpdateGridSize(size, _columnTree) {
            if (size === undefined || _columnTree === undefined) {
              return;
            }

            var bodyColumns = _columnTree[_columnTree.length - 1];
            this.$.table.setAttribute('aria-rowcount', size + this._a11yGetHeaderRowCount(_columnTree) + this._a11yGetFooterRowCount(_columnTree));
            this.$.table.setAttribute('aria-colcount', bodyColumns && bodyColumns.length || 0);

            this._a11yUpdateHeaderRows();

            this._a11yUpdateFooterRows();
          }
          /** @protected */

        }, {
          key: "_a11yUpdateHeaderRows",
          value: function _a11yUpdateHeaderRows() {
            Array.from(this.$.header.children).forEach(function (headerRow, index) {
              return headerRow.setAttribute('aria-rowindex', index + 1);
            });
          }
          /** @protected */

        }, {
          key: "_a11yUpdateFooterRows",
          value: function _a11yUpdateFooterRows() {
            var _this57 = this;

            Array.from(this.$.footer.children).forEach(function (footerRow, index) {
              return footerRow.setAttribute('aria-rowindex', _this57._a11yGetHeaderRowCount(_this57._columnTree) + _this57.size + index + 1);
            });
          }
          /**
           * @param {!HTMLElement} row
           * @param {number} index
           * @protected
           */

        }, {
          key: "_a11yUpdateRowRowindex",
          value: function _a11yUpdateRowRowindex(row, index) {
            row.setAttribute('aria-rowindex', index + this._a11yGetHeaderRowCount(this._columnTree) + 1);
          }
          /**
           * @param {!HTMLElement} row
           * @param {boolean} selected
           * @protected
           */

        }, {
          key: "_a11yUpdateRowSelected",
          value: function _a11yUpdateRowSelected(row, selected) {
            // Jaws reads selection only for rows, NVDA only for cells
            row.setAttribute('aria-selected', Boolean(selected));
            Array.from(row.children).forEach(function (cell) {
              return cell.setAttribute('aria-selected', Boolean(selected));
            });
          }
          /**
           * @param {!HTMLElement} row
           * @param {number} level
           * @protected
           */

        }, {
          key: "_a11yUpdateRowLevel",
          value: function _a11yUpdateRowLevel(row, level) {
            row.setAttribute('aria-level', level + 1);
          }
          /**
           * @param {!HTMLElement} row
           * @param {boolean} detailsOpened
           * @protected
           */

        }, {
          key: "_a11yUpdateRowDetailsOpened",
          value: function _a11yUpdateRowDetailsOpened(row, detailsOpened) {
            Array.from(row.children).forEach(function (cell) {
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

        }, {
          key: "_a11ySetRowDetailsCell",
          value: function _a11ySetRowDetailsCell(row, detailsCell) {
            Array.from(row.children).forEach(function (cell) {
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

        }, {
          key: "_a11yUpdateCellColspan",
          value: function _a11yUpdateCellColspan(cell, colspan) {
            cell.setAttribute('aria-colspan', Number(colspan));
          }
          /** @protected */

        }, {
          key: "_a11yUpdateSorters",
          value: function _a11yUpdateSorters() {
            Array.from(this.querySelectorAll('vaadin-grid-sorter')).forEach(function (sorter) {
              var cellContent = sorter.parentNode;

              while (cellContent && cellContent.localName !== 'vaadin-grid-cell-content') {
                cellContent = cellContent.parentNode;
              }

              if (cellContent && cellContent.assignedSlot) {
                var cell = cellContent.assignedSlot.parentNode;
                cell.setAttribute('aria-sort', {
                  'asc': 'ascending',
                  'desc': 'descending'
                }[String(sorter.direction)] || 'none');
              }
            });
          }
        }], [{
          key: "observers",
          get: function get() {
            return ['_a11yUpdateGridSize(size, _columnTree, _columnTree.*)'];
          }
        }]);

        return A11yMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-active-item-mixin.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-active-item-mixin.js ***!
    \*******************************************************************************/

  /*! exports provided: ActiveItemMixin, isFocusable */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridActiveItemMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveItemMixin", function () {
      return ActiveItemMixin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isFocusable", function () {
      return isFocusable;
    });
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var ActiveItemMixin = function ActiveItemMixin(superClass) {
      return /*#__PURE__*/function (_superClass4) {
        _inherits(ActiveItemMixin, _superClass4);

        var _super20 = _createSuper(ActiveItemMixin);

        function ActiveItemMixin() {
          _classCallCheck(this, ActiveItemMixin);

          return _super20.apply(this, arguments);
        }

        _createClass(ActiveItemMixin, [{
          key: "ready",
          value: function ready() {
            _get(_getPrototypeOf(ActiveItemMixin.prototype), "ready", this).call(this);

            this.$.scroller.addEventListener('click', this._onClick.bind(this));
            this.addEventListener('cell-activate', this._activateItem.bind(this));
          }
          /** @private */

        }, {
          key: "_activateItem",
          value: function _activateItem(e) {
            var model = e.detail.model;
            var clickedItem = model ? model.item : null;

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

        }, {
          key: "_onClick",
          value: function _onClick(e) {
            if (e.defaultPrevented) {
              // Something has handled this click already, e. g., <vaadin-grid-sorter>
              return;
            }

            var path = e.composedPath();
            var cell = path[path.indexOf(this.$.table) - 3];

            if (!cell || cell.getAttribute('part').indexOf('details-cell') > -1) {
              return;
            }

            var cellContent = cell._content;
            var activeElement = this.getRootNode().activeElement;

            var cellContentHasFocus = cellContent.contains(activeElement) && ( // MSIE bug: flex children receive focus. Make type & attributes check.
            !this._ie || this._isFocusable(activeElement));

            if (!cellContentHasFocus && !this._isFocusable(e.target)) {
              this.dispatchEvent(new CustomEvent('cell-activate', {
                detail: {
                  model: this.__getRowModel(cell.parentElement)
                }
              }));
            }
          }
          /**
           * @param {!Element} target
           * @return {boolean}
           * @protected
           */

        }, {
          key: "_isFocusable",
          value: function _isFocusable(target) {
            return isFocusable(target);
          }
        }], [{
          key: "properties",
          get: function get() {
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
        }]);

        return ActiveItemMixin;
      }(superClass);
    };
    /**
     * @param {!Element} target
     * @return {boolean}
     * @protected
     */


    var isFocusable = function isFocusable(target) {
      if (!target.parentNode) {
        return false;
      }

      var focusables = Array.from(target.parentNode.querySelectorAll('[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]')).filter(function (element) {
        return element.getAttribute('part') !== 'cell body-cell';
      });
      var isFocusableElement = focusables.indexOf(target) !== -1;
      return !target.disabled && isFocusableElement;
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-array-data-provider-mixin.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-array-data-provider-mixin.js ***!
    \***************************************************************************************/

  /*! exports provided: ArrayDataProviderMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridArrayDataProviderMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrayDataProviderMixin", function () {
      return ArrayDataProviderMixin;
    });
    /* harmony import */


    var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-legacy.js */
    "./node_modules/@polymer/polymer/polymer-legacy.js");
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var ArrayDataProviderMixin = function ArrayDataProviderMixin(superClass) {
      return /*#__PURE__*/function (_superClass5) {
        _inherits(ArrayDataProviderMixin, _superClass5);

        var _super21 = _createSuper(ArrayDataProviderMixin);

        function ArrayDataProviderMixin() {
          _classCallCheck(this, ArrayDataProviderMixin);

          return _super21.apply(this, arguments);
        }

        _createClass(ArrayDataProviderMixin, [{
          key: "_itemsChanged",

          /** @private */
          value: function _itemsChanged(items, splices, isAttached) {
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

        }, {
          key: "_arrayDataProvider",
          value: function _arrayDataProvider(opts, cb) {
            var items = (Array.isArray(this.items) ? this.items : []).slice(0);

            if (this._filters && this._checkPaths(this._filters, 'filtering', items)) {
              items = this._filter(items);
            }

            this.size = items.length;

            if (opts.sortOrders.length && this._checkPaths(this._sorters, 'sorting', items)) {
              items = items.sort(this._multiSort.bind(this));
            }

            var start = opts.page * opts.pageSize;
            var end = start + opts.pageSize;
            var slice = items.slice(start, end);
            cb(slice, items.length);
          }
          /**
           * Check array of filters/sorters for paths validity, console.warn invalid items
           * @param {!Array<!GridFilter | !GridSorter>} arrayToCheck The array of filters/sorters to check
           * @param {string} action The name of action to include in warning (filtering, sorting)
           * @param {!Array<!GridItem>} items
           * @protected
           */

        }, {
          key: "_checkPaths",
          value: function _checkPaths(arrayToCheck, action, items) {
            if (!items.length) {
              return false;
            }

            var result = true;

            for (var i in arrayToCheck) {
              var path = arrayToCheck[i].path; // skip simple paths

              if (!path || path.indexOf('.') === -1) {
                continue;
              }

              var parentProperty = path.replace(/\.[^\.]*$/, ''); // a.b.c -> a.b

              if (_polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(parentProperty, items[0]) === undefined) {
                console.warn("Path \"".concat(path, "\" used for ").concat(action, " does not exist in all of the items, ").concat(action, " is disabled."));
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

        }, {
          key: "_multiSort",
          value: function _multiSort(a, b) {
            var _this58 = this;

            return this._sorters.map(function (sort) {
              if (sort.direction === 'asc') {
                return _this58._compare(_polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(sort.path, a), _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(sort.path, b));
              } else if (sort.direction === 'desc') {
                return _this58._compare(_polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(sort.path, b), _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(sort.path, a));
              }

              return 0;
            }).reduce(function (p, n) {
              return p ? p : n;
            }, 0);
          }
          /**
           * @param {unknown} value
           * @return {string}
           * @protected
           */

        }, {
          key: "_normalizeEmptyValue",
          value: function _normalizeEmptyValue(value) {
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

        }, {
          key: "_compare",
          value: function _compare(a, b) {
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

        }, {
          key: "_filter",
          value: function _filter(items) {
            var _this59 = this;

            return items.filter(function (item, index) {
              return _this59._filters.filter(function (filter) {
                var value = _this59._normalizeEmptyValue(_polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__["Base"].get(filter.path, item));

                var filterValueLowercase = _this59._normalizeEmptyValue(filter.value).toString().toLowerCase();

                return value.toString().toLowerCase().indexOf(filterValueLowercase) === -1;
              }).length === 0;
            });
          }
        }], [{
          key: "properties",
          get: function get() {
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
        }, {
          key: "observers",
          get: function get() {
            return ['_itemsChanged(items, items.*, isAttached)'];
          }
        }]);

        return ArrayDataProviderMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-group.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-group.js ***!
    \**************************************************************************/

  /*! exports provided: GridColumnGroupElement */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridColumnGroupJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridColumnGroupElement", function () {
      return GridColumnGroupElement;
    });
    /* harmony import */


    var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-legacy.js */
    "./node_modules/@polymer/polymer/polymer-legacy.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/async.js */
    "./node_modules/@polymer/polymer/lib/utils/async.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/flattened-nodes-observer.js */
    "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js");
    /* harmony import */


    var _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vaadin-grid-column.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js");
    /* harmony import */


    var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element.js */
    "./node_modules/@polymer/polymer/polymer-element.js");
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


    var GridColumnGroupElement = /*#__PURE__*/function (_Object3) {
      _inherits(GridColumnGroupElement, _Object3);

      var _super22 = _createSuper(GridColumnGroupElement);

      function GridColumnGroupElement() {
        _classCallCheck(this, GridColumnGroupElement);

        return _super22.apply(this, arguments);
      }

      _createClass(GridColumnGroupElement, [{
        key: "connectedCallback",

        /** @protected */
        value: function connectedCallback() {
          _get(_getPrototypeOf(GridColumnGroupElement.prototype), "connectedCallback", this).call(this);

          this._addNodeObserver();

          this._updateFlexAndWidth();
        }
        /** @protected */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(GridColumnGroupElement.prototype), "disconnectedCallback", this).call(this);

          this._observer && this._observer.disconnect();
        }
        /**
         * @param {string} path
         * @param {unknown=} value
         * @protected
         */

      }, {
        key: "_columnPropChanged",
        value: function _columnPropChanged(path, value) {
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

      }, {
        key: "_groupOrderChanged",
        value: function _groupOrderChanged(order, rootColumns) {
          if (rootColumns) {
            var _rootColumns = rootColumns.slice(0);

            if (!order) {
              _rootColumns.forEach(function (column) {
                return column._order = 0;
              });

              return;
            } // The parent column order number cascades downwards to it's children
            // so that the resulting order numbering constructs as follows:
            // [             1000              ]
            // [     1100    ] | [     1200    ]
            // [1110] | [1120] | [1210] | [1220]
            // Trailing zeros are counted so we know the level on which we're working on.


            var trailingZeros = /(0+)$/.exec(order).pop().length; // In an unlikely situation where a group has more than 9 child columns,
            // the child scope must have 1 digit less...

            var childCountDigits = ~~(Math.log(rootColumns.length) / Math.log(Math.LN10)) + 1; // Final scope for the child columns needs to mind both factors.

            var scope = Math.pow(10, trailingZeros - childCountDigits);

            if (_rootColumns[0] && _rootColumns[0]._order) {
              _rootColumns.sort(function (a, b) {
                return a._order - b._order;
              });
            }

            _rootColumns.forEach(function (column, index) {
              return column._order = order + (index + 1) * scope;
            });
          }
        }
        /** @private */

      }, {
        key: "_groupReorderStatusChanged",
        value: function _groupReorderStatusChanged(reorderStatus, rootColumns) {
          if (reorderStatus === undefined || rootColumns === undefined) {
            return;
          }

          rootColumns.forEach(function (column) {
            return column._reorderStatus = reorderStatus;
          });
        }
        /** @private */

      }, {
        key: "_groupResizableChanged",
        value: function _groupResizableChanged(resizable, rootColumns) {
          if (resizable === undefined || rootColumns === undefined) {
            return;
          }

          rootColumns.forEach(function (column) {
            return column.resizable = resizable;
          });
        }
        /** @private */

      }, {
        key: "_updateVisibleChildColumns",
        value: function _updateVisibleChildColumns(childColumns) {
          this._visibleChildColumns = Array.prototype.filter.call(childColumns, function (col) {
            return !col.hidden;
          });
        }
        /** @private */

      }, {
        key: "_childColumnsChanged",
        value: function _childColumnsChanged(childColumns) {
          if (!this._autoHidden && this.hidden) {
            Array.prototype.forEach.call(childColumns, function (column) {
              return column.hidden = true;
            });

            this._updateVisibleChildColumns(childColumns);
          }
        }
        /** @protected */

      }, {
        key: "_updateFlexAndWidth",
        value: function _updateFlexAndWidth() {
          if (!this._visibleChildColumns) {
            return;
          }

          if (this._visibleChildColumns.length) {
            this._setWidth('calc(' + Array.prototype.reduce.call(this._visibleChildColumns, function (prev, curr) {
              return prev += ' + ' + (curr.width || '0px').replace('calc', '');
            }, '').substring(3) + ')');
          } else {
            this._setWidth('0px');
          }

          this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns, function (prev, curr) {
            return prev + curr.flexGrow;
          }, 0));
        }
        /** @private */

      }, {
        key: "_groupFrozenChanged",
        value: function _groupFrozenChanged(frozen, rootColumns) {
          if (rootColumns === undefined || frozen === undefined) {
            return;
          } // Don’t propagate the default `false` value.


          if (frozen !== false) {
            Array.from(rootColumns).forEach(function (col) {
              return col.frozen = frozen;
            });
          }
        }
        /** @private */

      }, {
        key: "_groupHiddenChanged",
        value: function _groupHiddenChanged(hidden, rootColumns) {
          if (rootColumns && !this._preventHiddenCascade) {
            this._ignoreVisibleChildColumns = true;
            rootColumns.forEach(function (column) {
              return column.hidden = hidden;
            });
            this._ignoreVisibleChildColumns = false;
          }

          this._columnPropChanged('hidden');
        }
        /** @private */

      }, {
        key: "_visibleChildColumnsChanged",
        value: function _visibleChildColumnsChanged(visibleChildColumns) {
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

      }, {
        key: "_colSpanChanged",
        value: function _colSpanChanged(colSpan, headerCell, footerCell) {
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

      }, {
        key: "_getChildColumns",
        value: function _getChildColumns(el) {
          return _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_2__["FlattenedNodesObserver"].getFlattenedNodes(el).filter(this._isColumnElement);
        }
        /** @private */

      }, {
        key: "_addNodeObserver",
        value: function _addNodeObserver() {
          var _this60 = this;

          this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_2__["FlattenedNodesObserver"](this, function (info) {
            if (info.addedNodes.filter(_this60._isColumnElement).length > 0 || info.removedNodes.filter(_this60._isColumnElement).length > 0) {
              _this60._preventHiddenCascade = true;
              _this60._rootColumns = _this60._getChildColumns(_this60);
              _this60._childColumns = _this60._rootColumns;
              _this60._preventHiddenCascade = false; // Update the column tree with microtask timing to avoid shady style scope issues

              _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["microTask"].run(function () {
                _this60._grid && _this60._grid._updateColumnTree && _this60._grid._updateColumnTree();
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

      }, {
        key: "_isColumnElement",
        value: function _isColumnElement(node) {
          return node.nodeType === Node.ELEMENT_NODE && /\bcolumn\b/.test(node.localName);
        }
      }], [{
        key: "is",
        get: function get() {
          return 'vaadin-grid-column-group';
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            /** @private */
            _childColumns: {
              value: function value() {
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
      }, {
        key: "observers",
        get: function get() {
          return ['_updateVisibleChildColumns(_childColumns)', '_childColumnsChanged(_childColumns)', '_groupFrozenChanged(frozen, _rootColumns)', '_groupHiddenChanged(hidden, _rootColumns)', '_visibleChildColumnsChanged(_visibleChildColumns)', '_colSpanChanged(_colSpan, _headerCell, _footerCell)', '_groupOrderChanged(_order, _rootColumns)', '_groupReorderStatusChanged(_reorderStatus, _rootColumns)', '_groupResizableChanged(resizable, _rootColumns)'];
        }
      }]);

      return GridColumnGroupElement;
    }(Object(_vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_3__["ColumnBaseMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]));

    customElements.define(GridColumnGroupElement.is, GridColumnGroupElement);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-reordering-mixin.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-reordering-mixin.js ***!
    \*************************************************************************************/

  /*! exports provided: ColumnReorderingMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridColumnReorderingMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnReorderingMixin", function () {
      return ColumnReorderingMixin;
    });
    /* harmony import */


    var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */
    "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/gestures.js */
    "./node_modules/@polymer/polymer/lib/utils/gestures.js");
    /* harmony import */


    var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/polymer/lib/legacy/polymer.dom.js */
    "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/settings.js */
    "./node_modules/@polymer/polymer/lib/utils/settings.js");
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var ColumnReorderingMixin = function ColumnReorderingMixin(superClass) {
      return /*#__PURE__*/function (_Object4) {
        _inherits(ColumnReorderingMixin, _Object4);

        var _super23 = _createSuper(ColumnReorderingMixin);

        function ColumnReorderingMixin() {
          _classCallCheck(this, ColumnReorderingMixin);

          return _super23.apply(this, arguments);
        }

        _createClass(ColumnReorderingMixin, [{
          key: "ready",
          value: function ready() {
            _get(_getPrototypeOf(ColumnReorderingMixin.prototype), "ready", this).call(this);

            Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_1__["addListener"])(this, 'track', this._onTrackEvent);
            this._reorderGhost = this.shadowRoot.querySelector('[part="reorder-ghost"]');
            this.addEventListener('touchstart', this._onTouchStart.bind(this));
            this.addEventListener('touchmove', this._onTouchMove.bind(this));
            this.addEventListener('touchend', this._onTouchEnd.bind(this));
            this.addEventListener('contextmenu', this._onContextMenu.bind(this));
          }
          /** @private */

        }, {
          key: "_onContextMenu",
          value: function _onContextMenu(e) {
            if (this.hasAttribute('reordering')) {
              e.preventDefault();
            }
          }
          /** @private */

        }, {
          key: "_onTouchStart",
          value: function _onTouchStart(e) {
            var _this61 = this;

            // Touch event, delay activation by 100ms
            this._startTouchReorderTimeout = setTimeout(function () {
              _this61._onTrackStart({
                detail: {
                  x: e.touches[0].clientX,
                  y: e.touches[0].clientY
                }
              });
            }, 100);
          }
          /** @private */

        }, {
          key: "_onTouchMove",
          value: function _onTouchMove(e) {
            if (this._draggedColumn) {
              e.preventDefault();
            }

            clearTimeout(this._startTouchReorderTimeout);
          }
          /** @private */

        }, {
          key: "_onTouchEnd",
          value: function _onTouchEnd() {
            clearTimeout(this._startTouchReorderTimeout);

            this._onTrackEnd();
          }
          /** @private */

        }, {
          key: "_onTrackEvent",
          value: function _onTrackEvent(e) {
            if (e.detail.state === 'start') {
              var path = e.composedPath();
              var headerCell = path[path.indexOf(this.$.header) - 2];

              if (!headerCell || !headerCell._content) {
                // Not a header column
                return;
              }

              var activeElement = this.getRootNode().activeElement;

              if (headerCell._content.contains(this.getRootNode().activeElement) && (!this._ie || !this._isFocusable(activeElement))) {
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

        }, {
          key: "_onTrackStart",
          value: function _onTrackStart(e) {
            if (!this.columnReorderingAllowed) {
              return;
            } // Cancel reordering if there are draggable nodes on the event path


            var path = e.path || Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(e).path;

            if (path && path.filter(function (node) {
              return node.hasAttribute && node.hasAttribute('draggable');
            })[0]) {
              return;
            }

            var headerCell = this._cellFromPoint(e.detail.x, e.detail.y);

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

        }, {
          key: "_onTrack",
          value: function _onTrack(e) {
            if (!this._draggedColumn) {
              // Reordering didn’t start. Skip this event.
              return;
            }

            var targetCell = this._cellFromPoint(e.detail.x, e.detail.y);

            if (!targetCell) {
              return;
            }

            var targetColumn = this._getTargetColumn(targetCell, this._draggedColumn);

            if (this._isSwapAllowed(this._draggedColumn, targetColumn) && this._isSwappableByPosition(targetColumn, e.detail.x)) {
              this._swapColumnOrders(this._draggedColumn, targetColumn);
            }

            this._updateGhostPosition(e.detail.x, this._touchDevice ? e.detail.y - 50 : e.detail.y);

            this._lastDragClientX = e.detail.x;
          }
          /** @private */

        }, {
          key: "_onTrackEnd",
          value: function _onTrackEnd() {
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
            this.dispatchEvent(new CustomEvent('column-reorder', {
              detail: {
                columns: this._getColumnsInOrder()
              }
            }));
          }
          /**
           * @return {!Array<!GridColumnElement>}
           * @protected
           */

        }, {
          key: "_getColumnsInOrder",
          value: function _getColumnsInOrder() {
            return this._columnTree.slice(0).pop().filter(function (c) {
              return !c.hidden;
            }).sort(function (b, a) {
              return b._order - a._order;
            });
          }
          /**
           * @param {number} x
           * @param {number} y
           * @return {HTMLElement | undefined}
           * @protected
           */

        }, {
          key: "_cellFromPoint",
          value: function _cellFromPoint(x, y) {
            x = x || 0;
            y = y || 0;

            if (!this._draggedColumn) {
              this._toggleAttribute('no-content-pointer-events', true, this.$.scroller);
            }

            var cell;

            if (_polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_3__["useShadow"]) {
              cell = this.shadowRoot.elementFromPoint(x, y);
            } else {
              cell = document.elementFromPoint(x, y); // Workaround a FF58 bug

              if (cell.localName === 'vaadin-grid-cell-content') {
                cell = cell.assignedSlot.parentNode;
              }
            }

            this._toggleAttribute('no-content-pointer-events', false, this.$.scroller); // Make sure the element is actually a cell


            if (cell && cell._column) {
              return cell;
            }
          }
          /**
           * @param {number} eventClientX
           * @param {number} eventClientY
           * @protected
           */

        }, {
          key: "_updateGhostPosition",
          value: function _updateGhostPosition(eventClientX, eventClientY) {
            var ghostRect = this._reorderGhost.getBoundingClientRect(); // // This is where we want to position the ghost


            var targetLeft = eventClientX - ghostRect.width / 2;
            var targetTop = eventClientY - ghostRect.height / 2; // Current position

            var _left = parseInt(this._reorderGhost._left || 0);

            var _top = parseInt(this._reorderGhost._top || 0); // Reposition the ghost


            this._reorderGhost._left = _left - (ghostRect.left - targetLeft);
            this._reorderGhost._top = _top - (ghostRect.top - targetTop);
            this._reorderGhost.style.transform = "translate(".concat(this._reorderGhost._left, "px, ").concat(this._reorderGhost._top, "px)");
          }
          /**
           * @param {!Element} e
           * @return {string}
           * @protected
           */

        }, {
          key: "_getInnerText",
          value: function _getInnerText(e) {
            var _this62 = this;

            if (e.localName) {
              // Custom implementation needed since IE11 doesn't respect the spec in case of hidden elements
              if (getComputedStyle(e).display === 'none') {
                return '';
              } else {
                return Array.from(e.childNodes).map(function (n) {
                  return _this62._getInnerText(n);
                }).join('');
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

        }, {
          key: "_updateGhost",
          value: function _updateGhost(cell) {
            var ghost = this._reorderGhost;
            ghost.textContent = this._getInnerText(cell._content);
            var style = window.getComputedStyle(cell);
            ['boxSizing', 'display', 'width', 'height', 'background', 'alignItems', 'padding', 'border', 'flex-direction', 'overflow'].forEach(function (propertyName) {
              return ghost.style[propertyName] = style[propertyName];
            });
            return ghost;
          }
          /** @private */

        }, {
          key: "_updateOrders",
          value: function _updateOrders(columnTree, splices) {
            var _this63 = this;

            if (columnTree === undefined || splices === undefined) {
              return;
            } // Reset all column orders


            columnTree[0].forEach(function (column, index) {
              return column._order = 0;
            }); // Set order numbers to top-level columns

            columnTree[0].forEach(function (column, index) {
              return column._order = (index + 1) * _this63._orderBaseScope;
            });
          }
          /**
           * @param {!GridColumnElement} column
           * @param {string} status
           * @protected
           */

        }, {
          key: "_setSiblingsReorderStatus",
          value: function _setSiblingsReorderStatus(column, status) {
            var _this64 = this;

            Array.from(column.parentNode.children).filter(function (child) {
              return /column/.test(child.localName) && _this64._isSwapAllowed(child, column);
            }).forEach(function (sibling) {
              return sibling._reorderStatus = status;
            });
          }
          /** @protected */

        }, {
          key: "_autoScroller",
          value: function _autoScroller() {
            if (this._lastDragClientX) {
              var rightDiff = this._lastDragClientX - this.getBoundingClientRect().right + 50;
              var leftDiff = this.getBoundingClientRect().left - this._lastDragClientX + 50;

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

        }, {
          key: "_isSwapAllowed",
          value: function _isSwapAllowed(column1, column2) {
            if (column1 && column2) {
              var differentColumns = column1 !== column2;
              var sameParent = column1.parentElement === column2.parentElement;
              var sameFrozen = column1.frozen === column2.frozen;
              return differentColumns && sameParent && sameFrozen;
            }
          }
          /**
           * @param {!GridColumnElement} targetColumn
           * @param {number} clientX
           * @return {boolean}
           * @protected
           */

        }, {
          key: "_isSwappableByPosition",
          value: function _isSwappableByPosition(targetColumn, clientX) {
            var targetCell = Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter(function (cell) {
              return targetColumn.contains(cell._column);
            })[0];
            var sourceCellRect = this.$.header.querySelector('tr:not([hidden]) [reorder-status=dragging]').getBoundingClientRect();
            var targetRect = targetCell.getBoundingClientRect();

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

        }, {
          key: "_swapColumnOrders",
          value: function _swapColumnOrders(column1, column2) {
            var _order = column1._order;
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

        }, {
          key: "_getTargetColumn",
          value: function _getTargetColumn(targetCell, draggedColumn) {
            if (targetCell && draggedColumn) {
              var candidate = targetCell._column;

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

        }], [{
          key: "properties",
          get: function get() {
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
        }, {
          key: "observers",
          get: function get() {
            return ['_updateOrders(_columnTree, _columnTree.*)'];
          }
        }]);

        return ColumnReorderingMixin;
      }(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_0__["GestureEventListeners"])(superClass));
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-resizing-mixin.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-resizing-mixin.js ***!
    \***********************************************************************************/

  /*! exports provided: ColumnResizingMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridColumnResizingMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnResizingMixin", function () {
      return ColumnResizingMixin;
    });
    /* harmony import */


    var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */
    "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/gestures.js */
    "./node_modules/@polymer/polymer/lib/utils/gestures.js");
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var ColumnResizingMixin = function ColumnResizingMixin(superClass) {
      return /*#__PURE__*/function (_Object5) {
        _inherits(ColumnResizingMixin, _Object5);

        var _super24 = _createSuper(ColumnResizingMixin);

        function ColumnResizingMixin() {
          _classCallCheck(this, ColumnResizingMixin);

          return _super24.apply(this, arguments);
        }

        _createClass(ColumnResizingMixin, [{
          key: "ready",
          value: function ready() {
            _get(_getPrototypeOf(ColumnResizingMixin.prototype), "ready", this).call(this);

            var scroller = this.$.scroller;
            Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_1__["addListener"])(scroller, 'track', this._onHeaderTrack.bind(this)); // Disallow scrolling while resizing

            scroller.addEventListener('touchmove', function (e) {
              return scroller.hasAttribute('column-resizing') && e.preventDefault();
            }); // Disable contextmenu on any resize separator.

            scroller.addEventListener('contextmenu', function (e) {
              return e.target.getAttribute('part') == 'resize-handle' && e.preventDefault();
            }); // Disable native cell focus when resizing

            scroller.addEventListener('mousedown', function (e) {
              return e.target.getAttribute('part') === 'resize-handle' && e.preventDefault();
            });
          }
          /** @private */

        }, {
          key: "_onHeaderTrack",
          value: function _onHeaderTrack(e) {
            var handle = e.target;

            if (handle.getAttribute('part') === 'resize-handle') {
              var cell = handle.parentElement;
              var column = cell._column;

              this._toggleAttribute('column-resizing', true, this.$.scroller); // Get the target column to resize


              while (column.localName === 'vaadin-grid-column-group') {
                column = Array.prototype.slice.call(column._childColumns, 0).sort(function (a, b) {
                  return a._order - b._order;
                }).filter(function (column) {
                  return !column.hidden;
                }).pop();
              }

              var columnRowCells = Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]'));
              var targetCell = columnRowCells.filter(function (cell) {
                return cell._column === column;
              })[0]; // Resize the target column

              if (targetCell.offsetWidth) {
                var style = window.getComputedStyle(targetCell);
                var minWidth = 10 + parseInt(style.paddingLeft) + parseInt(style.paddingRight) + parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth) + parseInt(style.marginLeft) + parseInt(style.marginRight);
                var maxWidth = targetCell.offsetWidth + (this.__isRTL ? targetCell.getBoundingClientRect().left - e.detail.x : e.detail.x - targetCell.getBoundingClientRect().right);
                column.width = Math.max(minWidth, maxWidth) + 'px';
                column.flexGrow = 0;
              } // Fix width and flex-grow for all preceding columns


              columnRowCells.sort(function (a, b) {
                return a._column._order - b._column._order;
              }).forEach(function (cell, index, array) {
                if (index < array.indexOf(targetCell)) {
                  cell._column.width = cell.offsetWidth + 'px';
                  cell._column.flexGrow = 0;
                }
              });

              if (e.detail.state === 'end') {
                this._toggleAttribute('column-resizing', false, this.$.scroller);

                this.dispatchEvent(new CustomEvent('column-resize', {
                  detail: {
                    resizedColumn: column
                  }
                }));
              } // Notify resize


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

        }]);

        return ColumnResizingMixin;
      }(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_0__["GestureEventListeners"])(superClass));
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js ***!
    \********************************************************************/

  /*! exports provided: ColumnBaseMixin, GridColumnElement */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridColumnJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnBaseMixin", function () {
      return ColumnBaseMixin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridColumnElement", function () {
      return GridColumnElement;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element.js */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/flattened-nodes-observer.js */
    "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js");
    /* harmony import */


    var _vaadin_vaadin_element_mixin_vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @vaadin/vaadin-element-mixin/vaadin-dir-mixin.js */
    "./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-mixin.js");
    /* harmony import */


    var _vaadin_grid_templatizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vaadin-grid-templatizer.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-templatizer.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/debounce.js */
    "./node_modules/@polymer/polymer/lib/utils/debounce.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/async.js */
    "./node_modules/@polymer/polymer/lib/utils/async.js");
    /**
    @license
    Copyright (c) 2018 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var ColumnBaseMixin = function ColumnBaseMixin(superClass) {
      return /*#__PURE__*/function (_superClass6) {
        _inherits(ColumnBaseMixin, _superClass6);

        var _super25 = _createSuper(ColumnBaseMixin);

        _createClass(ColumnBaseMixin, [{
          key: "connectedCallback",

          /** @protected */
          value: function connectedCallback() {
            var _this66 = this;

            _get(_getPrototypeOf(ColumnBaseMixin.prototype), "connectedCallback", this).call(this);

            this._bodyTemplate && (this._bodyTemplate.templatizer._grid = this._grid);
            this._headerTemplate && (this._headerTemplate.templatizer._grid = this._grid);
            this._footerTemplate && (this._footerTemplate.templatizer._grid = this._grid);

            this._templateObserver.flush();

            if (!this._bodyTemplate) {
              // The observer might not have triggered if the tag is empty. Run manually.
              this._templateObserver.callback();
            }

            requestAnimationFrame(function () {
              _this66._allCells.forEach(function (cell) {
                if (!cell._content.parentNode) {
                  _this66._grid && _this66._grid.appendChild(cell._content);
                }
              });
            });
          }
          /** @protected */

        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            var _this67 = this;

            _get(_getPrototypeOf(ColumnBaseMixin.prototype), "disconnectedCallback", this).call(this);

            requestAnimationFrame(function () {
              if (!_this67._findHostGrid()) {
                _this67._allCells.forEach(function (cell) {
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

        }, {
          key: "_findHostGrid",
          value: function _findHostGrid() {
            var el = this; // Custom elements extending grid must have a specific localName

            while (el && !/^vaadin.*grid(-pro)?$/.test(el.localName)) {
              el = el.assignedSlot ? el.assignedSlot.parentNode : el.parentNode;
            }

            return el || undefined;
          }
          /**
           * @return {!GridElement | undefined}
           * @protected
           */

        }, {
          key: "_grid",
          get: function get() {
            if (!this._gridValue) {
              this._gridValue = this._findHostGrid();
            }

            return this._gridValue;
          }
          /**
           * @return {!Array<!HTMLElement>}
           * @protected
           */

        }, {
          key: "_allCells",
          get: function get() {
            return [].concat(this._cells || []).concat(this._emptyCells || []).concat(this._headerCell).concat(this._footerCell).filter(function (cell) {
              return cell;
            });
          }
        }], [{
          key: "properties",
          get: function get() {
            return {
              /**
               * When set to true, the column is user-resizable.
               * @default false
               */
              resizable: {
                type: Boolean,
                value: function value() {
                  if (this.localName === 'vaadin-grid-column-group') {
                    return;
                  }

                  var parent = this.parentNode;

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
        }, {
          key: "observers",
          get: function get() {
            return ['_widthChanged(width, _headerCell, _footerCell, _cells.*)', '_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)', '_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)', '_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)', '_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)', '_orderChanged(_order, _headerCell, _footerCell, _cells.*)', '_lastFrozenChanged(_lastFrozen)', '_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)', '_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)', '_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)', '_resizableChanged(resizable, _headerCell)', '_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)', '_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)'];
          }
        }]);

        function ColumnBaseMixin() {
          var _this65;

          _classCallCheck(this, ColumnBaseMixin);

          _this65 = _super25.call(this);
          _this65._templateObserver = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_1__["FlattenedNodesObserver"](_assertThisInitialized(_this65), function (info) {
            _this65._headerTemplate = _this65._prepareHeaderTemplate();
            _this65._footerTemplate = _this65._prepareFooterTemplate();
            _this65._bodyTemplate = _this65._prepareBodyTemplate();
          });
          return _this65;
        }
        /**
         * @return {HTMLTemplateElement}
         * @protected
         */


        _createClass(ColumnBaseMixin, [{
          key: "_prepareHeaderTemplate",
          value: function _prepareHeaderTemplate() {
            return this._prepareTemplatizer(this._findTemplate(true) || null, {});
          }
          /**
           * @return {HTMLTemplateElement}
           * @protected
           */

        }, {
          key: "_prepareFooterTemplate",
          value: function _prepareFooterTemplate() {
            return this._prepareTemplatizer(this._findTemplate(false, true) || null, {});
          }
          /**
           * @return {HTMLTemplateElement}
           * @protected
           */

        }, {
          key: "_prepareBodyTemplate",
          value: function _prepareBodyTemplate() {
            return this._prepareTemplatizer(this._findTemplate() || null);
          }
          /**
           * @param {HTMLTemplateElement} template
           * @param {object} instanceProps
           * @return {HTMLTemplateElement}
           * @protected
           */

        }, {
          key: "_prepareTemplatizer",
          value: function _prepareTemplatizer(template, instanceProps) {
            if (template && !template.templatizer) {
              var templatizer = new _vaadin_grid_templatizer_js__WEBPACK_IMPORTED_MODULE_3__["Templatizer"]();
              templatizer._grid = this._grid;
              templatizer.dataHost = this.dataHost;
              templatizer._instanceProps = instanceProps || templatizer._instanceProps;
              templatizer.template = template;
              template.templatizer = templatizer;
            }

            return template;
          }
          /** @protected */

        }, {
          key: "_renderHeaderAndFooter",
          value: function _renderHeaderAndFooter() {
            if (this.headerRenderer && this._headerCell) {
              this.__runRenderer(this.headerRenderer, this._headerCell);
            }

            if (this.footerRenderer && this._footerCell) {
              this.__runRenderer(this.footerRenderer, this._footerCell);
            }
          }
          /** @private */

        }, {
          key: "__runRenderer",
          value: function __runRenderer(renderer, cell, model) {
            var args = [cell._content, this];

            if (model && model.item) {
              args.push(model);
            }

            renderer.apply(this, args);
          }
          /** @private */

        }, {
          key: "__setColumnTemplateOrRenderer",
          value: function __setColumnTemplateOrRenderer(template, renderer, cells) {
            var _this68 = this;

            if (template && renderer) {
              throw new Error('You should only use either a renderer or a template');
            }

            cells.forEach(function (cell) {
              var model = _this68._grid.__getRowModel(cell.parentElement);

              if (renderer) {
                cell._renderer = renderer;

                if (model.item || renderer === _this68.headerRenderer || renderer === _this68.footerRenderer) {
                  _this68.__runRenderer(renderer, cell, model);
                }
              } else if (cell._template !== template) {
                cell._template = template;
                cell._content.innerHTML = '';
                template.templatizer._grid = template.templatizer._grid || _this68._grid;
                var inst = template.templatizer.createInstance();

                cell._content.appendChild(inst.root);

                cell._instance = inst;

                if (model.item) {
                  cell._instance.setProperties(model);
                }
              }
            });
          }
          /** @private */

        }, {
          key: "_setBodyTemplateOrRenderer",
          value: function _setBodyTemplateOrRenderer(template, renderer, cells, splices) {
            if ((template || renderer) && cells) {
              this.__setColumnTemplateOrRenderer(template, renderer, cells);
            }
          }
          /** @private */

        }, {
          key: "_setHeaderTemplateOrRenderer",
          value: function _setHeaderTemplateOrRenderer(headerTemplate, headerRenderer, headerCell) {
            if ((headerTemplate || headerRenderer) && headerCell) {
              this.__setColumnTemplateOrRenderer(headerTemplate, headerRenderer, [headerCell]);
            }
          }
          /** @private */

        }, {
          key: "_setFooterTemplateOrRenderer",
          value: function _setFooterTemplateOrRenderer(footerTemplate, footerRenderer, footerCell) {
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

        }, {
          key: "_selectFirstTemplate",
          value: function _selectFirstTemplate() {
            var header = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var footer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_1__["FlattenedNodesObserver"].getFlattenedNodes(this).filter(function (node) {
              return node.localName === 'template' && node.classList.contains('header') === header && node.classList.contains('footer') === footer;
            })[0];
          }
          /**
           * @param {boolean} header
           * @param {boolean} footer
           * @return {HTMLTemplateElement}
           * @protected
           */

        }, {
          key: "_findTemplate",
          value: function _findTemplate(header, footer) {
            var template = this._selectFirstTemplate(header, footer);

            if (template) {
              if (this.dataHost) {
                // set dataHost to the context where template has been defined
                template._rootDataHost = this.dataHost._rootDataHost || this.dataHost;
              }
            }

            return template;
          }
          /** @private */

        }, {
          key: "_flexGrowChanged",
          value: function _flexGrowChanged(flexGrow, headerCell, footerCell, cells) {
            if (this.parentElement && this.parentElement._columnPropChanged) {
              this.parentElement._columnPropChanged('flexGrow');
            }

            this._allCells.forEach(function (cell) {
              return cell.style.flexGrow = flexGrow;
            });
          }
          /** @private */

        }, {
          key: "_orderChanged",
          value: function _orderChanged(order, headerCell, footerCell, cells) {
            this._allCells.forEach(function (cell) {
              return cell.style.order = order;
            });
          }
          /** @private */

        }, {
          key: "_widthChanged",
          value: function _widthChanged(width, headerCell, footerCell, cells) {
            if (this.parentElement && this.parentElement._columnPropChanged) {
              this.parentElement._columnPropChanged('width');
            }

            this._allCells.forEach(function (cell) {
              return cell.style.width = width;
            }); // Force a reflow to workaround browser issues causing double scrollbars to grid
            // https://github.com/vaadin/vaadin-grid/issues/1586


            if (this._grid && this._grid.__forceReflow) {
              this._grid.__forceReflow();
            }
          }
          /** @private */

        }, {
          key: "_frozenChanged",
          value: function _frozenChanged(frozen, headerCell, footerCell, cells) {
            var _this69 = this;

            if (this.parentElement && this.parentElement._columnPropChanged) {
              this.parentElement._columnPropChanged('frozen', frozen);
            }

            this._allCells.forEach(function (cell) {
              return _this69._toggleAttribute('frozen', frozen, cell);
            });

            this._grid && this._grid._frozenCellsChanged && this._grid._frozenCellsChanged();
          }
          /** @private */

        }, {
          key: "_lastFrozenChanged",
          value: function _lastFrozenChanged(lastFrozen) {
            var _this70 = this;

            this._allCells.forEach(function (cell) {
              return _this70._toggleAttribute('last-frozen', lastFrozen, cell);
            });

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

        }, {
          key: "_pathOrHeaderChanged",
          value: function _pathOrHeaderChanged(path, header, headerCell, footerCell, cells, renderer, headerRenderer, bodyTemplate, headerTemplate) {
            var _this71 = this;

            var hasHeaderText = header !== undefined;

            if (!headerRenderer && !headerTemplate && hasHeaderText && headerCell) {
              this.__setTextContent(headerCell._content, header);
            }

            if (path && cells.value) {
              if (!renderer && !bodyTemplate) {
                var pathRenderer = function pathRenderer(root, owner, _ref) {
                  var item = _ref.item;
                  return _this71.__setTextContent(root, _this71.get(path, item));
                };

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

        }, {
          key: "__setTextContent",
          value: function __setTextContent(node, textContent) {
            node.textContent !== textContent && (node.textContent = textContent);
          }
          /**
           * @param {string} path
           * @return {string}
           * @protected
           */

        }, {
          key: "_generateHeader",
          value: function _generateHeader(path) {
            return path.substr(path.lastIndexOf('.') + 1).replace(/([A-Z])/g, '-$1').toLowerCase().replace(/-/g, ' ').replace(/^./, function (match) {
              return match.toUpperCase();
            });
          }
          /**
           * @param {string} name
           * @param {boolean} bool
           * @param {!Element} node
           * @protected
           */

        }, {
          key: "_toggleAttribute",
          value: function _toggleAttribute(name, bool, node) {
            if (node.hasAttribute(name) === !bool) {
              if (bool) {
                node.setAttribute(name, '');
              } else {
                node.removeAttribute(name);
              }
            }
          }
          /** @private */

        }, {
          key: "_reorderStatusChanged",
          value: function _reorderStatusChanged(reorderStatus, headerCell, footerCell, cells) {
            this._allCells.forEach(function (cell) {
              return cell.setAttribute('reorder-status', reorderStatus);
            });
          }
          /** @private */

        }, {
          key: "_resizableChanged",
          value: function _resizableChanged(resizable, headerCell) {
            if (resizable === undefined || headerCell === undefined) {
              return;
            }

            if (headerCell) {
              [headerCell].concat(this._emptyCells).forEach(function (cell) {
                if (cell) {
                  var existingHandle = cell.querySelector('[part~="resize-handle"]');

                  if (existingHandle) {
                    cell.removeChild(existingHandle);
                  }

                  if (resizable) {
                    var handle = document.createElement('div');
                    handle.setAttribute('part', 'resize-handle');
                    cell.appendChild(handle);
                  }
                }
              });
            }
          }
          /** @private */

        }, {
          key: "_textAlignChanged",
          value: function _textAlignChanged(textAlign, _cells, _headerCell, _footerCell) {
            if (textAlign === undefined) {
              return;
            }

            if (['start', 'end', 'center'].indexOf(textAlign) === -1) {
              console.warn('textAlign can only be set as "start", "end" or "center"');
              return;
            }

            var textAlignFallback;

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

            this._allCells.forEach(function (cell) {
              cell._content.style.textAlign = textAlign;

              if (getComputedStyle(cell._content).textAlign !== textAlign) {
                cell._content.style.textAlign = textAlignFallback;
              }
            });
          }
          /** @private */

        }, {
          key: "_hiddenChanged",
          value: function _hiddenChanged(hidden, headerCell, footerCell, cells) {
            var _this72 = this;

            if (this.parentElement && this.parentElement._columnPropChanged) {
              this.parentElement._columnPropChanged('hidden', hidden);
            }

            if (!!hidden !== !!this._previousHidden && this._grid) {
              if (hidden === true) {
                this._allCells.forEach(function (cell) {
                  if (cell._content.parentNode) {
                    cell._content.parentNode.removeChild(cell._content);
                  }
                });
              }

              this._grid._debouncerHiddenChanged = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(this._grid._debouncerHiddenChanged, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_5__["animationFrame"], function () {
                if (_this72._grid && _this72._grid._renderColumnTree) {
                  _this72._grid._renderColumnTree(_this72._grid._columnTree);
                }
              });
              this._grid._updateLastFrozen && this._grid._updateLastFrozen();
              this._grid.notifyResize && this._grid.notifyResize();
              this._grid._resetKeyboardNavigation && this._grid._resetKeyboardNavigation();
            }

            this._previousHidden = hidden;
          }
        }]);

        return ColumnBaseMixin;
      }(superClass);
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


    var GridColumnElement = /*#__PURE__*/function (_ColumnBaseMixin) {
      _inherits(GridColumnElement, _ColumnBaseMixin);

      var _super26 = _createSuper(GridColumnElement);

      function GridColumnElement() {
        _classCallCheck(this, GridColumnElement);

        return _super26.apply(this, arguments);
      }

      _createClass(GridColumnElement, null, [{
        key: "is",
        get: function get() {
          return 'vaadin-grid-column';
        }
      }, {
        key: "properties",
        get: function get() {
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
      }]);

      return GridColumnElement;
    }(ColumnBaseMixin(Object(_vaadin_vaadin_element_mixin_vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_2__["DirMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])));

    customElements.define(GridColumnElement.is, GridColumnElement);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-data-provider-mixin.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-data-provider-mixin.js ***!
    \*********************************************************************************/

  /*! exports provided: ItemCache, DataProviderMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridDataProviderMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemCache", function () {
      return ItemCache;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataProviderMixin", function () {
      return DataProviderMixin;
    });
    /* harmony import */


    var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/debounce.js */
    "./node_modules/@polymer/polymer/lib/utils/debounce.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/async.js */
    "./node_modules/@polymer/polymer/lib/utils/async.js");
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */


    var ItemCache = /*#__PURE__*/function () {
      /**
       * @param {!HTMLElement} grid
       * @param {!ItemCache | undefined} parentCache
       * @param {!GridItem | undefined} parentItem
       */
      function ItemCache(grid, parentCache, parentItem) {
        _classCallCheck(this, ItemCache);

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


      _createClass(ItemCache, [{
        key: "isLoading",
        value: function isLoading() {
          var _this73 = this;

          return Boolean(Object.keys(this.pendingRequests).length || Object.keys(this.itemCaches).filter(function (index) {
            return _this73.itemCaches[index].isLoading();
          })[0]);
        }
        /**
         * @param {number} index
         * @return {!GridItem | undefined}
         */

      }, {
        key: "getItemForIndex",
        value: function getItemForIndex(index) {
          var _this$getCacheAndInde = this.getCacheAndIndex(index),
              cache = _this$getCacheAndInde.cache,
              scaledIndex = _this$getCacheAndInde.scaledIndex;

          return cache.items[scaledIndex];
        }
      }, {
        key: "updateSize",
        value: function updateSize() {
          var _this74 = this;

          this.effectiveSize = !this.parentItem || this.grid._isExpanded(this.parentItem) ? this.size + Object.keys(this.itemCaches).reduce(function (prev, curr) {
            var subCache = _this74.itemCaches[curr];
            subCache.updateSize();
            return prev + subCache.effectiveSize;
          }, 0) : 0;
        }
        /**
         * @param {number} scaledIndex
         */

      }, {
        key: "ensureSubCacheForScaledIndex",
        value: function ensureSubCacheForScaledIndex(scaledIndex) {
          if (!this.itemCaches[scaledIndex]) {
            var subCache = new ItemCache(this.grid, this, this.items[scaledIndex]);
            this.itemCaches[scaledIndex] = subCache;

            this.grid._loadPage(0, subCache);
          }
        }
        /**
         * @param {number} index
         * @return {{cache: !ItemCache, scaledIndex: number}}
         */

      }, {
        key: "getCacheAndIndex",
        value: function getCacheAndIndex(index) {
          var thisLevelIndex = index;
          var keys = Object.keys(this.itemCaches);

          for (var i = 0; i < keys.length; i++) {
            var expandedIndex = Number(keys[i]);
            var subCache = this.itemCaches[expandedIndex];

            if (thisLevelIndex <= expandedIndex) {
              return {
                cache: this,
                scaledIndex: thisLevelIndex
              };
            } else if (thisLevelIndex <= expandedIndex + subCache.effectiveSize) {
              return subCache.getCacheAndIndex(thisLevelIndex - expandedIndex - 1);
            }

            thisLevelIndex -= subCache.effectiveSize;
          }

          return {
            cache: this,
            scaledIndex: thisLevelIndex
          };
        }
      }]);

      return ItemCache;
    }();
    /**
     * @polymerMixin
     */


    var DataProviderMixin = function DataProviderMixin(superClass) {
      return /*#__PURE__*/function (_superClass7) {
        _inherits(DataProviderMixin, _superClass7);

        var _super27 = _createSuper(DataProviderMixin);

        function DataProviderMixin() {
          _classCallCheck(this, DataProviderMixin);

          return _super27.apply(this, arguments);
        }

        _createClass(DataProviderMixin, [{
          key: "_sizeChanged",

          /** @private */
          value: function _sizeChanged(size) {
            var delta = size - this._cache.size;
            this._cache.size += delta;
            this._cache.effectiveSize += delta;
            this._effectiveSize = this._cache.effectiveSize;
          }
          /**
           * @param {number} index
           * @param {HTMLElement} el
           * @protected
           */

        }, {
          key: "_getItem",
          value: function _getItem(index, el) {
            if (index >= this._effectiveSize) {
              return;
            }

            el.index = index;

            var _this$_cache$getCache = this._cache.getCacheAndIndex(index),
                cache = _this$_cache$getCache.cache,
                scaledIndex = _this$_cache$getCache.scaledIndex;

            var item = cache.items[scaledIndex];

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

        }, {
          key: "_expandedInstanceChangedCallback",
          value: function _expandedInstanceChangedCallback(inst, value) {
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

        }, {
          key: "getItemId",
          value: function getItemId(item) {
            return this.itemIdPath ? this.get(this.itemIdPath, item) : item;
          }
          /**
           * @param {!GridItem} item
           * @return {boolean}
           * @protected
           */

        }, {
          key: "_isExpanded",
          value: function _isExpanded(item) {
            return this.__expandedKeys.has(this.getItemId(item));
          }
          /** @private */

        }, {
          key: "_expandedItemsChanged",
          value: function _expandedItemsChanged(e) {
            this.__cacheExpandedKeys();

            this._cache.updateSize();

            this._effectiveSize = this._cache.effectiveSize;

            this._assignModels();
          }
          /** @private */

        }, {
          key: "_itemIdPathChanged",
          value: function _itemIdPathChanged(e) {
            this.__cacheExpandedKeys();
          }
          /** @private */

        }, {
          key: "__cacheExpandedKeys",
          value: function __cacheExpandedKeys() {
            var _this75 = this;

            if (this.expandedItems) {
              this.__expandedKeys = new Set();
              this.expandedItems.forEach(function (item) {
                _this75.__expandedKeys.add(_this75.getItemId(item));
              });
            }
          }
          /**
           * Expands the given item tree.
           * @param {!GridItem} item
           */

        }, {
          key: "expandItem",
          value: function expandItem(item) {
            if (!this._isExpanded(item)) {
              this.push('expandedItems', item);
            }
          }
          /**
           * Collapses the given item tree.
           * @param {!GridItem} item
           */

        }, {
          key: "collapseItem",
          value: function collapseItem(item) {
            if (this._isExpanded(item)) {
              this.splice('expandedItems', this._getItemIndexInArray(item, this.expandedItems), 1);
            }
          }
          /**
           * @param {number} index
           * @return {number}
           * @protected
           */

        }, {
          key: "_getIndexLevel",
          value: function _getIndexLevel(index) {
            var _this$_cache$getCache2 = this._cache.getCacheAndIndex(index),
                cache = _this$_cache$getCache2.cache;

            var level = 0;

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

        }, {
          key: "_canPopulate",
          value: function _canPopulate() {
            return Boolean(this._hasData && this._columnTree);
          }
          /**
           * @param {number} page
           * @param {ItemCache} cache
           * @protected
           */

        }, {
          key: "_loadPage",
          value: function _loadPage(page, cache) {
            var _this76 = this;

            // make sure same page isn't requested multiple times.
            if (!cache.pendingRequests[page] && this.dataProvider) {
              this._setLoading(true);

              cache.pendingRequests[page] = true;
              var params = {
                page: page,
                pageSize: this.pageSize,
                sortOrders: this._mapSorters(),
                filters: this._mapFilters(),
                parentItem: cache.parentItem
              };
              this.dataProvider(params, function (items, size) {
                if (size !== undefined) {
                  cache.size = size;
                } else {
                  if (params.parentItem) {
                    cache.size = items.length;
                  }
                }

                var currentItems = Array.from(_this76.$.items.children).map(function (row) {
                  return row._item;
                }); // Populate the cache with new items

                items.forEach(function (item, itemsIndex) {
                  var itemIndex = page * _this76.pageSize + itemsIndex;
                  cache.items[itemIndex] = item;

                  if (_this76._isExpanded(item) && currentItems.indexOf(item) > -1) {
                    // Force synchronous data request for expanded item sub-cache
                    cache.ensureSubCacheForScaledIndex(itemIndex);
                  }
                });
                _this76._hasData = true;
                delete cache.pendingRequests[page];
                _this76._debouncerApplyCachedData = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(_this76._debouncerApplyCachedData, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(0), function () {
                  _this76._setLoading(false);

                  _this76._cache.updateSize();

                  _this76._effectiveSize = _this76._cache.effectiveSize;
                  Array.from(_this76.$.items.children).filter(function (row) {
                    return !row.hidden;
                  }).forEach(function (row) {
                    var cachedItem = _this76._cache.getItemForIndex(row.index);

                    if (cachedItem) {
                      _this76._getItem(row.index, row);
                    }
                  });

                  _this76._increasePoolIfNeeded(0);
                });

                if (!_this76._cache.isLoading()) {
                  _this76._debouncerApplyCachedData.flush();
                }

                _this76.__itemsReceived();
              });
            }
          }
          /**
           * @param {number} index
           * @return {number}
           * @private
           */

        }, {
          key: "_getPageForIndex",
          value: function _getPageForIndex(index) {
            return Math.floor(index / this.pageSize);
          }
          /**
           * Clears the cached pages and reloads data from dataprovider when needed.
           */

        }, {
          key: "clearCache",
          value: function clearCache() {
            this._cache = new ItemCache(this);
            Array.from(this.$.items.children).forEach(function (row) {
              Array.from(row.children).forEach(function (cell) {
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

        }, {
          key: "_pageSizeChanged",
          value: function _pageSizeChanged(pageSize, oldPageSize) {
            if (oldPageSize !== undefined && pageSize !== oldPageSize) {
              this.clearCache();
            }
          }
          /** @protected */

        }, {
          key: "_checkSize",
          value: function _checkSize() {
            if (this.size === undefined && this._effectiveSize === 0) {
              console.warn('The <vaadin-grid> needs the total number of items' + ' in order to display rows. Set the total number of items' + ' to the `size` property, or provide the total number of items' + ' in the second argument of the `dataProvider`’s `callback` call.');
            }
          }
          /** @private */

        }, {
          key: "_dataProviderChanged",
          value: function _dataProviderChanged(dataProvider, oldDataProvider) {
            if (oldDataProvider !== undefined) {
              this.clearCache();
            }

            if (dataProvider && this.items && this.items.length) {
              // Fixes possibly invalid cached lastVisibleIndex value in <iron-list>
              this._scrollToIndex(this._firstVisibleIndex);
            }

            this._ensureFirstPageLoaded();

            this._debouncerCheckSize = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(this._debouncerCheckSize, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(2000), this._checkSize.bind(this));

            this._scrollHandler();
          }
          /** @protected */

        }, {
          key: "_ensureFirstPageLoaded",
          value: function _ensureFirstPageLoaded() {
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

        }, {
          key: "_itemsEqual",
          value: function _itemsEqual(item1, item2) {
            return this.getItemId(item1) === this.getItemId(item2);
          }
          /**
           * @param {!GridItem} item
           * @param {!Array<!GridItem>} array
           * @return {number}
           * @protected
           */

        }, {
          key: "_getItemIndexInArray",
          value: function _getItemIndexInArray(item, array) {
            var _this77 = this;

            var result = -1;
            array.forEach(function (i, idx) {
              if (_this77._itemsEqual(i, item)) {
                result = idx;
              }
            });
            return result;
          }
        }], [{
          key: "properties",
          get: function get() {
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
                value: function value() {
                  var cache = new ItemCache(this);
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
                value: function value() {
                  return [];
                }
              }
            };
          }
        }, {
          key: "observers",
          get: function get() {
            return ['_sizeChanged(size)', '_itemIdPathChanged(itemIdPath)', '_expandedItemsChanged(expandedItems.*)'];
          }
        }]);

        return DataProviderMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-drag-and-drop-mixin.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-drag-and-drop-mixin.js ***!
    \*********************************************************************************/

  /*! exports provided: DragAndDropMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridDragAndDropMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragAndDropMixin", function () {
      return DragAndDropMixin;
    });
    /**
    @license
    Copyright (c) 2019 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */


    var DropMode = {
      BETWEEN: 'between',
      ON_TOP: 'on-top',
      ON_TOP_OR_BETWEEN: 'on-top-or-between',
      ON_GRID: 'on-grid'
    };
    var DropLocation = {
      ON_TOP: 'on-top',
      ABOVE: 'above',
      BELOW: 'below',
      EMPTY: 'empty'
    };
    /**
     * @polymerMixin
     */

    var DragAndDropMixin = function DragAndDropMixin(superClass) {
      return /*#__PURE__*/function (_superClass8) {
        _inherits(DragAndDropMixin, _superClass8);

        var _super28 = _createSuper(DragAndDropMixin);

        function DragAndDropMixin() {
          _classCallCheck(this, DragAndDropMixin);

          return _super28.apply(this, arguments);
        }

        _createClass(DragAndDropMixin, [{
          key: "ready",

          /** @protected */
          value: function ready() {
            var _this78 = this;

            _get(_getPrototypeOf(DragAndDropMixin.prototype), "ready", this).call(this);

            this.$.table.addEventListener('dragstart', this._onDragStart.bind(this));
            this.$.table.addEventListener('dragend', this._onDragEnd.bind(this));
            this.$.table.addEventListener('dragover', this._onDragOver.bind(this));
            this.$.table.addEventListener('dragleave', this._onDragLeave.bind(this));
            this.$.table.addEventListener('drop', this._onDrop.bind(this));
            this.$.table.addEventListener('dragenter', function (e) {
              if (_this78.dropMode) {
                e.preventDefault();
                e.stopPropagation();
              }
            });
          }
          /** @private */

        }, {
          key: "_onDragStart",
          value: function _onDragStart(e) {
            var _this79 = this;

            if (this.rowsDraggable) {
              var row = e.target;

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
                var transform = row.style.transform;
                row.style.top = /translateY\((.*)\)/.exec(transform)[1];
                row.style.transform = 'none';
                requestAnimationFrame(function () {
                  row.style.top = '';
                  row.style.transform = transform;
                });
              }

              var rowRect = row.getBoundingClientRect();

              if (!window.ShadyDOM) {
                if (this._ios) {
                  e.dataTransfer.setDragImage(row);
                } else {
                  e.dataTransfer.setDragImage(row, e.clientX - rowRect.left, e.clientY - rowRect.top);
                }
              }

              var rows = [row];

              if (this._isSelected(row._item)) {
                rows = this.__getViewportRows().filter(function (row) {
                  return _this79._isSelected(row._item);
                }).filter(function (row) {
                  return !_this79.dragFilter || _this79.dragFilter(_this79.__getRowModel(row));
                });
              } // Set the default transfer data


              e.dataTransfer.setData('text', this.__formatDefaultTransferData(rows));
              row.setAttribute('dragstart', rows.length > 1 ? rows.length : '');
              this.updateStyles({
                '--_grid-drag-start-x': "".concat(e.clientX - rowRect.left + 20, "px"),
                '--_grid-drag-start-y': "".concat(e.clientY - rowRect.top + 10, "px")
              });
              requestAnimationFrame(function () {
                row.removeAttribute('dragstart');

                _this79.updateStyles({
                  '--_grid-drag-start-x': '',
                  '--_grid-drag-start-y': ''
                });
              });
              var event = new CustomEvent('grid-dragstart', {
                detail: {
                  draggedItems: rows.map(function (row) {
                    return row._item;
                  }),
                  setDragData: function setDragData(type, data) {
                    return e.dataTransfer.setData(type, data);
                  },
                  setDraggedItemsCount: function setDraggedItemsCount(count) {
                    return row.setAttribute('dragstart', count);
                  }
                }
              });
              event.originalEvent = e;
              this.dispatchEvent(event);
            }
          }
          /** @private */

        }, {
          key: "_onDragEnd",
          value: function _onDragEnd(e) {
            this._toggleAttribute('dragging-rows', false, this);

            e.stopPropagation();
            var event = new CustomEvent('grid-dragend');
            event.originalEvent = e;
            this.dispatchEvent(event);
          }
          /** @private */

        }, {
          key: "_onDragLeave",
          value: function _onDragLeave(e) {
            e.stopPropagation();

            this._clearDragStyles();
          }
          /** @private */

        }, {
          key: "_onDragOver",
          value: function _onDragOver(e) {
            if (this.dropMode) {
              this._dropLocation = undefined;
              this._dragOverItem = undefined;

              if (this.__dndAutoScroll(e.clientY)) {
                this._clearDragStyles();

                return;
              }

              var row = e.composedPath().filter(function (node) {
                return node.localName === 'tr';
              })[0];

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
                  row = Array.from(this.$.items.children).filter(function (row) {
                    return !row.hidden;
                  }).pop();
                  this._dropLocation = DropLocation.BELOW;
                } else {
                  // Drop mode on-top used but the dragover didn't occur over one of the existing rows
                  return;
                }
              } else {
                // The dragover occurred on a body row, determine the drop location from coordinates
                var rowRect = row.getBoundingClientRect();
                this._dropLocation = DropLocation.ON_TOP;

                if (this.dropMode === DropMode.BETWEEN) {
                  var dropAbove = e.clientY - rowRect.top < rowRect.bottom - e.clientY;
                  this._dropLocation = dropAbove ? DropLocation.ABOVE : DropLocation.BELOW;
                } else if (this.dropMode === DropMode.ON_TOP_OR_BETWEEN) {
                  if (e.clientY - rowRect.top < rowRect.height / 3) {
                    this._dropLocation = DropLocation.ABOVE;
                  } else if (e.clientY - rowRect.top > rowRect.height / 3 * 2) {
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

        }, {
          key: "__dndAutoScroll",
          value: function __dndAutoScroll(clientY) {
            var _this80 = this;

            if (this.__dndAutoScrolling) {
              return true;
            }

            var headerBottom = this.$.header.getBoundingClientRect().bottom;
            var footerTop = this.$.footer.getBoundingClientRect().top;
            var topDiff = headerBottom - clientY + this.__dndAutoScrollThreshold;
            var bottomDiff = clientY - footerTop + this.__dndAutoScrollThreshold;
            var scrollTopDelta = 0;

            if (bottomDiff > 0) {
              scrollTopDelta = bottomDiff * 2;
            } else if (topDiff > 0) {
              scrollTopDelta = -topDiff * 2;
            }

            if (scrollTopDelta) {
              var scrollTop = this.$.table.scrollTop;
              this.$.table.scrollTop += scrollTopDelta;
              var scrollTopChanged = scrollTop !== this.$.table.scrollTop;

              if (scrollTopChanged) {
                this.__dndAutoScrolling = true; // Disallow more auto-scrolls within 20ms

                setTimeout(function () {
                  return _this80.__dndAutoScrolling = false;
                }, 20);

                this._scrollHandler();

                return true;
              }
            }
          }
          /** @private */

        }, {
          key: "__getViewportRows",
          value: function __getViewportRows() {
            var headerBottom = this.$.header.getBoundingClientRect().bottom;
            var footerTop = this.$.footer.getBoundingClientRect().top;
            return Array.from(this.$.items.children).filter(function (row) {
              var rowRect = row.getBoundingClientRect();
              return rowRect.bottom > headerBottom && rowRect.top < footerTop;
            });
          }
          /** @protected */

        }, {
          key: "_clearDragStyles",
          value: function _clearDragStyles() {
            this.removeAttribute('dragover');
            Array.from(this.$.items.children).forEach(function (row) {
              return row.removeAttribute('dragover');
            });
          }
          /** @private */

        }, {
          key: "_onDrop",
          value: function _onDrop(e) {
            if (this.dropMode) {
              e.stopPropagation();
              e.preventDefault();
              var dragData = e.dataTransfer.types && Array.from(e.dataTransfer.types).map(function (type) {
                return {
                  type: type,
                  data: e.dataTransfer.getData(type)
                };
              });

              this._clearDragStyles();

              var event = new CustomEvent('grid-drop', {
                bubbles: e.bubbles,
                cancelable: e.cancelable,
                detail: {
                  dropTargetItem: this._dragOverItem,
                  dropLocation: this._dropLocation,
                  dragData: dragData
                }
              });
              event.originalEvent = e;
              this.dispatchEvent(event);
            }
          }
          /** @private */

        }, {
          key: "__formatDefaultTransferData",
          value: function __formatDefaultTransferData(rows) {
            return rows.map(function (row) {
              return Array.from(row.children).filter(function (cell) {
                return !cell.hidden && cell.getAttribute('part').indexOf('details-cell') === -1;
              }).sort(function (a, b) {
                return a._column._order > b._column._order ? 1 : -1;
              }).map(function (cell) {
                return cell._content.textContent.trim();
              }).filter(function (content) {
                return content;
              }).join('\t');
            }).join('\n');
          }
          /** @private */

        }, {
          key: "_dragDropAccessChanged",
          value: function _dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter) {
            this.filterDragAndDrop();
          }
          /**
           * Runs the `dragFilter` and `dropFilter` hooks for the visible cells.
           * If the filter depends on varying conditions, you may need to
           * call this function manually in order to update the draggability when
           * the conditions change.
           */

        }, {
          key: "filterDragAndDrop",
          value: function filterDragAndDrop() {
            var _this81 = this;

            Array.from(this.$.items.children).filter(function (row) {
              return !row.hidden;
            }).forEach(function (row) {
              _this81._filterDragAndDrop(row, _this81.__getRowModel(row));
            });
          }
          /**
           * @param {!HTMLElement} row
           * @param {!GridItemModel} model
           * @protected
           */

        }, {
          key: "_filterDragAndDrop",
          value: function _filterDragAndDrop(row, model) {
            var dragDisabled = !this.rowsDraggable || this.dragFilter && !this.dragFilter(model);
            var dropDisabled = !this.dropMode || this.dropFilter && !this.dropFilter(model);
            var draggableElements = window.ShadyDOM ? [row] : Array.from(row.children).map(function (cell) {
              return cell._content;
            });
            draggableElements.forEach(function (e) {
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

        }], [{
          key: "properties",
          get: function get() {
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
        }, {
          key: "observers",
          get: function get() {
            return ['_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)'];
          }
        }]);

        return DragAndDropMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-dynamic-columns-mixin.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-dynamic-columns-mixin.js ***!
    \***********************************************************************************/

  /*! exports provided: DynamicColumnsMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridDynamicColumnsMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicColumnsMixin", function () {
      return DynamicColumnsMixin;
    });
    /* harmony import */


    var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/flattened-nodes-observer.js */
    "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/debounce.js */
    "./node_modules/@polymer/polymer/lib/utils/debounce.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/async.js */
    "./node_modules/@polymer/polymer/lib/utils/async.js");
    /* harmony import */


    var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element.js */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var DynamicColumnsMixin = function DynamicColumnsMixin(superClass) {
      return /*#__PURE__*/function (_superClass9) {
        _inherits(DynamicColumnsMixin, _superClass9);

        var _super29 = _createSuper(DynamicColumnsMixin);

        function DynamicColumnsMixin() {
          _classCallCheck(this, DynamicColumnsMixin);

          return _super29.apply(this, arguments);
        }

        _createClass(DynamicColumnsMixin, [{
          key: "ready",

          /** @protected */
          value: function ready() {
            _get(_getPrototypeOf(DynamicColumnsMixin.prototype), "ready", this).call(this);

            this._addNodeObserver();
          }
          /** @private */

        }, {
          key: "_hasColumnGroups",
          value: function _hasColumnGroups(columns) {
            for (var i = 0; i < columns.length; i++) {
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

        }, {
          key: "_getChildColumns",
          value: function _getChildColumns(el) {
            return _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedNodesObserver"].getFlattenedNodes(el).filter(this._isColumnElement);
          }
          /** @private */

        }, {
          key: "_flattenColumnGroups",
          value: function _flattenColumnGroups(columns) {
            var _this82 = this;

            return columns.map(function (col) {
              if (col.localName === 'vaadin-grid-column-group') {
                return _this82._getChildColumns(col);
              } else {
                return [col];
              }
            }).reduce(function (prev, curr) {
              return prev.concat(curr);
            }, []);
          }
          /** @private */

        }, {
          key: "_getColumnTree",
          value: function _getColumnTree() {
            var rootColumns = _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedNodesObserver"].getFlattenedNodes(this).filter(this._isColumnElement);

            var _columnTree = [];

            for (var c = rootColumns;;) {
              _columnTree.push(c);

              if (!this._hasColumnGroups(c)) {
                break;
              }

              c = this._flattenColumnGroups(c);
            }

            return _columnTree;
          }
          /** @protected */

        }, {
          key: "_updateColumnTree",
          value: function _updateColumnTree() {
            var columnTree = this._getColumnTree();

            if (!this._arrayEquals(columnTree, this._columnTree)) {
              this._columnTree = columnTree;
            }
          }
          /** @private */

        }, {
          key: "_addNodeObserver",
          value: function _addNodeObserver() {
            var _this83 = this;

            this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_0__["FlattenedNodesObserver"](this, function (info) {
              var rowDetailsTemplate = info.addedNodes.filter(function (n) {
                return n.localName === 'template' && n.classList.contains('row-details');
              })[0];

              if (rowDetailsTemplate && _this83._rowDetailsTemplate !== rowDetailsTemplate) {
                _this83._rowDetailsTemplate = rowDetailsTemplate;
              }

              if (info.addedNodes.filter(_this83._isColumnElement).length > 0 || info.removedNodes.filter(_this83._isColumnElement).length > 0) {
                _this83._updateColumnTree();
              }

              _this83._debouncerCheckImports = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(_this83._debouncerCheckImports, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__["timeOut"].after(2000), _this83._checkImports.bind(_this83));

              _this83._ensureFirstPageLoaded();
            });
          }
          /** @private */

        }, {
          key: "_arrayEquals",
          value: function _arrayEquals(arr1, arr2) {
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

        }, {
          key: "_checkImports",
          value: function _checkImports() {
            var _this84 = this;

            ['vaadin-grid-column-group', 'vaadin-grid-filter', 'vaadin-grid-filter-column', 'vaadin-grid-tree-toggle', 'vaadin-grid-selection-column', 'vaadin-grid-sort-column', 'vaadin-grid-sorter'].forEach(function (elementName) {
              var element = _this84.querySelector(elementName);

              if (element && !(element instanceof _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])) {
                console.warn("Make sure you have imported the required module for <".concat(elementName, "> element."));
              }
            });
          }
          /** @protected */

        }, {
          key: "_updateFirstAndLastColumn",
          value: function _updateFirstAndLastColumn() {
            var _this85 = this;

            Array.from(this.shadowRoot.querySelectorAll('tr')).forEach(function (row) {
              return _this85._updateFirstAndLastColumnForRow(row);
            });
          }
          /**
           * @param {!HTMLElement} row
           * @protected
           */

        }, {
          key: "_updateFirstAndLastColumnForRow",
          value: function _updateFirstAndLastColumnForRow(row) {
            var _this86 = this;

            Array.from(row.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort(function (a, b) {
              return a._column._order - b._column._order;
            }).forEach(function (cell, cellIndex, children) {
              _this86._toggleAttribute('first-column', cellIndex === 0, cell);

              _this86._toggleAttribute('last-column', cellIndex === children.length - 1, cell);
            });
          }
          /**
           * @param {!Node} node
           * @return {boolean}
           * @protected
           */

        }, {
          key: "_isColumnElement",
          value: function _isColumnElement(node) {
            return node.nodeType === Node.ELEMENT_NODE && /\bcolumn\b/.test(node.localName);
          }
        }]);

        return DynamicColumnsMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-event-context-mixin.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-event-context-mixin.js ***!
    \*********************************************************************************/

  /*! exports provided: EventContextMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridEventContextMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventContextMixin", function () {
      return EventContextMixin;
    });
    /**
    @license
    Copyright (c) 2018 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var EventContextMixin = function EventContextMixin(superClass) {
      return /*#__PURE__*/function (_superClass10) {
        _inherits(EventContextMixin, _superClass10);

        var _super30 = _createSuper(EventContextMixin);

        function EventContextMixin() {
          _classCallCheck(this, EventContextMixin);

          return _super30.apply(this, arguments);
        }

        _createClass(EventContextMixin, [{
          key: "getEventContext",

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
          value: function getEventContext(event) {
            var context = {};
            var path = event.composedPath();
            var cell = path[path.indexOf(this.$.table) - 3];

            if (!cell) {
              return context;
            }

            context.section = ['body', 'header', 'footer', 'details'].filter(function (section) {
              return cell.getAttribute('part').indexOf(section) > -1;
            })[0];

            if (cell._column) {
              context.column = cell._column;
            }

            if (context.section === 'body' || context.section === 'details') {
              Object.assign(context, this.__getRowModel(cell.parentElement));
            }

            return context;
          }
        }]);

        return EventContextMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-column.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-column.js ***!
    \***************************************************************************/

  /*! exports provided: GridFilterColumnElement */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridFilterColumnJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridFilterColumnElement", function () {
      return GridFilterColumnElement;
    });
    /* harmony import */


    var _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./vaadin-grid-column.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js");
    /* harmony import */


    var _vaadin_grid_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./vaadin-grid-filter.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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


    var GridFilterColumnElement = /*#__PURE__*/function (_vaadin_grid_column_j) {
      _inherits(GridFilterColumnElement, _vaadin_grid_column_j);

      var _super31 = _createSuper(GridFilterColumnElement);

      function GridFilterColumnElement() {
        _classCallCheck(this, GridFilterColumnElement);

        return _super31.apply(this, arguments);
      }

      _createClass(GridFilterColumnElement, [{
        key: "_prepareHeaderTemplate",

        /** @private */
        value: function _prepareHeaderTemplate() {
          var headerTemplate = this._prepareTemplatizer(this.$.headerTemplate); // needed to override the dataHost correctly in case internal template is used.


          headerTemplate.templatizer.dataHost = this;
          return headerTemplate;
        }
        /** @private */

      }, {
        key: "_getHeader",
        value: function _getHeader(header, path) {
          return header || this._generateHeader(path);
        }
      }], [{
        key: "template",
        get: function get() {
          return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"](_templateObject25());
        }
      }, {
        key: "is",
        get: function get() {
          return 'vaadin-grid-filter-column';
        }
      }, {
        key: "properties",
        get: function get() {
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
      }]);

      return GridFilterColumnElement;
    }(_vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_0__["GridColumnElement"]);

    customElements.define(GridFilterColumnElement.is, GridFilterColumnElement);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-mixin.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-mixin.js ***!
    \**************************************************************************/

  /*! exports provided: FilterMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridFilterMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterMixin", function () {
      return FilterMixin;
    });
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var FilterMixin = function FilterMixin(superClass) {
      return /*#__PURE__*/function (_superClass11) {
        _inherits(FilterMixin, _superClass11);

        var _super32 = _createSuper(FilterMixin);

        function FilterMixin() {
          _classCallCheck(this, FilterMixin);

          return _super32.apply(this, arguments);
        }

        _createClass(FilterMixin, [{
          key: "ready",

          /** @protected */
          value: function ready() {
            _get(_getPrototypeOf(FilterMixin.prototype), "ready", this).call(this);

            this.addEventListener('filter-changed', this._filterChanged.bind(this));
          }
          /** @private */

        }, {
          key: "_filterChanged",
          value: function _filterChanged(e) {
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

        }, {
          key: "_mapFilters",
          value: function _mapFilters() {
            return this._filters.map(function (filter) {
              return {
                path: filter.path,
                value: filter.value
              };
            });
          }
        }], [{
          key: "properties",
          get: function get() {
            return {
              /** @private */
              _filters: {
                type: Array,
                value: function value() {
                  return [];
                }
              }
            };
          }
        }]);

        return FilterMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter.js ***!
    \********************************************************************/

  /*! exports provided: GridFilterElement */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridFilterJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridFilterElement", function () {
      return GridFilterElement;
    });
    /* harmony import */


    var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-legacy.js */
    "./node_modules/@polymer/polymer/polymer-legacy.js");
    /* harmony import */


    var _vaadin_vaadin_text_field_src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @vaadin/vaadin-text-field/src/vaadin-text-field.js */
    "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/debounce.js */
    "./node_modules/@polymer/polymer/lib/utils/debounce.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/async.js */
    "./node_modules/@polymer/polymer/lib/utils/async.js");
    /* harmony import */


    var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element.js */
    "./node_modules/@polymer/polymer/polymer-element.js");
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


    var GridFilterElement = /*#__PURE__*/function (_polymer_polymer_poly11) {
      _inherits(GridFilterElement, _polymer_polymer_poly11);

      var _super33 = _createSuper(GridFilterElement);

      function GridFilterElement() {
        _classCallCheck(this, GridFilterElement);

        return _super33.apply(this, arguments);
      }

      _createClass(GridFilterElement, [{
        key: "connectedCallback",

        /** @protected */
        value: function connectedCallback() {
          _get(_getPrototypeOf(GridFilterElement.prototype), "connectedCallback", this).call(this);

          this._connected = true;
        }
      }, {
        key: "ready",

        /** @protected */
        value: function ready() {
          _get(_getPrototypeOf(GridFilterElement.prototype), "ready", this).call(this);

          var child = this.firstElementChild;

          if (child && child.getAttribute('slot') !== 'filter') {
            console.warn('Make sure you have assigned slot="filter" to the child elements of <vaadin-grid-filter>');
            child.setAttribute('slot', 'filter');
          }
        }
        /** @private */

      }, {
        key: "_filterChanged",
        value: function _filterChanged(path, value, connected) {
          var _this87 = this;

          if (path === undefined || value === undefined || !connected) {
            return;
          }

          if (this._previousValue === undefined && value === '') {
            return;
          }

          this._previousValue = value;
          this._debouncerFilterChanged = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__["Debouncer"].debounce(this._debouncerFilterChanged, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_4__["timeOut"].after(200), function () {
            _this87.dispatchEvent(new CustomEvent('filter-changed', {
              bubbles: true
            }));
          });
        }
      }, {
        key: "focus",
        value: function focus() {
          this.$.filter.focus();
        }
      }], [{
        key: "template",
        get: function get() {
          return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"](_templateObject26());
        }
      }, {
        key: "is",
        get: function get() {
          return 'vaadin-grid-filter';
        }
      }, {
        key: "properties",
        get: function get() {
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
      }, {
        key: "observers",
        get: function get() {
          return ['_filterChanged(path, value, _connected)'];
        }
      }]);

      return GridFilterElement;
    }(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"]);

    customElements.define(GridFilterElement.is, GridFilterElement);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-keyboard-navigation-mixin.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-keyboard-navigation-mixin.js ***!
    \***************************************************************************************/

  /*! exports provided: KeyboardNavigationMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridKeyboardNavigationMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyboardNavigationMixin", function () {
      return KeyboardNavigationMixin;
    });
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var KeyboardNavigationMixin = function KeyboardNavigationMixin(superClass) {
      return /*#__PURE__*/function (_superClass12) {
        _inherits(KeyboardNavigationMixin, _superClass12);

        var _super34 = _createSuper(KeyboardNavigationMixin);

        function KeyboardNavigationMixin() {
          _classCallCheck(this, KeyboardNavigationMixin);

          return _super34.apply(this, arguments);
        }

        _createClass(KeyboardNavigationMixin, [{
          key: "ready",

          /** @protected */
          value: function ready() {
            var _this88 = this;

            _get(_getPrototypeOf(KeyboardNavigationMixin.prototype), "ready", this).call(this);

            if (this._ios || this._android) {
              // Disable keyboard navigation on mobile devices
              return;
            }

            this.addEventListener('keydown', this._onKeyDown);
            this.addEventListener('keyup', this._onKeyUp);
            this.addEventListener('focusin', this._onFocusIn);
            this.addEventListener('focusout', this._onFocusOut); // When focus goes from cell to another cell, focusin/focusout events do
            // not escape the grid’s shadowRoot, thus listening inside the shadowRoot.

            this.$.table.addEventListener('focusin', this._onCellFocusIn.bind(this));
            this.$.table.addEventListener('focusout', this._onCellFocusOut.bind(this));
            this.addEventListener('mousedown', function () {
              _this88._toggleAttribute('navigating', false, _this88);

              _this88._isMousedown = true;
            });
            this.addEventListener('mouseup', function () {
              return _this88._isMousedown = false;
            });
          }
          /** @private */

        }, {
          key: "_focusableChanged",
          value: function _focusableChanged(focusable, oldFocusable) {
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

        }, {
          key: "_onKeyDown",
          value: function _onKeyDown(e) {
            // Ensure standard key value, unified across browsers
            var key = e.key;

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

            var keyGroup;

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
              this["_on".concat(keyGroup, "KeyDown")](e, key);
            }
          }
          /** @private */

        }, {
          key: "_ensureScrolledToIndex",
          value: function _ensureScrolledToIndex(index) {
            var targetRowInDom = Array.from(this.$.items.children).filter(function (child) {
              return child.index === index;
            })[0];

            if (!targetRowInDom) {
              this._scrollToIndex(index);
            }
          }
          /** @private */

        }, {
          key: "_onNavigationKeyDown",
          value: function _onNavigationKeyDown(e, key) {
            var _this89 = this;

            this._scrollHandler();

            e.preventDefault();

            function indexOfChildElement(el) {
              return Array.prototype.indexOf.call(el.parentNode.children, el);
            }

            var visibleItemsCount = this._lastVisibleIndex - this._firstVisibleIndex - 1;
            var dx = 0,
                dy = 0;

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

            var activeCell = e.composedPath()[0];
            var columnIndex = indexOfChildElement(activeCell);

            var isRowDetails = this._elementMatches(activeCell, '[part~="details-cell"]');

            var activeRow = activeCell.parentNode;
            var activeRowGroup = activeRow.parentNode;
            var maxRowIndex = (activeRowGroup === this.$.items ? this._effectiveSize : activeRowGroup.children.length) - 1; // Body rows have index property, otherwise DOM child index of the row is used.

            var rowIndex = activeRowGroup === this.$.items ? this._focusedItemIndex !== undefined ? this._focusedItemIndex : activeRow.index : indexOfChildElement(activeRow); // Index of the destination row

            var dstRowIndex = Math.max(0, Math.min(rowIndex + dy, maxRowIndex)); // Row details navigation logic

            var dstIsRowDetails = false;

            if (activeRowGroup === this.$.items) {
              var item = activeRow._item;

              var dstItem = this._cache.getItemForIndex(dstRowIndex); // Should we navigate to row details?


              if (isRowDetails) {
                dstIsRowDetails = dy === 0;
              } else {
                dstIsRowDetails = dy === 1 && this._isDetailsOpened(item) || dy === -1 && dstRowIndex !== rowIndex && this._isDetailsOpened(dstItem);
              } // Should we navigate between details and regular cells of the same row?


              if (dstIsRowDetails !== isRowDetails && (dy === 1 && dstIsRowDetails || dy === -1 && !dstIsRowDetails)) {
                dstRowIndex = rowIndex;
              }
            } // Header and footer could have hidden rows, e. g., if none of the columns
            // or groups on the given column tree level define template. Skip them
            // in vertical keyboard navigation.


            if (activeRowGroup !== this.$.items) {
              if (dstRowIndex > rowIndex) {
                while (dstRowIndex < maxRowIndex && activeRowGroup.children[dstRowIndex].hidden) {
                  dstRowIndex++;
                }
              } else if (dstRowIndex < rowIndex) {
                while (dstRowIndex > 0 && activeRowGroup.children[dstRowIndex].hidden) {
                  dstRowIndex--;
                }
              }
            } // _focusedColumnOrder is memoized — this is to ensure predictable
            // navigation when entering and leaving detail and column group cells.


            if (this._focusedColumnOrder === undefined) {
              if (isRowDetails) {
                this._focusedColumnOrder = 0;
              } else {
                this._focusedColumnOrder = this._getColumns(activeRowGroup, rowIndex).filter(function (c) {
                  return !c.hidden;
                })[columnIndex]._order;
              }
            } // Find orderedColumnIndex — the index of order closest matching the
            // original _focusedColumnOrder in the sorted array of orders
            // of the visible columns on the destination row.


            var dstColumns = this._getColumns(activeRowGroup, dstRowIndex).filter(function (c) {
              return !c.hidden;
            });

            var dstSortedColumnOrders = dstColumns.map(function (c) {
              return c._order;
            }).sort(function (b, a) {
              return b - a;
            });
            var maxOrderedColumnIndex = dstSortedColumnOrders.length - 1;
            var orderedColumnIndex = dstSortedColumnOrders.indexOf(dstSortedColumnOrders.slice(0).sort(function (b, a) {
              return Math.abs(b - _this89._focusedColumnOrder) - Math.abs(a - _this89._focusedColumnOrder);
            })[0]); // Index of the destination column order

            var dstOrderedColumnIndex = dy === 0 && isRowDetails ? orderedColumnIndex : Math.max(0, Math.min(orderedColumnIndex + dx, maxOrderedColumnIndex));

            if (dstOrderedColumnIndex !== orderedColumnIndex) {
              // Horizontal movement invalidates stored _focusedColumnOrder
              this._focusedColumnOrder = undefined;
            } // Ensure correct vertical scroll position, destination row is visible


            if (activeRowGroup === this.$.items) {
              this._ensureScrolledToIndex(dstRowIndex);
            } // This has to be set after scrolling, otherwise it can be removed by
            // `_preventScrollerRotatingCellFocus(row, index)` during scrolling.


            this._toggleAttribute('navigating', true, this);

            var columnIndexByOrder = dstColumns.reduce(function (acc, col, i) {
              return acc[col._order] = i, acc;
            }, {});
            var dstColumnIndex = columnIndexByOrder[dstSortedColumnOrders[dstOrderedColumnIndex]]; // For body rows, use index property to find destination row, otherwise use DOM child index

            var dstRow = activeRowGroup === this.$.items ? Array.from(activeRowGroup.children).filter(function (el) {
              return el.index === dstRowIndex;
            })[0] : activeRowGroup.children[dstRowIndex];

            if (!dstRow) {
              return;
            } // Here we go!


            var dstCell = dstIsRowDetails ? Array.from(dstRow.children).filter(function (el) {
              return _this89._elementMatches(el, '[part~="details-cell"]');
            })[0] : dstRow.children[dstColumnIndex];

            this._scrollHorizontallyToCell(dstCell);

            if (activeRowGroup === this.$.items) {
              // When scrolling with repeated keydown, sometimes FocusEvent listeners
              // are too late to update _focusedItemIndex. Ensure next keydown
              // listener invocation gets updated _focusedItemIndex value.
              this._focusedItemIndex = dstRowIndex;
            }

            if (activeRowGroup === this.$.items) {
              var dstRect = dstCell.getBoundingClientRect();
              var footerTop = this.$.footer.getBoundingClientRect().top;
              var headerBottom = this.$.header.getBoundingClientRect().bottom;

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

        }, {
          key: "_parseEventPath",
          value: function _parseEventPath(path) {
            var tableIndex = path.indexOf(this.$.table);
            return {
              rowGroup: path[tableIndex - 1],
              row: path[tableIndex - 2],
              cell: path[tableIndex - 3]
            };
          }
          /** @private */

        }, {
          key: "_onInteractionKeyDown",
          value: function _onInteractionKeyDown(e, key) {
            var localTarget = e.composedPath()[0];
            var localTargetIsTextInput = localTarget.localName === 'input' && !/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(localTarget.type);
            var wantInteracting;

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

            var _this$_parseEventPath = this._parseEventPath(e.composedPath()),
                cell = _this$_parseEventPath.cell;

            if (this.hasAttribute('interacting') !== wantInteracting) {
              if (wantInteracting) {
                var focusTarget = cell._content.querySelector('[focus-target]') || cell._content.firstElementChild;

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

        }, {
          key: "_predictFocusStepTarget",
          value: function _predictFocusStepTarget(srcElement, step) {
            var tabOrder = [this.$.table, this._headerFocusable, this._itemsFocusable, this._footerFocusable, this.$.focusexit];
            var index = tabOrder.indexOf(srcElement);
            index += step;

            while (index >= 0 && index <= tabOrder.length - 1 && (!tabOrder[index] || tabOrder[index].parentNode.hidden)) {
              index += step;
            }

            return tabOrder[index];
          }
          /** @private */

        }, {
          key: "_onTabKeyDown",
          value: function _onTabKeyDown(e) {
            var _this90 = this;

            var focusTarget = this._predictFocusStepTarget(e.composedPath()[0], e.shiftKey ? -1 : 1);

            if (focusTarget === this.$.table) {
              // The focus is about to exit the grid to the top.
              this.$.table.focus();
            } else if (focusTarget === this.$.focusexit) {
              // The focus is about to exit the grid to the bottom.
              this.$.focusexit.focus();
            } else if (focusTarget === this._itemsFocusable) {
              var itemsFocusTarget = focusTarget;
              var targetRow = this._itemsFocusable.parentNode;

              this._ensureScrolledToIndex(this._focusedItemIndex);

              if (targetRow.index !== this._focusedItemIndex) {
                // The target row, which is about to be focused next, has been
                // assigned with a new index since last focus, probably because of
                // scrolling. Focus the row for the stored focused item index instead.
                var columnIndex = Array.from(targetRow.children).indexOf(this._itemsFocusable);
                var focusedItemRow = Array.from(this.$.items.children).filter(function (row) {
                  return row.index === _this90._focusedItemIndex;
                })[0];

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

        }, {
          key: "_onSpaceKeyDown",
          value: function _onSpaceKeyDown(e) {
            e.preventDefault();
            var cell = e.composedPath()[0];

            if (!cell._content || !cell._content.firstElementChild) {
              this.dispatchEvent(new CustomEvent('cell-activate', {
                detail: {
                  model: this.__getRowModel(cell.parentElement)
                }
              }));
            }
          }
          /** @private */

        }, {
          key: "_onKeyUp",
          value: function _onKeyUp(e) {
            if (!/^( |SpaceBar)$/.test(e.key)) {
              return;
            }

            e.preventDefault();
            var cell = e.composedPath()[0];

            if (cell._content && cell._content.firstElementChild) {
              var wasNavigating = this.hasAttribute('navigating');

              cell._content.firstElementChild.click();

              this._toggleAttribute('navigating', wasNavigating, this);
            }
          }
          /**
           * @param {!FocusEvent} e
           * @protected
           */

        }, {
          key: "_onFocusIn",
          value: function _onFocusIn(e) {
            if (!this._isMousedown) {
              this._toggleAttribute('navigating', true, this);
            }

            var rootTarget = e.composedPath()[0];

            if (rootTarget === this.$.table || rootTarget === this.$.focusexit) {
              // The focus enters the top (bottom) of the grid, meaning that user has
              // tabbed (shift-tabbed) into the grid. Move the focus to
              // the first (the last) focusable.
              this._predictFocusStepTarget(rootTarget, rootTarget === this.$.table ? 1 : -1).focus();

              this._toggleAttribute('interacting', false, this);
            } else {
              this._detectInteracting(e);
            }
          }
          /**
           * @param {!FocusEvent} e
           * @protected
           */

        }, {
          key: "_onFocusOut",
          value: function _onFocusOut(e) {
            this._toggleAttribute('navigating', false, this);

            this._detectInteracting(e);
          }
          /** @private */

        }, {
          key: "_onCellFocusIn",
          value: function _onCellFocusIn(e) {
            this._detectInteracting(e);

            if (e.composedPath().indexOf(this.$.table) === 3) {
              var cell = e.composedPath()[0];
              this._activeRowGroup = cell.parentNode.parentNode;

              if (this._activeRowGroup === this.$.header) {
                this._headerFocusable = cell;
              } else if (this._activeRowGroup === this.$.items) {
                this._itemsFocusable = cell;
              } else if (this._activeRowGroup === this.$.footer) {
                this._footerFocusable = cell;
              } // Inform cell content of the focus (used in <vaadin-grid-sorter>)


              cell._content.dispatchEvent(new CustomEvent('cell-focusin', {
                bubbles: false
              }));
            }

            this._detectFocusedItemIndex(e);
          }
          /** @private */

        }, {
          key: "_onCellFocusOut",
          value: function _onCellFocusOut(e) {
            if (e.composedPath().indexOf(this.$.table) === 3) {
              var cell = e.composedPath()[0]; // Inform cell content of the focus (used in <vaadin-grid-sorter>)

              cell._content.dispatchEvent(new CustomEvent('cell-focusout', {
                bubbles: false
              }));
            }
          }
          /** @private */

        }, {
          key: "_detectInteracting",
          value: function _detectInteracting(e) {
            this._toggleAttribute('interacting', e.composedPath().some(function (el) {
              return el.localName === 'vaadin-grid-cell-content';
            }), this);
          }
          /** @private */

        }, {
          key: "_detectFocusedItemIndex",
          value: function _detectFocusedItemIndex(e) {
            var _this$_parseEventPath2 = this._parseEventPath(e.composedPath()),
                rowGroup = _this$_parseEventPath2.rowGroup,
                row = _this$_parseEventPath2.row;

            if (rowGroup === this.$.items) {
              this._focusedItemIndex = row.index;
            }
          }
          /**
           * @param {!HTMLTableRowElement} row
           * @param {number} index
           * @protected
           */

        }, {
          key: "_preventScrollerRotatingCellFocus",
          value: function _preventScrollerRotatingCellFocus(row, index) {
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

        }, {
          key: "_getColumns",
          value: function _getColumns(rowGroup, rowIndex) {
            var columnTreeLevel = this._columnTree.length - 1;

            if (rowGroup === this.$.header) {
              columnTreeLevel = rowIndex;
            } else if (rowGroup === this.$.footer) {
              columnTreeLevel = this._columnTree.length - 1 - rowIndex;
            }

            return this._columnTree[columnTreeLevel];
          }
          /** @protected */

        }, {
          key: "_resetKeyboardNavigation",
          value: function _resetKeyboardNavigation() {
            var _this91 = this;

            if (this.$.header.firstElementChild) {
              this._headerFocusable = Array.from(this.$.header.firstElementChild.children).filter(function (el) {
                return !el.hidden;
              })[0];
            }

            if (this.$.items.firstElementChild) {
              var firstVisibleIndexRow = this._iterateItems(function (pidx, vidx) {
                if (_this91._firstVisibleIndex === vidx) {
                  return _this91.$.items.children[pidx];
                }
              });

              if (firstVisibleIndexRow) {
                this._itemsFocusable = Array.from(firstVisibleIndexRow.children).filter(function (el) {
                  return !el.hidden;
                })[0];
              }
            }

            if (this.$.footer.firstElementChild) {
              this._footerFocusable = Array.from(this.$.footer.firstElementChild.children).filter(function (el) {
                return !el.hidden;
              })[0];
            }
          }
          /**
           * @param {!HTMLElement} dstCell
           * @protected
           */

        }, {
          key: "_scrollHorizontallyToCell",
          value: function _scrollHorizontallyToCell(dstCell) {
            if (dstCell.hasAttribute('frozen') || this._elementMatches(dstCell, '[part~="details-cell"]')) {
              // These cells are, by design, always visible, no need to scroll.
              return;
            }

            var dstCellRect = dstCell.getBoundingClientRect();
            var dstRow = dstCell.parentNode;
            var dstCellIndex = Array.from(dstRow.children).indexOf(dstCell);
            var tableRect = this.$.table.getBoundingClientRect();
            var leftBoundary = tableRect.left,
                rightBoundary = tableRect.right;

            for (var i = dstCellIndex - 1; i >= 0; i--) {
              var cell = dstRow.children[i];

              if (cell.hasAttribute('hidden') || this._elementMatches(cell, '[part~="details-cell"]')) {
                continue;
              }

              if (cell.hasAttribute('frozen')) {
                leftBoundary = cell.getBoundingClientRect().right;
                break;
              }
            }

            for (var _i5 = dstCellIndex + 1; _i5 < dstRow.children.length; _i5++) {
              var _cell = dstRow.children[_i5];

              if (_cell.hasAttribute('hidden') || this._elementMatches(_cell, '[part~="details-cell"]')) {
                continue;
              }

              if (_cell.hasAttribute('frozen')) {
                rightBoundary = _cell.getBoundingClientRect().left;
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

        }, {
          key: "_elementMatches",
          value: function _elementMatches(el, query) {
            return el.matches ? el.matches(query) : Array.from(el.parentNode.querySelectorAll(query)).indexOf(el) !== -1;
          }
        }], [{
          key: "properties",
          get: function get() {
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
        }]);

        return KeyboardNavigationMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-row-details-mixin.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-row-details-mixin.js ***!
    \*******************************************************************************/

  /*! exports provided: RowDetailsMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridRowDetailsMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RowDetailsMixin", function () {
      return RowDetailsMixin;
    });
    /* harmony import */


    var _vaadin_grid_templatizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./vaadin-grid-templatizer.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-templatizer.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/flush.js */
    "./node_modules/@polymer/polymer/lib/utils/flush.js");
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var RowDetailsMixin = function RowDetailsMixin(superClass) {
      return /*#__PURE__*/function (_superClass13) {
        _inherits(RowDetailsMixin, _superClass13);

        var _super35 = _createSuper(RowDetailsMixin);

        function RowDetailsMixin() {
          _classCallCheck(this, RowDetailsMixin);

          return _super35.apply(this, arguments);
        }

        _createClass(RowDetailsMixin, [{
          key: "_rowDetailsTemplateOrRendererChanged",

          /** @private */
          value: function _rowDetailsTemplateOrRendererChanged(rowDetailsTemplate, rowDetailsRenderer) {
            var _this92 = this;

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
                Array.from(this.$.items.children).forEach(function (row) {
                  if (!row.querySelector('[part~=details-cell]')) {
                    _this92._updateRow(row, _this92._columnTree[_this92._columnTree.length - 1]);

                    _this92._a11yUpdateRowDetailsOpened(row, false);
                  } // Clear any old template instances


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

        }, {
          key: "_detailsOpenedItemsChanged",
          value: function _detailsOpenedItemsChanged(changeRecord, rowDetailsTemplate, rowDetailsRenderer) {
            var _this93 = this;

            if (changeRecord.path === 'detailsOpenedItems.length' || !changeRecord.value) {
              // Let’s avoid duplicate work of both “.splices” and “.length” updates.
              return;
            }

            Array.from(this.$.items.children).forEach(function (row) {
              _this93._toggleDetailsCell(row, row._item);

              _this93._a11yUpdateRowDetailsOpened(row, _this93._isDetailsOpened(row._item));

              _this93._toggleAttribute('details-opened', _this93._isDetailsOpened(row._item), row);
            });
          }
          /**
           * @param {!HTMLElement} cell
           * @protected
           */

        }, {
          key: "_configureDetailsCell",
          value: function _configureDetailsCell(cell) {
            cell.setAttribute('part', 'cell details-cell'); // Freeze the details cell, so that it does not scroll horizontally
            // with the normal cells. This way it looks less weird.

            this._toggleAttribute('frozen', true, cell);
          }
          /**
           * @param {!HTMLElement} row
           * @param {!GridItem} item
           * @protected
           */

        }, {
          key: "_toggleDetailsCell",
          value: function _toggleDetailsCell(row, item) {
            var _this94 = this;

            var cell = row.querySelector('[part~="details-cell"]');

            if (!cell) {
              return;
            }

            var detailsHidden = !this._isDetailsOpened(item);
            var hiddenChanged = !!cell.hidden !== detailsHidden;

            if (!cell._instance && !cell._renderer || cell.hidden !== detailsHidden) {
              cell.hidden = detailsHidden;

              if (detailsHidden) {
                row.style.removeProperty('padding-bottom');
              } else {
                if (this.rowDetailsRenderer) {
                  cell._renderer = this.rowDetailsRenderer;

                  cell._renderer.call(this, cell._content, this, {
                    index: row.index,
                    item: item
                  });
                } else if (this._rowDetailsTemplate && !cell._instance) {
                  // Stamp the template
                  cell._instance = this._rowDetailsTemplate.templatizer.createInstance();
                  cell._content.innerHTML = '';

                  cell._content.appendChild(cell._instance.root);

                  this._updateItem(row, item);
                }

                Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_1__["flush"])();
                row.style.setProperty('padding-bottom', "".concat(cell.offsetHeight, "px"));
                requestAnimationFrame(function () {
                  return _this94.notifyResize();
                });
              }
            }

            if (hiddenChanged) {
              this._updateMetrics();

              this._positionItems();
            }
          }
          /** @protected */

        }, {
          key: "_updateDetailsCellHeights",
          value: function _updateDetailsCellHeights() {
            Array.from(this.$.items.querySelectorAll('[part~="details-cell"]:not([hidden])')).forEach(function (cell) {
              cell.parentElement.style.setProperty('padding-bottom', "".concat(cell.offsetHeight, "px"));
            });
          }
          /**
           * @param {!GridItem} item
           * @return {boolean}
           * @protected
           */

        }, {
          key: "_isDetailsOpened",
          value: function _isDetailsOpened(item) {
            return this.detailsOpenedItems && this._getItemIndexInArray(item, this.detailsOpenedItems) !== -1;
          }
          /**
           * Open the details row of a given item.
           * @param {!GridItem} item
           */

        }, {
          key: "openItemDetails",
          value: function openItemDetails(item) {
            if (!this._isDetailsOpened(item)) {
              this.push('detailsOpenedItems', item);
            }
          }
          /**
           * Close the details row of a given item.
           * @param {!GridItem} item
           */

        }, {
          key: "closeItemDetails",
          value: function closeItemDetails(item) {
            if (this._isDetailsOpened(item)) {
              this.splice('detailsOpenedItems', this._getItemIndexInArray(item, this.detailsOpenedItems), 1);
            }
          }
          /** @private */

        }, {
          key: "_detailsOpenedInstanceChangedCallback",
          value: function _detailsOpenedInstanceChangedCallback(instance, value) {
            if (_get(_getPrototypeOf(RowDetailsMixin.prototype), "_detailsOpenedInstanceChangedCallback", this)) {
              _get(_getPrototypeOf(RowDetailsMixin.prototype), "_detailsOpenedInstanceChangedCallback", this).call(this, instance, value);
            }

            if (value) {
              this.openItemDetails(instance.item);
            } else {
              this.closeItemDetails(instance.item);
            }
          }
        }], [{
          key: "properties",
          get: function get() {
            return {
              /**
               * An array containing references to items with open row details.
               * @type {Array<GridItem> | null | undefined}
               */
              detailsOpenedItems: {
                type: Array,
                value: function value() {
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
                type: Array
              }
            };
          }
        }, {
          key: "observers",
          get: function get() {
            return ['_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)', '_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)'];
          }
        }]);

        return RowDetailsMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroll-mixin.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroll-mixin.js ***!
    \**************************************************************************/

  /*! exports provided: ScrollMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridScrollMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollMixin", function () {
      return ScrollMixin;
    });
    /* harmony import */


    var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/debounce.js */
    "./node_modules/@polymer/polymer/lib/utils/debounce.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/async.js */
    "./node_modules/@polymer/polymer/lib/utils/async.js");
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var ScrollMixin = function ScrollMixin(superClass) {
      return /*#__PURE__*/function (_superClass14) {
        _inherits(ScrollMixin, _superClass14);

        var _super36 = _createSuper(ScrollMixin);

        _createClass(ScrollMixin, [{
          key: "_timeouts",

          /** @private */
          get: function get() {
            return {
              SCROLLING: 500,
              IGNORE_WHEEL: 500
            };
          }
        }, {
          key: "_scrollTop",

          /**
           * Override (from iron-scroll-target-behavior) to avoid document scroll
           * @private
           */
          set: function set(top) {
            this.$.table.scrollTop = top;
          }
          /** @private */
          ,
          get: function get() {
            return this.$.table.scrollTop;
          }
        }], [{
          key: "properties",
          get: function get() {
            return {
              /**
               * Cached array of frozen cells
               * @private
               */
              _frozenCells: {
                type: Array,
                value: function value() {
                  return [];
                }
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
                value: window.CSS && window.CSS.supports && (window.CSS.supports('position', 'sticky') || window.CSS.supports('position', '-webkit-sticky'))
              }
            };
          }
        }, {
          key: "observers",
          get: function get() {
            return ['_scrollViewportHeightUpdated(_viewportHeight)'];
          }
        }]);

        function ScrollMixin() {
          var _this95;

          _classCallCheck(this, ScrollMixin);

          _this95 = _super36.call(this);
          _this95._scrollLineHeight = _this95._getScrollLineHeight();
          return _this95;
        }
        /**
         * @returns {Number|undefined} - The browser's default font-size in pixels
         * @private
         */


        _createClass(ScrollMixin, [{
          key: "_getScrollLineHeight",
          value: function _getScrollLineHeight() {
            var el = document.createElement('div');
            el.style.fontSize = 'initial';
            el.style.display = 'none';
            document.body.appendChild(el);
            var fontSize = window.getComputedStyle(el).fontSize;
            document.body.removeChild(el);
            return fontSize ? window.parseInt(fontSize) : undefined;
          }
          /** @private */

        }, {
          key: "_scrollViewportHeightUpdated",
          value: function _scrollViewportHeightUpdated(_viewportHeight) {
            this._scrollPageHeight = _viewportHeight - this.$.header.clientHeight - this.$.footer.clientHeight - this._scrollLineHeight;
          }
          /** @protected */

        }, {
          key: "ready",
          value: function ready() {
            var _this96 = this;

            _get(_getPrototypeOf(ScrollMixin.prototype), "ready", this).call(this); // Preserve accessor to the legacy scrolling functionality


            this.$.outerscroller = document.createElement('div');
            this.scrollTarget = this.$.table;
            this.addEventListener('wheel', this._onWheel);
            this.$.items.addEventListener('focusin', function (e) {
              var itemsIndex = e.composedPath().indexOf(_this96.$.items);
              _this96._rowWithFocusedElement = e.composedPath()[itemsIndex - 1];
            });
            this.$.items.addEventListener('focusout', function () {
              return _this96._rowWithFocusedElement = undefined;
            }); // Reordering the physical rows cancels the user's grab of the scroll bar handle on Safari.
            // Need to defer reordering until the user lets go of the scroll bar handle.

            this.scrollTarget.addEventListener('mousedown', function () {
              return _this96.__mouseDown = true;
            });
            this.scrollTarget.addEventListener('mouseup', function () {
              _this96.__mouseDown = false;

              if (_this96.__pendingReorder) {
                _this96.__pendingReorder = false;
                setTimeout(function () {
                  return _this96._reorderRows();
                }, _this96._timeouts.SCROLLING);
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

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index) {
            var _this97 = this;

            this._accessIronListAPI(function () {
              return _get(_getPrototypeOf(ScrollMixin.prototype), "scrollToIndex", _this97).call(_this97, index);
            });
          }
          /** @private */

        }, {
          key: "_onWheel",
          value: function _onWheel(e) {
            var _this98 = this;

            if (e.ctrlKey || this._hasScrolledAncestor(e.target, e.deltaX, e.deltaY)) {
              return;
            }

            var table = this.$.table;
            var deltaY = e.deltaY;

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
            this._debouncerWheelAnimationFrame = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(this._debouncerWheelAnimationFrame, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["animationFrame"], function () {
              return _this98._wheelAnimationFrame = false;
            });
            var momentum = Math.abs(e.deltaX) + Math.abs(deltaY);

            if (this._canScroll(table, e.deltaX, deltaY)) {
              e.preventDefault();
              table.scrollTop += deltaY;
              table.scrollLeft += e.deltaX;

              this._scrollHandler();

              this._hasResidualMomentum = true;
              this._ignoreNewWheel = true;
              this._debouncerIgnoreNewWheel = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(this._debouncerIgnoreNewWheel, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(this._timeouts.IGNORE_WHEEL), function () {
                return _this98._ignoreNewWheel = false;
              });
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

        }, {
          key: "_hasScrolledAncestor",
          value: function _hasScrolledAncestor(el, deltaX, deltaY) {
            if (el.localName === 'vaadin-grid-cell-content') {
              return false;
            } else if (this._canScroll(el, deltaX, deltaY) && ['auto', 'scroll'].indexOf(getComputedStyle(el).overflow) !== -1) {
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

        }, {
          key: "_canScroll",
          value: function _canScroll(el, deltaX, deltaY) {
            return deltaY > 0 && el.scrollTop < el.scrollHeight - el.offsetHeight || deltaY < 0 && el.scrollTop > 0 || deltaX > 0 && el.scrollLeft < el.scrollWidth - el.offsetWidth || deltaX < 0 && el.scrollLeft > 0;
          }
          /** @private */

        }, {
          key: "_scheduleScrolling",
          value: function _scheduleScrolling() {
            var _this99 = this;

            if (!this._scrollingFrame) {
              // Defer setting state attributes to avoid Edge hiccups
              this._scrollingFrame = requestAnimationFrame(function () {
                return _this99._toggleAttribute('scrolling', true, _this99.$.scroller);
              });
            }

            this._debounceScrolling = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(this._debounceScrolling, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(this._timeouts.SCROLLING), function () {
              cancelAnimationFrame(_this99._scrollingFrame);
              delete _this99._scrollingFrame;

              _this99._toggleAttribute('scrolling', false, _this99.$.scroller);

              _this99._reorderRows();
            });
          }
          /** @private */

        }, {
          key: "_afterScroll",
          value: function _afterScroll() {
            this._translateStationaryElements();

            if (!this.hasAttribute('reordering')) {
              this._scheduleScrolling();
            }

            this._updateOverflow();
          }
          /** @private */

        }, {
          key: "_updateOverflow",
          value: function _updateOverflow() {
            var _this100 = this;

            // Set overflow styling attributes
            var overflow = '';
            var table = this.$.table;

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

            this._debounceOverflow = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(this._debounceOverflow, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["animationFrame"], function () {
              var value = overflow.trim();

              if (value.length > 0 && _this100.getAttribute('overflow') !== value) {
                _this100.setAttribute('overflow', value);
              } else if (value.length == 0 && _this100.hasAttribute('overflow')) {
                _this100.removeAttribute('overflow');
              }
            });
          }
          /**
           * Correct order needed for preserving correct tab order between cell contents.
           * @private
           */

        }, {
          key: "_reorderRows",
          value: function _reorderRows() {
            var _this101 = this;

            if (this.__mouseDown) {
              this.__pendingReorder = true;
              return;
            }

            var body = this.$.items;
            var items = body.querySelectorAll('tr');

            if (!items.length) {
              return;
            }

            var adjustedVirtualStart = this._virtualStart + this._vidxOffset; // Which row to use as a target?

            var targetRow = this._rowWithFocusedElement || Array.from(items).filter(function (row) {
              return !row.hidden;
            })[0];

            if (!targetRow) {
              // All rows are hidden, don't reorder
              return;
            } // Where the target row should be?


            var targetPhysicalIndex = targetRow.index - adjustedVirtualStart; // Reodrer the DOM elements to keep the target row at the target physical index

            var delta = Array.from(items).indexOf(targetRow) - targetPhysicalIndex;

            if (delta > 0) {
              for (var i = 0; i < delta; i++) {
                body.appendChild(items[i]);
              }
            } else if (delta < 0) {
              for (var _i6 = items.length + delta; _i6 < items.length; _i6++) {
                body.insertBefore(items[_i6], items[0]);
              }
            } // Due to a rendering bug, reordering the rows can make the sticky header disappear on Safari
            // if the grid is used inside of a flex box. This is a workaround for the issue.


            if (this._safari) {
              var transform = this.$.header.style.transform;
              this.$.header.style.transform = '';
              setTimeout(function () {
                return _this101.$.header.style.transform = transform;
              });
            }
          }
          /** @protected */

        }, {
          key: "_frozenCellsChanged",
          value: function _frozenCellsChanged() {
            var _this102 = this;

            this._debouncerCacheElements = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["Debouncer"].debounce(this._debouncerCacheElements, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["microTask"], function () {
              Array.from(_this102.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(function (cell) {
                cell.style.transform = '';
              });
              _this102._frozenCells = Array.prototype.slice.call(_this102.$.table.querySelectorAll('[frozen]'));

              _this102._updateScrollerMeasurements();

              _this102._translateStationaryElements();
            });

            this._updateLastFrozen();
          }
          /** @protected */

        }, {
          key: "_updateScrollerMeasurements",
          value: function _updateScrollerMeasurements() {
            if (this._frozenCells.length > 0 && this.__isRTL) {
              this.__scrollerMetrics = {
                scrollWidth: this.$.table.scrollWidth,
                clientWidth: this.$.table.clientWidth
              };
            }
          }
          /** @protected */

        }, {
          key: "_updateLastFrozen",
          value: function _updateLastFrozen() {
            if (!this._columnTree) {
              return;
            }

            var columnsRow = this._columnTree[this._columnTree.length - 1].slice(0);

            columnsRow.sort(function (a, b) {
              return a._order - b._order;
            });
            var lastFrozen = columnsRow.reduce(function (prev, col, index) {
              col._lastFrozen = false;
              return col.frozen && !col.hidden ? index : prev;
            }, undefined);

            if (lastFrozen !== undefined) {
              columnsRow[lastFrozen]._lastFrozen = true;
            }
          }
          /** @private */

        }, {
          key: "_translateStationaryElements",
          value: function _translateStationaryElements() {
            var scrollLeft = Math.max(0, this._scrollLeft);
            var scrollTop = Math.max(0, this._scrollTop);
            var leftOffset = 0;
            var topOffset = 0;
            var footerOffset = 0;

            if (!this._useSticky) {
              leftOffset = scrollLeft;
              topOffset = scrollTop;
              footerOffset = this.$.table.clientHeight - this.$.footer.offsetHeight - this.$.footer.offsetTop;
            }

            this.$.header.style.transform = this._getTranslate(-scrollLeft + leftOffset, topOffset);
            this.$.footer.style.transform = this._getTranslate(-scrollLeft + leftOffset, topOffset + footerOffset);
            this.$.items.style.transform = this._getTranslate(-scrollLeft + leftOffset, 0);

            if (this._frozenCells.length > 0) {
              var x = this.__isRTL ? this.__getNormalizedScrollLeft(this.$.table) + this.__scrollerMetrics.clientWidth - this.__scrollerMetrics.scrollWidth : this._scrollLeft;

              var frozenCellTransform = this._getTranslate(x, 0);

              for (var i = 0; i < this._frozenCells.length; i++) {
                this._frozenCells[i].style.transform = frozenCellTransform;
              }
            }
          }
          /** @private */

        }, {
          key: "_getTranslate",
          value: function _getTranslate(x, y) {
            return "translate(".concat(x, "px, ").concat(y, "px)");
          }
        }]);

        return ScrollMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroller.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroller.js ***!
    \**********************************************************************/

  /*! exports provided: ScrollerElement */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridScrollerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollerElement", function () {
      return GridScrollerElement;
    });
    /* harmony import */


    var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/render-status.js */
    "./node_modules/@polymer/polymer/lib/utils/render-status.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/async.js */
    "./node_modules/@polymer/polymer/lib/utils/async.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/flush.js */
    "./node_modules/@polymer/polymer/lib/utils/flush.js");
    /* harmony import */


    var _iron_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./iron-list.js */
    "./node_modules/@vaadin/vaadin-grid/src/iron-list.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/debounce.js */
    "./node_modules/@polymer/polymer/lib/utils/debounce.js");
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


    var GridScrollerElement = /*#__PURE__*/function (_iron_list_js__WEBPAC) {
      _inherits(GridScrollerElement, _iron_list_js__WEBPAC);

      var _super37 = _createSuper(GridScrollerElement);

      function GridScrollerElement() {
        _classCallCheck(this, GridScrollerElement);

        return _super37.apply(this, arguments);
      }

      _createClass(GridScrollerElement, [{
        key: "connectedCallback",

        /** @protected */
        value: function connectedCallback() {
          _get(_getPrototypeOf(GridScrollerElement.prototype), "connectedCallback", this).call(this);

          this._scrollHandler();
        }
        /**
         * @param {!HTMLTableRowElement} item
         * @param {number} index
         * @protected
         */

      }, {
        key: "_updateScrollerItem",
        value: function _updateScrollerItem(item, index) {}
        /** @protected */

      }, {
        key: "_afterScroll",
        value: function _afterScroll() {}
        /** @protected */

      }, {
        key: "_getRowTarget",
        value: function _getRowTarget() {}
        /** @protected */

      }, {
        key: "_createScrollerRows",
        value: function _createScrollerRows() {}
        /** @protected */

      }, {
        key: "_canPopulate",
        value: function _canPopulate() {}
        /**
         * @param {number} index
         * @protected
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index) {
          var _this103 = this;

          this._warnPrivateAPIAccess('scrollToIndex');

          this._scrollingToIndex = true;
          index = Math.min(Math.max(index, 0), this._effectiveSize - 1);
          this.$.table.scrollTop = index / this._effectiveSize * (this.$.table.scrollHeight - this.$.table.offsetHeight);

          this._scrollHandler();

          if (this._accessIronListAPI(function () {
            return _this103._maxScrollTop;
          }) && this._virtualCount < this._effectiveSize) {
            this._adjustVirtualIndexOffset(1000000);
          }

          this._accessIronListAPI(function () {
            return _get(_getPrototypeOf(GridScrollerElement.prototype), "scrollToIndex", _this103).call(_this103, index - _this103._vidxOffset);
          });

          this._scrollHandler(); // Ensure scroll position


          var row = Array.from(this.$.items.children).filter(function (child) {
            return child.index === index;
          })[0];

          if (row) {
            var headerOffset = row.getBoundingClientRect().top - this.$.header.getBoundingClientRect().bottom;

            if (Math.abs(headerOffset) > 1) {
              this.$.table.scrollTop += headerOffset;

              this._scrollHandler();
            }
          }

          this._scrollingToIndex = false;
        }
        /** @private */

      }, {
        key: "_effectiveSizeChanged",
        value: function _effectiveSizeChanged(size) {
          var _this104 = this;

          var fvi; // first visible (adjusted) index

          var fviOffset = 0;

          this._iterateItems(function (pidx, vidx) {
            if (vidx === _this104._firstVisibleIndex) {
              var row = _this104._physicalItems[pidx];
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
            var maxVirtualItems = this._edge || this._ie ? 30000 : 100000;
            this.items = {
              length: Math.min(size, maxVirtualItems)
            };
          }

          this._accessIronListAPI(function () {
            return _get(_getPrototypeOf(GridScrollerElement.prototype), "_itemsChanged", _this104).call(_this104, {
              path: 'items'
            });
          });

          this._virtualCount = Math.min(this.items.length, size) || 0;

          if (this._scrollTop === 0) {
            this._accessIronListAPI(function () {
              return _this104._scrollToIndex(Math.min(size - 1, fvi));
            });

            this._iterateItems(function (pidx, vidx) {
              var row = _this104._physicalItems[pidx];

              if (row.index === fvi) {
                _this104.$.table.scrollTop += Math.round(row.getBoundingClientRect().top - fviOffset);
              } // Restore keyboard focus to the right cell


              if (row.index === _this104._focusedItemIndex && _this104._itemsFocusable && _this104.$.items.contains(_this104.shadowRoot.activeElement)) {
                var cellIndex = Array.from(_this104._itemsFocusable.parentElement.children).indexOf(_this104._itemsFocusable);
                row.children[cellIndex].focus();
              }
            });
          }

          this._assignModels();

          requestAnimationFrame(function () {
            return _this104._update();
          });

          this.__updateFooterPositioning();

          if (this._ie) {
            // Workaround an IE flexbox bug where the rows would horizontally collapse
            // whenever item count change toggles the scrollbar visibility (is tested)
            this.$.table.style.display = 'block';
            setTimeout(function () {
              _this104.$.table.style.display = 'flex';

              _this104._translateStationaryElements();
            });
          }
        }
        /** @protected */

      }, {
        key: "_positionItems",
        value: function _positionItems() {
          var _this105 = this;

          this._adjustScrollPosition();

          var rePosition;

          if (isNaN(this._physicalTop)) {
            rePosition = true;
            this._physicalTop = 0;
          }

          var y = this._physicalTop;

          this._iterateItems(function (pidx, vidx) {
            _this105._physicalItems[pidx].style.transform = "translateY(".concat(y, "px)");
            y += _this105._physicalSizes[pidx];
          });

          if (rePosition) {
            this._scrollToIndex(0);
          }
        }
        /**
         * @param {number} count
         * @protected
         */

      }, {
        key: "_increasePoolIfNeeded",
        value: function _increasePoolIfNeeded(count) {
          var _this106 = this;

          if (count === 0 && this._scrollingToIndex || !this._canPopulate() || !this._effectiveSize) {
            return;
          }

          if (!this._initialPoolCreated) {
            this._initialPoolCreated = true;

            _get(_getPrototypeOf(GridScrollerElement.prototype), "_increasePoolIfNeeded", this).call(this, 25);
          } else if (this._optPhysicalSize !== Infinity) {
            this._debounceIncreasePool = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(this._debounceIncreasePool, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["animationFrame"], function () {
              _this106._updateMetrics();

              var remainingPhysicalSize = _this106._optPhysicalSize - _this106._physicalSize;
              var estimatedMissingRowCount = Math.ceil(remainingPhysicalSize / _this106._physicalAverage);

              if (_this106._physicalCount + estimatedMissingRowCount > _this106._effectiveSize) {
                // Do not increase the physical item count above the this._effectiveSize
                estimatedMissingRowCount = Math.max(0, _this106._effectiveSize - _this106._physicalCount);
              }

              if (_this106._physicalSize && estimatedMissingRowCount > 0 && _this106._optPhysicalSize !== Infinity) {
                _get(_getPrototypeOf(GridScrollerElement.prototype), "_increasePoolIfNeeded", _this106).call(_this106, estimatedMissingRowCount); // Ensure the rows are in order after increasing pool


                _this106.__reorderChildNodes();
              }
            });
          }
        }
        /** @private */

      }, {
        key: "__reorderChildNodes",
        value: function __reorderChildNodes() {
          var _this107 = this;

          var childNodes = Array.from(this.$.items.childNodes);
          var rowsInOrder = !!childNodes.reduce(function (inOrder, current, currentIndex, array) {
            if (currentIndex === 0 || array[currentIndex - 1].index === current.index - 1) {
              return inOrder;
            }
          }, true);

          if (!rowsInOrder) {
            childNodes.sort(function (row1, row2) {
              return row1.index - row2.index;
            }).forEach(function (row) {
              return _this107.$.items.appendChild(row);
            });
          }
        }
        /** @private */

      }, {
        key: "_createPool",
        value: function _createPool(size) {
          var _this108 = this;

          var fragment = document.createDocumentFragment();

          var physicalItems = this._createScrollerRows(size);

          physicalItems.forEach(function (inst) {
            return fragment.appendChild(inst);
          });

          this._getRowTarget().appendChild(fragment); // Weird hack needed to get Safari to actually distribute slots


          var content = this.querySelector('[slot]');

          if (content) {
            var slot = content.getAttribute('slot');
            content.setAttribute('slot', 'foo-bar');
            content.setAttribute('slot', slot);
          }

          Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_0__["afterNextRender"])(this, function () {
            return _this108.notifyResize();
          });
          return physicalItems;
        }
        /**
         * Assigns the data models to a given set of items.
         * @param {!Array<number>=} itemSet
         * @protected
         */

      }, {
        key: "_assignModels",
        value: function _assignModels(itemSet) {
          var _this109 = this;

          this._iterateItems(function (pidx, vidx) {
            var el = _this109._physicalItems[pidx];

            _this109._toggleAttribute('hidden', vidx >= _this109._effectiveSize, el);

            _this109._updateScrollerItem(el, vidx + (_this109._vidxOffset || 0));
          }, itemSet);
        }
        /** @protected */

      }, {
        key: "_scrollHandler",
        value: function _scrollHandler() {
          var _this110 = this;

          var delta = this.$.table.scrollTop - this._scrollPosition;

          this._accessIronListAPI(_get(_getPrototypeOf(GridScrollerElement.prototype), "_scrollHandler", this));

          var oldOffset = this._vidxOffset;

          if (this._accessIronListAPI(function () {
            return _this110._maxScrollTop;
          }) && this._virtualCount < this._effectiveSize) {
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

      }, {
        key: "_adjustVirtualIndexOffset",
        value: function _adjustVirtualIndexOffset(delta) {
          if (Math.abs(delta) > 10000) {
            if (this._noScale) {
              this._noScale = false;
              return;
            }

            var scale = this.$.table.scrollTop / (this.$.table.scrollHeight - this.$.table.offsetHeight);
            var offset = scale * this._effectiveSize;
            this._vidxOffset = Math.round(offset - scale * this._virtualCount);
          } else {
            // Make sure user can always swipe/wheel scroll to the start and end
            var oldOffset = this._vidxOffset || 0;
            var threshold = 1000;
            var maxShift = 100; // At start

            if (this._scrollTop === 0) {
              this._vidxOffset = 0;

              if (oldOffset !== this._vidxOffset) {
                _get(_getPrototypeOf(GridScrollerElement.prototype), "scrollToIndex", this).call(this, 0);
              }
            } else if (this.firstVisibleIndex < threshold && this._vidxOffset > 0) {
              this._vidxOffset -= Math.min(this._vidxOffset, maxShift);

              if (oldOffset !== this._vidxOffset) {
                _get(_getPrototypeOf(GridScrollerElement.prototype), "scrollToIndex", this).call(this, this.firstVisibleIndex + (oldOffset - this._vidxOffset));
              }

              this._noScale = true;
            } // At end


            var maxOffset = this._effectiveSize - this._virtualCount;

            if (this._scrollTop >= this._maxScrollTop && this._maxScrollTop > 0) {
              this._vidxOffset = maxOffset;

              if (oldOffset !== this._vidxOffset) {
                _get(_getPrototypeOf(GridScrollerElement.prototype), "scrollToIndex", this).call(this, this._virtualCount);
              }
            } else if (this.firstVisibleIndex > this._virtualCount - threshold && this._vidxOffset < maxOffset) {
              this._vidxOffset += Math.min(maxOffset - this._vidxOffset, maxShift);

              if (oldOffset !== this._vidxOffset) {
                _get(_getPrototypeOf(GridScrollerElement.prototype), "scrollToIndex", this).call(this, this.firstVisibleIndex - (this._vidxOffset - oldOffset));
              }

              this._noScale = true;
            }
          }
        }
        /** @private */

      }, {
        key: "_accessIronListAPI",
        value: function _accessIronListAPI(cb) {
          var _this111 = this;

          this._warnPrivateAPIAccessAsyncEnabled = false;
          var returnValue = cb.apply(this);
          this._debouncerWarnPrivateAPIAccess = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(this._debouncerWarnPrivateAPIAccess, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["animationFrame"], function () {
            return _this111._warnPrivateAPIAccessAsyncEnabled = true;
          });
          return returnValue;
        }
        /**
         * Allow iron-list to access its APIs from debounced callbacks without warns
         * @private
         */

      }, {
        key: "_debounceRender",
        value: function _debounceRender(cb, asyncModule) {
          var _this112 = this;

          _get(_getPrototypeOf(GridScrollerElement.prototype), "_debounceRender", this).call(this, function () {
            return _this112._accessIronListAPI(cb);
          }, asyncModule);
        }
        /**
         * Warn when iron-list APIs are being accessed directly
         * @private
         */

      }, {
        key: "_warnPrivateAPIAccess",
        value: function _warnPrivateAPIAccess(apiName) {
          if (this._warnPrivateAPIAccessAsyncEnabled) {
            console.warn("Accessing private API (".concat(apiName, ")!"));
          }
        }
        /** @protected */

      }, {
        key: "_render",
        value: function _render() {
          this._accessIronListAPI(_get(_getPrototypeOf(GridScrollerElement.prototype), "_render", this));
        }
        /** @private */

      }, {
        key: "_createFocusBackfillItem",
        value: function _createFocusBackfillItem() {
          /* Ignore */
        }
        /** @private */

      }, {
        key: "_multiSelectionChanged",
        value: function _multiSelectionChanged() {
          /* Ignore */
        }
        /** @private */

      }, {
        key: "clearSelection",
        value: function clearSelection() {
          /* Ignore */
        }
        /** @protected */

      }, {
        key: "_itemsChanged",
        value: function _itemsChanged() {
          /* Ignore */
        }
        /** @private */

      }, {
        key: "_manageFocus",
        value: function _manageFocus() {
          /* Ignore */
        }
        /** @private */

      }, {
        key: "_removeFocusedItem",
        value: function _removeFocusedItem() {
          /* Ignore */
        }
        /**
         * @return {number}
         * @protected
         */

      }, {
        key: "_scrollToIndex",

        /**
         * @param {number} index
         * @protected
         */
        value: function _scrollToIndex(index) {
          var _this113 = this;

          this._accessIronListAPI(function () {
            return _this113.scrollToIndex(index);
          });
        }
        /** @private */

      }, {
        key: "updateViewportBoundaries",

        /** @private */
        value: function updateViewportBoundaries() {
          this._warnPrivateAPIAccess('updateViewportBoundaries');

          _get(_getPrototypeOf(GridScrollerElement.prototype), "updateViewportBoundaries", this).apply(this, arguments);
        }
        /** @protected */

      }, {
        key: "_resizeHandler",
        value: function _resizeHandler() {
          _get(_getPrototypeOf(GridScrollerElement.prototype), "_resizeHandler", this).call(this);

          Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["flush"])();
        }
      }, {
        key: "_firstVisibleIndex",
        get: function get() {
          var _this114 = this;

          return this._accessIronListAPI(function () {
            return _get(_getPrototypeOf(GridScrollerElement.prototype), "firstVisibleIndex", _this114);
          });
        }
        /**
         * @return {number}
         * @protected
         */

      }, {
        key: "_lastVisibleIndex",
        get: function get() {
          var _this115 = this;

          return this._accessIronListAPI(function () {
            return _get(_getPrototypeOf(GridScrollerElement.prototype), "lastVisibleIndex", _this115);
          });
        }
      }, {
        key: "firstVisibleIndex",
        get: function get() {
          this._warnPrivateAPIAccess('firstVisibleIndex');

          return _get(_getPrototypeOf(GridScrollerElement.prototype), "firstVisibleIndex", this);
        }
        /** @private */
        ,
        set: function set(value) {
          this._warnPrivateAPIAccess('firstVisibleIndex');

          _set(_getPrototypeOf(GridScrollerElement.prototype), "firstVisibleIndex", value, this, true);
        }
        /** @private */

      }, {
        key: "lastVisibleIndex",
        get: function get() {
          this._warnPrivateAPIAccess('lastVisibleIndex');

          return _get(_getPrototypeOf(GridScrollerElement.prototype), "lastVisibleIndex", this);
        }
        /** @private */
        ,
        set: function set(value) {
          this._warnPrivateAPIAccess('lastVisibleIndex');

          _set(_getPrototypeOf(GridScrollerElement.prototype), "lastVisibleIndex", value, this, true);
        }
      }], [{
        key: "is",
        get: function get() {
          return 'vaadin-grid-scroller';
        }
      }, {
        key: "properties",
        get: function get() {
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
      }, {
        key: "observers",
        get: function get() {
          return ['_effectiveSizeChanged(_effectiveSize)'];
        }
      }]);

      return GridScrollerElement;
    }(_iron_list_js__WEBPACK_IMPORTED_MODULE_3__["PolymerIronList"]);

    customElements.define(GridScrollerElement.is, GridScrollerElement);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-column.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-column.js ***!
    \******************************************************************************/

  /*! exports provided: GridSelectionColumnElement */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridSelectionColumnJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridSelectionColumnElement", function () {
      return GridSelectionColumnElement;
    });
    /* harmony import */


    var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-legacy.js */
    "./node_modules/@polymer/polymer/polymer-legacy.js");
    /* harmony import */


    var _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./vaadin-grid-column.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js");
    /* harmony import */


    var _vaadin_vaadin_checkbox_src_vaadin_checkbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @vaadin/vaadin-checkbox/src/vaadin-checkbox.js */
    "./node_modules/@vaadin/vaadin-checkbox/src/vaadin-checkbox.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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


    var GridSelectionColumnElement = /*#__PURE__*/function (_vaadin_grid_column_j2) {
      _inherits(GridSelectionColumnElement, _vaadin_grid_column_j2);

      var _super38 = _createSuper(GridSelectionColumnElement);

      _createClass(GridSelectionColumnElement, [{
        key: "_pathOrHeaderChanged",

        /** @private */
        value: function _pathOrHeaderChanged(path, header, headerCell, footerCell, cells, renderer, headerRenderer, bodyTemplate, headerTemplate) {
          // As a special case, allow overriding the default header / body templates
          if (cells.value && (path !== undefined || renderer !== undefined)) {
            this._bodyTemplate = bodyTemplate = undefined;

            this.__cleanCellsOfTemplateProperties(cells.value);
          }

          if (headerCell && (header !== undefined || headerRenderer !== undefined)) {
            this._headerTemplate = headerTemplate = undefined;

            this.__cleanCellsOfTemplateProperties([headerCell]);
          }

          _get(_getPrototypeOf(GridSelectionColumnElement.prototype), "_pathOrHeaderChanged", this).call(this, path, header, headerCell, footerCell, cells, renderer, headerRenderer, bodyTemplate, headerTemplate);
        }
        /** @private */

      }, {
        key: "__cleanCellsOfTemplateProperties",
        value: function __cleanCellsOfTemplateProperties(cells) {
          cells.forEach(function (cell) {
            cell._content.innerHTML = '';
            delete cell._instance;
            delete cell._template;
          });
        }
        /** @private */

      }, {
        key: "_prepareHeaderTemplate",
        value: function _prepareHeaderTemplate() {
          var headerTemplate = this._prepareTemplatizer(this._findTemplate(true) || this.$.defaultHeaderTemplate); // needed to override the dataHost correctly in case internal template is used.


          headerTemplate.templatizer.dataHost = headerTemplate === this.$.defaultHeaderTemplate ? this : this.dataHost;
          return headerTemplate;
        }
        /** @private */

      }, {
        key: "_prepareBodyTemplate",
        value: function _prepareBodyTemplate() {
          var template = this._prepareTemplatizer(this._findTemplate() || this.$.defaultBodyTemplate); // needed to override the dataHost correctly in case internal template is used.


          template.templatizer.dataHost = template === this.$.defaultBodyTemplate ? this : this.dataHost;
          return template;
        }
      }], [{
        key: "template",
        get: function get() {
          return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"](_templateObject27());
        }
      }, {
        key: "is",
        get: function get() {
          return 'vaadin-grid-selection-column';
        }
      }, {
        key: "properties",
        get: function get() {
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
              value: false
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
      }, {
        key: "observers",
        get: function get() {
          return ['_onSelectAllChanged(selectAll)'];
        }
      }]);

      function GridSelectionColumnElement() {
        var _this116;

        _classCallCheck(this, GridSelectionColumnElement);

        _this116 = _super38.call(this);
        _this116._boundOnActiveItemChanged = _this116._onActiveItemChanged.bind(_assertThisInitialized(_this116));
        _this116._boundOnDataProviderChanged = _this116._onDataProviderChanged.bind(_assertThisInitialized(_this116));
        _this116._boundOnSelectedItemsChanged = _this116._onSelectedItemsChanged.bind(_assertThisInitialized(_this116));
        return _this116;
      }
      /** @protected */


      _createClass(GridSelectionColumnElement, [{
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          this._grid.removeEventListener('active-item-changed', this._boundOnActiveItemChanged);

          this._grid.removeEventListener('data-provider-changed', this._boundOnDataProviderChanged);

          this._grid.removeEventListener('filter-changed', this._boundOnSelectedItemsChanged);

          this._grid.removeEventListener('selected-items-changed', this._boundOnSelectedItemsChanged);

          var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

          if (isSafari && window.ShadyDOM && this.parentElement) {
            // Detach might have beem caused by order change.
            // Shady on safari doesn't restore isAttached so we'll need to do it manually.
            var parent = this.parentElement;
            var nextSibling = this.nextElementSibling;
            parent.removeChild(this);

            if (nextSibling) {
              parent.insertBefore(this, nextSibling);
            } else {
              parent.appendChild(this);
            }
          }

          _get(_getPrototypeOf(GridSelectionColumnElement.prototype), "disconnectedCallback", this).call(this);
        }
        /** @protected */

      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          _get(_getPrototypeOf(GridSelectionColumnElement.prototype), "connectedCallback", this).call(this);

          if (this._grid) {
            this._grid.addEventListener('active-item-changed', this._boundOnActiveItemChanged);

            this._grid.addEventListener('data-provider-changed', this._boundOnDataProviderChanged);

            this._grid.addEventListener('filter-changed', this._boundOnSelectedItemsChanged);

            this._grid.addEventListener('selected-items-changed', this._boundOnSelectedItemsChanged);
          }
        }
        /** @private */

      }, {
        key: "_onSelectAllChanged",
        value: function _onSelectAllChanged(selectAll) {
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

      }, {
        key: "_arrayContains",
        value: function _arrayContains(a, b) {
          for (var i = 0; a && b && b[i] && a.indexOf(b[i]) >= 0; i++) {
            ;
          } // eslint-disable-line


          return i == b.length;
        }
        /** @private */

      }, {
        key: "_onSelectAllCheckedChanged",
        value: function _onSelectAllCheckedChanged(e) {
          this.selectAll = this._indeterminate || e.target.checked;
        }
        /**
         * iOS needs indeterminated + checked at the same time
         * @private
         */

      }, {
        key: "_isChecked",
        value: function _isChecked(selectAll, indeterminate) {
          return indeterminate || selectAll;
        }
        /** @private */

      }, {
        key: "_onActiveItemChanged",
        value: function _onActiveItemChanged(e) {
          var activeItem = e.detail.value;

          if (this.autoSelect) {
            var item = activeItem || this._previousActiveItem;

            if (item) {
              this._grid._toggleItem(item);
            }
          }

          this._previousActiveItem = activeItem;
        }
        /** @private */

      }, {
        key: "_onSelectedItemsChanged",
        value: function _onSelectedItemsChanged(e) {
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

      }, {
        key: "_onDataProviderChanged",
        value: function _onDataProviderChanged(e) {
          this._selectAllHidden = !Array.isArray(this._grid.items);
        }
      }]);

      return GridSelectionColumnElement;
    }(_vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_1__["GridColumnElement"]);

    customElements.define(GridSelectionColumnElement.is, GridSelectionColumnElement);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-mixin.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-mixin.js ***!
    \*****************************************************************************/

  /*! exports provided: SelectionMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridSelectionMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionMixin", function () {
      return SelectionMixin;
    });
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var SelectionMixin = function SelectionMixin(superClass) {
      return /*#__PURE__*/function (_superClass15) {
        _inherits(SelectionMixin, _superClass15);

        var _super39 = _createSuper(SelectionMixin);

        function SelectionMixin() {
          _classCallCheck(this, SelectionMixin);

          return _super39.apply(this, arguments);
        }

        _createClass(SelectionMixin, [{
          key: "_isSelected",

          /**
           * @param {!GridItem} item
           * @return {boolean}
           * @protected
           */
          value: function _isSelected(item) {
            return this.selectedItems && this._getItemIndexInArray(item, this.selectedItems) > -1;
          }
          /**
           * Selects the given item.
           *
           * @method selectItem
           * @param {!GridItem} item The item object
           */

        }, {
          key: "selectItem",
          value: function selectItem(item) {
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

        }, {
          key: "deselectItem",
          value: function deselectItem(item) {
            var index = this._getItemIndexInArray(item, this.selectedItems);

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

        }, {
          key: "_toggleItem",
          value: function _toggleItem(item) {
            var index = this._getItemIndexInArray(item, this.selectedItems);

            if (index === -1) {
              this.selectItem(item);
            } else {
              this.deselectItem(item);
            }
          }
          /** @private */

        }, {
          key: "_selectedItemsChanged",
          value: function _selectedItemsChanged(e) {
            var _this117 = this;

            if (this.$.items.children.length && (e.path === 'selectedItems' || e.path === 'selectedItems.splices')) {
              Array.from(this.$.items.children).forEach(function (row) {
                _this117._updateItem(row, row._item);
              });
            }
          }
          /** @private */

        }, {
          key: "_selectedInstanceChangedCallback",
          value: function _selectedInstanceChangedCallback(instance, value) {
            if (_get(_getPrototypeOf(SelectionMixin.prototype), "_selectedInstanceChangedCallback", this)) {
              _get(_getPrototypeOf(SelectionMixin.prototype), "_selectedInstanceChangedCallback", this).call(this, instance, value);
            }

            if (value) {
              this.selectItem(instance.item);
            } else {
              this.deselectItem(instance.item);
            }
          }
        }], [{
          key: "properties",
          get: function get() {
            return {
              /**
               * An array that contains the selected items.
               * @type {Array<GridItem>}
               */
              selectedItems: {
                type: Object,
                notify: true,
                value: function value() {
                  return [];
                }
              }
            };
          }
        }, {
          key: "observers",
          get: function get() {
            return ['_selectedItemsChanged(selectedItems.*)'];
          }
        }]);

        return SelectionMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-column.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-column.js ***!
    \*************************************************************************/

  /*! exports provided: GridSortColumnElement */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridSortColumnJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridSortColumnElement", function () {
      return GridSortColumnElement;
    });
    /* harmony import */


    var _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./vaadin-grid-column.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js");
    /* harmony import */


    var _vaadin_grid_sorter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./vaadin-grid-sorter.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sorter.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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


    var GridSortColumnElement = /*#__PURE__*/function (_vaadin_grid_column_j3) {
      _inherits(GridSortColumnElement, _vaadin_grid_column_j3);

      var _super40 = _createSuper(GridSortColumnElement);

      function GridSortColumnElement() {
        _classCallCheck(this, GridSortColumnElement);

        return _super40.apply(this, arguments);
      }

      _createClass(GridSortColumnElement, [{
        key: "_prepareHeaderTemplate",

        /** @private */
        value: function _prepareHeaderTemplate() {
          var headerTemplate = this._prepareTemplatizer(this.$.headerTemplate); // needed to override the dataHost correctly in case internal template is used.


          headerTemplate.templatizer.dataHost = this;
          return headerTemplate;
        }
        /** @private */

      }, {
        key: "_getHeader",
        value: function _getHeader(header, path) {
          return header || this._generateHeader(path);
        }
      }], [{
        key: "template",
        get: function get() {
          return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"](_templateObject28());
        }
      }, {
        key: "is",
        get: function get() {
          return 'vaadin-grid-sort-column';
        }
      }, {
        key: "properties",
        get: function get() {
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
      }]);

      return GridSortColumnElement;
    }(_vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_0__["GridColumnElement"]);

    customElements.define(GridSortColumnElement.is, GridSortColumnElement);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-mixin.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-mixin.js ***!
    \************************************************************************/

  /*! exports provided: SortMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridSortMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortMixin", function () {
      return SortMixin;
    });
    /* harmony import */


    var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/async.js */
    "./node_modules/@polymer/polymer/lib/utils/async.js");
    /* harmony import */


    var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element.js */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var SortMixin = function SortMixin(superClass) {
      return /*#__PURE__*/function (_superClass16) {
        _inherits(SortMixin, _superClass16);

        var _super41 = _createSuper(SortMixin);

        function SortMixin() {
          _classCallCheck(this, SortMixin);

          return _super41.apply(this, arguments);
        }

        _createClass(SortMixin, [{
          key: "ready",

          /** @protected */
          value: function ready() {
            var _this118 = this;

            _get(_getPrototypeOf(SortMixin.prototype), "ready", this).call(this);

            this.addEventListener('sorter-changed', this._onSorterChanged); // With Polymer 2 & shady the 'sorter-changed' listener isn't guaranteed to be registered
            // before child <vaadin-grid-sorter>'s upgrade and fire the events. The following
            // makes sure that 'sorter-changed' is fired for all <vaadin-grid-sorter> elements
            // after this (<vaadin-grid>) is ready (and the listeners are active).

            if (window.ShadyDOM) {
              _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["microTask"].run(function () {
                var sorters = _this118.querySelectorAll('vaadin-grid-sorter');

                Array.from(sorters).forEach(function (sorter) {
                  // Don't try to fire if the sorter hasn't been upgraded yet
                  if (sorter instanceof _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
                    sorter.dispatchEvent(new CustomEvent('sorter-changed', {
                      bubbles: true,
                      composed: true
                    }));
                  }
                });
              });
            }
          }
          /** @private */

        }, {
          key: "_onSorterChanged",
          value: function _onSorterChanged(e) {
            var _this119 = this;

            var sorter = e.target;

            this._removeArrayItem(this._sorters, sorter);

            sorter._order = null;

            if (this.multiSort) {
              if (sorter.direction) {
                this._sorters.unshift(sorter);
              }

              this._sorters.forEach(function (sorter, index) {
                return sorter._order = _this119._sorters.length > 1 ? index : null;
              }, this);
            } else {
              if (sorter.direction) {
                this._sorters.forEach(function (sorter) {
                  sorter._order = null;
                  sorter.direction = null;
                });

                this._sorters = [sorter];
              }
            }

            e.stopPropagation();

            if (this.dataProvider && // No need to clear cache if sorters didn't change
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

        }, {
          key: "_mapSorters",
          value: function _mapSorters() {
            return this._sorters.map(function (sorter) {
              return {
                path: sorter.path,
                direction: sorter.direction
              };
            });
          }
          /** @private */

        }, {
          key: "_removeArrayItem",
          value: function _removeArrayItem(array, item) {
            var index = array.indexOf(item);

            if (index > -1) {
              array.splice(index, 1);
            }
          }
        }], [{
          key: "properties",
          get: function get() {
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
                value: function value() {
                  return [];
                }
              },

              /** @private */
              _previousSorters: {
                type: Array,
                value: function value() {
                  return [];
                }
              }
            };
          }
        }]);

        return SortMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sorter.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sorter.js ***!
    \********************************************************************/

  /*! exports provided: GridSorterElement */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridSorterJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridSorterElement", function () {
      return GridSorterElement;
    });
    /* harmony import */


    var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-legacy.js */
    "./node_modules/@polymer/polymer/polymer-legacy.js");
    /* harmony import */


    var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/elements/custom-style.js */
    "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
    /* harmony import */


    var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */
    "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
    /* harmony import */


    var _vaadin_vaadin_element_mixin_vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @vaadin/vaadin-element-mixin/vaadin-dir-mixin.js */
    "./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-mixin.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
    /* harmony import */


    var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element.js */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */


    var $_documentContainer = document.createElement('template');
    $_documentContainer.innerHTML = "<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>";
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

    var GridSorterElement = /*#__PURE__*/function (_Object6) {
      _inherits(GridSorterElement, _Object6);

      var _super42 = _createSuper(GridSorterElement);

      function GridSorterElement() {
        _classCallCheck(this, GridSorterElement);

        return _super42.apply(this, arguments);
      }

      _createClass(GridSorterElement, [{
        key: "ready",

        /** @protected */
        value: function ready() {
          _get(_getPrototypeOf(GridSorterElement.prototype), "ready", this).call(this);

          this.addEventListener('click', this._onClick.bind(this));
        }
        /** @protected */

      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          _get(_getPrototypeOf(GridSorterElement.prototype), "connectedCallback", this).call(this);

          this._isConnected = true;
        }
        /** @protected */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(GridSorterElement.prototype), "disconnectedCallback", this).call(this);

          this._isConnected = false;
        }
        /** @private */

      }, {
        key: "_pathOrDirectionChanged",
        value: function _pathOrDirectionChanged(path, direction, isConnected) {
          if (path === undefined || direction === undefined || isConnected === undefined) {
            return;
          }

          if (isConnected) {
            this.dispatchEvent(new CustomEvent('sorter-changed', {
              bubbles: true,
              composed: true
            }));
          }
        }
        /** @private */

      }, {
        key: "_getDisplayOrder",
        value: function _getDisplayOrder(order) {
          return order === null ? '' : order + 1;
        }
        /** @private */

      }, {
        key: "_onClick",
        value: function _onClick(e) {
          var activeElement = this.getRootNode().activeElement;

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

      }, {
        key: "_directionOrOrderChanged",
        value: function _directionOrOrderChanged(direction, order) {
          if (direction === undefined || order === undefined) {
            return;
          } // Safari has an issue with repainting shadow root element styles when a host attribute changes.
          // Need this workaround (toggle any inline css property on and off) until the issue gets fixed.


          var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

          if (isSafari && this.root) {
            this.root.querySelectorAll('*').forEach(function (el) {
              el.style['-webkit-backface-visibility'] = 'visible';
              el.style['-webkit-backface-visibility'] = '';
            });
          }
        }
      }], [{
        key: "template",
        get: function get() {
          return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"](_templateObject29());
        }
      }, {
        key: "is",
        get: function get() {
          return 'vaadin-grid-sorter';
        }
      }, {
        key: "properties",
        get: function get() {
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
      }, {
        key: "observers",
        get: function get() {
          return ['_pathOrDirectionChanged(path, direction, _isConnected)', '_directionOrOrderChanged(direction, _order)'];
        }
      }]);

      return GridSorterElement;
    }(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemableMixin"])(Object(_vaadin_vaadin_element_mixin_vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_3__["DirMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])));

    customElements.define(GridSorterElement.is, GridSorterElement);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styles.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styles.js ***!
    \********************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridStylesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/lib/elements/dom-module.js */
    "./node_modules/@polymer/polymer/lib/elements/dom-module.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */


    var VaadinGridStyles = document.createElement('dom-module'); // NOTE(web-padawan): https://github.com/vaadin/vaadin-grid/issues/1514

    VaadinGridStyles.appendChild(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"](_templateObject30()));
    VaadinGridStyles.register('vaadin-grid-styles');
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styling-mixin.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styling-mixin.js ***!
    \***************************************************************************/

  /*! exports provided: StylingMixin */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridStylingMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StylingMixin", function () {
      return StylingMixin;
    });
    /**
    @license
    Copyright (c) 2018 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */

    /**
     * @polymerMixin
     */


    var StylingMixin = function StylingMixin(superClass) {
      return /*#__PURE__*/function (_superClass17) {
        _inherits(StylingMixin, _superClass17);

        var _super43 = _createSuper(StylingMixin);

        function StylingMixin() {
          _classCallCheck(this, StylingMixin);

          return _super43.apply(this, arguments);
        }

        _createClass(StylingMixin, [{
          key: "__cellClassNameGeneratorChanged",
          value: function __cellClassNameGeneratorChanged(cellClassGenerator) {
            this.generateCellClassNames();
          }
          /**
           * Runs the `cellClassNameGenerator` for the visible cells.
           * If the generator depends on varying conditions, you need to
           * call this function manually in order to update the styles when
           * the conditions change.
           */

        }, {
          key: "generateCellClassNames",
          value: function generateCellClassNames() {
            var _this120 = this;

            Array.from(this.$.items.children).filter(function (row) {
              return !row.hidden;
            }).forEach(function (row) {
              return _this120._generateCellClassNames(row, _this120.__getRowModel(row));
            });
          }
          /** @private */

        }, {
          key: "_generateCellClassNames",
          value: function _generateCellClassNames(row, model) {
            var _this121 = this;

            Array.from(row.children).forEach(function (cell) {
              if (cell.__generatedClasses) {
                cell.__generatedClasses.forEach(function (className) {
                  return cell.classList.remove(className);
                });
              }

              if (_this121.cellClassNameGenerator) {
                var result = _this121.cellClassNameGenerator(cell._column, model);

                cell.__generatedClasses = result && result.split(' ').filter(function (className) {
                  return className.length > 0;
                });

                if (cell.__generatedClasses) {
                  cell.__generatedClasses.forEach(function (className) {
                    return cell.classList.add(className);
                  });
                }
              }
            });
          }
        }], [{
          key: "properties",
          get: function get() {
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
        }, {
          key: "observers",
          get: function get() {
            return ['__cellClassNameGeneratorChanged(cellClassNameGenerator)'];
          }
        }]);

        return StylingMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-templatizer.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-templatizer.js ***!
    \*************************************************************************/

  /*! exports provided: Templatizer */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridTemplatizerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Templatizer", function () {
      return GridTemplatizer;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element.js */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/templatize.js */
    "./node_modules/@polymer/polymer/lib/utils/templatize.js");
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


    var GridTemplatizer = /*#__PURE__*/function (_ref2) {
      _inherits(GridTemplatizer, _ref2);

      var _super44 = _createSuper(GridTemplatizer);

      _createClass(GridTemplatizer, null, [{
        key: "is",
        get: function get() {
          return 'vaadin-grid-templatizer';
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            dataHost: Object,
            template: Object,
            _templateInstances: {
              type: Array,
              value: function value() {
                return [];
              }
            },
            _parentPathValues: {
              value: function value() {
                return {};
              }
            },
            _grid: Object
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)'];
        }
      }]);

      function GridTemplatizer() {
        var _this122;

        _classCallCheck(this, GridTemplatizer);

        _this122 = _super44.call(this);
        _this122._instanceProps = {
          detailsOpened: true,
          index: true,
          item: true,
          selected: true,
          expanded: true,
          level: true
        };
        return _this122;
      }

      _createClass(GridTemplatizer, [{
        key: "createInstance",
        value: function createInstance() {
          this._ensureTemplatized();

          var instance = new this._TemplateClass({});
          this.addInstance(instance);
          return instance;
        }
      }, {
        key: "addInstance",
        value: function addInstance(instance) {
          var _this123 = this;

          if (this._templateInstances.indexOf(instance) === -1) {
            this._templateInstances.push(instance);

            requestAnimationFrame(function () {
              return _this123.notifyPath('_templateInstances.*', _this123._templateInstances);
            });
          }
        }
      }, {
        key: "removeInstance",
        value: function removeInstance(instance) {
          var index = this._templateInstances.indexOf(instance);

          this.splice('_templateInstances', index, 1);
        }
      }, {
        key: "_ensureTemplatized",
        value: function _ensureTemplatized() {
          if (!this._TemplateClass) {
            this._TemplateClass = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__["templatize"])(this.template, this, {
              instanceProps: this._instanceProps,
              parentModel: true,
              forwardHostProp: function forwardHostProp(prop, value) {
                this._forwardParentProp(prop, value);

                if (this._templateInstances) {
                  this._templateInstances.forEach(function (inst) {
                    return inst.notifyPath(prop, value);
                  });
                }
              },
              notifyInstanceProp: function notifyInstanceProp(inst, prop, value) {
                var _this124 = this;

                if (prop === 'index' || prop === 'item') {
                  // We don’t need a change notification for these.
                  return;
                }

                var originalProp = "__".concat(prop, "__"); // Notify for only user-action changes, not for scrolling updates. E. g.,
                // if `detailsOpened` is different from `__detailsOpened__`, which was set during render.

                if (inst[originalProp] === value) {
                  return;
                }

                inst[originalProp] = value;
                var row = Array.from(this._grid.$.items.children).filter(function (row) {
                  return _this124._grid._itemsEqual(row._item, inst.item);
                })[0];

                if (row) {
                  Array.from(row.children).forEach(function (cell) {
                    if (cell._instance) {
                      cell._instance[originalProp] = value;

                      cell._instance.notifyPath(prop, value);
                    }
                  });
                }

                var itemPrefix = 'item.';

                if (Array.isArray(this._grid.items) && prop.indexOf(itemPrefix) === 0) {
                  var itemsIndex = this._grid.items.indexOf(inst.item);

                  var path = prop.slice(itemPrefix.length);

                  this._grid.notifyPath("items.".concat(itemsIndex, ".").concat(path), value);
                }

                var gridCallback = "_".concat(prop, "InstanceChangedCallback");

                if (this._grid && this._grid[gridCallback]) {
                  this._grid[gridCallback](inst, value);
                }
              }
            });
          }
        }
      }, {
        key: "_forwardParentProp",
        value: function _forwardParentProp(prop, value) {
          this._parentPathValues[prop] = value;

          this._templateInstances.forEach(function (inst) {
            return inst.notifyPath(prop, value);
          });
        }
      }, {
        key: "_templateInstancesChanged",
        value: function _templateInstancesChanged(t, p) {
          var _this125 = this;

          var index, count;

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

          Object.keys(this._parentPathValues || {}).forEach(function (keyName) {
            for (var i = index; i < index + count; i++) {
              _this125._templateInstances[i].set(keyName, _this125._parentPathValues[keyName]);
            }
          });
        }
      }]);

      return GridTemplatizer;
    }( /*#__PURE__*/function (_polymer_polymer_poly12) {
      _inherits(_class, _polymer_polymer_poly12);

      var _super45 = _createSuper(_class);

      function _class() {
        _classCallCheck(this, _class);

        return _super45.apply(this, arguments);
      }

      return _class;
    }(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]));

    customElements.define(GridTemplatizer.is, GridTemplatizer);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-tree-column.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-tree-column.js ***!
    \*************************************************************************/

  /*! exports provided: GridTreeColumnElement */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridTreeColumnJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridTreeColumnElement", function () {
      return GridTreeColumnElement;
    });
    /* harmony import */


    var _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./vaadin-grid-column.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js");
    /* harmony import */


    var _vaadin_grid_tree_toggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./vaadin-grid-tree-toggle.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-tree-toggle.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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


    var GridTreeColumnElement = /*#__PURE__*/function (_vaadin_grid_column_j4) {
      _inherits(GridTreeColumnElement, _vaadin_grid_column_j4);

      var _super46 = _createSuper(GridTreeColumnElement);

      function GridTreeColumnElement() {
        _classCallCheck(this, GridTreeColumnElement);

        return _super46.apply(this, arguments);
      }

      _createClass(GridTreeColumnElement, [{
        key: "_prepareBodyTemplate",

        /** @private */
        value: function _prepareBodyTemplate() {
          var template = this._prepareTemplatizer(this.$.template); // needed to override the dataHost correctly in case internal template is used.


          template.templatizer.dataHost = this;
          return template;
        }
      }, {
        key: "__isLeafItem",
        value: function __isLeafItem(item, itemHasChildrenPath) {
          return !(item && item[itemHasChildrenPath]);
        }
      }, {
        key: "__getToggleContent",
        value: function __getToggleContent(path, item) {
          return path && this.get(path, item);
        }
      }], [{
        key: "template",
        get: function get() {
          return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"](_templateObject31());
        }
      }, {
        key: "is",
        get: function get() {
          return 'vaadin-grid-tree-column';
        }
      }, {
        key: "properties",
        get: function get() {
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
      }]);

      return GridTreeColumnElement;
    }(_vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_0__["GridColumnElement"]);

    customElements.define(GridTreeColumnElement.is, GridTreeColumnElement);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-tree-toggle.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-tree-toggle.js ***!
    \*************************************************************************/

  /*! exports provided: GridTreeToggleElement */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridTreeToggleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridTreeToggleElement", function () {
      return GridTreeToggleElement;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element.js */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/elements/custom-style.js */
    "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/debounce.js */
    "./node_modules/@polymer/polymer/lib/utils/debounce.js");
    /* harmony import */


    var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */
    "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
    /* harmony import */


    var _vaadin_vaadin_element_mixin_vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @vaadin/vaadin-element-mixin/vaadin-dir-mixin.js */
    "./node_modules/@vaadin/vaadin-element-mixin/vaadin-dir-mixin.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
    /* harmony import */


    var _vaadin_grid_active_item_mixin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vaadin-grid-active-item-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-active-item-mixin.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/async.js */
    "./node_modules/@polymer/polymer/lib/utils/async.js");
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */


    var $_documentContainer = document.createElement('template');
    $_documentContainer.innerHTML = "<custom-style>\n  <style>\n    @font-face {\n      font-family: \"vaadin-grid-tree-icons\";\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>";
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

    var GridTreeToggleElement = /*#__PURE__*/function (_Object7) {
      _inherits(GridTreeToggleElement, _Object7);

      var _super47 = _createSuper(GridTreeToggleElement);

      function GridTreeToggleElement() {
        _classCallCheck(this, GridTreeToggleElement);

        return _super47.apply(this, arguments);
      }

      _createClass(GridTreeToggleElement, [{
        key: "ready",

        /** @protected */
        value: function ready() {
          var _this126 = this;

          _get(_getPrototypeOf(GridTreeToggleElement.prototype), "ready", this).call(this);

          this.addEventListener('click', function (e) {
            return _this126._onClick(e);
          });
        }
        /** @private */

      }, {
        key: "_onClick",
        value: function _onClick(e) {
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

      }, {
        key: "_levelChanged",
        value: function _levelChanged(level) {
          var _this127 = this;

          var value = Number(level).toString();
          this.style['---level'] = value; // Async is to make DOM updates applied before evaluating the style
          // update, required for polyfilled RTL support in MSIE and Edge.

          this._debouncerUpdateLevel = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncerUpdateLevel, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_7__["microTask"], function () {
            return _this127.updateStyles({
              '---level': value
            });
          });
        }
      }], [{
        key: "template",
        get: function get() {
          return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"](_templateObject32());
        }
      }, {
        key: "is",
        get: function get() {
          return 'vaadin-grid-tree-toggle';
        }
      }, {
        key: "properties",
        get: function get() {
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
      }]);

      return GridTreeToggleElement;
    }(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(Object(_vaadin_vaadin_element_mixin_vaadin_dir_mixin_js__WEBPACK_IMPORTED_MODULE_4__["DirMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])));

    customElements.define(GridTreeToggleElement.is, GridTreeToggleElement);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-grid/src/vaadin-grid.js ***!
    \*************************************************************/

  /*! exports provided: GridElement */

  /***/
  function node_modulesVaadinVaadinGridSrcVaadinGridJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridElement", function () {
      return GridElement;
    });
    /* harmony import */


    var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-legacy.js */
    "./node_modules/@polymer/polymer/polymer-legacy.js");
    /* harmony import */


    var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */
    "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
    /* harmony import */


    var _vaadin_grid_scroller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./vaadin-grid-scroller.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroller.js");
    /* harmony import */


    var _vaadin_grid_a11y_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vaadin-grid-a11y-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-a11y-mixin.js");
    /* harmony import */


    var _vaadin_grid_active_item_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./vaadin-grid-active-item-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-active-item-mixin.js");
    /* harmony import */


    var _vaadin_grid_array_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vaadin-grid-array-data-provider-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-array-data-provider-mixin.js");
    /* harmony import */


    var _vaadin_grid_column_resizing_mixin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vaadin-grid-column-resizing-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-resizing-mixin.js");
    /* harmony import */


    var _vaadin_grid_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./vaadin-grid-data-provider-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-data-provider-mixin.js");
    /* harmony import */


    var _vaadin_grid_dynamic_columns_mixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./vaadin-grid-dynamic-columns-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-dynamic-columns-mixin.js");
    /* harmony import */


    var _vaadin_grid_event_context_mixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./vaadin-grid-event-context-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-event-context-mixin.js");
    /* harmony import */


    var _vaadin_grid_filter_mixin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./vaadin-grid-filter-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-filter-mixin.js");
    /* harmony import */


    var _vaadin_grid_row_details_mixin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./vaadin-grid-row-details-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-row-details-mixin.js");
    /* harmony import */


    var _vaadin_grid_scroll_mixin_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./vaadin-grid-scroll-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-scroll-mixin.js");
    /* harmony import */


    var _vaadin_grid_selection_mixin_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./vaadin-grid-selection-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-selection-mixin.js");
    /* harmony import */


    var _vaadin_grid_sort_mixin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./vaadin-grid-sort-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-sort-mixin.js");
    /* harmony import */


    var _vaadin_grid_styling_mixin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./vaadin-grid-styling-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styling-mixin.js");
    /* harmony import */


    var _vaadin_grid_drag_and_drop_mixin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./vaadin-grid-drag-and-drop-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-drag-and-drop-mixin.js");
    /* harmony import */


    var _vaadin_grid_keyboard_navigation_mixin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./vaadin-grid-keyboard-navigation-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-keyboard-navigation-mixin.js");
    /* harmony import */


    var _vaadin_grid_column_reordering_mixin_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./vaadin-grid-column-reordering-mixin.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column-reordering-mixin.js");
    /* harmony import */


    var _vaadin_grid_column_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./vaadin-grid-column.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-column.js");
    /* harmony import */


    var _vaadin_grid_styles_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./vaadin-grid-styles.js */
    "./node_modules/@vaadin/vaadin-grid/src/vaadin-grid-styles.js");
    /* harmony import */


    var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */
    "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/render-status.js */
    "./node_modules/@polymer/polymer/lib/utils/render-status.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/debounce.js */
    "./node_modules/@polymer/polymer/lib/utils/debounce.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/async.js */
    "./node_modules/@polymer/polymer/lib/utils/async.js");
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */


    var TOUCH_DEVICE = function () {
      try {
        document.createEvent('TouchEvent');
        return true;
      } catch (e) {
        return false;
      }
    }();
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


    var GridElement = /*#__PURE__*/function (_Object8) {
      _inherits(GridElement, _Object8);

      var _super48 = _createSuper(GridElement);

      _createClass(GridElement, null, [{
        key: "template",
        get: function get() {
          return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_22__["html"](_templateObject33());
        }
      }, {
        key: "is",
        get: function get() {
          return 'vaadin-grid';
        }
      }, {
        key: "version",
        get: function get() {
          return '5.7.5';
        }
      }, {
        key: "observers",
        get: function get() {
          return ['_columnTreeChanged(_columnTree, _columnTree.*)'];
        }
      }, {
        key: "properties",
        get: function get() {
          return {
            /** @private */
            _safari: {
              type: Boolean,
              value: /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            },

            /** @private */
            _ios: {
              type: Boolean,
              value: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1
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
      }]);

      function GridElement() {
        var _this128;

        _classCallCheck(this, GridElement);

        _this128 = _super48.call(this);

        _this128.addEventListener('animationend', _this128._onAnimationEnd);

        return _this128;
      }
      /** @protected */


      _createClass(GridElement, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          _get(_getPrototypeOf(GridElement.prototype), "connectedCallback", this).call(this);

          this.recalculateColumnWidths();
        }
        /**
         * @param {string} name
         * @param {?string} oldValue
         * @param {?string} newValue
         * @protected
         */

      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(name, oldValue, newValue) {
          _get(_getPrototypeOf(GridElement.prototype), "attributeChangedCallback", this).call(this, name, oldValue, newValue);

          if (name === 'dir') {
            this.__isRTL = newValue === 'rtl';

            this._updateScrollerMeasurements();
          }
        }
        /** @private */

      }, {
        key: "__hasRowsWithClientHeight",
        value: function __hasRowsWithClientHeight() {
          return !!Array.from(this.$.items.children).filter(function (row) {
            return row.clientHeight;
          }).length;
        }
        /** @protected */

      }, {
        key: "__itemsReceived",
        value: function __itemsReceived() {
          if (this._recalculateColumnWidthOnceLoadingFinished && !this._cache.isLoading() && this.__hasRowsWithClientHeight()) {
            this._recalculateColumnWidthOnceLoadingFinished = false;
            this.recalculateColumnWidths();
          }
        }
        /**
         * @param {!Array<!GridColumnElement>} cols the columns to auto size based on their content width
         * @private
         */

      }, {
        key: "_recalculateColumnWidths",
        value: function _recalculateColumnWidths(cols) {
          // Note: The `cols.forEach()` loops below could be implemented as a single loop but this has been
          // split for performance reasons to batch these similar actions [write/read] together to avoid
          // unnecessary layout trashing.
          // [write] Set automatic width for all cells (breaks column alignment)
          cols.forEach(function (col) {
            col.width = 'auto';
            col._origFlexGrow = col.flexGrow;
            col.flexGrow = 0;
          }); // [read] Measure max cell width in each column

          cols.forEach(function (col) {
            col._currentWidth = 0; // Note: _allCells only contains cells which are currently rendered in DOM

            col._allCells.forEach(function (c) {
              // Add 1px buffer to the offset width to avoid too narrow columns (sub-pixel rendering)
              var cellWidth = c.offsetWidth + 1;
              col._currentWidth = Math.max(col._currentWidth, cellWidth);
            });
          }); // [write] Set column widths to fit widest measured content

          cols.forEach(function (col) {
            col.width = "".concat(col._currentWidth, "px");
            col.flexGrow = col._origFlexGrow;
            col._currentWidth = undefined;
            col._origFlexGrow = undefined;
          });
        }
        /**
         * Updates the `width` of all columns which have `autoWidth` set to `true`.
         */

      }, {
        key: "recalculateColumnWidths",
        value: function recalculateColumnWidths() {
          if (!this._columnTree) {
            return; // No columns
          }

          if (this._cache.isLoading()) {
            this._recalculateColumnWidthOnceLoadingFinished = true;
          } else {
            var cols = this._getColumns().filter(function (col) {
              return !col.hidden && col.autoWidth;
            });

            this._recalculateColumnWidths(cols);
          }
        }
        /** @private */

      }, {
        key: "_createScrollerRows",
        value: function _createScrollerRows(count) {
          var _this129 = this;

          var rows = [];

          for (var i = 0; i < count; i++) {
            var row = document.createElement('tr');
            row.setAttribute('part', 'row');
            row.setAttribute('role', 'row');

            if (this._columnTree) {
              this._updateRow(row, this._columnTree[this._columnTree.length - 1], 'body', false, true);
            }

            rows.push(row);
          }

          if (this._columnTree) {
            this._columnTree[this._columnTree.length - 1].forEach(function (c) {
              return c.notifyPath && c.notifyPath('_cells.*', c._cells);
            });
          }

          Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_23__["beforeNextRender"])(this, function () {
            _this129._updateFirstAndLastColumn();

            _this129._resetKeyboardNavigation();
          });
          return rows;
        }
        /** @private */

      }, {
        key: "_getRowTarget",
        value: function _getRowTarget() {
          return this.$.items;
        }
        /** @private */

      }, {
        key: "_createCell",
        value: function _createCell(tagName) {
          var _this130 = this;

          var contentId = this._contentIndex = this._contentIndex + 1 || 0;
          var slotName = 'vaadin-grid-cell-content-' + contentId;
          var cellContent = document.createElement('vaadin-grid-cell-content');
          cellContent.setAttribute('slot', slotName);
          var cell = document.createElement(tagName);
          cell.id = slotName.replace('-content-', '-');
          cell.setAttribute('tabindex', '-1');
          cell.setAttribute('role', tagName === 'td' ? 'gridcell' : 'columnheader');
          var slot = document.createElement('slot');
          slot.setAttribute('name', slotName);
          cell.appendChild(slot);
          cell._content = cellContent; // With native Shadow DOM, mousedown on slotted element does not focus
          // focusable slot wrapper, that is why cells are not focused with
          // mousedown. Workaround: listen for mousedown and focus manually.

          cellContent.addEventListener('mousedown', function () {
            if (window.chrome) {
              // Chrome bug: focusing before mouseup prevents text selection, see http://crbug.com/771903
              var mouseUpListener = function mouseUpListener() {
                if (!cellContent.contains(_this130.getRootNode().activeElement)) {
                  cell.focus();
                } // If focus is in the cell content — respect it, do not change.


                document.removeEventListener('mouseup', mouseUpListener, true);
              };

              document.addEventListener('mouseup', mouseUpListener, true);
            } else {
              // Focus on mouseup, on the other hand, removes selection on Safari.
              // Watch out sync focus removal issue, only async focus works here.
              setTimeout(function () {
                if (!cellContent.contains(_this130.getRootNode().activeElement)) {
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

      }, {
        key: "_updateRow",
        value: function _updateRow(row, columns, section, isColumnRow, noNotify) {
          var _this131 = this;

          section = section || 'body';
          var contentsFragment = document.createDocumentFragment();
          Array.from(row.children).forEach(function (cell) {
            return cell._vacant = true;
          });
          row.innerHTML = '';

          if (row.id !== 'sizer') {
            row.hidden = true;
          }

          columns.filter(function (column) {
            return !column.hidden;
          }).forEach(function (column, index, cols) {
            var cell;

            if (section === 'body') {
              // Body
              column._cells = column._cells || [];
              cell = column._cells.filter(function (cell) {
                return cell._vacant;
              })[0];

              if (!cell) {
                cell = _this131._createCell('td');

                column._cells.push(cell);
              }

              cell.setAttribute('part', 'cell body-cell');
              row.appendChild(cell);

              if (index === cols.length - 1 && (_this131._rowDetailsTemplate || _this131.rowDetailsRenderer)) {
                // Add details cell as last cell to body rows
                _this131._detailsCells = _this131._detailsCells || [];

                var detailsCell = _this131._detailsCells.filter(function (cell) {
                  return cell._vacant;
                })[0] || _this131._createCell('td');

                if (_this131._detailsCells.indexOf(detailsCell) === -1) {
                  _this131._detailsCells.push(detailsCell);
                }

                if (!detailsCell._content.parentElement) {
                  contentsFragment.appendChild(detailsCell._content);
                }

                _this131._configureDetailsCell(detailsCell);

                row.appendChild(detailsCell);

                _this131._a11ySetRowDetailsCell(row, detailsCell);

                detailsCell._vacant = false;
              }

              if (column.notifyPath && !noNotify) {
                column.notifyPath('_cells.*', column._cells);
              }
            } else {
              // Header & footer
              var tagName = section === 'header' ? 'th' : 'td';

              if (isColumnRow || column.localName === 'vaadin-grid-column-group') {
                cell = column["_".concat(section, "Cell")] || _this131._createCell(tagName);
                cell._column = column;
                row.appendChild(cell);
                column["_".concat(section, "Cell")] = cell;
              } else {
                column._emptyCells = column._emptyCells || [];
                cell = column._emptyCells.filter(function (cell) {
                  return cell._vacant;
                })[0] || _this131._createCell(tagName);
                cell._column = column;
                row.appendChild(cell);

                if (column._emptyCells.indexOf(cell) === -1) {
                  column._emptyCells.push(cell);
                }
              }

              cell.setAttribute('part', "cell ".concat(section, "-cell"));

              _this131.__updateHeaderFooterRowVisibility(row);
            }

            if (!cell._content.parentElement) {
              contentsFragment.appendChild(cell._content);
            }

            cell._vacant = false;
            cell._column = column;
          }); // Might be empty if only cache was used

          this.appendChild(contentsFragment);

          this._frozenCellsChanged();

          this._updateFirstAndLastColumnForRow(row);
        }
        /**
         * @param {HTMLTableRowElement} row
         * @protected
         */

      }, {
        key: "__updateHeaderFooterRowVisibility",
        value: function __updateHeaderFooterRowVisibility(row) {
          var _this132 = this;

          if (!row) {
            return;
          }

          var visibleRowCells = Array.from(row.children).filter(function (cell) {
            var column = cell._column;

            if (column._emptyCells && column._emptyCells.indexOf(cell) > -1) {
              // The cell is an "empty cell"  -> doesn't block hiding the row
              return false;
            }

            if (row.parentElement === _this132.$.header) {
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

      }, {
        key: "_updateScrollerItem",
        value: function _updateScrollerItem(row, index) {
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

      }, {
        key: "_columnTreeChanged",
        value: function _columnTreeChanged(columnTree, splices) {
          this._renderColumnTree(columnTree);

          this.recalculateColumnWidths();
        }
        /**
         * @param {!Array<!GridColumnElement>} columnTree
         * @protected
         */

      }, {
        key: "_renderColumnTree",
        value: function _renderColumnTree(columnTree) {
          var _this133 = this;

          Array.from(this.$.items.children).forEach(function (row) {
            return _this133._updateRow(row, columnTree[columnTree.length - 1], null, false, true);
          });

          while (this.$.header.children.length < columnTree.length) {
            var headerRow = document.createElement('tr');
            headerRow.setAttribute('part', 'row');
            headerRow.setAttribute('role', 'row');
            this.$.header.appendChild(headerRow);
            var footerRow = document.createElement('tr');
            footerRow.setAttribute('part', 'row');
            footerRow.setAttribute('role', 'row');
            this.$.footer.appendChild(footerRow);
          }

          while (this.$.header.children.length > columnTree.length) {
            this.$.header.removeChild(this.$.header.firstElementChild);
            this.$.footer.removeChild(this.$.footer.firstElementChild);
          }

          Array.from(this.$.header.children).forEach(function (headerRow, index) {
            return _this133._updateRow(headerRow, columnTree[index], 'header', index === columnTree.length - 1);
          });
          Array.from(this.$.footer.children).forEach(function (footerRow, index) {
            return _this133._updateRow(footerRow, columnTree[columnTree.length - 1 - index], 'footer', index === 0);
          }); // Sizer rows

          this._updateRow(this.$.sizer, columnTree[columnTree.length - 1]);

          this._resizeHandler();

          this._frozenCellsChanged();

          this._updateFirstAndLastColumn();

          this._resetKeyboardNavigation();

          this._a11yUpdateHeaderRows();

          this._a11yUpdateFooterRows();

          this.__updateFooterPositioning();
        }
      }, {
        key: "__updateFooterPositioning",
        value: function __updateFooterPositioning() {
          var _this134 = this;

          if (this._firefox) {
            // Sticky (or translated) footer in a flexbox host doesn't get included in
            // the scroll height calculation on FF. This is a workaround for the issue.
            this.$.items.style.paddingBottom = 0;

            if (!this.heightByRows) {
              this.$.items.style.paddingBottom = "".concat(this.$.footer.offsetHeight, "px");
            }
          }

          if (this._ios) {
            var isOldIOS = !window.CSS.supports('position', 'sticky');

            if (isOldIOS) {
              // Due to a rendering bug, the sticky header may disappear on an older iOS (10-12) Safari
              // if the grid is used inside of a flex box. This is a workaround for the issue.
              this.$.table.style.height = '';
              this.$.table.style.minHeight = '100%';
              this.$.table.style.maxHeight = '100%';
              setTimeout(function () {
                return _this134.$.table.style.height = "".concat(_this134.$.scroller.offsetHeight, "px");
              });
            }
          }
        }
        /**
         * @param {!HTMLElement} row
         * @param {GridItem} item
         * @protected
         */

      }, {
        key: "_updateItem",
        value: function _updateItem(row, item) {
          var _this135 = this;

          row._item = item;

          var model = this.__getRowModel(row);

          this._toggleAttribute('selected', model.selected, row);

          this._a11yUpdateRowSelected(row, model.selected);

          this._a11yUpdateRowLevel(row, model.level);

          this._toggleAttribute('expanded', model.expanded, row);

          if (this._rowDetailsTemplate || this.rowDetailsRenderer) {
            this._toggleDetailsCell(row, item);
          }

          this._generateCellClassNames(row, model);

          this._filterDragAndDrop(row, model);

          Array.from(row.children).forEach(function (cell) {
            if (cell._renderer) {
              var owner = cell._column || _this135;

              cell._renderer.call(owner, cell._content, owner, model);
            } else if (cell._instance) {
              cell._instance.__detailsOpened__ = model.detailsOpened;
              cell._instance.__selected__ = model.selected;
              cell._instance.__level__ = model.level;
              cell._instance.__expanded__ = model.expanded;

              cell._instance.setProperties(model);
            }
          });
          this._debouncerUpdateHeights = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_24__["Debouncer"].debounce(this._debouncerUpdateHeights, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_25__["timeOut"].after(1), function () {
            _this135._updateMetrics();

            _this135._positionItems();

            _this135._updateScrollerSize();
          });
        }
        /** @private */

      }, {
        key: "_resizeHandler",
        value: function _resizeHandler() {
          this._updateDetailsCellHeights();

          this._accessIronListAPI(_get(_getPrototypeOf(GridElement.prototype), "_resizeHandler", this), true);

          this._updateScrollerMeasurements();

          this.__updateFooterPositioning();
        }
        /** @private */

      }, {
        key: "_onAnimationEnd",
        value: function _onAnimationEnd(e) {
          var _this136 = this;

          // ShadyCSS applies scoping suffixes to animation names
          if (e.animationName.indexOf('vaadin-grid-appear') === 0) {
            this._render();

            e.stopPropagation();
            this.notifyResize();

            this.__itemsReceived();

            requestAnimationFrame(function () {
              // This needs to be set programmatically in order to avoid an iOS 10 bug (disappearing grid)
              _this136.$.table.style.webkitOverflowScrolling = 'touch';
            });
          }
        }
        /**
         * @param {string} name
         * @param {boolean} bool
         * @param {!Element} node
         * @protected
         */

      }, {
        key: "_toggleAttribute",
        value: function _toggleAttribute(name, bool, node) {
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

      }, {
        key: "__getRowModel",
        value: function __getRowModel(row) {
          return {
            index: row.index,
            item: row._item,
            level: this._getIndexLevel(row.index),
            expanded: this._isExpanded(row._item),
            selected: this._isSelected(row._item),
            detailsOpened: !!(this._rowDetailsTemplate || this.rowDetailsRenderer) && this._isDetailsOpened(row._item)
          };
        }
        /**
         * Manually invoke existing renderers for all the columns
         * (header, footer and body cells) and opened row details.
         */

      }, {
        key: "render",
        value: function render() {
          if (this._columnTree) {
            // header and footer renderers
            this._columnTree.forEach(function (level) {
              level.forEach(function (column) {
                return column._renderHeaderAndFooter();
              });
            }); // body and row details renderers


            this._update();
          }
        }
        /**
         * Updates the computed metrics and positioning of internal grid parts
         * (row/details cell positioning etc). Needs to be invoked whenever the sizing of grid
         * content changes asynchronously to ensure consistent appearance (e.g. when a
         * contained image whose bounds aren't known beforehand finishes loading).
         */

      }, {
        key: "notifyResize",
        value: function notifyResize() {
          _get(_getPrototypeOf(GridElement.prototype), "notifyResize", this).call(this);
        }
        /** @private */

      }, {
        key: "_heightByRowsChanged",
        value: function _heightByRowsChanged(value, oldValue) {
          if (value || oldValue) {
            this.notifyResize();
          }
        }
        /** @protected */

      }, {
        key: "__forceReflow",
        value: function __forceReflow() {
          var _this137 = this;

          this._debouncerForceReflow = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_24__["Debouncer"].debounce(this._debouncerForceReflow, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_25__["animationFrame"], function () {
            _this137.$.scroller.style.overflow = 'hidden';
            setTimeout(function () {
              return _this137.$.scroller.style.overflow = '';
            });
          });
        }
      }]);

      return GridElement;
    }(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_21__["ElementMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(Object(_vaadin_grid_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_7__["DataProviderMixin"])(Object(_vaadin_grid_array_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_5__["ArrayDataProviderMixin"])(Object(_vaadin_grid_dynamic_columns_mixin_js__WEBPACK_IMPORTED_MODULE_8__["DynamicColumnsMixin"])(Object(_vaadin_grid_active_item_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ActiveItemMixin"])(Object(_vaadin_grid_scroll_mixin_js__WEBPACK_IMPORTED_MODULE_12__["ScrollMixin"])(Object(_vaadin_grid_selection_mixin_js__WEBPACK_IMPORTED_MODULE_13__["SelectionMixin"])(Object(_vaadin_grid_sort_mixin_js__WEBPACK_IMPORTED_MODULE_14__["SortMixin"])(Object(_vaadin_grid_row_details_mixin_js__WEBPACK_IMPORTED_MODULE_11__["RowDetailsMixin"])(Object(_vaadin_grid_keyboard_navigation_mixin_js__WEBPACK_IMPORTED_MODULE_17__["KeyboardNavigationMixin"])(Object(_vaadin_grid_a11y_mixin_js__WEBPACK_IMPORTED_MODULE_3__["A11yMixin"])(Object(_vaadin_grid_filter_mixin_js__WEBPACK_IMPORTED_MODULE_10__["FilterMixin"])(Object(_vaadin_grid_column_reordering_mixin_js__WEBPACK_IMPORTED_MODULE_18__["ColumnReorderingMixin"])(Object(_vaadin_grid_column_resizing_mixin_js__WEBPACK_IMPORTED_MODULE_6__["ColumnResizingMixin"])(Object(_vaadin_grid_event_context_mixin_js__WEBPACK_IMPORTED_MODULE_9__["EventContextMixin"])(Object(_vaadin_grid_drag_and_drop_mixin_js__WEBPACK_IMPORTED_MODULE_16__["DragAndDropMixin"])(Object(_vaadin_grid_styling_mixin_js__WEBPACK_IMPORTED_MODULE_15__["StylingMixin"])(_vaadin_grid_scroller_js__WEBPACK_IMPORTED_MODULE_2__["ScrollerElement"])))))))))))))))))));

    customElements.define(GridElement.is, GridElement);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-material-styles/color.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-material-styles/color.js ***!
    \**************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesVaadinVaadinMaterialStylesColorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./version.js */
    "./node_modules/@vaadin/vaadin-material-styles/version.js");
    /* harmony import */


    var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/elements/custom-style.js */
    "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
    /* harmony import */


    var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/polymer/lib/elements/dom-module.js */
    "./node_modules/@polymer/polymer/lib/elements/dom-module.js");

    var $_documentContainer = document.createElement('template');
    $_documentContainer.innerHTML = "<dom-module id=\"material-color-light\">\n  <template>\n    <style>\n      :host,\n      #host-fix {\n        /* Text colors */\n        --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));\n        --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));\n        --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));\n\n        /* Primary colors */\n        --material-primary-color: var(--primary-color, #6200ee);\n        --material-primary-contrast-color: var(--dark-theme-base-color, #fff);\n        --material-primary-text-color: var(--material-primary-color);\n\n        /* Error colors */\n        --material-error-color: var(--error-color, #b00020);\n        --material-error-text-color: var(--material-error-color);\n\n        /* Background colors */\n        --material-background-color: var(--light-theme-background-color, #fff);\n        --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);\n        --material-disabled-color: rgba(0, 0, 0, 0.26);\n\n        /* Divider colors */\n        --material-divider-color: rgba(0, 0, 0, 0.12);\n\n        /* Undocumented internal properties (prefixed with three dashes) */\n\n        /* Text field tweaks */\n        --_material-text-field-input-line-background-color: initial;\n        --_material-text-field-input-line-opacity: initial;\n        --_material-text-field-input-line-hover-opacity: initial;\n        --_material-text-field-focused-label-opacity: initial;\n\n        /* Button tweaks */\n        --_material-button-raised-background-color: initial;\n        --_material-button-outline-color: initial;\n\n        /* Grid tweaks */\n        --_material-grid-row-hover-background-color: initial;\n\n        /* Split layout tweaks */\n        --_material-split-layout-splitter-background-color: initial;\n\n        background-color: var(--material-background-color);\n        color: var(--material-body-text-color);\n      }\n\n      [theme~=\"dark\"] {\n        /* Text colors */\n        --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));\n        --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));\n        --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));\n\n        /* Primary colors */\n        --material-primary-color: var(--light-primary-color, #7e3ff2);\n        --material-primary-text-color: #b794f6;\n\n        /* Error colors */\n        --material-error-color: var(--error-color, #de2839);\n        --material-error-text-color: var(--material-error-color);\n\n        /* Background colors */\n        --material-background-color: var(--dark-theme-background-color, #303030);\n        --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);\n        --material-disabled-color: rgba(255, 255, 255, 0.3);\n\n        /* Divider colors */\n        --material-divider-color: rgba(255, 255, 255, 0.12);\n\n        /* Undocumented internal properties (prefixed with three dashes) */\n\n        /* Text field tweaks */\n        --_material-text-field-input-line-background-color: #fff;\n        --_material-text-field-input-line-opacity: 0.7;\n        --_material-text-field-input-line-hover-opacity: 1;\n        --_material-text-field-focused-label-opacity: 1;\n\n        /* Button tweaks */\n        --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);\n        --_material-button-outline-color: rgba(255, 255, 255, 0.2);\n\n        /* Grid tweaks */\n        --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);\n        --_material-grid-row-selected-overlay-opacity: 0.16;\n\n        /* Split layout tweaks */\n        --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);\n\n        background-color: var(--material-background-color);\n        color: var(--material-body-text-color);\n      }\n\n      a {\n        color: inherit;\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"material-color-dark\">\n  <template>\n    <style>\n      :host,\n      #host-fix {\n        /* Text colors */\n        --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));\n        --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));\n        --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));\n\n        /* Primary colors */\n        --material-primary-color: var(--light-primary-color, #7e3ff2);\n        --material-primary-text-color: #b794f6;\n\n        /* Error colors */\n        --material-error-color: var(--error-color, #de2839);\n        --material-error-text-color: var(--material-error-color);\n\n        /* Background colors */\n        --material-background-color: var(--dark-theme-background-color, #303030);\n        --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);\n        --material-disabled-color: rgba(255, 255, 255, 0.3);\n\n        /* Divider colors */\n        --material-divider-color: rgba(255, 255, 255, 0.12);\n\n        /* Undocumented internal properties (prefixed with three dashes) */\n\n        /* Text field tweaks */\n        --_material-text-field-input-line-background-color: #fff;\n        --_material-text-field-input-line-opacity: 0.7;\n        --_material-text-field-input-line-hover-opacity: 1;\n        --_material-text-field-focused-label-opacity: 1;\n\n        /* Button tweaks */\n        --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);\n        --_material-button-outline-color: rgba(255, 255, 255, 0.2);\n\n        /* Grid tweaks */\n        --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);\n        --_material-grid-row-selected-overlay-opacity: 0.16;\n\n        /* Split layout tweaks */\n        --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);\n\n        background-color: var(--material-background-color);\n        color: var(--material-body-text-color);\n      }\n    </style>\n  </template>\n</dom-module><custom-style>\n  <style>\n    :root {\n      /* Text colors */\n      --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));\n      --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));\n      --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));\n\n      /* Primary colors */\n      --material-primary-color: var(--primary-color, #6200ee);\n      --material-primary-contrast-color: var(--dark-theme-base-color, #fff);\n      --material-primary-text-color: var(--material-primary-color);\n\n      /* Error colors */\n      --material-error-color: var(--error-color, #b00020);\n      --material-error-text-color: var(--material-error-color);\n\n      /* Background colors */\n      --material-background-color: var(--light-theme-background-color, #fff);\n      --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);\n      --material-disabled-color: rgba(0, 0, 0, 0.26);\n\n      /* Divider colors */\n      --material-divider-color: rgba(0, 0, 0, 0.12);\n    }\n  </style>\n</custom-style>";
    document.head.appendChild($_documentContainer.content);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-material-styles/font-icons.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-material-styles/font-icons.js ***!
    \*******************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesVaadinVaadinMaterialStylesFontIconsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/lib/elements/custom-style.js */
    "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
    /* harmony import */


    var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./version.js */
    "./node_modules/@vaadin/vaadin-material-styles/version.js");

    var $_documentContainer = document.createElement('template');
    $_documentContainer.innerHTML = "<custom-style>\n  <style>\n    @font-face {\n      font-family: 'material-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAjAAAsAAAAADZQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAARAAAAFZSk09oY21hcAAAAYgAAACNAAACNOuCXH5nbHlmAAACGAAABDwAAAXsdK8UGGhlYWQAAAZUAAAAMAAAADYX9T2IaGhlYQAABoQAAAAgAAAAJBGyCLpobXR4AAAGpAAAABQAAABAjXoAAGxvY2EAAAa4AAAAIgAAACIKMgjUbWF4cAAABtwAAAAfAAAAIAEeAFRuYW1lAAAG/AAAATQAAAJe3l764XBvc3QAAAgwAAAAjwAAAMqJEjDWeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYOS4wTiBgZWBgYGfbQIDA2MAhGZpYChlymZgYGJgZWbACgLSXFMYHF4xvuJnv/CvgOEG+wXG6UBhRpAcAMyUDJN4nO2R2Q0DIQxEHwt7HzSSGlJQvlJkqqGJjYdJGbH0PPJgELKBEcjBIyiQ3iQUr3BT9zNb9wvP3lPkt3rfkZNy1KXnIXpLvDgxs7DGvZ2Dk4saxxP/OHr+/KqqCZo+08EgzUa7acVoym002lubDNLZIF0M0tUg3Yz22XaD9DD6XTsN0ssgrYb6BZEQJiUAAAB4nH1UbUhbVxg+77259yZMJbfko7DhbnJtrjYuWfNxsx9qBFu32ljHWqWO6VD6MW1G4uYPsfSDdQOHXOuPrtYfKytKJziYEJkQZLQ/BqHCpsUfghZX1jHBjBUWWqfes51zE1dloyfJyXvOed5znvO+z3sQINKEeb4WmRECBURZBAGEeU1fyOgPhliJlTT9geneVpTxD23/jPbinSAGRYgADGuMP8P4CILgGd9W1HRPXyDeiEEIL5pvCnH0MnqVeMhh2e4iP9ldAnbRVgpBV6AGwmLIB6xLdAnzpzPb+zOn1fdU8uVr8/9/3eVr+fEMacZg1+LGBmfLczKHuNuIQ8gCggUU9lP8/hDjN01pcBluk8sQK4/jOa6P4kCxEOI8p+kTzCkNq6Z1YukTGswVcLUFHNnOCeyaBvexqjGnuD4Nh3GYWIVYxLkV9FJ+PwqluwpxcqK+QGJidIyfDLkm0hnW8wXiziL09xskPma0Hx1CEbKPW+CRwFudDuR0SBEVRVSr4kGKh3UrPlA81kgNRFTJWQpOh1UoAYFnZZoC07dz6RRejx0/HgN7Kg0j6RTYY01NMbyeSs+NXR9+WB2NVj8cvg71z+2eG0zxMVwjmAksO53G3elpnKVOYJtOw430NNhiTRsb//HDacPmbPoE/uEC0OsbMRtn12jGLQwzCznIsWu4CHJ77vgKkl50RzkcDMti0DQ1939M8izPUSG8mPJmWSZDEkSaieivy7IqzKMSdABVoTcROsDLEj1N3RehuQLebjOiGQxEFF52Kx7FEw5FLKCGQ0bEZbegqEGJkuUZMh0MOB1Oh93G/7b4GOdy63i0veruJSwMmlcGN1vLvQdHOs8kzndOFxW3xhoqK8HUiX9SvRV09mLy91+eQdGfWTjXHv1R/xJfktwGqL2x+yx8/McoWD6AjcFnZYPc153nE2c6Ryq85Sl4zdsQay0u1jNwKHmRzh70qtl3u85i7clXOAsfwVW+0tvQ2Ooy9ERqYZsvQfuQQu5biPW/gS4oyUOFpFIdOaiMeKIiN+1tdBygKyGKMU09XV3CMy0tcHRpFbKrS3C0pQXPLK0+HejtqTt8uK6nF6w71sA79XXlFRXldfXjOwZf0tGGJ5eX8WRbR0cbNC8vQ3Nbx1bpXkf8hFqstMfVMNCuGiO6AhFYyRTjVjYHmFm06y3ykQGhKxn1YN3JJkmwTCfkfOWEjMqhyQOXyP+auJaXcVU0WkUkPTYzdutR5XzFRLL3Sn8ifsfn9/vuxBO5RPcJ/D0zyzUn9mqfCE78pve7QKgAox6v+05SLKXF0M7SQbiVIW+enaEkyod+djTnMoIdNqINInkByStyzd3dNXorNXT18v3oFxf6j7xlHNHP2YygR6u74noXTuJFo8QeTw5+3vh2MDDTZz154spnN/PcjXx8kvyw7gh+hJMwDDlc9A+3XcsFeJxjYGRgYADi5PtWjvH8Nl8ZuDkTgCIM16srKhH0v0zO++wXgFwOBiaQKAA6hAuJeJxjYGRgYL/wr4CBgcuKgeH/f877DEARFCAAAIewBYJ4nGNgYGDgTCAOc1lhigEAvMIGAwAAAAAAGAAwAGIAdgCKAJ4AwAEkATIBcAHoAlACXgKsAvYAAHicY2BkYGAQYPBgYGEAASYg5gJCBob/YD4DABFeAXMAeJx9kL1uwjAUhU8gUJVIVaWqnRgsVepSEX5G1BkkRgb2EBwIcuLIMUi8QR+kT9CH6NgH6VP0xHiBAVtyvvvdc50oAB7xgwDNCvDgzma1cMfqzG3Ss+eQ/Oq5gwhjz136D889vGPhOcITDrwhCO9p+vj03GL+y3Ob/ttzSP713MEL/jx30Q/guYdV0Pcc4S0wRWKlyRM1yFNd1ku5PajkSl5WK2nqXJdiHI8uG3NZSkOzEeuTqI/bibWZyIwuxEyXViqlRWX0XqY23llbTYfDzPs41QUKJLCQMMhJCgM+U2iUqLGk3/JfKHbMzeSt3sr5mqapBf9/jNHNiTl96XrnzIZTa5x41jjyiya0FhnrjBnNuwRmbrZJK25NU7nenialj7FzUxWmGHJnV/nYvb34BzHZcLZ4nG2MQQ6CMBREO0ARtSjuvASHqu1XCD+0+YKE20tD3DmLmbxk8lSm9tzV/zTIkKOARokDKhxxwhkGNS64osFNXaxIWFoflnGx4s2Oc0xQOcs0eivadeQGs/VHwtgyPaf6B9K/ukk7pnTj4IbKS4jJp2lziaGVWt+/7YPJ5xsUke1aCnGwvpxjGqW+tN8xfgA=) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --material-icons-arrow-downward: \"\\ea01\";\n      --material-icons-arrow-upward: \"\\ea02\";\n      --material-icons-calendar: \"\\ea03\";\n      --material-icons-check: \"\\ea04\";\n      --material-icons-chevron-left: \"\\ea05\";\n      --material-icons-chevron-right: \"\\ea06\";\n      --material-icons-clear: \"\\ea07\";\n      --material-icons-clock: \"\\ea08\";\n      --material-icons-dropdown: \"\\ea09\";\n      --material-icons-error: \"\\ea0a\";\n      --material-icons-eye-disabled: \"\\ea0b\";\n      --material-icons-eye: \"\\ea0c\";\n      --material-icons-play: \"\\ea0d\";\n      --material-icons-reload: \"\\ea0e\";\n      --material-icons-upload: \"\\ea0f\";\n    }\n  </style>\n</custom-style>";
    document.head.appendChild($_documentContainer.content);
    /* NOTICE: Generated with 'gulp icons' */

    /*
      FIXME(polymer-modulizer): the above comments were extracted
      from HTML and may be out of place here. Review them and
      then delete this comment!
    */

    ;
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-material-styles/version.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-material-styles/version.js ***!
    \****************************************************************/

  /*! exports provided: Material */

  /***/
  function node_modulesVaadinVaadinMaterialStylesVersionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Material", function () {
      return Material;
    });

    var Material = /*#__PURE__*/function (_HTMLElement) {
      _inherits(Material, _HTMLElement);

      var _super49 = _createSuper(Material);

      function Material() {
        _classCallCheck(this, Material);

        return _super49.apply(this, arguments);
      }

      _createClass(Material, null, [{
        key: "version",
        get: function get() {
          return '1.3.2';
        }
      }]);

      return Material;
    }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

    customElements.define('vaadin-material-styles', Material);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js ***!
    \*******************************************************************************/

  /*! exports provided: TextFieldMixin */

  /***/
  function node_modulesVaadinVaadinTextFieldSrcVaadinTextFieldMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextFieldMixin", function () {
      return TextFieldMixin;
    });
    /* harmony import */


    var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/async.js */
    "./node_modules/@polymer/polymer/lib/utils/async.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/debounce.js */
    "./node_modules/@polymer/polymer/lib/utils/debounce.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
    /**
    @license
    Copyright (c) 2017 Vaadin Ltd.
    This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
    */


    var $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"](_templateObject34());

    document.head.appendChild($_documentContainer.content);
    var HOST_PROPS = {
      "default": ['list', 'autofocus', 'pattern', 'autocapitalize', 'autocorrect', 'maxlength', 'minlength', 'name', 'placeholder', 'autocomplete', 'title', 'disabled', 'readonly', 'required'],
      accessible: ['invalid']
    };
    var PROP_TYPE = {
      DEFAULT: 'default',
      ACCESSIBLE: 'accessible'
    };
    /**
     * @polymerMixin
     */

    var TextFieldMixin = function TextFieldMixin(subclass) {
      return /*#__PURE__*/function (_subclass) {
        _inherits(VaadinTextFieldMixin, _subclass);

        var _super50 = _createSuper(VaadinTextFieldMixin);

        function VaadinTextFieldMixin() {
          _classCallCheck(this, VaadinTextFieldMixin);

          return _super50.apply(this, arguments);
        }

        _createClass(VaadinTextFieldMixin, [{
          key: "_createConstraintsObserver",

          /** @protected */
          value: function _createConstraintsObserver() {
            // This complex observer needs to be added dynamically here (instead of defining it above in the `get observers()`)
            // so that it runs after complex observers of inheriting classes. Otherwise e.g. `_stepOrMinChanged()` observer of
            // vaadin-number-field would run after this and the `min` and `step` properties would not yet be propagated to
            // the `inputElement` when this runs.
            this._createMethodObserver('_constraintsChanged(required, minlength, maxlength, pattern)');
          }
          /** @private */

        }, {
          key: "_onInput",
          value: function _onInput(e) {
            var _this138 = this;

            if (this.__preventInput) {
              e.stopImmediatePropagation();
              this.__preventInput = false;
              return;
            }

            if (this.preventInvalidInput) {
              var input = this.inputElement;

              if (input.value.length > 0 && !this.checkValidity()) {
                input.value = this.value || ''; // add input-prevented attribute for 200ms

                this.setAttribute('input-prevented', '');
                this._inputDebouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(this._inputDebouncer, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["timeOut"].after(200), function () {
                  _this138.removeAttribute('input-prevented');
                });
                return;
              }
            }

            if (!e.__fromClearButton) {
              this.__userInput = true;
            }

            this.value = e.target.value;
            this.__userInput = false;
          } // NOTE(yuriy): Workaround needed for IE11 and Edge for proper displaying
          // of the clear button instead of setting display property for it depending on state.

          /** @private */

        }, {
          key: "_stateChanged",
          value: function _stateChanged(disabled, readonly, clearButtonVisible, hasValue) {
            if (!disabled && !readonly && clearButtonVisible && hasValue) {
              this.$.clearButton.removeAttribute('hidden');
            } else {
              this.$.clearButton.setAttribute('hidden', true);
            }
          }
          /**
           * @param {!Event} e
           * @protected
           */

        }, {
          key: "_onChange",
          value: function _onChange(e) {
            if (this._valueClearing) {
              return;
            } // In the Shadow DOM, the `change` event is not leaked into the
            // ancestor tree, so we must do this manually.


            var changeEvent = new CustomEvent('change', {
              detail: {
                sourceEvent: e
              },
              bubbles: e.bubbles,
              cancelable: e.cancelable
            });
            this.dispatchEvent(changeEvent);
          }
          /**
           * @param {unknown} newVal
           * @param {unknown} oldVal
           * @protected
           */

        }, {
          key: "_valueChanged",
          value: function _valueChanged(newVal, oldVal) {
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

        }, {
          key: "_labelChanged",
          value: function _labelChanged(label) {
            this._setOrToggleAttribute('has-label', !!label, this);
          }
          /** @private */

        }, {
          key: "_helperTextChanged",
          value: function _helperTextChanged(helperText) {
            this._setOrToggleAttribute('has-helper', !!helperText, this);
          }
          /** @private */

        }, {
          key: "_errorMessageChanged",
          value: function _errorMessageChanged(errorMessage) {
            this._setOrToggleAttribute('has-error-message', !!errorMessage, this);
          }
          /** @private */

        }, {
          key: "_onHelperSlotChange",
          value: function _onHelperSlotChange() {
            var slottedNodes = this.shadowRoot.querySelector("[name=\"helper\"]").assignedNodes({
              flatten: true
            }); // Only has slotted helper if not a text node
            // Text nodes are added by the helperText prop and not the helper slot
            // The filter is added due to shady DOM triggering this callback on helperText prop change

            this._hasSlottedHelper = slottedNodes.filter(function (node) {
              return node.nodeType !== 3;
            }).length;

            if (this._hasSlottedHelper) {
              this.setAttribute('has-helper', 'slotted');
            } else if (this.helperText === '' || this.helperText === null) {
              this.removeAttribute('has-helper');
            }
          }
          /** @private */

        }, {
          key: "_onSlotChange",
          value: function _onSlotChange() {
            var _this139 = this;

            var slotted = this.querySelector("".concat(this._slottedTagName, "[slot=\"").concat(this._slottedTagName, "\"]"));

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

            Object.keys(PROP_TYPE).map(function (key) {
              return PROP_TYPE[key];
            }).forEach(function (type) {
              return _this139._propagateHostAttributes(HOST_PROPS[type].map(function (attr) {
                return _this139[attr];
              }), type);
            });
          }
          /** @private */

        }, {
          key: "_hostPropsChanged",
          value: function _hostPropsChanged() {
            for (var _len = arguments.length, attributesValues = new Array(_len), _key = 0; _key < _len; _key++) {
              attributesValues[_key] = arguments[_key];
            }

            this._propagateHostAttributes(attributesValues, PROP_TYPE.DEFAULT);
          }
          /** @private */

        }, {
          key: "_hostAccessiblePropsChanged",
          value: function _hostAccessiblePropsChanged() {
            for (var _len2 = arguments.length, attributesValues = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              attributesValues[_key2] = arguments[_key2];
            }

            this._propagateHostAttributes(attributesValues, PROP_TYPE.ACCESSIBLE);
          }
          /** @private */

        }, {
          key: "_validateSlottedValue",
          value: function _validateSlottedValue(slotted) {
            if (slotted.value !== this.value) {
              console.warn('Please define value on the vaadin-text-field component!');
              slotted.value = '';
            }
          }
          /** @private */

        }, {
          key: "_propagateHostAttributes",
          value: function _propagateHostAttributes(attributesValues, type) {
            var _this140 = this;

            var input = this.inputElement;
            var attributeNames = HOST_PROPS[type];

            if (type === PROP_TYPE.ACCESSIBLE) {
              attributeNames.forEach(function (attr, index) {
                _this140._setOrToggleAttribute(attr, attributesValues[index], input);

                _this140._setOrToggleAttribute("aria-".concat(attr), attributesValues[index] ? 'true' : false, input);
              });
            } else {
              attributeNames.forEach(function (attr, index) {
                _this140._setOrToggleAttribute(attr, attributesValues[index], input);
              });
            }
          }
          /** @private */

        }, {
          key: "_setOrToggleAttribute",
          value: function _setOrToggleAttribute(name, value, node) {
            if (!name || !node) {
              return;
            }

            if (value) {
              node.setAttribute(name, typeof value === 'boolean' ? '' : value);
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

        }, {
          key: "_constraintsChanged",
          value: function _constraintsChanged(required, minlength, maxlength, pattern) {
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

        }, {
          key: "checkValidity",
          value: function checkValidity() {
            // Note (Yuriy): `__forceCheckValidity` is used in containing components (i.e. `vaadin-date-picker`) in order
            // to force the checkValidity instead of returning the previous invalid state.
            if (this.required || this.pattern || this.maxlength || this.minlength || this.__forceCheckValidity) {
              return this.inputElement.checkValidity();
            } else {
              return !this.invalid;
            }
          }
          /** @private */

        }, {
          key: "_addInputListeners",
          value: function _addInputListeners(node) {
            node.addEventListener('input', this._boundOnInput);
            node.addEventListener('change', this._boundOnChange);
            node.addEventListener('blur', this._boundOnBlur);
            node.addEventListener('focus', this._boundOnFocus);
            node.addEventListener('paste', this._boundOnPaste);
            node.addEventListener('drop', this._boundOnDrop);
            node.addEventListener('beforeinput', this._boundOnBeforeInput);
          }
          /** @private */

        }, {
          key: "_removeInputListeners",
          value: function _removeInputListeners(node) {
            node.removeEventListener('input', this._boundOnInput);
            node.removeEventListener('change', this._boundOnChange);
            node.removeEventListener('blur', this._boundOnBlur);
            node.removeEventListener('focus', this._boundOnFocus);
            node.removeEventListener('paste', this._boundOnPaste);
            node.removeEventListener('drop', this._boundOnDrop);
            node.removeEventListener('beforeinput', this._boundOnBeforeInput);
          }
          /** @protected */

        }, {
          key: "ready",
          value: function ready() {
            var _this141 = this;

            _get(_getPrototypeOf(VaadinTextFieldMixin.prototype), "ready", this).call(this);

            this._createConstraintsObserver();

            this._boundOnInput = this._onInput.bind(this);
            this._boundOnChange = this._onChange.bind(this);
            this._boundOnBlur = this._onBlur.bind(this);
            this._boundOnFocus = this._onFocus.bind(this);
            this._boundOnPaste = this._onPaste.bind(this);
            this._boundOnDrop = this._onDrop.bind(this);
            this._boundOnBeforeInput = this._onBeforeInput.bind(this);
            var defaultInput = this.shadowRoot.querySelector('[part="value"]');
            this._slottedInput = this.querySelector("".concat(this._slottedTagName, "[slot=\"").concat(this._slottedTagName, "\"]"));

            this._addInputListeners(defaultInput);

            this._addIEListeners(defaultInput);

            if (this._slottedInput) {
              this._addIEListeners(this._slottedInput);

              this._addInputListeners(this._slottedInput);
            }

            this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener('slotchange', this._onSlotChange.bind(this));

            this._onHelperSlotChange();

            this.shadowRoot.querySelector('[name="helper"]').addEventListener('slotchange', this._onHelperSlotChange.bind(this));

            if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
              this.updateStyles();
            }

            this.$.clearButton.addEventListener('mousedown', function () {
              return _this141._valueClearing = true;
            });
            this.$.clearButton.addEventListener('mouseleave', function () {
              return _this141._valueClearing = false;
            });
            this.$.clearButton.addEventListener('click', this._onClearButtonClick.bind(this));
            this.addEventListener('keydown', this._onKeyDown.bind(this));
            var uniqueId = TextFieldMixin._uniqueId = 1 + TextFieldMixin._uniqueId || 0;
            this._errorId = "".concat(this.constructor.is, "-error-").concat(uniqueId);
            this._labelId = "".concat(this.constructor.is, "-label-").concat(uniqueId);
            this._helperTextId = "".concat(this.constructor.is, "-helper-").concat(uniqueId);
            this._inputId = "".concat(this.constructor.is, "-input-").concat(uniqueId); // Lumo theme defines a max-height transition for the "error-message"
            // part on invalid state change.

            this.shadowRoot.querySelector('[part="error-message"]').addEventListener('transitionend', function () {
              _this141.__observeOffsetHeight();
            });
          }
          /**
           * Returns true if `value` is valid.
           * `<iron-form>` uses this to check the validity for all its elements.
           *
           * @return {boolean} True if the value is valid.
           */

        }, {
          key: "validate",
          value: function validate() {
            return !(this.invalid = !this.checkValidity());
          }
        }, {
          key: "clear",
          value: function clear() {
            this.value = '';
          }
          /** @private */

        }, {
          key: "_onBlur",
          value: function _onBlur() {
            this.validate();
          }
          /** @private */

        }, {
          key: "_onFocus",
          value: function _onFocus() {
            var _this142 = this;

            if (this.autoselect) {
              this.inputElement.select(); // iOS 9 workaround: https://stackoverflow.com/a/7436574

              setTimeout(function () {
                try {
                  _this142.inputElement.setSelectionRange(0, 9999);
                } catch (e) {// The workaround may cause errors on different input types.
                  // Needs to be suppressed. See https://github.com/vaadin/flow/issues/6070
                }
              });
            }
          }
          /** @private */

        }, {
          key: "_onClearButtonClick",
          value: function _onClearButtonClick(e) {
            e.preventDefault(); // NOTE(yuriy): This line won't affect focus on the host. Cannot be properly tested.

            this.inputElement.focus();
            this.clear();
            this._valueClearing = false;

            if (navigator.userAgent.match(/Trident/)) {
              // Disable IE input" event prevention here, we want the input event from
              // below to propagate normally.
              this.__preventInput = false;
            }

            var inputEvent = new Event('input', {
              bubbles: true,
              composed: true
            });
            inputEvent.__fromClearButton = true;
            var changeEvent = new Event('change', {
              bubbles: !this._slottedInput
            });
            changeEvent.__fromClearButton = true;
            this.inputElement.dispatchEvent(inputEvent);
            this.inputElement.dispatchEvent(changeEvent);
          }
          /**
           * @param {!KeyboardEvent} e
           * @protected
           */

        }, {
          key: "_onKeyDown",
          value: function _onKeyDown(e) {
            if (e.keyCode === 27 && this.clearButtonVisible) {
              var dispatchChange = !!this.value;
              this.clear();
              dispatchChange && this.inputElement.dispatchEvent(new Event('change', {
                bubbles: !this._slottedInput
              }));
            }

            if (this._enabledCharPattern && !this.__shouldAcceptKey(e)) {
              e.preventDefault();
            }
          }
          /** @private */

        }, {
          key: "__shouldAcceptKey",
          value: function __shouldAcceptKey(event) {
            return event.metaKey || event.ctrlKey || !event.key // allow typing anything if event.key is not supported
            || event.key.length !== 1 // allow "Backspace", "ArrowLeft" etc.
            || this.__enabledCharRegExp.test(event.key);
          }
          /** @private */

        }, {
          key: "_onPaste",
          value: function _onPaste(e) {
            if (this._enabledCharPattern) {
              var pastedText = (e.clipboardData || window.clipboardData).getData('text');

              if (!this.__enabledTextRegExp.test(pastedText)) {
                e.preventDefault();
              }
            }
          }
          /** @private */

        }, {
          key: "_onDrop",
          value: function _onDrop(e) {
            if (this._enabledCharPattern) {
              var draggedText = e.dataTransfer.getData('text');

              if (!this.__enabledTextRegExp.test(draggedText)) {
                e.preventDefault();
              }
            }
          }
          /** @private */

        }, {
          key: "_onBeforeInput",
          value: function _onBeforeInput(e) {
            // The `beforeinput` event covers all the cases for `_enabledCharPattern`: keyboard, pasting and dropping,
            // but it is still experimental technology so we can't rely on it. It's used here just as an additional check,
            // because it seems to be the only way to detect and prevent specific keys on mobile devices. See issue #429.
            if (this._enabledCharPattern && e.data && !this.__enabledTextRegExp.test(e.data)) {
              e.preventDefault();
            }
          }
          /** @private */

        }, {
          key: "__enabledCharPatternChanged",
          value: function __enabledCharPatternChanged(_enabledCharPattern) {
            this.__enabledCharRegExp = _enabledCharPattern && new RegExp('^' + _enabledCharPattern + '$');
            this.__enabledTextRegExp = _enabledCharPattern && new RegExp('^' + _enabledCharPattern + '*$');
          }
          /** @private */

        }, {
          key: "_addIEListeners",
          value: function _addIEListeners(node) {
            var _this143 = this;

            /* istanbul ignore if */
            if (navigator.userAgent.match(/Trident/)) {
              // IE11 dispatches `input` event in following cases:
              // - focus or blur, when placeholder attribute is set
              // - placeholder attribute value changed
              // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101220/
              this._shouldPreventInput = function () {
                _this143.__preventInput = true;
                requestAnimationFrame(function () {
                  _this143.__preventInput = false;
                });
              };

              node.addEventListener('focusin', this._shouldPreventInput);
              node.addEventListener('focusout', this._shouldPreventInput);

              this._createPropertyObserver('placeholder', this._shouldPreventInput);
            }
          }
          /** @private */

        }, {
          key: "_removeIEListeners",
          value: function _removeIEListeners(node) {
            /* istanbul ignore if */
            if (navigator.userAgent.match(/Trident/)) {
              node.removeEventListener('focusin', this._shouldPreventInput);
              node.removeEventListener('focusout', this._shouldPreventInput);
            }
          }
          /** @private */

        }, {
          key: "_getActiveErrorId",
          value: function _getActiveErrorId(invalid, errorMessage, errorId, helperText, helperTextId, hasSlottedHelper) {
            var ids = [];

            if (helperText || hasSlottedHelper) {
              ids.push(helperTextId);
            }

            if (errorMessage && invalid) {
              ids.push(errorId);
            }

            this._setOrToggleAttribute('aria-describedby', ids.join(' '), this.focusElement);
          }
          /** @private */

        }, {
          key: "_getActiveLabelId",
          value: function _getActiveLabelId(label, _labelId, _inputId) {
            var ids = _inputId;

            if (label) {
              ids = "".concat(_labelId, " ").concat(_inputId);
            }

            this.focusElement.setAttribute('aria-labelledby', ids);
          }
          /** @private */

        }, {
          key: "_getErrorMessageAriaHidden",
          value: function _getErrorMessageAriaHidden(invalid, errorMessage, errorId) {
            return (!(errorMessage && invalid ? errorId : undefined)).toString();
          }
          /** @private */

        }, {
          key: "_dispatchIronResizeEventIfNeeded",
          value: function _dispatchIronResizeEventIfNeeded(sizePropertyName, value) {
            var previousSizePropertyName = '__previous' + sizePropertyName;

            if (this[previousSizePropertyName] !== undefined && this[previousSizePropertyName] !== value) {
              this.dispatchEvent(new CustomEvent('iron-resize', {
                bubbles: true
              }));
            }

            this[previousSizePropertyName] = value;
          }
          /** @private */

        }, {
          key: "__observeOffsetHeight",
          value: function __observeOffsetHeight() {
            var _this144 = this;

            this.__observeOffsetHeightDebouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(this.__observeOffsetHeightDebouncer, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["animationFrame"], function () {
              _this144._dispatchIronResizeEventIfNeeded('Height', _this144.offsetHeight);
            });
          }
          /**
           * @param {string} prop
           * @param {string} oldVal
           * @param {string} newVal
           * @protected
           */

        }, {
          key: "attributeChangedCallback",
          value: function attributeChangedCallback(prop, oldVal, newVal) {
            _get(_getPrototypeOf(VaadinTextFieldMixin.prototype), "attributeChangedCallback", this).call(this, prop, oldVal, newVal); // Needed until Edge has CSS Custom Properties (present in Edge Preview)

            /* istanbul ignore if */


            if (!(window.ShadyCSS && window.ShadyCSS.nativeCss) && /^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)) {
              this.updateStyles();
            } // Safari has an issue with repainting shadow root element styles when a host attribute changes.
            // Need this workaround (toggle any inline css property on and off) until the issue gets fixed.


            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            /* istanbul ignore if */

            if (isSafari && this.root) {
              var WEBKIT_PROPERTY = '-webkit-backface-visibility';
              this.root.querySelectorAll('*').forEach(function (el) {
                el.style[WEBKIT_PROPERTY] = 'visible';
                el.style[WEBKIT_PROPERTY] = '';
              });
            }
          } // Workaround for https://github.com/Polymer/polymer/issues/5259

        }, {
          key: "focusElement",

          /**
           * @return {HTMLElement | undefined}
           * @protected
           */
          get: function get() {
            if (!this.shadowRoot) {
              return;
            }

            var slotted = this.querySelector("".concat(this._slottedTagName, "[slot=\"").concat(this._slottedTagName, "\"]"));

            if (slotted) {
              return slotted;
            }

            return this.shadowRoot.querySelector('[part="value"]');
          }
          /**
           * @return {HTMLElement | undefined}}
           * @protected
           */

        }, {
          key: "inputElement",
          get: function get() {
            return this.focusElement;
          }
          /**
           * @return {string}
           * @protected
           */

        }, {
          key: "_slottedTagName",
          get: function get() {
            return 'input';
          }
        }, {
          key: "__data",
          get: function get() {
            return this.__dataValue || {};
          },
          set: function set(value) {
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

        }], [{
          key: "properties",
          get: function get() {
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
                value: function value() {
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
        }, {
          key: "observers",
          get: function get() {
            return ['_stateChanged(disabled, readonly, clearButtonVisible, hasValue)', '_hostPropsChanged(' + HOST_PROPS["default"].join(', ') + ')', '_hostAccessiblePropsChanged(' + HOST_PROPS.accessible.join(', ') + ')', '_getActiveErrorId(invalid, errorMessage, _errorId, helperText, _helperTextId, _hasSlottedHelper)', '_getActiveLabelId(label, _labelId, _inputId)', '__observeOffsetHeight(errorMessage, invalid, label, helperText)', '__enabledCharPatternChanged(_enabledCharPattern)'];
          }
        }]);

        return VaadinTextFieldMixin;
      }(subclass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js ***!
    \*************************************************************************/

  /*! exports provided: TextFieldElement */

  /***/
  function node_modulesVaadinVaadinTextFieldSrcVaadinTextFieldJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextFieldElement", function () {
      return TextFieldElement;
    });
    /* harmony import */


    var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/polymer-element.js */
    "./node_modules/@polymer/polymer/polymer-element.js");
    /* harmony import */


    var _vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./vaadin-text-field-mixin.js */
    "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js");
    /* harmony import */


    var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */
    "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
    /* harmony import */


    var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */
    "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
    /* harmony import */


    var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */
    "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
    /* harmony import */


    var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @polymer/polymer/lib/utils/html-tag.js */
    "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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


    var TextFieldElement = /*#__PURE__*/function (_Object9) {
      _inherits(TextFieldElement, _Object9);

      var _super51 = _createSuper(TextFieldElement);

      function TextFieldElement() {
        _classCallCheck(this, TextFieldElement);

        return _super51.apply(this, arguments);
      }

      _createClass(TextFieldElement, null, [{
        key: "template",
        get: function get() {
          return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"](_templateObject35());
        }
      }, {
        key: "is",
        get: function get() {
          return 'vaadin-text-field';
        }
      }, {
        key: "version",
        get: function get() {
          return '2.8.2';
        }
      }, {
        key: "properties",
        get: function get() {
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
      }]);

      return TextFieldElement;
    }(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ElementMixin"])(Object(_vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__["TextFieldMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))));

    customElements.define(TextFieldElement.is, TextFieldElement);
    /***/
  },

  /***/
  "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js ***!
    \*****************************************************************************/

  /*! exports provided: ThemableMixin */

  /***/
  function node_modulesVaadinVaadinThemableMixinVaadinThemableMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemableMixin", function () {
      return ThemableMixin;
    });
    /* harmony import */


    var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @polymer/polymer/lib/elements/dom-module.js */
    "./node_modules/@polymer/polymer/lib/elements/dom-module.js");
    /* harmony import */


    var _vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./vaadin-theme-property-mixin.js */
    "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
    /**
     * @polymerMixin
     * @mixes ThemePropertyMixin
     */


    var ThemableMixin = function ThemableMixin(superClass) {
      return /*#__PURE__*/function (_Object10) {
        _inherits(VaadinThemableMixin, _Object10);

        var _super52 = _createSuper(VaadinThemableMixin);

        function VaadinThemableMixin() {
          _classCallCheck(this, VaadinThemableMixin);

          return _super52.apply(this, arguments);
        }

        _createClass(VaadinThemableMixin, null, [{
          key: "finalize",

          /** @protected */
          value: function finalize() {
            var _this145 = this;

            _get(_getPrototypeOf(VaadinThemableMixin), "finalize", this).call(this);

            var template = this.prototype._template;
            var hasOwnTemplate = this.template && this.template.parentElement && this.template.parentElement.id === this.is;

            var inheritedTemplate = Object.getPrototypeOf(this.prototype)._template;

            if (inheritedTemplate && !hasOwnTemplate) {
              // The element doesn't define its own template -> include the theme modules from the inherited template
              Array.from(inheritedTemplate.content.querySelectorAll('style[include]')).forEach(function (s) {
                _this145._includeStyle(s.getAttribute('include'), template);
              });
            }

            this._includeMatchingThemes(template);
          }
          /** @private */

        }, {
          key: "_includeMatchingThemes",
          value: function _includeMatchingThemes(template) {
            var _this146 = this;

            var domModule = _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_0__["DomModule"];
            var modules = domModule.prototype.modules;
            var hasThemes = false;
            var defaultModuleName = this.is + '-default-theme';
            Object.keys(modules).sort(function (moduleNameA, moduleNameB) {
              var vaadinA = moduleNameA.indexOf('vaadin-') === 0;
              var vaadinB = moduleNameB.indexOf('vaadin-') === 0;
              var vaadinThemePrefixes = ['lumo-', 'material-'];
              var vaadinThemeA = vaadinThemePrefixes.filter(function (prefix) {
                return moduleNameA.indexOf(prefix) === 0;
              }).length > 0;
              var vaadinThemeB = vaadinThemePrefixes.filter(function (prefix) {
                return moduleNameB.indexOf(prefix) === 0;
              }).length > 0;

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
            }).forEach(function (moduleName) {
              if (moduleName !== defaultModuleName) {
                var themeFor = modules[moduleName].getAttribute('theme-for');

                if (themeFor) {
                  themeFor.split(' ').forEach(function (themeForToken) {
                    if (new RegExp('^' + themeForToken.split('*').join('.*') + '$').test(_this146.is)) {
                      hasThemes = true;

                      _this146._includeStyle(moduleName, template);
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

        }, {
          key: "_includeStyle",
          value: function _includeStyle(moduleName, template) {
            if (template && !template.content.querySelector("style[include=\"".concat(moduleName, "\"]"))) {
              var styleEl = document.createElement('style');
              styleEl.setAttribute('include', moduleName);
              template.content.appendChild(styleEl);
            }
          }
        }]);

        return VaadinThemableMixin;
      }(Object(_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemePropertyMixin"])(superClass));
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js ***!
    \***********************************************************************************/

  /*! exports provided: ThemePropertyMixin */

  /***/
  function node_modulesVaadinVaadinThemableMixinVaadinThemePropertyMixinJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemePropertyMixin", function () {
      return ThemePropertyMixin;
    });
    /**
     * @polymerMixin
     */


    var ThemePropertyMixin = function ThemePropertyMixin(superClass) {
      return /*#__PURE__*/function (_superClass18) {
        _inherits(VaadinThemePropertyMixin, _superClass18);

        var _super53 = _createSuper(VaadinThemePropertyMixin);

        function VaadinThemePropertyMixin() {
          _classCallCheck(this, VaadinThemePropertyMixin);

          return _super53.apply(this, arguments);
        }

        _createClass(VaadinThemePropertyMixin, [{
          key: "attributeChangedCallback",

          /** @protected */
          value: function attributeChangedCallback(name, oldValue, newValue) {
            _get(_getPrototypeOf(VaadinThemePropertyMixin.prototype), "attributeChangedCallback", this).call(this, name, oldValue, newValue);

            if (name === 'theme') {
              this._setTheme(newValue);
            }
          }
        }], [{
          key: "properties",
          get: function get() {
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
        }]);

        return VaadinThemePropertyMixin;
      }(superClass);
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics-collect.js":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics-collect.js ***!
    \*****************************************************************************************/

  /*! exports provided: usageStatistics */

  /***/
  function node_modulesVaadinVaadinUsageStatisticsVaadinUsageStatisticsCollectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "usageStatistics", function () {
      return usageStatistics;
    });
    /* harmony import */


    var _vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js */
    "./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js");
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

    var usageStatistics = function usageStatistics() {
      if (typeof _vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__["runIfDevelopmentMode"] === 'function') {
        return Object(_vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__["runIfDevelopmentMode"])(maybeGatherAndSendStats);
      }
    };
    /***/

  },

  /***/
  "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js ***!
    \*********************************************************************************/

  /*! exports provided: usageStatistics */

  /***/
  function node_modulesVaadinVaadinUsageStatisticsVaadinUsageStatisticsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _vaadin_usage_statistics_collect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./vaadin-usage-statistics-collect.js */
    "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics-collect.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "usageStatistics", function () {
      return _vaadin_usage_statistics_collect_js__WEBPACK_IMPORTED_MODULE_0__["usageStatistics"];
    });
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/intro.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/intro.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsIntroIntroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"avl-container-start\">{{ 'VizBoxStarterKit.WelcomeToTheAVLWebStarterKit' |  translate }}</h1>\r\n<p>{{ 'VizBoxStarterKit.AVLWebStarterKitIsApplicationExample' | translate }}</p>\r\n<p>{{ 'VizBoxStarterKit.VizBoxPlatformIsDesignedToBringYouUpToSpeed' | translate }}</p>\r\n\r\n<div\r\n fxLayout=\"row\"\r\n fxLayoutAlign=\"start stretch\"\r\n [fxLayoutGap]=\"selectedPet ? '10px' : '0px'\">\r\n\r\n <viz-pets\r\n   [fxFlex]=\"selectedPet ? 70 : 100\"\r\n   (selectedPetChanged)=\"selectedPet = $event\"></viz-pets>\r\n  \r\n <viz-pet-detail\r\n   [fxFlex]=\"selectedPet ? 30 : 0\"\r\n   [pet]=\"selectedPet\"></viz-pet-detail>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pet-detail/pet-detail.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pet-detail/pet-detail.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsIntroPetDetailPetDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"margin-top: 56px;\">\r\n  <avl-card *ngIf=\"pet\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxFill>\r\n    <h1 slot=\"title\">{{ pet.name }}</h1>\r\n    <div slot=\"content\">\r\n      <div fxLayout=\"row\" class=\"property\">\r\n        <div fxFlex=\"20\" class=\"label\">{{ 'VizBoxStarterKit.Status' | translate }}</div>\r\n        <div fxFlex class=\"value\">{{ pet.status }}</div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" class=\"property\">\r\n        <div fxFlex=\"20\" class=\"label\">{{ 'VizBoxStarterKit.Tags' | translate }}</div>\r\n        <div fxFlex class=\"value\">\r\n          <ng-container *ngFor=\"let tag of pet.tags; let isLast = last\">\r\n            {{ tag.name }}{{ isLast ? '' : ', ' }}\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" class=\"property\">\r\n        <div fxFlex=\"20\" class=\"label\">{{ 'VizBoxStarterKit.Photos' | translate }}</div>\r\n        <div fxFlex class=\"value\">\r\n          <ng-container *ngFor=\"let photo of petPhotos\">\r\n            <img *ngIf=\"photo.visible; else loading\" [src]=\"photo.url\"  style=\"width: 200px;\"/>\r\n\r\n            <ng-template #loading>\r\n              <div class=\"photo-loading-indicator\">\r\n                {{ 'VizBoxStarterKit.Loading...' | translate }}\r\n              </div>\r\n            </ng-template>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </avl-card>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pet-dialog/pet-dialog.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pet-dialog/pet-dialog.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsIntroPetDialogPetDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<avl-dialog class=\"petDialog\" id=\"dialog\"\r\n  [(open)]=\"open\"\r\n  (openChange)=\"dialogOpen($event)\">\r\n\r\n  <ng-template #content>\r\n  <avl-dialog-header *ngIf=\"edit; else newPetBlock\">\r\n    {{ 'VizBoxStarterKit.EditPet' | translate }}\r\n  </avl-dialog-header>\r\n  <ng-template #newPetBlock>\r\n    <avl-dialog-header>\r\n      {{ 'VizBoxStarterKit.NewPet' | translate }}\r\n    </avl-dialog-header>\r\n  </ng-template>\r\n  <avl-dialog-content>\r\n  <form #petForm=\"ngForm\">\r\n    <avl-textfield label=\"{{ 'VizBoxStarterKit.Name' | translate }}\"\r\n      [(ngModel)]=\"dialogPet.name\"\r\n      name=\"name\"\r\n      #name=\"ngModel\" required></avl-textfield>\r\n\r\n    <avl-dropdown label=\"Status\" [items]=\"statusOptions\"\r\n      [(ngModel)]=\"dialogPet.status\"\r\n      name=\"status\"\r\n      #status=\"ngModel\" required>\r\n    </avl-dropdown>\r\n\r\n    <avl-upload accept=\".png,.jpg\" [target]=\"uploadPath\"\r\n      (uploadComplete)=\"onFileUploadComplete($event)\"\r\n      (uploadStart)=\"onFileUploadStarted($event)\"\r\n      (menuItemClicked)=\"onFileMenuItemClicked($event)\"\r\n      [(ngModel)]=\"uploadedFiles\" name=\"upload\"\r\n    ></avl-upload>\r\n  </form>\r\n</avl-dialog-content>\r\n      <avl-dialog-footer>\r\n        <avl-button class=\"cancelButton\" (click)=\"closeDialog()\">\r\n          {{ 'VizBoxStarterKit.Cancel' | translate }}\r\n        </avl-button>\r\n    \r\n        <avl-button\r\n          id=\"save-button\"\r\n          (click)=\"savePet(petForm.form.valid)\"\r\n          [disabled]=\"filesUploading || !petForm.form.valid\">\r\n          {{ 'VizBoxStarterKit.Save' | translate }}\r\n        </avl-button>\r\n      </avl-dialog-footer>\r\n</ng-template>\r\n</avl-dialog>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pets/pets.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pets/pets.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsIntroPetsPetsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxFill>\r\n\r\n  <div class=\"action-bar\">\r\n    <h3 class=\"action-title\">{{ 'VizBoxStarterKit.PetsInStore' | translate }}</h3>\r\n    <div class=\"action-buttons\">\r\n      <avl-icon-button id=\"add-button\" (click)=\"addPet()\" icon=\"add\"></avl-icon-button>\r\n      <avl-icon-button id=\"edit-button\" (click)=\"editPet(selectedPet)\" [disabled]=\"!selectedPet\" icon=\"create\"></avl-icon-button>\r\n      <avl-icon-button id=\"delete-button\" (click)=\"deletePet()\" accent [disabled]=\"!selectedPet\" icon=\"delete\" class=\"action-secondary\"></avl-icon-button>\r\n    </div>\r\n  </div>\r\n\r\n  <avl-datatable #petsTable single-select (selectedValueChange)=\"petSelectionChanged($event)\" [columnDefinitions]=\"columnDefinitions\"\r\n    [dataProvider]=\"petStoreProvider\" pagination page-size=\"6\" column-selector></avl-datatable>\r\n</div>\r\n\r\n<viz-pet-dialog [open]=\"addEditDialogOpen\" [edit]=\"isEditing\" [pet]=\"selectedPet\" (save)=\"savePet($event)\" (cancel)=\"addEditDialogOpen = false\"></viz-pet-dialog>\r\n";
    /***/
  },

  /***/
  "./src/app/components/intro/intro-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/intro/intro-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: IntroRoutingModule */

  /***/
  function srcAppComponentsIntroIntroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroRoutingModule", function () {
      return IntroRoutingModule;
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


    var _intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./intro.component */
    "./src/app/components/intro/intro.component.ts");
    /* harmony import */


    var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../core/guards/auth.guard */
    "./src/app/core/guards/auth.guard.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var introRoutes = [{
      path: '',
      component: _intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"],
      canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }];

    var IntroRoutingModule = function IntroRoutingModule() {
      _classCallCheck(this, IntroRoutingModule);
    };

    IntroRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(introRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], IntroRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/intro/intro.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/intro/intro.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsIntroIntroComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "avl-card{\r\n    display: block;\r\n}\r\n.card{\r\n    margin: 24px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRyby9pbnRyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF2bC1jYXJke1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBtYXJnaW46IDI0cHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/intro/intro.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/intro/intro.component.ts ***!
    \*****************************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppComponentsIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var IntroComponent = function IntroComponent() {
      _classCallCheck(this, IntroComponent);
    };

    IntroComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'viz-intro',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./intro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/intro.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./intro.component.css */
      "./src/app/components/intro/intro.component.css"))["default"]]
    })], IntroComponent);
    /***/
  },

  /***/
  "./src/app/components/intro/intro.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/intro/intro.module.ts ***!
    \**************************************************/

  /*! exports provided: IntroModule */

  /***/
  function srcAppComponentsIntroIntroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroModule", function () {
      return IntroModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./intro.component */
    "./src/app/components/intro/intro.component.ts");
    /* harmony import */


    var _intro_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./intro-routing.module */
    "./src/app/components/intro/intro-routing.module.ts");
    /* harmony import */


    var _pets_pets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pets/pets.component */
    "./src/app/components/intro/pets/pets.component.ts");
    /* harmony import */


    var _pet_dialog_pet_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pet-dialog/pet-dialog.component */
    "./src/app/components/intro/pet-dialog/pet-dialog.component.ts");
    /* harmony import */


    var _pet_detail_pet_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pet-detail/pet-detail.component */
    "./src/app/components/intro/pet-detail/pet-detail.component.ts");
    /* harmony import */


    var _avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @avl-controls/ng-binders */
    "./node_modules/@avl-controls/ng-binders/__ivy_ngcc__/fesm2015/avl-controls-ng-binders.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var IntroModule = function IntroModule() {
      _classCallCheck(this, IntroModule);
    };

    IntroModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _intro_routing_module__WEBPACK_IMPORTED_MODULE_4__["IntroRoutingModule"]],
      declarations: [_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"], _pets_pets_component__WEBPACK_IMPORTED_MODULE_5__["PetsComponent"], _pet_detail_pet_detail_component__WEBPACK_IMPORTED_MODULE_7__["PetDetailComponent"], _pet_dialog_pet_dialog_component__WEBPACK_IMPORTED_MODULE_6__["PetDialogComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
      exports: [_intro_routing_module__WEBPACK_IMPORTED_MODULE_4__["IntroRoutingModule"]],
      providers: [{
        provide: _avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_8__["UPLOAD_SERVICE"],
        useClass: _avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_8__["UploadService"]
      }]
    })], IntroModule);
    /***/
  },

  /***/
  "./src/app/components/intro/pet-detail/pet-detail.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/intro/pet-detail/pet-detail.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsIntroPetDetailPetDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property {\r\n margin-top: 10px;\r\n}\r\n\r\n.property > .label {\r\n  color: #9C9C9C;\r\n}\r\n\r\n.photo-loading-indicator {\r\n  background-color: #CCCCCC;\r\n  width: 200px;\r\n  height: 200px;\r\n  line-height: 200px;\r\n  text-align: center;\r\n  margin-bottom: 4px;\r\n}\r\n\r\nh1{\r\n  font-size: 24px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRyby9wZXQtZGV0YWlsL3BldC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ludHJvL3BldC1kZXRhaWwvcGV0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5IHtcclxuIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eSA+IC5sYWJlbCB7XHJcbiAgY29sb3I6ICM5QzlDOUM7XHJcbn1cclxuXHJcbi5waG90by1sb2FkaW5nLWluZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBsaW5lLWhlaWdodDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuaDF7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/intro/pet-detail/pet-detail.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/intro/pet-detail/pet-detail.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PetDetailComponent */

  /***/
  function srcAppComponentsIntroPetDetailPetDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PetDetailComponent", function () {
      return PetDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var pet_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! pet-store */
    "./src/pet-store/index.ts");
    /* harmony import */


    var _pet_photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pet-photo */
    "./src/app/components/intro/pet-detail/pet-photo.ts");
    /* harmony import */


    var _avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @avl-controls/ng-binders */
    "./node_modules/@avl-controls/ng-binders/__ivy_ngcc__/fesm2015/avl-controls-ng-binders.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_card_avl_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-card/avl-card */
    "./node_modules/@avl-controls/core/dist/avl-card/avl-card.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PetDetailComponent = /*#__PURE__*/function () {
      function PetDetailComponent(uploadService, sanitizer) {
        _classCallCheck(this, PetDetailComponent);

        this.uploadService = uploadService;
        this.sanitizer = sanitizer;
      }

      _createClass(PetDetailComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var pet = changes.pet;

          if (pet && pet.currentValue && pet.currentValue.photoUrls) {
            this.preloadPhotos();
          }
        }
      }, {
        key: "preloadPhotos",
        value: function preloadPhotos() {
          var _this147 = this;

          this.petPhotos = this.pet.photoUrls.map(function (url, i) {
            var nonCachedPhotoUrl = "".concat(url, "?").concat(_this147.pet.id).concat(i);
            var img = new Image();
            img.src = nonCachedPhotoUrl;
            var petImage = new _pet_photo__WEBPACK_IMPORTED_MODULE_2__["PetPhoto"](nonCachedPhotoUrl);

            img.onload = function () {
              petImage.visible = true;
              URL.revokeObjectURL(petImage.url);
            };

            img.onerror = function () {
              _this147.uploadService.downloadFile(url).then(function (data) {
                var url = URL.createObjectURL(data);
                img.src = url;
                petImage.url = _this147.sanitizer.bypassSecurityTrustUrl(url);
              });
            };

            return petImage;
          });
        }
      }]);

      return PetDetailComponent;
    }();

    PetDetailComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_SERVICE"]]
        }]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], PetDetailComponent.prototype, "pet", void 0);

    PetDetailComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'viz-pet-detail',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./pet-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pet-detail/pet-detail.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./pet-detail.component.css */
      "./src/app/components/intro/pet-detail/pet-detail.component.css"))["default"]]
    }), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_avl_controls_ng_binders__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_SERVICE"])), __metadata("design:paramtypes", [Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])], PetDetailComponent);
    /***/
  },

  /***/
  "./src/app/components/intro/pet-detail/pet-photo.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/intro/pet-detail/pet-photo.ts ***!
    \**********************************************************/

  /*! exports provided: PetPhoto */

  /***/
  function srcAppComponentsIntroPetDetailPetPhotoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PetPhoto", function () {
      return PetPhoto;
    });

    var PetPhoto = function PetPhoto(url) {
      _classCallCheck(this, PetPhoto);

      this.url = url;
      this.visible = false;
    };
    /***/

  },

  /***/
  "./src/app/components/intro/pet-dialog/pet-dialog.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/intro/pet-dialog/pet-dialog.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsIntroPetDialogPetDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "avl-textfield {\r\n  width: 80%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRyby9wZXQtZGlhbG9nL3BldC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm8vcGV0LWRpYWxvZy9wZXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhdmwtdGV4dGZpZWxkIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/intro/pet-dialog/pet-dialog.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/intro/pet-dialog/pet-dialog.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PetDialogComponent */

  /***/
  function srcAppComponentsIntroPetDialogPetDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PetDialogComponent", function () {
      return PetDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var pet_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! pet-store */
    "./src/pet-store/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_textfield_avl_textfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-textfield/avl-textfield */
    "./node_modules/@avl-controls/core/dist/avl-textfield/avl-textfield.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_dropdown_avl_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-dropdown/avl-dropdown */
    "./node_modules/@avl-controls/core/dist/avl-dropdown/avl-dropdown.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_upload_avl_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-upload/avl-upload */
    "./node_modules/@avl-controls/core/dist/avl-upload/avl-upload.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_button_avl_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-button/avl-button */
    "./node_modules/@avl-controls/core/dist/avl-button/avl-button.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PetDialogComponent = /*#__PURE__*/function () {
      function PetDialogComponent(translateService, basePath) {
        _classCallCheck(this, PetDialogComponent);

        this.translateService = translateService;
        this.open = false;
        this.edit = false;
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.statusOptions = this.getStatusOptions();
        this.dialogPet = this.getNewPet();
        this.uploadedFiles = [];
        this.numFilesUploading = 0;
        this.uploadPath = "".concat(basePath, "/v2/Upload");
      }

      _createClass(PetDialogComponent, [{
        key: "dialogOpen",
        value: function dialogOpen(open) {
          if (open) {
            this.dialogPet = this.edit ? Object.assign({}, this.pet) : this.getNewPet();

            if (this.edit) {
              this.uploadedFiles = this.dialogPet.photoUrls.map(function (url, index) {
                var name = url.split('_', 2)[1] || "file_".concat(index, ".jpg");
                return {
                  name: name,
                  status: 'complete',
                  downloadUrl: url
                };
              });
            }
          } else {
            this.closeDialog();
            this.uploadedFiles = [];
          }
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.cancel.emit();
          this.open = false;
        }
      }, {
        key: "onFileUploadComplete",
        value: function onFileUploadComplete(file) {
          this.dialogPet.photoUrls.push(file.downloadUrl);
          this.numFilesUploading -= 1;
        }
      }, {
        key: "onFileMenuItemClicked",
        value: function onFileMenuItemClicked(detail) {
          var photoUrls = this.dialogPet.photoUrls;

          if (detail.item.label === this.translateService.instant('VizBoxStarterKit.Remove')) {
            var index = photoUrls.indexOf(detail.value.downloadUrl);

            if (index !== -1) {
              photoUrls.splice(index, 1);
            }
          }
        }
      }, {
        key: "onFileUploadStarted",
        value: function onFileUploadStarted(file) {
          this.numFilesUploading += 1;
        }
      }, {
        key: "savePet",
        value: function savePet(formValid) {
          if (!formValid) {
            return;
          }

          this.save.emit(this.dialogPet);
          this.open = false;
        }
      }, {
        key: "getNewPet",
        value: function getNewPet() {
          // Pet interface was generated from Swagger File
          // -> create a Pet class otherwise.
          return {
            name: '',
            status: this.statusOptions[0].value,
            photoUrls: []
          };
        }
      }, {
        key: "getStatusOptions",
        value: function getStatusOptions() {
          var _this148 = this;

          // Status was generated from Swagger File as object/string
          // -> create an enum otherwise.
          return Object.keys(pet_store__WEBPACK_IMPORTED_MODULE_1__["Pet"].StatusEnum).map(function (key) {
            var enumLabel = pet_store__WEBPACK_IMPORTED_MODULE_1__["Pet"].StatusEnum[key];
            var label;

            switch (enumLabel) {
              case 'available':
                label = _this148.translateService.instant('VizBoxStarterKit.Available');
                break;

              case 'pending':
                label = _this148.translateService.instant('VizBoxStarterKit.Pending');
                break;

              case 'sold':
                label = _this148.translateService.instant('VizBoxStarterKit.Sold');
                break;
            }

            return {
              value: enumLabel,
              label: label
            };
          });
        }
      }, {
        key: "filesUploading",
        get: function get() {
          return this.numFilesUploading > 0;
        }
      }]);

      return PetDialogComponent;
    }();

    PetDialogComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [pet_store__WEBPACK_IMPORTED_MODULE_1__["BASE_PATH"]]
        }]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], PetDialogComponent.prototype, "open", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], PetDialogComponent.prototype, "edit", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], PetDialogComponent.prototype, "pet", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], PetDialogComponent.prototype, "cancel", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], PetDialogComponent.prototype, "save", void 0);

    PetDialogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'viz-pet-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./pet-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pet-dialog/pet-dialog.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./pet-dialog.component.css */
      "./src/app/components/intro/pet-dialog/pet-dialog.component.css"))["default"]]
    }), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(pet_store__WEBPACK_IMPORTED_MODULE_1__["BASE_PATH"])), __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], String])], PetDialogComponent);
    /***/
  },

  /***/
  "./src/app/components/intro/pets/pets.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/intro/pets/pets.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsIntroPetsPetsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".action-bar {\r\n  margin-top: 8px;\r\n  margin-bottom: 8px;\r\n  width: 100%;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.action-title {\r\n  float: left;\r\n  text-align: left;\r\n  /* font-size: 24px; */\r\n  margin-top: 8px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.action-buttons {\r\n  float: right;\r\n  text-align: left;\r\n  --avl-icon-button-color: var(--avl-secondary-color);\r\n}\r\n\r\n.action-secondary {\r\n  --avl-icon-button-color: var(--avl-secondary-color);\r\n}\r\n\r\navl-datatable {\r\n  height: 506px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRyby9wZXRzL3BldHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm8vcGV0cy9wZXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uLWJhciB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcblxyXG4uYWN0aW9uLXRpdGxlIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC8qIGZvbnQtc2l6ZTogMjRweDsgKi9cclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbnMge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC0tYXZsLWljb24tYnV0dG9uLWNvbG9yOiB2YXIoLS1hdmwtc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLmFjdGlvbi1zZWNvbmRhcnkge1xyXG4gIC0tYXZsLWljb24tYnV0dG9uLWNvbG9yOiB2YXIoLS1hdmwtc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuYXZsLWRhdGF0YWJsZSB7XHJcbiAgaGVpZ2h0OiA1MDZweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/intro/pets/pets.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/intro/pets/pets.component.ts ***!
    \*********************************************************/

  /*! exports provided: PetsComponent */

  /***/
  function srcAppComponentsIntroPetsPetsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PetsComponent", function () {
      return PetsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @avl-controls/datatable/dist/avl-datatable/column-definitions */
    "./node_modules/@avl-controls/datatable/dist/avl-datatable/column-definitions.js");
    /* harmony import */


    var pet_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! pet-store */
    "./src/pet-store/index.ts");
    /* harmony import */


    var _sort_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sort-order */
    "./src/app/components/intro/pets/sort-order.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _avl_controls_core_dist_avl_icon_button_avl_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @avl-controls/core/dist/avl-icon-button/avl-icon-button */
    "./node_modules/@avl-controls/core/dist/avl-icon-button/avl-icon-button.js");
    /* harmony import */


    var _avl_controls_datatable_dist_avl_datatable_avl_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @avl-controls/datatable/dist/avl-datatable/avl-datatable */
    "./node_modules/@avl-controls/datatable/dist/avl-datatable/avl-datatable.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PetsComponent = /*#__PURE__*/function () {
      function PetsComponent(petService, translateService) {
        var _this149 = this;

        _classCallCheck(this, PetsComponent);

        this.petService = petService;
        this.translateService = translateService;
        this.selectedPetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnDefinitions = [new _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["LeafColumn"](this.translateService.instant('VizBoxStarterKit.ID'), 'id', _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["ColumnType"].Text, false, false, 1, undefined, undefined, undefined, undefined, undefined, true), new _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["LeafColumn"](this.translateService.instant('VizBoxStarterKit.Name'), 'name', _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["ColumnType"].Text, true, true, 3, '40px'), new _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["LeafColumn"](this.translateService.instant('VizBoxStarterKit.Status'), 'status', _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["ColumnType"].Text, true, false, 3, '40px'), new _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["LeafColumn"](this.translateService.instant('VizBoxStarterKit.Category'), 'category.name', _avl_controls_datatable_dist_avl_datatable_column_definitions__WEBPACK_IMPORTED_MODULE_1__["ColumnType"].Text, true, false, 3, '40px', undefined, undefined, undefined, undefined, true)];
        this.isEditing = false;
        this.addEditDialogOpen = false;

        this.petStoreProvider = function (params) {
          return _this149.getPetStoreProvider(params);
        };
      }

      _createClass(PetsComponent, [{
        key: "petSelectionChanged",
        value: function petSelectionChanged(pet) {
          this.selectedPetChanged.emit(pet);
          this.selectedPet = pet;
        }
      }, {
        key: "addPet",
        value: function addPet() {
          this.addEditDialogOpen = true;
          this.isEditing = false;
        }
      }, {
        key: "editPet",
        value: function editPet(pet) {
          this.selectedPet = pet;
          this.isEditing = true;
          this.addEditDialogOpen = true;
        }
      }, {
        key: "deletePet",
        value: function deletePet() {
          var petsTable = this.petsTableElement.nativeElement;
          this.petService.deletePet(this.selectedPet.id).subscribe(function (res) {
            return petsTable.clearCache();
          });
          delete this.selectedPet;
          this.selectedPetChanged.emit(undefined);
        }
      }, {
        key: "savePet",
        value: function savePet(pet) {
          this.addEditDialogOpen = false;
          this.selectedPetChanged.emit(pet);
          var petsTable = this.petsTableElement.nativeElement;

          if (this.isEditing) {
            this.petService.updatePet(pet).subscribe(function (res) {
              return petsTable.clearCache();
            });
          } else {
            this.petService.addPet(pet).subscribe(function (res) {
              return petsTable.clearCache();
            });
          }
        }
      }, {
        key: "getPetStoreProvider",
        value: function getPetStoreProvider(params) {
          var _this150 = this;

          return new Promise(function (resolve, reject) {
            var observable;
            var sorting = params.sortOrders.find(function (f) {
              return f.path === 'name' || f.path === 'status';
            });
            var sortBy, sortOrder;

            if (sorting) {
              sortBy = sorting.path;
              sortOrder = sorting.ascending ? _sort_order__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].Ascending : _sort_order__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].Descending;
            }

            var nameFilter = params.filters.get('name');
            observable = _this150.petService.getPets(nameFilter, undefined, undefined, params.page * params.pageSize, params.pageSize, sortBy, sortOrder);
            observable.subscribe(function (response) {
              setTimeout(function () {
                resolve({
                  rows: response.result,
                  totalRows: response.size
                });
              }, 0);
            }, function (error) {
              return _this150.handleError(error);
            });
          });
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var petsTable = this.petsTableElement.nativeElement;
          petsTable.data = [{
            name: this.translateService.instant('VizBoxStarterKit.ConnectionFailedToPetstoreServer')
          }];
        }
      }]);

      return PetsComponent;
    }();

    PetsComponent.ctorParameters = function () {
      return [{
        type: pet_store__WEBPACK_IMPORTED_MODULE_2__["PetApiService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], PetsComponent.prototype, "selectedPetChanged", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('petsTable'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])], PetsComponent.prototype, "petsTableElement", void 0);

    PetsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'viz-pets',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./pets.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/pets/pets.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./pets.component.css */
      "./src/app/components/intro/pets/pets.component.css"))["default"]]
    }), __metadata("design:paramtypes", [pet_store__WEBPACK_IMPORTED_MODULE_2__["PetApiService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])], PetsComponent);
    /***/
  },

  /***/
  "./src/app/components/intro/pets/sort-order.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/intro/pets/sort-order.ts ***!
    \*****************************************************/

  /*! exports provided: SortOrder */

  /***/
  function srcAppComponentsIntroPetsSortOrderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortOrder", function () {
      return SortOrder;
    });

    var SortOrder;

    (function (SortOrder) {
      SortOrder["Ascending"] = "asc";
      SortOrder["Descending"] = "desc";
    })(SortOrder || (SortOrder = {}));
    /***/

  },

  /***/
  "./src/pet-store/api/api.ts":
  /*!**********************************!*\
    !*** ./src/pet-store/api/api.ts ***!
    \**********************************/

  /*! exports provided: PetApiService, APIS */

  /***/
  function srcPetStoreApiApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIS", function () {
      return APIS;
    });
    /* harmony import */


    var _petApi_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./petApi.service */
    "./src/pet-store/api/petApi.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PetApiService", function () {
      return _petApi_service__WEBPACK_IMPORTED_MODULE_0__["PetApiService"];
    });

    var APIS = [_petApi_service__WEBPACK_IMPORTED_MODULE_0__["PetApiService"]];
    /***/
  },

  /***/
  "./src/pet-store/index.ts":
  /*!********************************!*\
    !*** ./src/pet-store/index.ts ***!
    \********************************/

  /*! exports provided: PetApiService, APIS, Pet, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule */

  /***/
  function srcPetStoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./api/api */
    "./src/pet-store/api/api.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PetApiService", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["PetApiService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "APIS", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"];
    });
    /* harmony import */


    var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./model/models */
    "./src/pet-store/model/models.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Pet", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["Pet"];
    });
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./variables */
    "./src/pet-store/variables.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
      return _variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
      return _variables__WEBPACK_IMPORTED_MODULE_2__["COLLECTION_FORMATS"];
    });
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./configuration */
    "./src/pet-store/configuration.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"];
    });
    /* harmony import */


    var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./api.module */
    "./src/pet-store/api.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
      return _api_module__WEBPACK_IMPORTED_MODULE_4__["ApiModule"];
    });
    /***/

  },

  /***/
  "./src/pet-store/model/models.ts":
  /*!***************************************!*\
    !*** ./src/pet-store/model/models.ts ***!
    \***************************************/

  /*! exports provided: Pet */

  /***/
  function srcPetStoreModelModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _pet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./pet */
    "./src/pet-store/model/pet.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Pet", function () {
      return _pet__WEBPACK_IMPORTED_MODULE_0__["Pet"];
    });
    /***/

  },

  /***/
  "./src/pet-store/model/pet.ts":
  /*!************************************!*\
    !*** ./src/pet-store/model/pet.ts ***!
    \************************************/

  /*! exports provided: Pet */

  /***/
  function srcPetStoreModelPetTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pet", function () {
      return Pet;
    });

    var Pet;

    (function (Pet) {
      Pet.StatusEnum = {
        Available: 'available',
        Pending: 'pending',
        Sold: 'sold'
      };
    })(Pet || (Pet = {}));
    /***/

  }
}]);
//# sourceMappingURL=app-components-intro-intro-module-es5.js.map