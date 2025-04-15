import { Route, Router, Switch } from 'wouter'
import { useHashLocation } from 'wouter/use-hash-location'
import Home from './pages/Home'
import { Layout } from './pages/components'
import Infinite from './pages/components/Infinite'
import Loading from './pages/components/Loading'
import Slash from './pages/components/Slash'
import Tabs from './pages/components/Tabs'

const App = () => (
  <Router hook={useHashLocation}>
    <Switch>
      <Route path="/components" nest>
        <Layout>
          <Switch>
            <Route path="/loading" component={Loading} />
            <Route path="/slash" component={Slash} />
            <Route path="/infinite" component={Infinite} />
            <Route path="/tabs" component={Tabs} />
          </Switch>
        </Layout>
      </Route>
      <Route component={Home} />
    </Switch>
  </Router>
)

export default App
