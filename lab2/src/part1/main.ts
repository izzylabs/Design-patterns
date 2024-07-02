import { Admin } from "./user";
import { FileServiceProxy } from "./fileService";
import { ReadFileCommand, WriteFileCommand } from "./command";

const adminUser = new Admin("adminUser");

const fileServiceProxy = new FileServiceProxy(adminUser.permissions);

const readFileCommand = new ReadFileCommand(
  fileServiceProxy,
  "data/example2.txt",
);
const writeFileCommand = new WriteFileCommand(
  fileServiceProxy,
  "data/example2.txt",
  "Hello, world!",
);

writeFileCommand.execute();
readFileCommand.execute();