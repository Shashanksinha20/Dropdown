import React from "react";
import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const CardList = ({ clickHandler, showDropdown }) => {
  return (
    <Container className={`mt-4 container ${showDropdown ? "" : "hide"}`}>
      <Card className="card">
        <Row className="pb-3 mb-2">
          <Col md={6} xs={12} class="col-container">
            <div class="col_header">Up/Down</div>
            <div class="col_elements">
              <div
                class="items mb-2 active"
                onClick={(e) => {
                  clickHandler(e, "Up/Down", "Rise/Fall");
                }}
              >
                Rise/Fall
              </div>
              <div
                class="items"
                onClick={(e) => {
                  clickHandler(e, "Up/Down", "Higher/Lower");
                }}
              >
                Higher/Lower
              </div>
            </div>
          </Col>
          <Col md={6} xs={12} class="col-container">
            <div class="col_header medq">Touch/No Touch</div>
            <div
              class="col_elements"
              onClick={(e) => {
                clickHandler(e, "Touch/No Touch", "Touch/No Touch");
              }}
            >
              <div class="items">Touch/No Touch</div>
            </div>
          </Col>
        </Row>
        <Row lassName="pt-3 pb-3">
          <Col md={6} xs={12} class="col-container">
            <div class="col_header">In/Out</div>
            <div class="col_elements">
              <div
                class="items mb-2"
                onClick={(e) => {
                  clickHandler(e, "In/Out", "Ends Between/Ends Outside");
                }}
              >
                Ends Between/Ends Outside
              </div>
              <div
                class="items "
                onClick={(e) => {
                  clickHandler(e, "In/Out", "Stays Between/Goes Outside");
                }}
              >
                Stays Between/Goes Outside
              </div>
            </div>
          </Col>
          <Col md={6} xs={12} class="col-container">
            <div class="col_header medq">Digits</div>
            <div class="col_elements">
              <div
                class="items mb-2"
                onClick={(e) => {
                  clickHandler(e, "Digits", "Matches/Differs");
                }}
              >
                Matches/Differs
              </div>
              <div
                class="items mb-2"
                onClick={(e) => {
                  clickHandler(e, "Digits", "Even/Odd");
                }}
              >
                Even/Odd
              </div>
              <div
                class="items "
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
