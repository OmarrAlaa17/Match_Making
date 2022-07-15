import React from 'react'
import classes from './style/ProductListItems.module.css'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
const ProductListItems = ({product}) => {
  let history = useHistory();
  const dispatch = useDispatch()
const addHandeler=() => {
dispatch({type: "add", count: 1, id: product.id , name: product.name, price:product.price , image: product.img})
}
  return (
    <div className={classes.Item}>
        <div className={classes.imgConainer} onClick={()=> history.push(`productdetails/${product.id}`)}>
            <img src={product.img} alt= "dd"/>
        </div>
        <div className={classes.discripion}>
            <h2> {product.name}</h2>
            <p>{` ${product.endescription}` }</p>
        </div>
        <div className={classes.price}>
            <h5>{product.price} LE</h5>
            <button onClick={addHandeler}>اضف الي السلة</button>
        </div>
    </div>
  )
}

export default ProductListItems