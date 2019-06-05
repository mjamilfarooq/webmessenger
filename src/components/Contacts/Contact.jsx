import React from "react";
import { Container, Row, Image, Card } from "react-bootstrap";
import { ChevronBottomIcon } from "react-open-iconic-svg";

export default function Contact(props) {
  let { name, lastmsg, lastseen } = props.contact;

  return (
    
      <Card fluid as="option" style={{ border: "0px", borderRadius: "0px" }}>
        <Row noGutters>
          <Card.Header classNames="col-sm-3">
            <Image
              src="char49.png"
              roundedCircle
              style={{ height: "49px", width: "49px" }}
            />
          </Card.Header>
          <Card.Body classNames="col-sm-7">
            <Card.Title as="h6">{name}</Card.Title>
            <Card.Subtitle as="p">{lastmsg}</Card.Subtitle>
          </Card.Body>
          <Card.Footer classNames="col-sm-2">
            <Container>
              {" "}
              <Row>
                <p>{lastseen}</p>
              </Row>
              <Row style={{ justifyContent: "center" }}>
                <ChevronBottomIcon />
              </Row>
            </Container>
          </Card.Footer>
        </Row>
      </Card>
    
  );
}
