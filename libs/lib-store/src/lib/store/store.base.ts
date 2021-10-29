import { BehaviorSubject } from 'rxjs';

export type reducerFunction<S, A, P> = (state: S, action: Action<A>) => S | { propState: any; prop: P };

export type stateProps$ = { [key: string]: BehaviorSubject<any> };

export interface Action<A> {
  type: A;
  payload: any;
  singleProp: boolean;
}
