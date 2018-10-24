import React from "react";
import { Container, Row, Col } from "../Grid";

export const ResultItem = props => (
    <li className="list-group-item">
        <Container>
            <Row>
                <Col size="md-12">
                    <h1>1</h1>
                    <h3>Name of Article: {props.headline}</h3>
                </Col>
            </Row>
        </Container>
    </li>
);