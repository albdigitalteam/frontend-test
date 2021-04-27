import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Posts, NotFound } from 'pages';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Posts} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;