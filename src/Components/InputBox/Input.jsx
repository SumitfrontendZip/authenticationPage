import { useState } from 'react'
import './Input.css'
import useInputValue from '../../Hooks/useInputValue'

function Input({ name, type, flex }) {

    const [data, setData] = useState({
        value: '',
        name: name
    })

   

    return (
        <div style={flex}>
            {
                (type === 'password' || 'email') && (name !== 'Login') && <label htmlFor={name}>{name}</label>
            }

            {type === 'checkbox' ? (
                <input type="checkbox" required />
            ) : type === 'submit' ? (
                <input type="submit" value={name} />
            ) : (
                <input
                    type={type}
                    required
                    value={data.value}
                    onChange={e => setData(prevData => ({ ...prevData, value: e.target.value }))}
                />
            )}
        </div>
    )
}

export default Input
