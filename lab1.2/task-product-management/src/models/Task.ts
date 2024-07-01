import { ExecutionStrategy } from './ExecutionStrategy';

export class Task {
    constructor(private name: string, private timeEstimate: number, private strategy: ExecutionStrategy) {}

    getName(): string {
        return this.name;
    }

    getTimeEstimate(): number {
        return this.timeEstimate;
    }

    execute(): string {
        return this.strategy.execute(this.name);
    }
}
