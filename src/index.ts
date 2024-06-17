import path from 'path';
import { FileReader } from './Utils/FileReader';
import { ShapeFactory } from './factory/ShapeFactory';
import { logger } from './Utils/Loggers';
import { Cube } from './entities/Cube';
import { Oval } from './entities/Oval';

try {
  const filePath = path.resolve(__dirname, '..', 'data', 'shapes.txt');
  const lines = FileReader.readShapesFromFile(filePath);
  logger.info(`Read ${lines.length} lines from shapes.txt`);

  const shapes = lines.map(line => {
    try {
      logger.info(`Processing line: ${line}`);
      const shape = ShapeFactory.createShape(line);
      logger.info(`Created shape: ${JSON.stringify(shape)}`);
      return shape;
    } catch (error) {
      logger.error(`Error creating shape from line "${line}": ${error.message}`);
      return null;
    }
  }).filter(Boolean);

  console.log(`Total shapes processed: ${shapes.length}`);
  shapes.forEach(shape => {
    if (shape instanceof Cube) {
      console.log(`Cube ID: ${shape.getId()} - Surface Area: ${shape.surfaceArea()}, Volume: ${shape.volume()}`);
    } else if (shape instanceof Oval) {
      console.log(`Oval ID: ${shape.id} - Area: ${shape.area()}, Perimeter: ${shape.perimeter()}, Is Oval: ${shape.isShape()}, Is Circle: ${shape.isCircle()}`);
    }
  });
} catch (error) {
  logger.error(`Unhandled exception in reading shapes: ${error instanceof Error ? error.message : 'Unknown error'}`);
}