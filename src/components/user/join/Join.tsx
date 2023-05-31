import Account from "./Account";
import CustomerInfo from "./CustomerInfo";
import PostCode from "../../map/PostCode";
import PersonalInfo from "./PersonalInfo";

function Join () {

  return (
    <>
      <Account />
      <hr/>
      <CustomerInfo />
      <hr/>
      <PostCode />
      <hr/>
      <PersonalInfo />
    </>
  )
}

export default Join;
