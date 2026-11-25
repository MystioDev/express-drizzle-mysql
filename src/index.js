require("dotenv").config();

const express = require("express");
// const exampleRouter = require("./routes/example");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
// app.use("/api/example", exampleRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
