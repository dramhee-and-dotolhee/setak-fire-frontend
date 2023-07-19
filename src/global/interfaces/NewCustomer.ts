import UserInfo from "./UserInfo";

export default interface NewCustomer {
  useInfo: UserInfo,
  name: string,
  phoneNumber: string,
  address1: string,
  address2: string,
  address3: string | undefined,
  postCode: string,
  howToEnter: string | undefined,
  requirementMemo: string | undefined,
  district: string | undefined,
  latitude: string | undefined,
  longitude: string | undefined,
  memo: string | undefined,
}
