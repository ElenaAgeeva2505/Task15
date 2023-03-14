import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo, TodoService } from './../service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  todoForm!: FormGroup;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.todoForm = new FormGroup(
      {
        todo:new FormControl('',[Validators.required])
      }
    )
  }

  addTasks() {
    this.todoService.create({
      value: this.todoForm.controls['todo'].value,
      completed: false,
    });
    this.todoForm.reset();
  }
}
