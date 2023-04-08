const { Router } = require("express");
const ShoeController = require("../controllers/shoe.controller");

const router = Router();

router.get("/shoe", ShoeController.getShoe);
router.get("/shoe/:id", ShoeController.getShoeById);
router.post("/shoe", ShoeController.addShoe);
router.put("/shoe/:id", ShoeController.updateShoe);
router.delete("/shoe/:id", ShoeController.deleteShoe);

module.exports = router;
