import React from "react";
import "./ResultItem.css";
import { Container, Row, Col } from "../Grid";

export const ResultItem = props => (
    <li className="list-group-item" id="item">
        <Container>
            <Row>
                <Col size="md-12" key={props.id} id={props.id}>
                    <h3>{props.title}</h3>
                    <h6>{props.snippet}</h6>
                    <br></br>
                    <Row>
                        <Col size="sm-auto .offset-sm-1">
                            <p>Source: {props.source}</p>
                        </Col>
                        <Col size="sm-auto .offset-sm-1">
                            <p>Published: {props.pub_date}</p>
                        </Col>
                    </Row>
                    <a rel="noreferrer noopener" target="_blank"href={props.url}> Go to Article</a> 
                </Col>
            </Row>
        </Container>
    </li>
);