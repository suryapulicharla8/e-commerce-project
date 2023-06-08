import React, { useEffect, useState } from 'react'
import img1 from './Assets/iphone1.png'
import img2 from './Assets/iphone2.png'
import img3 from './Assets/iphone3.png'
import img4 from './Assets/iphone4.png'
import img5 from './Assets/iphone5.png'
import './slide.css'

const Slides = () => {

    const [img,setImg]=useState(0);
    const [allimg]=useState([img1,img2,img3,img4,img5]);

    useEffect(()=>{
        
        setInterval(()=>{
            setImg(img => img < 5 ? img +1:0)

        },3000)
        


    },[])
  return (
    <>
    <div className='slide images'>
    <img src={allimg[img]} alt='Not Found' height={'300px'} width='100%'></img>

    </div>
        
        
    </>
  )
}

export default Slides