/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ipfs from "./ipfs";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Register extends React.Component {

  
  
  handlecapture = (event) => {
    console.log("handle capture");
    event.preventDefault();
      
      const file=event.target.files[0];
      const reader =new window.FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend=()=>{
        this.setState({buffer:Buffer(reader.result)});
        console.log("buffer",this.state.buffer);
      }
  }

  constructor(props) {
    super(props);
    this.state = {buffer: '', ipfshash: '', value: '', school: '', class: '', st1: '', st2: '', unit: '',  teamno: '', ideas: '', plan: '', make_test: '', presentation: '', no_of_students: '', comments: '', image: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = async(event) => {
    alert('Form submitted Successfully!');
    event.preventDefault();
    event.preventDefault();
    console.log("handle submit");
    console.log(this.state.buffer);
    ipfs.files.add(this.state.buffer,(error,result)=>{
      if(error)
      {
      console.error(error);
      return 
      }
      this.setState({ipfshash:result[0].hash});
      console.log('ipfshash',this.state.ipfshash);
    })
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ schoolName: this.state.school, className: this.state.class })
    };
    fetch('http://localhost:8000/api/unit', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
  }

  render() {
    return (
      <>
        <Col lg="12" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
            <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="School Name"
                  type="email"
                  value={this.state.school} onChange={this.handleChange} 
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Class Name"
                  type="email"
                  value={this.state.class} onChange={this.handleChange} 
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Student Teacher 1 Name"
                  type="email"
                  value={this.state.st1} onChange={this.handleChange} 
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Student Teacher 2 Name"
                  type="email"
                  value={this.state.st2} onChange={this.handleChange} 
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Unit"
                  type="email"
                  value={this.state.unit} onChange={this.handleChange} 
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Team Number"
                  type="number"
                  value={this.state.teamno} onChange={this.handleChange} 
                />
              </FormGroup>
            </Col>
            <Col md="12">
              <h2>Ideas</h2>
            </Col>
          <Col md="3">
              <FormGroup>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      className="custom-control-input"
                      id="customCheck1"
                      type="checkbox"
                    />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Not Attempted
                </label>
              </div>     
          </FormGroup>
            </Col>
          <Col md="3">
              <FormGroup>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      className="custom-control-input"
                      id="customCheck2"
                      type="checkbox"
                    />
                <label className="custom-control-label" htmlFor="customCheck2">
                  Attempted
                </label>
              </div>     
          </FormGroup>
            </Col>
          <Col md="3">
              <FormGroup>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      className="custom-control-input"
                      id="customCheck3"
                      type="checkbox"
                    />
                <label className="custom-control-label" htmlFor="customCheck3">
                  Good Ideas
                </label>
              </div>     
          </FormGroup>
            </Col>
          <Col md="3">
              <FormGroup>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      className="custom-control-input"
                      id="customCheck4"
                      type="checkbox"
                    />
                <label className="custom-control-label" htmlFor="customCheck4">
                  Showcase
                </label>
              </div>     
          </FormGroup>
            </Col>

            
          <Col md="12">
            <h2>Plan</h2>
          </Col>
          <Col md="4">
            <FormGroup>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck5"
                    type="checkbox"
                  />
              <label className="custom-control-label" htmlFor="customCheck5">
                Not Attempted
              </label>
            </div>     
          </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck6"
                    type="checkbox"
                  />
              <label className="custom-control-label" htmlFor="customCheck6">
                Partial Completion
              </label>
            </div>     
          </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck7"
                    type="checkbox"
                  />
              <label className="custom-control-label" htmlFor="customCheck7">
                Completed
              </label>
            </div>     
          </FormGroup>
          </Col>

                      
          <Col md="12">
            <h2>Make &amp; Test</h2>
          </Col>
          <Col md="4">
            <FormGroup>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck8"
                    type="checkbox"
                  />
              <label className="custom-control-label" htmlFor="customCheck8">
                Not Attempted
              </label>
            </div>     
          </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck9"
                    type="checkbox"
                  />
              <label className="custom-control-label" htmlFor="customCheck9">
                Partial Completion
              </label>
            </div>     
          </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck10"
                    type="checkbox"
                  />
              <label className="custom-control-label" htmlFor="customCheck10">
                Completed
              </label>
            </div>     
          </FormGroup>
          </Col>
          

            
          <Col md="12">
              <h2>Presentation</h2>
            </Col>
          <Col md="6">
              <FormGroup>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      className="custom-control-input"
                      id="customCheck11"
                      type="checkbox"
                    />
                <label className="custom-control-label" htmlFor="customCheck11">
                  Not Attempted
                </label>
              </div>     
          </FormGroup>
            </Col>
          <Col md="6">
              <FormGroup>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      className="custom-control-input"
                      id="customCheck12"
                      type="checkbox"
                    />
                <label className="custom-control-label" htmlFor="customCheck12">
                  Attempted
                </label>
              </div>     
          </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="No of Students Attempted"
                  type="number"
                  value={this.state.no_of_students} onChange={this.handleChange} 
                />
              </FormGroup>
            </Col>
          
          <Col md="12">
              <FormGroup>

              <Input
            id="exampleFormControlTextarea1"
            placeholder="Comments / Ideas to Showcase"
            rows="3"
            type="textarea"
            value={this.state.comments} onChange={this.handleChange} 
          />              
          </FormGroup>
            </Col>
          <Col md="12">
              <h2>Upload Images</h2>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Team Number"
                  type="file"
                  value={this.state.file} onChange={this.handlecapture} 
                />
              </FormGroup>
            </Col>
            <Col md="12">      
              <Button block color="primary" size="lg" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>

            </CardHeader>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
