
const router = require('express').Router();

router.get("/usertest", (req, res) => {
    res.send("User tested")
})

router.post("/userpost", (req, res) => {
    const username = req.body.username;
    res.send(username);
})

module.exports = router;