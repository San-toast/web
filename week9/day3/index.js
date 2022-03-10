const express = require("express");
const { parse } = require("pg-protocol");
const app = express();
const user = require("./routes/user");
const photo = require("./routes/photo");
app.use(express.json());
const PORT = 3000;

app.use("/user", user);
app.use("/photo", photo);

app.listen(PORT, console.log(`Listening on ${PORT}`));
