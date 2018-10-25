import React from "react";
import "./ResultItem.css";
import { Container, Row, Col } from "../Grid";

export const ResultItem = props => (
    <li className="list-group-item" id="item">
        <Container>
            <Row>
                <Col size="md-12" key={props.id}>
                    <h1 id={props.id}/>
                    <h3>{props.title}</h3>
                    <p>Source: {props.source}</p>
                    <p>Published: {props.date}</p>
                    <a rel="noreferrer noopener" target="_blank"href={props.url}> Go to Article</a> 
                </Col>
            </Row>
        </Container>
    </li>
);