import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BeforeInsert } from "typeorm"
import { Branchs } from "../schemas/Branchs"

@Entity()
export class Vehicles {
    @PrimaryGeneratedColumn()
    id_vehicle: number

    @ManyToOne(type => Branchs, Branch => Branch.id_branch)
    branch:Branchs

    @Column()
    name: string
    
    @Column()
    model: string

    @Column()
    color: string

    @Column()
    date_into: string

    @Column()
    status: number

    @Column()
    assigned: number
}