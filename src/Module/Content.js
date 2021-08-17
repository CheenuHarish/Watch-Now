import React,{useState,useEffect} from 'react'
import axios from "axios"

 const Content = () => {
    const url = "http://localhost:5000/info"
    const[data,setData] = useState([ ])
    const[no,setNo] = useState(1)
   
    useEffect(()=>{
        axios.get(`${url}/all/${no}`).then(res=>setData(res.data))
    },[no ])

    return (
        <div className="card p-4" Style="background-color:#DDDDDD">
            <div className="d-flex flex-row justify-content-end">
                <h3 className="m-3">Page No:{no} </h3>
                <button className="btn btn-outline-success m-3" onClick={e=>no>1?setNo(no-1):setNo(1)}>Previous</button>
                <button className="btn btn-outline-success m-3" onClick={e=>setNo(1)}>Home</button>
                <button className="btn btn-outline-success m-3" onClick={e=>setNo(no+1)}>Next</button>                    
            </div>
            <h3 className="text-center  pb-3 ">Movies</h3>
            <div className="d-flex flex-row flex-wrap justify-content-between">
                {data.map( (e,key=e._id) => {
                    return(
                    <div className="card  mb-3" Style="width: 18rem">
                        <img src={e.poster} className="card-img-top" alt="Not Found"/>
                        <div className="card-body">
                            <h5 className="card-title"> {e.title} </h5>
                            <p className="card-text"> {e.plot}</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">imdb Rating:{e.imdb.rating}</li>
                                <li className="list-group-item">Type: {e.type} </li>
                            </ul>
                            <a href="#top" className="btn btn-primary">Watch Now</a>
                        </div>
                    </div>)

                })}
            </div>
        </div>
    )
}
export default Content;