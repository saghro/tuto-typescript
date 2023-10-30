"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log(`Drawing point at (${this.x}, ${this.y})`);
    }
    getDistance(anotherPoint) {
        const deltaX = this.x - anotherPoint.x;
        const deltaY = this.y - anotherPoint.y;
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    }
}
let point = new Point(3, 6);
console.log(point.y);
const anotherPoint = new Point(5, 8);
point.draw();
const distance = point.getDistance(anotherPoint);
console.log(`Distance between points: ${distance}`);
