import React from 'react'
import classes from './style/layout.module.css'

const Layout = () => {
  return (
    <div className={classes.layout}>
       <div className={classes.textBox}>
          <h1> Match Maker</h1>
          <h2> Your path for more underestanding ..</h2>
                <a className={classes.btn} href="#Isi section">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Explore
                </a> 
       </div>
        
    </div>
  )
}

export default Layout