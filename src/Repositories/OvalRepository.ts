import { BaseRepository } from './BaseRepository';
import { Oval } from '../entities/Oval';
import { IComparator } from './Comparators/interface/IComparator';

export class OvalRepository extends BaseRepository<Oval> {
    private static instance: OvalRepository;
    private ovals: Oval[] = [];
  
    private constructor() {
      super();
    }
  
    static getInstance(): OvalRepository {
      if (!OvalRepository.instance) {
        OvalRepository.instance = new OvalRepository();
      }
      return OvalRepository.instance;
    }
  
    async create(item: Oval): Promise<boolean> {
      this.ovals.push(item);
      return true;
    }
  
    async update(id: string, item: Oval): Promise<boolean> {
      const index = this.ovals.findIndex(oval => oval.id === id);
      if (index !== -1) {
        this.ovals[index] = item;
        return true;
      }
      return false;
    }
  
    async delete(id: string): Promise<boolean> {
      const index = this.ovals.findIndex(oval => oval.id === id);
      if (index !== -1) {
        this.ovals.splice(index, 1);
        return true;
      }
      return false;
    }
  
    async find(item: Oval): Promise<Oval[]> {
      return this.ovals.filter(oval => oval.id === item.id);
    }
  
    async findOne(id: string): Promise<Oval | undefined> {
      return this.ovals.find(oval => oval.id === id);
    }
  
    getAll(): Oval[] {
      return this.ovals;
    }
  
    findByCoordinatesInFirstQuadrant(): Oval[] {
      return this.ovals.filter(oval => oval.point.x > 0 && oval.point.y > 0);
    }
  
    findByAreaRange(min: number, max: number): Oval[] {
      return this.ovals.filter(oval => oval.area() >= min && oval.area() <= max);
    }
  
    findByPerimeterRange(min: number, max: number): Oval[] {
      return this.ovals.filter(oval => oval.perimeter() >= min && oval.perimeter() <= max);
    }
  
    findByDistanceFromOriginRange(min: number, max: number): Oval[] {
      return this.ovals.filter(oval => {
        const distance = Math.sqrt(oval.point.x ** 2 + oval.point.y ** 2);
        return distance >= min && distance <= max;
      });
    }
  
    sortOvals(comparator: IComparator<Oval>): Oval[] {
      return this.ovals.sort(comparator.compare);
    }
  }