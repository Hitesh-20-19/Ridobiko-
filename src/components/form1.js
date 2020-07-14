import React from 'react'
import {Form} from 'react-bootstrap'


const form2 = (props) => {
    return (
        <div style={{paddingTop:"2%"}}>
           <Form.Group>
          <Form.Control as="select" onChange={props.handleCity} value={props.valuec} >
           <option>Select City</option>
           <option value="Delhi" >Delhi</option>
          </Form.Control>
          <br />
          <Form.Control as="select" onChange={props.handleVehical} value={props.valuev}>
          <option>Select Vehical</option>
          <option value="Bike">Bike</option>
          <option value="Car">Car</option>
          </Form.Control>
          <br />
          </Form.Group>
        </div>
    )
}

export default form2
