import { eq } from "drizzle-orm";
import { getDbClient } from "../config/db.js";
import { LeadTable } from "../../db/schema.js";

const db = getDbClient();

export const create = async (leadData) => {
  const [lead] = await db.insert(LeadTable).values(leadData).returning();
  return lead;
};

export const findAll = async () => {
  const leads = await db.select().from(LeadTable);
  return leads;
};

export const findById = async (id) => {
  const [lead] = await db.select().from(LeadTable).where(eq(LeadTable.id, id));
  return lead;
};