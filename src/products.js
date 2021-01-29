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
    SimpleList, EmailField,
    ImageField,
    ImageInput
} 
from 'react-admin'

import {useMediaQuery} from '@material-ui/core'

const ProductsTitle = ({record}) => {
    return <span>Products  {record ? `"${record.title}"` : ""} </span>;
}

const ProductsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwayOn />
        <ReferenceInput label="Products" source="productsId" reference="products" allowEmpty>
            <SelectInput optionText="products" />
        </ReferenceInput>
    </Filter>
)

export const ProductsList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
        <List filters={<ProductsFilter />} {...props}>
            {isSmall ? (
                <SimpleList 
                    primaryText={record => record.title}
                    primaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleString()}
                />
            ): (
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField source="id" reference="products">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="name" />
                    <TextField source="price" />
                    <TextField source="title" />
                    <TextField source="description" />
                    <ImageField source="img" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    )
}

const PreviewImage = ({record, source}) => {
    if(typeof (record) == "string"){
        record = {
            [source]: record
        }
    }
    return <ImageField record={record} source={source}/>
}

export const ProductsEdit = props => (
    <Edit title={<ProductsTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="products"> 
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