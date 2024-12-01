const app = require("./app");
const port = 3000;

app.listen(port, () => {
  console.log(`Our app is running on PORT http://localhost:${port}`);
});
