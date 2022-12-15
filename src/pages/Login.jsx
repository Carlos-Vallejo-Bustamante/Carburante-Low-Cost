import React, { useContext, useState } from 'react'
import authAxios from '../services/AuthAxios'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

const Login = () => {
    const { storeToken, authentication } = useContext(AuthContext)
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const login = (eventHtml) => {
        eventHtml.preventDefault()
        authAxios.login(user)
            .then(response => {
                console.log(response)
                storeToken(response.token)
                authentication()
            })
        navigate('/')
    }

    const updateUser = (eventHTML) => {
        console.log(eventHTML.target.value);
        const { name, value } = eventHTML.target
        setUser({ ...user, [name]: value })
    };

    return (
        <Form className='container my-5' onSubmit={login}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Introduce tu email" required onChange={updateUser} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required onChange={updateUser} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Registro
            </Button>

        </Form>
    )
}

export default Login;