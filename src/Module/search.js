import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

 const search = () => {
    return (
        <nav className="d-flex flex-row justify-content-center ">
            <input className="form-control-lg" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success m-2 my-2 my-sm-0" type="submit">Search</button>
        </nav>
    )
}
export default search;