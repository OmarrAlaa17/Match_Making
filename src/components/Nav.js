import React from 'react'
import classes from './style/nav.module.css'
import { useState ,useEffect} from 'react'
import img from '../img1/Logo/Logo1.png'
import { NavLink } from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector} from 'react-redux'

const Nav = () => {
    const [active,setActive] = useState("sleepOptions")
    const Data=  useSelector(state => state);
    const [count, setCount] = useState(0);

    const navHandeler =()=>{
        if(active==='optionsActive'){
            setActive('sleepOptions');
        }else{
            setActive('optionsActive')
        }
    }
    useEffect(()=>{
        if(Data){
        let c = 0;
        Data.map((p) => {
          c += p.count;
          return c;  
        })
          setCount(c);
        }
      },[Data])
  return (
    <div className={classes.nav}>
        <div className={classes.logoContainer}>
            <div className={classes.imgContainer}>
            <img src={img} alt="logo"/>
            </div>
        </div>

        <div className={classes.navOptions}>
            <div className={`${classes[active]} ${classes.options}`}>
            <ul className={classes.links}>
                <li onClick={navHandeler}>
                <NavLink to="/" exact activeClassName={classes.activeLink}> Home </NavLink>
                </li>
                <li>
                <NavLink to="/SignIn" activeClassName={classes.activeLink}> Sign In </NavLink>
                </li>
            </ul>
            </div>
           
        </div>
        <div className={classes.bur} onClick={navHandeler}>
            {active==='sleepOptions'? <MenuIcon style={{ fontSize: 40 }} /> : <ClearIcon style={{ fontSize: 40 }}/>}
                
        </div>
           
    </div>
  )
}

export default Nav

/*
    <a href='https://www.freepik.com/vectors/ai-face'>Ai face vector created by starline - www.freepik.com</a>
*/
