import { Router, Request, Response } from "express";

const express = require("@awaitjs/express");
// const { dataList } = require("./app/controller");

const router : Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send({message:'Express + TypeScript Server'});
  });


module.exports = router;