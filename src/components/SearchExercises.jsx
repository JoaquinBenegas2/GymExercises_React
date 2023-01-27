import React, { useEffect, useState } from 'react'

import "./SearchExercises.css"

import { exerciseOptions, fetchData } from '../utils/fetchData'

import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercises = ({ setExercises, bodyPart, setBodyPart, setPage }) => {
    const [search, setSearch] = useState("")
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async() => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

            setBodyParts(["all", ...bodyPartsData])
        }

        fetchExercisesData();
    }, [])
    

    const handleSearch = async() => {
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) 
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )
            
            window.scrollTo({ top: 1680, behavior: 'smooth' })

            setPage(0)
            setSearch("")
            setExercises(searchedExercises)
        }
    }

    return (
        <div className='search-exercises-section'>
            <div className="container">
                <h1>Awesome <span>Exercises</span> You Should Know</h1>
                <div className="search-exercises">
                    <input 
                        className="search-input" 
                        type="text" 
                        name="search-input" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        valueplaceholder="Search Exercises" 
                    />
                    <button className='search-btn' onClick={handleSearch}> Search </button>
                </div>
                
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
            </div>
        </div>
    )
}

export default SearchExercises