import { Oval } from '../src/entities/Oval';
import { Point } from '../src/entities/Point';

describe('Oval', () => {
  let oval: Oval;

  beforeEach(() => {
    oval = new Oval('2', new Point(0, 0), 4, 2);
  });

  test('should calculate area correctly', () => {
    expect(oval.area()).toBeCloseTo(6.2832, 4);
  });

  test('should calculate perimeter correctly', () => {
    expect(oval.perimeter()).toBeCloseTo(9.9346, 4); // Adjusted value based on corrected formula
  });

  test('should validate oval correctly', () => {
    expect(oval.isShape()).toBe(true);
  });

  test('should check if oval is a circle correctly', () => {
    const circle = new Oval('10', new Point(0, 0), 4, 4);
    expect(circle.isCircle()).toBe(true);
  });

  test('should check if intersects axis correctly', () => {
    expect(oval.intersectsAxis(2)).toBe(true);
  });
});
  