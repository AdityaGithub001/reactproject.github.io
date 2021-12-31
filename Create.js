import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios';
import './ApiData.css'
import { useNavigate } from 'react-router-dom';
const Create = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigate()

  const sendDatatoApi = (e) => {
    e.preventDefault()
    axios.post('https://61c41e49f1af4a0017d99349.mockapi.io/CRUD', {
      username,
      email,
      password
    }).then(() => {
      alert(" data stored successfully")

    })
  }


  const Backbtn = () => {
    navigation('/')
  }
  return (
    <div>
      <center>
        <Form>
          <h5>CREATE</h5><br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="UserName" onChange={(e) => { setUsername(e.target.value) }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
          </Form.Group>

          <Button style={{ height: "40px" }} variant="primary" type="submit" onClick={sendDatatoApi}>
            Submit
          </Button>
        </Form>
        <br />
        <Button className=" btn-light btn-outline-primary" style={{ height: "40px" }} onClick={Backbtn}>BACK</Button>
      </center>
    </div>
  )
}

export default Create