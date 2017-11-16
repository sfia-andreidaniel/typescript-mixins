var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function Focusable(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, args) || this;
        }
        class_1.prototype.focus = function () {
            console.log('focus...');
        };
        return class_1;
    }(Base));
}
function Selectable(Base) {
    return (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, args) || this;
        }
        class_2.prototype.select = function () {
            console.log('select...');
        };
        return class_2;
    }(Base));
}
var Control = (function () {
    function Control() {
        console.log('Hi, I am a new control');
    }
    return Control;
}());
var FocusableControl = (function (_super) {
    __extends(FocusableControl, _super);
    function FocusableControl() {
        return _super.call(this) || this;
    }
    FocusableControl.prototype.getType = function () {
        return 2;
    };
    return FocusableControl;
}(Focusable(Control)));
var SelectableAndFocusableControl = (function (_super) {
    __extends(SelectableAndFocusableControl, _super);
    function SelectableAndFocusableControl() {
        var _this = _super.call(this) || this;
        console.log('Hi, I am both selectable and focusable');
        return _this;
    }
    return SelectableAndFocusableControl;
}(Focusable(Selectable(Control))));
var sc = new SelectableAndFocusableControl();
sc.focus();
sc.select();
