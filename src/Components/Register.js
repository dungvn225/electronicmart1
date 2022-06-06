import React, { useState } from 'react'
import {data,firebaseConnect} from './../firebaseConnect';
import {useDispatch, useSelector} from 'react-redux';
import { useSpring, animated } from 'react-spring'

import {GoogleLogin, GoogleLogout} from 'react-google-login';

export default function Register(props) {
     const [User,setUser]=useState({
        value:{
          username:'',
          password:'',
          passwordconfirm:''
        },
        error:{
          username:'',
          password:'',
          passwordconfirm:''
        }

     })
    
     const [status,setstatus]=useState(false);
     const statusRegister=useSelector(state=>state.Products.statusRegister);
     const statusGoogle=useSelector(state=>state.Products.loginGoogle);

     const dispatch=useDispatch();
    
    
     
      const onchangeValue=(e)=>{
           const target=e.target;
           const name=target.name;
           const value=target.value;
           const type=target.type;

           let newValue={...User.value,[name]:value};
           let newError={...User.error};
         
       
          
          if(value.trim()===''){
             newError[name]=name+' is required';
          }else{
              newError[name]='';
          }


          


          if(name==='passwordconfirm'){
            if(value!==newValue['password']){
              newError[name]=name +' is not valid !';
          }else{
            newError[name]='';
          }
          
          }

         

          setUser({
            value: newValue,
            error:newError
         })



         
          
      }

      const hanldeRegister=(e)=>{
           e.preventDefault();
          let checkError=false;
         for(let key in User.value){
           if(User.value[key].trim()===''){
             checkError=true;
               break;
           }
         }
         for(let key in User.error){
          if(User.error[key].trim()!==''){
            checkError=true;
             break;
          }
        }

         if(checkError===true){
            alert('Dữ liệu chưa hợp lệ,nhập lại !');
            
         }else {
           
          var user={
            name:User.value.username,
            password:User.value.password
            }
     
                    data.push(user);
                   
              
            
         
             
           
            dispatch({type: 'REGISTERSUCCESS'});
             dispatch({type:'LOGIN'});
            
            
              
         }
        
        
           
      }

        
    
     const responseGoogle=(res)=>{
       console.log(res);
      dispatch({type:'ONLOGINGOOGLE',name: res.profileObj.name});
      dispatch({type: 'REGISTERSUCCESS'});
     
     
    }
  return (
      <React.Fragment>
               
        {(statusRegister==true && statusGoogle==false)&&
        
           <div className={`modal-register `}>
         
         <div className="modal__content">
           <div className="modal__content-head">
             <div className="modal__content-head-auth ">Đăng ký</div>
             <div className="modal__content-head-auth   modal__content-head-auth--login" onClick={()=>{dispatch({type:'LOGIN'}) ;  dispatch({type:'REGISTERSUCCESS'})}}>Đăng nhập</div>
           </div>
           <div className="modal__content-wrap">
           <input type="text" className="modal__content-wrap-input" placeholder="userName"  name='username'  onChange={(e)=>onchangeValue(e)}   value={User.value.username}/> <br />
               <span className='input-warning'  style={{color: 'red'}}>{User.error.username}</span>
           <input type="password" className="modal__content-wrap-input" placeholder="Password" name='password'  onChange={(e)=>onchangeValue(e)}   value={User.value.password}/> <br />
             <span className='input-warning'    style={{color: 'red'}}>{User.error.password}</span>
             <input type="password" className="modal__content-wrap-input" placeholder="passwordConfirm" name='passwordconfirm'  onChange={(e)=>onchangeValue(e)}   value={User.value.passwordconfirm}  />
             <span className='input-warning'    style={{color: 'red'}}>{User.error.passwordconfirm}</span>
           </div>
           <div className="modal__content-text">
             Bằng việc đăng kí, bạn đã đồng ý với Shopee về <br />
             <a  >Điều khoản dịch vụ </a> &amp; <a  >Chính sách bảo mật</a>
           </div>
           <div className="modal__content-btn">
             <a className="modal__content-btn-defalt" onClick={()=>{dispatch({type:'REGISTERSUCCESS'}) }}>Trở lại</a>
             <a className="modal__content-btn-defalt modal__content-btn-defalt--register" type='button'  onClick={(e)=>hanldeRegister(e)}>Đăng ký</a>
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
         <div className="modal__overlay"  onClick={()=>{dispatch({type:'REGISTERSUCCESS'}) }}>
         </div>
       </div>
        
        }
    
  </React.Fragment>
  )
  
}
