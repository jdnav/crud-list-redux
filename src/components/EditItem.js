import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editItemAction } from "../actions/itemActions";
import { useHistory } from "react-router-dom";

const EditItem = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // nuevo state de item
  const [item, saveItem] = useState({
    name: "",
    price: "",
  });

  // item a editar
  const itemEdit = useSelector((state) => state.items.itemEdit);

  // llenar el state automaticamente
  useEffect(() => {
    saveItem(itemEdit);
  }, [itemEdit]);

  // Leer los datos del formulario
  const onChangeForm = (e) => {
    saveItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const { name, price } = item;

  const submitEditItem = (e) => {
    e.preventDefault();

    dispatch(editItemAction(item));

    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Edit Item
            </h2>

            <form onSubmit={submitEditItem}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="name"
                  value={name}
                  onChange={onChangeForm}
                />
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="price"
                  value={price}
                  onChange={onChangeForm}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
