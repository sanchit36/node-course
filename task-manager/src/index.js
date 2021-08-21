const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const PORT = process.env.PORT;

// Express config
app.use(express.json());

// Routes
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
