import { call, put } from "redux-saga/effects";
import { delete_product, get_product, put_product } from "../../../components/product/api/api";
import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, PUT_PRODUCT_ERROR, PUT_PRODUCT_SUCCESS } from "../../../components/product/action/action";

export function* get_product_handler() {
    try {
        const res = yield call(get_product)
        const status = res.status
        const data = res.data
        if (status === 200 || status === 201) {
            yield put({ type: GET_PRODUCT_SUCCESS, data })
        }
        else {
            yield put({ type: GET_PRODUCT_ERROR })
        }
    } catch (error) {
        console.log(error);
    }
}
export function* delete_product_handler(action) {
    try {
        const res = yield call(delete_product, action)
        const index = res.index
        const status = res.status
        if (status === 200 || status === 201) {
            yield put({ type: DELETE_PRODUCT_SUCCESS, action ,index})
        }
        else {
            yield put({ type: DELETE_PRODUCT_ERROR })
        }
    } catch (error) {
        console.log(error);
    }
}
export function* put_product_handler(action) {
    try {
        const res = yield call(put_product, action)
        const data = res.data
        const status = res.status
        const index = res.index
        if (status === 200 || status === 201) {
            yield put({ type: PUT_PRODUCT_SUCCESS, data, index })
        }
        else {
            yield put({ type: PUT_PRODUCT_ERROR })
        }
    } catch (error) {
        console.log(error);
    }
}