const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/get-otp", (req, res) => {
  // const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otp = 32352;
  res.json({ otp });
});

app.listen(5000, () => console.log("Server running on port 5000"));
