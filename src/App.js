import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { routes, RouteWithSubRoutes } from './router'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </Switch>
    </BrowserRouter>
  )
}

export default App
