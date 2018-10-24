import React from "react";
import { Container, Row, Col } from "../Grid";

export const ResultItem = props => (
    <li className="list-group-item">
        <Container>
            <Row>
                <Col size="md-12">
                    <h1 id={props._id}/>
                    <h3>{props.title}</h3>
                    <p>Date Published: {props.date}</p>
                </Col>
            </Row>
        </Container>
    </li>
);