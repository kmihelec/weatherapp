import  React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'


const Currently = ({props}) =>{
    return(
        <Container>
            <Row className="data">
                <Col>Summary</Col>
                <Col>{props.summary}</Col>
            </Row>
            <Row className="data">
                <Col>Temperature</Col>
                <Col>{Math.round(props.temperature)} °C</Col>
            </Row>
            <Row className="data">
                <Col>Apparent Temperature</Col>
                <Col>{Math.round(props.apparentTemperature)} °C</Col>
            </Row>
            <Row className="data">
                <Col>Humidity</Col>
                <Col>{Math.round(props.humidity*100)}%</Col>
            </Row>
            <Row className="data">
                <Col>Pressure</Col>
                <Col>{Math.round(props.pressure)} hPa</Col>
            </Row>
            <Row className="data">
                <Col>Chance of precipitation</Col>
                <Col>{Math.round(props.precipProbability*100)}%</Col>
            </Row>

        </Container>
    )
};

export default Currently