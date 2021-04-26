require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const Testimonial = require("./model/Testimonial");
const formidable = require("formidable");





const authRoute = require("./routes/auth");

const PORT = process.env.PORT || 8000;
const app = express();

//Database connection

mongoose
  .connect(process.env.url2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My routes
app.use("/api", authRoute);

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

// Single File Route Handler
app.post("/api/addtestimonial", upload.single("image"), (req, res) => {
  
  const path2 = req.file.path
  const name2 = req.body.description

   const testimonial = new Testimonial()

   testimonial.photo = path2
   testimonial.description = name2
   testimonial.save((err, testimonial) => {
     res.json(testimonial)
   })

});

//Server Setup

app.use('/api/uploads', express.static('uploads'))

app.listen(PORT, () => {
  console.log(`App is running ${PORT}`);
});
