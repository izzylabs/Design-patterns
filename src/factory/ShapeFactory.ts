import { Shape } from "../entities/Shape";
import { Point } from "../entities/Point";
import { Oval } from "../entities/Oval";
import { Cube } from "../entities/Cube";
import { validateShapeData } from "../Utils/Validators";

export class ShapeFactory {
    static createShape(type: string, id: string, name: string, data: any[]): Shape {
        switch (type.toLowerCase()) {
            case "oval":
                if (!validateShapeData(data, 4)) throw new Error("Invalid data for Oval");
                return new Oval(id, name, new Point(data[0], data[1]), new Point(data[2], data[3]));
            case "cube":
                if (!validateShapeData(data, 3)) throw new Error("Invalid data for Cube");
                return new Cube(id, name, new Point(data[0], data[1], data[2]), data[3]);
            default:
                throw new Error("Unknown shape type");
        }
    }
}
