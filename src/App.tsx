import { Route, Router, Switch } from 'wouter'
import { useHashLocation } from 'wouter/use-hash-location'
import Home from './pages/Home'
import { Layout } from './pages/ee-ui'
import routes from './pages/ee-ui/routes'

const App = () => (
  <Router hook={useHashLocation}>
    <Switch>
      <Route path="/ee-ui" nest>
        <Layout>
          <Switch>
            {routes.map((route) => (
              <Route key={route.key} path={`/${route.key}`} component={route.component} />
            ))}
          </Switch>
        </Layout>
      </Route>
      <Route component={Home} />
    </Switch>
  </Router>
)

export default App
