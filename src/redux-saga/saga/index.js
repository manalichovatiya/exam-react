import { all } from "@redux-saga/core/effects";
import { delete_product_saga, get_product_saga, put_product_saga } from "./rootsaga/rootusersaga";
import { delete_product_handler, get_product_handler, put_product_handler } from "./product/manageproduct";
export function* rootSaga() {
  yield all(
    [
      get_product_saga(),
      get_product_handler(),
      delete_product_saga(),
      delete_product_handler(),
      put_product_saga(),
      put_product_handler()
    ]);
}