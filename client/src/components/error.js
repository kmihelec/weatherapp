
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import React from "react";
import Alert from "react-bootstrap/Alert";

const Error = ({error})=>{
    return(
        <Container className='mt-lg-5'>
            <Row>
                <Col className='text-lg-center' >
                    <Alert variant="danger">
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>
                            {error}
                        </p>
                    </Alert>
                </Col>

            </Row>
        </Container>
    )}

export default Error;