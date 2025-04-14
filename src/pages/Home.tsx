import { useLocation } from 'wouter'

const Home = () => {
  const [, navigate] = useLocation()

  const projects = [
    {
      key: 'components',
      cover: <i className="fa-solid fa-layer-group text-7xl" />,
      title: 'Components',
      to: '/components',
    },
    {
      key: 'attention-please',
      cover: <img src="https://i.imgur.com/yp9Rr6W.png" alt="attention-please" draggable="false" className="size-24" />,
      title: 'Attention Please',
      to: 'https://hackmd.io/@eelayntris/attention-please',
    },
    {
      key: 'commander',
      cover: <img src="https://i.imgur.com/Xxfd3Nz.png" alt="commander" draggable="false" className="size-24" />,
      title: 'Commander',
      to: 'https://hackmd.io/@eelayntris/commander',
    },
    {
      key: 'eedice',
      cover: <img src="https://i.imgur.com/l7miT2d.png" alt="eedice" draggable="false" className="size-24" />,
      title: 'eeDice',
      to: 'https://hackmd.io/@eelayntris/eedice',
    },
    {
      key: 'what2eat',
      cover: <img src="https://i.imgur.com/KcJSoih.png" alt="what2eat" draggable="false" className="size-24" />,
      title: 'What2Eat',
      to: 'https://hackmd.io/@eelayntris/what2eat',
    },
  ]

  return (
    <div className="flex h-dvh w-dvw items-center justify-center p-4 text-white">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {projects.map((project) => {
          return (
            <div
              key={project.key}
              className="group flex size-50 cursor-pointer flex-col gap-2 rounded-2xl border-2 border-zinc-500 bg-zinc-800 p-4 transition-all hover:-translate-y-2 hover:border-violet-500 hover:bg-zinc-700"
              onClick={() => {
                if (project.to.startsWith('http')) {
                  window.open(project.to, '_blank')
                } else {
                  navigate(project.to)
                }
              }}
            >
              <div className="flex grow items-center justify-center">
                <div className="overflow-hidden rounded-lg">{project.cover}</div>
              </div>
              <h2 className="text-center text-xl font-bold">{project.title}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
