const express = require("express");
const { getUsers, createUser } = require("../controller/users");
const { registerPayload } = require("../middleware/registerUser");
const router = express.Router();

router.get('/getusers', getUsers)
router.post('/register', registerPayload, createUser)


module.exports = router;