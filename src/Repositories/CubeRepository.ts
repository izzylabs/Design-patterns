import { BaseRepository } from './BaseRepository';
import { Cube } from '../entities/Cube';
import { IComparator } from './Comparators/interface/IComparator';

export class CubeRepository extends BaseRepository<Cube> {
    private static instance: CubeRepository;
    private cubes: Cube[] = [];
  
    private constructor() {
      super();
    }
  
    static getInstance(): CubeRepository {
      if (!CubeRepository.instance) {
        CubeRepository.instance = new CubeRepository();
      }
      return CubeRepository.instance;
    }
  
    async create(item: Cube): Promise<boolean> {
      this.cubes.push(item);
      return true;
    }
  
    async update(id: string, item: Cube): Promise<boolean> {
      const index = this.cubes.findIndex(cube => cube.id === id);
      if (index !== -1) {
        this.cubes[index] = item;
        return true;
      }
      return false;
    }
  
    async delete(id: string): Promise<boolean> {
      const index = this.cubes.findIndex(cube => cube.id === id);
      if (index !== -1) {
        this.cubes.splice(index, 1);
        return true;
      }
      return false;
    }
  
    async find(item: Cube): Promise<Cube[]> {
      return this.cubes.filter(cube => cube.id === item.id);
    }
  
    async findOne(id: string): Promise<Cube | undefined> {
      return this.cubes.find(cube => cube.id === id);
    }
  
    getAll(): Cube[] {
      return this.cubes;
    }
  
    findByCoordinatesInFirstQuadrant(): Cube[] {
      return this.cubes.filter(cube => cube.origin.x > 0 && cube.origin.y > 0);
    }
  
    findByAreaRange(min: number, max: number): Cube[] {
      return this.cubes.filter(cube => cube.area() >= min && cube.area() <= max);
    }
  
    findByPerimeterRange(min: number, max: number): Cube[] {
      return this.cubes.filter(cube => cube.perimeter() >= min && cube.perimeter() <= max);
    }
  
    findByDistanceFromOriginRange(min: number, max: number): Cube[] {
      return this.cubes.filter(cube => {
        const distance = Math.sqrt(cube.origin.x ** 2 + cube.origin.y ** 2);
        return distance >= min && distance <= max;
      });
    }
  
    sortCubes(comparator: IComparator<Cube>): Cube[] {
      return this.cubes.sort(comparator.compare);
    }
  }