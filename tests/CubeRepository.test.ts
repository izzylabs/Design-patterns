import { Cube } from '../src/entities/Cube';
import { Point } from '../src/entities/Point';
import { CubeRepository } from '../src/Repositories/CubeRepository';
import { Warehouse } from '../src/Utils/Warehouse';

describe('CubeRepository', () => {
    let cubeRepo: CubeRepository;
    let warehouse: Warehouse;
    let cube: Cube;
  
    beforeEach(async () => {
      cubeRepo = CubeRepository.getInstance();
      warehouse = Warehouse.getInstance();
      cube = new Cube(new Point(1, 1), 3, 'cube-1');
      await cubeRepo.create(cube);
      warehouse.updateShape(cube);
    });
  
    test('should create and find cube by id', async () => {
      const foundCube = await cubeRepo.findOne('Cube-cube-1');
      expect(foundCube).toBeDefined();
      expect(foundCube?.getId()).toBe('Cube-cube-1');
    });
  
    test('should delete cube by id', async () => {
      await cubeRepo.delete('Cube-cube-1');
      const foundCube = await cubeRepo.findOne('Cube-cube-1');
      expect(foundCube).toBeUndefined();
    });
  
    test('should find cubes by coordinates in the first quadrant', () => {
      const cubes = cubeRepo.findByCoordinatesInFirstQuadrant();
      expect(cubes.length).toBeGreaterThan(0);
    });
  
    test('should update warehouse when cube edge length changes', async () => {
      cube.updateEdgeLength(4);
      await warehouse.update(cube.getId());
      const updatedArea = warehouse.getShapeArea(cube.getId());
      const updatedPerimeter = warehouse.getShapePerimeter(cube.getId());
      expect(updatedArea).toBe(96);
      expect(updatedPerimeter).toBe(48);
    });
  });