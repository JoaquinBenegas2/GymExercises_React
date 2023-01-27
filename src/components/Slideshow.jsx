import React, { useEffect, useRef, useState } from 'react'

const Slideshow = ( props ) => {
	
	const slideshow = useRef(null)

	const next = () => {
		if(slideshow.current.children.length > 0){
			const firstElement = slideshow.current.children[0]

			slideshow.current.style.transition = ".25s ease-in-out all"
			
			slideshow.current.style.transform = `translateX(-33.33%)`;

			const transicion = () => {
				slideshow.current.style.transition = "none"
				slideshow.current.style.transform = "translateX(0)"

				slideshow.current.appendChild(firstElement)

				slideshow.current.removeEventListener("transitionend", transicion)
			}

			slideshow.current.addEventListener("transitionend", transicion)
		}
	}
	
	const prev = () => {
		if(slideshow.current.children.length > 0){
			const index = slideshow.current.children.length - 1;

			const lastElement = slideshow.current.children[index];

			slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);
			
			slideshow.current.style.transition = 'none';
			slideshow.current.style.transform = `translateX(-33.33%)`;
		
			setTimeout(() => {
				slideshow.current.style.transition = `.25s ease-in-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 0);
		}
	}

	return (
		<div className='main-slideshow-container'>
			<div className='slideshow-container' ref={slideshow}>
				{props.children}
			</div>
			<div className='controls'>
				<button onClick={prev}>
					<i className="fa-solid fa-arrow-left"></i>
				</button>
				<button onClick={next}> 
					<i className="fa-solid fa-arrow-right"></i>
				</button>
			</div>
		</div>
	)
}

export default Slideshow