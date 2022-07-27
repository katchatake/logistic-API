import { Request, Response } from "express";
import { getAll } from './models';

const showAll = async(rea : Request, res : Response)=>{
    const allData = await getAll();
    let send = {
        code:200,
        message:"exito",
        data: allData
      }
    res.send(send);
}


module.exports = {
    showAll
}