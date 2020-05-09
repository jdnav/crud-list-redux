import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

// Redux
import { useDispatch } from "react-redux";
import { deleteItemAction, getItemEditAction } from "../actions/itemActions";

const Item = ({ item }) => {
  const { name, price } = item;

  const dispatch = useDispatch();
  const history = useHistory(); // Allow history for redirecting

  // Confirm delete dialog
  const confirmDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "The item will no longer be available",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.value) {
        // delete item
        dispatch(deleteItemAction(item.id));
      }
    });
  };

  // Redirect to edit panel
  const redirectEdition = (item) => {
    dispatch(getItemEditAction(item));
    history.push(`/items/edit/${item.id}`);
  };

  return (
    <tr>
      <td>
        <b>{name}</b>
      </td>
      <td>
        <span className="font-weight-bold">$ {price} </span>
      </td>
      <td className="actions">
        <button
          type="button"
          onClick={() => redirectEdition(item)}
          className="btn btn-primary mr-2"
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmDeleteItem(item)}
        >
          Delete{" "}
        </button>
      </td>
    </tr>
  );
};

export default Item;
