import { Shape } from "./Shape";
import { Point } from "./Point";

export class Oval extends Shape {
    isCircle(): boolean {
        const a = Math.abs(this.point1.x - this.point2.x) / 2;
        const b = Math.abs(this.point1.y - this.point2.y) / 2;
        return a === b;
    }
    intersectsOneAxis(): boolean {
        // Assuming the center of the oval and checking if it touches one axis
        const centerX = (this.point1.x + this.point2.x) / 2;
        const centerY = (this.point1.y + this.point2.y) / 2;
        const a = Math.abs(this.point1.x - this.point2.x) / 2;
        const b = Math.abs(this.point1.y - this.point2.y) / 2;
        const touchesXAxis = (centerY - b <= 0 && centerY + b >= 0);
        const touchesYAxis = (centerX - a <= 0 && centerX + a >= 0);
        return (touchesXAxis !== touchesYAxis); // touches exactly one axis
    }
    constructor(id: string, name: string, public point1: Point, public point2: Point) {
        super(id, name);
    }

    area(): number {
        const a = Math.abs(this.point1.x - this.point2.x) / 2;
        const b = Math.abs(this.point1.y - this.point2.y) / 2;
        return Math.PI * a * b;
    }

    perimeter(): number {
        const a = Math.abs(this.point1.x - this.point2.x) / 2;
        const b = Math.abs(this.point1.y - this.point2.y) / 2;
        return Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
    }
    
}

