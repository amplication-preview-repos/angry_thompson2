import { InternalMessage as TInternalMessage } from "../api/internalMessage/InternalMessage";

export const INTERNALMESSAGE_TITLE_FIELD = "receiver";

export const InternalMessageTitle = (record: TInternalMessage): string => {
  return record.receiver?.toString() || String(record.id);
};
