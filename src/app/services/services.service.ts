import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Routes } from "./server-routes";


@Injectable({
  providedIn: 'root'
})


export class Services {
  constructor(private http: HttpClient) { }

  async get(entity: String): Promise<any> {
    const route = entity.concat('_retrieve').toUpperCase();

    return await this.http.get(Routes[route]).toPromise();
  }

  async getList(entity: String): Promise<any> {
    const route = entity.concat('_list').toUpperCase();

    return await this.http.get(Routes[route]).toPromise();
  }

}
