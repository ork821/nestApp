import {EntityRepository, Repository} from 'typeorm';
import {Task} from '../config/task.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

}
