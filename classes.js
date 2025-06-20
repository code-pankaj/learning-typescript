"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this._courseCount = 1;
        this.city = "Rewari";
        this.email = email;
        this.name = name;
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        // setter have no return type
        set: function (courseNum) {
            if (this._courseCount <= 1) {
                throw new Error("Course should be more than one");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var newUser = new User("pankaj@gmail.com", "Pankaj");
