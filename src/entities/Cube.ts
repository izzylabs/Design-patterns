import { Shape } from "./Shape";
import { Point } from "./Point";

export class Cube extends Shape {
    constructor(id: string, name: string, public basePoint: Point, public sideLength: number) {
        super(id, name);
    }

    area(): number {
        return 6 * this.sideLength * this.sideLength;
    }

    volume(): number {
        return this.sideLength * this.sideLength * this.sideLength;
    }

    perimeter(): number {
        return 12 * this.sideLength;
    }
}

