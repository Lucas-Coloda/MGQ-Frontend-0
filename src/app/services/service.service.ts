import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "./server-routes";

@Injectable({
  providedIn: 'root'
})
export class Service extends Router {
  private _server: string;
  private _route: string;
  private _httpMethod: string;

  constructor(private http: HttpClient) {
    super();
  }

  // Base methods
  public get(entity: string): Service {
    this._httpMethod = 'get';
    this._route = this._getRoute(entity, 'get');
    return this;
  }
  public list(entity: string): Service {
    this._httpMethod = 'get';
    this._route = this._getRoute(entity, 'list');
    return this;
  }

  public async post(history: any): Promise<any> {
    return await this.http.post('http://localhost:8080/history', history).toPromise();
  }

  public async put(history: any): Promise<any> {
    return await this.http.put('http://localhost:8080/history', history).toPromise();
  }

  public async delete(history: any): Promise<any> {
    // return await this.http.delete('http://localhost:8080/history', historystory).toPromise();
    return await this.http.request('delete', 'http://localhost:8080/history', { body: history }).toPromise();
  }

  // RESTfull call methods
  public async go(): Promise<any> {
    this._validateRoute();
    return await this.http[this._httpMethod](this._route).toPromise();
  }

  // URI/URL manipulation
  public slash(value): Service {
    this._validateRoute();
    this._route = this._route.concat('/').concat(value);
    return this;
  }

  // Suport methods
  public setServer(server: string) {
    this._server = server;
  }

  private _getRoute(entity, methodPath) {
    this._validateServer();
    return this.BASE[this._server].concat(this[entity.toUpperCase()][methodPath])
  }

  // Validation
  private _validateRoute() {
    this._validateServer()
    if (!this._route) {
      throw "Can't run 'go' without a route";
    }
  }
  private _validateServer() {
    if (!this._server) {
      throw "You need to set a service server first";
    }
  }
}
