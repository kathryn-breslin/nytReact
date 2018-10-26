import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import { Container, Row, Col } from "./Grid";
import { ResultItem, ResultsList } from "./Results";

// const mongoose = require("mongoose");
// const db = require("../../../models")

class Home extends Component {
    state = {
        articles: [],
        search: "",
        // recAmount: "",
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
    //if else statement here
        return this.state.articles.slice(0, 5).map(article => (
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
        console.log(event.target.value)
    }

    endDate = event => {
        this.setState({ endDate: event.target.value })
        console.log(event.target.value)
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.search)
        API.searchArticles(this.state.search)
        .then((res) => {
            this.setState({ articles: res.data.response.docs})
            console.log("this.state.articles", this.state.articles)
            // mongoose.connect(
            //     process.env.MONGODB_URI || 
            //     "mongodb://localhost/nytReact"
            // )
            // db.Articles
            // .remove({})
            // .then(() => db.Articles.collection.insertMany({ResultItem}))
            // .then(data => {
            //     console.log(data.result.n + "database updated");
            //     process.exit(0);
            // })
            // .catch(err => {
            //     console.log(err);
            //     process.exit(1);
            // });
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