import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { BaseService } from 'src/app/api/base-service';

@Injectable({
  providedIn: 'root'
})
export class UploadServicesService extends BaseService {

  //private _rootUrl: string = 'http://ahmedatia010-001-site1.htempurl.com';

  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

UploadImage(formData){
 
  return     this.http.post(this.rootUrl + '/api/Upload/UploadImage', formData);
   
}
}
