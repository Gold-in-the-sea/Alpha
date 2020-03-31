import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Administrator from './pages/Administrator'
import loadalbe from './utils/loadable'
import Goods from './pages/Goods'

const Login = loadalbe(() => import('./pages/Login'))
const Admin = loadalbe(() => import('./pages/Admin'))
class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Redirect exact from='/' to='/login'></Redirect>
        <Redirect exact from='/admin' to='/admin/administrator'></Redirect>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' render={() => {
          return (
            <Admin>
              <Route path='/admin/administrator' component={Administrator}></Route>
              <Route path='/admin/goods' component={Goods}></Route>
            </Admin>
          )
        }}></Route>
      </HashRouter>
    )
  }
}
export default App;
