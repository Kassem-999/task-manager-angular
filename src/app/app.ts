import { Component, OnInit } from '@angular/core';
import { TaskService } from './task';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  taskList: Task[] = [];
  isLoading: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.isLoading = true;
    this.taskList = this.taskService.getTasks();
    this.isLoading = false;
  }
}