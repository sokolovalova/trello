import * as React from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { Dashbords } from '../Dashbords';

export class OAuth extends React.Component<RouteChildrenProps> {

    render() {
        console.log(this.props.location);
        return (<div>OAUTH</div>);
        
    }
}