const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../models/index");

router.get("/register", function (req, res) {
    return res.render("register");
});

router.post("/register", async function (req, res) {
    try {
        const foundUser = await User.exists({ email: req.body.email });
        if (foundUser) {
            console.log("This is not the Blue Devil way, stop creating multiple accounts!")
            return res.redirect("/login");
        }
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(req.body.password, salt);
    
        req.body.password = hash;
  
        const newUser = await User.create(req.body);
        console.log(newUser);
    
        return res.redirect("/login");
        } catch (err) {
            console.log(err);
            return res.send(err);
        }
});

router.get("/login", function (req, res) {
    res.render("login");
});

router.post("/login", async function (req, res) {
    try {
        const foundUser = await User.findOne({ email: req.body.email });
        console.log(`foundUser object is ${foundUser}`);
        
        if (!foundUser) return res.send("Either the username or the password is invalid");

        const match = await bcrypt.compare(req.body.password, foundUser.password);

        if (!match) return res.send("Either the username or the password is invalid");

        console.log(`The before version of req.session.currentUser is: ${req.session.currentUser}`)

        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
        };

        console.log(req.session.currentUser)

        return res.redirect("/artist");
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

router.get("/logout", async function (req, res) {
    try {
        
        await req.session.destroy();
        return res.redirect("/login");

    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});

module.exports = router;