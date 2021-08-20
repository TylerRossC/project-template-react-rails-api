import React from 'react'
import { Card, Button} from 'react-bootstrap'
import Errors from './Errors'


const Blocks = ({ errors, block, handleDeleteBlock }) => {
   
    
    return (
        <>
            <Card.Title>
                <h6>Title:</h6>
                {block.title}
            </Card.Title>
            <Card.Text>
                <p>Time:</p>
                {block.time}
            </Card.Text>
                <Card.Text>
                <p>Date:</p>
                {block.date}
            </Card.Text>
            <Button id='delete-button' onClick={handleDeleteBlock} variant="primary">Delete TimeBlock</Button>
            <Errors errors={errors} />
        </>
    )
}

export default Blocks