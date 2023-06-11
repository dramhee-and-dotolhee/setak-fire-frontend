// api 주소
import {useMutation} from "@tanstack/react-query";
import NewCustomer from "../global/interfaces/NewCustomer";
import axios from "axios";

const apiHost: string | undefined = process.env.REACT_APP_API_HOST_URL;


// 새로운 customer 생성
export function useCreateCustomer() {

  // const queryClient = useQueryClient();

  return useMutation(
    (newCustomer: NewCustomer) => axios.post(`${apiHost}/customers`, newCustomer),
    {
      onMutate: (customer) => {
        console.log('onMutate : ', customer);
      },

      onSuccess: (data, customer, context) => {
        console.log('onSuccess : ', data.data, customer, context);
      },

      onError: (error, customer, context) => {
        console.log('Error : ', error, customer, context);
      }
    }
  )
}
