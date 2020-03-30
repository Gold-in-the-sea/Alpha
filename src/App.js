import React from 'react';
import {HashRouter,Route} from 'react-router-dom'
import Administrator from './pages/Administrator'
import loadalbe from './utils/loadable'

const Login = loadalbe(()=>import('./pages/Login'))
const Admin = loadalbe(()=>import('./pages/Admin'))
class App extends React.Component{

  render(){
    return(
        <HashRouter>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' render={()=>{
            return(
              <Admin>
                <Route path='/admin/administrator' component={Administrator}></Route>
              </Admin>
            )
          }}></Route>
        </HashRouter>
    )
  }
}
export default App;
