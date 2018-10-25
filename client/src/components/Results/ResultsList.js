import React from "react";
import { Container } from "../Grid";
import "./ResultList.css";

export const ResultsList = props => (
    <Container >
        <div id="group">
        <div id="head">Top Stories</div>
            <ul className="list-group">{props.children}</ul>
        </div>
    </Container>
);