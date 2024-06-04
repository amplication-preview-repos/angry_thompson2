import { SortOrder } from "../../util/SortOrder";

export type CommunicationOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  recipient?: SortOrder;
  sentAt?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
