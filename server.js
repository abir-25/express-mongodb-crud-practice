const app = require("./app");
const { connect } = require("./mongo");
const PORT = 3000;

app.listen(PORT, async () => {
  console.log("Listening to port " + PORT);
  await connect();
  console.log("Connected to MongoDB");
});
