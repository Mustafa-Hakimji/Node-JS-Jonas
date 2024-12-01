const express = require("express");
const toursRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());

// This is how we can create a router

// In the below present code I am separating the callback function from the route. But in this we need to write the route name for every specific route.
// app.get("/api/v1/tours", getAllTours);
// app.get("/api/v1/tours/:id", getTour);
// app.post("/api/v1/tours", addTour);

// In this code I am just writing the route name for once and then using all the work related to the same route by chaining then together.
// app.route("/api/v1/tours").get(getAllTours).post(addTour);
// app.route("/api/v1/tours/:id").get(getTour);

// In this below code I am taking this one step more forward and only writing the whole common or base url at once and the after only writing and separating them by the changes only.
app.use("/api/v1/tours", toursRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
