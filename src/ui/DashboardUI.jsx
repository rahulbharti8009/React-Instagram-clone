import FooterComp from "../components/FooterComp";

import { useNavigate, useLocation } from 'react-router-dom';


const DashboardUI=()=>{
const {state} = useLocation();

    const { id, color } = state; // Read values passed on state
    console.log(JSON.stringify(state))

    return(
        <div>
            <header>

            </header>

            <main>
             <h1>Card {state.id}</h1>
            </main>

            <footer>
            {/* <FooterComp/> */}
            </footer>
        </div>


    );
}

export default DashboardUI;