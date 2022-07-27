import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BeforeInsert } from "typeorm"

@Entity()
export class Branchs {
    @PrimaryGeneratedColumn()
    id_branch: number

    @Column()
    name: string
}