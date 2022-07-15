import React from 'react'
import Isi from '../components/Isi'
import Layout from '../components/Layout'
import classes from './style/Home.module.css'
const Home = () => {
  return (
    <div className={classes.container}>
      <Layout />
      <Isi />
          
    </div>
  )
}

export default Home