import leadRepository from "../repositories/leadRepository.js";

class LeadService {
  async createLead(leadData) {
    // Validate input
    if (!leadData.email) {
      throw new Error("Email is required");
    }

    // You can add more business logic here (e.g., email validation, duplicate checks)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(leadData.email)) {
      throw new Error("Invalid email format");
    }

    // Create lead via repository
    const lead = await leadRepository.create({
      email: leadData.email,
      description: leadData.description || null,
    });

    return lead;
  }

  async getAllLeads() {
    const leads = await leadRepository.findAll();
    return leads;
  }

  async getLeadById(id) {
    const lead = await leadRepository.findById(id);
    if (!lead) {
      throw new Error("Lead not found");
    }
    return lead;
  }
}

export default new LeadService();
