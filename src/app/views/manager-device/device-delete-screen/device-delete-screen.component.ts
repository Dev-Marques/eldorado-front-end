import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeviceService } from 'src/app/shared/service/device.service';

@Component({
  selector: 'app-device-delete-screen',
  templateUrl: './device-delete-screen.component.html',
  styleUrls: ['./device-delete-screen.component.css'],
})
export class DeviceDeleteScreenComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeviceDeleteScreenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private device: DeviceService
  ) {}

  ngOnInit(): void {}

  public destroy(id: string) {
    this.device.deleteDevice(id).subscribe((response) => {
      this.dialogRef.close();
      window.location.reload();
    });
  }
  cancel() {
    this.dialogRef.close();
  }
}
