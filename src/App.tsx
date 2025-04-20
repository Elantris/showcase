import { Route, Router, Switch } from 'wouter'
import { useHashLocation } from 'wouter/use-hash-location'
import Home from './apps/Home'
import EeUi from './apps/ee-ui'

const App = () => (
  <Router hook={useHashLocation}>
    <Switch>
      <Route path="/ee-ui/:key?" component={EeUi} />
      <Route component={Home} />
    </Switch>
  </Router>
)

export default App
