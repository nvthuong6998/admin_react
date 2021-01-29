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


const MacTitle = ({record}) => {
    return <span>Mac  {record ? `"${record.title}"` : ""} </span>;
}

const MacFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Mac" source="id" reference="mac" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const MacList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
        <List filters={<MacFilter />} {...props}>
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
                        <TextField source="name" />
                        <TextField source="price" />
                        <TextField source="title" />
                        <TextField source="description" />
                        <ImageField source="img" />
                        <EditButton />
                    </Datagrid>
                )
            }

        </List>
    )
}

export const MacEdit = props => (
    <Edit title={<MacTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="id" reference="type"> 
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="price" />
            <TextInput source="title" />
            <TextInput source="description" />
            <ImageInput source="img"  accept="image/*" multiple >
                <ImageField source="img" />
            </ImageInput>
        </SimpleForm>     
    </Edit>
);

export const MacCreate = props => (
    <Create {...props}> 
        <SimpleForm>
            <TextInput source="id" />            
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="title" />
            <TextInput multiline multiline source="description" />
            <ImageInput source="img" />
        </SimpleForm>
    </Create>
);