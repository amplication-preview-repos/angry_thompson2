import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assignedAgent?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  relatedLead?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
