import { useState } from "react";
// dependencies
import { useNavigate } from "react-router-dom";
import { graphqlRequest } from "../../utils/graphql";
import swal from "sweetalert";

const findAllProductsQuery = `
  query FindAllProductsQuery {
    products {
      id
      name
      shorten_name
      created_at
      updated_at
    }
  }
`;

const insertSerialNumberMutation = `
  mutation InsertSerialNumber($productOrderId: String!, $quantity: bigint!, $product_id: bigint!) {
    insert_serial_numbers_one(object: {product_id: $product_id, product_order_id: $productOrderId, quantity: $quantity}) {
      id
      name: product_name
      product_id
      product_order_id
      quantity
      created_at
      updated_at
    }
  }
`;

interface FormData {
  username: string;
  password: string;
}

export const useStatus = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState<FormData>({
    username: "",
    password: "",
  } as FormData);

  const logoutHandler = async () => {
    setIsLoading(true);
    // try {
    //   const res = await api.deleteCurrentSession();
    //   if (res) {
    //     localStorage.removeItem("user_session");
    //     setIsLoading(false);
    //     navigate("/login");
    //   }
    // } catch (e) {
    //   setIsLoading(false);
    //   console.error(e);
    //   swal({
    //     title: "Failed!",
    //     text: "Oops, something went wrong",
    //     icon: "error",
    //   });
    // }
    setIsLoading(false);
    navigate("/login");
  };

  const submitHandler = async (data: any) => {
    // try {
    //   setIsLoading(true);
    //   await graphqlRequest.request(insertSerialNumberMutation, data);

    //   swal({
    //     title: "Success!",
    //     text: "Your data has been saved!",
    //     icon: "success",
    //     closeOnClickOutside: false,
    //   }).then(() => {
    //     navigate("/");
    //   });
    // } catch (err) {
    //   console.error(err);
    //   swal({
    //     title: "Failed!",
    //     text: "Oops, something went wrong",
    //     icon: "error",
    //     closeOnClickOutside: false,
    //   }).then(() => {
    //     navigate("/");
    //   });
    // }
    navigate("/status/result");
  };

  return {
    values,
    isLoading,
    setValues,
    logoutHandler,
    submitHandler,
  };
};

export default useStatus;
