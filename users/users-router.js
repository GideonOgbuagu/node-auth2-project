const router = require("express").Router();

const Users = require("./users-model.js");



// ======== READ ==========

router.get("/", (req, res) => {
//   console.log("token", req.decodedToken);

  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

// ===== DELETE ============

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    Users.removeById(id)
         .then(user => {
             console.log(user)
            //  res.status(201).json(user)
         })
})



module.exports = router;