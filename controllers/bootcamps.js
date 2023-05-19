// @desc Get all bootcamps
// @route  GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: "true", message: "show all bootcamps"});
};

// @desc Get a  single bootcamp
// @route  GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: "true", message: `get single bootcamp ${req.params.id}` });
};

// @desc    Create a bootcamp
// @route  POST /api/v1/bootcamps/
// @access private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: "true", message: "create a bootcamp" });
};

// @desc    update a bootcamp
// @route  POST /api/v1/bootcamps/:id
// @access private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: "true", message: `update bootcamp ${req.params.id}` });
};
// @desc    delete a bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @access private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: "true", message: `delete bootcamp ${req.params.id}` });
};
