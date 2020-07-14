import React from 'react'
import Form2 from '../components/form2'
import Button from '../components/button'
import {Container , Row,Col} from 'react-bootstrap'
import Title from '../components/title'
import {Link} from 'react-router-dom'
import Card from '../components/card'


const productpage = (props) => {
    
    return (
        <div style={{paddingTop:"3%"}}>
        <Container>
        <Title title="You have selected" />
        {props.cardData.map(i=>{
            return( <Card name={i.Bike_name} rent={i.Rent_Day} deposit={i.Deposit} type ={i.Vehicle_type}key={i.id} img={i.Img} />
            )
        })}
        
        <Row>   
        <Col></Col>
        <Col><Form2 handletype={props.handletype} value={props.value} type={props.cardData} /></Col>
        <Col></Col>
        </Row>
        <button className="btn btn-dark" onClick={props.handleFilterType}>Filter</button>
        <Link to="/"><Button variant="info" text="Select Again" ></Button></Link>
        </Container>   
        </div>
    )
}

export default productpage
