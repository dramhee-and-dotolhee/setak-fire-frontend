import http from "../../api/http";
import NewCustomer from "../../global/interfaces/NewCustomer";

const CustomerService = {

  create: (newCustomer: NewCustomer) => {
    return http
      .post('/customers', newCustomer)
  }
}

export default CustomerService;
