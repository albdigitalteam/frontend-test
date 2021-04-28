import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Posts, NotFound, Details } from 'pages';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Posts} />
        <Route exact path='/details/:postId' component={Details} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;