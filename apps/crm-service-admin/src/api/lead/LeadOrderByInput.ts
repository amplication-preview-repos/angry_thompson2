import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  assignedAgent?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  source?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
