import { AppDataSource } from "../../core/Data-Connection"
import { Vehicles } from "../../schemas/Vehicles"
import { Branchs } from "../../schemas/Branchs"
import { dataPost } from "./libraries"

const getAll = async()=>{
    const isInitialized: boolean = AppDataSource.isInitialized;
    (isInitialized) ? AppDataSource : await AppDataSource.initialize();
    const vehiclesData = await AppDataSource.getRepository(Vehicles).createQueryBuilder("v")
    .leftJoinAndSelect("v.branch","branchs")
    .getMany();
    return vehiclesData;
}

const getOne = async(id:number)=>{
    const isInitialized: boolean = AppDataSource.isInitialized;
    (isInitialized) ? AppDataSource : await AppDataSource.initialize();
    const vehiclesData = await AppDataSource.getRepository(Vehicles).createQueryBuilder("v")
    .leftJoinAndSelect("v.branch","branchs")
    .where("v.id_vehicle = :id", { id: id })
    .getMany();
    return vehiclesData;
}

const save = async(dataPost: dataPost)=>{
    const isInitialized: boolean = AppDataSource.isInitialized;
    (isInitialized) ? AppDataSource : await AppDataSource.initialize();

    const branchData = await AppDataSource.getRepository(Branchs).createQueryBuilder("b")
    .where("b.id_branch = :id", { id: dataPost.branchIdBranch })
    .getOne();

    const saveData = await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Vehicles)
    .values([
        {
            name:dataPost.name,
            model:dataPost.model,
            color:dataPost.color,
            date_into:dataPost.date_into,
            status:dataPost.status,
            assigned:dataPost.assigned,
            branch:{id_branch:branchData?.id_branch,name:branchData?.name}
        }
    ])
    .execute()

    return (saveData) ? true : false;
}

const update = async(dataPost: dataPost, id:number)=>{
    const isInitialized: boolean = AppDataSource.isInitialized;
    (isInitialized) ? AppDataSource : await AppDataSource.initialize();

    const branchData = await AppDataSource.getRepository(Branchs).createQueryBuilder("b")
    .where("b.id_branch = :id", { id: dataPost.branchIdBranch })
    .getOne();

    const updateData = await AppDataSource
    .createQueryBuilder()
    .update(Vehicles)
    .set(
        {
            name:dataPost.name,
            model:dataPost.model,
            color:dataPost.color,
            date_into:dataPost.date_into,
            status:dataPost.status,
            assigned:dataPost.assigned,
            branch:{id_branch:branchData?.id_branch,name:branchData?.name}
        }
    )
    .where("id_vehicle = :id", { id: id })
    .execute()

    return (updateData) ? true : false;
}

const deleteVehicle = async(id:number)=>{
    const isInitialized: boolean = AppDataSource.isInitialized;
    (isInitialized) ? AppDataSource : await AppDataSource.initialize();
    const deleteData = await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Vehicles)
    .where("id_vehicle = :id", { id: id })
    .execute()

    return (deleteData) ? true : false;
}

export {
    getAll,
    getOne,
    save,
    update,
    deleteVehicle
}