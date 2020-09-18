import React, {FunctionComponent} from 'react';
import { Redirect, Route, RouteProps,RouteComponentProps } from 'react-router-dom';

import {URL_ROUTES} from '../App/routes';

interface ProtectedRouteProps extends RouteProps{
    isLoggedIn:boolean;
    children?:any;

}


export const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({ render, isLoggedIn, ...rest }) => {
  // console.log(location);
  // console.log(`IsLog: ${isLoggedIn},,, render: ${render}`);
    return (
      <Route
        {...rest}
        render={( routeCompProps: RouteComponentProps ) =>
          isLoggedIn ? (
            render!(routeCompProps)
          ) : (
            <Redirect
              to={{
                pathname: URL_ROUTES.LOGIN,
                state: { from: routeCompProps.location }
              }}
            />
          )
        }
      />
    );
  }