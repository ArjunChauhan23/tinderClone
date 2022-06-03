import express from 'express'
import cors from 'cors'
import {v4 as uuidv4} from 'uuid'
import bcrpty from 'bcrypt'
import dbCon from "./helper/dbCon.js";
import userModal from "./modals/userModal.js";

dbCon()


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// Routes

app.post('/signup',async (req,  res) =>{
      const {email , password} = req.body;
      const GenUiD = uuidv4()
      const hashedPassword =  await bcrpty.hash(password, 11)

      try{

            const existUser = await userModal.findOne({email})
               if(existUser){
                   return res.status(409).send('user already exist please Login')
               }

               const data = await new userModal({
                   userId: GenUiD,
                   email:email,
                   password:hashedPassword
               }).save()

              res.status(201).json(data)
      }catch (err){
            console.log(err)
      }


})

app.listen(8080 , ()=>{
    console.log('ready')
})