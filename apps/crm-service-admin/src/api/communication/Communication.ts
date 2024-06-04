export type Communication = {
  content: string | null;
  createdAt: Date;
  id: string;
  recipient: string | null;
  sentAt: Date | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
