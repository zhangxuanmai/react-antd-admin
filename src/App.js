import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { RouteWithSubRoutes, routes } from './router'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        {
          /* <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />  */
        }
      </Switch>
    </BrowserRouter>
  )
}
export default App
