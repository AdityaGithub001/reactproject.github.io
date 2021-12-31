import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Read = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    axios.get('https://61c41e49f1af4a0017d99349.mockapi.io/CRUD')
      .then((res) => setData(res.data))
  }, [])
  const setId = (id, username, email, password) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
  }
  const getData = () => {
    axios.get('https://61c41e49f1af4a0017d99349.mockapi.io/CRUD')
      .then((res) => setData(res.data))
  }
  const onDelete = (id, username) => {
    axios.delete(`https://61c41e49f1af4a0017d99349.mockapi.io/CRUD/${id}`)
      .then(() => {
        alert(`Are you sure you want to delete ${username}`)

        getData()
      })

  }
  return (
    <div>
      <center><input style={{ marginTop: "30px", width: '200px', border: "2px solid black" }} type="search" onChange={(e) => { setSearch(e.target.value) }} placeholder=' Search' /></center>
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>

            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.filter((value) => {
              if (setSearch === "") {
                return value
              }
              else if (value.username.toLowerCase().includes(search.toLowerCase())) {
                return value
              }
              

            })
              .map((item, i) =>

                <tr key="i">
                     
                  <td>{i+1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td><Link to="/update"><Button className='btn btn-warning ' style={{ height: "40px", color: "white" }} onClick={() => setId(item.id, item.username, item.email, item.password)}>Update</Button> </Link></td>
                  <td><Button className='btn btn-danger' style={{ height: "40px" }} onClick={() => { onDelete(item.id, item.username) }}>Delete</Button></td>
                </tr>
              )}
        </tbody>
      </Table>
    </div>
  )
}

export default Read;