import { Oval } from '../src/entities/Oval';
import { Point } from '../src/entities/Point';

describe('Oval', () => {
  let oval: Oval;
  let circle: Oval;

  beforeEach(() => {
    oval = new Oval('Oval-1', new Point(0, 0), 4, 2);
    circle = new Oval('Oval-2', new Point(0, 0), 3, 3);
  });

  test('should calculate area correctly', () => {
    expect(oval.area()).toBeCloseTo(6.2832, 4);
  });

  test('should calculate perimeter correctly', () => {
    expect(oval.perimeter()).toBeCloseTo(10.9956, 4);
  });

  test('should validate oval correctly', () => {
    expect(oval.isShape()).toBe(true);
  });

  test('should check if oval is a circle correctly', () => {
    expect(circle.isCircle()).toBe(true);
  });

  test('should check if intersects axis correctly', () => {
    expect(oval.intersectsAxis(2)).toBe(true);
  });
});