import * as Types from './../Constants/ActionType';

const initProducts = {
    Products:[],
    statusRegister: false,  //head
    statusLogin: false,
    statusLoginSuccess:false,
    user:'',
    loginGoogle:false,
    usernameGoogle:''

    
}


const Products= (state = initProducts, action) => {
  switch (action.type) {

  case Types.FETCH_PRODUCT:
      state.Products=action.product;
    return { ...state }
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