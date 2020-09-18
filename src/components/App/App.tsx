import * as React from 'react';
import './App.css';
import { Route, Link, Switch, Redirect, RouteChildrenProps, RouteComponentProps, withRouter, RouteProps } from 'react-router-dom';

import { ProtectedRoute } from '../ProtectedRoute';
import { STORAGE_TOKEN } from '../../utils/constants';
import { ROUTES } from './routes/routes';
import { Routes } from './routes';
import { setToLocalStorage, getLocalStorage } from '../../utils';
import { OAuth } from '../OAuth';

interface Board {
  id: string;
  name: string;
  pinned: boolean;
  desc?: string;
}
interface AppState {
  token: string;
  boards: Array<Board>;
}
interface AppProps extends RouteComponentProps{}

class App extends React.Component<AppProps, AppState> {

  state: AppState = {
    token: '',
    boards: []
  }

  setToken = (newToken: string) => {
    this.setState({ token: newToken });
    setToLocalStorage(STORAGE_TOKEN, newToken);
  } 

  async getTokenFromLocalStorage() {
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
    return (!!this.state.token);
  }

  async componentDidMount() {
    // console.log(this.props);
    if (!this.state.token) {
      const newToken = await this.getTokenFromUrl();
      this.setToken(newToken);
      console.log('App token:',this.state.token);
    }
  }

  renderNavigation() {
    return (
      <header>
        {ROUTES.map((oneRoute: Routes, i: number) => {
          return oneRoute.isHidden ? null : <Link key={i} to={oneRoute.path}>{oneRoute.title}</Link>
        })}
      </header>
    );
  }

  renderContent() {
    return (
      <div>
        <Switch>
          {ROUTES.map((render, i) =>this.renderRoute(render, i))}
         
          {/* <Route path='/oauth'  render={(props: RouteChildrenProps) => <OAuth {...props} onSetToken={this.setToken} />} />;    */}
          {/* <Redirect  to='/404' /> */}
        </Switch>

      </div>
    );
  }

  renderRoute = (oneRoute: Routes, i: number)=> {
    if (oneRoute.isProtected) {
      return <ProtectedRoute
      key={i}
      exact={oneRoute.exact}
      path={oneRoute.path}
      render={(props) => oneRoute.render({ ...props })}
      isLoggedIn={this.isLoggedIn()} />
    }
    else {
      return <Route
        key={i}
        exact={oneRoute.exact}
        path={oneRoute.path}
        render={(props) => oneRoute.render({ ...props })} />
    }
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
const WithRouterApp = withRouter(App);
export {WithRouterApp as App};