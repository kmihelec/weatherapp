import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from '../components/loading'
import Error from '../components/error'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import Currently from '../components/currently'
import Hourly from '../components/hourly'
import Daily from '../components/daily'
import googleImg from '../utils/google.png'

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state={
            location: '',
            loading: false,
            loaded:false,
            data:[],
            error:'',
            tab:1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.location)
        this.setState({loading:true, error:''})
        fetch('http://localhost:7000/api/weather?address='+this.state.location).then((res)=>{
            res.json().then((data) =>{
                if(data.error){
                   this.setState({error:data.error, loading:false, loaded:false})
                }else{
                    console.log(data)
                   this.setState({data:data, loading:false, loaded:true})
                }
            });
        });
    }
    handleSelect(selectedTab) {
        this.setState({
            tab: selectedTab
        });
    }

    render() {

        return (
            <div className="main-content">

                <Form onSubmit={this.handleSubmit}>
                    <Container className="mt-4">
                       <Row>
                          <Col lg={{span:6, offset: 3}} ><Form.Control name='location' type="search" onChange={this.handleChange} placeholder='Location' /></Col>
                          <Col><Button variant="info" type='submit'>Search</Button></Col>
                      </Row>
                    </Container>
                </Form>
                {this.state.loading? <Loading />:null}
                {this.state.error? <Error error={this.state.error}/>:null}
                {this.state.loaded?
                    <Container>
                        <Row>
                            <Col className="text-center m-5"><h2>{this.state.data.location}</h2></Col>
                        </Row>
                        <Row>
                            <Col lg={{span:10, offset:1}}>
                                <Tabs activeKey={this.state.tab} onSelect={this.handleSelect}>
                                    <Tab eventKey={1} title="Currently"><Currently props={this.state.data.weather.currently} /></Tab>
                                    <Tab eventKey={2} title="Hourly"><Hourly props={this.state.data.weather.hourly} /></Tab>
                                    <Tab eventKey={3} title="Daily" ><Daily props={this.state.data.weather.daily} /></Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>:null
                }
                <div className="d-flex justify-content-center" style={{marginBottom: "auto"}}><img src={googleImg} alt="Powered by Google"/></div>
            </div>

        )
    }

}
export default Home;