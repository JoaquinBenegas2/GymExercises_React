import React, { useEffect } from 'react'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {

    return (
        <>
            <i className="fa-solid fa-dumbbell"></i>
            <p>{item}</p>
        </>
        
    )
}

export default BodyPart