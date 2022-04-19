// Dependecies  
import React from 'react'
import ReactDOM from 'react-dom/client'

// Styles
import './index.css'
import './styles/components.css'

// Components
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from  '../data.jsx'
import Footer from './components/Footer'

const cards = data.map(item => {
  return (
    <Card
        key={item.id}
        {...item}
    />
  )
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Hero /> 
    <section className="cards-list">
      {cards}
    </section>
    <Footer />
  </React.StrictMode>
)
