import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const InternalMessageCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Message" multiline source="message" />
        <TextInput label="Receiver" source="receiver" />
        <TextInput label="Sender" source="sender" />
        <DateTimeInput label="Timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};