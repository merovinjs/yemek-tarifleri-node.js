const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/database.js");
dotenv.config();
const app = express();
const Auth = require("./routes/auth.js");
const Post = require("./routes/post.js");

app.use(cors());
app.use(express.json({ limit: "30mb", extend: true }));
//app.use(express.urlencoded({ limit: "30mb", extend: true }));

//AnaSayfaya geldiğinde auth gelsin istersen / la başla
app.use("/", Auth);
app.use("/", Post);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listen port 5000`);
});
// app.get("/", (req, res) => {
//   res.json({ message: "deneme denemeeeess" });
// });
db();
