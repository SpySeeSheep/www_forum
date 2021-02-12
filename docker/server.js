const express = require("express");
const app = express();

app.use(express.static(__dirname + '/build'));


app.set("port", 3000);
app.listen(app.get("port"), () => {
  console.log(__dirname);
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});