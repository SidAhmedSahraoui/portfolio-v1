import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
const InvertedDescriptionCard: React.FC<{
  title: string
  description: string
  technologies: string[]
  preview: string
  image?: string
}> = ({ title, description, technologies, preview, image }) => {
  return (
    <div className="flex justify-between items-center flex-wrap">
      <a
        href={preview}
        target={'_blank'}
        rel={'noopener noreferrer'}
        className="w-full sm:w-2/5 cursor-pointer overflow-hidden rounded-md shadow-lg group transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl"
      >
        <img
          src={image}
          alt={title}
          className={
            'rounded ring-1 ring-inset ring-white/10 group-hover:ring-white/20 w-full h-full object-cover object-center cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105'
          }
        />
      </a>
      <div className="flex flex-col w-full h-full sm:w-3/5 sm:p-12 p-3">
        <h4 className="mt-4 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">
          {title}
        </h4>
        <p className="max-w-xl mt-3 text-sm font-medium text-gray-500">
          {description}
        </p>
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
    </div>
  )
}
export default InvertedDescriptionCard
