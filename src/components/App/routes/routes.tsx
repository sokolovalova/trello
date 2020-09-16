import * as React from 'react';
import {Redirect, RouteChildrenProps} from 'react-router-dom';
import {Routes} from '../interfacesApp';

import {Login} from '../../Login';
import {Dashbords} from '../../Dashbords';
import {NotFound} from '../../NotFound';
import {OAuth} from '../../OAuth';

export const ROUTES: Array<Routes>= [
{
    path: '/',
    exact: true,
    render: (props: RouteChildrenProps) => <Login {...props} />,
    title: '-Login-'
},
{
    path: '/dashbords',
    exact: true,
    render:(props:RouteChildrenProps)=><Dashbords {...props} />,
    title: '-Dashbords-'
},
{
    path: '/oauth',
    exact: true,
    render:(props:RouteChildrenProps)=><OAuth{...props}/>,
    isHidden:true
},
// {
//     path: '/',
//     exact: true,
//     render:(props:any)=><Redirect{...props} />,
//     isHidden:true
// },
{
    path: '/404',
    exact: true,
    render:(props:RouteChildrenProps)=><NotFound{...props} />,
    isHidden:true
}

]