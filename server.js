const express = require("express");
const { about } = require("./middleware/about");
const { hello } = require("./middleware/hello");

const app = express();

const PORT = 3010;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

app.use("/about", express.static("public"));
app.get("/home", hello);
