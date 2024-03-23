import { Subject } from "rxjs";

export default class Store<T> extends Subject<T>{
  private state: T;

  constructor(initialState: T){
    super();
    this.state = initialState;
  }

  set(value: T){
    this.state = value;
    this.next(value);
  }

  get(){
    return this.state;
  }
}