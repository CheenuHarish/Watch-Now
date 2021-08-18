import React from 'react'

 const search = ({val}) => {
    const handle=(e)=>{
        val( e.target.value.toString() );       
    }
    return (
        <nav className="d-flex flex-row justify-content-center ">
            <input className="form-control-lg"  type="text" id="searchBar" placeholder="Search..." onChange={e=>handle(e)} search="search"/>
        </nav>
    )
}
export default search;