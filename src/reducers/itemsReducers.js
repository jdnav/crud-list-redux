import {
    ADD_ITEM,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_ERROR,
    START_DOWNLOAD_ITEMS,
    DOWNLOAD_ITEMS_SUCCESS,
    DOWNLOAD_ITEMS_ERROR,
    GET_ITEM_DELETE,
    ITEM_DELETE_SUCCESS,
    ITEM_DELETE_ERROR,
    GET_ITEM_EDIT,
    ITEM_EDITED_SUCCESS,
    ITEM_EDITED_ERROR,
  } from "../types";

// cada reducer tiene su propio state
const initialState = {
    items: [],
    error: null,
    loading: false, 
    itemDelete: null,
    itemEdit: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case START_DOWNLOAD_ITEMS:
        case ADD_ITEM: 
            return {
                ...state,
                loading: action.payload
            }
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [...state.items, action.payload]
            }
        case ADD_ITEM_ERROR:
        case DOWNLOAD_ITEMS_ERROR:
        case ITEM_DELETE_ERROR:
        case ITEM_EDITED_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DOWNLOAD_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                items: action.payload
            }
        case GET_ITEM_DELETE:
            return {
                ...state,
                itemDelete: action.payload
            }
        case ITEM_DELETE_SUCCESS:
            return {
                ...state,
                items: state.items.filter( producto => producto.id !== state.itemDelete ),
                itemDelete: null
            }
        case  GET_ITEM_EDIT:
            return {
                ...state,
                itemEdit: action.payload
            }
        case ITEM_EDITED_SUCCESS:
            return {
                ...state,
                itemEdit: null,
                items: state.items.map( producto => 
                    producto.id === action.payload.id ? producto = action.payload : producto
                )
            }
        default:
            return state;
    }
}