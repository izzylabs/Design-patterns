import { Point } from '../src/entities/Point';

describe('Point', () => {
  it('should create a point with x and y coordinates', () => {
    const point = new Point(10, 20);
    expect(point.x).toBe(10);
    expect(point.y).toBe(20);
  });

  it('should handle z-coordinate if provided', () => {
    const point = new Point(10, 20, 30);
    expect(point.z).toBe(30);
  });

  it('should default z-coordinate to undefined if not provided', () => {
    const point = new Point(10, 20);
    expect(point.z).toBeUndefined();
  });
});
