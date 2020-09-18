import * as React from 'react';
import {Redirect, RouteChildrenProps} from 'react-router-dom';

import {Login} from '../../Login';
import {Dashbords} from '../../Dashbords';
import {NotFound} from '../../NotFound';
import {OAuth} from '../../OAuth';

export interface Routes{
    path: URL_ROUTES;
    // component: any;
    render: (props: RouteChildrenProps) => any,
    title?: string;
    exact?: boolean;
    isHidden?:boolean;
    isProtected?:boolean;
  }

export enum URL_ROUTES{
    DASHBORDS= '/dashbords',
    LOGIN = '/login',
    OAUTH = 'oauth',
    NOT_FOUND = '/404',
    HOME='/'

}

export const ROUTES: Array<Routes>= [
{
    path: URL_ROUTES.LOGIN,
    exact: true,
    render: (props: RouteChildrenProps) => <Login {...props} />,
    title: '-Login-'
},
{
    path: URL_ROUTES.DASHBORDS,
    exact: true,
    render:(props:RouteChildrenProps)=><Dashbords {...props} />,
    title: '-Dashbords-',
    isProtected: true
},
// {
//     path: '/oauth',
//     exact: true,
//     render:(props:RouteChildrenProps)=><OAuth {...props}/>,
//     isHidden:true
// },
{
    path: URL_ROUTES.HOME,
    exact: true,
    render:(props:any)=><Redirect{...props} />,
    isHidden:true
},
{
    path: URL_ROUTES.NOT_FOUND,
    exact: true,
    render:(props:RouteChildrenProps)=><NotFound{...props} />,
    isHidden:true
}

]