// api 주소
import { useMutation } from "@tanstack/react-query";
import NewCustomer from "../global/interfaces/NewCustomer";
import CustomerService from "../components/customer";

// 새로운 customer 생성
export function useCreateCustomer() {

  // const queryClient = useQueryClient();

  return useMutation(
    (newCustomer: NewCustomer) => CustomerService.create(newCustomer),
    {
      onMutate: (customer) => {
        console.log('onMutate : ', customer);
      },

      onSuccess: (data:any, customer, context) => {
        console.log('onSuccess : ', data.data, customer, context);
      },

      onError: (error, customer, context) => {
        console.log('Error : ', error, customer, context);
      }
    }
  )
}
