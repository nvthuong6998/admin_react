import * as React from 'react'
import {Admin, Resource, ListGuesser, EditGuesser} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

import {UserList, UserCreate} from './users'
import {PostList, PostEdit, PostCreate} from './posts'
import {ProductsList, ProductsEdit} from './products'
import {TypeList} from './type'
import {IphoneList, IphoneEdit, IphoneCreate} from './Iphone'
import {IpadList, IpadEdit, IpadCreate} from './Ipad'
import {MacList, MacEdit, MacCreate} from './mac'
import {TVList, TVEdit, TVCreate} from './tv'
import {ManagementList, ManagementEdit, ManagementCreate} from './management-oder'


import dashboard from './dashboard'
import authProvider from './authProvider'

import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import TvIcon from '@material-ui/icons/Tv';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import TabletMacIcon from '@material-ui/icons/TabletMac';


const dataProvider = jsonServerProvider('http://localhost:5000');

const App = () => (
  <Admin dashboard={dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="users" list={UserList} create={UserCreate} icon={UserIcon} />
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      {/* <Resource name="products" list={ProductsList} edit={ProductsEdit}  /> */}
      <Resource name="type" list={TypeList} />
      <Resource name="iphone" list={IphoneList} edit={IphoneEdit} create={IphoneCreate} icon={PhoneIphoneIcon} />
      <Resource name="ipad" list={IpadList} edit={IpadEdit} create={IpadCreate} icon={TabletMacIcon} />
      <Resource name="mac" list={MacList} edit={MacEdit} create={MacCreate} icon={LaptopMacIcon} />
      <Resource name="tv" list={TVList} edit={TVEdit} create={TVCreate} icon={TvIcon} />
      <Resource name="management-order" list={ManagementList} edit={ManagementEdit}  create={ManagementCreate} icon={SupervisorAccountIcon} />
  </Admin>
);

export default App;
