const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
//importing Connections
require("./Connection/dbConnect");

// configure expressjs with json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Custom Routes
const userRoute = require("./Routes/user");
const itemRoute = require("./Routes/item");
const { errorHandler } = require("./middlewares/ErrorHandler");

//!using Custom Routes
app.use("/user", userRoute);
app.use("/item", itemRoute);

//importing Error Handler
app.use(errorHandler);

//running PORT
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
