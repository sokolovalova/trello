import React, { FunctionComponent } from "react";
import { RouteChildrenProps, Redirect, Route } from "react-router";
import {URL_ROUTES} from '../App/routes'
import { Dashbords } from "../Dashbords";

interface OAuthProps extends RouteChildrenProps {
  onSetToken: (token: string) => void;
}

export const OAuth: FunctionComponent<OAuthProps> = ({ location: { hash }, onSetToken }: OAuthProps)  => {
  const token = hash.split('=')[1];
  onSetToken(token);
  console.log('entered OAUTH');
  return <Redirect to= {URL_ROUTES.DASHBORDS} />
  // return <Route exact path='/dashbords' component={Dashbords} />;
}