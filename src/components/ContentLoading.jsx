import React from 'react'
import Spinner from './Spinner'
import "../index.css";


export default function ContentLoading() {
    return (
        <div>
            <div className="headContent" >
            <Spinner/>
          </div>
          <div className='contCards' >
             <div className="card cardVientos" style={{background:"yellow"}}>
             <Spinner/>
            </div>
            <div className="card cardVientos" style={{background:"green"}}>
            <Spinner/>
            </div>
            <div className="card cardVientos" style={{background:"red"}}>
            <Spinner/>
            </div>
        </div>
        </div>
    )
}
