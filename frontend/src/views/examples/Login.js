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

class Login extends React.Component {
  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Select the Form you want to fill</small>
              </div>
              <div className="btn-wrapper text-center pb-3">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--text">Unit Evaluation Form</span>
                </Button>
              </div>
              <div className="btn-wrapper text-center pb-3">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--text">Student Observation Form</span>
                </Button>
              </div>
              <div className="btn-wrapper text-center pb-3">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--text">Student-teacher Observation Form</span>
                </Button>
              </div>
              <div className="text-muted text-center mt-2 mb-3">
                <small>Select the Dashboard you want to view</small>
              </div>
              <div className="btn-wrapper text-center pb-3">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--text">Inqui-Lab Associate Dashboard</span>
                </Button>
              </div>
              <div className="btn-wrapper text-center pb-3">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--text">Student Teacher Dashboard</span>
                </Button>
              </div>

            </CardHeader>
          </Card>
        </Col>
      </>
    );
  }
}

export default Login;
