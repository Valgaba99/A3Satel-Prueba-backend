import {
    Column,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity()
  export class Task {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    asignadoa: string;
  
    @Column()
    estado: string;

    @Column()
    descripcion: string;
  
    @DeleteDateColumn()
    deletedAt: Date;
  }