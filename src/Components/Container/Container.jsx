import { useState } from "react"
import Background from "../Background/Background"
import './Container.css'
function Container() {

    const [fields, setFields] = useState({
        email: '',
        password: ''
    })

    const handleEmail = (e) => {
        setFields(prevData => ({ ...prevData, email: e.target.value }))
    }
    const handlePassword = (e) => {
        setFields(prevData => ({ ...prevData, password: e.target.value }))
    }

    const handleClick = () => {
        console.log(fields);
        setFields(prevData => ({ ...prevData, email: "", password: '' }))
    }

    return (
        <section>
            <Background />
            <div className="signin">
                <div className="content">
                    <h2>Log In</h2>
                    <div className="form">
                        <div className="inputBox">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={fields.email} onChange={handleEmail} />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="email">Password</label>
                            <input type="password" value={fields.password} onChange={handlePassword} />
                        </div>
                        <div className="links"> <a href="#">Forgot Password</a> <a href="#">Signup</a>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Login" onClick={handleClick} />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Container
