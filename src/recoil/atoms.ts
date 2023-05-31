import { atom } from "recoil";
import ShopData from "../global/interfaces/ShopData";


// test용
export const textState = atom({
  key: 'textState',
  default: '',
});


// shops 상태 관리
export const shopState = atom<ShopData[]>({
  key: 'shopState',
  default: [],
})
