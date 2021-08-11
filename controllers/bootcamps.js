const Bootcamp = require('../models/Bootcamp');

// @desc Get all bootcamps
// @desc Get /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg:'Show all bootcamps', hello:req.hello });
}


// @desc Get single bootcamp
// @desc Get /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: ` Show bootcamps ${req.params.id}` });
}

// @desc Create new bootcamp
// @desc POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body);

res.status(201).json({
    success: true,
    data: bootcamp
});

};

// @desc Update bootcamp
// @desc Put /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update all bootcamps ${req.params.id}` });
}

// @desc Delete bootcamp
// @desc DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete all bootcamps ${req.params.id}` });
}