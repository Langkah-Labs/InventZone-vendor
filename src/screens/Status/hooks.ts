import { useState, useEffect } from "react";
// dependencies
import { useNavigate } from "react-router-dom";
import { graphqlRequest } from "../../utils/graphql";
import { useForm, SubmitHandler } from "react-hook-form";
import swal from "sweetalert";
// types
import { SerialNumberInput, SerialNumber } from "../../types/serial-number";
import Session from "supertokens-web-js/recipe/session";
import { useCookies } from "react-cookie";

const findAllSerialNumbersQuery = `
  query FindAllSerialNumbers {
    serial_numbers {
      id
      product_id
      quantity
      product_name
      product_order_id
      created_at
      updated_at
      status
      verification
      product {
        name
        shorten_name
      }
    }
  }
`;

const findSerialNumberByPoIdQuery = `
  query FindSerialNumberByPoId($product_order_id: String!) {
    serial_numbers(where: {product_order_id: {_eq: $product_order_id}}) {
      id
      product_id
      quantity
      product_name
      product_order_id
      created_at
      updated_at
      status
      verification
      product {
        name
        shorten_name
      }
    }
  }
`;

export const useStatus = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [records, setRecords] = useState<Array<SerialNumber>>([]);
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
      const res = await graphqlRequest.request<any>(
        findAllSerialNumbersQuery,
        {}
      );
      if (res) {
        setRecords(res.serial_numbers);
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
      const { productOrderId } = data;

      const res = await graphqlRequest.request<any>(
        findSerialNumberByPoIdQuery,
        {
          product_order_id: productOrderId,
        }
      );
      if (res) {
        setRecords(res.serial_numbers);
        setIsLoading(false);
      }
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
    records,
    isLoading,
    setRecords,
    logoutHandler,
    handleSubmit,
    register,
    onSubmit,
  };
};

export default useStatus;
