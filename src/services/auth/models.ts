import {Md5} from "md5-typescript";
import { Users } from "../../schemas/Users"
import { Roles } from "../../schemas/Roles";
import { AppDataSource } from "../../core/Data-Connection"
import { validDB, dataReq } from "./libraries"



const validUser = async(data : dataReq) =>{
    const isInitialized: boolean = AppDataSource.isInitialized;
    (isInitialized) ? AppDataSource : await AppDataSource.initialize();
    const usersData = await AppDataSource.getRepository(Users).createQueryBuilder("u")
    .leftJoinAndSelect("u.role","roles")
    .where("u.username = :name", { name: data.username })
    .andWhere("u.password = :pass",{pass: Md5.init(data.password)})
    .getOne();
    return usersData;
}

export {
    validUser
}