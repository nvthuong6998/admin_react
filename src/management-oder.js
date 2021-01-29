import * as React from 'react'
import {
    List, 
    Datagrid, 
    TextField, 
    ReferenceField, 
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    Filter,
    SimpleList, ImageField, ImageInput
} from 'react-admin'

import {useMediaQuery} from '@material-ui/core'


const ManagementTitle = ({record}) => {
    return <span>Mac  {record ? `"${record.title}"` : ""} </span>;
}

const ManagementFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Management Orders" source="id" reference="management-order" allowEmpty>
            <SelectInput optionText="product" />
        </ReferenceInput>
    </Filter>
);

export const ManagementList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
        <List filters={<ManagementFilter />} {...props}>
            {
                isSmall ? (
                    <SimpleList 
                        primaryText={record => record.title}
                        secondaryText={record => `${record.views} views`}
                        tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                    />
                ) : (
                    <Datagrid>
                        <TextField source="id" />
                        <TextField source="product" />
                        <TextField source="price" />
                        <TextField source="name" />
                        <TextField source="phone" />
                        <TextField source="address" />
                        <EditButton />
                    </Datagrid>
                )
            }

        </List>
    )
}

export const ManagementEdit = props => (
    <Edit title={<ManagementTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="id" reference="type"> 
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="product" />
            <TextInput source="price" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="address" />
        </SimpleForm>     
    </Edit>
);

export const ManagementCreate = props => (
    <Create {...props}> 
        <SimpleForm>
            <TextInput source="id" />            
            <TextInput source="product" />
            <TextInput source="price" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="address" />
        </SimpleForm>
    </Create>
);