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
    ITEM_EDITED_ERROR
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// Create new Item
export function createNewItemAction(item) {
    return async (dispatch) => {
        dispatch( addItem() );

        try {
            // insertar en la API
            await clienteAxios.post('/items', item);

            // Si todo sale bien, actualizar el state
           dispatch( addItemSuccess(item) );

            // Alerta
            Swal.fire(
                'Correcto', 
                'El item se agregó correctamente',
                'success'
            );

        } catch (error) {
            console.log(error);
            // si hay un error cambiar el state
            dispatch( addItemError(true) );

            // alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const addItem = () => ({
    type: ADD_ITEM,
    payload: true
});

// si el item se guarda en la base de datos
const addItemSuccess = item => ({
    type: ADD_ITEM_SUCCESS,
    payload: item
})

// si hubo un error
const addItemError = estado => ({
    type: ADD_ITEM_ERROR,
    payload: estado
});


// It gets all items from db
export function getItemsAction() {
    return async (dispatch) => {
        dispatch( getItems() );

        try {
            const respuesta = await clienteAxios.get('/items');
            dispatch( downloadItemsSuccess(respuesta.data) )
        } catch (error) {
            console.log(error);
            dispatch( downloadItemsError() )
        }
    }
}

const getItems = () => ({
    type: START_DOWNLOAD_ITEMS,
    payload: true
});

const downloadItemsSuccess = items => ({
    type: DOWNLOAD_ITEMS_SUCCESS,
    payload: items
})
const downloadItemsError = () => ({
    type: DOWNLOAD_ITEMS_ERROR, 
    payload: true
});

// Selecciona y elimina el item
export function deleteItemAction(id) {
    return async (dispatch) => {
        dispatch(getItemDelete(id) );

        try {
            await clienteAxios.delete(`/items/${id}`);
            dispatch( deleteItemSuccess() );

            // Si se elimina, mostrar alerta
            Swal.fire(
                'Eliminado',
                'El item se eliminó correctamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch( deleteItemError() );
        }
    }
}

const getItemDelete = id => ({
    type: GET_ITEM_DELETE,
    payload: id
});
const deleteItemSuccess = () => ({
    type: ITEM_DELETE_SUCCESS
})
const deleteItemError = () => ({
    type: ITEM_DELETE_ERROR,
    payload: true
});

// Colocar item en edición
export function getItemEditar(item) {
    return (dispatch) => {
        dispatch( getItemEditAction(item) )
    }
}

const getItemEditAction = item => ({
    type: GET_ITEM_EDIT,
    payload: item
})

// Edita un registro en la api y state
export function editItemAction(item) {
    return async (dispatch) => {
        dispatch( editItem() );

        try {
            await clienteAxios.put(`/items/${item.id}`, item);    
            dispatch( editItemSuccess(item) );
        } catch (error) {
            console.log(error);
            dispatch( editItemError() );
        }
    }
}
const editItem = () => ({
    type: START_EDICION_ITEM
});

const editItemSuccess = item => ({
    type: ITEM_EDITED_SUCCESS,
    payload: item
});

const editItemError = () => ({
    type: ITEM_EDITED_ERROR,
    payload: true
})