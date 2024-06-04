import { InputJsonValue } from "../../types";

export type ReportUpdateInput = {
  data?: InputJsonValue;
  generatedAt?: Date | null;
  typeField?: "Option1" | null;
};
