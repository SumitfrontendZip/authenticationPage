import { useState } from "react"

function InputBox({ auth }) {

    const [fields, setFields] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    })

    const handleEmailChange = (e) => {
        setFields(prevData => ({ ...prevData, email: e.target.value }))
    }
    const handlePasswordChange = (e) => {
        setFields(prevData => ({ ...prevData, password: e.target.value }))
    }
    const handleFirstNameChange = (e) => {
        setFields(prevData => ({ ...prevData, firstName: e.target.value }))
    }
    const handleLastNameChange = (e) => {
        setFields(prevData => ({ ...prevData, lastName: e.target.value }))
    }

    const handleClick = () => {
        const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (emailRegEx.test(fields.email) && auth==='log in') {
            setFields(prevData => ({ ...prevData, email: "", password: '' }));
        }

        if(emailRegEx.test(fields.email) && auth==='Sign Up'){
            setFields(prevData=> ({...prevData, firstName:'',lastName:'', email: "", password: ''}))
        }

        console.log(fields);
        alert(auth + ' successfully')

    }

    return (
        <div className="content">
            <h2>{auth}</h2>
            <div className="form">
                {
                    auth === 'log in' ? '' : (
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
                <div className="links"> <a href="#">Forgot Password</a> <a href="#">{auth !== 'log in' ? 'log in' : 'Sign Up'}</a>
                </div>
                <div className="inputBox">
                    <input type="submit" value={auth} onClick={handleClick} />
                </div>

            </div>

        </div>
    )
}

export default InputBox
