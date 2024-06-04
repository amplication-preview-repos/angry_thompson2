export type Task = {
  assignedAgent: string | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  relatedLead: string | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
