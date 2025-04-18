import { Route, Router, Switch } from 'wouter'
import { useHashLocation } from 'wouter/use-hash-location'
import Home from './pages/Home'
import { Layout } from './pages/ee-ui'
import GradientBorder from './pages/ee-ui/GradientBorder'
import InfiniteScrolling from './pages/ee-ui/InfiniteScrolling'
import LoadingBar from './pages/ee-ui/LoadingBar'
import ProgressBar from './pages/ee-ui/ProgressBar'
import SlashBox from './pages/ee-ui/SlashBox'
import Tabs from './pages/ee-ui/Tabs'

const App = () => (
  <Router hook={useHashLocation}>
    <Switch>
      <Route path="/ee-ui" nest>
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
