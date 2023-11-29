import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class TodoService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    findOne(id: number): string;
    update(id: number, updateTodoDto: UpdateTodoDto): string;
    remove(id: number): string;
}
