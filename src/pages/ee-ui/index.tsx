import { FC, ReactNode, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { twMerge } from 'tailwind-merge'
import { useLocation } from 'wouter'
import Button from '../../components/Button'
import './index.css'

export const Layout: FC<{
  children?: ReactNode
}> = ({ children }) => {
  const [location, navigate] = useLocation()

  const items = [
    {
      key: 'slash-box',
      icon: <i className="fa-solid fa-cube" />,
      label: 'Slash box',
      onClick: () => navigate('/slash-box'),
    },
    {
      key: 'progress-bar',
      icon: <i className="fa-solid fa-cube" />,
      label: 'Progress Bar',
      onClick: () => navigate('/progress-bar'),
    },
    {
      key: 'loading-bar',
      icon: <i className="fa-solid fa-cube" />,
      label: 'Loading Bar',
      onClick: () => navigate('/loading-bar'),
    },
    {
      key: 'tabs',
      icon: <i className="fa-solid fa-cube" />,
      label: 'Tabs',
      onClick: () => navigate('/tabs'),
    },
    {
      key: 'gradient-border',
      icon: <i className="fa-solid fa-cube" />,
      label: 'Gradient Border',
      onClick: () => navigate('/gradient-border'),
    },
    {
      key: 'multiple-border-box',
      icon: <i className="fa-solid fa-cube" />,
      label: 'Multiple Border Box',
      onClick: () => navigate('/multiple-border-box'),
    },
    {
      key: 'infinite-scrolling',
      icon: <i className="fa-solid fa-cube" />,
      label: 'Infinite Scrolling',
      onClick: () => navigate('/infinite-scrolling'),
    },
  ]

  const activeItem = items.find((item) => location === `/${item.key}`)

  return (
    <div className="h-dvh w-dvw space-y-8 overflow-x-hidden overflow-y-auto text-white">
      <header className="sticky top-0 right-0 left-0 z-30 flex h-12 items-center gap-4 bg-zinc-800">
        <button
          className="aspect-square h-full shrink-0 cursor-pointer bg-zinc-700 text-lg hover:bg-zinc-600"
          onClick={() => navigate('~')}
        >
          <i className="fa-solid fa-arrow-left" />
        </button>
        <h1 className="grow font-bold">EE UI</h1>
      </header>

      <nav className="flex w-full flex-wrap items-center justify-center gap-4 px-4">
        {items.map((item) => {
          const isActive = activeItem?.key === item.key

          return (
            <Button key={item.key} isActive={isActive} onClick={() => item.onClick?.()}>
              <div className="aspect-square shrink-0">{item.icon}</div>
              <div className="">{item.label}</div>
            </Button>
          )
        })}
      </nav>

      {activeItem && <main className="mx-auto w-full max-w-3xl space-y-8 px-4 pb-4">{children}</main>}
    </div>
  )
}

export const Panel: FC<{
  title?: ReactNode
  className?: string
  children?: ReactNode
}> = ({ title, className, children }) => {
  return (
    <div className={twMerge('space-y-4 rounded-lg bg-zinc-700 p-4', className)}>
      {title && (
        <h1 className={twMerge('border-b border-zinc-500 text-2xl font-bold text-violet-300', className)}>{title}</h1>
      )}
      {children}
    </div>
  )
}

export const CodeBlock: FC<{
  title: ReactNode
  language: string
  codes: string
}> = ({ title, language, codes }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(codes)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 1000)
    } catch {
      console.error('Failed to copy text')
    }
  }

  return (
    <div className="w-full rounded-lg border border-transparent bg-zinc-800 p-4 transition-all hover:border-zinc-500">
      <div className="flex items-center gap-2 transition-all">
        <div className="grow border-b border-zinc-500 text-lg text-violet-300">{title}</div>
        <button
          className="inline-flex size-8 cursor-pointer items-center justify-center rounded border border-zinc-500 transition-all hover:border-violet-500 hover:bg-violet-500"
          onClick={() => handleCopy()}
        >
          {isCopied ? <i className="fa-solid fa-check text-green-500" /> : <i className="fa-solid fa-copy" />}
        </button>
      </div>

      <SyntaxHighlighter language={language} style={oneDark}>
        {codes}
      </SyntaxHighlighter>
    </div>
  )
}
