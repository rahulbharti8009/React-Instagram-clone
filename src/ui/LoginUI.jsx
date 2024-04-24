import logo from '../logo.svg';
import '../App.css';
// import LoginForm from './App/LoginForm';
import { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import phone from '../images/phone.png'
import {colors} from '../utils/Colors';
import { onPostGenericApi } from '../api/Repository';
import { log } from '../common/Log';
import { UI } from '../utils/Constant';
import FooterComp from '../components/FooterComp';
import { initial_state, postReducer } from '../action/PostReducer';

const initialLoginState = {
  username: '',
  password: ''
}
 function reducer(state, action) {

  switch(action.type){
    case  'CHANGE_USERNAME' :
      return {...state, username: action.payload}
      case 'CHANGE_PASSWORD':
        return {...state, password: action.payload}

    default : return state;
  }
 }
let TAG = "LoginUI";
const LoginUI = () => {
  (function(){
    log(TAG, "IIFE", "CALL");
  })()

  useEffect(()=> {
    log(TAG, "function", "useEffect");
  }, [])
  
let [state, loginDispatcher] = useReducer(reducer, initialLoginState)

// let [state, dispatch] = useReducer(postReducer, initial_state)
  let navigate = useNavigate();


let hitLoginApi=()=>{
  log(TAG, "reducer", state.username);
  log(TAG, "reducer", state.password);

    // dispatch({type: "fetch_login"})
    onPostGenericApi("TAG", "theme", "pts_mobile_app/index.php/getTheme",  "{\"product\":\"PTS\"}" ,
      (response)=>{
        log("TAG", ` response theme`, JSON.stringify(response))
  // To store data
        localStorage.setItem('isLogin', true);
        alert(JSON.stringify(response))
        navigate(UI.DashboardUI, { state: { id: 7, color: 'green' } })
      }, (failure)=> {
        log("TAG", ` failure theme`,  JSON.stringify(failure))
        // dispatch({type: "error_login"})
        alert(JSON.stringify(failure))
      }
    )
}

return (
 <>
 {    log(TAG, "retun ", "render")
}
  <header>
      </header>
     
      <main className='container'>
      <div className={'containner-left'}>
          {/* <img src="https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot3.png?__d=www" alt="" /> */}
          <img  src={phone} alt=''></img>
  
      </div>
        <div className={'login'}>
          <div className='first'>
            <label className='insta'>Instagram</label>
           <input className="login-item" name='text' placeholder='phonenumber, username or email address'  onChange={(e)=> {
              log(TAG, "username", e.target.value);
              loginDispatcher({type: 'CHANGE_USERNAME' , payload: e.target.value})
           }}/>
           <input className='login-item' name='password' placeholder='Password' onChange={(e)=> {
                  log(TAG, "Password", e.target.value);
                  loginDispatcher({type: 'CHANGE_PASSWORD' , payload: e.target.value})
           }}/>
           <button onClick={()=> {
              hitLoginApi();
           }} className="btn-login login-item" type="button">Login</button>
          
         <label className='log-in-with-facebook'>Log in with facebook</label>
         <label className='log-in-with-facebook' style={{fontSize: '14px'}}>forgot your password</label>
  
          </div>
  
          <div className='second'>
            <label style={{fontSize:'14px'}}>Don't have account?<button style={{color: colors.skyblue, borderWidth: '0px', backgroundColor: 'transparent', cursor:'pointer'}} onClick={()=> {
                navigate('account/SignUp')
            }}>SignUp</button></label>
  
          </div>
  
          <div className='third'>
          <label style={{textAlign:'center', margin: '10px'}}>Get the app</label>
            <div className='third-containner'>
            <a href='https://apps.apple.com/in/app/instagram/id389801252'>
              <img className='icon-apple'  src='https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png' alt=''></img>
              </a>
             <a href='https://play.google.com/store/apps/details?id=com.instagram.android&hl=en&gl=US'>
              <img className='icon-android' src='https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png' alt=''></img>
             </a>
            </div>
          </div>
        </div>
      </main>
      
      <footer>
       {/* <FooterComp/> */}
      </footer>
 </>
  );
};

export default LoginUI;
