import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReportWhereInput = {
  data?: JsonFilter;
  generatedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  typeField?: "Option1";
};
