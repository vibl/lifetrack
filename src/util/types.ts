export type Index<T> = Record<string, T>;

export type TObject = Index<any>;

interface TNoApply { [k: string]: any, apply?: void };
interface TNoBind { [k: string]: any, bind?: void };
interface TNoCall { [k: string]: any, call?: void };
interface TNoCaller { [k: string]: any, caller?: void };
export type TObjectNotFunction = TNoApply| TNoBind | TNoCall | TNoCaller; // if it fails all 4 checks it's a function

export type TValue = boolean | number | string | null | undefined | Date

export type TNotFunction = TValue | TObjectNotFunction;
