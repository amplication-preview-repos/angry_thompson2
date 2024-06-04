export type TaskUpdateInput = {
  assignedAgent?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  relatedLead?: string | null;
  status?: "Option1" | null;
  title?: string | null;
};
