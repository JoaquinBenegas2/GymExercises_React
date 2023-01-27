import React, { useState } from 'react'

import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
	const [page, setPage] = useState(0)
	const [bodyPart, setBodyPart] = useState("all")
    const [exercises, setExercises] = useState([])

    return (
        <>
            <Banner />
            <Title />
            <Navbar active="home"/>
            <SearchExercises 
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
				page={page}
				setPage={setPage}
			/>
			<Exercises 
				exercises={exercises}
				setExercises={setExercises}
				bodyPart={bodyPart}
				page={page}
				setPage={setPage}
			/>
        </>
    )
}

export default Home