import { Shape } from '../entities/Shape';
import { Cube } from '../entities/Cube';
import { IObserver } from '../Repositories/interfaces/IObserver';
import { CubeRepository } from '../Repositories/CubeRepository';
import { OvalRepository } from '../Repositories/OvalRepository';

export class Warehouse implements IObserver {
  private static instance: Warehouse;
  private shapeAreas: Map<string, number> = new Map();
  private shapeVolumes: Map<string, number> = new Map();
  private shapePerimeters: Map<string, number> = new Map();
  private cubeRepo: CubeRepository;
  private ovalRepo: OvalRepository;

  private constructor() {
    this.cubeRepo = CubeRepository.getInstance();
    this.ovalRepo = OvalRepository.getInstance();
  }

  static getInstance(): Warehouse {
    if (!Warehouse.instance) {
      Warehouse.instance = new Warehouse();
    }
    return Warehouse.instance;
  }

  async update(shapeId: string): Promise<void> {
    const shape = await this.getShapeById(shapeId);
    if (shape) {
      this.shapeAreas.set(shape.id, shape.area());
      if (shape instanceof Cube) {
        this.shapeVolumes.set(shape.id, shape.volume());
      } else {
        this.shapeVolumes.set(shape.id, 0);
      }
      this.shapePerimeters.set(shape.id, shape.perimeter());
    }
  }

  private async getShapeById(id: string): Promise<Shape | undefined> {
    const cube = await this.cubeRepo.findOne(id);
    if (cube) return cube;
    const oval = await this.ovalRepo.findOne(id);
    if (oval) return oval;
    return undefined;
  }

  updateShape(shape: Shape): void {
    shape.addObserver(this);
    this.shapeAreas.set(shape.id, shape.area());
    if (shape instanceof Cube) {
      this.shapeVolumes.set(shape.id, shape.volume());
    } else {
      this.shapeVolumes.set(shape.id, 0);
    }
    this.shapePerimeters.set(shape.id, shape.perimeter());
  }

  removeShape(shape: Shape): void {
    shape.removeObserver(this);
    this.shapeAreas.delete(shape.id);
    this.shapeVolumes.delete(shape.id);
    this.shapePerimeters.delete(shape.id);
  }

  getShapeArea(id: string): number | undefined {
    return this.shapeAreas.get(id);
  }

  getShapeVolume(id: string): number | undefined {
    return this.shapeVolumes.get(id);
  }

  getShapePerimeter(id: string): number | undefined {
    return this.shapePerimeters.get(id);
  }

  getTotalArea(): number {
    let total = 0;
    this.shapeAreas.forEach(area => total += area);
    return total;
  }

  getTotalPerimeter(): number {
    let total = 0;
    this.shapePerimeters.forEach(perimeter => total += perimeter);
    return total;
  }
}