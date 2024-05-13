import fs from 'fs';

export function readShapeData(filePath: string): any[] {
    const lines = fs.readFileSync(filePath, 'utf-8').split('\n');
    return lines.map(line => {
        const parts = line.split(' ');
        return {
            type: parts[0],
            id: parts[1],
            name: parts[2],
            data: parts.slice(3).map(Number)
        };
    });
}
