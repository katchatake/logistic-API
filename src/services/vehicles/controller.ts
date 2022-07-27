import { Request, Response } from "express";
import { getAll, getOne, save, update, deleteVehicle } from './models';

const showAll = async(rea : Request, res : Response)=>{
    const allData = await getAll();
    let send = {
        code:200,
        message:"exito",
        data: allData
      }
    res.send(send);
}

const showOne = async(req : Request, res : Response)=>{
    const {id} = req.params;
    const allData = await getOne(parseInt(id));
    let send = {
        code:200,
        message:"exito",
        data: allData
      }
    res.send(send);
}

const create = async(req : Request, res : Response)=>{
    let dataPost = req.body;
    // console.log(dataPost)
    let saveVehicle = await save(dataPost);
    res.send({dtaa:saveVehicle})
}

const modify = async(req : Request, res : Response)=>{
    let dataPost = req.body;
    // console.log(dataPost)
    let saveVehicle = await update(dataPost,dataPost.id_vehicle);
    res.send({dtaa_update:saveVehicle})
}

const deleteDataVehicle = async(req : Request, res : Response)=>{
    let dataPost = req.body;
    // console.log(dataPost)
    let saveVehicle = await deleteVehicle(dataPost.id_vehicle);
    res.send({dtaa_delete:saveVehicle})
}

module.exports = {
    showAll,
    showOne,
    create,
    modify,
    deleteDataVehicle
}