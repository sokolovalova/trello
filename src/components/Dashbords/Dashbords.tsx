import * as React from 'react';
import { RouteChildrenProps } from 'react-router-dom';

import {KEY} from '../../utils/constants';


interface DashbordsProps extends RouteChildrenProps{
    token?: string;
}

export class Dashbords extends React.Component<DashbordsProps> {
state={
  token:''
}

getDashboars(){
    fetch(`https://api.trello.com/1/members/{id}/boards?key=${KEY}&token=${this.state.token}`, {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .catch(err => console.error(err));
}

getTokenFromUrl() {
  try {
    return window.location.hash.split('=')[1];
  }
  catch (e) { throw (e); }
}
componentDidMount(){
  // this.setState({token: this.getTokenFromUrl()});
  // console.log(this.state.token);
  // this.getDashboars();
}

    render() {
      
        return (
            <div>
                HELLO, THIS IS DASHBORDS!
            </div>
        );
    }
}