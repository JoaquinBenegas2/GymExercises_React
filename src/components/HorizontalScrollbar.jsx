import React from 'react'

import BodyPart from './BodyPart'
import Slideshow from './Slideshow'
import ExerciseCard from "./ExerciseCard"

import "./HorizontalScrollbar.css"
import "./BodyPart.css"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="carousel-button-group controls"> 
            <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} >
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button onClick={() => next()} > 
                <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        );
    };

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1200 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1200, min: 768 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1,
        }
      };

    console.log(data, isBodyParts)
    return (
        <div className='main-slideshow'>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                customTransition="transform 300ms ease-in-out"
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                arrows={false} 
                customButtonGroup={<ButtonGroup />}
                itemClass="carousel-item-padding-40-px"
            >
                {data.map( (item) => (
                    <div
                    className={`${isBodyParts ? "body-part" : "exercise"} ${bodyPart === item ? "active" : ""}`.trimEnd()} 
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    onClick={() => {
                        setBodyPart(item)
                        window.scrollTo({ top: 1680, behavior: 'smooth' })
                    }}
                    >
                        {
                        isBodyParts ? 
                            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
                        :
                            <ExerciseCard exercise={item} />
                        }
                    </div>
                ) 
                )}
            </Carousel>
            {/*
            <Slideshow>
                {data.map( (item) => (
                    <div
                    className={`${isBodyParts ? "body-part" : "exercise"} ${bodyPart === item ? "active" : ""}`.trimEnd()} 
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    onClick={() => {
                        setBodyPart(item)
                        window.scrollTo({ top: 1680, behavior: 'smooth' })
                    }}
                    >
                        {
                        isBodyParts ? 
                            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
                        :
                            <ExerciseCard exercise={item} />
                        }
                    </div>
                ) 
                )}
            </Slideshow>
            */}
        </div>
    )
}

export default HorizontalScrollbar