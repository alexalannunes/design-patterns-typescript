import { Database } from "./db-users";

const dbA = Database.getInstance();

dbA.add({ name: "alex", age: 24 });
dbA.add({ name: "alan", age: 24 });

export { dbA };
