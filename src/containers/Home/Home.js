import React from "react";
import { Col, Row } from "reactstrap";
import Card from "./components/Card";
import Table from "../../shared/components/Table/Table";

export default function Home() {
  const table_column = [
    { id: "from", name: "FROM" },
    { id: "to", name: "TO" },
    { id: "currency", name: "CURRENCY" },
    { id: "100", name: "100.00" },
    { id: "action", name: "ACTION" },
  ];
  const table_data = [
    {
      from: "Finvault",
      to: "My Wallet",
      currency: "USD Coin (PoS)",
      100: "100.00",
      action: "Received",
    },
    {
      from: "Finvault",
      to: "My Wallet",
      currency: "fAED Stablecoin",
      100: "100.00",
      action: "Sent",
    },
    {
      from: "Finvault",
      to: "My Wallet",
      currency: "fAED Stablecoin",
      100: "367.50",
      action: "Received",
    },
    {
      from: "Finvault",
      to: "My Wallet",
      currency: "USD Coin (PoS)",
      100: "100.00",
      action: "Sent",
    },
    {
      from: "Finvault",
      to: "My Wallet",
      currency: "fAED Stablecoin",
      100: "50.00",
      action: "Received",
    },
  ];
  return (
    <Col lg={12} className="home">
      <Row>
        <Col className="sub_header">OVERVIEW</Col>
      </Row>
      <Row>
        <Col className="header">Dashboard</Col>
      </Row>
      <Row>
        <Col>
          <div className="hr-line"></div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Card currency="$" name="USDC" value="12, 200.50" />
        </Col>
        <Col lg={6}>
          <Card currency="AED" name="UAE DIRHAM" value="12, 200.50" />
        </Col>
      </Row>
      <br />
      <Row>
        <Table columns={table_column} data={table_data} />
      </Row>
    </Col>
  );
}
