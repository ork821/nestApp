import {Injectable} from '@nestjs/common';

@Injectable()
export class TasksService {
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
    //
    // getTaskById(id: string): Task {
    //     const found =  this.tasks.find(task => task.id === id);
    //
    //     if (!found) {
    //         throw new NotFoundException(`Task with id "${id}" not found`);
    //     }
    //
    //     return found;
    // }
    //
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
    // createTask(createTaskDto: CreateTaskDto): Task {
    //     const {title, description} = createTaskDto;
    //     const task: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     };
    //
    //     this.tasks.push(task);
    //     return task;
    // }
}
