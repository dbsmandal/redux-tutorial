import { ADD_TO_CART } from "../Constants/Constants";
export const addToCart = (data) => {
    console.warn("Action",data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}