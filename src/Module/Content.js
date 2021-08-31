import React,{useState,useEffect} from 'react'
import axios from "axios"

 const  Content = (props) => {
    const url = "https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/movies-hmbtt/service/WatchMovies/incoming_webhook"
    const[data,setData] = useState({movies:[],total_results:0})
    const[no,setNo] = useState(0)    
    const[get,setGet] = useState(" ")
    useEffect(()=>{
        axios.get(`${url}/WatchMovies?page=${no}&title=${get}`).then(res=>setData(res.data))
    },[get,no])

    const handle=(e)=>{
        let input = document.getElementById("searchBar")
        setGet(input.value)
        setNo(0)
    }
    const enter=(e)=>{
        if(e.key==='Enter'){
            handle(e)
        }
    }

    return (
        <>
         <nav className="d-flex flex-row justify-content-center ">
            <input className="form-control-lg"  type="text" id="searchBar" placeholder="Search..."  onKeyPress={e=>enter(e)} />
            <input className="btn btn-success searchBtn" type="submit" value="submit"  onClick={e=>handle(e)}/>
        </nav><br/>
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
                    <div className="card Card mb-3 " >
                        <div className="Card-Img">
                            <img src={e.poster} Style={"height:18rem"} className="card-img-top" alt="Not Found"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{e.title}</h5><hr/>
                            <p className="card-text">{e.plot}</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Cast:</strong> {e.cast}</li>
                                <li className="list-group-item"><strong>Type:</strong> {e.type} </li>
                            </ul>
                            <a href="#top" className="btn btn-primary m-1">More Info</a>
                            <a href="#top" className="btn btn-primary m-1">Edit</a>
                        </div>
                    </div>)

                })}
            </div>
        </div>
        </>
    )
}
export default Content;