import { useState } from 'react'
import './Input.css'

function Input({ name, type, flex }) {

   const [email , setEmail]= useState('')
   const [password , setPassword]= useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleClick = () => {
        console.log(data);
    }

    return (
        <div style={flex}>
            {
                (type === 'password' || 'email') && (name !== 'Login') && <label htmlFor={name}>{name}</label>
            }

            {type === 'checkbox' ? (
                <input type="checkbox" required />
            ) : type === 'submit' ? (
                <input type="submit" value={name}
                    onClick={handleClick}
                />
            ) : (
                <input
                    type={type}
                    required
                    value={type === 'email' ? email : password}
                    onChange={handleChange}
                />
            )}
        </div>
    )
}

export default Input
