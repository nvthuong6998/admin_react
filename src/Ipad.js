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


const IpadTitle = ({record}) => {
    return <span>Iphone  {record ? `"${record.title}"` : ""} </span>;
}

const IpadFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Iphone" source="id" reference="iphone" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const IpadList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
        <List filters={<IpadFilter />} {...props}>
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

export const IpadEdit = props => (
    <Edit title={<IpadTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="id" reference="type"> 
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="price" />
            <TextInput source="title" />
            <TextInput source="description" />
            <ImageInput source="img"  accept="image/*" multiple={false} >
                <ImageField source="img" />
            </ImageInput>
        </SimpleForm>     
    </Edit>
);

export const IpadCreate = props => (
    <Create {...props}> 
        <SimpleForm>
            <TextInput source="id" />            
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="title" />
            <TextInput multiline source="description" />
            <ImageInput source="img" />
        </SimpleForm>
    </Create>
);