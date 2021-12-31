import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './ApiData.css'
const Update = () => {

    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[id,setId]=useState('')
    const navigate=useNavigate();
    useEffect(()=>{
     setUsername(localStorage.getItem('username'))
     setEmail(localStorage.getItem('email'))
     setPassword(localStorage.getItem('password'))
     setId(localStorage.getItem('ID'))
    },[])
    const sendDatatoApi=(e)=>{
        e.preventDefault()
        axios.put(`https://61c41e49f1af4a0017d99349.mockapi.io/CRUD/${id}`,{
           username,
           email,
           password   
    }
        ).then(()=>{
            alert('updated successfully')
         navigate('/datatable')
        })
    }

    const cancelHandle=()=>{
      navigate("/datatable")
    }

    return (
      <center>
        <div>
            
            <Form>
            <h5>UPDATE</h5><br/>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username"  defaultValue={username} onChange={(e)=>{setUsername(e.target.value)}} />
  </Form.Group>

  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="text" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
  </Form.Group>
 
  <Button style={{height:"40px",width:"80px"}} variant="primary" type="submit" 
  onClick={sendDatatoApi}
   >
    UPDATE
  </Button > <Button style={{height:"40px",width:"80px"}} onClick={cancelHandle}>CANCEL</Button>
</Form>

        </div>
        </center>
    )
}

export default Update