import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {};
  async create(createTodoDto: CreateTodoDto) {
    return await this.prismaService.todo.create({
      data: createTodoDto
    });
  }

  async findAll() {
    return await this.prismaService.todo.findMany({});
  }

  async findOne(id: number) {
    return await this.prismaService.todo.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
