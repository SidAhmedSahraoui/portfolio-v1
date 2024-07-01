import React from 'react'
import { Toaster } from 'react-hot-toast'
import './app.css'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/header'
import Navbar from './components/navbar'
import Showcase from './components/showcase'
import Footer from './components/footer'

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Analytics />
        <Navbar />
        <Header />
        <Showcase />
        <Footer />
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </>
  )
}

export default App
