import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";


const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
         expreso: {
             name:"Expreso",
             price: 1.100,
             numbers: 0,
             inCart: false
         },
         americano: {
            name:"Americano",
            price: 1.400,
            numbers: 0,
            inCart: false
        },
        cappuccino: {
            name:"Cappuccino",
            price: 1.600,
            numbers: 0,
            inCart: false
        },
        latte: {
            name:"Latte",
            price: 1.800,
            numbers: 0,
            inCart: false
        },
        moca: {
            name:"Moca",
            price: 2.200,
            numbers: 0,
            inCart: false
        }

    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = { ...state.products[action.payload]}
            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }

        case GET_NUMBERS_BASKET:
            return {
                ...state
            }

        default:
            return state;
    }
}