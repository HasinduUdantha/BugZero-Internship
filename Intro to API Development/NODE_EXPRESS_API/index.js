import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello From Home Page");
});

app.listen(PORT, () =>
  console.log(`server running on port : https://localhost:${PORT}`)
);
