import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {TasksService} from './tasks.service';
import {Task, TaskStatus} from './tasks.model';
import {CreateTaskDto} from './dto/create-task.dto';
import {GetTasksFilterDto} from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {
    }

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
        if (Object.keys(filterDto).length) {
            return this.tasksService.getFilteredTasks(filterDto);
        }
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        return this.tasksService.deleteTask(id);
    }

    @Post()
    async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    @Patch('/:id/status')
    updateStatus(@Param('id') id: string,
                 @Body('status') status: TaskStatus,
    ): Task {
        return this.tasksService.updateStatus(id, status);
    }
}
