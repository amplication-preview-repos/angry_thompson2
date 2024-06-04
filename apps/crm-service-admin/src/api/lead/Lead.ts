export type Lead = {
  assignedAgent: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  source: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
