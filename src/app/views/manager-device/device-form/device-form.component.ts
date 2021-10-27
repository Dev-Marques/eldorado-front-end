import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Device } from 'src/app/shared/model/device.model';
import { CategoryService } from 'src/app/shared/service/category.service';
import { DeviceService } from 'src/app/shared/service/device.service';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css'],
})
export class DeviceFormComponent implements OnInit {
  public DROPDOWN_LIST!: any[];
  public deviceOne: Device[] = [];
  public deviceForm!: FormGroup;
  public numRegex = /^\d*[1-9]\d*$/;
  constructor(
    private fb: FormBuilder,
    private device: DeviceService,
    private category: CategoryService,
    public dialogRef: MatDialogRef<DeviceFormComponent>
  ) {}

  ngOnInit(): void {
    this.category.getCategory().subscribe((response: any) => {
      this.DROPDOWN_LIST = response;
      console.log(response);
    });

    this.deviceForm = this.fb.group({
      category: ['', [Validators.required]],
      color: ['', [Validators.required, Validators.maxLength(16)]],
      partNumber: ['', [Validators.required]],
    });
  }

  public createDevice() {
    this.device.postDevices(this.deviceForm.value).subscribe(
      (result) => {
        this.deviceOne.push(this.deviceForm.value);
        this.deviceForm.reset();
        this.dialogRef.close();
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancel(): void {
    this.dialogRef.close();
    this.deviceForm.reset();
  }
}
