type Permission = "read" | "write" | "delete";

interface IUser {
  readonly username: string;
  permissions: Permission[];
  readonly userRole: string;

  createUser(username: string): IUser;
}

export class User implements IUser {
  username: string;
  permissions: Permission[] = ["read"];
  userRole: string = "user";

  constructor(username: string) {
    this.username = username;
  }

  createUser(username: string): User {
    return new User(username);
  }
}

export class Admin implements IUser {
  username: string;
  readonly permissions: Permission[] = ["read", "write", "delete"];
  readonly userRole: string = "admin";

  constructor(username: string) {
    this.username = username;
  }

  createUser(username: string): User {
    return new User(username);
  }

  createAdmin(username: string): Admin {
    return new Admin(username);
  }

  addPermissionToUser(user: User, permission: Permission): void {
    if (user.permissions.includes(permission)) {
      throw new Error("User already has this permission");
    }
    user.permissions.push(permission);
  }
}
