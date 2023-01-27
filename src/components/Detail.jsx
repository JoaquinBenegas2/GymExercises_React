import React from 'react'
import "./Detail.css"

import BodyPartImage from '../assets/icons/bodyPart.png'
import EquipmentImage from '../assets/icons/equipment.png'
import TargetImage from '../assets/icons/target.png'

const Detail = ({ exerciseDetail }) => {
  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    }
  ]

  return (
    <div className='detail'>
      <div className="detail-container">
        <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />
        <div>
          <h3>{name}</h3>
          <p>
            Exercises keep you strong. <span>{name}</span> {" "}
            is one of the best exercises to target your <span>{target}</span>. 
            It will help you improve your mood and gain energy.
          </p>
          <div className='extra-details'>
            {
              extraDetail.map((item, index) => (
                <div key={index} className="extra-detail">
                  <button className='icon-detail'>
                    <img src={item.icon} alt={bodyPart} />
                  </button>
                  <p>{item.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail