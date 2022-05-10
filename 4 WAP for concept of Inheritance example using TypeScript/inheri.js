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
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.Sound = sound;
    }
    return Animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(sound, food) {
        var _this = _super.call(this, sound) || this;
        _this.Food = food;
        return _this;
    }
    dog.prototype.display = function () {
        console.log('my bark' + this.Food);
        console.log('my bark' + this.Sound);
    };
    return dog;
}(Animal));
var bj = new dog('ham', 'bark');
bj.display();
