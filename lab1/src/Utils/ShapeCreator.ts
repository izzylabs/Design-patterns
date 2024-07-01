import { CubeFactory } from '../factory/CubeFactory';
import { OvalFactory } from '../factory/OvalFactory';
import { Shape } from '../entities/Shape';


export function createShapes(lines: string[]): Shape[] {
  return lines.map(line => {
    const parts = line.split(' ');
    const type = parts[0];
    const id = parts[1];
    const x = parseFloat(parts[2]);
    const y = parseFloat(parts[3]);

    switch (type) {
      case 'C':
        const edgeLength = parseFloat(parts[4]);
        return CubeFactory.createCube(id, x, y, edgeLength);
      case 'O':
        const majorAxis = parseFloat(parts[4]);
        const minorAxis = parseFloat(parts[5]);
        return OvalFactory.createOval(id, x, y, majorAxis, minorAxis);
      default:
        throw new Error('Unknown shape type');
    }
  });
}