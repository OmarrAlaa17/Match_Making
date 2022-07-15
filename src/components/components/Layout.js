import React from 'react'
import classes from './style/layout.module.css'
import img1 from '../img/7.jpg'
import img2 from '../img/8.jpg'
import Carousel from 'react-bootstrap/Carousel'
const Layout = () => {
  return (
    <div className={classes.layout}>
       <Carousel fade  controls={false} interval={4500} indicators= {false}>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
        />
        
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
        />
    </Carousel.Item>
  
</Carousel>
        
    </div>
  )
}

export default Layout

/*
<Link to="/collection" className={classes.btn} >
                <p>shop now </p>
                <ArrowRightAltIcon fontSize="large"  className={classes.arrow}/>
                </Link> 

*/