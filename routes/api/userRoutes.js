const router = require("express").Router();
const {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser,
  addUserFriend,
  deleteUserFriend,
} = require("../../controllers/userController");

// /api/users/
router.route("/").get(getAllUsers).post(createNewUser);
// /api/users/:id
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);
// /api/users/:id/:friendId
router.route("/:id/:friendId").post(addUserFriend).delete(deleteUser);

module.exports = router;
