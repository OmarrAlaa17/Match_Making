import classes from "./style/Isi.module.css"
import React from 'react' 
import isi1 from "../img1/MainLogo/Isi1.jpg"
import isi2 from "../img1/MainLogo/Isi2.jpg"

import { useState } from "react"

const Isi = () => {
    const[is,setis]=useState(false);

    function clickhandler () {
        if (is)
        {
            setis(false);
        }
        else
        {
            setis(true);
        }
        
    }

  return (
   <div className={classes.isi}>
    <p>The Intellectual Style Inventory (ISI)</p>
     <div className={classes.infContainer}>
        <div className={classes.txtContainer}>
            {is ? <img src={isi1} onClick={clickhandler} /> : <img src={isi2} onClick={clickhandler}/> }
        </div>
        <div className={classes.txtContainer}>
            <h4>The human brain is divided into four different cortical areas or lobes. These four cortical lobes are not utilized equally by each individual rather they are subjected to the law of preference. The more preferred lobe is the one more efficiently used by each person. The Intellectual Style Inventory (ISI) is a tool for learning style assessment that measures your preferential cortical dominance concerning each of perception and thinking.</h4>
        </div>
      </div>
   </div>
  )
}

export default Isi