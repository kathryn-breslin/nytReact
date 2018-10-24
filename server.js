const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/articles.js");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.use(routes);

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytReact");

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`)
})