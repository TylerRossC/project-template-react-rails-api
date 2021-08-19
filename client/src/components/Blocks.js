import React from 'react'
import { Card, Button, Nav } from 'react-bootstrap'
import Errors from './Errors'


const Blocks = ({ errors, setBlocks, block, blocks }) => {
   
    const {id} = block

    const handleDeleteBlock = () => {
        let config = {
            method: 'DELETE'
        }
        fetch(`/blocks/${id}`, config)
        .then(resp => {
            if (resp.ok){
                setBlocks(blocks.filter(block => block.id !== id))
            }
        })
    }
   
   
   
    return (
        <Card className='block-card' style={{width: '70rem' }}>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Time Block</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Edit block</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link href="#disabled">Comment</Nav.Link>
                    </Nav.Item> */}
                </Nav>
            </Card.Header>
            <Card.Body>
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
                <Button onClick={handleDeleteBlock} variant="primary">Delete TimeBlock</Button>
                <Errors errors={errors} />
            </Card.Body>
        </Card>
    )
}

export default Blocks