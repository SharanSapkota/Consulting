const getUsers = (req, res) => {
    console.log('This is')
    res.json({msg: "This is test"})
}

const createUser = (req, res) => {
    console.log(req.body)
}

module.exports = {
    getUsers,
    createUser
}