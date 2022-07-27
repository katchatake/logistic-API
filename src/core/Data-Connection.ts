import "reflect-metadata"
import { DataSource } from "typeorm"
import { Roles } from "../schemas/Roles"
import { Users } from "../schemas/Users"
import { Vehicles } from "../schemas/Vehicles"
import { Branchs } from "../schemas/Branchs"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "logistic",
    entities: [Roles,Users,Vehicles,Branchs],
    synchronize: true,
    logging: false,
});

