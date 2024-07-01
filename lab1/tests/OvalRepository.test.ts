import { Oval } from '../src/entities/Oval';
import { Point } from '../src/entities/Point';
import { OvalRepository } from '../src/Repositories/OvalRepository';
import { Warehouse } from '../src/Utils/Warehouse';

describe('OvalRepository', () => {
    let ovalRepo: OvalRepository;
    let warehouse: Warehouse;
    let oval: Oval;
  
    beforeEach(async () => {
      ovalRepo = OvalRepository.getInstance();
      warehouse = Warehouse.getInstance();
      oval = new Oval('Oval-oval-1', new Point(1, 1), 4, 2);
      await ovalRepo.create(oval);
      warehouse.updateShape(oval);
    });
  
    test('should create and find oval by id', async () => {
      const foundOval = await ovalRepo.findOne('Oval-oval-1');
      expect(foundOval).toBeDefined();
      expect(foundOval?.getId()).toBe('Oval-oval-1');
    });
  
    test('should delete oval by id', async () => {
      await ovalRepo.delete('Oval-oval-1');
      const foundOval = await ovalRepo.findOne('Oval-oval-1');
      expect(foundOval).toBeUndefined();
    });
  
    test('should find ovals by coordinates in the first quadrant', () => {
      const ovals = ovalRepo.findByCoordinatesInFirstQuadrant();
      expect(ovals.length).toBeGreaterThan(0);
    });
  
    test('should update warehouse when oval axes change', async () => {
      oval.updateAxes(5, 3);
      await warehouse.update(oval.getId());
      const updatedArea = warehouse.getShapeArea(oval.getId());
      const updatedPerimeter = warehouse.getShapePerimeter(oval.getId());
      expect(updatedArea).toBeCloseTo(11.780972450961723, 4);
      expect(updatedPerimeter).toBeCloseTo(25.132741228718345, 4);
    });
  });