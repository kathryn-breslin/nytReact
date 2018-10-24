import React from "react";

const SearchForm = props =>
    <div className="container">
        <form>
            <label for="searchTerm">Search Term:</label>
            <input name="searchTerm" placeholder="Search Term" onChange={props.handleSearch} type="text" className="form-control"/>
            <label for="numberOfRecs">Number of Records to Retrieve:</label>
            <input name="numberOfRecs" placeholder="How many results would you like?" className="form-control"/>
            <label for="startYear">Start Year (Optional):</label>
            <input name="startYear" placeholder="Start Year" className="form-control"/>
            <label for="endYear">End Year (Optional):</label>
            <input name="endYear" placeholder="End Year" className="form-control" />
            <br></br>
            <button onClick={props.handleFormSubmit} type="text" className="btn btn-primary">Search</button>
            <button onClick={props.handleDelete} type="text" className="btn btn-primary">Clear</button>
        </form>
    </div>

export default SearchForm;