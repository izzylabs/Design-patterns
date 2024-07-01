import { Task } from "./Task";

export class Project {
    private tasks: Task[] = [];

    constructor(private name: string) {}

    getName(): string {
        return this.name;
    }

    getTimeEstimate(): number {
        return this.tasks.reduce((total, task) => total + task.getTimeEstimate(), 0);
    }

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    removeTask(task: Task): void {
        this.tasks = this.tasks.filter(t => t !== task);
    }

    execute(): string {
        return this.tasks.map(task => task.execute()).join('\n');
    }
}