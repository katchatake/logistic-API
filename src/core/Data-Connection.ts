import "reflect-metadata"
import { DataSource } from "typeorm"
import { Roles } from "../schemas/Roles"
import { Users } from "../schemas/Users"
import { Vehicles } from "../schemas/Vehicles"
import { Branchs } from "../schemas/Branchs"
import dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.hostDB,
    port: 3306,
    username: process.env.userDB,
    password: process.env.passDB,
    database: process.env.nameDB,
    entities: [Roles,Users,Vehicles,Branchs],
    synchronize: true,
    logging: false,
});

