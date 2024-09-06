import { IsOptional, IsString, MinLength} from "class-validator";

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

