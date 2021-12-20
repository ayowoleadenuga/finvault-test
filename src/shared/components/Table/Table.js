import React from "react";
import { Col, Row } from "reactstrap";
import Button from "../Button/Button";

export default function Table({ columns, data }) {
  return (
    <Col>
      <Row>
        <Col>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr className="table-active">
                  {columns && columns.length
                    ? columns.map((column) => (
                        <th key={column.name} scope="col">
                          <div className="d-flex">
                            <span>{column.name}</span>
                            <div className="filters">
                              <div className="arrow-up" />
                              <div className="arrow-down" />
                            </div>
                          </div>
                        </th>
                      ))
                    : ""}
                </tr>
              </thead>
              <tbody>
                {data && data.length
                  ? data.map((_data, i) => (
                      <tr key={i}>
                        {columns.map((column, index) => (
                          <>
                            {index !== columns.length - 1 ? (
                              <td key={_data[column.id]}>{_data[column.id]}</td>
                            ) : (
                              <td key={_data[column.id]}>
                                <Button
                                  text={_data[column.id]}
                                  type={
                                    _data[column.id] === "Received"
                                      ? "success"
                                      : "danger"
                                  }
                                  buttonPill
                                />
                              </td>
                            )}
                          </>
                        ))}
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Col>
  );
}
