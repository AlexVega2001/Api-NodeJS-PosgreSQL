import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoute from "./routes/users.route.js";

const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(cors());
app.use(express.json()); 

app.use("/api/v1", userRoute);

app.listen(PORT, () => {
  console.log("Server started on port: " + PORT);
});