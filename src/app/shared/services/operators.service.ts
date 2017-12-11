import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import * as io from 'socket.io-client';
import {SERVER_URL} from '../constants/app.constant';
import {IOperator} from '../models/operator.model';
import {IPrice} from '../models/price.model';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class OperatorsService {
  private socket: SocketIOClient.Socket;
  private subjectOperators = new ReplaySubject<any>();
  private subjectPrice = new Subject<any>();
  operators: Array<IOperator> = [];

  constructor() {
    this.socket = io.connect(SERVER_URL, {
      reconnection: true
    });

    this.socket.on('connect', () => console.log('this.socket.connected', this.socket.connected));
    this.socket.on('operators', (operators: Array<IOperator>) => this.subjectOperators.next(operators));
    this.socket.on('price', (price: IPrice) => this.subjectPrice.next(price));
  }

  getOperators(): Observable<Array<IOperator>> {
    return this.subjectOperators.asObservable();
  }

  getPrice(): Observable<IPrice> {
    return this.subjectPrice.asObservable();
  }
}
