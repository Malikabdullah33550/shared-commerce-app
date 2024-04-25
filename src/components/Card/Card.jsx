import React from 'react'

const Card = () => {
  return (
    <>
      <div className="card" style={{width: 300}}>
        <div className="card-image" >
          <img src="Cardimage.jpeg" style={{height: 200}}/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="/">This is a link</a>
        </div>
      </div>
    </>
  )
}

export default Card
