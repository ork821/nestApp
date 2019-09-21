import {Injectable} from '@nestjs/common';
import {Task, TaskStatus} from './tasks.model';
import * as uuid from 'uuid/v1';
import {CreateTaskDto} from './create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateStatus(id: string, status: TaskStatus): Task  {
        let TASK = {};
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                task.status = status;
                TASK = task;
                return task;
            }
            return task;
        });
        return TASK as Task;
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const {title, description} = createTaskDto;
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };

        this.tasks.push(task);
        return task;
    }
}
