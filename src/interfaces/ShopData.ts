export default interface ShopData {
  id: number,
  name: string,
  imageUrls: string[],
  partnerId: number,
  isAvailableDelivery: boolean,
  categoryTypes: string[],
  minimumCharge: number,
  minimumUnit: number,
  deliveryCharge: number,
  address: string,
  createdAt: string,
  updateAt: string,
  x: number,
  y: number
}
