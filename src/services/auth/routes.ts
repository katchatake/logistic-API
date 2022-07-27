import { Router, Request, Response } from "express";

const express = require("@awaitjs/express");
const { Login } = require("./controller");

const router: Router = express.Router();

router.post("/", Login);

module.exports = router;
