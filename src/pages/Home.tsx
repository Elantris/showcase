import { ButtonHTMLAttributes, FC, ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useLocation } from 'wouter'

const Button: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode
  }
> = ({ className, children, ...props }) => {
  return (
    <button
      className={twMerge(
        'inline-flex h-8 cursor-pointer items-center gap-2 rounded border border-zinc-500 px-2 transition-all hover:border-violet-500 hover:text-violet-300',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

const Home = () => {
  const [, navigate] = useLocation()
  const [activeKey, setActiveKey] = useState('')

  const projects = [
    {
      key: 'components',
      cover: <i className="fa-solid fa-layer-group text-7xl" />,
      title: 'Components',
      description: (
        <>
          <p>{'整理曾經寫過的元件，紀錄思考過程中有趣的點子與寫法。'}</p>
        </>
      ),
      footer: (
        <>
          <Button
            onClick={() => {
              navigate('/components')
            }}
          >
            {'Demo'}
          </Button>
        </>
      ),
    },
    {
      key: 'attention-please',
      cover: <img src="https://i.imgur.com/yp9Rr6W.png" alt="attention-please" draggable="false" className="size-24" />,
      title: 'Attention Please',
      description: (
        <>
          <p>{'Discord 簽到提醒機器人'}</p>
          <p>
            {
              '透過文字訊息中的標記成員與表情回應來實作 Discord 已讀與抽獎功能，被標記的成員會收到通知、看完訊息後順手按個表情符號代表已讀訊息或參加抽獎，只要輸入指令即可快速檢查哪些成員沒有閱讀公告、參加抽獎的成員是否中獎，適合人數眾多的伺服器檢查大家有沒有認真看公告。'
            }
          </p>
        </>
      ),
      footer: (
        <>
          <Button
            onClick={() => {
              window.open('https://hackmd.io/@eelayntris/attention-please', '_blank')
            }}
          >
            <i className="fa-solid fa-file-lines" />
            {'HackMD'}
          </Button>
          <Button
            onClick={() => {
              window.open(
                'https://discord.com/api/oauth2/authorize?client_id=801820692500054087&permissions=8&scope=bot',
                '_blank',
              )
            }}
          >
            <i className="fa-brands fa-discord" />
            {'Discord'}
          </Button>
        </>
      ),
    },
    {
      key: 'commander',
      cover: <img src="https://i.imgur.com/Xxfd3Nz.png" alt="commander" draggable="false" className="size-24" />,
      title: 'Commander',
      description: (
        <>
          <p>{'Discord 集合點名機器人'}</p>
          <p>
            {
              '透過指令快速紀錄「當前有接聽語音頻道」的伺服器成員、統計一段時間內所有人的出席次數。適合集合時間到了要紀錄有出席的成員，例如線上課程的點名、線上遊戲公會戰等情境。'
            }
          </p>
        </>
      ),
      footer: (
        <>
          <Button
            onClick={() => {
              window.open('https://hackmd.io/@eelayntris/commander', '_blank')
            }}
          >
            <i className="fa-solid fa-file-lines" />
            {'HackMD'}
          </Button>
          <Button
            onClick={() => {
              window.open(
                'https://discord.com/api/oauth2/authorize?client_id=585706326970073089&permissions=8&scope=bot',
                '_blank',
              )
            }}
          >
            <i className="fa-brands fa-discord" />
            {'Discord'}
          </Button>
        </>
      ),
    },
    {
      key: 'eedice',
      cover: <img src="https://i.imgur.com/l7miT2d.png" alt="eedice" draggable="false" className="size-24" />,
      title: 'eeDice',
      description: (
        <>
          <p>{'Discord 擲骰機器人'}</p>
          <p>
            {
              '遊玩 TRPG 時很常透過骰子掌控遊戲中的隨機性以增添樂趣，這隻機器人可以幫忙丟骰子並且計算這些算式。支援各種骰子語法，不管你是 GM、DM、KP 都能輕鬆使用，減少計算負擔讓玩家都能更沉浸在劇情當中。'
            }
          </p>
        </>
      ),
      footer: (
        <>
          <Button
            onClick={() => {
              window.open('https://hackmd.io/@eelayntris/eedice', '_blank')
            }}
          >
            <i className="fa-solid fa-file-lines" />
            {'HackMD'}
          </Button>
          <Button
            onClick={() => {
              window.open(
                'https://discord.com/api/oauth2/authorize?client_id=898765970267570186&permissions=274877926464&scope=bot',
                '_blank',
              )
            }}
          >
            <i className="fa-brands fa-discord" />
            {'Discord'}
          </Button>
        </>
      ),
    },
    {
      key: 'what2eat',
      cover: <img src="https://i.imgur.com/KcJSoih.png" alt="what2eat" draggable="false" className="size-24" />,
      title: 'What2Eat',
      description: (
        <>
          <p>{'Discord 吃什麼機器人'}</p>
          <p>
            {
              '每次到了不知道要吃什麼的時候就把機器人叫出來給你靈感吧！（雖然很常叫出了好幾十個選項還是不知道要吃什麼就是了…）'
            }
          </p>
        </>
      ),
      footer: (
        <>
          <Button
            onClick={() => {
              window.open('https://hackmd.io/@eelayntris/what2eat', '_blank')
            }}
          >
            <i className="fa-solid fa-file-lines" />
            {'HackMD'}
          </Button>
          <Button
            onClick={() => {
              window.open(
                'https://discord.com/api/oauth2/authorize?client_id=689455354664321064&permissions=19520&scope=bot',
                '_blank',
              )
            }}
          >
            <i className="fa-brands fa-discord" />
            {'Discord'}
          </Button>
        </>
      ),
    },
  ]

  const activeProject = projects.find((project) => project.key === activeKey)

  return (
    <div className="relative flex h-dvh w-dvw items-center justify-center p-4 text-white">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {projects.map((project) => {
          return (
            <div
              key={project.key}
              className="group flex size-48 cursor-pointer flex-col gap-2 rounded-2xl border-2 border-zinc-500 bg-zinc-800 p-4 transition-all hover:-translate-y-2 hover:border-violet-500 hover:bg-zinc-700"
              onClick={() => {
                setActiveKey(project.key)
              }}
            >
              <div className="flex grow items-center justify-center">
                <div className="overflow-hidden rounded-lg">{project.cover}</div>
              </div>
              <h2 className="text-center font-bold">{project.title}</h2>
            </div>
          )
        })}
      </div>

      <div
        className={twMerge(
          'absolute inset-0 z-40 flex -translate-x-full items-center justify-center overflow-y-auto bg-zinc-800/50 opacity-0 backdrop-blur-xs transition-opacity',
          activeProject && 'translate-none opacity-100',
        )}
        onClick={() => {
          setActiveKey('')
        }}
      >
        {activeProject && (
          <div
            className="animate-fade-in z-50 w-full max-w-sm space-y-4 rounded-lg border border-zinc-500 bg-zinc-800 p-4 leading-relaxed shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-xl text-violet-300">{activeProject.title}</h1>
            {activeProject.description}
            {activeProject.footer && <div className="space-x-2">{activeProject.footer}</div>}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
