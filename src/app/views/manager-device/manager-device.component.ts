import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceFormComponent } from './device-form/device-form.component';

@Component({
  selector: 'app-manager-device',
  templateUrl: './manager-device.component.html',
  styleUrls: ['./manager-device.component.css'],
})
export class ManagerDeviceComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addDevice(): void {
    const dialogRef = this.dialog.open(DeviceFormComponent, {
      minWidth: '400px',
      minHeight: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
