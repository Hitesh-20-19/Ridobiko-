import React from 'react'
import {Button} from 'react-bootstrap'

const button = (props) => {
    return (
        <div style={{paddingTop:"2%"}}>
            <Button variant="info">{props.text}</Button>
        </div>
    )
}

export default button
