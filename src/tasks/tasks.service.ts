import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks = [];

    getAppTasks() {
        return this.tasks;
    }
}
