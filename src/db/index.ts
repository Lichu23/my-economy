import { neon } from "@neondatabase/serverless"
import {drizzle} from "drizzle-orm/neon-http" 
import {config} from "dotenv"

//we create our connections

config({path: ".env.local"}) //tendremos los env en este path

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql)

export {db}