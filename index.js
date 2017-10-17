const express = require("express");
const app = express();

/**
 * This is the "Index" route. It's the first thing the user sees when
 * they go to the website
 */
app.get("/", function(req, res) {
  res.send("Hello World!");
});

/**
 * This boots up your app so you can connect to it by typing 
 * "localhost:3000" in your browser.
 */
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
