import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "./server-routes";

@Injectable({
  providedIn: 'root'
})

export class Service extends Router {
  private _server: string;

  constructor(private http: HttpClient, server: string) {
    super();
    this._server = server;
  }

  public get(entity: string, value: String | Number): RouteManager {
    return new RouteManager(this.http, this._getRoute(entity, 'get'), 'get').slash(value);
  }

  public list(entity: string): RouteManager {
    return new RouteManager(this.http, this._getRoute(entity, 'list'), 'get');
  }

  public post(entity: string): RouteManager {
    return new RouteManager(this.http, this._getRoute(entity, 'post'), 'post');
  }

  public put(entity: string): RouteManager {
    return new RouteManager(this.http, this._getRoute(entity, 'put'), 'put');
  }

  public delete(entity: string): RouteManager {
    return new RouteManager(this.http, this._getRoute(entity, 'delete'), 'delete');
  }

  public setServer(server: string) {
    this._server = server;
  }

  private _getRoute(entity, methodPath): string {
    return this.BASE[this._server].concat(this[entity.toUpperCase()][methodPath])
  }

}

class RouteManager {
  private _requestContent: any;
  private _method: string;
  private _route: string;

  constructor(private http: HttpClient, route: string, method: string) {
    this._requestContent = new Object();
    this._method = method;
    this._route = route;
  }

  public slash(value: String | Number): RouteManager {
    this._route = `${this._route}/${value}`;
    return this;
  }

  public requestBody(body: Object): RouteManager {
    this._requestContent.body = body;
    return this;
  }

  public async go(): Promise<any> {
    return await this.http.request(this._method, this._route, this._requestContent).toPromise();;
  }
}

