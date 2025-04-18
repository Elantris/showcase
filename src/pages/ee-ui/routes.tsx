import GradientBorder from './GradientBorder'
import InfiniteScrolling from './InfiniteScrolling'
import LoadingBar from './LoadingBar'
import MultipleBorderBox from './MultipleBorderBox'
import ProgressBar from './ProgressBar'
import SlashBox from './SlashBox'
import Tabs from './Tabs'

const routes = [
  {
    key: 'slash-box',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Slash box',
    component: SlashBox,
  },
  {
    key: 'progress-bar',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Progress Bar',
    component: ProgressBar,
  },
  {
    key: 'loading-bar',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Loading Bar',
    component: LoadingBar,
  },
  {
    key: 'tabs',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Tabs',
    component: Tabs,
  },
  {
    key: 'gradient-border',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Gradient Border',
    component: GradientBorder,
  },
  {
    key: 'multiple-border-box',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Multiple Border Box',
    component: MultipleBorderBox,
  },
  {
    key: 'infinite-scrolling',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Infinite Scrolling',
    component: InfiniteScrolling,
  },
]

export default routes
