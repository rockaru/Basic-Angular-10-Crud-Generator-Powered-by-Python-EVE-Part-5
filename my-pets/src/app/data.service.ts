import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SocketService } from './socket.service'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private socketService: SocketService,
    private httpClient: HttpClient
  ) { }

  public getAll(resource) {

    return this.httpClient.get(`api/${resource}`).pipe()

  }

  public getAllLocal(resource) {
    let items = JSON.parse(localStorage.getItem(`data-${resource}`))

    if (!items) {
     return this.getAll(resource).subscribe(data => {
        localStorage.setItem(`data-${resource}`, JSON.stringify(data["_items"]))

        return data["_items"]
      })
    } else {
      return items
    }
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


