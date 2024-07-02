import { ExecutionStrategy } from '../models/ExecutionStrategy';

export class AgileStrategy implements ExecutionStrategy {
    execute(taskName: string): string {
        return `Executing task ${taskName} using Agile strategy.`;
    }
}