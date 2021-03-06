import React, { Fragment, useEffect } from "react";
import Item from "./Item";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getItemsAction } from "../actions/itemActions";

const Items = () => {
  const dispatch = useDispatch();

  useEffect(() => {    
    // Get items
    const getItems = () => dispatch(getItemsAction());
    getItems();
    // eslint-disable-next-line
  }, []);

  // selectors to get slices of state
  const items = useSelector((state) => state.items.items);
  const error = useSelector((state) => state.items.error);
  const loading = useSelector((state) => state.items.loading);

  return (
    <Fragment>
      <h2 className="text-center my-5">List of items</h2>

      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          There was an error
        </p>
      ) : null}

      {loading ? <p className="text-center">Loading....</p> : null}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col" style={{ width: `60%` }}>
              Name
            </th>
            <th scope="col" style={{ width: `20%` }}>
              Price
            </th>
            <th scope="col" style={{ width: `20%` }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0
            ? "No items"
            : items.map((item) => (
                <Item key={item.id} item={item} />
              ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Items;
