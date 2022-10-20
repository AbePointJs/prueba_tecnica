import { API_URL } from "../data/constants";
import fetch from "../libs/httpRequest";

export function fetchAllProducts() {
  return fetch.get(`${API_URL}/product`);
}

export function fetchProductDetails(id) {
  return fetch.get(`${API_URL}/product/${id}`);
}

export function postItemToCard(data) {
  return fetch.post(`${API_URL}/cart/`, data);
}
