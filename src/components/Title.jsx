import React from 'react'

import "./Title.css"

const Title = () => {
  return (
    <div className='title'>
        <h1> FIND THE BEST <span>EXERCISES</span> TO REACH YOUR DESIRED <span>BODY</span> </h1>
        <p>On this page you will find a wide variety of exercises with the body part, the target muscle, the necessary equipment and an animation as an example.</p>
        <div className='title-stats'>
            <div className="title-stat">
                <h2> 1300+ </h2>
                <p>Exercises for You</p>
            </div>
            <div className="title-stat">
                <h2> 18 </h2>
                <p>Target Muscles</p>
            </div>
            <div className="title-stat">
                <h2> 10 </h2>
                <p>Body Parts</p>
            </div>
        </div>
    </div>
  )
}

export default Title