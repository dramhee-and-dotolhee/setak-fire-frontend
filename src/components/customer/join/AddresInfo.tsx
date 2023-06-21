import PostCode from "../../map/PostCode";
import {Button} from "antd-mobile";


function AddressInfo () {

  return (
    <>
      <PostCode />
      <Button block color='primary' size='large'>
        다음
      </Button>
    </>
  )
}

export default AddressInfo;
