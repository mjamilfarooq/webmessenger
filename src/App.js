import React from "react";
import ContactList from "./components/Contacts/ContactList";
import logo from "./logo.svg";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Row>
            <Col lg={4}>
              <ContactList />
            </Col>
            <Col lg={8}>hello</Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
