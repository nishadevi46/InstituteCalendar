import User from '../model/user.js'
import bcrypt from 'bcrypt'
export const signupUser=async (request,response)=>{
    try {
         // const salt=await bcrypt.genSalt()
         const hashedPassword=await bcrypt.hash(request.body.password,10)
     const user={name:request.body.name,username:request.body.username,
        email:request.body.email,password:hashedPassword};
     const newUser=new User(user);
     await newUser.save();
     return response.status(200).json({msg:'signup successful'})
    } catch (error) {
        console.error(error);
     return response.status(500).json({msg:'error while signup the user'})
    }
}