import { useState, useEffect } from "react";
// dependencies
import { useNavigate } from "react-router-dom";
import { graphqlRequest } from "../../utils/graphql";
import { useForm, SubmitHandler } from "react-hook-form";
import swal from "sweetalert";
// types
import { SerialNumberInput } from "../../types/serial-number";
import Session from "supertokens-web-js/recipe/session";
import { useCookies } from "react-cookie";

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

export const useRecord = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Array<object>>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SerialNumberInput>();
  const [, , removeCookie] = useCookies([
    "sFrontToken",
    "st-last-access-token-update",
  ]);

  useEffect(() => {
    setIsLoading(false);
    const fetch = async () => {
      setIsLoading(true);
      const res = await graphqlRequest.request<any>(findAllProductsQuery, {});
      if (res) {
        setProducts(res.products);
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  const logoutHandler = async () => {
    setIsLoading(true);
    await Session.signOut();
    removeCookie("sFrontToken");
    removeCookie("st-last-access-token-update");
    setIsLoading(false);
    navigate("/login", { replace: true });
  };

  const onSubmit: SubmitHandler<SerialNumberInput> = async (data) => {
    try {
      setIsLoading(true);
      await graphqlRequest.request(insertSerialNumberMutation, data);

      swal({
        title: "Success!",
        text: "Your data has been saved!",
        icon: "success",
        closeOnClickOutside: false,
      }).then(() => {
        navigate("/");
      });
    } catch (err) {
      console.error(err);
      swal({
        title: "Failed!",
        text: "Oops, something went wrong",
        icon: "error",
        closeOnClickOutside: false,
      }).then(() => {
        navigate("/");
      });
    }
  };

  return {
    products,
    isLoading,
    setProducts,
    logoutHandler,
    handleSubmit,
    register,
    onSubmit,
  };
};

export default useRecord;
