import express from "express";
import { config } from "dotenv";
config();

const app = express();
const port = process.env.PORT;

app.listen(port, (err) => {
  if (err) {
    console.log("Error in running the server", err.message);
    process.exit(1);
  }
  console.log("Server is running on PORT:", port);
});
