const express = require("express")
const User = require("../models/admin.js")
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!user) {
            res.status(403);
            return next(new Error("Username or password are incorrect"));
        }
        user.checkPassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send(err);
            if (!match) res.status(401).send({ message: "Username or password are incorrect" });
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.send({ user: user.withoutPassword(), token })
        });
    });
})

module.exports = authRouter;