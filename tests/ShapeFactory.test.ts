import { ShapeFactory } from '../src/factory/ShapeFactory';
import { Cube } from '../src/entities/Cube';
import { Oval } from '../src/entities/Oval';
import { ShapeException } from '../src/Exceptions/ShapeException';

describe('ShapeFactory', () => {
  test('should create Cube correctly', () => {
    const cube = ShapeFactory.createShape('C 1 0 0 3');
    expect(cube).toBeInstanceOf(Cube);
  });

  test('should create Oval correctly', () => {
    const oval = ShapeFactory.createShape('Q 2 0 0 4 2');
    expect(oval).toBeInstanceOf(Oval);
  });

  test('should throw error for unknown shape', () => {
    expect(() => ShapeFactory.createShape('X 3 0 0 4')).toThrow(ShapeException);
  });
});