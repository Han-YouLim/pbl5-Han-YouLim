import {atom} from "recoil";

export const resultVideoAtom = atom({
    key: 'resultVideoState',
    default: {
        message: '',
        file: null
    },
});
