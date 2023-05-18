import ShopData from "../../interfaces/ShopData";
import {Grid, Space, Tag} from "antd-mobile";

interface CategoryColorType {
  CLEANING: string;
  REFORM: string;
  MENDING: string;
  PREMIUM: string;

  [key: string]: string;
}

export default function ShopInfoBox({shop}: { shop: ShopData }) {

  // category type 별 색상 정의
  const categoryColor: CategoryColorType = {
    "CLEANING": "default",
    "REFORM": "primary",
    "MENDING": "warning",
    "PREMIUM": "danger",
  }


  // 수거 여부
  const handleDelivery = (isAvailableDelivery: boolean) => {
    const color = isAvailableDelivery ? "blue" : "red"
    const text = isAvailableDelivery ? "수거가능" : "수거불가"

    return (
      <Space>
        <Tag color={color} round  fill='outline' >{text}</Tag>
      </Space>
    )
  }


  return (
    <Grid columns={2} gap={8} style={{marginLeft: '2rem'}}>
      <p>{shop.deliveryCharge} 떨어져 있어요</p>
      <p>수거비용  {shop.deliveryCharge}</p>
      <p>최소비용  {shop.minimumCharge}</p>
      {handleDelivery(shop.isAvailableDelivery)}
      <div>
        {shop.categoryTypes.map(type =>
          <Space>
            <Tag color={categoryColor[type]} round style={{margin: '0.15rem'}}>{type}</Tag>
          </Space>
        )}
      </div>
    </Grid>
  )
}
