import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Routes } from "./server-routes";


@Injectable({
  providedIn: 'root'
})

export class HistoryService {
  constructor(private http: HttpClient) { }
  
  getHistories(): Observable<any> {
    return this.http.get(Routes.HISTORY_LIST);
  }
}
