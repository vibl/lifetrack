import { mapValues } from 'lodash';
import { atom, useRecoilState } from 'recoil';

const atomConfigs = {
  drawer: true,
};

const getAtom = (val, key) => atom({ key, default: val });
const atoms = mapValues(atomConfigs, getAtom);

const getHook = (val) => () => useRecoilState(val);
const useRecoil = mapValues(atoms, getHook);

export default useRecoil;

/*const atoms = {
  stateDrawer: true,
}*/
