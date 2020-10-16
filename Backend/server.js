const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Routes
const usersRouter = require("./routes/users.route");
app.use("/users", usersRouter);

const busesRouter = require("./routes/buses.route");
app.use("/buses", busesRouter);

const finesRouter = require("./routes/fines.route");
app.use("/fines", finesRouter);

const routesRouter = require("./routes/routes.route");
app.use("/routes", routesRouter);

const tripsRouter = require("./routes/trip.route");
app.use("/trips", tripsRouter);

const creditsRouter = require("./routes/credits.route");
app.use("/credits", creditsRouter);

//MongoDB Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
