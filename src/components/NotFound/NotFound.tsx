import * as React from 'react';
import { RouteChildrenProps } from 'react-router-dom';

export class NotFound extends React.Component<RouteChildrenProps> {

    render() {
        return (
            <div>
                <h1>ERROR: 404!</h1>
            </div>
        );
    }
}