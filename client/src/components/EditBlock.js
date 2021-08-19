import React, { useState } from 'react'
import { Card, Button, Nav, Form } from 'react-bootstrap'


const EditBlock = ({ block, setBlocks, blocks }) => {
    const { id } = block

    const [form, setForm] = useState({ title: block.title, time: block.time, date: block.date })

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(form)
        }
        fetch(`/blocks/${block.id}`, config)
            .then(resp => resp.json())
            .then(data => setBlocks(blocks.map(block => block.id == id ? data.block : block))
            )
    }

    return (
        <div>
            <form onSubmit={onSubmit} >
                <label for="title">Edit block title:</label><br />
                <input onChange={onChange} type="text" id="title" name="title" value={form.title} /><br />
                <label for="time">Edit time:</label><br />
                <input onChange={onChange} type="text" id="time" name="time" value={form.time} /><br /><br />
                <label for="date">Edit date:</label><br />
                <input onChange={onChange} type="text" id="date" name="date" value={form.date} /><br /><br />
                <Button type="submit" variant="primary">Update Block</Button>
            </form>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </div>
    )
}
export default EditBlock