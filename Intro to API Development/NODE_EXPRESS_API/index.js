import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("[TEST]!");
  res.send('Hello')
});

app.listen(PORT, () =>
  console.log(`server running on port : https://localhost:${PORT}`)
);
