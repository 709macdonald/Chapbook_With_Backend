const express = require("express");
const dotenv = require("dotenv");
const { l } = require("vite/dist/node/types.d-aGj9QkWt");
dotenv.config();
const cors = require("cors");
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
``;
