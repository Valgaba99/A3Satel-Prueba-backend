import { Injectable } from '@nestjs/common';
import { StateTask } from './entities/state_task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StateTasksService {
  constructor(
    @InjectRepository(StateTask)
    private readonly statetaskRepository: Repository<StateTask>,
  ) {}

  async findAll() {
    return await this.statetaskRepository.find();
  }

  async findOne(id: number) {
    return await this.statetaskRepository.findOneBy({ id });
  }
}
