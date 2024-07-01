import React from 'react'
import DescriptionCard from './descriptionCard.tsx'
import VetrinaLive from '../../img/vetrinalive.svg'
import MExpress from '../../img/3m-express.svg'
const Showcase: React.FC = () => {
  return (
    <section>
      <div className="px-4 py-16 mx-auto max-w-4xl sm:py-16 sm:px-6 lg:px-20 flex flex-col justify-start items-start sm:justify-center sm:items-center">
        <div className="relative inline-block mt-1 text-4xl font-bold text-gray-600 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
          <span className="blob sm:tracking-tight text-3xl">{`Showcase`}</span>
          <div className="w-full h-6 -ml-2 underline dark:!bg-[#c084fc]/20 -mt-5"></div>
        </div>
        <p className="max-w-xl mt-3 text-md font-medium text-gray-400">
          {`These are the projects that I have been working on lately.`}
        </p>
      </div>
      <div className="flex flex-col mx-auto w-full px-0 gap-8">
        <DescriptionCard
          description={`Express delivery platform supports 
          parcels routing, orders tracking & 
          automated task attribution to delivery drivers, 
          optimizing delivery operations & ensuring 
          timely & accurate order fulfillment.`}
          preview="https://3m.express/"
          technologies={['React', 'Ant Design', 'Redux']}
          title="3M Express"
          image={MExpress}
        />
        <DescriptionCard
          description={`SaaS application that streamlines online 
          shop creation and e-commerce management.
          allowing users to create a store with customized theme,
          integrate payment gateways & manage products & orders.`}
          preview="https://vetrinalive.com/"
          technologies={['React', 'MaterialUI', 'Styled-Components']}
          title="VetrinaLive"
          image={VetrinaLive}
        />
      </div>
    </section>
  )
}
export default Showcase
