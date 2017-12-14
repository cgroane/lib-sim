import axios from 'axios';
//action types
const GET_BOOKS = "GET_BOOKS";
const GET_USER = "GET_USER";
const ADD_TO_SHELF = "ADD_TO_SHELF";
const REMOVE_FROM_SHELF = "REMOVE_FROM_SHELF";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const GET_BOOK_DETAILS = "GET_BOOK_DETAILS";
const GET_SHELF = "GET_SHELF";

const initialState = {
    books: [],
    user: {},
    myShelf: [],
    selectedBook: {},
    cart: [],
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_BOOKS + "_PENDING":
            return Object.assign({}, state, {isLoading: true})
        case GET_BOOKS + "_FULFILLED":
            return Object.assign({}, state, {isLoading: false, books: action.payload})
        case GET_BOOK_DETAILS + "_PENDING":
            return Object.assign({}, state, {isLoading: true})
        case GET_BOOK_DETAILS + "_FULFILLED":
            return Object.assign({},state, {selectedBook: action.payload, isLoading: false})
        case ADD_TO_CART:
            {
                var cartCopy = [...state.cart]
                cartCopy.push(action.payload)
                return Object.assign({},state, {cart: cartCopy})
            }
        default:
            return state;
    }
}

export function setBooks() {
    return {
        type: GET_BOOKS,
        payload: axios.get('/api/books').then(response => response.data)
    }
}

export function setBook(id) {
    return {
        type: GET_BOOK_DETAILS,
        payload: axios.get(`/api/books/${id}`).then(response => response.data[0])
    }
}

// export function addBookToShelf(obj) {
//     return {
//         type: ADD_TO_SHELF,
//         payload: axios.post(`/api/shelf`, obj).then(response => response.data)
//     }
// }
export function addBookToCart(book) {
    return {
        type: ADD_TO_CART,
        payload: book
    }
}

// const GET_BOOKS = "GET_BOOKS";
// const GET_USER = "GET_USER";
// const ADD_TO_SHELF = "ADD_TO_SHELF";
// const REMOVE_FROM_SHELF = "REMOVE_FROM_SHELF";
// const ADD_TO_CART = "ADD_TO_CART";
// const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// const GET_BOOK_DETAILS = "GET_BOOK_DETAILS";
// const GET_SHELF = "GET_SHELF";
