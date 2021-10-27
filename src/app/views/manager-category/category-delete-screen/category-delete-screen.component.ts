import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-category-delete-screen',
  templateUrl: './category-delete-screen.component.html',
  styleUrls: ['./category-delete-screen.component.css'],
})
export class CategoryDeleteScreenComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CategoryDeleteScreenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private category: CategoryService
  ) {}

  ngOnInit(): void {}

  public destroy(id: string) {
    this.category.deleteCategory(id).subscribe(response => {
        this.dialogRef.close();
        window.location.reload();

    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
