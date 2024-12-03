const express = require("express");
const toursRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");
const morgan = require("morgan");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/tours", toursRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
