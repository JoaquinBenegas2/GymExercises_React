import React, { useEffect, useState } from 'react'

import "./Exercises.css"

import { exerciseOptions, fetchData } from '../utils/fetchData'

import ExerciseCard from './ExerciseCard'
import Pagination from './Pagination'

const Exercises = ({ exercises, setExercises, bodyPart, page, setPage }) => {
	const [forPage, setForPage] = useState(9)

	const max = exercises.length / forPage

	useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = []

			if (bodyPart === "all") {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, exerciseOptions)
			} else {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
			}

			setPage(0)
			setExercises(exercisesData)
		}
		fetchExercisesData()
	}, [bodyPart])
	
	
	return (
    	<div className="exercises">
			<h1> Showing Results </h1>

			<div className="exercises-content">
				{ 
				exercises
				.slice((page) * forPage, (page) * forPage + forPage )
				.map((exercise, index) => (
					<ExerciseCard key={index} exercise={exercise} />
				))
				}
			</div>
			<Pagination page={page} setPage={setPage} max={max} />
    	</div>
  	)
}

export default Exercises