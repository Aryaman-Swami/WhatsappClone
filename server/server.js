const APP = require("express");
const connectDB = require("./dbConnection");
const routes = require("./routes");

const app = new APP();
require("./config")(app);

const PORT = 3001;

const startServer = () => {
  Promise.all([connectDB()])
    .then(() => {
      app.listen(PORT);
      console.log(`Server started on Port ${PORT}`);
      routes(app);
    })
    .catch((error) => console.error(`Unable to start the server`, error));
}

startServer();
