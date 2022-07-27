import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    id_role: number

    @Column()
    name: string
}