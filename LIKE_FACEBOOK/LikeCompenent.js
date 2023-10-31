var LikeComponent = /** @class */ (function () {
    function LikeComponent(initialLikes) {
        if (initialLikes === void 0) { initialLikes = 0; }
        this.likes = initialLikes;
        this.isLiked = false;
    }
    LikeComponent.prototype.onclick = function () {
        this.isLiked = !this.isLiked;
        this.likes += this.isLiked ? 1 : -1;
        this.logStatus();
    };
    LikeComponent.prototype.logStatus = function () {
        console;
        console.log("J'aime: ".concat(this.likes, " ").concat(this.isLiked ? "sélectionné" : "non sélectionné"));
    };
    return LikeComponent;
}());
var likeComponent = new LikeComponent(5);
likeComponent.onclick();
likeComponent.onclick();
likeComponent.onclick();
likeComponent.onclick();
likeComponent.onclick();
