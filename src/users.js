import * as React from 'react'
import {
    List, 
    Datagrid, 
    TextField, 
    EmailField, 
    UrlField,
    Create,
    SimpleForm,
    ReferenceInput, TextInput,
} from 'react-admin'
import MyUrlField from './MyUrlField'

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="id" reference="users">
                <TextInput source="name" />
            </ReferenceInput>
                <TextInput source="name" />
                <TextInput source="email" />
                <TextInput source="address.street" />
                <TextInput source="phone" />
                <TextInput source="website" />
                <TextInput source="company.name" />
        </SimpleForm>
    </Create>
)