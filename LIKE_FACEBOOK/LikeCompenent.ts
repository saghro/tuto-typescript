class LikeCompenent {
    private likes: number;
    private isLiked: boolean;
  
    constructor(initialLikes: number = 0) {
      this.likes = initialLikes;
      this.isLiked = false;
    }
    onclick(){
      this.isLiked = !this.isLiked;
      this.likes += this.isLiked ? 1 : -1;
      this.logStatus();
    }
    private logStatus() {
      console.log(`J'aime: ${this.likes} ${this.isLiked ? "sélectionné" : "non sélectionné"}`);
    }
}
const likeCompenent = new LikeCompenent(5);
likeCompenent.onclick();
likeCompenent.onclick();
likeCompenent.onclick();