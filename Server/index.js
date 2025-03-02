const express = require('express');
const app = express();

const userRoutes = require("./routes/User");
const courseRoutes = require("./routes/Course");
const paymentRoutes = require("./routes/Payments");
const profileRoutes = require("./routes/Profile");
const contactUsRoute = require("./routes/Contact")
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect} = require("./config/cloudinary");
const fileUpload = require("express-fileupload");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

//database connect
database.connect();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    //The cors middleware allows you to specify which domains are permitted to access resources on your server.
    cors({
    credentials: true, 
    origin: "*"
}));
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp",
    }));

//cloudinary connect
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);


//default route
app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: " Your Server is up and running successfully.......",
    })
})


app.listen(PORT , () => {
    console.log(`App is running on http://localhost:${PORT}`);
})