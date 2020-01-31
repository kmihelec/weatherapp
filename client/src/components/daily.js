import  React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Daily = ({props}) =>{
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July' ,'August', 'September', 'October', 'November', 'December'];
    return(
        <Container>
            <Row className="data">
                <Col>Time</Col>
                <Col>Summary</Col>
                <Col>Max Temperature</Col>
                <Col>Min Temperature</Col>
                <Col>Humidity</Col>
                <Col>Pressure</Col>
                <Col>Chance of precipitation</Col>
            </Row>
            {props.data.slice(0,24).map((e,i)=>{return(
                <Row key={i} className="data">
                    <Col>{day[new Date(e.time*1000).getDay()]}, {month[new Date(e.time*1000).getMonth()]} {new Date(e.time*1000).getDate()}</Col>
                    <Col>{e.summary}</Col>
                    <Col>{Math.round(e.temperatureMax)} °C</Col>
                    <Col>{Math.round(e.temperatureMin)} °C</Col>
                    <Col>{Math.round(e.humidity*100)}%</Col>
                    <Col>{Math.round(e.pressure)} hPa</Col>
                    <Col>{Math.round(e.precipProbability*100)}%</Col>
                </Row>
            )})}
        </Container>
    )
};

export default Daily