import React, { Fragment, useState } from 'react'
import useStyle from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faInfoCircle,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Dialog, Transition } from '@headlessui/react'

const Header: React.FC = () => {
  const classes = useStyle()
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  React.useEffect(() => {
    const circle = document.getElementById('circle') as HTMLDivElement
    const handleMouseMove = (e: MouseEvent) => {
      setX(e.clientX)
      setY(e.clientY)
      circle.style.left = `${50}px`
      circle.style.top = `${50}px`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <>
      <div className="absolute inset-0 mx-0 overflow-hidden pointer-events-none max-w-none">
        <div className="absolute left-1/2 top-0 ml-[-60rem] h-[64rem] w-[128.25rem] [mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-[rgb(30,29,52)]/50 to-[rgb(46,40,114)]/50 opacity-100">
            <svg
              aria-hidden="true"
              className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/5 mix-blend-overlay fill-white/2.5 dark:stroke-white/5"
            >
              <defs>
                <pattern
                  id=":R16m:"
                  width="72"
                  height="56"
                  patternUnits="userSpaceOnUse"
                  x="-12"
                  y="4"
                >
                  <path d="M.5 56V.5H72" fill="none"></path>
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#:R16m:)"
              ></rect>
              <svg x="-12" y="4" className="overflow-visible">
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="288"
                  y="168"
                  className="opacity-30"
                ></rect>
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="144"
                  y="56"
                  className="opacity-30"
                ></rect>
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="504"
                  y="168"
                  className="opacity-30"
                ></rect>
                <rect
                  strokeWidth="0"
                  width="73"
                  height="57"
                  x="720"
                  y="336"
                  className="opacity-30"
                ></rect>
              </svg>
            </svg>
          </div>
          <svg
            viewBox="0 0 1113 440"
            aria-hidden="true"
            className="absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] hidden"
          >
            <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path>
          </svg>
        </div>
      </div>
      <header className={classes.header}>
        <main className="main">
          <h1 className="title">
            <strong>{`Hi, I'm `}</strong>
            <span>Sid Ahmed</span>
          </h1>
          <p className="subtitle">{`Software engineer with a focus on frontend development. 
          I enjoy building practical yet visually appealing interfaces, 
         learning new technologies in my spare time and being part of the UX improvement process.`}</p>
          <div className="social">
            <a
              className="link"
              target="_blank"
              href="https://linkedin.com/in/sidahmedsahraoui"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="img" />
            </a>
            <a
              className="link"
              target="_blank"
              href="https://github.com/SidAhmedSahraoui"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="img" />
            </a>
            <a
              className="link"
              target="_blank"
              href="mailto:sidahmedsahraoui29@gmail.com"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="img" />
            </a>
            <div onClick={openModal} className="link">
              <FontAwesomeIcon icon={faInfoCircle} className="img" />
            </div>
          </div>
        </main>
      </header>
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-x-0 bottom-0 flex justify-center max-w-full pt-10 pointer-events-none ">
            <Transition.Child
              as={Fragment}
              enter="transition duration-500 ease-out transform"
              enterFrom="translate-y-full scale-95 opacity-0"
              enterTo="translate-y-0 scale-500 opacity-100"
              leave="transition duration-500 ease-in transform"
              leaveFrom="translate-y-0 scale-500 opacity-100"
              leaveTo="translate-y-full scale-95 opacity-0"
            >
              <Dialog.Panel className="w-full h-full max-w-5xl max-h-[50rem] pointer-events-auto translate-y-0 overflow-y-hiddenrounded-t-lg shadow-xl bg-teal-50 border dark:border-zinc-700 backdrop-blur-xl hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/5 dark:hover:shadow-black/5 rounded-t-2xl">
                <div className="flex  group flex-col h-full pb-6">
                  <div className="pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                      <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/[0.01] dark:stroke-white/[0.025]"
                      >
                        <defs>
                          <pattern
                            id=":r2:"
                            width="72"
                            height="56"
                            patternUnits="userSpaceOnUse"
                            x="50%"
                            y="100%"
                          >
                            <path d="M.5 56V.5H72" fill="none"></path>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          strokeWidth="0"
                          fill="url(#:r2:)"
                        ></rect>
                      </svg>
                    </div>
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-r from-[#20B2AA]/0 to-[#40E0D0]/0 dark:from-[#1A4E48]/0 dark:to-[#367580]/0"
                      style={{
                        maskImage: `radial-gradient(180px at ${x}px ${y}px, white, transparent)`,
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                      style={{
                        maskImage: `radial-gradient(180px at ${x}px ${y}px, white, transparent)`,
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/[0.02] dark:stroke-white/10"
                      >
                        <defs>
                          <pattern
                            id=":r3:"
                            width="72"
                            height="56"
                            patternUnits="userSpaceOnUse"
                            x="50%"
                            y="100%"
                          >
                            <path d="M.5 56V.5H72" fill="none"></path>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          strokeWidth="0"
                          fill="url(#:r3:)"
                        ></rect>
                      </svg>
                    </div>
                  </div>
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="headlessui-dialog-title-:r4:"
                        data-headlessui-state="open"
                      ></h2>
                      <div className="flex items-center ml-3 h-7">
                        <button
                          type="button"
                          className="text-gray-400 dark:text-gray-200 -mb-6 transition duration-200 rounded-md hover:text-gray-300 focus:outline-none"
                          onClick={closeModal}
                        >
                          <FontAwesomeIcon icon={faClose} className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-1 px-4 sm:px-6">
                    <div className="relative py-6 overflow-hidden isolate">
                      <div className="px-6 mx-auto max-w-7xl lg:px-8">
                        <div className="mx-auto lg:mx-0">
                          <h1 className="text-3xl font-bold tracking-tight text-gray-500 dark:text-gray-100">
                            About me
                          </h1>
                          <p className="mt-6 text-sm md:text-lg leading-8 text-gray-500 dark:text-gray-400/80">
                            {`A software engineer whose passion is to produce enhanced solutions
                            for real-world problems and provide valuable information to help users
                            make better decisions. A self-starter and have a thirst for learning.`}
                          </p>
                          <p className="mt-4 text-sm md:text-lg leading-8 text-gray-500 dark:text-gray-400/80">
                            {`I have a knack for creating engaging and immersive experiences
                            that keep users coming back for more. When I'm not building websites or applications,
                            I love learning and trying new technologies in my spare time to challenge myself creatively.`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default Header
