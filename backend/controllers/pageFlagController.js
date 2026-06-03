const PageFlag = require("../models/PageFlag");

const createFlag = async (req, res) => {
  try {
    const flag = await PageFlag.create(req.body);

    res.status(201).json(flag);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getFlags = async (req, res) => {
  try {
    const flags = await PageFlag.find();

    res.status(200).json(flags);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getFlagById = async (req, res) => {
  try {
    const flag = await PageFlag.findById(req.params.id);

    if (!flag) {
      return res.status(404).json({
        message: "Flag not found",
      });
    }

    res.status(200).json(flag);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateFlag = async (req, res) => {
  try {
    const flag = await PageFlag.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(flag);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteFlag = async (req, res) => {
  try {
    await PageFlag.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Flag deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getStats = async (req, res) => {
  try {
    const totalFlags = await PageFlag.countDocuments();

    const resolved = await PageFlag.countDocuments({
      status: "Resolved",
    });

    const flagged = await PageFlag.countDocuments({
      status: "Flagged",
    });

    res.status(200).json({
      totalFlags,
      resolved,
      flagged,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createFlag,
  getFlags,
  getFlagById,
  updateFlag,
  deleteFlag,
  getStats,
};