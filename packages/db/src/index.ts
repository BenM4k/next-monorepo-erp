// Make sure to install the 'pg' package
import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import * as schema from "./schemas/schema"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export const drizzleSchema = schema
export const db = drizzle(pool, { schema })
