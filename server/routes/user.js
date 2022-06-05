import express from "express";
const router = express.Router()
import UserModel from "../model/User.js";
import multer from "multer";
import path from 'path'


const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'uploads')
    },
    filename: (req, file, cb) =>{
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage: storage,
    fileFilter: function (req, file, cb){
    
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
  
        var extname = filetypes.test(path.extname(
                    file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }
      
        cb("Error: File upload only supports the "
                + "following filetypes - " + filetypes);
      } })


// @ /api/find
router.get('/find', async (req, res) => {
try {
    const prof = await UserModel.find({}).sort({_id : -1})
    res.send(prof)
} catch (error) {
    console.log(error)
}
});
router.delete('/prof/:id', async (req, res) => {
    try {
        await UserModel.findByIdAndRemove(req.params.id)
        res.status(200).json({msg : 'Profile deleted successfully'})
    } catch (error) {
        console.log(error)
    }
    });

//@ /api/user/file

router.post('/file', upload.single('image'), async (req,res)=>{
    try {
        const {title, description} = req.body
        const  saveuser = new UserModel({
            title: title,
            description: description,
            picture : req.file.filename
        })

        const newuser = await saveuser.save()
        res.status(201).json({msg : 'User Saved successfully', data: newuser });
    } catch (error) {
        console.log(error)
        res.status(400).send('An error occurred', error);
    }
   
})





export default router