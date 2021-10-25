import React from 'react'
import Details from './components/Details'
import Features from './components/Features'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Player from './components/Player'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

function Home() {
    return (
        <div>
            <Hero />
            <Features />
            <Player />
            <Details />
            <Partners />
            <Testimonials />
            <Pricing />
        </div>
    )
}

export default Home
