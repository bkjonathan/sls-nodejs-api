import serverless from "serverless-http";
import express from "express";
import { neon } from "@neondatabase/serverless";

const app = express();

async function dbClient() {
  return neon(process.env.DATABASE_URL);
}

app.get("/", async (req, res, _next) => {
  const sql = await dbClient();
  const [results] = await sql`select now();`
  return res.status(200).json({
    message: "Hello from root!",
    database: process.env.DATABASE_URL,
    results
  });
});

app.get("/hello", (req, res, _next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, _next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

// Server Full Stack
// app.listen(3000, () => console.log("Server is running on port 3000"));

export const handler = serverless(app);
