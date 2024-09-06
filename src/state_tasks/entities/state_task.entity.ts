
import { Task } from 'src/tasks/entities/task.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class StateTask {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Task, (task) => task.estado)
  tasks: Task[];
}
