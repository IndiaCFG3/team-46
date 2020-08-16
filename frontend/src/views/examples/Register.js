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
  render() {
    return (
      <>
        <Col lg="12" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
            <Form>
          <Row>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="School Name"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Class Name"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Student Teacher 1 Name"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Student Teacher 2 Name"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Unit"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Team Number"
                  type="number"
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
                />
              </FormGroup>
            </Col>
            <Col md="12">      
              <Button block color="primary" size="lg" type="button">
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
