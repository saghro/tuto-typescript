export class LikeComponent{
   constructor(private _likesNumber : number, private _isliked:boolean){

   }
   get likesNumber(){
    return this._likesNumber
   }
   get isLiked
}





/*class LikeComponent {
  private likes: number;
  private isLiked: boolean;

  constructor(initialLikes: number = 0) {
      this.likes = initialLikes;
      this.isLiked = false;
  }

  onclick() {
      this.isLiked = !this.isLiked;
      this.likes += this.isLiked ? 1 : -1;
      this.logStatus();
  }

  private logStatus() {
    console
      console.log(`J'aime: ${this.likes} ${this.isLiked ? "sélectionné" : "non sélectionné"}`);
  }
}

const likeComponent = new LikeComponent(5);
likeComponent.onclick();
likeComponent.onclick();
likeComponent.onclick();
likeComponent.onclick();
likeComponent.onclick();**/
