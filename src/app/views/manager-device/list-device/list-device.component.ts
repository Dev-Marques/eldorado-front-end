import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceService } from 'src/app/shared/service/device.service';
import { DeviceDeleteScreenComponent } from '../device-delete-screen/device-delete-screen.component';
@Component({
  selector: 'app-list-device',
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.css']
})
export class ListDeviceComponent implements OnInit {
  public dvc : any
  constructor(
    public dialog:MatDialog,
    private device : DeviceService

  ) { }

  ngOnInit(): void {
    this.device.getDevices().subscribe(response=>
      this.dvc = response)
  }

  public delete(id:string, parNumber:number): void {
    const dialogRef = this.dialog.open(DeviceDeleteScreenComponent, {
      minWidth: '400px',
      minHeight: '200px',
      data:{
        id:`${id}`,
        partNumber:`${parNumber}`
      }
    });
  }

}
