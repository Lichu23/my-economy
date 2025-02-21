import { neon } from "@neondatabase/serverless"
import {drizzle} from "drizzle-orm/neon-http" 
import {config} from "dotenv"
import * as schema from "./schema"
//we create our connections

config({path: ".env.local"}) //tendremos los env en este path

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL!)

const db = drizzle(sql, {schema})

export {db}