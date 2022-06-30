const express = require("express");
const { findByIdAndUpdate, findByIdAndDelete } = require("../models/todoModel");
const Todo = require("../models/todoModel");

exports.getAllLists = async (req, res, next) => {
  try {
    const tasks = await Todo.find();

    res.status(200).json({
      status: "success",
      data: {
        tasks,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

exports.createAList = async (req, res, next) => {
  try {
    const body = req.body;
    const task = await Todo.create(body);
    console.log(task);

    res.status(200).json({
      status: "Task successfully created",
      data: {
        task,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: "Task not created",
      error: err._message,
    });
  }
};

exports.updateTasks = async (req, res, next) => {
  try {
    const task = await Todo.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      status: "update sucessful",
      data: {
        task,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

exports.getAList = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = await Todo.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  const id = req.params.id;
  await Todo.findByIdAndDelete(id);

  res.status(204).json({
    status: "task deleted successfully",
  });
};
