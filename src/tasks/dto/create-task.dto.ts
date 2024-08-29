import { IsOptional, IsString, MinLength } from "class-validator";
import { StateTask } from "src/state_tasks/entities/state_task.entity";

export class CreateTaskDto {

  @IsString()
  @MinLength(2)
  nombre: string;

  @IsString()
  @MinLength(3)
  asignadoa: string;

  @IsString()
  @MinLength(3)
  estado: string;

  @IsString()
  @MinLength(4)
  @IsOptional()
  descripcion: string;

}

