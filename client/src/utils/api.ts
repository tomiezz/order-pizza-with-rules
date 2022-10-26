import axios, { AxiosResponse } from "axios";
import { API_ENDPOINTS } from "./contant";
import {
  ApiResponse,
  ApplyRulesBodyDto,
  ApplyRulesRes,
  CheckoutBodyDto,
  GetCheckoutResDto,
  ParentProduct,
} from "./types";

const clientAxios = axios.create({
  baseURL: process.env.API_ENDPOINT || "http://localhost:4000",
});

const getProduct = async () => {
  return await clientAxios
    .get<ApiResponse<ParentProduct>>(API_ENDPOINTS.PRODUCTS)
    .then((response) => response.data.data);
};

const getCheckout = async () => {
  return await clientAxios
    .get<ApiResponse<GetCheckoutResDto>>(API_ENDPOINTS.CHECKOUT)
    .then((response) => response.data.data);
};

const addItemToCheckout = async (data: CheckoutBodyDto) => {
  return await clientAxios.post(API_ENDPOINTS.CHECKOUT, data);
};

const applyRules = async (data: ApplyRulesBodyDto) => {
  return await clientAxios
    .post<ApiResponse<ApplyRulesRes>>(API_ENDPOINTS.RULES, data)
    .then((result) => result.data.data);
};

const reset = async () => {
  return await clientAxios
    .post(API_ENDPOINTS.RESET)
    .then((result) => result.data.data);
};

export {
  getProduct,
  getCheckout,
  addItemToCheckout,
  applyRules,
  reset,
  clientAxios,
};
