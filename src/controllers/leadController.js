import leadService from "../services/leadService.js";

class LeadController {
  async createLead(req, res) {
    try {
      const leadData = req.body;
      const lead = await leadService.createLead(leadData);
      return res.status(201).json({
        success: true,
        message: "Lead created successfully",
        data: lead,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getLeads(req, res) {
    try {
      const leads = await leadService.getAllLeads();
      return res.status(200).json({
        success: true,
        message: "Leads retrieved successfully",
        data: leads,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default new LeadController();
