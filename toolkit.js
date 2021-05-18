var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Widget = /** @class */ (function () {
    function Widget() {
    }
    Widget.prototype.Widget = function (height, width) {
        this._height = height;
        this._width = width;
        this._backcolor = "black";
    };
    Object.defineProperty(Widget.prototype, "backColor", {
        get: function () {
            return this._backcolor;
        },
        set: function (color) {
            this._backcolor = color;
        },
        enumerable: false,
        configurable: true
    });
    return Widget;
}());
var Frame = /** @class */ (function () {
    function Frame(height, width) {
    }
    Frame.prototype.addWidget = function (wid) {
        this._objects.push(wid);
    };
    return Frame;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.Button = function () {
    };
    return Button;
}(Widget));
var sb1 = new scrollbars(w);
sb1.move(200, 150);
var opt = [];
opt.push(["RadioButton 1", false]);
opt.push(["RadioButton 1", false]);
opt.push(["RadioButton 1", false]);
var rb1 = new RadioButton(w, opt);
rb1.move(10, 150);
var cb1 = new CheckBox(w);
cb1.move(10, 160);
cb1.text = "Checkbox 1";
var tb1 = new Textbox(w);
tb1.move(200, 100);
tb1.text = "";
var btn = new Button(w);
btn.text = "Button 2";
btn.move(10, 60);
btn.stateEvent().attach(function (input, event) {
    console.log(event.target);
});
