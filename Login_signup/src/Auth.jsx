import React, { useState } from "react";
import './Auth.css'

function Auth(){

    //this section controls the toggle between login and signup
    //the usestate hook is used for that
    const[islogin, setislogin] = useState(true)
    return(// in the below line the 'active' is a dynamic className given to the button.
    //  When we click the Login button it sets the isLogin state to true and the 
    // 'active className is given to it with specific css, if the signup is clicken it
    //  sets the value to false and becoz the condn is set for !islogin, it bestows 
    // the classname active to the signup button
        
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                <button className={islogin? 'active' : ''}onClick={()=>setislogin(true)}>Login</button>
                
                <button className={!islogin? 'active': ''}onClick={()=>setislogin(false)}>Signup</button>
                </div>
                
                {islogin? <>
                <div className="form">
                    <h2>Login Form</h2>
                    <input name="Gmail" id="ID" placeholder="Enter Your Gmail"></input>
                    <input name="Password" id="Pass" placeholder="Enter Your Password" ></input>
                    <a href="#">Forgot Password</a>
                    <p>Not a member? <a href="#" onClick={()=>{setislogin(false)}}>Signup</a></p>
                </div>
                </> : 
                <>
                    <div className="form">
                        <h2>Signup Form</h2>
                        <input type="Gmail" placeholder="Enter you Gmail" />
                        <input type="Password" placeholder="Enter password" />
                        <input type="cPassword" placeholder="Confirm password" />
                        <button>Signup</button>
                    </div>
                </>}

            </div>
        </div>
    )
}

export default Auth