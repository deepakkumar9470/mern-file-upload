import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
    title: {type: String,  trim: true},
    description: {type: String,  trim: true},
    picture : {
        type: String,
        required: true
    }
   
}, {timestamps: true})



const UserModel = mongoose.model('user', UserSchema)

export default UserModel