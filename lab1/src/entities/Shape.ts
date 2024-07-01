import { Point } from './Point';
import { IObservable } from '../Repositories/interfaces/IObservable';
import { IObserver } from '../Repositories/interfaces/IObserver';

export abstract class Shape implements IObservable {
  private observers: IObserver[] = [];

  constructor(public id: string, public point: Point) {}

  abstract area(): number;
  abstract perimeter(): number;

  addObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.id);
    }
  }

  // Example method that changes shape properties and notifies observers
  updateShapeProperties(): void {
    // Change shape properties...
    this.notifyObservers();
  }
}