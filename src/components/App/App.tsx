import * as React from 'react';
import './App.css';
import {Route, Link, Switch, Redirect} from 'react-router-dom';


import { STORAGE_TOKEN } from '../../utils/constants';
import { ROUTES } from './routes';
import { AppState, Routes } from './interfacesApp';
import { setToLocalStorage, getLocalStorage } from '../../utils';



export class App extends React.Component {

  state: AppState = {
    token: '',
    boards: []
  }

  async setToken(newToken: string) {
    this.setState({ token: newToken });
    await setToLocalStorage(STORAGE_TOKEN, newToken);
  }

  async getToken() {
    const token = await getLocalStorage(STORAGE_TOKEN);
    return token;
  }

  getTokenFromUrl() {
    try {
      return window.location.hash.split('=')[1];
    }
    catch (e) { throw (e); }
  }

  isLoggedIn() {
    console.log(!!this.state.token);
    return (!!this.state.token);
  }

  async componentDidMount() {

    if (!this.state.token) {
      const newToken = await this.getTokenFromUrl();
      this.setToken(newToken);
      console.log(this.state.token);
    }
  }

  renderNavigation(){
    return(
      <header>
        {ROUTES.map((oneRoute:Routes, i:number)=>{
         return oneRoute.isHidden?null:<Link key={i} to={oneRoute.path}>{oneRoute.title}</Link>
        })}
      </header>        
    );}

  renderContent(){
    return(
      <div>
        <Switch>
        {ROUTES.map((oneRoute:Routes, i:number)=>{
         return <Route 
         key={i} 
         exact={oneRoute.exact} 
         path={oneRoute.path} 
         render={oneRoute.render(...props)}/>
        })}
        <Redirect to='/404' />
        </Switch>
        
      </div>
    );
  }
  render() {

    return (
      <div>
        {this.renderNavigation()}
        {this.renderContent()}
      </div>
    );

  }

}

export default App;