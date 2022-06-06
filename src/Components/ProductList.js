
import React, { useEffect } from 'react'
import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { actProductRequest } from '../Actions/index';
import ApiCaller from '../Utils/ApiCaller';
import * as Types from './../Constants/ActionType';
import {connect} from 'react-redux';

 function ProductList(props) {
    const {Products}= useSelector(state=>state.Products);
    

    const dispatch= useDispatch();
      useEffect(()=>{
         dispatch(actProductRequest());

       },[])
      
      
      
  return (
    <div className="main__product-list">
       {Products.map((product,index)=>{
           return  <ProductItem 
                     key={index}
                     product={product}
                    />
           
       })}
  </div> 	
  )
}


export default (ProductList);