import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    task: string;

    @IsBoolean()
    isDone?: boolean;
}
