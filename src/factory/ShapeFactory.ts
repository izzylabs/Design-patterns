import { Cube } from '../entities/Cube';
import { Oval } from '../entities/Oval';
import { Point } from '../entities/Point';
import { ShapeException } from '../Exceptions/ShapeException';

export class ShapeFactory {
  static createShape(data: string): Cube | Oval {
    const parts = data.split(' ');
    const type = parts[0];
    const id = parts[1];
    const x = parseFloat(parts[2]);
    const y = parseFloat(parts[3]);

    switch (type) {
      case 'C':
        const edgeLength = parseFloat(parts[4]);
        return new Cube(new Point(x, y), edgeLength, id);
      case 'Q':
        const majorAxis = parseFloat(parts[4]);
        const minorAxis = parseFloat(parts[5]);
        return new Oval(id, new Point(x, y), majorAxis, minorAxis);
      default:
        throw new ShapeException('Unknown shape type');
    }
  }
}