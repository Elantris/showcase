import { Route, Router, Switch } from 'wouter'
import { useHashLocation } from 'wouter/use-hash-location'
import Home from './pages/Home'
import { Layout } from './pages/components'
import GradientBorder from './pages/components/GradientBorder'
import InfiniteScrolling from './pages/components/InfiniteScrolling'
import LoadingBar from './pages/components/LoadingBar'
import ProgressBar from './pages/components/ProgressBar'
import SlashBox from './pages/components/SlashBox'
import Tabs from './pages/components/Tabs'

const App = () => (
  <Router hook={useHashLocation}>
    <Switch>
      <Route path="/components" nest>
        <Layout>
          <Switch>
            <Route path="/slash-box" component={SlashBox} />
            <Route path="/progress-bar" component={ProgressBar} />
            <Route path="/loading-bar" component={LoadingBar} />
            <Route path="/tabs" component={Tabs} />
            <Route path="/gradient-border" component={GradientBorder} />
            <Route path="/infinite-scrolling" component={InfiniteScrolling} />
          </Switch>
        </Layout>
      </Route>
      <Route component={Home} />
    </Switch>
  </Router>
)

export default App
