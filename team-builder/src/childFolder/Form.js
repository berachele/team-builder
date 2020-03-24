import React from "react"

// In Form.js build out your markup
const Form = props => {
    return (
        // console.log("Hello from Form.js") testing that it works

        //Build inputs for name, email and role (backend engineer, frontend engineer, designer, etc. Use your imagination)
        //Import the useState hook and utilize what we learned about two-way data binding
        <form onSubmit={props.submitForm}>
            <label>Enter First Name:
                <input className="first-name"
                    onChange={props.makeChange}
                    value={props.first}
                    name='first'
                    type='text'
                />
            </label>

            <label>Enter Last Name:
                <input className="last-name"
                    onChange={props.makeChange}
                    value={props.last}
                    name='last'
                    type='text'
                />
            </label>

            <label>Role: 
                <input className="role"
                    onChange={props.makeChange}
                    value={props.role}
                    name='role'
                    type='text'
                />
            </label>

            <label>Email: 
                <input className="email"
                    onChange={props.makeChange}
                    value={props.email}
                    name='email'
                    type='text'
                />
            </label>
            <br/><br/><br/>
           <input type='submit' />
        </form>
    )
}

export default Form