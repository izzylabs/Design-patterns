import { Cube } from '../src/entities/Cube';
import { Point } from '../src/entities/Point';

describe('Cube', () => {
  let cube: Cube;
  const basePoint = new Point(0, 0, 0);

  beforeEach(() => {
    cube = new Cube('1', 'Test Cube', basePoint, 4);
  });

  it('calculates area correctly', () => {
    // Area of cube: 6 * side^2
    expect(cube.area()).toBe(6 * 4 * 4);
  });

  it('calculates volume correctly', () => {
    // Volume of cube: side^3
    expect(cube.volume()).toBe(4 * 4 * 4);
  });

  it('calculates perimeter correctly', () => {
    // Perimeter of cube: 12 * side
    expect(cube.perimeter()).toBe(12 * 4);
  });
});
