import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InternalMessageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InternalMessages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Message" source="message" />
        <TextField label="Receiver" source="receiver" />
        <TextField label="Sender" source="sender" />
        <TextField label="Timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
