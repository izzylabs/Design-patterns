import { Cube } from '../src/entities/Cube';
import { Point } from '../src/entities/Point';

describe('Cube', () => {
  let cube: Cube;

  beforeEach(() => {
    cube = new Cube(new Point(0, 0), 3, '1');
  });

  test('should calculate surface area correctly', () => {
    expect(cube.surfaceArea()).toBe(54);
  });

  test('should calculate volume correctly', () => {
    expect(cube.volume()).toBe(27);
  });

  test('should validate cube correctly', () => {
    expect(cube.isShape()).toBe(true);
  });

  test('should check if base is on coordinate plane correctly', () => {
    expect(cube.baseOnCoordinatePlane()).toBe(true);
  });

  test('should calculate volume ratio after slicing correctly', () => {
    expect(cube.volumeRatioAfterSliceXY()).toBe(0.5);
  });

  test('should return correct id', () => {
    expect(cube.getId()).toBe('Cube-1');
  });
});