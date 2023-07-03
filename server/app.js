const express = require("express");
const app = express();
const db = require("./models");
const port = 8080;

const cors = require("cors");

const authRouter = require("./routes/auth");
const ethFaucetRouter = require("./routes/ethFaucet");
const joinRouter = require("./routes/join");
const nftRouter = require("./routes/nft");
const postsRouter = require("./routes/posts");
const transferRouter = require("./routes/posts");
const usersRouter = require("./routes/posts");



app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/ethFaucet", ethFaucetRouter);
app.use("/comment", joinRouter);
app.use("/server", nftRouter);
app.use("/page", postsRouter);
app.use("/nft", transferRouter);
app.use("/token", usersRouter);


db.sequelize
  .sync({})
  .then(() => {
    console.log("dababase connected");
  })
  .catch(console.error);

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});

// 연결 확인용
app.get("/", (req, res) => {
  res.status(201).send("Hello World");
});