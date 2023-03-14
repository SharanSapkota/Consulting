const registerPayload = (req, res, next) => {
    const { name, email, dob, applyFor, ielts_score, pte_score } = req.body;
    next()
}

module.exports = {
    registerPayload
}