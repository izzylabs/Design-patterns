export class ShapeException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ShapeException";
    }
}
