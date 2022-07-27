import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BeforeInsert } from "typeorm"
import { Roles } from "../schemas/Roles"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id_user: number

    @ManyToOne(type => Roles, Role => Role.id_role)
    role:Roles

    @Column()
    name: string

    @Column()
    lastname: string

    @Column()
    username: string

    @Column()
    password: string
}