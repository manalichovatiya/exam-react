import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PROCESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PROCESS, GET_PRODUCT_SUCCESS, PUT_PRODUCT_ERROR, PUT_PRODUCT_PROCESS, PUT_PRODUCT_SUCCESS } from "../../../components/product/action/action";

const initialState = {
    product_data: [],
    isLoading: false,
    isError: null,
};

export const product_reducer = (state = initialState, action) => {
    switch (action.type) {
        // GET PRODUCT
        case GET_PRODUCT_PROCESS: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_PRODUCT_SUCCESS: {
            const data = action.data
            return {
                ...state,
                product_data: data.filter((one) => one.availability === true)
            }
        }
        case GET_PRODUCT_ERROR: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }
        //DELETE PRODUCT
        case DELETE_PRODUCT_PROCESS: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case DELETE_PRODUCT_SUCCESS: {
            const index = action.index
            state.product_data.splice(index, 1)
            return {
                ...state,
            }
        }
        case DELETE_PRODUCT_ERROR: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }
        //PUT PRODUCT
        case PUT_PRODUCT_PROCESS: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case PUT_PRODUCT_SUCCESS: {
            const index = action.index
            const data = action.data
            state.product_data.splice(index, 1, data)
            return {
                ...state,
            }
        }
        case PUT_PRODUCT_ERROR: {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        }
        default:
            return ({
                name: "Product"
            })
    }
}
