import {useState} from 'react'
import Errors from './Errors'


const CreateBlock = ({ handleNewBlock, errors}) => {

    const [state, setState] = useState({})


    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }

        // fetch('http://localhost:3000/users', config)
        fetch('/blocks', config)   // need to set up proxy
        .then(res => res.json())
        .then(data => handleNewBlock(data))
        // .catch(error => console.log(error, 'error'))
    }


    return (
        <div>
            <form onSubmit={onSubmit} >
                <label for="title">Title:</label><br/>
                    <input onChange={onChange} type="text" id="title" name="title" /><br/>
                <label for="content">Time:</label><br/>
                    <textarea onChange={onChange} type="text" id="content" name="content" /><br/><br/>
                    <input type="submit" value="Submit"/>
                <label for="content">Date:</label><br/>
                    <textarea onChange={onChange} type="text" id="content" name="content" /><br/><br/>
                    <input type="submit" value="Submit"/>
            </form> 
            <br/>
            <Errors errors={errors} />
        </div>
    )
}

export default CreateBlock;