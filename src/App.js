import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
import logo from "..//src/assets/q.png"


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container > 
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  Inicio
                </Link>
              </Navbar.Brand>

              <div>
                <img src={logo}></img>
              </div>

              <Nav className="justify-content-end">
                <Navbar.Brand>
                  <Link to={"/create-student"} className="nav-link">
                    Crear Empleado
                  </Link>
                </Navbar.Brand>

                <Navbar.Brand>
                  <Link to={"/student-list"} className="nav-link">
                    Listar Empleado
                  </Link>
                </Navbar.Brand>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container  >
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/create-student"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-student/:id"
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/student-list"
                    component={(props) => <StudentList {...props} />}
                  />
                  
                
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;