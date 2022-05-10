var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(color) {
        this.Color = color;
    }
    return Car;
}());
var Merbz = /** @class */ (function (_super) {
    __extends(Merbz, _super);
    function Merbz(color, price) {
        var _this = _super.call(this, color) || this;
        _this.Price = price;
        return _this;
    }
    Merbz.prototype.display = function () {
        console.log("Color of Mercedes-Benz car: " + this.Color);
        console.log("Price of Mercedes-Benz car: " + this.Price);
    };
    return Merbz;
}(Car));
var obj = new Merbz(" Silver", 7000000);
obj.display();
