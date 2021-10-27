import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../model/device.model';
import { ResponseDevice } from '../model/responseDevice.model';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  apiUrl = 'http://54.232.145.137:3000/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  public getDevices(): Observable<ResponseDevice> {
    return this.httpClient.get<ResponseDevice>(
      `${this.apiUrl}device`,
      this.httpOptions
    );
  }

  public postDevices(device: any): Observable<Device> {
    return this.httpClient.post<any>(
      `${this.apiUrl}device/`,
      device,
      this.httpOptions
    );
  }

  public deleteDevice(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}device/${id}`);
  }
}
