import Input from "../InputBox/Input"

function Container() {
    return (
        <div>
            <Input type="email" name="Your Email"/>
            <Input type="password" name="Password"/>
            <Input type="checkbox" />
            <a href="#">Forget Password</a>
            <button>Sign In</button>
            <h3>Don't have an Account yet? <a href="#">Sign Up</a></h3>
        </div>
    )
}

export default Container
