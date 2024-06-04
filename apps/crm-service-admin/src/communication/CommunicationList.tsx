import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CommunicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Communications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Recipient" source="recipient" />
        <TextField label="Sent At" source="sentAt" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
