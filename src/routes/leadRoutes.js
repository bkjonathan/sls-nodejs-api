import express from "express";
import leadController from "../controllers/leadController.js";

const router = express.Router();

// POST /api/leads - Create a new lead
router.post("/", leadController.createLead.bind(leadController));

// GET /api/leads - Get all leads
router.get("/", leadController.getLeads.bind(leadController));

export default router;
