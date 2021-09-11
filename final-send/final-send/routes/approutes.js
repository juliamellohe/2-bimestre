const express = require("express");
const router = express.Router();
var myController = require("../controllers/mycontroller")

router.get("/", (req, res) => {
    res.render("form", {layout:false}) //irá para o handlebars
})

router.post("/", myController.save)
router.get("/show", myController.show)
router.get("/delete/:id", myController.delete)
module.exports = router