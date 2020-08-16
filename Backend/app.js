// For environment Variables
require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose")
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors")

//Routes
const classRoutes = require("./routes/class")
const unitRoutes = require("./routes/unit")
const studentRoutes  = require('./routes/studentObservation')

// Database Connection
mongoose.connect(process.env.DATABASECLOUD, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(() => {
  console.log("Database Connected")
});

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/api", classRoutes);
app.use("/api", unitRoutes);
app.use("/api", studentRoutes);

//PORT
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Welcome CFG team-46')
})


app.listen(port, () => {
  console.log('Server is up and running...')
})
