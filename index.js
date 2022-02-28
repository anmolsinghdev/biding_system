const express = require("express");
const app = express();
const port = 3000;

//importing Connections
require("./Connection/dbConnect");

//Custom Routes
const userRoute = require("./Routes/user");
const itemRoute = require("./Routes/item");
const { errorHandler } = require("./middlewares/ErrorHandler");

// configure expressjs with json
app.use(express.json());

//!using Custom Routes
app.use("/user", userRoute);
app.use("/item", itemRoute);

//importing Error Handler
app.use(errorHandler);

//running PORT
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
