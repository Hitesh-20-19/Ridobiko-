import React from 'react'
import {Form} from 'react-bootstrap'

const form2 = (props) => {
  return (
    <div style={{paddingTop:"5%"}}>
       <Form.Group>
          <Form.Control as="select" onChange={props.handletype} value={props.value}>
            <option>Select type</option>
          {props.type.map(i=>{
            return <option key={i.id}>{i.Vehicle_type}</option>
          })}
          </Form.Control>
          <br />
          </Form.Group>
    </div>
  )
}

export default form2
