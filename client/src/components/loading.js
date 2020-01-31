import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import React from "react";

const Loading = ()=>{
return(
    <Container className='mt-lg-5'>
        <Row>
            <Col className='text-lg-center' >
                <Spinner animation="border" variant="info" role='status' style={{width:'5rem', height:'5rem'}}><span className='sr-only'>Loading..</span></Spinner>
            </Col>

        </Row>
    </Container>
)}

export default Loading;