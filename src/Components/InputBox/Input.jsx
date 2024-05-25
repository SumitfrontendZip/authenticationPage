import './Input.css'

function Input({ name, type }) {
    return (
        <div>
            <label htmlFor="your email">{name}</label>
            {
                type == 'checkbox' ? <input type="checkbox" required /> : <input type={type} required />
            }
        </div>
    )
}

export default Input
