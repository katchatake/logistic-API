import { Router, Request, Response } from "express";
const express = require("@awaitjs/express");
const { showAll, showOne, create, modify, deleteDataVehicle } = require("./controller");

const router : Router = express.Router();

router.get('/get-all', showAll);
router.get('/get-one/:id', showOne);
router.post('/create', create);
router.put('/modify', modify);
router.delete('/delete',deleteDataVehicle)


module.exports = router;