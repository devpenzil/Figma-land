import React from 'react'
import Details from './components/Details'
import Features from './components/Features'
import Hero from './components/Hero'
import Player from './components/Player'

function Home() {
    return (
        <div>
            <Hero />
            <Features />
            <Player />
            <Details />
        </div>
    )
}

export default Home
