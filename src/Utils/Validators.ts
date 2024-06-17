export class Validators {
    static validateCube(side: number): boolean {
      return side > 0;
    }
  
    static validateOval(majorAxis: number, minorAxis: number): boolean {
      return majorAxis > 0 && minorAxis > 0;
    }
  
    static validateShapeData(data: string): boolean {
      const parts = data.split(' ');
      if (parts.length < 5) return false;
      if (parts[0] === 'C' && parts.length !== 5) return false;
      if (parts[0] === 'Q' && parts.length !== 6) return false;
      return true;
    }
  }