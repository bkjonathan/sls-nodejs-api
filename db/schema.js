import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const LeadTable = pgTable("leads", {
  id: serial("id").primaryKey().notNull(),
  email: text("email"),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
});
