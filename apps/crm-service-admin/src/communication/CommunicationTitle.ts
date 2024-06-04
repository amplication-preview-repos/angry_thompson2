import { Communication as TCommunication } from "../api/communication/Communication";

export const COMMUNICATION_TITLE_FIELD = "recipient";

export const CommunicationTitle = (record: TCommunication): string => {
  return record.recipient?.toString() || String(record.id);
};
