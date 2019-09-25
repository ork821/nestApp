import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {TasksService} from './tasks.service';
import {Task} from '../config/task.entity';
import {CreateTaskDto} from './dto/create-task.dto';
import {TaskStatusValidationPipe} from './pipes/task-status-validation.pipe';
import {TaskStatus} from './task-status-enum';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {
    }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }


    // @Get()
    // getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
    //     if (Object.keys(filterDto).length) {
    //         return this.tasksService.getFilteredTasks(filterDto);
    //     }
    //     return this.tasksService.getTasks();
    // }
    //
    //
    @Delete('/:id')
    deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.tasksService.deleteTask(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    @Patch('/:id/status')
    async updateStatus(@Param('id', ParseIntPipe) id: number,
                       @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    ): Promise<Task> {
        return await this.tasksService.updateStatus(id, status);
    }
}
