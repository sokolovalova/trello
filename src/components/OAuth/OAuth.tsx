import * as React from 'react';
import { Route, RouteChildrenProps } from 'react-router-dom';
import { Dashbords } from '../Dashbords';

export class OAuth extends React.Component<RouteChildrenProps> {

    render() {
        console.log(this.props.location);
        return <Route path='/dashbords' exact render={(props:any)=><Dashbords {...props}/>} />;
        // return <Dashbords />;
        
    }
}