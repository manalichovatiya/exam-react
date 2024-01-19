import { takeLatest } from "@redux-saga/core/effects";
import { delete_product_handler, get_product_handler, put_product_handler } from "../product/manageproduct";
import { DELETE_PRODUCT_PROCESS, GET_PRODUCT_PROCESS, PUT_PRODUCT_PROCESS } from "../../../components/product/action/action";

// GET - product saga
export function* get_product_saga() {
  yield takeLatest(GET_PRODUCT_PROCESS, get_product_handler);
}
export function* delete_product_saga() {
  yield takeLatest(DELETE_PRODUCT_PROCESS, delete_product_handler);
}
export function* put_product_saga() {
  yield takeLatest(PUT_PRODUCT_PROCESS, put_product_handler);
}