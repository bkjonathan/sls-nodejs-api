import { AppError } from "../utils/errors.js";

// Global error handler middleware
export const errorHandler = (err, req, res, next) => {
  // If it's an operational error (AppError), send formatted response
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // For unexpected errors, log and send generic message
  console.error("Unexpected error:", err);

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};
