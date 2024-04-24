import { useEffect, useState } from "react";
import { log } from "../common/Log";
import FooterComp from "../components/FooterComp";
import '../styles/Dashboard.css';
import { FaBeer } from 'react-icons/fa';
import { AiFillFile } from "react-icons/ai";


import { useNavigate, useLocation } from 'react-router-dom';
import FriendsList from "../components/FriendsList";
const TAG = "DashboardUI";

const DashboardUI=()=>{
    const {state} = useLocation();

    let [changeComponent, setCahngeComp] =useState('Home')
    const { id, color } = state; // Read values passed on state
    console.log(JSON.stringify(state))

    useEffect(()=> {
            // To retrieve data
    if(localStorage.getItem('isLogin') == 'true'){
        log(TAG, localStorage.getItem('isLogin'))
    }
    },[])

    let [sideMenu, setSideMenu] =useState([{icon: AiFillFile, title: 'Home', tintColor:'#ffffff'}, {icon: AiFillFile, title: 'Friend', tintColor:'#ffffff'}, {icon: AiFillFile, title: 'Follower', tintColor:'#ffffff'}])
    const borderStyle = {
        border: '1px solid #000', // Adjust border properties as needed
        display: 'inline-block', // Ensures the element behaves like an inline element but allows styling
        padding: '10px', // Add padding if needed
      };


      let getComponent =()=>{
        switch(changeComponent){
            case 'Home':
                return <FriendsList/>
            case 'Home':
                return <FriendsList/>
        }
      }

    return(
        <div className="main-container">

            <div className="sidemenu">
                <div className="side_icon_name">
                    {sideMenu.map((item, index) => {
                   return <div className="menuhover" style={{
                    border: '0px solid #000',
                    padding: '10px', 
                    display: "flex", 
                    justifyContent:'center',
                    alignItems:'center'
                  }}> 
                    <div className="side_icon">
                       <item.icon style={{fontSize: 40, color:'#575050',   backgroundSize: 'cover'}}/>
                    </div>

                    <label className="menuHeading">{item.title}</label>
                     </div>
                })}
                </div>
             </div>

             <div className="dashboard_container">
             {getComponent()}

             </div>
        </div>
    );
}

export default DashboardUI;