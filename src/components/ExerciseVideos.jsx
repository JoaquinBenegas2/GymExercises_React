import React from 'react'

import "./ExerciseVideos.css"

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <div className='videos-container'>
      <h1> Watch <span>{name}</span> exercise videos </h1>
      <div className='videos'>
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <div key={index} className="exercise-video"> 
            <iframe src={`https://www.youtube.com/embed/${item.video.videoId}`} />
            <div className='info-video'>
              <p className='title-video'>{item.video.title}</p>
              <p>{item.video.channelName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExerciseVideos