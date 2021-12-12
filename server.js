import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import employeeRoutes from "./routes/employee.routes.js";
//defining the app using express
const app = express();

//dotenv config
dotenv.config();

//App Configuration
//parse application /x-www-from-urlencoded
app.use(express.json({
    limit: '20mb',
    extended: true
})
);

//Setting up routes
app.use("/employee", employeeRoutes);

app.use(cors());

//Database & Server connection
connectDB().then(() =>
app.listen(PORT, () => {
    console.log(`Connection established and running on port: ${PORT} in mode development`);

})).catch((error) => console.log(error.message));


//Setting up port
const PORT = process.env.PORT || 5000;