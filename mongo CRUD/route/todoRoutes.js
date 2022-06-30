const express = require("express");

const router = express.Router();

const controller = require("../controller/todoController");

router.route("/").get(controller.getAllLists).post(controller.createAList);
router
  .route("/:id")
  .get(controller.getAList)
  .patch(controller.updateTasks)
  .delete(controller.deleteTask);

module.exports = router;
