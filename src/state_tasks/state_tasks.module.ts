import { Module } from '@nestjs/common';
import { StateTasksService } from './state_tasks.service';
import { StateTasksController } from './state_tasks.controller';
import { StateTask } from './entities/state_task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StateTask])],
  controllers: [StateTasksController],
  providers: [StateTasksService],
  exports: [TypeOrmModule],
})
export class StateTasksModule {}
