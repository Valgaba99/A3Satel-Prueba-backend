import { IsOptional, IsString, MinLength } from "class-validator";
import { StateTask } from "src/state_tasks/entities/state_task.entity";


export class UpdateTaskDto {

  @IsString()
  @IsOptional()
  @MinLength(2)
  nombre: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  asignadoa: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  estado: StateTask;

  @IsString()
  @IsOptional()
  descripcion: string;

}


