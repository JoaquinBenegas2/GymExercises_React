import React from 'react'

import { Link } from 'react-router-dom'

import "./ExerciseCard.css"

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <div className="tags">
          <button className='body-part-tag'>{exercise.bodyPart}</button>
          <button className='target-tag'>{exercise.target}</button>
        </div>
        <p>{exercise.name}</p>
    </Link>
  )
}

export default ExerciseCard