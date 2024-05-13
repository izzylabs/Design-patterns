export function validateShapeData(data: any[], expectedLength: number): boolean {
    if (data.length !== expectedLength) return false;
    return data.every(item => typeof item === 'number' && !isNaN(item));
}
