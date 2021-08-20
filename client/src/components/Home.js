// import Nav from 'react-bootstrap/Nav'
// import { useEffect, useState } from 'react'
// import CreateBlock from './CreateBlock'
import Blocks from './Blocks'
import Errors from './Errors'


const Home = ({currentUser, errors, blocks, setBlocks}) => {
    
    
    const renderBlocks = () => {
        return blocks.map(block => {
            return <Blocks key={block.id} blocks={blocks} block={block} setBlocks={setBlocks} errors={errors} currentUser={currentUser} />
        })
    }
    
    
    return(
        <div>
            <h1> WELCOME HOME!</h1>
            <Errors errors={errors} />
            {renderBlocks()}
            <br/>
        </div>

    )
}

export default Home;