import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGPASSWORD, PGUSER, PGDATABASE } = process.env;

// Creates a SQL connection using env variables
export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);

// This SQL function we export is used as a tagged template literal which allows us to write SQL queries safely
