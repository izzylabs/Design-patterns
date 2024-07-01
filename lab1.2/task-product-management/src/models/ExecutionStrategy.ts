export interface ExecutionStrategy {
    execute(taskName: string): string;
}