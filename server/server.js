import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB  from './config/db.js'
const PORT = process.env.PORT || 8000
import userRoute from './routes/user.js'


const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:  true}))



app.use('/api', userRoute)

//static Images Folder
app.use('/uploads', express.static('./uploads'))

app.get('/',(req,res)=>{
    res.send('hey file')
});



connectDB()


app.listen(PORT, ()=>{
    console.log(`Server started at port http://localhost:${PORT}`)
})

