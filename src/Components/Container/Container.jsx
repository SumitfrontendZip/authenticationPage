import Background from "../Background/Background"
import Input from "../InputBox/Input"
import './Container.css'
function Container() {

    const displayFlexProperty =  {
        display: 'flex',
        alignItems: 'center'
      }
      
    return (
        <section>
            <Background/>
            <div className="signin">
                <div className="content">
                    <h2>Log In</h2>
                    <div className="form">
                        <div className="inputBox">
                            <Input type="email" name="Your Email" />
                        </div>
                        <div className="inputBox">
                            <Input type="password" name="Password" />
                        </div>
                        <Input type="checkbox"  name="Remember Me" flex={displayFlexProperty}/>
                        <div className="links"> <a href="#">Forgot Password</a> <a href="#">Signup</a>
                        </div>
                        <div className="inputBox">
                            <Input type="submit" name="Login" />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Container
