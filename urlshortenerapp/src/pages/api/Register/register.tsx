import { MongoClient, Db } from 'mongodb';
import connectDB from '../../../../lib/mongoose'
import { NextApiRequest, NextApiResponse } from "next"
import User from '../../../../models/User'
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';



connectDB();

dotenv.config();


async function handler(req:NextApiRequest, res:NextApiResponse){
 
    if(req.method === "POST"){  
        const{email, name, password, retype} = req.body
        console.log(email, name)
        

       if(!name || typeof name !== 'string'){
        return res.status(422).json({message: 'Please provide a valid name'})
       }

       const userEmail = email.toLowerCase().trim();
       if(userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)){
         return res.status(422).json({ message: 'Please enter a correct email address' });
       }

       if(password !== retype){
        console.log('Passwords do not match ')
         return res.status(422).json({ message: 'Passwords do not match' });
       }
       const hashedPassword = await bcrypt.hash(password, 10);

       try {
        const existingUser = await User.findOne({email: userEmail});
        if(existingUser) {
            return res.status(400).json({})
        }

        const user = await User.create({name: name, email: userEmail, password: hashedPassword, role: 'user'})
         res.status(201).json({ success: true, data: user, message: 'Signed up! A verification email has been sent to your email address' });

       } catch(error) {
        res.status(500).json({ message: 'User not created', error});
       } 
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}

export default handler;