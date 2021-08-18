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
            <Errors errors={errors}/>
            <form onSubmit={onSubmit}>
                <label>Title:</label>
                <input onChange={onChange} name="title" type="text"/>
                <br/>
                <label>Block Content:</label>
                <input onChange={onChange} name="content" type="textfield"/>
                <br/>
                <label for="category_id">Pick a date:</label>
                <select onChange={onChange} name="date" id="date">
                    <option disabled selected value> -- select an option -- </option>
                </select>
                <input type="submit" value="Create Block"/>
            </form>
        </div>
    )
}

export default CreateBlock;