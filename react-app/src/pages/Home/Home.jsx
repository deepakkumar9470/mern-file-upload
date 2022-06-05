import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './home.css'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card/Card'

const Home = () => {
  const navigate = useNavigate()
  const [candidates, setCandidates] = useState([])

  const fetchData = async () =>{
    try {
      const res = await axios.get('api/find')
      console.log(res.data)
      setCandidates(res.data)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
      fetchData()
  }, [])

  const deleteProfile = async (id) =>{
    try {
      await axios.delete(`api/prof/${id}`)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div>
      
       {candidates.map((c)=>{
         return(
         <Card c={c} key={c._id}/>
         
         )
       })}
    </div>
  )
}

export default Home