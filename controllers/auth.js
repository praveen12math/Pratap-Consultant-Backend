const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");
const Connect = require("../model/Connect");
const Hiering = require("../model/Hiering");
const Request = require("../model/Request");
const Testimonial = require("../model/Testimonial");

exports.hieringAddrole = (req, res) => {
  const hiering = new Hiering(req.body);
  hiering.save((err, hiering) => {
    if (err) {
      return res.status(400).json({
        err: "Not able to save hiering role open in database",
      });
    }
    res.json({
      role: hiering.role,
      id: hiering.id,
    });
  });
};

exports.requestJob = (req, res) => {
  const request = new Request(req.body);
  request.save((err, request) => {
    if (err) {
      return res.status(400).json({
        err: "Your job request cannot save in database",
      });
    }
    res.json({
      name: request.name,
      email: request.email,
      phone: request.phone,
      profile: request.profile,
      id: request.id,
    });
  });
};

exports.connectUs = (req, res) => {
  const connect = new Connect(req.body);
  connect.save((err, connect) => {
    if (err) {
      return res.status(400).json({
        err: "Your email is unabale to save in our database",
      });
    }
    res.json({
      email: connect.email,
      id: connect.id,
    });
  });
};

exports.getAllRequest = (req, res) => {
  Request.find().exec((err, request) => {
    if (err) {
      return res.status(400).json({
        err: "No request found",
      });
    }
    res.json(request);
  });
};

exports.getAllHiering = (req, res) => {
  Hiering.find().exec((err, hiering) => {
    if (err) {
      return res.status(400).json({
        err: "No hiering found",
      });
    }
    res.json(hiering);
  });
};

exports.getAllConnectus = (req, res) => {
  Connect.find().exec((err, connect) => {
    if (err) {
      return res.status(400).json({
        err: "No connectus found",
      });
    }
    res.json(connect);
  });
};

exports.getAllTestimonial = (req, res) => {
  Testimonial.find().exec((err, testimonial) => {
    if (err) {
      return res.status(400).json({
        error: "No testimonial found",
      });
    }
    res.json(testimonial);
  });
};

exports.getHieringById = (req, res, next, id) => {
  Hiering.findById(id).exec((err, hiering) => {
    if (err) {
      return res.status(400).json({
        error: "Hiering role not found",
      });
    }
    req.hiering = hiering;
    next();
  });
};

exports.removeHiering = (req, res) => {
  const hiering = req.hiering;
  hiering.remove((err, hiering) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete hiering role",
      });
    }
    res.json({
      message: "Delete successful",
      hiering,
    });
  });
};

exports.getTestimonialById = (req, res, next, id) => {
  Testimonial.findById(id).exec((err, testimonial) => {
    if (err) {
      return res.status(400).json({
        error: "Testimonial not found",
      });
    }
    req.testimonial = testimonial;
    next();
  });
};

exports.removeTestimonial = (req, res) => {
  const testimonial = req.testimonial;
  testimonial.remove((err, testimonial) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete testimonial",
      });
    }
    res.json({
      message: "Delete successful",
      testimonial,
    });
  });
};

exports.getconnectById = (req, res, next, id) => {
  Connect.findById(id).exec((err, connect) => {
    if (err) {
      return res.status(400).json({
        error: "Connects not found",
      });
    }
    req.connect = connect;
    next();
  });
};

exports.getRequestJobById = (req, res, next, id) => {
  Request.findById(id).exec((err, requestId) => {
    if (err) {
      return res.status(400).json({
        error: "Connects not found",
      });
    }
    req.requestId = requestId;
    next();
  });
};

exports.removeConnect = (req, res) => {
  const connect = req.connect;
  connect.remove((err, connect) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete connects",
      });
    }
    res.json({
      message: "Successful delete",
      connect,
    });
  });
};

exports.removeRequestJob = (req, res) => {
  const requestId = req.requestId;
  requestId.remove((err, request) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete request job",
      });
    }
    res.json({
      message: "Successful delete",
      request,
    });
  });
};
