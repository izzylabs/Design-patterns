import path from 'path';
import logger from './Utils/Loggers';
import { readShapesFromFile } from './Utils/ShapeReader';
import { createShapes } from './Utils/ShapeCreator';
import { Cube } from './entities/Cube';
import { Oval } from './entities/Oval';
import { CubeRepository } from './Repositories/CubeRepository';
import { OvalRepository } from './Repositories/OvalRepository';
import { Warehouse } from './Utils/Warehouse';

async function main() {
    try {
      const filePath = path.resolve(__dirname, '../data/shapes.txt');
      const lines = readShapesFromFile(filePath);
      const shapes = createShapes(lines);
  
      const cubeRepo = CubeRepository.getInstance();
      const ovalRepo = OvalRepository.getInstance();
      const warehouse = Warehouse.getInstance();
  
      logger.info(`Total shapes processed: ${shapes.length}`);
      for (const shape of shapes) {
        if (shape instanceof Cube) {
          console.log(`${shape.getId()} - Surface Area: ${shape.surfaceArea()}, Volume: ${shape.volume()}, Volume Ratio after slicing XY: ${shape.volumeRatioAfterSliceXY()}, Is Base On Coordinate Plane: ${shape.baseOnCoordinatePlane()}`);
          await cubeRepo.create(shape);
        } else if (shape instanceof Oval) {
          console.log(`${shape.getId()} - Area: ${shape.area()}, Perimeter: ${shape.perimeter()}, Is Oval: ${shape.isShape()}, Is Circle: ${shape.isCircle()}, Intersects Axis: ${shape.intersectsAxis(10)}`);
          await ovalRepo.create(shape);
        }
        await warehouse.update(shape.id);
      }
  
      // Other operations like sorting, filtering, and updating shapes...
  
    } catch (error) {
      logger.error(`Unhandled exception in reading shapes: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
  
  main();