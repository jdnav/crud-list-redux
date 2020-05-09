import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { deleteItemAction, getItemEditAction } from '../actions/itemActions';

const Item = ({item}) => {
    const { name, price, id } = item;

    const dispatch = useDispatch();
    const history = useHistory(); // habilitar history para redirección

    // Confirmar si desea eliminarlo
    const confirmDeleteItem = id => {

        // preguntar al usuario
        Swal.fire({
            title: 'Are you sure?',
            text: "The item will no longer be available",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                // pasarlo al action
                dispatch( deleteItemAction(id) );
            }
        });
    }

    // función que redirige de forma programada
    const redirectEdition = item => {
        dispatch( getItemEditAction(item) );
        history.push(`/items/edit/${item.id}`)
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold"> $ {price} </span></td>
            <td className="acciones">
                <button 
                    type="button"
                    onClick={ () => redirectEdition(item) }
                    className="btn btn-primary mr-2">
                    Edit
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmDeleteItem(id)}
                >Delete </button>
            </td>
        </tr>
     );
}
 
export default Item;