export default interface NewCustomer {
  name: string,
  phoneNumber: string,
  address1: string,
  address2: string,
  address3: string | undefined,
  postCode: string,
  howToEnter: string | undefined,
  requirementMemo: string | undefined,
  district: string | undefined,
  latitude: number | undefined,
  longitude: number | undefined,
  memo: string | undefined,
}
