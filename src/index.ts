import { ShapeFactory } from './factory/ShapeFactory';
import { readShapeData } from './Utils/FileReader';

function main() {
    const shapes = readShapeData('./data/shapes.txt');
    shapes.forEach(shape => {
        try {
            const shapeObj = ShapeFactory.createShape(shape.type, shape.id, shape.name, shape.data);
            console.log(`Created shape ${shapeObj.name} with area: ${shapeObj.area()} and perimeter: ${shapeObj.perimeter()}`);
        } catch (error) {
            console.error(error);
        }
    });
}

main();
