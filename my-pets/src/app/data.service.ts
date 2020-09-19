import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SocketService } from './socket.service'
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any[]
  private observableData: BehaviorSubject<any[]> = <BehaviorSubject<any[]>>new BehaviorSubject([])
  getData = this.observableData.asObservable()

  private observableSave: BehaviorSubject<any[]> = <BehaviorSubject<any[]>>new BehaviorSubject([])
  getSave = this.observableSave.asObservable()

  constructor(

    private socketService: SocketService,
    private httpClient: HttpClient
  ) {

    this.data = new Array
  }

  public setData(resource, item) {
    this.data[resource] = item
    this.observableData.next(Object.assign({}, this.data))
    console.log(resource, item)
  }

  public getAll(resource) {

    return this.httpClient.get(`api/${resource}`).pipe()

  }

  public getOne(resource, id) {
    return this.httpClient.get(`api/${resource}/${id}`).pipe()
  }

  public add(resource, data) {
    return this.httpClient.post(`api/${resource}`, data).pipe()
  }

  public update(resource, id, data) {

    return this.httpClient.patch(`api/${resource}/${id}`, data).pipe()
  }

  public delete(resource, id) {
    return this.httpClient.delete(`api/${resource}/${id}`).pipe()
  }

}


