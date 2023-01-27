import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'

import Loader from "./Loader"

import "./SimilarExercises.css"


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <div className='similar-container'>
      <h1> Exercises that target the same muscle group </h1>
      {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      
      <h1> Exercises that use the same equipment </h1>
      {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </div>
  )
}

export default SimilarExercises