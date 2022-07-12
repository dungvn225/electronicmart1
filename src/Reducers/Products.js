import * as Types from './../Constants/ActionType';

const initProducts = {
    Products:[],
    statusRegister: false,  //head
    statusLogin: false,
    statusLoginSuccess:false,
    user:'',
    loginGoogle:false,
    usernameGoogle:'',
    product_search:[]
    

    
}


const Products= (state = initProducts, action) => {
   
  switch (action.type) {

  case Types.FETCH_PRODUCT:
      state.Products=action.product;
    return { ...state }
  case Types.FETCH_PRODUCT_CATEGORY:
    
      let product_category_arr=[];
     
       for (let i = 0; i < action.products.length; i++) {
        if(action.products[i].type_product.toUpperCase().search(action.item.name.toUpperCase())>=0){
          
           product_category_arr.push(action.products[i]);
        }

         
       }
       state.Products=product_category_arr;
     return {...state};
     
     case Types.SEARCH_PRODUCT:
      
    let searchProduct=  action.products.filter((item,index)=>{
     
            return (item.name.toUpperCase().search(action.name.toUpperCase())>=0);
       })
         state.Products=searchProduct;
       
      return {...state};
    case 'REGISTERSUCCESS':
      state.statusRegister=false;
         return {...state};
    case 'REGISTER':
     
        state.statusRegister=true;
      
    return {...state};
    case 'LOGIN':
      state.statusLogin=true;
     
    return {...state};
    case 'LOGINSUCCESS':
      state.statusLogin=false;
      state.statusLoginSuccess=true;
      state.user=action.user;
    
      return {...state};
    case 'LOGOUT':
      state.statusLoginSuccess=false;
      return {...state};
    case 'LOGINGOBACK':
      state.statusLogin=false;
      return { ...state };
     case 'ONLOGINGOOGLE':
       state.loginGoogle=true;
       state.usernameGoogle=action.name;
       return {...state};
       case 'LOGOUTGOOGLE':
        state.loginGoogle=false;
        return {...state};
  default:
    return { ...state }
  }
}
export default Products;