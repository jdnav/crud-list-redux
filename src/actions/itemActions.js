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
  START_EDICION_ITEM,
  ITEM_EDITED_SUCCESS,
  ITEM_EDITED_ERROR,
} from "../types";
import clientAxios from "../config/axios";
import Swal from "sweetalert2";

// Create new Item
export function createNewItemAction(item) {
  return async (dispatch) => {
    dispatch(addItem());

    try {
      // add item in API
      await clientAxios.post("/items", item);

      // update state
      dispatch(addItemSuccess(item));

      // Alert success popup
      Swal.fire("Correct", "Item added correctly", "success");
    } catch (error) {
      console.log(error);
      // if error, change state
      dispatch(addItemError(true));

      // Alert error popup
      Swal.fire({
        icon: "error",
        title: "There was an error",
        text: "There was an error, try again later",
      });
    }
  };
}

const addItem = () => ({
  type: ADD_ITEM,
  payload: true,
});

// if item added in db successfully
const addItemSuccess = (item) => ({
  type: ADD_ITEM_SUCCESS,
  payload: item,
});

// there was an error
const addItemError = (estado) => ({
  type: ADD_ITEM_ERROR,
  payload: estado,
});

// It gets all items from db
export function getItemsAction() {
  return async (dispatch) => {
    dispatch(getItems());

    try {
      const respuesta = await clientAxios.get("/items");
      dispatch(downloadItemsSuccess(respuesta.data));
    } catch (error) {
      console.log(error);
      dispatch(downloadItemsError());
    }
  };
}

const getItems = () => ({
  type: START_DOWNLOAD_ITEMS,
  payload: true,
});

const downloadItemsSuccess = (items) => ({
  type: DOWNLOAD_ITEMS_SUCCESS,
  payload: items,
});
const downloadItemsError = () => ({
  type: DOWNLOAD_ITEMS_ERROR,
  payload: true,
});

// Select and delete the item
export function deleteItemAction(id) {
  return async (dispatch) => {
    dispatch(getItemDelete(id));

    try {
      await clientAxios.delete(`/items/${id}`);
      dispatch(deleteItemSuccess());

      // if deleted, show alert
      Swal.fire("Deleted", "Item deleted successfully", "success");
    } catch (error) {
      console.log(error);
      dispatch(deleteItemError());
    }
  };
}

const getItemDelete = (id) => ({
  type: GET_ITEM_DELETE,
  payload: id,
});
const deleteItemSuccess = () => ({
  type: ITEM_DELETE_SUCCESS,
});
const deleteItemError = () => ({
  type: ITEM_DELETE_ERROR,
  payload: true,
});

// set item in edition
export function getItemEditar(item) {
  return (dispatch) => {
    dispatch(getItemEditAction(item));
  };
}

const getItemEditAction = (item) => ({
  type: GET_ITEM_EDIT,
  payload: item,
});

// Edita un registro en la api y state
export function editItemAction(item) {
  return async (dispatch) => {
    dispatch(editItem());

    try {
      await clientAxios.put(`/items/${item.id}`, item);
      dispatch(editItemSuccess(item));
    } catch (error) {
      console.log(error);
      dispatch(editItemError());
    }
  };
}
const editItem = () => ({
  type: START_EDICION_ITEM,
});

const editItemSuccess = (item) => ({
  type: ITEM_EDITED_SUCCESS,
  payload: item,
});

const editItemError = () => ({
  type: ITEM_EDITED_ERROR,
  payload: true,
});
