var express = require("express");
const Testimonial = require("../model/Testimonial");

const {
  hieringAddrole,
  requestJob,
  connectUs,
  getAllRequest,
  getAllHiering,
  getAllConnectus,
  getAllTestimonial,
  getHieringById,
  removeHiering,
  removeTestimonial,
  getTestimonialById,
  getconnectById,
  getRequestJobById,
  removeConnect,
  removeRequestJob,
} = require("../controllers/auth");
var router = express.Router();

//Adding
router.post("/addhiering", hieringAddrole);
router.post("/requestjob", requestJob);
router.post("/addconnect", connectUs);

//fetching
router.get("/getallrequest", getAllRequest);
router.get("/getallhiering", getAllHiering);
router.get("/getallconnect", getAllConnectus);
router.get("/getalltestimonial", getAllTestimonial);
//router.get("/uploads/:imageId", getImage)

//Delete
router.delete("/hiering/:hieringId", removeHiering);
router.delete("/testimonial/:testimonialId", removeTestimonial);
router.delete("/connect/:connectId", removeConnect);
router.delete("/requestJob/:requestJobId", removeRequestJob);

//param

router.param("hieringId", getHieringById);
router.param("testimonialId", getTestimonialById);
router.param("connectId", getconnectById);
router.param("requestJobId", getRequestJobById);
//router.param("imageId", getImageById)

module.exports = router;
