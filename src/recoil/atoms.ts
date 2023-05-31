import { atom } from "recoil";
import ShopData from "../global/interfaces/ShopData";
import NewCustomer from "../global/interfaces/NewCustomer";


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


// join - customer 상태 관리
export const customerState = atom<NewCustomer>({
  key: 'customerState',
  default: undefined,
})
