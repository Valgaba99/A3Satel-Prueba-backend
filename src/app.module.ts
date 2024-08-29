import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { StateTasksModule } from './state_tasks/state_tasks.module';

@Module({
  imports: [
    //ConfigModule.forRoot({ isGlobal: true }), TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'my-weak-password',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TasksModule,
    StateTasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
