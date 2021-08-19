import React,{useState,useEffect} from 'react'
import axios from "axios"

 const  Content = ({val2}) => {
    const url = "https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/movies-hmbtt/service/WatchMovies/incoming_webhook"
    const[data,setData] = useState({movies:[],total_results:0})
    const[no,setNo] = useState(0)    
   
    useEffect(()=>{
     axios.get(`${url}/WatchMovies?page=${no}&title=${val2}`).then(res=>setData(res.data))
     
    },[val2,no])

    return (
        <div className="card p-4" Style="background-color:#DDDDDD">
            <div className="navbar d-flex flex-row justify-content-end">
                <h4 className="m-3">Page No:{no}</h4>
                <h4 className="m-3">Total Results:{data.total_results}</h4>
                <button className="btn btn-outline-success m-3" onClick={e=>no>0?setNo(no-1):setNo(0)}>Previous</button>
                <button className="btn btn-outline-success m-3" onClick={e=>setNo(0)}>Home</button>
                <button className="btn btn-outline-success m-3" onClick={e=>setNo(no+1)}>Next</button>                    
            </div>
            <h3 className="text-center  pb-3 ">Movies</h3>
            
            <div className="d-flex flex-row flex-wrap justify-content-between">
                {
                data.movies.map( (e) => {
                    return(
                    <div className="card  mb-3" Style="width: 18rem">
                        <img src={e.poster} className="card-img-top" alt="Not Found"/>
                        <div className="card-body">
                            <h5 className="card-title"> {e.title} </h5>
                            <p className="card-text"> {e.plot}</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cast: {e.cast}</li>
                                <li className="list-group-item">Type:{e.type} </li>
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