import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import { Container, Row, Col } from "./Grid";
import { ResultItem, ResultsList } from "./Results";

class Home extends Component {
    state = {
        articles: [],
        search: "",
        startDate: "",
        endDate: ""
    };

    componentDidMount () {
        this.getArticlesFromDatabase()
    }

    getArticlesFromDatabase = () => {
        API.getArticle()
            .then((res) => {
                this.setState({ renderArticles: res.data })
            })
    }

    showArticles = () => {
        return this.state.articles.map(article => (
            <ResultItem
            _id={article.id}
            key={article.id}
            title={article.headline.main}
            snippet={article.snippet}
            source={article.source}
            date={article.pub_date}
            url={article.web_url}
            getArticlesFromDatabase={this.getArticlesFromDatabase}
            />
        ));
    }

    handleSearch = event => {
       this.setState({ search: event.target.value });
    };

    startDate = event => {
        this.setState({ startDate: event.target.value })
    }

    endDate = event => {
        this.setState({ endDate: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.search)
        API.searchArticles(this.state.search)
        .then((res) => {
            this.setState({ articles: res.data.response.docs})
            // console.log("this.state.articles", this.state.articles)
        })
    };

    handleDelete = id => {
        API.deleteArticle(id)
            .then(this.getArticlesFromDatabase());
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <SearchForm
                            handleSearch={this.handleSearch}
                            startDate={this.startDate}
                            endDate={this.endDate}
                            handleFormSubmit={this.handleFormSubmit}
                            showArticles={this.showArticles}
                            />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col size="md-12">
                                <ResultsList> 
                                    {this.showArticles()}
                                </ResultsList>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;