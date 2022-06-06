import ApiCaller from '../Utils/ApiCaller';
import * as Types from './../Constants/ActionType';

export const actProduct=(product)=>{
       return {
           type:Types.FETCH_PRODUCT,
           product :product
       }
}
export const actProductRequest=()=>{
    return dispatch=>{
      return  ApiCaller('https://622cc342087e0e041e1326ca.mockapi.io/api/electronicmart','GET',null).then(res=>{
          dispatch(actProduct(res.data));
      })
    }
}

export const actAddToCart=(product,quantity)=>{
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}


export const actDeleteProduct=(id)=>{
    return {
         type: Types.DELETE_TO_CART,
         id
    }
}

export const actUpdateQuantity=(quantity,id)=>{
        return {
            type:Types.UPDATE_QUANTITY,
            quantity,
            id
        }
}
