const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DBURL.replace("<PASSWORD>", process.env.DB_PASSWORD);
console.log("Final DB URL --> ", DB);

mongoose
  .connect(DB)
  .then((con) => console.log("Connected to Data Base Successfully", { con }))
  .catch((err) => console.log("Fail Database connection ", err));

// console.log(process.env);

const app = require("./app");
const { dbUrl } = require("./dbConfig");
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Our app is running on PORT http://localhost:${port}`);
});
