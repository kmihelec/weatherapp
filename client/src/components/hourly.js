import  React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hourly = ({props}) =>{
    return(
        <Container>
            <Row className="data">
                <Col>Time</Col>
                <Col>Summary</Col>
                <Col>Temperature</Col>
                <Col>Apparent Temperature</Col>
                <Col>Humidity</Col>
                <Col>Pressure</Col>
                <Col>Chance of precipitation</Col>
            </Row>
       {props.data.slice(0,24).map((e,i)=>{return(
          <Row key={i} className="data">
              <Col>{new Date(e.time*1000).getHours()}:00</Col>
              <Col>{e.summary}</Col>
              <Col>{Math.round(e.temperature)} °C</Col>
              <Col>{Math.round(e.apparentTemperature)} °C</Col>
              <Col>{Math.round(e.humidity*100)}%</Col>
              <Col>{Math.round(e.pressure)} hPa</Col>
              <Col>{Math.round(e.precipProbability*100)}%</Col>
          </Row>
        )})}
        </Container>
    )


};

export default Hourly;