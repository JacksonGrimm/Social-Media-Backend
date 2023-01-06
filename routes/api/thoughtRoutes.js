const router = require("express").Router();
const {
  getAllThoughts,
  getOneThought,
  createNewThought,
  updateThought,
  deleteThought,
  deleteReaction,
  addReaction,
} = require("../../controllers/thoughtsControllers");

// /api/thoughts/
router.route("/").get(getAllThoughts).post(createNewThought);
// /api/thoughts/:id
router
  .route("/:id")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought)
  .put(addReaction);

router.route("/:id/:reactionId").delete(deleteReaction);

module.exports = router;
