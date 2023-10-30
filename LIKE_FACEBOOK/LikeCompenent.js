var LikeCompenent = /** @class */ (function () {
    function LikeCompenent(initialLikes) {
        if (initialLikes === void 0) { initialLikes = 0; }
        this.likes = initialLikes;
        this.isLiked = false;
    }
    LikeCompenent.prototype.onclick = function () {
        this.isLiked = !this.isLiked;
        this.likes += this.isLiked ? 1 : -1;
        this.logStatus();
    };
    LikeCompenent.prototype.logStatus = function () {
        console.log("J'aime: ".concat(this.likes, " ").concat(this.isLiked ? "sélectionné" : "non sélectionné"));
    };
    return LikeCompenent;
}());
var likeCompenent = new LikeCompenent(5);
likeCompenent.onclick();
likeCompenent.onclick();
likeCompenent.onclick();
