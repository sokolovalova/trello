import * as React from 'react';
import { RouteChildrenProps } from 'react-router-dom';

import {KEY} from '../../utils/constants';


interface DashbordsProps extends RouteChildrenProps{
    token?: string;
}

export class Dashbords extends React.Component<DashbordsProps> {


getDashboars(){
    fetch(`https://api.trello.com/1/members/{id}/boards?key=${KEY}&token=${this.props.token}`, {
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
  .then(text => console.log(text))
  .catch(err => console.error(err));
}

componentDidMount(){
    if(this.props.token){
        this.getDashboars();
    }

}


    render() {
        return (
            <div>
                HELLO, THIS IS DASHBORDS!
            </div>
        );
    }
}