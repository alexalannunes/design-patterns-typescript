import { Database } from "./db-users";

const dbB = Database.getInstance();

dbB.add({ name: "nunes", age: 24 });
dbB.add({ name: "lima", age: 24 });

export { dbB };
