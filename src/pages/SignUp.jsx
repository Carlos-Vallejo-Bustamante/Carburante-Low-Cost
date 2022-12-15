import React, { useContext, useState } from 'react'
import authAxios from '../services/AuthAxios'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

const SignUp = () => {
    const { storeToken, authentication } = useContext(AuthContext)
    const [newUser, setNewUser] = useState({})
    const navigate = useNavigate()

    const createNewUser = (eventHtml) => {
        eventHtml.preventDefault()
        authAxios.signup(newUser)
            .then(response => {
                console.log(response)
                storeToken(response.token)
                authentication()
            })
        navigate('/')
    }

    const updateNewUser = (eventHTML) => {
        console.log(eventHTML.target.value);
        const { name, value } = eventHTML.target
        setNewUser({ ...newUser, [name]: value })
    };

    return (
        <Form className='container my-5' onSubmit={createNewUser}>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="name" placeholder="Introduce tu nombre" required onChange={updateNewUser} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Introduce tu email" required onChange={updateNewUser} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required onChange={updateNewUser} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Registro
            </Button>

        </Form>
    )
}

export default SignUp;