import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { data } from '../firebaseConnect';

export default function Login() {
       
  const statusLogin=useSelector(state=>state.Products.statusLogin);
  const [Data,setData]=useState([]);
  const dispatch=useDispatch();
  const [user,setUser]=useState({
    id:'',
    username:'',
    password:''
  });
 
const onChangeLogin=(e)=>{
 
    const name=e.target.name;
    const value=e.target.value;

        setUser({...user,[name]:value});
    
        
}

data.once('value',res=>{
  let newData=[];
  res.forEach(element => {
   
         
              const id=element.key;
              const name=element.val().name;
              const password=element.val().password;
              newData.push({id,name,password})
           
              
          
      setData(newData);
   
  });
    
 

})
const handleLogin=()=>{
      
      let check=false;
    
        
       
      for(let i=0;i<Data.length;i++){
        if(Data[i].name==user.username.trim() && Data[i].password==user.password.trim()){
          dispatch({type:'LOGINSUCCESS',user:user});
             check=true;
             break;
        }
      }
      if(check===false){
        alert('tài khoản hoặc mật khẩu ko chính xác!');
      }
      

    
}
const responseGoogle=(res)=>{
  console.log(res);
 dispatch({type:'ONLOGINGOOGLE',name: res.profileObj.name});
 dispatch({type:'LOGINGOBACK'});


}
  return (
      <React.Fragment>
        {(statusLogin==true)&&
        <div className="modal-login">
        <div className="modal__content ">
          <div className="modal__content-head">
            <div className="modal__content-head-auth" >Đăng nhập</div>
            <div className="modal__content-head-auth  modal__content-head-auth--register" onClick={()=>{dispatch({type:'LOGINGOBACK'});dispatch({type:'REGISTER'}) }}>Đăng ký</div>
          </div>
          <div className="modal__content-wrap">
            <input type="text" className="modal__content-wrap-input" placeholder="Username" name="username" defaultValue={user.username} onChange={(e)=>onChangeLogin(e)}/> <br />
            <input type="text" className="modal__content-wrap-input" placeholder="Mật khẩu" name="password"  defaultValue={user.password} onChange={(e)=>onChangeLogin(e)} /> <br />
          </div>
          <div className="modal__content-text-link">
            <a   className="modal__content-text-link-forget">Quên mật khẩu </a> 
            <a   className="modal__content-text-link-help">Trợ giúp</a>
          </div>
          <div className="modal__content-btn">
            <a className="modal__content-btn-defalt" onClick={()=>{dispatch({type:'LOGINGOBACK'})}}>Trở lại</a>
            <a className="modal__content-btn-defalt modal__content-btn-defalt--register"  onClick={()=>handleLogin()}>Đăng nhập</a>
          </div>
          <div className="modal__content-link">
         
                           <GoogleLogin
                               clientId='608706388858-nirjqdc4q9nhcn0qmu2a5ia7e4t5j6p9.apps.googleusercontent.com'
                               buttonText='login with google'
                               onSuccess={(res)=>responseGoogle(res)}
                              /// onFailure={()=>responseGoogle()}
                               cookiePolicy={'single_host_origin'}
                               
                               ></GoogleLogin>
          </div>
        </div>
        <div className="modal__overlay"  onClick={()=>{dispatch({type:'LOGINGOBACK'})}}>
        </div>
      </div>
        }
      </React.Fragment>
    
  )
}
