import React from 'react'
import './card.css'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Card = ({c}) => {
  return (
  <>
     <Link to="/add" style={{color:'white',textDecoration : 'none'}}>Add Candidate</Link>
     <div className="container">
      
    <div className="cards">
     <div className="img_div">
         <img src={`uploads/${c.picture}`} alt="flower"/>
     </div>
     <div className="text">
         <h5>{c.title}</h5>
         <p>{c.description}</p>
         <small>{moment(c.createdAt).format('Do MM YYYY')}</small>
     </div>
    </div>
   </div>
  </>
    

  )
}

export default Card