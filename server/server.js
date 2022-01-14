const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
require("./models/db");

app.use(express.json());
app.use(cors());

app.use("/api/persons", router);

app.listen(8000, () => console.log("server is running in port 8000"));
