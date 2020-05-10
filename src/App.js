import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { routes, RouteWithSubRoutes } from './router'
import Login from './views/login';
import Admin from './layout';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
    </BrowserRouter>
  )
}
export default App
