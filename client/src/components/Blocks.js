import {useState, useEffect} from 'react'
import { Card, Button, Nav } from 'react-bootstrap'
import Errors from './Errors'
import BlockTab from './BlockTab'
import EditBlock from './EditBlock'


const Blocks = ({ errors, setBlocks, block, blocks }) => {
   
    const {id} = block
    const [tab, setTab] = useState("#first")

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

    const handleTab = (e) => {
        console.log(e.target)
        setTab(e.target.href)
    }

    const renderTab = () => {
        if(tab.includes("#first")) {
            return <BlockTab block={block} errors={errors} handleDeleteBlock={handleDeleteBlock} /> 
        } else {
            return <EditBlock handleTab={handleTab} setTab={setTab} block={block} blocks={blocks} setBlocks={setBlocks} setTab={setTab} renderTab={renderTab} />
        }
    }

   
    return (
        <Card id='block-card' >
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey={tab}>
                    <Nav.Item>
                        <Nav.Link onClick={handleTab} href="#first">Time Block</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={handleTab} href="#second">Edit block</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {renderTab()}
            </Card.Body>
        </Card>
    )
}

export default Blocks