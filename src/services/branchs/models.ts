import { AppDataSource } from "../../core/Data-Connection"
import { Vehicles } from "../../schemas/Vehicles"
import { Branchs } from "../../schemas/Branchs"

const getAll = async()=>{
    const isInitialized: boolean = AppDataSource.isInitialized;
    (isInitialized) ? AppDataSource : await AppDataSource.initialize();
    const branchData = await AppDataSource.getRepository(Branchs).createQueryBuilder("b")
    .getMany();
    return branchData;
}

export {
    getAll
}