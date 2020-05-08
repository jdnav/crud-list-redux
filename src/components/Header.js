import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h3>Crud list with React, Redux, REST API and Axios</h3>
            </div>

            <a className="btn btn-danger new-post d-block d-md-inline-block" href="/items/new">Add item &#43;</a>
        </nav>
    );
}

export default Header;