exports.getAllSubresources = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
};

exports.getOneSubresource = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "data",
  });
};

exports.createSubresource = (req, res, next) => {
  res.status(201).json({
    status: "success",
    data: "data",
  });
};

exports.updateSubresource = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "new updated data",
  });
};

exports.deleteSubresource = (req, res, next) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
