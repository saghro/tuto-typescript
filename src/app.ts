class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    draw() {

        console.log(`Drawing point at (${this.x}, ${this.y})`);
    }

    getDistance(anotherPoint: Point): number {
   
        const deltaX = this.x - anotherPoint.x;
        const deltaY = this.y - anotherPoint.y;
        return Math.sqrt(deltaX ** 2 + deltaY ** 2);
    }
}

let point: Point = new Point(3, 6);
console.log(point.y);
const anotherPoint: Point = new Point(5, 8);
point.draw(); 
const distance = point.getDistance(anotherPoint);
console.log(`Distance between points: ${distance}`);