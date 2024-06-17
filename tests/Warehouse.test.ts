import { Cube } from '../src/entities/Cube';
import { Point } from '../src/entities/Point';
import { Oval } from '../src/entities/Oval';
import { Warehouse } from '../src/Utils/Warehouse';

describe('Warehouse', () => {
    let warehouse: Warehouse;
    let cube: Cube;
    let oval: Oval;
  
    beforeEach(() => {
      warehouse = Warehouse.getInstance();
      cube = new Cube(new Point(0, 0), 3, '1');
      oval = new Oval('Oval-1', new Point(0, 0), 4, 2);
      warehouse.updateShape(cube);
      warehouse.updateShape(oval);
    });
  
    test('should calculate total area correctly', () => {
      const totalArea = warehouse.getTotalArea();
      expect(totalArea).toBeCloseTo(60.2832, 4);
    });
  
    test('should calculate total perimeter correctly', () => {
      const totalPerimeter = warehouse.getTotalPerimeter();
      expect(totalPerimeter).toBeCloseTo(64.9956, 4);
    });
  
    test('should update shape area and perimeter correctly', () => {
      cube.edgeLength = 4;
      warehouse.updateShape(cube);
      const updatedArea = warehouse.getShapeArea('Cube-1');
      const updatedPerimeter = warehouse.getShapePerimeter('Cube-1');
      expect(updatedArea).toBe(96);
      expect(updatedPerimeter).toBe(96); // Assuming surface area as perimeter for the sake of this example
    });
  
    test('should remove shape correctly', () => {
      warehouse.removeShape(cube);
      const remainingArea = warehouse.getShapeArea('Cube-1');
      expect(remainingArea).toBeUndefined();
    });
  });