import { drizzle } from "drizzle-orm/neon-http";
import { neon, neonConfig } from "@neondatabase/serverless";
import * as schema from "../../db/schema.js";

let dbInstance = null;

export function getDbClient() {
  if (!dbInstance) {
    // non-pooling
    neonConfig.fetchConnectionCache = true;
    const sql = neon(process.env.DATABASE_URL);
    dbInstance = drizzle({ client: sql, schema });
  }
  return dbInstance;
}
