import ShopData from "../../interfaces/ShopData";
import {Space, Tag} from "antd-mobile";

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

  return (
    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '30px'}}>
      <p>거리(임시) : {shop.deliveryCharge}</p>
      <p>수거비용 : {shop.deliveryCharge}</p>
      {shop.categoryTypes.map(type =>
        <Space>
          <Tag color={categoryColor[type]} round>{type}</Tag>
        </Space>
      )}
      <p>최소비용 : {shop.minimumCharge}</p>
      <p>수거비용 : {shop.deliveryCharge}</p>
    </div>
  )
}
