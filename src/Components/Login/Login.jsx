import axios from 'axios'
import React from 'react'
import Coupon from "./images/Coupon.png"
import styles from"./Login.module.css"
import { useDispatch, useSelector } from 'react-redux'
import {loginProcess} from "../../Redux/Login/Action"
import {Redirect} from "react-router-dom";
import { useHistory } from "react-router-dom";



function Login() {
    let history = useHistory();
    const [mobile, setMobile]=React.useState("")
    const [password, setPassword]=React.useState("")
    const [login, setLogin]=React.useState(true);
    const [userdetails, setUserdetails]=React.useState([])
    const dispatch = useDispatch()
    const userAuth = useSelector(state => state.loginred.userAuth)

    React.useEffect(()=>{
        getUser()
    },[])
    const getUser=()=>{
        axios.get("https://masai-project.herokuapp.com/users")
        .then(res=>{
            setUserdetails(res.data) 
        })
        .catch(err=> alert(err))
    }

    const handleLogin=()=>{
      dispatch(loginProcess(userdetails,mobile))
    }
 

    const handleChange=()=>{}

    return !userAuth?(
        <div className={styles.logincontainer}>
            <div className={styles.logindiv}>
                    <div className={styles.loginpromo}> 
                    <img className={styles.couponcode} src={Coupon} alt="" />  
                    </div>
                    <div className={styles.inputcontainer}>
                        <div>
                            {login ? <span className={styles.heading}>Login</span>: <span className={styles.heading1}>Create an Account</span>}<br/>
                            <div className={styles.inputdiv}>
                                <input onChange={(e)=>setMobile(e.target.value)} value={mobile} className={styles.input2} type="text" placeholder="Email" />
                                <input onChange={(e)=>setPassword(e.target.value)} value={password} className={styles.input2} type="text" placeholder="Password" />
                                <p className={styles.terms}>By continuing, I agree to the <span className={styles.conditions}>Terms of Use</span> & <span className={styles.conditions}>Privacy Policy</span></p> 
                                <button className={styles.loginbutton} onClick={()=>{handleLogin();history.go(-1)}}>CONTINUE</button>
                                {login ? <p>Don't have an account?<span className={styles.conditions} onClick={() => setLogin(false)}>Create one</span></p> : <p>Already have an account?<span className={styles.conditions} onClick={() => setLogin(true)}>Login</span></p> }
                             </div>
                        </div>

                    </div>
            </div>
        </div>
          
    ):(<Redirect to="/login/userdetails"/>)
}

export default Login
