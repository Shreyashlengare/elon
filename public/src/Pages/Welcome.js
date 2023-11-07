import { useState } from "react";
import "./Welcome.css"
import axios from "axios";

function Welcome() {

    const [data, setData] = useState()

    const login = async (e) => {
        e.preventDefault()
        console.log("Shreyash before")
        const res = await axios.get('http://15.206.89.133:8081/employee/demo')
        setData(res.data)
    }

    return (
        <>
            <div class="login-page">
                <div class="form">
                    <h1> FinMeadows  </h1>
                    {data ? data : ''}
                    <form class="register-form">
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p class="message">Already registered? <a href="#">Sign In</a></p>
                    </form>
                    <form class="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button onClick={login}>login</button>
                        <p class="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Welcome