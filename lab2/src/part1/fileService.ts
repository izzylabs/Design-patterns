export interface IFileService {
  readFile(filePath: string): string;
  writeFile(filePath: string, fileContent: string): void;
  deleteFile(filePath: string): void;
}

export class FileService implements IFileService {
  readFile(filePath: string): string {
    const fs = require("fs");
    return fs.readFileSync(filePath, "utf8");
  }

  writeFile(filePath: string, fileContent: string): void {
    const fs = require("fs");
    fs.writeFileSync(filePath, fileContent, "utf8");
  }

  deleteFile(filePath: string): void {
    const fs = require("fs");
    fs.unlinkSync(filePath);
  }
}

export class FileServiceProxy implements IFileService {
  private fileService: FileService;
  private userPermissions: string[];

  constructor(userPermissions: string[]) {
    this.fileService = new FileService();
    this.userPermissions = userPermissions;
  }

  private hasPermission(permission: string): boolean {
    return this.userPermissions.includes(permission);
  }

  readFile(filePath: string): string {
    if (this.hasPermission("read")) {
      return this.fileService.readFile(filePath);
    } else {
      throw new Error("Access denied: No read permission");
    }
  }

  writeFile(filePath: string, fileContent: string): void {
    if (this.hasPermission("write")) {
      this.fileService.writeFile(filePath, fileContent);
    } else {
      throw new Error("Access denied: No write permission");
    }
  }

  deleteFile(filePath: string): void {
    if (this.hasPermission("delete")) {
      this.fileService.deleteFile(filePath);
    } else {
      throw new Error("Access denied: No delete permission");
    }
  }
}