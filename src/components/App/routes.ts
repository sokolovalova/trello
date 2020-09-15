import {Redirect} from 'react-router-dom';
import {Routes} from './interfacesApp';

import {Login} from '../Login';
import {Dashbords} from '../Dashbords';
import {NotFound} from '../NotFound';
import {OAuth} from '../OAuth';

export const ROUTES= [
{
    path: '/',
    exact: true,
    render: (props: any) => <Login {...props} />,
    // component: Login,
    title: '-Login-'
},
{
    path: '/dashbords',
    exact: true,
    // component: Dashbords,
    render:(props:any)=><Dashbords{...props} />,
    title: '-Dashbords-'
},
{
    path: '/oauth',
    exact: true,
    render:(props:any)=><OAuth{...props}/>,
    isHidden:true
},
{
    path: '/',
    exact: true,
    // component: Redirect,
    render:(props:any)=><Redirect />,
    isHidden:true
},
{
    path: '/404',
    exact: true,
    // component: NotFound,
    render:(props:any)=><NotFound{...props} />,
    isHidden:true
}

]