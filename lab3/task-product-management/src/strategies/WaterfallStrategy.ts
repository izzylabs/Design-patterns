import { ExecutionStrategy } from '../models/ExecutionStrategy';

export class WaterfallStrategy implements ExecutionStrategy {
    execute(taskName: string): string {
        return `Executing task ${taskName} using Waterfall strategy.`;
    }
}