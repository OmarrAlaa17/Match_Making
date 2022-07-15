import React from 'react'
import ProductListItems from '../components/ProductListItems'
import classes from './style/ProductList.module.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import productss from '../store/DumyData'
import Product from '../components/ProductListItems'
const ProductList = () => {
  const [products, setProducts] =useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/product").then((res)=>{
      setProducts(res.data);
    })
  },[])
  return (
    <div className={classes.container}>
        
        <div className={classes.title}>
            <h1>قائمة جميع المنتجات</h1>
        </div>

        <div className={classes.products} >
            {
              productss.map(p=>  <Product key={p.id} product = {p}/>)
            }
        </div>
       
        
    </div>
  )
}

export default ProductList