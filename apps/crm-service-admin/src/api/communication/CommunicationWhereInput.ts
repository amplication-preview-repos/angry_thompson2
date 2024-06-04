import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CommunicationWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  recipient?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
  typeField?: "Option1";
};
