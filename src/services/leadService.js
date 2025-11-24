import * as leadRepository from "../repositories/leadRepository.js";
import { NotFoundError } from "../utils/errors.js";

export const createLead = async (leadData) => {
  // Validation is now handled by Zod in the route middleware
  // Only business logic here
  const lead = await leadRepository.create({
    email: leadData.email,
    description: leadData.description || null,
  });

  return lead;
};

export const getAllLeads = async () => {
  const leads = await leadRepository.findAll();
  return leads;
};

export const getLeadById = async (id) => {
  const lead = await leadRepository.findById(id);
  if (!lead) {
    throw new NotFoundError("Lead not found");
  }
  return lead;
};
