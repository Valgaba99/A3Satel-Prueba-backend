import { IsOptional, IsString, MinLength } from "class-validator";


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
  estado: string;

  @IsString()
  @IsOptional()
  descripcion: string;

}


