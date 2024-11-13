const express = require("express");
const app = express();
const db = require("./utils/database-connection");
const bodyParser = require("body-parser"); //middleware

const PORT = 3000;
app.use(bodyParser.json()); //req.body

// middleware function
const logrequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request Mode to :${req.originalUrl}`
  );
  next();
};

app.use(logrequest);

app.get("/", (req, res) => {
  res.send({ status: "Server is runnnig!!" });
});

//  Person Router
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

// Menu Router
const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", logrequest, menuRoutes);

// User Router
const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
