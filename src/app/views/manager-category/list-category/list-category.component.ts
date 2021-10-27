import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/shared/model/category.model';

import { CategoryName } from 'src/app/shared/model/categoryname.model';
import { CategoryService } from 'src/app/shared/service/category.service';
import { CategoryDeleteScreenComponent } from '../category-delete-screen/category-delete-screen.component';


@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css'],
})
export class ListCategoryComponent implements OnInit {
  public categories: any;
  constructor(public dialog: MatDialog,
    public category: CategoryService

    ) {}

  ngOnInit(

  ): void {
    this.category.getCategory().subscribe(response=>
      this.categories = response)
  }

  public delete(category:string, id:number): void {

    const dialogRef = this.dialog.open(CategoryDeleteScreenComponent, {
      minWidth: '400px',
      minHeight: '200px',
      data: {
        name: `${category}`,
        id:`${id}`
      }
    });
  }
}
