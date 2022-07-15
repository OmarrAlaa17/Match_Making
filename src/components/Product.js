import React from 'react';
import classes from './style/Product.module.css'
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
const Product = ({product}) => {
let history = useHistory();
const dispatch = useDispatch()
const addHandeler=() => {
dispatch({type: "add", count: 1, id: product.id , name: product.name, price:product.price , image: product.img})
}
  return (
  <div className={classes.product}>
      <div className={classes.img} onClick={()=> history.push(`productdetails/${product.id}`)}>
        <img src={product.img} alt=""/>
      </div>
      <div className={classes.details}>
        <p>{product.name}</p>
      </div>
      <div className={classes.price}>
            <h6>{product.price} LE </h6>
      </div>
      <div className={classes.option}>
            <button onClick={addHandeler}>أضف للسلة</button>
      </div>
  </div>
  );
};

export default Product;
