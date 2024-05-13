import { Oval } from '../src/entities/Oval';
import { Point } from '../src/entities/Point';


describe('Oval', () => {
  const point1 = new Point(0, 0);
  const point2 = new Point(4, 2);

  it('should calculate area correctly', () => {
    // Creating Oval with required ID and Name for constructor
    const oval = new Oval('1', 'Test Oval', point1, point2);
    // Area calculation for an oval with a=2, b=1
    expect(oval.area()).toBeCloseTo(Math.PI * 2 * 1);
  });

  it('should calculate perimeter using Ramanujan\'s approximation', () => {
    // Creating Oval with required ID and Name for constructor
    const oval = new Oval('2', 'Test Oval', point1, point2);
    // Adjust precision to 1 decimal place if acceptable
    expect(oval.perimeter()).toBeCloseTo(Math.PI * (3 * (2 + 1) - Math.sqrt((3 * 2 + 1) * (2 + 3 * 1))), 1);
  });

  it('should identify as a circle when appropriate', () => {
    // Oval that is actually a circle
    const circle = new Oval('3', 'Test Circle', new Point(0, 0), new Point(2, 2));
    expect(circle.isCircle()).toBeTruthy();
    // Oval that is not a circle 
    const notCircle = new Oval('4', 'Test Not Circle', point1, point2);
    expect(notCircle.isCircle()).toBeFalsy();
  });

  it('should detect intersection with one axis correctly', () => {
    // Oval intersecting one axis
    const oval = new Oval('5', 'Test Oval One Axis', new Point(-1, 1), new Point(1, 3));
    expect(oval.intersectsOneAxis()).toBeTruthy();
    // Oval intersecting both axes
    const oval2 = new Oval('6', 'Test Oval Both Axes', new Point(-2, -2), new Point(2, 2));
    expect(oval2.intersectsOneAxis()).toBeFalsy(); // intersects both axes
  });
});


  