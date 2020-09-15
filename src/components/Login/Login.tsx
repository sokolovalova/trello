import * as React from 'react';
import { AUTHORIZE_URL } from '../../utils/constants';
import { RouteChildrenProps } from 'react-router-dom';

export class Login extends React.Component<RouteChildrenProps> {

    render() {
        return (
            <div>
                <a href={AUTHORIZE_URL}>Click here</a>
            </div>
        );
    }
}