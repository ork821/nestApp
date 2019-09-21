import {Body, Controller, Get, Post} from '@nestjs/common';
import {TasksService} from './tasks.service';
import {Task} from './tasks.model';
import {CreateTaskDto} from './create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {
    }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post()
    async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }
}
