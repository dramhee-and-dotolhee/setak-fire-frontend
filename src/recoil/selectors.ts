import { selector } from "recoil";
import { textState } from "./atoms";

// test용
export const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
})



