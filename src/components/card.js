import React from 'react'
import {Card} from 'react-bootstrap'

const card = (props) => {
    return (
    <div style={{display:"flex" , justifyContent:"space-evenly",alignItems:"center",paddingTop:"2%"}}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`${props.img}`} />
  
  <Card.Body>
    <Card.Title>Name : {props.name}</Card.Title>
    <Card.Text>
    </Card.Text>
      <h6>Rent : {props.rent}</h6>  
      <h6>Deposi : {props.deposit}</h6>
      <h6>Type : {props.type} </h6>
  </Card.Body>
    </Card>
        </div>
    )
}

export default card
