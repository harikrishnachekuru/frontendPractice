import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/product';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css'],   // ✅ FIXED
})
export class Tasks implements OnInit {   // ✅ FIXED

  tasks: any[] = [];
  taskForm!: FormGroup;
  isEdit = false;
  editId!: string;

  constructor(
    private fb: FormBuilder,
    private taskService: Product
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: [''],
      description: [''],
      dependencies: ['']
    });

    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((res: any) => {
      this.tasks = res.tasks ?? res;
    });
  }

  onSubmit(): void {
    const formValue = this.taskForm.value;

    const taskPayload = {
      title: formValue.title,
      description: formValue.description,
      dependencies: formValue.dependencies
        ? formValue.dependencies.split(',').map((x: string) => x.trim())
        : []
    };

    if (!this.isEdit) {
      this.taskService.createTask(taskPayload).subscribe(() => {
        this.taskForm.reset();
        this.loadTasks();
      });
    } else {
      this.taskService.updateTask(this.editId, taskPayload).subscribe(() => {
        this.isEdit = false;
        this.taskForm.reset();
        this.loadTasks();
      });
    }
  }

  edit(task: any): void {
    this.isEdit = true;
    this.editId = task.id;

    this.taskForm.patchValue({
      title: task.title,
      description: task.description,
      dependencies: task.dependencies.join(', ')
    });
  }

  delete(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }
}
