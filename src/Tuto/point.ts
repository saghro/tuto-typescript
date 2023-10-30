export class Point {
    constructor (private x:number , private y?:number){}
    draw() {

        console.log(`Drawing point at (${this.x}, ${this.y})`);
    }
    get _x(){
        return this.x;
    }
    set _x (value){
        if(value<0)
        throw new Error('valeur impossible');
        this._x=value;
    }
}