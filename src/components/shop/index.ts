import http from "../../api/http";


const ShopService = {

  list: () => {
    return http
      .get('/shops')
      .then((res) => {
        console.log(res.data)
        return res.data;
      })
  }
}

export default ShopService;
