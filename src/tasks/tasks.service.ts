import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { error } from 'console';
import { StateTask } from 'src/state_tasks/entities/state_task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,

    @InjectRepository(StateTask)
    private readonly statetaskRepository: Repository<StateTask>,
  ) {}

  async create(createtaskDto: CreateTaskDto) {
    const estado = await this.statetaskRepository.findOneBy({
      nombre: createtaskDto.estado,
    });

    if (!estado) {
      throw new BadRequestException('Estado no encontrado');
    }

    const task = this.taskRepository.create({
      nombre: createtaskDto.nombre,
      asignadoa: createtaskDto.asignadoa,
      descripcion: createtaskDto.descripcion,
      estado,
    });
    return await this.taskRepository.save(task);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: number) {
    return await this.taskRepository.findOneBy({ id });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const estado = await this.statetaskRepository.findOneBy({
      nombre: updateTaskDto.estado,
    });
  
    if (!estado) {
      throw new BadRequestException('Estado no encontrado');
    }
  
    const updateData = {
      nombre: updateTaskDto.nombre,
      asignadoa: updateTaskDto.asignadoa,
      descripcion: updateTaskDto.descripcion,
      estado,
    };
  
    await this.taskRepository.update(id, updateData);
    return this.taskRepository.findOneBy({ id });
  }

  async remove(id: number) {
    return await this.taskRepository.softDelete({ id });
  }
}
