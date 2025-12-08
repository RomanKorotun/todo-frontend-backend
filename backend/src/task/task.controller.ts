import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskRequestDto } from './dto/task-request.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAll() {
    return this.taskService.getAll();
  }
  @Post()
  create(@Body() dto: TaskRequestDto) {
    return this.taskService.create(dto);
  }
}
