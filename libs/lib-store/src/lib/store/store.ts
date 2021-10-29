import * as _ from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import { Action, reducerFunction, stateProps$ } from './store.base';

export abstract class Store<S, A, P> {
  public state: S;
  private state$: BehaviorSubject<S>;
  private stateProps$: stateProps$ = {};

  constructor(initialState: S, private reducer: reducerFunction<S, A, P>) {
    this.initializeState(initialState);
  }

  /**
   * Dispatch all the state
   * @param action
   * @returns state$
   */
  public dispatchState(action: Action<A>) {
    const curretState = this.getState();
    const newState: any = this.reducer(curretState, action);
    this.setState(newState);
  }

  /**
   * Dispatch specific state prop
   * @param action
   * @returns state$
   */
  public dispatchPropState(action: Action<A>) {
    const curretState = this.getState();
    const result: any = this.reducer(curretState, action);
    const { propState, prop } = result;
    this.setPropState(prop, propState);
  }

  /**
   * Binds prop state$
   * @param prop
   * @returns prop state$
   */
  public bind$(prop: any): Observable<any> {
    return this.stateProps$[prop].asObservable();
  }

  /**
   * Binds global  state$
   * @returns state$
   */
  public bindState$(): Observable<any> {
    return this.state$.asObservable();
  }

  private initializeState(initialState: any) {
    this.state = _.cloneDeep(initialState);
    const keysInitial: string[] = Object.keys(initialState);
    for (let e = 0; e < keysInitial.length; e++) {
      this.stateProps$[keysInitial[e]] = new BehaviorSubject<any>(initialState[keysInitial[e]]);
    }
    this.state$ = new BehaviorSubject(this.state);
  }

  /**
   * Gets global state
   * @returns state
   */
  private getState(): S {
    return _.cloneDeep(this.state);
  }

  /**
   * Sets global state
   * @param state
   */
  private setState(state: S) {
    this.state = _.cloneDeep(state);
    this.state$.next(this.state);
    const clonedState: any = _.cloneDeep(this.state);
    const keysState: string[] = Object.keys(this.state);
    for (let i = 0; i < keysState.length; i++) {
      this.stateProps$[keysState[i]].next(_.cloneDeep(clonedState[keysState[i]]));
    }
  }

  /**
   * Sets specific prop state
   * @param prop
   * @param value
   */
  private setPropState(prop: string, value: any) {
    const currentState: any = _.cloneDeep(this.state);
    currentState[prop] = value;
    this.stateProps$[prop].next(currentState[prop]);
    this.state = _.cloneDeep(currentState);
    this.state$.next(this.state);
  }
}
