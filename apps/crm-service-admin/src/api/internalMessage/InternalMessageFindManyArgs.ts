import { InternalMessageWhereInput } from "./InternalMessageWhereInput";
import { InternalMessageOrderByInput } from "./InternalMessageOrderByInput";

export type InternalMessageFindManyArgs = {
  where?: InternalMessageWhereInput;
  orderBy?: Array<InternalMessageOrderByInput>;
  skip?: number;
  take?: number;
};
