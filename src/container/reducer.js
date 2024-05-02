import React from 'react';

const reducer = (state, action) => {
    if(action.type === "CLEAR_CART") {
        return {...state, cart: []};
    }
    if(action.type === "REMOVE_ITEM") {
        const removed = state.cart.filter((items) => items.id !== action.payload);
        return {...state, cart: removed}
    }
    if(action.type === "INCREMENT") {
        let temCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload) {
                return {...cartItem, amount: cartItem.amount + 1};
            }
            return cartItem;
        })
        return {...state, cart: temCart}
    }
    if(action.type === "DECREMENT") {
        let temCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload) {
                return {...cartItem, amount: cartItem.amount - 1};
            }
            return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0)
        return {...state, cart: temCart}
    }
    if(action.type === "GET_TOTAL") {
        let {total, amount} = state.cart.reduce(
            (cartTotal, cartAmount) => {
                const {price, amount} = cartAmount;
                const cartTotalItem = price * amount;
                // console.log(price, amount, cartTotalItem);

                cartTotal.total += cartTotalItem;
                cartTotal.amount += amount;
                return cartTotal;
             },
            {
                total: 0,
                amount: 0
            })
            total = parseFloat(total.toFixed(2));
            // console.log(total);
            return {...state, total, amount};

        // let {total, amount} = state.cart.reduce(
        //     (cartTotal, cartAmount) => {
        //         const {price, amount} = cartAmount;
        //         const itemTotal = price * amount;

        //         cartTotal.total += itemTotal;
        //         cartTotal.amount += amount;
        //     return cartTotal;
        // },{
        //     total: 0,
        //     amount: 0
        // })
        // total = parseFloat(total.toFixed(2))
        // return { ...state, total, amount }
    }
    if(action.type === "LOADING") {
        return {...state, isLoading: true}
    }

    if(action.type === "FETCHED_DATA") {
        return {...state, cart:action.payload, isLoading: false}
    }

    // //for the "INCREMENT & DECREMENT" in SINGLE FUNCTION
    // if (action.type === 'TOGGLE_AMOUNT') {
    //     let tempCart = state.cart
    //     .map((cartItem) => {
    //         if (cartItem.id === action.payload.id) {
    //         if (action.payload.type === 'inc') {
    //             return { ...cartItem, amount: cartItem.amount + 1 }
    //         }
    //         if (action.payload.type === 'dec') {
    //             return { ...cartItem, amount: cartItem.amount - 1 }
    //         }
    //         }
    //         return cartItem
    //     })
    //     .filter((cartItem) => cartItem.amount !== 0)
    //     return { ...state, cart: tempCart }
    // }
    throw new Error('no matching action type')
}

export default reducer
