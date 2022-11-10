import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "persist-atom",
  storage: localStorage
});

export const notesState = atom({
  key: 'notesState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value),
  effects_UNSTABLE: [persistAtom]
});

export const displayNoteState = atom({
  key: 'displayNoteState', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value),
  effects_UNSTABLE: [persistAtom]
});