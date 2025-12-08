import { Injectable } from '@nestjs/common';
import { TaskRequestDto } from './dto/task-request.dto';

export interface ITask {
  id: number;
  text: string;
}

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];

  getAll() {
    return this.tasks;
  }

  create(dto: TaskRequestDto) {
    const newTask: ITask = { id: Date.now(), text: dto.text };
    this.tasks.push(newTask);
    return newTask;
  }
}
