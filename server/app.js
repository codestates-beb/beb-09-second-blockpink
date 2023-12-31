const express = require("express");
const app = express();
const db = require("./models");
const port = 8080;

const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/auth");
const ethFaucetRouter = require("./routes/ethFaucet");
const joinRouter = require("./routes/join");
const nftRouter = require("./routes/nft");
const postsRouter = require("./routes/posts");
const sendTokenRouter = require("./routes/sendToken");
const usersRouter = require("./routes/users");
const serverRouter = require("./routes/init");
const fileUploadRouter = require("./routes/fileUpload");
//

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/eth-faucet", ethFaucetRouter);
app.use("/join", joinRouter);
app.use("/nft", nftRouter);
app.use("/post", postsRouter);
app.use("/send-token", sendTokenRouter);
app.use("/user", usersRouter);
app.use("/", serverRouter);
app.use("/upload", fileUploadRouter);

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
