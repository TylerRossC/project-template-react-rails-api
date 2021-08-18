import {useState} from 'react'
import Errors from './Errors'
const Login = ({errors, handleUserLoginAndSignup}) => {

    const [state, setState] = useState({})

    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
      e.preventDefault()

      let config = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(state)
      }

      fetch('/login', config)
      .then(res => res.json())
      .then(data => handleUserLoginAndSignup(data))
    }

    return (
        <div>
            <Errors errors={errors}/>
            <form onSubmit={onSubmit}>
                <label>Username:</label>
                <input onChange={onChange} name="username" type="text"/>
                <br/>
                <label>Password:</label>
                <input onChange={onChange} name="password" type="password"/>
                <br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login;