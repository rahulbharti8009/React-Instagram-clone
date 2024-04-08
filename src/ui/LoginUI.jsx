import logo from '../logo.svg';
import '../App.css';
// import LoginForm from './App/LoginForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginUI = () => {
let [menu, setMenu] = useState(['about','job','meta','api','privacy','location','instagramlite','thread','meta' ,'verify'])
  
return (
  <view>
    <header>
      
    </header>
   
    <main className='container'>
      <div className={'login'}>
        <div className='first'>
          <label className='insta'>Instagram</label>
         <input className="login-item" name='text' placeholder='phonenumber, username or email address' />
         <input className='login-item' name='password' placeholder='Password' />
         <button onClick={useNavigate('/DashboardUI')} className="btn-login login-item" type="button">Login</button>
        
       <div className='line-box'>
          <p>OR</p>
       </div>

       <label className='log-in-with-facebook'>Log in with facebook</label>
       <label className='log-in-with-facebook'>forgot your password</label>

        </div>

        <div className='second'>
          <label className='item'>Don't have account? SignUp</label>

        </div>

        <div className='third'>
        <img className='icon-apple' src='https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png' alt=''></img>
          <img className='icon-android' src='https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png' alt=''></img>
        </div>
      </div>
    </main>
    
    <footer>
      <div className='footer'>
          <menu>
            {menu.map((item, index)=> ( <a href="https://www.w3schools.com"> <li>{item}</li></a> ))}
          </menu>
      </div>
    </footer>
  </view>
  );
};

export default LoginUI;
