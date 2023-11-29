import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: CreateTodoDto): Promise<{
        id: number;
        task: string;
        isDone: boolean;
    }>;
    findAll(): Promise<{
        id: number;
        task: string;
        isDone: boolean;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateTodoDto: UpdateTodoDto): string;
    remove(id: string): string;
}
