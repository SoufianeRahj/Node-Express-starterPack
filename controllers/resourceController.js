const AppError = require("../utils/AppError");

exports.getAllResources = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
};

exports.getOneResource = (req, res, next) => {
  // if (some condition that leads to an error) {
  //     return next (new AppError(message, statusCode))
  // }
  res.status(200).json({
    status: "success",
    data: "data",
  });
};

exports.createResource = (req, res, next) => {
  res.status(201).json({
    status: "success",
    data: "data",
  });
};

exports.updateResource = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "new updated data",
  });
};

exports.deleteResource = (req, res, next) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
