
import React, {useState} from 'react'
import { Card, Nav } from 'react-bootstrap'
import Errors from './Errors'
import BlockTab from './BlockTab'
import EditBlock from './EditBlock'


const Blocks = ({ errors, setBlocks, block, blocks }) => {
   
    const {id} = block
    const [tab, setTab] = useState("#first")
    const blockTab = React.createRef()
    const editTab = React.createRef()

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
        if(e.target.href.includes('#second')){
            blockTab.current.className = "nav-link"
            editTab.current.className = "nav-link active"
        } 

        setTab(e.target.href)
    }

    const renderTab = () => {
        if(tab.includes("#first")) {
            return <BlockTab block={block} errors={errors} handleDeleteBlock={handleDeleteBlock} /> 
        } else {
            return <EditBlock handleTab={handleTab} setTab={setTab} block={block} blocks={blocks} setBlocks={setBlocks} renderTab={renderTab} blockTab={blockTab} editTab={editTab} />
        }
    }

   
    return (
        <Card id='block-card' >
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey={tab}>
                    <Nav.Item>
                        <Nav.Link ref={blockTab} onClick={handleTab} href="#first">Time Block</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link ref={editTab} onClick={handleTab} href="#second">Edit block</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {renderTab()}
                <Errors errors={errors} />
            </Card.Body>
        </Card>
    )
}

export default Blocks