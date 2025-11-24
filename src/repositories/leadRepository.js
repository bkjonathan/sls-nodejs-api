import { eq } from "drizzle-orm";
import { getDbClient } from "../config/db.js";
import { LeadTable } from "../../db/schema.js";

class LeadRepository {
  constructor() {
    this.db = getDbClient();
  }

  async create(leadData) {
    const [lead] = await this.db.insert(LeadTable).values(leadData).returning();
    return lead;
  }

  async findAll() {
    const leads = await this.db.select().from(LeadTable);
    return leads;
  }

  async findById(id) {
    const [lead] = await this.db
      .select()
      .from(LeadTable)
      .where(eq(LeadTable.id, id));
    return lead;
  }
}

export default new LeadRepository();