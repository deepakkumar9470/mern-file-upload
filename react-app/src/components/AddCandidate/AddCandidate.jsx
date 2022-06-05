import React,{useEffect,useState} from 'react'

import './form.css'
import axios from 'axios'
import {toast } from 'react-toastify';
import { useNavigate,Link } from 'react-router-dom';

const AddCandidate = () => {
    const navigate = useNavigate()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [file, setFile] = useState(null)

    // const [{src, alt}, setImage] = useState({
    //   src : '',
    //   alt : 'Upload an Image'
    // })

  //  console.log(src)
  //  console.log(alt)

    const imageHandler=  (e) =>{
        if(e.target.files[0]){
          setFile(e.target.files[0])
        }
    }
    const submitHandler = async (e)=>{
        e.preventDefault()
        if(!title || !description || !file){
            toast.error('Please enter all fields..')
        }else{
            console.log(e)
            const formData = new FormData()
            formData.append('title', title)    
            formData.append('description', description)    
            formData.append('image', file)  
            await axios.post('api/file', formData)  
            toast.success('Image Uploaded successfully..')
            navigate('/')
        }      
    }
    

  return (
    <div className='form_div'>
          <Link to="/" style={{color:'white',textDecoration : 'none'}}>Go Back</Link>
        <form action="" onSubmit={submitHandler}  encType="multipart/form-data">
        <h2> Candidate Form</h2>
            <input 
               type="text" 
               name="title" 
               placeholder='Enter Title'
               value={title}
               onChange={(e)=>setTitle(e.target.value)} />
            <input 
               type="text" 
               name="description" 
               placeholder='Enter Description'
               value={description}
               onChange={(e)=>setDescription(e.target.value)} />

              <div className="file-input">
                <input
                  name="image"
                  onChange={imageHandler} 
                  type="file"
                  className="file"/>
                <label htmlFor="file">Select file</label>            
                
              </div>
                            
            <button type='submit'>Upload</button>
        </form>
    
                <img 
                  className="form-img__img-preview"  
                  src={(e)=>URL.createObjectURL(e.target.files[0])} 
                  alt='myiamge'/>
    </div>
  )
}

export default AddCandidate