import React from 'react'
import ReactPlayer from 'react-player'
import Button from '../../../components/Button'
function Player() {
    return (
        <>
            <div className="container mx-auto">
                <div className='mx-auto w-min rounded-2xl shadow-2xl my-20 overflow-hidden' > 
                 <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playIcon={<Button label='play'/>}/>  
                </div>
                
           </div>
        </>
    )
}

export default Player
