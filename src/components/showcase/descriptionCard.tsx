import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
const DescriptionCard: React.FC<{
  title: string
  description: string
  technologies: string[]
  preview: string
  image?: string
}> = ({ title, description, technologies, preview, image }) => {
  return (
    <div className="flex justify-between items-center flex-wrap-reverse">
      <div className="flex flex-col w-full h-full sm:w-3/5 sm:p-12 p-3">
        <h4 className="mt-4 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">
          {title}
        </h4>
        <p className=" mt-3 text-md font-medium text-gray-400">{description}</p>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {technologies.map((technology, index) => (
            <span
              key={index}
              className="bg-transparent cursor-default border p-2 border-[#C084FCFF] rounded-md text-[#C084FCFF] text-xs font-semibold hover:text-[#C793FCFF] hover:border-[#C793FCFF]"
            >
              {technology}
            </span>
          ))}
        </div>

        <a
          href={preview}
          target={'_blank'}
          rel={'noopener noreferrer'}
          className="bg-transparent cursor-pointer border p-2 border-[#C084FCFF] rounded-md text-[#C084FCFF] text-xs font-semibold w-fit h-fit mt-2 flex justify-between items-center gap-1 hover:text-[#C793FCFF] hover:border-[#C793FCFF]"
        >
          <span>Preview</span>
          <ChevronRightIcon className="w-4 h-4 text-[#C084FCFF]" />
        </a>
      </div>
      <a
        href={preview}
        target={'_blank'}
        rel={'noopener noreferrer'}
        className="w-full sm:w-2/5 cursor-pointer overflow-hidden sm:rounded-l sm:shadow-lg sm:group sm:transition-all sm:duration-500 sm:ease-in-out sm:transform sm:hover:scale-105 sm:hover:shadow-xl"
      >
        <img
          src={image}
          alt={title}
          className="sm:rounded-l sm:ring-1 sm:ring-inset sm:ring-white/10 sm:group hover:ring-white/20 w-full h-full sm:object-cover sm:object-center cursor-pointer sm:transition-all sm:duration-500 sm:ease-in-out sm:transform sm:hover:scale-105"
        />
      </a>
    </div>
  )
}
export default DescriptionCard
