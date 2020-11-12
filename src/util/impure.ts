import { isEqual } from "lodash";

const onceCalledM = new Map();

export function once(fn: Function, ...args: any[]) {
  if( !isEqual(onceCalledM.get(fn), args) ) {
    onceCalledM.set(fn, args);
    fn(...args);
  }
}