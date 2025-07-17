import React from "react";
import LoginContainer from "../components/LoginContainer";


const Login : React.FC = () => {


    return(
        <div className="relative w-full h-[100vh] background-image">
            <div className="w-full h-full bg-black opacity-60"></div>
            <div className="absolute w-full h-full top-0 flex items-center justify-center">
                <LoginContainer />
            </div>
        </div>
    );
};


export default Login;