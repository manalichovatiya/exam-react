import axios from "axios"

export const get_product = async () => {
    return axios.get("http://localhost:3002/products").then((res) => {
        return {
            data: res.data,
            status: res.status
        }
    }).catch((err) => {
        return err
    })
}

export const delete_product = async (action) => {
    return axios.delete(`http://localhost:3002/products/${action.payload.id}`).then((res) => {
        return {
            index: action.index,
            status: res.status
        }
    }).catch((err) => {
        return err
    })
}

export const put_product = async (action) => {
    return axios.put(`http://localhost:3002/products/${action.payload.id}`,action.payload).then((res) => {
        return {
            data: res.data,
            status: res.status,
            index : action.index
        }
    }).catch((err) => {
        return err
    })
}