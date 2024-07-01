import fs from 'fs';
import path from 'path';

export function readShapesFromFile(filePath: string): string[] {
  return fs.readFileSync(path.resolve(filePath), 'utf-8').split('\n').filter(Boolean);
}