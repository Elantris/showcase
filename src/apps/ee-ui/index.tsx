import { useLocation, useRoute } from 'wouter'
import Button from '../../components/Button'
import './index.css'
import Countdown from './pages/Countdown'
import GradientBorder from './pages/GradientBorder'
import InfiniteScrolling from './pages/InfiniteScrolling'
import LoadingBar from './pages/LoadingBar'
import MultipleBorderBox from './pages/MultipleBorderBox'
import ProgressBar from './pages/ProgressBar'
import SlashBox from './pages/SlashBox'
import Tabs from './pages/Tabs'

const pages = [
  {
    key: 'slash-box',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Slash box',
    children: <SlashBox />,
  },
  {
    key: 'progress-bar',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Progress Bar',
    children: <ProgressBar />,
  },
  {
    key: 'loading-bar',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Loading Bar',
    children: <LoadingBar />,
  },
  {
    key: 'tabs',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Tabs',
    children: <Tabs />,
  },
  {
    key: 'gradient-border',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Gradient Border',
    children: <GradientBorder />,
  },
  {
    key: 'multiple-border-box',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Multiple Border Box',
    children: <MultipleBorderBox />,
  },
  {
    key: 'infinite-scrolling',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Infinite Scrolling',
    children: <InfiniteScrolling />,
  },
  {
    key: 'countdown',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Countdown',
    children: <Countdown />,
  },
]

const EeUi = () => {
  const [, params] = useRoute('/ee-ui/:key?')
  const [, navigate] = useLocation()

  const key = params?.key || pages[0].key
  const activePage = pages.find((route) => route.key === key)

  return (
    <div className="h-dvh w-dvw space-y-8 overflow-x-hidden overflow-y-auto text-white">
      <header className="sticky top-0 right-0 left-0 z-30 flex h-12 items-center gap-4 bg-zinc-800">
        <button
          className="aspect-square h-full shrink-0 cursor-pointer bg-zinc-700 text-lg hover:bg-zinc-600"
          onClick={() => {
            navigate('~')
          }}
        >
          <i className="fa-solid fa-arrow-left" />
        </button>
        <h1 className="grow font-bold">EE UI</h1>
      </header>

      <nav className="flex w-full flex-wrap items-center justify-center gap-4 px-4">
        {pages.map((route) => {
          const isActive = activePage?.key === route.key

          return (
            <Button key={route.key} isActive={isActive} onClick={() => navigate(`/ee-ui/${route.key}`)}>
              <div className="aspect-square shrink-0">{route.icon}</div>
              <div className="">{route.label}</div>
            </Button>
          )
        })}
      </nav>

      <main className="mx-auto w-full max-w-3xl space-y-8 px-4 pb-8">{activePage?.children}</main>
    </div>
  )
}

export default EeUi
