import { InputJsonValue } from "../../types";

export type ReportCreateInput = {
  data?: InputJsonValue;
  generatedAt?: Date | null;
  typeField?: "Option1" | null;
};
