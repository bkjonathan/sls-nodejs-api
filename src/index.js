import serverless from "serverless-http";
import express from "express";
import leadRoutes from "./routes/leadRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/leads", leadRoutes);

// 404 Handler
app.use((req, res, _next) => {
  return res.status(404).json({
    success: false,
    error: "Not Found",
  });
});

// Global Error Handler (must be last)
app.use(errorHandler);

export const handler = serverless(app);
