/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-constructor */

export interface User {
  name: string;
  age: number;
}

export class Database {
  private static instance: Database;
  private users: User[] = [];
  private constructor() {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  add(user: User) {
    this.users.push(user);
  }

  romve(index: number) {
    this.users.splice(index, 1);
  }

  show() {
    this.users.forEach((item) => {
      console.log(item);
    });
  }
}
