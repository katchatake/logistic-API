import { Router, Request, Response } from "express";
const express = require("@awaitjs/express");
const { showAll } = require("./controller");

const router : Router = express.Router();

router.get('/get-all', showAll);


module.exports = router;