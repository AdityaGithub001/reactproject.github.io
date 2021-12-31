import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import './ApiData.css'
import {Link,useNavigate} from "react-router-dom"
const AdminLog = () => {
     const[name,setName]=useState("")
     const[password,setPassword]=useState("")
     
     const navigate=useNavigate()
     const Submitform=(e)=>{       
        e.preventDefault()
         if(name==="aditya" && password!="adi@123"){
             alert("invalid password")
         } 
         else if(name!="aditya" && password!="adi@123"){
             alert("Invalid username and password")
         }
         else if(password==="adi@123" && name!="aditya"){
                         alert("Invalid username")
         }
             
         else if(password==="adi@123" && name==="aditya"){
                     navigate("/datatable")
         }
         
     }

     const nameHandle=(e)=>{
         setName(e.target.value)

     }

     const passHandle=(e)=>{
         setPassword(e.target.value)
    
    
     }
    return (
        <div>
            <center>
                <Form>
                  <div style={{float:"left",display:"flex"}}></div>  
                    <h5>ADMIN LOGIN</h5><br />
                    <Form.Group className="mb-3" >
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name" value={name} onChange={nameHandle}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={passHandle} />{password}
                    </Form.Group>
                 <Link to="/datatable"><Button variant="primary" type="submit" style={{ height: "50px" }} onClick={Submitform}>
                        Submit
                    </Button></Link>
                </Form>
            </center>
        </div>
    )
}

export default AdminLog