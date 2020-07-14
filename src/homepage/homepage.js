import React from 'react'
import Form1 from '../components/form1'
import {Container , Row,Col} from 'react-bootstrap'
import Title from '../components/title'
import {Link} from 'react-router-dom'

const homepage = (props) => {
    return (
        <div style={{paddingTop:"6%"}}>
            <Container>
            <Title title="Select your class" />
            <Row>
            <Col></Col>
            <Col lg={8}><Form1 handleCity={props.handleCity} handleVehical={props.handleVehical} valuec={props.valuec} valuev={props.valuev}/></Col>
            <Col></Col>
            </Row>
            <Link to="/products"><button className="btn btn-info" onClick={props.handleFilter}>Search</button></Link>
            </Container>
            
        </div>
    )
}

export default homepage
