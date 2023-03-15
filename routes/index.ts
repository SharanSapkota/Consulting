const { getUserById }                 = require("../controller/users");
const { registerPayload, checkEmail } = require("../middleware/registerUser.ts");
const { getUsers, createUser }        = require("../controller/users.ts");

const express = require("express");
const router = express.Router();

router.get('/getusers', getUsers)
router.post('/register', checkEmail, registerPayload, createUser)
router.get('/getUsers/:id', getUserById)

module.exports = router;