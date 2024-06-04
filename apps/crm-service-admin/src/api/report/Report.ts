import { JsonValue } from "type-fest";

export type Report = {
  createdAt: Date;
  data: JsonValue;
  generatedAt: Date | null;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
