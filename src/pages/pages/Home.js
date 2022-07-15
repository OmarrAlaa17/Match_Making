import React from 'react'
import Layout from '../components/Layout'
import classes from './style/Home.module.css'
import products from '../store/DumyData'
import Product from '../components/Product'
const Home = () => {
  return (
    <div className={classes.container}>
      <Layout/>
      <div className={classes.title}>
          <h1 className={classes.name}>Pure Honey</h1>
      </div>
      <div className={classes.description}>
        <h4> 
        نحن نوفر لك الثقة و الجودة و الامان
        </h4>
      </div>
      <div className={classes.productHeader}>
          <h2>منتجاتنا</h2>
      </div>
      <div className={classes.productContainer}>
        {
          products.map(p=> <Product key={p.id} product = {p}/>)
        }  
      </div>
    </div>
  )
}

export default Home