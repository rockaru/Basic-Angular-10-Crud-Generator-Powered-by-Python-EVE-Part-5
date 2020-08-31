import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

private _loading:BehaviorSubject<boolean>= new BehaviorSubject(false)
public readonly loading:Observable<boolean> = this._loading.asObservable()

  constructor() {
   }

  changeState(state){
    this._loading.next(state)
  }

}
