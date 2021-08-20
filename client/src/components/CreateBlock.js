import {useState} from 'react'
import Errors from './Errors'


const CreateBlock = ({ handleCreateBlock, errors, setBlocks, blocks}) => {

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

        fetch('/blocks', config)  
        .then(res => res.json())
        .then(data => handleCreateBlock(data))
    }


    return (
        <div>
            <form onSubmit={onSubmit} >
                <label for="title">Title:</label><br/>
                    <input onChange={onChange} type="text" id="title" name="title" /><br/><br/>
                <label for="time">Time:</label><br/>
                    <input onChange={onChange} type="text" id="time" name="time" /><br/><br/>
                <label for="date">Date:</label><br/>
                    <input onChange={onChange} type="text" id="date" name="date" /><br/><br/>
                    <input type="submit" value="Submit"/>
            </form> 
            <br/>
            <Errors errors={errors} />
        </div>
    )
}

export default CreateBlock;