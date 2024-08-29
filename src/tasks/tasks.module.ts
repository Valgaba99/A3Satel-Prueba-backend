import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateTasksService } from 'src/state_tasks/state_tasks.service';
import { StateTasksModule } from 'src/state_tasks/state_tasks.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), StateTasksModule],
  controllers: [TasksController],
  providers: [TasksService, StateTasksService],
})
export class TasksModule {}
