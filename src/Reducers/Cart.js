import * as Types from './../Constants/ActionType'
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];


export default (state = initialState, action) => {
  switch (action.type) {

  case Types.ADD_TO_CART:
      

      let index=  state.findIndex(item=>item.product.id==action.product.id);
      if(index==-1 ){
       state.push({product:action.product,quantity:action.quantity});
      }else{
          state[index].quantity+=1;
      }
       localStorage.setItem('CART',JSON.stringify(state));
       return [...state];
      case Types.DELETE_TO_CART:
         let indexDelete= state.findIndex(item=>item.product.id==action.id);
          if(indexDelete!=-1){
              state.splice(indexDelete,1);
          }
          localStorage.setItem('CART',JSON.stringify(state));
          return [...state];
       case Types.UPDATE_QUANTITY:
        let indexUpdateQuantity= state.findIndex(item=>item.product.id==action.id);
        if(indexUpdateQuantity!==-1){
              state[indexUpdateQuantity].quantity=action.quantity;
             
        }
        localStorage.setItem('CART',JSON.stringify(state));
        return [...state];
    default: return [...state];
  }
}
