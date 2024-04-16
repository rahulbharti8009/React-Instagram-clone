import { useEffect } from "react";
import { log } from "../common/Log";
import FooterComp from "../components/FooterComp";
import '../styles/Dashboard.css';


import { useNavigate, useLocation } from 'react-router-dom';
const TAG = "DashboardUI";

const DashboardUI=()=>{
    const {state} = useLocation();

    const { id, color } = state; // Read values passed on state
    console.log(JSON.stringify(state))

    useEffect(()=> {
            // To retrieve data
    if(localStorage.getItem('isLogin') == 'true'){
        log(TAG, localStorage.getItem('isLogin'))
    }
    },[])

    return(
        <div>

            <div className="sidemenu">
                <div className="box1">
                </div>

                <div className="box2">
                </div>

                <div className="box3">
                </div>

             </div>
        </div>
    );
}

export default DashboardUI;