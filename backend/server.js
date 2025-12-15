import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//API end points
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});

/*
Username:sohelshahid09_db_user
Password:NP6dJCioTt8Kvk8k

jtzSARsby5d7Jn9A

mongodb+srv://sohelshahid09_db_user:NP6dJCioTt8Kvk8k@cluster0.qibo3bg.mongodb.net/?appName=Cluster0

mongodb+srv://sohelshahid09_db_user:<db_password>@cluster0.qibo3bg.mongodb.net/?appName=Cluster0
*/
