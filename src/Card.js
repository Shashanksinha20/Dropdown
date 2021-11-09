import React from "react";
import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const CardList = ({ clickHandler, showDropdown }) => {
  return (
    <Container className={`container ${showDropdown ? "" : "hide"}`}>
      <Card className="card">
        <Row className="pb-3 mb-2">
          <Col md={6} xs={12} className="col-container">
            <div className="col_header">Up/Down</div>
            <div className="col_elements">
              <div
                className="items mb-2 active"
                onClick={(e) => {
                  clickHandler(e, "Up/Down", "Rise/Fall");
                }}
              >
                Rise/Fall
              </div>
              <div
                className="items"
                onClick={(e) => {
                  clickHandler(e, "Up/Down", "Higher/Lower");
                }}
              >
                Higher/Lower
              </div>
            </div>
          </Col>
          <Col md={6} xs={12} className="col-container">
            <div className="col_header medq">Touch/No Touch</div>
            <div
              className="col_elements"
              onClick={(e) => {
                clickHandler(e, "Touch/No Touch", "Touch/No Touch");
              }}
            >
              <div className="items">Touch/No Touch</div>
            </div>
          </Col>
        </Row>
        <Row className="pt-3 pb-3">
          <Col md={6} xs={12} className="col-container">
            <div className="col_header">In/Out</div>
            <div className="col_elements">
              <div
                className="items mb-2"
                onClick={(e) => {
                  clickHandler(e, "In/Out", "Ends Between/Ends Outside");
                }}
              >
                Ends Between/Ends Outside
              </div>
              <div
                className="items "
                onClick={(e) => {
                  clickHandler(e, "In/Out", "Stays Between/Goes Outside");
                }}
              >
                Stays Between/Goes Outside
              </div>
            </div>
          </Col>
          <Col md={6} xs={12} className="col-container">
            <div className="col_header medq">Digits</div>
            <div className="col_elements">
              <div
                className="items mb-2"
                onClick={(e) => {
                  clickHandler(e, "Digits", "Matches/Differs");
                }}
              >
                Matches/Differs
              </div>
              <div
                className="items mb-2"
                onClick={(e) => {
                  clickHandler(e, "Digits", "Even/Odd");
                }}
              >
                Even/Odd
              </div>
              <div
                className="items "
                onClick={(e) => {
                  clickHandler(e, "Digits", "Over/Under");
                }}
              >
                Over/Under
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CardList;
