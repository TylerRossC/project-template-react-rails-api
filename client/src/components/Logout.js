import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Logout = ({setCurrentUser}) => {
    const history = useHistory()
    useEffect(() => {
        let config = {
            method: 'DELETE'
        }

        fetch('/logout', config)
        setCurrentUser(null)
        history.push('/login')
    })
    // useEffect(logout)
    // async function logout(){
    //     let config = {
    //         method: 'DELETE'
    //     }

    //     await fetch('/logout', config)
    //     setCurrentUser(null)
    //     history.push('/login')
    // }
    return(
        <h1>bananas</h1>
    )
}

export default Logout