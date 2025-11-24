import express from "express";
import * as leadController from "../controllers/leadController.js";
import { validate } from "../middlewares/validate.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { createLeadSchema } from "../validations/leadValidation.js";

const router = express.Router();

// POST /api/leads - Create a new lead
router.post("/", validate(createLeadSchema), asyncHandler(leadController.createLead));

// GET /api/leads - Get all leads
router.get("/", asyncHandler(leadController.getLeads));

export default router;
