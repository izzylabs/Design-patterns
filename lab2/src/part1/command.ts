import { IFileService } from "./fileService";

interface ICommand {
  execute(): void;
}

export class ReadFileCommand implements ICommand {
  private fileService: IFileService;
  private readonly filePath: string;

  constructor(fileService: IFileService, filePath: string) {
    this.fileService = fileService;
    this.filePath = filePath;
  }

  execute(): void {
    try {
      const content = this.fileService.readFile(this.filePath);
      console.log("File content:", content);
    } catch (error) {
      console.error((error as Error).message);
    }
  }
}

export class WriteFileCommand implements ICommand {
  private fileService: IFileService;
  private readonly filePath: string;
  private readonly fileContent: string;

  constructor(fileService: IFileService, filePath: string, fileContent: string) {
    this.fileService = fileService;
    this.filePath = filePath;
    this.fileContent = fileContent;
  }

  execute(): void {
    try {
      this.fileService.writeFile(this.filePath, this.fileContent);
      console.log("File written successfully");
    } catch (error) {
      console.error((error as Error).message);
    }
  }
}

export class DeleteFileCommand implements ICommand {
  private fileService: IFileService;
  private readonly filePath: string;

  constructor(fileService: IFileService, filePath: string) {
    this.fileService = fileService;
    this.filePath = filePath;
  }

  execute(): void {
    try {
      this.fileService.deleteFile(this.filePath);
      console.log("File deleted successfully");
    } catch (error) {
      console.error((error as Error).message);
    }
  }
}