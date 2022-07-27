import { Request, Response } from "express";
import { validUser } from "./models";
import { messageResponse } from "./libraries"



const Login = async (req: Request, res: Response)   => {
    let data = req.body;
    let valid = await validUser(data);
    // res.send({ message: "Express + TypeScript Server", dataSource: data, models:valid });
    let dataSend = {
      username:valid?.username,
      rol:valid?.role.name
    }
    let send = {
      code:200,
      message:"exito",
      data: dataSend
    }
    res.send(send);
    // return [200,"exito",dataSend];
  }
module.exports  = {
    Login
};