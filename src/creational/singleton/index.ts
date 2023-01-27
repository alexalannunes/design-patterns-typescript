import { dbA } from "./db-a";
import { dbB } from "./db-b";

// const dbA = Database.getInstance();
// dbA.add({ name: "alex", age: 24 });
// dbA.add({ name: "alan", age: 24 });

// const dbB = Database.getInstance();
// dbB.add({ name: "nunes", age: 24 });
// dbB.add({ name: "lima", age: 24 });

dbB.show(); // all users
console.log(dbA === dbB);
