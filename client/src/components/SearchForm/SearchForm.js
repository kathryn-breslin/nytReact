import React from "react";
import "./SearchForm.css";
// import { Row, Col } from "../Grid";

const SearchForm = props =>
    <div className="container">
        <div id="searchDiv">
            <div id="searchHead">Search for Articles from the New York Times</div>
            <form id="form">
                <label for="searchTerm">Search Term:</label>
                <input name="searchTerm" placeholder="Search Term" onChange={props.handleSearch} type="text" className="form-control" />
                <br></br>
                <label for="numberOfRecs">Number of Records to Retrieve:</label>
                <select name="numberOfRecs" placeholder="How many results would you like?" className="form-control">
                    <option onClick={props.five}>5</option>
                    <option onClick={props.five}>10</option>
                </select>
                <br></br>
                <label for="startYear">Start Year (Optional | YYYY):</label>
                <input name="startYear" placeholder="Start Year" onChange={props.startDate} className="form-control" />
                <br></br>
                <label for="endYear">End Year (Optional | YYYY):</label>
                <input name="endYear" placeholder="End Year" onChange={props.endDate} className="form-control" />
                <br></br>
                {/* <Row>
                    <Col size="sm-auto .offset-sm-1"> */}
                        <button id="searchButton" onClick={props.handleFormSubmit} type="text" className="btn btn-primary btn-lg btn-block">Search</button>
                    {/* </Col>
                    <Col size="sm-auto .offset-sm-1"> */}
                        <button onClick={props.handleDelete} type="text" className="btn btn-secondary btn-lg btn-block">Clear</button>
                    {/* </Col>
                </Row> */}
            </form>
        </div>
    </div>

export default SearchForm;