import React from 'react'
import { toast } from 'react-hot-toast'
const Footer: React.FC = () => {
  return (
    <div className="w-full sm:w-3/4 px-4 py-6 mt-16 mx-auto pointer-events-auto translate-y-0 overflow-y-hidden rounded-lg shadow-xl bg-teal-50 border dark:border-zinc-700 backdrop-blur-xl hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/5 dark:hover:shadow-black/5 sm:px-12 ">
      <div className="sm:text-center flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-500 dark:text-white">
          {`Want to reach out?`}
        </h2>
        <p className="max-w-xl mt-2 text-sm mx-auto text-gray-500 text-center">
          {`Thanks for taking the time to reach out, You can send me an email or take a look at my resume.`}
        </p>
      </div>
      <div className="mt-6 sm:mx-auto sm:max-w-lg sm:flex">
        <div className="flex-1 min-w-0">
          <label htmlFor="cta_email" className="sr-only">
            {`Email address`}
          </label>
          <div className="relative max-w-sm mx-auto">
            <input
              id="cta_email"
              type="email"
              className="block w-full px-5 py-3 dark:bg-zinc-900 text-base dark:text-gray-200 placeholder-gray-500 transition duration-200 border border-gray-300 bg-gray-50 dark:border-gray-800 rounded-md shadow-sm text-ellipsis"
              placeholder="sidahmedsahraoui29@gmail.com"
              value="sidahmedsahraoui29@gmail.com"
            />
            <button
              // COPY TO CLIPBOARD
              onClick={async () => {
                await navigator.clipboard.writeText(
                  'sidahmedsahraoui29@gmail.com',
                )
                toast.success('Copied to clipboard!')
              }}
              className="absolute transition duration-200 opacity-100 dark:text-gray-200 right-3 top-3 hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
