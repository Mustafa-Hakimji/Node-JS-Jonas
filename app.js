const fs = require("fs");
const express = require("express");

const port = 3000;
const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ message: "Your app is running succesfuly..." });
// });

// app.post("/", (req, res) => {
//   res.status(200).json({ message: "You can post on this URL..." });
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    results: "",
    data: {
      tours: tours,
    },
  });
});

app.get("/api/v1/tours/:id", (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    message: "success",
    data: {
      tour,
    },
  });
});

app.post("/api/v1/tours", (req, res) => {
  const newId = tours[tours.length - 1].id + 1;

  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        message: "success",
        data: { tour: newTour },
      });
    }
  );
});

// Creating a port where our server will listen
app.listen(port, () => {
  console.log(`Our app is running on PORT http://localhost:${port}`);
});
