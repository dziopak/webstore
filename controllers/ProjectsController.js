const ProjectModel = require('../models/ProjectModel');
const APIFeatures = require('../utils/APIFeatures');

exports.getAllProjects = async (req, res) => {
  try {
    const features = new APIFeatures(ProjectModel.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const projects = await features.query;

    res.status(200).json({
      status: 'success',
      results: projects.length,
      data: {
        projects
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await ProjectModel.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        project
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.addNewProject = async (req, res) => {
  try {
    const newProject = await ProjectModel.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        project: newProject
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await ProjectModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(400).json({
      status: 'success',
      data: {
        project
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await ProjectModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        project
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
