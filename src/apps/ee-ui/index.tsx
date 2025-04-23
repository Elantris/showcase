import { lazy, Suspense } from 'react'
import { useLocation, useRoute } from 'wouter'
import Button from '../../components/Button'
import './index.css'
import LuckyWheel from './pages/LuckyWheel'

const SlashBox = lazy(() => import('./pages/SlashBox'))
const ProgressBar = lazy(() => import('./pages/ProgressBar'))
const LoadingBar = lazy(() => import('./pages/LoadingBar'))
const Tabs = lazy(() => import('./pages/Tabs'))
const GradientBorder = lazy(() => import('./pages/GradientBorder'))
const MultipleBorderBox = lazy(() => import('./pages/MultipleBorderBox'))
const InfiniteScrolling = lazy(() => import('./pages/InfiniteScrolling'))
const Countdown = lazy(() => import('./pages/Countdown'))

const pages = [
  {
    key: 'slash-box',
    icon: <i className="fa-brands fa-css" />,
    label: 'Slash box',
    children: <SlashBox />,
  },
  {
    key: 'progress-bar',
    icon: <i className="fa-brands fa-css" />,
    label: 'Progress Bar',
    children: <ProgressBar />,
  },
  {
    key: 'loading-bar',
    icon: <i className="fa-brands fa-css" />,
    label: 'Loading Bar',
    children: <LoadingBar />,
  },
  {
    key: 'gradient-border',
    icon: <i className="fa-brands fa-css" />,
    label: 'Gradient Border',
    children: <GradientBorder />,
  },
  {
    key: 'multiple-border-box',
    icon: <i className="fa-brands fa-css" />,
    label: 'Multiple Border Box',
    children: <MultipleBorderBox />,
  },
  {
    key: 'tabs',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Tabs',
    children: <Tabs />,
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
  {
    key: 'lucky-wheel',
    icon: <i className="fa-solid fa-cube" />,
    label: 'Lucky Wheel',
    children: <LuckyWheel />,
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
          return (
            <Button
              key={route.key}
              isActive={activePage?.key === route.key}
              onClick={() => {
                navigate(`/ee-ui/${route.key}`)
              }}
            >
              <div className="aspect-square shrink-0">{route.icon}</div>
              <div>{route.label}</div>
            </Button>
          )
        })}
      </nav>

      <main className="mx-auto w-full max-w-3xl space-y-8 px-4 pb-8">
        <Suspense fallback={<div>Loading...</div>}>{activePage?.children}</Suspense>
      </main>
    </div>
  )
}

export default EeUi
