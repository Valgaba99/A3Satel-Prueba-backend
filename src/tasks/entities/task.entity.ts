import { StateTask } from "src/state_tasks/entities/state_task.entity";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
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

    @ManyToOne(() => StateTask, (estado) => estado.id, {
      eager: true
    })
    estado: StateTask

    @Column()
    descripcion: string;
  
    @CreateDateColumn()
    created: Date

    @DeleteDateColumn()
    deletedAt: Date;
  }