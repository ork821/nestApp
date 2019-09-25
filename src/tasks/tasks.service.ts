import {Injectable, NotFoundException} from '@nestjs/common';
import {TaskRepository} from './task.repository';
import {InjectRepository} from '@nestjs/typeorm';
import {Task} from '../config/task.entity';
import {CreateTaskDto} from './dto/create-task.dto';
import {TaskStatus} from './task-status-enum';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) {

    }

    // getTasks(): Task[] {
    //     return this.tasks;
    // }
    //
    // getFilteredTasks(filterDto: GetTasksFilterDto): Task[] {
    //     const {status, search} = filterDto;
    //
    //     let tasks = this.getTasks();
    //     if (status) {
    //         tasks = tasks.filter(task => task.status === status);
    //     }
    //
    //     if (search) {
    //         tasks = tasks.filter(
    //             task =>
    //                 task.title.includes(search) ||
    //                 task.description.includes(search),
    //         );
    //     }
    //     return tasks;
    // }

    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);
        if (!found) {
            throw new NotFoundException(`Task with id "${id}" not found`);
        }

        return found;
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const task = new Task();
        const {title, description} = createTaskDto;
        task.title = title;
        task.description = description;
        task.status = TaskStatus.OPEN;
        await task.save();
        return task;
    }
    // deleteTask(id: string): void {
    //     const found = this.getTaskById(id);
    //     this.tasks = this.tasks.filter(task => task.id !== found.id);
    // }
    //
    // updateStatus(id: string, status: TaskStatus): Task {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
    //

}
