import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import './home.css'

const Home: React.FC = () => {
  useEffect(() => {
    console.log('Home component mounted')
  }, [])

  console.log('Home component rendering')
  return (
    <div className="home-container10">
      <Helmet>
        <title>Devil x Detail</title>
        <meta property="og:title" content="Devil x Detail" />
      </Helmet>
      <div className="home-container11">
        <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
          {/* ... rest of your original component ... */}
        </div>
      </div>
    </div>
  )
}

export default Home 