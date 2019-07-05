const router = require("express").Router();
const {
  fetchAllUsers,
  deleteUser,
  updateUser,
  fetchUser,
  addUser
} = require("./userQueries");

router.get("/", async (req, res) => {
  try {
    const result = await fetchAllUsers();
    res.send({ result });
  } catch (ex) {
    res.status(404).send("something went wrong");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await fetchUser(req.params.id);
    res.send({ result });
  } catch (ex) {
    res.status(404).send("the id you entered is not valid");
  }
});

router.put("/", async (req, res) => {
  try {
    const result = await updateUser(req.body.id, req.body.updateData);
    res.send({ result });
  } catch (ex) {
    res.status(404).send(ex.errors);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await deleteUser(req.params.id);
    res.send({ result });
  } catch (ex) {
    res.status(404).send("the id you entered is not valid");
  }
});

router.post("/", async (req, res) => {
  try {
    let result = await addUser(req.body.userData);
    res.send(result);
  } catch (ex) {
    res.status(404).send(ex.errors);
  }
});

module.exports = router;
