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
    SimpleList
} from 'react-admin'

import {useMediaQuery} from '@material-ui/core'

const PostTitle = ({record}) => {
    return <span>Post {record ? `"${record.title}"`: "" }</span>;
}

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
        <List filters={<PostFilter />} {...props}>
            {
                isSmall ? (
                    <SimpleList 
                        primaryText={record => record.title}
                        secondaryText={record => `${record.views} views`}
                        tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                    />
                ) : (
                    <Datagrid>
                        

                        <ReferenceField source="name" reference="users">
                            <TextField source="name" />
                        </ReferenceField>
                        <TextField source="author" />
                        <TextField source="title" />
                        <TextField source="body" />
                        <EditButton />
                    </Datagrid>
                )
            }

        </List>
    );
}

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="id" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}> 
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="name" reference="users">
                <SelectInput source="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput source="author" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
)