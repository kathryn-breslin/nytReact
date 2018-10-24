import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import { Input, FormBtn, Number } from "./components/Form";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";
import { ResultItem, ResultsList } from "./components/Results";

class App extends Component {
    state = {
        articles: [],
        search: ""
    };

    componentDidMount () {
        this.searchArticles()
    }

    searchArticles = search => {
        API.searchArticles(search)
            .then(res => this.setState({ articles: res.data }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchArticles(this.state.search);
    };

    render() {
        return (
            <div>
                <Jumbotron />
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <label for="searchTerm">Search Term:</label>
                                    <Input name="searchTerm" placeholder="Search Term" />
                                    <label for="numberOfRecs">Number of Records to Retrieve:</label>
                                    <Number name="numberOfRecs" placeholder="How many results would you like?" />
                                    <label for="startYear">Start Year (Optional):</label>
                                    <Input name="startYear" placeholder="Start Year" />
                                    <label for="endYear">End Year (Optional):</label>
                                    <Input name="endYear" placeholder="End Year" />
                                    <FormBtn>Search</FormBtn>
                                    <FormBtn>Clear Results</FormBtn>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col size="md-12">
                            <Container>
                                <ResultsList>
                                    <ResultItem/>
                                </ResultsList>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App;