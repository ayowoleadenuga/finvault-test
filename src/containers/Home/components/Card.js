import React from "react";
import { Col, Row } from "reactstrap";
import Button from "../../../shared/components/Button/Button";

export default function Card({ currency, name, value }) {
  return (
    <div className="cardbox">
      <Col>
        <Row>
          <div className="symbol">
            <h5>{currency}</h5>
          </div>
          <div className="valueContainer">
            <p className="title">{name}</p>
            <p className="value">{value}</p>
          </div>
        </Row>
        <br />
        <Row>
          <Button text="Send" variant="deep_blue" />
          <Button text="Convert" variant="light_blue" />
        </Row>
      </Col>
    </div>
  );
}
