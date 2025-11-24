import * as leadService from "../services/leadService.js";

export const createLead = async (req, res) => {
  const leadData = req.body;
  const lead = await leadService.createLead(leadData);
  return res.status(201).json({
    success: true,
    message: "Lead created successfully",
    data: lead,
  });
};

export const getLeads = async (req, res) => {
  const leads = await leadService.getAllLeads();
  return res.status(200).json({
    success: true,
    message: "Leads retrieved successfully",
    data: leads,
  });
};
