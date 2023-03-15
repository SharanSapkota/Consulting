const express = require("express");
const { getUsers, createUser } = require("../controller/users.ts");
const { registerPayload } = require("../middleware/registerUser.ts");
const router = express.Router();

router.get('/getusers', getUsers)
router.post('/register', registerPayload, createUser)

module.exports = router;