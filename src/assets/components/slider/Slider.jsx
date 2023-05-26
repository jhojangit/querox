import React, { useState } from 'react'
import "../slider/slider.css"

const Slider = ({images}) => {


  const [sliderNumber, setSliderNumber] = useState(0);


  const handleRight = () =>{
    if(sliderNumber >= 0 && sliderNumber < images.length) setSliderNumber(sliderNumber+1)
    if(sliderNumber == images.length-1) setSliderNumber(0)
  }

  const handleLeft = () =>{
    if(sliderNumber <= images.length-1 && sliderNumber > 0 ) setSliderNumber(sliderNumber-1)
    if(sliderNumber == 0) setSliderNumber(images.length-1)
  }


  return (
    <div>
      <div className="slider__outer">

      <i onClick={handleRight} className='bx bx-lg bxs-right-arrow-square'></i>

        <div className={`slider__inner`} style={{transform: `translateX(calc(-${sliderNumber}/${images.length}*100%`, width: `${images.length}00%`}}>

                {
                  
                  images?.map(image => (
                    
                    <div className="slider__img-container" key={image}>
                    <img 
                      className='slider__img' 
                      src={image} 
                      alt="" />
                      </div>
                  ))
                  
                }

        </div>

        <i onClick={handleLeft} className='bx bx-lg bxs-left-arrow-square'></i>

      </div>
    </div>
  )
}

export default Slider