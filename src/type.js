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

export const TypeList = props => {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
            </Datagrid>
        </List>
    );
}
    