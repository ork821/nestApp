import {Controller} from '@nestjs/common';
import {TasksService} from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {
    }

    // @Get()
    // getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
    //     if (Object.keys(filterDto).length) {
    //         return this.tasksService.getFilteredTasks(filterDto);
    //     }
    //     return this.tasksService.getTasks();
    // }
    //
    // @Get('/:id')
    // getTaskById(@Param('id') id: string): Task {
    //     return this.tasksService.getTaskById(id);
    // }
    //
    // @Delete('/:id')
    // deleteTask(@Param('id') id: string): void {
    //     return this.tasksService.deleteTask(id);
    // }
    //
    // @Post()
    // @UsePipes(ValidationPipe)
    // async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    //     return this.tasksService.createTask(createTaskDto);
    // }
    //
    // @Patch('/:id/status')
    // updateStatus(@Param('id') id: string,
    //              @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    // ): Task {
    //     return this.tasksService.updateStatus(id, status);
    // }
}
