var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
var Facebook = /** @class */ (function () {
    function Facebook(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    Facebook.prototype.createStory = function () {
        console.log("Story Created!");
    };
    return Facebook;
}());
