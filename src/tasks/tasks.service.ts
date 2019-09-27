import {Injectable, NotFoundException} from '@nestjs/common';
import {TaskRepository} from './task.repository';
import {InjectRepository} from '@nestjs/typeorm';
import {Task} from '../config/task.entity';
import {CreateTaskDto} from './dto/create-task.dto';
import {TaskStatus} from './task-status-enum';
import {GetTasksFilterDto} from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) {

    }

    getTasks(filterDto: GetTasksFilterDto) {
        return this.taskRepository.getTasks(filterDto);
    }

    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);
        if (!found) {
            throw new NotFoundException(`Task with id "${id}" not found`);
        }

        return found;
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto);
    }

    async deleteTask(id: number): Promise<void> {
        const result = await this.taskRepository.delete(id);
        if (!result.affected) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }

    }

    async updateStatus(id: number, status: TaskStatus): Promise<Task> {
        const task = await this.getTaskById(id);
        task.status = status;
        await task.save();
        return task;
    }
}
