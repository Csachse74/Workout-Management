const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api");
const viewRoutes = require("./routes/views");
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(
        "mongodb+srv://Csachse:20Simpson21@Cluster0.td58j.mongodb.net/workout?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(apiRoutes);
app.use(viewRoutes);
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.listen(PORT, () => console.log("listening on port: ", PORT));