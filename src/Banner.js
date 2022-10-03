import React from 'react'
import "./Banner.css"

export const Banner = () => {
  return (
    <header
      className='banner'
      style={{
        backgroundSize:"cover",
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANS
        UhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej
        3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAA
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC")`,
        backgroundPosition: "center center",
      }}
    >
        <div className='banner__contents'>
            <h1 className='banner__title'>Movie Name</h1>
            <div className='banner__button'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'>This is a test Description</h1>
        </div>
        <div className="banner--fadeBottom"/>
    </header>
  )
}
