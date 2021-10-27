import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/shared/model/category.model';
import { CategoryName } from 'src/app/shared/model/categoryname.model';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
})
export class CategoryFormComponent implements OnInit {
  public categories: CategoryName[] = [];
  public error: string = '';
  public categoryForm!: FormGroup;
  public stringRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  constructor(
    private fb: FormBuilder,
    private category: CategoryService,
    public dialogRef: MatDialogRef<CategoryFormComponent>
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(128),
          Validators.pattern(this.stringRegex),
        ],
      ],
    });
  }

  public createCategory() {
    this.category.postCategory(this.categoryForm.value).subscribe(
      (result) => {
        this.categories.push(this.categoryForm.value);
        this.dialogRef.close();
        this.categoryForm.reset();
        window.location.reload();
      },
      (error) => {
        alert(error);
      }
    );
  }

  cancel(): void {
    this.dialogRef.close();
    this.categoryForm.reset();
  }
}
