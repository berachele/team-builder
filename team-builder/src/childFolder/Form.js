import React from "react"

const Form = props => {
    return (
        // console.log("Hello from Form.js")
        <form>
            <label>Enter First Name:
                <input className="first-name"
                    value={props.first}
                    name='first'
                />
            </label>

            <label>Enter Last Name:
                <input className="last-name"
                    value={props.last}
                    name='last'
                />
            </label>

            <label>Role: 
                <input className="role"
                    value={props.role}
                    name='role'
                />
            </label>

            <label>Email: 
                <input className="email"
                    value={props.email}
                    name='email'
                />
            </label>
        </form>
    )
}

export default Form