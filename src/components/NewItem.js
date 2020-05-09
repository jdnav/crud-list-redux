import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { createNewItemAction } from "../actions/itemActions";
import { showAlert, hideAlertAction } from "../actions/alertActions";

function NewItem({history}) {
  // Component STATE
  const [name, saveName] = useState("");
  const [price, savePrice] = useState(0);

  // UseDispatch to create a function
  const dispatch = useDispatch();

  // Access to the state of store
  const loading = useSelector((state) => state.items.loading);
  const error = useSelector((state) => state.items.error);
  const alert = useSelector((state) => state.alert.alert);

  // mandar llamar el action de productoAction
  const addItem = (item) => dispatch(createNewItemAction(item));

  // Submit form
  const submitNewItem = (e) => {
    e.preventDefault();

    // validate form
    if (name.trim() === "" || price <= 0) {
      const alert = {
        msg: "All fields are required",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(showAlert(alert));

      return;
    }

    // if no errors
    dispatch(hideAlertAction());

    // create new item
    addItem({
      name,
      price,
    });

    // redirect
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Add Item</h2>

            {alert ? <p className={alert.classes}> {alert.msg} </p> : null}

            <form onSubmit={submitNewItem}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name Item"
                  name="name"
                  value={name}
                  onChange={(e) => saveName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price of the item"
                  name="price"
                  value={price}
                  onChange={(e) => savePrice(Number(e.target.value))}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Add Item
              </button>
            </form>

            {loading ? <p>Loading...</p> : null}

            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">
                There was an error
              </p>
            ) : null}

          </div>
        </div>
      </div>
    </div>
  );
}

export default NewItem;
