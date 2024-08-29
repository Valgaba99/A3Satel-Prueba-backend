import { Controller, Get, Param } from '@nestjs/common';
import { StateTasksService } from './state_tasks.service';

@Controller('state-tasks')
export class StateTasksController {
  constructor(private readonly stateTasksService: StateTasksService) {}

  @Get()
  findAll() {
    return this.stateTasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.stateTasksService.findOne(+id);
  }

}
