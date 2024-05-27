import { useState } from "react"

function InputBox() {

    const [auth, setAuth] = useState(false)

    const [fields, setFields] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    })

    const handleChange = (fieldName) => (e) => {
        setFields(prevData => ({ ...prevData, [fieldName]: e.target.value }));
    }

    const handleEmailChange = handleChange("email");
    const handlePasswordChange = handleChange("password");
    const handleFirstNameChange = handleChange("firstName");
    const handleLastNameChange = handleChange("lastName");


    const handleClick = () => {
        const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (emailRegEx.test(fields.email) && !auth && fields.email !== '' && fields.password !== '') {
            console.log(fields.email);
            console.log(fields.password);
            setFields(prevData => ({ ...prevData, email: "", password: '' }));
            alert('Log In Successfully')
        }

        if (emailRegEx.test(fields.email) && auth && fields.firstName !== '' && fields.lastName !== '' && fields.email !== '' && fields.password !== '') {
            setFields(prevData => ({ ...prevData, firstName: '', lastName: '', email: "", password: '' }))
            console.log(fields.firstName);
            console.log(fields.lastName);
            console.log(fields.email);
            console.log(fields.password);
            setAuth(!auth)
        }

    }

    return (
        <div className="content">
            <h2>{!auth ? 'Log In' : 'Sign In'}</h2>
            <div className="form">
                {
                    !auth ? '' : (
                        <>
                            <div className="inputBox">
                                <label htmlFor="email">First Name</label>
                                <input type="email" value={fields.firstName} onChange={handleFirstNameChange} />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="email">Last Name</label>
                                <input type="email" value={fields.lastName} onChange={handleLastNameChange} />
                            </div>
                        </>
                    )
                }
                <div className="inputBox">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={fields.email} onChange={handleEmailChange} />
                </div>
                <div className="inputBox">
                    <label htmlFor="email">Password</label>
                    <input type="password" value={fields.password} onChange={handlePasswordChange} />
                </div>
                <div className="links"> <a href="#">Forgot Password</a> <a href="#" onClick={() => setAuth(!auth)}>{auth ? 'Log In' : 'Sign Up'}</a>
                </div>
                <div className="inputBox">
                    <input type="submit" value={!auth ? 'Log In' : 'Sign In'} onClick={handleClick} />
                </div>

            </div>

        </div>
    )
}

export default InputBox
