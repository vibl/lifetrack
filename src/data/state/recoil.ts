import { atom, SetterOrUpdater, useRecoilState } from "recoil";
import atomsConfig from "./atoms";

type AtomsConfig = typeof atomsConfig;
type Key = keyof AtomsConfig;
type UseRecoil<T> = {
  [K in keyof T]: () => [ T[K], SetterOrUpdater<T[K]> ]
};

const acc: Record<Key, any> = { ...atomsConfig };
let key: Key;

for (key in acc) {
  const newAtom = atom({ key, default: acc[key] });
  acc[key] = () => useRecoilState(newAtom); // eslint-disable-line react-hooks/rules-of-hooks
}

export const useAtom = acc as UseRecoil<AtomsConfig>;
