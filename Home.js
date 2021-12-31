import React from "react";
import { Button, Form } from "react-bootstrap";
import './ApiData.css'
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <>

            <h2 style={{ margin: "90px", alignItems: "center" }}>Hi Welcome....</h2>
                <div className="home">
            <span><Link to="/create" ><Button className="btn btn outline-primary" style={{ height: "50px" }}>NEW USER</Button></Link></span>&nbsp;&nbsp;<span><Link to="/Admin"><Button style={{ height: '50px' }}>ADMIN</Button></Link></span>
                </div>
            

        </>
    )
    
    }

export default Home;