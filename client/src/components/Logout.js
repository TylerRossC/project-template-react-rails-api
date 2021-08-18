import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Logout = ({setCurrentUser}) => {
    const history = useHistory()
    useEffect(() => {
        let config = {
            method: 'DELETE'
        }

        fetch('/logout', config)
        handleLogout()
    })

    const handleLogout = () => {
        setCurrentUser(null)
        setTimeout(() => {
            history.push('/login') 
        }, 2000)
    }
    
    return(
        <h1>See you soon!</h1>
    )
}

export default Logout